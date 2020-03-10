import pol from "../lib/mapa";
import pubsub from "../lib/pubSub.Service";
import utils from "../lib/utils";


const TOPICS = pubsub.TOPICS;

const __TEMPLATE = `  
<div class="w3-container w3-margin-bottom w3-animate-bottom">
  <div class="w3-border w3-margin-top">
    <button on-click="expandCollapse" class="w3-button w3-block w3-left-align">
      <span on-publish="TOPICS.MUNICIPIO_CHANGE:innerHTML">Buenaventura</span><i class="w3-right w3-large fa fa-caret-down"></i>
    </button>
    <div class="w3-hide">
      <ul class="w3-ul">
        <li on-click="requestData" id="loc-45022">Buenaventura</li>
        <li on-click="requestData" id="loc-28079">Madrid</li>
      </ul>
    </div>
  </div>
  <div class="w3-margin-top w3-hide" id="aemetApi-container" style="padding:0;">
    <div id="progress-bar-container">
      <div class="w3-center">Cargando datos desde la AEMET...</div>
      <div class="w3-border">
        <div id="progress-bar" class="w3-green" style="height:24px;width:0%"></div>
      </div>
    <div>
  </div>
</div>`;

function aemetComponent() {

  const __TEMPLATE = `
  <div class="w3-container w3-teal w3-center w3-small w3-padding">
    {elaborado:fn.formatFecha}
  </div>
  <div style="padding:0">
    <h3 class="w3-center w3-border-bottom">{fn.formatFecha:prediccion.dia[0].fecha}</h3>
    <div>{fn.showDay:rows-0}</div>
    <div class="w3-small w3-teal w3-padding w3-center">
      <div><i class="fa fa-arrow-up"></i> {prediccion.dia[0].orto}</div>
      <div><i class="fa fa-arrow-down"></i> {prediccion.dia[0].ocaso}</div>
    </div>
  </div>
  <br/>
  <div style="padding:0">
    <h3 class="w3-center w3-border-bottom">{fn.formatFecha:prediccion.dia[1].fecha}</h3>
    <div>{fn.showDay:rows-1}</div>
    <div class="w3-small w3-teal w3-padding w3-center">
      <div><i class="fa fa-arrow-up"></i> {prediccion.dia[1].orto}</div>
      <div><i class="fa fa-arrow-down"></i> {prediccion.dia[1].ocaso}</div> 
    </div>
  </div>
  <br/>
  <div style="padding:0">
    <h3 class="w3-center w3-border-bottom">{fn.formatFecha:prediccion.dia[2].fecha}</h3>
    <div>{fn.showDay:rows-2}</div>
    <div class="w3-small w3-teal w3-padding w3-center">
      <div><i class="fa fa-arrow-up"></i> {prediccion.dia[2].orto}</div>
      <div><i class="fa fa-arrow-down"></i> {prediccion.dia[2].ocaso}</div>
    </div>
  </div>`;

  let fn = { 
    formatFecha : function(value, ctx, options){
      let tokens = value.split('T');
      if (options && options[0] === 'date') return tokens[0];
      if (options && options[0] === 'time') return tokens[1];
      if (options && options[0] === 'day'){
        tokens = tokens[0].split('-');
        let nombres = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];
        let day     = new Date(~~tokens[0], ~~tokens[1] - 1, ~~tokens[2]).getDay();
        return '{0} {1}'.format(nombres[day], ~~tokens[2]);
      };
      return '{1} - {0}'.format(...tokens)
    },
    showDay: function (data) {
      function renderRow(sb, row) {
        let row_template = `
          <tr class="w3-center">
            <td>{row.periodo}:00</td>
            <td>{row.cielo}</td>
            <td>{row.temperatura}</td>
            <td>{fn.formatZero:row.lluvia}</td>
            <td><i class="fa fa-2x fa-long-arrow-right pol-{row.viento[0]}"></i> {row.viento[1]}</td>
          </tr>`;
        let row_wrapper = {row, fn};
        return sb.append(row_template.format(row_wrapper));
      }
      return data.reduce(renderRow, pol.stringBuilder()
                                       .append('<table class="w3-table w3-bordered w3-small w3-striped">')
                                       .append('<tr class="w3-center w3-teal">' + 
                                                 '<th>Hora</th>' + 
                                                 '<th>Cielo</th>' + 
                                                 '<th>Temp<br>ºC</th>' + 
                                                 '<th>Lluvia<br>mm</th>' + 
                                                 '<th>Viento<br>km/h</th>' + 
                                               '</tr>'))
                 .append('</table>')
                 .value;
    },
    formatZero: function (value) {
      return value == '0' ? '' : value;
    }
  };

  let component = {
    root   : {},
    init   : function(container){ },
    render : function(container){
      this.root = pol.build('div', __TEMPLATE.format(this.data));
      return this.root;
    },
    mounted : function(container){ },
    withData : function(data){
      let ref_date = (function(now) { 
        return '{0|paddingLeft,0000}-{1|paddingLeft,00}-{2|paddingLeft,00}-{3|paddingLeft,00}'.format(
                  '' + now.getFullYear(), 
                  '' + (now.getMonth() + 1), 
                  '' + now.getDate(),
                  '' + now.getHours());
      }(new Date()));
      this.data = JSON.parse(data)[0];
      this.data.fn = fn;
      this.data
          .prediccion
          .dia
          .reduce(function (a, dia, i) {
            // =======================================================================================================================
            // Filtrado de datos
            // =======================================================================================================================
            let currentDate = dia.fecha.fixDate('T');
            // =======================================================================================================================
            // Agrupar los datos por hora
            // =======================================================================================================================
            let group = [].concat(dia.estadoCielo.map( function(e){ return { t : 'c', periodo : e.periodo, value : e.descripcion }}),
                                  dia.temperatura.map( function(e){ return { t : 't', periodo : e.periodo, value : e.value }}),
                                  dia.precipitacion.map( function(e){ return { t : 'p', periodo : e.periodo, value : e.value }}),
                                  dia.vientoAndRachaMax
                                     .where(e => e.velocidad)
                                     .map( function(e){ 
                                       return { t       : 'v', 
                                                periodo : e.periodo, 
                                                value   : [e.direccion[0], e.velocidad[0]]
                                     }}))
                          .where( (e) => {
                            return '{0}-{1}'.format(currentDate, e.periodo) >= ref_date;
                          })
                          .groupBy('periodo');
            // =======================================================================================================================
            // convertir en datos tabulados
            // =======================================================================================================================
            a['rows-{0}'.format(i)] = Object.keys(group)
                                            .reduce( function(rows, key){
                                              let datosHora = group[key];
                                              rows.push( { periodo     : key, 
                                                            cielo       : datosHora.where({ t : 'c' })[0].value,
                                                            temperatura : datosHora.where({ t : 't' })[0].value,
                                                            lluvia      : datosHora.where({ t : 'p' })[0].value,
                                                            viento      : datosHora.where({ t : 'v' })[0].value });
                                              return rows;
                                            }, [])
                                            .sortBy('periodo');
            return a;
          }, this.data);

      return this;
    }
  };

  return component;

}

