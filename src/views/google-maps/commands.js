import pol from "../../lib/mapa.js";
import utils from "../../lib/utils.js";
import pubsub from "../../lib/pubSub.Service.js";

function __getRoute(a, b) {
  return new Promise( (resolve, reject) => {
    new google.maps
              .DirectionsService()
              .route( { origin      : { lat : a.lat(), lng : a.lng() },
                        destination : { lat : b.lat(), lng : b.lng() },
                        travelMode  : google.maps.DirectionsTravelMode.DRIVING
                      }, (response, status) => {             
                        resolve(response.routes[0].overview_path);
                      });  
  });
}

function __getElevations(points) {
  return new Promise((resolve, reject) => {
    new google.maps
              .ElevationService()
              .getElevationAlongPath({ 'path'   : points,
                                       'samples': 256 }, 
                                     function (response, result){
                if(result == 'OK') 
                  resolve(response);
                else
                  reject();
             });
  });


}

// =============================================
// Document
// =============================================
function CreateDocument(){
  return { 
    name : '',
    description : '',
    points    : [],
    waypoints : [],
    map       : {},
    track     : {}
  }; 
}

// =======================================================================
// Commands
// =======================================================================
var Commands = {
  // =====================================================================
  // Commands.ChangeView
  // =====================================================================
  ChangeView : function(){
    var __types = [
      google.maps.MapTypeId.ROADMAP,
      google.maps.MapTypeId.TERRAIN,
      google.maps.MapTypeId.SATELLITE,
      google.maps.MapTypeId.HYBRID
    ];
    var __command = {
      bak     : 0,
      execute : function(doc){
        this.bak = doc.map.getMapTypeId();
        var __index = __types.indexOf(this.bak);
        __index = (++__index || '5') % 4;                          
        doc.map.setMapTypeId(__types[__index]);
        return __command;
      },
      undo : function(doc){
        doc.map.setMapTypeId(this.bak);
        return __command;
      }
    }
    return __command;
  },
  // =====================================================================
  // Commands.addWaypoint 
  // =====================================================================
  AddWaypoint : function(waypoint, callback){
    var __command = {
      execute : function(doc){
        doc.waypoints.push(waypoint);
        waypoint.setMap(doc.map);
        waypoint.points = [];
        if(doc.waypoints.length > 1){
          var __prev = doc.waypoints[doc.waypoints.length - 2];
          __getRoute(__prev.position, waypoint.position).then((points) => {
            waypoint.points = points;
            if(callback) callback();              
          });
        }
        return __command;
      },
      undo : function(doc){
        doc.waypoints.remove(waypoint);  
        waypoint.setMap(null);
        if(callback) callback();
        return __command;
      }
    }
    return __command;
  },
  // =====================================================================
  // Commands.RemoveWaypoint
  // =====================================================================
  RemoveWaypoint : function(waypoint, callback){
    var __command = {
      execute : function(doc){ 
        doc.waypoints.remove(waypoint);
        waypoint.setMap(null);      
        if(callback) callback();
        return __command;
      },
      undo : function(doc){
        doc.waypoints.push(waypoint);
        waypoint.marker.setMap(doc.map);
        if(callback) callback();
        return __command;
      }
    }
    return __command;
  },
  // =====================================================================
  // Commands.MoveWaypoint
  // =====================================================================
  MoveWaypoint : function(waypoint, callback){
    var __command = {
      __to : { 
        lat : waypoint.getPosition().lat(), 
        lng : waypoint.getPosition().lng()
      },
      __from : { 
        lat : waypoint._position.lat(), 
        lng : waypoint._position.lng()
      },
      __1   : '',
      __2   : '',
      __1_0 : [],
      __2_0 : [],
      execute : function(doc){ 
        waypoint.setPosition(this.__to);
        var __index   = doc.waypoints.indexOf(waypoint);
        var __indices = [ __index - 1,
                          __index,
                          __index + 1 > doc.waypoints.length - 1 ? -1 : __index + 1
                        ].where( v => v > -1 );
        this.targets = __indices.map( i => doc.waypoints[i] );
        if (this.targets.length == 2) {
          if (this.__1) {
            this.targets[1].points = this.__1;
            if(callback) callback();
            return __command;
          }
          __getRoute(this.targets[0].position, this.targets[1].position).then((points) => {
            this.__1_0 = this.targets[1].points;
            this.__1   = points;
            this.targets[1].points = points;
            if(callback) callback();              
          });
        } else if (this.targets.length == 3) {
          if (this.__1) {
            this.targets[1].points = this.__1;
            this.targets[2].points = this.__2;
            if(callback) callback();
            return __command;
          }
          __getRoute(this.targets[0].position, this.targets[1].position)
            .then((points) => {
              this.__1_0 = this.targets[1].points;
              this.__1   = points;
              this.targets[1].points = points;
              return __getRoute(this.targets[1].position, this.targets[2].position)             
            })
            .then((points) => {
              this.__2_0 = this.targets[2].points;
              this.__2   = points;
              this.targets[2].points = points;
              if(callback) callback();
            });
        } else {
          if(callback) callback();
        }
        return __command;
      },
      undo : function(doc){
        waypoint.setPosition(this.__from);
        if (this.targets.length == 2) {
          this.targets[1].points = this.__1_0;
        } else if (this.targets.length == 3) {
          this.targets[1].points = this.__1_0;
          this.targets[2].points = this.__2_0;
        }
        if(callback) callback();
        return __command;
      }
    }
    return __command;
  }
};

export{ 
  CreateDocument,
  Commands,
  __getElevations as getElevations
}