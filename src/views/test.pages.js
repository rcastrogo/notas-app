import pol from "../lib/mapa.js";
import utils from "../lib/utils.js";
import pubsub from "../lib/pubSub.Service.js";

const TOPICS = pubsub.TOPICS;

let templatePage = function(ctx){

  const __TEMPLATE = `
  <div class="w3-container w3-margin-bottom w3-animate-left">
  </div>`;

  let itemsContainer;

  let component = {
    root   : {},
    data   : {},
    init   : function(container){

    },
    render : function(container){
      this.root = pol.build('div', __TEMPLATE);
      itemsContainer = this.root.firstElementChild;
      return this.root;
    },
    mounted : function(container){
      initAll(container);   
    },
    dispose : function(){
      clearInterval(timerId);
      pubsub.unsubscribe(subcription);
    },
    eventHandlers : { 

    }
  };
   
  let images;
  let subcription;
  function initAll(container) {
    callOpenLibraApi( { tipo : 'cat', id : 'libros_programacion' } );
    subcription = pubsub.subscribe(TOPICS.WINDOW_SCROLL, (message, w) => {
      loadImages(w.scrollY);
    });
  }

  function loadImages(value) {
    images.where( image => image.src === '' && 
                           image.offsetTop - 800 < value )
          .map( image => image.src = image.id );
  }

  let timerId;
  function initProgressBar() {
    let progressBar = pol.$('progress-bar');
    let counter = 0;
    progressBar.style.width = '{0}%'.format(counter);
    if(timerId) clearInterval(timerId);
    timerId = setInterval(() => {
      counter = (counter + 9) % 100;
      progressBar.style.width = '{0}%'.format(counter);
    }, 300);
  }

  function callOpenLibraApi(filter) {

    itemsContainer.innerHTML = `
    <div class="w3-card-4 w3-margin-top w3-margin-bottom w3-center">
      <header class="w3-container w3-light-grey">
        <h1>Libros</h1>
      </header>
      <div id="progress-bar-container">
        <div id="progress-bar" class="w3-green" style="height:10px;width:22%"></div>
      <div>
    </div>`;
    initProgressBar();

    pol.ajax
       .get('./assets/js/libros.json', req => {
         req.setRequestHeader('Accept', 'application/javascript');
       })
       .then(result => {
         clearInterval(timerId);
         return JSON.parse(result); 
       })
       .then(result => { 
         // =============================================================
         // Filtrar elementos
         // =============================================================
         return result.where( filter.tipo === 'cat' 
                              ? function(book){ 
                                return book.categories
                                           .where({ nicename : filter.id })
                                           .length; }
                              : function(book){ 
                                return book.tags
                                           .where({ nicename : filter.id })
                                           .length; }
                      )
                      .slice(0, Math.min(result.length, 25))
                      .sortBy('title');
       })
       .then(result => {
         itemsContainer.innerHTML = '';
         // ============================================================================
         // Enlaces a los títulos
         // ============================================================================
         let bookmarks = result.groupBy(function(b){ return b.title[0].toUpperCase(); })
         result.bookmarks = Object.keys(bookmarks)
                                  .reduce(function(a, letra){
                                            if(a.keys[letra]) return a;
                                            a.keys[letra] = bookmarks[letra];
                                            a.rows.push({letra, id : a.keys[letra][0].ID});
                                            return a;
                                          }, { keys : {}, rows : [] })
                                  .rows;
         // =====================================================================
         // Crear contenido
         // =====================================================================
         mergeData(result);
         // =====================================================================
         // Carga de imagenes de forma progresiva
         // =====================================================================
         images = pol.$('img', itemsContainer);
         loadImages(0);
       })
       .catch( e => {
         console.log(e);
       });
 
  }
  
  function mergeData(data) {

    let template = pol.build('div', `
      <div class="w3-card-4 w3-margin-top w3-margin-bottom w3-center">
        <header class="w3-container w3-light-grey" id="rafa">
          <h1>Libros</h1>
        </header>
        <span xbind="" class="w3-small">{length:fn.formatId2 => a} Elementos</span>
        <div class="w3-light-grey w3-tiny" style="overflow:auto;width:100%">    
          <div book-cat xfor="bookmark in bookmarks" class="w3-cell" >
            <p xbind="id:bookmark.id" on-click="goToBookmark" class="w3-border w3-round w3-white" style="padding:2px 6px;margin:2px 4px;white-space:nowrap;">{bookmark.letra}</p>
          </div>
        </div>
      </div>
      <div xfor="libro in this" class="w3-card-4 w3-margin-bottom" xbind="id:fn.formatId => @libro.ID mark">
        <header class="w3-container w3-light-grey" on-click="expandCollapse">
          <h4 xbind="">{libro.title}</h4>
        </header>
        <div class="w3-container" style="transition: max-height .31s; overflow: hidden; max-height:500px">

          <div xbind="" class="w3-container" style="padding:3px 0">
            <img xbind="id:libro.thumbnail" alt="Portada" class="book w3-left w3-margin-right w3-margin-bottom">
            <b>Autor</b> {libro.author}<br/>
            <b>Páginas</b> {libro.pages}<br/>
            <b>Año</b> {libro.publisher_date}<br/>
            <b>Editorial</b> {libro.publisher}<br/>
            <b>Idioma</b> {libro.language}
            <div xbind="id:fn.formatId => @libro.ID book;innerHTML:libro.content_short|htmlDecode" 
                 on-click="showAllContent" 
                 style="clear:both;margin-block-start: 0; font-style: oblique;font-family: monospace;">
            </div>
          </div>

          <div class="w3-small" xbind="">Categorías ({libro.categories.length})</div>
          <div class="w3-border w3-light-grey w3-small w3-round" style="overflow:auto;width:100%">
            <div book-cat xfor="categoria in libro.categories" class="w3-cell">
              <p xbind="id:categoria.nicename;innerHTML:categoria.name" on-click="makeRequest:cat" class="w3-border w3-round w3-white" style="padding:6px;margin:6px;white-space:nowrap;"></p>
            </div>
          </div>

          <div class="w3-small" xbind="">Etiquetas ({libro.tags.length})</div>
          <div class="w3-border w3-light-grey w3-small w3-round w3-margin-bottom" style="overflow:auto;width:100%">
            <div book-cat xfor="etiqueta in libro.tags" class="w3-cell">
              <p xbind="id:etiqueta.nicename;innerHTML:etiqueta.name" on-click="makeRequest:tag" class="w3-border w3-round w3-white" style="padding:6px;margin:6px;white-space:nowrap;"></p>
            </div>
          </div>
        </div>
      </div>
      <button btn-add-note on-click="goTop" class="w3-button w3-black w3-circle">^</button>
    `);

    data.fn = {
      formatId: function (scope, element, id, prefix) {
        return '{0}-{1}'.format(prefix, id);
      },
      htmlDecode: function (encodedHtml) {
        return encodedHtml.htmlDecode();
      },
      formatId2: function (count,a,b,c,d) {
        return count;
      }
    }
    let booksMap = data.toDictionary('ID');
    // ==============================================================
    // Crear contenido
    // ==============================================================
    itemsContainer.appendChild(pol.templates.fill(template, data));
    // ==============================================================
    // addEventListener
    // ==============================================================
    utils.addEventListeners(itemsContainer, {}, {
      showAllContent: (e, data) => {
        e.onclick = undefined;
        let bookId =e.id.split('-')[1];
        e.innerHTML = booksMap[bookId].content.htmlDecode();
        let parent = e.parentNode.parentNode;
        parent.style.maxHeight = '{0}px'.format( parent.scrollHeight);
      },
      makeRequest: function (e, data, tipo) {
        callOpenLibraApi({ tipo, id: e.id });
      },
      expandCollapse : function(target, mouseEvent) {
        let __style = target.nextElementSibling.style;
        let __height = '{0}px'.format( target.nextElementSibling.scrollHeight);
        if(__style.maxHeight == '500px'){
          __style.maxHeight = '0px';
        }else if(__style.maxHeight != __height){
          __style.maxHeight = __height;
        }else {
          __style.maxHeight = '0px';
        }
      },
      goTop: () => {
        ctx.components[0].root.scrollIntoView({ behavior: 'smooth' });
      },
      goTo: function(target, mouseEvent, tag){
        mouseEvent.preventDefault();
        pol.$(tag).scrollIntoView({ behavior: 'smooth', block: 'end'  });
      },
      goToBookmark: function(target, mouseEvent){
        mouseEvent.preventDefault();
        pol.$('mark-{0}'.format(target.id))
           .scrollIntoView({ behavior: 'smooth', block: 'end' });
      }

    });
  }
  
  //const ENDPOINT = ('http://www.etnassoft.com/api/v1/get/?' +
  //                  'num_items=100&' +
  //                  '{0}' + 
  //                  '{1}' +
  //                  'decode=true').format((filter.tipo === 'cat' ? 'category={0}&'.format(filter.id) : ''),
  //                                        (filter.tipo === 'tag' ? 'any_tags=[{0}]&'.format(filter.id) : ''));
  //itemsContainer.innerHTML = '';
  //jsonpRaquest(ENDPOINT)
  //   .then( JSON.parse)
  //   .then( result => {                                               
  //     mergeData(result.sortBy('title'));    
  //   })
  //   .catch( e => {
  //     console.log(e);
  //   });

  //function jsonpRaquest(url, timeout) {

  //  function urlJoinChar(url) {
  //    return url.indexOf('?') >= 0 ? '&' : '?'
  //  }

  //  return new Promise(function (resolve, reject) {
  //    var timeout = timeout || 10000; // default timeout
  //    var callbackName = 'jsonp_callback_' + Date.now();
  //    var head = document.getElementsByTagName('head')[0] || document.documentElement;
  //    var script = document.createElement('script');
  //    script.src = url + urlJoinChar(url) + 'callback=' + callbackName;
  //    script.async = "true";

  //    window[callbackName] = function (data) {
  //      cleanUp();
  //      resolve(JSON.stringify(data));
  //    }

  //    script.onerror = function () {
  //      cleanUp();
  //      reject(Error("Network error loading " + script.src));
  //    }

  //    head.appendChild(script);
  //    var timeoutFunction = setTimeout(function () {
  //      cleanUp();
  //      reject(Error("Request to " + url + " failed to execute callback after " + timeout + "ms."))
  //    }, timeout);

  //    function cleanUp() {
  //      timeoutFunction && clearTimeout(timeoutFunction);
  //      window[callbackName] && delete window[callbackName];
  //      script && head.removeChild(script);
  //    }

  //  });
  //}
  
  return component;

}

