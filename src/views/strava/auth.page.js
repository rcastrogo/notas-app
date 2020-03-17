import pol from "../../lib/mapa.js";
import utils from "../../lib/utils.js";
import pageContainer from "../components/page.component";

import HTML from "./auth.page.txt";

export default function (ctx) {
  
  let pageWrapper = pageContainer(ctx);
  let page        = {};

  let component   = {
    root   : {},
    init   : function(){ },
    render : function(){
      this.root = pageWrapper.render();
      page = pol.build('div', HTML, 'firstElementChild');
      this.root.appendChild(initEventListeners(page));
      return this.root;
    },
    mounted : function(){
      initAll();
    }
  };

  function initEventListeners(target) {
    utils.addEventListeners(target, { });
    return target;
  }

  function initAll() {
    
    ctx.publish('msg\\page_component\\update\\title', 'Strava Auth');

    let queryValues = ctx.router.current.queryValues;
    if (queryValues.error) {
      return ctx.publish(ctx.topics.NOTIFICATION, { message : queryValues.error });
    }
    if (!queryValues.code) {
      return ctx.publish(ctx.topics.NOTIFICATION, { message : 'Parámetros insuficientes: code' });
    }
    // ====================================================================
    // Obtener el token de acceso a Strava
    // ====================================================================
    const url = 'https://www.strava.com/oauth/token' +
	              '?client_id=44665' +
	              '&client_secret=e872f05ea832f409ffe0e1ce042b074f691718d3' +
	              '&code=' + queryValues.code +
	              '&grant_type=authorization_code';
    pol.ajax
       .post(url, '', req => {
         req.setRequestHeader('Accept', 'application/javascript');
       })
       .then(text   => JSON.parse(text))
       .then(result => {
         // ====================================================
         // Almacenar la configuración para acceso a Strava
         // ====================================================
         localStorage.setItem('strava', JSON.stringify(result));
         console.log(result);
         // ====================================================
         // Informar
         // ====================================================
         page.innerHTML = '<h1>Autorización</h1>';
         // ====================================================
         // Redireccionar a la página principal
         // ====================================================
         setTimeout(function() {
                      ctx.router.navigateTo('strava');
                    }, 3000);
       })
       .catch( e => {
         ctx.publish(ctx.topics.NOTIFICATION, { message : e.message });
       });
  }

  return component;

}
