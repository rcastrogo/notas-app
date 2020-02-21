import pol from "../lib/mapa.js";

const __template = `  
  <div class="w3-container w3-center" style="padding-top:20%;">
    <img src="./assets/img/logo.png" alt="Car" style="width: 75%;">
    <p>La app que te permite almacenar todas tus notas en el móvil!!!</p>
  </div>
`;

export default function(){
  return {
    render : function() {
      let options = { 
        innerHTML : __template.format(this),
      }
      return pol.build('div', options);
    },
    mounted : container => {

    }
  };
}
