import pol from "../../lib/mapa.js";
import utils from "../../lib/utils.js";
import {stravaApi} from "../strava/strava"
import pageContainer from "../components/page.component";

import HTML from "./page.txt";

export default function (ctx) {
  
  let pageWrapper = pageContainer(ctx);
  let page        = {};
  let schedule;
  let stravaCache = JSON.parse(localStorage.getItem('strava_cache')); 
  let viewDataSet;

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
    utils.addEventListeners(target, { });
    return target;
  }

  function initAll() {

    ctx.publish('msg\\page_component\\update\\title', '');

    stravaApi.loadAthleteInfo()
             .then(() => {
                pol.Include('./assets/js/schedule.js')
                   .then(() => {
                     schedule = Schedule({ Element        : page, 
                                           View           : 'Month',
                                           OnMonthChanged : onMonthChanged,
                                           OnDayChanged   : onDayChanged });
                     pageWrapper.addButton(schedule.Buttons.Day);
                     pageWrapper.addButton(schedule.Buttons.Agenda);
                     pageWrapper.addButton(schedule.Buttons.Month);
                   });
             });
  }

  function onMonthChanged(sender, date) {
    // =========================================================================
    // Obtener las actividades entre las fechas mostradas
    // =========================================================================
    let f1US = sender.FirstDate.format('yyyymmdd');
    let f2US = sender.LastDate.format('yyyymmdd');
    viewDataSet = Object.keys(stravaCache.activities)
                        .map(id => { 
                          let activity = stravaCache.activities[id];
                          return { fechaUS : activity.start_date
                                                      .fixDate('T')
                                                      .replaceAll('-', '/'), 
                                    id    : activity.id };
                        })
                        .where( a => {
                            return f1US <= a.fechaUS && f2US >= a.fechaUS;
                        });
    sender.ClearMonthView();
    // =========================================================================
    // Contenido mensual
    // =========================================================================
    sender.LoadMonthView((() => {
      return viewDataSet.reduce( 
        function(nodes, activity){
          let fechaES = activity.fechaUS
                                .split('/')
                                .reverse()
                                .join('/');
          let content = pol.build('div', { 
            innerHTML : '<i class="fa fa-bicycle"></i>',
            className : 'w3-badge w3-red w3-display-middle w3-large',
            id        : 'activity_{0}'.format(fechaES),
            onclick   : function(){ 
              sender.ShowDayView(this.id.split('_')[1]);
              sender.Buttons.Agenda.click();
            }
          });

          nodes[fechaES] = [];
          nodes[fechaES].push(content);
          return nodes;
        }, {});

    })()); 
    onDayChanged(sender, sender.Date);
  }

  function onDayChanged(sender, date) {
    sender.ClearDayView();
    sender.ClearAgendaView();
    let dateUS = date.format('yyyymmdd');
    // =======================================================================
    // Contenido dia
    // =======================================================================
    let d_template = require("./page.t.dia.txt");
    sender.LoadDayView((() => {
      let top = -50;
      return [...Array(24).keys()].reduce( (nodes, e, i) => {
        if(Math.random() * 100 < 80) return nodes;
        if(i > 29) return nodes;
        let context = {
          hora       : i.toString(),
          dimension  : pol.apply( { top : '{0}px'.format(top += 60) },
                                  sender.MeasureDayItem( { start : i * 60, 
                                                           end   : i * 60 + 360 }))
        }
        let element = pol.build('div', d_template.format(context), true);
        nodes.push(element);
        return nodes;
      }, []);
    })());
    // =======================================================================
    // Actividades del día
    // =======================================================================
    let html        = require("./page.t.agenda.txt");
    let htmlElement = pol.build('div', html, true);

    let context = {
      athlete    : stravaApi.athlete,
      activities : viewDataSet.where(a => a.fechaUS == dateUS)
                              .map( a => stravaCache.activities[a.id]),
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
        }
      }
    }
    // ======================================================================
    // Crear las actividades del día
    // ======================================================================
    sender.LoadAgendaView((() => {
      return pol.toArray(pol.templates.fill(htmlElement, context).childNodes)
                .where( n => n.nodeType != 3)
                .map( node => {
                  // ========================================================
                  // Mapa del recorrido
                  // ========================================================
                  let img = pol.$('img[act-img]', node)[0];
                  let id  = img.id.split('-')[1];
                  let activity = stravaCache.activities[id];
                  if (activity.map.polyline) {                    
                    img.src = stravaApi.GOOGLE_STATIC_MAP.format(activity);  
                  }
                  return node;
                });
    })());  
  }

  return component;

}
