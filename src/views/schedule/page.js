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
    utils.addEventListeners(target, { 
      
    });
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
                                                className : 'w3-badge w3-red w3-display-middle',
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
    // =============================================================================
    // Contenido dia
    // =============================================================================
    let d_template = '<div class="w3-padding w3-margin w3-teal w3-round" style="width:50px">{0|paddingLeft,00}</div>';
    sender.LoadDayView((() => {
      return [...Array(24).keys()].reduce( (nodes, e, i) => {
        let element = pol.build('div', d_template.format(i.toString()));
        nodes.push(element);
        return nodes;
      }, []);
    })());
    // =================================================================================================
    // Contenido agenda
    // =================================================================================================
    let a_template = '<div class="w3-card-4 w3-margin w3-padding w3-round">{0|paddingLeft,00}:00</div>';
    sender.LoadAgendaView((() => {
      return [...Array(24).keys()].reduce( (nodes, e, i) => {
        let element = pol.build('div', a_template.format(i.toString()));
        nodes.push(element);
        return nodes;
      }, []);
    })());
  }

  return component;

}
