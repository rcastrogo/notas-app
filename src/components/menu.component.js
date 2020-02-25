import pol from "../lib/mapa.js";

const __TEMPLATE = `  
  <a href="" route-link class="w3-bar-item w3-button selected">Inicio</a>
  <a href="list" route-link class="w3-bar-item w3-button">Notas</a>
  <a href="add" route-link class="w3-bar-item w3-button">+</a>
  <a href="about" route-link class="w3-bar-item w3-button w3-right">?</a>
`;

export default function(){
  return {
    id     : 'menu.component.ref',
    init   : function(container){},
    render : function(container) {
      let options = { 
        id        : "appMenu",
        innerHTML : __TEMPLATE.format(this),
        className : 'w3-bar w3-black'
      }
      return pol.build('nav', options);
    },
    mounted: function(container){
      
    }
  };
}
