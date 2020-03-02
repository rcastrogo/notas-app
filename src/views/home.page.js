import pol from "../lib/mapa.js";

const __template = `  
  <div class="w3-container w3-animate-left" style="padding-top:10px;">

  </div>`;

let _time = 0;
export default function(){

  let component = {
    root   : {},
    init   : function(container){ },
    render : function(container){
      this.root = pol.build('div', __template).firstElementChild ;
      return this.root;
    },
    mounted : function(container){

      __createParticles();
      _metaBalls.init();

      this.root.appendChild(Game.InitCanvas({ width : 1000, height : 550 }).Canvas);
      Game.InitGameLoop(__update, __draw);
      Game.Play();
    },
    dispose : function () {
      Game.Stop();
    }
  };

  function __update(dt) {
     _time += dt;
    __updateParticles(dt);
    _metaBalls.update(dt);
  }

  function __draw(ctx) {
    _metaBalls.flip();
    ctx.drawImage(_metaBalls.context.canvas, 0, 0, Game.GameWidth, Game.GameHeight);
      
    ctx.translate(35, 90);
    ctx.scale(7,7);
    ctx.fillStyle = 'rgba(255,255,255,.4)';     
    _particles.forEach( function(p){
      ctx.globalAlpha = 1/__Clamp( p.velocity[0] + p.velocity[1], 0.01, 1);
      __drawParticle(ctx, p);
    });
    ctx.globalAlpha = 1;
    ctx.scale(-7, -7);
    ctx.translate(-35, -90);
  }

  // ==========================================================================================
  // FillTemplate
  // ==========================================================================================
  function onTestButtonClick_fill(mouseEvent){
    let template = pol.build('div', '<h3 xbind="id:id;innerHTML:nombre;onclick:__click"></h3>')
                      .firstElementChild;
    let r = pol.templates.fill(
              template, 
              { id : 555, 
                nombre : 'rafa',
                __click : () => {
                  return function (event) {
                    console.log(event);
                  }                        
                }});

    component.root.appendChild(r);
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

let Drawing = function(){

  var _that = {};
  
  _that.Clear = function(color){
    Game.Context.fillStyle = color;
    Game.Context.fillRect(0,0, Game.GameWidth, Game.GameHeight);
    return _that;
  }
  
  _that.createBuffer = function (width, height, renderFunction) {
    var buffer = document.createElement('canvas');
    buffer.width = width;
    buffer.height = height;
    renderFunction(buffer.getContext('2d'));
    return buffer;
  };

  return _that;

} ();

let Game = function(){

  var _that = { };   
  var _renderLoopId,_updateLoopId;    
  var _renderLoop,_updateLoop;  
  
  function __getTimestamp(){ 
    return ( window.performance && window.performance.now )
           ? window.performance.now()
           : new Date().getTime(); 
  } 
 
  _that.Play = function(controllerName) {
    _updateLoopId = setInterval(_updateLoop, 1000 / 30); // fps
    _renderLoopId = requestAnimationFrame(_renderLoop);
  }

  _that.Stop = function () {
    clearInterval(_updateLoopId);
    cancelAnimationFrame(_renderLoopId);
  }

  _that.InitGameLoop = function(update, draw) {        
    var last = __getTimestamp();
    var dt   = 0;
    _updateLoop = function(){
      var now = __getTimestamp();
      var dt = Math.min(1, (now - last) / 1000);      
      update(dt);            
      last = now;                  
    }
    let __clearContext = function(ctx){
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.ImageSmoothingEnabled = false;
      ctx.clearRect(0, 0, _that.Canvas.width, _that.Canvas.height);
    }
    _renderLoop = function() {
      __clearContext(_that.Context);
      draw(_that.Context);
      _renderLoopId = requestAnimationFrame(_renderLoop);
    };
    return _that;
  } 
          
  _that.InitCanvas    = function(o){
    _that.GameWidth    = o.width || 200;
    _that.GameHeight   = o.height|| 280;        
    _that.Canvas       = pol.build('canvas', { id : 'canvas', width : _that.GameWidth, height : _that.GameHeight });
    _that.Context      =_that.Canvas.getContext("2d");          
    return _that;
  } 
            
  return _that;
  
}();

function __drawParticle(ctx, particle){       
  ctx.beginPath(); 
  ctx.arc(particle.position[0], particle.position[1], 1, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.closePath();
}

var _particles = [];
function __createParticles(){

  var __context = Drawing.createBuffer(250, 160, function(ctx){
    ctx.fillStyle= 'rgba(0,0,0,0)';
    ctx.fillRect(0,0,250,160)      
    ctx.font = '40px Moire ExtraBold';
    ctx.fillStyle= 'rgba(0,0,255,1)';
    ctx.textBaseline = 'top';
    ctx.fillText('M i s', 38, 0);
    ctx.fillText('N o t a s', 3, 25);
  }).getContext('2d');

  var imageData = __context.getImageData(0,0,250,160);
  _particles.length = 0;
  var __half_w = Game.GameWidth>>1;
  var __half_h = Game.GameHeight>>1;
  for (var x = 0; x < imageData.width; x++) {
    for (var y = 0; y < imageData.height; y++) {
        var pixelIndex = imageData.width * 4 * y + x * 4              
        var r = imageData.data[pixelIndex];
        var g = imageData.data[pixelIndex + 1];
        var b = imageData.data[pixelIndex + 2];
        var a = imageData.data[pixelIndex + 3]; 
        if(b!=0){
          var posX = ~~(Math.random() * Game.GameWidth) - __half_w;
          var posY = ~~(Math.random() * Game.GameHeight) - __half_h;
          _particles.push({
                position    : [posX, posY],
                origin      : [posX,posY], 
                destination : [x, y],
                velocity    : [0, 0]
          });
        }            
    }
  }             
}

var __Random = function(max,min){
  return Math.floor(Math.random()*(max-min+1)+min);
}

var __Clamp = function(value, min, max) {
  return Math.min(Math.max(value, min), max);
};
function __updateParticles(dt){
  var __total = 0;
  var __half_w = Game.GameWidth>>3;
  var __half_h = Game.GameHeight>>3;
  for (var i = 0; i < _particles.length; i++) {
    var particle = _particles[i];
    particle.velocity[0] = (particle.destination[0] - particle.position[0]) * dt*1.5;
    particle.velocity[1] = (particle.destination[1] - particle.position[1]) * dt;
    if(Math.abs(particle.velocity[0] + particle.velocity[1]) < .0005){
      if(__Random(10,0)>9){
        if(Math.sin(_time)>0){
          particle.position[0] = ~~(Math.random() * Game.GameWidth) - __half_w; 
        }else{
          particle.position[1] = ~~(Math.random() * Game.GameHeight) - __half_h; 
        }
      }        
    }else{
      particle.position[0] += particle.velocity[0];
      particle.position[1] += particle.velocity[1];
    }
  }
}
  
var _metaBalls = { 
  balls  : [],
  init   : function(){
    _metaBalls.context = Drawing.createBuffer(150, 60, function(ctx){ }).getContext('2d');
    for( var x=0; x<3; x++){
      var __ball = { position    : { x : __Random(0, 150), 
                                      y : __Random(0, 60)},
                      velocity    : { x : __Random(32, -32), 
                                      y : __Random(32, -32)},
                      size        : __Random(44, 18)
                    };
      __ball.gradient = _metaBalls.context.createRadialGradient(0, 0, 3, 0, 0, __ball.size);
      __ball.gradient.addColorStop(0, 'rgba(0,0,250,1)');
      __ball.gradient.addColorStop(1, 'rgba(0,0,155,0)');
      _metaBalls.balls.push( __ball);
    }
  },
  update : function(dt){
    _metaBalls.balls.forEach( function(b){
      b.position.x += b.velocity.x * dt;
      b.position.y += b.velocity.y * dt;
      if(b.position.x<0 || b.position.x>150){
        b.velocity.x  = -b.velocity.x;
      }
      if(b.position.y<0 || b.position.y>60){
        b.velocity.y  = -b.velocity.y;
      }
    });
  },
  flip   : function(){

    var __ctx = _metaBalls.context;
    __ctx.clearRect(0,0,150,60);      
    _metaBalls.balls.forEach( function(b){
      __ctx.beginPath();
      __ctx.fillStyle = b.gradient;
      __ctx.arc(b.position.x, b.position.y, b.size, 0, Math.PI*2);
      __ctx.translate(b.position.x, b.position.y);
      __ctx.fill();   
      __ctx.translate(-b.position.x, -b.position.y);
    })

    var __imageData = __ctx.getImageData(0,0,150,60);
    var __data = __imageData.data;
    for (var i = 0, n = __data.length; i < n; i += 4) {
      if(__data[i+3] > 90 && __data[i+3]<120){
        __data[i+3] = 0;
      }else{
        __data[i]   = ~~(Math.sin(_time) * 127 + 128);
        __data[i+1] = ~~(Math.sin(_time+2) * 127 + 128);
        __data[i+2] = ~~(Math.sin(_time+5) * 127 + 128);         
      }
    }
    __ctx.putImageData(__imageData, 0, 0); 
  }
}