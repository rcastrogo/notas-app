/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/footer.component.js":
/*!********************************************!*\
  !*** ./src/components/footer.component.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/mapa.js */ "./src/lib/mapa.js");


const __template = `  
    <p>{title}</p>
`;

/* harmony default export */ __webpack_exports__["default"] = (function(){
  return {
    title  : '© Rafael Castro Gómez, 2020',
    render : function() {
      let options = { 
        id        : "appFooter",
        innerHTML : __template.format(this),
        className : 'w3-container w3-teal w3-center'
      }
      return _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('footer', options);
    }
  };
});


/***/ }),

/***/ "./src/components/header.component.js":
/*!********************************************!*\
  !*** ./src/components/header.component.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/mapa.js */ "./src/lib/mapa.js");


const __template = `
  <h1>{title}</h1>
`;

/* harmony default export */ __webpack_exports__["default"] = (function(){
  return {
    title  : 'Notas App',
    render : function() {
      let options = { 
        id        : 'appHeader',
        innerHTML : __template.format(this),
        className : 'w3-container w3-teal'
      }
      return _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('header', options);
    }
  };
});


/***/ }),

/***/ "./src/components/main-content.component.js":
/*!**************************************************!*\
  !*** ./src/components/main-content.component.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/mapa.js */ "./src/lib/mapa.js");


const __template = ``;

/* harmony default export */ __webpack_exports__["default"] = (function(){
  return {
    text  : '',
    render : function() {
      let options = { 
        id        : "app-content-container",
        innerHTML : __template.format(this),
        className : 'w3-container',
        style     : { 
          minHeight : '400px',
          backgroundColor : 'red'
        }
      }
      return _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('section', options);
    }
  };
});


/***/ }),

/***/ "./src/components/menu.component.js":
/*!******************************************!*\
  !*** ./src/components/menu.component.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/mapa.js */ "./src/lib/mapa.js");


const __template = `  
  <a href="" route-link class="w3-bar-item w3-button">Inicio</a>
  <a href="list" route-link class="w3-bar-item w3-button">Notas</a>
  <a href="about" route-link class="w3-bar-item w3-button w3-right">?</a>
`;

/* harmony default export */ __webpack_exports__["default"] = (function(){
  return {
    render : function() {
      let options = { 
        id        : "appMenu",
        innerHTML : __template.format(this),
        className : 'w3-bar w3-black'
      }
      return _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('nav', options);
    }
  };
});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/mapa.js */ "./src/lib/mapa.js");
/* harmony import */ var _components_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header.component */ "./src/components/header.component.js");
/* harmony import */ var _components_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer.component */ "./src/components/footer.component.js");
/* harmony import */ var _components_main_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main-content.component */ "./src/components/main-content.component.js");
/* harmony import */ var _components_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu.component */ "./src/components/menu.component.js");
/* harmony import */ var _views_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/home.page */ "./src/views/home.page.js");
/* harmony import */ var _views_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/list.page */ "./src/views/list.page.js");
/* harmony import */ var _views_about_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/about.page */ "./src/views/about.page.js");

// ==============================================================================
// Components
// ==============================================================================




// ==============================================================================
// Pages
// ==============================================================================



// ==============================================================================
// Routes/views
// ==============================================================================
const views = { 'home'    : _views_home_page__WEBPACK_IMPORTED_MODULE_5__["default"],
                'list'    : _views_list_page__WEBPACK_IMPORTED_MODULE_6__["default"],
                'about'   : _views_about_page__WEBPACK_IMPORTED_MODULE_7__["default"] };
// ==============================================================================
// root html
// ==============================================================================
const root      = document.querySelector('#appContent');

const components =  [ 
  Object(_components_header_component__WEBPACK_IMPORTED_MODULE_1__["default"])(),
  Object(_components_menu_component__WEBPACK_IMPORTED_MODULE_4__["default"])(),
  Object(_components_main_content_component__WEBPACK_IMPORTED_MODULE_3__["default"])(),
  Object(_components_footer_component__WEBPACK_IMPORTED_MODULE_2__["default"])()
];
// ==============================================================================
// Init App
// ==============================================================================
(function(element){

  components.forEach( c => element.appendChild(c.render()) );

  _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(document.querySelectorAll('[route-link]'))
     .forEach(element => {
        element.onclick = function(e){
          let pathName = e.target.pathname;
          window.history
                .pushState({}, pathName, location.origin + pathName);
          showContent();
          return false;
        }  
     });

})(root);
// ==============================================================================
// Sync content
// ==============================================================================
const container = document.querySelector('#app-content-container');
let currentView;
function showContent(){
  let route = window.location
                    .href
                    .replace(document.baseURI, '');
  let view_ref = views[route] || views.home;
  if(!currentView || currentView != view_ref) {
    container.innerHTML = '';    
    currentView = view_ref;
    let view_instance = currentView();
    if(view_instance.init) view_instance.init();
    container.appendChild(view_instance.render());
    if(view_instance.mounted) view_instance.mounted(container);
  }

}

showContent();

window.onpopstate = showContent;

// ==============================================================================
// ServiceWorker
// ==============================================================================
window.addEventListener('load', ()=>{

  if('serviceWorker' in navigator){
    try {
      navigator.serviceWorker.register('serviceWorker.js');
      console.log("Service Worker Registered");
    } catch (error) {
      console.log("Service Worker Registration Failed");
    }
  }

});

/***/ }),

