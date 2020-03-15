import pol from "../../lib/mapa.js";
import utils from "../../lib/utils.js";
import pubsub from "../../lib/pubSub.Service.js";
import pageContainer from "../components/page.component";

import HTML from "./page.txt";

const TOPICS = pubsub.TOPICS;

export default function (ctx) {
  
  let pageWrapper = pageContainer(ctx);
  let page        = {};

  let component   = {
    root   : {},
    init   : function(container, router){ },
    render : function(container){
      this.root = pageWrapper.render(container);
      page = pol.build('div', HTML, 'firstElementChild');
      this.root.appendChild(initEventListeners(page));
      return this.root;
    },
    mounted : function(){
      initAll();
    },
    dispose       : function(){ },
    eventHandlers : { }
  };
  
  function initEventListeners(target) {
    utils.addEventListeners(target, { 
      
    });
    return target;
  }

  function initAll() {
    pubsub.publish('msg_page_component_update_title', 'Agenda' );
  }

  return component;

}
