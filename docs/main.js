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


const NOTAS_DATABASE   = 'notas-app.db'; 
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

      this.db = new _lib_dbWrapper_service__WEBPACK_IMPORTED_MODULE_1__["default"](NOTAS_DATABASE);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW4tY29udGVudC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVudS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvZGJXcmFwcGVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9tYXBhLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hYm91dC5wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ob21lLnBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2xpc3QucGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2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O0FDdkJEO0FBQUE7QUFBQTtBQUFBLENBQStCO0FBQ3lCOztBQUV4RCx3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVFQUF1RSxJQUFJO0FBQzNFO0FBQ0EsbUNBQW1DLE1BQU07QUFDekM7O0FBRUE7QUFDQSxXQUFXLEtBQUs7QUFDaEIsUUFBUSxLQUFLO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpREFBRyx1QjtBQUNoQixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQztBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaURBQUcsZUFBZSwyQ0FBMkM7QUFDdkY7QUFDQTs7QUFFQSxNQUFNLGlEQUFHO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUEsb0JBQW9CLDhEQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQztBQUNBLGVBQWU7QUFDZjtBQUNBLGVBQWU7QUFDZiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGAgIFxyXG4gIDxwPnt0ZXh0fTwvcD5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRleHQgIDogJ8KpIFJhZmFlbCBDYXN0cm8gR8OzbWV6LCAyMDIwJyxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaWQgICAgICAgIDogXCJhcHBGb290ZXJcIixcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLmZvcm1hdCh0aGlzKSxcclxuICAgICAgICBjbGFzc05hbWUgOiAndzMtY29udGFpbmVyIHczLXRlYWwgdzMtY2VudGVyJ1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwb2wuYnVpbGQoJ2Zvb3RlcicsIG9wdGlvbnMpO1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKHBhcmVudCl7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgXHJcbiAgPGgxPnt0aXRsZX08L2gxPlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICByZXR1cm4ge1xyXG4gICAgdGl0bGUgIDogJ05vdGFzIEFwcCcsXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7IFxyXG4gICAgICAgIGlkICAgICAgICA6ICdhcHBIZWFkZXInLFxyXG4gICAgICAgIGlubmVySFRNTCA6IF9fdGVtcGxhdGUuZm9ybWF0KHRoaXMpLFxyXG4gICAgICAgIGNsYXNzTmFtZSA6ICd3My1jb250YWluZXIgdzMtdGVhbCdcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcG9sLmJ1aWxkKCdoZWFkZXInLCBvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbihwYXJlbnQpe1xyXG4gICAgICBcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYGA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gIHJldHVybiB7XHJcbiAgICB0ZXh0ICA6ICcnLFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpZCAgICAgICAgOiBcImFwcC1jb250ZW50LWNvbnRhaW5lclwiLFxyXG4gICAgICAgIGlubmVySFRNTCA6IF9fdGVtcGxhdGUuZm9ybWF0KHRoaXMpLFxyXG4gICAgICAgIGNsYXNzTmFtZSA6ICd3My1jb250YWluZXInLFxyXG4gICAgICAgIHN0eWxlICAgICA6IHsgXHJcbiAgICAgICAgICBtaW5IZWlnaHQgOiAnNDQwcHgnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwb2wuYnVpbGQoJ3NlY3Rpb24nLCBvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbihwYXJlbnQpe1xyXG4gICAgICBcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYCAgXHJcbiAgPGEgaHJlZj1cIlwiIHJvdXRlLWxpbmsgY2xhc3M9XCJ3My1iYXItaXRlbSB3My1idXR0b25cIj5JbmljaW88L2E+XHJcbiAgPGEgaHJlZj1cImxpc3RcIiByb3V0ZS1saW5rIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uXCI+Tm90YXM8L2E+XHJcbiAgPGEgaHJlZj1cImFib3V0XCIgcm91dGUtbGluayBjbGFzcz1cInczLWJhci1pdGVtIHczLWJ1dHRvbiB3My1yaWdodFwiPj88L2E+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gIHJldHVybiB7XHJcbiAgICBpZCAgICAgOiAnbWVudS5jb21wb25lbnQucmVmJyxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaWQgICAgICAgIDogXCJhcHBNZW51XCIsXHJcbiAgICAgICAgaW5uZXJIVE1MIDogX190ZW1wbGF0ZS5mb3JtYXQodGhpcyksXHJcbiAgICAgICAgY2xhc3NOYW1lIDogJ3czLWJhciB3My1ibGFjaydcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcG9sLmJ1aWxkKCduYXYnLCBvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbihwYXJlbnQpe1xyXG4gICAgICBcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4vbGliL21hcGEuanNcIjtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENvbXBvbmVudHNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmltcG9ydCBoZWFkZXJDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCBmb290ZXJDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9mb290ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCBjb250ZW50Q29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbi1jb250ZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgbWVudUNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL21lbnUuY29tcG9uZW50XCI7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQYWdlc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuaW1wb3J0IGhvbWVQYWdlIGZyb20gXCIuL3ZpZXdzL2hvbWUucGFnZVwiO1xyXG5pbXBvcnQgbGlzdFBhZ2UgZnJvbSBcIi4vdmlld3MvbGlzdC5wYWdlXCI7XHJcbmltcG9ydCBhYm91dFBhZ2UgZnJvbSBcIi4vdmlld3MvYWJvdXQucGFnZVwiO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUm91dGVzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBjb21wb25lbnRzID0gIFsgXHJcbiAgaGVhZGVyQ29tcG9uZW50KCksXHJcbiAgbWVudUNvbXBvbmVudCgpLFxyXG4gIGNvbnRlbnRDb21wb25lbnQoKSxcclxuICBmb290ZXJDb21wb25lbnQoKVxyXG5dO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVmlld3NcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IHZpZXdzID0geyBcclxuICAnaG9tZScgICAgOiBob21lUGFnZSxcclxuICAnbGlzdCcgICAgOiBsaXN0UGFnZSxcclxuICAnYWJvdXQnICAgOiBhYm91dFBhZ2UgXHJcbn07XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSW5pdCBBcHBcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbihmdW5jdGlvbigpe1xyXG5cclxuICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcENvbnRlbnQnKTtcclxuICBjb21wb25lbnRzLmZvckVhY2goIGMgPT4ge1xyXG4gICAgcm9vdC5hcHBlbmRDaGlsZChjLnJlbmRlcigpKTtcclxuICAgIGlmKGMubW91bnRlZCkgYy5tb3VudGVkKHJvb3QpOyBcclxuICB9KTtcclxuXHJcbiAgcG9sLnRvQXJyYXkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW3JvdXRlLWxpbmtdJykpXHJcbiAgICAgLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5vbmNsaWNrID0gZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICBsZXQgcGF0aE5hbWUgPSBlLnRhcmdldC5wYXRobmFtZTtcclxuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5XHJcbiAgICAgICAgICAgICAgICAucHVzaFN0YXRlKHt9LCBwYXRoTmFtZSwgbG9jYXRpb24ub3JpZ2luICsgcGF0aE5hbWUpO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2hvd0NvbnRlbnQoKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ICBcclxuICAgICB9KTtcclxuXHJcbn0pKCk7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTeW5jIGNvbnRlbnRcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHAtY29udGVudC1jb250YWluZXInKTtcclxubGV0IGN1cnJlbnRWaWV3O1xyXG5mdW5jdGlvbiBzaG93Q29udGVudCgpe1xyXG4gIGxldCByb3V0ZSA9IHdpbmRvdy5sb2NhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIC5ocmVmXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoZG9jdW1lbnQuYmFzZVVSSSwgJycpO1xyXG4gIGxldCB2aWV3X3JlZiA9IHZpZXdzW3JvdXRlXSB8fCB2aWV3cy5ob21lO1xyXG4gIGlmKCFjdXJyZW50VmlldyB8fCBjdXJyZW50VmlldyAhPSB2aWV3X3JlZikge1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnOyAgICBcclxuICAgIGN1cnJlbnRWaWV3ID0gdmlld19yZWY7XHJcbiAgICBsZXQgdmlld19pbnN0YW5jZSA9IGN1cnJlbnRWaWV3KCk7XHJcbiAgICBpZih2aWV3X2luc3RhbmNlLmluaXQpIHZpZXdfaW5zdGFuY2UuaW5pdCgpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHZpZXdfaW5zdGFuY2UucmVuZGVyKCkpO1xyXG4gICAgaWYodmlld19pbnN0YW5jZS5tb3VudGVkKSB2aWV3X2luc3RhbmNlLm1vdW50ZWQoY29udGFpbmVyKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5zaG93Q29udGVudCgpO1xyXG5cclxud2luZG93Lm9ucG9wc3RhdGUgPSBzaG93Q29udGVudDtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNlcnZpY2VXb3JrZXJcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9PntcclxuXHJcbiAgaWYoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcil7XHJcbiAgICB0cnkge1xyXG4gICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZVdvcmtlci5qcycpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIFJlZ2lzdGVyZWRcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIFJlZ2lzdHJhdGlvbiBGYWlsZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSk7Iiwi77u/aW1wb3J0IHBvbCBmcm9tIFwiLi9tYXBhLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYldyYXBwZXJTZXJ2aWNle1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLmRibmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmRiID0gJyc7XHJcbiAgfVxyXG5cclxuICBvcGVuRGIoKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgbGV0IHJlcXVlc3QgPSB3aW5kb3cuaW5kZXhlZERCLm9wZW4odGhpcy5kYm5hbWUsIDEpO1xyXG5cclxuXHQgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGIgPSBlLnRhcmdldC5yZXN1bHQ7XHJcblx0XHQgICAgcmVzb2x2ZSh0aGlzLmRiKTtcclxuXHQgICAgfTtcclxuXHJcbiAgICAgIHJlcXVlc3Qub25lcnJvciA9IGUgPT4geyAgXHJcbiAgICAgICAgcmVqZWN0KCdFcnJvcicpO1xyXG4gICAgICB9O1xyXG5cdFxyXG5cdCAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IChlKSA9PiB7XHJcblx0XHQgICAgdGhpcy5kYiA9IGUudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgaWYodGhpcy5kYi5vYmplY3RTdG9yZU5hbWVzICYmIHRoaXMuZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhcIm5vdGFzXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGIuZGVsZXRlT2JqZWN0U3RvcmUoXCJub3Rhc1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN0b3JlID0gdGhpcy5kYi5jcmVhdGVPYmplY3RTdG9yZShcIm5vdGFzXCIsIHsga2V5UGF0aCA6IFwia2V5XCIgfSk7ICAgICAgIFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWFkQWxsKG5hbWUpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHZhciBfX2l0ZW1zID0gW107XHJcbiAgICAgIHRoaXMuZGJcclxuICAgICAgICAgIC50cmFuc2FjdGlvbihuYW1lLCBcInJlYWRvbmx5XCIpXHJcbiAgICAgICAgICAub2JqZWN0U3RvcmUobmFtZSlcclxuICAgICAgICAgIC5vcGVuQ3Vyc29yKElEQktleVJhbmdlLmxvd2VyQm91bmQoMCkpXHJcbiAgICAgICAgICAub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBfX2N1cnNvciA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgICAgIGlmKF9fY3Vyc29yKSB7XHJcbiAgICAgICAgICAgICAgX19pdGVtcy5wdXNoKF9fY3Vyc29yLnZhbHVlKTtcclxuICAgICAgICAgICAgICBfX2N1cnNvci5jb250aW51ZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoX19pdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNhdmUoc3RvcmUsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHRoaXMuZGJcclxuICAgICAgICAgIC50cmFuc2FjdGlvbihzdG9yZSwgXCJyZWFkd3JpdGVcIilcclxuICAgICAgICAgIC5vYmplY3RTdG9yZShzdG9yZSlcclxuICAgICAgICAgIC5wdXQodmFsdWUpXHJcbiAgICAgICAgICAub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZShzdG9yZSwga2V5KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHRoaXMuZGJcclxuICAgICAgICAgIC50cmFuc2FjdGlvbihzdG9yZSwgXCJyZWFkd3JpdGVcIilcclxuICAgICAgICAgIC5vYmplY3RTdG9yZShzdG9yZSlcclxuICAgICAgICAgIC5kZWxldGUoa2V5KVxyXG4gICAgICAgICAgLm9uc3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVhZE9uZShzdG9yZSwga2V5KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHRoaXMuZGJcclxuICAgICAgICAgIC50cmFuc2FjdGlvbihzdG9yZSwgXCJyZWFkd3JpdGVcIilcclxuICAgICAgICAgIC5vYmplY3RTdG9yZShzdG9yZSlcclxuICAgICAgICAgIC5nZXQoa2V5KVxyXG4gICAgICAgICAgLm9uc3VjY2VzcyA9IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShldmVudC50YXJnZXQucmVzdWx0KTtcclxuICAgICAgICAgIH0gICAgICAgICBcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiIsIlxyXG5cclxubGV0IF9fbW9kdWxlID0ge307XHJcbihmdW5jdGlvbihtb2R1bGUsIG5hbWUpe1xyXG5cclxuICB2YXIgX21vZHVsZSA9ICBtb2R1bGVbbmFtZV0gPSB7IGFwcGx5IDogZnVuY3Rpb24gYXBwbHkobywgYywgZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQpIGFwcGx5KG8sIGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvICYmIGMgJiYgdHlwZW9mIGMgPT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBjKXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY1twXSA9PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHkob1twXSwgY1twXSApICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb1twXSA9IGNbcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTsgICAgICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gVXRpbHNcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKGZ1bmN0aW9uKG1vZHVsZSl7XHJcbiAgICBtb2R1bGUuYXBwbHkobW9kdWxlLHsgXHJcbiAgICAgIHRvQXJyYXkgICAgIDogZnVuY3Rpb24odil7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHYpOyB9LFxyXG4gICAgICBpc051bGwgICAgICA6IGZ1bmN0aW9uKHYpe3JldHVybiB2ID09PSBudWxsOyB9LFxyXG4gICAgICBpc0FycmF5ICAgICA6IGZ1bmN0aW9uKHYpe3JldHVybiBBcnJheS5pc0FycmF5KHYpOyB9LFxyXG4gICAgICBpc1N0cmluZyAgICA6IGZ1bmN0aW9uKHYpe3JldHVybiB0eXBlb2YgdiA9PSAnc3RyaW5nJzt9LFxyXG4gICAgICBpc0Jvb2xlYW4gICA6IGZ1bmN0aW9uKHYpe3JldHVybiB0eXBlb2YgdiA9PSAnYm9vbGVhbic7fSxcclxuICAgICAgaXNOdW1iZXIgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdHlwZW9mIHYgPT0gJ251bWJlcic7fSxcclxuICAgICAgaXNGdW5jdGlvbiAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdHlwZW9mIHYgPT0gJ2Z1bmN0aW9uJzt9LFxyXG4gICAgICBpc09iamVjdCAgICA6IGZ1bmN0aW9uKHYpe3JldHVybiB2ICYmIHR5cGVvZiB2ID09ICdvYmplY3QnO30sXHJcbiAgICAgIGNsb25lICAgICAgIDogZnVuY3Rpb24obykge1xyXG4gICAgICAgIGlmKG1vZHVsZS5pc0FycmF5KG8pKSAgICAgICAgICAgICByZXR1cm4gby5zbGljZSgwKTtcclxuICAgICAgICBpZihtb2R1bGUuaXNPYmplY3QobykgJiYgby5jbG9uZSkgcmV0dXJuIG8uY2xvbmUoKTtcclxuICAgICAgICBpZihtb2R1bGUuaXNPYmplY3QobykpeyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG8pLnJlZHVjZSggZnVuY3Rpb24oYSwgayl7XHJcbiAgICAgICAgICAgIGFba10gPSBtb2R1bGUuY2xvbmUob1trXSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgICAgfSwge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbztcclxuICAgICAgfSwgICAgICAgIFxyXG4gICAgICBqb2luICAgICAgICA6IGZ1bmN0aW9uKGl0ZW1zLCBwcm9wZXJ0eSwgc2VwYXJhdG9yKXtcclxuICAgICAgICByZXR1cm4gaXRlbXMucmVkdWNlKGZ1bmN0aW9uKGEsIG8peyByZXR1cm4gYS5hcHBlbmQob1twcm9wZXJ0eSB8fCAnaWQnXSk7IH0sIFtdKVxyXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJy0nIDogKHNlcGFyYXRvciB8fCAnJykpOyBcclxuICAgICAgfSxcclxuICAgICAgc3RyaW5nQnVpbGRlciA6IGZ1bmN0aW9uKHMpe1xyXG4gICAgICAgICAgcmV0dXJuIHsgdmFsdWUgICAgICA6IHMgfHwgJycsXHJcbiAgICAgICAgICAgICAgICAgICBhcHBlbmQgICAgIDogZnVuY3Rpb24ocyl7IHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlICsgczsgcmV0dXJuIHRoaXM7fSxcclxuICAgICAgICAgICAgICAgICAgIGFwcGVuZExpbmUgOiBmdW5jdGlvbihzKXsgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUgKyAocyB8fCAnJykgKyAnXFxuJzsgcmV0dXJuIHRoaXM7fX1cclxuICAgICAgfSxcclxuICAgICAgYnVpbGQgOiBmdW5jdGlvbih0YWdOYW1lLCBvKXtcclxuICAgICAgICByZXR1cm4gX21vZHVsZS5hcHBseShkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpLCBvKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfShfbW9kdWxlKSk7XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFN0cmluZ3NcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKGZ1bmN0aW9uKG1vZHVsZSl7XHJcbiAgICBtb2R1bGUuYXBwbHkoU3RyaW5nLCB7XHJcbiAgICAgIHN0cmluZ0J1aWxkZXIgOiBtb2R1bGUuc3RyaW5nQnVpbGRlcixcclxuICAgICAgbGVmdFBhZCAgICAgICA6IGZ1bmN0aW9uICh2YWwsIHNpemUsIGNoKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICcnICsgdmFsO1xyXG4gICAgICAgIGlmIChjaCA9PT0gbnVsbCB8fCBjaCA9PT0gdW5kZWZpbmVkIHx8IGNoID09PSAnJykgY2ggPSAnICc7ICAgICAgICAgICAgXHJcbiAgICAgICAgd2hpbGUgKHJlc3VsdC5sZW5ndGggPCBzaXplKSByZXN1bHQgPSBjaCArIHJlc3VsdDsgICAgICAgICAgICBcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9LFxyXG4gICAgICB0cmltVmFsdWVzIDogZnVuY3Rpb24gKHZhbHVlcyl7IHJldHVybiB2YWx1ZXMubWFwKGZ1bmN0aW9uKHMpe3JldHVybiBzLnRyaW0oKTt9KTt9XHJcbiAgICB9KTtcclxuICAgIG1vZHVsZS5hcHBseShTdHJpbmcucHJvdG90eXBlLCB7XHJcbiAgICAgIHJlcGxhY2VBbGwgIDogZnVuY3Rpb24ocGF0dGVybiwgcmVwbGFjZW1lbnQpIHsgcmV0dXJuIHRoaXMuc3BsaXQocGF0dGVybikuam9pbihyZXBsYWNlbWVudCk7IH0sXHJcbiAgICAgIHJlcGVhdCAgICAgIDogU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQgICAgIHx8IGZ1bmN0aW9uKGEpIHsgcmV0dXJuIG5ldyBBcnJheShhICsgMSkuam9pbih0aGlzKTsgfSxcclxuICAgICAgY29udGFpbnMgICAgOiBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzICAgfHwgZnVuY3Rpb24odCwgc3RhcnQpIHsgcmV0dXJuIHRoaXMuaW5kZXhPZih0KSA+PSAoc3RhcnQgfHwgMCk7IH0sXHJcbiAgICAgIHN0YXJ0c1dpdGggIDogU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoIHx8IGZ1bmN0aW9uKHQpeyByZXR1cm4gdGhpcy5pbmRleE9mKHQpID09IDA7IH0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgdG9GbG9hdCAgICAgOiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy50cmltKCkucmVwbGFjZUFsbCgnLicsICcnKS5yZXBsYWNlQWxsKCcsJywgJy4nKSB9LFxyXG4gICAgICBmaXhEYXRlICAgICA6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLnNwbGl0KCcgJylbMF07IH0sXHJcbiAgICAgIGZpeFRpbWUgICAgIDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuc3BsaXQoJyAnKVsxXTsgfSxcclxuICAgICAgZml4WWVhciAgICAgOiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5maXhEYXRlKCkuc3BsaXQoJy8nKVsyXTt9LFxyXG4gICAgICB0cmltU2Vjb25kcyA6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLnNwbGl0KCc6JylbMF0gKyAnOicgKyB0aGlzLnNwbGl0KCc6JylbMV0gOyB9LFxyXG4gICAgICBwYWRkaW5nTGVmdCA6IGZ1bmN0aW9uKHBhZGRpbmdWYWx1ZSl7IHJldHVybiAocGFkZGluZ1ZhbHVlICsgdGhpcykuc2xpY2UoLXBhZGRpbmdWYWx1ZS5sZW5ndGgpOyB9LFxyXG4gICAgICBmb3JtYXQgICAgICA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIF9fYXJnICAgICA9IGFyZ3VtZW50cztcclxuICAgICAgICB2YXIgX19jb250ZXh0ID0gX19hcmdbX19hcmcubGVuZ3RoIC0gMV0gfHwgc2VsZjsgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC9cXHsoXFxkK3xbXntdKylcXH0vZywgZnVuY3Rpb24obSwga2V5KXtcclxuICAgICAgICAgIGlmKGtleS5pbmRleE9mKCc6JykgPiAwKXtcclxuICAgICAgICAgICAgdmFyIF9fZm4gPSBrZXkuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgX19mblswXSAgPSBnZXRWYWx1ZShfX2ZuWzBdLCBfX2NvbnRleHQpO1xyXG4gICAgICAgICAgICBfX2ZuWzFdICA9IGdldFZhbHVlKF9fZm5bMV0sIF9fY29udGV4dCk7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2ZuWzBdKF9fZm5bMV0sIF9fY29udGV4dCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gL15cXGQrJC8udGVzdChrZXkpID8gX19hcmdba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHR5cGVvZiBfX2NvbnRleHRba2V5XSA9PT0gXCJ1bmRlZmluZWRcIikgPyBnZXRWYWx1ZShrZXksIF9fY29udGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9fY29udGV4dFtrZXldOyBcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7ICAgICAgXHJcbiAgfShfbW9kdWxlKSk7ICAgICAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIEFycmF5XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgICBcclxuICAoZnVuY3Rpb24obW9kdWxlKXtcclxuICAgIG1vZHVsZS5hcHBseShBcnJheS5wcm90b3R5cGUsIHsgICAgICAgICAgXHJcbiAgICAgIHJlbW92ZSAgIDogZnVuY3Rpb24obykge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXhPZihvKTtcclxuICAgICAgICBpZiAoaW5kZXggIT0gLTEpIHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfSxcclxuICAgICAgYWRkICAgICAgOiBmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoKG8pO1xyXG4gICAgICAgIHJldHVybiBvO1xyXG4gICAgICB9LFxyXG4gICAgICBhcHBlbmQgICA6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICB0aGlzLnB1c2gobyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW0gICAgIDogZnVuY3Rpb24ocHJvcE5hbWUsIHZhbHVlLCBkZWYpe1xyXG4gICAgICAgIHJldHVybiBhcmd1bWVudHM9PTEgPyB0aGlzLmZpbHRlciggZnVuY3Rpb24odil7cmV0dXJuIHZbJ2lkJ10gPT0gcHJvcE5hbWUgfHwgdlsnX2lkJ10gPT0gcHJvcE5hbWV9KVswXSB8fCBkZWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5maWx0ZXIoIGZ1bmN0aW9uKHYpe3JldHVybiB2W3Byb3BOYW1lXSA9PSB2YWx1ZX0pWzBdIHx8IGRlZjtcclxuICAgICAgfSxcclxuICAgICAgY29udGFpbnMgOiBmdW5jdGlvbihwcm9wTmFtZSx2YWx1ZSl7IHJldHVybiB0aGlzLml0ZW0ocHJvcE5hbWUsdmFsdWUpOyB9LFxyXG4gICAgICBsYXN0SXRlbSA6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdOyB9LFxyXG4gICAgICBzZWxlY3QgICA6IGZ1bmN0aW9uKHNlbnRlbmNlKXsgcmV0dXJuIHRoaXMubWFwKHNlbnRlbmNlKSB9LCAgIFxyXG4gICAgICB3aGVyZSAgICA6IGZ1bmN0aW9uKHNlbnRlbmNlKXsgXHJcbiAgICAgICAgaWYobW9kdWxlLmlzRnVuY3Rpb24oc2VudGVuY2UpKSByZXR1cm4gdGhpcy5maWx0ZXIoc2VudGVuY2UpO1xyXG4gICAgICAgIGlmKG1vZHVsZS5pc09iamVjdChzZW50ZW5jZSkpe1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKG5ldyBGdW5jdGlvbignYScsIE9iamVjdC5rZXlzKHNlbnRlbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24oYSwgcHJvcG5hbWUsIGkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSArIChpID4gMCA/ICcgJiYgJyA6ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX192YWx1ZSA9IHNlbnRlbmNlW3Byb3BuYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihfX3ZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSByZXR1cm4gJ3sxfS50ZXN0KGEuezB9KScuZm9ybWF0KHByb3BuYW1lLCBfX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtb2R1bGUuaXNTdHJpbmcoX192YWx1ZSkpIHJldHVybiAnYS57MH0gPT09IFxcJ3sxfVxcJycuZm9ybWF0KHByb3BuYW1lLCBfX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2EuezB9ID09PSB7MX0nLmZvcm1hdChwcm9wbmFtZSwgX192YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KCkpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICdyZXR1cm4gJykpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNvcnRCeSAgICAgIDogZnVuY3Rpb24ocHJvcG5hbWUsIGRlc2Mpe1xyXG4gICAgICAgIHZhciBfX29yZGVyID0gW107XHJcbiAgICAgICAgdmFyIF9fbmFtZXMgPSBwcm9wbmFtZS5zcGxpdCgnLCcpLm1hcCggZnVuY3Rpb24odG9rZW4saSl7IFxyXG4gICAgICAgICAgdmFyIF9fcGFpciA9IHRva2VuLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICBfX29yZGVyW2ldID0gKF9fcGFpclsxXSAmJiAoX19wYWlyWzFdLnRvVXBwZXJDYXNlKCk9PSdERVNDJykpID8gLTEgOiAxOyAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuIF9fcGFpclswXTsgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgX19vcmRlclswXSA9IChkZXNjID8gLTEgOiAxKVxyXG4gICAgICAgIHRoaXMuc29ydChmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IDA7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX19mbiA9IGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIF9feCA9IGFbX19uYW1lc1tpXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgX195ID0gYltfX25hbWVzW2ldXTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKF9feCA8IF9feSkgcmV0dXJuIC0xICogX19vcmRlcltpXTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKF9feCA+IF9feSkgcmV0dXJuICAxICogX19vcmRlcltpXTtcclxuICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKGkgPCBfX25hbWVzLmxlbmd0aCkgcmV0dXJuIF9fZm4oYSxiKTsgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZm4oYSxiKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzOyAgICBcclxuICAgICAgfSxcclxuICAgICAgb3JkZXJCeSAgICAgOiBmdW5jdGlvbihzZW50ZW5jZSl7XHJcbiAgICAgICAgdmFyIF9fc2VudGVuY2UgPSBzZW50ZW5jZTsgICAgXHJcbiAgICAgICAgaWYobW9kdWxlLmlzU3RyaW5nKHNlbnRlbmNlKSkgX19zZW50ZW5jZSA9IGZ1bmN0aW9uKGEpeyByZXR1cm4gYVtzZW50ZW5jZV07IH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGV9KVxyXG4gICAgICAgICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IF9fc2VudGVuY2UoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IF9fc2VudGVuY2UoYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCh4IDwgeSkgPyAtMSA6ICgoeCA+IHkpID8gMSA6IDApKTtcclxuICAgICAgICAgICAgICAgICAgIH0pOyAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIGRpc3RpbmN0ICAgIDogZnVuY3Rpb24oc2VudGVuY2UpIHtcclxuICAgICAgICB2YXIgX19zZW50ZW5jZSA9IHNlbnRlbmNlOyAgICBcclxuICAgICAgICBpZihtb2R1bGUuaXNTdHJpbmcoc2VudGVuY2UpKSBfX3NlbnRlbmNlID0gZnVuY3Rpb24oYSl7IHJldHVybiBhW3NlbnRlbmNlXTsgfVxyXG4gICAgICAgIHZhciByID0gW107XHJcbiAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgdmFyIF92YWx1ZSA9IF9fc2VudGVuY2UoaXRlbSk7XHJcbiAgICAgICAgICBpZihyLmluZGV4T2YoX3ZhbHVlKT09LTEpIHIucHVzaChfdmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgICB9LFxyXG4gICAgICBncm91cEJ5IDogZnVuY3Rpb24ocHJvcCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVkdWNlKGZ1bmN0aW9uKGdyb3VwcywgaXRlbSkge1xyXG4gICAgICAgICAgdmFyIHZhbCA9IGl0ZW1bcHJvcF07XHJcbiAgICAgICAgICAoZ3JvdXBzW3ZhbF0gPSBncm91cHNbdmFsXSB8fCBbXSkucHVzaChpdGVtKTtcclxuICAgICAgICAgIHJldHVybiBncm91cHNcclxuICAgICAgICB9LCB7fSlcclxuICAgICAgfSxcclxuICAgICAgdG9EaWN0aW9uYXJ5IDogZnVuY3Rpb24ocHJvcCwgdmFsdWUpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZHVjZShmdW5jdGlvbihhLCBkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW2RbcHJvcF1dID0gdmFsdWUgPyBkW3ZhbHVlXSA6IGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHt9KTsgIFxyXG4gICAgICB9XHJcbiAgICB9KTsgICAgICAgXHJcbiAgfShfbW9kdWxlKSk7XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBUZW1wbGF0ZXNcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKGZ1bmN0aW9uKG1vZHVsZSl7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VmFsdWUoa2V5LCBzY29wZSkgeyAgICAgICAgXHJcbiAgICAgIHJldHVybiBrZXkuc3BsaXQoL1xcLnxcXFt8XFxdLylcclxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoIGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICAgICAgICAgICAgICBpZiAoYiA9PT0gJycpIHJldHVybiBhO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gYVtiXSA9PT0gdW5kZWZpbmVkID8gKGEgPT09IHNlbGYgPyAnJyA6IHNlbGYpIDogYVtiXTtcclxuICAgICAgICAgICAgICAgIH0sIHNjb3BlIHx8IHNlbGYgKTsgICAgXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgZnVuY3Rpb24gbWVyZ2UodGVtcGxhdGUsIG8sIGtleSkge1xyXG4gICAgICBpZihzZWxmLkJTLnJlcG9ydERlZmluaXRpb24uY29udGV4dC5tZXJnZU1vZGUpe1xyXG4gICAgICAgIHJldHVybiBtZXJnZU9wdGltaXplZCh0ZW1wbGF0ZSwgbywga2V5KTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgX19yZXN1bHQgPSB0ZW1wbGF0ZS5yZXBsYWNlKC97KFtee10rKT99L2csIGZ1bmN0aW9uIChtLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKGtleS5pbmRleE9mKCc6JykgPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fZm4gPSBrZXkuc3BsaXQoJzonKTsgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX2ZuWzBdICA9IGdldFZhbHVlKF9fZm5bMF0sIG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX2ZuWzFdICA9IGdldFZhbHVlKF9fZm5bMV0sIG8pOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19mblswXShfX2ZuWzFdLCBvKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhciByICAgPSBnZXRWYWx1ZShrZXksIG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIF9fayA9IChrZXkuY29udGFpbnMoJy4nKSA/ICcnIDogJ28uJykgKyBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChyKSA9PSAnZnVuY3Rpb24nKXsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHIobyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgKHIpID09ICdmdW5jdGlvbicgPyByKG8pIDogcjtcclxuICAgICAgICAgICAgICAgICAgICB9KTsgICAgIFxyXG4gICAgICByZXR1cm4gX19yZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWVyZ2VPcHRpbWl6ZWQodGVtcGxhdGUsIG8sIGtleSkge1xyXG4gICAgICBcclxuICAgICAgaWYob1trZXldICYmIG9ba2V5XSA9PT0gJ3RlbXBsYXRlJykgcmV0dXJuIHRlbXBsYXRlOyBcclxuICAgICAgaWYob1trZXldKSByZXR1cm4gb1trZXldKG8pOyAgICAgIFxyXG4gICAgICB2YXIgX192YWx1ZXMgPSBbXTtcclxuICAgICAgdmFyIF9fcmVzdWx0ID0gdGVtcGxhdGUucmVwbGFjZSgveyhbXntdKyk/fS9nLCBmdW5jdGlvbiAobSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihrZXkuaW5kZXhPZignOicpID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2ZuID0ga2V5LnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2sgPSAoX19mblsxXS5jb250YWlucygnLicpID8gJycgOiAnby4nKSArIF9fZm5bMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fdmFsdWVzLnB1c2goJ3swfSh7MX0pICcuZm9ybWF0KF9fZm5bMF0sIF9faykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX2ZuWzBdICA9IGdldFZhbHVlKF9fZm5bMF0sIG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX2ZuWzFdICA9IGdldFZhbHVlKF9fZm5bMV0sIG8pOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19mblswXShfX2ZuWzFdLCBvKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhciByICAgPSBnZXRWYWx1ZShrZXksIG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIF9fayA9IChrZXkuY29udGFpbnMoJy4nKSA/ICcnIDogJ28uJykgKyBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChyKSA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX192YWx1ZXMucHVzaCgnezB9KG8pJy5mb3JtYXQoX19rKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByKG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fdmFsdWVzLnB1c2goJ3swfScuZm9ybWF0KF9faykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcjtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiAocikgPT0gJ2Z1bmN0aW9uJyA/IHIobykgOiByO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICBpZihrZXkgJiYgX192YWx1ZXMubGVuZ3RoID09PSAwKXtcclxuICAgICAgICBvW2tleV0gPSAndGVtcGxhdGUnO1xyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgICAgfVxyXG4gICAgICBpZihrZXkgJiYgX192YWx1ZXMubGVuZ3RoKXtcclxuICAgICAgICBfX3ZhbHVlcy5yZXZlcnNlKClcclxuICAgICAgICB2YXIgX19iID0gdGVtcGxhdGUuc3BsaXQoL3soW157XSspP30vZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKHQsIGkpeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAgaSAlIDIgPyBfX3ZhbHVlcy5wb3AoKSA6ICdcXCcnICsgdCArICdcXCcnIDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoIGZ1bmN0aW9uKGEsIHRva2VuLCBpLCBhcnIpeyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRva2VuID09PSBcIicnXCIpIHJldHVybiBhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgKyB0b2tlbiArICgoaSA8IGFyci5sZW5ndGgtMSkgPyAnICsgJyA6ICcnKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJ3JldHVybiAnKTtcclxuXHJcbiAgICAgICAgb1trZXldID0gbmV3IEZ1bmN0aW9uKCdvJywgX19iLnJlcGxhY2UoLyg/OlxcclxcbnxcXHJ8XFxuKS9nLCAnJykpO1xyXG4gICAgICAgIHJldHVybiBvW2tleV0obyk7XHJcbiAgICAgIH0gICAgICBcclxuICAgICAgcmV0dXJuIF9fcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBtb2R1bGUudGVtcGxhdGVzID0geyBnZXRWYWx1ZSAgOiBnZXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlICAgICA6IG1lcmdlIH07XHJcblxyXG4gIH0oX21vZHVsZSkpO1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gQWpheFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24obW9kdWxlKXsgIFxyXG4gICAgbW9kdWxlLmFqYXggPSB7fTtcclxuICAgIG1vZHVsZS5hcHBseShtb2R1bGUuYWpheCwge1xyXG4gICAgICBnZXQgIDogZnVuY3Rpb24gKHVybCwgY2FsbEJhY2spIHtcclxuICAgICAgICB1cmwgKz0gKHVybC5jb250YWlucygnPycpID8gJyZtcz0nIDogJz9tcz0nKSArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciB4bWwgPSB0aGlzLmNyZWF0ZVhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeG1sLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeG1sLnNldFJlcXVlc3RIZWFkZXIoJ0lmLU1vZGlmaWVkLVNpbmNlJywgJ1RodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UJyk7XHJcbiAgICAgICAgeG1sLnNldFJlcXVlc3RIZWFkZXIoJ0NhY2hlLUNvbnRyb2wnLCAnbm8tY2FjaGUnKTtcclxuICAgICAgICB4bWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkgeyBpZiAoeG1sLnJlYWR5U3RhdGUgPT0gNCkgY2FsbEJhY2soeG1sLnJlc3BvbnNlVGV4dCkgfTtcclxuICAgICAgICB4bWwuc2VuZChudWxsKTtcclxuICAgICAgfSxcclxuICAgICAgcG9zdCA6IGZ1bmN0aW9uKHVybCwgcGFyYW1zLCBjYWxsQmFjaykgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHZhciB4bWwgPSB0aGlzLmNyZWF0ZVhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeG1sLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHsgaWYgKHhtbC5yZWFkeVN0YXRlID09IDQpIGNhbGxCYWNrKHhtbC5yZXNwb25zZVRleHQpIH07XHJcbiAgICAgICAgeG1sLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ6SVNPLTg4NTktMScpO1xyXG4gICAgICAgIHhtbC5zZW5kKHBhcmFtcyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNhbGxXZWJNZXRob2QgOiBmdW5jdGlvbih1cmwsIHBhcmFtcywgY2FsbEJhY2spIHtcclxuICAgICAgICB2YXIgeG1sID0gdGhpcy5jcmVhdGVYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhtbC5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcclxuICAgICAgICB4bWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXsgaWYgKHhtbC5yZWFkeVN0YXRlID09IDQpIGNhbGxCYWNrKHhtbC5yZXNwb25zZVRleHQpIH07XHJcbiAgICAgICAgeG1sLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICAgICAgeG1sLnNlbmQocGFyYW1zKTtcclxuICAgICAgfSxcclxuICAgICAgY3JlYXRlWE1MSHR0cFJlcXVlc3QgOiBmdW5jdGlvbigpeyByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7IH1cclxuICAgIH0pOyAgXHJcbiAgfShfbW9kdWxlKSk7IFxyXG4gICAgICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gVGFiYmx5XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbiAobW9kdWxlKXtcclxuICAgICAgXHJcbiAgICB2YXIgX19jb250ZXh0O1xyXG5cclxuICAgIGZ1bmN0aW9uIF9fRXhlY3V0ZUNvZGUoY29kZSl7XHJcblxyXG4gICAgICBfX2NvbnRleHQgPSB7IHNlY3Rpb25zIDogW10sIGdyb3VwcyA6IFtdLCBkZXRhaWxzIDogW119O1xyXG5cclxuICAgICAgdmFyIF9fY3VyO1xyXG4gICAgICB2YXIgX19mdW5jICAgICAgID0gJyc7XHJcbiAgICAgIHZhciBfX2Z1bmNCb2R5ICAgPSAnJztcclxuICAgICAgdmFyIF9fc2V0U3RhdGUgID0gZmFsc2U7XHJcblxyXG4gICAgICBmdW5jdGlvbiBfX2dldCh2YWx1ZSl7XHJcbiAgICAgICAgaWYodmFsdWUgJiYgdmFsdWUudHJpbSgpLnN0YXJ0c1dpdGgoJ0AnKSl7XHJcbiAgICAgICAgICByZXR1cm4gX19jb250ZXh0W3ZhbHVlLnRyaW0oKS5zcGxpdCgnQCcpWzFdLnRyaW0oKV0gfHwgJyc7XHJcbiAgICAgICAgfWVsc2UgaWYodmFsdWUpe1xyXG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnRyaW0oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9ICBcclxuXHJcbiAgICAgIGZ1bmN0aW9uIF9fcGFyc2VfcHJvcGVydGllcyh2YWx1ZSl7XHJcbiAgICAgICAgdmFyIF9fcmVnICAgPSAgLyhbYS16QS1aMC05X1xcLV0qKVxccyo6XFxzKignW14nXSonfFteXFxzXSopL2c7XHJcbiAgICAgICAgdmFyIF9fbyAgICAgPSB7fTtcclxuICAgICAgICB2YXIgX19tYXRjaCA9IF9fcmVnLmV4ZWModmFsdWUpO1xyXG4gICAgICAgIHdoaWxlIChfX21hdGNoICE9IG51bGwpIHtcclxuICAgICAgICAgIF9fb1tfX21hdGNoWzFdLnRyaW0oKV0gPSBfX2dldChfX21hdGNoWzJdLnRyaW0oKS5yZXBsYWNlKC9eJyhbXiddKiknJC9nLCAnJDEnKSk7XHJcbiAgICAgICAgICBfX21hdGNoID0gX19yZWcuZXhlYyh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfX29cclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gX19wYXJzZUxpbmUobCwgbyl7XHJcbiAgICAgICAgaWYoIV9fZnVuYyAmJiAhbC50cmltKCkpIHJldHVybiBmdW5jdGlvbigpe307XHJcbiAgICAgICAgdmFyIF9fa2V5cyA9IC9ERUZJTkV8I3xDUkVBVEV8U0VUfEZVTkNUSU9OfEVORC87XHJcbiAgICAgICAgaWYoX19rZXlzLnRlc3QobCkpe1xyXG4gICAgICAgICAgaWYoL14jLy50ZXN0KGwpKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICAgIH1lbHNlIGlmKC9eU0VUIChcXHcuKikvLnRlc3QobCkpeyAgXHJcbiAgICAgICAgICAgIHZhciBfX3Rva2VucyA9IGwubWF0Y2goL15TRVQgKFxcdy4qKSQvKTtcclxuICAgICAgICAgICAgX19zZXRTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIF9fZnVuYyAgICAgID0gX190b2tlbnNbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICBfX2Z1bmNCb2R5ICA9ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXt9O1xyXG4gICAgICAgICAgfWVsc2UgaWYoL15GVU5DVElPTiAoXFx3LiopLy50ZXN0KGwpKXsgIFxyXG4gICAgICAgICAgICB2YXIgX190b2tlbnMgPSBsLm1hdGNoKC9eRlVOQ1RJT04gKFxcdy4qKSQvKTtcclxuICAgICAgICAgICAgX19zZXRTdGF0ZSAgPSBmYWxzZTtcclxuICAgICAgICAgICAgX19mdW5jICAgICAgID0gX190b2tlbnNbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICBfX2Z1bmNCb2R5ICAgPSAnJztcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICAgIH1lbHNlIGlmKC9eRU5ELy50ZXN0KGwpKXsgICAgICBcclxuICAgICAgICAgICAgdmFyIF9fYm9keSA9IF9fZnVuY0JvZHk7XHJcbiAgICAgICAgICAgIHZhciBfX25hbWUgPSBfX2Z1bmM7XHJcbiAgICAgICAgICAgIF9fZnVuYyA9IF9fZnVuY0JvZHkgPSAnJzsgXHJcbiAgICAgICAgICAgIGlmKF9fc2V0U3RhdGUpe1xyXG4gICAgICAgICAgICAgIF9fc2V0U3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpeyBfX2N1cltfX25hbWVdID0gX19ib2R5LnRyaW0oKTsgfVxyXG4gICAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXsgY3R4W19fbmFtZV0gPSBuZXcgRnVuY3Rpb24oJ2N0eCcsIF9fYm9keSk7IH1cclxuICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgfWVsc2UgaWYoL15ERUZJTkVcXHNcXHMqKFxcdy4qKVxccyo9XFxzKiguKikkLy50ZXN0KGwpKXtcclxuICAgICAgICAgICAgdmFyIF9fdG9rZW5zID0gbC5tYXRjaCgvXkRFRklORVxcc1xccyooW2EtekEtWjAtOV9cXC1dKilcXHMqPVxccyooLiopJC8pO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgICAgICAgdmFyIHRva2VucyA9IF9fdG9rZW5zO1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpeyBjdHhbdG9rZW5zWzFdLnRyaW0oKV0gPSB0b2tlbnNbMl0udHJpbSgpOyB9XHJcbiAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgIH1lbHNlIGlmKC9eQ1JFQVRFXFxzXFxzKihcXHcqKSAoLiopJC8udGVzdChsKSl7XHJcbiAgICAgICAgICAgIHZhciBfX3Rva2VucyA9IGwubWF0Y2goL15DUkVBVEVcXHNcXHMqKFxcdyopICguKikkLyk7XHJcbiAgICAgICAgICAgIGlmKF9fdG9rZW5zWzFdPT0nc2VjdGlvbicpe1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyBcclxuICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBfX3Rva2VucztcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpeyBcclxuICAgICAgICAgICAgICAgICAgY3R4LnNlY3Rpb25zLnB1c2goX19wYXJzZV9wcm9wZXJ0aWVzKHRva2Vuc1syXSkpOyBcclxuICAgICAgICAgICAgICAgICAgX19jdXIgPSBjdHguc2VjdGlvbnNbY3R4LnNlY3Rpb25zLmxlbmd0aCAtIDFdO31cclxuICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihfX3Rva2Vuc1sxXT09J2dyb3VwJyl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IF9fdG9rZW5zO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7IFxyXG4gICAgICAgICAgICAgICAgICBjdHguZ3JvdXBzLnB1c2goX19wYXJzZV9wcm9wZXJ0aWVzKHRva2Vuc1syXSkpO1xyXG4gICAgICAgICAgICAgICAgICBfX2N1ciA9IGN0eC5ncm91cHNbY3R4Lmdyb3Vwcy5sZW5ndGggLSAxXTt9XHJcbiAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihfX3Rva2Vuc1sxXT09J2RldGFpbCcpe1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyBcclxuICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBfX3Rva2VucztcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpe1xyXG4gICAgICAgICAgICAgICAgICBjdHguZGV0YWlscy5wdXNoKF9fcGFyc2VfcHJvcGVydGllcyh0b2tlbnNbMl0pKTtcclxuICAgICAgICAgICAgICAgICAgX19jdXIgPSBjdHguZGV0YWlsc1tjdHguZGV0YWlscy5sZW5ndGggLSAxXTt9XHJcbiAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9ZWxzZXsgdGhyb3cgbmV3IEVycm9yKCdUYWJibHkgOiBVbnJlY29nbml6ZWQgdGV4dCBhZnRlciBERUZJTkUnKX0gIFxyXG4gICAgICAgIH1lbHNleyBcclxuICAgICAgICAgIGlmKF9fZnVuYyl7XHJcbiAgICAgICAgICAgIF9fZnVuY0JvZHkgKz0gbztcclxuICAgICAgICAgICAgX19mdW5jQm9keSArPSAnXFxuJztcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGFiYmx5IDogVW5yZWNvZ25pemVkIHRleHQnKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29kZS5zcGxpdCgnXFxuJykuZm9yRWFjaChmdW5jdGlvbihsKXsgXHJcbiAgICAgICAgX19wYXJzZUxpbmUobC50cmltKCksbCkoX19jb250ZXh0KTsgXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHsgY29udGV4dCA6IF9fY29udGV4dCB9O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb2R1bGUudGFiYmx5ID0geyBleGVjdXRlIDogX19FeGVjdXRlQ29kZSB9O1xyXG5cclxuICB9KF9tb2R1bGUpKTtcclxuICAgICAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFJlcG9ydHNcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUgICAgICAgICAgICAgICAgPSB7fTsgICAgICBcclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuZ2VuZXJhdGVSZXBvcnQgPSBmdW5jdGlvbihyZCwgZGF0YSwgbWVkaWF0b3Ipe1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuYmVnaW4nIH0pO1xyXG4gICAgICB2YXIgX19yZCAgICAgID0gcmQgfHwgbW9kdWxlLlJlcG9ydEVuZ2luZS5yZDtcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBUcmFuc2Zvcm1hciBsb3MgZGF0b3NcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICB2YXIgX19kYXRhU2V0ID0gX19yZC5jb250ZXh0LnBhcnNlRGF0YSA/IF9fcmQuY29udGV4dC5wYXJzZURhdGEoX19yZCwgZGF0YSwgbWVkaWF0b3IubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkYXRhO1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQubG9nLm1lc3NhZ2UnLCB0ZXh0IDogJ0luaWNpYWxpemFuZG8uLi4nIH0pO1xyXG4gICAgICBjb25zb2xlLnRpbWUoJ1JlbmRlcicpO1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEluaWNpYWxpemFyIGZ1bmNpb25lcyBwYXJhIGxhIGdlbmVyYWNpw7NuIGRlIGNvbnRlbmlkbyBwZXJzb25hbGl6YWRvXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19pbml0Q29udGVudFByb3ZpZGVycygpe1xyXG4gICAgICAgIFtfX3JkLmNvbnRleHQuc2VjdGlvbnMsIF9fcmQuY29udGV4dC5kZXRhaWxzLCBfX3JkLmNvbnRleHQuZ3JvdXBzXVxyXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24oYSxiKXsgcmV0dXJuIGEuY29uY2F0KGIpOyB9LCBbXSlcclxuICAgICAgICAubWFwKGZ1bmN0aW9uKHMpe1xyXG4gICAgICAgICAgaWYocy52YWx1ZVByb3ZpZGVyZm4pe1xyXG4gICAgICAgICAgICBzLnZhbHVlUHJvdmlkZXIgPSBtb2R1bGUudGVtcGxhdGVzLmdldFZhbHVlKHMudmFsdWVQcm92aWRlcmZuLCBzZWxmKTsgXHJcbiAgICAgICAgICAgIGRlbGV0ZSBzLnZhbHVlUHJvdmlkZXJmbjsgICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihzLmZvb3RlclZhbHVlUHJvdmlkZXJmbil7XHJcbiAgICAgICAgICAgIHMuZm9vdGVyVmFsdWVQcm92aWRlciA9IG1vZHVsZS50ZW1wbGF0ZXMuZ2V0VmFsdWUocy5mb290ZXJWYWx1ZVByb3ZpZGVyZm4sIHNlbGYpOyBcclxuICAgICAgICAgICAgZGVsZXRlIHMuZm9vdGVyVmFsdWVQcm92aWRlcmZuOyBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKHMuaGVhZGVyVmFsdWVQcm92aWRlcmZuKXtcclxuICAgICAgICAgICAgcy5oZWFkZXJWYWx1ZVByb3ZpZGVyID0gbW9kdWxlLnRlbXBsYXRlcy5nZXRWYWx1ZShzLmhlYWRlclZhbHVlUHJvdmlkZXJmbiwgc2VsZik7IFxyXG4gICAgICAgICAgICBkZWxldGUgcy5oZWFkZXJWYWx1ZVByb3ZpZGVyZm47XHJcbiAgICAgICAgICB9ICBcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gR2VuZXJhY2nDs24gZGUgbGFzIHNlY2Npb25lcyBkZSBjYWJlY2VyYSBkZSBsYXMgYWdydXBhY2lvbmVzXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICB2YXIgX19NRVJHRV9BTkRfU0VORCA9IGZ1bmN0aW9uKHQsIHAsIGZua2V5KXsgbWVkaWF0b3Iuc2VuZChtb2R1bGUudGVtcGxhdGVzLm1lcmdlKHQsIHAsIGZua2V5KSk7IH07XHJcbiAgICAgIGZ1bmN0aW9uIF9fZ3JvdXBzSGVhZGVycygpe1xyXG4gICAgICAgIF9fZ3JvdXBzLmZvckVhY2goZnVuY3Rpb24oZywgaWkpe1xyXG4gICAgICAgICAgaWYoaWkgPCBfX2JyZWFrSW5kZXgpIHJldHVybjsgXHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuc2VjdGlvbnMuZ3JvdXAuaGVhZGVyJywgdmFsdWUgOiBnLmlkIH0pOyAgXHJcbiAgICAgICAgICBpZihnLmRlZmluaXRpb24uaGVhZGVyKSByZXR1cm4gX19NRVJHRV9BTkRfU0VORChnLmRlZmluaXRpb24uaGVhZGVyLCBnLCAnY29tcGlsZWRfaGVhZGVyZm4nKTtcclxuICAgICAgICAgIGlmKGcuZGVmaW5pdGlvbi5oZWFkZXJWYWx1ZVByb3ZpZGVyKSByZXR1cm4gbWVkaWF0b3Iuc2VuZChnLmRlZmluaXRpb24uaGVhZGVyVmFsdWVQcm92aWRlcihnKSk7IFxyXG4gICAgICAgIH0pOyAgICBcclxuICAgICAgfVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gR2VuZXJhY2nDs24gZGUgbGFzIHNlY2Npb25lcyBkZSByZXN1bWVuIGRlIGxhcyBhZ3J1cGFjaW9uZXNcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9fZ3JvdXBzRm9vdGVycyhpbmRleCl7XHJcbiAgICAgICAgdmFyIF9fZ2cgPSBfX2dyb3Vwcy5tYXAoZnVuY3Rpb24oZyl7cmV0dXJuIGc7fSk7IFxyXG4gICAgICAgIGlmKGluZGV4KSBfX2dnLnNwbGljZSgwLCBpbmRleCk7XHJcbiAgICAgICAgX19nZy5yZXZlcnNlKCkuZm9yRWFjaCggZnVuY3Rpb24oZyl7XHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuc2VjdGlvbnMuZ3JvdXAuZm9vdGVyJywgdmFsdWUgOiBnLmlkIH0pOyAgICAgICAgICBcclxuICAgICAgICAgIGlmKGcuZGVmaW5pdGlvbi5mb290ZXIpIHJldHVybiBfX01FUkdFX0FORF9TRU5EKGcuZGVmaW5pdGlvbi5mb290ZXIsIGcsICdjb21waWxlZF9mb290ZXJmbicpO1xyXG4gICAgICAgICAgaWYoZy5kZWZpbml0aW9uLmZvb3RlclZhbHVlUHJvdmlkZXIpIHJldHVybiBtZWRpYXRvci5zZW5kKGcuZGVmaW5pdGlvbi5mb290ZXJWYWx1ZVByb3ZpZGVyKGcpKTtcclxuICAgICAgICB9KTsgXHJcbiAgICAgIH0gXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEdlbmVyYWNpw7NuIGRlIGxhcyBzZWNjaW9uZXMgZGUgZGV0YWxsZVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX2RldGFpbHNTZWN0aW9ucygpe1xyXG4gICAgICAgIF9fZGV0YWlscy5mb3JFYWNoKGZ1bmN0aW9uKGQpe1xyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnNlY3Rpb25zLmRldGFpbCcsIHZhbHVlIDogZC5pZCB9KTtcclxuICAgICAgICAgIGlmKGQudGVtcGxhdGUpIHJldHVybiBfX01FUkdFX0FORF9TRU5EKGQudGVtcGxhdGUsIGQsICdjb21waWxlZGZuJylcclxuICAgICAgICAgIGlmKGQudmFsdWVQcm92aWRlcikgcmV0dXJuIG1lZGlhdG9yLnNlbmQoZC52YWx1ZVByb3ZpZGVyKGQpKTtcclxuICAgICAgICB9KSAgICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEdlbmVyYWNpw7NuIGRlIGxhcyBzZWNjaW9uZXMgZGUgdG90YWwgZ2VuZXJhbFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX2dyYW5kVG90YWxTZWN0aW9ucygpe1xyXG4gICAgICAgIF9fdG90YWxzLmZvckVhY2goZnVuY3Rpb24odCl7XHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuc2VjdGlvbnMudG90YWwnLCB2YWx1ZSA6IHQuaWQgfSk7XHJcbiAgICAgICAgICBpZih0LnRlbXBsYXRlKSByZXR1cm4gX19NRVJHRV9BTkRfU0VORCh0LnRlbXBsYXRlLCB0LCAnY29tcGlsZWRmbicpXHJcbiAgICAgICAgICBpZih0LnZhbHVlUHJvdmlkZXIpIHJldHVybiBtZWRpYXRvci5zZW5kKHQudmFsdWVQcm92aWRlcih0KSk7XHJcbiAgICAgICAgfSkgICAgICAgICAgICBcclxuICAgICAgfSBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gR2VuZXJhY2nDs24gZGUgbGFzIHNlY2Npb25lcyBkZSBjYWJlY2VyYSBkZWwgaW5mb3JtZVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX3JlcG9ydEhlYWRlclNlY3Rpb25zKCl7XHJcbiAgICAgICAgX19oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odCl7XHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuc2VjdGlvbnMuaGVhZGVyJywgdmFsdWUgOiB0IH0pO1xyXG4gICAgICAgICAgaWYodC50ZW1wbGF0ZSkgcmV0dXJuIF9fTUVSR0VfQU5EX1NFTkQodC50ZW1wbGF0ZSwgdCwgJ2NvbXBpbGVkZm4nKVxyXG4gICAgICAgICAgaWYodC52YWx1ZVByb3ZpZGVyKSByZXR1cm4gbWVkaWF0b3Iuc2VuZCh0LnZhbHVlUHJvdmlkZXIodCkpO1xyXG4gICAgICAgIH0pICAgICAgICAgICAgXHJcbiAgICAgIH0gXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEluaWNpYWxpemFyIGVsIG9iamV0byBxdWUgc2lydmUgZGUgYWN1bXVsYWRvclxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX3Jlc29sdmVTdW1tYXJ5T2JqZWN0KCl7XHJcbiAgICAgICAgdmFyIF9fc3VtbWFyeSA9IEpTT04ucGFyc2UoX19yZC5jb250ZXh0LnN1bW1hcnkgfHwgJ3t9Jyk7XHJcbiAgICAgICAgaWYoX19yZC5jb250ZXh0Lm9uSW5pdFN1bW1hcnlPYmplY3QpIHJldHVybiBfX3JkLmNvbnRleHQub25Jbml0U3VtbWFyeU9iamVjdChfX3N1bW1hcnkpOyAgICAgIFxyXG4gICAgICAgIHJldHVybiBfX3N1bW1hcnk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBfX2JyZWFrSW5kZXggPSAtMTsgXHJcblxyXG4gICAgICB2YXIgX19zdW1tYXJ5ICAgID0gX19yZXNvbHZlU3VtbWFyeU9iamVjdCgpO1xyXG4gICAgICB2YXIgX19oZWFkZXJzICAgID0gKF9fcmQuY29udGV4dC5zZWN0aW9ucyB8fCBbXSkud2hlcmUoeyB0eXBlIDogJ2hlYWRlcicgfSk7XHJcbiAgICAgIHZhciBfX3RvdGFscyAgICAgPSAoX19yZC5jb250ZXh0LnNlY3Rpb25zIHx8IFtdKS53aGVyZSh7IHR5cGUgOiAndG90YWwnIH0pO1xyXG4gICAgICB2YXIgX19mb290ZXJzICAgID0gKF9fcmQuY29udGV4dC5zZWN0aW9ucyB8fCBbXSkud2hlcmUoeyB0eXBlIDogJ2Zvb3RlcicgfSk7XHJcbiAgICAgIHZhciBfX2RldGFpbHMgICAgPSBfX3JkLmNvbnRleHQuZGV0YWlscyB8fCBbXTtcclxuICAgICAgdmFyIF9fZ3JvdXBzICAgICA9IF9fcmQuY29udGV4dC5ncm91cHMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGcsIGkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAgbmFtZSAgICAgICA6ICdHJyArIChpKzEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmQgICAgICAgICA6IF9fcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uIDogZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgICAgOiAnJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhICAgICAgIDogbW9kdWxlLmNsb25lKF9fc3VtbWFyeSksICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdCA6IGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fayA9IHZhbHVlW3RoaXMuZGVmaW5pdGlvbi5rZXldLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX0d4ID0gc2VsZi5CU1t0aGlzLm5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LmFsbFtfX2tdID0gX19HeC5hbGxbX19rXSB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5hbGxbX19rXS5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5yZWNvcmRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX19yZXN1bWUgPT09IGZhbHNlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX19yZXN1bWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuY29weSh2YWx1ZSwgdGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9fcmVzdW1lID0gT2JqZWN0LmtleXModGhpcy5kYXRhKS5sZW5ndGggPiAwKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuY29weSh2YWx1ZSwgdGhpcy5kYXRhKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtICA6IGZ1bmN0aW9uKHZhbHVlKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2sgPSB2YWx1ZVt0aGlzLmRlZmluaXRpb24ua2V5XS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19HeCA9IHNlbGYuQlNbdGhpcy5uYW1lXTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3guYWxsW19fa10gPSBfX0d4LmFsbFtfX2tdIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LmFsbFtfX2tdLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LnJlY29yZENvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX19yZXN1bWUgPT09IGZhbHNlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuc3VtKHZhbHVlLCB0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0IDogZnVuY3Rpb24odmFsdWUpeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVbdGhpcy5kZWZpbml0aW9uLmtleV0gPT0gdGhpcy5jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSB8fCBbXTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBzZWxmLkJTID0geyByZXBvcnREZWZpbml0aW9uIDogX19yZCwgbWVkaWF0b3IgOiBtZWRpYXRvciB9OyAgICAgICAgICAgICAgXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gT3JkZW5hciBsb3MgZGF0b3NcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBpZihfX3JkLmNvbnRleHQuaXRlcmF0ZWZuKXtcclxuICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQubG9nLm1lc3NhZ2UnLCB0ZXh0IDogJ0luaWNpYWxpemFuZG8gZWxlbWVudG9zLi4uJyB9KTtcclxuICAgICAgICBfX2RhdGFTZXQuZm9yRWFjaChfX3JkLmNvbnRleHQuaXRlcmF0ZWZuKTtcclxuICAgICAgfVxyXG4gICAgICBpZihfX3JkLmNvbnRleHQub3JkZXJCeSl7XHJcbiAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmxvZy5tZXNzYWdlJywgdGV4dCA6ICdPcmRlbmFuZG8gZGF0b3MuLi4nIH0pO1xyXG4gICAgICAgIF9fZGF0YVNldC5zb3J0QnkoX19yZC5jb250ZXh0Lm9yZGVyQnksIGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEluaWNpYWxpemFyXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgc2VsZi5CUyA9IHsgcmVjb3JkQ291bnQgICAgICA6IDAsIFxyXG4gICAgICAgICAgICAgICAgICBHMCAgICAgICAgICAgICAgIDogbW9kdWxlLmNsb25lKF9fc3VtbWFyeSksXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFTZXQgICAgICAgICAgOiBfX2RhdGFTZXQsXHJcbiAgICAgICAgICAgICAgICAgIHJlcG9ydERlZmluaXRpb24gOiBfX3JkLCBcclxuICAgICAgICAgICAgICAgICAgbWVkaWF0b3IgICAgICAgICA6IG1lZGlhdG9yIH07XHJcbiAgICAgIF9fZ3JvdXBzLmZvckVhY2goIGZ1bmN0aW9uKGcsIGkpeyAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBnLmN1cnJlbnQgPSAoX19kYXRhU2V0ICYmIF9fZGF0YVNldFswXSkgPyBfX2RhdGFTZXRbMF1bZy5kZWZpbml0aW9uLmtleV0gOiAnJztcclxuICAgICAgICBzZWxmLkJTW2cubmFtZV0gPSB7IHJlY29yZENvdW50IDogMCwgYWxsIDoge30gfTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmKF9fcmQuY29udGV4dC5vblN0YXJ0Zm4pIF9fcmQuY29udGV4dC5vblN0YXJ0Zm4oc2VsZi5CUyk7XHJcbiAgICAgIF9faW5pdENvbnRlbnRQcm92aWRlcnMoKTtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnJlbmRlci5yb3dzJyB9KTtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmxvZy5tZXNzYWdlJywgdGV4dCA6ICdHZW5lcmFuZG8gaW5mb3JtZS4uLicgfSk7XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBDYWJlY2VyYXMgZGVsIGluZm9ybWVcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIF9fcmVwb3J0SGVhZGVyU2VjdGlvbnMoKTtcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIENhYmVjZXJhcyBpbmljaWFsZXNcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGlmKF9fZGF0YVNldC5sZW5ndGggPiAwKSBfX2dyb3Vwc0hlYWRlcnMoKTsgXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBJdGVyYXIgc29icmUgbG9zIGVsZW1lbnRvc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgX19kYXRhU2V0LmZvckVhY2goZnVuY3Rpb24ociwgaSl7IFxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBQcm9jZXNhciBlbCBlbGVtZW50b1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgICAgICBcclxuICAgICAgICBzZWxmLkJTLnJlY29yZENvdW50Kys7XHJcbiAgICAgICAgc2VsZi5CUy5pc0xhc3RSb3cgICAgICAgID0gX19kYXRhU2V0Lmxlbmd0aCA9PT0gc2VsZi5CUy5yZWNvcmRDb3VudDtcclxuICAgICAgICBzZWxmLkJTLmlzTGFzdFJvd0luR3JvdXAgPSBzZWxmLkJTLmlzTGFzdFJvdztcclxuICAgICAgICBzZWxmLkJTLnBlcmNlbnQgICAgICA9IChzZWxmLkJTLnJlY29yZENvdW50L19fZGF0YVNldC5sZW5ndGgpICogMTAwOyAgXHJcbiAgICAgICAgc2VsZi5CUy5wcmV2aW91cyAgICAgPSBzZWxmLkJTLmRhdGEgfHwgcjtcclxuICAgICAgICBzZWxmLkJTLmRhdGEgICAgICAgICA9IHI7IFxyXG4gICAgICAgIF9fZ3JvdXBzLmZvckVhY2goIGZ1bmN0aW9uKGcsIGkpeyBcclxuICAgICAgICAgIHNlbGYuQlNbZy5uYW1lXS5kYXRhICA9IE9iamVjdC5jcmVhdGUoZy5kYXRhKTtcclxuICAgICAgICB9KTsgXHJcbiAgICAgICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5zdW0ociwgc2VsZi5CUy5HMCk7ICAgICAgICBcclxuICAgICAgICBpZihfX3JkLmNvbnRleHQub25Sb3dmbikgX19yZC5jb250ZXh0Lm9uUm93Zm4oc2VsZi5CUyk7XHJcbiAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgIDogJ3JlcG9ydC5yZW5kZXIucm93JywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgIDogc2VsZi5CUy5wZXJjZW50LnRvRml4ZWQoMSkgKyAnICUnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgOiBzZWxmLkJTLnBlcmNlbnQgfSk7XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIERldGVybWluYXIgc2kgaGF5IGNhbWJpbyBlbiBhbGd1bmEgZGUgbGFzIGNsYXZlcyBkZSBhZ3J1cGFjacOzblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBpZihfX2dyb3Vwcy5ldmVyeSggZnVuY3Rpb24oZyl7IHJldHVybiBnLnRlc3QocikgfSkpe1xyXG4gICAgICAgICAgX19ncm91cHMuZm9yRWFjaCggZnVuY3Rpb24oZyl7IGcuc3VtKHIpOyB9KTsgICAgICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIF9fZ3JvdXBzLnNvbWUoIGZ1bmN0aW9uKGcsIGkpeyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCFnLnRlc3Qocikpe1xyXG4gICAgICAgICAgICAgIF9fYnJlYWtJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAvLyBQaWVzIGRlIGdydXBvIGRlIGxvcyBxdWUgaGFuIGNhbWJpYWRvXHJcbiAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICBfX2dyb3Vwc0Zvb3RlcnMoX19icmVha0luZGV4KTtcclxuICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgIC8vIEFjdHVhbGl6YXIgbG9zIGdydXBvc1xyXG4gICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgX19ncm91cHMuZm9yRWFjaCggZnVuY3Rpb24oZ3J1cG8sIGlpKXsgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGlpID49IF9fYnJlYWtJbmRleCl7XHJcbiAgICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgLy8gSW5pY2lhbGl6YXIgbG9zIHF1ZSBoYW4gY2FtYmlhZG9cclxuICAgICAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICBncnVwby5pbml0KHIpXHJcbiAgICAgICAgICAgICAgICAgIF9fYnJlYWtJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAvLyBBY3VtdWxhciB2YWxvcmVzIGRlIGxvcyBxdWUgc2lndWVuIGlndWFsXHJcbiAgICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgZ3J1cG8uc3VtKHIpO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIC8vIE5vdGlmaWNhciBkZWwgZXZlbnRvIG9uR3JvdXBDaGFuZ2VcclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICBfX2dyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uKGcpe1xyXG4gICAgICAgICAgICBnLmN1cnJlbnQgPSByW2cuZGVmaW5pdGlvbi5rZXldO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZihfX3JkLmNvbnRleHQub25Hcm91cENoYW5nZWZuKSBfX3JkLmNvbnRleHQub25Hcm91cENoYW5nZWZuKHNlbGYuQlMpOyAgICAgICAgICBcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlICA6ICdyZXBvcnQuc2VjdGlvbnMuZ3JvdXAuY2hhbmdlJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgOiAnX19ncm91cHMnIH0pO1xyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgLy8gQ2FiZWNlcmFzXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICBfX2dyb3Vwc0hlYWRlcnMoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBEZXRlcm1pbmFyIHNpIGVzdGUgZXMgZWwgw7psdGltbyBlbGVtZW50byBkZSBsYSBhZ3J1cGFjacOzbiBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT07XHJcbiAgICAgICAgaWYoX19ncm91cHMubGVuZ3RoICYmICFzZWxmLkJTLmlzTGFzdFJvdyApe1xyXG4gICAgICAgICAgdmFyIF9fbmV4dCAgICAgICAgICAgICAgID0gX19kYXRhU2V0W3NlbGYuQlMucmVjb3JkQ291bnRdOyAgICAgICAgICBcclxuICAgICAgICAgIHNlbGYuQlMuaXNMYXN0Um93SW5Hcm91cCA9ICEgX19ncm91cHMuZXZlcnkoIGZ1bmN0aW9uKGcpe1xyXG4gICAgICAgICAgICB2YXIgX19rID0gZy5kZWZpbml0aW9uLmtleTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fbmV4dFtfX2tdID09PSBzZWxmLkJTLmRhdGFbX19rXTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBTZWNjaW9uZXMgZGUgZGV0YWxsZVxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIF9fZGV0YWlsc1NlY3Rpb25zKCkgICAgICAgICAgICBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZihfX2RhdGFTZXQubGVuZ3RoID4gMCl7IFxyXG4gICAgICAgIHNlbGYuQlMucHJldmlvdXMgPSBzZWxmLkJTLmRhdGE7XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBQaWVzIGRlIGdydXBvXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBfX2dyb3Vwc0Zvb3RlcnMoKTtcclxuICAgICAgfVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gVG90YWwgZ2VuZXJhbFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgX19ncmFuZFRvdGFsU2VjdGlvbnMoKTtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnJlbmRlci5lbmQnIH0pO1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuZW5kJyB9KTtcclxuICAgICAgbWVkaWF0b3IuZmx1c2goKTtcclxuICAgICAgY29uc29sZS50aW1lRW5kKCdSZW5kZXInKTtcclxuICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5jb3B5ICAgID0gZnVuY3Rpb24ocywgZCl7IE9iamVjdC5rZXlzKGQpLm1hcChmdW5jdGlvbihrKXsgZFtrXSA9IHNba107fSk7fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5zdW0gICAgID0gZnVuY3Rpb24ocywgZCl7IE9iamVjdC5rZXlzKGQpLm1hcChmdW5jdGlvbihrKXsgZFtrXSArPSBzW2tdO30pO30gICBcclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuY29tcHV0ZSA9IGZ1bmN0aW9uKGRzLCBuYW1lKXsgcmV0dXJuIGRzLnJlZHVjZSggZnVuY3Rpb24odCwgbyl7IHJldHVybiB0ICsgb1tuYW1lXTsgfSwgMC4wKTsgfVxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5ncm91cCAgID0gZnVuY3Rpb24oYSwgYyl7XHJcblx0ICAgIHZhciBkcyA9IGE7XHJcblx0ICAgIHZhciBfX2YgPSBmdW5jdGlvbihrLCB0KXtcclxuXHQgICAgICBkcy5kaXN0aW5jdCggZnVuY3Rpb24odil7IHJldHVybiB2W2tdOyB9KVx0ICAgICAgICAgICAgXHJcblx0ICAgICAgICAuZm9yRWFjaCAoIGZ1bmN0aW9uKHYpeyBjW3ZdID0gZHMucmVkdWNlKCBmdW5jdGlvbihwLCBjLCBpLCBhKXsgcmV0dXJuIChjW2tdPT12KSA/IHAgKyBjW3RdIDogcDsgfSwgMC4wKTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIF9fZjtcdCAgICAgICAgICAgXHJcblx0ICAgIH1cclxuXHQgICAgcmV0dXJuIF9fZjtcclxuICAgIH1cclxuIFxyXG4gIH0pKF9tb2R1bGUpO1xyXG5cclxufShfX21vZHVsZSwgJ1BvbCcpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9fbW9kdWxlLlBvbDsiLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGAgIFxyXG48ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyIHczLW1hcmdpbi1ib3R0b21cIj5cclxuICA8aDE+U29icmUgTm90YXMgQXBwPC9oMT5cclxuICA8cCBzdHlsZT1cInRleHQtaW5kZW50OjFlbTtcIj5cclxuICAgIE5vdGFzIEFwcCBlcyB1bmEgcHJ1ZWJhIGRlIGNvbmNlcHRvIGRlIGxvIHF1ZSBwb2Ryw61hIHNlciB1biA8c3BhbiBjbGFzcz1cInczLWJvbGQgdzMtaXRhbGljXCI+ZnJhbWV3b3JrPC9zcGFuPiBcclxuICAgIHNlbmNpbGxvIGNvbiBlbCBjdWFsIGRlc2Fycm9sbGFyIGFwbGljYWNpb25lcyBiYXNhZGFzIMO6bmljYW1lbnRlIGVuIDxzcGFuIGNsYXNzPVwidzMtYm9sZFwiPkhUTUw1PC9zcGFuPiB5IDxzcGFuIGNsYXNzPVwidzMtYm9sZFwiPkphdmFTY3JpcHQ8L3NwYW4+XHJcbiAgICBxdWUgc2VhbiBzdWJjZXB0aWJsZXMgZGUgaW5zdGFsYXJzZSBlbiBkaXNwb3NpdGl2b3MgbcOzdmlsZXMgY29tbyB1bmEgYXBsaWNhY2nDs24gPHNwYW4gY2xhc3M9XCJ3My1ib2xkIHczLWl0YWxpY1wiPlBXQTwvc3Bhbj4uIHNpbiB1dGlsaXphciBuaW5ndW5vIGRlIGxvcyA8c3BhbiBjbGFzcz1cInczLWJvbGQgdzMtaXRhbGljXCI+ZnJhbWV3b3Jrczwvc3Bhbj4gZXhpc3RlbnRlcyBjb21vIHB1ZWRlbiBzZXIgQW5ndWxhciwgUmVhY3QgbyBWdWUuanMuXHJcbiAgPC9wPlxyXG4gIDx1bCBjbGFzcz1cInczLXVsIHczLWJvcmRlclwiPlxyXG4gICAgPGxpPjxoMj5SZWZlcmVuY2lhczwvaDI+PC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9lcy53aWtpcGVkaWEub3JnL3dpa2kvU2luZ2xlLXBhZ2VfYXBwbGljYXRpb25cIiB0YXJnZXQ9XCJfYmxhbmtcIj5TUEEgKFNpbmdsZS1wYWdlIGFwcGxpY2F0aW9uKTwvYT48L2xpPlxyXG4gICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2VzLndpa2lwZWRpYS5vcmcvd2lraS9Qcm9ncmVzc2l2ZV9XZWJfQXBwc1wiIHRhcmdldD1cIl9ibGFua1wiPlBXQSAoUHJvZ3Jlc3NpdmUgV2ViIEFwcHMpPC9hPjwvbGk+XHJcbiAgPC91bD5cclxuICA8cCBzdHlsZT1cInRleHQtaW5kZW50OjFlbTtcIj5cclxuICAgIEVuIGVsIGRlc2Fycm9sbG8gZGUgZXN0YSBhcGxpY2Fpw7NuIG5vIHNlIGhhbiB1dGlsaXphZG8gbmluZ3VubyBkZSBsb3MgPHNwYW4gY2xhc3M9XCJ3My1ib2xkIHczLWl0YWxpY1wiPmZyYW1ld29ya3M8L3NwYW4+IGV4aXN0ZW50ZXMgY29tbyBwdWVkZW4gc2VyIEFuZ3VsYXIsIFJlYWN0IG8gVnVlLmpzLlxyXG4gIDwvcD5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWJvdHRvbSB3My1jZW50ZXJcIj5cclxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBhYm91dC1idG4tYmFjayBjbGFzcz1cInczLWJ1dHRvbiB3My1ibGFja1wiPlZvbHZlcjwvYnV0dG9uPlxyXG48L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaW5uZXJIVE1MIDogX190ZW1wbGF0ZS5mb3JtYXQodGhpcyksIFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwb2wuYnVpbGQoJ2RpdicsIG9wdGlvbnMpO1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgOiBjb250YWluZXIgPT4ge1xyXG4gICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignW2Fib3V0LWJ0bi1iYWNrXScpXHJcbiAgICAgICAgICAgICAgIC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIGhpc3RvcnkuYmFjaygpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGAgIFxyXG4gIDxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtY2VudGVyXCI+XHJcbiAgICA8aDE+UMOhZ2luYSBwcmluY2lwYWw8L2gxPlxyXG4gICAgPHA+QWxtYWNlbmEgdHVzIG5vdGFzIGVuIGVsIG3Ds3ZpbCEhITwvcD5cclxuICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1nL2xvZ28ucG5nXCIgYWx0PVwiQ2FyXCIgc3R5bGU9XCJ3aWR0aDogNTAlO1wiPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgc3R5bGU9XCJoZWlnaHQ6MjBweDtcIj48L2RpdlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICByZXR1cm4ge1xyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLmZvcm1hdCh0aGlzKSxcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcG9sLmJ1aWxkKCdkaXYnLCBvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkIDogY29udGFpbmVyID0+IHtcclxuXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCLvu79pbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYVwiO1xyXG5pbXBvcnQgRGJXcmFwcGVyU2VydmljZSBmcm9tIFwiLi4vbGliL2RiV3JhcHBlci5zZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBOT1RBU19EQVRBQkFTRSAgID0gJ25vdGFzLWFwcC5kYic7IFxyXG5jb25zdCBOT1RBU19UQUJMRV9OQU1FID0gJ25vdGFzJztcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgXHJcbjxkaXYgY2xhc3M9XCJ3My1iYXIgdzMtY2VudGVyXCI+XHJcbiAgPGJ1dHRvbiBidG4tYWRkLW5vdGUgY2xhc3M9XCJ3My1idXR0b24gdzMtZGFyay1ncmV5IHczLW1hcmdpblwiPkNyZWFyIHVuYSBub3RhPC9idXR0b24+XHJcbjwvZGl2PlxyXG48ZGl2IG5vdGFzLWNvbnRhaW5lciBjbGFzcz1cInczLW1hcmdpbi1ib3R0b20gdzMtbWFyZ2luLXRvcFwiIHN0eWxlPVwicGFkZGluZzowXCI+XHJcbjwvZGl2PmA7XHJcblxyXG5jb25zdCBfX2l0ZW1fdGVtcGxhdGUgPWBcclxuPGRpdiBjbGFzcz1cInczLXBhbmVsIHczLWJvcmRlciB3My1yb3VuZFwiIHN0eWxlPVwicGFkZGluZzozcHhcIiBpZD1cIm5vdGUte2tleX1cIj5cclxuICA8aGVhZGVyIGNsYXNzPVwidzMtY29udGFpbmVyIHczLWxpZ2h0LWdyZXlcIiBzdHlsZT1cInBhZGRpbmc6MFwiPlxyXG4gICAgPGg0IGJ0bi1leHBhbmQ+PHNwYW4+Kzwvc3Bhbj4ge3RpdGxlfTwvaDQ+XHJcbiAgPC9oZWFkZXI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJ3My1jb250YWluZXJcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPlxyXG4gICAgPHNwYW4+e2RhdGV9PC9zcGFuPlxyXG4gICAgPHA+e3RleHR9PC9wPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJ3My1iYXIgdzMtY2VudGVyXCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwidzMtYnV0dG9uIHczLWRhcmstZ3JleSB3My1tYXJnaW5cIj5FbGltaW5hcjwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICByZXR1cm4ge1xyXG4gICAgZGIgICAgIDogJycsXHJcbiAgICByb3dzICAgOiBbXSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaW5uZXJIVE1MIDogX190ZW1wbGF0ZS5mb3JtYXQodGhpcyksXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnZGl2Jywgb3B0aW9ucyk7IFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tidG4tYWRkLW5vdGVdJylcclxuICAgICAgICAgICAgICAgLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgdmFyIF9fcGF5bG9hZCA9IHsga2V5ICAgOiBuZXcgRGF0ZSgpLnZhbHVlT2YoKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSAgOiAnMjEvMDIvMjAyMCcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlIDogJ051ZXZhIG5vdGEnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICA6ICdUZXh0byBkZSBsYSBub3RhJyB9O1xyXG4gICAgICAgICAgICAgICAgIHNhdmVOb3RlLmFwcGx5KHRoaXMsIFtfX3BheWxvYWRdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oIG5vdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvd3MucHVzaChub3RhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBfX3JlbmRlcigpOyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgdmFyIF9fbG9hZERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kYlxyXG4gICAgICAgICAgICAucmVhZEFsbChOT1RBU19UQUJMRV9OQU1FKVxyXG4gICAgICAgICAgICAudGhlbiggdmFsdWVzID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnJvd3MgPSB2YWx1ZXM7XHJcbiAgICAgICAgICAgICAgX19yZW5kZXIoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB2YXIgX19yZW5kZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IF9fY29udGFpbmVyID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tub3Rhcy1jb250YWluZXJdJyk7XHJcbiAgICAgICAgX19jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy5yb3dzXHJcbiAgICAgICAgICAgIC5tYXAoIG5vdGUgPT4gcG9sLmJ1aWxkKCdkaXYnLCB7IGlubmVySFRNTCA6IF9faXRlbV90ZW1wbGF0ZS5mb3JtYXQobm90ZSkgfSkpXHJcbiAgICAgICAgICAgIC5tYXAoIGUgPT4gZS5maXJzdEVsZW1lbnRDaGlsZCAgKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCggZSA9PiBfX2NvbnRhaW5lci5hcHBlbmRDaGlsZChlKSApO1xyXG5cclxuICAgICAgcG9sLnRvQXJyYXkoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tidG4tZXhwYW5kXScpKVxyXG4gICAgICAgICAuZm9yRWFjaChoNCA9PiB7XHJcbiAgICAgICAgICAgaDQub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgIGxldCBfX3N0eWxlID0gaDQucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGU7XHJcbiAgICAgICAgICAgICBpZihfX3N0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKXtcclxuICAgICAgICAgICAgICAgIF9fc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgX19zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5kYiA9IG5ldyBEYldyYXBwZXJTZXJ2aWNlKE5PVEFTX0RBVEFCQVNFKTtcclxuICAgICAgdGhpcy5kYlxyXG4gICAgICAgICAgLm9wZW5EYigpXHJcbiAgICAgICAgICAudGhlbiggZGIgPT4ge1xyXG4gICAgICAgICAgICBfX2xvYWREYXRhKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVOb3RlKHRhcmdldCkge1xyXG4gIHRoaXMuZGJcclxuICAgICAgLmRlbGV0ZShOT1RBU19UQUJMRV9OQU1FLCBfX3RhcmdldC5rZXkpXHJcbiAgICAgIC50aGVuKCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yb3dzLnJlbW92ZShfX3RhcmdldCk7XHJcbiAgICAgICAgXHJcbiAgICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlTm90ZShwYXlsb2FkKSB7XHJcbiAgcmV0dXJuIHRoaXMuZGJcclxuICAgICAgICAgICAgIC5zYXZlKE5PVEFTX1RBQkxFX05BTUUsIHBheWxvYWQpO1xyXG5cclxuICAgICAgICAgICAgLy8udGhlbiggZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIC8vICB0aGlzLnJvd3MucHVzaChkYXRhKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy99KS5jYXRjaCggZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAvLyAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAvL30pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=