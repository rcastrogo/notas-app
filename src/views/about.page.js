import pol from "../lib/mapa.js";

const __template = `  
<div class="w3-container w3-margin-bottom">
  <h1>Sobre Notas App</h1>
  <p>Aplicación desarrollada por Rafael Castro Gómez</p>
</div>
<div class="w3-container w3-margin-bottom w3-center">
  <button type="button" about-btn-back class="w3-button w3-circle w3-black">X</button>
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
      container.querySelector('[about-btn-back]')
               .onclick = () => {
                 history.back();
               }
    }
  };
}