let getValueInfoPage = function (ctx) {

  const __TEMPLATE = `
  <div class="w3-container w3-margin-bottom w3-animate-left">
    <h1>Templates</h1>
    <p style="text-indent:1em;">
      Documentación sobre los métodos y los parámetros utilizados en la plantillas.
    </p>
    <h3>getValue</h3>
    <p style="text-indent:1em;">
      El método <span class="w3-bold w3-italic">getValue</span> permite obtener el valor de un objeto por medio de una cadena de texto.
      El valor recuperado puede ser a su vez un objeto o una función.
    </p>
    <div class="w3-code jsHigh w3-small" style="overflow: auto;white-space: nowrap;">
      getValue('window.location');
    </div>
    <p style="text-indent:1em;">
      Se pueden obtener valores de elementos específicos de un array.
    </p>
    <div class="w3-code jsHigh w3-small" style="overflow: auto;white-space: nowrap;">
      getValue('window.location.hostname[0]');
    </div>
    <p style="text-indent:1em;">
      Al valor se le puede aplicar cualquier función de su prototipo así como especificar los parámetros si es que son requeridos.
    </p>
    <div class="w3-code jsHigh w3-small" style="overflow: auto;white-space: nowrap;">
      getValue('location.host|toUpperCase');
      <br/>
      getValue('location.host.length|toFixed,3');
    </div>
    <p style="text-indent:1em;">
      Se puede especificar el ámbito  o contexto en el que se relizará la búsqueda.
    </p>
    <div class="w3-code jsHigh w3-small" style="overflow: auto;white-space: nowrap;">
      getValue('id|toFixed,3', { id : 5 })');
    </div>
    <p style="text-indent:1em;">
      Se puede utlizar la palabra <i>this</i> para acceder al ámbito o contexto asociado.
    </p>
    <div class="w3-code jsHigh w3-small" style="overflow: auto;white-space: nowrap;">
      getValue('this', { id : 5 })');
    </div>
    <p style="text-indent:1em;">
      En el caso de no existir el valor en el ámbito actual se intentará encontrar en un ámbito asociado si es que existe.
      Para ello se comprueba que existe la propiedad <i>outerScope</i> que sera el ámbito de búsqueda.
    </p>
    <div class="w3-code jsHigh w3-small" style="overflow: auto;white-space: nowrap;">
      getValue('id', { items : [1,2,3] , outerScope : { id : 5 }})');
    </div>
    <h3>merge</h3>
    <p style="text-indent:1em;">
      El método <span class="w3-bold w3-italic">merge</span> permite aplicar los valores de un objeto a una plantilla de texto.
    </p>
    <div class="w3-code jsHigh w3-small" style="overflow: auto;white-space: nowrap;">
      merge('Url: {window.location.href}');<br>
      merge('Id: {id}', { id : 5 });
    </div>
    <p style="text-indent:1em;">
      Para determinar los valores de reemplazo se utiliza el método <span class="w3-bold w3-italic">getValue</span>.
      Es por tanto válido el uso de la sintaxis:
    </p>
    <div class="w3-code jsHigh w3-small" style="overflow: auto;white-space: nowrap;">
      merge('Nombre: {nombre|toUpperCase}', { nombre : 'Nombre' });<br>
      merge('Id: {id|toFixed,2}', { id : 5 });
    </div>
    <p style="text-indent:1em;">
      Si el valor indicado es una función, esta será invocada con el ámbito o contexto actual y 
      el valor devuelto será el utilizado a la hora de realizar la transformación.
    </p>
    <div class="w3-code jsHigh w3-small" style="overflow: auto;white-space: nowrap;">
      merge('Id: {format=>a b|toLowerCase;c}', { id : 5 , format : function(a,b,c){ return this.id; } });
    </div>
    <p style="text-indent:1em;">
      Es posible especificar una función de transformación. Se utiliza el caracter ":" como separador.
    </p>
    <div class="w3-code jsHigh w3-small" style="overflow: auto;white-space: nowrap;">
      merge('{tag:format}', { tag : 'DIV', format : function(s){ return 'Tag: ' + s.toLowerCase(); } });<br>
      merge('{tag|trim:format=>a @tag|toLowerCase;c}', { tag : 'DIV   ', format : function(value,a,b,c){ return 'Tag: ' + value; } });<br>
      merge('{tag|startsWith,D:format}', { tag : 'DIV', format : function(s){ return 'Tag: ' + s; } });<br>
    </div>
    <h3>execute</h3>
    <p style="text-indent:1em;">
      El método <span class="w3-bold w3-italic">execute</span> permite aplicar una plantilla a todos y cada uno de los elementos de un array.
      El valor devuelto puede ser una cadena de texto que será asignada a la propiedad <span class="w3-bold w3-italic">innerHTML</span> de un elementos contenedor o 
      un array de elementos DOM para añadirlos utilizando el método <span class="w3-bold w3-italic">appendChild</span>.
    </p>
    <div class="w3-code jsHigh w3-small" style="overflow: auto;white-space: nowrap;">
      execute(domElement|id, values, dom[true|false]);
    </div>
    <h3>string.format</h3>
    <p style="text-indent:1em;">
      El método <span class="w3-bold w3-italic">format</span> permite reemplazar lo valores de una cadena de texto.
      La sintaxis es muy similar a el método <span class="w3-bold w3-italic">merge</span> aunque existen algunas diferencias entre ambos.
    </p>
    <p style="text-indent:1em;">
      La principal diferencia radica en que <span class="w3-bold w3-italic">format</span> acepta un número indeterminado de parámetros de entrada.
      Estos parámetros pueden ser referenciados en la plantilla por medio de su indice:
    </p>
    <div class="w3-code jsHigh w3-small" style="overflow: auto;white-space: nowrap;">
      '{0} - {1}'.format(55, 'Nombre');
    </div>
    <p style="text-indent:1em;">
      El último parámetro proporcionado será tomado como el ámbito o contexto a la hora resolver referencias:
    </p>
    <div class="w3-code jsHigh w3-small" style="overflow: auto;white-space: nowrap;">
      '{0} - {nombre}'.format(55, { nombre : 'Antonio' });
    </div>
    <p style="text-indent:1em;">
      Resumen de las posibles formas de uso:
    </p>
    <div class="w3-code jsHigh w3-small" style="overflow: auto;white-space: nowrap;">
      '{0|toFixed,2}'.format(55);<br/>
      '{0|toUpperCase}'.format('aaa');<br/>
      '{0|toUpperCase:format}'.format('aaa', { format(value){ return '->' + value; } });<br/>
      '{0:format}'.format('aaa', { format(value){ return '->' + value; } });<br/>
      '{0:format=>1;2}'.format('aaa', { format(value,a,b){ return '->' + value + a + b; } });<br/>
      '{format}'.format({ id : 55, format(){ return this.id; }});<br/>
      '{format:url;@window.location.href|toUpperCase b}'.format({ format(value, href, b){ return value + ' ' + href;}});<br/>
      '{id}'.format({ id : 55, format(){ return this.id; }});<br/>
      '{id|toFixed,3}'.format({ id : 55 });<br/>
      '{id|toFixed,3:format}'.format({ id : 55, format(v){ return v + ' €'; }});<br/>
      '{id:format=>@window.location.href|toUpperCase;b;c}'.format({ id : 55, format(v,a,b,c){ return v + ' €'; }});<br/>

    </div>
  </div>`;


  let component = {
    root   : {},
    data   : {},
    init   : function(container){

    },
    render : function(container){
      this.root = pol.build('div', __TEMPLATE);
      return this.root;
    },
    mounted : function(container){
      initAll(container);   
    },
    dispose : function(){

    },
    eventHandlers : { 

    }
  };

  function initAll(container) {
    let scope = { id : 9, nombre : 'rafa' };
    window.POL = pol;
  }

  return component;

}
export {
  templatePage,
  getValueInfoPage
}