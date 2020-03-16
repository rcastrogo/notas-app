import pol from "../../lib/mapa.js";
import utils from "../../lib/utils.js";
//import pubsub from "../../lib/pubSub.Service.js";
import pageContainer from "../components/page.component";

import HTML from "./page.txt";

export default function (ctx) {
  
  let pageWrapper = pageContainer(ctx);
  let page        = {};

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
    ctx.publish('msg\\page_component\\update\\title', 'Agenda' );
  }

  return component;

}