/***/ "./src/lib/mapa.js":
/*!*************************!*\
  !*** ./src/lib/mapa.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


let __module = {};
;(function(module, name){

  var _module =  module[name] = { apply : function apply(o, c, d){
                                            if (d) apply(o, d);
                                            if (o && c && typeof c == 'object'){
                                            for (var p in c) o[p] = c[p];
                                            }
                                            return o;
                                          }};      
  // ========================================================================================
  // Utils
  // ========================================================================================
  (function(module){
    module.apply(module,{ 
      toArray     : function(v){return Array.prototype.slice.call(v); },
      isNull      : function(v){return v === null; },
      isArray     : function(v){return Array.isArray(v); },
      isString    : function(v){return typeof v == 'string';},
      isBoolean   : function(v){return typeof v == 'boolean';},
      isNumber    : function(v){return typeof v == 'number';},
      isFunction  : function(v){return typeof v == 'function';},
      isObject    : function(v){return v && typeof v == 'object';},
      clone       : function(o) {
        if(module.isArray(o))             return o.slice(0);
        if(module.isObject(o) && o.clone) return o.clone();
        if(module.isObject(o)){               
          return Object.keys(o).reduce( function(a, k){
            a[k] = module.clone(o[k]);
            return a;
          }, {});
        }
        return o;
      },        
      join        : function(items, property, separator){
        return items.reduce(function(a, o){ return a.append(o[property || 'id']); }, [])
                    .join(separator === undefined ? '-' : (separator || '')); 
      },
      stringBuilder : function(s){
          return { value      : s || '',
                   append     : function(s){ this.value = this.value + s; return this;},
                   appendLine : function(s){ this.value = this.value + (s || '') + '\n'; return this;}}
      },
      build : function(tagName, o){
        return _module.apply(document.createElement(tagName), o);
      }
    });
  }(_module));
  // ========================================================================================
  // Strings
  // ========================================================================================
  (function(module){
    module.apply(String, {
      stringBuilder : module.stringBuilder,
      leftPad       : function (val, size, ch) {
        var result = '' + val;
        if (ch === null || ch === undefined || ch === '') ch = ' ';            
        while (result.length < size) result = ch + result;            
        return result;
      },
      trimValues : function (values){ return values.map(function(s){return s.trim();});}
    });
    module.apply(String.prototype, {
      replaceAll  : function(pattern, replacement) { return this.split(pattern).join(replacement); },
      repeat      : String.prototype.repeat     || function(a) { return new Array(a + 1).join(this); },
      contains    : String.prototype.includes   || function(t, start) { return this.indexOf(t) >= (start || 0); },
      startsWith  : String.prototype.startsWith || function(t){ return this.indexOf(t) == 0; },                             
      toFloat     : function(){ return this.trim().replaceAll('.', '').replaceAll(',', '.') },
      fixDate     : function(){ return this.split(' ')[0]; },
      fixTime     : function(){ return this.split(' ')[1]; },
      fixYear     : function(){ return this.fixDate().split('/')[2];},
      trimSeconds : function(){ return this.split(':')[0] + ':' + this.split(':')[1] ; },
      paddingLeft : function(paddingValue){ return (paddingValue + this).slice(-paddingValue.length); },
      format      : function(){
        var __arg     = arguments;
        var __context = __arg[__arg.length - 1] || self;   
        return this.replace(/\{(\d+|[^{]+)\}/g, function(m, key){
          if(key.indexOf(':') > 0){
            var __fn = key.split(':');
            __fn[0]  = getValue(__fn[0], __context);
            __fn[1]  = getValue(__fn[1], __context);
            return __fn[0](__fn[1], __context);            
          }
          return /^\d+$/.test(key) ? __arg[key]
                                   : (typeof __context[key] === "undefined") ? getValue(key, __context)
                                                                             : __context[key]; 
        });
      }
    });      
  }(_module));      
  // ========================================================================================
  // Array
  // ========================================================================================    
  (function(module){
    module.apply(Array.prototype, {          
      remove   : function(o) {
        var index = this.indexOf(o);
        if (index != -1) this.splice(index, 1);
        return this;
      },
      add      : function(o) {
        this.push(o);
        return o;
      },
      append   : function(o) {
        this.push(o);
        return this;
      },
      item     : function(propName, value, def){
        return arguments==1 ? this.filter( function(v){return v['id'] == propName || v['_id'] == propName})[0] || def
                            : this.filter( function(v){return v[propName] == value})[0] || def;
      },
      contains : function(propName,value){ return this.item(propName,value); },
      lastItem : function() { return this[this.length - 1]; },
      select   : function(sentence){ return this.map(sentence) },   
      where    : function(sentence){ 
        if(module.isFunction(sentence)) return this.filter(sentence);
        if(module.isObject(sentence)){
          return this.filter(new Function('a', Object.keys(sentence)
                                                     .reduce(function(a, propname, i){
                                                               return a + (i > 0 ? ' && ' : '')
                                                                        +  (function(){
                                                                             var __value = sentence[propname];
                                                                             if(__value instanceof RegExp) return '{1}.test(a.{0})'.format(propname, __value);
                                                                             if(module.isString(__value)) return 'a.{0} === \'{1}\''.format(propname, __value);
                                                                             return 'a.{0} === {1}'.format(propname, __value);
                                                                            }());                                        
                                                             }, 'return ')));
        }
        return this;
      },
      sortBy      : function(propname, desc){
        var __order = [];
        var __names = propname.split(',').map( function(token,i){ 
          var __pair = token.split(' ');
          __order[i] = (__pair[1] && (__pair[1].toUpperCase()=='DESC')) ? -1 : 1;      
          return __pair[0];    
        });
        __order[0] = (desc ? -1 : 1)
        this.sort(function(a, b){
                    var i = 0;                 
                    var __fn = function(a, b){
                      var __x = a[__names[i]];
                      var __y = b[__names[i]];
                      if(__x < __y) return -1 * __order[i];
                      if(__x > __y) return  1 * __order[i];
                      i++;
                      if(i < __names.length) return __fn(a,b);       
                      return 0;               
                    }
                    return __fn(a,b);                                  
                  });
        return this;    
      },
      orderBy     : function(sentence){
        var __sentence = sentence;    
        if(module.isString(sentence)) __sentence = function(a){ return a[sentence]; }
        return this.map(function(e){return e})
                   .sort(function(a, b){
                      var x = __sentence(a);
                      var y = __sentence(b);
                      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                   });     
      },
      distinct    : function(sentence) {
        var __sentence = sentence;    
        if(module.isString(sentence)) __sentence = function(a){ return a[sentence]; }
        var r = [];
        this.forEach(function(item){
          var _value = __sentence(item);
          if(r.indexOf(_value)==-1) r.push(_value);
        });
        return r;
      },
      groupBy : function(prop){
        return this.reduce(function(groups, item) {
          var val = item[prop];
          (groups[val] = groups[val] || []).push(item);
          return groups
        }, {})
      },
      toDictionary : function(prop, value){
        return this.reduce(function(a, d){
                             a[d[prop]] = value ? d[value] : d;
                             return a;
                           }, {});  
      }
    });       
  }(_module));

  // =================================================================================================
  // Templates
  // =================================================================================================
  (function(module){

    function getValue(key, scope) {        
      return key.split(/\.|\[|\]/)
                .reduce( function(a, b){
                  if (b === '') return a;
                  return a[b] === undefined ? (a === self ? '' : self) : a[b];
                }, scope || self );    
    }
   
    function merge(template, o, key) {
      if(self.BS.reportDefinition.context.mergeMode){
        return mergeOptimized(template, o, key);
      }
      var __result = template.replace(/{([^{]+)?}/g, function (m, key) {
                      if(key.indexOf(':') > 0){
                        var __fn = key.split(':');                       
                        __fn[0]  = getValue(__fn[0], o);
                        __fn[1]  = getValue(__fn[1], o);                        
                        return __fn[0](__fn[1], o);            
                      }
                      var r   = getValue(key, o);
                      var __k = (key.contains('.') ? '' : 'o.') + key;
                      if (typeof (r) == 'function'){                        
                        return r(o);
                      }else{                        
                        return r;
                      }                    
                      return typeof (r) == 'function' ? r(o) : r;
                    });     
      return __result;
    }

    function mergeOptimized(template, o, key) {
      
      if(o[key] && o[key] === 'template') return template; 
      if(o[key]) return o[key](o);      
      var __values = [];
      var __result = template.replace(/{([^{]+)?}/g, function (m, key) {
                      if(key.indexOf(':') > 0){
                        var __fn = key.split(':');
                        var __k = (__fn[1].contains('.') ? '' : 'o.') + __fn[1];
                        __values.push('{0}({1}) '.format(__fn[0], __k));
                        __fn[0]  = getValue(__fn[0], o);
                        __fn[1]  = getValue(__fn[1], o);                        
                        return __fn[0](__fn[1], o);            
                      }
                      var r   = getValue(key, o);
                      var __k = (key.contains('.') ? '' : 'o.') + key;
                      if (typeof (r) == 'function'){
                        __values.push('{0}(o)'.format(__k));
                        return r(o);
                      }else{
                        __values.push('{0}'.format(__k));
                        return r;
                      }                    
                      return typeof (r) == 'function' ? r(o) : r;
                    });
      if(key && __values.length === 0){
        o[key] = 'template';
        return template;
      }
      if(key && __values.length){
        __values.reverse()
        var __b = template.split(/{([^{]+)?}/g)
                          .map(function(t, i){ 
                            return  i % 2 ? __values.pop() : '\'' + t + '\'' ; 
                          })                          
                          .reduce( function(a, token, i, arr){                            
                            if(token === "''") return a;
                            return a + token + ((i < arr.length-1) ? ' + ' : '');                               
                          }, 'return ');

        o[key] = new Function('o', __b.replace(/(?:\r\n|\r|\n)/g, ''));
        return o[key](o);
      }      
      return __result;
    }
    
    module.templates = { getValue  : getValue,
                         merge     : merge };

  }(_module));

  // =================================================================================================
  // Ajax
  // =================================================================================================
  (function(module){  
    module.ajax = {};
    module.apply(module.ajax, {
      get  : function (url, callBack) {
        url += (url.contains('?') ? '&ms=' : '?ms=') + new Date().getTime();
        var xml = this.createXMLHttpRequest();
        xml.open('GET', url, true);
        xml.setRequestHeader('If-Modified-Since', 'Thu, 01 Jan 1970 00:00:00 GMT');
        xml.setRequestHeader('Cache-Control', 'no-cache');
        xml.onreadystatechange = function () { if (xml.readyState == 4) callBack(xml.responseText) };
        xml.send(null);
      },
      post : function(url, params, callBack) {                                          
        var xml = this.createXMLHttpRequest();
        xml.open('POST', url, true);
        xml.onreadystatechange = function() { if (xml.readyState == 4) callBack(xml.responseText) };
        xml.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset:ISO-8859-1');
        xml.send(params);
      },
      callWebMethod : function(url, params, callBack) {
        var xml = this.createXMLHttpRequest();
        xml.open('POST', url, true);
        xml.onreadystatechange = function(){ if (xml.readyState == 4) callBack(xml.responseText) };
        xml.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xml.send(params);
      },
      createXMLHttpRequest : function(){ return new XMLHttpRequest(); }
    });  
  }(_module)); 
      
  // =================================================================================================
  // Tabbly
  // =================================================================================================
  (function (module){
      
    var __context;

    function __ExecuteCode(code){

      __context = { sections : [], groups : [], details : []};

      var __cur;
      var __func       = '';
      var __funcBody   = '';
      var __setState  = false;

      function __get(value){
        if(value && value.trim().startsWith('@')){
          return __context[value.trim().split('@')[1].trim()] || '';
        }else if(value){
          return value.trim();
        }
        return '';
      }  

      function __parse_properties(value){
        var __reg   =  /([a-zA-Z0-9_\-]*)\s*:\s*('[^']*'|[^\s]*)/g;
        var __o     = {};
        var __match = __reg.exec(value);
        while (__match != null) {
          __o[__match[1].trim()] = __get(__match[2].trim().replace(/^'([^']*)'$/g, '$1'));
          __match = __reg.exec(value);
        }
        return __o
      }

      function __parseLine(l, o){
        if(!__func && !l.trim()) return function(){};
        var __keys = /DEFINE|#|CREATE|SET|FUNCTION|END/;
        if(__keys.test(l)){
          if(/^#/.test(l)){
            return function(){};
          }else if(/^SET (\w.*)/.test(l)){  
            var __tokens = l.match(/^SET (\w.*)$/);
            __setState = true;
            __func      = __tokens[1].trim();
            __funcBody  = '';
            return function(){};
          }else if(/^FUNCTION (\w.*)/.test(l)){  
            var __tokens = l.match(/^FUNCTION (\w.*)$/);
            __setState  = false;
            __func       = __tokens[1].trim();
            __funcBody   = '';
            return function(){};
          }else if(/^END/.test(l)){      
            var __body = __funcBody;
            var __name = __func;
            __func = __funcBody = ''; 
            if(__setState){
              __setState = false;
              return function(){            
                return function(ctx){ __cur[__name] = __body.trim(); }
              }();
            }else{
              return function(){            
                return function(ctx){ ctx[__name] = new Function('ctx', __body); }
              }();
            }                 
          }else if(/^DEFINE\s\s*(\w.*)\s*=\s*(.*)$/.test(l)){
            var __tokens = l.match(/^DEFINE\s\s*([a-zA-Z0-9_\-]*)\s*=\s*(.*)$/);
            return function(){ 
              var tokens = __tokens;
              return function(ctx){ ctx[tokens[1].trim()] = tokens[2].trim(); }
            }();
          }else if(/^CREATE\s\s*(\w*) (.*)$/.test(l)){
            var __tokens = l.match(/^CREATE\s\s*(\w*) (.*)$/);
            if(__tokens[1]=='section'){
              return function(){ 
                var tokens = __tokens;
                return function(ctx){ 
                  ctx.sections.push(__parse_properties(tokens[2])); 
                  __cur = ctx.sections[ctx.sections.length - 1];}
              }();
            }
            else if(__tokens[1]=='group'){
              return function(){ 
                var tokens = __tokens;
                return function(ctx){ 
                  ctx.groups.push(__parse_properties(tokens[2]));
                  __cur = ctx.groups[ctx.groups.length - 1];}
              }();
            }else if(__tokens[1]=='detail'){
              return function(){ 
                var tokens = __tokens;
                return function(ctx){
                  ctx.details.push(__parse_properties(tokens[2]));
                  __cur = ctx.details[ctx.details.length - 1];}
              }();
            }
          }else{ throw new Error('Tabbly : Unrecognized text after DEFINE')}  
        }else{ 
          if(__func){
            __funcBody += o;
            __funcBody += '\n';
            return function(){};
          }
          throw new Error('Tabbly : Unrecognized text')
        }
      }

      code.split('\n').forEach(function(l){ 
        __parseLine(l.trim(),l)(__context); 
      });

      return { context : __context };

    }

    module.tabbly = { execute : __ExecuteCode };

  }(_module));
      
  // =================================================================================================
  // Reports
  // =================================================================================================
  (function(module) {

    module.ReportEngine                = {};      
    module.ReportEngine.generateReport = function(rd, data, mediator){
      mediator.message({ type : 'report.begin' });
      var __rd      = rd || module.ReportEngine.rd;
      // ===========================================================================================
      // Transformar los datos
      // ===========================================================================================
      var __dataSet = __rd.context.parseData ? __rd.context.parseData(__rd, data, mediator.message)
                                             : data;
      mediator.message({ type : 'report.log.message', text : 'Inicializando...' });
      console.time('Render');
      // ===========================================================================================
      // Inicializar funciones para la generación de contenido personalizado
      // ===========================================================================================
      function __initContentProviders(){
        [__rd.context.sections, __rd.context.details, __rd.context.groups]
        .reduce(function(a,b){ return a.concat(b); }, [])
        .map(function(s){
          if(s.valueProviderfn){
            s.valueProvider = module.templates.getValue(s.valueProviderfn, self); 
            delete s.valueProviderfn;             
          }
          if(s.footerValueProviderfn){
            s.footerValueProvider = module.templates.getValue(s.footerValueProviderfn, self); 
            delete s.footerValueProviderfn; 
          }
          if(s.headerValueProviderfn){
            s.headerValueProvider = module.templates.getValue(s.headerValueProviderfn, self); 
            delete s.headerValueProviderfn;
          }  
        });
      }
      // ===================================================================================================
      // Generación de las secciones de cabecera de las agrupaciones
      // ===================================================================================================
      var __MERGE_AND_SEND = function(t, p, fnkey){ mediator.send(module.templates.merge(t, p, fnkey)); };
      function __groupsHeaders(){
        __groups.forEach(function(g, ii){
          if(ii < __breakIndex) return; 
          mediator.message({ type : 'report.sections.group.header', value : g.id });  
          if(g.definition.header) return __MERGE_AND_SEND(g.definition.header, g, 'compiled_headerfn');
          if(g.definition.headerValueProvider) return mediator.send(g.definition.headerValueProvider(g)); 
        });    
      }
      // ===================================================================================================
      // Generación de las secciones de resumen de las agrupaciones
      // ===================================================================================================
      function __groupsFooters(index){
        var __gg = __groups.map(function(g){return g;}); 
        if(index) __gg.splice(0, index);
        __gg.reverse().forEach( function(g){
          mediator.message({ type : 'report.sections.group.footer', value : g.id });          
          if(g.definition.footer) return __MERGE_AND_SEND(g.definition.footer, g, 'compiled_footerfn');
          if(g.definition.footerValueProvider) return mediator.send(g.definition.footerValueProvider(g));
        }); 
      } 
      // ===================================================================================
      // Generación de las secciones de detalle
      // ===================================================================================
      function __detailsSections(){
        __details.forEach(function(d){
          mediator.message({ type : 'report.sections.detail', value : d.id });
          if(d.template) return __MERGE_AND_SEND(d.template, d, 'compiledfn')
          if(d.valueProvider) return mediator.send(d.valueProvider(d));
        })            
      }
      // ===================================================================================
      // Generación de las secciones de total general
      // ===================================================================================
      function __grandTotalSections(){
        __totals.forEach(function(t){
          mediator.message({ type : 'report.sections.total', value : t.id });
          if(t.template) return __MERGE_AND_SEND(t.template, t, 'compiledfn')
          if(t.valueProvider) return mediator.send(t.valueProvider(t));
        })            
      } 
      // ===================================================================================
      // Generación de las secciones de cabecera del informe
      // ===================================================================================
      function __reportHeaderSections(){
        __headers.forEach(function(t){
          mediator.message({ type : 'report.sections.header', value : t });
          if(t.template) return __MERGE_AND_SEND(t.template, t, 'compiledfn')
          if(t.valueProvider) return mediator.send(t.valueProvider(t));
        })            
      } 
      // ===================================================================================
      // Inicializar el objeto que sirve de acumulador
      // ===================================================================================
      function __resolveSummaryObject(){
        var __summary = JSON.parse(__rd.context.summary || '{}');
        if(__rd.context.onInitSummaryObject) return __rd.context.onInitSummaryObject(__summary);      
        return __summary;
      }

      var __breakIndex = -1; 

      var __summary    = __resolveSummaryObject();
      var __headers    = (__rd.context.sections || []).where({ type : 'header' });
      var __totals     = (__rd.context.sections || []).where({ type : 'total' });
      var __footers    = (__rd.context.sections || []).where({ type : 'footer' });
      var __details    = __rd.context.details || [];
      var __groups     = __rd.context.groups 
                                     .map(function(g, i){
                                          return {  name       : 'G' + (i+1),
                                                    rd         : __rd,
                                                    definition : g,
                                                    current    : '', 
                                                    data       : module.clone(__summary),                         
                                                    init : function(value){
                                                            var __k = value[this.definition.key].toString();
                                                            var __Gx = self.BS[this.name];
                                                            __Gx.all[__k] = __Gx.all[__k] || [];
                                                            __Gx.all[__k].push(value);
                                                            __Gx.recordCount = 1;
                                                            if(this.__resume === false) return;
                                                            if(this.__resume){
                                                              module.ReportEngine.copy(value, this.data);
                                                              return
                                                            }
                                                            if(this.__resume = Object.keys(this.data).length > 0)                                                                                                                        
                                                              module.ReportEngine.copy(value, this.data); 
                                                    },
                                                    sum  : function(value){ 
                                                            var __k = value[this.definition.key].toString();
                                                            var __Gx = self.BS[this.name]; 
                                                            __Gx.all[__k] = __Gx.all[__k] || [];
                                                            __Gx.all[__k].push(value);
                                                            __Gx.recordCount += 1;
                                                            if(this.__resume === false) return;
                                                            module.ReportEngine.sum(value, this.data);
                                                    }, 
                                                    test : function(value){ 
                                                              return value[this.definition.key] == this.current;
                                                    }}           
                                    }) || [];                                   
      self.BS = { reportDefinition : __rd, mediator : mediator };              
      // ==============================================================================================
      // Ordenar los datos
      // ==============================================================================================
      if(__rd.context.iteratefn){
        mediator.message({ type : 'report.log.message', text : 'Inicializando elementos...' });
        __dataSet.forEach(__rd.context.iteratefn);
      }
      if(__rd.context.orderBy){
        mediator.message({ type : 'report.log.message', text : 'Ordenando datos...' });
        __dataSet.sortBy(__rd.context.orderBy, false);
      }
      // ==============================================================================================
      // Inicializar
      // ==============================================================================================
      self.BS = { recordCount      : 0, 
                  G0               : module.clone(__summary),
                  dataSet          : __dataSet,
                  reportDefinition : __rd, 
                  mediator         : mediator };
      __groups.forEach( function(g, i){                   
        g.current = (__dataSet && __dataSet[0]) ? __dataSet[0][g.definition.key] : '';
        self.BS[g.name] = { recordCount : 0, all : {} };
      });
      if(__rd.context.onStartfn) __rd.context.onStartfn(self.BS);
      __initContentProviders();
      mediator.message({ type : 'report.render.rows' });
      mediator.message({ type : 'report.log.message', text : 'Generando informe...' });
      // ==============================================================================
      // Cabeceras del informe
      // ==============================================================================
      __reportHeaderSections();
      // ==============================================================================
      // Cabeceras iniciales
      // ==============================================================================
      if(__dataSet.length > 0) __groupsHeaders(); 
      // ==============================================================================
      // Iterar sobre los elementos
      // ==============================================================================
      __dataSet.forEach(function(r, i){ 
        // ============================================================================
        // Procesar el elemento
        // ============================================================================         
        self.BS.recordCount++;
        self.BS.isLastRow        = __dataSet.length === self.BS.recordCount;
        self.BS.isLastRowInGroup = self.BS.isLastRow;
        self.BS.percent      = (self.BS.recordCount/__dataSet.length) * 100;  
        self.BS.previous     = self.BS.data || r;
        self.BS.data         = r; 
        __groups.forEach( function(g, i){ 
          self.BS[g.name].data  = Object.create(g.data);
        }); 
        module.ReportEngine.sum(r, self.BS.G0);        
        if(__rd.context.onRowfn) __rd.context.onRowfn(self.BS);
        mediator.message({ type  : 'report.render.row', 
                           text  : self.BS.percent.toFixed(1) + ' %', 
                           value : self.BS.percent });
        // ============================================================================
        // Determinar si hay cambio en alguna de las claves de agrupación
        // ============================================================================
        if(__groups.every( function(g){ return g.test(r) })){
          __groups.forEach( function(g){ g.sum(r); });               
        }else{                                                                        
          __groups.some( function(g, i){              
            if(!g.test(r)){
              __breakIndex = i;
              // ============================================
              // Pies de grupo de los que han cambiado
              // ============================================
              __groupsFooters(__breakIndex);
              // ============================================
              // Actualizar los grupos
              // ============================================
              __groups.forEach( function(grupo, ii){         
                if(ii >= __breakIndex){
                  // ========================================
                  // Inicializar los que han cambiado
                  // ========================================
                  grupo.init(r)
                  __breakIndex = i;
                }else{
                  // ========================================
                  // Acumular valores de los que siguen igual
                  // ========================================
                  grupo.sum(r);
                }                  
              });                                                                                   
              return true;
            }                      
            return false; 
          })
          // ====================================================================
          // Notificar del evento onGroupChange
          // ====================================================================
          __groups.forEach(function(g){
            g.current = r[g.definition.key];
          });
          if(__rd.context.onGroupChangefn) __rd.context.onGroupChangefn(self.BS);          
          mediator.message({ type  : 'report.sections.group.change', 
                             value : '__groups' });
          // =======================================================
          // Cabeceras
          // =======================================================
          __groupsHeaders();                              
        }                 
        // ============================================================
        // Determinar si este es el último elemento de la agrupación 
        // ============================================================;
        if(__groups.length && !self.BS.isLastRow ){
          var __next               = __dataSet[self.BS.recordCount];          
          self.BS.isLastRowInGroup = ! __groups.every( function(g){
            var __k = g.definition.key;
            return __next[__k] === self.BS.data[__k];
          });
        }
        // ============================================================
        // Secciones de detalle
        // ============================================================
        __detailsSections()            
      });

      if(__dataSet.length > 0){ 
        self.BS.previous = self.BS.data;
        // =============================
        // Pies de grupo
        // =============================
        __groupsFooters();
      }
      // ===================================================
      // Total general
      // ===================================================
      __grandTotalSections();
      mediator.message({ type : 'report.render.end' });
      mediator.message({ type : 'report.end' });
      mediator.flush();
      console.timeEnd('Render');
    }
          
    module.ReportEngine.copy    = function(s, d){ Object.keys(d).map(function(k){ d[k] = s[k];});}                                                                                 
    module.ReportEngine.sum     = function(s, d){ Object.keys(d).map(function(k){ d[k] += s[k];});}   
    module.ReportEngine.compute = function(ds, name){ return ds.reduce( function(t, o){ return t + o[name]; }, 0.0); }
    module.ReportEngine.group   = function(a, c){
	    var ds = a;
	    var __f = function(k, t){
	      ds.distinct( function(v){ return v[k]; })	            
	        .forEach ( function(v){ c[v] = ds.reduce( function(p, c, i, a){ return (c[k]==v) ? p + c[t] : p; }, 0.0); });
        return __f;	           
	    }
	    return __f;
    }
 
  })(_module);

}(__module, 'Pol'));

/* harmony default export */ __webpack_exports__["default"] = (__module.Pol);

