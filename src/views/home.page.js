import pol from "../lib/mapa.js";

const __template = `  
  <div class="w3-container w3-center w3-animate-left" style="padding-top:60px;">
    <img src="./assets/img/logo.png" alt="logo" style="width: 300px">
    <p>La app que te permite almacenar todas tus notas en el móvil!!!</p>
  </div>`;

export default function(){

  let component = {
    root   : {},
    init   : function(container){ },
    render : function(container){
      this.root = pol.build('div', __template).firstElementChild ;
      return this.root;
    },
    mounted : function(container){ 
     
    },
    dispose : function(){ }
  };

  return component;

}
