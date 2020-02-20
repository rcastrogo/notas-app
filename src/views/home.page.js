import pol from "../lib/mapa.js";

const __template = `  
  <div class="w3-container w3-center">
    <h1>Página principal</h1>
    <p>Almacena tus notas en el móvil!!!</p>
    <img src="./assets/img/logo.png" alt="Car" style="width: 50%;">
  </div>
  <div style="height:20px;"></div
`;

export default function(){
  return {
    render : function() {
      let options = { 
        innerHTML : __template.format(this),
      }
      return pol.build('div', options);
    }
  };
}
