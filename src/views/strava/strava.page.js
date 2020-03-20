import pol from "../../lib/mapa.js";
import utils from "../../lib/utils";
import {stravaApi} from "./strava"
import pageContainer from "../components/page.component";

import HTML from "./strava.page.txt";

export default function(ctx) {

  let pageWrapper = pageContainer(ctx);
  let page        = {};

  let component   = {
    root   : {},
    init   : function(){ },
    render : function(){
      this.root = pageWrapper.render();
      page = pol.build('div', HTML, 'firstElementChild');
      this.root.appendChild(page);
      return this.root;
    },
    mounted : function(){
      initAll();
    },
    dispose : function(){
      ctx.unsubscribe(subcription);
    }
  };
  
  function showAuthInfo() {
    page.innerHTML = `
      <div class= "w3-container w3-padding">
        <h2>Autorización</h2>
        <p style="text-indent:1em;">
          Antes de continuar debes conceder permisos a la aplicación para acceder a tus datos en <span class="w3-bold w3-italic">Strava</span>.
        </p>
        <p style="text-indent:1em;">
          El proceso de autorización es <span class="w3-bold w3-italic">seguro y se realiza en la web de Strava</span>.
          Este permiso puede ser revocado si lo estimas oportuno.
        </p>
        <div class="w3-container w3-margin-bottom w3-center">
          <button type="button" on-click="doAuth" class="w3-button w3-black">Autorizar</button>
          <button type="button" on-click="goHome" class="w3-button w3-black">Cancelar</button>
        </div>
      <div>`;
    utils.addEventListeners(page,
      {
        doAuth : () => stravaApi.redirectToAuthPage(),
        goHome : () => ctx.router.navigateTo('')
      }
    );
  }

  function initAll() {
    // ==========================================================================
    // Strava no está configurado
    // ==========================================================================
    if (!stravaApi.config.token_type) {
      ctx.publish('msg\\page_component\\update\\title', 'Strava - Autorización');
      return showAuthInfo();
    }
    ctx.publish('msg\\page_component\\update\\title', 'Strava - Actividades');
    // ==========================================================================
    // Cargar las actividades
    // ==========================================================================
    page.innerHTML = '<div class= "w3-container w3-padding w3.center">' +
                     '  <h2>Cargando actividades...</h2>' + 
                     '<div>';
    // ==========================================================================
    // Cargar los dato del atleta
    // ==========================================================================
    stravaApi.loadAthleteInfo()
             .then(result => {
                // ==============================================================
                // Cargar las actividades
                // ==============================================================
                return stravaApi.loadActivities()
             })
             .then(loadActivities)
             .catch( e => {
               page.innerHTML = ('<div class= "w3-container w3-padding">' +
                                 '  <h2>Error</h2>' + 
                                 '  <p>{message}</p>' + 
                                 '<div>').format(e);
             });
  }
  
  let subcription;
  function loadActivities(result) {
    let html        = require("./strava.t.activity.txt");
    let htmlElement = pol.build('div', html, true);
    let context = {
      athlete    : stravaApi.athlete,
      activities : result.map( a => {
        if (a.total_photo_count) {
          a.fotos = ' '.repeat(a.total_photo_count)
                       .split('')
                       .map( (e, i) => {
                         return 'img-{0}-{1}'.format(a.id, i); 
                       });
        }
        return a;
      }),
      fn: {
        toKilometers : meters => { return (meters / 1000).toLocaleString('es', { maximumFractionDigits: 2}); },
        formatSpeed  : value => { return (value * 3.6).toLocaleString('es', { maximumFractionDigits: 2}); },
        formatTime   : time => { return time.fixTime('T').replace('Z', ''); },
        formatDuration : seconds => {
          let h = Math.floor(seconds / 60 / 60);
          let m = Math.floor(seconds / 60) % 60;
          let s = Math.floor(seconds - m * 60) % 3600;
          let tokens = ['{0}h '.format(h), '{0}min'.format(m), '{0}s'.format(s)];
          if (h && m) return [tokens[0], tokens[1]].join(' ');
          if (h && s) return [tokens[0], tokens[2]].join(' ');
          if (m && s) return [tokens[1], tokens[2]].join(' ');
          if (m) return tokens[1];
          return tokens[0];
        },
        formatDate : time => {
          let hoy = new Date().format(); // dd/mm/yyyy
          let t   = time.fixDate('T')    // yyyy-mm-dd
                        .split('-')
                        .reverse()
                        .join('/');
          return hoy == t ? 'Hoy' : t;
        },
        showIf : (value, target, p)  => {
          let v = value === window ? '' : value;
          if(!v) target.style.display = 'none';
        },
        showIfGreather : (v1, v2, target) => {
          let v = v1 === window ? 0 : v1;
          if(~~v <= ~~v2) target.style.display = 'none';
        },
        formatId: (id, prefix, target) => {
          return '{0}-{1}'.format(prefix, id);
        },
        xif : (p1, p2, body, target) => {
          let v1 = p1 === window ? '' : p1;
          if(arguments.length == 1) {
            if(!v1) p2.style.display = 'none';
            return;
          }
          let v2 = p2 === window ? '' : p2;
          let _fn = new Function('a', 'b', 'return {0};'.format(body));
          target.style.display = _fn(v1, v2) ? '' : 'none';
        }
      }
    }
    // ==============================================================
    // Crear las actividades
    // ==============================================================
    page.innerHTML = '';
    page.appendChild(pol.templates.fill(htmlElement, context));
    page.onscroll = function() {
      ctx.publish('msg\\activities\\scroll', page);
    }; 
    // ================================================================
    // Referencias a controles con datos por cargar
    // ================================================================
    let bookmarks    = pol.$('[activity]', page);
    let descriptions = pol.$('[act-desc]', page).toDictionary('id');
    let photos       = pol.$('img[xfor]', page).toDictionary('id');
    let maps         = pol.$('[act-map-img]', page).toDictionary('id');
    // =====================================================================
    // Cargar más datos de las actividades
    // =====================================================================
    ctx.unsubscribe(subcription);
    subcription = ctx.subscribe('msg\\activities\\scroll', (message, w) => {
      loadMore(w.scrollTop, { bookmarks, 
                              descriptions, 
                              photos,
                              maps});
    });
    ctx.publish('msg\\activities\\scroll', { scrollTop : 100 });
  }

  function loadMore(value, controls) {
    controls.bookmarks
            .where( mark => mark.offsetTop - 500 < value  && !mark.tag )
            .map( mark => {
              mark.tag = true
              let id = mark.id.split('-')[1];
              stravaApi.loadActivity(id)
                       .then(result => {
                         //console.log(result);
                         // ==================================================================
                         // Descripción
                         // ==================================================================
                         let __id ='desc-{0}'.format(result.id);
                         if(result.description) {
                            controls.descriptions[__id].innerHTML = result.description || '';                           
                         }
                         // ==================================================================
                         // Fotos
                         // ==================================================================
                         if (result.total_photo_count) {
                           __id = 'img-{0}-{1}'.format(result.id, 0);
                           controls.photos[__id].src = result.photos.primary.urls[100];
                         }
                         // ==================================================================
                         // Mapas del recorrido
                         // ==================================================================
                         if (result.map.polyline) {
                           __id = 'map-{0}'.format(result.id);
                           
                           let _src = ('https://maps.googleapis.com/maps/api/staticmap?' +  
                                       'visible={start_latlng[0]},{start_latlng[1]}&' +
                                       'size=340x100&' + 
                                       'key=AIzaSyD-FEw7obgz5yH2' + '1OO84Xm1XzGoWFuWas&' + 
                                       'path=color:0x0000ff80|weight:2|enc:{map.polyline}'
                                      ).format(result);
                           controls.maps[__id]
                                   .appendChild( pol.build('img', { src       : _src, 
                                                                    className : 'w3-border',
                                                                    style     : { 
                                                                      width : '100%'
                                                                    }
                                                                  }));     
                         }


                         return stravaApi.loadActivityStream(result.id);
                       })
                       .then(result => {
                          //console.log(result);
                       })
            });
  }

  return component;

}
