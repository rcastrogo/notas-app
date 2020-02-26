import pol from "../lib/mapa.js";
import pubsub from "../lib/pubSub.Service";

const __TEMPLATE = `  
  <a href="" route-link class="w3-bar-item w3-button selected">Inicio</a>
  <a href="el-tiempo" route-link class="w3-bar-item w3-button">El tiempo</a>
  <a href="list" route-link class="w3-bar-item w3-button">Notas</a>
  <a href="note" route-link class="w3-bar-item w3-button">+</a>
  <a href="about" route-link class="w3-bar-item w3-button w3-right">?</a>
`;

export default function(){
  let component =  {
    root   : {},
    id     : 'menu.component.ref',
    init   : function(container){},
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
    }
  };

  function initAll() {
    let links = pol.$('[route-link]', component.root);
    let map   = links.map( function(link){ 
                             return { path : link.href.split('/').lastItem(), link };
                           })
                     .toDictionary('path', 'link');
    pubsub.subscribe('view.change', (name, route) => {
      links.forEach( e => e.classList.remove('selected') );
      map[route.name].classList.add('selected');
    }); 
  }

  return component;

}
