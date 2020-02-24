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
    text   : '© Rafael Castro Gómez, 2020',
    init   : function(container){},
    render : function(container){
      let options = { 
        id        : "appFooter",
        innerHTML : __template.format(this),
        className : 'w3-container w3-teal w3-center'
      }
      return _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('footer', options);
    },
    mounted: function(container){
      
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
    init   : function(container){},
    render : function(container){
      let options = { 
        id        : 'appHeader',
        innerHTML : __template.format(this),
        className : 'w3-container w3-teal'
      }
      return _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('header', options);
    },
    mounted: function(container){
      
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

  let component = {
    root   : {},
    init   : function(container){ },
    render : function(container) {
      let options = { 
        id        : "app-content-container",
        innerHTML : __template,
        className : 'w3-container',
        style     : { 
          minHeight : '440px',
          padding   : '0 0 60px 0'
        }
      }
      return _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('section', options);
    },
    mounted: function(container){
      initScroll();  
    }
  };

  return component;

});

// ==========================================================================
// Scroll
// ==========================================================================
function initScroll(){
    
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
      
  function initScroll(){        
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
  window.addEventListener("resize", debounce(initScroll, 150), false);
  initScroll();
};

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


const __TEMPLATE = `  
  <a href="" route-link class="w3-bar-item w3-button">Inicio</a>
  <a href="list" route-link class="w3-bar-item w3-button">Notas</a>
  <a href="add" route-link class="w3-bar-item w3-button">+</a>
  <a href="about" route-link class="w3-bar-item w3-button w3-right">?</a>
`;

/* harmony default export */ __webpack_exports__["default"] = (function(){
  return {
    id     : 'menu.component.ref',
    init   : function(container){},
    render : function(container) {
      let options = { 
        id        : "appMenu",
        innerHTML : __TEMPLATE.format(this),
        className : 'w3-bar w3-black'
      }
      return _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('nav', options);
    },
    mounted: function(container){
      
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
/* harmony import */ var _views_new_item_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/new-item.page */ "./src/views/new-item.page.js");

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
  'about'   : _views_about_page__WEBPACK_IMPORTED_MODULE_7__["default"],
  'add'     : _views_new_item_page__WEBPACK_IMPORTED_MODULE_8__["default"] 
};

// ==============================================================================
// Init App
// ==============================================================================
(function(){

  const root = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].$('appContent');
  components.forEach( c => {
    if(c.init) c.init(root);
    root.appendChild(c.render(root));
    if(c.mounted) c.mounted(root); 
  });

  _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].$('[route-link]')
     .forEach(element => {
        element.onclick = function(e){
          let pathName = e.target.pathname;
          if (currentPath != pathName) {
            currentPath = pathName;
            window.history
                  .pushState({}, pathName, location.origin + pathName);
            try {
              showContent();
            } catch (error) {
              console.log(error);
            }
          }

          return false;
        }  
     });

})();
// ==============================================================================
// Sync content
// ==============================================================================
const container = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].$('app-content-container');
let currentView;
let currentPath;
function showContent(){
  let route = window.location
                    .href
                    .replace(document.baseURI, '');
  let view_ref = views[route] || views.home;
  if(!currentView || currentView != view_ref) {
    container.innerHTML = '';    
    currentView = view_ref;
    let view_instance = currentView({ currentView : currentView });
    if(view_instance.init) view_instance.init();
    container.appendChild(view_instance.render());
    if(view_instance.mounted) view_instance.mounted(container);
  }

}

showContent();

window.onpopstate = function(){ 
  currentPath = window.location.pathname;
  showContent();
}

