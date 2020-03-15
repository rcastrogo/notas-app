import pol from "../../lib/mapa.js";
import utils from "../../lib/utils.js";
import pubsub from "../../lib/pubSub.Service.js";
import pageContainer from "../components/page.component";
import HTML from "./page.txt";

const TOPICS = pubsub.TOPICS;

export default function (ctx) {
  
  let pageWrapper = pageContainer(ctx);
  let page        = {};

  let component   = {
    root   : {},
    init   : function(container, router){ },
    render : function(container){
      this.root = pageWrapper.render(container);
      page = pol.build('div', HTML, 'firstElementChild');
      this.root.appendChild(initEventListeners(page));
      return this.root;
    },
    mounted : function(){
      initAll();
    },
    dispose       : function(){ },
    eventHandlers : { }
  };


  function initEventListeners(target) {
    utils.addEventListeners(target, { 
      notify : () => { pubsub.publish(TOPICS.NOTIFICATION, { message : 'Imagen mostrada' }); }
    });
    return target;
  }

  function initAll() {
    
    pubsub.publish('msg_page_component_update_title', 'Imagen' );

    pol.ajax
       .get('./assets/js/libros.json', req => {
         req.setRequestHeader('Accept', 'application/javascript');
       })
       .then(result => {
         let books = JSON.parse(result); 
         // ================================================
         // Obtener la url de la imagen
         // ================================================
         let id  = ctx.router.current.params[1];
         let url = books.where({ ID : id })[0].cover;
         page.style.backgroundImage = 'url({0})'.format(url);
       })
       .catch( e => {
         console.log(e);
       })
       .finally(() => {      
       });
  }

  return component;

}
