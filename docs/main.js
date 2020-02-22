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
          padding   : '0 0 60px 0'
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
      window.initMapaScroll();
    } catch (error) {
      console.log("Service Worker Registration Failed");
    }
  }

});

// ==============================================================================
// Scroll
// ==============================================================================
(function(module){
    
  function debounce(func, wait, immediate) {
	  var timeout;
	  return function() {
		  var context = this, args = arguments;
		  var later = function() {
			  timeout = null;
			  if (!immediate) func.apply(context, args);
		  };
		  var callNow = immediate && !timeout;
		  clearTimeout(timeout);
		  timeout = setTimeout(later, wait);
		  if (callNow) func.apply(context, args);
	  };
  };                     
      
  module.initMapaScroll = function(){        
    var navbar = document.getElementById("appMenu");
    if(navbar.className.includes('sticky')) return;
    var sticky = navbar.offsetTop;          
    window.onscroll = function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };  
  }
  window.addEventListener("resize", debounce(module.initMapaScroll, 150), false);
}(window));

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
      },
      $ : function(e, control){ 
        return (typeof e === 'string') ? document.getElementById(e) || 
                                         module.toArray((control || document).querySelectorAll(e) || [])
                                       : e;
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

    //function fillTemplate(e, scope) {
    //  var _root = $(e);
    //  var _elements = $('[xbind]', _root); 
    //  if (_root.attributes.xbind) _elements.push(_root);
    //  _elements.forEach(function (child) {
    //    String.trimValues(child.attributes.xbind.value.split(';')).forEach(function (token) {
    //      if (token === '') return;
    //      var _tokens = String.trimValues(token.split(':'));            
    //      var _params = String.trimValues(_tokens[1].split(/\s|\,/));
    //      var _value = getValue(_params[0], scope);
    //      if (typeof (_value) == 'function') {
    //        var _args = _params.slice(1)
    //                           .reduce(function (a, p) {
    //                             // xbind="textContent:Data.fnTest @Other,A,5"
    //                             a.push(p.charAt(0) == '@' ? getValue(p.slice(1), scope) : p);
    //                             return a;
    //                           }, [scope, child]);
    //        _value = _value.apply(scope, _args);
    //      } else if (_params[1]) {
    //        var _func = getValue(_params[1], scope);
    //        _value = _func(_value, _params[2], scope, child);
    //      }
    //      child[_tokens[0]] = _value;
    //    });
    //  });
    //  return e;
    //}

    //function executeTemplate(e, values, dom) {
    //  var _template = $(e);
    //  var _result   = values.reduce( function(a, v, i){
    //    var _node = { index : i,
    //                  data  : v,
    //                  node  : fillTemplate(_template.cloneNode(true), v) };
    //    a.nodes.push(_node);
    //    if (!dom) a.html.push(_node.node.outerHTML.replace(/xbind="[^"]*"/g, ''));
    //    return a; 
    //  }, { nodes : [], html : [] });
    //  return dom ? _result.nodes : _result.html.join('');
    //}
    
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
<div notas-container class="" style="padding:0; margin-bottom:43px;">
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

        let __id = target.id.split('-')[1];
        let __element = document.getElementById('note-{0}'.format(__id));

        let __payload = this.rows.where( { key : parseInt(__id, 10) })[0];
        deleteNote.apply(this, [__id])
                  .then( () => {
          console.log('Delete ok');
          this.rows.remove(__payload);
          __element.parentNode.removeChild(__element);
        });               
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

function deleteNote(key) {
  return this.db.delete(NOTAS_TABLE_NAME, key);
}

function saveNote(payload) {
  return this.db.save(NOTAS_TABLE_NAME, payload);
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW4tY29udGVudC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVudS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvZGJXcmFwcGVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9tYXBhLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hYm91dC5wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ob21lLnBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2xpc3QucGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2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VztBQUNYO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgICBcclxuICA8cD57dGV4dH08L3A+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gIHJldHVybiB7XHJcbiAgICB0ZXh0ICA6ICfCqSBSYWZhZWwgQ2FzdHJvIEfDs21leiwgMjAyMCcsXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7IFxyXG4gICAgICAgIGlkICAgICAgICA6IFwiYXBwRm9vdGVyXCIsXHJcbiAgICAgICAgaW5uZXJIVE1MIDogX190ZW1wbGF0ZS5mb3JtYXQodGhpcyksXHJcbiAgICAgICAgY2xhc3NOYW1lIDogJ3czLWNvbnRhaW5lciB3My10ZWFsIHczLWNlbnRlcidcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcG9sLmJ1aWxkKCdmb290ZXInLCBvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbihwYXJlbnQpe1xyXG4gICAgICBcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYFxyXG4gIDxoMT57dGl0bGV9PC9oMT5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRpdGxlICA6ICdOb3RhcyBBcHAnLFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpZCAgICAgICAgOiAnYXBwSGVhZGVyJyxcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLmZvcm1hdCh0aGlzKSxcclxuICAgICAgICBjbGFzc05hbWUgOiAndzMtY29udGFpbmVyIHczLXRlYWwnXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnaGVhZGVyJywgb3B0aW9ucyk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24ocGFyZW50KXtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGBgO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICByZXR1cm4ge1xyXG4gICAgdGV4dCAgOiAnJyxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaWQgICAgICAgIDogXCJhcHAtY29udGVudC1jb250YWluZXJcIixcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLmZvcm1hdCh0aGlzKSxcclxuICAgICAgICBjbGFzc05hbWUgOiAndzMtY29udGFpbmVyJyxcclxuICAgICAgICBzdHlsZSAgICAgOiB7IFxyXG4gICAgICAgICAgbWluSGVpZ2h0IDogJzQ0MHB4JyxcclxuICAgICAgICAgIHBhZGRpbmcgICA6ICcwIDAgNjBweCAwJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcG9sLmJ1aWxkKCdzZWN0aW9uJywgb3B0aW9ucyk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24ocGFyZW50KXtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGAgIFxyXG4gIDxhIGhyZWY9XCJcIiByb3V0ZS1saW5rIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uXCI+SW5pY2lvPC9hPlxyXG4gIDxhIGhyZWY9XCJsaXN0XCIgcm91dGUtbGluayBjbGFzcz1cInczLWJhci1pdGVtIHczLWJ1dHRvblwiPk5vdGFzPC9hPlxyXG4gIDxhIGhyZWY9XCJhYm91dFwiIHJvdXRlLWxpbmsgY2xhc3M9XCJ3My1iYXItaXRlbSB3My1idXR0b24gdzMtcmlnaHRcIj4/PC9hPlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICByZXR1cm4ge1xyXG4gICAgaWQgICAgIDogJ21lbnUuY29tcG9uZW50LnJlZicsXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7IFxyXG4gICAgICAgIGlkICAgICAgICA6IFwiYXBwTWVudVwiLFxyXG4gICAgICAgIGlubmVySFRNTCA6IF9fdGVtcGxhdGUuZm9ybWF0KHRoaXMpLFxyXG4gICAgICAgIGNsYXNzTmFtZSA6ICd3My1iYXIgdzMtYmxhY2snXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnbmF2Jywgb3B0aW9ucyk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24ocGFyZW50KXtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuL2xpYi9tYXBhLmpzXCI7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDb21wb25lbnRzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5pbXBvcnQgaGVhZGVyQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgZm9vdGVyQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvZm9vdGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgY29udGVudENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL21haW4tY29udGVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IG1lbnVDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9tZW51LmNvbXBvbmVudFwiO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUGFnZXNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmltcG9ydCBob21lUGFnZSBmcm9tIFwiLi92aWV3cy9ob21lLnBhZ2VcIjtcclxuaW1wb3J0IGxpc3RQYWdlIGZyb20gXCIuL3ZpZXdzL2xpc3QucGFnZVwiO1xyXG5pbXBvcnQgYWJvdXRQYWdlIGZyb20gXCIuL3ZpZXdzL2Fib3V0LnBhZ2VcIjtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJvdXRlc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgY29tcG9uZW50cyA9ICBbIFxyXG4gIGhlYWRlckNvbXBvbmVudCgpLFxyXG4gIG1lbnVDb21wb25lbnQoKSxcclxuICBjb250ZW50Q29tcG9uZW50KCksXHJcbiAgZm9vdGVyQ29tcG9uZW50KClcclxuXTtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZpZXdzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCB2aWV3cyA9IHsgXHJcbiAgJ2hvbWUnICAgIDogaG9tZVBhZ2UsXHJcbiAgJ2xpc3QnICAgIDogbGlzdFBhZ2UsXHJcbiAgJ2Fib3V0JyAgIDogYWJvdXRQYWdlIFxyXG59O1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEluaXQgQXBwXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4oZnVuY3Rpb24oKXtcclxuXHJcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHBDb250ZW50Jyk7XHJcbiAgY29tcG9uZW50cy5mb3JFYWNoKCBjID0+IHtcclxuICAgIHJvb3QuYXBwZW5kQ2hpbGQoYy5yZW5kZXIoKSk7XHJcbiAgICBpZihjLm1vdW50ZWQpIGMubW91bnRlZChyb290KTsgXHJcbiAgfSk7XHJcblxyXG4gIHBvbC50b0FycmF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb3V0ZS1saW5rXScpKVxyXG4gICAgIC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQub25jbGljayA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgbGV0IHBhdGhOYW1lID0gZS50YXJnZXQucGF0aG5hbWU7XHJcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeVxyXG4gICAgICAgICAgICAgICAgLnB1c2hTdGF0ZSh7fSwgcGF0aE5hbWUsIGxvY2F0aW9uLm9yaWdpbiArIHBhdGhOYW1lKTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHNob3dDb250ZW50KCk7XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgfSk7XHJcblxyXG59KSgpO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU3luYyBjb250ZW50XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwLWNvbnRlbnQtY29udGFpbmVyJyk7XHJcbmxldCBjdXJyZW50VmlldztcclxuZnVuY3Rpb24gc2hvd0NvbnRlbnQoKXtcclxuICBsZXQgcm91dGUgPSB3aW5kb3cubG9jYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAuaHJlZlxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKGRvY3VtZW50LmJhc2VVUkksICcnKTtcclxuICBsZXQgdmlld19yZWYgPSB2aWV3c1tyb3V0ZV0gfHwgdmlld3MuaG9tZTtcclxuICBpZighY3VycmVudFZpZXcgfHwgY3VycmVudFZpZXcgIT0gdmlld19yZWYpIHtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJzsgICAgXHJcbiAgICBjdXJyZW50VmlldyA9IHZpZXdfcmVmO1xyXG4gICAgbGV0IHZpZXdfaW5zdGFuY2UgPSBjdXJyZW50VmlldygpO1xyXG4gICAgaWYodmlld19pbnN0YW5jZS5pbml0KSB2aWV3X2luc3RhbmNlLmluaXQoKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3X2luc3RhbmNlLnJlbmRlcigpKTtcclxuICAgIGlmKHZpZXdfaW5zdGFuY2UubW91bnRlZCkgdmlld19pbnN0YW5jZS5tb3VudGVkKGNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuc2hvd0NvbnRlbnQoKTtcclxuXHJcbndpbmRvdy5vbnBvcHN0YXRlID0gc2hvd0NvbnRlbnQ7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTZXJ2aWNlV29ya2VyXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XHJcblxyXG4gIGlmKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3Ipe1xyXG4gICAgdHJ5IHtcclxuICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2VXb3JrZXIuanMnKTtcclxuICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciBSZWdpc3RlcmVkXCIpO1xyXG4gICAgICB3aW5kb3cuaW5pdE1hcGFTY3JvbGwoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSBXb3JrZXIgUmVnaXN0cmF0aW9uIEZhaWxlZFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTY3JvbGxcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbihmdW5jdGlvbihtb2R1bGUpe1xyXG4gICAgXHJcbiAgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XHJcblx0ICB2YXIgdGltZW91dDtcclxuXHQgIHJldHVybiBmdW5jdGlvbigpIHtcclxuXHRcdCAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xyXG5cdFx0ICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0ICB0aW1lb3V0ID0gbnVsbDtcclxuXHRcdFx0ICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHRcdCAgfTtcclxuXHRcdCAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XHJcblx0XHQgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHRcdCAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG5cdFx0ICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHQgIH07XHJcbiAgfTsgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgXHJcbiAgbW9kdWxlLmluaXRNYXBhU2Nyb2xsID0gZnVuY3Rpb24oKXsgICAgICAgIFxyXG4gICAgdmFyIG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwTWVudVwiKTtcclxuICAgIGlmKG5hdmJhci5jbGFzc05hbWUuaW5jbHVkZXMoJ3N0aWNreScpKSByZXR1cm47XHJcbiAgICB2YXIgc3RpY2t5ID0gbmF2YmFyLm9mZnNldFRvcDsgICAgICAgICAgXHJcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiBteUZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IHN0aWNreSkge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5XCIpO1xyXG4gICAgICB9XHJcbiAgICB9OyAgXHJcbiAgfVxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGRlYm91bmNlKG1vZHVsZS5pbml0TWFwYVNjcm9sbCwgMTUwKSwgZmFsc2UpO1xyXG59KHdpbmRvdykpOyIsIu+7v2ltcG9ydCBwb2wgZnJvbSBcIi4vbWFwYS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGJXcmFwcGVyU2VydmljZXtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgdGhpcy5kYm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kYiA9ICcnO1xyXG4gIH1cclxuXHJcbiAgb3BlbkRiKCl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgIGxldCByZXF1ZXN0ID0gd2luZG93LmluZGV4ZWREQi5vcGVuKHRoaXMuZGJuYW1lLCAxKTtcclxuXHJcblx0ICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKGUpID0+IHtcclxuICAgICAgICB0aGlzLmRiID0gZS50YXJnZXQucmVzdWx0O1xyXG5cdFx0ICAgIHJlc29sdmUodGhpcy5kYik7XHJcblx0ICAgIH07XHJcblxyXG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBlID0+IHsgIFxyXG4gICAgICAgIHJlamVjdCgnRXJyb3InKTtcclxuICAgICAgfTtcclxuXHRcclxuXHQgICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoZSkgPT4ge1xyXG5cdFx0ICAgIHRoaXMuZGIgPSBlLnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmKHRoaXMuZGIub2JqZWN0U3RvcmVOYW1lcyAmJiB0aGlzLmRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoXCJub3Rhc1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRiLmRlbGV0ZU9iamVjdFN0b3JlKFwibm90YXNcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdG9yZSA9IHRoaXMuZGIuY3JlYXRlT2JqZWN0U3RvcmUoXCJub3Rhc1wiLCB7IGtleVBhdGggOiBcImtleVwiIH0pOyAgICAgICBcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVhZEFsbChuYW1lKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB2YXIgX19pdGVtcyA9IFtdO1xyXG4gICAgICB0aGlzLmRiXHJcbiAgICAgICAgICAudHJhbnNhY3Rpb24obmFtZSwgXCJyZWFkb25seVwiKVxyXG4gICAgICAgICAgLm9iamVjdFN0b3JlKG5hbWUpXHJcbiAgICAgICAgICAub3BlbkN1cnNvcihJREJLZXlSYW5nZS5sb3dlckJvdW5kKDApKVxyXG4gICAgICAgICAgLm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgX19jdXJzb3IgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICBpZihfX2N1cnNvcikge1xyXG4gICAgICAgICAgICAgIF9faXRlbXMucHVzaChfX2N1cnNvci52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgX19jdXJzb3IuY29udGludWUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXNvbHZlKF9faXRlbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzYXZlKHN0b3JlLCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICB0aGlzLmRiXHJcbiAgICAgICAgICAudHJhbnNhY3Rpb24oc3RvcmUsIFwicmVhZHdyaXRlXCIpXHJcbiAgICAgICAgICAub2JqZWN0U3RvcmUoc3RvcmUpXHJcbiAgICAgICAgICAucHV0KHZhbHVlKVxyXG4gICAgICAgICAgLm9uc3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoc3RvcmUsIGtleSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICB0aGlzLmRiXHJcbiAgICAgICAgICAudHJhbnNhY3Rpb24oc3RvcmUsIFwicmVhZHdyaXRlXCIpXHJcbiAgICAgICAgICAub2JqZWN0U3RvcmUoc3RvcmUpXHJcbiAgICAgICAgICAuZGVsZXRlKGtleSlcclxuICAgICAgICAgIC5vbnN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlYWRPbmUoc3RvcmUsIGtleSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICB0aGlzLmRiXHJcbiAgICAgICAgICAudHJhbnNhY3Rpb24oc3RvcmUsIFwicmVhZHdyaXRlXCIpXHJcbiAgICAgICAgICAub2JqZWN0U3RvcmUoc3RvcmUpXHJcbiAgICAgICAgICAuZ2V0KGtleSlcclxuICAgICAgICAgIC5vbnN1Y2Nlc3MgPSBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgICB9ICAgICAgICAgXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcblxyXG4iLCJcclxuXHJcbmxldCBfX21vZHVsZSA9IHt9O1xyXG4oZnVuY3Rpb24obW9kdWxlLCBuYW1lKXtcclxuXHJcbiAgdmFyIF9tb2R1bGUgPSAgbW9kdWxlW25hbWVdID0geyBhcHBseSA6IGZ1bmN0aW9uIGFwcGx5KG8sIGMsIGQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkKSBhcHBseShvLCBkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobyAmJiBjICYmIHR5cGVvZiBjID09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gYyl7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNbcF0gPT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5KG9bcF0sIGNbcF0gKSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9bcF0gPSBjW3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX07ICAgICAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFV0aWxzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpe1xyXG4gICAgbW9kdWxlLmFwcGx5KG1vZHVsZSx7IFxyXG4gICAgICB0b0FycmF5ICAgICA6IGZ1bmN0aW9uKHYpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh2KTsgfSxcclxuICAgICAgaXNOdWxsICAgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdiA9PT0gbnVsbDsgfSxcclxuICAgICAgaXNBcnJheSAgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gQXJyYXkuaXNBcnJheSh2KTsgfSxcclxuICAgICAgaXNTdHJpbmcgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdHlwZW9mIHYgPT0gJ3N0cmluZyc7fSxcclxuICAgICAgaXNCb29sZWFuICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdHlwZW9mIHYgPT0gJ2Jvb2xlYW4nO30sXHJcbiAgICAgIGlzTnVtYmVyICAgIDogZnVuY3Rpb24odil7cmV0dXJuIHR5cGVvZiB2ID09ICdudW1iZXInO30sXHJcbiAgICAgIGlzRnVuY3Rpb24gIDogZnVuY3Rpb24odil7cmV0dXJuIHR5cGVvZiB2ID09ICdmdW5jdGlvbic7fSxcclxuICAgICAgaXNPYmplY3QgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdiAmJiB0eXBlb2YgdiA9PSAnb2JqZWN0Jzt9LFxyXG4gICAgICBjbG9uZSAgICAgICA6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICBpZihtb2R1bGUuaXNBcnJheShvKSkgICAgICAgICAgICAgcmV0dXJuIG8uc2xpY2UoMCk7XHJcbiAgICAgICAgaWYobW9kdWxlLmlzT2JqZWN0KG8pICYmIG8uY2xvbmUpIHJldHVybiBvLmNsb25lKCk7XHJcbiAgICAgICAgaWYobW9kdWxlLmlzT2JqZWN0KG8pKXsgICAgICAgICAgICAgICBcclxuICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvKS5yZWR1Y2UoIGZ1bmN0aW9uKGEsIGspe1xyXG4gICAgICAgICAgICBhW2tdID0gbW9kdWxlLmNsb25lKG9ba10pO1xyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgIH0sIHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgIH0sICAgICAgICBcclxuICAgICAgam9pbiAgICAgICAgOiBmdW5jdGlvbihpdGVtcywgcHJvcGVydHksIHNlcGFyYXRvcil7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLnJlZHVjZShmdW5jdGlvbihhLCBvKXsgcmV0dXJuIGEuYXBwZW5kKG9bcHJvcGVydHkgfHwgJ2lkJ10pOyB9LCBbXSlcclxuICAgICAgICAgICAgICAgICAgICAuam9pbihzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICctJyA6IChzZXBhcmF0b3IgfHwgJycpKTsgXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0cmluZ0J1aWxkZXIgOiBmdW5jdGlvbihzKXtcclxuICAgICAgICAgIHJldHVybiB7IHZhbHVlICAgICAgOiBzIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgYXBwZW5kICAgICA6IGZ1bmN0aW9uKHMpeyB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZSArIHM7IHJldHVybiB0aGlzO30sXHJcbiAgICAgICAgICAgICAgICAgICBhcHBlbmRMaW5lIDogZnVuY3Rpb24ocyl7IHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlICsgKHMgfHwgJycpICsgJ1xcbic7IHJldHVybiB0aGlzO319XHJcbiAgICAgIH0sXHJcbiAgICAgIGJ1aWxkIDogZnVuY3Rpb24odGFnTmFtZSwgbyl7XHJcbiAgICAgICAgcmV0dXJuIF9tb2R1bGUuYXBwbHkoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKSwgbyk7XHJcbiAgICAgIH0sXHJcbiAgICAgICQgOiBmdW5jdGlvbihlLCBjb250cm9sKXsgXHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSkgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnRvQXJyYXkoKGNvbnRyb2wgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoZSkgfHwgW10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZTtcclxuICAgICAgfSBcclxuICAgIH0pO1xyXG4gIH0oX21vZHVsZSkpO1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBTdHJpbmdzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpe1xyXG4gICAgbW9kdWxlLmFwcGx5KFN0cmluZywge1xyXG4gICAgICBzdHJpbmdCdWlsZGVyIDogbW9kdWxlLnN0cmluZ0J1aWxkZXIsXHJcbiAgICAgIGxlZnRQYWQgICAgICAgOiBmdW5jdGlvbiAodmFsLCBzaXplLCBjaCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAnJyArIHZhbDtcclxuICAgICAgICBpZiAoY2ggPT09IG51bGwgfHwgY2ggPT09IHVuZGVmaW5lZCB8fCBjaCA9PT0gJycpIGNoID0gJyAnOyAgICAgICAgICAgIFxyXG4gICAgICAgIHdoaWxlIChyZXN1bHQubGVuZ3RoIDwgc2l6ZSkgcmVzdWx0ID0gY2ggKyByZXN1bHQ7ICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSxcclxuICAgICAgdHJpbVZhbHVlcyA6IGZ1bmN0aW9uICh2YWx1ZXMpeyByZXR1cm4gdmFsdWVzLm1hcChmdW5jdGlvbihzKXtyZXR1cm4gcy50cmltKCk7fSk7fVxyXG4gICAgfSk7XHJcbiAgICBtb2R1bGUuYXBwbHkoU3RyaW5nLnByb3RvdHlwZSwge1xyXG4gICAgICByZXBsYWNlQWxsICA6IGZ1bmN0aW9uKHBhdHRlcm4sIHJlcGxhY2VtZW50KSB7IHJldHVybiB0aGlzLnNwbGl0KHBhdHRlcm4pLmpvaW4ocmVwbGFjZW1lbnQpOyB9LFxyXG4gICAgICByZXBlYXQgICAgICA6IFN0cmluZy5wcm90b3R5cGUucmVwZWF0ICAgICB8fCBmdW5jdGlvbihhKSB7IHJldHVybiBuZXcgQXJyYXkoYSArIDEpLmpvaW4odGhpcyk7IH0sXHJcbiAgICAgIGNvbnRhaW5zICAgIDogU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyAgIHx8IGZ1bmN0aW9uKHQsIHN0YXJ0KSB7IHJldHVybiB0aGlzLmluZGV4T2YodCkgPj0gKHN0YXJ0IHx8IDApOyB9LFxyXG4gICAgICBzdGFydHNXaXRoICA6IFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCB8fCBmdW5jdGlvbih0KXsgcmV0dXJuIHRoaXMuaW5kZXhPZih0KSA9PSAwOyB9LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIHRvRmxvYXQgICAgIDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMudHJpbSgpLnJlcGxhY2VBbGwoJy4nLCAnJykucmVwbGFjZUFsbCgnLCcsICcuJykgfSxcclxuICAgICAgZml4RGF0ZSAgICAgOiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5zcGxpdCgnICcpWzBdOyB9LFxyXG4gICAgICBmaXhUaW1lICAgICA6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLnNwbGl0KCcgJylbMV07IH0sXHJcbiAgICAgIGZpeFllYXIgICAgIDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuZml4RGF0ZSgpLnNwbGl0KCcvJylbMl07fSxcclxuICAgICAgdHJpbVNlY29uZHMgOiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5zcGxpdCgnOicpWzBdICsgJzonICsgdGhpcy5zcGxpdCgnOicpWzFdIDsgfSxcclxuICAgICAgcGFkZGluZ0xlZnQgOiBmdW5jdGlvbihwYWRkaW5nVmFsdWUpeyByZXR1cm4gKHBhZGRpbmdWYWx1ZSArIHRoaXMpLnNsaWNlKC1wYWRkaW5nVmFsdWUubGVuZ3RoKTsgfSxcclxuICAgICAgZm9ybWF0ICAgICAgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBfX2FyZyAgICAgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgdmFyIF9fY29udGV4dCA9IF9fYXJnW19fYXJnLmxlbmd0aCAtIDFdIHx8IHNlbGY7ICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvXFx7KFxcZCt8W157XSspXFx9L2csIGZ1bmN0aW9uKG0sIGtleSl7XHJcbiAgICAgICAgICBpZihrZXkuaW5kZXhPZignOicpID4gMCl7XHJcbiAgICAgICAgICAgIHZhciBfX2ZuID0ga2V5LnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgIF9fZm5bMF0gID0gZ2V0VmFsdWUoX19mblswXSwgX19jb250ZXh0KTtcclxuICAgICAgICAgICAgX19mblsxXSAgPSBnZXRWYWx1ZShfX2ZuWzFdLCBfX2NvbnRleHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gX19mblswXShfX2ZuWzFdLCBfX2NvbnRleHQpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIC9eXFxkKyQvLnRlc3Qoa2V5KSA/IF9fYXJnW2tleV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICh0eXBlb2YgX19jb250ZXh0W2tleV0gPT09IFwidW5kZWZpbmVkXCIpID8gZ2V0VmFsdWUoa2V5LCBfX2NvbnRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfX2NvbnRleHRba2V5XTsgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pOyAgICAgIFxyXG4gIH0oX21vZHVsZSkpOyAgICAgIFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBBcnJheVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgXHJcbiAgKGZ1bmN0aW9uKG1vZHVsZSl7XHJcbiAgICBtb2R1bGUuYXBwbHkoQXJyYXkucHJvdG90eXBlLCB7ICAgICAgICAgIFxyXG4gICAgICByZW1vdmUgICA6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4T2Yobyk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9IC0xKSB0aGlzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZCAgICAgIDogZnVuY3Rpb24obykge1xyXG4gICAgICAgIHRoaXMucHVzaChvKTtcclxuICAgICAgICByZXR1cm4gbztcclxuICAgICAgfSxcclxuICAgICAgYXBwZW5kICAgOiBmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoKG8pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9LFxyXG4gICAgICBpdGVtICAgICA6IGZ1bmN0aW9uKHByb3BOYW1lLCB2YWx1ZSwgZGVmKXtcclxuICAgICAgICByZXR1cm4gYXJndW1lbnRzPT0xID8gdGhpcy5maWx0ZXIoIGZ1bmN0aW9uKHYpe3JldHVybiB2WydpZCddID09IHByb3BOYW1lIHx8IHZbJ19pZCddID09IHByb3BOYW1lfSlbMF0gfHwgZGVmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZmlsdGVyKCBmdW5jdGlvbih2KXtyZXR1cm4gdltwcm9wTmFtZV0gPT0gdmFsdWV9KVswXSB8fCBkZWY7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRhaW5zIDogZnVuY3Rpb24ocHJvcE5hbWUsdmFsdWUpeyByZXR1cm4gdGhpcy5pdGVtKHByb3BOYW1lLHZhbHVlKTsgfSxcclxuICAgICAgbGFzdEl0ZW0gOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTsgfSxcclxuICAgICAgc2VsZWN0ICAgOiBmdW5jdGlvbihzZW50ZW5jZSl7IHJldHVybiB0aGlzLm1hcChzZW50ZW5jZSkgfSwgICBcclxuICAgICAgd2hlcmUgICAgOiBmdW5jdGlvbihzZW50ZW5jZSl7IFxyXG4gICAgICAgIGlmKG1vZHVsZS5pc0Z1bmN0aW9uKHNlbnRlbmNlKSkgcmV0dXJuIHRoaXMuZmlsdGVyKHNlbnRlbmNlKTtcclxuICAgICAgICBpZihtb2R1bGUuaXNPYmplY3Qoc2VudGVuY2UpKXtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmZpbHRlcihuZXcgRnVuY3Rpb24oJ2EnLCBPYmplY3Qua2V5cyhzZW50ZW5jZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKGEsIHByb3BuYW1lLCBpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgKyAoaSA+IDAgPyAnICYmICcgOiAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAgKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fdmFsdWUgPSBzZW50ZW5jZVtwcm9wbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoX192YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuICd7MX0udGVzdChhLnswfSknLmZvcm1hdChwcm9wbmFtZSwgX192YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobW9kdWxlLmlzU3RyaW5nKF9fdmFsdWUpKSByZXR1cm4gJ2EuezB9ID09PSBcXCd7MX1cXCcnLmZvcm1hdChwcm9wbmFtZSwgX192YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhLnswfSA9PT0gezF9Jy5mb3JtYXQocHJvcG5hbWUsIF9fdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSgpKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAncmV0dXJuICcpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9LFxyXG4gICAgICBzb3J0QnkgICAgICA6IGZ1bmN0aW9uKHByb3BuYW1lLCBkZXNjKXtcclxuICAgICAgICB2YXIgX19vcmRlciA9IFtdO1xyXG4gICAgICAgIHZhciBfX25hbWVzID0gcHJvcG5hbWUuc3BsaXQoJywnKS5tYXAoIGZ1bmN0aW9uKHRva2VuLGkpeyBcclxuICAgICAgICAgIHZhciBfX3BhaXIgPSB0b2tlbi5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgX19vcmRlcltpXSA9IChfX3BhaXJbMV0gJiYgKF9fcGFpclsxXS50b1VwcGVyQ2FzZSgpPT0nREVTQycpKSA/IC0xIDogMTsgICAgICBcclxuICAgICAgICAgIHJldHVybiBfX3BhaXJbMF07ICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIF9fb3JkZXJbMF0gPSAoZGVzYyA/IC0xIDogMSlcclxuICAgICAgICB0aGlzLnNvcnQoZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwOyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9fZm4gPSBmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciBfX3ggPSBhW19fbmFtZXNbaV1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIF9feSA9IGJbX19uYW1lc1tpXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihfX3ggPCBfX3kpIHJldHVybiAtMSAqIF9fb3JkZXJbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihfX3ggPiBfX3kpIHJldHVybiAgMSAqIF9fb3JkZXJbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihpIDwgX19uYW1lcy5sZW5ndGgpIHJldHVybiBfX2ZuKGEsYik7ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2ZuKGEsYik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpczsgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyQnkgICAgIDogZnVuY3Rpb24oc2VudGVuY2Upe1xyXG4gICAgICAgIHZhciBfX3NlbnRlbmNlID0gc2VudGVuY2U7ICAgIFxyXG4gICAgICAgIGlmKG1vZHVsZS5pc1N0cmluZyhzZW50ZW5jZSkpIF9fc2VudGVuY2UgPSBmdW5jdGlvbihhKXsgcmV0dXJuIGFbc2VudGVuY2VdOyB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlfSlcclxuICAgICAgICAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBfX3NlbnRlbmNlKGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBfX3NlbnRlbmNlKGIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgoeCA8IHkpID8gLTEgOiAoKHggPiB5KSA/IDEgOiAwKSk7XHJcbiAgICAgICAgICAgICAgICAgICB9KTsgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBkaXN0aW5jdCAgICA6IGZ1bmN0aW9uKHNlbnRlbmNlKSB7XHJcbiAgICAgICAgdmFyIF9fc2VudGVuY2UgPSBzZW50ZW5jZTsgICAgXHJcbiAgICAgICAgaWYobW9kdWxlLmlzU3RyaW5nKHNlbnRlbmNlKSkgX19zZW50ZW5jZSA9IGZ1bmN0aW9uKGEpeyByZXR1cm4gYVtzZW50ZW5jZV07IH1cclxuICAgICAgICB2YXIgciA9IFtdO1xyXG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgIHZhciBfdmFsdWUgPSBfX3NlbnRlbmNlKGl0ZW0pO1xyXG4gICAgICAgICAgaWYoci5pbmRleE9mKF92YWx1ZSk9PS0xKSByLnB1c2goX3ZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgICAgfSxcclxuICAgICAgZ3JvdXBCeSA6IGZ1bmN0aW9uKHByb3Ape1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZHVjZShmdW5jdGlvbihncm91cHMsIGl0ZW0pIHtcclxuICAgICAgICAgIHZhciB2YWwgPSBpdGVtW3Byb3BdO1xyXG4gICAgICAgICAgKGdyb3Vwc1t2YWxdID0gZ3JvdXBzW3ZhbF0gfHwgW10pLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICByZXR1cm4gZ3JvdXBzXHJcbiAgICAgICAgfSwge30pXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvRGljdGlvbmFyeSA6IGZ1bmN0aW9uKHByb3AsIHZhbHVlKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWR1Y2UoZnVuY3Rpb24oYSwgZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtkW3Byb3BdXSA9IHZhbHVlID8gZFt2YWx1ZV0gOiBkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7fSk7ICBcclxuICAgICAgfVxyXG4gICAgfSk7ICAgICAgIFxyXG4gIH0oX21vZHVsZSkpO1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gVGVtcGxhdGVzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpe1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFZhbHVlKGtleSwgc2NvcGUpIHsgICAgICAgIFxyXG4gICAgICByZXR1cm4ga2V5LnNwbGl0KC9cXC58XFxbfFxcXS8pXHJcbiAgICAgICAgICAgICAgICAucmVkdWNlKCBmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICAgICAgICAgICAgaWYgKGIgPT09ICcnKSByZXR1cm4gYTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFbYl0gPT09IHVuZGVmaW5lZCA/IChhID09PSBzZWxmID8gJycgOiBzZWxmKSA6IGFbYl07XHJcbiAgICAgICAgICAgICAgICB9LCBzY29wZSB8fCBzZWxmICk7ICAgIFxyXG4gICAgfVxyXG4gICBcclxuICAgIGZ1bmN0aW9uIG1lcmdlKHRlbXBsYXRlLCBvLCBrZXkpIHtcclxuICAgICAgdmFyIF9fcmVzdWx0ID0gdGVtcGxhdGUucmVwbGFjZSgveyhbXntdKyk/fS9nLCBmdW5jdGlvbiAobSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihrZXkuaW5kZXhPZignOicpID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2ZuID0ga2V5LnNwbGl0KCc6Jyk7ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19mblswXSAgPSBnZXRWYWx1ZShfX2ZuWzBdLCBvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19mblsxXSAgPSBnZXRWYWx1ZShfX2ZuWzFdLCBvKTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZm5bMF0oX19mblsxXSwgbyk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgciAgID0gZ2V0VmFsdWUoa2V5LCBvKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2sgPSAoa2V5LmNvbnRhaW5zKCcuJykgPyAnJyA6ICdvLicpICsga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAocikgPT0gJ2Z1bmN0aW9uJyl7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByKG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfWVsc2V7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIChyKSA9PSAnZnVuY3Rpb24nID8gcihvKSA6IHI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7ICAgICBcclxuICAgICAgcmV0dXJuIF9fcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vZnVuY3Rpb24gZmlsbFRlbXBsYXRlKGUsIHNjb3BlKSB7XHJcbiAgICAvLyAgdmFyIF9yb290ID0gJChlKTtcclxuICAgIC8vICB2YXIgX2VsZW1lbnRzID0gJCgnW3hiaW5kXScsIF9yb290KTsgXHJcbiAgICAvLyAgaWYgKF9yb290LmF0dHJpYnV0ZXMueGJpbmQpIF9lbGVtZW50cy5wdXNoKF9yb290KTtcclxuICAgIC8vICBfZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgIC8vICAgIFN0cmluZy50cmltVmFsdWVzKGNoaWxkLmF0dHJpYnV0ZXMueGJpbmQudmFsdWUuc3BsaXQoJzsnKSkuZm9yRWFjaChmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgIC8vICAgICAgaWYgKHRva2VuID09PSAnJykgcmV0dXJuO1xyXG4gICAgLy8gICAgICB2YXIgX3Rva2VucyA9IFN0cmluZy50cmltVmFsdWVzKHRva2VuLnNwbGl0KCc6JykpOyAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICB2YXIgX3BhcmFtcyA9IFN0cmluZy50cmltVmFsdWVzKF90b2tlbnNbMV0uc3BsaXQoL1xcc3xcXCwvKSk7XHJcbiAgICAvLyAgICAgIHZhciBfdmFsdWUgPSBnZXRWYWx1ZShfcGFyYW1zWzBdLCBzY29wZSk7XHJcbiAgICAvLyAgICAgIGlmICh0eXBlb2YgKF92YWx1ZSkgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgLy8gICAgICAgIHZhciBfYXJncyA9IF9wYXJhbXMuc2xpY2UoMSlcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgcCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHhiaW5kPVwidGV4dENvbnRlbnQ6RGF0YS5mblRlc3QgQE90aGVyLEEsNVwiXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5wdXNoKHAuY2hhckF0KDApID09ICdAJyA/IGdldFZhbHVlKHAuc2xpY2UoMSksIHNjb3BlKSA6IHApO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbc2NvcGUsIGNoaWxkXSk7XHJcbiAgICAvLyAgICAgICAgX3ZhbHVlID0gX3ZhbHVlLmFwcGx5KHNjb3BlLCBfYXJncyk7XHJcbiAgICAvLyAgICAgIH0gZWxzZSBpZiAoX3BhcmFtc1sxXSkge1xyXG4gICAgLy8gICAgICAgIHZhciBfZnVuYyA9IGdldFZhbHVlKF9wYXJhbXNbMV0sIHNjb3BlKTtcclxuICAgIC8vICAgICAgICBfdmFsdWUgPSBfZnVuYyhfdmFsdWUsIF9wYXJhbXNbMl0sIHNjb3BlLCBjaGlsZCk7XHJcbiAgICAvLyAgICAgIH1cclxuICAgIC8vICAgICAgY2hpbGRbX3Rva2Vuc1swXV0gPSBfdmFsdWU7XHJcbiAgICAvLyAgICB9KTtcclxuICAgIC8vICB9KTtcclxuICAgIC8vICByZXR1cm4gZTtcclxuICAgIC8vfVxyXG5cclxuICAgIC8vZnVuY3Rpb24gZXhlY3V0ZVRlbXBsYXRlKGUsIHZhbHVlcywgZG9tKSB7XHJcbiAgICAvLyAgdmFyIF90ZW1wbGF0ZSA9ICQoZSk7XHJcbiAgICAvLyAgdmFyIF9yZXN1bHQgICA9IHZhbHVlcy5yZWR1Y2UoIGZ1bmN0aW9uKGEsIHYsIGkpe1xyXG4gICAgLy8gICAgdmFyIF9ub2RlID0geyBpbmRleCA6IGksXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgIGRhdGEgIDogdixcclxuICAgIC8vICAgICAgICAgICAgICAgICAgbm9kZSAgOiBmaWxsVGVtcGxhdGUoX3RlbXBsYXRlLmNsb25lTm9kZSh0cnVlKSwgdikgfTtcclxuICAgIC8vICAgIGEubm9kZXMucHVzaChfbm9kZSk7XHJcbiAgICAvLyAgICBpZiAoIWRvbSkgYS5odG1sLnB1c2goX25vZGUubm9kZS5vdXRlckhUTUwucmVwbGFjZSgveGJpbmQ9XCJbXlwiXSpcIi9nLCAnJykpO1xyXG4gICAgLy8gICAgcmV0dXJuIGE7IFxyXG4gICAgLy8gIH0sIHsgbm9kZXMgOiBbXSwgaHRtbCA6IFtdIH0pO1xyXG4gICAgLy8gIHJldHVybiBkb20gPyBfcmVzdWx0Lm5vZGVzIDogX3Jlc3VsdC5odG1sLmpvaW4oJycpO1xyXG4gICAgLy99XHJcbiAgICBcclxuICAgIG1vZHVsZS50ZW1wbGF0ZXMgPSB7IGdldFZhbHVlICA6IGdldFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2UgICAgIDogbWVyZ2UgfTtcclxuXHJcbiAgfShfbW9kdWxlKSk7XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBBamF4XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpeyAgXHJcbiAgICBtb2R1bGUuYWpheCA9IHt9O1xyXG4gICAgbW9kdWxlLmFwcGx5KG1vZHVsZS5hamF4LCB7XHJcbiAgICAgIGdldCAgOiBmdW5jdGlvbiAodXJsLCBjYWxsQmFjaykge1xyXG4gICAgICAgIHVybCArPSAodXJsLmNvbnRhaW5zKCc/JykgPyAnJm1zPScgOiAnP21zPScpICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIHhtbCA9IHRoaXMuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4bWwub3BlbignR0VUJywgdXJsLCB0cnVlKTtcclxuICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignSWYtTW9kaWZpZWQtU2luY2UnLCAnVGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVQnKTtcclxuICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignQ2FjaGUtQ29udHJvbCcsICduby1jYWNoZScpO1xyXG4gICAgICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7IGlmICh4bWwucmVhZHlTdGF0ZSA9PSA0KSBjYWxsQmFjayh4bWwucmVzcG9uc2VUZXh0KSB9O1xyXG4gICAgICAgIHhtbC5zZW5kKG51bGwpO1xyXG4gICAgICB9LFxyXG4gICAgICBwb3N0IDogZnVuY3Rpb24odXJsLCBwYXJhbXMsIGNhbGxCYWNrKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgdmFyIHhtbCA9IHRoaXMuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4bWwub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeG1sLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkgeyBpZiAoeG1sLnJlYWR5U3RhdGUgPT0gNCkgY2FsbEJhY2soeG1sLnJlc3BvbnNlVGV4dCkgfTtcclxuICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldDpJU08tODg1OS0xJyk7XHJcbiAgICAgICAgeG1sLnNlbmQocGFyYW1zKTtcclxuICAgICAgfSxcclxuICAgICAgY2FsbFdlYk1ldGhvZCA6IGZ1bmN0aW9uKHVybCwgcGFyYW1zLCBjYWxsQmFjaykge1xyXG4gICAgICAgIHZhciB4bWwgPSB0aGlzLmNyZWF0ZVhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeG1sLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpeyBpZiAoeG1sLnJlYWR5U3RhdGUgPT0gNCkgY2FsbEJhY2soeG1sLnJlc3BvbnNlVGV4dCkgfTtcclxuICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxuICAgICAgICB4bWwuc2VuZChwYXJhbXMpO1xyXG4gICAgICB9LFxyXG4gICAgICBjcmVhdGVYTUxIdHRwUmVxdWVzdCA6IGZ1bmN0aW9uKCl7IHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgfVxyXG4gICAgfSk7ICBcclxuICB9KF9tb2R1bGUpKTsgXHJcbiAgICAgIFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBUYWJibHlcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKGZ1bmN0aW9uIChtb2R1bGUpe1xyXG4gICAgICBcclxuICAgIHZhciBfX2NvbnRleHQ7XHJcblxyXG4gICAgZnVuY3Rpb24gX19FeGVjdXRlQ29kZShjb2RlKXtcclxuXHJcbiAgICAgIF9fY29udGV4dCA9IHsgc2VjdGlvbnMgOiBbXSwgZ3JvdXBzIDogW10sIGRldGFpbHMgOiBbXX07XHJcblxyXG4gICAgICB2YXIgX19jdXI7XHJcbiAgICAgIHZhciBfX2Z1bmMgICAgICAgPSAnJztcclxuICAgICAgdmFyIF9fZnVuY0JvZHkgICA9ICcnO1xyXG4gICAgICB2YXIgX19zZXRTdGF0ZSAgPSBmYWxzZTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIF9fZ2V0KHZhbHVlKXtcclxuICAgICAgICBpZih2YWx1ZSAmJiB2YWx1ZS50cmltKCkuc3RhcnRzV2l0aCgnQCcpKXtcclxuICAgICAgICAgIHJldHVybiBfX2NvbnRleHRbdmFsdWUudHJpbSgpLnNwbGl0KCdAJylbMV0udHJpbSgpXSB8fCAnJztcclxuICAgICAgICB9ZWxzZSBpZih2YWx1ZSl7XHJcbiAgICAgICAgICByZXR1cm4gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH0gIFxyXG5cclxuICAgICAgZnVuY3Rpb24gX19wYXJzZV9wcm9wZXJ0aWVzKHZhbHVlKXtcclxuICAgICAgICB2YXIgX19yZWcgICA9ICAvKFthLXpBLVowLTlfXFwtXSopXFxzKjpcXHMqKCdbXiddKid8W15cXHNdKikvZztcclxuICAgICAgICB2YXIgX19vICAgICA9IHt9O1xyXG4gICAgICAgIHZhciBfX21hdGNoID0gX19yZWcuZXhlYyh2YWx1ZSk7XHJcbiAgICAgICAgd2hpbGUgKF9fbWF0Y2ggIT0gbnVsbCkge1xyXG4gICAgICAgICAgX19vW19fbWF0Y2hbMV0udHJpbSgpXSA9IF9fZ2V0KF9fbWF0Y2hbMl0udHJpbSgpLnJlcGxhY2UoL14nKFteJ10qKSckL2csICckMScpKTtcclxuICAgICAgICAgIF9fbWF0Y2ggPSBfX3JlZy5leGVjKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9fb1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBfX3BhcnNlTGluZShsLCBvKXtcclxuICAgICAgICBpZighX19mdW5jICYmICFsLnRyaW0oKSkgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICB2YXIgX19rZXlzID0gL0RFRklORXwjfENSRUFURXxTRVR8RlVOQ1RJT058RU5ELztcclxuICAgICAgICBpZihfX2tleXMudGVzdChsKSl7XHJcbiAgICAgICAgICBpZigvXiMvLnRlc3QobCkpe1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXt9O1xyXG4gICAgICAgICAgfWVsc2UgaWYoL15TRVQgKFxcdy4qKS8udGVzdChsKSl7ICBcclxuICAgICAgICAgICAgdmFyIF9fdG9rZW5zID0gbC5tYXRjaCgvXlNFVCAoXFx3LiopJC8pO1xyXG4gICAgICAgICAgICBfX3NldFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgX19mdW5jICAgICAgPSBfX3Rva2Vuc1sxXS50cmltKCk7XHJcbiAgICAgICAgICAgIF9fZnVuY0JvZHkgID0gJyc7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe307XHJcbiAgICAgICAgICB9ZWxzZSBpZigvXkZVTkNUSU9OIChcXHcuKikvLnRlc3QobCkpeyAgXHJcbiAgICAgICAgICAgIHZhciBfX3Rva2VucyA9IGwubWF0Y2goL15GVU5DVElPTiAoXFx3LiopJC8pO1xyXG4gICAgICAgICAgICBfX3NldFN0YXRlICA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfX2Z1bmMgICAgICAgPSBfX3Rva2Vuc1sxXS50cmltKCk7XHJcbiAgICAgICAgICAgIF9fZnVuY0JvZHkgICA9ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXt9O1xyXG4gICAgICAgICAgfWVsc2UgaWYoL15FTkQvLnRlc3QobCkpeyAgICAgIFxyXG4gICAgICAgICAgICB2YXIgX19ib2R5ID0gX19mdW5jQm9keTtcclxuICAgICAgICAgICAgdmFyIF9fbmFtZSA9IF9fZnVuYztcclxuICAgICAgICAgICAgX19mdW5jID0gX19mdW5jQm9keSA9ICcnOyBcclxuICAgICAgICAgICAgaWYoX19zZXRTdGF0ZSl7XHJcbiAgICAgICAgICAgICAgX19zZXRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7IF9fY3VyW19fbmFtZV0gPSBfX2JvZHkudHJpbSgpOyB9XHJcbiAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpeyBjdHhbX19uYW1lXSA9IG5ldyBGdW5jdGlvbignY3R4JywgX19ib2R5KTsgfVxyXG4gICAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICB9ZWxzZSBpZigvXkRFRklORVxcc1xccyooXFx3LiopXFxzKj1cXHMqKC4qKSQvLnRlc3QobCkpe1xyXG4gICAgICAgICAgICB2YXIgX190b2tlbnMgPSBsLm1hdGNoKC9eREVGSU5FXFxzXFxzKihbYS16QS1aMC05X1xcLV0qKVxccyo9XFxzKiguKikkLyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyBcclxuICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gX190b2tlbnM7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7IGN0eFt0b2tlbnNbMV0udHJpbSgpXSA9IHRva2Vuc1syXS50cmltKCk7IH1cclxuICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgfWVsc2UgaWYoL15DUkVBVEVcXHNcXHMqKFxcdyopICguKikkLy50ZXN0KGwpKXtcclxuICAgICAgICAgICAgdmFyIF9fdG9rZW5zID0gbC5tYXRjaCgvXkNSRUFURVxcc1xccyooXFx3KikgKC4qKSQvKTtcclxuICAgICAgICAgICAgaWYoX190b2tlbnNbMV09PSdzZWN0aW9uJyl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IF9fdG9rZW5zO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7IFxyXG4gICAgICAgICAgICAgICAgICBjdHguc2VjdGlvbnMucHVzaChfX3BhcnNlX3Byb3BlcnRpZXModG9rZW5zWzJdKSk7IFxyXG4gICAgICAgICAgICAgICAgICBfX2N1ciA9IGN0eC5zZWN0aW9uc1tjdHguc2VjdGlvbnMubGVuZ3RoIC0gMV07fVxyXG4gICAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKF9fdG9rZW5zWzFdPT0nZ3JvdXAnKXtcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gX190b2tlbnM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXsgXHJcbiAgICAgICAgICAgICAgICAgIGN0eC5ncm91cHMucHVzaChfX3BhcnNlX3Byb3BlcnRpZXModG9rZW5zWzJdKSk7XHJcbiAgICAgICAgICAgICAgICAgIF9fY3VyID0gY3R4Lmdyb3Vwc1tjdHguZ3JvdXBzLmxlbmd0aCAtIDFdO31cclxuICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKF9fdG9rZW5zWzFdPT0nZGV0YWlsJyl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IF9fdG9rZW5zO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7XHJcbiAgICAgICAgICAgICAgICAgIGN0eC5kZXRhaWxzLnB1c2goX19wYXJzZV9wcm9wZXJ0aWVzKHRva2Vuc1syXSkpO1xyXG4gICAgICAgICAgICAgICAgICBfX2N1ciA9IGN0eC5kZXRhaWxzW2N0eC5kZXRhaWxzLmxlbmd0aCAtIDFdO31cclxuICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1lbHNleyB0aHJvdyBuZXcgRXJyb3IoJ1RhYmJseSA6IFVucmVjb2duaXplZCB0ZXh0IGFmdGVyIERFRklORScpfSAgXHJcbiAgICAgICAgfWVsc2V7IFxyXG4gICAgICAgICAgaWYoX19mdW5jKXtcclxuICAgICAgICAgICAgX19mdW5jQm9keSArPSBvO1xyXG4gICAgICAgICAgICBfX2Z1bmNCb2R5ICs9ICdcXG4nO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXt9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYWJibHkgOiBVbnJlY29nbml6ZWQgdGV4dCcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb2RlLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uKGwpeyBcclxuICAgICAgICBfX3BhcnNlTGluZShsLnRyaW0oKSxsKShfX2NvbnRleHQpOyBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4geyBjb250ZXh0IDogX19jb250ZXh0IH07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vZHVsZS50YWJibHkgPSB7IGV4ZWN1dGUgOiBfX0V4ZWN1dGVDb2RlIH07XHJcblxyXG4gIH0oX21vZHVsZSkpO1xyXG4gICAgICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gUmVwb3J0c1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24obW9kdWxlKSB7XHJcblxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZSAgICAgICAgICAgICAgICA9IHt9OyAgICAgIFxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5nZW5lcmF0ZVJlcG9ydCA9IGZ1bmN0aW9uKHJkLCBkYXRhLCBtZWRpYXRvcil7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5iZWdpbicgfSk7XHJcbiAgICAgIHZhciBfX3JkICAgICAgPSByZCB8fCBtb2R1bGUuUmVwb3J0RW5naW5lLnJkO1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIFRyYW5zZm9ybWFyIGxvcyBkYXRvc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIHZhciBfX2RhdGFTZXQgPSBfX3JkLmNvbnRleHQucGFyc2VEYXRhID8gX19yZC5jb250ZXh0LnBhcnNlRGF0YShfX3JkLCBkYXRhLCBtZWRpYXRvci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRhdGE7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5sb2cubWVzc2FnZScsIHRleHQgOiAnSW5pY2lhbGl6YW5kby4uLicgfSk7XHJcbiAgICAgIGNvbnNvbGUudGltZSgnUmVuZGVyJyk7XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gSW5pY2lhbGl6YXIgZnVuY2lvbmVzIHBhcmEgbGEgZ2VuZXJhY2nDs24gZGUgY29udGVuaWRvIHBlcnNvbmFsaXphZG9cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX2luaXRDb250ZW50UHJvdmlkZXJzKCl7XHJcbiAgICAgICAgW19fcmQuY29udGV4dC5zZWN0aW9ucywgX19yZC5jb250ZXh0LmRldGFpbHMsIF9fcmQuY29udGV4dC5ncm91cHNdXHJcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbihhLGIpeyByZXR1cm4gYS5jb25jYXQoYik7IH0sIFtdKVxyXG4gICAgICAgIC5tYXAoZnVuY3Rpb24ocyl7XHJcbiAgICAgICAgICBpZihzLnZhbHVlUHJvdmlkZXJmbil7XHJcbiAgICAgICAgICAgIHMudmFsdWVQcm92aWRlciA9IG1vZHVsZS50ZW1wbGF0ZXMuZ2V0VmFsdWUocy52YWx1ZVByb3ZpZGVyZm4sIHNlbGYpOyBcclxuICAgICAgICAgICAgZGVsZXRlIHMudmFsdWVQcm92aWRlcmZuOyAgICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKHMuZm9vdGVyVmFsdWVQcm92aWRlcmZuKXtcclxuICAgICAgICAgICAgcy5mb290ZXJWYWx1ZVByb3ZpZGVyID0gbW9kdWxlLnRlbXBsYXRlcy5nZXRWYWx1ZShzLmZvb3RlclZhbHVlUHJvdmlkZXJmbiwgc2VsZik7IFxyXG4gICAgICAgICAgICBkZWxldGUgcy5mb290ZXJWYWx1ZVByb3ZpZGVyZm47IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYocy5oZWFkZXJWYWx1ZVByb3ZpZGVyZm4pe1xyXG4gICAgICAgICAgICBzLmhlYWRlclZhbHVlUHJvdmlkZXIgPSBtb2R1bGUudGVtcGxhdGVzLmdldFZhbHVlKHMuaGVhZGVyVmFsdWVQcm92aWRlcmZuLCBzZWxmKTsgXHJcbiAgICAgICAgICAgIGRlbGV0ZSBzLmhlYWRlclZhbHVlUHJvdmlkZXJmbjtcclxuICAgICAgICAgIH0gIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBHZW5lcmFjacOzbiBkZSBsYXMgc2VjY2lvbmVzIGRlIGNhYmVjZXJhIGRlIGxhcyBhZ3J1cGFjaW9uZXNcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIHZhciBfX01FUkdFX0FORF9TRU5EID0gZnVuY3Rpb24odCwgcCwgZm5rZXkpeyBtZWRpYXRvci5zZW5kKG1vZHVsZS50ZW1wbGF0ZXMubWVyZ2UodCwgcCwgZm5rZXkpKTsgfTtcclxuICAgICAgZnVuY3Rpb24gX19ncm91cHNIZWFkZXJzKCl7XHJcbiAgICAgICAgX19ncm91cHMuZm9yRWFjaChmdW5jdGlvbihnLCBpaSl7XHJcbiAgICAgICAgICBpZihpaSA8IF9fYnJlYWtJbmRleCkgcmV0dXJuOyBcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5zZWN0aW9ucy5ncm91cC5oZWFkZXInLCB2YWx1ZSA6IGcuaWQgfSk7ICBcclxuICAgICAgICAgIGlmKGcuZGVmaW5pdGlvbi5oZWFkZXIpIHJldHVybiBfX01FUkdFX0FORF9TRU5EKGcuZGVmaW5pdGlvbi5oZWFkZXIsIGcsICdjb21waWxlZF9oZWFkZXJmbicpO1xyXG4gICAgICAgICAgaWYoZy5kZWZpbml0aW9uLmhlYWRlclZhbHVlUHJvdmlkZXIpIHJldHVybiBtZWRpYXRvci5zZW5kKGcuZGVmaW5pdGlvbi5oZWFkZXJWYWx1ZVByb3ZpZGVyKGcpKTsgXHJcbiAgICAgICAgfSk7ICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBHZW5lcmFjacOzbiBkZSBsYXMgc2VjY2lvbmVzIGRlIHJlc3VtZW4gZGUgbGFzIGFncnVwYWNpb25lc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19ncm91cHNGb290ZXJzKGluZGV4KXtcclxuICAgICAgICB2YXIgX19nZyA9IF9fZ3JvdXBzLm1hcChmdW5jdGlvbihnKXtyZXR1cm4gZzt9KTsgXHJcbiAgICAgICAgaWYoaW5kZXgpIF9fZ2cuc3BsaWNlKDAsIGluZGV4KTtcclxuICAgICAgICBfX2dnLnJldmVyc2UoKS5mb3JFYWNoKCBmdW5jdGlvbihnKXtcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5zZWN0aW9ucy5ncm91cC5mb290ZXInLCB2YWx1ZSA6IGcuaWQgfSk7ICAgICAgICAgIFxyXG4gICAgICAgICAgaWYoZy5kZWZpbml0aW9uLmZvb3RlcikgcmV0dXJuIF9fTUVSR0VfQU5EX1NFTkQoZy5kZWZpbml0aW9uLmZvb3RlciwgZywgJ2NvbXBpbGVkX2Zvb3RlcmZuJyk7XHJcbiAgICAgICAgICBpZihnLmRlZmluaXRpb24uZm9vdGVyVmFsdWVQcm92aWRlcikgcmV0dXJuIG1lZGlhdG9yLnNlbmQoZy5kZWZpbml0aW9uLmZvb3RlclZhbHVlUHJvdmlkZXIoZykpO1xyXG4gICAgICAgIH0pOyBcclxuICAgICAgfSBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gR2VuZXJhY2nDs24gZGUgbGFzIHNlY2Npb25lcyBkZSBkZXRhbGxlXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9fZGV0YWlsc1NlY3Rpb25zKCl7XHJcbiAgICAgICAgX19kZXRhaWxzLmZvckVhY2goZnVuY3Rpb24oZCl7XHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuc2VjdGlvbnMuZGV0YWlsJywgdmFsdWUgOiBkLmlkIH0pO1xyXG4gICAgICAgICAgaWYoZC50ZW1wbGF0ZSkgcmV0dXJuIF9fTUVSR0VfQU5EX1NFTkQoZC50ZW1wbGF0ZSwgZCwgJ2NvbXBpbGVkZm4nKVxyXG4gICAgICAgICAgaWYoZC52YWx1ZVByb3ZpZGVyKSByZXR1cm4gbWVkaWF0b3Iuc2VuZChkLnZhbHVlUHJvdmlkZXIoZCkpO1xyXG4gICAgICAgIH0pICAgICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gR2VuZXJhY2nDs24gZGUgbGFzIHNlY2Npb25lcyBkZSB0b3RhbCBnZW5lcmFsXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9fZ3JhbmRUb3RhbFNlY3Rpb25zKCl7XHJcbiAgICAgICAgX190b3RhbHMuZm9yRWFjaChmdW5jdGlvbih0KXtcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5zZWN0aW9ucy50b3RhbCcsIHZhbHVlIDogdC5pZCB9KTtcclxuICAgICAgICAgIGlmKHQudGVtcGxhdGUpIHJldHVybiBfX01FUkdFX0FORF9TRU5EKHQudGVtcGxhdGUsIHQsICdjb21waWxlZGZuJylcclxuICAgICAgICAgIGlmKHQudmFsdWVQcm92aWRlcikgcmV0dXJuIG1lZGlhdG9yLnNlbmQodC52YWx1ZVByb3ZpZGVyKHQpKTtcclxuICAgICAgICB9KSAgICAgICAgICAgIFxyXG4gICAgICB9IFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBHZW5lcmFjacOzbiBkZSBsYXMgc2VjY2lvbmVzIGRlIGNhYmVjZXJhIGRlbCBpbmZvcm1lXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9fcmVwb3J0SGVhZGVyU2VjdGlvbnMoKXtcclxuICAgICAgICBfX2hlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih0KXtcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5zZWN0aW9ucy5oZWFkZXInLCB2YWx1ZSA6IHQgfSk7XHJcbiAgICAgICAgICBpZih0LnRlbXBsYXRlKSByZXR1cm4gX19NRVJHRV9BTkRfU0VORCh0LnRlbXBsYXRlLCB0LCAnY29tcGlsZWRmbicpXHJcbiAgICAgICAgICBpZih0LnZhbHVlUHJvdmlkZXIpIHJldHVybiBtZWRpYXRvci5zZW5kKHQudmFsdWVQcm92aWRlcih0KSk7XHJcbiAgICAgICAgfSkgICAgICAgICAgICBcclxuICAgICAgfSBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gSW5pY2lhbGl6YXIgZWwgb2JqZXRvIHF1ZSBzaXJ2ZSBkZSBhY3VtdWxhZG9yXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9fcmVzb2x2ZVN1bW1hcnlPYmplY3QoKXtcclxuICAgICAgICB2YXIgX19zdW1tYXJ5ID0gSlNPTi5wYXJzZShfX3JkLmNvbnRleHQuc3VtbWFyeSB8fCAne30nKTtcclxuICAgICAgICBpZihfX3JkLmNvbnRleHQub25Jbml0U3VtbWFyeU9iamVjdCkgcmV0dXJuIF9fcmQuY29udGV4dC5vbkluaXRTdW1tYXJ5T2JqZWN0KF9fc3VtbWFyeSk7ICAgICAgXHJcbiAgICAgICAgcmV0dXJuIF9fc3VtbWFyeTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIF9fYnJlYWtJbmRleCA9IC0xOyBcclxuXHJcbiAgICAgIHZhciBfX3N1bW1hcnkgICAgPSBfX3Jlc29sdmVTdW1tYXJ5T2JqZWN0KCk7XHJcbiAgICAgIHZhciBfX2hlYWRlcnMgICAgPSAoX19yZC5jb250ZXh0LnNlY3Rpb25zIHx8IFtdKS53aGVyZSh7IHR5cGUgOiAnaGVhZGVyJyB9KTtcclxuICAgICAgdmFyIF9fdG90YWxzICAgICA9IChfX3JkLmNvbnRleHQuc2VjdGlvbnMgfHwgW10pLndoZXJlKHsgdHlwZSA6ICd0b3RhbCcgfSk7XHJcbiAgICAgIHZhciBfX2Zvb3RlcnMgICAgPSAoX19yZC5jb250ZXh0LnNlY3Rpb25zIHx8IFtdKS53aGVyZSh7IHR5cGUgOiAnZm9vdGVyJyB9KTtcclxuICAgICAgdmFyIF9fZGV0YWlscyAgICA9IF9fcmQuY29udGV4dC5kZXRhaWxzIHx8IFtdO1xyXG4gICAgICB2YXIgX19ncm91cHMgICAgID0gX19yZC5jb250ZXh0Lmdyb3VwcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24oZywgaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7ICBuYW1lICAgICAgIDogJ0cnICsgKGkrMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZCAgICAgICAgIDogX19yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb24gOiBnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCAgICA6ICcnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgICAgICAgOiBtb2R1bGUuY2xvbmUoX19zdW1tYXJ5KSwgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0IDogZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19rID0gdmFsdWVbdGhpcy5kZWZpbml0aW9uLmtleV0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fR3ggPSBzZWxmLkJTW3RoaXMubmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3guYWxsW19fa10gPSBfX0d4LmFsbFtfX2tdIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LmFsbFtfX2tdLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LnJlY29yZENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fX3Jlc3VtZSA9PT0gZmFsc2UpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fX3Jlc3VtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5jb3B5KHZhbHVlLCB0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX19yZXN1bWUgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmxlbmd0aCA+IDApICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5jb3B5KHZhbHVlLCB0aGlzLmRhdGEpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW0gIDogZnVuY3Rpb24odmFsdWUpeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fayA9IHZhbHVlW3RoaXMuZGVmaW5pdGlvbi5rZXldLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX0d4ID0gc2VsZi5CU1t0aGlzLm5hbWVdOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5hbGxbX19rXSA9IF9fR3guYWxsW19fa10gfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3guYWxsW19fa10ucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3gucmVjb3JkQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fX3Jlc3VtZSA9PT0gZmFsc2UpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5zdW0odmFsdWUsIHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3QgOiBmdW5jdGlvbih2YWx1ZSl7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVt0aGlzLmRlZmluaXRpb24ua2V5XSA9PSB0aGlzLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIHx8IFtdOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIHNlbGYuQlMgPSB7IHJlcG9ydERlZmluaXRpb24gOiBfX3JkLCBtZWRpYXRvciA6IG1lZGlhdG9yIH07ICAgICAgICAgICAgICBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBPcmRlbmFyIGxvcyBkYXRvc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGlmKF9fcmQuY29udGV4dC5pdGVyYXRlZm4pe1xyXG4gICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5sb2cubWVzc2FnZScsIHRleHQgOiAnSW5pY2lhbGl6YW5kbyBlbGVtZW50b3MuLi4nIH0pO1xyXG4gICAgICAgIF9fZGF0YVNldC5mb3JFYWNoKF9fcmQuY29udGV4dC5pdGVyYXRlZm4pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKF9fcmQuY29udGV4dC5vcmRlckJ5KXtcclxuICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQubG9nLm1lc3NhZ2UnLCB0ZXh0IDogJ09yZGVuYW5kbyBkYXRvcy4uLicgfSk7XHJcbiAgICAgICAgX19kYXRhU2V0LnNvcnRCeShfX3JkLmNvbnRleHQub3JkZXJCeSwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gSW5pY2lhbGl6YXJcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBzZWxmLkJTID0geyByZWNvcmRDb3VudCAgICAgIDogMCwgXHJcbiAgICAgICAgICAgICAgICAgIEcwICAgICAgICAgICAgICAgOiBtb2R1bGUuY2xvbmUoX19zdW1tYXJ5KSxcclxuICAgICAgICAgICAgICAgICAgZGF0YVNldCAgICAgICAgICA6IF9fZGF0YVNldCxcclxuICAgICAgICAgICAgICAgICAgcmVwb3J0RGVmaW5pdGlvbiA6IF9fcmQsIFxyXG4gICAgICAgICAgICAgICAgICBtZWRpYXRvciAgICAgICAgIDogbWVkaWF0b3IgfTtcclxuICAgICAgX19ncm91cHMuZm9yRWFjaCggZnVuY3Rpb24oZywgaSl7ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGcuY3VycmVudCA9IChfX2RhdGFTZXQgJiYgX19kYXRhU2V0WzBdKSA/IF9fZGF0YVNldFswXVtnLmRlZmluaXRpb24ua2V5XSA6ICcnO1xyXG4gICAgICAgIHNlbGYuQlNbZy5uYW1lXSA9IHsgcmVjb3JkQ291bnQgOiAwLCBhbGwgOiB7fSB9O1xyXG4gICAgICB9KTtcclxuICAgICAgaWYoX19yZC5jb250ZXh0Lm9uU3RhcnRmbikgX19yZC5jb250ZXh0Lm9uU3RhcnRmbihzZWxmLkJTKTtcclxuICAgICAgX19pbml0Q29udGVudFByb3ZpZGVycygpO1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQucmVuZGVyLnJvd3MnIH0pO1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQubG9nLm1lc3NhZ2UnLCB0ZXh0IDogJ0dlbmVyYW5kbyBpbmZvcm1lLi4uJyB9KTtcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIENhYmVjZXJhcyBkZWwgaW5mb3JtZVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgX19yZXBvcnRIZWFkZXJTZWN0aW9ucygpO1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gQ2FiZWNlcmFzIGluaWNpYWxlc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgaWYoX19kYXRhU2V0Lmxlbmd0aCA+IDApIF9fZ3JvdXBzSGVhZGVycygpOyBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEl0ZXJhciBzb2JyZSBsb3MgZWxlbWVudG9zXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBfX2RhdGFTZXQuZm9yRWFjaChmdW5jdGlvbihyLCBpKXsgXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIFByb2Nlc2FyIGVsIGVsZW1lbnRvXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgICAgICAgIFxyXG4gICAgICAgIHNlbGYuQlMucmVjb3JkQ291bnQrKztcclxuICAgICAgICBzZWxmLkJTLmlzTGFzdFJvdyAgICAgICAgPSBfX2RhdGFTZXQubGVuZ3RoID09PSBzZWxmLkJTLnJlY29yZENvdW50O1xyXG4gICAgICAgIHNlbGYuQlMuaXNMYXN0Um93SW5Hcm91cCA9IHNlbGYuQlMuaXNMYXN0Um93O1xyXG4gICAgICAgIHNlbGYuQlMucGVyY2VudCAgICAgID0gKHNlbGYuQlMucmVjb3JkQ291bnQvX19kYXRhU2V0Lmxlbmd0aCkgKiAxMDA7ICBcclxuICAgICAgICBzZWxmLkJTLnByZXZpb3VzICAgICA9IHNlbGYuQlMuZGF0YSB8fCByO1xyXG4gICAgICAgIHNlbGYuQlMuZGF0YSAgICAgICAgID0gcjsgXHJcbiAgICAgICAgX19ncm91cHMuZm9yRWFjaCggZnVuY3Rpb24oZywgaSl7IFxyXG4gICAgICAgICAgc2VsZi5CU1tnLm5hbWVdLmRhdGEgID0gT2JqZWN0LmNyZWF0ZShnLmRhdGEpO1xyXG4gICAgICAgIH0pOyBcclxuICAgICAgICBtb2R1bGUuUmVwb3J0RW5naW5lLnN1bShyLCBzZWxmLkJTLkcwKTsgICAgICAgIFxyXG4gICAgICAgIGlmKF9fcmQuY29udGV4dC5vblJvd2ZuKSBfX3JkLmNvbnRleHQub25Sb3dmbihzZWxmLkJTKTtcclxuICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSAgOiAncmVwb3J0LnJlbmRlci5yb3cnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgOiBzZWxmLkJTLnBlcmNlbnQudG9GaXhlZCgxKSArICcgJScsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6IHNlbGYuQlMucGVyY2VudCB9KTtcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gRGV0ZXJtaW5hciBzaSBoYXkgY2FtYmlvIGVuIGFsZ3VuYSBkZSBsYXMgY2xhdmVzIGRlIGFncnVwYWNpw7NuXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGlmKF9fZ3JvdXBzLmV2ZXJ5KCBmdW5jdGlvbihnKXsgcmV0dXJuIGcudGVzdChyKSB9KSl7XHJcbiAgICAgICAgICBfX2dyb3Vwcy5mb3JFYWNoKCBmdW5jdGlvbihnKXsgZy5zdW0ocik7IH0pOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNleyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgX19ncm91cHMuc29tZSggZnVuY3Rpb24oZywgaSl7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIWcudGVzdChyKSl7XHJcbiAgICAgICAgICAgICAgX19icmVha0luZGV4ID0gaTtcclxuICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgIC8vIFBpZXMgZGUgZ3J1cG8gZGUgbG9zIHF1ZSBoYW4gY2FtYmlhZG9cclxuICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgIF9fZ3JvdXBzRm9vdGVycyhfX2JyZWFrSW5kZXgpO1xyXG4gICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgLy8gQWN0dWFsaXphciBsb3MgZ3J1cG9zXHJcbiAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICBfX2dyb3Vwcy5mb3JFYWNoKCBmdW5jdGlvbihncnVwbywgaWkpeyAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoaWkgPj0gX19icmVha0luZGV4KXtcclxuICAgICAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAvLyBJbmljaWFsaXphciBsb3MgcXVlIGhhbiBjYW1iaWFkb1xyXG4gICAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgIGdydXBvLmluaXQocilcclxuICAgICAgICAgICAgICAgICAgX19icmVha0luZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgIC8vIEFjdW11bGFyIHZhbG9yZXMgZGUgbG9zIHF1ZSBzaWd1ZW4gaWd1YWxcclxuICAgICAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICBncnVwby5zdW0ocik7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgLy8gTm90aWZpY2FyIGRlbCBldmVudG8gb25Hcm91cENoYW5nZVxyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIF9fZ3JvdXBzLmZvckVhY2goZnVuY3Rpb24oZyl7XHJcbiAgICAgICAgICAgIGcuY3VycmVudCA9IHJbZy5kZWZpbml0aW9uLmtleV07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmKF9fcmQuY29udGV4dC5vbkdyb3VwQ2hhbmdlZm4pIF9fcmQuY29udGV4dC5vbkdyb3VwQ2hhbmdlZm4oc2VsZi5CUyk7ICAgICAgICAgIFxyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgIDogJ3JlcG9ydC5zZWN0aW9ucy5ncm91cC5jaGFuZ2UnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6ICdfX2dyb3VwcycgfSk7XHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAvLyBDYWJlY2VyYXNcclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIF9fZ3JvdXBzSGVhZGVycygpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIERldGVybWluYXIgc2kgZXN0ZSBlcyBlbCDDumx0aW1vIGVsZW1lbnRvIGRlIGxhIGFncnVwYWNpw7NuIFxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PTtcclxuICAgICAgICBpZihfX2dyb3Vwcy5sZW5ndGggJiYgIXNlbGYuQlMuaXNMYXN0Um93ICl7XHJcbiAgICAgICAgICB2YXIgX19uZXh0ICAgICAgICAgICAgICAgPSBfX2RhdGFTZXRbc2VsZi5CUy5yZWNvcmRDb3VudF07ICAgICAgICAgIFxyXG4gICAgICAgICAgc2VsZi5CUy5pc0xhc3RSb3dJbkdyb3VwID0gISBfX2dyb3Vwcy5ldmVyeSggZnVuY3Rpb24oZyl7XHJcbiAgICAgICAgICAgIHZhciBfX2sgPSBnLmRlZmluaXRpb24ua2V5O1xyXG4gICAgICAgICAgICByZXR1cm4gX19uZXh0W19fa10gPT09IHNlbGYuQlMuZGF0YVtfX2tdO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIFNlY2Npb25lcyBkZSBkZXRhbGxlXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgX19kZXRhaWxzU2VjdGlvbnMoKSAgICAgICAgICAgIFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmKF9fZGF0YVNldC5sZW5ndGggPiAwKXsgXHJcbiAgICAgICAgc2VsZi5CUy5wcmV2aW91cyA9IHNlbGYuQlMuZGF0YTtcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIFBpZXMgZGUgZ3J1cG9cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIF9fZ3JvdXBzRm9vdGVycygpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBUb3RhbCBnZW5lcmFsXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBfX2dyYW5kVG90YWxTZWN0aW9ucygpO1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQucmVuZGVyLmVuZCcgfSk7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5lbmQnIH0pO1xyXG4gICAgICBtZWRpYXRvci5mbHVzaCgpO1xyXG4gICAgICBjb25zb2xlLnRpbWVFbmQoJ1JlbmRlcicpO1xyXG4gICAgfVxyXG4gICAgICAgICAgXHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmNvcHkgICAgPSBmdW5jdGlvbihzLCBkKXsgT2JqZWN0LmtleXMoZCkubWFwKGZ1bmN0aW9uKGspeyBkW2tdID0gc1trXTt9KTt9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lLnN1bSAgICAgPSBmdW5jdGlvbihzLCBkKXsgT2JqZWN0LmtleXMoZCkubWFwKGZ1bmN0aW9uKGspeyBkW2tdICs9IHNba107fSk7fSAgIFxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5jb21wdXRlID0gZnVuY3Rpb24oZHMsIG5hbWUpeyByZXR1cm4gZHMucmVkdWNlKCBmdW5jdGlvbih0LCBvKXsgcmV0dXJuIHQgKyBvW25hbWVdOyB9LCAwLjApOyB9XHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmdyb3VwICAgPSBmdW5jdGlvbihhLCBjKXtcclxuXHQgICAgdmFyIGRzID0gYTtcclxuXHQgICAgdmFyIF9fZiA9IGZ1bmN0aW9uKGssIHQpe1xyXG5cdCAgICAgIGRzLmRpc3RpbmN0KCBmdW5jdGlvbih2KXsgcmV0dXJuIHZba107IH0pXHQgICAgICAgICAgICBcclxuXHQgICAgICAgIC5mb3JFYWNoICggZnVuY3Rpb24odil7IGNbdl0gPSBkcy5yZWR1Y2UoIGZ1bmN0aW9uKHAsIGMsIGksIGEpeyByZXR1cm4gKGNba109PXYpID8gcCArIGNbdF0gOiBwOyB9LCAwLjApOyB9KTtcclxuICAgICAgICByZXR1cm4gX19mO1x0ICAgICAgICAgICBcclxuXHQgICAgfVxyXG5cdCAgICByZXR1cm4gX19mO1xyXG4gICAgfVxyXG4gXHJcbiAgfSkoX21vZHVsZSk7XHJcblxyXG59KF9fbW9kdWxlLCAnUG9sJykpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX19tb2R1bGUuUG9sOyIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYCAgXHJcbjxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWJvdHRvbVwiPlxyXG4gIDxoMT5Tb2JyZSBOb3RhcyBBcHA8L2gxPlxyXG4gIDxwIHN0eWxlPVwidGV4dC1pbmRlbnQ6MWVtO1wiPlxyXG4gICAgTm90YXMgQXBwIGVzIHVuYSBwcnVlYmEgZGUgY29uY2VwdG8gZGUgbG8gcXVlIHBvZHLDrWEgc2VyIHVuIDxzcGFuIGNsYXNzPVwidzMtYm9sZCB3My1pdGFsaWNcIj5mcmFtZXdvcms8L3NwYW4+IFxyXG4gICAgc2VuY2lsbG8gY29uIGVsIGN1YWwgZGVzYXJyb2xsYXIgYXBsaWNhY2lvbmVzIDxzcGFuIGNsYXNzPVwidzMtYm9sZCB3My1pdGFsaWNcIj5TUEE8L3NwYW4+IGJhc2FkYXMgw7puaWNhbWVudGUgZW4gPHNwYW4gY2xhc3M9XCJ3My1ib2xkXCI+SFRNTDU8L3NwYW4+IHkgPHNwYW4gY2xhc3M9XCJ3My1ib2xkXCI+SmF2YVNjcmlwdDwvc3Bhbj4uXHJcbiAgPC9wPlxyXG4gIDxwIHN0eWxlPVwidGV4dC1pbmRlbnQ6MWVtO1wiPlxyXG4gICAgRXN0YXMgYXBsaWNhY2lvbmVzIHNlcsOtYW4gc3ViY2VwdGlibGVzIGRlIHNlciBpbnN0YWxhZGFzIGVuIGRpc3Bvc2l0aXZvcyBtw7N2aWxlcyBjb21vIHVuYSA8c3BhbiBjbGFzcz1cInczLWJvbGQgdzMtaXRhbGljXCI+UFdBPC9zcGFuPi5cclxuICA8L3A+XHJcbiAgPHVsIGNsYXNzPVwidzMtdWwgdzMtYm9yZGVyXCI+XHJcbiAgICA8bGk+PGgyPlJlZmVyZW5jaWFzPC9oMj48L2xpPlxyXG4gICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2VzLndpa2lwZWRpYS5vcmcvd2lraS9TaW5nbGUtcGFnZV9hcHBsaWNhdGlvblwiIHRhcmdldD1cIl9ibGFua1wiPlNQQSAoU2luZ2xlLXBhZ2UgYXBwbGljYXRpb24pPC9hPjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZXMud2lraXBlZGlhLm9yZy93aWtpL1Byb2dyZXNzaXZlX1dlYl9BcHBzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UFdBIChQcm9ncmVzc2l2ZSBXZWIgQXBwcyk8L2E+PC9saT5cclxuICA8L3VsPlxyXG4gIDxwIHN0eWxlPVwidGV4dC1pbmRlbnQ6MWVtO1wiPlxyXG4gICAgUGFyYSBlbCBkZXNhcnJvbGxvIGRlIGVzdGEgYXBsaWNhY2nDs24gbm8gc2UgaGFuIHV0aWxpemFkbyBuaW5ndW5vIGRlIGxvcyA8c3BhbiBjbGFzcz1cInczLWJvbGQgdzMtaXRhbGljXCI+ZnJhbWV3b3Jrczwvc3Bhbj4gZXhpc3RlbnRlcyBjb21vIHB1ZWRlbiBzZXIgQW5ndWxhciwgUmVhY3QgbyBWdWUuanMuXHJcbiAgPC9wPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lciB3My1tYXJnaW4tYm90dG9tIHczLWNlbnRlclwiPlxyXG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGFib3V0LWJ0bi1iYWNrIGNsYXNzPVwidzMtYnV0dG9uIHczLWJsYWNrXCI+Vm9sdmVyPC9idXR0b24+XHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICByZXR1cm4ge1xyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLmZvcm1hdCh0aGlzKSwgXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnZGl2Jywgb3B0aW9ucyk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCA6IGNvbnRhaW5lciA9PiB7XHJcbiAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbYWJvdXQtYnRuLWJhY2tdJylcclxuICAgICAgICAgICAgICAgLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgaGlzdG9yeS5iYWNrKCk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYCAgXHJcbiAgPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lciB3My1jZW50ZXJcIiBzdHlsZT1cInBhZGRpbmctdG9wOjIwJTtcIj5cclxuICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1nL2xvZ28ucG5nXCIgYWx0PVwiQ2FyXCIgc3R5bGU9XCJ3aWR0aDogNzUlO1wiPlxyXG4gICAgPHA+TGEgYXBwIHF1ZSB0ZSBwZXJtaXRlIGFsbWFjZW5hciB0b2RhcyB0dXMgbm90YXMgZW4gZWwgbcOzdmlsISEhPC9wPlxyXG4gIDwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICByZXR1cm4ge1xyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLmZvcm1hdCh0aGlzKSxcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcG9sLmJ1aWxkKCdkaXYnLCBvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkIDogY29udGFpbmVyID0+IHtcclxuXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCLvu79pbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYVwiO1xyXG5pbXBvcnQgRGJXcmFwcGVyU2VydmljZSBmcm9tIFwiLi4vbGliL2RiV3JhcHBlci5zZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBOT1RBU19EQVRBQkFTRSAgID0gJ25vdGFzLWFwcC5kYic7IFxyXG5jb25zdCBOT1RBU19UQUJMRV9OQU1FID0gJ25vdGFzJztcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgXHJcbjxkaXYgbm90YXMtY29udGFpbmVyIGNsYXNzPVwiXCIgc3R5bGU9XCJwYWRkaW5nOjA7IG1hcmdpbi1ib3R0b206NDNweDtcIj5cclxuPC9kaXY+XHJcbjxidXR0b24gYnRuLWFkZC1ub3RlIGNsYXNzPVwidzMtYnV0dG9uIHczLWJsYWNrIHczLWNpcmNsZVwiPu+8izwvYnV0dG9uPlxyXG5gO1xyXG5cclxuY29uc3QgX19pdGVtX3RlbXBsYXRlID1gXHJcbjxkaXYgc3R5bGU9XCJwYWRkaW5nOjVweCAwXCIgaWQ9XCJub3RlLXtrZXl9XCI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbGlnaHQtZ3JleVwiIHN0eWxlPVwicGFkZGluZzo1cHhcIj5cclxuICAgIDxkaXYgYnRuLWV4cGFuZD48Yj57dGl0bGV9PC9iPjxpPis8L2k+PC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJ3My1jb250YWluZXJcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTsgc3R5bGU9XCJwYWRkaW5nOjVweFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInczLWJvcmRlci1ib3R0b21cIiBzdHlsZT1cInRleHQtYWxpZ246cmlnaHRcIj57ZGF0ZX08L2Rpdj5cclxuICAgIDxwIGNsYXNzPVwidzMtYm9yZGVyIHczLXBhbGUteWVsbG93XCIgc3R5bGU9XCJwYWRkaW5nOjVweDttaW4taGVpZ2h0OiA0ZW07bWFyZ2luOjVweCAwXCI+e3RleHR9PC9wPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ3My1jZW50ZXJcIj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkZWxldGUte2tleX1cIiBidG4taXRlbS1kZWxldGUgY2xhc3M9XCJ3My1idXR0b24gdzMteGxhcmdlIGZhIGZhLXRyYXNoXCI+PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRiICAgICA6ICcnLFxyXG4gICAgcm93cyAgIDogW10sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7IFxyXG4gICAgICAgIGlubmVySFRNTCA6IF9fdGVtcGxhdGUuZm9ybWF0KHRoaXMpLFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwb2wuYnVpbGQoJ2RpdicsIG9wdGlvbnMpOyBcclxuICAgIH0sXHJcbiAgICBtb3VudGVkIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbYnRuLWFkZC1ub3RlXScpXHJcbiAgICAgICAgICAgICAgIC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIHZhciBfX3BheWxvYWQgPSB7IGtleSAgIDogbmV3IERhdGUoKS52YWx1ZU9mKCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgIDogJzIxLzAyLzIwMjAnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA6ICdOdWV2YSBub3RhJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgOiAnVGV4dG8gZGUgbGEgbm90YScgfTtcclxuICAgICAgICAgICAgICAgICBzYXZlTm90ZS5hcHBseSh0aGlzLCBbX19wYXlsb2FkXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCBub3RhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dzLnB1c2gobm90YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgX19yZW5kZXIoKTsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgIHZhciBfX2xvYWREYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGJcclxuICAgICAgICAgICAgLnJlYWRBbGwoTk9UQVNfVEFCTEVfTkFNRSlcclxuICAgICAgICAgICAgLnRoZW4oIHZhbHVlcyA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yb3dzID0gdmFsdWVzO1xyXG4gICAgICAgICAgICAgIF9fcmVuZGVyKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdmFyIF9fZGVsZXRlID0gKHRhcmdldCkgPT4ge1xyXG5cclxuICAgICAgICBsZXQgX19pZCA9IHRhcmdldC5pZC5zcGxpdCgnLScpWzFdO1xyXG4gICAgICAgIGxldCBfX2VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZS17MH0nLmZvcm1hdChfX2lkKSk7XHJcblxyXG4gICAgICAgIGxldCBfX3BheWxvYWQgPSB0aGlzLnJvd3Mud2hlcmUoIHsga2V5IDogcGFyc2VJbnQoX19pZCwgMTApIH0pWzBdO1xyXG4gICAgICAgIGRlbGV0ZU5vdGUuYXBwbHkodGhpcywgW19faWRdKVxyXG4gICAgICAgICAgICAgICAgICAudGhlbiggKCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0RlbGV0ZSBvaycpO1xyXG4gICAgICAgICAgdGhpcy5yb3dzLnJlbW92ZShfX3BheWxvYWQpO1xyXG4gICAgICAgICAgX19lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX19lbGVtZW50KTtcclxuICAgICAgICB9KTsgICAgICAgICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIF9fcmVuZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBfX2NvbnRhaW5lciA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbbm90YXMtY29udGFpbmVyXScpO1xyXG4gICAgICAgIF9fY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMucm93c1xyXG4gICAgICAgICAgICAubWFwKCBub3RlID0+IHBvbC5idWlsZCgnZGl2JywgeyBpbm5lckhUTUwgOiBfX2l0ZW1fdGVtcGxhdGUuZm9ybWF0KG5vdGUpIH0pKVxyXG4gICAgICAgICAgICAubWFwKCBlID0+IGUuZmlyc3RFbGVtZW50Q2hpbGQgIClcclxuICAgICAgICAgICAgLmZvckVhY2goIGUgPT4ge1xyXG4gICAgICAgICAgICAgIGUucXVlcnlTZWxlY3RvcignW2J0bi1pdGVtLWRlbGV0ZV0nKVxyXG4gICAgICAgICAgICAgICAub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIF9fZGVsZXRlKGV2ZW50LnRhcmdldClcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIF9fY29udGFpbmVyLmFwcGVuZENoaWxkKGUpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgcG9sLnRvQXJyYXkoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tidG4tZXhwYW5kXScpKVxyXG4gICAgICAgICAuZm9yRWFjaChoNCA9PiB7XHJcbiAgICAgICAgICAgaDQub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgIGxldCBfX3N0eWxlID0gaDQucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGU7XHJcbiAgICAgICAgICAgICBpZihfX3N0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKXtcclxuICAgICAgICAgICAgICAgIF9fc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaDQucXVlcnlTZWxlY3RvcignaScpLnRleHRDb250ZW50ID0gJy0nO1xyXG4gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgX19zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICBoNC5xdWVyeVNlbGVjdG9yKCdpJykudGV4dENvbnRlbnQgPSAnKyc7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmRiID0gbmV3IERiV3JhcHBlclNlcnZpY2UoTk9UQVNfREFUQUJBU0UpO1xyXG4gICAgICB0aGlzLmRiXHJcbiAgICAgICAgICAub3BlbkRiKClcclxuICAgICAgICAgIC50aGVuKCBkYiA9PiB7XHJcbiAgICAgICAgICAgIF9fbG9hZERhdGEoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZU5vdGUoa2V5KSB7XHJcbiAgcmV0dXJuIHRoaXMuZGIuZGVsZXRlKE5PVEFTX1RBQkxFX05BTUUsIGtleSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVOb3RlKHBheWxvYWQpIHtcclxuICByZXR1cm4gdGhpcy5kYi5zYXZlKE5PVEFTX1RBQkxFX05BTUUsIHBheWxvYWQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=