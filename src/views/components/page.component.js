import pol from "../../lib/mapa.js";
import utils from "../../lib/utils.js";
import HTML from "./page.component.txt"; 

export default function (ctx) {
  
  let component = {
    root   : {},
    init   : function(container, router){ },
    render : function(container){
      this.root = pol.build('div', HTML, 'firstElementChild');
      return initEventListeners(this.root);
    }
  };

  function initEventListeners(target) {
    utils.addEventListeners(target, { 
      goBack : () => { history.back(); }
    });
    return target;
  }

  return component;

}
