import pol from "../../lib/mapa.js";
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
    }
  };

  function initAll() {
    ctx.publish('msg\\page_component\\update\\title', 'Strava');
    // ======================================================================
    // Strava no está configurado
    // ======================================================================
    if (!stravaApi.config.token_type) {
      stravaApi.redirectToAuthPage();
      return;
    }
    // ======================================================================
    // Cargar las actividades
    // ======================================================================
    page.innerHTML = '<div class= "w3-container w3-padding w3.center">' +
                     '  Cargando actividades...' + 
                     '<div>';
    stravaApi.loadActivities()
             .then(loadActivities)
             .catch( e => {
               ctx.publish(ctx.topics.NOTIFICATION, { message : e.message });
             });
  }
  
  function loadActivities(result) {
    let html        = require("./strava.t.activity.txt");
    let htmlElement = pol.build('div', html, true);
    let context = {
      activities : result,
      fn: {
        toKilometers   : meters => {
          return (meters / 1000).toLocaleString('es', { maximumFractionDigits: 2}); 
        },
        formatSpeed : v => {
          return (v * 3.6).toLocaleString('es', { maximumFractionDigits: 2});
        },
        formatDuration : seconds => {
          let h = '' + Math.floor(seconds / 60 / 60);
          let m = '' + Math.floor(seconds / 60) % 60;
          let s = '' + Math.floor(seconds - m * 60);
          return h == '0' ? '{0|paddingLeft,00}m {1|paddingLeft,00}s'.format(m, s) :
                            '{0}h {1|paddingLeft,00}m'.format(h, m)
        },
        formatTime : time => {
          return time.fixTime('T').replace('Z', '');
        },
        formatDate : time => {
          let hoy = new Date().format(); // dd/mm/yyyy
          let t   = time.fixDate('T')    // yyyy-mm-dd
                        .split('-')
                        .reverse()
                        .join('/');
          return hoy == t ? 'Hoy' : t;
        },
        showIf : (value, target)  => {
          let v = value === window ? '' : value;
          if(!v) target.style.display = 'none';
        }
      }
    }
    page.innerHTML = '';
    page.appendChild(pol.templates.fill(htmlElement, context));
    console.log(result);
  }

  return component;

}
