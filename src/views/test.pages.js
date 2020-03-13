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
        <span xbind="" class="w3-small">{length:fn.formatId2} Elementos</span>
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
            <img xbind="id:libro.thumbnail" alt="Portada" on-click="publish" class="book w3-left w3-margin-right w3-margin-bottom">
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
      formatId: function (id, prefix, element) {
        return '{0}-{1}'.format(prefix, id);
      },
      htmlDecode: function (encodedHtml) {
        return encodedHtml.htmlDecode();
      },
      formatId2: function (count, element,b,c) {
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
      },
      publish: function (libro) {
        console.log(libro.id);
        pubsub.publish(TOPICS.SHOW_IMAGE, { id : libro.id });
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
    <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
      getValue('window.location');
    </div>
    <p style="text-indent:1em;">
      Se pueden obtener valores de elementos específicos de un array.
    </p>
    <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
      getValue('window.location.hostname[0]');
    </div>
    <p style="text-indent:1em;">
      Al valor se le puede aplicar cualquier función de su prototipo así como especificar los parámetros si es que son requeridos.
    </p>
    <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
      getValue('location.host|toUpperCase');
      <br/>
      getValue('location.host.length|toFixed,3');
    </div>
    <p style="text-indent:1em;">
      Se puede especificar el ámbito  o contexto en el que se relizará la búsqueda.
    </p>
    <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
      getValue('id|toFixed,3', { id : 5 })');
    </div>
    <p style="text-indent:1em;">
      Se puede utlizar la palabra <i>this</i> para acceder al ámbito o contexto asociado.
    </p>
    <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
      getValue('this', { id : 5 })');
    </div>
    <p style="text-indent:1em;">
      En el caso de no existir el valor en el ámbito actual se intentará encontrar en un ámbito asociado si es que existe.
      Para ello se comprueba que existe la propiedad <i>outerScope</i> que sera el ámbito de búsqueda.
    </p>
    <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
      getValue('id', { items : [1,2,3] , outerScope : { id : 5 }})');
    </div>
    <h3>merge</h3>
    <p style="text-indent:1em;">
      El método <span class="w3-bold w3-italic">merge</span> permite aplicar los valores de un objeto a una plantilla de texto.
    </p>
    <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
      merge('Url: {window.location.href}');<br>
      merge('Id: {id}', { id : 5 });
    </div>
    <p style="text-indent:1em;">
      Para determinar los valores de reemplazo se utiliza el método <span class="w3-bold w3-italic">getValue</span>.
      Es por tanto válido el uso de la sintaxis:
    </p>
    <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
      merge('Nombre: {nombre|toUpperCase}', { nombre : 'Nombre' });<br>
      merge('Id: {id|toFixed,2}', { id : 5 });
    </div>
    <p style="text-indent:1em;">
      Si el valor indicado es una función, esta será invocada con el ámbito o contexto actual y 
      el valor devuelto será el utilizado a la hora de realizar la transformación.
    </p>
    <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
      merge('Id: {format=>a b|toLowerCase;c}', { id : 5 , format : function(a,b,c){ return this.id; } });
    </div>
    <p style="text-indent:1em;">
      Es posible especificar una función de transformación. Se utiliza el caracter ":" como separador.
    </p>
    <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
      merge('{tag:format}', { tag : 'DIV', format : function(s){ return 'Tag: ' + s.toLowerCase(); } });<br>
      merge('{tag|trim:format=>a @tag|toLowerCase;c}', { tag : 'DIV   ', format : function(value,a,b,c){ return 'Tag: ' + value; } });<br>
      merge('{tag|startsWith,D:format}', { tag : 'DIV', format : function(s){ return 'Tag: ' + s; } });<br>
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
    <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
      '{0} - {1}'.format(55, 'Nombre');
    </div>
    <p style="text-indent:1em;">
      El último parámetro proporcionado será tomado como el ámbito o contexto a la hora resolver referencias:
    </p>
    <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
      '{0} - {nombre}'.format(55, { nombre : 'Antonio' });
    </div>
    <p style="text-indent:1em;">
      Resumen de las posibles formas de uso:
    </p>
    <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
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
    <h3>execute</h3>
    <p style="text-indent:1em;">
      El método <span class="w3-bold w3-italic">execute</span> permite aplicar a una plantilla (<span class="w3-bold w3-italic">HTMLElement</span>) los valores de todos y cada uno de los elementos de un array.
    </p>
    <p style="text-indent:1em;">
      El valor devuelto puede ser o una cadena de texto para establecer la propiedad <span class="w3-bold w3-italic">innerHTML</span> o 
      un array de <span class="w3-bold w3-italic">HTMLElement</span> para añadirlos con el método <span class="w3-bold w3-italic">appendChild</span>.
    </p>
    <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
      execute(HTMLElement|id, values, dom[true|false]);
    </div>
    <h3>fill</h3>
    <p style="text-indent:1em;">
      El método <span class="w3-bold w3-italic">fill</span> permite aplicar los valores de un ámbito o contexto una plantilla (<span class="w3-bold w3-italic">HTMLElement</span>).
    </p>
    <p style="text-indent:1em;">
      El valor devuelto es la propia plantilla en la que se han establecido los valores especificados. 
    </p>
    <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
      fill(HTMLElement|id, scope);
    </div>
    <p style="text-indent:1em;">
      Formas de modificar/crear contenido:
      <ul>
        <li>xbind</li>
        <li>templates.merge</li>
        <li>xfor</li>
      </ul>
    </p>
    <h5>Plantilla:</h5>
    <div class="w3-code htmlHigh" style="overflow: auto;white-space: pre;">
&lt;header&gt;
  &lt;h1&gt;Libros&lt;/h1&gt;
&lt;/header&gt;
&lt;span <b>xbind=&quot;&quot;</b>&gt;<b>{length:fn.formatId2}</b> Elementos&lt;/span&gt;
&lt;div&gt;    
  &lt;div <b>xfor=&quot;bookmark in bookmarks&quot;</b>&gt;
    &lt;p <b>xbind=&quot;id:bookmark.id&quot;</b> on-click=&quot;goToBookmark&quot;&gt;<b>{bookmark.letra}</b>&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;<b>xfor=&quot;libro in this&quot;</b> <b>xbind=&quot;id:fn.formatId =&gt; @libro.ID mark&quot</b>;&gt;
  &lt;header on-click=&quot;expandCollapse&quot;&gt;
    &lt;h4 <b>xbind=&quot;&quot;</b>&gt;<b>{libro.title}</b>&lt;/h4&gt;
  &lt;/header&gt;
  &lt;div&gt;
    &lt;div <b>xbind=&quot;&quot;</b>&gt;
      &lt;img <b>xbind=&quot;id:libro.thumbnail&quot;</b>&gt;
      &lt;b&gt;Autor&lt;/b&gt; <b>{libro.author}</b>&lt;br/&gt;
      &lt;b&gt;P&#225;ginas&lt;/b&gt; <b>{libro.pages}</b>&lt;br/&gt;
      &lt;b&gt;A&#241;o&lt;/b&gt; <b>{libro.publisher_date}</b>&lt;br/&gt;
      &lt;b&gt;Editorial&lt;/b&gt; <b>{libro.publisher}</b>&lt;br/&gt;
      &lt;b&gt;Idioma&lt;/b&gt; <b>{libro.language}</b>
      &lt;div <b>xbind=&quot;id:fn.formatId =&gt; @libro.ID book;innerHTML:libro.content_short|htmlDecode&quot;</b> on-click=&quot;showAllContent&quot;&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div <b>xbind=&quot;&quot;</b>&gt;Categor&#237;as (<b>{libro.categories.length}</b>)&lt;/div&gt;
    &lt;div&gt;
      &lt;div <b>xfor=&quot;categoria in libro.categories&quot;</b>&gt;
        &lt;p <b>xbind=&quot;id:categoria.nicename;innerHTML:categoria.name&quot;</b> on-click=&quot;makeRequest:cat&quot;&gt;&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
    </div>

    <h5>Datos:</h5>
    <div class="w3-code jsHigh" style="overflow: auto;white-space: pre;">
[
  {
    "ID": "17003",
    "title": "Book of Scratch Vol. 1",
    "author": "Varios",
    "content": "The first ever Code Club bo...",
    "content_short": "The first ever Code Club book...",
    "publisher": "Raspberry Pi Press",
    "publisher_date": "2018",
    "pages": "111",
    "language": "english",
    "url_details": "http://www.etnassoft.com/biblioteca/book-of-scratch-vol-1/",
    "url_download": "https://openlibra.com/book/book-of-scratch-vol-1",
    "cover": "https://olcovers2.blob.core.windows.net/coverswp/2018/12/CC_Book_of_Scratch_v1-OpenLibra-339x461.gif",
    "thumbnail": "https://olcovers2.blob.core.windows.net/coverswp/2018/12/CC_Book_of_Scratch_v1-OpenLibra-110x153.gif",
    "categories": [
      {
        "category_id": 224,
        "name": "Otros Lenguajes",
        "nicename": "programacion_otros_lenguajes"
      },
      {
        "category_id": 220,
        "name": "Programación",
        "nicename": "libros_programacion"
      }
    ]
  }
]
    </div>

    <h3>xbind</h3>
    <p style="text-indent:1em;">
      El atributo <span class="w3-bold w3-italic">xbind</span> permite determinar que elementos <span class="w3-bold w3-italic">HTMLElement</span>
      serán procesados y en los que se reliazará la sustitución.
    </p>
    <p style="text-indent:1em;">
      El contenido de este atributo es una lista de pares (propiedad:valor|función) separados por el caracter ";".
      El valor obtenido es asignado a la propiedad correspondiente del <span class="w3-bold w3-italic">HTMLElement</span>.
    </p>
    <p style="text-indent:1em;">
      Si el valor obtenido fuera una función, esta se invocará para obtener el valor de reemplazo. La función se ejecuta en el ámbito o
      contexto altual y se le pasan los parámetros indicados después de "=>". Estos parámetros son procesados por el método <span class="w3-bold w3-italic">getValue</span>
      si empiezan por "@".
    </p>
    <div class="w3-code htmlHigh" style="overflow: auto;white-space: nowrap;">
      &lt;img xbind=&quot;id:libro.thumbnail&quot;&gt;<br/>
      &lt;p xbind=&quot;id:categoria.nicename;innerHTML:categoria.name&quot;&gt;&lt;/p&gt;<br/>
      &lt;div xbind=&quot;innerHTML:libro.content_short|trim&quot;&gt; &lt;/div&gt;<br/>
      &lt;xfor=&quot;libro in this&quot; xbind=&quot;id:fn.formatId =&gt; @libro.ID mark&quot;;&gt;<br/>
      &nbsp&nbsp&lt;div xbind=&quot;&quot;&gt;<br/>
      &nbsp&nbsp&nbsp&nbspCategor&#237;as ({libro.categories.length})<br/>
      &nbsp&nbsp&lt;/div&gt;<br/>
      &lt;/div&gt;
    </div>
    <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
      data.fn = {<br/>
      &nbsp&nbsp  formatId: function (id, prefix, element) {<br/>
      &nbsp&nbsp&nbsp&nbsp    return '{0}-{1}'.format(prefix, id);<br/>
      &nbsp&nbsp  }<br/>
      }
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
    pol.Include('https://www.w3schools.com/lib/w3codecolor.js')
       .then(() => w3CodeColor());
  }

  return component;

}

