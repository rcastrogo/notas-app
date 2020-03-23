﻿import pol from "../../lib/mapa.js";
import utils from "../../lib/utils.js";
import {stravaApi, speedToWatts} from "../strava/strava"
import {lineChart} from "../components/lineChart.component"
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
      this.root.appendChild(page);
      return this.root;
    },
    mounted : function(){
      initAll();
    }
  };

  function initAll() {
    ctx.publish('msg\\page_component\\update\\title', 'Strava - Resumen');
    stravaApi.loadAthleteInfo()
             .then(() => {
                pol.Include('./assets/js/schedule.js')
                   .then(() => {
                     schedule = Schedule({ Element        : page, 
                                           View           : 'Month',
                                           OnMonthChanged : onMonthChanged,
                                           OnDayChanged   : onDayChanged });
                     schedule.Buttons.Month.innerHTML = '<i class="fa fa-calendar"></i>';
                     schedule.Buttons.Agenda.innerHTML = '<i class="fa fa-bicycle"></i>';
                     schedule.Buttons.Day.innerHTML = '<i class="fa fa-line-chart"></i>';
                     pageWrapper.addButton(schedule.Buttons.Day);
                     pageWrapper.addButton(schedule.Buttons.Agenda);
                     pageWrapper.addButton(schedule.Buttons.Month);
                   });
             });
  }

  function onMonthChanged(sender, date) {
    // =====================================================================
    // Obtener las actividades entre las fechas mostradas
    // =====================================================================
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
    // ==============================================================
    // Contenido mensual
    // ==============================================================
    sender.LoadMonthView((() => {
      return viewDataSet.reduce((nodes, activity) => {
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
          // ========================================================
          // Numero de actividades en el día
          // ========================================================
          nodes[fechaES] = nodes[fechaES] || [];
          if(nodes[fechaES].length == 0){
            content.count = 1;
            nodes[fechaES].push(content);
          } else {
            nodes[fechaES][0].count++;
          }
          nodes[fechaES][0].innerHTML = nodes[fechaES][0].count;
          return nodes;
        }, {});

    })()); 
    onDayChanged(sender, sender.Date);
  }

  let resizeSubcriptions = [];

  function onDayChanged(sender, date) {
    sender.ClearDayView();
    sender.ClearAgendaView();
    let dateUS = date.format('yyyymmdd');

    // =======================================================================
    // Contenido dia
    // =======================================================================
    sender.LoadDayView((() => {

      function minutesFromDate(time) {
        let [horas, minutos] = time.fixTime('T').split(':');
        return ~~horas * 60 + ~~minutos;
      }

      // =======================================================================
      // Actividades del día
      // =======================================================================
      let activities = viewDataSet.where(a => a.fechaUS == dateUS)
                                  .map( a => stravaCache.activities[a.id]);
      // =======================================================================
      // Configurar hora de inicio y de fin la vista 
      // =======================================================================
      if (activities.length == 0) {
        sender.ConfigureView({ min : 0, max : 24 * 60, step : 3 * 60 });
      } else{
        let view_options = activities.map( a => {
                                let start = minutesFromDate(a.start_date_local);
                                // =========================================
                                // Rango en minutos
                                // =========================================
                                a.chart = { 
                                  start : start,
                                  end   : start + ~~(a.elapsed_time / 60)
                                }
                                // =========================================
                                // Rango en horas
                                // =========================================                                
                                return { 
                                  start : ~~(start/60), 
                                  end   : Math.ceil(a.chart.end/60)
                                };
                              })
                              .reduce((a, value) => {
                                if(value.start < a.min) a.min = value.start;
                                if(value.end > a.max) a.max = value.end;
                                let diff = value.end - value.start;
                                if(diff <= 24) a.step = 120;
                                if(diff <= 12) a.step = 60;
                                if(diff <= 7) a.step = 30;
                                if(diff <= 3) a.step = 10;
                                if(diff <= 2) a.step = 5;
                                return a;
                              }, { min : 24, max : 0, step : 30 });
        sender.ConfigureView({ 
          min  : view_options.min * 60,
          max  : view_options.max * 60,
          step : view_options.step
        });
      }
      // ================================================================================
      // Generación del array de HTMLElement
      // ================================================================================
      let d_template = require("./page.t.dia.txt");
      let top        = -10;
      return activities.reduce((nodes, activity, i) => {
        // ===============================================================================
        // Posición y tamaño de la actividad
        // ===============================================================================
        let start = minutesFromDate(activity.start_date_local);
        let context = {
          activity : activity,
          top : '{0}px'.format(top += 60),
          pos : sender.MeasureDayItem( { start : start, 
                                         end   : start + ~~(activity.elapsed_time / 60) })
        }
        let element = pol.build('div', d_template.format(context), false);
        pol.toArray(element.childNodes)
                .where( n => n.nodeType != 3)
                .map( node => {
                  nodes.push(node);
                });

        return nodes;
      }, []);

    })());

    // ==========================================================================================================
    // Crear las actividades del día
    // ==========================================================================================================
    sender.LoadAgendaView((() => {

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
          },
          googleStaticMapUrl: (activity) => {
            return activity.map.polyline ? stravaApi.GOOGLE_STATIC_MAP.format(activity) 
                                         : '';       
          }
        }
      }

      return pol.toArray(pol.templates.fill(htmlElement, context).childNodes)
                .where( n => n.nodeType != 3)
                .map( node => {
                  let container = pol.$('[div-profile]', node)[0];
                  container.appendChild( 
                    lineChart({ Width   : 0, 
                                Height  : 0,
                                Padding : [10, 20, 20, 50]
                              }).canvas
                  );               
                  return node;
                });
    })(),
    // ========================================================
    // Configurar los perfiles(canvas) una vez añadidos al DOM
    // ========================================================
    (container) => {
      // ==================================================
      // Cancelar las subcripciones existentes (RESIZE)
      // ==================================================
      resizeSubcriptions.forEach(ctx.unsubscribe);
      resizeSubcriptions = [];
      // ==================================================
      // inicializar los canvas para los perfiles
      // ==================================================
      pol.$('div[div-profile] canvas', container)
         .map( canvas => {
            let __id = canvas.parentNode.id.split('-')[1];
            return {
              canvas, 
              id       : __id,
              parent   : canvas.parentNode,
              dataset  : { 
                activity : viewDataSet.item('id', __id),
                streams  : stravaCache.streams[__id]
              }
            };
         })
         .forEach(item => {
            let chart = item.canvas.lineChart;
            chart.data = createProfileDocument(item.dataset);
            function __resize() {
              chart.Resize(item.parent.clientWidth - 9, 
                           item.parent.clientHeight - 9);
            }
            resizeSubcriptions.push(ctx.subscribe(ctx.topics.WINDOW_RESIZE, __resize));
            __resize();
            
            ctx.subscribe('msg\\line_chart\\range', (message, e) => {
              //var __dis = Math.abs( __document.distances[e.start] - __document.distances[e.end]);
              //if(__dis>2500){
              //  var __from   = Math.min(e.start, e.end);
              //  var __to     = Math.max(e.start, e.end);
              //  //__fillDocument(__from, __to);
              //  //__resize();
              //}
            });
         });
    });  
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

    let document = { 
      length     : dataset.streams.distance.data.length,
      distances  : dataset.streams.distance.data,
      altitude   : dataset.streams.altitude.data,
      heartrate  : dataset.streams.heartrate.data,
      watts      : dataset.streams.velocity_smooth.data.map( s => {
        return speedToWatts(s * 3.6);
      }),
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
        this.view.h       = this.getRange(this.heartrate, start, end);
        this.view.w       = this.getRange(this.watts, start, end);
        return this;
      }
    };

    return document.configureView(0, document.length - 1);
  }

  return component;

}
