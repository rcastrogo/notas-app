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
  <p>{text}</p>
`;

/* harmony default export */ __webpack_exports__["default"] = (function(){
  return {
    text  : '© Rafael Castro Gómez, 2020',
    render : function() {
      let options = { 
        id        : "appFooter",
        innerHTML : __template.format(this),
        className : 'w3-container w3-teal w3-center'
      }
      return _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('footer', options);
    },
    mounted: function(parent){
      
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
    },
    mounted: function(parent){
      
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
          minHeight : '440px'
        }
      }
      return _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('section', options);
    },
    mounted: function(parent){
      
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
    id     : 'menu.component.ref',
    render : function() {
      let options = { 
        id        : "appMenu",
        innerHTML : __template.format(this),
        className : 'w3-bar w3-black'
      }
      return _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('nav', options);
    },
    mounted: function(parent){
      
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
// Routes
// ==============================================================================
const components =  [ 
  Object(_components_header_component__WEBPACK_IMPORTED_MODULE_1__["default"])(),
  Object(_components_menu_component__WEBPACK_IMPORTED_MODULE_4__["default"])(),
  Object(_components_main_content_component__WEBPACK_IMPORTED_MODULE_3__["default"])(),
  Object(_components_footer_component__WEBPACK_IMPORTED_MODULE_2__["default"])()
];
// ==============================================================================
// Views
// ==============================================================================
const views = { 
  'home'    : _views_home_page__WEBPACK_IMPORTED_MODULE_5__["default"],
  'list'    : _views_list_page__WEBPACK_IMPORTED_MODULE_6__["default"],
  'about'   : _views_about_page__WEBPACK_IMPORTED_MODULE_7__["default"] 
};

// ==============================================================================
// Init App
// ==============================================================================
(function(){

  const root = document.querySelector('#appContent');
  components.forEach( c => {
    root.appendChild(c.render());
    if(c.mounted) c.mounted(root); 
  });

  _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(document.querySelectorAll('[route-link]'))
     .forEach(element => {
        element.onclick = function(e){
          let pathName = e.target.pathname;
          window.history
                .pushState({}, pathName, location.origin + pathName);
          try {
            showContent();
          } catch (error) {
            console.log(error);
          }
          return false;
        }  
     });

})();
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

/***/ "./src/lib/dbWrapper.service.js":
/*!**************************************!*\
  !*** ./src/lib/dbWrapper.service.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DbWrapperService; });
/* harmony import */ var _mapa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapa.js */ "./src/lib/mapa.js");
﻿

class DbWrapperService{

  constructor(name) {
    this.dbname = name;
    this.db = '';
  }

  openDb(){
    return new Promise( (resolve, reject) => {

      let request = window.indexedDB.open(this.dbname, 1);

	    request.onsuccess = (e) => {
        this.db = e.target.result;
		    resolve(this.db);
	    };

      request.onerror = e => {  
        reject('Error');
      };
	
	    request.onupgradeneeded = (e) => {
		    this.db = e.target.result;
        try {
          if(this.db.objectStoreNames && this.db.objectStoreNames.contains("notas")) {
            this.db.deleteObjectStore("notas");
          }
        }
        catch (err) {
          console.log(err);
        }
        var store = this.db.createObjectStore("notas", { keyPath : "key" });       
      };
    });
  }

  readAll(name){
    return new Promise( (resolve, reject) => {
      var __items = [];
      this.db
          .transaction(name, "readonly")
          .objectStore(name)
          .openCursor(IDBKeyRange.lowerBound(0))
          .onsuccess = (event) => {
            var __cursor = event.target.result;
            if(__cursor) {
              __items.push(__cursor.value);
              __cursor.continue();
            } else {
              resolve(__items);
            }
          };
    });
  }

  save(store, value) {
    return new Promise( (resolve) => {
      this.db
          .transaction(store, "readwrite")
          .objectStore(store)
          .put(value)
          .onsuccess = () => {
            resolve(value);
          };
    });
  }

  delete(store, key) {
    return new Promise( (resolve) => {
      this.db
          .transaction(store, "readwrite")
          .objectStore(store)
          .delete(key)
          .onsuccess = () => {
            resolve();
          };
    });
  }

  readOne(store, key) {
    return new Promise( (resolve) => {
      this.db
          .transaction(store, "readwrite")
          .objectStore(store)
          .get(key)
          .onsuccess = event => {
            resolve(event.target.result);
          }         
    });
  }

}



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
(function(module, name){

  var _module =  module[name] = { apply : function apply(o, c, d){
                                            if (d) apply(o, d);
                                            if (o && c && typeof c == 'object'){
                                              for (var p in c){                                  
                                                if (typeof c[p] == 'object'){
                                                  apply(o[p], c[p] )        
                                                }else{
                                                  o[p] = c[p];
                                                }                                                 
                                              }
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
  <p style="text-indent:1em;">
    Notas App es una prueba de concepto de lo que podría ser un <span class="w3-bold w3-italic">framework</span> 
    sencillo con el cual desarrollar aplicaciones basadas únicamente en <span class="w3-bold">HTML5</span> y <span class="w3-bold">JavaScript</span>
    que sean subceptibles de instalarse en dispositivos móviles como una aplicación <span class="w3-bold w3-italic">PWA</span>. sin utilizar ninguno de los <span class="w3-bold w3-italic">frameworks</span> existentes como pueden ser Angular, React o Vue.js.
  </p>
  <ul class="w3-ul w3-border">
    <li><h2>Referencias</h2></li>
    <li><a href="https://es.wikipedia.org/wiki/Single-page_application" target="_blank">SPA (Single-page application)</a></li>
    <li><a href="https://es.wikipedia.org/wiki/Progressive_Web_Apps" target="_blank">PWA (Progressive Web Apps)</a></li>
  </ul>
  <p style="text-indent:1em;">
    En el desarrollo de esta aplicaión no se han utilizado ninguno de los <span class="w3-bold w3-italic">frameworks</span> existentes como pueden ser Angular, React o Vue.js.
  </p>
</div>
<div class="w3-container w3-margin-bottom w3-center">
  <button type="button" about-btn-back class="w3-button w3-black">Volver</button>
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
    },
    mounted : container => {

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
/* harmony import */ var _lib_mapa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/mapa */ "./src/lib/mapa.js");
/* harmony import */ var _lib_dbWrapper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/dbWrapper.service */ "./src/lib/dbWrapper.service.js");
﻿


const NOTAS_TABLE_NAME = 'notas';

const __template = `
<div class="w3-bar w3-center">
  <button btn-add-note class="w3-button w3-dark-grey w3-margin">Crear una nota</button>
</div>
<div notas-container class="w3-margin-bottom w3-margin-top" style="padding:0">
</div>`;

const __item_template =`
<div class="w3-panel w3-border w3-round" style="padding:3px" id="note-{key}">
  <header class="w3-container w3-light-grey" style="padding:0">
    <h4 btn-expand><span>+</span> {title}</h4>
  </header>

  <div class="w3-container" style="display:none">
    <span>{date}</span>
    <p>{text}</p>
  </div>
  <div class="w3-bar w3-center">
    <button class="w3-button w3-dark-grey w3-margin">Eliminar</button>
  </div>
