import pol from "../../lib/mapa.js";
import pubsub from "../../lib/pubSub.Service.js";

var __measure_text = function(ctx, font, text){
  ctx.font = font;
  return ctx.measureText(text).width;
}

function __clear_chart(chart){
  chart.canvas.width  = chart.Width;
  chart.canvas.height = chart.Height;
  chart.ctx.fillStyle = 'white';
  chart.ctx.fillRect(0,0, chart.canvas.width, chart.canvas.height);      
  chart.ctx.fillStyle = chart.fill;
  chart.ctx.fillRect(chart.bounds.left, chart.bounds.top, chart.bounds.width, chart.bounds.height); 
}
  
function __draw_axes(chart){
  chart.ctx.lineWidth = 1;
  chart.ctx.strokeStyle = 'black';      
  chart.ctx.beginPath();
  chart.ctx.moveTo(chart.bounds.left, chart.bounds.top - 4);
  chart.ctx.lineTo(chart.bounds.left, chart.bounds.top + chart.bounds.height + 4);
  chart.ctx.moveTo(chart.bounds.left - 4, chart.bounds.top + chart.bounds.height);
  chart.ctx.lineTo(chart.bounds.left + chart.bounds.width + 4, chart.bounds.top + chart.bounds.height); 
  chart.ctx.stroke();
}
  
function __drawProfile(chart){  
    
  chart.ctx.save();
  chart.ctx.beginPath();
  chart.ctx.rect(chart.bounds.left, chart.bounds.top - chart.Padding[0]-4, chart.bounds.width, chart.bounds.height + chart.Padding[0]+4);
  chart.ctx.clip()

  var __offsetX = chart.worldToScreenX(chart.data.view.x.min) - chart.bounds.left ;
  chart.ctx.translate(-__offsetX, 0);
  chart.data.series.forEach( (serie, i) => {
    chart.ctx.beginPath();
    chart.ctx.moveTo(chart.bounds.left, chart.bounds.top + chart.bounds.height);
    chart.data[serie.name].forEach( function(v, i){ 
      let x = chart.data.distances[i];
      let y = serie.transform ? serie.transform (chart, v) : chart.worldToScreenY(v);
      chart.ctx.lineTo(chart.worldToScreenX(x), y); 
    });   
    chart.ctx.lineTo(100000, 100000);
    chart.ctx.closePath();
    chart.ctx.lineWidth = serie.lineWidth || 1;
    if(serie.fillStyle){
      chart.ctx.fillStyle = serie.fillStyle;  
      chart.ctx.fill();
    }
    chart.ctx.strokeStyle = serie.strokeStyle || 'black';
    chart.ctx.stroke();
  })

  if(chart.mouse.drag){      
    var __x0 = chart.worldToScreenX(chart.data.distances[chart.mouse.dragEnd]);
    var __x1 = chart.worldToScreenX(chart.data.distances[chart.mouse.dragStart]);
    chart.ctx.fillStyle = 'rgba(0,200,0,.35)';
    chart.ctx.fillRect(__x0, chart.bounds.top, __x1 - __x0, chart.bounds.height);   
  }

  chart.ctx.restore();
}
  
Math.log10 = Math.log10 || function (x) { return Math.log(x) / Math.LN10; };


function __niceScale(min, max, steps){
  var range       = __niceNum(max - min, false);
  var tickSpacing = __niceNum(range / (steps - 1), true)
  var niceMin     = Math.floor(min / tickSpacing) * tickSpacing;
  var niceMax     = Math.ceil (max / tickSpacing) * tickSpacing;

  function __niceNum(range, round) {
    var exponent     = Math.floor(Math.log10(range)); 
    var fraction     = range / Math.pow(10, exponent);
    var niceFraction ;
    if (round) {
      if (fraction < 1.5)
        return Math.pow(10, exponent);
      else if (fraction < 3)
        return 2 * Math.pow(10, exponent);
      else if (fraction < 7)
        return 5 * Math.pow(10, exponent);
      else
        return 10 * Math.pow(10, exponent);
    } 
      if (fraction <= 1)
        return Math.pow(10, exponent);
      else if (fraction <= 2)
        return 2 * Math.pow(10, exponent);
      else if (fraction <= 5)
        return 5 * Math.pow(10, exponent);
      else
        return 10 * Math.pow(10, exponent); 
  }
  return { range : range, min : niceMin, max : niceMax, tickSpacing : tickSpacing };
}
  
