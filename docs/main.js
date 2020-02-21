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
          minHeight : '440px',
          padding   : '0'
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
    sencillo con el cual desarrollar aplicaciones <span class="w3-bold w3-italic">SPA</span> basadas únicamente en <span class="w3-bold">HTML5</span> y <span class="w3-bold">JavaScript</span>.
  </p>
  <p style="text-indent:1em;">
    Estas aplicaciones serían subceptibles de ser instaladas en dispositivos móviles como una <span class="w3-bold w3-italic">PWA</span>.
  </p>
  <ul class="w3-ul w3-border">
    <li><h2>Referencias</h2></li>
    <li><a href="https://es.wikipedia.org/wiki/Single-page_application" target="_blank">SPA (Single-page application)</a></li>
    <li><a href="https://es.wikipedia.org/wiki/Progressive_Web_Apps" target="_blank">PWA (Progressive Web Apps)</a></li>
  </ul>
  <p style="text-indent:1em;">
    Para el desarrollo de esta aplicación no se han utilizado ninguno de los <span class="w3-bold w3-italic">frameworks</span> existentes como pueden ser Angular, React o Vue.js.
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
  <div class="w3-container w3-center" style="padding-top:20%;">
    <img src="./assets/img/logo.png" alt="Car" style="width: 75%;">
    <p>La app que te permite almacenar todas tus notas en el móvil!!!</p>
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
<div notas-container class="" style="padding:0; margin-bottom:70px;">
</div>
<button btn-add-note class="w3-button w3-black w3-circle">＋</button>
`;

const __item_template =`
<div style="padding:5px 0" id="note-{key}">

  <div class="w3-container w3-light-grey" style="padding:5px">
    <div btn-expand><b>{title}</b><i>+</i></div>
  </div>

  <div class="w3-container" style="display:none; style="padding:5px">
    <div class="w3-border-bottom" style="text-align:right">{date}</div>
    <p class="w3-border w3-pale-yellow" style="padding:5px;min-height: 4em;margin:5px 0">{text}</p>

    <div class="w3-center">
      <button type="button" id="delete-{key}" btn-item-delete class="w3-button w3-xlarge fa fa-trash"></button>
    </div>
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

      var __delete = (target) => {
        console.log(target.id);
        let __id = target.id.split('-')[1];
        let __element = document.getElementById('note-{0}'.format(__id));
        this.rows.remove( this.rows.where( { key : __id })[0]);
        __element.parentNode.removeChild(__element);       
      }

      var __render = () => {
        let __container = container.querySelector('[notas-container]');
        __container.innerHTML = '';
        this.rows
            .map( note => _lib_mapa__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', { innerHTML : __item_template.format(note) }))
            .map( e => e.firstElementChild  )
            .forEach( e => {
              e.querySelector('[btn-item-delete]')
               .onclick = (event) => {
                 __delete(event.target)
               }
              __container.appendChild(e)
            });

      _lib_mapa__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(container.querySelectorAll('[btn-expand]'))
         .forEach(h4 => {
           h4.onclick = () => {
             let __style = h4.parentNode.nextElementSibling.style;
             if(__style.display == 'none'){
                __style.display = '';
                h4.querySelector('i').textContent = '-';
             } else {
               __style.display = 'none';
               h4.querySelector('i').textContent = '+';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW4tY29udGVudC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVudS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvZGJXcmFwcGVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9tYXBhLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hYm91dC5wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ob21lLnBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2xpc3QucGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2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aW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYCAgXHJcbiAgPHA+e3RleHR9PC9wPlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICByZXR1cm4ge1xyXG4gICAgdGV4dCAgOiAnwqkgUmFmYWVsIENhc3RybyBHw7NtZXosIDIwMjAnLFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpZCAgICAgICAgOiBcImFwcEZvb3RlclwiLFxyXG4gICAgICAgIGlubmVySFRNTCA6IF9fdGVtcGxhdGUuZm9ybWF0KHRoaXMpLFxyXG4gICAgICAgIGNsYXNzTmFtZSA6ICd3My1jb250YWluZXIgdzMtdGVhbCB3My1jZW50ZXInXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnZm9vdGVyJywgb3B0aW9ucyk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24ocGFyZW50KXtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGBcclxuICA8aDE+e3RpdGxlfTwvaDE+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gIHJldHVybiB7XHJcbiAgICB0aXRsZSAgOiAnTm90YXMgQXBwJyxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaWQgICAgICAgIDogJ2FwcEhlYWRlcicsXHJcbiAgICAgICAgaW5uZXJIVE1MIDogX190ZW1wbGF0ZS5mb3JtYXQodGhpcyksXHJcbiAgICAgICAgY2xhc3NOYW1lIDogJ3czLWNvbnRhaW5lciB3My10ZWFsJ1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwb2wuYnVpbGQoJ2hlYWRlcicsIG9wdGlvbnMpO1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKHBhcmVudCl7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRleHQgIDogJycsXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7IFxyXG4gICAgICAgIGlkICAgICAgICA6IFwiYXBwLWNvbnRlbnQtY29udGFpbmVyXCIsXHJcbiAgICAgICAgaW5uZXJIVE1MIDogX190ZW1wbGF0ZS5mb3JtYXQodGhpcyksXHJcbiAgICAgICAgY2xhc3NOYW1lIDogJ3czLWNvbnRhaW5lcicsXHJcbiAgICAgICAgc3R5bGUgICAgIDogeyBcclxuICAgICAgICAgIG1pbkhlaWdodCA6ICc0NDBweCcsXHJcbiAgICAgICAgICBwYWRkaW5nICAgOiAnMCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnc2VjdGlvbicsIG9wdGlvbnMpO1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKHBhcmVudCl7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgICBcclxuICA8YSBocmVmPVwiXCIgcm91dGUtbGluayBjbGFzcz1cInczLWJhci1pdGVtIHczLWJ1dHRvblwiPkluaWNpbzwvYT5cclxuICA8YSBocmVmPVwibGlzdFwiIHJvdXRlLWxpbmsgY2xhc3M9XCJ3My1iYXItaXRlbSB3My1idXR0b25cIj5Ob3RhczwvYT5cclxuICA8YSBocmVmPVwiYWJvdXRcIiByb3V0ZS1saW5rIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uIHczLXJpZ2h0XCI+PzwvYT5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlkICAgICA6ICdtZW51LmNvbXBvbmVudC5yZWYnLFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpZCAgICAgICAgOiBcImFwcE1lbnVcIixcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLmZvcm1hdCh0aGlzKSxcclxuICAgICAgICBjbGFzc05hbWUgOiAndzMtYmFyIHczLWJsYWNrJ1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwb2wuYnVpbGQoJ25hdicsIG9wdGlvbnMpO1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKHBhcmVudCl7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHBvbCBmcm9tIFwiLi9saWIvbWFwYS5qc1wiO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ29tcG9uZW50c1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuaW1wb3J0IGhlYWRlckNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IGZvb3RlckNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3Rlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IGNvbnRlbnRDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9tYWluLWNvbnRlbnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCBtZW51Q29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudS5jb21wb25lbnRcIjtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBhZ2VzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSBcIi4vdmlld3MvaG9tZS5wYWdlXCI7XHJcbmltcG9ydCBsaXN0UGFnZSBmcm9tIFwiLi92aWV3cy9saXN0LnBhZ2VcIjtcclxuaW1wb3J0IGFib3V0UGFnZSBmcm9tIFwiLi92aWV3cy9hYm91dC5wYWdlXCI7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBSb3V0ZXNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IGNvbXBvbmVudHMgPSAgWyBcclxuICBoZWFkZXJDb21wb25lbnQoKSxcclxuICBtZW51Q29tcG9uZW50KCksXHJcbiAgY29udGVudENvbXBvbmVudCgpLFxyXG4gIGZvb3RlckNvbXBvbmVudCgpXHJcbl07XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWaWV3c1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3Qgdmlld3MgPSB7IFxyXG4gICdob21lJyAgICA6IGhvbWVQYWdlLFxyXG4gICdsaXN0JyAgICA6IGxpc3RQYWdlLFxyXG4gICdhYm91dCcgICA6IGFib3V0UGFnZSBcclxufTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJbml0IEFwcFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKGZ1bmN0aW9uKCl7XHJcblxyXG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwQ29udGVudCcpO1xyXG4gIGNvbXBvbmVudHMuZm9yRWFjaCggYyA9PiB7XHJcbiAgICByb290LmFwcGVuZENoaWxkKGMucmVuZGVyKCkpO1xyXG4gICAgaWYoYy5tb3VudGVkKSBjLm1vdW50ZWQocm9vdCk7IFxyXG4gIH0pO1xyXG5cclxuICBwb2wudG9BcnJheShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbcm91dGUtbGlua10nKSlcclxuICAgICAuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbihlKXtcclxuICAgICAgICAgIGxldCBwYXRoTmFtZSA9IGUudGFyZ2V0LnBhdGhuYW1lO1xyXG4gICAgICAgICAgd2luZG93Lmhpc3RvcnlcclxuICAgICAgICAgICAgICAgIC5wdXNoU3RhdGUoe30sIHBhdGhOYW1lLCBsb2NhdGlvbi5vcmlnaW4gKyBwYXRoTmFtZSk7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzaG93Q29udGVudCgpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gIFxyXG4gICAgIH0pO1xyXG5cclxufSkoKTtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFN5bmMgY29udGVudFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcC1jb250ZW50LWNvbnRhaW5lcicpO1xyXG5sZXQgY3VycmVudFZpZXc7XHJcbmZ1bmN0aW9uIHNob3dDb250ZW50KCl7XHJcbiAgbGV0IHJvdXRlID0gd2luZG93LmxvY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgLmhyZWZcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShkb2N1bWVudC5iYXNlVVJJLCAnJyk7XHJcbiAgbGV0IHZpZXdfcmVmID0gdmlld3Nbcm91dGVdIHx8IHZpZXdzLmhvbWU7XHJcbiAgaWYoIWN1cnJlbnRWaWV3IHx8IGN1cnJlbnRWaWV3ICE9IHZpZXdfcmVmKSB7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7ICAgIFxyXG4gICAgY3VycmVudFZpZXcgPSB2aWV3X3JlZjtcclxuICAgIGxldCB2aWV3X2luc3RhbmNlID0gY3VycmVudFZpZXcoKTtcclxuICAgIGlmKHZpZXdfaW5zdGFuY2UuaW5pdCkgdmlld19pbnN0YW5jZS5pbml0KCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodmlld19pbnN0YW5jZS5yZW5kZXIoKSk7XHJcbiAgICBpZih2aWV3X2luc3RhbmNlLm1vdW50ZWQpIHZpZXdfaW5zdGFuY2UubW91bnRlZChjb250YWluZXIpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbnNob3dDb250ZW50KCk7XHJcblxyXG53aW5kb3cub25wb3BzdGF0ZSA9IHNob3dDb250ZW50O1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU2VydmljZVdvcmtlclxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+e1xyXG5cclxuICBpZignc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKXtcclxuICAgIHRyeSB7XHJcbiAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNlV29ya2VyLmpzJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSBXb3JrZXIgUmVnaXN0ZXJlZFwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSBXb3JrZXIgUmVnaXN0cmF0aW9uIEZhaWxlZFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59KTsiLCLvu79pbXBvcnQgcG9sIGZyb20gXCIuL21hcGEuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERiV3JhcHBlclNlcnZpY2V7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgIHRoaXMuZGJuYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGIgPSAnJztcclxuICB9XHJcblxyXG4gIG9wZW5EYigpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICBsZXQgcmVxdWVzdCA9IHdpbmRvdy5pbmRleGVkREIub3Blbih0aGlzLmRibmFtZSwgMSk7XHJcblxyXG5cdCAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kYiA9IGUudGFyZ2V0LnJlc3VsdDtcclxuXHRcdCAgICByZXNvbHZlKHRoaXMuZGIpO1xyXG5cdCAgICB9O1xyXG5cclxuICAgICAgcmVxdWVzdC5vbmVycm9yID0gZSA9PiB7ICBcclxuICAgICAgICByZWplY3QoJ0Vycm9yJyk7XHJcbiAgICAgIH07XHJcblx0XHJcblx0ICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGUpID0+IHtcclxuXHRcdCAgICB0aGlzLmRiID0gZS50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZih0aGlzLmRiLm9iamVjdFN0b3JlTmFtZXMgJiYgdGhpcy5kYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKFwibm90YXNcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5kYi5kZWxldGVPYmplY3RTdG9yZShcIm5vdGFzXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RvcmUgPSB0aGlzLmRiLmNyZWF0ZU9iamVjdFN0b3JlKFwibm90YXNcIiwgeyBrZXlQYXRoIDogXCJrZXlcIiB9KTsgICAgICAgXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlYWRBbGwobmFtZSl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdmFyIF9faXRlbXMgPSBbXTtcclxuICAgICAgdGhpcy5kYlxyXG4gICAgICAgICAgLnRyYW5zYWN0aW9uKG5hbWUsIFwicmVhZG9ubHlcIilcclxuICAgICAgICAgIC5vYmplY3RTdG9yZShuYW1lKVxyXG4gICAgICAgICAgLm9wZW5DdXJzb3IoSURCS2V5UmFuZ2UubG93ZXJCb3VuZCgwKSlcclxuICAgICAgICAgIC5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdmFyIF9fY3Vyc29yID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICAgICAgaWYoX19jdXJzb3IpIHtcclxuICAgICAgICAgICAgICBfX2l0ZW1zLnB1c2goX19jdXJzb3IudmFsdWUpO1xyXG4gICAgICAgICAgICAgIF9fY3Vyc29yLmNvbnRpbnVlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShfX2l0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZShzdG9yZSwgdmFsdWUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHtcclxuICAgICAgdGhpcy5kYlxyXG4gICAgICAgICAgLnRyYW5zYWN0aW9uKHN0b3JlLCBcInJlYWR3cml0ZVwiKVxyXG4gICAgICAgICAgLm9iamVjdFN0b3JlKHN0b3JlKVxyXG4gICAgICAgICAgLnB1dCh2YWx1ZSlcclxuICAgICAgICAgIC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlKHN0b3JlLCBrZXkpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHtcclxuICAgICAgdGhpcy5kYlxyXG4gICAgICAgICAgLnRyYW5zYWN0aW9uKHN0b3JlLCBcInJlYWR3cml0ZVwiKVxyXG4gICAgICAgICAgLm9iamVjdFN0b3JlKHN0b3JlKVxyXG4gICAgICAgICAgLmRlbGV0ZShrZXkpXHJcbiAgICAgICAgICAub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWFkT25lKHN0b3JlLCBrZXkpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHtcclxuICAgICAgdGhpcy5kYlxyXG4gICAgICAgICAgLnRyYW5zYWN0aW9uKHN0b3JlLCBcInJlYWR3cml0ZVwiKVxyXG4gICAgICAgICAgLm9iamVjdFN0b3JlKHN0b3JlKVxyXG4gICAgICAgICAgLmdldChrZXkpXHJcbiAgICAgICAgICAub25zdWNjZXNzID0gZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgICAgfSAgICAgICAgIFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIiwiXHJcblxyXG5sZXQgX19tb2R1bGUgPSB7fTtcclxuKGZ1bmN0aW9uKG1vZHVsZSwgbmFtZSl7XHJcblxyXG4gIHZhciBfbW9kdWxlID0gIG1vZHVsZVtuYW1lXSA9IHsgYXBwbHkgOiBmdW5jdGlvbiBhcHBseShvLCBjLCBkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZCkgYXBwbHkobywgZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8gJiYgYyAmJiB0eXBlb2YgYyA9PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIGMpeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjW3BdID09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBseShvW3BdLCBjW3BdICkgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvW3BdID0gY1twXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19OyAgICAgIFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBVdGlsc1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24obW9kdWxlKXtcclxuICAgIG1vZHVsZS5hcHBseShtb2R1bGUseyBcclxuICAgICAgdG9BcnJheSAgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodik7IH0sXHJcbiAgICAgIGlzTnVsbCAgICAgIDogZnVuY3Rpb24odil7cmV0dXJuIHYgPT09IG51bGw7IH0sXHJcbiAgICAgIGlzQXJyYXkgICAgIDogZnVuY3Rpb24odil7cmV0dXJuIEFycmF5LmlzQXJyYXkodik7IH0sXHJcbiAgICAgIGlzU3RyaW5nICAgIDogZnVuY3Rpb24odil7cmV0dXJuIHR5cGVvZiB2ID09ICdzdHJpbmcnO30sXHJcbiAgICAgIGlzQm9vbGVhbiAgIDogZnVuY3Rpb24odil7cmV0dXJuIHR5cGVvZiB2ID09ICdib29sZWFuJzt9LFxyXG4gICAgICBpc051bWJlciAgICA6IGZ1bmN0aW9uKHYpe3JldHVybiB0eXBlb2YgdiA9PSAnbnVtYmVyJzt9LFxyXG4gICAgICBpc0Z1bmN0aW9uICA6IGZ1bmN0aW9uKHYpe3JldHVybiB0eXBlb2YgdiA9PSAnZnVuY3Rpb24nO30sXHJcbiAgICAgIGlzT2JqZWN0ICAgIDogZnVuY3Rpb24odil7cmV0dXJuIHYgJiYgdHlwZW9mIHYgPT0gJ29iamVjdCc7fSxcclxuICAgICAgY2xvbmUgICAgICAgOiBmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgaWYobW9kdWxlLmlzQXJyYXkobykpICAgICAgICAgICAgIHJldHVybiBvLnNsaWNlKDApO1xyXG4gICAgICAgIGlmKG1vZHVsZS5pc09iamVjdChvKSAmJiBvLmNsb25lKSByZXR1cm4gby5jbG9uZSgpO1xyXG4gICAgICAgIGlmKG1vZHVsZS5pc09iamVjdChvKSl7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMobykucmVkdWNlKCBmdW5jdGlvbihhLCBrKXtcclxuICAgICAgICAgICAgYVtrXSA9IG1vZHVsZS5jbG9uZShvW2tdKTtcclxuICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgICB9LCB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvO1xyXG4gICAgICB9LCAgICAgICAgXHJcbiAgICAgIGpvaW4gICAgICAgIDogZnVuY3Rpb24oaXRlbXMsIHByb3BlcnR5LCBzZXBhcmF0b3Ipe1xyXG4gICAgICAgIHJldHVybiBpdGVtcy5yZWR1Y2UoZnVuY3Rpb24oYSwgbyl7IHJldHVybiBhLmFwcGVuZChvW3Byb3BlcnR5IHx8ICdpZCddKTsgfSwgW10pXHJcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLScgOiAoc2VwYXJhdG9yIHx8ICcnKSk7IFxyXG4gICAgICB9LFxyXG4gICAgICBzdHJpbmdCdWlsZGVyIDogZnVuY3Rpb24ocyl7XHJcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZSAgICAgIDogcyB8fCAnJyxcclxuICAgICAgICAgICAgICAgICAgIGFwcGVuZCAgICAgOiBmdW5jdGlvbihzKXsgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUgKyBzOyByZXR1cm4gdGhpczt9LFxyXG4gICAgICAgICAgICAgICAgICAgYXBwZW5kTGluZSA6IGZ1bmN0aW9uKHMpeyB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZSArIChzIHx8ICcnKSArICdcXG4nOyByZXR1cm4gdGhpczt9fVxyXG4gICAgICB9LFxyXG4gICAgICBidWlsZCA6IGZ1bmN0aW9uKHRhZ05hbWUsIG8pe1xyXG4gICAgICAgIHJldHVybiBfbW9kdWxlLmFwcGx5KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSksIG8pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KF9tb2R1bGUpKTtcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gU3RyaW5nc1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24obW9kdWxlKXtcclxuICAgIG1vZHVsZS5hcHBseShTdHJpbmcsIHtcclxuICAgICAgc3RyaW5nQnVpbGRlciA6IG1vZHVsZS5zdHJpbmdCdWlsZGVyLFxyXG4gICAgICBsZWZ0UGFkICAgICAgIDogZnVuY3Rpb24gKHZhbCwgc2l6ZSwgY2gpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gJycgKyB2YWw7XHJcbiAgICAgICAgaWYgKGNoID09PSBudWxsIHx8IGNoID09PSB1bmRlZmluZWQgfHwgY2ggPT09ICcnKSBjaCA9ICcgJzsgICAgICAgICAgICBcclxuICAgICAgICB3aGlsZSAocmVzdWx0Lmxlbmd0aCA8IHNpemUpIHJlc3VsdCA9IGNoICsgcmVzdWx0OyAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRyaW1WYWx1ZXMgOiBmdW5jdGlvbiAodmFsdWVzKXsgcmV0dXJuIHZhbHVlcy5tYXAoZnVuY3Rpb24ocyl7cmV0dXJuIHMudHJpbSgpO30pO31cclxuICAgIH0pO1xyXG4gICAgbW9kdWxlLmFwcGx5KFN0cmluZy5wcm90b3R5cGUsIHtcclxuICAgICAgcmVwbGFjZUFsbCAgOiBmdW5jdGlvbihwYXR0ZXJuLCByZXBsYWNlbWVudCkgeyByZXR1cm4gdGhpcy5zcGxpdChwYXR0ZXJuKS5qb2luKHJlcGxhY2VtZW50KTsgfSxcclxuICAgICAgcmVwZWF0ICAgICAgOiBTdHJpbmcucHJvdG90eXBlLnJlcGVhdCAgICAgfHwgZnVuY3Rpb24oYSkgeyByZXR1cm4gbmV3IEFycmF5KGEgKyAxKS5qb2luKHRoaXMpOyB9LFxyXG4gICAgICBjb250YWlucyAgICA6IFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMgICB8fCBmdW5jdGlvbih0LCBzdGFydCkgeyByZXR1cm4gdGhpcy5pbmRleE9mKHQpID49IChzdGFydCB8fCAwKTsgfSxcclxuICAgICAgc3RhcnRzV2l0aCAgOiBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggfHwgZnVuY3Rpb24odCl7IHJldHVybiB0aGlzLmluZGV4T2YodCkgPT0gMDsgfSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICB0b0Zsb2F0ICAgICA6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLnRyaW0oKS5yZXBsYWNlQWxsKCcuJywgJycpLnJlcGxhY2VBbGwoJywnLCAnLicpIH0sXHJcbiAgICAgIGZpeERhdGUgICAgIDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuc3BsaXQoJyAnKVswXTsgfSxcclxuICAgICAgZml4VGltZSAgICAgOiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5zcGxpdCgnICcpWzFdOyB9LFxyXG4gICAgICBmaXhZZWFyICAgICA6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLmZpeERhdGUoKS5zcGxpdCgnLycpWzJdO30sXHJcbiAgICAgIHRyaW1TZWNvbmRzIDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuc3BsaXQoJzonKVswXSArICc6JyArIHRoaXMuc3BsaXQoJzonKVsxXSA7IH0sXHJcbiAgICAgIHBhZGRpbmdMZWZ0IDogZnVuY3Rpb24ocGFkZGluZ1ZhbHVlKXsgcmV0dXJuIChwYWRkaW5nVmFsdWUgKyB0aGlzKS5zbGljZSgtcGFkZGluZ1ZhbHVlLmxlbmd0aCk7IH0sXHJcbiAgICAgIGZvcm1hdCAgICAgIDogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgX19hcmcgICAgID0gYXJndW1lbnRzO1xyXG4gICAgICAgIHZhciBfX2NvbnRleHQgPSBfX2FyZ1tfX2FyZy5sZW5ndGggLSAxXSB8fCBzZWxmOyAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoL1xceyhcXGQrfFtee10rKVxcfS9nLCBmdW5jdGlvbihtLCBrZXkpe1xyXG4gICAgICAgICAgaWYoa2V5LmluZGV4T2YoJzonKSA+IDApe1xyXG4gICAgICAgICAgICB2YXIgX19mbiA9IGtleS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICBfX2ZuWzBdICA9IGdldFZhbHVlKF9fZm5bMF0sIF9fY29udGV4dCk7XHJcbiAgICAgICAgICAgIF9fZm5bMV0gID0gZ2V0VmFsdWUoX19mblsxXSwgX19jb250ZXh0KTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZm5bMF0oX19mblsxXSwgX19jb250ZXh0KTsgICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAvXlxcZCskLy50ZXN0KGtleSkgPyBfX2FyZ1trZXldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAodHlwZW9mIF9fY29udGV4dFtrZXldID09PSBcInVuZGVmaW5lZFwiKSA/IGdldFZhbHVlKGtleSwgX19jb250ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX19jb250ZXh0W2tleV07IFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTsgICAgICBcclxuICB9KF9tb2R1bGUpKTsgICAgICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gQXJyYXlcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAgIFxyXG4gIChmdW5jdGlvbihtb2R1bGUpe1xyXG4gICAgbW9kdWxlLmFwcGx5KEFycmF5LnByb3RvdHlwZSwgeyAgICAgICAgICBcclxuICAgICAgcmVtb3ZlICAgOiBmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleE9mKG8pO1xyXG4gICAgICAgIGlmIChpbmRleCAhPSAtMSkgdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9LFxyXG4gICAgICBhZGQgICAgICA6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICB0aGlzLnB1c2gobyk7XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgIH0sXHJcbiAgICAgIGFwcGVuZCAgIDogZnVuY3Rpb24obykge1xyXG4gICAgICAgIHRoaXMucHVzaChvKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfSxcclxuICAgICAgaXRlbSAgICAgOiBmdW5jdGlvbihwcm9wTmFtZSwgdmFsdWUsIGRlZil7XHJcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50cz09MSA/IHRoaXMuZmlsdGVyKCBmdW5jdGlvbih2KXtyZXR1cm4gdlsnaWQnXSA9PSBwcm9wTmFtZSB8fCB2WydfaWQnXSA9PSBwcm9wTmFtZX0pWzBdIHx8IGRlZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmZpbHRlciggZnVuY3Rpb24odil7cmV0dXJuIHZbcHJvcE5hbWVdID09IHZhbHVlfSlbMF0gfHwgZGVmO1xyXG4gICAgICB9LFxyXG4gICAgICBjb250YWlucyA6IGZ1bmN0aW9uKHByb3BOYW1lLHZhbHVlKXsgcmV0dXJuIHRoaXMuaXRlbShwcm9wTmFtZSx2YWx1ZSk7IH0sXHJcbiAgICAgIGxhc3RJdGVtIDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07IH0sXHJcbiAgICAgIHNlbGVjdCAgIDogZnVuY3Rpb24oc2VudGVuY2UpeyByZXR1cm4gdGhpcy5tYXAoc2VudGVuY2UpIH0sICAgXHJcbiAgICAgIHdoZXJlICAgIDogZnVuY3Rpb24oc2VudGVuY2UpeyBcclxuICAgICAgICBpZihtb2R1bGUuaXNGdW5jdGlvbihzZW50ZW5jZSkpIHJldHVybiB0aGlzLmZpbHRlcihzZW50ZW5jZSk7XHJcbiAgICAgICAgaWYobW9kdWxlLmlzT2JqZWN0KHNlbnRlbmNlKSl7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXIobmV3IEZ1bmN0aW9uKCdhJywgT2JqZWN0LmtleXMoc2VudGVuY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbihhLCBwcm9wbmFtZSwgaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhICsgKGkgPiAwID8gJyAmJiAnIDogJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgIChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX3ZhbHVlID0gc2VudGVuY2VbcHJvcG5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKF9fdmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHJldHVybiAnezF9LnRlc3QoYS57MH0pJy5mb3JtYXQocHJvcG5hbWUsIF9fdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1vZHVsZS5pc1N0cmluZyhfX3ZhbHVlKSkgcmV0dXJuICdhLnswfSA9PT0gXFwnezF9XFwnJy5mb3JtYXQocHJvcG5hbWUsIF9fdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnYS57MH0gPT09IHsxfScuZm9ybWF0KHByb3BuYW1lLCBfX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oKSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJ3JldHVybiAnKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfSxcclxuICAgICAgc29ydEJ5ICAgICAgOiBmdW5jdGlvbihwcm9wbmFtZSwgZGVzYyl7XHJcbiAgICAgICAgdmFyIF9fb3JkZXIgPSBbXTtcclxuICAgICAgICB2YXIgX19uYW1lcyA9IHByb3BuYW1lLnNwbGl0KCcsJykubWFwKCBmdW5jdGlvbih0b2tlbixpKXsgXHJcbiAgICAgICAgICB2YXIgX19wYWlyID0gdG9rZW4uc3BsaXQoJyAnKTtcclxuICAgICAgICAgIF9fb3JkZXJbaV0gPSAoX19wYWlyWzFdICYmIChfX3BhaXJbMV0udG9VcHBlckNhc2UoKT09J0RFU0MnKSkgPyAtMSA6IDE7ICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gX19wYWlyWzBdOyAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBfX29yZGVyWzBdID0gKGRlc2MgPyAtMSA6IDEpXHJcbiAgICAgICAgdGhpcy5zb3J0KGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gMDsgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfX2ZuID0gZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgX194ID0gYVtfX25hbWVzW2ldXTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciBfX3kgPSBiW19fbmFtZXNbaV1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoX194IDwgX195KSByZXR1cm4gLTEgKiBfX29yZGVyW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoX194ID4gX195KSByZXR1cm4gIDEgKiBfX29yZGVyW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoaSA8IF9fbmFtZXMubGVuZ3RoKSByZXR1cm4gX19mbihhLGIpOyAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19mbihhLGIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7ICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBvcmRlckJ5ICAgICA6IGZ1bmN0aW9uKHNlbnRlbmNlKXtcclxuICAgICAgICB2YXIgX19zZW50ZW5jZSA9IHNlbnRlbmNlOyAgICBcclxuICAgICAgICBpZihtb2R1bGUuaXNTdHJpbmcoc2VudGVuY2UpKSBfX3NlbnRlbmNlID0gZnVuY3Rpb24oYSl7IHJldHVybiBhW3NlbnRlbmNlXTsgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZX0pXHJcbiAgICAgICAgICAgICAgICAgICAuc29ydChmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciB4ID0gX19zZW50ZW5jZShhKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciB5ID0gX19zZW50ZW5jZShiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoKHggPCB5KSA/IC0xIDogKCh4ID4geSkgPyAxIDogMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgfSk7ICAgICBcclxuICAgICAgfSxcclxuICAgICAgZGlzdGluY3QgICAgOiBmdW5jdGlvbihzZW50ZW5jZSkge1xyXG4gICAgICAgIHZhciBfX3NlbnRlbmNlID0gc2VudGVuY2U7ICAgIFxyXG4gICAgICAgIGlmKG1vZHVsZS5pc1N0cmluZyhzZW50ZW5jZSkpIF9fc2VudGVuY2UgPSBmdW5jdGlvbihhKXsgcmV0dXJuIGFbc2VudGVuY2VdOyB9XHJcbiAgICAgICAgdmFyIHIgPSBbXTtcclxuICAgICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICB2YXIgX3ZhbHVlID0gX19zZW50ZW5jZShpdGVtKTtcclxuICAgICAgICAgIGlmKHIuaW5kZXhPZihfdmFsdWUpPT0tMSkgci5wdXNoKF92YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdyb3VwQnkgOiBmdW5jdGlvbihwcm9wKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWR1Y2UoZnVuY3Rpb24oZ3JvdXBzLCBpdGVtKSB7XHJcbiAgICAgICAgICB2YXIgdmFsID0gaXRlbVtwcm9wXTtcclxuICAgICAgICAgIChncm91cHNbdmFsXSA9IGdyb3Vwc1t2YWxdIHx8IFtdKS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgcmV0dXJuIGdyb3Vwc1xyXG4gICAgICAgIH0sIHt9KVxyXG4gICAgICB9LFxyXG4gICAgICB0b0RpY3Rpb25hcnkgOiBmdW5jdGlvbihwcm9wLCB2YWx1ZSl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVkdWNlKGZ1bmN0aW9uKGEsIGQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbZFtwcm9wXV0gPSB2YWx1ZSA/IGRbdmFsdWVdIDogZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge30pOyAgXHJcbiAgICAgIH1cclxuICAgIH0pOyAgICAgICBcclxuICB9KF9tb2R1bGUpKTtcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFRlbXBsYXRlc1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24obW9kdWxlKXtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRWYWx1ZShrZXksIHNjb3BlKSB7ICAgICAgICBcclxuICAgICAgcmV0dXJuIGtleS5zcGxpdCgvXFwufFxcW3xcXF0vKVxyXG4gICAgICAgICAgICAgICAgLnJlZHVjZSggZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChiID09PSAnJykgcmV0dXJuIGE7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhW2JdID09PSB1bmRlZmluZWQgPyAoYSA9PT0gc2VsZiA/ICcnIDogc2VsZikgOiBhW2JdO1xyXG4gICAgICAgICAgICAgICAgfSwgc2NvcGUgfHwgc2VsZiApOyAgICBcclxuICAgIH1cclxuICAgXHJcbiAgICBmdW5jdGlvbiBtZXJnZSh0ZW1wbGF0ZSwgbywga2V5KSB7XHJcbiAgICAgIGlmKHNlbGYuQlMucmVwb3J0RGVmaW5pdGlvbi5jb250ZXh0Lm1lcmdlTW9kZSl7XHJcbiAgICAgICAgcmV0dXJuIG1lcmdlT3B0aW1pemVkKHRlbXBsYXRlLCBvLCBrZXkpO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBfX3Jlc3VsdCA9IHRlbXBsYXRlLnJlcGxhY2UoL3soW157XSspP30vZywgZnVuY3Rpb24gKG0sIGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoa2V5LmluZGV4T2YoJzonKSA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19mbiA9IGtleS5zcGxpdCgnOicpOyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fZm5bMF0gID0gZ2V0VmFsdWUoX19mblswXSwgbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fZm5bMV0gID0gZ2V0VmFsdWUoX19mblsxXSwgbyk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2ZuWzBdKF9fZm5bMV0sIG8pOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHIgICA9IGdldFZhbHVlKGtleSwgbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgX19rID0gKGtleS5jb250YWlucygnLicpID8gJycgOiAnby4nKSArIGtleTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHIpID09ICdmdW5jdGlvbicpeyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcihvKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1lbHNleyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcjtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiAocikgPT0gJ2Z1bmN0aW9uJyA/IHIobykgOiByO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pOyAgICAgXHJcbiAgICAgIHJldHVybiBfX3Jlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtZXJnZU9wdGltaXplZCh0ZW1wbGF0ZSwgbywga2V5KSB7XHJcbiAgICAgIFxyXG4gICAgICBpZihvW2tleV0gJiYgb1trZXldID09PSAndGVtcGxhdGUnKSByZXR1cm4gdGVtcGxhdGU7IFxyXG4gICAgICBpZihvW2tleV0pIHJldHVybiBvW2tleV0obyk7ICAgICAgXHJcbiAgICAgIHZhciBfX3ZhbHVlcyA9IFtdO1xyXG4gICAgICB2YXIgX19yZXN1bHQgPSB0ZW1wbGF0ZS5yZXBsYWNlKC97KFtee10rKT99L2csIGZ1bmN0aW9uIChtLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKGtleS5pbmRleE9mKCc6JykgPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fZm4gPSBrZXkuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fayA9IChfX2ZuWzFdLmNvbnRhaW5zKCcuJykgPyAnJyA6ICdvLicpICsgX19mblsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX192YWx1ZXMucHVzaCgnezB9KHsxfSkgJy5mb3JtYXQoX19mblswXSwgX19rKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fZm5bMF0gID0gZ2V0VmFsdWUoX19mblswXSwgbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fZm5bMV0gID0gZ2V0VmFsdWUoX19mblsxXSwgbyk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2ZuWzBdKF9fZm5bMV0sIG8pOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHIgICA9IGdldFZhbHVlKGtleSwgbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgX19rID0gKGtleS5jb250YWlucygnLicpID8gJycgOiAnby4nKSArIGtleTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHIpID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX3ZhbHVlcy5wdXNoKCd7MH0obyknLmZvcm1hdChfX2spKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHIobyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX192YWx1ZXMucHVzaCgnezB9Jy5mb3JtYXQoX19rKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIChyKSA9PSAnZnVuY3Rpb24nID8gcihvKSA6IHI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgIGlmKGtleSAmJiBfX3ZhbHVlcy5sZW5ndGggPT09IDApe1xyXG4gICAgICAgIG9ba2V5XSA9ICd0ZW1wbGF0ZSc7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGtleSAmJiBfX3ZhbHVlcy5sZW5ndGgpe1xyXG4gICAgICAgIF9fdmFsdWVzLnJldmVyc2UoKVxyXG4gICAgICAgIHZhciBfX2IgPSB0ZW1wbGF0ZS5zcGxpdCgveyhbXntdKyk/fS9nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24odCwgaSl7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICBpICUgMiA/IF9fdmFsdWVzLnBvcCgpIDogJ1xcJycgKyB0ICsgJ1xcJycgOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSggZnVuY3Rpb24oYSwgdG9rZW4sIGksIGFycil7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodG9rZW4gPT09IFwiJydcIikgcmV0dXJuIGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSArIHRva2VuICsgKChpIDwgYXJyLmxlbmd0aC0xKSA/ICcgKyAnIDogJycpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAncmV0dXJuICcpO1xyXG5cclxuICAgICAgICBvW2tleV0gPSBuZXcgRnVuY3Rpb24oJ28nLCBfX2IucmVwbGFjZSgvKD86XFxyXFxufFxccnxcXG4pL2csICcnKSk7XHJcbiAgICAgICAgcmV0dXJuIG9ba2V5XShvKTtcclxuICAgICAgfSAgICAgIFxyXG4gICAgICByZXR1cm4gX19yZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG1vZHVsZS50ZW1wbGF0ZXMgPSB7IGdldFZhbHVlICA6IGdldFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2UgICAgIDogbWVyZ2UgfTtcclxuXHJcbiAgfShfbW9kdWxlKSk7XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBBamF4XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpeyAgXHJcbiAgICBtb2R1bGUuYWpheCA9IHt9O1xyXG4gICAgbW9kdWxlLmFwcGx5KG1vZHVsZS5hamF4LCB7XHJcbiAgICAgIGdldCAgOiBmdW5jdGlvbiAodXJsLCBjYWxsQmFjaykge1xyXG4gICAgICAgIHVybCArPSAodXJsLmNvbnRhaW5zKCc/JykgPyAnJm1zPScgOiAnP21zPScpICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIHhtbCA9IHRoaXMuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4bWwub3BlbignR0VUJywgdXJsLCB0cnVlKTtcclxuICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignSWYtTW9kaWZpZWQtU2luY2UnLCAnVGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVQnKTtcclxuICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignQ2FjaGUtQ29udHJvbCcsICduby1jYWNoZScpO1xyXG4gICAgICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7IGlmICh4bWwucmVhZHlTdGF0ZSA9PSA0KSBjYWxsQmFjayh4bWwucmVzcG9uc2VUZXh0KSB9O1xyXG4gICAgICAgIHhtbC5zZW5kKG51bGwpO1xyXG4gICAgICB9LFxyXG4gICAgICBwb3N0IDogZnVuY3Rpb24odXJsLCBwYXJhbXMsIGNhbGxCYWNrKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgdmFyIHhtbCA9IHRoaXMuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4bWwub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeG1sLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkgeyBpZiAoeG1sLnJlYWR5U3RhdGUgPT0gNCkgY2FsbEJhY2soeG1sLnJlc3BvbnNlVGV4dCkgfTtcclxuICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldDpJU08tODg1OS0xJyk7XHJcbiAgICAgICAgeG1sLnNlbmQocGFyYW1zKTtcclxuICAgICAgfSxcclxuICAgICAgY2FsbFdlYk1ldGhvZCA6IGZ1bmN0aW9uKHVybCwgcGFyYW1zLCBjYWxsQmFjaykge1xyXG4gICAgICAgIHZhciB4bWwgPSB0aGlzLmNyZWF0ZVhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeG1sLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpeyBpZiAoeG1sLnJlYWR5U3RhdGUgPT0gNCkgY2FsbEJhY2soeG1sLnJlc3BvbnNlVGV4dCkgfTtcclxuICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxuICAgICAgICB4bWwuc2VuZChwYXJhbXMpO1xyXG4gICAgICB9LFxyXG4gICAgICBjcmVhdGVYTUxIdHRwUmVxdWVzdCA6IGZ1bmN0aW9uKCl7IHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgfVxyXG4gICAgfSk7ICBcclxuICB9KF9tb2R1bGUpKTsgXHJcbiAgICAgIFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBUYWJibHlcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKGZ1bmN0aW9uIChtb2R1bGUpe1xyXG4gICAgICBcclxuICAgIHZhciBfX2NvbnRleHQ7XHJcblxyXG4gICAgZnVuY3Rpb24gX19FeGVjdXRlQ29kZShjb2RlKXtcclxuXHJcbiAgICAgIF9fY29udGV4dCA9IHsgc2VjdGlvbnMgOiBbXSwgZ3JvdXBzIDogW10sIGRldGFpbHMgOiBbXX07XHJcblxyXG4gICAgICB2YXIgX19jdXI7XHJcbiAgICAgIHZhciBfX2Z1bmMgICAgICAgPSAnJztcclxuICAgICAgdmFyIF9fZnVuY0JvZHkgICA9ICcnO1xyXG4gICAgICB2YXIgX19zZXRTdGF0ZSAgPSBmYWxzZTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIF9fZ2V0KHZhbHVlKXtcclxuICAgICAgICBpZih2YWx1ZSAmJiB2YWx1ZS50cmltKCkuc3RhcnRzV2l0aCgnQCcpKXtcclxuICAgICAgICAgIHJldHVybiBfX2NvbnRleHRbdmFsdWUudHJpbSgpLnNwbGl0KCdAJylbMV0udHJpbSgpXSB8fCAnJztcclxuICAgICAgICB9ZWxzZSBpZih2YWx1ZSl7XHJcbiAgICAgICAgICByZXR1cm4gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH0gIFxyXG5cclxuICAgICAgZnVuY3Rpb24gX19wYXJzZV9wcm9wZXJ0aWVzKHZhbHVlKXtcclxuICAgICAgICB2YXIgX19yZWcgICA9ICAvKFthLXpBLVowLTlfXFwtXSopXFxzKjpcXHMqKCdbXiddKid8W15cXHNdKikvZztcclxuICAgICAgICB2YXIgX19vICAgICA9IHt9O1xyXG4gICAgICAgIHZhciBfX21hdGNoID0gX19yZWcuZXhlYyh2YWx1ZSk7XHJcbiAgICAgICAgd2hpbGUgKF9fbWF0Y2ggIT0gbnVsbCkge1xyXG4gICAgICAgICAgX19vW19fbWF0Y2hbMV0udHJpbSgpXSA9IF9fZ2V0KF9fbWF0Y2hbMl0udHJpbSgpLnJlcGxhY2UoL14nKFteJ10qKSckL2csICckMScpKTtcclxuICAgICAgICAgIF9fbWF0Y2ggPSBfX3JlZy5leGVjKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9fb1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBfX3BhcnNlTGluZShsLCBvKXtcclxuICAgICAgICBpZighX19mdW5jICYmICFsLnRyaW0oKSkgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICB2YXIgX19rZXlzID0gL0RFRklORXwjfENSRUFURXxTRVR8RlVOQ1RJT058RU5ELztcclxuICAgICAgICBpZihfX2tleXMudGVzdChsKSl7XHJcbiAgICAgICAgICBpZigvXiMvLnRlc3QobCkpe1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXt9O1xyXG4gICAgICAgICAgfWVsc2UgaWYoL15TRVQgKFxcdy4qKS8udGVzdChsKSl7ICBcclxuICAgICAgICAgICAgdmFyIF9fdG9rZW5zID0gbC5tYXRjaCgvXlNFVCAoXFx3LiopJC8pO1xyXG4gICAgICAgICAgICBfX3NldFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgX19mdW5jICAgICAgPSBfX3Rva2Vuc1sxXS50cmltKCk7XHJcbiAgICAgICAgICAgIF9fZnVuY0JvZHkgID0gJyc7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe307XHJcbiAgICAgICAgICB9ZWxzZSBpZigvXkZVTkNUSU9OIChcXHcuKikvLnRlc3QobCkpeyAgXHJcbiAgICAgICAgICAgIHZhciBfX3Rva2VucyA9IGwubWF0Y2goL15GVU5DVElPTiAoXFx3LiopJC8pO1xyXG4gICAgICAgICAgICBfX3NldFN0YXRlICA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfX2Z1bmMgICAgICAgPSBfX3Rva2Vuc1sxXS50cmltKCk7XHJcbiAgICAgICAgICAgIF9fZnVuY0JvZHkgICA9ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXt9O1xyXG4gICAgICAgICAgfWVsc2UgaWYoL15FTkQvLnRlc3QobCkpeyAgICAgIFxyXG4gICAgICAgICAgICB2YXIgX19ib2R5ID0gX19mdW5jQm9keTtcclxuICAgICAgICAgICAgdmFyIF9fbmFtZSA9IF9fZnVuYztcclxuICAgICAgICAgICAgX19mdW5jID0gX19mdW5jQm9keSA9ICcnOyBcclxuICAgICAgICAgICAgaWYoX19zZXRTdGF0ZSl7XHJcbiAgICAgICAgICAgICAgX19zZXRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7IF9fY3VyW19fbmFtZV0gPSBfX2JvZHkudHJpbSgpOyB9XHJcbiAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpeyBjdHhbX19uYW1lXSA9IG5ldyBGdW5jdGlvbignY3R4JywgX19ib2R5KTsgfVxyXG4gICAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICB9ZWxzZSBpZigvXkRFRklORVxcc1xccyooXFx3LiopXFxzKj1cXHMqKC4qKSQvLnRlc3QobCkpe1xyXG4gICAgICAgICAgICB2YXIgX190b2tlbnMgPSBsLm1hdGNoKC9eREVGSU5FXFxzXFxzKihbYS16QS1aMC05X1xcLV0qKVxccyo9XFxzKiguKikkLyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyBcclxuICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gX190b2tlbnM7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7IGN0eFt0b2tlbnNbMV0udHJpbSgpXSA9IHRva2Vuc1syXS50cmltKCk7IH1cclxuICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgfWVsc2UgaWYoL15DUkVBVEVcXHNcXHMqKFxcdyopICguKikkLy50ZXN0KGwpKXtcclxuICAgICAgICAgICAgdmFyIF9fdG9rZW5zID0gbC5tYXRjaCgvXkNSRUFURVxcc1xccyooXFx3KikgKC4qKSQvKTtcclxuICAgICAgICAgICAgaWYoX190b2tlbnNbMV09PSdzZWN0aW9uJyl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IF9fdG9rZW5zO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7IFxyXG4gICAgICAgICAgICAgICAgICBjdHguc2VjdGlvbnMucHVzaChfX3BhcnNlX3Byb3BlcnRpZXModG9rZW5zWzJdKSk7IFxyXG4gICAgICAgICAgICAgICAgICBfX2N1ciA9IGN0eC5zZWN0aW9uc1tjdHguc2VjdGlvbnMubGVuZ3RoIC0gMV07fVxyXG4gICAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKF9fdG9rZW5zWzFdPT0nZ3JvdXAnKXtcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gX190b2tlbnM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXsgXHJcbiAgICAgICAgICAgICAgICAgIGN0eC5ncm91cHMucHVzaChfX3BhcnNlX3Byb3BlcnRpZXModG9rZW5zWzJdKSk7XHJcbiAgICAgICAgICAgICAgICAgIF9fY3VyID0gY3R4Lmdyb3Vwc1tjdHguZ3JvdXBzLmxlbmd0aCAtIDFdO31cclxuICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKF9fdG9rZW5zWzFdPT0nZGV0YWlsJyl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IF9fdG9rZW5zO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7XHJcbiAgICAgICAgICAgICAgICAgIGN0eC5kZXRhaWxzLnB1c2goX19wYXJzZV9wcm9wZXJ0aWVzKHRva2Vuc1syXSkpO1xyXG4gICAgICAgICAgICAgICAgICBfX2N1ciA9IGN0eC5kZXRhaWxzW2N0eC5kZXRhaWxzLmxlbmd0aCAtIDFdO31cclxuICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1lbHNleyB0aHJvdyBuZXcgRXJyb3IoJ1RhYmJseSA6IFVucmVjb2duaXplZCB0ZXh0IGFmdGVyIERFRklORScpfSAgXHJcbiAgICAgICAgfWVsc2V7IFxyXG4gICAgICAgICAgaWYoX19mdW5jKXtcclxuICAgICAgICAgICAgX19mdW5jQm9keSArPSBvO1xyXG4gICAgICAgICAgICBfX2Z1bmNCb2R5ICs9ICdcXG4nO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXt9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYWJibHkgOiBVbnJlY29nbml6ZWQgdGV4dCcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb2RlLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uKGwpeyBcclxuICAgICAgICBfX3BhcnNlTGluZShsLnRyaW0oKSxsKShfX2NvbnRleHQpOyBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4geyBjb250ZXh0IDogX19jb250ZXh0IH07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vZHVsZS50YWJibHkgPSB7IGV4ZWN1dGUgOiBfX0V4ZWN1dGVDb2RlIH07XHJcblxyXG4gIH0oX21vZHVsZSkpO1xyXG4gICAgICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gUmVwb3J0c1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24obW9kdWxlKSB7XHJcblxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZSAgICAgICAgICAgICAgICA9IHt9OyAgICAgIFxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5nZW5lcmF0ZVJlcG9ydCA9IGZ1bmN0aW9uKHJkLCBkYXRhLCBtZWRpYXRvcil7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5iZWdpbicgfSk7XHJcbiAgICAgIHZhciBfX3JkICAgICAgPSByZCB8fCBtb2R1bGUuUmVwb3J0RW5naW5lLnJkO1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIFRyYW5zZm9ybWFyIGxvcyBkYXRvc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIHZhciBfX2RhdGFTZXQgPSBfX3JkLmNvbnRleHQucGFyc2VEYXRhID8gX19yZC5jb250ZXh0LnBhcnNlRGF0YShfX3JkLCBkYXRhLCBtZWRpYXRvci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRhdGE7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5sb2cubWVzc2FnZScsIHRleHQgOiAnSW5pY2lhbGl6YW5kby4uLicgfSk7XHJcbiAgICAgIGNvbnNvbGUudGltZSgnUmVuZGVyJyk7XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gSW5pY2lhbGl6YXIgZnVuY2lvbmVzIHBhcmEgbGEgZ2VuZXJhY2nDs24gZGUgY29udGVuaWRvIHBlcnNvbmFsaXphZG9cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX2luaXRDb250ZW50UHJvdmlkZXJzKCl7XHJcbiAgICAgICAgW19fcmQuY29udGV4dC5zZWN0aW9ucywgX19yZC5jb250ZXh0LmRldGFpbHMsIF9fcmQuY29udGV4dC5ncm91cHNdXHJcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbihhLGIpeyByZXR1cm4gYS5jb25jYXQoYik7IH0sIFtdKVxyXG4gICAgICAgIC5tYXAoZnVuY3Rpb24ocyl7XHJcbiAgICAgICAgICBpZihzLnZhbHVlUHJvdmlkZXJmbil7XHJcbiAgICAgICAgICAgIHMudmFsdWVQcm92aWRlciA9IG1vZHVsZS50ZW1wbGF0ZXMuZ2V0VmFsdWUocy52YWx1ZVByb3ZpZGVyZm4sIHNlbGYpOyBcclxuICAgICAgICAgICAgZGVsZXRlIHMudmFsdWVQcm92aWRlcmZuOyAgICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKHMuZm9vdGVyVmFsdWVQcm92aWRlcmZuKXtcclxuICAgICAgICAgICAgcy5mb290ZXJWYWx1ZVByb3ZpZGVyID0gbW9kdWxlLnRlbXBsYXRlcy5nZXRWYWx1ZShzLmZvb3RlclZhbHVlUHJvdmlkZXJmbiwgc2VsZik7IFxyXG4gICAgICAgICAgICBkZWxldGUgcy5mb290ZXJWYWx1ZVByb3ZpZGVyZm47IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYocy5oZWFkZXJWYWx1ZVByb3ZpZGVyZm4pe1xyXG4gICAgICAgICAgICBzLmhlYWRlclZhbHVlUHJvdmlkZXIgPSBtb2R1bGUudGVtcGxhdGVzLmdldFZhbHVlKHMuaGVhZGVyVmFsdWVQcm92aWRlcmZuLCBzZWxmKTsgXHJcbiAgICAgICAgICAgIGRlbGV0ZSBzLmhlYWRlclZhbHVlUHJvdmlkZXJmbjtcclxuICAgICAgICAgIH0gIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBHZW5lcmFjacOzbiBkZSBsYXMgc2VjY2lvbmVzIGRlIGNhYmVjZXJhIGRlIGxhcyBhZ3J1cGFjaW9uZXNcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIHZhciBfX01FUkdFX0FORF9TRU5EID0gZnVuY3Rpb24odCwgcCwgZm5rZXkpeyBtZWRpYXRvci5zZW5kKG1vZHVsZS50ZW1wbGF0ZXMubWVyZ2UodCwgcCwgZm5rZXkpKTsgfTtcclxuICAgICAgZnVuY3Rpb24gX19ncm91cHNIZWFkZXJzKCl7XHJcbiAgICAgICAgX19ncm91cHMuZm9yRWFjaChmdW5jdGlvbihnLCBpaSl7XHJcbiAgICAgICAgICBpZihpaSA8IF9fYnJlYWtJbmRleCkgcmV0dXJuOyBcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5zZWN0aW9ucy5ncm91cC5oZWFkZXInLCB2YWx1ZSA6IGcuaWQgfSk7ICBcclxuICAgICAgICAgIGlmKGcuZGVmaW5pdGlvbi5oZWFkZXIpIHJldHVybiBfX01FUkdFX0FORF9TRU5EKGcuZGVmaW5pdGlvbi5oZWFkZXIsIGcsICdjb21waWxlZF9oZWFkZXJmbicpO1xyXG4gICAgICAgICAgaWYoZy5kZWZpbml0aW9uLmhlYWRlclZhbHVlUHJvdmlkZXIpIHJldHVybiBtZWRpYXRvci5zZW5kKGcuZGVmaW5pdGlvbi5oZWFkZXJWYWx1ZVByb3ZpZGVyKGcpKTsgXHJcbiAgICAgICAgfSk7ICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBHZW5lcmFjacOzbiBkZSBsYXMgc2VjY2lvbmVzIGRlIHJlc3VtZW4gZGUgbGFzIGFncnVwYWNpb25lc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19ncm91cHNGb290ZXJzKGluZGV4KXtcclxuICAgICAgICB2YXIgX19nZyA9IF9fZ3JvdXBzLm1hcChmdW5jdGlvbihnKXtyZXR1cm4gZzt9KTsgXHJcbiAgICAgICAgaWYoaW5kZXgpIF9fZ2cuc3BsaWNlKDAsIGluZGV4KTtcclxuICAgICAgICBfX2dnLnJldmVyc2UoKS5mb3JFYWNoKCBmdW5jdGlvbihnKXtcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5zZWN0aW9ucy5ncm91cC5mb290ZXInLCB2YWx1ZSA6IGcuaWQgfSk7ICAgICAgICAgIFxyXG4gICAgICAgICAgaWYoZy5kZWZpbml0aW9uLmZvb3RlcikgcmV0dXJuIF9fTUVSR0VfQU5EX1NFTkQoZy5kZWZpbml0aW9uLmZvb3RlciwgZywgJ2NvbXBpbGVkX2Zvb3RlcmZuJyk7XHJcbiAgICAgICAgICBpZihnLmRlZmluaXRpb24uZm9vdGVyVmFsdWVQcm92aWRlcikgcmV0dXJuIG1lZGlhdG9yLnNlbmQoZy5kZWZpbml0aW9uLmZvb3RlclZhbHVlUHJvdmlkZXIoZykpO1xyXG4gICAgICAgIH0pOyBcclxuICAgICAgfSBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gR2VuZXJhY2nDs24gZGUgbGFzIHNlY2Npb25lcyBkZSBkZXRhbGxlXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9fZGV0YWlsc1NlY3Rpb25zKCl7XHJcbiAgICAgICAgX19kZXRhaWxzLmZvckVhY2goZnVuY3Rpb24oZCl7XHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuc2VjdGlvbnMuZGV0YWlsJywgdmFsdWUgOiBkLmlkIH0pO1xyXG4gICAgICAgICAgaWYoZC50ZW1wbGF0ZSkgcmV0dXJuIF9fTUVSR0VfQU5EX1NFTkQoZC50ZW1wbGF0ZSwgZCwgJ2NvbXBpbGVkZm4nKVxyXG4gICAgICAgICAgaWYoZC52YWx1ZVByb3ZpZGVyKSByZXR1cm4gbWVkaWF0b3Iuc2VuZChkLnZhbHVlUHJvdmlkZXIoZCkpO1xyXG4gICAgICAgIH0pICAgICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gR2VuZXJhY2nDs24gZGUgbGFzIHNlY2Npb25lcyBkZSB0b3RhbCBnZW5lcmFsXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9fZ3JhbmRUb3RhbFNlY3Rpb25zKCl7XHJcbiAgICAgICAgX190b3RhbHMuZm9yRWFjaChmdW5jdGlvbih0KXtcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5zZWN0aW9ucy50b3RhbCcsIHZhbHVlIDogdC5pZCB9KTtcclxuICAgICAgICAgIGlmKHQudGVtcGxhdGUpIHJldHVybiBfX01FUkdFX0FORF9TRU5EKHQudGVtcGxhdGUsIHQsICdjb21waWxlZGZuJylcclxuICAgICAgICAgIGlmKHQudmFsdWVQcm92aWRlcikgcmV0dXJuIG1lZGlhdG9yLnNlbmQodC52YWx1ZVByb3ZpZGVyKHQpKTtcclxuICAgICAgICB9KSAgICAgICAgICAgIFxyXG4gICAgICB9IFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBHZW5lcmFjacOzbiBkZSBsYXMgc2VjY2lvbmVzIGRlIGNhYmVjZXJhIGRlbCBpbmZvcm1lXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9fcmVwb3J0SGVhZGVyU2VjdGlvbnMoKXtcclxuICAgICAgICBfX2hlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih0KXtcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5zZWN0aW9ucy5oZWFkZXInLCB2YWx1ZSA6IHQgfSk7XHJcbiAgICAgICAgICBpZih0LnRlbXBsYXRlKSByZXR1cm4gX19NRVJHRV9BTkRfU0VORCh0LnRlbXBsYXRlLCB0LCAnY29tcGlsZWRmbicpXHJcbiAgICAgICAgICBpZih0LnZhbHVlUHJvdmlkZXIpIHJldHVybiBtZWRpYXRvci5zZW5kKHQudmFsdWVQcm92aWRlcih0KSk7XHJcbiAgICAgICAgfSkgICAgICAgICAgICBcclxuICAgICAgfSBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gSW5pY2lhbGl6YXIgZWwgb2JqZXRvIHF1ZSBzaXJ2ZSBkZSBhY3VtdWxhZG9yXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9fcmVzb2x2ZVN1bW1hcnlPYmplY3QoKXtcclxuICAgICAgICB2YXIgX19zdW1tYXJ5ID0gSlNPTi5wYXJzZShfX3JkLmNvbnRleHQuc3VtbWFyeSB8fCAne30nKTtcclxuICAgICAgICBpZihfX3JkLmNvbnRleHQub25Jbml0U3VtbWFyeU9iamVjdCkgcmV0dXJuIF9fcmQuY29udGV4dC5vbkluaXRTdW1tYXJ5T2JqZWN0KF9fc3VtbWFyeSk7ICAgICAgXHJcbiAgICAgICAgcmV0dXJuIF9fc3VtbWFyeTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIF9fYnJlYWtJbmRleCA9IC0xOyBcclxuXHJcbiAgICAgIHZhciBfX3N1bW1hcnkgICAgPSBfX3Jlc29sdmVTdW1tYXJ5T2JqZWN0KCk7XHJcbiAgICAgIHZhciBfX2hlYWRlcnMgICAgPSAoX19yZC5jb250ZXh0LnNlY3Rpb25zIHx8IFtdKS53aGVyZSh7IHR5cGUgOiAnaGVhZGVyJyB9KTtcclxuICAgICAgdmFyIF9fdG90YWxzICAgICA9IChfX3JkLmNvbnRleHQuc2VjdGlvbnMgfHwgW10pLndoZXJlKHsgdHlwZSA6ICd0b3RhbCcgfSk7XHJcbiAgICAgIHZhciBfX2Zvb3RlcnMgICAgPSAoX19yZC5jb250ZXh0LnNlY3Rpb25zIHx8IFtdKS53aGVyZSh7IHR5cGUgOiAnZm9vdGVyJyB9KTtcclxuICAgICAgdmFyIF9fZGV0YWlscyAgICA9IF9fcmQuY29udGV4dC5kZXRhaWxzIHx8IFtdO1xyXG4gICAgICB2YXIgX19ncm91cHMgICAgID0gX19yZC5jb250ZXh0Lmdyb3VwcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24oZywgaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7ICBuYW1lICAgICAgIDogJ0cnICsgKGkrMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZCAgICAgICAgIDogX19yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb24gOiBnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCAgICA6ICcnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgICAgICAgOiBtb2R1bGUuY2xvbmUoX19zdW1tYXJ5KSwgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0IDogZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19rID0gdmFsdWVbdGhpcy5kZWZpbml0aW9uLmtleV0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fR3ggPSBzZWxmLkJTW3RoaXMubmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3guYWxsW19fa10gPSBfX0d4LmFsbFtfX2tdIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LmFsbFtfX2tdLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LnJlY29yZENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fX3Jlc3VtZSA9PT0gZmFsc2UpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fX3Jlc3VtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5jb3B5KHZhbHVlLCB0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX19yZXN1bWUgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmxlbmd0aCA+IDApICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5jb3B5KHZhbHVlLCB0aGlzLmRhdGEpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW0gIDogZnVuY3Rpb24odmFsdWUpeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fayA9IHZhbHVlW3RoaXMuZGVmaW5pdGlvbi5rZXldLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX0d4ID0gc2VsZi5CU1t0aGlzLm5hbWVdOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5hbGxbX19rXSA9IF9fR3guYWxsW19fa10gfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3guYWxsW19fa10ucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3gucmVjb3JkQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fX3Jlc3VtZSA9PT0gZmFsc2UpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5zdW0odmFsdWUsIHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3QgOiBmdW5jdGlvbih2YWx1ZSl7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVt0aGlzLmRlZmluaXRpb24ua2V5XSA9PSB0aGlzLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIHx8IFtdOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIHNlbGYuQlMgPSB7IHJlcG9ydERlZmluaXRpb24gOiBfX3JkLCBtZWRpYXRvciA6IG1lZGlhdG9yIH07ICAgICAgICAgICAgICBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBPcmRlbmFyIGxvcyBkYXRvc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGlmKF9fcmQuY29udGV4dC5pdGVyYXRlZm4pe1xyXG4gICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5sb2cubWVzc2FnZScsIHRleHQgOiAnSW5pY2lhbGl6YW5kbyBlbGVtZW50b3MuLi4nIH0pO1xyXG4gICAgICAgIF9fZGF0YVNldC5mb3JFYWNoKF9fcmQuY29udGV4dC5pdGVyYXRlZm4pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKF9fcmQuY29udGV4dC5vcmRlckJ5KXtcclxuICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQubG9nLm1lc3NhZ2UnLCB0ZXh0IDogJ09yZGVuYW5kbyBkYXRvcy4uLicgfSk7XHJcbiAgICAgICAgX19kYXRhU2V0LnNvcnRCeShfX3JkLmNvbnRleHQub3JkZXJCeSwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gSW5pY2lhbGl6YXJcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBzZWxmLkJTID0geyByZWNvcmRDb3VudCAgICAgIDogMCwgXHJcbiAgICAgICAgICAgICAgICAgIEcwICAgICAgICAgICAgICAgOiBtb2R1bGUuY2xvbmUoX19zdW1tYXJ5KSxcclxuICAgICAgICAgICAgICAgICAgZGF0YVNldCAgICAgICAgICA6IF9fZGF0YVNldCxcclxuICAgICAgICAgICAgICAgICAgcmVwb3J0RGVmaW5pdGlvbiA6IF9fcmQsIFxyXG4gICAgICAgICAgICAgICAgICBtZWRpYXRvciAgICAgICAgIDogbWVkaWF0b3IgfTtcclxuICAgICAgX19ncm91cHMuZm9yRWFjaCggZnVuY3Rpb24oZywgaSl7ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGcuY3VycmVudCA9IChfX2RhdGFTZXQgJiYgX19kYXRhU2V0WzBdKSA/IF9fZGF0YVNldFswXVtnLmRlZmluaXRpb24ua2V5XSA6ICcnO1xyXG4gICAgICAgIHNlbGYuQlNbZy5uYW1lXSA9IHsgcmVjb3JkQ291bnQgOiAwLCBhbGwgOiB7fSB9O1xyXG4gICAgICB9KTtcclxuICAgICAgaWYoX19yZC5jb250ZXh0Lm9uU3RhcnRmbikgX19yZC5jb250ZXh0Lm9uU3RhcnRmbihzZWxmLkJTKTtcclxuICAgICAgX19pbml0Q29udGVudFByb3ZpZGVycygpO1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQucmVuZGVyLnJvd3MnIH0pO1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQubG9nLm1lc3NhZ2UnLCB0ZXh0IDogJ0dlbmVyYW5kbyBpbmZvcm1lLi4uJyB9KTtcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIENhYmVjZXJhcyBkZWwgaW5mb3JtZVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgX19yZXBvcnRIZWFkZXJTZWN0aW9ucygpO1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gQ2FiZWNlcmFzIGluaWNpYWxlc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgaWYoX19kYXRhU2V0Lmxlbmd0aCA+IDApIF9fZ3JvdXBzSGVhZGVycygpOyBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEl0ZXJhciBzb2JyZSBsb3MgZWxlbWVudG9zXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBfX2RhdGFTZXQuZm9yRWFjaChmdW5jdGlvbihyLCBpKXsgXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIFByb2Nlc2FyIGVsIGVsZW1lbnRvXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgICAgICAgIFxyXG4gICAgICAgIHNlbGYuQlMucmVjb3JkQ291bnQrKztcclxuICAgICAgICBzZWxmLkJTLmlzTGFzdFJvdyAgICAgICAgPSBfX2RhdGFTZXQubGVuZ3RoID09PSBzZWxmLkJTLnJlY29yZENvdW50O1xyXG4gICAgICAgIHNlbGYuQlMuaXNMYXN0Um93SW5Hcm91cCA9IHNlbGYuQlMuaXNMYXN0Um93O1xyXG4gICAgICAgIHNlbGYuQlMucGVyY2VudCAgICAgID0gKHNlbGYuQlMucmVjb3JkQ291bnQvX19kYXRhU2V0Lmxlbmd0aCkgKiAxMDA7ICBcclxuICAgICAgICBzZWxmLkJTLnByZXZpb3VzICAgICA9IHNlbGYuQlMuZGF0YSB8fCByO1xyXG4gICAgICAgIHNlbGYuQlMuZGF0YSAgICAgICAgID0gcjsgXHJcbiAgICAgICAgX19ncm91cHMuZm9yRWFjaCggZnVuY3Rpb24oZywgaSl7IFxyXG4gICAgICAgICAgc2VsZi5CU1tnLm5hbWVdLmRhdGEgID0gT2JqZWN0LmNyZWF0ZShnLmRhdGEpO1xyXG4gICAgICAgIH0pOyBcclxuICAgICAgICBtb2R1bGUuUmVwb3J0RW5naW5lLnN1bShyLCBzZWxmLkJTLkcwKTsgICAgICAgIFxyXG4gICAgICAgIGlmKF9fcmQuY29udGV4dC5vblJvd2ZuKSBfX3JkLmNvbnRleHQub25Sb3dmbihzZWxmLkJTKTtcclxuICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSAgOiAncmVwb3J0LnJlbmRlci5yb3cnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgOiBzZWxmLkJTLnBlcmNlbnQudG9GaXhlZCgxKSArICcgJScsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6IHNlbGYuQlMucGVyY2VudCB9KTtcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gRGV0ZXJtaW5hciBzaSBoYXkgY2FtYmlvIGVuIGFsZ3VuYSBkZSBsYXMgY2xhdmVzIGRlIGFncnVwYWNpw7NuXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGlmKF9fZ3JvdXBzLmV2ZXJ5KCBmdW5jdGlvbihnKXsgcmV0dXJuIGcudGVzdChyKSB9KSl7XHJcbiAgICAgICAgICBfX2dyb3Vwcy5mb3JFYWNoKCBmdW5jdGlvbihnKXsgZy5zdW0ocik7IH0pOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNleyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgX19ncm91cHMuc29tZSggZnVuY3Rpb24oZywgaSl7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIWcudGVzdChyKSl7XHJcbiAgICAgICAgICAgICAgX19icmVha0luZGV4ID0gaTtcclxuICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgIC8vIFBpZXMgZGUgZ3J1cG8gZGUgbG9zIHF1ZSBoYW4gY2FtYmlhZG9cclxuICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgIF9fZ3JvdXBzRm9vdGVycyhfX2JyZWFrSW5kZXgpO1xyXG4gICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgLy8gQWN0dWFsaXphciBsb3MgZ3J1cG9zXHJcbiAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICBfX2dyb3Vwcy5mb3JFYWNoKCBmdW5jdGlvbihncnVwbywgaWkpeyAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoaWkgPj0gX19icmVha0luZGV4KXtcclxuICAgICAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAvLyBJbmljaWFsaXphciBsb3MgcXVlIGhhbiBjYW1iaWFkb1xyXG4gICAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgIGdydXBvLmluaXQocilcclxuICAgICAgICAgICAgICAgICAgX19icmVha0luZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgIC8vIEFjdW11bGFyIHZhbG9yZXMgZGUgbG9zIHF1ZSBzaWd1ZW4gaWd1YWxcclxuICAgICAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICBncnVwby5zdW0ocik7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgLy8gTm90aWZpY2FyIGRlbCBldmVudG8gb25Hcm91cENoYW5nZVxyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIF9fZ3JvdXBzLmZvckVhY2goZnVuY3Rpb24oZyl7XHJcbiAgICAgICAgICAgIGcuY3VycmVudCA9IHJbZy5kZWZpbml0aW9uLmtleV07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmKF9fcmQuY29udGV4dC5vbkdyb3VwQ2hhbmdlZm4pIF9fcmQuY29udGV4dC5vbkdyb3VwQ2hhbmdlZm4oc2VsZi5CUyk7ICAgICAgICAgIFxyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgIDogJ3JlcG9ydC5zZWN0aW9ucy5ncm91cC5jaGFuZ2UnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6ICdfX2dyb3VwcycgfSk7XHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAvLyBDYWJlY2VyYXNcclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIF9fZ3JvdXBzSGVhZGVycygpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIERldGVybWluYXIgc2kgZXN0ZSBlcyBlbCDDumx0aW1vIGVsZW1lbnRvIGRlIGxhIGFncnVwYWNpw7NuIFxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PTtcclxuICAgICAgICBpZihfX2dyb3Vwcy5sZW5ndGggJiYgIXNlbGYuQlMuaXNMYXN0Um93ICl7XHJcbiAgICAgICAgICB2YXIgX19uZXh0ICAgICAgICAgICAgICAgPSBfX2RhdGFTZXRbc2VsZi5CUy5yZWNvcmRDb3VudF07ICAgICAgICAgIFxyXG4gICAgICAgICAgc2VsZi5CUy5pc0xhc3RSb3dJbkdyb3VwID0gISBfX2dyb3Vwcy5ldmVyeSggZnVuY3Rpb24oZyl7XHJcbiAgICAgICAgICAgIHZhciBfX2sgPSBnLmRlZmluaXRpb24ua2V5O1xyXG4gICAgICAgICAgICByZXR1cm4gX19uZXh0W19fa10gPT09IHNlbGYuQlMuZGF0YVtfX2tdO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIFNlY2Npb25lcyBkZSBkZXRhbGxlXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgX19kZXRhaWxzU2VjdGlvbnMoKSAgICAgICAgICAgIFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmKF9fZGF0YVNldC5sZW5ndGggPiAwKXsgXHJcbiAgICAgICAgc2VsZi5CUy5wcmV2aW91cyA9IHNlbGYuQlMuZGF0YTtcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIFBpZXMgZGUgZ3J1cG9cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIF9fZ3JvdXBzRm9vdGVycygpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBUb3RhbCBnZW5lcmFsXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBfX2dyYW5kVG90YWxTZWN0aW9ucygpO1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQucmVuZGVyLmVuZCcgfSk7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5lbmQnIH0pO1xyXG4gICAgICBtZWRpYXRvci5mbHVzaCgpO1xyXG4gICAgICBjb25zb2xlLnRpbWVFbmQoJ1JlbmRlcicpO1xyXG4gICAgfVxyXG4gICAgICAgICAgXHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmNvcHkgICAgPSBmdW5jdGlvbihzLCBkKXsgT2JqZWN0LmtleXMoZCkubWFwKGZ1bmN0aW9uKGspeyBkW2tdID0gc1trXTt9KTt9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lLnN1bSAgICAgPSBmdW5jdGlvbihzLCBkKXsgT2JqZWN0LmtleXMoZCkubWFwKGZ1bmN0aW9uKGspeyBkW2tdICs9IHNba107fSk7fSAgIFxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5jb21wdXRlID0gZnVuY3Rpb24oZHMsIG5hbWUpeyByZXR1cm4gZHMucmVkdWNlKCBmdW5jdGlvbih0LCBvKXsgcmV0dXJuIHQgKyBvW25hbWVdOyB9LCAwLjApOyB9XHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmdyb3VwICAgPSBmdW5jdGlvbihhLCBjKXtcclxuXHQgICAgdmFyIGRzID0gYTtcclxuXHQgICAgdmFyIF9fZiA9IGZ1bmN0aW9uKGssIHQpe1xyXG5cdCAgICAgIGRzLmRpc3RpbmN0KCBmdW5jdGlvbih2KXsgcmV0dXJuIHZba107IH0pXHQgICAgICAgICAgICBcclxuXHQgICAgICAgIC5mb3JFYWNoICggZnVuY3Rpb24odil7IGNbdl0gPSBkcy5yZWR1Y2UoIGZ1bmN0aW9uKHAsIGMsIGksIGEpeyByZXR1cm4gKGNba109PXYpID8gcCArIGNbdF0gOiBwOyB9LCAwLjApOyB9KTtcclxuICAgICAgICByZXR1cm4gX19mO1x0ICAgICAgICAgICBcclxuXHQgICAgfVxyXG5cdCAgICByZXR1cm4gX19mO1xyXG4gICAgfVxyXG4gXHJcbiAgfSkoX21vZHVsZSk7XHJcblxyXG59KF9fbW9kdWxlLCAnUG9sJykpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX19tb2R1bGUuUG9sOyIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYCAgXHJcbjxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWJvdHRvbVwiPlxyXG4gIDxoMT5Tb2JyZSBOb3RhcyBBcHA8L2gxPlxyXG4gIDxwIHN0eWxlPVwidGV4dC1pbmRlbnQ6MWVtO1wiPlxyXG4gICAgTm90YXMgQXBwIGVzIHVuYSBwcnVlYmEgZGUgY29uY2VwdG8gZGUgbG8gcXVlIHBvZHLDrWEgc2VyIHVuIDxzcGFuIGNsYXNzPVwidzMtYm9sZCB3My1pdGFsaWNcIj5mcmFtZXdvcms8L3NwYW4+IFxyXG4gICAgc2VuY2lsbG8gY29uIGVsIGN1YWwgZGVzYXJyb2xsYXIgYXBsaWNhY2lvbmVzIDxzcGFuIGNsYXNzPVwidzMtYm9sZCB3My1pdGFsaWNcIj5TUEE8L3NwYW4+IGJhc2FkYXMgw7puaWNhbWVudGUgZW4gPHNwYW4gY2xhc3M9XCJ3My1ib2xkXCI+SFRNTDU8L3NwYW4+IHkgPHNwYW4gY2xhc3M9XCJ3My1ib2xkXCI+SmF2YVNjcmlwdDwvc3Bhbj4uXHJcbiAgPC9wPlxyXG4gIDxwIHN0eWxlPVwidGV4dC1pbmRlbnQ6MWVtO1wiPlxyXG4gICAgRXN0YXMgYXBsaWNhY2lvbmVzIHNlcsOtYW4gc3ViY2VwdGlibGVzIGRlIHNlciBpbnN0YWxhZGFzIGVuIGRpc3Bvc2l0aXZvcyBtw7N2aWxlcyBjb21vIHVuYSA8c3BhbiBjbGFzcz1cInczLWJvbGQgdzMtaXRhbGljXCI+UFdBPC9zcGFuPi5cclxuICA8L3A+XHJcbiAgPHVsIGNsYXNzPVwidzMtdWwgdzMtYm9yZGVyXCI+XHJcbiAgICA8bGk+PGgyPlJlZmVyZW5jaWFzPC9oMj48L2xpPlxyXG4gICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2VzLndpa2lwZWRpYS5vcmcvd2lraS9TaW5nbGUtcGFnZV9hcHBsaWNhdGlvblwiIHRhcmdldD1cIl9ibGFua1wiPlNQQSAoU2luZ2xlLXBhZ2UgYXBwbGljYXRpb24pPC9hPjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZXMud2lraXBlZGlhLm9yZy93aWtpL1Byb2dyZXNzaXZlX1dlYl9BcHBzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UFdBIChQcm9ncmVzc2l2ZSBXZWIgQXBwcyk8L2E+PC9saT5cclxuICA8L3VsPlxyXG4gIDxwIHN0eWxlPVwidGV4dC1pbmRlbnQ6MWVtO1wiPlxyXG4gICAgUGFyYSBlbCBkZXNhcnJvbGxvIGRlIGVzdGEgYXBsaWNhY2nDs24gbm8gc2UgaGFuIHV0aWxpemFkbyBuaW5ndW5vIGRlIGxvcyA8c3BhbiBjbGFzcz1cInczLWJvbGQgdzMtaXRhbGljXCI+ZnJhbWV3b3Jrczwvc3Bhbj4gZXhpc3RlbnRlcyBjb21vIHB1ZWRlbiBzZXIgQW5ndWxhciwgUmVhY3QgbyBWdWUuanMuXHJcbiAgPC9wPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lciB3My1tYXJnaW4tYm90dG9tIHczLWNlbnRlclwiPlxyXG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGFib3V0LWJ0bi1iYWNrIGNsYXNzPVwidzMtYnV0dG9uIHczLWJsYWNrXCI+Vm9sdmVyPC9idXR0b24+XHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICByZXR1cm4ge1xyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLmZvcm1hdCh0aGlzKSwgXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnZGl2Jywgb3B0aW9ucyk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCA6IGNvbnRhaW5lciA9PiB7XHJcbiAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbYWJvdXQtYnRuLWJhY2tdJylcclxuICAgICAgICAgICAgICAgLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgaGlzdG9yeS5iYWNrKCk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYCAgXHJcbiAgPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lciB3My1jZW50ZXJcIiBzdHlsZT1cInBhZGRpbmctdG9wOjIwJTtcIj5cclxuICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1nL2xvZ28ucG5nXCIgYWx0PVwiQ2FyXCIgc3R5bGU9XCJ3aWR0aDogNzUlO1wiPlxyXG4gICAgPHA+TGEgYXBwIHF1ZSB0ZSBwZXJtaXRlIGFsbWFjZW5hciB0b2RhcyB0dXMgbm90YXMgZW4gZWwgbcOzdmlsISEhPC9wPlxyXG4gIDwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICByZXR1cm4ge1xyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLmZvcm1hdCh0aGlzKSxcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcG9sLmJ1aWxkKCdkaXYnLCBvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkIDogY29udGFpbmVyID0+IHtcclxuXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCLvu79pbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYVwiO1xyXG5pbXBvcnQgRGJXcmFwcGVyU2VydmljZSBmcm9tIFwiLi4vbGliL2RiV3JhcHBlci5zZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBOT1RBU19EQVRBQkFTRSAgID0gJ25vdGFzLWFwcC5kYic7IFxyXG5jb25zdCBOT1RBU19UQUJMRV9OQU1FID0gJ25vdGFzJztcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgXHJcbjxkaXYgbm90YXMtY29udGFpbmVyIGNsYXNzPVwiXCIgc3R5bGU9XCJwYWRkaW5nOjA7IG1hcmdpbi1ib3R0b206NzBweDtcIj5cclxuPC9kaXY+XHJcbjxidXR0b24gYnRuLWFkZC1ub3RlIGNsYXNzPVwidzMtYnV0dG9uIHczLWJsYWNrIHczLWNpcmNsZVwiPu+8izwvYnV0dG9uPlxyXG5gO1xyXG5cclxuY29uc3QgX19pdGVtX3RlbXBsYXRlID1gXHJcbjxkaXYgc3R5bGU9XCJwYWRkaW5nOjVweCAwXCIgaWQ9XCJub3RlLXtrZXl9XCI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbGlnaHQtZ3JleVwiIHN0eWxlPVwicGFkZGluZzo1cHhcIj5cclxuICAgIDxkaXYgYnRuLWV4cGFuZD48Yj57dGl0bGV9PC9iPjxpPis8L2k+PC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJ3My1jb250YWluZXJcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTsgc3R5bGU9XCJwYWRkaW5nOjVweFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInczLWJvcmRlci1ib3R0b21cIiBzdHlsZT1cInRleHQtYWxpZ246cmlnaHRcIj57ZGF0ZX08L2Rpdj5cclxuICAgIDxwIGNsYXNzPVwidzMtYm9yZGVyIHczLXBhbGUteWVsbG93XCIgc3R5bGU9XCJwYWRkaW5nOjVweDttaW4taGVpZ2h0OiA0ZW07bWFyZ2luOjVweCAwXCI+e3RleHR9PC9wPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ3My1jZW50ZXJcIj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkZWxldGUte2tleX1cIiBidG4taXRlbS1kZWxldGUgY2xhc3M9XCJ3My1idXR0b24gdzMteGxhcmdlIGZhIGZhLXRyYXNoXCI+PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRiICAgICA6ICcnLFxyXG4gICAgcm93cyAgIDogW10sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7IFxyXG4gICAgICAgIGlubmVySFRNTCA6IF9fdGVtcGxhdGUuZm9ybWF0KHRoaXMpLFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwb2wuYnVpbGQoJ2RpdicsIG9wdGlvbnMpOyBcclxuICAgIH0sXHJcbiAgICBtb3VudGVkIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbYnRuLWFkZC1ub3RlXScpXHJcbiAgICAgICAgICAgICAgIC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIHZhciBfX3BheWxvYWQgPSB7IGtleSAgIDogbmV3IERhdGUoKS52YWx1ZU9mKCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgIDogJzIxLzAyLzIwMjAnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICdOdWV2YSBub3RhJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgOiAnVGV4dG8gZGUgbGEgbm90YScgfTtcclxuICAgICAgICAgICAgICAgICBzYXZlTm90ZS5hcHBseSh0aGlzLCBbX19wYXlsb2FkXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCBub3RhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dzLnB1c2gobm90YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgX19yZW5kZXIoKTsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgIHZhciBfX2xvYWREYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGJcclxuICAgICAgICAgICAgLnJlYWRBbGwoTk9UQVNfVEFCTEVfTkFNRSlcclxuICAgICAgICAgICAgLnRoZW4oIHZhbHVlcyA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yb3dzID0gdmFsdWVzO1xyXG4gICAgICAgICAgICAgIF9fcmVuZGVyKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdmFyIF9fZGVsZXRlID0gKHRhcmdldCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldC5pZCk7XHJcbiAgICAgICAgbGV0IF9faWQgPSB0YXJnZXQuaWQuc3BsaXQoJy0nKVsxXTtcclxuICAgICAgICBsZXQgX19lbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGUtezB9Jy5mb3JtYXQoX19pZCkpO1xyXG4gICAgICAgIHRoaXMucm93cy5yZW1vdmUoIHRoaXMucm93cy53aGVyZSggeyBrZXkgOiBfX2lkIH0pWzBdKTtcclxuICAgICAgICBfX2VsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfX2VsZW1lbnQpOyAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIF9fcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBfX2NvbnRhaW5lciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbbm90YXMtY29udGFpbmVyXScpO1xyXG4gICAgICAgIF9fY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMucm93c1xyXG4gICAgICAgICAgICAubWFwKCBub3RlID0+IHBvbC5idWlsZCgnZGl2JywgeyBpbm5lckhUTUwgOiBfX2l0ZW1fdGVtcGxhdGUuZm9ybWF0KG5vdGUpIH0pKVxyXG4gICAgICAgICAgICAubWFwKCBlID0+IGUuZmlyc3RFbGVtZW50Q2hpbGQgIClcclxuICAgICAgICAgICAgLmZvckVhY2goIGUgPT4ge1xyXG4gICAgICAgICAgICAgIGUucXVlcnlTZWxlY3RvcignW2J0bi1pdGVtLWRlbGV0ZV0nKVxyXG4gICAgICAgICAgICAgICAub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIF9fZGVsZXRlKGV2ZW50LnRhcmdldClcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIF9fY29udGFpbmVyLmFwcGVuZENoaWxkKGUpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgcG9sLnRvQXJyYXkoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tidG4tZXhwYW5kXScpKVxyXG4gICAgICAgICAuZm9yRWFjaChoNCA9PiB7XHJcbiAgICAgICAgICAgaDQub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgIGxldCBfX3N0eWxlID0gaDQucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGU7XHJcbiAgICAgICAgICAgICBpZihfX3N0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKXtcclxuICAgICAgICAgICAgICAgIF9fc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaDQucXVlcnlTZWxlY3RvcignaScpLnRleHRDb250ZW50ID0gJy0nO1xyXG4gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgX19zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICBoNC5xdWVyeVNlbGVjdG9yKCdpJykudGV4dENvbnRlbnQgPSAnKyc7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmRiID0gbmV3IERiV3JhcHBlclNlcnZpY2UoTk9UQVNfREFUQUJBU0UpO1xyXG4gICAgICB0aGlzLmRiXHJcbiAgICAgICAgICAub3BlbkRiKClcclxuICAgICAgICAgIC50aGVuKCBkYiA9PiB7XHJcbiAgICAgICAgICAgIF9fbG9hZERhdGEoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZU5vdGUodGFyZ2V0KSB7XHJcbiAgdGhpcy5kYlxyXG4gICAgICAuZGVsZXRlKE5PVEFTX1RBQkxFX05BTUUsIF9fdGFyZ2V0LmtleSlcclxuICAgICAgLnRoZW4oICgpID0+IHtcclxuICAgICAgICB0aGlzLnJvd3MucmVtb3ZlKF9fdGFyZ2V0KTtcclxuICAgICAgICBcclxuICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVOb3RlKHBheWxvYWQpIHtcclxuICByZXR1cm4gdGhpcy5kYlxyXG4gICAgICAgICAgICAgLnNhdmUoTk9UQVNfVEFCTEVfTkFNRSwgcGF5bG9hZCk7XHJcblxyXG4gICAgICAgICAgICAvLy50aGVuKCBkYXRhID0+IHtcclxuICAgICAgICAgICAgLy8gIHRoaXMucm93cy5wdXNoKGRhdGEpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL30pLmNhdGNoKCBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIC8vfSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==