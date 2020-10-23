import pol from "../../lib/mapa.js";
import utils from "../../lib/utils.js";
import pubsub from "../../lib/pubSub.Service.js";
import pageContainer from "../components/page.component";
import HTML from "./editor.page.txt";
import editor from './commands';
import {lineChart} from "../components/lineChart.component"

const TOPICS = pubsub.TOPICS;
const GOOGLE_MAPS_API = 'https://maps.googleapis.com/maps/api/js?libraries=geometry&key=AIzaSyD-FEw7obgz5yH2a1OO84Xm1XzGoWFuWas';

export default function (ctx) {
  
  let pageWrapper     = pageContainer(ctx);
  let page            = {};
  let _document       = editor.CreateDocument();
  let _commandManager = utils.CommandManager(_document);
  let _lineChart      = {};
  let _autoSaveTimerId = 0;
  let resizeSubcriptions = [];

  let component   = {
    root   : {},
    init   : function(){ },
    render : function(){
      this.root = pageWrapper.render();
      page = pol.build('div', HTML, 'firstElementChild');
      this.root.appendChild(initEventListeners(page));
      return this.root;
    },
    mounted : function(){
      initAll();
    },
    dispose : function(){
      resizeSubcriptions.forEach(ctx.unsubscribe);
      clearInterval(_autoSaveTimerId);
      __saveMap();
    }
  };

  function initEventListeners(target) {
    utils.addEventListeners(target, { 
      mostrarMensaje : () => { pubsub.publish(TOPICS.NOTIFICATION, { message : 'Imagen mostrada' }); },
      toggleMapType  : () => { _commandManager.executeCommad(new editor.Commands.ChangeView()); },
      undo           : _commandManager.undo,
      redo           : _commandManager.redo,
      clear          : __clearAll,
      fitToBounds    : __fitToBounds,
      toggleProvile  : __toggleProfile
    });

    pol.$('[button]', target)
       .forEach( b => pageWrapper.addButton(b));

    // ================================================================================
    // Profile
    // ================================================================================
    let container = pol.$('[div-profile]', target)[0];
    _lineChart = lineChart({ Width   : 0, 
                             Height  : 0,
                             Padding : [8, 42, 15, 42]
                           });
    _lineChart.canvas.style.width  = '100%';
    _lineChart.canvas.style.height = '100%';
    container.appendChild(_lineChart.canvas);

    function __resize() {
      _lineChart.Resize(container.clientWidth - 32, 
                        container.clientHeight - 32); 
    }
    resizeSubcriptions.append(ctx.subscribe(ctx.topics.WINDOW_RESIZE, __resize))
                      .append(ctx.subscribe('msg\\this_page\\view\\changed', __resize))
                      .append(ctx.subscribe('msg\\line_chart\\range', (message, e) => {
                        if(e.sender.data === _lineChart.data){
                          var __from = Math.min(e.start, e.end);
                          var __to   = Math.max(e.start, e.end);
                          if(__to - __from > 10){
                            e.sender.data.configureView(__from, __to);
                            __resize();              
                          }
                        }
                      }))
                      .append(ctx.subscribe('msg\\line_chart\\tap', (message, e) => { 
                        if(e.sender.data === _lineChart.data){
                          e.sender.data.resetView();
                          __resize();
                        }
                      }));
    return target;

  }

  function createProfileDocument(dataset){

    function __getRange(array, start, end){
      var __res     = { min : Number.POSITIVE_INFINITY, max : Number.NEGATIVE_INFINITY }; 
      var __current = start
      while(__current < end){
        __res.min = Math.min(__res.min, array[__current]);
        __res.max = Math.max(__res.max, array[__current]);
        __current++;
      }
      __res.min = .9 * __res.min;
      __res.range = __res.max - __res.min;
      return __res;
    }

    let __document = { 
      length     : dataset.distance.length,
      distances  : dataset.distance,
      altitude   : dataset.altitude,
      offset     : 0.0,
      view       : {},
      getRange   : __getRange,
      configureView : function (start, end){
        this.view.start   = start;
        this.view.end     = end; 
        this.view.x       = {}; 
        this.view.x.max   = this.distances[end];
        this.view.x.min   = this.distances[start];
        this.view.x.range = this.view.x.max - this.view.x.min;
        this.view.y       = this.getRange(this.altitude, start, end);
        // =============================================================
        // Configurar distintas series de datos
        // =============================================================
        this.series = [];
        this.series.push({ name        : 'altitude',
                           unit        : 'm',
                           view        : this.view.y,
                           fillStyle   : 'rgba(0,0,125,.8)', 
                           lineWidth   : 1, 
                           strokeStyle : 'rgba(0,0,0,.8)',
                           ratio       : 100.0 / this.view.y.range });
        return this;
      },
      resetView: function () {
        return this.configureView(0, this.length - 1);
      }
    };

    return __document.resetView();

  }

  function initAll() { 
    pubsub.publish('msg\\page_component\\update\\title', 'Cargando...');
    pol.Include(GOOGLE_MAPS_API)
       .then( () => {
          pubsub.publish('msg\\page_component\\update\\title', 'Rutas');
          // ===========================================================================
          // Init GoogleMaps
          // ===========================================================================
          _document.map = new google.maps.Map( 
            pol.$('googleMap'), 
            { 
              center           : { lat : 40.1805, lng : -4.8902 },
              zoom             : 12,
              mapTypeId        : google.maps.MapTypeId.ROADMAP,
              disableDefaultUI : true
            }
          );        
          // ===========================================================================
          // Init polyline, events, ...
          // ===========================================================================
          _document.track = new google.maps.Polyline({ path          : [],
                                                       strokeColor   : 'blue',
	                                                     strokeOpacity : 0.8,
	                                                     strokeWeight  : 3,
                                                       map           : _document.map });
          google.maps.event.addDomListener(window, 'resize', __resize);
          google.maps.event.addListener(_document.map, 'click', __addMark);       
          // ===========================================================================
          // Load last track
          // ===========================================================================
          var __waypoints = JSON.parse(localStorage.getItem('LastTrack') || '[]');
          if (__waypoints.length > 1) {
            __waypoints.forEach( w => {
              var __marker = __createMarker(w.w);
              __marker.points = w.p.map( p => new google.maps.LatLng(p.lat, p.lng) );
              _document.waypoints.push(__addListeners(__marker));
            });
            __updatePolyline();
            __fitToBounds();
          }
          _autoSaveTimerId = setInterval(__saveMap, 20000);
       });
  }

  function __fitToBounds() {
    var __bounds = _document.points
                            .reduce((b, p) => {
                              b.extend(p);
                              return b;
                            }, new google.maps.LatLngBounds());   
    _document.map.fitBounds(__bounds);
  }

  function __toggleProfile() {
    var __target = pol.$('[div-profile]', page)[0];
    if (__target.classList.contains('w3-hide')) {
      __target.classList.remove('w3-hide');
      ctx.publish(TOPICS.WINDOW_RESIZE);
    } else {
      __target.classList.add('w3-hide');
    }
  }
  
  function __clearAll() {
    while (_document.waypoints[0]) {
      _document.waypoints.pop().setMap(null);
    }
    _commandManager.clear();
    __updatePolyline();
    // ========================================================
    // Actualizar el perfil
    // ======================================================== 
    _lineChart.data = createProfileDocument({ distance : [], 
                                              altitude : [] });
    ctx.publish(TOPICS.WINDOW_RESIZE);
  }

  function __createMarker(latLng) {
    const __icon = { path          : google.maps.SymbolPath.CIRCLE,
                     scale         : 6,
                     fillColor     : "white",
                     fillOpacity   : 1,
                     strokeWeight  : 2,
                     strokeOpacity : 1,
                     strokeColor   :"gray",
                     rotation      : 30 };
    return new google.maps.Marker({ icon      : __icon, 
                                    position  : latLng, 
                                    map       : _document.map,
                                    draggable : true });
  }

  function __addMark(event){ 
    var __marker  = __createMarker(event.latLng);
    var __command = new editor.Commands.AddWaypoint(__marker, __updatePolyline);
    _commandManager.executeCommad(__command);
    __addListeners(__marker); 
  }

  function __addListeners(marker) {
    google.maps.event.addListener(marker, 'dragstart', function(e){
      this._position = e.latLng;
    });
    google.maps.event.addListener(marker, 'dragend', function(event){
      _commandManager.executeCommad(new editor.Commands.MoveWaypoint(this, __updatePolyline));
    });
    return marker;
  }

  function __resize(){
    var __center = _document.map.getCenter();
    google.maps.event.trigger(_document.map, "resize");
    _document.map.setCenter(__center);        
  }

  function __updatePolyline() {
    _document.points = _document.waypoints
                                .map( w => w.points )
                                .reduce((a, points) => {
                                  return a.concat(points);
                                }, []);
    _document.track.setPath(_document.points);
    var distance = (google.maps
                          .geometry.spherical
                          .computeLength(_document.track.getPath().getArray()) / 1000)
                          .toFixed(2)
                          .replace('.', ',');
    pubsub.publish('map\\distance', distance);
    __updateElevation();
  }

  function __updateElevation() {
    if (_document.points < 2) {
      pubsub.publish('map\\totalAscent', "0");
      return;
    }
    editor.getElevations(_document.points)
          .then(items => {
            var __dist = 0;
            var __min = Number.POSITIVE_INFINITY;
            var __max = Number.NEGATIVE_INFINITY;
            var __totalAscent = 0;
            var __previosElevation = items[0].elevation;
            var data = items.map( (d, i, arr) => {
              __min = Math.min(__min, d.elevation);
              __max = Math.max(__max, d.elevation)
              var __offset = d.elevation - __previosElevation;
              __totalAscent += __offset > 0.5 ? __offset : 0; 
              __previosElevation = d.elevation;
              __dist += i==0 ? 0.0 
                             : google.maps
                                     .geometry
                                     .spherical
                                     .computeDistanceBetween(arr[i - 1].location, 
                                                             d.location)
              return { 
                elevation : d.elevation, 
                distance : __dist 
              };
            });

            data.totaDistance = __dist;
            data.lowestPoint  = __min;
            data.highestPoint = __max;
            data.totalAscent  = __totalAscent;
            
            pubsub.publish('map\\totalAscent', __totalAscent.toFixed());
            // =================================================================================
            // Actualizar el perfil
            // ================================================================================= 
            _lineChart.data = createProfileDocument({ distance : data.map( i => i.distance), 
                                                      altitude : data.map( i => i.elevation) });
            ctx.publish(TOPICS.WINDOW_RESIZE);

          });
  }

  function __saveMap() {
    var __data = _document.waypoints.map( w => { return { w : w.getPosition(), 
                                                          p : w.points } });
    localStorage.setItem('LastTrack', JSON.stringify(__data))
    console.log("AutoSaveMap");
  }

  return component;

}
