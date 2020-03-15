import pol from "../../lib/mapa.js";
import utils from "../../lib/utils.js";
import pubsub from "../../lib/pubSub.Service.js";

const TOPICS = pubsub.TOPICS;

let imagePage = function (ctx) {
  
  const __TEMPLATE = require("./page.txt").default;

  let component = {
    root   : {},
    data   : {},
    init   : function(container, router){ },
    render : function(container){
      this.root = pol.build('div', __TEMPLATE);
      return this.root;
    },
    mounted : function(container){
      initAll(container);   
    },
    dispose : function(){ },
    eventHandlers : { }
  };

  function initAll(container) {

    utils.addEventListeners(container, { 
      goBack : () => { history.back(); } ,
      notify : () => { pubsub.publish(TOPICS.NOTIFICATION, { message : 'Imagen mostrada' }); }
    });

    pol.ajax
       .get('./assets/js/libros.json', req => {
         req.setRequestHeader('Accept', 'application/javascript');
       })
       .then(result => {
         return JSON.parse(result); 
       })
       .then(result => { 
         // ================================================
         // Obtener la url de la imagen
         // ================================================
         let id  = ctx.router.current.params[1];
         let url = result.where({ ID : id })[0].cover;
         component.root
                  .querySelector('.w3-animate-left')
                  .style
                  .backgroundImage = 'url({0})'.format(url);
       })
       .catch( e => {
         console.log(e);
       })
       .finally(() => {      
       });
  }

  return component;

}

export {
  imagePage
}