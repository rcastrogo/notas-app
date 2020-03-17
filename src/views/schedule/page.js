import pol from "../../lib/mapa.js";
import utils from "../../lib/utils.js";
import pageContainer from "../components/page.component";

import HTML from "./page.txt";

export default function (ctx) {
  
  let pageWrapper = pageContainer(ctx);
  let page        = {};
  let schedule;

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
    sender.ClearMonthView();
    // =============================================================================
    // Contenido mensual
    // =============================================================================
    sender.LoadMonthView((() => {
      let count =  1 + ~~(Math.random() * 12);
      let values = [];
      while (values.length < count) {
        let value = 1 + ~~(Math.random() * 34);
        if (!values.includes(value)) {
          values.push(value);
        }
      }
      return values
        .map( i => {
          return { fecha : new Date(sender.FirstDate.valueOf() + i * 86400000).format() };
        }).reduce( function(nodes, e){               
          nodes[e.fecha] = [];
          nodes[e.fecha].push(pol.build('div', {innerHTML : ~~(1 + Math.random() * 6),
                                                className : 'w3-badge w3-red w3-display-middle w3-large',
                                                id        : 'ctn_{fecha}'.format(e),
                                                onclick   : function(){ sender.ShowDayView(this.id.split('_')[1]); }
          }));
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
      return [...Array(24).keys()].reduce( (nodes, e, i) => {
        let element = pol.build('div', a_template.format(i.toString()), true);
        nodes.push(element);
        return nodes;
      }, []);
    })());
  }

  return component;

}
