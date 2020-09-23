import pol from "../lib/mapa.js";
import {stravaApi} from "./strava/strava"

const __template = `  
<div class="w3-container w3-margin-bottom w3-animate-left">
  <h1>Sobre Notas App</h1>
  <p style="text-indent:1em;">
    Notas App es una prueba de concepto de lo que podría ser un <span class="w3-bold w3-italic">framework</span> 
    sencillo con el cual desarrollar aplicaciones <span class="w3-bold w3-italic">SPA</span> basadas únicamente en <span class="w3-bold">HTML5</span> y <span class="w3-bold">JavaScript</span>.
  </p>
  <p style="text-indent:1em;">
    Estas aplicaciones serían subceptibles de ser instaladas en dispositivos móviles como una <span class="w3-bold w3-italic">PWA</span>.
  </p>
  <ul class="w3-ul w3-border">
    <li><h2>Referencias</h2></li>
    <li><a href="https://es.wikipedia.org/wiki/Single-page_application" target="_blank">SPA (Single-page application)</a></li>
    <li><a href="https://es.wikipedia.org/wiki/Progressive_Web_Apps" target="_blank">PWA (Progressive Web Apps)</a></li>
    <li><h2>Repositorio</h2></li>
    <li><a href="https://github.com/rcastrogo/notas-app" target="_blank">https://github.com/rcastrogo/notas-app</a></li>
  </ul>
  <p style="text-indent:1em;">
    Para su desarrollo no se han utilizado ninguno de los <span class="w3-bold w3-italic">frameworks</span> existentes como pueden ser Angular, React o Vue.js.
  </p>
</div>
<div class="w3-container w3-margin-bottom w3-center">
  <button type="button" about-btn-back class="w3-button w3-black">Volver</button>
</div>
`;

export default function(){

  let component = {
    root   : {},
    init   : function(){ },
    render : function(){
      this.root = pol.build('div', __template);
      return this.root;
    },
    mounted : function(){
      this.root
          .querySelector('[about-btn-back]')
          .onclick = () => {
            stravaApi.resetConfig();
            history.back();
          };

      let url = 'http://localhost:5001/belloto-c925d/us-central1/helloWorld';
      let request;
      pol.ajax
         .get(url, req => {
           request = req;
           //req.setRequestHeader('Accept', 'application/javascript');
         })
        .then(result => { 
          console.log(result);
        })
    }
  };

  return component;

}
