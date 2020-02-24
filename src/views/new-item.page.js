import pol from "../lib/mapa.js";

const __template = `  
<div class="w3-container w3-margin-bottom">
  <h1>Nueva nota</h1>
</div>
<div class="w3-container w3-margin-bottom w3-center">
  <button type="button" id="btn-grabar" class="w3-button w3-black">Grabar</button>
</div>
`;

export default function(context){

  let app = context;

  let component = {
    root   : {},
    init   : function(container){ },
    render : function(container){
      this.root = pol.build('div', __template);
      return this.root;
    },
    mounted : function(container){
      pol.$('btn-grabar')
         .onclick = () => {
           window.history.replaceState({}, '', '/notas-app/');
           console.log(app);
         }
    }
  };

  return component;
}
