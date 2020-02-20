import pol from "../lib/mapa.js";

const __template = `  
<div class="w3-container w3-margin-bottom">
  <h1>Lista de notas</h1>
</div>
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
