import pol from "../../lib/mapa.js";
import utils from "../../lib/utils.js";
import pubsub from "../../lib/pubSub.Service.js";
import pageContainer from "../components/page.component";
import HTML from "./editor.page.txt";
import {getElevations, 
        Commands, 
        CreateDocument} from './commands';
import {lineChart} from "../components/lineChart.component"

const TOPICS = pubsub.TOPICS;
const GOOGLE_MAPS_API = 'https://maps.googleapis.com/maps/api/js?libraries=geometry&key=AIzaSyD-FEw7obgz5yH2a1OO84Xm1XzGoWFuWas';

export default function (ctx) {
  
  let pageWrapper     = pageContainer(ctx);
  let page            = {};
  let _document       = CreateDocument();
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
      __autoSave();
    }
  };

  function initEventListeners(target) {
    utils.addEventListeners(target, { 
      mostrarMensaje : () => { pubsub.publish(TOPICS.NOTIFICATION, { message : 'Imagen mostrada' }); },
      toggleMapType  : () => { _commandManager.executeCommad(new Commands.ChangeView()); },
      toggleMenu  : __toggleMenu,
      hideMenu    : __hideMenu,
      undo           : _commandManager.undo,
      redo           : _commandManager.redo,
      clear          : __clearAll,
      fitToBounds    : __fitToBounds,
      toggleProvile  : __toggleProfile,
      saveTrack      : __saveTrack,
      downloadTrack  : __downloadTrack,
      showOptions    : __showOptions
    });

    pol.$('[button]', target)
       .forEach( b => pageWrapper.addButton(b));

    // ================================================================================
    // Profile
    // ================================================================================
    let container = pol.$('[div-profile]', target)[0];
    _lineChart = lineChart({ Width   : 0, 
                             Height  : 0,
                             Padding : [8, 12, 15, 42]
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

                        let __normalize = (function(min, max, factor){
                          return (value) => factor * ((value - min) / (max - min));
                        })(0, 256, _document.points.length - 1);

                        if(e.sender.data === _lineChart.data){
                          var __from = Math.min(e.start, e.end);
                          var __to   = Math.max(e.start, e.end);
                          if(__to - __from > 10){
                            var a = __normalize(__from);
                            var b = __normalize(__to);
                            e.sender.data.configureView(__from, __to);
                            var __bounds = _document.points
                                                    .where( (p, i) => {
                                                      return i >= a && i <= b;
                                                    })
                                                    .reduce((b, p) => {
                                                      b.extend(p);
                                                      return b;
                                                    }, new google.maps.LatLngBounds());   
                            _document.map.fitBounds(__bounds);
                            __resize();              
                          }
                        }
                      }))
                      .append(ctx.subscribe('msg\\line_chart\\tap', (message, e) => { 
                        if(e.sender.data === _lineChart.data){
                          e.sender.data.resetView();
                          __fitToBounds();
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
          var __waypoints = JSON.parse(pol.config.read('LastTrack') || '[]');
          if (__waypoints.length > 1) {
            __waypoints.forEach( w => {
              var __marker = __createMarker(w.w);
              __marker.points = w.p.map( p => new google.maps.LatLng(p.lat, p.lng) );
              _document.waypoints.push(__addListeners(__marker));
            });
            __updatePolyline();
            __fitToBounds();
            var __props = JSON.parse(pol.config.read('LastTrack.document') || '{}');
            _document.name        = __props.name        || '';
            _document.description = __props.description || '';
          }
          _autoSaveTimerId = setInterval(__autoSave, 20000);
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
      pol.$('.map', page)[0].style.bottom = '181px';
      setTimeout(() => ctx.publish(TOPICS.WINDOW_RESIZE), 550);
    } else {
      __target.classList.add('w3-hide');
      pol.$('.map', page)[0].style.bottom = '40px';
    }
  }
  
  function __clearAll() {
    __hideMenu();
    new utils.DialogHelper() 
             .getDialogWrapper('dialog-container')        
             .setTitle('Borrar ruta')
             .setBody ('<p class="w3-center">¿Está seguro de eliminar la ruta?</p>')
             .show((dlg) => {
                dlg.close();
                while (_document.waypoints[0]) {
                  _document.waypoints.pop().setMap(null);
                }
                _document.name        = '',
                _document.description = '';

                _commandManager.clear();
                __updatePolyline();
                // ========================================================
                // Actualizar el perfil
                // ======================================================== 
                _lineChart.data = createProfileDocument({ distance : [], 
                                                          altitude : [] });
                ctx.publish(TOPICS.WINDOW_RESIZE); 
             });
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
    var __command = new Commands.AddWaypoint(__marker, __updatePolyline);
    _commandManager.executeCommad(__command);
    __addListeners(__marker); 
  }

  function __addListeners(marker) {
    google.maps.event.addListener(marker, 'dragstart', function(e){
      this._position = e.latLng;
    });
    google.maps.event.addListener(marker, 'dragend', function(event){
      _commandManager.executeCommad(new Commands.MoveWaypoint(this, __updatePolyline));
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
    getElevations(_document.points).then(items => {
      var __dist = 0;
      var __min = Number.POSITIVE_INFINITY;
      var __max = Number.NEGATIVE_INFINITY;
      var __totalAscent = 0;
      var __previosElevation = items[0].elevation;
      var data = _document.profileData = items.map( (d, i, arr) => {
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

  function __autoSave() {
    var __data = _document.waypoints.map( w => { return { w : w.getPosition(), 
                                                          p : w.points } });
    var __document = { name : _document.name, description : _document.description };
    pol.config.write('LastTrack', JSON.stringify(__data))
    pol.config.write('LastTrack.document', JSON.stringify(__document))
    console.log("AutoSaveMap");
  }

  function __createXml() {

    let __xml = '<gpx xmlns="http://www.topografix.com/GPX/1/1" ' + 
                      'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' + 
                      'xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd" ' + 
                      'version="1.1" ' + 
                      'creator="Rafael Castro Gómez">' + 
                      '<metadata />' + 
                      '<trk>' + 
                        '<name>{0}</name>' + 
                        '<desc>{1}</desc>' + 
                        '<trkseg>{2}</trkseg>' + 
                      '</trk>' +
                '</gpx>';

    let __normalize = (function(min, max, factor){
      return (value) => factor * ((value - min) / (max - min));
    })(0, _document.points.length, 256);

    return __xml.format(_document.name,
                        _document.description,
                        _document.points
                                  .map( (p, i) => {
                                    var __elev = _document.profileData[~~__normalize(i)]
                                                          .elevation;
                                    return ('<trkpt lat="{lat}" lon="{lng}">' +
                                              '<ele>{0}</ele>' +
                                            '</trkpt>').format(__elev, p)
                                  })
                                  .join(''), '');

  }

  function __saveTrack() {
    __hideMenu()
    console.log(__createXml());
  }
  
  function __downloadTrack() {
    __hideMenu();
    const link = document.createElement('a');
    link.download = 'track.gpx';
    link.href     = 'data:text/json;charset=utf-8,' + __createXml();
    document.body
            .appendChild(link)
            .click();
    //setTimeout(() => link.remove(), 1300);
  }

  let dropdownContent;
  function __toggleMenu(e) {
    dropdownContent = e.nextElementSibling;
    dropdownContent.classList.toggle('w3-show');
  }

  function __hideMenu(e) {
    if (dropdownContent){
      dropdownContent.classList.remove('w3-show');
    }
  }

  var _optionsDlg;
  function __showOptions() {
    __hideMenu(); 
    _optionsDlg = _optionsDlg || pol.$('track-options-dialog');
    pol.templates.fill(_optionsDlg, _document); 
    new utils.DialogHelper()
             .getDialogWrapper('dialog-container')
             .setTitle('Ruta')
             .setBody(_optionsDlg)
             .disableClickOutside()
             .show((dlg) => {
               _document.name        = pol.$('txt-nombre').value;
               _document.description = pol.$('txt-descripcion').value;
               dlg.close();
               __autoSave();
               var __txtFile = pol.$('txt-file');
               if (__txtFile.files.length == 1) {
                 __readGpxFile(pol.$('txt-file'))
                   .then(__loadGpx)
                   .catch( error => {
                     pubsub.publish(TOPICS.NOTIFICATION, { message : error });
                   });
               }
             });
  }

  function __loadGpx(xml) {

    _commandManager.clear();
    while (_document.waypoints[0]) {
      _document.waypoints.pop().setMap(null);
    }
    _document.name        = xml.querySelector('trk name') ? xml.querySelector('trk name').textContent : '';
    _document.description = xml.querySelector('trk desc') ? xml.querySelector('trk name').textContent : '';
    _document.points = pol.$('trkpt', xml)
                          .map( p => { 
                            return new google.maps.LatLng(parseFloat(p.getAttribute('lat')), 
                                                          parseFloat(p.getAttribute('lon')));
                          });

    var __chunk  = Math.floor(_document.points.length / 10);
    var __points = [];
    _document.points
             .forEach((p, i) => {
               var __marker;
               if (i == 0) {
                 __marker = __createMarker(p);
                 __marker.points = [];
                 _document.waypoints.push(__addListeners(__marker));
                 __points = [p];
                 return;
               }
               if (i == _document.points.length - 1){
                 __marker = __createMarker(p);
                 __marker.points = __points;
                 _document.waypoints.push(__addListeners(__marker));
                 return;
               }
               if (__points.length == __chunk) {
                  __marker = __createMarker(p);
                  __marker.points = __points.map(p => p);
                  _document.waypoints.push(__addListeners(__marker));
                  __points = [p];
                  return;
               }
               __points.push(p);
             });

    __fitToBounds();
    __updatePolyline();

  }

  function __readGpxFile(sender) {
    return new Promise((resolve, reject) => {
      (function(reader){
        reader.onload  = event => resolve(event.target.result.toXmlDocument());
        reader.onerror = reject;
        reader.readAsText(sender.files[0])      
      })(new FileReader());
    });

  }

  return component;

}