/***/ }),

/***/ "./src/views/about.page.js":
/*!*********************************!*\
  !*** ./src/views/about.page.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/mapa.js */ "./src/lib/mapa.js");


const __template = `  
<div class="w3-container w3-margin-bottom">
  <h1>Sobre Notas App</h1>
  <p>Aplicación desarrollada por Rafael Castro Gómez</p>
</div>
<div class="w3-container w3-margin-bottom w3-center">
  <button type="button" about-btn-back class="w3-button w3-circle w3-black">X</button>
</div>
`;

/* harmony default export */ __webpack_exports__["default"] = (function(){
  return {
    render : function() {
      let options = { 
        innerHTML : __template.format(this),
      }
      return _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', options);
    },
    mounted : container => {
      container.querySelector('[about-btn-back]')
               .onclick = () => {
                 history.back();
               }
    }
  };
});


/***/ }),

/***/ "./src/views/home.page.js":
/*!********************************!*\
  !*** ./src/views/home.page.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/mapa.js */ "./src/lib/mapa.js");


const __template = `  
  <div class="w3-container w3-center">
    <h1>Página principal</h1>
    <p>Almacena tus notas en el móvil!!!</p>
    <img src="./assets/img/logo.png" alt="Car" style="width: 50%;">
  </div>
  <div style="height:20px;"></div
`;

/* harmony default export */ __webpack_exports__["default"] = (function(){
  return {
    render : function() {
      let options = { 
        innerHTML : __template.format(this),
      }
      return _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', options);
    }
  };
});


/***/ }),

/***/ "./src/views/list.page.js":
/*!********************************!*\
  !*** ./src/views/list.page.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/mapa.js */ "./src/lib/mapa.js");


const __template = `  
<div class="w3-container w3-margin-bottom">
  <h1>Lista de notas</h1>
</div>
`;