function __drawScaleY(chart){    
  chart.ctx.lineWidth    = 1;   
  chart.ctx.strokeStyle  = 'silver'; 
  chart.ctx.fillStyle    = 'black';
  chart.ctx.font         = '10px sans-serif-condensed';
  chart.ctx.textAlign    = 'right'; 
  chart.ctx.textBaseline = 'middle';   
   
  chart.ctx.save();
  chart.ctx.beginPath();
  chart.ctx.rect(0, 0, chart.Width, chart.Height);
  chart.ctx.clip();

  var __serie = chart.data.series[0];
  var __scale = __niceScale(~~__serie.view.min, ~~__serie.view.max, 8);
  for(var x = __scale.max; x > __scale.min; x -= __scale.tickSpacing){      
    var __y = __serie.transform ? __serie.transform(chart, x)
                                : chart.worldToScreenY(x);
    if(__y < chart.bounds.top) continue;      
    chart.ctx.beginPath();
    chart.ctx.moveTo(chart.bounds.left - 4, __y);
    chart.ctx.lineTo(chart.bounds.left + chart.bounds.width + 2, __y);        
    chart.ctx.stroke();
    chart.ctx.fillText('{0} {1}'.format(x.toFixed(0), (__serie.unit || 'm')), chart.bounds.left - 6, __y);
  }

  __serie = chart.data.series[1];
  __scale = __niceScale(~~__serie.view.min, ~~__serie.view.max, 8);
  for(var x = __scale.max; x > __scale.min; x -= __scale.tickSpacing){      
    var __y = __serie.transform ? __serie.transform(chart, x)
                                : chart.worldToScreenY(x);
    if(__y < chart.bounds.top) continue;
    if(__y > chart.bounds.top + chart.bounds.height) continue; 
    chart.ctx.beginPath();
    chart.ctx.moveTo(chart.bounds.left + chart.bounds.width - 3, __y);
    chart.ctx.lineTo(chart.bounds.left + chart.bounds.width + 4, __y);        
    chart.ctx.stroke();
    chart.ctx.fillText('{0} {1}'.format(x.toFixed(0), (__serie.unit || 'm')), chart.bounds.left + chart.bounds.width + 40, __y);
  }

  chart.ctx.restore();
}

function __drawScaleX(chart){    
  chart.ctx.lineWidth    = 1;                    
  chart.ctx.fillStyle    = 'black';
  chart.ctx.font         = '10px sans-serif-condensed';
  chart.ctx.textAlign    = 'center'; 
  chart.ctx.textBaseline = 'middle';
  chart.ctx.strokeStyle = 'silver'; 
  var __offsetX  = chart.worldToScreenX(chart.data.view.x.min) - chart.bounds.left;
  chart.ctx.translate(-__offsetX, 0);
  var __scale = __niceScale(chart.data.view.x.min, chart.data.view.x.max, Math.floor(chart.bounds.width/50));
  for(var x = __scale.min; x <= __scale.max; x += __scale.tickSpacing){    
    var __x_pos  = chart.worldToScreenX(x);
    if(__x_pos - __offsetX < chart.bounds.left) continue;
    if(__x_pos - __offsetX > chart.bounds.left + chart.bounds.width ) continue;
    chart.ctx.moveTo(__x_pos, chart.bounds.top - 4);
    chart.ctx.lineTo(__x_pos, chart.bounds.top + chart.bounds.height + 4);         
    chart.ctx.stroke();
    chart.ctx.fillText('{0} km'.format((x/1000).toFixed(1)), __x_pos + 6, chart.bounds.top + chart.bounds.height + 12);  
  }
  chart.ctx.translate(__offsetX, 0);
}