// ==============================================================================
// ServiceWorker
// ==============================================================================
window.addEventListener('load', () => {

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
      (function(result){
        result.onsuccess = event => { resolve(value); };
        result.onerror   = error => { console.log(error); };
      })(this.db
             .transaction(store, "readwrite")
             .objectStore(store)
             .put(value));
    });
  }

  delete(store, key) {
    return new Promise( (resolve) => {
      (function(result){
        result.onsuccess = event => { resolve(); };
        result.onerror   = error => { console.log(error); };
      })(this.db
             .transaction(store, "readwrite")
             .objectStore(store)
             .delete(key));
    });
  }

  readOne(store, key) {
    return new Promise( (resolve) => {
      (function(result){
        result.onsuccess = event => { resolve(event.target.result); };
        result.onerror   = error => { console.log(error);};
      })(this.db
             .transaction(store, "readwrite")
             .objectStore(store)
             .get(key));
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
        let options = module.isString(o) ? { innerHTML : o } : o;
        return _module.apply(document.createElement(tagName), options);
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

    function fillTemplate(e, scope) {
      var _root = module.$(e);
      var _elements = module.$('[xbind]', _root); 
      if (_root.attributes.xbind) _elements.push(_root);
      _elements.forEach(function (child) {
        String.trimValues(child.attributes.xbind.value.split(';')).forEach(function (token) {
          if (token === '') return;
          var _tokens = String.trimValues(token.split(':'));            
          var _params = String.trimValues(_tokens[1].split(/\s|\,/));
          var _value = getValue(_params[0], scope);
          if (typeof (_value) == 'function') {
            var _args = _params.slice(1)
                               .reduce(function (a, p) {
                                 // xbind="textContent:Data.fnTest @Other,A,5"
                                 a.push(p.charAt(0) == '@' ? getValue(p.slice(1), scope) : p);
                                 return a;
                               }, [scope, child]);
            _value = _value.apply(scope, _args);
          } else if (_params[1]) {
            var _func = getValue(_params[1], scope);
            _value = _func(_value, _params[2], scope, child);
          }
          child[_tokens[0]] = _value;
        });
      });
      return e;
    }

    function executeTemplate(e, values, dom) {
      var _template = module.$(e);
      var _result   = values.reduce( function(a, v, i){
        var _node = { index : i,
                      data  : v,
                      node  : fillTemplate(_template.cloneNode(true), v) };
        a.nodes.push(_node);
        if (!dom) a.html.push(_node.node.outerHTML.replace(/xbind="[^"]*"/g, ''));
        return a; 
      }, { nodes : [], html : [] });
      return dom ? _result.nodes : _result.html.join('');
    }
    
    module.templates = { getValue  : getValue,
                         merge     : merge,
                         execute   : executeTemplate,
                         fill      : fillTemplate };

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

  let component = {
    root   : {},
    init   : function(container){ },
    render : function(container){
      this.root = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', __template);
      return this.root;
    },
    mounted : function(container){
      container.querySelector('[about-btn-back]')
               .onclick = () => {
                 history.back();
               }
    }
  };

  return component;
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
  <div class="w3-container w3-center" style="padding-top:60px;">
    <img src="./assets/img/logo.png" alt="Car" style="width: 300px">
    <p>La app que te permite almacenar todas tus notas en el móvil!!!</p>
  </div>`;

/* harmony default export */ __webpack_exports__["default"] = (function(){

  let component = {
    root   : {},
    init   : function(container){ },
    render : function(container){
      this.root = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', __template).firstElementChild ;
      return this.root;
    },
    mounted : function(container){
      //<button type="button" btn-test class="w3-button w3-black">html</button>
      //let btn = pol.$('[btn-test]', container)[0];
      //btn.onclick = onTestButtonClick;
    }
  };

  // ==========================================================================================
  // FillTemplate
  // ==========================================================================================
  function onTestButtonClick_fill(mouseEvent){
    let template = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', '<h3 xbind="id:id;innerHTML:nombre;onclick:__click"></h3>')
                      .firstElementChild;
    let r = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].templates.fill(
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
    let template = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', 
                             '<h3 xbind="id:id;innerHTML:nombre;"></h3>')
                      .firstElementChild;
    let innerHtml = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].templates
                       .execute(template, [{ id : 555, nombre : 'rafa'},
                                           { id : 444, nombre : 'rafa 444'},
                                           { id : 333, nombre : 'rafa 333'}]);
    _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].templates
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

const TEMPLATE = `
<div notas-container style="padding:0; margin-bottom:43px;"></div>
<button btn-add-note on-click="addNote" class="w3-button w3-black w3-circle">＋</button>`;

const __ITEM_TEMPLATE =`
<div class="w3-border-bottom" style="padding:0; font-size:14px;" id="note-{key}">
  <div class="w3-container" style="padding:5px">
    <div on-click="expandCollapse"><b>{title}</b><i class="w3-right w3-large fa fa-caret-down"></i></div>
  </div>
  <div class="w3-container" style="display:none;padding:0 4px">
    <p class="w3-border-bottom" style="padding:2px;min-height:4em;margin:2px 0;">{text}</p>
    <div class="w3-bar w3-center" style="padding:4px 0;">
      <button type="button" id="delete-{key}" btn-item-delete on-click="deleteNote" class="w3-button w3-black">Borrar</button>
      <button type="button" id="info-{key}" btn-item-delete on-click="showInfo" class="w3-button w3-black">?</button>
    </div>
  </div>
</div>`;

/* harmony default export */ __webpack_exports__["default"] = (function(){
    
  let db;
  let rows = [];
  let itemsContainer;
  let component = {
    root   : {},
    init   : function(container){ },
    render : function(container){
      this.root = _lib_mapa__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', TEMPLATE);
      itemsContainer = this.root.firstElementChild;
      return this.root;
    },
    mounted : function(container){
      initAll();  
    },
    eventHandlers : { 
      addNote        : addNote,
      deleteNote     : deleteNote,
      expandCollapse : expandCollapse,
      showInfo       : showNoteInfo
    } 
  };

  function initAll() {
    // =====================================================
    // Open database
    // =====================================================
    db = new _lib_dbWrapper_service__WEBPACK_IMPORTED_MODULE_1__["default"](NOTAS_DATABASE);
    db.openDb()
      .then( db => {
        loadData();
      });
    // =====================================================
    // addEventListener
    // =====================================================
    addEventListeners(component.root);
  }

  function addEventListeners(container) {
    ['[on-click]'].forEach(event => {
      _lib_mapa__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(container.querySelectorAll(event))
          .forEach( e => {
            e.onclick = (event) => {
              let name = e.attributes['on-click'].value;
              component.eventHandlers[name](e, event);
            };        
          }); 
    })
  }

  function loadData() {
    db.readAll(NOTAS_TABLE_NAME)
      .then( values => {
        rows = values;
        render();
      });
  }

  function render() {
    itemsContainer.innerHTML = '';
    rows.map( note => _lib_mapa__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', __ITEM_TEMPLATE.format(note)))
        .map( e => e.firstElementChild )
        .forEach( e => {
          e.querySelector('[btn-item-delete]')
           .onclick = (event) => {
             deleteNote(event.target)
           }
          itemsContainer.appendChild(e);
        });
    // =====================================================
    // addEventListener
    // =====================================================
    addEventListeners(itemsContainer);
  }

  function deleteNote(target, mouseEvent){
    let __id      = parseInt(target.id.split('-')[1]);
    let __payload = rows.where({ key : __id })[0];
    let __element = document.getElementById('note-{0}'.format(__id));
    
    db.delete(NOTAS_TABLE_NAME, __id)
      .then( () => {
        rows.remove(__payload);
        __element.parentNode.removeChild(__element);
      })
      .catch( e => {
        console.log(e);
      });               
  }

  function expandCollapse(target, mouseEvent) {
    let __style = target.parentNode.nextElementSibling.style;
    if(__style.display == 'none'){
      __style.display = '';
      target.querySelector('i').classList.remove('fa-caret-down');
      target.querySelector('i').classList.add('fa-caret-up');
    } else {
      __style.display = 'none';
      target.querySelector('i').classList.remove('fa-caret-up');
      target.querySelector('i').classList.add('fa-caret-down');
    }
  }

  function addNote(target, mouseEvent) {
    var __payload = { key   : new Date().valueOf(), 
                      date  : '21/02/2020', 
                      title : 'Nueva nota', 
                      text  : 'Texto de la nota' };
    db.save(NOTAS_TABLE_NAME, __payload)
      .then( nota => {
        rows.push(nota)
        render();    
      })
      .catch( e => {
        console.log(e);
      });
  }  

  function showNoteInfo(target, mouseEvent) {
    alert(target.id);
  }

  return component;

});



/***/ }),

/***/ "./src/views/new-item.page.js":
/*!************************************!*\
  !*** ./src/views/new-item.page.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/mapa.js */ "./src/lib/mapa.js");


const __template = `  
<div class="w3-container w3-margin-bottom">
  <h1>Nueva nota</h1>
</div>
<div class="w3-container w3-margin-bottom w3-center">
  <button type="button" id="btn-grabar" class="w3-button w3-black">Grabar</button>
</div>
`;

/* harmony default export */ __webpack_exports__["default"] = (function(context){

  let app = context;

  let component = {
    root   : {},
    init   : function(container){ },
    render : function(container){
      this.root = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', __template);
      return this.root;
    },
    mounted : function(container){
      _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].$('btn-grabar')
         .onclick = () => {
           window.history.replaceState({}, '', '/notas-app/');
           console.log(app);
         }
    }
  };

  return component;
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW4tY29udGVudC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVudS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvZGJXcmFwcGVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9tYXBhLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hYm91dC5wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ob21lLnBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2xpc3QucGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbmV3LWl0ZW0ucGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztR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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsRzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNySkQ7QUFBQTtBQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTs7QUFFZjs7QUFFQTtBQUNBLGVBQWU7QUFDZixpQ0FBaUMsRUFBRTtBQUNuQztBQUNBLGtCQUFrQixvREFBRztBQUNyQjtBQUNBLEtBQUs7QUFDTDtBQUNBLE1BQU0sb0RBQUc7QUFDVDtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgICBcclxuICA8cD57dGV4dH08L3A+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gIHJldHVybiB7XHJcbiAgICB0ZXh0ICAgOiAnwqkgUmFmYWVsIENhc3RybyBHw7NtZXosIDIwMjAnLFxyXG4gICAgaW5pdCAgIDogZnVuY3Rpb24oY29udGFpbmVyKXt9LFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7IFxyXG4gICAgICAgIGlkICAgICAgICA6IFwiYXBwRm9vdGVyXCIsXHJcbiAgICAgICAgaW5uZXJIVE1MIDogX190ZW1wbGF0ZS5mb3JtYXQodGhpcyksXHJcbiAgICAgICAgY2xhc3NOYW1lIDogJ3czLWNvbnRhaW5lciB3My10ZWFsIHczLWNlbnRlcidcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcG9sLmJ1aWxkKCdmb290ZXInLCBvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYFxyXG4gIDxoMT57dGl0bGV9PC9oMT5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRpdGxlICA6ICdOb3RhcyBBcHAnLFxyXG4gICAgaW5pdCAgIDogZnVuY3Rpb24oY29udGFpbmVyKXt9LFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7IFxyXG4gICAgICAgIGlkICAgICAgICA6ICdhcHBIZWFkZXInLFxyXG4gICAgICAgIGlubmVySFRNTCA6IF9fdGVtcGxhdGUuZm9ybWF0KHRoaXMpLFxyXG4gICAgICAgIGNsYXNzTmFtZSA6ICd3My1jb250YWluZXIgdzMtdGVhbCdcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcG9sLmJ1aWxkKCdoZWFkZXInLCBvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYGA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG5cclxuICBsZXQgY29tcG9uZW50ID0ge1xyXG4gICAgcm9vdCAgIDoge30sXHJcbiAgICBpbml0ICAgOiBmdW5jdGlvbihjb250YWluZXIpeyB9LFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oY29udGFpbmVyKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpZCAgICAgICAgOiBcImFwcC1jb250ZW50LWNvbnRhaW5lclwiLFxyXG4gICAgICAgIGlubmVySFRNTCA6IF9fdGVtcGxhdGUsXHJcbiAgICAgICAgY2xhc3NOYW1lIDogJ3czLWNvbnRhaW5lcicsXHJcbiAgICAgICAgc3R5bGUgICAgIDogeyBcclxuICAgICAgICAgIG1pbkhlaWdodCA6ICc0NDBweCcsXHJcbiAgICAgICAgICBwYWRkaW5nICAgOiAnMCAwIDYwcHggMCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnc2VjdGlvbicsIG9wdGlvbnMpO1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIGluaXRTY3JvbGwoKTsgIFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcblxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTY3JvbGxcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gaW5pdFNjcm9sbCgpe1xyXG4gICAgXHJcbiAgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XHJcblx0ICB2YXIgdGltZW91dDtcclxuXHQgIHJldHVybiBmdW5jdGlvbigpIHtcclxuXHRcdCAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xyXG5cdFx0ICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0ICB0aW1lb3V0ID0gbnVsbDtcclxuXHRcdFx0ICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHRcdCAgfTtcclxuXHRcdCAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XHJcblx0XHQgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHRcdCAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG5cdFx0ICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHQgIH07XHJcbiAgfTsgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgXHJcbiAgZnVuY3Rpb24gaW5pdFNjcm9sbCgpeyAgICAgICAgXHJcbiAgICB2YXIgbmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBNZW51XCIpO1xyXG4gICAgaWYobmF2YmFyLmNsYXNzTmFtZS5pbmNsdWRlcygnc3RpY2t5JykpIHJldHVybjtcclxuICAgIHZhciBzdGlja3kgPSBuYXZiYXIub2Zmc2V0VG9wOyAgICAgICAgICBcclxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gc3RpY2t5KSB7XHJcbiAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJzdGlja3lcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XHJcbiAgICAgIH1cclxuICAgIH07ICBcclxuICB9XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZGVib3VuY2UoaW5pdFNjcm9sbCwgMTUwKSwgZmFsc2UpO1xyXG4gIGluaXRTY3JvbGwoKTtcclxufTsiLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX19URU1QTEFURSA9IGAgIFxyXG4gIDxhIGhyZWY9XCJcIiByb3V0ZS1saW5rIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uXCI+SW5pY2lvPC9hPlxyXG4gIDxhIGhyZWY9XCJsaXN0XCIgcm91dGUtbGluayBjbGFzcz1cInczLWJhci1pdGVtIHczLWJ1dHRvblwiPk5vdGFzPC9hPlxyXG4gIDxhIGhyZWY9XCJhZGRcIiByb3V0ZS1saW5rIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uXCI+KzwvYT5cclxuICA8YSBocmVmPVwiYWJvdXRcIiByb3V0ZS1saW5rIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uIHczLXJpZ2h0XCI+PzwvYT5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlkICAgICA6ICdtZW51LmNvbXBvbmVudC5yZWYnLFxyXG4gICAgaW5pdCAgIDogZnVuY3Rpb24oY29udGFpbmVyKXt9LFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oY29udGFpbmVyKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpZCAgICAgICAgOiBcImFwcE1lbnVcIixcclxuICAgICAgICBpbm5lckhUTUwgOiBfX1RFTVBMQVRFLmZvcm1hdCh0aGlzKSxcclxuICAgICAgICBjbGFzc05hbWUgOiAndzMtYmFyIHczLWJsYWNrJ1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwb2wuYnVpbGQoJ25hdicsIG9wdGlvbnMpO1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHBvbCBmcm9tIFwiLi9saWIvbWFwYS5qc1wiO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ29tcG9uZW50c1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuaW1wb3J0IGhlYWRlckNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IGZvb3RlckNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3Rlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IGNvbnRlbnRDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9tYWluLWNvbnRlbnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCBtZW51Q29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudS5jb21wb25lbnRcIjtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBhZ2VzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSBcIi4vdmlld3MvaG9tZS5wYWdlXCI7XHJcbmltcG9ydCBsaXN0UGFnZSBmcm9tIFwiLi92aWV3cy9saXN0LnBhZ2VcIjtcclxuaW1wb3J0IGFib3V0UGFnZSBmcm9tIFwiLi92aWV3cy9hYm91dC5wYWdlXCI7XHJcbmltcG9ydCBuZXdJdGVtUGFnZSBmcm9tIFwiLi92aWV3cy9uZXctaXRlbS5wYWdlXCI7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBSb3V0ZXNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IGNvbXBvbmVudHMgPSAgWyBcclxuICBoZWFkZXJDb21wb25lbnQoKSxcclxuICBtZW51Q29tcG9uZW50KCksXHJcbiAgY29udGVudENvbXBvbmVudCgpLFxyXG4gIGZvb3RlckNvbXBvbmVudCgpXHJcbl07XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWaWV3c1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3Qgdmlld3MgPSB7IFxyXG4gICdob21lJyAgICA6IGhvbWVQYWdlLFxyXG4gICdsaXN0JyAgICA6IGxpc3RQYWdlLFxyXG4gICdhYm91dCcgICA6IGFib3V0UGFnZSxcclxuICAnYWRkJyAgICAgOiBuZXdJdGVtUGFnZSBcclxufTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJbml0IEFwcFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKGZ1bmN0aW9uKCl7XHJcblxyXG4gIGNvbnN0IHJvb3QgPSBwb2wuJCgnYXBwQ29udGVudCcpO1xyXG4gIGNvbXBvbmVudHMuZm9yRWFjaCggYyA9PiB7XHJcbiAgICBpZihjLmluaXQpIGMuaW5pdChyb290KTtcclxuICAgIHJvb3QuYXBwZW5kQ2hpbGQoYy5yZW5kZXIocm9vdCkpO1xyXG4gICAgaWYoYy5tb3VudGVkKSBjLm1vdW50ZWQocm9vdCk7IFxyXG4gIH0pO1xyXG5cclxuICBwb2wuJCgnW3JvdXRlLWxpbmtdJylcclxuICAgICAuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbihlKXtcclxuICAgICAgICAgIGxldCBwYXRoTmFtZSA9IGUudGFyZ2V0LnBhdGhuYW1lO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRQYXRoICE9IHBhdGhOYW1lKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYXRoID0gcGF0aE5hbWU7XHJcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5XHJcbiAgICAgICAgICAgICAgICAgIC5wdXNoU3RhdGUoe30sIHBhdGhOYW1lLCBsb2NhdGlvbi5vcmlnaW4gKyBwYXRoTmFtZSk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgc2hvd0NvbnRlbnQoKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgfSk7XHJcblxyXG59KSgpO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU3luYyBjb250ZW50XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBjb250YWluZXIgPSBwb2wuJCgnYXBwLWNvbnRlbnQtY29udGFpbmVyJyk7XHJcbmxldCBjdXJyZW50VmlldztcclxubGV0IGN1cnJlbnRQYXRoO1xyXG5mdW5jdGlvbiBzaG93Q29udGVudCgpe1xyXG4gIGxldCByb3V0ZSA9IHdpbmRvdy5sb2NhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIC5ocmVmXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoZG9jdW1lbnQuYmFzZVVSSSwgJycpO1xyXG4gIGxldCB2aWV3X3JlZiA9IHZpZXdzW3JvdXRlXSB8fCB2aWV3cy5ob21lO1xyXG4gIGlmKCFjdXJyZW50VmlldyB8fCBjdXJyZW50VmlldyAhPSB2aWV3X3JlZikge1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnOyAgICBcclxuICAgIGN1cnJlbnRWaWV3ID0gdmlld19yZWY7XHJcbiAgICBsZXQgdmlld19pbnN0YW5jZSA9IGN1cnJlbnRWaWV3KHsgY3VycmVudFZpZXcgOiBjdXJyZW50VmlldyB9KTtcclxuICAgIGlmKHZpZXdfaW5zdGFuY2UuaW5pdCkgdmlld19pbnN0YW5jZS5pbml0KCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodmlld19pbnN0YW5jZS5yZW5kZXIoKSk7XHJcbiAgICBpZih2aWV3X2luc3RhbmNlLm1vdW50ZWQpIHZpZXdfaW5zdGFuY2UubW91bnRlZChjb250YWluZXIpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbnNob3dDb250ZW50KCk7XHJcblxyXG53aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uKCl7IFxyXG4gIGN1cnJlbnRQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gIHNob3dDb250ZW50KCk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTZXJ2aWNlV29ya2VyXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuXHJcbiAgaWYoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcil7XHJcbiAgICB0cnkge1xyXG4gICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZVdvcmtlci5qcycpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIFJlZ2lzdGVyZWRcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIFJlZ2lzdHJhdGlvbiBGYWlsZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSk7XHJcbiIsIu+7v2ltcG9ydCBwb2wgZnJvbSBcIi4vbWFwYS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGJXcmFwcGVyU2VydmljZXtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgdGhpcy5kYm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kYiA9ICcnO1xyXG4gIH1cclxuXHJcbiAgb3BlbkRiKCl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgIGxldCByZXF1ZXN0ID0gd2luZG93LmluZGV4ZWREQi5vcGVuKHRoaXMuZGJuYW1lLCAxKTtcclxuXHJcblx0ICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKGUpID0+IHtcclxuICAgICAgICB0aGlzLmRiID0gZS50YXJnZXQucmVzdWx0O1xyXG5cdFx0ICAgIHJlc29sdmUodGhpcy5kYik7XHJcblx0ICAgIH07XHJcblxyXG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBlID0+IHsgIFxyXG4gICAgICAgIHJlamVjdCgnRXJyb3InKTtcclxuICAgICAgfTtcclxuXHRcclxuXHQgICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoZSkgPT4ge1xyXG5cdFx0ICAgIHRoaXMuZGIgPSBlLnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmKHRoaXMuZGIub2JqZWN0U3RvcmVOYW1lcyAmJiB0aGlzLmRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoXCJub3Rhc1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRiLmRlbGV0ZU9iamVjdFN0b3JlKFwibm90YXNcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdG9yZSA9IHRoaXMuZGIuY3JlYXRlT2JqZWN0U3RvcmUoXCJub3Rhc1wiLCB7IGtleVBhdGggOiBcImtleVwiIH0pOyAgICAgICBcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVhZEFsbChuYW1lKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB2YXIgX19pdGVtcyA9IFtdO1xyXG4gICAgICB0aGlzLmRiXHJcbiAgICAgICAgICAudHJhbnNhY3Rpb24obmFtZSwgXCJyZWFkb25seVwiKVxyXG4gICAgICAgICAgLm9iamVjdFN0b3JlKG5hbWUpXHJcbiAgICAgICAgICAub3BlbkN1cnNvcihJREJLZXlSYW5nZS5sb3dlckJvdW5kKDApKVxyXG4gICAgICAgICAgLm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgX19jdXJzb3IgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICBpZihfX2N1cnNvcikge1xyXG4gICAgICAgICAgICAgIF9faXRlbXMucHVzaChfX2N1cnNvci52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgX19jdXJzb3IuY29udGludWUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXNvbHZlKF9faXRlbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzYXZlKHN0b3JlLCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAoZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgICByZXN1bHQub25zdWNjZXNzID0gZXZlbnQgPT4geyByZXNvbHZlKHZhbHVlKTsgfTtcclxuICAgICAgICByZXN1bHQub25lcnJvciAgID0gZXJyb3IgPT4geyBjb25zb2xlLmxvZyhlcnJvcik7IH07XHJcbiAgICAgIH0pKHRoaXMuZGJcclxuICAgICAgICAgICAgIC50cmFuc2FjdGlvbihzdG9yZSwgXCJyZWFkd3JpdGVcIilcclxuICAgICAgICAgICAgIC5vYmplY3RTdG9yZShzdG9yZSlcclxuICAgICAgICAgICAgIC5wdXQodmFsdWUpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlKHN0b3JlLCBrZXkpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHtcclxuICAgICAgKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgcmVzdWx0Lm9uc3VjY2VzcyA9IGV2ZW50ID0+IHsgcmVzb2x2ZSgpOyB9O1xyXG4gICAgICAgIHJlc3VsdC5vbmVycm9yICAgPSBlcnJvciA9PiB7IGNvbnNvbGUubG9nKGVycm9yKTsgfTtcclxuICAgICAgfSkodGhpcy5kYlxyXG4gICAgICAgICAgICAgLnRyYW5zYWN0aW9uKHN0b3JlLCBcInJlYWR3cml0ZVwiKVxyXG4gICAgICAgICAgICAgLm9iamVjdFN0b3JlKHN0b3JlKVxyXG4gICAgICAgICAgICAgLmRlbGV0ZShrZXkpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVhZE9uZShzdG9yZSwga2V5KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIChmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgIHJlc3VsdC5vbnN1Y2Nlc3MgPSBldmVudCA9PiB7IHJlc29sdmUoZXZlbnQudGFyZ2V0LnJlc3VsdCk7IH07XHJcbiAgICAgICAgcmVzdWx0Lm9uZXJyb3IgICA9IGVycm9yID0+IHsgY29uc29sZS5sb2coZXJyb3IpO307XHJcbiAgICAgIH0pKHRoaXMuZGJcclxuICAgICAgICAgICAgIC50cmFuc2FjdGlvbihzdG9yZSwgXCJyZWFkd3JpdGVcIilcclxuICAgICAgICAgICAgIC5vYmplY3RTdG9yZShzdG9yZSlcclxuICAgICAgICAgICAgIC5nZXQoa2V5KSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcblxyXG4iLCJcclxuXHJcbmxldCBfX21vZHVsZSA9IHt9O1xyXG4oZnVuY3Rpb24obW9kdWxlLCBuYW1lKXtcclxuXHJcbiAgdmFyIF9tb2R1bGUgPSAgbW9kdWxlW25hbWVdID0geyBhcHBseSA6IGZ1bmN0aW9uIGFwcGx5KG8sIGMsIGQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkKSBhcHBseShvLCBkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobyAmJiBjICYmIHR5cGVvZiBjID09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gYyl7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNbcF0gPT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5KG9bcF0sIGNbcF0gKSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9bcF0gPSBjW3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX07ICAgICAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFV0aWxzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpe1xyXG4gICAgbW9kdWxlLmFwcGx5KG1vZHVsZSx7IFxyXG4gICAgICB0b0FycmF5ICAgICA6IGZ1bmN0aW9uKHYpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh2KTsgfSxcclxuICAgICAgaXNOdWxsICAgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdiA9PT0gbnVsbDsgfSxcclxuICAgICAgaXNBcnJheSAgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gQXJyYXkuaXNBcnJheSh2KTsgfSxcclxuICAgICAgaXNTdHJpbmcgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdHlwZW9mIHYgPT0gJ3N0cmluZyc7fSxcclxuICAgICAgaXNCb29sZWFuICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdHlwZW9mIHYgPT0gJ2Jvb2xlYW4nO30sXHJcbiAgICAgIGlzTnVtYmVyICAgIDogZnVuY3Rpb24odil7cmV0dXJuIHR5cGVvZiB2ID09ICdudW1iZXInO30sXHJcbiAgICAgIGlzRnVuY3Rpb24gIDogZnVuY3Rpb24odil7cmV0dXJuIHR5cGVvZiB2ID09ICdmdW5jdGlvbic7fSxcclxuICAgICAgaXNPYmplY3QgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdiAmJiB0eXBlb2YgdiA9PSAnb2JqZWN0Jzt9LFxyXG4gICAgICBjbG9uZSAgICAgICA6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICBpZihtb2R1bGUuaXNBcnJheShvKSkgICAgICAgICAgICAgcmV0dXJuIG8uc2xpY2UoMCk7XHJcbiAgICAgICAgaWYobW9kdWxlLmlzT2JqZWN0KG8pICYmIG8uY2xvbmUpIHJldHVybiBvLmNsb25lKCk7XHJcbiAgICAgICAgaWYobW9kdWxlLmlzT2JqZWN0KG8pKXsgICAgICAgICAgICAgICBcclxuICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvKS5yZWR1Y2UoIGZ1bmN0aW9uKGEsIGspe1xyXG4gICAgICAgICAgICBhW2tdID0gbW9kdWxlLmNsb25lKG9ba10pO1xyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgIH0sIHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgIH0sICAgICAgICBcclxuICAgICAgam9pbiAgICAgICAgOiBmdW5jdGlvbihpdGVtcywgcHJvcGVydHksIHNlcGFyYXRvcil7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLnJlZHVjZShmdW5jdGlvbihhLCBvKXsgcmV0dXJuIGEuYXBwZW5kKG9bcHJvcGVydHkgfHwgJ2lkJ10pOyB9LCBbXSlcclxuICAgICAgICAgICAgICAgICAgICAuam9pbihzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICctJyA6IChzZXBhcmF0b3IgfHwgJycpKTsgXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0cmluZ0J1aWxkZXIgOiBmdW5jdGlvbihzKXtcclxuICAgICAgICAgIHJldHVybiB7IHZhbHVlICAgICAgOiBzIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgYXBwZW5kICAgICA6IGZ1bmN0aW9uKHMpeyB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZSArIHM7IHJldHVybiB0aGlzO30sXHJcbiAgICAgICAgICAgICAgICAgICBhcHBlbmRMaW5lIDogZnVuY3Rpb24ocyl7IHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlICsgKHMgfHwgJycpICsgJ1xcbic7IHJldHVybiB0aGlzO319XHJcbiAgICAgIH0sXHJcbiAgICAgIGJ1aWxkIDogZnVuY3Rpb24odGFnTmFtZSwgbyl7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBtb2R1bGUuaXNTdHJpbmcobykgPyB7IGlubmVySFRNTCA6IG8gfSA6IG87XHJcbiAgICAgICAgcmV0dXJuIF9tb2R1bGUuYXBwbHkoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKSwgb3B0aW9ucyk7XHJcbiAgICAgIH0sXHJcbiAgICAgICQgOiBmdW5jdGlvbihlLCBjb250cm9sKXsgXHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSkgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnRvQXJyYXkoKGNvbnRyb2wgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoZSkgfHwgW10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZTtcclxuICAgICAgfSBcclxuICAgIH0pO1xyXG4gIH0oX21vZHVsZSkpO1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBTdHJpbmdzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpe1xyXG4gICAgbW9kdWxlLmFwcGx5KFN0cmluZywge1xyXG4gICAgICBzdHJpbmdCdWlsZGVyIDogbW9kdWxlLnN0cmluZ0J1aWxkZXIsXHJcbiAgICAgIGxlZnRQYWQgICAgICAgOiBmdW5jdGlvbiAodmFsLCBzaXplLCBjaCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAnJyArIHZhbDtcclxuICAgICAgICBpZiAoY2ggPT09IG51bGwgfHwgY2ggPT09IHVuZGVmaW5lZCB8fCBjaCA9PT0gJycpIGNoID0gJyAnOyAgICAgICAgICAgIFxyXG4gICAgICAgIHdoaWxlIChyZXN1bHQubGVuZ3RoIDwgc2l6ZSkgcmVzdWx0ID0gY2ggKyByZXN1bHQ7ICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSxcclxuICAgICAgdHJpbVZhbHVlcyA6IGZ1bmN0aW9uICh2YWx1ZXMpeyByZXR1cm4gdmFsdWVzLm1hcChmdW5jdGlvbihzKXtyZXR1cm4gcy50cmltKCk7fSk7fVxyXG4gICAgfSk7XHJcbiAgICBtb2R1bGUuYXBwbHkoU3RyaW5nLnByb3RvdHlwZSwge1xyXG4gICAgICByZXBsYWNlQWxsICA6IGZ1bmN0aW9uKHBhdHRlcm4sIHJlcGxhY2VtZW50KSB7IHJldHVybiB0aGlzLnNwbGl0KHBhdHRlcm4pLmpvaW4ocmVwbGFjZW1lbnQpOyB9LFxyXG4gICAgICByZXBlYXQgICAgICA6IFN0cmluZy5wcm90b3R5cGUucmVwZWF0ICAgICB8fCBmdW5jdGlvbihhKSB7IHJldHVybiBuZXcgQXJyYXkoYSArIDEpLmpvaW4odGhpcyk7IH0sXHJcbiAgICAgIGNvbnRhaW5zICAgIDogU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyAgIHx8IGZ1bmN0aW9uKHQsIHN0YXJ0KSB7IHJldHVybiB0aGlzLmluZGV4T2YodCkgPj0gKHN0YXJ0IHx8IDApOyB9LFxyXG4gICAgICBzdGFydHNXaXRoICA6IFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCB8fCBmdW5jdGlvbih0KXsgcmV0dXJuIHRoaXMuaW5kZXhPZih0KSA9PSAwOyB9LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIHRvRmxvYXQgICAgIDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMudHJpbSgpLnJlcGxhY2VBbGwoJy4nLCAnJykucmVwbGFjZUFsbCgnLCcsICcuJykgfSxcclxuICAgICAgZml4RGF0ZSAgICAgOiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5zcGxpdCgnICcpWzBdOyB9LFxyXG4gICAgICBmaXhUaW1lICAgICA6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLnNwbGl0KCcgJylbMV07IH0sXHJcbiAgICAgIGZpeFllYXIgICAgIDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuZml4RGF0ZSgpLnNwbGl0KCcvJylbMl07fSxcclxuICAgICAgdHJpbVNlY29uZHMgOiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5zcGxpdCgnOicpWzBdICsgJzonICsgdGhpcy5zcGxpdCgnOicpWzFdIDsgfSxcclxuICAgICAgcGFkZGluZ0xlZnQgOiBmdW5jdGlvbihwYWRkaW5nVmFsdWUpeyByZXR1cm4gKHBhZGRpbmdWYWx1ZSArIHRoaXMpLnNsaWNlKC1wYWRkaW5nVmFsdWUubGVuZ3RoKTsgfSxcclxuICAgICAgZm9ybWF0ICAgICAgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBfX2FyZyAgICAgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgdmFyIF9fY29udGV4dCA9IF9fYXJnW19fYXJnLmxlbmd0aCAtIDFdIHx8IHNlbGY7ICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvXFx7KFxcZCt8W157XSspXFx9L2csIGZ1bmN0aW9uKG0sIGtleSl7XHJcbiAgICAgICAgICBpZihrZXkuaW5kZXhPZignOicpID4gMCl7XHJcbiAgICAgICAgICAgIHZhciBfX2ZuID0ga2V5LnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgIF9fZm5bMF0gID0gZ2V0VmFsdWUoX19mblswXSwgX19jb250ZXh0KTtcclxuICAgICAgICAgICAgX19mblsxXSAgPSBnZXRWYWx1ZShfX2ZuWzFdLCBfX2NvbnRleHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gX19mblswXShfX2ZuWzFdLCBfX2NvbnRleHQpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIC9eXFxkKyQvLnRlc3Qoa2V5KSA/IF9fYXJnW2tleV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICh0eXBlb2YgX19jb250ZXh0W2tleV0gPT09IFwidW5kZWZpbmVkXCIpID8gZ2V0VmFsdWUoa2V5LCBfX2NvbnRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfX2NvbnRleHRba2V5XTsgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pOyAgICAgIFxyXG4gIH0oX21vZHVsZSkpOyAgICAgIFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBBcnJheVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgXHJcbiAgKGZ1bmN0aW9uKG1vZHVsZSl7XHJcbiAgICBtb2R1bGUuYXBwbHkoQXJyYXkucHJvdG90eXBlLCB7ICAgICAgICAgIFxyXG4gICAgICByZW1vdmUgICA6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4T2Yobyk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9IC0xKSB0aGlzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZCAgICAgIDogZnVuY3Rpb24obykge1xyXG4gICAgICAgIHRoaXMucHVzaChvKTtcclxuICAgICAgICByZXR1cm4gbztcclxuICAgICAgfSxcclxuICAgICAgYXBwZW5kICAgOiBmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoKG8pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9LFxyXG4gICAgICBpdGVtICAgICA6IGZ1bmN0aW9uKHByb3BOYW1lLCB2YWx1ZSwgZGVmKXtcclxuICAgICAgICByZXR1cm4gYXJndW1lbnRzPT0xID8gdGhpcy5maWx0ZXIoIGZ1bmN0aW9uKHYpe3JldHVybiB2WydpZCddID09IHByb3BOYW1lIHx8IHZbJ19pZCddID09IHByb3BOYW1lfSlbMF0gfHwgZGVmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZmlsdGVyKCBmdW5jdGlvbih2KXtyZXR1cm4gdltwcm9wTmFtZV0gPT0gdmFsdWV9KVswXSB8fCBkZWY7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRhaW5zIDogZnVuY3Rpb24ocHJvcE5hbWUsdmFsdWUpeyByZXR1cm4gdGhpcy5pdGVtKHByb3BOYW1lLHZhbHVlKTsgfSxcclxuICAgICAgbGFzdEl0ZW0gOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTsgfSxcclxuICAgICAgc2VsZWN0ICAgOiBmdW5jdGlvbihzZW50ZW5jZSl7IHJldHVybiB0aGlzLm1hcChzZW50ZW5jZSkgfSwgICBcclxuICAgICAgd2hlcmUgICAgOiBmdW5jdGlvbihzZW50ZW5jZSl7IFxyXG4gICAgICAgIGlmKG1vZHVsZS5pc0Z1bmN0aW9uKHNlbnRlbmNlKSkgcmV0dXJuIHRoaXMuZmlsdGVyKHNlbnRlbmNlKTtcclxuICAgICAgICBpZihtb2R1bGUuaXNPYmplY3Qoc2VudGVuY2UpKXtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmZpbHRlcihuZXcgRnVuY3Rpb24oJ2EnLCBPYmplY3Qua2V5cyhzZW50ZW5jZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKGEsIHByb3BuYW1lLCBpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgKyAoaSA+IDAgPyAnICYmICcgOiAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAgKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fdmFsdWUgPSBzZW50ZW5jZVtwcm9wbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoX192YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuICd7MX0udGVzdChhLnswfSknLmZvcm1hdChwcm9wbmFtZSwgX192YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobW9kdWxlLmlzU3RyaW5nKF9fdmFsdWUpKSByZXR1cm4gJ2EuezB9ID09PSBcXCd7MX1cXCcnLmZvcm1hdChwcm9wbmFtZSwgX192YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhLnswfSA9PT0gezF9Jy5mb3JtYXQocHJvcG5hbWUsIF9fdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSgpKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAncmV0dXJuICcpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9LFxyXG4gICAgICBzb3J0QnkgICAgICA6IGZ1bmN0aW9uKHByb3BuYW1lLCBkZXNjKXtcclxuICAgICAgICB2YXIgX19vcmRlciA9IFtdO1xyXG4gICAgICAgIHZhciBfX25hbWVzID0gcHJvcG5hbWUuc3BsaXQoJywnKS5tYXAoIGZ1bmN0aW9uKHRva2VuLGkpeyBcclxuICAgICAgICAgIHZhciBfX3BhaXIgPSB0b2tlbi5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgX19vcmRlcltpXSA9IChfX3BhaXJbMV0gJiYgKF9fcGFpclsxXS50b1VwcGVyQ2FzZSgpPT0nREVTQycpKSA/IC0xIDogMTsgICAgICBcclxuICAgICAgICAgIHJldHVybiBfX3BhaXJbMF07ICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIF9fb3JkZXJbMF0gPSAoZGVzYyA/IC0xIDogMSlcclxuICAgICAgICB0aGlzLnNvcnQoZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwOyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9fZm4gPSBmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciBfX3ggPSBhW19fbmFtZXNbaV1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIF9feSA9IGJbX19uYW1lc1tpXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihfX3ggPCBfX3kpIHJldHVybiAtMSAqIF9fb3JkZXJbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihfX3ggPiBfX3kpIHJldHVybiAgMSAqIF9fb3JkZXJbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihpIDwgX19uYW1lcy5sZW5ndGgpIHJldHVybiBfX2ZuKGEsYik7ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2ZuKGEsYik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpczsgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyQnkgICAgIDogZnVuY3Rpb24oc2VudGVuY2Upe1xyXG4gICAgICAgIHZhciBfX3NlbnRlbmNlID0gc2VudGVuY2U7ICAgIFxyXG4gICAgICAgIGlmKG1vZHVsZS5pc1N0cmluZyhzZW50ZW5jZSkpIF9fc2VudGVuY2UgPSBmdW5jdGlvbihhKXsgcmV0dXJuIGFbc2VudGVuY2VdOyB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlfSlcclxuICAgICAgICAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBfX3NlbnRlbmNlKGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBfX3NlbnRlbmNlKGIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgoeCA8IHkpID8gLTEgOiAoKHggPiB5KSA/IDEgOiAwKSk7XHJcbiAgICAgICAgICAgICAgICAgICB9KTsgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBkaXN0aW5jdCAgICA6IGZ1bmN0aW9uKHNlbnRlbmNlKSB7XHJcbiAgICAgICAgdmFyIF9fc2VudGVuY2UgPSBzZW50ZW5jZTsgICAgXHJcbiAgICAgICAgaWYobW9kdWxlLmlzU3RyaW5nKHNlbnRlbmNlKSkgX19zZW50ZW5jZSA9IGZ1bmN0aW9uKGEpeyByZXR1cm4gYVtzZW50ZW5jZV07IH1cclxuICAgICAgICB2YXIgciA9IFtdO1xyXG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgIHZhciBfdmFsdWUgPSBfX3NlbnRlbmNlKGl0ZW0pO1xyXG4gICAgICAgICAgaWYoci5pbmRleE9mKF92YWx1ZSk9PS0xKSByLnB1c2goX3ZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgICAgfSxcclxuICAgICAgZ3JvdXBCeSA6IGZ1bmN0aW9uKHByb3Ape1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZHVjZShmdW5jdGlvbihncm91cHMsIGl0ZW0pIHtcclxuICAgICAgICAgIHZhciB2YWwgPSBpdGVtW3Byb3BdO1xyXG4gICAgICAgICAgKGdyb3Vwc1t2YWxdID0gZ3JvdXBzW3ZhbF0gfHwgW10pLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICByZXR1cm4gZ3JvdXBzXHJcbiAgICAgICAgfSwge30pXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvRGljdGlvbmFyeSA6IGZ1bmN0aW9uKHByb3AsIHZhbHVlKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWR1Y2UoZnVuY3Rpb24oYSwgZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtkW3Byb3BdXSA9IHZhbHVlID8gZFt2YWx1ZV0gOiBkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7fSk7ICBcclxuICAgICAgfVxyXG4gICAgfSk7ICAgICAgIFxyXG4gIH0oX21vZHVsZSkpO1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gVGVtcGxhdGVzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpe1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFZhbHVlKGtleSwgc2NvcGUpIHsgICAgICAgIFxyXG4gICAgICByZXR1cm4ga2V5LnNwbGl0KC9cXC58XFxbfFxcXS8pXHJcbiAgICAgICAgICAgICAgICAucmVkdWNlKCBmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICAgICAgICAgICAgaWYgKGIgPT09ICcnKSByZXR1cm4gYTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFbYl0gPT09IHVuZGVmaW5lZCA/IChhID09PSBzZWxmID8gJycgOiBzZWxmKSA6IGFbYl07XHJcbiAgICAgICAgICAgICAgICB9LCBzY29wZSB8fCBzZWxmICk7ICAgIFxyXG4gICAgfVxyXG4gICBcclxuICAgIGZ1bmN0aW9uIG1lcmdlKHRlbXBsYXRlLCBvLCBrZXkpIHtcclxuICAgICAgdmFyIF9fcmVzdWx0ID0gdGVtcGxhdGUucmVwbGFjZSgveyhbXntdKyk/fS9nLCBmdW5jdGlvbiAobSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihrZXkuaW5kZXhPZignOicpID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2ZuID0ga2V5LnNwbGl0KCc6Jyk7ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19mblswXSAgPSBnZXRWYWx1ZShfX2ZuWzBdLCBvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19mblsxXSAgPSBnZXRWYWx1ZShfX2ZuWzFdLCBvKTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZm5bMF0oX19mblsxXSwgbyk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgciAgID0gZ2V0VmFsdWUoa2V5LCBvKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2sgPSAoa2V5LmNvbnRhaW5zKCcuJykgPyAnJyA6ICdvLicpICsga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAocikgPT0gJ2Z1bmN0aW9uJyl7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByKG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfWVsc2V7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIChyKSA9PSAnZnVuY3Rpb24nID8gcihvKSA6IHI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7ICAgICBcclxuICAgICAgcmV0dXJuIF9fcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbGxUZW1wbGF0ZShlLCBzY29wZSkge1xyXG4gICAgICB2YXIgX3Jvb3QgPSBtb2R1bGUuJChlKTtcclxuICAgICAgdmFyIF9lbGVtZW50cyA9IG1vZHVsZS4kKCdbeGJpbmRdJywgX3Jvb3QpOyBcclxuICAgICAgaWYgKF9yb290LmF0dHJpYnV0ZXMueGJpbmQpIF9lbGVtZW50cy5wdXNoKF9yb290KTtcclxuICAgICAgX2VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgU3RyaW5nLnRyaW1WYWx1ZXMoY2hpbGQuYXR0cmlidXRlcy54YmluZC52YWx1ZS5zcGxpdCgnOycpKS5mb3JFYWNoKGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgICAgaWYgKHRva2VuID09PSAnJykgcmV0dXJuO1xyXG4gICAgICAgICAgdmFyIF90b2tlbnMgPSBTdHJpbmcudHJpbVZhbHVlcyh0b2tlbi5zcGxpdCgnOicpKTsgICAgICAgICAgICBcclxuICAgICAgICAgIHZhciBfcGFyYW1zID0gU3RyaW5nLnRyaW1WYWx1ZXMoX3Rva2Vuc1sxXS5zcGxpdCgvXFxzfFxcLC8pKTtcclxuICAgICAgICAgIHZhciBfdmFsdWUgPSBnZXRWYWx1ZShfcGFyYW1zWzBdLCBzY29wZSk7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIChfdmFsdWUpID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdmFyIF9hcmdzID0gX3BhcmFtcy5zbGljZSgxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB4YmluZD1cInRleHRDb250ZW50OkRhdGEuZm5UZXN0IEBPdGhlcixBLDVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnB1c2gocC5jaGFyQXQoMCkgPT0gJ0AnID8gZ2V0VmFsdWUocC5zbGljZSgxKSwgc2NvcGUpIDogcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW3Njb3BlLCBjaGlsZF0pO1xyXG4gICAgICAgICAgICBfdmFsdWUgPSBfdmFsdWUuYXBwbHkoc2NvcGUsIF9hcmdzKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoX3BhcmFtc1sxXSkge1xyXG4gICAgICAgICAgICB2YXIgX2Z1bmMgPSBnZXRWYWx1ZShfcGFyYW1zWzFdLCBzY29wZSk7XHJcbiAgICAgICAgICAgIF92YWx1ZSA9IF9mdW5jKF92YWx1ZSwgX3BhcmFtc1syXSwgc2NvcGUsIGNoaWxkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNoaWxkW190b2tlbnNbMF1dID0gX3ZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXhlY3V0ZVRlbXBsYXRlKGUsIHZhbHVlcywgZG9tKSB7XHJcbiAgICAgIHZhciBfdGVtcGxhdGUgPSBtb2R1bGUuJChlKTtcclxuICAgICAgdmFyIF9yZXN1bHQgICA9IHZhbHVlcy5yZWR1Y2UoIGZ1bmN0aW9uKGEsIHYsIGkpe1xyXG4gICAgICAgIHZhciBfbm9kZSA9IHsgaW5kZXggOiBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YSAgOiB2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgbm9kZSAgOiBmaWxsVGVtcGxhdGUoX3RlbXBsYXRlLmNsb25lTm9kZSh0cnVlKSwgdikgfTtcclxuICAgICAgICBhLm5vZGVzLnB1c2goX25vZGUpO1xyXG4gICAgICAgIGlmICghZG9tKSBhLmh0bWwucHVzaChfbm9kZS5ub2RlLm91dGVySFRNTC5yZXBsYWNlKC94YmluZD1cIlteXCJdKlwiL2csICcnKSk7XHJcbiAgICAgICAgcmV0dXJuIGE7IFxyXG4gICAgICB9LCB7IG5vZGVzIDogW10sIGh0bWwgOiBbXSB9KTtcclxuICAgICAgcmV0dXJuIGRvbSA/IF9yZXN1bHQubm9kZXMgOiBfcmVzdWx0Lmh0bWwuam9pbignJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG1vZHVsZS50ZW1wbGF0ZXMgPSB7IGdldFZhbHVlICA6IGdldFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2UgICAgIDogbWVyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBleGVjdXRlICAgOiBleGVjdXRlVGVtcGxhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsICAgICAgOiBmaWxsVGVtcGxhdGUgfTtcclxuXHJcbiAgfShfbW9kdWxlKSk7XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBBamF4XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpeyAgXHJcbiAgICBtb2R1bGUuYWpheCA9IHt9O1xyXG4gICAgbW9kdWxlLmFwcGx5KG1vZHVsZS5hamF4LCB7XHJcbiAgICAgIGdldCAgOiBmdW5jdGlvbiAodXJsLCBjYWxsQmFjaykge1xyXG4gICAgICAgIHVybCArPSAodXJsLmNvbnRhaW5zKCc/JykgPyAnJm1zPScgOiAnP21zPScpICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIHhtbCA9IHRoaXMuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4bWwub3BlbignR0VUJywgdXJsLCB0cnVlKTtcclxuICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignSWYtTW9kaWZpZWQtU2luY2UnLCAnVGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVQnKTtcclxuICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignQ2FjaGUtQ29udHJvbCcsICduby1jYWNoZScpO1xyXG4gICAgICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7IGlmICh4bWwucmVhZHlTdGF0ZSA9PSA0KSBjYWxsQmFjayh4bWwucmVzcG9uc2VUZXh0KSB9O1xyXG4gICAgICAgIHhtbC5zZW5kKG51bGwpO1xyXG4gICAgICB9LFxyXG4gICAgICBwb3N0IDogZnVuY3Rpb24odXJsLCBwYXJhbXMsIGNhbGxCYWNrKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgdmFyIHhtbCA9IHRoaXMuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4bWwub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeG1sLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkgeyBpZiAoeG1sLnJlYWR5U3RhdGUgPT0gNCkgY2FsbEJhY2soeG1sLnJlc3BvbnNlVGV4dCkgfTtcclxuICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldDpJU08tODg1OS0xJyk7XHJcbiAgICAgICAgeG1sLnNlbmQocGFyYW1zKTtcclxuICAgICAgfSxcclxuICAgICAgY2FsbFdlYk1ldGhvZCA6IGZ1bmN0aW9uKHVybCwgcGFyYW1zLCBjYWxsQmFjaykge1xyXG4gICAgICAgIHZhciB4bWwgPSB0aGlzLmNyZWF0ZVhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeG1sLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpeyBpZiAoeG1sLnJlYWR5U3RhdGUgPT0gNCkgY2FsbEJhY2soeG1sLnJlc3BvbnNlVGV4dCkgfTtcclxuICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxuICAgICAgICB4bWwuc2VuZChwYXJhbXMpO1xyXG4gICAgICB9LFxyXG4gICAgICBjcmVhdGVYTUxIdHRwUmVxdWVzdCA6IGZ1bmN0aW9uKCl7IHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgfVxyXG4gICAgfSk7ICBcclxuICB9KF9tb2R1bGUpKTsgXHJcbiAgICAgIFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBUYWJibHlcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKGZ1bmN0aW9uIChtb2R1bGUpe1xyXG4gICAgICBcclxuICAgIHZhciBfX2NvbnRleHQ7XHJcblxyXG4gICAgZnVuY3Rpb24gX19FeGVjdXRlQ29kZShjb2RlKXtcclxuXHJcbiAgICAgIF9fY29udGV4dCA9IHsgc2VjdGlvbnMgOiBbXSwgZ3JvdXBzIDogW10sIGRldGFpbHMgOiBbXX07XHJcblxyXG4gICAgICB2YXIgX19jdXI7XHJcbiAgICAgIHZhciBfX2Z1bmMgICAgICAgPSAnJztcclxuICAgICAgdmFyIF9fZnVuY0JvZHkgICA9ICcnO1xyXG4gICAgICB2YXIgX19zZXRTdGF0ZSAgPSBmYWxzZTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIF9fZ2V0KHZhbHVlKXtcclxuICAgICAgICBpZih2YWx1ZSAmJiB2YWx1ZS50cmltKCkuc3RhcnRzV2l0aCgnQCcpKXtcclxuICAgICAgICAgIHJldHVybiBfX2NvbnRleHRbdmFsdWUudHJpbSgpLnNwbGl0KCdAJylbMV0udHJpbSgpXSB8fCAnJztcclxuICAgICAgICB9ZWxzZSBpZih2YWx1ZSl7XHJcbiAgICAgICAgICByZXR1cm4gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH0gIFxyXG5cclxuICAgICAgZnVuY3Rpb24gX19wYXJzZV9wcm9wZXJ0aWVzKHZhbHVlKXtcclxuICAgICAgICB2YXIgX19yZWcgICA9ICAvKFthLXpBLVowLTlfXFwtXSopXFxzKjpcXHMqKCdbXiddKid8W15cXHNdKikvZztcclxuICAgICAgICB2YXIgX19vICAgICA9IHt9O1xyXG4gICAgICAgIHZhciBfX21hdGNoID0gX19yZWcuZXhlYyh2YWx1ZSk7XHJcbiAgICAgICAgd2hpbGUgKF9fbWF0Y2ggIT0gbnVsbCkge1xyXG4gICAgICAgICAgX19vW19fbWF0Y2hbMV0udHJpbSgpXSA9IF9fZ2V0KF9fbWF0Y2hbMl0udHJpbSgpLnJlcGxhY2UoL14nKFteJ10qKSckL2csICckMScpKTtcclxuICAgICAgICAgIF9fbWF0Y2ggPSBfX3JlZy5leGVjKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9fb1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBfX3BhcnNlTGluZShsLCBvKXtcclxuICAgICAgICBpZighX19mdW5jICYmICFsLnRyaW0oKSkgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICB2YXIgX19rZXlzID0gL0RFRklORXwjfENSRUFURXxTRVR8RlVOQ1RJT058RU5ELztcclxuICAgICAgICBpZihfX2tleXMudGVzdChsKSl7XHJcbiAgICAgICAgICBpZigvXiMvLnRlc3QobCkpe1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXt9O1xyXG4gICAgICAgICAgfWVsc2UgaWYoL15TRVQgKFxcdy4qKS8udGVzdChsKSl7ICBcclxuICAgICAgICAgICAgdmFyIF9fdG9rZW5zID0gbC5tYXRjaCgvXlNFVCAoXFx3LiopJC8pO1xyXG4gICAgICAgICAgICBfX3NldFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgX19mdW5jICAgICAgPSBfX3Rva2Vuc1sxXS50cmltKCk7XHJcbiAgICAgICAgICAgIF9fZnVuY0JvZHkgID0gJyc7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe307XHJcbiAgICAgICAgICB9ZWxzZSBpZigvXkZVTkNUSU9OIChcXHcuKikvLnRlc3QobCkpeyAgXHJcbiAgICAgICAgICAgIHZhciBfX3Rva2VucyA9IGwubWF0Y2goL15GVU5DVElPTiAoXFx3LiopJC8pO1xyXG4gICAgICAgICAgICBfX3NldFN0YXRlICA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfX2Z1bmMgICAgICAgPSBfX3Rva2Vuc1sxXS50cmltKCk7XHJcbiAgICAgICAgICAgIF9fZnVuY0JvZHkgICA9ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXt9O1xyXG4gICAgICAgICAgfWVsc2UgaWYoL15FTkQvLnRlc3QobCkpeyAgICAgIFxyXG4gICAgICAgICAgICB2YXIgX19ib2R5ID0gX19mdW5jQm9keTtcclxuICAgICAgICAgICAgdmFyIF9fbmFtZSA9IF9fZnVuYztcclxuICAgICAgICAgICAgX19mdW5jID0gX19mdW5jQm9keSA9ICcnOyBcclxuICAgICAgICAgICAgaWYoX19zZXRTdGF0ZSl7XHJcbiAgICAgICAgICAgICAgX19zZXRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7IF9fY3VyW19fbmFtZV0gPSBfX2JvZHkudHJpbSgpOyB9XHJcbiAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpeyBjdHhbX19uYW1lXSA9IG5ldyBGdW5jdGlvbignY3R4JywgX19ib2R5KTsgfVxyXG4gICAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICB9ZWxzZSBpZigvXkRFRklORVxcc1xccyooXFx3LiopXFxzKj1cXHMqKC4qKSQvLnRlc3QobCkpe1xyXG4gICAgICAgICAgICB2YXIgX190b2tlbnMgPSBsLm1hdGNoKC9eREVGSU5FXFxzXFxzKihbYS16QS1aMC05X1xcLV0qKVxccyo9XFxzKiguKikkLyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyBcclxuICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gX190b2tlbnM7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7IGN0eFt0b2tlbnNbMV0udHJpbSgpXSA9IHRva2Vuc1syXS50cmltKCk7IH1cclxuICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgfWVsc2UgaWYoL15DUkVBVEVcXHNcXHMqKFxcdyopICguKikkLy50ZXN0KGwpKXtcclxuICAgICAgICAgICAgdmFyIF9fdG9rZW5zID0gbC5tYXRjaCgvXkNSRUFURVxcc1xccyooXFx3KikgKC4qKSQvKTtcclxuICAgICAgICAgICAgaWYoX190b2tlbnNbMV09PSdzZWN0aW9uJyl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IF9fdG9rZW5zO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7IFxyXG4gICAgICAgICAgICAgICAgICBjdHguc2VjdGlvbnMucHVzaChfX3BhcnNlX3Byb3BlcnRpZXModG9rZW5zWzJdKSk7IFxyXG4gICAgICAgICAgICAgICAgICBfX2N1ciA9IGN0eC5zZWN0aW9uc1tjdHguc2VjdGlvbnMubGVuZ3RoIC0gMV07fVxyXG4gICAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKF9fdG9rZW5zWzFdPT0nZ3JvdXAnKXtcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gX190b2tlbnM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXsgXHJcbiAgICAgICAgICAgICAgICAgIGN0eC5ncm91cHMucHVzaChfX3BhcnNlX3Byb3BlcnRpZXModG9rZW5zWzJdKSk7XHJcbiAgICAgICAgICAgICAgICAgIF9fY3VyID0gY3R4Lmdyb3Vwc1tjdHguZ3JvdXBzLmxlbmd0aCAtIDFdO31cclxuICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKF9fdG9rZW5zWzFdPT0nZGV0YWlsJyl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IF9fdG9rZW5zO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7XHJcbiAgICAgICAgICAgICAgICAgIGN0eC5kZXRhaWxzLnB1c2goX19wYXJzZV9wcm9wZXJ0aWVzKHRva2Vuc1syXSkpO1xyXG4gICAgICAgICAgICAgICAgICBfX2N1ciA9IGN0eC5kZXRhaWxzW2N0eC5kZXRhaWxzLmxlbmd0aCAtIDFdO31cclxuICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1lbHNleyB0aHJvdyBuZXcgRXJyb3IoJ1RhYmJseSA6IFVucmVjb2duaXplZCB0ZXh0IGFmdGVyIERFRklORScpfSAgXHJcbiAgICAgICAgfWVsc2V7IFxyXG4gICAgICAgICAgaWYoX19mdW5jKXtcclxuICAgICAgICAgICAgX19mdW5jQm9keSArPSBvO1xyXG4gICAgICAgICAgICBfX2Z1bmNCb2R5ICs9ICdcXG4nO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXt9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYWJibHkgOiBVbnJlY29nbml6ZWQgdGV4dCcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb2RlLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uKGwpeyBcclxuICAgICAgICBfX3BhcnNlTGluZShsLnRyaW0oKSxsKShfX2NvbnRleHQpOyBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4geyBjb250ZXh0IDogX19jb250ZXh0IH07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vZHVsZS50YWJibHkgPSB7IGV4ZWN1dGUgOiBfX0V4ZWN1dGVDb2RlIH07XHJcblxyXG4gIH0oX21vZHVsZSkpO1xyXG4gICAgICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gUmVwb3J0c1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24obW9kdWxlKSB7XHJcblxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZSAgICAgICAgICAgICAgICA9IHt9OyAgICAgIFxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5nZW5lcmF0ZVJlcG9ydCA9IGZ1bmN0aW9uKHJkLCBkYXRhLCBtZWRpYXRvcil7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5iZWdpbicgfSk7XHJcbiAgICAgIHZhciBfX3JkICAgICAgPSByZCB8fCBtb2R1bGUuUmVwb3J0RW5naW5lLnJkO1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIFRyYW5zZm9ybWFyIGxvcyBkYXRvc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIHZhciBfX2RhdGFTZXQgPSBfX3JkLmNvbnRleHQucGFyc2VEYXRhID8gX19yZC5jb250ZXh0LnBhcnNlRGF0YShfX3JkLCBkYXRhLCBtZWRpYXRvci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRhdGE7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5sb2cubWVzc2FnZScsIHRleHQgOiAnSW5pY2lhbGl6YW5kby4uLicgfSk7XHJcbiAgICAgIGNvbnNvbGUudGltZSgnUmVuZGVyJyk7XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gSW5pY2lhbGl6YXIgZnVuY2lvbmVzIHBhcmEgbGEgZ2VuZXJhY2nDs24gZGUgY29udGVuaWRvIHBlcnNvbmFsaXphZG9cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX2luaXRDb250ZW50UHJvdmlkZXJzKCl7XHJcbiAgICAgICAgW19fcmQuY29udGV4dC5zZWN0aW9ucywgX19yZC5jb250ZXh0LmRldGFpbHMsIF9fcmQuY29udGV4dC5ncm91cHNdXHJcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbihhLGIpeyByZXR1cm4gYS5jb25jYXQoYik7IH0sIFtdKVxyXG4gICAgICAgIC5tYXAoZnVuY3Rpb24ocyl7XHJcbiAgICAgICAgICBpZihzLnZhbHVlUHJvdmlkZXJmbil7XHJcbiAgICAgICAgICAgIHMudmFsdWVQcm92aWRlciA9IG1vZHVsZS50ZW1wbGF0ZXMuZ2V0VmFsdWUocy52YWx1ZVByb3ZpZGVyZm4sIHNlbGYpOyBcclxuICAgICAgICAgICAgZGVsZXRlIHMudmFsdWVQcm92aWRlcmZuOyAgICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKHMuZm9vdGVyVmFsdWVQcm92aWRlcmZuKXtcclxuICAgICAgICAgICAgcy5mb290ZXJWYWx1ZVByb3ZpZGVyID0gbW9kdWxlLnRlbXBsYXRlcy5nZXRWYWx1ZShzLmZvb3RlclZhbHVlUHJvdmlkZXJmbiwgc2VsZik7IFxyXG4gICAgICAgICAgICBkZWxldGUgcy5mb290ZXJWYWx1ZVByb3ZpZGVyZm47IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYocy5oZWFkZXJWYWx1ZVByb3ZpZGVyZm4pe1xyXG4gICAgICAgICAgICBzLmhlYWRlclZhbHVlUHJvdmlkZXIgPSBtb2R1bGUudGVtcGxhdGVzLmdldFZhbHVlKHMuaGVhZGVyVmFsdWVQcm92aWRlcmZuLCBzZWxmKTsgXHJcbiAgICAgICAgICAgIGRlbGV0ZSBzLmhlYWRlclZhbHVlUHJvdmlkZXJmbjtcclxuICAgICAgICAgIH0gIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBHZW5lcmFjacOzbiBkZSBsYXMgc2VjY2lvbmVzIGRlIGNhYmVjZXJhIGRlIGxhcyBhZ3J1cGFjaW9uZXNcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIHZhciBfX01FUkdFX0FORF9TRU5EID0gZnVuY3Rpb24odCwgcCwgZm5rZXkpeyBtZWRpYXRvci5zZW5kKG1vZHVsZS50ZW1wbGF0ZXMubWVyZ2UodCwgcCwgZm5rZXkpKTsgfTtcclxuICAgICAgZnVuY3Rpb24gX19ncm91cHNIZWFkZXJzKCl7XHJcbiAgICAgICAgX19ncm91cHMuZm9yRWFjaChmdW5jdGlvbihnLCBpaSl7XHJcbiAgICAgICAgICBpZihpaSA8IF9fYnJlYWtJbmRleCkgcmV0dXJuOyBcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5zZWN0aW9ucy5ncm91cC5oZWFkZXInLCB2YWx1ZSA6IGcuaWQgfSk7ICBcclxuICAgICAgICAgIGlmKGcuZGVmaW5pdGlvbi5oZWFkZXIpIHJldHVybiBfX01FUkdFX0FORF9TRU5EKGcuZGVmaW5pdGlvbi5oZWFkZXIsIGcsICdjb21waWxlZF9oZWFkZXJmbicpO1xyXG4gICAgICAgICAgaWYoZy5kZWZpbml0aW9uLmhlYWRlclZhbHVlUHJvdmlkZXIpIHJldHVybiBtZWRpYXRvci5zZW5kKGcuZGVmaW5pdGlvbi5oZWFkZXJWYWx1ZVByb3ZpZGVyKGcpKTsgXHJcbiAgICAgICAgfSk7ICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBHZW5lcmFjacOzbiBkZSBsYXMgc2VjY2lvbmVzIGRlIHJlc3VtZW4gZGUgbGFzIGFncnVwYWNpb25lc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19ncm91cHNGb290ZXJzKGluZGV4KXtcclxuICAgICAgICB2YXIgX19nZyA9IF9fZ3JvdXBzLm1hcChmdW5jdGlvbihnKXtyZXR1cm4gZzt9KTsgXHJcbiAgICAgICAgaWYoaW5kZXgpIF9fZ2cuc3BsaWNlKDAsIGluZGV4KTtcclxuICAgICAgICBfX2dnLnJldmVyc2UoKS5mb3JFYWNoKCBmdW5jdGlvbihnKXtcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5zZWN0aW9ucy5ncm91cC5mb290ZXInLCB2YWx1ZSA6IGcuaWQgfSk7ICAgICAgICAgIFxyXG4gICAgICAgICAgaWYoZy5kZWZpbml0aW9uLmZvb3RlcikgcmV0dXJuIF9fTUVSR0VfQU5EX1NFTkQoZy5kZWZpbml0aW9uLmZvb3RlciwgZywgJ2NvbXBpbGVkX2Zvb3RlcmZuJyk7XHJcbiAgICAgICAgICBpZihnLmRlZmluaXRpb24uZm9vdGVyVmFsdWVQcm92aWRlcikgcmV0dXJuIG1lZGlhdG9yLnNlbmQoZy5kZWZpbml0aW9uLmZvb3RlclZhbHVlUHJvdmlkZXIoZykpO1xyXG4gICAgICAgIH0pOyBcclxuICAgICAgfSBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gR2VuZXJhY2nDs24gZGUgbGFzIHNlY2Npb25lcyBkZSBkZXRhbGxlXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9fZGV0YWlsc1NlY3Rpb25zKCl7XHJcbiAgICAgICAgX19kZXRhaWxzLmZvckVhY2goZnVuY3Rpb24oZCl7XHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuc2VjdGlvbnMuZGV0YWlsJywgdmFsdWUgOiBkLmlkIH0pO1xyXG4gICAgICAgICAgaWYoZC50ZW1wbGF0ZSkgcmV0dXJuIF9fTUVSR0VfQU5EX1NFTkQoZC50ZW1wbGF0ZSwgZCwgJ2NvbXBpbGVkZm4nKVxyXG4gICAgICAgICAgaWYoZC52YWx1ZVByb3ZpZGVyKSByZXR1cm4gbWVkaWF0b3Iuc2VuZChkLnZhbHVlUHJvdmlkZXIoZCkpO1xyXG4gICAgICAgIH0pICAgICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gR2VuZXJhY2nDs24gZGUgbGFzIHNlY2Npb25lcyBkZSB0b3RhbCBnZW5lcmFsXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9fZ3JhbmRUb3RhbFNlY3Rpb25zKCl7XHJcbiAgICAgICAgX190b3RhbHMuZm9yRWFjaChmdW5jdGlvbih0KXtcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5zZWN0aW9ucy50b3RhbCcsIHZhbHVlIDogdC5pZCB9KTtcclxuICAgICAgICAgIGlmKHQudGVtcGxhdGUpIHJldHVybiBfX01FUkdFX0FORF9TRU5EKHQudGVtcGxhdGUsIHQsICdjb21waWxlZGZuJylcclxuICAgICAgICAgIGlmKHQudmFsdWVQcm92aWRlcikgcmV0dXJuIG1lZGlhdG9yLnNlbmQodC52YWx1ZVByb3ZpZGVyKHQpKTtcclxuICAgICAgICB9KSAgICAgICAgICAgIFxyXG4gICAgICB9IFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBHZW5lcmFjacOzbiBkZSBsYXMgc2VjY2lvbmVzIGRlIGNhYmVjZXJhIGRlbCBpbmZvcm1lXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9fcmVwb3J0SGVhZGVyU2VjdGlvbnMoKXtcclxuICAgICAgICBfX2hlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih0KXtcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5zZWN0aW9ucy5oZWFkZXInLCB2YWx1ZSA6IHQgfSk7XHJcbiAgICAgICAgICBpZih0LnRlbXBsYXRlKSByZXR1cm4gX19NRVJHRV9BTkRfU0VORCh0LnRlbXBsYXRlLCB0LCAnY29tcGlsZWRmbicpXHJcbiAgICAgICAgICBpZih0LnZhbHVlUHJvdmlkZXIpIHJldHVybiBtZWRpYXRvci5zZW5kKHQudmFsdWVQcm92aWRlcih0KSk7XHJcbiAgICAgICAgfSkgICAgICAgICAgICBcclxuICAgICAgfSBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gSW5pY2lhbGl6YXIgZWwgb2JqZXRvIHF1ZSBzaXJ2ZSBkZSBhY3VtdWxhZG9yXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9fcmVzb2x2ZVN1bW1hcnlPYmplY3QoKXtcclxuICAgICAgICB2YXIgX19zdW1tYXJ5ID0gSlNPTi5wYXJzZShfX3JkLmNvbnRleHQuc3VtbWFyeSB8fCAne30nKTtcclxuICAgICAgICBpZihfX3JkLmNvbnRleHQub25Jbml0U3VtbWFyeU9iamVjdCkgcmV0dXJuIF9fcmQuY29udGV4dC5vbkluaXRTdW1tYXJ5T2JqZWN0KF9fc3VtbWFyeSk7ICAgICAgXHJcbiAgICAgICAgcmV0dXJuIF9fc3VtbWFyeTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIF9fYnJlYWtJbmRleCA9IC0xOyBcclxuXHJcbiAgICAgIHZhciBfX3N1bW1hcnkgICAgPSBfX3Jlc29sdmVTdW1tYXJ5T2JqZWN0KCk7XHJcbiAgICAgIHZhciBfX2hlYWRlcnMgICAgPSAoX19yZC5jb250ZXh0LnNlY3Rpb25zIHx8IFtdKS53aGVyZSh7IHR5cGUgOiAnaGVhZGVyJyB9KTtcclxuICAgICAgdmFyIF9fdG90YWxzICAgICA9IChfX3JkLmNvbnRleHQuc2VjdGlvbnMgfHwgW10pLndoZXJlKHsgdHlwZSA6ICd0b3RhbCcgfSk7XHJcbiAgICAgIHZhciBfX2Zvb3RlcnMgICAgPSAoX19yZC5jb250ZXh0LnNlY3Rpb25zIHx8IFtdKS53aGVyZSh7IHR5cGUgOiAnZm9vdGVyJyB9KTtcclxuICAgICAgdmFyIF9fZGV0YWlscyAgICA9IF9fcmQuY29udGV4dC5kZXRhaWxzIHx8IFtdO1xyXG4gICAgICB2YXIgX19ncm91cHMgICAgID0gX19yZC5jb250ZXh0Lmdyb3VwcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24oZywgaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7ICBuYW1lICAgICAgIDogJ0cnICsgKGkrMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZCAgICAgICAgIDogX19yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb24gOiBnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCAgICA6ICcnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgICAgICAgOiBtb2R1bGUuY2xvbmUoX19zdW1tYXJ5KSwgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0IDogZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19rID0gdmFsdWVbdGhpcy5kZWZpbml0aW9uLmtleV0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fR3ggPSBzZWxmLkJTW3RoaXMubmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3guYWxsW19fa10gPSBfX0d4LmFsbFtfX2tdIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LmFsbFtfX2tdLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LnJlY29yZENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fX3Jlc3VtZSA9PT0gZmFsc2UpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fX3Jlc3VtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5jb3B5KHZhbHVlLCB0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX19yZXN1bWUgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmxlbmd0aCA+IDApICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5jb3B5KHZhbHVlLCB0aGlzLmRhdGEpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW0gIDogZnVuY3Rpb24odmFsdWUpeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fayA9IHZhbHVlW3RoaXMuZGVmaW5pdGlvbi5rZXldLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX0d4ID0gc2VsZi5CU1t0aGlzLm5hbWVdOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5hbGxbX19rXSA9IF9fR3guYWxsW19fa10gfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3guYWxsW19fa10ucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3gucmVjb3JkQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fX3Jlc3VtZSA9PT0gZmFsc2UpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5zdW0odmFsdWUsIHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3QgOiBmdW5jdGlvbih2YWx1ZSl7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVt0aGlzLmRlZmluaXRpb24ua2V5XSA9PSB0aGlzLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIHx8IFtdOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIHNlbGYuQlMgPSB7IHJlcG9ydERlZmluaXRpb24gOiBfX3JkLCBtZWRpYXRvciA6IG1lZGlhdG9yIH07ICAgICAgICAgICAgICBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBPcmRlbmFyIGxvcyBkYXRvc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGlmKF9fcmQuY29udGV4dC5pdGVyYXRlZm4pe1xyXG4gICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5sb2cubWVzc2FnZScsIHRleHQgOiAnSW5pY2lhbGl6YW5kbyBlbGVtZW50b3MuLi4nIH0pO1xyXG4gICAgICAgIF9fZGF0YVNldC5mb3JFYWNoKF9fcmQuY29udGV4dC5pdGVyYXRlZm4pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKF9fcmQuY29udGV4dC5vcmRlckJ5KXtcclxuICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQubG9nLm1lc3NhZ2UnLCB0ZXh0IDogJ09yZGVuYW5kbyBkYXRvcy4uLicgfSk7XHJcbiAgICAgICAgX19kYXRhU2V0LnNvcnRCeShfX3JkLmNvbnRleHQub3JkZXJCeSwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gSW5pY2lhbGl6YXJcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBzZWxmLkJTID0geyByZWNvcmRDb3VudCAgICAgIDogMCwgXHJcbiAgICAgICAgICAgICAgICAgIEcwICAgICAgICAgICAgICAgOiBtb2R1bGUuY2xvbmUoX19zdW1tYXJ5KSxcclxuICAgICAgICAgICAgICAgICAgZGF0YVNldCAgICAgICAgICA6IF9fZGF0YVNldCxcclxuICAgICAgICAgICAgICAgICAgcmVwb3J0RGVmaW5pdGlvbiA6IF9fcmQsIFxyXG4gICAgICAgICAgICAgICAgICBtZWRpYXRvciAgICAgICAgIDogbWVkaWF0b3IgfTtcclxuICAgICAgX19ncm91cHMuZm9yRWFjaCggZnVuY3Rpb24oZywgaSl7ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGcuY3VycmVudCA9IChfX2RhdGFTZXQgJiYgX19kYXRhU2V0WzBdKSA/IF9fZGF0YVNldFswXVtnLmRlZmluaXRpb24ua2V5XSA6ICcnO1xyXG4gICAgICAgIHNlbGYuQlNbZy5uYW1lXSA9IHsgcmVjb3JkQ291bnQgOiAwLCBhbGwgOiB7fSB9O1xyXG4gICAgICB9KTtcclxuICAgICAgaWYoX19yZC5jb250ZXh0Lm9uU3RhcnRmbikgX19yZC5jb250ZXh0Lm9uU3RhcnRmbihzZWxmLkJTKTtcclxuICAgICAgX19pbml0Q29udGVudFByb3ZpZGVycygpO1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQucmVuZGVyLnJvd3MnIH0pO1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQubG9nLm1lc3NhZ2UnLCB0ZXh0IDogJ0dlbmVyYW5kbyBpbmZvcm1lLi4uJyB9KTtcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIENhYmVjZXJhcyBkZWwgaW5mb3JtZVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgX19yZXBvcnRIZWFkZXJTZWN0aW9ucygpO1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gQ2FiZWNlcmFzIGluaWNpYWxlc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgaWYoX19kYXRhU2V0Lmxlbmd0aCA+IDApIF9fZ3JvdXBzSGVhZGVycygpOyBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEl0ZXJhciBzb2JyZSBsb3MgZWxlbWVudG9zXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBfX2RhdGFTZXQuZm9yRWFjaChmdW5jdGlvbihyLCBpKXsgXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIFByb2Nlc2FyIGVsIGVsZW1lbnRvXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgICAgICAgIFxyXG4gICAgICAgIHNlbGYuQlMucmVjb3JkQ291bnQrKztcclxuICAgICAgICBzZWxmLkJTLmlzTGFzdFJvdyAgICAgICAgPSBfX2RhdGFTZXQubGVuZ3RoID09PSBzZWxmLkJTLnJlY29yZENvdW50O1xyXG4gICAgICAgIHNlbGYuQlMuaXNMYXN0Um93SW5Hcm91cCA9IHNlbGYuQlMuaXNMYXN0Um93O1xyXG4gICAgICAgIHNlbGYuQlMucGVyY2VudCAgICAgID0gKHNlbGYuQlMucmVjb3JkQ291bnQvX19kYXRhU2V0Lmxlbmd0aCkgKiAxMDA7ICBcclxuICAgICAgICBzZWxmLkJTLnByZXZpb3VzICAgICA9IHNlbGYuQlMuZGF0YSB8fCByO1xyXG4gICAgICAgIHNlbGYuQlMuZGF0YSAgICAgICAgID0gcjsgXHJcbiAgICAgICAgX19ncm91cHMuZm9yRWFjaCggZnVuY3Rpb24oZywgaSl7IFxyXG4gICAgICAgICAgc2VsZi5CU1tnLm5hbWVdLmRhdGEgID0gT2JqZWN0LmNyZWF0ZShnLmRhdGEpO1xyXG4gICAgICAgIH0pOyBcclxuICAgICAgICBtb2R1bGUuUmVwb3J0RW5naW5lLnN1bShyLCBzZWxmLkJTLkcwKTsgICAgICAgIFxyXG4gICAgICAgIGlmKF9fcmQuY29udGV4dC5vblJvd2ZuKSBfX3JkLmNvbnRleHQub25Sb3dmbihzZWxmLkJTKTtcclxuICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSAgOiAncmVwb3J0LnJlbmRlci5yb3cnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgOiBzZWxmLkJTLnBlcmNlbnQudG9GaXhlZCgxKSArICcgJScsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6IHNlbGYuQlMucGVyY2VudCB9KTtcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gRGV0ZXJtaW5hciBzaSBoYXkgY2FtYmlvIGVuIGFsZ3VuYSBkZSBsYXMgY2xhdmVzIGRlIGFncnVwYWNpw7NuXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGlmKF9fZ3JvdXBzLmV2ZXJ5KCBmdW5jdGlvbihnKXsgcmV0dXJuIGcudGVzdChyKSB9KSl7XHJcbiAgICAgICAgICBfX2dyb3Vwcy5mb3JFYWNoKCBmdW5jdGlvbihnKXsgZy5zdW0ocik7IH0pOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNleyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgX19ncm91cHMuc29tZSggZnVuY3Rpb24oZywgaSl7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIWcudGVzdChyKSl7XHJcbiAgICAgICAgICAgICAgX19icmVha0luZGV4ID0gaTtcclxuICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgIC8vIFBpZXMgZGUgZ3J1cG8gZGUgbG9zIHF1ZSBoYW4gY2FtYmlhZG9cclxuICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgIF9fZ3JvdXBzRm9vdGVycyhfX2JyZWFrSW5kZXgpO1xyXG4gICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgLy8gQWN0dWFsaXphciBsb3MgZ3J1cG9zXHJcbiAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICBfX2dyb3Vwcy5mb3JFYWNoKCBmdW5jdGlvbihncnVwbywgaWkpeyAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoaWkgPj0gX19icmVha0luZGV4KXtcclxuICAgICAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAvLyBJbmljaWFsaXphciBsb3MgcXVlIGhhbiBjYW1iaWFkb1xyXG4gICAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgIGdydXBvLmluaXQocilcclxuICAgICAgICAgICAgICAgICAgX19icmVha0luZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgIC8vIEFjdW11bGFyIHZhbG9yZXMgZGUgbG9zIHF1ZSBzaWd1ZW4gaWd1YWxcclxuICAgICAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICBncnVwby5zdW0ocik7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgLy8gTm90aWZpY2FyIGRlbCBldmVudG8gb25Hcm91cENoYW5nZVxyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIF9fZ3JvdXBzLmZvckVhY2goZnVuY3Rpb24oZyl7XHJcbiAgICAgICAgICAgIGcuY3VycmVudCA9IHJbZy5kZWZpbml0aW9uLmtleV07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmKF9fcmQuY29udGV4dC5vbkdyb3VwQ2hhbmdlZm4pIF9fcmQuY29udGV4dC5vbkdyb3VwQ2hhbmdlZm4oc2VsZi5CUyk7ICAgICAgICAgIFxyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgIDogJ3JlcG9ydC5zZWN0aW9ucy5ncm91cC5jaGFuZ2UnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6ICdfX2dyb3VwcycgfSk7XHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAvLyBDYWJlY2VyYXNcclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIF9fZ3JvdXBzSGVhZGVycygpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIERldGVybWluYXIgc2kgZXN0ZSBlcyBlbCDDumx0aW1vIGVsZW1lbnRvIGRlIGxhIGFncnVwYWNpw7NuIFxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PTtcclxuICAgICAgICBpZihfX2dyb3Vwcy5sZW5ndGggJiYgIXNlbGYuQlMuaXNMYXN0Um93ICl7XHJcbiAgICAgICAgICB2YXIgX19uZXh0ICAgICAgICAgICAgICAgPSBfX2RhdGFTZXRbc2VsZi5CUy5yZWNvcmRDb3VudF07ICAgICAgICAgIFxyXG4gICAgICAgICAgc2VsZi5CUy5pc0xhc3RSb3dJbkdyb3VwID0gISBfX2dyb3Vwcy5ldmVyeSggZnVuY3Rpb24oZyl7XHJcbiAgICAgICAgICAgIHZhciBfX2sgPSBnLmRlZmluaXRpb24ua2V5O1xyXG4gICAgICAgICAgICByZXR1cm4gX19uZXh0W19fa10gPT09IHNlbGYuQlMuZGF0YVtfX2tdO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIFNlY2Npb25lcyBkZSBkZXRhbGxlXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgX19kZXRhaWxzU2VjdGlvbnMoKSAgICAgICAgICAgIFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmKF9fZGF0YVNldC5sZW5ndGggPiAwKXsgXHJcbiAgICAgICAgc2VsZi5CUy5wcmV2aW91cyA9IHNlbGYuQlMuZGF0YTtcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIFBpZXMgZGUgZ3J1cG9cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIF9fZ3JvdXBzRm9vdGVycygpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBUb3RhbCBnZW5lcmFsXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBfX2dyYW5kVG90YWxTZWN0aW9ucygpO1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQucmVuZGVyLmVuZCcgfSk7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5lbmQnIH0pO1xyXG4gICAgICBtZWRpYXRvci5mbHVzaCgpO1xyXG4gICAgICBjb25zb2xlLnRpbWVFbmQoJ1JlbmRlcicpO1xyXG4gICAgfVxyXG4gICAgICAgICAgXHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmNvcHkgICAgPSBmdW5jdGlvbihzLCBkKXsgT2JqZWN0LmtleXMoZCkubWFwKGZ1bmN0aW9uKGspeyBkW2tdID0gc1trXTt9KTt9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lLnN1bSAgICAgPSBmdW5jdGlvbihzLCBkKXsgT2JqZWN0LmtleXMoZCkubWFwKGZ1bmN0aW9uKGspeyBkW2tdICs9IHNba107fSk7fSAgIFxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5jb21wdXRlID0gZnVuY3Rpb24oZHMsIG5hbWUpeyByZXR1cm4gZHMucmVkdWNlKCBmdW5jdGlvbih0LCBvKXsgcmV0dXJuIHQgKyBvW25hbWVdOyB9LCAwLjApOyB9XHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmdyb3VwICAgPSBmdW5jdGlvbihhLCBjKXtcclxuXHQgICAgdmFyIGRzID0gYTtcclxuXHQgICAgdmFyIF9fZiA9IGZ1bmN0aW9uKGssIHQpe1xyXG5cdCAgICAgIGRzLmRpc3RpbmN0KCBmdW5jdGlvbih2KXsgcmV0dXJuIHZba107IH0pXHQgICAgICAgICAgICBcclxuXHQgICAgICAgIC5mb3JFYWNoICggZnVuY3Rpb24odil7IGNbdl0gPSBkcy5yZWR1Y2UoIGZ1bmN0aW9uKHAsIGMsIGksIGEpeyByZXR1cm4gKGNba109PXYpID8gcCArIGNbdF0gOiBwOyB9LCAwLjApOyB9KTtcclxuICAgICAgICByZXR1cm4gX19mO1x0ICAgICAgICAgICBcclxuXHQgICAgfVxyXG5cdCAgICByZXR1cm4gX19mO1xyXG4gICAgfVxyXG4gXHJcbiAgfSkoX21vZHVsZSk7XHJcblxyXG59KF9fbW9kdWxlLCAnUG9sJykpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX19tb2R1bGUuUG9sOyIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYCAgXHJcbjxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWJvdHRvbVwiPlxyXG4gIDxoMT5Tb2JyZSBOb3RhcyBBcHA8L2gxPlxyXG4gIDxwIHN0eWxlPVwidGV4dC1pbmRlbnQ6MWVtO1wiPlxyXG4gICAgTm90YXMgQXBwIGVzIHVuYSBwcnVlYmEgZGUgY29uY2VwdG8gZGUgbG8gcXVlIHBvZHLDrWEgc2VyIHVuIDxzcGFuIGNsYXNzPVwidzMtYm9sZCB3My1pdGFsaWNcIj5mcmFtZXdvcms8L3NwYW4+IFxyXG4gICAgc2VuY2lsbG8gY29uIGVsIGN1YWwgZGVzYXJyb2xsYXIgYXBsaWNhY2lvbmVzIDxzcGFuIGNsYXNzPVwidzMtYm9sZCB3My1pdGFsaWNcIj5TUEE8L3NwYW4+IGJhc2FkYXMgw7puaWNhbWVudGUgZW4gPHNwYW4gY2xhc3M9XCJ3My1ib2xkXCI+SFRNTDU8L3NwYW4+IHkgPHNwYW4gY2xhc3M9XCJ3My1ib2xkXCI+SmF2YVNjcmlwdDwvc3Bhbj4uXHJcbiAgPC9wPlxyXG4gIDxwIHN0eWxlPVwidGV4dC1pbmRlbnQ6MWVtO1wiPlxyXG4gICAgRXN0YXMgYXBsaWNhY2lvbmVzIHNlcsOtYW4gc3ViY2VwdGlibGVzIGRlIHNlciBpbnN0YWxhZGFzIGVuIGRpc3Bvc2l0aXZvcyBtw7N2aWxlcyBjb21vIHVuYSA8c3BhbiBjbGFzcz1cInczLWJvbGQgdzMtaXRhbGljXCI+UFdBPC9zcGFuPi5cclxuICA8L3A+XHJcbiAgPHVsIGNsYXNzPVwidzMtdWwgdzMtYm9yZGVyXCI+XHJcbiAgICA8bGk+PGgyPlJlZmVyZW5jaWFzPC9oMj48L2xpPlxyXG4gICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2VzLndpa2lwZWRpYS5vcmcvd2lraS9TaW5nbGUtcGFnZV9hcHBsaWNhdGlvblwiIHRhcmdldD1cIl9ibGFua1wiPlNQQSAoU2luZ2xlLXBhZ2UgYXBwbGljYXRpb24pPC9hPjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZXMud2lraXBlZGlhLm9yZy93aWtpL1Byb2dyZXNzaXZlX1dlYl9BcHBzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UFdBIChQcm9ncmVzc2l2ZSBXZWIgQXBwcyk8L2E+PC9saT5cclxuICA8L3VsPlxyXG4gIDxwIHN0eWxlPVwidGV4dC1pbmRlbnQ6MWVtO1wiPlxyXG4gICAgUGFyYSBlbCBkZXNhcnJvbGxvIGRlIGVzdGEgYXBsaWNhY2nDs24gbm8gc2UgaGFuIHV0aWxpemFkbyBuaW5ndW5vIGRlIGxvcyA8c3BhbiBjbGFzcz1cInczLWJvbGQgdzMtaXRhbGljXCI+ZnJhbWV3b3Jrczwvc3Bhbj4gZXhpc3RlbnRlcyBjb21vIHB1ZWRlbiBzZXIgQW5ndWxhciwgUmVhY3QgbyBWdWUuanMuXHJcbiAgPC9wPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lciB3My1tYXJnaW4tYm90dG9tIHczLWNlbnRlclwiPlxyXG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGFib3V0LWJ0bi1iYWNrIGNsYXNzPVwidzMtYnV0dG9uIHczLWJsYWNrXCI+Vm9sdmVyPC9idXR0b24+XHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuXHJcbiAgbGV0IGNvbXBvbmVudCA9IHtcclxuICAgIHJvb3QgICA6IHt9LFxyXG4gICAgaW5pdCAgIDogZnVuY3Rpb24oY29udGFpbmVyKXsgfSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIHRoaXMucm9vdCA9IHBvbC5idWlsZCgnZGl2JywgX190ZW1wbGF0ZSk7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvb3Q7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbYWJvdXQtYnRuLWJhY2tdJylcclxuICAgICAgICAgICAgICAgLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgaGlzdG9yeS5iYWNrKCk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYCAgXHJcbiAgPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lciB3My1jZW50ZXJcIiBzdHlsZT1cInBhZGRpbmctdG9wOjYwcHg7XCI+XHJcbiAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltZy9sb2dvLnBuZ1wiIGFsdD1cIkNhclwiIHN0eWxlPVwid2lkdGg6IDMwMHB4XCI+XHJcbiAgICA8cD5MYSBhcHAgcXVlIHRlIHBlcm1pdGUgYWxtYWNlbmFyIHRvZGFzIHR1cyBub3RhcyBlbiBlbCBtw7N2aWwhISE8L3A+XHJcbiAgPC9kaXY+YDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcblxyXG4gIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ2RpdicsIF9fdGVtcGxhdGUpLmZpcnN0RWxlbWVudENoaWxkIDtcclxuICAgICAgcmV0dXJuIHRoaXMucm9vdDtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgLy88YnV0dG9uIHR5cGU9XCJidXR0b25cIiBidG4tdGVzdCBjbGFzcz1cInczLWJ1dHRvbiB3My1ibGFja1wiPmh0bWw8L2J1dHRvbj5cclxuICAgICAgLy9sZXQgYnRuID0gcG9sLiQoJ1tidG4tdGVzdF0nLCBjb250YWluZXIpWzBdO1xyXG4gICAgICAvL2J0bi5vbmNsaWNrID0gb25UZXN0QnV0dG9uQ2xpY2s7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gRmlsbFRlbXBsYXRlXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgZnVuY3Rpb24gb25UZXN0QnV0dG9uQ2xpY2tfZmlsbChtb3VzZUV2ZW50KXtcclxuICAgIGxldCB0ZW1wbGF0ZSA9IHBvbC5idWlsZCgnZGl2JywgJzxoMyB4YmluZD1cImlkOmlkO2lubmVySFRNTDpub21icmU7b25jbGljazpfX2NsaWNrXCI+PC9oMz4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgbGV0IHIgPSBwb2wudGVtcGxhdGVzLmZpbGwoXHJcbiAgICAgICAgICAgICAgdGVtcGxhdGUsIFxyXG4gICAgICAgICAgICAgIHsgaWQgOiA1NTUsIFxyXG4gICAgICAgICAgICAgICAgbm9tYnJlIDogJ3JhZmEnLFxyXG4gICAgICAgICAgICAgICAgX19jbGljayA6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfX0pO1xyXG5cclxuICAgIGNvbXBvbmVudC5yb290LmFwcGVuZENoaWxkKHIpO1xyXG4gIH1cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gRXhlY3V0ZVRlbXBsYXRlXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgZnVuY3Rpb24gb25UZXN0QnV0dG9uQ2xpY2sobW91c2VFdmVudCl7XHJcbiAgICBsZXQgdGVtcGxhdGUgPSBwb2wuYnVpbGQoJ2RpdicsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aDMgeGJpbmQ9XCJpZDppZDtpbm5lckhUTUw6bm9tYnJlO1wiPjwvaDM+JylcclxuICAgICAgICAgICAgICAgICAgICAgIC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGxldCBpbm5lckh0bWwgPSBwb2wudGVtcGxhdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgLmV4ZWN1dGUodGVtcGxhdGUsIFt7IGlkIDogNTU1LCBub21icmUgOiAncmFmYSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpZCA6IDQ0NCwgbm9tYnJlIDogJ3JhZmEgNDQ0J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkIDogMzMzLCBub21icmUgOiAncmFmYSAzMzMnfV0pO1xyXG4gICAgcG9sLnRlbXBsYXRlc1xyXG4gICAgICAgLmV4ZWN1dGUodGVtcGxhdGUsXHJcbiAgICAgICAgICAgICAgICBbeyBpZCA6IDU1NSwgbm9tYnJlIDogJ3JhZmEnfSxcclxuICAgICAgICAgICAgICAgICB7IGlkIDogNDQ0LCBub21icmUgOiAncmFmYSA0NDQnfSxcclxuICAgICAgICAgICAgICAgICB7IGlkIDogMzMzLCBub21icmUgOiAncmFmYSAzMzMnfV0sXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICAgIClcclxuICAgICAgLm1hcCggZSA9PiBlLm5vZGUgKVxyXG4gICAgICAuZm9yRWFjaCggbm9kZSA9PiBjb21wb25lbnQucm9vdC5hcHBlbmRDaGlsZChub2RlKSApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxuXHJcbn1cclxuIiwi77u/aW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGFcIjtcclxuaW1wb3J0IERiV3JhcHBlclNlcnZpY2UgZnJvbSBcIi4uL2xpYi9kYldyYXBwZXIuc2VydmljZVwiO1xyXG5cclxuY29uc3QgTk9UQVNfREFUQUJBU0UgICA9ICdub3Rhcy1hcHAuZGInOyBcclxuY29uc3QgTk9UQVNfVEFCTEVfTkFNRSA9ICdub3Rhcyc7XHJcblxyXG5jb25zdCBURU1QTEFURSA9IGBcclxuPGRpdiBub3Rhcy1jb250YWluZXIgc3R5bGU9XCJwYWRkaW5nOjA7IG1hcmdpbi1ib3R0b206NDNweDtcIj48L2Rpdj5cclxuPGJ1dHRvbiBidG4tYWRkLW5vdGUgb24tY2xpY2s9XCJhZGROb3RlXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtYmxhY2sgdzMtY2lyY2xlXCI+77yLPC9idXR0b24+YDtcclxuXHJcbmNvbnN0IF9fSVRFTV9URU1QTEFURSA9YFxyXG48ZGl2IGNsYXNzPVwidzMtYm9yZGVyLWJvdHRvbVwiIHN0eWxlPVwicGFkZGluZzowOyBmb250LXNpemU6MTRweDtcIiBpZD1cIm5vdGUte2tleX1cIj5cclxuICA8ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyXCIgc3R5bGU9XCJwYWRkaW5nOjVweFwiPlxyXG4gICAgPGRpdiBvbi1jbGljaz1cImV4cGFuZENvbGxhcHNlXCI+PGI+e3RpdGxlfTwvYj48aSBjbGFzcz1cInczLXJpZ2h0IHczLWxhcmdlIGZhIGZhLWNhcmV0LWRvd25cIj48L2k+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lclwiIHN0eWxlPVwiZGlzcGxheTpub25lO3BhZGRpbmc6MCA0cHhcIj5cclxuICAgIDxwIGNsYXNzPVwidzMtYm9yZGVyLWJvdHRvbVwiIHN0eWxlPVwicGFkZGluZzoycHg7bWluLWhlaWdodDo0ZW07bWFyZ2luOjJweCAwO1wiPnt0ZXh0fTwvcD5cclxuICAgIDxkaXYgY2xhc3M9XCJ3My1iYXIgdzMtY2VudGVyXCIgc3R5bGU9XCJwYWRkaW5nOjRweCAwO1wiPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImRlbGV0ZS17a2V5fVwiIGJ0bi1pdGVtLWRlbGV0ZSBvbi1jbGljaz1cImRlbGV0ZU5vdGVcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1ibGFja1wiPkJvcnJhcjwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImluZm8te2tleX1cIiBidG4taXRlbS1kZWxldGUgb24tY2xpY2s9XCJzaG93SW5mb1wiIGNsYXNzPVwidzMtYnV0dG9uIHczLWJsYWNrXCI+PzwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgbGV0IGRiO1xyXG4gIGxldCByb3dzID0gW107XHJcbiAgbGV0IGl0ZW1zQ29udGFpbmVyO1xyXG4gIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ2RpdicsIFRFTVBMQVRFKTtcclxuICAgICAgaXRlbXNDb250YWluZXIgPSB0aGlzLnJvb3QuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvb3Q7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIGluaXRBbGwoKTsgIFxyXG4gICAgfSxcclxuICAgIGV2ZW50SGFuZGxlcnMgOiB7IFxyXG4gICAgICBhZGROb3RlICAgICAgICA6IGFkZE5vdGUsXHJcbiAgICAgIGRlbGV0ZU5vdGUgICAgIDogZGVsZXRlTm90ZSxcclxuICAgICAgZXhwYW5kQ29sbGFwc2UgOiBleHBhbmRDb2xsYXBzZSxcclxuICAgICAgc2hvd0luZm8gICAgICAgOiBzaG93Tm90ZUluZm9cclxuICAgIH0gXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdEFsbCgpIHtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPcGVuIGRhdGFiYXNlXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgZGIgPSBuZXcgRGJXcmFwcGVyU2VydmljZShOT1RBU19EQVRBQkFTRSk7XHJcbiAgICBkYi5vcGVuRGIoKVxyXG4gICAgICAudGhlbiggZGIgPT4ge1xyXG4gICAgICAgIGxvYWREYXRhKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIGFkZEV2ZW50TGlzdGVuZXJcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBhZGRFdmVudExpc3RlbmVycyhjb21wb25lbnQucm9vdCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycyhjb250YWluZXIpIHtcclxuICAgIFsnW29uLWNsaWNrXSddLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICBwb2wudG9BcnJheShjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChldmVudCkpXHJcbiAgICAgICAgICAuZm9yRWFjaCggZSA9PiB7XHJcbiAgICAgICAgICAgIGUub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBuYW1lID0gZS5hdHRyaWJ1dGVzWydvbi1jbGljayddLnZhbHVlO1xyXG4gICAgICAgICAgICAgIGNvbXBvbmVudC5ldmVudEhhbmRsZXJzW25hbWVdKGUsIGV2ZW50KTtcclxuICAgICAgICAgICAgfTsgICAgICAgIFxyXG4gICAgICAgICAgfSk7IFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGxvYWREYXRhKCkge1xyXG4gICAgZGIucmVhZEFsbChOT1RBU19UQUJMRV9OQU1FKVxyXG4gICAgICAudGhlbiggdmFsdWVzID0+IHtcclxuICAgICAgICByb3dzID0gdmFsdWVzO1xyXG4gICAgICAgIHJlbmRlcigpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIGl0ZW1zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgcm93cy5tYXAoIG5vdGUgPT4gcG9sLmJ1aWxkKCdkaXYnLCBfX0lURU1fVEVNUExBVEUuZm9ybWF0KG5vdGUpKSlcclxuICAgICAgICAubWFwKCBlID0+IGUuZmlyc3RFbGVtZW50Q2hpbGQgKVxyXG4gICAgICAgIC5mb3JFYWNoKCBlID0+IHtcclxuICAgICAgICAgIGUucXVlcnlTZWxlY3RvcignW2J0bi1pdGVtLWRlbGV0ZV0nKVxyXG4gICAgICAgICAgIC5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICBkZWxldGVOb3RlKGV2ZW50LnRhcmdldClcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICBpdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlKTtcclxuICAgICAgICB9KTtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBhZGRFdmVudExpc3RlbmVyXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoaXRlbXNDb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlTm90ZSh0YXJnZXQsIG1vdXNlRXZlbnQpe1xyXG4gICAgbGV0IF9faWQgICAgICA9IHBhcnNlSW50KHRhcmdldC5pZC5zcGxpdCgnLScpWzFdKTtcclxuICAgIGxldCBfX3BheWxvYWQgPSByb3dzLndoZXJlKHsga2V5IDogX19pZCB9KVswXTtcclxuICAgIGxldCBfX2VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZS17MH0nLmZvcm1hdChfX2lkKSk7XHJcbiAgICBcclxuICAgIGRiLmRlbGV0ZShOT1RBU19UQUJMRV9OQU1FLCBfX2lkKVxyXG4gICAgICAudGhlbiggKCkgPT4ge1xyXG4gICAgICAgIHJvd3MucmVtb3ZlKF9fcGF5bG9hZCk7XHJcbiAgICAgICAgX19lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX19lbGVtZW50KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCBlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7ICAgICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBleHBhbmRDb2xsYXBzZSh0YXJnZXQsIG1vdXNlRXZlbnQpIHtcclxuICAgIGxldCBfX3N0eWxlID0gdGFyZ2V0LnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlO1xyXG4gICAgaWYoX19zdHlsZS5kaXNwbGF5ID09ICdub25lJyl7XHJcbiAgICAgIF9fc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNhcmV0LWRvd24nKTtcclxuICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QuYWRkKCdmYS1jYXJldC11cCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX19zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNhcmV0LXVwJyk7XHJcbiAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuY2xhc3NMaXN0LmFkZCgnZmEtY2FyZXQtZG93bicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkTm90ZSh0YXJnZXQsIG1vdXNlRXZlbnQpIHtcclxuICAgIHZhciBfX3BheWxvYWQgPSB7IGtleSAgIDogbmV3IERhdGUoKS52YWx1ZU9mKCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0ZSAgOiAnMjEvMDIvMjAyMCcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGUgOiAnTnVldmEgbm90YScsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dCAgOiAnVGV4dG8gZGUgbGEgbm90YScgfTtcclxuICAgIGRiLnNhdmUoTk9UQVNfVEFCTEVfTkFNRSwgX19wYXlsb2FkKVxyXG4gICAgICAudGhlbiggbm90YSA9PiB7XHJcbiAgICAgICAgcm93cy5wdXNoKG5vdGEpXHJcbiAgICAgICAgcmVuZGVyKCk7ICAgIFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goIGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICB9KTtcclxuICB9ICBcclxuXHJcbiAgZnVuY3Rpb24gc2hvd05vdGVJbmZvKHRhcmdldCwgbW91c2VFdmVudCkge1xyXG4gICAgYWxlcnQodGFyZ2V0LmlkKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGAgIFxyXG48ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyIHczLW1hcmdpbi1ib3R0b21cIj5cclxuICA8aDE+TnVldmEgbm90YTwvaDE+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyIHczLW1hcmdpbi1ib3R0b20gdzMtY2VudGVyXCI+XHJcbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJidG4tZ3JhYmFyXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtYmxhY2tcIj5HcmFiYXI8L2J1dHRvbj5cclxuPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KXtcclxuXHJcbiAgbGV0IGFwcCA9IGNvbnRleHQ7XHJcblxyXG4gIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ2RpdicsIF9fdGVtcGxhdGUpO1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBwb2wuJCgnYnRuLWdyYWJhcicpXHJcbiAgICAgICAgIC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgJycsICcvbm90YXMtYXBwLycpO1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKGFwcCk7XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=