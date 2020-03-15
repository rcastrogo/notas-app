import pol from "../lib/mapa.js";
import utils from "../lib/utils.js";

const __TEMPLATE = `  
  <div class="w3-dropdown-click">
    <button on-click="toggleMenu" class="w3-button w3-black"><i class="fa fa-bars"></i></button>
    <div class="w3-dropdown-content w3-bar-block w3-card-4" style="z-index: 1002;">
      <a href="templates" route-link on-click="hideMenu" class="w3-bar-item w3-button">Libros en <i>OpenLibra</i></a>
      <hr style="margin:0"/>
      <a href="templates/get-value" route-link on-click="hideMenu" class="w3-bar-item w3-button">Templates</a>
      <a href="templates/utils" route-link on-click="hideMenu" class="w3-bar-item w3-button">addEventListeners</a>
    </div>
  </div>
  <a href=""          route-link on-publish="TOPICS.VIEW_CHANGE:sync" class="w3-bar-item w3-button selected">Inicio</a>
  <a href="el-tiempo" route-link on-publish="TOPICS.VIEW_CHANGE:sync" class="w3-bar-item w3-button">El tiempo</a>
  <a href="list"      route-link on-publish="TOPICS.VIEW_CHANGE:sync" class="w3-bar-item w3-button">Notas</a>
  <a href="note"      route-link on-publish="TOPICS.VIEW_CHANGE:sync" class="w3-bar-item w3-button">+</a>
  <a href="about"     route-link on-publish="TOPICS.VIEW_CHANGE:sync" class="w3-bar-item w3-button w3-right">?</a>
  `;

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
                              router      : component.router,
                              toggleMenu  : toggleMenu,
                              hideMenu    : hideMenu
                            });


  }

  function syncMenuItem(e, data) {
    hideMenu();
    if (data.name === e.href.split('/').lastItem())
      e.classList.add('selected');
    else
      e.classList.remove('selected');
  }

  let dropdownContent;
  function toggleMenu(e) {
    dropdownContent = e.nextElementSibling;
    dropdownContent.classList.toggle('w3-show');
  }
  function hideMenu(e) {
    if (dropdownContent){
      dropdownContent.classList.remove('w3-show');
    }
  }

  return component;

}
