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
       .then(JSON.parse)
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
        <span xbind="" class="w3-small">{this.length} Elementos</span>
        <div class="w3-light-grey w3-tiny" style="overflow:auto;width:100%">    
          <div book-cat xfor="bookmark in bookmarks" class="w3-cell" >
            <p xbind="id:bookmark.id" on-click="goToBookmark" class="w3-border w3-round w3-white" style="padding:2px 6px;margin:2px 4px;white-space:nowrap;">{bookmark.letra}</p>
          </div>
        </div>
      </div>
      <div xfor="libro in this" class="w3-card-4 w3-margin-bottom" xbind="id:fn.formatId @libro.ID,mark">
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
            <div xbind="id:fn.formatId @libro.ID,book;innerHTML:libro.content_short%htmlDecode" 
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
  

  // ==========================================================================================
  // FillTemplate
  // ==========================================================================================
  function onTestButtonClick_fill(mouseEvent){
    let html = `
      <h3 xbind="id:id;innerHTML:this.nombre fn.toUpperCase" on-click="__click"></h3>
      <h3 xbind=""><b>All:</b> {id} <b>-</b> {nombre:fn.toUpperCase} {fn.counter}</h3>
      <ul>
        <li xfor="enlace in enlaces" xbind="id:enlace.id;innerHTML:enlace.nombre fn.toUpperCase a b c d"></li>
      </ul>
      <div>
        <div xfor="otro in otros" xbind="id:otro.id;className:otro.nombre fn.toUpperCase">
          <div xbind="innerHTML:outerScope.nombre fn.toUpperCase"></div>
          <table>
            <caption xbind="innerHTML:otro.nombre fn.toUpperCase"></caption>
            <tbody>
              <tr xfor="valor in otro.valores">
                <td xbind="innerHTML:index"></td><td xbind="innerHTML:valor fn.toUpperCase"></td>
              </tr>
            </tbody>
          </table>
          <h2 xfor="entrada in otro.data" xbind="innerHTML:entrada.descripcion fn.toUpperCase"></h2>       
        </div>
      </div>
    `;
    let template = pol.build('div', html);
    let r = pol.templates.fill(
              template, 
              { id      : 555, 
                nombre  : 'fer',
                enlaces : [
                  { id : 555, nombre : 'Enlace 1'},
                  { id : 444, nombre : 'Enlace 444'},
                  { id : 333, nombre : 'Enlace 333'}
                ],
                otros : [
                  { id : 555, 
                    nombre  : 'Otros 1', 
                    data    : [ { numero : 5, descripcion : 'La descripción' }, 
                                { numero : 15, descripcion : 'La descripción 15' }], 
                    valores : ['v1', 'v2', 56]
                  },
                  { id : 444, nombre : 'Otros 2', valores : ['v3', 'v4']},
                  { id : 333, nombre : 'Otros 3', valores : ['v5', 'v6']}
                ],
                fn: {
                  toUpperCase : (v, scope, child, p1, p2, p3) => {
                    return (v) ? v.toString().toUpperCase(v) : '';
                  },
                  counter: scope => {
                    return 'a78';
                  }
                }
              });

    component.root.appendChild(r);
    utils.addEventListeners(template, {}, 
                            { __click : (event) => {
                                  console.log(event);
                              }
                            });
  }

  // ==========================================================================================
  // ExecuteTemplate
  // ==========================================================================================
  function onTestButtonClick(mouseEvent){
    let template = pol.build('div', 
                             '<h3 xbind="id:id;innerHTML:nombre;"></h3>')
                      .firstElementChild;
    let innerHtml = pol.templates
                       .execute(template, [{ id : 555, nombre : 'rafa'},
                                           { id : 444, nombre : 'rafa 444'},
                                           { id : 333, nombre : 'rafa 333'}]);
    pol.templates
       .execute(template,
                [{ id : 555, nombre : 'rafa'},
                 { id : 444, nombre : 'rafa 444'},
                 { id : 333, nombre : 'rafa 333'}],
                true
               )
      .map( e => e.node )
      .forEach( node => component.root.appendChild(node) );
  }


  return component;

}

export {
  templatePage
}