</div>`;

/* harmony default export */ __webpack_exports__["default"] = (function(){
  return {
    db     : '',
    rows   : [],
    render : function() {
      let options = { 
        innerHTML : __template.format(this),
      }
      return _lib_mapa__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', options); 
    },
    mounted : function(container){
            
      container.querySelector('[btn-add-note]')
               .onclick = () => {
                 var __payload = { key   : new Date().valueOf(), 
                                   date  : '21/02/2020', 
                                   title : 'Nueva nota', 
                                   text  : 'Texto de la nota' };
                 saveNote.apply(this, [__payload])
                         .then( nota => {
                           this.rows.push(nota)
                           __render();    
                         });
               };

      var __loadData = () => {
        this.db
            .readAll(NOTAS_TABLE_NAME)
            .then( values => {
              this.rows = values;
              __render();
            });
      };

      var __render = () => {
        let __container = container.querySelector('[notas-container]');
        __container.innerHTML = '';
        this.rows
            .map( note => _lib_mapa__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', { innerHTML : __item_template.format(note) }))
            .map( e => e.firstElementChild  )
            .forEach( e => __container.appendChild(e) );

      _lib_mapa__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(container.querySelectorAll('[btn-expand]'))
         .forEach(h4 => {
           h4.onclick = () => {
             let __style = h4.parentNode.nextElementSibling.style;
             if(__style.display == 'none'){
                __style.display = '';
             } else {
               __style.display = 'none';
             }
           }
         })
      }

      this.db = new _lib_dbWrapper_service__WEBPACK_IMPORTED_MODULE_1__["default"]('app.db');
      this.db
          .openDb()
          .then( db => {
            __loadData();
          });
    }
  };
});

function deleteNote(target) {
  this.db
      .delete(NOTAS_TABLE_NAME, __target.key)
      .then( () => {
        this.rows.remove(__target);
        
      });
}

function saveNote(payload) {
  return this.db
             .save(NOTAS_TABLE_NAME, payload);

            //.then( data => {
            //  this.rows.push(data);                                    
            //}).catch( error => {
            //  console.log(error);
            //});
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW4tY29udGVudC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVudS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvZGJXcmFwcGVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9tYXBhLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hYm91dC5wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ob21lLnBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2xpc3QucGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2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O0FDdkJEO0FBQUE7QUFBQTtBQUFBLENBQStCO0FBQ3lCOztBQUV4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1RUFBdUUsSUFBSTtBQUMzRTtBQUNBLG1DQUFtQyxNQUFNO0FBQ3pDOztBQUVBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFFBQVEsS0FBSztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaURBQUcsdUI7QUFDaEIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0M7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlEQUFHLGVBQWUsMkNBQTJDO0FBQ3ZGO0FBQ0E7O0FBRUEsTUFBTSxpREFBRztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBLG9CQUFvQiw4REFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUM7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxlQUFlO0FBQ2YiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgICBcclxuICA8cD57dGV4dH08L3A+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gIHJldHVybiB7XHJcbiAgICB0ZXh0ICA6ICfCqSBSYWZhZWwgQ2FzdHJvIEfDs21leiwgMjAyMCcsXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7IFxyXG4gICAgICAgIGlkICAgICAgICA6IFwiYXBwRm9vdGVyXCIsXHJcbiAgICAgICAgaW5uZXJIVE1MIDogX190ZW1wbGF0ZS5mb3JtYXQodGhpcyksXHJcbiAgICAgICAgY2xhc3NOYW1lIDogJ3czLWNvbnRhaW5lciB3My10ZWFsIHczLWNlbnRlcidcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcG9sLmJ1aWxkKCdmb290ZXInLCBvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbihwYXJlbnQpe1xyXG4gICAgICBcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYFxyXG4gIDxoMT57dGl0bGV9PC9oMT5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRpdGxlICA6ICdOb3RhcyBBcHAnLFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpZCAgICAgICAgOiAnYXBwSGVhZGVyJyxcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLmZvcm1hdCh0aGlzKSxcclxuICAgICAgICBjbGFzc05hbWUgOiAndzMtY29udGFpbmVyIHczLXRlYWwnXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnaGVhZGVyJywgb3B0aW9ucyk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24ocGFyZW50KXtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGBgO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICByZXR1cm4ge1xyXG4gICAgdGV4dCAgOiAnJyxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaWQgICAgICAgIDogXCJhcHAtY29udGVudC1jb250YWluZXJcIixcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLmZvcm1hdCh0aGlzKSxcclxuICAgICAgICBjbGFzc05hbWUgOiAndzMtY29udGFpbmVyJyxcclxuICAgICAgICBzdHlsZSAgICAgOiB7IFxyXG4gICAgICAgICAgbWluSGVpZ2h0IDogJzQ0MHB4J1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcG9sLmJ1aWxkKCdzZWN0aW9uJywgb3B0aW9ucyk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24ocGFyZW50KXtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGAgIFxyXG4gIDxhIGhyZWY9XCJcIiByb3V0ZS1saW5rIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uXCI+SW5pY2lvPC9hPlxyXG4gIDxhIGhyZWY9XCJsaXN0XCIgcm91dGUtbGluayBjbGFzcz1cInczLWJhci1pdGVtIHczLWJ1dHRvblwiPk5vdGFzPC9hPlxyXG4gIDxhIGhyZWY9XCJhYm91dFwiIHJvdXRlLWxpbmsgY2xhc3M9XCJ3My1iYXItaXRlbSB3My1idXR0b24gdzMtcmlnaHRcIj4/PC9hPlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICByZXR1cm4ge1xyXG4gICAgaWQgICAgIDogJ21lbnUuY29tcG9uZW50LnJlZicsXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7IFxyXG4gICAgICAgIGlkICAgICAgICA6IFwiYXBwTWVudVwiLFxyXG4gICAgICAgIGlubmVySFRNTCA6IF9fdGVtcGxhdGUuZm9ybWF0KHRoaXMpLFxyXG4gICAgICAgIGNsYXNzTmFtZSA6ICd3My1iYXIgdzMtYmxhY2snXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnbmF2Jywgb3B0aW9ucyk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24ocGFyZW50KXtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuL2xpYi9tYXBhLmpzXCI7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDb21wb25lbnRzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5pbXBvcnQgaGVhZGVyQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgZm9vdGVyQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvZm9vdGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgY29udGVudENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL21haW4tY29udGVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IG1lbnVDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9tZW51LmNvbXBvbmVudFwiO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUGFnZXNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmltcG9ydCBob21lUGFnZSBmcm9tIFwiLi92aWV3cy9ob21lLnBhZ2VcIjtcclxuaW1wb3J0IGxpc3RQYWdlIGZyb20gXCIuL3ZpZXdzL2xpc3QucGFnZVwiO1xyXG5pbXBvcnQgYWJvdXRQYWdlIGZyb20gXCIuL3ZpZXdzL2Fib3V0LnBhZ2VcIjtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJvdXRlc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgY29tcG9uZW50cyA9ICBbIFxyXG4gIGhlYWRlckNvbXBvbmVudCgpLFxyXG4gIG1lbnVDb21wb25lbnQoKSxcclxuICBjb250ZW50Q29tcG9uZW50KCksXHJcbiAgZm9vdGVyQ29tcG9uZW50KClcclxuXTtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZpZXdzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCB2aWV3cyA9IHsgXHJcbiAgJ2hvbWUnICAgIDogaG9tZVBhZ2UsXHJcbiAgJ2xpc3QnICAgIDogbGlzdFBhZ2UsXHJcbiAgJ2Fib3V0JyAgIDogYWJvdXRQYWdlIFxyXG59O1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEluaXQgQXBwXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4oZnVuY3Rpb24oKXtcclxuXHJcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHBDb250ZW50Jyk7XHJcbiAgY29tcG9uZW50cy5mb3JFYWNoKCBjID0+IHtcclxuICAgIHJvb3QuYXBwZW5kQ2hpbGQoYy5yZW5kZXIoKSk7XHJcbiAgICBpZihjLm1vdW50ZWQpIGMubW91bnRlZChyb290KTsgXHJcbiAgfSk7XHJcblxyXG4gIHBvbC50b0FycmF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb3V0ZS1saW5rXScpKVxyXG4gICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQub25jbGljayA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgbGV0IHBhdGhOYW1lID0gZS50YXJnZXQucGF0aG5hbWU7XHJcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeVxyXG4gICAgICAgICAgICAgICAgLnB1c2hTdGF0ZSh7fSwgcGF0aE5hbWUsIGxvY2F0aW9uLm9yaWdpbiArIHBhdGhOYW1lKTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHNob3dDb250ZW50KCk7XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgfSk7XHJcblxyXG59KSgpO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU3luYyBjb250ZW50XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwLWNvbnRlbnQtY29udGFpbmVyJyk7XHJcbmxldCBjdXJyZW50VmlldztcclxuZnVuY3Rpb24gc2hvd0NvbnRlbnQoKXtcclxuICBsZXQgcm91dGUgPSB3aW5kb3cubG9jYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAuaHJlZlxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKGRvY3VtZW50LmJhc2VVUkksICcnKTtcclxuICBsZXQgdmlld19yZWYgPSB2aWV3c1tyb3V0ZV0gfHwgdmlld3MuaG9tZTtcclxuICBpZighY3VycmVudFZpZXcgfHwgY3VycmVudFZpZXcgIT0gdmlld19yZWYpIHtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJzsgICAgXHJcbiAgICBjdXJyZW50VmlldyA9IHZpZXdfcmVmO1xyXG4gICAgbGV0IHZpZXdfaW5zdGFuY2UgPSBjdXJyZW50VmlldygpO1xyXG4gICAgaWYodmlld19pbnN0YW5jZS5pbml0KSB2aWV3X2luc3RhbmNlLmluaXQoKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3X2luc3RhbmNlLnJlbmRlcigpKTtcclxuICAgIGlmKHZpZXdfaW5zdGFuY2UubW91bnRlZCkgdmlld19pbnN0YW5jZS5tb3VudGVkKGNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuc2hvd0NvbnRlbnQoKTtcclxuXHJcbndpbmRvdy5vbnBvcHN0YXRlID0gc2hvd0NvbnRlbnQ7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTZXJ2aWNlV29ya2VyXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XHJcblxyXG4gIGlmKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3Ipe1xyXG4gICAgdHJ5IHtcclxuICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2VXb3JrZXIuanMnKTtcclxuICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciBSZWdpc3RlcmVkXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciBSZWdpc3RyYXRpb24gRmFpbGVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pOyIsIu+7v2ltcG9ydCBwb2wgZnJvbSBcIi4vbWFwYS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGJXcmFwcGVyU2VydmljZXtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgdGhpcy5kYm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kYiA9ICcnO1xyXG4gIH1cclxuXHJcbiAgb3BlbkRiKCl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgIGxldCByZXF1ZXN0ID0gd2luZG93LmluZGV4ZWREQi5vcGVuKHRoaXMuZGJuYW1lLCAxKTtcclxuXHJcblx0ICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKGUpID0+IHtcclxuICAgICAgICB0aGlzLmRiID0gZS50YXJnZXQucmVzdWx0O1xyXG5cdFx0ICAgIHJlc29sdmUodGhpcy5kYik7XHJcblx0ICAgIH07XHJcblxyXG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBlID0+IHsgIFxyXG4gICAgICAgIHJlamVjdCgnRXJyb3InKTtcclxuICAgICAgfTtcclxuXHRcclxuXHQgICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoZSkgPT4ge1xyXG5cdFx0ICAgIHRoaXMuZGIgPSBlLnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmKHRoaXMuZGIub2JqZWN0U3RvcmVOYW1lcyAmJiB0aGlzLmRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoXCJub3Rhc1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRiLmRlbGV0ZU9iamVjdFN0b3JlKFwibm90YXNcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdG9yZSA9IHRoaXMuZGIuY3JlYXRlT2JqZWN0U3RvcmUoXCJub3Rhc1wiLCB7IGtleVBhdGggOiBcImtleVwiIH0pOyAgICAgICBcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVhZEFsbChuYW1lKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB2YXIgX19pdGVtcyA9IFtdO1xyXG4gICAgICB0aGlzLmRiXHJcbiAgICAgICAgICAudHJhbnNhY3Rpb24obmFtZSwgXCJyZWFkb25seVwiKVxyXG4gICAgICAgICAgLm9iamVjdFN0b3JlKG5hbWUpXHJcbiAgICAgICAgICAub3BlbkN1cnNvcihJREJLZXlSYW5nZS5sb3dlckJvdW5kKDApKVxyXG4gICAgICAgICAgLm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgX19jdXJzb3IgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICBpZihfX2N1cnNvcikge1xyXG4gICAgICAgICAgICAgIF9faXRlbXMucHVzaChfX2N1cnNvci52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgX19jdXJzb3IuY29udGludWUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXNvbHZlKF9faXRlbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzYXZlKHN0b3JlLCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICB0aGlzLmRiXHJcbiAgICAgICAgICAudHJhbnNhY3Rpb24oc3RvcmUsIFwicmVhZHdyaXRlXCIpXHJcbiAgICAgICAgICAub2JqZWN0U3RvcmUoc3RvcmUpXHJcbiAgICAgICAgICAucHV0KHZhbHVlKVxyXG4gICAgICAgICAgLm9uc3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoc3RvcmUsIGtleSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICB0aGlzLmRiXHJcbiAgICAgICAgICAudHJhbnNhY3Rpb24oc3RvcmUsIFwicmVhZHdyaXRlXCIpXHJcbiAgICAgICAgICAub2JqZWN0U3RvcmUoc3RvcmUpXHJcbiAgICAgICAgICAuZGVsZXRlKGtleSlcclxuICAgICAgICAgIC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlYWRPbmUoc3RvcmUsIGtleSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICB0aGlzLmRiXHJcbiAgICAgICAgICAudHJhbnNhY3Rpb24oc3RvcmUsIFwicmVhZHdyaXRlXCIpXHJcbiAgICAgICAgICAub2JqZWN0U3RvcmUoc3RvcmUpXHJcbiAgICAgICAgICAuZ2V0KGtleSlcclxuICAgICAgICAgIC5vbnN1Y2Nlc3MgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgICB9ICAgICAgICAgXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcblxyXG4iLCJcclxuXHJcbmxldCBfX21vZHVsZSA9IHt9O1xyXG4oZnVuY3Rpb24obW9kdWxlLCBuYW1lKXtcclxuXHJcbiAgdmFyIF9tb2R1bGUgPSAgbW9kdWxlW25hbWVdID0geyBhcHBseSA6IGZ1bmN0aW9uIGFwcGx5KG8sIGMsIGQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkKSBhcHBseShvLCBkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobyAmJiBjICYmIHR5cGVvZiBjID09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gYyl7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNbcF0gPT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5KG9bcF0sIGNbcF0gKSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9bcF0gPSBjW3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX07ICAgICAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFV0aWxzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpe1xyXG4gICAgbW9kdWxlLmFwcGx5KG1vZHVsZSx7IFxyXG4gICAgICB0b0FycmF5ICAgICA6IGZ1bmN0aW9uKHYpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh2KTsgfSxcclxuICAgICAgaXNOdWxsICAgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdiA9PT0gbnVsbDsgfSxcclxuICAgICAgaXNBcnJheSAgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gQXJyYXkuaXNBcnJheSh2KTsgfSxcclxuICAgICAgaXNTdHJpbmcgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdHlwZW9mIHYgPT0gJ3N0cmluZyc7fSxcclxuICAgICAgaXNCb29sZWFuICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdHlwZW9mIHYgPT0gJ2Jvb2xlYW4nO30sXHJcbiAgICAgIGlzTnVtYmVyICAgIDogZnVuY3Rpb24odil7cmV0dXJuIHR5cGVvZiB2ID09ICdudW1iZXInO30sXHJcbiAgICAgIGlzRnVuY3Rpb24gIDogZnVuY3Rpb24odil7cmV0dXJuIHR5cGVvZiB2ID09ICdmdW5jdGlvbic7fSxcclxuICAgICAgaXNPYmplY3QgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdiAmJiB0eXBlb2YgdiA9PSAnb2JqZWN0Jzt9LFxyXG4gICAgICBjbG9uZSAgICAgICA6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICBpZihtb2R1bGUuaXNBcnJheShvKSkgICAgICAgICAgICAgcmV0dXJuIG8uc2xpY2UoMCk7XHJcbiAgICAgICAgaWYobW9kdWxlLmlzT2JqZWN0KG8pICYmIG8uY2xvbmUpIHJldHVybiBvLmNsb25lKCk7XHJcbiAgICAgICAgaWYobW9kdWxlLmlzT2JqZWN0KG8pKXsgICAgICAgICAgICAgICBcclxuICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvKS5yZWR1Y2UoIGZ1bmN0aW9uKGEsIGspe1xyXG4gICAgICAgICAgICBhW2tdID0gbW9kdWxlLmNsb25lKG9ba10pO1xyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgIH0sIHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgIH0sICAgICAgICBcclxuICAgICAgam9pbiAgICAgICAgOiBmdW5jdGlvbihpdGVtcywgcHJvcGVydHksIHNlcGFyYXRvcil7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLnJlZHVjZShmdW5jdGlvbihhLCBvKXsgcmV0dXJuIGEuYXBwZW5kKG9bcHJvcGVydHkgfHwgJ2lkJ10pOyB9LCBbXSlcclxuICAgICAgICAgICAgICAgICAgICAuam9pbihzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICctJyA6IChzZXBhcmF0b3IgfHwgJycpKTsgXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0cmluZ0J1aWxkZXIgOiBmdW5jdGlvbihzKXtcclxuICAgICAgICAgIHJldHVybiB7IHZhbHVlICAgICAgOiBzIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgYXBwZW5kICAgICA6IGZ1bmN0aW9uKHMpeyB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZSArIHM7IHJldHVybiB0aGlzO30sXHJcbiAgICAgICAgICAgICAgICAgICBhcHBlbmRMaW5lIDogZnVuY3Rpb24ocyl7IHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlICsgKHMgfHwgJycpICsgJ1xcbic7IHJldHVybiB0aGlzO319XHJcbiAgICAgIH0sXHJcbiAgICAgIGJ1aWxkIDogZnVuY3Rpb24odGFnTmFtZSwgbyl7XHJcbiAgICAgICAgcmV0dXJuIF9tb2R1bGUuYXBwbHkoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKSwgbyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0oX21vZHVsZSkpO1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBTdHJpbmdzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpe1xyXG4gICAgbW9kdWxlLmFwcGx5KFN0cmluZywge1xyXG4gICAgICBzdHJpbmdCdWlsZGVyIDogbW9kdWxlLnN0cmluZ0J1aWxkZXIsXHJcbiAgICAgIGxlZnRQYWQgICAgICAgOiBmdW5jdGlvbiAodmFsLCBzaXplLCBjaCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAnJyArIHZhbDtcclxuICAgICAgICBpZiAoY2ggPT09IG51bGwgfHwgY2ggPT09IHVuZGVmaW5lZCB8fCBjaCA9PT0gJycpIGNoID0gJyAnOyAgICAgICAgICAgIFxyXG4gICAgICAgIHdoaWxlIChyZXN1bHQubGVuZ3RoIDwgc2l6ZSkgcmVzdWx0ID0gY2ggKyByZXN1bHQ7ICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSxcclxuICAgICAgdHJpbVZhbHVlcyA6IGZ1bmN0aW9uICh2YWx1ZXMpeyByZXR1cm4gdmFsdWVzLm1hcChmdW5jdGlvbihzKXtyZXR1cm4gcy50cmltKCk7fSk7fVxyXG4gICAgfSk7XHJcbiAgICBtb2R1bGUuYXBwbHkoU3RyaW5nLnByb3RvdHlwZSwge1xyXG4gICAgICByZXBsYWNlQWxsICA6IGZ1bmN0aW9uKHBhdHRlcm4sIHJlcGxhY2VtZW50KSB7IHJldHVybiB0aGlzLnNwbGl0KHBhdHRlcm4pLmpvaW4ocmVwbGFjZW1lbnQpOyB9LFxyXG4gICAgICByZXBlYXQgICAgICA6IFN0cmluZy5wcm90b3R5cGUucmVwZWF0ICAgICB8fCBmdW5jdGlvbihhKSB7IHJldHVybiBuZXcgQXJyYXkoYSArIDEpLmpvaW4odGhpcyk7IH0sXHJcbiAgICAgIGNvbnRhaW5zICAgIDogU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyAgIHx8IGZ1bmN0aW9uKHQsIHN0YXJ0KSB7IHJldHVybiB0aGlzLmluZGV4T2YodCkgPj0gKHN0YXJ0IHx8IDApOyB9LFxyXG4gICAgICBzdGFydHNXaXRoICA6IFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCB8fCBmdW5jdGlvbih0KXsgcmV0dXJuIHRoaXMuaW5kZXhPZih0KSA9PSAwOyB9LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIHRvRmxvYXQgICAgIDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMudHJpbSgpLnJlcGxhY2VBbGwoJy4nLCAnJykucmVwbGFjZUFsbCgnLCcsICcuJykgfSxcclxuICAgICAgZml4RGF0ZSAgICAgOiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5zcGxpdCgnICcpWzBdOyB9LFxyXG4gICAgICBmaXhUaW1lICAgICA6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLnNwbGl0KCcgJylbMV07IH0sXHJcbiAgICAgIGZpeFllYXIgICAgIDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuZml4RGF0ZSgpLnNwbGl0KCcvJylbMl07fSxcclxuICAgICAgdHJpbVNlY29uZHMgOiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5zcGxpdCgnOicpWzBdICsgJzonICsgdGhpcy5zcGxpdCgnOicpWzFdIDsgfSxcclxuICAgICAgcGFkZGluZ0xlZnQgOiBmdW5jdGlvbihwYWRkaW5nVmFsdWUpeyByZXR1cm4gKHBhZGRpbmdWYWx1ZSArIHRoaXMpLnNsaWNlKC1wYWRkaW5nVmFsdWUubGVuZ3RoKTsgfSxcclxuICAgICAgZm9ybWF0ICAgICAgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBfX2FyZyAgICAgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgdmFyIF9fY29udGV4dCA9IF9fYXJnW19fYXJnLmxlbmd0aCAtIDFdIHx8IHNlbGY7ICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvXFx7KFxcZCt8W157XSspXFx9L2csIGZ1bmN0aW9uKG0sIGtleSl7XHJcbiAgICAgICAgICBpZihrZXkuaW5kZXhPZignOicpID4gMCl7XHJcbiAgICAgICAgICAgIHZhciBfX2ZuID0ga2V5LnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgIF9fZm5bMF0gID0gZ2V0VmFsdWUoX19mblswXSwgX19jb250ZXh0KTtcclxuICAgICAgICAgICAgX19mblsxXSAgPSBnZXRWYWx1ZShfX2ZuWzFdLCBfX2NvbnRleHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gX19mblswXShfX2ZuWzFdLCBfX2NvbnRleHQpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIC9eXFxkKyQvLnRlc3Qoa2V5KSA/IF9fYXJnW2tleV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICh0eXBlb2YgX19jb250ZXh0W2tleV0gPT09IFwidW5kZWZpbmVkXCIpID8gZ2V0VmFsdWUoa2V5LCBfX2NvbnRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfX2NvbnRleHRba2V5XTsgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pOyAgICAgIFxyXG4gIH0oX21vZHVsZSkpOyAgICAgIFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBBcnJheVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgXHJcbiAgKGZ1bmN0aW9uKG1vZHVsZSl7XHJcbiAgICBtb2R1bGUuYXBwbHkoQXJyYXkucHJvdG90eXBlLCB7ICAgICAgICAgIFxyXG4gICAgICByZW1vdmUgICA6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4T2Yobyk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9IC0xKSB0aGlzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZCAgICAgIDogZnVuY3Rpb24obykge1xyXG4gICAgICAgIHRoaXMucHVzaChvKTtcclxuICAgICAgICByZXR1cm4gbztcclxuICAgICAgfSxcclxuICAgICAgYXBwZW5kICAgOiBmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoKG8pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9LFxyXG4gICAgICBpdGVtICAgICA6IGZ1bmN0aW9uKHByb3BOYW1lLCB2YWx1ZSwgZGVmKXtcclxuICAgICAgICByZXR1cm4gYXJndW1lbnRzPT0xID8gdGhpcy5maWx0ZXIoIGZ1bmN0aW9uKHYpe3JldHVybiB2WydpZCddID09IHByb3BOYW1lIHx8IHZbJ19pZCddID09IHByb3BOYW1lfSlbMF0gfHwgZGVmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZmlsdGVyKCBmdW5jdGlvbih2KXtyZXR1cm4gdltwcm9wTmFtZV0gPT0gdmFsdWV9KVswXSB8fCBkZWY7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRhaW5zIDogZnVuY3Rpb24ocHJvcE5hbWUsdmFsdWUpeyByZXR1cm4gdGhpcy5pdGVtKHByb3BOYW1lLHZhbHVlKTsgfSxcclxuICAgICAgbGFzdEl0ZW0gOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTsgfSxcclxuICAgICAgc2VsZWN0ICAgOiBmdW5jdGlvbihzZW50ZW5jZSl7IHJldHVybiB0aGlzLm1hcChzZW50ZW5jZSkgfSwgICBcclxuICAgICAgd2hlcmUgICAgOiBmdW5jdGlvbihzZW50ZW5jZSl7IFxyXG4gICAgICAgIGlmKG1vZHVsZS5pc0Z1bmN0aW9uKHNlbnRlbmNlKSkgcmV0dXJuIHRoaXMuZmlsdGVyKHNlbnRlbmNlKTtcclxuICAgICAgICBpZihtb2R1bGUuaXNPYmplY3Qoc2VudGVuY2UpKXtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmZpbHRlcihuZXcgRnVuY3Rpb24oJ2EnLCBPYmplY3Qua2V5cyhzZW50ZW5jZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKGEsIHByb3BuYW1lLCBpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgKyAoaSA+IDAgPyAnICYmICcgOiAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAgKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fdmFsdWUgPSBzZW50ZW5jZVtwcm9wbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoX192YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuICd7MX0udGVzdChhLnswfSknLmZvcm1hdChwcm9wbmFtZSwgX192YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobW9kdWxlLmlzU3RyaW5nKF9fdmFsdWUpKSByZXR1cm4gJ2EuezB9ID09PSBcXCd7MX1cXCcnLmZvcm1hdChwcm9wbmFtZSwgX192YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhLnswfSA9PT0gezF9Jy5mb3JtYXQocHJvcG5hbWUsIF9fdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSgpKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAncmV0dXJuICcpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9LFxyXG4gICAgICBzb3J0QnkgICAgICA6IGZ1bmN0aW9uKHByb3BuYW1lLCBkZXNjKXtcclxuICAgICAgICB2YXIgX19vcmRlciA9IFtdO1xyXG4gICAgICAgIHZhciBfX25hbWVzID0gcHJvcG5hbWUuc3BsaXQoJywnKS5tYXAoIGZ1bmN0aW9uKHRva2VuLGkpeyBcclxuICAgICAgICAgIHZhciBfX3BhaXIgPSB0b2tlbi5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgX19vcmRlcltpXSA9IChfX3BhaXJbMV0gJiYgKF9fcGFpclsxXS50b1VwcGVyQ2FzZSgpPT0nREVTQycpKSA/IC0xIDogMTsgICAgICBcclxuICAgICAgICAgIHJldHVybiBfX3BhaXJbMF07ICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIF9fb3JkZXJbMF0gPSAoZGVzYyA/IC0xIDogMSlcclxuICAgICAgICB0aGlzLnNvcnQoZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwOyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9fZm4gPSBmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciBfX3ggPSBhW19fbmFtZXNbaV1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIF9feSA9IGJbX19uYW1lc1tpXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihfX3ggPCBfX3kpIHJldHVybiAtMSAqIF9fb3JkZXJbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihfX3ggPiBfX3kpIHJldHVybiAgMSAqIF9fb3JkZXJbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihpIDwgX19uYW1lcy5sZW5ndGgpIHJldHVybiBfX2ZuKGEsYik7ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2ZuKGEsYik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpczsgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyQnkgICAgIDogZnVuY3Rpb24oc2VudGVuY2Upe1xyXG4gICAgICAgIHZhciBfX3NlbnRlbmNlID0gc2VudGVuY2U7ICAgIFxyXG4gICAgICAgIGlmKG1vZHVsZS5pc1N0cmluZyhzZW50ZW5jZSkpIF9fc2VudGVuY2UgPSBmdW5jdGlvbihhKXsgcmV0dXJuIGFbc2VudGVuY2VdOyB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlfSlcclxuICAgICAgICAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBfX3NlbnRlbmNlKGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBfX3NlbnRlbmNlKGIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgoeCA8IHkpID8gLTEgOiAoKHggPiB5KSA/IDEgOiAwKSk7XHJcbiAgICAgICAgICAgICAgICAgICB9KTsgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBkaXN0aW5jdCAgICA6IGZ1bmN0aW9uKHNlbnRlbmNlKSB7XHJcbiAgICAgICAgdmFyIF9fc2VudGVuY2UgPSBzZW50ZW5jZTsgICAgXHJcbiAgICAgICAgaWYobW9kdWxlLmlzU3RyaW5nKHNlbnRlbmNlKSkgX19zZW50ZW5jZSA9IGZ1bmN0aW9uKGEpeyByZXR1cm4gYVtzZW50ZW5jZV07IH1cclxuICAgICAgICB2YXIgciA9IFtdO1xyXG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgIHZhciBfdmFsdWUgPSBfX3NlbnRlbmNlKGl0ZW0pO1xyXG4gICAgICAgICAgaWYoci5pbmRleE9mKF92YWx1ZSk9PS0xKSByLnB1c2goX3ZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgICAgfSxcclxuICAgICAgZ3JvdXBCeSA6IGZ1bmN0aW9uKHByb3Ape1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZHVjZShmdW5jdGlvbihncm91cHMsIGl0ZW0pIHtcclxuICAgICAgICAgIHZhciB2YWwgPSBpdGVtW3Byb3BdO1xyXG4gICAgICAgICAgKGdyb3Vwc1t2YWxdID0gZ3JvdXBzW3ZhbF0gfHwgW10pLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICByZXR1cm4gZ3JvdXBzXHJcbiAgICAgICAgfSwge30pXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvRGljdGlvbmFyeSA6IGZ1bmN0aW9uKHByb3AsIHZhbHVlKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWR1Y2UoZnVuY3Rpb24oYSwgZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtkW3Byb3BdXSA9IHZhbHVlID8gZFt2YWx1ZV0gOiBkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7fSk7ICBcclxuICAgICAgfVxyXG4gICAgfSk7ICAgICAgIFxyXG4gIH0oX21vZHVsZSkpO1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gVGVtcGxhdGVzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpe1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFZhbHVlKGtleSwgc2NvcGUpIHsgICAgICAgIFxyXG4gICAgICByZXR1cm4ga2V5LnNwbGl0KC9cXC58XFxbfFxcXS8pXHJcbiAgICAgICAgICAgICAgICAucmVkdWNlKCBmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICAgICAgICAgICAgaWYgKGIgPT09ICcnKSByZXR1cm4gYTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFbYl0gPT09IHVuZGVmaW5lZCA/IChhID09PSBzZWxmID8gJycgOiBzZWxmKSA6IGFbYl07XHJcbiAgICAgICAgICAgICAgICB9LCBzY29wZSB8fCBzZWxmICk7ICAgIFxyXG4gICAgfVxyXG4gICBcclxuICAgIGZ1bmN0aW9uIG1lcmdlKHRlbXBsYXRlLCBvLCBrZXkpIHtcclxuICAgICAgaWYoc2VsZi5CUy5yZXBvcnREZWZpbml0aW9uLmNvbnRleHQubWVyZ2VNb2RlKXtcclxuICAgICAgICByZXR1cm4gbWVyZ2VPcHRpbWl6ZWQodGVtcGxhdGUsIG8sIGtleSk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIF9fcmVzdWx0ID0gdGVtcGxhdGUucmVwbGFjZSgveyhbXntdKyk/fS9nLCBmdW5jdGlvbiAobSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihrZXkuaW5kZXhPZignOicpID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2ZuID0ga2V5LnNwbGl0KCc6Jyk7ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19mblswXSAgPSBnZXRWYWx1ZShfX2ZuWzBdLCBvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19mblsxXSAgPSBnZXRWYWx1ZShfX2ZuWzFdLCBvKTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZm5bMF0oX19mblsxXSwgbyk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgciAgID0gZ2V0VmFsdWUoa2V5LCBvKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2sgPSAoa2V5LmNvbnRhaW5zKCcuJykgPyAnJyA6ICdvLicpICsga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAocikgPT0gJ2Z1bmN0aW9uJyl7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByKG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfWVsc2V7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIChyKSA9PSAnZnVuY3Rpb24nID8gcihvKSA6IHI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7ICAgICBcclxuICAgICAgcmV0dXJuIF9fcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1lcmdlT3B0aW1pemVkKHRlbXBsYXRlLCBvLCBrZXkpIHtcclxuICAgICAgXHJcbiAgICAgIGlmKG9ba2V5XSAmJiBvW2tleV0gPT09ICd0ZW1wbGF0ZScpIHJldHVybiB0ZW1wbGF0ZTsgXHJcbiAgICAgIGlmKG9ba2V5XSkgcmV0dXJuIG9ba2V5XShvKTsgICAgICBcclxuICAgICAgdmFyIF9fdmFsdWVzID0gW107XHJcbiAgICAgIHZhciBfX3Jlc3VsdCA9IHRlbXBsYXRlLnJlcGxhY2UoL3soW157XSspP30vZywgZnVuY3Rpb24gKG0sIGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoa2V5LmluZGV4T2YoJzonKSA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19mbiA9IGtleS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19rID0gKF9fZm5bMV0uY29udGFpbnMoJy4nKSA/ICcnIDogJ28uJykgKyBfX2ZuWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX3ZhbHVlcy5wdXNoKCd7MH0oezF9KSAnLmZvcm1hdChfX2ZuWzBdLCBfX2spKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19mblswXSAgPSBnZXRWYWx1ZShfX2ZuWzBdLCBvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19mblsxXSAgPSBnZXRWYWx1ZShfX2ZuWzFdLCBvKTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZm5bMF0oX19mblsxXSwgbyk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgciAgID0gZ2V0VmFsdWUoa2V5LCBvKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2sgPSAoa2V5LmNvbnRhaW5zKCcuJykgPyAnJyA6ICdvLicpICsga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAocikgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fdmFsdWVzLnB1c2goJ3swfShvKScuZm9ybWF0KF9faykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcihvKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX3ZhbHVlcy5wdXNoKCd7MH0nLmZvcm1hdChfX2spKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgKHIpID09ICdmdW5jdGlvbicgPyByKG8pIDogcjtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgaWYoa2V5ICYmIF9fdmFsdWVzLmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgb1trZXldID0gJ3RlbXBsYXRlJztcclxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICAgIH1cclxuICAgICAgaWYoa2V5ICYmIF9fdmFsdWVzLmxlbmd0aCl7XHJcbiAgICAgICAgX192YWx1ZXMucmV2ZXJzZSgpXHJcbiAgICAgICAgdmFyIF9fYiA9IHRlbXBsYXRlLnNwbGl0KC97KFtee10rKT99L2cpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbih0LCBpKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIGkgJSAyID8gX192YWx1ZXMucG9wKCkgOiAnXFwnJyArIHQgKyAnXFwnJyA7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKCBmdW5jdGlvbihhLCB0b2tlbiwgaSwgYXJyKXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0b2tlbiA9PT0gXCInJ1wiKSByZXR1cm4gYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhICsgdG9rZW4gKyAoKGkgPCBhcnIubGVuZ3RoLTEpID8gJyArICcgOiAnJyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sICdyZXR1cm4gJyk7XHJcblxyXG4gICAgICAgIG9ba2V5XSA9IG5ldyBGdW5jdGlvbignbycsIF9fYi5yZXBsYWNlKC8oPzpcXHJcXG58XFxyfFxcbikvZywgJycpKTtcclxuICAgICAgICByZXR1cm4gb1trZXldKG8pO1xyXG4gICAgICB9ICAgICAgXHJcbiAgICAgIHJldHVybiBfX3Jlc3VsdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbW9kdWxlLnRlbXBsYXRlcyA9IHsgZ2V0VmFsdWUgIDogZ2V0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBtZXJnZSAgICAgOiBtZXJnZSB9O1xyXG5cclxuICB9KF9tb2R1bGUpKTtcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIEFqYXhcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKGZ1bmN0aW9uKG1vZHVsZSl7ICBcclxuICAgIG1vZHVsZS5hamF4ID0ge307XHJcbiAgICBtb2R1bGUuYXBwbHkobW9kdWxlLmFqYXgsIHtcclxuICAgICAgZ2V0ICA6IGZ1bmN0aW9uICh1cmwsIGNhbGxCYWNrKSB7XHJcbiAgICAgICAgdXJsICs9ICh1cmwuY29udGFpbnMoJz8nKSA/ICcmbXM9JyA6ICc/bXM9JykgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgeG1sID0gdGhpcy5jcmVhdGVYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhtbC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdJZi1Nb2RpZmllZC1TaW5jZScsICdUaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVCcpO1xyXG4gICAgICAgIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdDYWNoZS1Db250cm9sJywgJ25vLWNhY2hlJyk7XHJcbiAgICAgICAgeG1sLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHsgaWYgKHhtbC5yZWFkeVN0YXRlID09IDQpIGNhbGxCYWNrKHhtbC5yZXNwb25zZVRleHQpIH07XHJcbiAgICAgICAgeG1sLnNlbmQobnVsbCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHBvc3QgOiBmdW5jdGlvbih1cmwsIHBhcmFtcywgY2FsbEJhY2spIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB2YXIgeG1sID0gdGhpcy5jcmVhdGVYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhtbC5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcclxuICAgICAgICB4bWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7IGlmICh4bWwucmVhZHlTdGF0ZSA9PSA0KSBjYWxsQmFjayh4bWwucmVzcG9uc2VUZXh0KSB9O1xyXG4gICAgICAgIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0OklTTy04ODU5LTEnKTtcclxuICAgICAgICB4bWwuc2VuZChwYXJhbXMpO1xyXG4gICAgICB9LFxyXG4gICAgICBjYWxsV2ViTWV0aG9kIDogZnVuY3Rpb24odXJsLCBwYXJhbXMsIGNhbGxCYWNrKSB7XHJcbiAgICAgICAgdmFyIHhtbCA9IHRoaXMuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4bWwub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeG1sLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7IGlmICh4bWwucmVhZHlTdGF0ZSA9PSA0KSBjYWxsQmFjayh4bWwucmVzcG9uc2VUZXh0KSB9O1xyXG4gICAgICAgIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgICAgIHhtbC5zZW5kKHBhcmFtcyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNyZWF0ZVhNTEh0dHBSZXF1ZXN0IDogZnVuY3Rpb24oKXsgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpOyB9XHJcbiAgICB9KTsgIFxyXG4gIH0oX21vZHVsZSkpOyBcclxuICAgICAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFRhYmJseVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24gKG1vZHVsZSl7XHJcbiAgICAgIFxyXG4gICAgdmFyIF9fY29udGV4dDtcclxuXHJcbiAgICBmdW5jdGlvbiBfX0V4ZWN1dGVDb2RlKGNvZGUpe1xyXG5cclxuICAgICAgX19jb250ZXh0ID0geyBzZWN0aW9ucyA6IFtdLCBncm91cHMgOiBbXSwgZGV0YWlscyA6IFtdfTtcclxuXHJcbiAgICAgIHZhciBfX2N1cjtcclxuICAgICAgdmFyIF9fZnVuYyAgICAgICA9ICcnO1xyXG4gICAgICB2YXIgX19mdW5jQm9keSAgID0gJyc7XHJcbiAgICAgIHZhciBfX3NldFN0YXRlICA9IGZhbHNlO1xyXG5cclxuICAgICAgZnVuY3Rpb24gX19nZXQodmFsdWUpe1xyXG4gICAgICAgIGlmKHZhbHVlICYmIHZhbHVlLnRyaW0oKS5zdGFydHNXaXRoKCdAJykpe1xyXG4gICAgICAgICAgcmV0dXJuIF9fY29udGV4dFt2YWx1ZS50cmltKCkuc3BsaXQoJ0AnKVsxXS50cmltKCldIHx8ICcnO1xyXG4gICAgICAgIH1lbHNlIGlmKHZhbHVlKXtcclxuICAgICAgICAgIHJldHVybiB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfSAgXHJcblxyXG4gICAgICBmdW5jdGlvbiBfX3BhcnNlX3Byb3BlcnRpZXModmFsdWUpe1xyXG4gICAgICAgIHZhciBfX3JlZyAgID0gIC8oW2EtekEtWjAtOV9cXC1dKilcXHMqOlxccyooJ1teJ10qJ3xbXlxcc10qKS9nO1xyXG4gICAgICAgIHZhciBfX28gICAgID0ge307XHJcbiAgICAgICAgdmFyIF9fbWF0Y2ggPSBfX3JlZy5leGVjKHZhbHVlKTtcclxuICAgICAgICB3aGlsZSAoX19tYXRjaCAhPSBudWxsKSB7XHJcbiAgICAgICAgICBfX29bX19tYXRjaFsxXS50cmltKCldID0gX19nZXQoX19tYXRjaFsyXS50cmltKCkucmVwbGFjZSgvXicoW14nXSopJyQvZywgJyQxJykpO1xyXG4gICAgICAgICAgX19tYXRjaCA9IF9fcmVnLmV4ZWModmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX19vXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIF9fcGFyc2VMaW5lKGwsIG8pe1xyXG4gICAgICAgIGlmKCFfX2Z1bmMgJiYgIWwudHJpbSgpKSByZXR1cm4gZnVuY3Rpb24oKXt9O1xyXG4gICAgICAgIHZhciBfX2tleXMgPSAvREVGSU5FfCN8Q1JFQVRFfFNFVHxGVU5DVElPTnxFTkQvO1xyXG4gICAgICAgIGlmKF9fa2V5cy50ZXN0KGwpKXtcclxuICAgICAgICAgIGlmKC9eIy8udGVzdChsKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe307XHJcbiAgICAgICAgICB9ZWxzZSBpZigvXlNFVCAoXFx3LiopLy50ZXN0KGwpKXsgIFxyXG4gICAgICAgICAgICB2YXIgX190b2tlbnMgPSBsLm1hdGNoKC9eU0VUIChcXHcuKikkLyk7XHJcbiAgICAgICAgICAgIF9fc2V0U3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBfX2Z1bmMgICAgICA9IF9fdG9rZW5zWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgX19mdW5jQm9keSAgPSAnJztcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICAgIH1lbHNlIGlmKC9eRlVOQ1RJT04gKFxcdy4qKS8udGVzdChsKSl7ICBcclxuICAgICAgICAgICAgdmFyIF9fdG9rZW5zID0gbC5tYXRjaCgvXkZVTkNUSU9OIChcXHcuKikkLyk7XHJcbiAgICAgICAgICAgIF9fc2V0U3RhdGUgID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF9fZnVuYyAgICAgICA9IF9fdG9rZW5zWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgX19mdW5jQm9keSAgID0gJyc7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe307XHJcbiAgICAgICAgICB9ZWxzZSBpZigvXkVORC8udGVzdChsKSl7ICAgICAgXHJcbiAgICAgICAgICAgIHZhciBfX2JvZHkgPSBfX2Z1bmNCb2R5O1xyXG4gICAgICAgICAgICB2YXIgX19uYW1lID0gX19mdW5jO1xyXG4gICAgICAgICAgICBfX2Z1bmMgPSBfX2Z1bmNCb2R5ID0gJyc7IFxyXG4gICAgICAgICAgICBpZihfX3NldFN0YXRlKXtcclxuICAgICAgICAgICAgICBfX3NldFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXsgX19jdXJbX19uYW1lXSA9IF9fYm9keS50cmltKCk7IH1cclxuICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7IGN0eFtfX25hbWVdID0gbmV3IEZ1bmN0aW9uKCdjdHgnLCBfX2JvZHkpOyB9XHJcbiAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIH1lbHNlIGlmKC9eREVGSU5FXFxzXFxzKihcXHcuKilcXHMqPVxccyooLiopJC8udGVzdChsKSl7XHJcbiAgICAgICAgICAgIHZhciBfX3Rva2VucyA9IGwubWF0Y2goL15ERUZJTkVcXHNcXHMqKFthLXpBLVowLTlfXFwtXSopXFxzKj1cXHMqKC4qKSQvKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBfX3Rva2VucztcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXsgY3R4W3Rva2Vuc1sxXS50cmltKCldID0gdG9rZW5zWzJdLnRyaW0oKTsgfVxyXG4gICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICB9ZWxzZSBpZigvXkNSRUFURVxcc1xccyooXFx3KikgKC4qKSQvLnRlc3QobCkpe1xyXG4gICAgICAgICAgICB2YXIgX190b2tlbnMgPSBsLm1hdGNoKC9eQ1JFQVRFXFxzXFxzKihcXHcqKSAoLiopJC8pO1xyXG4gICAgICAgICAgICBpZihfX3Rva2Vuc1sxXT09J3NlY3Rpb24nKXtcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gX190b2tlbnM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXsgXHJcbiAgICAgICAgICAgICAgICAgIGN0eC5zZWN0aW9ucy5wdXNoKF9fcGFyc2VfcHJvcGVydGllcyh0b2tlbnNbMl0pKTsgXHJcbiAgICAgICAgICAgICAgICAgIF9fY3VyID0gY3R4LnNlY3Rpb25zW2N0eC5zZWN0aW9ucy5sZW5ndGggLSAxXTt9XHJcbiAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoX190b2tlbnNbMV09PSdncm91cCcpe1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyBcclxuICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBfX3Rva2VucztcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpeyBcclxuICAgICAgICAgICAgICAgICAgY3R4Lmdyb3Vwcy5wdXNoKF9fcGFyc2VfcHJvcGVydGllcyh0b2tlbnNbMl0pKTtcclxuICAgICAgICAgICAgICAgICAgX19jdXIgPSBjdHguZ3JvdXBzW2N0eC5ncm91cHMubGVuZ3RoIC0gMV07fVxyXG4gICAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoX190b2tlbnNbMV09PSdkZXRhaWwnKXtcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gX190b2tlbnM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXtcclxuICAgICAgICAgICAgICAgICAgY3R4LmRldGFpbHMucHVzaChfX3BhcnNlX3Byb3BlcnRpZXModG9rZW5zWzJdKSk7XHJcbiAgICAgICAgICAgICAgICAgIF9fY3VyID0gY3R4LmRldGFpbHNbY3R4LmRldGFpbHMubGVuZ3RoIC0gMV07fVxyXG4gICAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfWVsc2V7IHRocm93IG5ldyBFcnJvcignVGFiYmx5IDogVW5yZWNvZ25pemVkIHRleHQgYWZ0ZXIgREVGSU5FJyl9ICBcclxuICAgICAgICB9ZWxzZXsgXHJcbiAgICAgICAgICBpZihfX2Z1bmMpe1xyXG4gICAgICAgICAgICBfX2Z1bmNCb2R5ICs9IG87XHJcbiAgICAgICAgICAgIF9fZnVuY0JvZHkgKz0gJ1xcbic7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe307XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RhYmJseSA6IFVucmVjb2duaXplZCB0ZXh0JylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvZGUuc3BsaXQoJ1xcbicpLmZvckVhY2goZnVuY3Rpb24obCl7IFxyXG4gICAgICAgIF9fcGFyc2VMaW5lKGwudHJpbSgpLGwpKF9fY29udGV4dCk7IFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiB7IGNvbnRleHQgOiBfX2NvbnRleHQgfTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW9kdWxlLnRhYmJseSA9IHsgZXhlY3V0ZSA6IF9fRXhlY3V0ZUNvZGUgfTtcclxuXHJcbiAgfShfbW9kdWxlKSk7XHJcbiAgICAgIFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBSZXBvcnRzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpIHtcclxuXHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lICAgICAgICAgICAgICAgID0ge307ICAgICAgXHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmdlbmVyYXRlUmVwb3J0ID0gZnVuY3Rpb24ocmQsIGRhdGEsIG1lZGlhdG9yKXtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmJlZ2luJyB9KTtcclxuICAgICAgdmFyIF9fcmQgICAgICA9IHJkIHx8IG1vZHVsZS5SZXBvcnRFbmdpbmUucmQ7XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gVHJhbnNmb3JtYXIgbG9zIGRhdG9zXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgdmFyIF9fZGF0YVNldCA9IF9fcmQuY29udGV4dC5wYXJzZURhdGEgPyBfX3JkLmNvbnRleHQucGFyc2VEYXRhKF9fcmQsIGRhdGEsIG1lZGlhdG9yLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZGF0YTtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmxvZy5tZXNzYWdlJywgdGV4dCA6ICdJbmljaWFsaXphbmRvLi4uJyB9KTtcclxuICAgICAgY29uc29sZS50aW1lKCdSZW5kZXInKTtcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBJbmljaWFsaXphciBmdW5jaW9uZXMgcGFyYSBsYSBnZW5lcmFjacOzbiBkZSBjb250ZW5pZG8gcGVyc29uYWxpemFkb1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9faW5pdENvbnRlbnRQcm92aWRlcnMoKXtcclxuICAgICAgICBbX19yZC5jb250ZXh0LnNlY3Rpb25zLCBfX3JkLmNvbnRleHQuZGV0YWlscywgX19yZC5jb250ZXh0Lmdyb3Vwc11cclxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKGEsYil7IHJldHVybiBhLmNvbmNhdChiKTsgfSwgW10pXHJcbiAgICAgICAgLm1hcChmdW5jdGlvbihzKXtcclxuICAgICAgICAgIGlmKHMudmFsdWVQcm92aWRlcmZuKXtcclxuICAgICAgICAgICAgcy52YWx1ZVByb3ZpZGVyID0gbW9kdWxlLnRlbXBsYXRlcy5nZXRWYWx1ZShzLnZhbHVlUHJvdmlkZXJmbiwgc2VsZik7IFxyXG4gICAgICAgICAgICBkZWxldGUgcy52YWx1ZVByb3ZpZGVyZm47ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYocy5mb290ZXJWYWx1ZVByb3ZpZGVyZm4pe1xyXG4gICAgICAgICAgICBzLmZvb3RlclZhbHVlUHJvdmlkZXIgPSBtb2R1bGUudGVtcGxhdGVzLmdldFZhbHVlKHMuZm9vdGVyVmFsdWVQcm92aWRlcmZuLCBzZWxmKTsgXHJcbiAgICAgICAgICAgIGRlbGV0ZSBzLmZvb3RlclZhbHVlUHJvdmlkZXJmbjsgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihzLmhlYWRlclZhbHVlUHJvdmlkZXJmbil7XHJcbiAgICAgICAgICAgIHMuaGVhZGVyVmFsdWVQcm92aWRlciA9IG1vZHVsZS50ZW1wbGF0ZXMuZ2V0VmFsdWUocy5oZWFkZXJWYWx1ZVByb3ZpZGVyZm4sIHNlbGYpOyBcclxuICAgICAgICAgICAgZGVsZXRlIHMuaGVhZGVyVmFsdWVQcm92aWRlcmZuO1xyXG4gICAgICAgICAgfSAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEdlbmVyYWNpw7NuIGRlIGxhcyBzZWNjaW9uZXMgZGUgY2FiZWNlcmEgZGUgbGFzIGFncnVwYWNpb25lc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgdmFyIF9fTUVSR0VfQU5EX1NFTkQgPSBmdW5jdGlvbih0LCBwLCBmbmtleSl7IG1lZGlhdG9yLnNlbmQobW9kdWxlLnRlbXBsYXRlcy5tZXJnZSh0LCBwLCBmbmtleSkpOyB9O1xyXG4gICAgICBmdW5jdGlvbiBfX2dyb3Vwc0hlYWRlcnMoKXtcclxuICAgICAgICBfX2dyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uKGcsIGlpKXtcclxuICAgICAgICAgIGlmKGlpIDwgX19icmVha0luZGV4KSByZXR1cm47IFxyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnNlY3Rpb25zLmdyb3VwLmhlYWRlcicsIHZhbHVlIDogZy5pZCB9KTsgIFxyXG4gICAgICAgICAgaWYoZy5kZWZpbml0aW9uLmhlYWRlcikgcmV0dXJuIF9fTUVSR0VfQU5EX1NFTkQoZy5kZWZpbml0aW9uLmhlYWRlciwgZywgJ2NvbXBpbGVkX2hlYWRlcmZuJyk7XHJcbiAgICAgICAgICBpZihnLmRlZmluaXRpb24uaGVhZGVyVmFsdWVQcm92aWRlcikgcmV0dXJuIG1lZGlhdG9yLnNlbmQoZy5kZWZpbml0aW9uLmhlYWRlclZhbHVlUHJvdmlkZXIoZykpOyBcclxuICAgICAgICB9KTsgICAgXHJcbiAgICAgIH1cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEdlbmVyYWNpw7NuIGRlIGxhcyBzZWNjaW9uZXMgZGUgcmVzdW1lbiBkZSBsYXMgYWdydXBhY2lvbmVzXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX2dyb3Vwc0Zvb3RlcnMoaW5kZXgpe1xyXG4gICAgICAgIHZhciBfX2dnID0gX19ncm91cHMubWFwKGZ1bmN0aW9uKGcpe3JldHVybiBnO30pOyBcclxuICAgICAgICBpZihpbmRleCkgX19nZy5zcGxpY2UoMCwgaW5kZXgpO1xyXG4gICAgICAgIF9fZ2cucmV2ZXJzZSgpLmZvckVhY2goIGZ1bmN0aW9uKGcpe1xyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnNlY3Rpb25zLmdyb3VwLmZvb3RlcicsIHZhbHVlIDogZy5pZCB9KTsgICAgICAgICAgXHJcbiAgICAgICAgICBpZihnLmRlZmluaXRpb24uZm9vdGVyKSByZXR1cm4gX19NRVJHRV9BTkRfU0VORChnLmRlZmluaXRpb24uZm9vdGVyLCBnLCAnY29tcGlsZWRfZm9vdGVyZm4nKTtcclxuICAgICAgICAgIGlmKGcuZGVmaW5pdGlvbi5mb290ZXJWYWx1ZVByb3ZpZGVyKSByZXR1cm4gbWVkaWF0b3Iuc2VuZChnLmRlZmluaXRpb24uZm9vdGVyVmFsdWVQcm92aWRlcihnKSk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICB9IFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBHZW5lcmFjacOzbiBkZSBsYXMgc2VjY2lvbmVzIGRlIGRldGFsbGVcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19kZXRhaWxzU2VjdGlvbnMoKXtcclxuICAgICAgICBfX2RldGFpbHMuZm9yRWFjaChmdW5jdGlvbihkKXtcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5zZWN0aW9ucy5kZXRhaWwnLCB2YWx1ZSA6IGQuaWQgfSk7XHJcbiAgICAgICAgICBpZihkLnRlbXBsYXRlKSByZXR1cm4gX19NRVJHRV9BTkRfU0VORChkLnRlbXBsYXRlLCBkLCAnY29tcGlsZWRmbicpXHJcbiAgICAgICAgICBpZihkLnZhbHVlUHJvdmlkZXIpIHJldHVybiBtZWRpYXRvci5zZW5kKGQudmFsdWVQcm92aWRlcihkKSk7XHJcbiAgICAgICAgfSkgICAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBHZW5lcmFjacOzbiBkZSBsYXMgc2VjY2lvbmVzIGRlIHRvdGFsIGdlbmVyYWxcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19ncmFuZFRvdGFsU2VjdGlvbnMoKXtcclxuICAgICAgICBfX3RvdGFscy5mb3JFYWNoKGZ1bmN0aW9uKHQpe1xyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnNlY3Rpb25zLnRvdGFsJywgdmFsdWUgOiB0LmlkIH0pO1xyXG4gICAgICAgICAgaWYodC50ZW1wbGF0ZSkgcmV0dXJuIF9fTUVSR0VfQU5EX1NFTkQodC50ZW1wbGF0ZSwgdCwgJ2NvbXBpbGVkZm4nKVxyXG4gICAgICAgICAgaWYodC52YWx1ZVByb3ZpZGVyKSByZXR1cm4gbWVkaWF0b3Iuc2VuZCh0LnZhbHVlUHJvdmlkZXIodCkpO1xyXG4gICAgICAgIH0pICAgICAgICAgICAgXHJcbiAgICAgIH0gXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEdlbmVyYWNpw7NuIGRlIGxhcyBzZWNjaW9uZXMgZGUgY2FiZWNlcmEgZGVsIGluZm9ybWVcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19yZXBvcnRIZWFkZXJTZWN0aW9ucygpe1xyXG4gICAgICAgIF9faGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHQpe1xyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnNlY3Rpb25zLmhlYWRlcicsIHZhbHVlIDogdCB9KTtcclxuICAgICAgICAgIGlmKHQudGVtcGxhdGUpIHJldHVybiBfX01FUkdFX0FORF9TRU5EKHQudGVtcGxhdGUsIHQsICdjb21waWxlZGZuJylcclxuICAgICAgICAgIGlmKHQudmFsdWVQcm92aWRlcikgcmV0dXJuIG1lZGlhdG9yLnNlbmQodC52YWx1ZVByb3ZpZGVyKHQpKTtcclxuICAgICAgICB9KSAgICAgICAgICAgIFxyXG4gICAgICB9IFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBJbmljaWFsaXphciBlbCBvYmpldG8gcXVlIHNpcnZlIGRlIGFjdW11bGFkb3JcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19yZXNvbHZlU3VtbWFyeU9iamVjdCgpe1xyXG4gICAgICAgIHZhciBfX3N1bW1hcnkgPSBKU09OLnBhcnNlKF9fcmQuY29udGV4dC5zdW1tYXJ5IHx8ICd7fScpO1xyXG4gICAgICAgIGlmKF9fcmQuY29udGV4dC5vbkluaXRTdW1tYXJ5T2JqZWN0KSByZXR1cm4gX19yZC5jb250ZXh0Lm9uSW5pdFN1bW1hcnlPYmplY3QoX19zdW1tYXJ5KTsgICAgICBcclxuICAgICAgICByZXR1cm4gX19zdW1tYXJ5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgX19icmVha0luZGV4ID0gLTE7IFxyXG5cclxuICAgICAgdmFyIF9fc3VtbWFyeSAgICA9IF9fcmVzb2x2ZVN1bW1hcnlPYmplY3QoKTtcclxuICAgICAgdmFyIF9faGVhZGVycyAgICA9IChfX3JkLmNvbnRleHQuc2VjdGlvbnMgfHwgW10pLndoZXJlKHsgdHlwZSA6ICdoZWFkZXInIH0pO1xyXG4gICAgICB2YXIgX190b3RhbHMgICAgID0gKF9fcmQuY29udGV4dC5zZWN0aW9ucyB8fCBbXSkud2hlcmUoeyB0eXBlIDogJ3RvdGFsJyB9KTtcclxuICAgICAgdmFyIF9fZm9vdGVycyAgICA9IChfX3JkLmNvbnRleHQuc2VjdGlvbnMgfHwgW10pLndoZXJlKHsgdHlwZSA6ICdmb290ZXInIH0pO1xyXG4gICAgICB2YXIgX19kZXRhaWxzICAgID0gX19yZC5jb250ZXh0LmRldGFpbHMgfHwgW107XHJcbiAgICAgIHZhciBfX2dyb3VwcyAgICAgPSBfX3JkLmNvbnRleHQuZ3JvdXBzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihnLCBpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgIG5hbWUgICAgICAgOiAnRycgKyAoaSsxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJkICAgICAgICAgOiBfX3JkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbiA6IGcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ICAgIDogJycsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSAgICAgICA6IG1vZHVsZS5jbG9uZShfX3N1bW1hcnkpLCAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXQgOiBmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2sgPSB2YWx1ZVt0aGlzLmRlZmluaXRpb24ua2V5XS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19HeCA9IHNlbGYuQlNbdGhpcy5uYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5hbGxbX19rXSA9IF9fR3guYWxsW19fa10gfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3guYWxsW19fa10ucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3gucmVjb3JkQ291bnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9fcmVzdW1lID09PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9fcmVzdW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmNvcHkodmFsdWUsIHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fX3Jlc3VtZSA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubGVuZ3RoID4gMCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmNvcHkodmFsdWUsIHRoaXMuZGF0YSk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bSAgOiBmdW5jdGlvbih2YWx1ZSl7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19rID0gdmFsdWVbdGhpcy5kZWZpbml0aW9uLmtleV0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fR3ggPSBzZWxmLkJTW3RoaXMubmFtZV07IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LmFsbFtfX2tdID0gX19HeC5hbGxbX19rXSB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5hbGxbX19rXS5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5yZWNvcmRDb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9fcmVzdW1lID09PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuUmVwb3J0RW5naW5lLnN1bSh2YWx1ZSwgdGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdCA6IGZ1bmN0aW9uKHZhbHVlKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlW3RoaXMuZGVmaW5pdGlvbi5rZXldID09IHRoaXMuY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgfHwgW107ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgc2VsZi5CUyA9IHsgcmVwb3J0RGVmaW5pdGlvbiA6IF9fcmQsIG1lZGlhdG9yIDogbWVkaWF0b3IgfTsgICAgICAgICAgICAgIFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIE9yZGVuYXIgbG9zIGRhdG9zXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgaWYoX19yZC5jb250ZXh0Lml0ZXJhdGVmbil7XHJcbiAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmxvZy5tZXNzYWdlJywgdGV4dCA6ICdJbmljaWFsaXphbmRvIGVsZW1lbnRvcy4uLicgfSk7XHJcbiAgICAgICAgX19kYXRhU2V0LmZvckVhY2goX19yZC5jb250ZXh0Lml0ZXJhdGVmbik7XHJcbiAgICAgIH1cclxuICAgICAgaWYoX19yZC5jb250ZXh0Lm9yZGVyQnkpe1xyXG4gICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5sb2cubWVzc2FnZScsIHRleHQgOiAnT3JkZW5hbmRvIGRhdG9zLi4uJyB9KTtcclxuICAgICAgICBfX2RhdGFTZXQuc29ydEJ5KF9fcmQuY29udGV4dC5vcmRlckJ5LCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBJbmljaWFsaXphclxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIHNlbGYuQlMgPSB7IHJlY29yZENvdW50ICAgICAgOiAwLCBcclxuICAgICAgICAgICAgICAgICAgRzAgICAgICAgICAgICAgICA6IG1vZHVsZS5jbG9uZShfX3N1bW1hcnkpLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhU2V0ICAgICAgICAgIDogX19kYXRhU2V0LFxyXG4gICAgICAgICAgICAgICAgICByZXBvcnREZWZpbml0aW9uIDogX19yZCwgXHJcbiAgICAgICAgICAgICAgICAgIG1lZGlhdG9yICAgICAgICAgOiBtZWRpYXRvciB9O1xyXG4gICAgICBfX2dyb3Vwcy5mb3JFYWNoKCBmdW5jdGlvbihnLCBpKXsgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgZy5jdXJyZW50ID0gKF9fZGF0YVNldCAmJiBfX2RhdGFTZXRbMF0pID8gX19kYXRhU2V0WzBdW2cuZGVmaW5pdGlvbi5rZXldIDogJyc7XHJcbiAgICAgICAgc2VsZi5CU1tnLm5hbWVdID0geyByZWNvcmRDb3VudCA6IDAsIGFsbCA6IHt9IH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZihfX3JkLmNvbnRleHQub25TdGFydGZuKSBfX3JkLmNvbnRleHQub25TdGFydGZuKHNlbGYuQlMpO1xyXG4gICAgICBfX2luaXRDb250ZW50UHJvdmlkZXJzKCk7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5yZW5kZXIucm93cycgfSk7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5sb2cubWVzc2FnZScsIHRleHQgOiAnR2VuZXJhbmRvIGluZm9ybWUuLi4nIH0pO1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gQ2FiZWNlcmFzIGRlbCBpbmZvcm1lXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBfX3JlcG9ydEhlYWRlclNlY3Rpb25zKCk7XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBDYWJlY2VyYXMgaW5pY2lhbGVzXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBpZihfX2RhdGFTZXQubGVuZ3RoID4gMCkgX19ncm91cHNIZWFkZXJzKCk7IFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gSXRlcmFyIHNvYnJlIGxvcyBlbGVtZW50b3NcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIF9fZGF0YVNldC5mb3JFYWNoKGZ1bmN0aW9uKHIsIGkpeyBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gUHJvY2VzYXIgZWwgZWxlbWVudG9cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAgICAgICAgXHJcbiAgICAgICAgc2VsZi5CUy5yZWNvcmRDb3VudCsrO1xyXG4gICAgICAgIHNlbGYuQlMuaXNMYXN0Um93ICAgICAgICA9IF9fZGF0YVNldC5sZW5ndGggPT09IHNlbGYuQlMucmVjb3JkQ291bnQ7XHJcbiAgICAgICAgc2VsZi5CUy5pc0xhc3RSb3dJbkdyb3VwID0gc2VsZi5CUy5pc0xhc3RSb3c7XHJcbiAgICAgICAgc2VsZi5CUy5wZXJjZW50ICAgICAgPSAoc2VsZi5CUy5yZWNvcmRDb3VudC9fX2RhdGFTZXQubGVuZ3RoKSAqIDEwMDsgIFxyXG4gICAgICAgIHNlbGYuQlMucHJldmlvdXMgICAgID0gc2VsZi5CUy5kYXRhIHx8IHI7XHJcbiAgICAgICAgc2VsZi5CUy5kYXRhICAgICAgICAgPSByOyBcclxuICAgICAgICBfX2dyb3Vwcy5mb3JFYWNoKCBmdW5jdGlvbihnLCBpKXsgXHJcbiAgICAgICAgICBzZWxmLkJTW2cubmFtZV0uZGF0YSAgPSBPYmplY3QuY3JlYXRlKGcuZGF0YSk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuc3VtKHIsIHNlbGYuQlMuRzApOyAgICAgICAgXHJcbiAgICAgICAgaWYoX19yZC5jb250ZXh0Lm9uUm93Zm4pIF9fcmQuY29udGV4dC5vblJvd2ZuKHNlbGYuQlMpO1xyXG4gICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlICA6ICdyZXBvcnQucmVuZGVyLnJvdycsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICA6IHNlbGYuQlMucGVyY2VudC50b0ZpeGVkKDEpICsgJyAlJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIDogc2VsZi5CUy5wZXJjZW50IH0pO1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBEZXRlcm1pbmFyIHNpIGhheSBjYW1iaW8gZW4gYWxndW5hIGRlIGxhcyBjbGF2ZXMgZGUgYWdydXBhY2nDs25cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgaWYoX19ncm91cHMuZXZlcnkoIGZ1bmN0aW9uKGcpeyByZXR1cm4gZy50ZXN0KHIpIH0pKXtcclxuICAgICAgICAgIF9fZ3JvdXBzLmZvckVhY2goIGZ1bmN0aW9uKGcpeyBnLnN1bShyKTsgfSk7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBfX2dyb3Vwcy5zb21lKCBmdW5jdGlvbihnLCBpKXsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZighZy50ZXN0KHIpKXtcclxuICAgICAgICAgICAgICBfX2JyZWFrSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgLy8gUGllcyBkZSBncnVwbyBkZSBsb3MgcXVlIGhhbiBjYW1iaWFkb1xyXG4gICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgX19ncm91cHNGb290ZXJzKF9fYnJlYWtJbmRleCk7XHJcbiAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAvLyBBY3R1YWxpemFyIGxvcyBncnVwb3NcclxuICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgIF9fZ3JvdXBzLmZvckVhY2goIGZ1bmN0aW9uKGdydXBvLCBpaSl7ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihpaSA+PSBfX2JyZWFrSW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgIC8vIEluaWNpYWxpemFyIGxvcyBxdWUgaGFuIGNhbWJpYWRvXHJcbiAgICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgZ3J1cG8uaW5pdChyKVxyXG4gICAgICAgICAgICAgICAgICBfX2JyZWFrSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgLy8gQWN1bXVsYXIgdmFsb3JlcyBkZSBsb3MgcXVlIHNpZ3VlbiBpZ3VhbFxyXG4gICAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgIGdydXBvLnN1bShyKTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAvLyBOb3RpZmljYXIgZGVsIGV2ZW50byBvbkdyb3VwQ2hhbmdlXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgX19ncm91cHMuZm9yRWFjaChmdW5jdGlvbihnKXtcclxuICAgICAgICAgICAgZy5jdXJyZW50ID0gcltnLmRlZmluaXRpb24ua2V5XTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYoX19yZC5jb250ZXh0Lm9uR3JvdXBDaGFuZ2VmbikgX19yZC5jb250ZXh0Lm9uR3JvdXBDaGFuZ2VmbihzZWxmLkJTKTsgICAgICAgICAgXHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSAgOiAncmVwb3J0LnNlY3Rpb25zLmdyb3VwLmNoYW5nZScsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIDogJ19fZ3JvdXBzJyB9KTtcclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIC8vIENhYmVjZXJhc1xyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgX19ncm91cHNIZWFkZXJzKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gRGV0ZXJtaW5hciBzaSBlc3RlIGVzIGVsIMO6bHRpbW8gZWxlbWVudG8gZGUgbGEgYWdydXBhY2nDs24gXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09O1xyXG4gICAgICAgIGlmKF9fZ3JvdXBzLmxlbmd0aCAmJiAhc2VsZi5CUy5pc0xhc3RSb3cgKXtcclxuICAgICAgICAgIHZhciBfX25leHQgICAgICAgICAgICAgICA9IF9fZGF0YVNldFtzZWxmLkJTLnJlY29yZENvdW50XTsgICAgICAgICAgXHJcbiAgICAgICAgICBzZWxmLkJTLmlzTGFzdFJvd0luR3JvdXAgPSAhIF9fZ3JvdXBzLmV2ZXJ5KCBmdW5jdGlvbihnKXtcclxuICAgICAgICAgICAgdmFyIF9fayA9IGcuZGVmaW5pdGlvbi5rZXk7XHJcbiAgICAgICAgICAgIHJldHVybiBfX25leHRbX19rXSA9PT0gc2VsZi5CUy5kYXRhW19fa107XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gU2VjY2lvbmVzIGRlIGRldGFsbGVcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBfX2RldGFpbHNTZWN0aW9ucygpICAgICAgICAgICAgXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYoX19kYXRhU2V0Lmxlbmd0aCA+IDApeyBcclxuICAgICAgICBzZWxmLkJTLnByZXZpb3VzID0gc2VsZi5CUy5kYXRhO1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gUGllcyBkZSBncnVwb1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgX19ncm91cHNGb290ZXJzKCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIFRvdGFsIGdlbmVyYWxcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIF9fZ3JhbmRUb3RhbFNlY3Rpb25zKCk7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5yZW5kZXIuZW5kJyB9KTtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmVuZCcgfSk7XHJcbiAgICAgIG1lZGlhdG9yLmZsdXNoKCk7XHJcbiAgICAgIGNvbnNvbGUudGltZUVuZCgnUmVuZGVyJyk7XHJcbiAgICB9XHJcbiAgICAgICAgICBcclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuY29weSAgICA9IGZ1bmN0aW9uKHMsIGQpeyBPYmplY3Qua2V5cyhkKS5tYXAoZnVuY3Rpb24oayl7IGRba10gPSBzW2tdO30pO30gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuc3VtICAgICA9IGZ1bmN0aW9uKHMsIGQpeyBPYmplY3Qua2V5cyhkKS5tYXAoZnVuY3Rpb24oayl7IGRba10gKz0gc1trXTt9KTt9ICAgXHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmNvbXB1dGUgPSBmdW5jdGlvbihkcywgbmFtZSl7IHJldHVybiBkcy5yZWR1Y2UoIGZ1bmN0aW9uKHQsIG8peyByZXR1cm4gdCArIG9bbmFtZV07IH0sIDAuMCk7IH1cclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuZ3JvdXAgICA9IGZ1bmN0aW9uKGEsIGMpe1xyXG5cdCAgICB2YXIgZHMgPSBhO1xyXG5cdCAgICB2YXIgX19mID0gZnVuY3Rpb24oaywgdCl7XHJcblx0ICAgICAgZHMuZGlzdGluY3QoIGZ1bmN0aW9uKHYpeyByZXR1cm4gdltrXTsgfSlcdCAgICAgICAgICAgIFxyXG5cdCAgICAgICAgLmZvckVhY2ggKCBmdW5jdGlvbih2KXsgY1t2XSA9IGRzLnJlZHVjZSggZnVuY3Rpb24ocCwgYywgaSwgYSl7IHJldHVybiAoY1trXT09dikgPyBwICsgY1t0XSA6IHA7IH0sIDAuMCk7IH0pO1xyXG4gICAgICAgIHJldHVybiBfX2Y7XHQgICAgICAgICAgIFxyXG5cdCAgICB9XHJcblx0ICAgIHJldHVybiBfX2Y7XHJcbiAgICB9XHJcbiBcclxuICB9KShfbW9kdWxlKTtcclxuXHJcbn0oX19tb2R1bGUsICdQb2wnKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfX21vZHVsZS5Qb2w7IiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgICBcclxuPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lciB3My1tYXJnaW4tYm90dG9tXCI+XHJcbiAgPGgxPlNvYnJlIE5vdGFzIEFwcDwvaDE+XHJcbiAgPHAgc3R5bGU9XCJ0ZXh0LWluZGVudDoxZW07XCI+XHJcbiAgICBOb3RhcyBBcHAgZXMgdW5hIHBydWViYSBkZSBjb25jZXB0byBkZSBsbyBxdWUgcG9kcsOtYSBzZXIgdW4gPHNwYW4gY2xhc3M9XCJ3My1ib2xkIHczLWl0YWxpY1wiPmZyYW1ld29yazwvc3Bhbj4gXHJcbiAgICBzZW5jaWxsbyBjb24gZWwgY3VhbCBkZXNhcnJvbGxhciBhcGxpY2FjaW9uZXMgYmFzYWRhcyDDum5pY2FtZW50ZSBlbiA8c3BhbiBjbGFzcz1cInczLWJvbGRcIj5IVE1MNTwvc3Bhbj4geSA8c3BhbiBjbGFzcz1cInczLWJvbGRcIj5KYXZhU2NyaXB0PC9zcGFuPlxyXG4gICAgcXVlIHNlYW4gc3ViY2VwdGlibGVzIGRlIGluc3RhbGFyc2UgZW4gZGlzcG9zaXRpdm9zIG3Ds3ZpbGVzIGNvbW8gdW5hIGFwbGljYWNpw7NuIDxzcGFuIGNsYXNzPVwidzMtYm9sZCB3My1pdGFsaWNcIj5QV0E8L3NwYW4+LiBzaW4gdXRpbGl6YXIgbmluZ3VubyBkZSBsb3MgPHNwYW4gY2xhc3M9XCJ3My1ib2xkIHczLWl0YWxpY1wiPmZyYW1ld29ya3M8L3NwYW4+IGV4aXN0ZW50ZXMgY29tbyBwdWVkZW4gc2VyIEFuZ3VsYXIsIFJlYWN0IG8gVnVlLmpzLlxyXG4gIDwvcD5cclxuICA8dWwgY2xhc3M9XCJ3My11bCB3My1ib3JkZXJcIj5cclxuICAgIDxsaT48aDI+UmVmZXJlbmNpYXM8L2gyPjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZXMud2lraXBlZGlhLm9yZy93aWtpL1NpbmdsZS1wYWdlX2FwcGxpY2F0aW9uXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U1BBIChTaW5nbGUtcGFnZSBhcHBsaWNhdGlvbik8L2E+PC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9lcy53aWtpcGVkaWEub3JnL3dpa2kvUHJvZ3Jlc3NpdmVfV2ViX0FwcHNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5QV0EgKFByb2dyZXNzaXZlIFdlYiBBcHBzKTwvYT48L2xpPlxyXG4gIDwvdWw+XHJcbiAgPHAgc3R5bGU9XCJ0ZXh0LWluZGVudDoxZW07XCI+XHJcbiAgICBFbiBlbCBkZXNhcnJvbGxvIGRlIGVzdGEgYXBsaWNhacOzbiBubyBzZSBoYW4gdXRpbGl6YWRvIG5pbmd1bm8gZGUgbG9zIDxzcGFuIGNsYXNzPVwidzMtYm9sZCB3My1pdGFsaWNcIj5mcmFtZXdvcmtzPC9zcGFuPiBleGlzdGVudGVzIGNvbW8gcHVlZGVuIHNlciBBbmd1bGFyLCBSZWFjdCBvIFZ1ZS5qcy5cclxuICA8L3A+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyIHczLW1hcmdpbi1ib3R0b20gdzMtY2VudGVyXCI+XHJcbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYWJvdXQtYnRuLWJhY2sgY2xhc3M9XCJ3My1idXR0b24gdzMtYmxhY2tcIj5Wb2x2ZXI8L2J1dHRvbj5cclxuPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gIHJldHVybiB7XHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7IFxyXG4gICAgICAgIGlubmVySFRNTCA6IF9fdGVtcGxhdGUuZm9ybWF0KHRoaXMpLCBcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcG9sLmJ1aWxkKCdkaXYnLCBvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkIDogY29udGFpbmVyID0+IHtcclxuICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1thYm91dC1idG4tYmFja10nKVxyXG4gICAgICAgICAgICAgICAub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICBoaXN0b3J5LmJhY2soKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgICBcclxuICA8ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyIHczLWNlbnRlclwiPlxyXG4gICAgPGgxPlDDoWdpbmEgcHJpbmNpcGFsPC9oMT5cclxuICAgIDxwPkFsbWFjZW5hIHR1cyBub3RhcyBlbiBlbCBtw7N2aWwhISE8L3A+XHJcbiAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltZy9sb2dvLnBuZ1wiIGFsdD1cIkNhclwiIHN0eWxlPVwid2lkdGg6IDUwJTtcIj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OjIwcHg7XCI+PC9kaXZcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaW5uZXJIVE1MIDogX190ZW1wbGF0ZS5mb3JtYXQodGhpcyksXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnZGl2Jywgb3B0aW9ucyk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCA6IGNvbnRhaW5lciA9PiB7XHJcblxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwi77u/aW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGFcIjtcclxuaW1wb3J0IERiV3JhcHBlclNlcnZpY2UgZnJvbSBcIi4uL2xpYi9kYldyYXBwZXIuc2VydmljZVwiO1xyXG5cclxuY29uc3QgTk9UQVNfVEFCTEVfTkFNRSA9ICdub3Rhcyc7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYFxyXG48ZGl2IGNsYXNzPVwidzMtYmFyIHczLWNlbnRlclwiPlxyXG4gIDxidXR0b24gYnRuLWFkZC1ub3RlIGNsYXNzPVwidzMtYnV0dG9uIHczLWRhcmstZ3JleSB3My1tYXJnaW5cIj5DcmVhciB1bmEgbm90YTwvYnV0dG9uPlxyXG48L2Rpdj5cclxuPGRpdiBub3Rhcy1jb250YWluZXIgY2xhc3M9XCJ3My1tYXJnaW4tYm90dG9tIHczLW1hcmdpbi10b3BcIiBzdHlsZT1cInBhZGRpbmc6MFwiPlxyXG48L2Rpdj5gO1xyXG5cclxuY29uc3QgX19pdGVtX3RlbXBsYXRlID1gXHJcbjxkaXYgY2xhc3M9XCJ3My1wYW5lbCB3My1ib3JkZXIgdzMtcm91bmRcIiBzdHlsZT1cInBhZGRpbmc6M3B4XCIgaWQ9XCJub3RlLXtrZXl9XCI+XHJcbiAgPGhlYWRlciBjbGFzcz1cInczLWNvbnRhaW5lciB3My1saWdodC1ncmV5XCIgc3R5bGU9XCJwYWRkaW5nOjBcIj5cclxuICAgIDxoNCBidG4tZXhwYW5kPjxzcGFuPis8L3NwYW4+IHt0aXRsZX08L2g0PlxyXG4gIDwvaGVhZGVyPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cclxuICAgIDxzcGFuPntkYXRlfTwvc3Bhbj5cclxuICAgIDxwPnt0ZXh0fTwvcD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwidzMtYmFyIHczLWNlbnRlclwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInczLWJ1dHRvbiB3My1kYXJrLWdyZXkgdzMtbWFyZ2luXCI+RWxpbWluYXI8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRiICAgICA6ICcnLFxyXG4gICAgcm93cyAgIDogW10sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7IFxyXG4gICAgICAgIGlubmVySFRNTCA6IF9fdGVtcGxhdGUuZm9ybWF0KHRoaXMpLFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwb2wuYnVpbGQoJ2RpdicsIG9wdGlvbnMpOyBcclxuICAgIH0sXHJcbiAgICBtb3VudGVkIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbYnRuLWFkZC1ub3RlXScpXHJcbiAgICAgICAgICAgICAgIC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIHZhciBfX3BheWxvYWQgPSB7IGtleSAgIDogbmV3IERhdGUoKS52YWx1ZU9mKCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgIDogJzIxLzAyLzIwMjAnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICdOdWV2YSBub3RhJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgOiAnVGV4dG8gZGUgbGEgbm90YScgfTtcclxuICAgICAgICAgICAgICAgICBzYXZlTm90ZS5hcHBseSh0aGlzLCBbX19wYXlsb2FkXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCBub3RhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dzLnB1c2gobm90YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgX19yZW5kZXIoKTsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgIHZhciBfX2xvYWREYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGJcclxuICAgICAgICAgICAgLnJlYWRBbGwoTk9UQVNfVEFCTEVfTkFNRSlcclxuICAgICAgICAgICAgLnRoZW4oIHZhbHVlcyA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yb3dzID0gdmFsdWVzO1xyXG4gICAgICAgICAgICAgIF9fcmVuZGVyKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdmFyIF9fcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBfX2NvbnRhaW5lciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbbm90YXMtY29udGFpbmVyXScpO1xyXG4gICAgICAgIF9fY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMucm93c1xyXG4gICAgICAgICAgICAubWFwKCBub3RlID0+IHBvbC5idWlsZCgnZGl2JywgeyBpbm5lckhUTUwgOiBfX2l0ZW1fdGVtcGxhdGUuZm9ybWF0KG5vdGUpIH0pKVxyXG4gICAgICAgICAgICAubWFwKCBlID0+IGUuZmlyc3RFbGVtZW50Q2hpbGQgIClcclxuICAgICAgICAgICAgLmZvckVhY2goIGUgPT4gX19jb250YWluZXIuYXBwZW5kQ2hpbGQoZSkgKTtcclxuXHJcbiAgICAgIHBvbC50b0FycmF5KGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdbYnRuLWV4cGFuZF0nKSlcclxuICAgICAgICAgLmZvckVhY2goaDQgPT4ge1xyXG4gICAgICAgICAgIGg0Lm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICBsZXQgX19zdHlsZSA9IGg0LnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlO1xyXG4gICAgICAgICAgICAgaWYoX19zdHlsZS5kaXNwbGF5ID09ICdub25lJyl7XHJcbiAgICAgICAgICAgICAgICBfX3N0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgIF9fc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZGIgPSBuZXcgRGJXcmFwcGVyU2VydmljZSgnYXBwLmRiJyk7XHJcbiAgICAgIHRoaXMuZGJcclxuICAgICAgICAgIC5vcGVuRGIoKVxyXG4gICAgICAgICAgLnRoZW4oIGRiID0+IHtcclxuICAgICAgICAgICAgX19sb2FkRGF0YSgpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlTm90ZSh0YXJnZXQpIHtcclxuICB0aGlzLmRiXHJcbiAgICAgIC5kZWxldGUoTk9UQVNfVEFCTEVfTkFNRSwgX190YXJnZXQua2V5KVxyXG4gICAgICAudGhlbiggKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucm93cy5yZW1vdmUoX190YXJnZXQpO1xyXG4gICAgICAgIFxyXG4gICAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F2ZU5vdGUocGF5bG9hZCkge1xyXG4gIHJldHVybiB0aGlzLmRiXHJcbiAgICAgICAgICAgICAuc2F2ZShOT1RBU19UQUJMRV9OQU1FLCBwYXlsb2FkKTtcclxuXHJcbiAgICAgICAgICAgIC8vLnRoZW4oIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAvLyAgdGhpcy5yb3dzLnB1c2goZGF0YSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vfSkuY2F0Y2goIGVycm9yID0+IHtcclxuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgLy99KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9