export default function(ctx){

  let aemetContainer;
  let progressBarContainer;
  let progressBar;

  let component = {
    root   : {},
    data   : { 
      municipios : { 
        '45022' : 'Buenaventura (TOLEDO)',
        '28079' : 'Madrid'
      }
    },
    init   : function(container){ },
    render : function(container){
      this.root = pol.build('div', __TEMPLATE);
      return this.root;
    },
    mounted : function(container){
      initAll(container);
    },
    dispose : function(){
      clearInterval(timerId);
    },
    eventHandlers : { 
      expandCollapse : expandCollapse,
      requestData    : requestData
    }
  };

  function initAll(container) {
    aemetContainer       = pol.$('aemetApi-container');
    progressBar          = pol.$('progress-bar');
    progressBarContainer = pol.$('progress-bar-container');   
    // ==============================================================
    // addEventListener
    // ==============================================================
    utils.addEventListeners(component.root, 
                            component.eventHandlers,
                            { 
                              css : (target, data) => {
                                console.log(target);
                              }
                            });
    callAemetApi();
  }

  let timerId;
  function initProgressBar() {
    let counter = 0;
    progressBar.style.width = '{0}%'.format(counter);
    if(timerId) clearInterval(timerId);
    timerId = setInterval(() => {
      counter = (counter + 9) % 100;
      progressBar.style.width = '{0}%'.format(counter);
    }, 300);
  }

  let codigo = 45022;
  function callAemetApi() {
    
    initProgressBar();

    aemetContainer.innerHTML = '';
    aemetContainer.appendChild(progressBarContainer);
    aemetContainer.classList.remove('w3-hide');

    const ENDPOINT = 'https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/horaria/' +
                      codigo +
                     '?api_key=' +
                     'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyY2FzdHJvZ29AaG90bWFpbC5jb20iLCJqdGkiOiJmZmI3OWJjZi1lZWQwLT' + 
                     'QwODMtYTkwZC04MmNkMmRhMTA2MjQiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTU4MjcyNTg3NiwidXNlcklkIjoiZmZiN' + 
                     'zliY2YtZWVkMC00MDgzLWE5MGQtODJjZDJkYTEwNjI0Iiwicm9sZSI6IiJ9.bPhAJDutP62_75peo3qr88Qs1JQ4jmu6TWXHjvIzZx0';
    pol.ajax
       .get(ENDPOINT, req => {
         req.setRequestHeader('Accept', 'application/javascript');
       })
       .then(text => JSON.parse(text))
       .then(result => {
         if(result.estado == 200) return pol.ajax.get(result.datos);
         throw new Error(result.descripcion);
       })
       .then( text => {                                               
         aemetContainer.innerHTML = '';
         (function(componet) {
           componet.init(ctx);
           aemetContainer.appendChild(componet.render());
           componet.mounted(ctx);
         }(aemetComponent().withData(text)));         
       })
       .catch( e => {
         console.log(e);
       });
  }

  function expandCollapse(target, mouseEvent) {
    let __list = target.nextElementSibling.classList;
    if(__list.contains('w3-hide')){
      __list.remove('w3-hide');
      target.querySelector('i').classList.remove('fa-caret-down');
      target.querySelector('i').classList.add('fa-caret-up');
    } else {
      __list.add('w3-hide');
      target.querySelector('i').classList.remove('fa-caret-up');
      target.querySelector('i').classList.add('fa-caret-down');
    }
  }

  function requestData(target, mouseEvent) {

    let combo = target.parentNode.parentNode.previousElementSibling;
    codigo = target.id.split('-')[1];

    pubsub.publish(TOPICS.MUNICIPIO_CHANGE, component.data.municipios[codigo] );

    expandCollapse(combo);
    callAemetApi();
  }

  return component;

}