/* harmony default export */ __webpack_exports__["default"] = (function(){
  return {
    render : function() {
      let options = { 
        innerHTML : __template.format(this),
      }
      return _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', options);
    }
  };
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW4tY29udGVudC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVudS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvbWFwYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWJvdXQucGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaG9tZS5wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9saXN0LnBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RB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RTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFZTtBQUNmO0FBQ0E7QUFDQSxxQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLG9EQUFHO0FBQ2hCO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDcEJEO0FBQUE7QUFBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EscUI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvREFBRztBQUNoQjtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGAgIFxyXG4gICAgPHA+e3RpdGxlfTwvcD5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRpdGxlICA6ICfCqSBSYWZhZWwgQ2FzdHJvIEfDs21leiwgMjAyMCcsXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7IFxyXG4gICAgICAgIGlkICAgICAgICA6IFwiYXBwRm9vdGVyXCIsXHJcbiAgICAgICAgaW5uZXJIVE1MIDogX190ZW1wbGF0ZS5mb3JtYXQodGhpcyksXHJcbiAgICAgICAgY2xhc3NOYW1lIDogJ3czLWNvbnRhaW5lciB3My10ZWFsIHczLWNlbnRlcidcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcG9sLmJ1aWxkKCdmb290ZXInLCBvcHRpb25zKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYFxyXG4gIDxoMT57dGl0bGV9PC9oMT5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRpdGxlICA6ICdOb3RhcyBBcHAnLFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpZCAgICAgICAgOiAnYXBwSGVhZGVyJyxcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLmZvcm1hdCh0aGlzKSxcclxuICAgICAgICBjbGFzc05hbWUgOiAndzMtY29udGFpbmVyIHczLXRlYWwnXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnaGVhZGVyJywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGBgO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICByZXR1cm4ge1xyXG4gICAgdGV4dCAgOiAnJyxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaWQgICAgICAgIDogXCJhcHAtY29udGVudC1jb250YWluZXJcIixcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLmZvcm1hdCh0aGlzKSxcclxuICAgICAgICBjbGFzc05hbWUgOiAndzMtY29udGFpbmVyJyxcclxuICAgICAgICBzdHlsZSAgICAgOiB7IFxyXG4gICAgICAgICAgbWluSGVpZ2h0IDogJzQwMHB4JyxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvciA6ICdyZWQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwb2wuYnVpbGQoJ3NlY3Rpb24nLCBvcHRpb25zKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYCAgXHJcbiAgPGEgaHJlZj1cIlwiIHJvdXRlLWxpbmsgY2xhc3M9XCJ3My1iYXItaXRlbSB3My1idXR0b25cIj5JbmljaW88L2E+XHJcbiAgPGEgaHJlZj1cImxpc3RcIiByb3V0ZS1saW5rIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uXCI+Tm90YXM8L2E+XHJcbiAgPGEgaHJlZj1cImFib3V0XCIgcm91dGUtbGluayBjbGFzcz1cInczLWJhci1pdGVtIHczLWJ1dHRvbiB3My1yaWdodFwiPj88L2E+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gIHJldHVybiB7XHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7IFxyXG4gICAgICAgIGlkICAgICAgICA6IFwiYXBwTWVudVwiLFxyXG4gICAgICAgIGlubmVySFRNTCA6IF9fdGVtcGxhdGUuZm9ybWF0KHRoaXMpLFxyXG4gICAgICAgIGNsYXNzTmFtZSA6ICd3My1iYXIgdzMtYmxhY2snXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnbmF2Jywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuL2xpYi9tYXBhLmpzXCI7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDb21wb25lbnRzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5pbXBvcnQgaGVhZGVyQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgZm9vdGVyQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvZm9vdGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgY29udGVudENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL21haW4tY29udGVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IG1lbnVDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9tZW51LmNvbXBvbmVudFwiO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUGFnZXNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmltcG9ydCBob21lUGFnZSBmcm9tIFwiLi92aWV3cy9ob21lLnBhZ2VcIjtcclxuaW1wb3J0IGxpc3RQYWdlIGZyb20gXCIuL3ZpZXdzL2xpc3QucGFnZVwiO1xyXG5pbXBvcnQgYWJvdXRQYWdlIGZyb20gXCIuL3ZpZXdzL2Fib3V0LnBhZ2VcIjtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJvdXRlcy92aWV3c1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3Qgdmlld3MgPSB7ICdob21lJyAgICA6IGhvbWVQYWdlLFxyXG4gICAgICAgICAgICAgICAgJ2xpc3QnICAgIDogbGlzdFBhZ2UsXHJcbiAgICAgICAgICAgICAgICAnYWJvdXQnICAgOiBhYm91dFBhZ2UgfTtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIHJvb3QgaHRtbFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3Qgcm9vdCAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcENvbnRlbnQnKTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSAgWyBcclxuICBoZWFkZXJDb21wb25lbnQoKSxcclxuICBtZW51Q29tcG9uZW50KCksXHJcbiAgY29udGVudENvbXBvbmVudCgpLFxyXG4gIGZvb3RlckNvbXBvbmVudCgpXHJcbl07XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJbml0IEFwcFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKGZ1bmN0aW9uKGVsZW1lbnQpe1xyXG5cclxuICBjb21wb25lbnRzLmZvckVhY2goIGMgPT4gZWxlbWVudC5hcHBlbmRDaGlsZChjLnJlbmRlcigpKSApO1xyXG5cclxuICBwb2wudG9BcnJheShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbcm91dGUtbGlua10nKSlcclxuICAgICAuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbihlKXtcclxuICAgICAgICAgIGxldCBwYXRoTmFtZSA9IGUudGFyZ2V0LnBhdGhuYW1lO1xyXG4gICAgICAgICAgd2luZG93Lmhpc3RvcnlcclxuICAgICAgICAgICAgICAgIC5wdXNoU3RhdGUoe30sIHBhdGhOYW1lLCBsb2NhdGlvbi5vcmlnaW4gKyBwYXRoTmFtZSk7XHJcbiAgICAgICAgICBzaG93Q29udGVudCgpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gIFxyXG4gICAgIH0pO1xyXG5cclxufSkocm9vdCk7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTeW5jIGNvbnRlbnRcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAtY29udGVudC1jb250YWluZXInKTtcclxubGV0IGN1cnJlbnRWaWV3O1xyXG5mdW5jdGlvbiBzaG93Q29udGVudCgpe1xyXG4gIGxldCByb3V0ZSA9IHdpbmRvdy5sb2NhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIC5ocmVmXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoZG9jdW1lbnQuYmFzZVVSSSwgJycpO1xyXG4gIGxldCB2aWV3X3JlZiA9IHZpZXdzW3JvdXRlXSB8fCB2aWV3cy5ob21lO1xyXG4gIGlmKCFjdXJyZW50VmlldyB8fCBjdXJyZW50VmlldyAhPSB2aWV3X3JlZikge1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnOyAgICBcclxuICAgIGN1cnJlbnRWaWV3ID0gdmlld19yZWY7XHJcbiAgICBsZXQgdmlld19pbnN0YW5jZSA9IGN1cnJlbnRWaWV3KCk7XHJcbiAgICBpZih2aWV3X2luc3RhbmNlLmluaXQpIHZpZXdfaW5zdGFuY2UuaW5pdCgpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHZpZXdfaW5zdGFuY2UucmVuZGVyKCkpO1xyXG4gICAgaWYodmlld19pbnN0YW5jZS5tb3VudGVkKSB2aWV3X2luc3RhbmNlLm1vdW50ZWQoY29udGFpbmVyKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5zaG93Q29udGVudCgpO1xyXG5cclxud2luZG93Lm9ucG9wc3RhdGUgPSBzaG93Q29udGVudDtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTZXJ2aWNlV29ya2VyXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XHJcblxyXG4gIGlmKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3Ipe1xyXG4gICAgdHJ5IHtcclxuICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2VXb3JrZXIuanMnKTtcclxuICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciBSZWdpc3RlcmVkXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciBSZWdpc3RyYXRpb24gRmFpbGVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pOyIsIlxyXG5cclxubGV0IF9fbW9kdWxlID0ge307XHJcbjsoZnVuY3Rpb24obW9kdWxlLCBuYW1lKXtcclxuXHJcbiAgdmFyIF9tb2R1bGUgPSAgbW9kdWxlW25hbWVdID0geyBhcHBseSA6IGZ1bmN0aW9uIGFwcGx5KG8sIGMsIGQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkKSBhcHBseShvLCBkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobyAmJiBjICYmIHR5cGVvZiBjID09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIGMpIG9bcF0gPSBjW3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX07ICAgICAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFV0aWxzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpe1xyXG4gICAgbW9kdWxlLmFwcGx5KG1vZHVsZSx7IFxyXG4gICAgICB0b0FycmF5ICAgICA6IGZ1bmN0aW9uKHYpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh2KTsgfSxcclxuICAgICAgaXNOdWxsICAgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdiA9PT0gbnVsbDsgfSxcclxuICAgICAgaXNBcnJheSAgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gQXJyYXkuaXNBcnJheSh2KTsgfSxcclxuICAgICAgaXNTdHJpbmcgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdHlwZW9mIHYgPT0gJ3N0cmluZyc7fSxcclxuICAgICAgaXNCb29sZWFuICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdHlwZW9mIHYgPT0gJ2Jvb2xlYW4nO30sXHJcbiAgICAgIGlzTnVtYmVyICAgIDogZnVuY3Rpb24odil7cmV0dXJuIHR5cGVvZiB2ID09ICdudW1iZXInO30sXHJcbiAgICAgIGlzRnVuY3Rpb24gIDogZnVuY3Rpb24odil7cmV0dXJuIHR5cGVvZiB2ID09ICdmdW5jdGlvbic7fSxcclxuICAgICAgaXNPYmplY3QgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdiAmJiB0eXBlb2YgdiA9PSAnb2JqZWN0Jzt9LFxyXG4gICAgICBjbG9uZSAgICAgICA6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICBpZihtb2R1bGUuaXNBcnJheShvKSkgICAgICAgICAgICAgcmV0dXJuIG8uc2xpY2UoMCk7XHJcbiAgICAgICAgaWYobW9kdWxlLmlzT2JqZWN0KG8pICYmIG8uY2xvbmUpIHJldHVybiBvLmNsb25lKCk7XHJcbiAgICAgICAgaWYobW9kdWxlLmlzT2JqZWN0KG8pKXsgICAgICAgICAgICAgICBcclxuICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvKS5yZWR1Y2UoIGZ1bmN0aW9uKGEsIGspe1xyXG4gICAgICAgICAgICBhW2tdID0gbW9kdWxlLmNsb25lKG9ba10pO1xyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgIH0sIHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgIH0sICAgICAgICBcclxuICAgICAgam9pbiAgICAgICAgOiBmdW5jdGlvbihpdGVtcywgcHJvcGVydHksIHNlcGFyYXRvcil7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLnJlZHVjZShmdW5jdGlvbihhLCBvKXsgcmV0dXJuIGEuYXBwZW5kKG9bcHJvcGVydHkgfHwgJ2lkJ10pOyB9LCBbXSlcclxuICAgICAgICAgICAgICAgICAgICAuam9pbihzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICctJyA6IChzZXBhcmF0b3IgfHwgJycpKTsgXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0cmluZ0J1aWxkZXIgOiBmdW5jdGlvbihzKXtcclxuICAgICAgICAgIHJldHVybiB7IHZhbHVlICAgICAgOiBzIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgYXBwZW5kICAgICA6IGZ1bmN0aW9uKHMpeyB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZSArIHM7IHJldHVybiB0aGlzO30sXHJcbiAgICAgICAgICAgICAgICAgICBhcHBlbmRMaW5lIDogZnVuY3Rpb24ocyl7IHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlICsgKHMgfHwgJycpICsgJ1xcbic7IHJldHVybiB0aGlzO319XHJcbiAgICAgIH0sXHJcbiAgICAgIGJ1aWxkIDogZnVuY3Rpb24odGFnTmFtZSwgbyl7XHJcbiAgICAgICAgcmV0dXJuIF9tb2R1bGUuYXBwbHkoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKSwgbyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0oX21vZHVsZSkpO1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBTdHJpbmdzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpe1xyXG4gICAgbW9kdWxlLmFwcGx5KFN0cmluZywge1xyXG4gICAgICBzdHJpbmdCdWlsZGVyIDogbW9kdWxlLnN0cmluZ0J1aWxkZXIsXHJcbiAgICAgIGxlZnRQYWQgICAgICAgOiBmdW5jdGlvbiAodmFsLCBzaXplLCBjaCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAnJyArIHZhbDtcclxuICAgICAgICBpZiAoY2ggPT09IG51bGwgfHwgY2ggPT09IHVuZGVmaW5lZCB8fCBjaCA9PT0gJycpIGNoID0gJyAnOyAgICAgICAgICAgIFxyXG4gICAgICAgIHdoaWxlIChyZXN1bHQubGVuZ3RoIDwgc2l6ZSkgcmVzdWx0ID0gY2ggKyByZXN1bHQ7ICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSxcclxuICAgICAgdHJpbVZhbHVlcyA6IGZ1bmN0aW9uICh2YWx1ZXMpeyByZXR1cm4gdmFsdWVzLm1hcChmdW5jdGlvbihzKXtyZXR1cm4gcy50cmltKCk7fSk7fVxyXG4gICAgfSk7XHJcbiAgICBtb2R1bGUuYXBwbHkoU3RyaW5nLnByb3RvdHlwZSwge1xyXG4gICAgICByZXBsYWNlQWxsICA6IGZ1bmN0aW9uKHBhdHRlcm4sIHJlcGxhY2VtZW50KSB7IHJldHVybiB0aGlzLnNwbGl0KHBhdHRlcm4pLmpvaW4ocmVwbGFjZW1lbnQpOyB9LFxyXG4gICAgICByZXBlYXQgICAgICA6IFN0cmluZy5wcm90b3R5cGUucmVwZWF0ICAgICB8fCBmdW5jdGlvbihhKSB7IHJldHVybiBuZXcgQXJyYXkoYSArIDEpLmpvaW4odGhpcyk7IH0sXHJcbiAgICAgIGNvbnRhaW5zICAgIDogU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyAgIHx8IGZ1bmN0aW9uKHQsIHN0YXJ0KSB7IHJldHVybiB0aGlzLmluZGV4T2YodCkgPj0gKHN0YXJ0IHx8IDApOyB9LFxyXG4gICAgICBzdGFydHNXaXRoICA6IFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCB8fCBmdW5jdGlvbih0KXsgcmV0dXJuIHRoaXMuaW5kZXhPZih0KSA9PSAwOyB9LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIHRvRmxvYXQgICAgIDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMudHJpbSgpLnJlcGxhY2VBbGwoJy4nLCAnJykucmVwbGFjZUFsbCgnLCcsICcuJykgfSxcclxuICAgICAgZml4RGF0ZSAgICAgOiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5zcGxpdCgnICcpWzBdOyB9LFxyXG4gICAgICBmaXhUaW1lICAgICA6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLnNwbGl0KCcgJylbMV07IH0sXHJcbiAgICAgIGZpeFllYXIgICAgIDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuZml4RGF0ZSgpLnNwbGl0KCcvJylbMl07fSxcclxuICAgICAgdHJpbVNlY29uZHMgOiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5zcGxpdCgnOicpWzBdICsgJzonICsgdGhpcy5zcGxpdCgnOicpWzFdIDsgfSxcclxuICAgICAgcGFkZGluZ0xlZnQgOiBmdW5jdGlvbihwYWRkaW5nVmFsdWUpeyByZXR1cm4gKHBhZGRpbmdWYWx1ZSArIHRoaXMpLnNsaWNlKC1wYWRkaW5nVmFsdWUubGVuZ3RoKTsgfSxcclxuICAgICAgZm9ybWF0ICAgICAgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBfX2FyZyAgICAgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgdmFyIF9fY29udGV4dCA9IF9fYXJnW19fYXJnLmxlbmd0aCAtIDFdIHx8IHNlbGY7ICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvXFx7KFxcZCt8W157XSspXFx9L2csIGZ1bmN0aW9uKG0sIGtleSl7XHJcbiAgICAgICAgICBpZihrZXkuaW5kZXhPZignOicpID4gMCl7XHJcbiAgICAgICAgICAgIHZhciBfX2ZuID0ga2V5LnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgIF9fZm5bMF0gID0gZ2V0VmFsdWUoX19mblswXSwgX19jb250ZXh0KTtcclxuICAgICAgICAgICAgX19mblsxXSAgPSBnZXRWYWx1ZShfX2ZuWzFdLCBfX2NvbnRleHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gX19mblswXShfX2ZuWzFdLCBfX2NvbnRleHQpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIC9eXFxkKyQvLnRlc3Qoa2V5KSA/IF9fYXJnW2tleV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICh0eXBlb2YgX19jb250ZXh0W2tleV0gPT09IFwidW5kZWZpbmVkXCIpID8gZ2V0VmFsdWUoa2V5LCBfX2NvbnRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfX2NvbnRleHRba2V5XTsgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pOyAgICAgIFxyXG4gIH0oX21vZHVsZSkpOyAgICAgIFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBBcnJheVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgXHJcbiAgKGZ1bmN0aW9uKG1vZHVsZSl7XHJcbiAgICBtb2R1bGUuYXBwbHkoQXJyYXkucHJvdG90eXBlLCB7ICAgICAgICAgIFxyXG4gICAgICByZW1vdmUgICA6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4T2Yobyk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9IC0xKSB0aGlzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZCAgICAgIDogZnVuY3Rpb24obykge1xyXG4gICAgICAgIHRoaXMucHVzaChvKTtcclxuICAgICAgICByZXR1cm4gbztcclxuICAgICAgfSxcclxuICAgICAgYXBwZW5kICAgOiBmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoKG8pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9LFxyXG4gICAgICBpdGVtICAgICA6IGZ1bmN0aW9uKHByb3BOYW1lLCB2YWx1ZSwgZGVmKXtcclxuICAgICAgICByZXR1cm4gYXJndW1lbnRzPT0xID8gdGhpcy5maWx0ZXIoIGZ1bmN0aW9uKHYpe3JldHVybiB2WydpZCddID09IHByb3BOYW1lIHx8IHZbJ19pZCddID09IHByb3BOYW1lfSlbMF0gfHwgZGVmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZmlsdGVyKCBmdW5jdGlvbih2KXtyZXR1cm4gdltwcm9wTmFtZV0gPT0gdmFsdWV9KVswXSB8fCBkZWY7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRhaW5zIDogZnVuY3Rpb24ocHJvcE5hbWUsdmFsdWUpeyByZXR1cm4gdGhpcy5pdGVtKHByb3BOYW1lLHZhbHVlKTsgfSxcclxuICAgICAgbGFzdEl0ZW0gOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTsgfSxcclxuICAgICAgc2VsZWN0ICAgOiBmdW5jdGlvbihzZW50ZW5jZSl7IHJldHVybiB0aGlzLm1hcChzZW50ZW5jZSkgfSwgICBcclxuICAgICAgd2hlcmUgICAgOiBmdW5jdGlvbihzZW50ZW5jZSl7IFxyXG4gICAgICAgIGlmKG1vZHVsZS5pc0Z1bmN0aW9uKHNlbnRlbmNlKSkgcmV0dXJuIHRoaXMuZmlsdGVyKHNlbnRlbmNlKTtcclxuICAgICAgICBpZihtb2R1bGUuaXNPYmplY3Qoc2VudGVuY2UpKXtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmZpbHRlcihuZXcgRnVuY3Rpb24oJ2EnLCBPYmplY3Qua2V5cyhzZW50ZW5jZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKGEsIHByb3BuYW1lLCBpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgKyAoaSA+IDAgPyAnICYmICcgOiAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAgKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fdmFsdWUgPSBzZW50ZW5jZVtwcm9wbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoX192YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuICd7MX0udGVzdChhLnswfSknLmZvcm1hdChwcm9wbmFtZSwgX192YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobW9kdWxlLmlzU3RyaW5nKF9fdmFsdWUpKSByZXR1cm4gJ2EuezB9ID09PSBcXCd7MX1cXCcnLmZvcm1hdChwcm9wbmFtZSwgX192YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhLnswfSA9PT0gezF9Jy5mb3JtYXQocHJvcG5hbWUsIF9fdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSgpKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAncmV0dXJuICcpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9LFxyXG4gICAgICBzb3J0QnkgICAgICA6IGZ1bmN0aW9uKHByb3BuYW1lLCBkZXNjKXtcclxuICAgICAgICB2YXIgX19vcmRlciA9IFtdO1xyXG4gICAgICAgIHZhciBfX25hbWVzID0gcHJvcG5hbWUuc3BsaXQoJywnKS5tYXAoIGZ1bmN0aW9uKHRva2VuLGkpeyBcclxuICAgICAgICAgIHZhciBfX3BhaXIgPSB0b2tlbi5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgX19vcmRlcltpXSA9IChfX3BhaXJbMV0gJiYgKF9fcGFpclsxXS50b1VwcGVyQ2FzZSgpPT0nREVTQycpKSA/IC0xIDogMTsgICAgICBcclxuICAgICAgICAgIHJldHVybiBfX3BhaXJbMF07ICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIF9fb3JkZXJbMF0gPSAoZGVzYyA/IC0xIDogMSlcclxuICAgICAgICB0aGlzLnNvcnQoZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwOyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9fZm4gPSBmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciBfX3ggPSBhW19fbmFtZXNbaV1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIF9feSA9IGJbX19uYW1lc1tpXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihfX3ggPCBfX3kpIHJldHVybiAtMSAqIF9fb3JkZXJbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihfX3ggPiBfX3kpIHJldHVybiAgMSAqIF9fb3JkZXJbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihpIDwgX19uYW1lcy5sZW5ndGgpIHJldHVybiBfX2ZuKGEsYik7ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2ZuKGEsYik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpczsgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyQnkgICAgIDogZnVuY3Rpb24oc2VudGVuY2Upe1xyXG4gICAgICAgIHZhciBfX3NlbnRlbmNlID0gc2VudGVuY2U7ICAgIFxyXG4gICAgICAgIGlmKG1vZHVsZS5pc1N0cmluZyhzZW50ZW5jZSkpIF9fc2VudGVuY2UgPSBmdW5jdGlvbihhKXsgcmV0dXJuIGFbc2VudGVuY2VdOyB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlfSlcclxuICAgICAgICAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBfX3NlbnRlbmNlKGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBfX3NlbnRlbmNlKGIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgoeCA8IHkpID8gLTEgOiAoKHggPiB5KSA/IDEgOiAwKSk7XHJcbiAgICAgICAgICAgICAgICAgICB9KTsgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBkaXN0aW5jdCAgICA6IGZ1bmN0aW9uKHNlbnRlbmNlKSB7XHJcbiAgICAgICAgdmFyIF9fc2VudGVuY2UgPSBzZW50ZW5jZTsgICAgXHJcbiAgICAgICAgaWYobW9kdWxlLmlzU3RyaW5nKHNlbnRlbmNlKSkgX19zZW50ZW5jZSA9IGZ1bmN0aW9uKGEpeyByZXR1cm4gYVtzZW50ZW5jZV07IH1cclxuICAgICAgICB2YXIgciA9IFtdO1xyXG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgIHZhciBfdmFsdWUgPSBfX3NlbnRlbmNlKGl0ZW0pO1xyXG4gICAgICAgICAgaWYoci5pbmRleE9mKF92YWx1ZSk9PS0xKSByLnB1c2goX3ZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgICAgfSxcclxuICAgICAgZ3JvdXBCeSA6IGZ1bmN0aW9uKHByb3Ape1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZHVjZShmdW5jdGlvbihncm91cHMsIGl0ZW0pIHtcclxuICAgICAgICAgIHZhciB2YWwgPSBpdGVtW3Byb3BdO1xyXG4gICAgICAgICAgKGdyb3Vwc1t2YWxdID0gZ3JvdXBzW3ZhbF0gfHwgW10pLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICByZXR1cm4gZ3JvdXBzXHJcbiAgICAgICAgfSwge30pXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvRGljdGlvbmFyeSA6IGZ1bmN0aW9uKHByb3AsIHZhbHVlKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWR1Y2UoZnVuY3Rpb24oYSwgZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtkW3Byb3BdXSA9IHZhbHVlID8gZFt2YWx1ZV0gOiBkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7fSk7ICBcclxuICAgICAgfVxyXG4gICAgfSk7ICAgICAgIFxyXG4gIH0oX21vZHVsZSkpO1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gVGVtcGxhdGVzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpe1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFZhbHVlKGtleSwgc2NvcGUpIHsgICAgICAgIFxyXG4gICAgICByZXR1cm4ga2V5LnNwbGl0KC9cXC58XFxbfFxcXS8pXHJcbiAgICAgICAgICAgICAgICAucmVkdWNlKCBmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICAgICAgICAgICAgaWYgKGIgPT09ICcnKSByZXR1cm4gYTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFbYl0gPT09IHVuZGVmaW5lZCA/IChhID09PSBzZWxmID8gJycgOiBzZWxmKSA6IGFbYl07XHJcbiAgICAgICAgICAgICAgICB9LCBzY29wZSB8fCBzZWxmICk7ICAgIFxyXG4gICAgfVxyXG4gICBcclxuICAgIGZ1bmN0aW9uIG1lcmdlKHRlbXBsYXRlLCBvLCBrZXkpIHtcclxuICAgICAgaWYoc2VsZi5CUy5yZXBvcnREZWZpbml0aW9uLmNvbnRleHQubWVyZ2VNb2RlKXtcclxuICAgICAgICByZXR1cm4gbWVyZ2VPcHRpbWl6ZWQodGVtcGxhdGUsIG8sIGtleSk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIF9fcmVzdWx0ID0gdGVtcGxhdGUucmVwbGFjZSgveyhbXntdKyk/fS9nLCBmdW5jdGlvbiAobSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihrZXkuaW5kZXhPZignOicpID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2ZuID0ga2V5LnNwbGl0KCc6Jyk7ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19mblswXSAgPSBnZXRWYWx1ZShfX2ZuWzBdLCBvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19mblsxXSAgPSBnZXRWYWx1ZShfX2ZuWzFdLCBvKTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZm5bMF0oX19mblsxXSwgbyk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgciAgID0gZ2V0VmFsdWUoa2V5LCBvKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2sgPSAoa2V5LmNvbnRhaW5zKCcuJykgPyAnJyA6ICdvLicpICsga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAocikgPT0gJ2Z1bmN0aW9uJyl7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByKG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfWVsc2V7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIChyKSA9PSAnZnVuY3Rpb24nID8gcihvKSA6IHI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7ICAgICBcclxuICAgICAgcmV0dXJuIF9fcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1lcmdlT3B0aW1pemVkKHRlbXBsYXRlLCBvLCBrZXkpIHtcclxuICAgICAgXHJcbiAgICAgIGlmKG9ba2V5XSAmJiBvW2tleV0gPT09ICd0ZW1wbGF0ZScpIHJldHVybiB0ZW1wbGF0ZTsgXHJcbiAgICAgIGlmKG9ba2V5XSkgcmV0dXJuIG9ba2V5XShvKTsgICAgICBcclxuICAgICAgdmFyIF9fdmFsdWVzID0gW107XHJcbiAgICAgIHZhciBfX3Jlc3VsdCA9IHRlbXBsYXRlLnJlcGxhY2UoL3soW157XSspP30vZywgZnVuY3Rpb24gKG0sIGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoa2V5LmluZGV4T2YoJzonKSA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19mbiA9IGtleS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19rID0gKF9fZm5bMV0uY29udGFpbnMoJy4nKSA/ICcnIDogJ28uJykgKyBfX2ZuWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX3ZhbHVlcy5wdXNoKCd7MH0oezF9KSAnLmZvcm1hdChfX2ZuWzBdLCBfX2spKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19mblswXSAgPSBnZXRWYWx1ZShfX2ZuWzBdLCBvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19mblsxXSAgPSBnZXRWYWx1ZShfX2ZuWzFdLCBvKTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZm5bMF0oX19mblsxXSwgbyk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgciAgID0gZ2V0VmFsdWUoa2V5LCBvKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2sgPSAoa2V5LmNvbnRhaW5zKCcuJykgPyAnJyA6ICdvLicpICsga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAocikgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fdmFsdWVzLnB1c2goJ3swfShvKScuZm9ybWF0KF9faykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcihvKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX3ZhbHVlcy5wdXNoKCd7MH0nLmZvcm1hdChfX2spKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgKHIpID09ICdmdW5jdGlvbicgPyByKG8pIDogcjtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgaWYoa2V5ICYmIF9fdmFsdWVzLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgb1trZXldID0gJ3RlbXBsYXRlJztcclxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICAgIH1cclxuICAgICAgaWYoa2V5ICYmIF9fdmFsdWVzLmxlbmd0aCl7XHJcbiAgICAgICAgX192YWx1ZXMucmV2ZXJzZSgpXHJcbiAgICAgICAgdmFyIF9fYiA9IHRlbXBsYXRlLnNwbGl0KC97KFtee10rKT99L2cpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbih0LCBpKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIGkgJSAyID8gX192YWx1ZXMucG9wKCkgOiAnXFwnJyArIHQgKyAnXFwnJyA7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKCBmdW5jdGlvbihhLCB0b2tlbiwgaSwgYXJyKXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0b2tlbiA9PT0gXCInJ1wiKSByZXR1cm4gYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhICsgdG9rZW4gKyAoKGkgPCBhcnIubGVuZ3RoLTEpID8gJyArICcgOiAnJyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sICdyZXR1cm4gJyk7XHJcblxyXG4gICAgICAgIG9ba2V5XSA9IG5ldyBGdW5jdGlvbignbycsIF9fYi5yZXBsYWNlKC8oPzpcXHJcXG58XFxyfFxcbikvZywgJycpKTtcclxuICAgICAgICByZXR1cm4gb1trZXldKG8pO1xyXG4gICAgICB9ICAgICAgXHJcbiAgICAgIHJldHVybiBfX3Jlc3VsdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbW9kdWxlLnRlbXBsYXRlcyA9IHsgZ2V0VmFsdWUgIDogZ2V0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBtZXJnZSAgICAgOiBtZXJnZSB9O1xyXG5cclxuICB9KF9tb2R1bGUpKTtcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIEFqYXhcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKGZ1bmN0aW9uKG1vZHVsZSl7ICBcclxuICAgIG1vZHVsZS5hamF4ID0ge307XHJcbiAgICBtb2R1bGUuYXBwbHkobW9kdWxlLmFqYXgsIHtcclxuICAgICAgZ2V0ICA6IGZ1bmN0aW9uICh1cmwsIGNhbGxCYWNrKSB7XHJcbiAgICAgICAgdXJsICs9ICh1cmwuY29udGFpbnMoJz8nKSA/ICcmbXM9JyA6ICc/bXM9JykgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgeG1sID0gdGhpcy5jcmVhdGVYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhtbC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdJZi1Nb2RpZmllZC1TaW5jZScsICdUaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVCcpO1xyXG4gICAgICAgIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdDYWNoZS1Db250cm9sJywgJ25vLWNhY2hlJyk7XHJcbiAgICAgICAgeG1sLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHsgaWYgKHhtbC5yZWFkeVN0YXRlID09IDQpIGNhbGxCYWNrKHhtbC5yZXNwb25zZVRleHQpIH07XHJcbiAgICAgICAgeG1sLnNlbmQobnVsbCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHBvc3QgOiBmdW5jdGlvbih1cmwsIHBhcmFtcywgY2FsbEJhY2spIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB2YXIgeG1sID0gdGhpcy5jcmVhdGVYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhtbC5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcclxuICAgICAgICB4bWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7IGlmICh4bWwucmVhZHlTdGF0ZSA9PSA0KSBjYWxsQmFjayh4bWwucmVzcG9uc2VUZXh0KSB9O1xyXG4gICAgICAgIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0OklTTy04ODU5LTEnKTtcclxuICAgICAgICB4bWwuc2VuZChwYXJhbXMpO1xyXG4gICAgICB9LFxyXG4gICAgICBjYWxsV2ViTWV0aG9kIDogZnVuY3Rpb24odXJsLCBwYXJhbXMsIGNhbGxCYWNrKSB7XHJcbiAgICAgICAgdmFyIHhtbCA9IHRoaXMuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4bWwub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeG1sLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7IGlmICh4bWwucmVhZHlTdGF0ZSA9PSA0KSBjYWxsQmFjayh4bWwucmVzcG9uc2VUZXh0KSB9O1xyXG4gICAgICAgIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgICAgIHhtbC5zZW5kKHBhcmFtcyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNyZWF0ZVhNTEh0dHBSZXF1ZXN0IDogZnVuY3Rpb24oKXsgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpOyB9XHJcbiAgICB9KTsgIFxyXG4gIH0oX21vZHVsZSkpOyBcclxuICAgICAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFRhYmJseVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24gKG1vZHVsZSl7XHJcbiAgICAgIFxyXG4gICAgdmFyIF9fY29udGV4dDtcclxuXHJcbiAgICBmdW5jdGlvbiBfX0V4ZWN1dGVDb2RlKGNvZGUpe1xyXG5cclxuICAgICAgX19jb250ZXh0ID0geyBzZWN0aW9ucyA6IFtdLCBncm91cHMgOiBbXSwgZGV0YWlscyA6IFtdfTtcclxuXHJcbiAgICAgIHZhciBfX2N1cjtcclxuICAgICAgdmFyIF9fZnVuYyAgICAgICA9ICcnO1xyXG4gICAgICB2YXIgX19mdW5jQm9keSAgID0gJyc7XHJcbiAgICAgIHZhciBfX3NldFN0YXRlICA9IGZhbHNlO1xyXG5cclxuICAgICAgZnVuY3Rpb24gX19nZXQodmFsdWUpe1xyXG4gICAgICAgIGlmKHZhbHVlICYmIHZhbHVlLnRyaW0oKS5zdGFydHNXaXRoKCdAJykpe1xyXG4gICAgICAgICAgcmV0dXJuIF9fY29udGV4dFt2YWx1ZS50cmltKCkuc3BsaXQoJ0AnKVsxXS50cmltKCldIHx8ICcnO1xyXG4gICAgICAgIH1lbHNlIGlmKHZhbHVlKXtcclxuICAgICAgICAgIHJldHVybiB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfSAgXHJcblxyXG4gICAgICBmdW5jdGlvbiBfX3BhcnNlX3Byb3BlcnRpZXModmFsdWUpe1xyXG4gICAgICAgIHZhciBfX3JlZyAgID0gIC8oW2EtekEtWjAtOV9cXC1dKilcXHMqOlxccyooJ1teJ10qJ3xbXlxcc10qKS9nO1xyXG4gICAgICAgIHZhciBfX28gICAgID0ge307XHJcbiAgICAgICAgdmFyIF9fbWF0Y2ggPSBfX3JlZy5leGVjKHZhbHVlKTtcclxuICAgICAgICB3aGlsZSAoX19tYXRjaCAhPSBudWxsKSB7XHJcbiAgICAgICAgICBfX29bX19tYXRjaFsxXS50cmltKCldID0gX19nZXQoX19tYXRjaFsyXS50cmltKCkucmVwbGFjZSgvXicoW14nXSopJyQvZywgJyQxJykpO1xyXG4gICAgICAgICAgX19tYXRjaCA9IF9fcmVnLmV4ZWModmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX19vXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIF9fcGFyc2VMaW5lKGwsIG8pe1xyXG4gICAgICAgIGlmKCFfX2Z1bmMgJiYgIWwudHJpbSgpKSByZXR1cm4gZnVuY3Rpb24oKXt9O1xyXG4gICAgICAgIHZhciBfX2tleXMgPSAvREVGSU5FfCN8Q1JFQVRFfFNFVHxGVU5DVElPTnxFTkQvO1xyXG4gICAgICAgIGlmKF9fa2V5cy50ZXN0KGwpKXtcclxuICAgICAgICAgIGlmKC9eIy8udGVzdChsKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe307XHJcbiAgICAgICAgICB9ZWxzZSBpZigvXlNFVCAoXFx3LiopLy50ZXN0KGwpKXsgIFxyXG4gICAgICAgICAgICB2YXIgX190b2tlbnMgPSBsLm1hdGNoKC9eU0VUIChcXHcuKikkLyk7XHJcbiAgICAgICAgICAgIF9fc2V0U3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBfX2Z1bmMgICAgICA9IF9fdG9rZW5zWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgX19mdW5jQm9keSAgPSAnJztcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICAgIH1lbHNlIGlmKC9eRlVOQ1RJT04gKFxcdy4qKS8udGVzdChsKSl7ICBcclxuICAgICAgICAgICAgdmFyIF9fdG9rZW5zID0gbC5tYXRjaCgvXkZVTkNUSU9OIChcXHcuKikkLyk7XHJcbiAgICAgICAgICAgIF9fc2V0U3RhdGUgID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF9fZnVuYyAgICAgICA9IF9fdG9rZW5zWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgX19mdW5jQm9keSAgID0gJyc7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe307XHJcbiAgICAgICAgICB9ZWxzZSBpZigvXkVORC8udGVzdChsKSl7ICAgICAgXHJcbiAgICAgICAgICAgIHZhciBfX2JvZHkgPSBfX2Z1bmNCb2R5O1xyXG4gICAgICAgICAgICB2YXIgX19uYW1lID0gX19mdW5jO1xyXG4gICAgICAgICAgICBfX2Z1bmMgPSBfX2Z1bmNCb2R5ID0gJyc7IFxyXG4gICAgICAgICAgICBpZihfX3NldFN0YXRlKXtcclxuICAgICAgICAgICAgICBfX3NldFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXsgX19jdXJbX19uYW1lXSA9IF9fYm9keS50cmltKCk7IH1cclxuICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7IGN0eFtfX25hbWVdID0gbmV3IEZ1bmN0aW9uKCdjdHgnLCBfX2JvZHkpOyB9XHJcbiAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIH1lbHNlIGlmKC9eREVGSU5FXFxzXFxzKihcXHcuKilcXHMqPVxccyooLiopJC8udGVzdChsKSl7XHJcbiAgICAgICAgICAgIHZhciBfX3Rva2VucyA9IGwubWF0Y2goL15ERUZJTkVcXHNcXHMqKFthLXpBLVowLTlfXFwtXSopXFxzKj1cXHMqKC4qKSQvKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBfX3Rva2VucztcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXsgY3R4W3Rva2Vuc1sxXS50cmltKCldID0gdG9rZW5zWzJdLnRyaW0oKTsgfVxyXG4gICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICB9ZWxzZSBpZigvXkNSRUFURVxcc1xccyooXFx3KikgKC4qKSQvLnRlc3QobCkpe1xyXG4gICAgICAgICAgICB2YXIgX190b2tlbnMgPSBsLm1hdGNoKC9eQ1JFQVRFXFxzXFxzKihcXHcqKSAoLiopJC8pO1xyXG4gICAgICAgICAgICBpZihfX3Rva2Vuc1sxXT09J3NlY3Rpb24nKXtcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gX190b2tlbnM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXsgXHJcbiAgICAgICAgICAgICAgICAgIGN0eC5zZWN0aW9ucy5wdXNoKF9fcGFyc2VfcHJvcGVydGllcyh0b2tlbnNbMl0pKTsgXHJcbiAgICAgICAgICAgICAgICAgIF9fY3VyID0gY3R4LnNlY3Rpb25zW2N0eC5zZWN0aW9ucy5sZW5ndGggLSAxXTt9XHJcbiAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoX190b2tlbnNbMV09PSdncm91cCcpe1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyBcclxuICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBfX3Rva2VucztcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpeyBcclxuICAgICAgICAgICAgICAgICAgY3R4Lmdyb3Vwcy5wdXNoKF9fcGFyc2VfcHJvcGVydGllcyh0b2tlbnNbMl0pKTtcclxuICAgICAgICAgICAgICAgICAgX19jdXIgPSBjdHguZ3JvdXBzW2N0eC5ncm91cHMubGVuZ3RoIC0gMV07fVxyXG4gICAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoX190b2tlbnNbMV09PSdkZXRhaWwnKXtcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gX190b2tlbnM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXtcclxuICAgICAgICAgICAgICAgICAgY3R4LmRldGFpbHMucHVzaChfX3BhcnNlX3Byb3BlcnRpZXModG9rZW5zWzJdKSk7XHJcbiAgICAgICAgICAgICAgICAgIF9fY3VyID0gY3R4LmRldGFpbHNbY3R4LmRldGFpbHMubGVuZ3RoIC0gMV07fVxyXG4gICAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfWVsc2V7IHRocm93IG5ldyBFcnJvcignVGFiYmx5IDogVW5yZWNvZ25pemVkIHRleHQgYWZ0ZXIgREVGSU5FJyl9ICBcclxuICAgICAgICB9ZWxzZXsgXHJcbiAgICAgICAgICBpZihfX2Z1bmMpe1xyXG4gICAgICAgICAgICBfX2Z1bmNCb2R5ICs9IG87XHJcbiAgICAgICAgICAgIF9fZnVuY0JvZHkgKz0gJ1xcbic7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe307XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RhYmJseSA6IFVucmVjb2duaXplZCB0ZXh0JylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvZGUuc3BsaXQoJ1xcbicpLmZvckVhY2goZnVuY3Rpb24obCl7IFxyXG4gICAgICAgIF9fcGFyc2VMaW5lKGwudHJpbSgpLGwpKF9fY29udGV4dCk7IFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiB7IGNvbnRleHQgOiBfX2NvbnRleHQgfTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW9kdWxlLnRhYmJseSA9IHsgZXhlY3V0ZSA6IF9fRXhlY3V0ZUNvZGUgfTtcclxuXHJcbiAgfShfbW9kdWxlKSk7XHJcbiAgICAgIFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBSZXBvcnRzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpIHtcclxuXHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lICAgICAgICAgICAgICAgID0ge307ICAgICAgXHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmdlbmVyYXRlUmVwb3J0ID0gZnVuY3Rpb24ocmQsIGRhdGEsIG1lZGlhdG9yKXtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmJlZ2luJyB9KTtcclxuICAgICAgdmFyIF9fcmQgICAgICA9IHJkIHx8IG1vZHVsZS5SZXBvcnRFbmdpbmUucmQ7XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gVHJhbnNmb3JtYXIgbG9zIGRhdG9zXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgdmFyIF9fZGF0YVNldCA9IF9fcmQuY29udGV4dC5wYXJzZURhdGEgPyBfX3JkLmNvbnRleHQucGFyc2VEYXRhKF9fcmQsIGRhdGEsIG1lZGlhdG9yLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZGF0YTtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmxvZy5tZXNzYWdlJywgdGV4dCA6ICdJbmljaWFsaXphbmRvLi4uJyB9KTtcclxuICAgICAgY29uc29sZS50aW1lKCdSZW5kZXInKTtcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBJbmljaWFsaXphciBmdW5jaW9uZXMgcGFyYSBsYSBnZW5lcmFjacOzbiBkZSBjb250ZW5pZG8gcGVyc29uYWxpemFkb1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9faW5pdENvbnRlbnRQcm92aWRlcnMoKXtcclxuICAgICAgICBbX19yZC5jb250ZXh0LnNlY3Rpb25zLCBfX3JkLmNvbnRleHQuZGV0YWlscywgX19yZC5jb250ZXh0Lmdyb3Vwc11cclxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKGEsYil7IHJldHVybiBhLmNvbmNhdChiKTsgfSwgW10pXHJcbiAgICAgICAgLm1hcChmdW5jdGlvbihzKXtcclxuICAgICAgICAgIGlmKHMudmFsdWVQcm92aWRlcmZuKXtcclxuICAgICAgICAgICAgcy52YWx1ZVByb3ZpZGVyID0gbW9kdWxlLnRlbXBsYXRlcy5nZXRWYWx1ZShzLnZhbHVlUHJvdmlkZXJmbiwgc2VsZik7IFxyXG4gICAgICAgICAgICBkZWxldGUgcy52YWx1ZVByb3ZpZGVyZm47ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYocy5mb290ZXJWYWx1ZVByb3ZpZGVyZm4pe1xyXG4gICAgICAgICAgICBzLmZvb3RlclZhbHVlUHJvdmlkZXIgPSBtb2R1bGUudGVtcGxhdGVzLmdldFZhbHVlKHMuZm9vdGVyVmFsdWVQcm92aWRlcmZuLCBzZWxmKTsgXHJcbiAgICAgICAgICAgIGRlbGV0ZSBzLmZvb3RlclZhbHVlUHJvdmlkZXJmbjsgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihzLmhlYWRlclZhbHVlUHJvdmlkZXJmbil7XHJcbiAgICAgICAgICAgIHMuaGVhZGVyVmFsdWVQcm92aWRlciA9IG1vZHVsZS50ZW1wbGF0ZXMuZ2V0VmFsdWUocy5oZWFkZXJWYWx1ZVByb3ZpZGVyZm4sIHNlbGYpOyBcclxuICAgICAgICAgICAgZGVsZXRlIHMuaGVhZGVyVmFsdWVQcm92aWRlcmZuO1xyXG4gICAgICAgICAgfSAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEdlbmVyYWNpw7NuIGRlIGxhcyBzZWNjaW9uZXMgZGUgY2FiZWNlcmEgZGUgbGFzIGFncnVwYWNpb25lc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgdmFyIF9fTUVSR0VfQU5EX1NFTkQgPSBmdW5jdGlvbih0LCBwLCBmbmtleSl7IG1lZGlhdG9yLnNlbmQobW9kdWxlLnRlbXBsYXRlcy5tZXJnZSh0LCBwLCBmbmtleSkpOyB9O1xyXG4gICAgICBmdW5jdGlvbiBfX2dyb3Vwc0hlYWRlcnMoKXtcclxuICAgICAgICBfX2dyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uKGcsIGlpKXtcclxuICAgICAgICAgIGlmKGlpIDwgX19icmVha0luZGV4KSByZXR1cm47IFxyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnNlY3Rpb25zLmdyb3VwLmhlYWRlcicsIHZhbHVlIDogZy5pZCB9KTsgIFxyXG4gICAgICAgICAgaWYoZy5kZWZpbml0aW9uLmhlYWRlcikgcmV0dXJuIF9fTUVSR0VfQU5EX1NFTkQoZy5kZWZpbml0aW9uLmhlYWRlciwgZywgJ2NvbXBpbGVkX2hlYWRlcmZuJyk7XHJcbiAgICAgICAgICBpZihnLmRlZmluaXRpb24uaGVhZGVyVmFsdWVQcm92aWRlcikgcmV0dXJuIG1lZGlhdG9yLnNlbmQoZy5kZWZpbml0aW9uLmhlYWRlclZhbHVlUHJvdmlkZXIoZykpOyBcclxuICAgICAgICB9KTsgICAgXHJcbiAgICAgIH1cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEdlbmVyYWNpw7NuIGRlIGxhcyBzZWNjaW9uZXMgZGUgcmVzdW1lbiBkZSBsYXMgYWdydXBhY2lvbmVzXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX2dyb3Vwc0Zvb3RlcnMoaW5kZXgpe1xyXG4gICAgICAgIHZhciBfX2dnID0gX19ncm91cHMubWFwKGZ1bmN0aW9uKGcpe3JldHVybiBnO30pOyBcclxuICAgICAgICBpZihpbmRleCkgX19nZy5zcGxpY2UoMCwgaW5kZXgpO1xyXG4gICAgICAgIF9fZ2cucmV2ZXJzZSgpLmZvckVhY2goIGZ1bmN0aW9uKGcpe1xyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnNlY3Rpb25zLmdyb3VwLmZvb3RlcicsIHZhbHVlIDogZy5pZCB9KTsgICAgICAgICAgXHJcbiAgICAgICAgICBpZihnLmRlZmluaXRpb24uZm9vdGVyKSByZXR1cm4gX19NRVJHRV9BTkRfU0VORChnLmRlZmluaXRpb24uZm9vdGVyLCBnLCAnY29tcGlsZWRfZm9vdGVyZm4nKTtcclxuICAgICAgICAgIGlmKGcuZGVmaW5pdGlvbi5mb290ZXJWYWx1ZVByb3ZpZGVyKSByZXR1cm4gbWVkaWF0b3Iuc2VuZChnLmRlZmluaXRpb24uZm9vdGVyVmFsdWVQcm92aWRlcihnKSk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICB9IFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBHZW5lcmFjacOzbiBkZSBsYXMgc2VjY2lvbmVzIGRlIGRldGFsbGVcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19kZXRhaWxzU2VjdGlvbnMoKXtcclxuICAgICAgICBfX2RldGFpbHMuZm9yRWFjaChmdW5jdGlvbihkKXtcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5zZWN0aW9ucy5kZXRhaWwnLCB2YWx1ZSA6IGQuaWQgfSk7XHJcbiAgICAgICAgICBpZihkLnRlbXBsYXRlKSByZXR1cm4gX19NRVJHRV9BTkRfU0VORChkLnRlbXBsYXRlLCBkLCAnY29tcGlsZWRmbicpXHJcbiAgICAgICAgICBpZihkLnZhbHVlUHJvdmlkZXIpIHJldHVybiBtZWRpYXRvci5zZW5kKGQudmFsdWVQcm92aWRlcihkKSk7XHJcbiAgICAgICAgfSkgICAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBHZW5lcmFjacOzbiBkZSBsYXMgc2VjY2lvbmVzIGRlIHRvdGFsIGdlbmVyYWxcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19ncmFuZFRvdGFsU2VjdGlvbnMoKXtcclxuICAgICAgICBfX3RvdGFscy5mb3JFYWNoKGZ1bmN0aW9uKHQpe1xyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnNlY3Rpb25zLnRvdGFsJywgdmFsdWUgOiB0LmlkIH0pO1xyXG4gICAgICAgICAgaWYodC50ZW1wbGF0ZSkgcmV0dXJuIF9fTUVSR0VfQU5EX1NFTkQodC50ZW1wbGF0ZSwgdCwgJ2NvbXBpbGVkZm4nKVxyXG4gICAgICAgICAgaWYodC52YWx1ZVByb3ZpZGVyKSByZXR1cm4gbWVkaWF0b3Iuc2VuZCh0LnZhbHVlUHJvdmlkZXIodCkpO1xyXG4gICAgICAgIH0pICAgICAgICAgICAgXHJcbiAgICAgIH0gXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEdlbmVyYWNpw7NuIGRlIGxhcyBzZWNjaW9uZXMgZGUgY2FiZWNlcmEgZGVsIGluZm9ybWVcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19yZXBvcnRIZWFkZXJTZWN0aW9ucygpe1xyXG4gICAgICAgIF9faGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHQpe1xyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnNlY3Rpb25zLmhlYWRlcicsIHZhbHVlIDogdCB9KTtcclxuICAgICAgICAgIGlmKHQudGVtcGxhdGUpIHJldHVybiBfX01FUkdFX0FORF9TRU5EKHQudGVtcGxhdGUsIHQsICdjb21waWxlZGZuJylcclxuICAgICAgICAgIGlmKHQudmFsdWVQcm92aWRlcikgcmV0dXJuIG1lZGlhdG9yLnNlbmQodC52YWx1ZVByb3ZpZGVyKHQpKTtcclxuICAgICAgICB9KSAgICAgICAgICAgIFxyXG4gICAgICB9IFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBJbmljaWFsaXphciBlbCBvYmpldG8gcXVlIHNpcnZlIGRlIGFjdW11bGFkb3JcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19yZXNvbHZlU3VtbWFyeU9iamVjdCgpe1xyXG4gICAgICAgIHZhciBfX3N1bW1hcnkgPSBKU09OLnBhcnNlKF9fcmQuY29udGV4dC5zdW1tYXJ5IHx8ICd7fScpO1xyXG4gICAgICAgIGlmKF9fcmQuY29udGV4dC5vbkluaXRTdW1tYXJ5T2JqZWN0KSByZXR1cm4gX19yZC5jb250ZXh0Lm9uSW5pdFN1bW1hcnlPYmplY3QoX19zdW1tYXJ5KTsgICAgICBcclxuICAgICAgICByZXR1cm4gX19zdW1tYXJ5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgX19icmVha0luZGV4ID0gLTE7IFxyXG5cclxuICAgICAgdmFyIF9fc3VtbWFyeSAgICA9IF9fcmVzb2x2ZVN1bW1hcnlPYmplY3QoKTtcclxuICAgICAgdmFyIF9faGVhZGVycyAgICA9IChfX3JkLmNvbnRleHQuc2VjdGlvbnMgfHwgW10pLndoZXJlKHsgdHlwZSA6ICdoZWFkZXInIH0pO1xyXG4gICAgICB2YXIgX190b3RhbHMgICAgID0gKF9fcmQuY29udGV4dC5zZWN0aW9ucyB8fCBbXSkud2hlcmUoeyB0eXBlIDogJ3RvdGFsJyB9KTtcclxuICAgICAgdmFyIF9fZm9vdGVycyAgICA9IChfX3JkLmNvbnRleHQuc2VjdGlvbnMgfHwgW10pLndoZXJlKHsgdHlwZSA6ICdmb290ZXInIH0pO1xyXG4gICAgICB2YXIgX19kZXRhaWxzICAgID0gX19yZC5jb250ZXh0LmRldGFpbHMgfHwgW107XHJcbiAgICAgIHZhciBfX2dyb3VwcyAgICAgPSBfX3JkLmNvbnRleHQuZ3JvdXBzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihnLCBpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgIG5hbWUgICAgICAgOiAnRycgKyAoaSsxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJkICAgICAgICAgOiBfX3JkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbiA6IGcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ICAgIDogJycsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSAgICAgICA6IG1vZHVsZS5jbG9uZShfX3N1bW1hcnkpLCAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXQgOiBmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2sgPSB2YWx1ZVt0aGlzLmRlZmluaXRpb24ua2V5XS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19HeCA9IHNlbGYuQlNbdGhpcy5uYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5hbGxbX19rXSA9IF9fR3guYWxsW19fa10gfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3guYWxsW19fa10ucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3gucmVjb3JkQ291bnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9fcmVzdW1lID09PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9fcmVzdW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmNvcHkodmFsdWUsIHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fX3Jlc3VtZSA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubGVuZ3RoID4gMCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmNvcHkodmFsdWUsIHRoaXMuZGF0YSk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bSAgOiBmdW5jdGlvbih2YWx1ZSl7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19rID0gdmFsdWVbdGhpcy5kZWZpbml0aW9uLmtleV0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fR3ggPSBzZWxmLkJTW3RoaXMubmFtZV07IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LmFsbFtfX2tdID0gX19HeC5hbGxbX19rXSB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5hbGxbX19rXS5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5yZWNvcmRDb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9fcmVzdW1lID09PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuUmVwb3J0RW5naW5lLnN1bSh2YWx1ZSwgdGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdCA6IGZ1bmN0aW9uKHZhbHVlKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlW3RoaXMuZGVmaW5pdGlvbi5rZXldID09IHRoaXMuY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgfHwgW107ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgc2VsZi5CUyA9IHsgcmVwb3J0RGVmaW5pdGlvbiA6IF9fcmQsIG1lZGlhdG9yIDogbWVkaWF0b3IgfTsgICAgICAgICAgICAgIFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIE9yZGVuYXIgbG9zIGRhdG9zXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgaWYoX19yZC5jb250ZXh0Lml0ZXJhdGVmbil7XHJcbiAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmxvZy5tZXNzYWdlJywgdGV4dCA6ICdJbmljaWFsaXphbmRvIGVsZW1lbnRvcy4uLicgfSk7XHJcbiAgICAgICAgX19kYXRhU2V0LmZvckVhY2goX19yZC5jb250ZXh0Lml0ZXJhdGVmbik7XHJcbiAgICAgIH1cclxuICAgICAgaWYoX19yZC5jb250ZXh0Lm9yZGVyQnkpe1xyXG4gICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5sb2cubWVzc2FnZScsIHRleHQgOiAnT3JkZW5hbmRvIGRhdG9zLi4uJyB9KTtcclxuICAgICAgICBfX2RhdGFTZXQuc29ydEJ5KF9fcmQuY29udGV4dC5vcmRlckJ5LCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBJbmljaWFsaXphclxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIHNlbGYuQlMgPSB7IHJlY29yZENvdW50ICAgICAgOiAwLCBcclxuICAgICAgICAgICAgICAgICAgRzAgICAgICAgICAgICAgICA6IG1vZHVsZS5jbG9uZShfX3N1bW1hcnkpLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhU2V0ICAgICAgICAgIDogX19kYXRhU2V0LFxyXG4gICAgICAgICAgICAgICAgICByZXBvcnREZWZpbml0aW9uIDogX19yZCwgXHJcbiAgICAgICAgICAgICAgICAgIG1lZGlhdG9yICAgICAgICAgOiBtZWRpYXRvciB9O1xyXG4gICAgICBfX2dyb3Vwcy5mb3JFYWNoKCBmdW5jdGlvbihnLCBpKXsgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgZy5jdXJyZW50ID0gKF9fZGF0YVNldCAmJiBfX2RhdGFTZXRbMF0pID8gX19kYXRhU2V0WzBdW2cuZGVmaW5pdGlvbi5rZXldIDogJyc7XHJcbiAgICAgICAgc2VsZi5CU1tnLm5hbWVdID0geyByZWNvcmRDb3VudCA6IDAsIGFsbCA6IHt9IH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZihfX3JkLmNvbnRleHQub25TdGFydGZuKSBfX3JkLmNvbnRleHQub25TdGFydGZuKHNlbGYuQlMpO1xyXG4gICAgICBfX2luaXRDb250ZW50UHJvdmlkZXJzKCk7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5yZW5kZXIucm93cycgfSk7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5sb2cubWVzc2FnZScsIHRleHQgOiAnR2VuZXJhbmRvIGluZm9ybWUuLi4nIH0pO1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gQ2FiZWNlcmFzIGRlbCBpbmZvcm1lXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBfX3JlcG9ydEhlYWRlclNlY3Rpb25zKCk7XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBDYWJlY2VyYXMgaW5pY2lhbGVzXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBpZihfX2RhdGFTZXQubGVuZ3RoID4gMCkgX19ncm91cHNIZWFkZXJzKCk7IFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gSXRlcmFyIHNvYnJlIGxvcyBlbGVtZW50b3NcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIF9fZGF0YVNldC5mb3JFYWNoKGZ1bmN0aW9uKHIsIGkpeyBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gUHJvY2VzYXIgZWwgZWxlbWVudG9cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAgICAgICAgXHJcbiAgICAgICAgc2VsZi5CUy5yZWNvcmRDb3VudCsrO1xyXG4gICAgICAgIHNlbGYuQlMuaXNMYXN0Um93ICAgICAgICA9IF9fZGF0YVNldC5sZW5ndGggPT09IHNlbGYuQlMucmVjb3JkQ291bnQ7XHJcbiAgICAgICAgc2VsZi5CUy5pc0xhc3RSb3dJbkdyb3VwID0gc2VsZi5CUy5pc0xhc3RSb3c7XHJcbiAgICAgICAgc2VsZi5CUy5wZXJjZW50ICAgICAgPSAoc2VsZi5CUy5yZWNvcmRDb3VudC9fX2RhdGFTZXQubGVuZ3RoKSAqIDEwMDsgIFxyXG4gICAgICAgIHNlbGYuQlMucHJldmlvdXMgICAgID0gc2VsZi5CUy5kYXRhIHx8IHI7XHJcbiAgICAgICAgc2VsZi5CUy5kYXRhICAgICAgICAgPSByOyBcclxuICAgICAgICBfX2dyb3Vwcy5mb3JFYWNoKCBmdW5jdGlvbihnLCBpKXsgXHJcbiAgICAgICAgICBzZWxmLkJTW2cubmFtZV0uZGF0YSAgPSBPYmplY3QuY3JlYXRlKGcuZGF0YSk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuc3VtKHIsIHNlbGYuQlMuRzApOyAgICAgICAgXHJcbiAgICAgICAgaWYoX19yZC5jb250ZXh0Lm9uUm93Zm4pIF9fcmQuY29udGV4dC5vblJvd2ZuKHNlbGYuQlMpO1xyXG4gICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlICA6ICdyZXBvcnQucmVuZGVyLnJvdycsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICA6IHNlbGYuQlMucGVyY2VudC50b0ZpeGVkKDEpICsgJyAlJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIDogc2VsZi5CUy5wZXJjZW50IH0pO1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBEZXRlcm1pbmFyIHNpIGhheSBjYW1iaW8gZW4gYWxndW5hIGRlIGxhcyBjbGF2ZXMgZGUgYWdydXBhY2nDs25cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgaWYoX19ncm91cHMuZXZlcnkoIGZ1bmN0aW9uKGcpeyByZXR1cm4gZy50ZXN0KHIpIH0pKXtcclxuICAgICAgICAgIF9fZ3JvdXBzLmZvckVhY2goIGZ1bmN0aW9uKGcpeyBnLnN1bShyKTsgfSk7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBfX2dyb3Vwcy5zb21lKCBmdW5jdGlvbihnLCBpKXsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZighZy50ZXN0KHIpKXtcclxuICAgICAgICAgICAgICBfX2JyZWFrSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgLy8gUGllcyBkZSBncnVwbyBkZSBsb3MgcXVlIGhhbiBjYW1iaWFkb1xyXG4gICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgX19ncm91cHNGb290ZXJzKF9fYnJlYWtJbmRleCk7XHJcbiAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAvLyBBY3R1YWxpemFyIGxvcyBncnVwb3NcclxuICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgIF9fZ3JvdXBzLmZvckVhY2goIGZ1bmN0aW9uKGdydXBvLCBpaSl7ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihpaSA+PSBfX2JyZWFrSW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgIC8vIEluaWNpYWxpemFyIGxvcyBxdWUgaGFuIGNhbWJpYWRvXHJcbiAgICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgZ3J1cG8uaW5pdChyKVxyXG4gICAgICAgICAgICAgICAgICBfX2JyZWFrSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgLy8gQWN1bXVsYXIgdmFsb3JlcyBkZSBsb3MgcXVlIHNpZ3VlbiBpZ3VhbFxyXG4gICAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgIGdydXBvLnN1bShyKTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAvLyBOb3RpZmljYXIgZGVsIGV2ZW50byBvbkdyb3VwQ2hhbmdlXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgX19ncm91cHMuZm9yRWFjaChmdW5jdGlvbihnKXtcclxuICAgICAgICAgICAgZy5jdXJyZW50ID0gcltnLmRlZmluaXRpb24ua2V5XTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYoX19yZC5jb250ZXh0Lm9uR3JvdXBDaGFuZ2VmbikgX19yZC5jb250ZXh0Lm9uR3JvdXBDaGFuZ2VmbihzZWxmLkJTKTsgICAgICAgICAgXHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSAgOiAncmVwb3J0LnNlY3Rpb25zLmdyb3VwLmNoYW5nZScsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIDogJ19fZ3JvdXBzJyB9KTtcclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIC8vIENhYmVjZXJhc1xyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgX19ncm91cHNIZWFkZXJzKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gRGV0ZXJtaW5hciBzaSBlc3RlIGVzIGVsIMO6bHRpbW8gZWxlbWVudG8gZGUgbGEgYWdydXBhY2nDs24gXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09O1xyXG4gICAgICAgIGlmKF9fZ3JvdXBzLmxlbmd0aCAmJiAhc2VsZi5CUy5pc0xhc3RSb3cgKXtcclxuICAgICAgICAgIHZhciBfX25leHQgICAgICAgICAgICAgICA9IF9fZGF0YVNldFtzZWxmLkJTLnJlY29yZENvdW50XTsgICAgICAgICAgXHJcbiAgICAgICAgICBzZWxmLkJTLmlzTGFzdFJvd0luR3JvdXAgPSAhIF9fZ3JvdXBzLmV2ZXJ5KCBmdW5jdGlvbihnKXtcclxuICAgICAgICAgICAgdmFyIF9fayA9IGcuZGVmaW5pdGlvbi5rZXk7XHJcbiAgICAgICAgICAgIHJldHVybiBfX25leHRbX19rXSA9PT0gc2VsZi5CUy5kYXRhW19fa107XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gU2VjY2lvbmVzIGRlIGRldGFsbGVcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBfX2RldGFpbHNTZWN0aW9ucygpICAgICAgICAgICAgXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYoX19kYXRhU2V0Lmxlbmd0aCA+IDApeyBcclxuICAgICAgICBzZWxmLkJTLnByZXZpb3VzID0gc2VsZi5CUy5kYXRhO1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gUGllcyBkZSBncnVwb1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgX19ncm91cHNGb290ZXJzKCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIFRvdGFsIGdlbmVyYWxcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIF9fZ3JhbmRUb3RhbFNlY3Rpb25zKCk7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5yZW5kZXIuZW5kJyB9KTtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmVuZCcgfSk7XHJcbiAgICAgIG1lZGlhdG9yLmZsdXNoKCk7XHJcbiAgICAgIGNvbnNvbGUudGltZUVuZCgnUmVuZGVyJyk7XHJcbiAgICB9XHJcbiAgICAgICAgICBcclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuY29weSAgICA9IGZ1bmN0aW9uKHMsIGQpeyBPYmplY3Qua2V5cyhkKS5tYXAoZnVuY3Rpb24oayl7IGRba10gPSBzW2tdO30pO30gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuc3VtICAgICA9IGZ1bmN0aW9uKHMsIGQpeyBPYmplY3Qua2V5cyhkKS5tYXAoZnVuY3Rpb24oayl7IGRba10gKz0gc1trXTt9KTt9ICAgXHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmNvbXB1dGUgPSBmdW5jdGlvbihkcywgbmFtZSl7IHJldHVybiBkcy5yZWR1Y2UoIGZ1bmN0aW9uKHQsIG8peyByZXR1cm4gdCArIG9bbmFtZV07IH0sIDAuMCk7IH1cclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuZ3JvdXAgICA9IGZ1bmN0aW9uKGEsIGMpe1xyXG5cdCAgICB2YXIgZHMgPSBhO1xyXG5cdCAgICB2YXIgX19mID0gZnVuY3Rpb24oaywgdCl7XHJcblx0ICAgICAgZHMuZGlzdGluY3QoIGZ1bmN0aW9uKHYpeyByZXR1cm4gdltrXTsgfSlcdCAgICAgICAgICAgIFxyXG5cdCAgICAgICAgLmZvckVhY2ggKCBmdW5jdGlvbih2KXsgY1t2XSA9IGRzLnJlZHVjZSggZnVuY3Rpb24ocCwgYywgaSwgYSl7IHJldHVybiAoY1trXT09dikgPyBwICsgY1t0XSA6IHA7IH0sIDAuMCk7IH0pO1xyXG4gICAgICAgIHJldHVybiBfX2Y7XHQgICAgICAgICAgIFxyXG5cdCAgICB9XHJcblx0ICAgIHJldHVybiBfX2Y7XHJcbiAgICB9XHJcbiBcclxuICB9KShfbW9kdWxlKTtcclxuXHJcbn0oX19tb2R1bGUsICdQb2wnKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfX21vZHVsZS5Qb2w7IiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgICBcclxuPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lciB3My1tYXJnaW4tYm90dG9tXCI+XHJcbiAgPGgxPlNvYnJlIE5vdGFzIEFwcDwvaDE+XHJcbiAgPHA+QXBsaWNhY2nDs24gZGVzYXJyb2xsYWRhIHBvciBSYWZhZWwgQ2FzdHJvIEfDs21lejwvcD5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWJvdHRvbSB3My1jZW50ZXJcIj5cclxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBhYm91dC1idG4tYmFjayBjbGFzcz1cInczLWJ1dHRvbiB3My1jaXJjbGUgdzMtYmxhY2tcIj5YPC9idXR0b24+XHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICByZXR1cm4ge1xyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLmZvcm1hdCh0aGlzKSxcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcG9sLmJ1aWxkKCdkaXYnLCBvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkIDogY29udGFpbmVyID0+IHtcclxuICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1thYm91dC1idG4tYmFja10nKVxyXG4gICAgICAgICAgICAgICAub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICBoaXN0b3J5LmJhY2soKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgICBcclxuICA8ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyIHczLWNlbnRlclwiPlxyXG4gICAgPGgxPlDDoWdpbmEgcHJpbmNpcGFsPC9oMT5cclxuICAgIDxwPkFsbWFjZW5hIHR1cyBub3RhcyBlbiBlbCBtw7N2aWwhISE8L3A+XHJcbiAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltZy9sb2dvLnBuZ1wiIGFsdD1cIkNhclwiIHN0eWxlPVwid2lkdGg6IDUwJTtcIj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OjIwcHg7XCI+PC9kaXZcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaW5uZXJIVE1MIDogX190ZW1wbGF0ZS5mb3JtYXQodGhpcyksXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnZGl2Jywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGAgIFxyXG48ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyIHczLW1hcmdpbi1ib3R0b21cIj5cclxuICA8aDE+TGlzdGEgZGUgbm90YXM8L2gxPlxyXG48L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaW5uZXJIVE1MIDogX190ZW1wbGF0ZS5mb3JtYXQodGhpcyksXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnZGl2Jywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9