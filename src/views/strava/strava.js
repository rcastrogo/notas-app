import pol from "../../lib/mapa.js";
import pubsub from "../../lib/pubSub.Service";
import stravaAuthPage from "./auth.page.js"
import stravaMainPage from "./strava.page.js"

let stravaApi = (function () {

  const STRAVA_AUTH_URI = 'https://www.strava.com/oauth/token';
  const STRAVA_URI      = 'https://www.strava.com/api/v3/';
  const REDIRECT_URI    = 'https://rcastrogo.github.io/notas-app/strava/exchange_token';
  //const REDIRECT_URI    = 'http://localhost:8080/strava/exchange_token';

  return {
    config             : JSON.parse( localStorage.getItem('strava') || '{}' ),
    athlete            : undefined,
    redirectToAuthPage : function () {
      window.location = 'https://www.strava.com/oauth/authorize?' + 
                        'client_id=44665&' + 
                        'response_type=code&' + 
                        'redirect_uri={0}&'.format(REDIRECT_URI) + 
                        'approval_prompt=force&scope=read,activity:read_all';
    },
    reloadConfig       : function () {
      this.config = JSON.parse( localStorage.getItem('strava') || '{}' );
    },
    cache              : { activities : { streams : { }, 
                                          zones   : {} } },
    loadActivity       : __loadActivity,
    loadActivityStream : __loadActivityStream,
    loadActivities     : __loadActivities,
    loadAthleteInfo    : __loadAthleteInfo
  }
  
  function __refreshToken(fn) {
    return new Promise((resolve, reject) => {
      const url = ('{0}?client_id=44665&' +
	                 'client_secret=e872f05ea832f409ffe0e1ce042b074f691718d3&' +
	                 'refresh_token={refresh_token}&' +
	                 'grant_type=refresh_token'
                  ).format(STRAVA_AUTH_URI, stravaApi.config);
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
           stravaApi.config.access_token = result.access_token;
           stravaApi.config.expires_at = result.expires_at;
           stravaApi.config.expires_in = result.expires_in;
           stravaApi.config.refresh_token = result.refresh_token;
           localStorage.setItem('strava', JSON.stringify(stravaApi.config));
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

  function __loadActivityStream(activityId) { 
    // ============================================================================
    // Return cached data
    // ============================================================================
    if (stravaApi.cache.activities.streams[activityId]) {
      return new Promise((resolve, reject) => {
        console.log('Cached activity stream...', activityId);
        resolve(stravaApi.cache.activities.streams[activityId]);
      });
    }
    return new Promise((resolve, reject) => {
      let keys = 'heartrate,altitude,watt,cadence,velocity_smooth';
      let url  = ('{0}activities/{1}/streams?access_token={access_token}&' + 
                  'keys={2}&' + 
                  'key_by_type=true').format(STRAVA_URI, activityId, keys, stravaApi.config);
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
          stravaApi.cache.activities.streams[result.id] = result;
          resolve(result);
        })
        .catch( e => {
          if (request.status == 401) {
            __refreshToken(__loadActivityStream).then( result => {
              stravaApi.cache.activities.streams[result.id] = result;
              resolve(result);
            });
            return;
          }
          reject(e);
        });
    });
  }

  function __loadActivity(activityId) { 
    // ===========================================================================================
    // Return cached data
    // ===========================================================================================
    if (stravaApi.cache.activities[activityId]) {
      return new Promise((resolve, reject) => {
        console.log('Cached activity info...', activityId)
        resolve(stravaApi.cache.activities[activityId]);
      });
    }
    return new Promise((resolve, reject) => {
      let url = '{0}activities/{1}?access_token={access_token}'.format(STRAVA_URI, activityId, stravaApi.config);
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
          stravaApi.cache.activities[result.id] = result;
          resolve(result);
        })
        .catch( e => {
          if (request.status == 401) {
            __refreshToken(__loadActivity).then( result => {
              stravaApi.cache.activities[result.id] = result;
              resolve(result);
            });
            return;
          }
          reject(e);
        });
    });
  }

  function __loadActivities() { 
    return new Promise((resolve, reject) => {
      let url = '{0}athlete/activities?access_token={access_token}'.format(STRAVA_URI, stravaApi.config);
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

  function __loadAthleteInfo(){ 
    // ===========================================================================================
    // Return cached data
    // ===========================================================================================
    if (stravaApi.athlete) {
      return new Promise((resolve, reject) => {
        console.log('Cached athlete info...', stravaApi.athlete.id)
        resolve(stravaApi.athlete);
      });
    }
    // ===========================================================================================
    // Invoke strava api
    // ===========================================================================================
    return new Promise((resolve, reject) => {
      let url = '{0}athletes/{athlete.id}?access_token={access_token}'.format(STRAVA_URI, stravaApi.config);
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
          stravaApi.athlete = result;
          resolve(result);
        })
        .catch( e => {
          if (request.status == 401) {
            __refreshToken(__loadAthleteInfo).then( result => {
              stravaApi.athlete = result;
              resolve(result);
            });
            return;
          }
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