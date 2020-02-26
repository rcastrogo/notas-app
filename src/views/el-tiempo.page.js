import pol from "../lib/mapa.js";

const __template = `  
<div class="w3-container w3-margin-bottom">
  <h2>La predicción del tiempo</h2>
  <div id="aemetApi-container" style="padding:0;">
    <div class="w3-center">Cargando datos desde la AEMET...</div>
    <div class="w3-border">
      <div id="progress-bar" class="w3-green" style="height:24px;width:0%"></div>
    </div>
  </div>
</div>
`;

export default function(){

  let aemetContainer;
  let progressBar;
  let component = {
    root   : {},
    init   : function(container){ },
    render : function(container){
      this.root = pol.build('div', __template);
      return this.root;
    },
    mounted : function(container){
      aemetContainer = pol.$('aemetApi-container');
      progressBar = pol.$('progress-bar');
      initProgressBar();
      callAemetApi();
    }
  };

  let timerId;
  function initProgressBar() {
    let counter = 0;
    timerId = setInterval(() => {
      counter = (counter + 9) % 100;
      progressBar.style.width = '{0}%'.format(counter);
    }, 200);
  }

  function callAemetApi() {
    
    let endpoint = 'https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/horaria/45022' +
                   '?api_key=' +
                   'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyY2FzdHJvZ29AaG90bWFpbC5jb20iLCJqdGkiOiJmZmI3OWJjZi1lZWQwLTQwODMtYTkwZC04MmNkMmRhMTA2MjQiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTU4MjcyNTg3NiwidXNlcklkIjoiZmZiNzliY2YtZWVkMC00MDgzLWE5MGQtODJjZDJkYTEwNjI0Iiwicm9sZSI6IiJ9.bPhAJDutP62_75peo3qr88Qs1JQ4jmu6TWXHjvIzZx0';
    pol.ajax
       .get(endpoint)
       .then(text => JSON.parse(text))
       .then(result => {
         if(result.estado == 200) return pol.ajax.get(result.datos);
         throw new Error(result.descripcion);
       })
       .then( text => {
         let data = JSON.parse(text);
         clearInterval(timerId);
         aemetContainer.innerHTML = JSON.stringify(data, null, 2);
       })
       .catch( e => {
         console.log(e);
       });
  }

  return component;

}
