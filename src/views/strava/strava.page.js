import pol from "../../lib/mapa.js";
import utils from "../../lib/utils.js";
import pageContainer from "../components/page.component";

import HTML from "./strava.page.txt";

export default function(ctx) {

  let pageWrapper = pageContainer(ctx);
  let page        = {};

  let component   = {
    root   : {},
    init   : function(){ },
    render : function(){
      this.root = pageWrapper.render();
      page = pol.build('div', HTML, 'firstElementChild');
      this.root.appendChild(page);
      return this.root;
    },
    mounted : function(){
      initAll();
    }
  };

  function initAll() {
    ctx.publish('msg\\page_component\\update\\title', 'Strava');
    // ===========================================================================
    // Leer la configuración de Strava
    // ===========================================================================
    let strava_config = JSON.parse( localStorage.getItem('strava') || '{}' );
    if (strava_config.token_type) {
      activities();
      return;
    }
    // ===========================================================================
    // Strava no está configurado
    // ===========================================================================
    callStravaAuth();
  }

  function callStravaAuth() {
    window.location = 'https://www.strava.com/oauth/authorize?' + 
                      'client_id=44665&' + 
                      'response_type=code&' + 
                      'redirect_uri=https://rcastrogo.github.io/notas-app/strava/exchange_token&' + 
                      'approval_prompt=force&scope=read,activity:read_all';
  }

  const STRAVA_ENDPOINT = 'https://www.strava.com/api/v3/';


  // athlete/activities
  function activities() { 
    //let url = {}.format(STRAVA_ENDPOINT, 'athletes/{0}?access_token={1}')
    let config = JSON.parse(localStorage.getItem('strava'));
    let url = '{0}athlete/activities?access_token={1}'.format(STRAVA_ENDPOINT, config.access_token);
    //let url = '{0}athletes/{1}?access_token={2}'.format(STRAVA_ENDPOINT, config.athlete.id, config.access_token);
    pol.ajax
        .get(url, req => {
          req.setRequestHeader('Accept', 'application/javascript');
        })
        .then(text => JSON.parse(text))
        .then(result => {
          console.log(result);
          let html = require("./strava.t.activity.txt");
          let template = pol.build('div', html, true).cloneNode(true);
          page.appendChild(pol.templates.fill(template, result));

        })
        .catch( e => {
          ctx.publish(ctx.topics.NOTIFICATION, { message : e.message });
        });
  }
   


  return component;

}
