import pol from "../../lib/mapa.js";
import utils from "../../lib/utils.js";
import {stravaApi} from "./strava";
import pageContainer from "../components/page.component";

import HTML from "./config.page.txt";

export default function (ctx) {
  
  let pageWrapper = pageContainer(ctx);
  let page        = {};
  let inputs      = [];

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
    }
  };

  function initEventListeners(target) {
    utils.addEventListeners(target, {
      reset        : resetConfiguration,
      requestZones : loadZones,
      saveZones    : saveZones
    });
    return target;
  }

  function initAll(message) {
    
    ctx.publish('msg\\page_component\\update\\title', 'Strava - Configuración');

    let default_zones = [ 
      {min : '', max : ''}, 
      {min : '', max : ''}, 
      {min : '', max : ''}, 
      {min : '', max : ''},
      {min : '', max : '' }
    ];

    let context = {
      zones : stravaApi.config.athlete.zones ? stravaApi.config.athlete.zones.heart_rate.zones : default_zones,
      fn    : {
        formatId: (id, prefix, target) => {
          return '{0}-{1}'.format(prefix, id);
        },
        formatZone : (v) => v + 1 
      }
    }
    pol.templates.fill(page, context);
    inputs = pol.$('form input', page);
    inputs[0].disabled = true;
    inputs[0].value    = '';
    inputs.lastItem().disabled = true;
    inputs.lastItem().value = '';
  }

  function resetConfiguration() {
    stravaApi.resetConfig();
    inputs.forEach( i => i.value = '');
    ctx.router.navigateTo('');
  }

  function saveZones() {
    let zones = [ 
      {min : 0,               max : inputs[1].value}, 
      {min : inputs[2].value, max : inputs[3].value}, 
      {min : inputs[4].value, max : inputs[5].value}, 
      {min : inputs[5].value, max : inputs[7].value},
      {min : inputs[8].value, max : -1 }
    ];
    stravaApi.config.athlete.zones = { heart_rate : { zones : zones } };
    stravaApi.saveConfig();
  }

  function loadZones() {
    stravaApi.loadAthleteZones(false)
             .then( result => {
               result.heart_rate
                     .zones
                     .forEach( (z, i) => {
                       let base = i * 2;
                       if(base > 0) inputs[base].value = z.min;
                       inputs[base + 1].value = z.max;                   
                     });
               inputs.lastItem().value = '';
             })
             .catch( e => {
               ctx.publish(ctx.topics.NOTIFICATION, { message : e.message });
             });
  }

  return component;

}
