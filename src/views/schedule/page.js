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

    ctx.publish('msg\\page_component\\update\\title', 'Agenda');

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
            onclick   : function(){ sender.ShowDayView(this.id.split('_')[1]); }
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
    // Contenido agenda
    // =======================================================================
    let a_template = require("./page.t.agenda.txt");
    sender.LoadAgendaView((() => {
      let dateUS = date.format('yyyymmdd');
      return viewDataSet.where( a => a.fechaUS == dateUS)
                        .reduce((nodes, a, i) => {
        let activity = stravaCache.activities[a.id];
        let element = pol.build('div', { innerHTML : JSON.stringify(activity) }, false);
        nodes.push(element);
        return nodes;
      }, []);
    })());
  }

  return component;

}
