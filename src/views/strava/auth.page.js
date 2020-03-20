import pol from "../../lib/mapa.js";
import utils from "../../lib/utils.js";
import {stravaApi} from "./strava";
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

  function showMessage(title, message, cancel) {
    page.innerHTML = `
      <div class= "w3-container w3-padding">
        <h2>{0}</h2>
        <p>{1}</p>
      <div>`.format(title, message);
    if(cancel){
      let b = pol.$('button[on-click]', component.root)[0];
      b.onclick = () => ctx.router.navigateTo('');
    }

  }

  function initAll(message) {
    
    ctx.publish('msg\\page_component\\update\\title', 'Strava Auth');

    let query = ctx.router.current.queryValues;
    // ==================================================================================
    // Validación de parmetros de entrada
    // ==================================================================================
    if (query.error) return showMessage('Error', query.error, true);
    if (!query.code) return showMessage('Error', 'Parámetros insuficientes: code', true);
    if (stravaApi.config.access_token){
      ctx.router.navigateTo('');
      return;
    };
    // ==================================================================================
    // Obtener el token de acceso a Strava
    // ==================================================================================
    showMessage('Autorizando...', 'Espera un momento mientras se completa el proceso ' + 
                                  'de autorización. Esto puede tardar un poco.')
    const url = 'https://www.strava.com/oauth/token' +
	              '?client_id=44665' +
	              '&client_secret=e872f05ea832f409ffe0e1ce042b074f691718d3' +
	              '&code=' + query.code +
	              '&grant_type=authorization_code';
    pol.ajax
       .post(url, '', req => {
         req.setRequestHeader('Accept', 'application/javascript');
       })
       .then(text   => {
         let result = JSON.parse(text);
         if (result.errors) {
           throw new Error('{resource}: {field} {code}'.format(result.errors[0]));
         }
         return result;
       })
       .then(result => {
         // ====================================================================
         // Almacenar la configuración para acceso a Strava
         // ====================================================================
         localStorage.setItem('strava', JSON.stringify(result));
         stravaApi.reloadConfig();
         // ====================================================================
         // Informar
         // ====================================================================
         showMessage('Autorización', 
                     'La autorización se ha completado correctamente');
         // ====================================================================
         // Redireccionar a la página principal
         // ====================================================================
         setTimeout(function(){
                      ctx.router.navigateTo('strava?ref=auth');
                    }, 2000);
       })
       .catch( e => {
         // ====================================================================
         // Error al obtener el token
         // ====================================================================
         showMessage('Error', 
                     ('No se ha podido obtener el token de acceso.' + 
                       '{0}{0}{message}'
                     ).format('<br/>', e), 
                     true);
       });
  }

  return component;

}
