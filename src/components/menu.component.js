import pol from "../lib/mapa.js";
import utils from "../lib/utils.js";

const __TEMPLATE = `  
  <a href=""          route-link on-publish="TOPICS.VIEW_CHANGE:sync" class="w3-bar-item w3-button selected">Inicio</a>
  <a href="el-tiempo" route-link on-publish="TOPICS.VIEW_CHANGE:sync" class="w3-bar-item w3-button">El tiempo</a>
  <a href="list"      route-link on-publish="TOPICS.VIEW_CHANGE:sync" class="w3-bar-item w3-button">Notas</a>
  <a href="note"      route-link on-publish="TOPICS.VIEW_CHANGE:sync" class="w3-bar-item w3-button">+</a>
  <a href="about"     route-link on-publish="TOPICS.VIEW_CHANGE:sync" class="w3-bar-item w3-button w3-right">?</a>`;

export default function(){

  let component =  {
    root   : {},
    id     : 'menu.component.ref',
    init   : function(container, router){
      this.router = router;
    },
    render : function(container) {
      let options = { 
        id        : "appMenu",
        innerHTML : __TEMPLATE.format(this),
        className : 'w3-bar w3-black'
      }
      this.root = pol.build('nav', options);
      return this.root;
    },
    mounted: function(container){
      initAll();
    },
    eventHandlers : { 
      sync : syncMenuItem
    }
  };

  function initAll() {

    utils.addEventListeners(component.root, 
                            component.eventHandlers, { 
                              router : component.router,
                              syncr   : syncMenuItem
                            });


  }

  function syncMenuItem(e, data) {
    if (data.name === e.href.split('/').lastItem())
      e.classList.add('selected')
    else
      e.classList.remove('selected')
  }

  return component;

}
