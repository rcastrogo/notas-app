import pol from "../../lib/mapa.js";
import utils from "../../lib/utils";
import {stravaApi, speedToWatts} from "./strava"
import pageContainer from "../components/page.component";

import HTML from "./strava.page.txt";

// =====================
// Control última carga
// =====================
let recents       = [];
let pageScrollTop = 0;
let pageOffset    = 1;

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
      stravaApi.activitiesSummary()
               .then(summary => summary.save());
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
    // Botón para la página de configuración
    // ==========================================================================
    pageWrapper.addButton( 
      pol.build('button', {
        className : 'pol-btn w3-button w3-black w3-right',
        innerHTML : '<i class="fa fa-gear"></i>',
        onclick   : () => ctx.router.navigateTo('strava/config')
      }));
    // ==========================================================================
    // Botón para ir a la agenda
    // ==========================================================================
    pageWrapper.addButton( 
      pol.build('button', {
        className : 'pol-btn w3-button w3-black w3-right',
        innerHTML : '<i class="fa fa-calendar"></i>',
        onclick   : () => ctx.router.navigateTo('schedule')
      }));
    // ==========================================================================
    // Cargar las actividades
    // ==========================================================================
    page.innerHTML = `
      <div class="w3-margin w3-white w3-border w3-round w3-animate-left">
        <p class="w3-center" style="overflow:hidden;">
          <i class="fa fa-2x fa-cog fa-spin"></i><br>Cargando actividades...
        </p>
      </div>`;

    // ==========================================================================
    // Cargar los datos del atleta
    // ==========================================================================
    stravaApi.loadAthleteInfo()
             // ==============================================================
             // Cargar las n últimas actividades
             // ==============================================================
             .then(result => {
               // =========================================================
               // Control última carga
               // =========================================================
               let previous = ctx.router.previous.name;
               if (['strava-config', 
                    'schedule'].includes(previous)) {
                 pageOffset--;
                 return recents.map( id => stravaApi.cache.activities[id] )
                               .where( a => a);
               }
               // =========================================================
               // Cargar normalmente
               // =========================================================
               pageScrollTop = 0;
               pageOffset = 1;
               return stravaApi.loadActivities({ page : pageOffset,
                                                 rows : 5});
             })
             // ==============================================================
             // Cargar el resumen de las actividades
             // ==============================================================
             .then( result => {
               return stravaApi.activitiesSummary()
                               .then(summary => summary.add(result));
             })
             .then(result => {
               page.innerHTML = `<div activity-container>
                                	<div id="load-more-mark" 
                                       class="w3-margin w3-white w3-border w3-round"  
                                       style="min-height:2px">
                                  </div>
                                '</div>`;
               page.onscroll = () => ctx.publish('msg\\activities\\scroll', page);
               recents = [];
               loadActivities(result);
             })
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

        // ====================================
        // Control última carga
        // ====================================
        recents.push(a.id);
        if(!stravaApi.cache.activities[a.id]){
          stravaApi.cache.activities[a.id] = a;
        }

        if (a.total_photo_count) {
          a.fotos = ' '.repeat(a.total_photo_count)
                       .split('')
                       .map( (e, i) => {
                         return 'img-{0}-{1}'.format(a.id, i); 
                       });
        }
        if (a.trainer && a.athlete.id == 8955526) {
          a.average_watts = speedToWatts(a.average_speed * 3.6);
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
    // ===================================================
    // Crear las actividades
    // ===================================================
    pol.templates.fill(htmlElement, context)
    // ===================================================
    // Configurar la carga de más datos
    // ===================================================
    configureLazyLoad(htmlElement);
    // ===================================================
    // Añadir las actividades al contenedor principal
    // ===================================================
    let loadMark = pol.$('load-more-mark');
    pol.toArray(htmlElement.childNodes)
       .forEach( n => {
         if(n.nodeType == 3) return;
         loadMark.insertAdjacentElement('beforebegin', n);
       });
    pageOffset++;

    // ============================
    // Control última carga
    // ============================
    page.scrollTop = pageScrollTop;

  }

  function configureLazyLoad(container) {
    // =======================================================================
    // Referencias a controles con datos por cargar
    // =======================================================================
    let bookmarks    = pol.$('[activity]', container);
    let descriptions = pol.$('[act-desc]', container).toDictionary('id');
    let photos       = pol.$('img[xfor]', container).toDictionary('id');
    let maps         = pol.$('[act-map-img]', container).toDictionary('id');
    let loadMark     = pol.$('load-more-mark');
    // =======================================================================
    // Cargar más datos de las actividades
    // =======================================================================
    ctx.unsubscribe(subcription);
    subcription = ctx.subscribe('msg\\activities\\scroll', (message, w) => {
      pageScrollTop = w.scrollTop;
      loadMoreData(w.scrollTop, { bookmarks, 
                                  descriptions, 
                                  photos,
                                  maps,
                                  loadMark});
    });
    loadMark.innerHTML = '';
    ctx.publish('msg\\activities\\scroll', { scrollTop : 100 });
  }

  // =========================================================================
  // Cargar las siguiente n actividades
  // =========================================================================
  function loadNextChunk() {
    stravaApi.loadActivities({ page : pageOffset, rows : 5})
             // ==============================================================
             // Cargar el resumen de las actividades
             // ==============================================================
             .then( result => {
               return stravaApi.activitiesSummary()
                               .then(summary => summary.add(result));
             })
             .then(result => {
               loadActivities(result);  
             })
             .catch(e => {
                ctx.publish(ctx.topics.NOTIFICATION, { message : e.message });
             });
  }

  function loadMoreData(value, controls) {
    const HEIGHT = 500;
    // ===========================================================================================
    // Determinar si es necesario cargar más actividades
    // ===========================================================================================
    if(controls.loadMark.innerHTML == '' && controls.loadMark.offsetTop < value + 1.5 * HEIGHT){
      controls.loadMark.innerHTML = `
        <p class="w3-center" style="overflow:hidden;">
          <i class="fa fa-2x fa-cog fa-spin"></i><br>Cargando actividades...
        </p>`;
      return loadNextChunk();
    }
    // ===========================================================================================
    // Determinar qué actividades no tienen cargados todos sus datos
    // ===========================================================================================    
    controls.bookmarks
            .where( mark => mark.offsetTop - HEIGHT < value  && !mark.loaded )
            .map( mark => {
              mark.loaded = true
              let id = mark.id.split('-')[1];
              stravaApi.loadActivity(id)
                       .then(result => {
                         //console.log(result);
                         // ==================================================================
                         // Descripción
                         // ==================================================================                  
                         if(result.description) {
                            let __id ='desc-{0}'.format(result.id);
                            controls.descriptions[__id].innerHTML = result.description || '';                           
                         }
                         // ==================================================================
                         // Fotos
                         // ==================================================================
                         if (result.total_photo_count) {
                           let __id = 'img-{0}-{1}'.format(result.id, 0);
                           controls.photos[__id].src = result.photos.primary.urls[100];
                         }
                         // ==================================================================
                         // Mapas del recorrido
                         // ==================================================================
                         if (result.map.summary_polyline) { 
                           let _src = stravaApi.GOOGLE_STATIC_MAP.format(result);
                           let __id = 'map-{0}'.format(result.id);
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
