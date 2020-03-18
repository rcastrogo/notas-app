import pol from "../../lib/mapa.js";
import pubsub from "../../lib/pubSub.Service";
import stravaAuthPage from "./auth.page.js"
import stravaMainPage from "./strava.page.js"

let stravaApi = (function () {

  const STRAVA_AUTH_URI = 'https://www.strava.com/oauth/token';
  const STRAVA_URI      = 'https://www.strava.com/api/v3/';
  const REDIRECT_URI    = 'https://rcastrogo.github.io/notas-app/strava/exchange_token';

  const config = JSON.parse( localStorage.getItem('strava') || '{}' );

  return {
    config             : config,
    redirectToAuthPage : function () {
      window.location = 'https://www.strava.com/oauth/authorize?' + 
                        'client_id=44665&' + 
                        'response_type=code&' + 
                        'redirect_uri={0}&'.format(REDIRECT_URI) + 
                        'approval_prompt=force&scope=read,activity:read_all';
    },
    loadActivities  : __loadActivities,
    loadAthleteInfo : __loadAthleteInfo
  }
  
  function __refreshToken(fn) {
    return new Promise((resolve, reject) => {
      const url = ('{0}?client_id=44665&' +
	                 'client_secret=e872f05ea832f409ffe0e1ce042b074f691718d3&' +
	                 'refresh_token={refresh_token}&' +
	                 'grant_type=refresh_token'
                  ).format(STRAVA_AUTH_URI, config);
      let request;
      pol.ajax
         .post(url, '', req => {
           request = req;
           req.setRequestHeader('Accept', 'application/javascript');
         })
         .then(result => { 
            if (request.status == 401) throw new Error('Authorization Error');
            return JSON.parse(result);
          })
         .then(result => {
           pubsub.publish(
             pubsub.TOPICS.NOTIFICATION,
             { 
               message : 'Se ha renovado el token de acceso'
             }
           );
           // ====================================================
           // Almacenar los nuevos valores para acceso a Strava
           // ====================================================
           config.access_token = result.access_token;
           config.expires_at = result.expires_at;
           config.expires_in = result.expires_in;
           config.refresh_token = result.refresh_token;
           localStorage.setItem('strava', JSON.stringify(config));
           if(fn){
             fn().then( result => resolve(result) );
             return;
           }
           resolve();
         })
         .catch( e => {
           reject(e);
         });
    });
  }

  function __loadActivities() { 
    return new Promise((resolve, reject) => {
      let url = '{0}athlete/activities?access_token={access_token}'.format(STRAVA_URI, config);
      let request;
      pol.ajax
         .get(url, req => {
           request = req;
           req.setRequestHeader('Accept', 'application/javascript');
         })
        .then(result => { 
          if (request.status == 401) throw new Error('Authorization Error');
          return JSON.parse(result);
        })
        .then(result => {
          resolve(result);
        })
        .catch( e => {
          if (request.status == 401) {
            __refreshToken(__loadActivities).then( result => {
              resolve(result);
            });
            return;
          }
          reject(e);
        });
    });
  }

  function __loadAthleteInfo() { 
    return new Promise((resolve, reject) => {
      let url = '{0}athletes/{athlete.id}?access_token={access_token}'.format(STRAVA_URI, config);
      let request;
      pol.ajax
         .get(url, req => {
           request = req;
           req.setRequestHeader('Accept', 'application/javascript');
         })
        .then(result => { 
          if (request.status == 401) throw new Error('Authorization Error');
          return JSON.parse(result);
        })
        .then(result => {
          resolve(result);
        })
        .catch( e => {
          reject(e);
        });
    });
  }

}());

export {
  stravaAuthPage,
  stravaMainPage,
  stravaApi  
}