function __draw(chart){
  if(!chart.data) return;
  __clear_chart(chart);      
  __drawScaleY(chart);
  __drawScaleX(chart);
  __draw_axes(chart);
  //__drawLaps(chart)
  __drawProfile(chart);
  return chart;
}
  
function __resize(chart, width, height){
  chart.Width  = width;
  chart.Height = height;
  chart.RefreshLayout(chart);
  return chart;
}

function __refreshLayout(chart){
  chart.bounds = new Rect(chart.Padding[3], 
                          chart.Padding[0], 
                          chart.Width  - chart.Padding[1] - chart.Padding[3],
                          chart.Height - chart.Padding[0] - chart.Padding[2]);
  if(chart.data){
    chart.ratio[0] = 100.0 / chart.data.view.x.range; 
    chart.ratio[1] = 100.0 / chart.data.view.y.range;
  }
  return chart.Draw();
}  
    
function __create(o){
  var __canvas = pol.build('canvas', { id          : o.id || 'profileCanvas',
                                       width       : o.Width, 
                                       height      : o.Height,
                                       onmousemove : __onMouseMove,
                                       onmouseup   : __onMouseUp,
                                       onmousedown : __onMouseDown,
                                       onmouseleave: __onMouseLeave,

                                       ontouchstart : __onTouchStart,
                                       ontouchend   : __onTouchEnd,
                                       ontouchmove  : __onTouchMove,

                                       onmousewheel : function (eventArg){  }
                                      });
  var __chart = { Width   : __canvas.width, 
                  Height  : __canvas.height, 
                  Padding : o.Padding,                                     
                  fill    : 'rgba(255,255,255,1)',
                  id      : __canvas.id,
                  canvas  : __canvas,
                  ctx     : __canvas.getContext("2d"),
                  data    : {},
                  mouse   : {},
                  ratio   : [],
                  worldToScreenX : function(x){
                    return this.bounds.left + (x * this.ratio[0] * this.bounds.width / 100);
                  },
                  worldToScreenY : function(y){
                    return this.bounds.top + this.bounds.height - ((y - __chart.data.view.y.min)  * this.ratio[1] * this.bounds.height / 100);
                  },
                  screenToWorldX  : function(x){ 
                    return this.data.view.x.min + (x - this.bounds.left) * 100 / (this.bounds.width *  this.ratio[0] ) ;
                  }, 
                  indexPoinAt : function(distance){
                    var __i = -1;
                    __chart.data.distances.forEach( function(d){ if(d > distance) return; __i++; });
                    return __i;
                  },
                  Draw          : function()     { return __draw(__chart); },
                  RefreshLayout : function()     { return __refreshLayout(__chart); },
                  Resize        : function(w, h) { return __resize(__chart, w, h); },
                  DrawPosition  : function(index){ 
                    __chart.mouse.current = index; 
                    return __draw(__chart);
                  }
  };

  __canvas.lineChart = __chart;

  function __onMouseLeave(eventArg){
    if(__chart.mouse.mouseDown){
      __chart.mouse.mouseDown = false;
      __chart.mouse.drag = false;
      __chart.Draw();     
    }
  }

  function __onTouchEnd(eventArg) {
    var __reset = function(){
      __chart.mouse.mouseDown = false;
      __chart.mouse.drag = false; 
      __chart.Draw();
      eventArg.preventDefault();
    }

    if(__chart.mouse.drag){
      pubsub.publish('msg\\line_chart\\range', {
        sender : __chart,
        start  : __chart.mouse.dragStart < 0 ? 0 : __chart.mouse.dragStart,
        end    : __chart.mouse.dragEnd
      });            
    }
    else {     
      pubsub.publish('msg\\line_chart\\tap', {
        sender : __chart,
        x : __chart.screenToWorldX(__chart.mouse.mouseDownPosition.x)
      });
    }
    __reset();
  }

  function __onMouseUp(eventArg){
    var __pos   = { x :  eventArg.offsetX, y : eventArg.offsetY };
    var __reset = function(){
      __chart.mouse.mouseDown = false;
      __chart.mouse.drag = false; 
      __chart.Draw();
      eventArg.preventDefault();
    }
    // =========================================================================
    // 1 - Tap
    // =========================================================================
    if(__chart.mouse.mouseDown && __chart.mouse.mouseDownPosition.x == __pos.x 
                               && __chart.mouse.mouseDownPosition.y == __pos.y){     
      pubsub.publish('msg\\line_chart\\tap', {
        sender : __chart,
        x : __chart.screenToWorldX(__pos.x)
      });
      return __reset();
    }
    // =========================================================================
    // 2 - Drag
    // =========================================================================
    if(__chart.mouse.drag){
      pubsub.publish('msg\\line_chart\\range', {
        sender : __chart,
        start  : __chart.mouse.dragStart < 0 ? 0 : __chart.mouse.dragStart,
        end    : __chart.mouse.dragEnd
      });            
    }
    __reset();
  }

  function __onTouchStart(eventArg) {
    var event = document.createEvent("MouseEvent");
    let touch = eventArg.touches[0];
    event.initMouseEvent('mousedown', true, true, window, 1, 
                         touch.screenX, touch.screenY, 
                         touch.clientX, touch.clientY, false, 
                         false, false, false, 0, null);
    touch.target.dispatchEvent(event);
    eventArg.preventDefault();
  }

  function __onMouseDown(eventArg){      
    __chart.mouse.mouseDown = true;
    __chart.mouse.mouseDownPosition = { x :  eventArg.offsetX, y : eventArg.offsetY };       
    __chart.mouse.dragStart = __chart.mouse.dragEnd = __chart.indexPoinAt(__chart.screenToWorldX(__chart.mouse.mouseDownPosition.x));
    if (__chart.mouse.dragStart == -1) __chart.mouse.dragStart = 0;
    eventArg.preventDefault();
  } 
  
  function __onTouchMove(eventArg) {
    var event = document.createEvent("MouseEvent");
    let touch = eventArg.touches[0];
    event.initMouseEvent('mousemove', true, true, window, 1, 
                         touch.screenX, touch.screenY, 
                         touch.clientX, touch.clientY, false, 
                         false, false, false, 0, null);
    touch.target.dispatchEvent(event);
    eventArg.preventDefault();
  }

  function __onMouseMove(eventArg){
    var __pos = { x : eventArg.offsetX, y : eventArg.offsetY };
    __chart.mouse.drag = __chart.mouse.mouseDown;// && __chart.bounds.contains(__pos);
    if(__chart.mouse.drag){
      __chart.mouse.dragEnd = __chart.indexPoinAt(__chart.screenToWorldX(__pos.x));
      if (__chart.mouse.dragEnd == -1) __chart.mouse.dragEnd = 0;
      __chart.Draw();
    } 
    eventArg.preventDefault();
  }
     
  __chart.ctx.imageSmoothingEnabled = false;

  return __chart;  
 
}
  
let Rect = (function(){
  let __rect = function(x, y, w, h) {
    this.left = x;
    this.top = y;
    this.width = w;
    this.height = h;
  };
  __rect.prototype.clone       = function() { return new __rect(this.left, this.top, this.width, this.height); };
  __rect.prototype.centerPoint = function() { return { x : this.left + (this.width >> 1), y : this.top + (this.height >> 1) };};
  __rect.prototype.contains    = function(other) {
    if (other instanceof __rect) {
      return this.left <= other.left &&
             this.left + this.width >= other.left + other.width &&
             this.top <= other.top &&
             this.top + this.height >= other.top + other.height;
    }else { 
      return other.x >= this.left &&
             other.x <= this.left + this.width &&
             other.y >= this.top &&
             other.y <= this.top + this.height;
    }
  };
  return __rect;
}());

export { 
  __create as lineChart 
}