let addEventListenersInfoPage = function (ctx) {

  const __TEMPLATE = `
  <div class="w3-container w3-margin-bottom w3-animate-left">
    <h1>Utils</h1>
    <p style="text-indent:1em;">
      Documentación sobre los métodos y los parámetros utilizados para la asociación de eventos de forma declarativa.
    </p>
    <h3>addEventListeners</h3>
    <p style="text-indent:1em;">
      El método <span class="w3-bold w3-italic">addEventListeners</span> permite realizar la asociación de una serie de
      eventos de una forma declarativa.
    </p>
    <p style="text-indent:1em;">
      Los eventos disponibles son:
      <ul>
        <li>on-click</li>
        <li>on-publish</li>
        <li>route-link</li>
        <li>on-change</li>
      </ul>
    </p>
    <p style="text-indent:1em;">
      El método tiene la siguiente firma;
      <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
        addEventListeners(container, handlers, context);<br>
        <br>
        utils.addEventListeners(<br>component.root, 
                                <br>component.eventHandlers, { 
                                <br>&nbsp router      : component.router,
                                <br>&nbsp toggleMenu  : toggleMenu,
                                <br>&nbsp hideMenu    : hideMenu
                                <br>});
      </div>
      <i>Container</i> es el <span class="w3-bold w3-italic">HTMLElement</span> raíz en el que se realizará el enlace.
      <i>Handlers</i> y <i>context</i> son objetos en los que residen las funciones referenciadas. La búsqueda se realiza en el orden indicado.
      Si la función no existe en <i>handlers</i> se busca en <i>context</i>.
    </p>
    <h4>on-click</h4>
    <p style="text-indent:1em;">
      El atributo <span class="w3-bold w3-italic">on-click</span> permite asociar el evento click de un elemento con una función.
      La función se ejecutará en el contexto proporcionado. Es posible pasar parámetros adicionales a la función. Los parámetros 
      se separan por el caracter ":".
      <div class="w3-code htmlHigh" style="overflow: auto;white-space: nowrap;">
        &lt;button on-click=&quot;addNote:1:@id&quot;&gt;＋&lt;/button&gt;<br>
      </div>
      <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
        function addNote(target, mouseEvent, 1, 55);
      </div>
    </p>
    <h4>on-publish</h4>
    <p style="text-indent:1em;">
      El atributo <span class="w3-bold w3-italic">on-publish</span> permite realizar la 
      subcripción a una determinada publicación o mensaje y asociarla con una función encargada de su proceso.
      La función se ejecutará en el contexto proporcionado.
      <div class="w3-code htmlHigh" style="overflow: auto;white-space: nowrap;">
        &lt;a href=&quot;&quot; route-link on-publish=&quot;TOPICS.VIEW_CHANGE:syncMenuItem&quot;&gt;Inicio&lt;/a&gt;<br>
      </div>
      <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
        function syncMenuItem(target, data){
          <br>&nbsp hideMenu();
        <br>}
      </div>
      Existen dos funciones para realizar el cambio de algunos valores.
      <div class="w3-code htmlHigh" style="overflow: auto;white-space: nowrap;">
        &lt;span on-publish=&quot;TOPICS.XXX_CHANGE:innerHTML&quot;&gt;Madrid&lt;/span&gt;
      </div>
      <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
        <br>let fn = {
        <br>&nbsp innerHTML : (e, value) => e.innerHTML = value,
        <br>&nbsp className : (e, value) => e.className = value
        <br>}
      </div>
    </p>
    <h4>route-link</h4>
    <p style="text-indent:1em;">
      El atributo <span class="w3-bold w3-italic">route-link</span> permite asociar el evento click de un 
      <span class="w3-bold w3-italic">HTMLAnchorElement</span> con una función que automáticamente cambiará la ruta
      actual a la establecida en su propiedad href. El atributo no tiene parámetros.
      <div class="w3-code htmlHigh" style="overflow: auto;white-space: nowrap;">
        &lt;a href=&quot;templates/utils&quot; route-link on-click=&quot;hideMenu&quot;&gt;Utils&lt;/a&gt;<br>
        &lt;a href=&quot;about&quot; route-link on-publish=&quot;TOPICS.VIEW_CHANGE:sync&quot;&gt;?&lt;/a&gt;
      </div>
    </p>
    <p style="text-indent:1em;">
      Es necesario proporcionar una referencia a router en el contexto en la llamada..
      <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
        utils.addEventListeners(<br>&nbsp component.root, 
                                <br>&nbsp component.eventHandlers,
                                <br>&nbsp { 
                                <br>&nbsp&nbsp router      : component.router,
                                <br>&nbsp&nbsp toggleMenu  : toggleMenu,
                                <br>&nbsp&nbsp hideMenu    : hideMenu
                                <br>&nbsp });
      </div>
    </p>
    <h4>on-change</h4>
    <p style="text-indent:1em;">
      El atributo <span class="w3-bold w3-italic">on-change</span> permite controlar el cambio de los valores en 
      los elementos <span class="w3-bold w3-italic">HTMLInputElement</span> y <span class="w3-bold w3-italic">HTMLSelectElement</span>.
      El valor del atributo puede ser una función o 'publish'. En el primer caso la función especificada recibe las notificaciones.
      La función se ejecutará en el contexto proporcionado.
      En el segundo caso automaticamente se creará un publicador de mensajes de cambio.
    </p>
    <div class="w3-code htmlHigh" style="overflow: auto;white-space: nowrap;">
      &lt;h2&gt;Nueva nota&lt;/h2&gt;<br>
      &lt;form&gt;<br>
        &nbsp &lt;label for=&quot;txt-title&quot;&gt;T&#237;tulo&lt;/label&gt;<br>
        &nbsp &lt;input on-change=&quot;onChange&quot; type=&quot;text&quot; id=&quot;txt-title&quot; &gt;<br>
        &nbsp &lt;label for=&quot;txt-text&quot;&gt;Texto&lt;/label&gt;<br>
        &nbsp &lt;textarea on-change=&quot;publish&quot; id=&quot;txt-text&quot; rows=&quot;4&quot;&gt;&lt;/textarea&gt;<br>
      &lt;/form&gt;<br>
      &lt;div&gt;<br>
        &nbsp &lt;button type=&quot;button&quot; id=&quot;btn-grabar&quot;&gt;Grabar&lt;/button&gt;<br>
      &lt;/div&gt;<br>
    </div>
    <div class="w3-code jsHigh" style="overflow: auto;white-space: nowrap;">
      utils.addEventListeners(__container, {}, {
      <br>&nbsp onChange: (e) => {
      <br>&nbsp&nbsp   console.log('onChange_fn', e.value);
      <br>&nbsp }
      <br>&nbsp });
      <br>&nbsp pubsub.subscribe(TOPICS.VALUE_CHANGE, (message, e) => {
      <br>&nbsp&nbsp   console.log('value.change', e.value);
      <br>&nbsp })
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
    pol.Include('https://www.w3schools.com/lib/w3codecolor.js')
       .then(() => w3CodeColor());
  }

  return component;

}

export {
  templatePage,
  getValueInfoPage,
  addEventListenersInfoPage
}