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
  <a href="" route-link class="w3-bar-item w3-button selected">Inicio</a>
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
  'add'     : _views_new_item_page__WEBPACK_IMPORTED_MODULE_8__["default"],
  navigateTo: function (route) {
    this.current = route;
    let url = '{origin}{0}{1}'.format('/notas-app/', route, location);
    window.history.pushState({}, route, url);
    // window.history.replaceState({}, '', '/notas-app' + path);
    showContent();
  },
  getView : function () {
    return this[this.current] || this.home;
  },
  normalizePath: function (url) {
    return url.replace(document.baseURI, '');
  },
  sync: function(){
    this.current = this.normalizePath(window.location.href);
    showContent();
  },
  current : ''
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
          let route = views.normalizePath(e.target.href);
          if (views.current != route) {
            try {
              views.navigateTo(route);
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
function showContent(){
  let view_ref = views.getView();
  if(!currentView || currentView != view_ref) {
    container.innerHTML = '';    
    currentView = view_ref;
    let view_instance = currentView({router : views});
    if(view_instance.init) view_instance.init();
    container.appendChild(view_instance.render());
    if(view_instance.mounted) view_instance.mounted(container);
  }

}

views.sync();

window.onpopstate = function(){
  views.sync();
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
            __fn[0]  = module.templates.getValue(__fn[0], __context);
            __fn[1]  = module.templates.getValue(__fn[1], __context);
            return __fn[0](__fn[1], __context);            
          }
          return /^\d+$/.test(key) ? __arg[key]
                                   : (typeof __context[key] === "undefined") ? module.templates.getValue(key, __context)
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
<div class="w3-border-bottom" style="padding:0; font-size:14px;" id="note-{note.key}">
  <div class="w3-container" style="padding:5px">
    <div on-click="expandCollapse"><b>{note.title}</b><i class="w3-right w3-large fa fa-caret-down"></i></div>
  </div>
  <div class="w3-container" style="display:none;padding:0 4px">
    <p class="" style="padding:2px;min-height:4em;margin:2px 0;white-space: pre-wrap">{formatText:note.text}</p>
    <div class="w3-bar w3-center" style="padding:4px 0;">
      <button type="button" id="delete-{note.key}" on-click="deleteNote" class="w3-button w3-border"><i class="fa fa-trash" aria-hidden="true"></i></button>
      <button type="button" id="info-{note.key}"  on-click="showInfo" class="w3-button w3-border"><i class="fa fa-info" aria-hidden="true"></i></button>
      <button type="button" id="edit-{note.key}"  on-click="editNote" class="w3-button w3-border"><i class="fa fa-edit" aria-hidden="true"></i></button>
    </div>
  </div>
</div>`;

/* harmony default export */ __webpack_exports__["default"] = (function(ctx){
    
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
      showInfo       : showNoteInfo,
      editNote       : editNote
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
        rows = values.reverse();
        render();
      });
  }

  function render() {
    itemsContainer.innerHTML = '';
    rows.map( note => {
          let __bag = {
            note,
            formatText: function (text) {
              return text;
            }
          };
          return _lib_mapa__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', __ITEM_TEMPLATE.format(__bag))
        })
        .map( e => e.firstElementChild )
        .forEach( e => {
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
    ctx.router.navigateTo('add');
  }  

  function showNoteInfo(target, mouseEvent) {
    alert(target.id);
  }

  function editNote(target, mouseEvent) {
    ctx.router.navigateTo('add:' + target.id.split('-')[1]);
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
/* harmony import */ var _lib_dbWrapper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/dbWrapper.service */ "./src/lib/dbWrapper.service.js");
﻿


const NOTAS_DATABASE   = 'notas-app.db'; 
const NOTAS_TABLE_NAME = 'notas';

const __template = `  
<div class="w3-container w3-margin-bottom">
  <h2>Nueva nota</h2>
  <form class="w3-margin-bottom">
    <label for="txt-title">Título</label>
    <input class="w3-input w3-border" type="text" id="txt-title" placeholder="Introduce un título" >
    <label for="txt-text">Texto</label>
    <textarea class="w3-input w3-border" id="txt-text" rows="4" placeholder="Contenido de la nota"></textarea>
  </form>
</div>
<div class="w3-container w3-margin-bottom w3-center">
  <button type="button" id="btn-grabar" class="w3-button w3-black">Grabar</button>
</div>
`;

/* harmony default export */ __webpack_exports__["default"] = (function(ctx){
  
  let db;
  let component = {
    root   : {},
    init   : function(container){ },
    render : function(container){
      this.root = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', __template);
      return this.root;
    },
    mounted : function(container){
      initAll();
    }
  };

  function initAll() {
    let __container = component.root.firstElementChild;
    __container.style.display = 'none';
    // =====================================================
    // Open database
    // =====================================================
    db = new _lib_dbWrapper_service__WEBPACK_IMPORTED_MODULE_1__["default"](NOTAS_DATABASE);
    db.openDb()
      .then( () => {
        __container.style.display = '';
        _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].$('btn-grabar').onclick = addNote;
      });
  }

  function addNote() {
    var __txtTitle = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].$('txt-title');
    var __txtText  = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].$('txt-text');
    var __title = __txtTitle.value.trim();
    var __text  = __txtText.value.trim();
    if (!__title) {
      setTimeout(() => __txtTitle.focus(), 20);
      return;
    }
    if (!__text) {
      setTimeout(() => __txtText.focus(), 20);
      return;
    }
    let date = new Date();
    db.save(NOTAS_TABLE_NAME,
            { 
              key   : date.valueOf(), 
              date  : '{0}/{1}/{2}'.format(date.getDate(), 
                                           date.getMonth, 
                                           date.getFullYear()), 
              title : __title, 
              text  : __text 
            })
            .then( nota => {
              ctx.router.navigateTo('list'); 
            })
            .catch( e => {
              console.log(e);
            });
  }

  return component;
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW4tY29udGVudC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVudS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvZGJXcmFwcGVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9tYXBhLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9hYm91dC5wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ob21lLnBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2xpc3QucGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbmV3LWl0ZW0ucGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztR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QTtBQUNBLGdDQUFnQyxhQUFhO0FBQzdDLG1EQUFtRCxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTyxFO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEc7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3BKRDtBQUFBO0FBQUE7QUFBQSxDQUFrQztBQUNzQjs7QUFFeEQsd0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlOztBQUVmO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsaUNBQWlDLEVBQUU7QUFDbkM7QUFDQSxrQkFBa0Isb0RBQUc7QUFDckI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw4REFBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBRztBQUNYLE9BQU87QUFDUDs7QUFFQTtBQUNBLHFCQUFxQixvREFBRztBQUN4QixxQkFBcUIsb0RBQUc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYTtBQUNBO0FBQ0Esd0JBQXdCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDRDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYCAgXHJcbiAgPHA+e3RleHR9PC9wPlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICByZXR1cm4ge1xyXG4gICAgdGV4dCAgIDogJ8KpIFJhZmFlbCBDYXN0cm8gR8OzbWV6LCAyMDIwJyxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7fSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpZCAgICAgICAgOiBcImFwcEZvb3RlclwiLFxyXG4gICAgICAgIGlubmVySFRNTCA6IF9fdGVtcGxhdGUuZm9ybWF0KHRoaXMpLFxyXG4gICAgICAgIGNsYXNzTmFtZSA6ICd3My1jb250YWluZXIgdzMtdGVhbCB3My1jZW50ZXInXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnZm9vdGVyJywgb3B0aW9ucyk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGBcclxuICA8aDE+e3RpdGxlfTwvaDE+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gIHJldHVybiB7XHJcbiAgICB0aXRsZSAgOiAnTm90YXMgQXBwJyxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7fSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpZCAgICAgICAgOiAnYXBwSGVhZGVyJyxcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLmZvcm1hdCh0aGlzKSxcclxuICAgICAgICBjbGFzc05hbWUgOiAndzMtY29udGFpbmVyIHczLXRlYWwnXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnaGVhZGVyJywgb3B0aW9ucyk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGBgO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuXHJcbiAgbGV0IGNvbXBvbmVudCA9IHtcclxuICAgIHJvb3QgICA6IHt9LFxyXG4gICAgaW5pdCAgIDogZnVuY3Rpb24oY29udGFpbmVyKXsgfSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaWQgICAgICAgIDogXCJhcHAtY29udGVudC1jb250YWluZXJcIixcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLFxyXG4gICAgICAgIGNsYXNzTmFtZSA6ICd3My1jb250YWluZXInLFxyXG4gICAgICAgIHN0eWxlICAgICA6IHsgXHJcbiAgICAgICAgICBtaW5IZWlnaHQgOiAnNDQwcHgnLFxyXG4gICAgICAgICAgcGFkZGluZyAgIDogJzAgMCA2MHB4IDAnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwb2wuYnVpbGQoJ3NlY3Rpb24nLCBvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBpbml0U2Nyb2xsKCk7ICBcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG5cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU2Nyb2xsXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGluaXRTY3JvbGwoKXtcclxuICAgIFxyXG4gIGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xyXG5cdCAgdmFyIHRpbWVvdXQ7XHJcblx0ICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0XHQgIHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcclxuXHRcdCAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdCAgdGltZW91dCA9IG51bGw7XHJcblx0XHRcdCAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcblx0XHQgIH07XHJcblx0XHQgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xyXG5cdFx0ICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblx0XHQgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcclxuXHRcdCAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcblx0ICB9O1xyXG4gIH07ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIFxyXG4gIGZ1bmN0aW9uIGluaXRTY3JvbGwoKXsgICAgICAgIFxyXG4gICAgdmFyIG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwTWVudVwiKTtcclxuICAgIGlmKG5hdmJhci5jbGFzc05hbWUuaW5jbHVkZXMoJ3N0aWNreScpKSByZXR1cm47XHJcbiAgICB2YXIgc3RpY2t5ID0gbmF2YmFyLm9mZnNldFRvcDsgICAgICAgICAgXHJcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiBteUZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IHN0aWNreSkge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5XCIpO1xyXG4gICAgICB9XHJcbiAgICB9OyAgXHJcbiAgfVxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGRlYm91bmNlKGluaXRTY3JvbGwsIDE1MCksIGZhbHNlKTtcclxuICBpbml0U2Nyb2xsKCk7XHJcbn07IiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuXHJcbmNvbnN0IF9fVEVNUExBVEUgPSBgICBcclxuICA8YSBocmVmPVwiXCIgcm91dGUtbGluayBjbGFzcz1cInczLWJhci1pdGVtIHczLWJ1dHRvbiBzZWxlY3RlZFwiPkluaWNpbzwvYT5cclxuICA8YSBocmVmPVwibGlzdFwiIHJvdXRlLWxpbmsgY2xhc3M9XCJ3My1iYXItaXRlbSB3My1idXR0b25cIj5Ob3RhczwvYT5cclxuICA8YSBocmVmPVwiYWRkXCIgcm91dGUtbGluayBjbGFzcz1cInczLWJhci1pdGVtIHczLWJ1dHRvblwiPis8L2E+XHJcbiAgPGEgaHJlZj1cImFib3V0XCIgcm91dGUtbGluayBjbGFzcz1cInczLWJhci1pdGVtIHczLWJ1dHRvbiB3My1yaWdodFwiPj88L2E+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gIHJldHVybiB7XHJcbiAgICBpZCAgICAgOiAnbWVudS5jb21wb25lbnQucmVmJyxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7fSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaWQgICAgICAgIDogXCJhcHBNZW51XCIsXHJcbiAgICAgICAgaW5uZXJIVE1MIDogX19URU1QTEFURS5mb3JtYXQodGhpcyksXHJcbiAgICAgICAgY2xhc3NOYW1lIDogJ3czLWJhciB3My1ibGFjaydcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcG9sLmJ1aWxkKCduYXYnLCBvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4vbGliL21hcGEuanNcIjtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENvbXBvbmVudHNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmltcG9ydCBoZWFkZXJDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCBmb290ZXJDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9mb290ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCBjb250ZW50Q29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbi1jb250ZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgbWVudUNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL21lbnUuY29tcG9uZW50XCI7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQYWdlc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuaW1wb3J0IGhvbWVQYWdlIGZyb20gXCIuL3ZpZXdzL2hvbWUucGFnZVwiO1xyXG5pbXBvcnQgbGlzdFBhZ2UgZnJvbSBcIi4vdmlld3MvbGlzdC5wYWdlXCI7XHJcbmltcG9ydCBhYm91dFBhZ2UgZnJvbSBcIi4vdmlld3MvYWJvdXQucGFnZVwiO1xyXG5pbXBvcnQgbmV3SXRlbVBhZ2UgZnJvbSBcIi4vdmlld3MvbmV3LWl0ZW0ucGFnZVwiO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUm91dGVzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBjb21wb25lbnRzID0gIFsgXHJcbiAgaGVhZGVyQ29tcG9uZW50KCksXHJcbiAgbWVudUNvbXBvbmVudCgpLFxyXG4gIGNvbnRlbnRDb21wb25lbnQoKSxcclxuICBmb290ZXJDb21wb25lbnQoKVxyXG5dO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVmlld3NcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IHZpZXdzID0geyBcclxuICAnaG9tZScgICAgOiBob21lUGFnZSxcclxuICAnbGlzdCcgICAgOiBsaXN0UGFnZSxcclxuICAnYWJvdXQnICAgOiBhYm91dFBhZ2UsXHJcbiAgJ2FkZCcgICAgIDogbmV3SXRlbVBhZ2UsXHJcbiAgbmF2aWdhdGVUbzogZnVuY3Rpb24gKHJvdXRlKSB7XHJcbiAgICB0aGlzLmN1cnJlbnQgPSByb3V0ZTtcclxuICAgIGxldCB1cmwgPSAne29yaWdpbn17MH17MX0nLmZvcm1hdCgnL25vdGFzLWFwcC8nLCByb3V0ZSwgbG9jYXRpb24pO1xyXG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCByb3V0ZSwgdXJsKTtcclxuICAgIC8vIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgJycsICcvbm90YXMtYXBwJyArIHBhdGgpO1xyXG4gICAgc2hvd0NvbnRlbnQoKTtcclxuICB9LFxyXG4gIGdldFZpZXcgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpc1t0aGlzLmN1cnJlbnRdIHx8IHRoaXMuaG9tZTtcclxuICB9LFxyXG4gIG5vcm1hbGl6ZVBhdGg6IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgIHJldHVybiB1cmwucmVwbGFjZShkb2N1bWVudC5iYXNlVVJJLCAnJyk7XHJcbiAgfSxcclxuICBzeW5jOiBmdW5jdGlvbigpe1xyXG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5ub3JtYWxpemVQYXRoKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgIHNob3dDb250ZW50KCk7XHJcbiAgfSxcclxuICBjdXJyZW50IDogJydcclxufTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJbml0IEFwcFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKGZ1bmN0aW9uKCl7XHJcblxyXG4gIGNvbnN0IHJvb3QgPSBwb2wuJCgnYXBwQ29udGVudCcpO1xyXG4gIGNvbXBvbmVudHMuZm9yRWFjaCggYyA9PiB7XHJcbiAgICBpZihjLmluaXQpIGMuaW5pdChyb290KTtcclxuICAgIHJvb3QuYXBwZW5kQ2hpbGQoYy5yZW5kZXIocm9vdCkpO1xyXG4gICAgaWYoYy5tb3VudGVkKSBjLm1vdW50ZWQocm9vdCk7IFxyXG4gIH0pO1xyXG5cclxuICBwb2wuJCgnW3JvdXRlLWxpbmtdJylcclxuICAgICAuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbihlKXtcclxuICAgICAgICAgIGxldCByb3V0ZSA9IHZpZXdzLm5vcm1hbGl6ZVBhdGgoZS50YXJnZXQuaHJlZik7XHJcbiAgICAgICAgICBpZiAodmlld3MuY3VycmVudCAhPSByb3V0ZSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHZpZXdzLm5hdmlnYXRlVG8ocm91dGUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gIFxyXG4gICAgIH0pO1xyXG5cclxufSkoKTtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFN5bmMgY29udGVudFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgY29udGFpbmVyID0gcG9sLiQoJ2FwcC1jb250ZW50LWNvbnRhaW5lcicpO1xyXG5sZXQgY3VycmVudFZpZXc7XHJcbmZ1bmN0aW9uIHNob3dDb250ZW50KCl7XHJcbiAgbGV0IHZpZXdfcmVmID0gdmlld3MuZ2V0VmlldygpO1xyXG4gIGlmKCFjdXJyZW50VmlldyB8fCBjdXJyZW50VmlldyAhPSB2aWV3X3JlZikge1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnOyAgICBcclxuICAgIGN1cnJlbnRWaWV3ID0gdmlld19yZWY7XHJcbiAgICBsZXQgdmlld19pbnN0YW5jZSA9IGN1cnJlbnRWaWV3KHtyb3V0ZXIgOiB2aWV3c30pO1xyXG4gICAgaWYodmlld19pbnN0YW5jZS5pbml0KSB2aWV3X2luc3RhbmNlLmluaXQoKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3X2luc3RhbmNlLnJlbmRlcigpKTtcclxuICAgIGlmKHZpZXdfaW5zdGFuY2UubW91bnRlZCkgdmlld19pbnN0YW5jZS5tb3VudGVkKGNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxufVxyXG5cclxudmlld3Muc3luYygpO1xyXG5cclxud2luZG93Lm9ucG9wc3RhdGUgPSBmdW5jdGlvbigpe1xyXG4gIHZpZXdzLnN5bmMoKTtcclxufVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU2VydmljZVdvcmtlclxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcblxyXG4gIGlmKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3Ipe1xyXG4gICAgdHJ5IHtcclxuICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2VXb3JrZXIuanMnKTtcclxuICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciBSZWdpc3RlcmVkXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciBSZWdpc3RyYXRpb24gRmFpbGVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pO1xyXG4iLCLvu79pbXBvcnQgcG9sIGZyb20gXCIuL21hcGEuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERiV3JhcHBlclNlcnZpY2V7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgIHRoaXMuZGJuYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGIgPSAnJztcclxuICB9XHJcblxyXG4gIG9wZW5EYigpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICBsZXQgcmVxdWVzdCA9IHdpbmRvdy5pbmRleGVkREIub3Blbih0aGlzLmRibmFtZSwgMSk7XHJcblxyXG5cdCAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kYiA9IGUudGFyZ2V0LnJlc3VsdDtcclxuXHRcdCAgICByZXNvbHZlKHRoaXMuZGIpO1xyXG5cdCAgICB9O1xyXG5cclxuICAgICAgcmVxdWVzdC5vbmVycm9yID0gZSA9PiB7ICBcclxuICAgICAgICByZWplY3QoJ0Vycm9yJyk7XHJcbiAgICAgIH07XHJcblx0XHJcblx0ICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGUpID0+IHtcclxuXHRcdCAgICB0aGlzLmRiID0gZS50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZih0aGlzLmRiLm9iamVjdFN0b3JlTmFtZXMgJiYgdGhpcy5kYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKFwibm90YXNcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5kYi5kZWxldGVPYmplY3RTdG9yZShcIm5vdGFzXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RvcmUgPSB0aGlzLmRiLmNyZWF0ZU9iamVjdFN0b3JlKFwibm90YXNcIiwgeyBrZXlQYXRoIDogXCJrZXlcIiB9KTsgICAgICAgXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlYWRBbGwobmFtZSl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdmFyIF9faXRlbXMgPSBbXTtcclxuICAgICAgdGhpcy5kYlxyXG4gICAgICAgICAgLnRyYW5zYWN0aW9uKG5hbWUsIFwicmVhZG9ubHlcIilcclxuICAgICAgICAgIC5vYmplY3RTdG9yZShuYW1lKVxyXG4gICAgICAgICAgLm9wZW5DdXJzb3IoSURCS2V5UmFuZ2UubG93ZXJCb3VuZCgwKSlcclxuICAgICAgICAgIC5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdmFyIF9fY3Vyc29yID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICAgICAgaWYoX19jdXJzb3IpIHtcclxuICAgICAgICAgICAgICBfX2l0ZW1zLnB1c2goX19jdXJzb3IudmFsdWUpO1xyXG4gICAgICAgICAgICAgIF9fY3Vyc29yLmNvbnRpbnVlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShfX2l0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZShzdG9yZSwgdmFsdWUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHtcclxuICAgICAgKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgcmVzdWx0Lm9uc3VjY2VzcyA9IGV2ZW50ID0+IHsgcmVzb2x2ZSh2YWx1ZSk7IH07XHJcbiAgICAgICAgcmVzdWx0Lm9uZXJyb3IgICA9IGVycm9yID0+IHsgY29uc29sZS5sb2coZXJyb3IpOyB9O1xyXG4gICAgICB9KSh0aGlzLmRiXHJcbiAgICAgICAgICAgICAudHJhbnNhY3Rpb24oc3RvcmUsIFwicmVhZHdyaXRlXCIpXHJcbiAgICAgICAgICAgICAub2JqZWN0U3RvcmUoc3RvcmUpXHJcbiAgICAgICAgICAgICAucHV0KHZhbHVlKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZShzdG9yZSwga2V5KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIChmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgIHJlc3VsdC5vbnN1Y2Nlc3MgPSBldmVudCA9PiB7IHJlc29sdmUoKTsgfTtcclxuICAgICAgICByZXN1bHQub25lcnJvciAgID0gZXJyb3IgPT4geyBjb25zb2xlLmxvZyhlcnJvcik7IH07XHJcbiAgICAgIH0pKHRoaXMuZGJcclxuICAgICAgICAgICAgIC50cmFuc2FjdGlvbihzdG9yZSwgXCJyZWFkd3JpdGVcIilcclxuICAgICAgICAgICAgIC5vYmplY3RTdG9yZShzdG9yZSlcclxuICAgICAgICAgICAgIC5kZWxldGUoa2V5KSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlYWRPbmUoc3RvcmUsIGtleSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAoZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgICByZXN1bHQub25zdWNjZXNzID0gZXZlbnQgPT4geyByZXNvbHZlKGV2ZW50LnRhcmdldC5yZXN1bHQpOyB9O1xyXG4gICAgICAgIHJlc3VsdC5vbmVycm9yICAgPSBlcnJvciA9PiB7IGNvbnNvbGUubG9nKGVycm9yKTt9O1xyXG4gICAgICB9KSh0aGlzLmRiXHJcbiAgICAgICAgICAgICAudHJhbnNhY3Rpb24oc3RvcmUsIFwicmVhZHdyaXRlXCIpXHJcbiAgICAgICAgICAgICAub2JqZWN0U3RvcmUoc3RvcmUpXHJcbiAgICAgICAgICAgICAuZ2V0KGtleSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIiwiXHJcblxyXG5sZXQgX19tb2R1bGUgPSB7fTtcclxuKGZ1bmN0aW9uKG1vZHVsZSwgbmFtZSl7XHJcblxyXG4gIHZhciBfbW9kdWxlID0gIG1vZHVsZVtuYW1lXSA9IHsgYXBwbHkgOiBmdW5jdGlvbiBhcHBseShvLCBjLCBkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZCkgYXBwbHkobywgZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8gJiYgYyAmJiB0eXBlb2YgYyA9PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIGMpeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjW3BdID09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBseShvW3BdLCBjW3BdICkgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvW3BdID0gY1twXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19OyAgICAgIFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBVdGlsc1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24obW9kdWxlKXtcclxuICAgIG1vZHVsZS5hcHBseShtb2R1bGUseyBcclxuICAgICAgdG9BcnJheSAgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodik7IH0sXHJcbiAgICAgIGlzTnVsbCAgICAgIDogZnVuY3Rpb24odil7cmV0dXJuIHYgPT09IG51bGw7IH0sXHJcbiAgICAgIGlzQXJyYXkgICAgIDogZnVuY3Rpb24odil7cmV0dXJuIEFycmF5LmlzQXJyYXkodik7IH0sXHJcbiAgICAgIGlzU3RyaW5nICAgIDogZnVuY3Rpb24odil7cmV0dXJuIHR5cGVvZiB2ID09ICdzdHJpbmcnO30sXHJcbiAgICAgIGlzQm9vbGVhbiAgIDogZnVuY3Rpb24odil7cmV0dXJuIHR5cGVvZiB2ID09ICdib29sZWFuJzt9LFxyXG4gICAgICBpc051bWJlciAgICA6IGZ1bmN0aW9uKHYpe3JldHVybiB0eXBlb2YgdiA9PSAnbnVtYmVyJzt9LFxyXG4gICAgICBpc0Z1bmN0aW9uICA6IGZ1bmN0aW9uKHYpe3JldHVybiB0eXBlb2YgdiA9PSAnZnVuY3Rpb24nO30sXHJcbiAgICAgIGlzT2JqZWN0ICAgIDogZnVuY3Rpb24odil7cmV0dXJuIHYgJiYgdHlwZW9mIHYgPT0gJ29iamVjdCc7fSxcclxuICAgICAgY2xvbmUgICAgICAgOiBmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgaWYobW9kdWxlLmlzQXJyYXkobykpICAgICAgICAgICAgIHJldHVybiBvLnNsaWNlKDApO1xyXG4gICAgICAgIGlmKG1vZHVsZS5pc09iamVjdChvKSAmJiBvLmNsb25lKSByZXR1cm4gby5jbG9uZSgpO1xyXG4gICAgICAgIGlmKG1vZHVsZS5pc09iamVjdChvKSl7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMobykucmVkdWNlKCBmdW5jdGlvbihhLCBrKXtcclxuICAgICAgICAgICAgYVtrXSA9IG1vZHVsZS5jbG9uZShvW2tdKTtcclxuICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgICB9LCB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvO1xyXG4gICAgICB9LCAgICAgICAgXHJcbiAgICAgIGpvaW4gICAgICAgIDogZnVuY3Rpb24oaXRlbXMsIHByb3BlcnR5LCBzZXBhcmF0b3Ipe1xyXG4gICAgICAgIHJldHVybiBpdGVtcy5yZWR1Y2UoZnVuY3Rpb24oYSwgbyl7IHJldHVybiBhLmFwcGVuZChvW3Byb3BlcnR5IHx8ICdpZCddKTsgfSwgW10pXHJcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLScgOiAoc2VwYXJhdG9yIHx8ICcnKSk7IFxyXG4gICAgICB9LFxyXG4gICAgICBzdHJpbmdCdWlsZGVyIDogZnVuY3Rpb24ocyl7XHJcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZSAgICAgIDogcyB8fCAnJyxcclxuICAgICAgICAgICAgICAgICAgIGFwcGVuZCAgICAgOiBmdW5jdGlvbihzKXsgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUgKyBzOyByZXR1cm4gdGhpczt9LFxyXG4gICAgICAgICAgICAgICAgICAgYXBwZW5kTGluZSA6IGZ1bmN0aW9uKHMpeyB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZSArIChzIHx8ICcnKSArICdcXG4nOyByZXR1cm4gdGhpczt9fVxyXG4gICAgICB9LFxyXG4gICAgICBidWlsZCA6IGZ1bmN0aW9uKHRhZ05hbWUsIG8pe1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbW9kdWxlLmlzU3RyaW5nKG8pID8geyBpbm5lckhUTUwgOiBvIH0gOiBvO1xyXG4gICAgICAgIHJldHVybiBfbW9kdWxlLmFwcGx5KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSksIG9wdGlvbnMpO1xyXG4gICAgICB9LFxyXG4gICAgICAkIDogZnVuY3Rpb24oZSwgY29udHJvbCl7IFxyXG4gICAgICAgIHJldHVybiAodHlwZW9mIGUgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS50b0FycmF5KChjb250cm9sIHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKGUpIHx8IFtdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGU7XHJcbiAgICAgIH0gXHJcbiAgICB9KTtcclxuICB9KF9tb2R1bGUpKTtcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gU3RyaW5nc1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24obW9kdWxlKXtcclxuICAgIG1vZHVsZS5hcHBseShTdHJpbmcsIHtcclxuICAgICAgc3RyaW5nQnVpbGRlciA6IG1vZHVsZS5zdHJpbmdCdWlsZGVyLFxyXG4gICAgICBsZWZ0UGFkICAgICAgIDogZnVuY3Rpb24gKHZhbCwgc2l6ZSwgY2gpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gJycgKyB2YWw7XHJcbiAgICAgICAgaWYgKGNoID09PSBudWxsIHx8IGNoID09PSB1bmRlZmluZWQgfHwgY2ggPT09ICcnKSBjaCA9ICcgJzsgICAgICAgICAgICBcclxuICAgICAgICB3aGlsZSAocmVzdWx0Lmxlbmd0aCA8IHNpemUpIHJlc3VsdCA9IGNoICsgcmVzdWx0OyAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRyaW1WYWx1ZXMgOiBmdW5jdGlvbiAodmFsdWVzKXsgcmV0dXJuIHZhbHVlcy5tYXAoZnVuY3Rpb24ocyl7cmV0dXJuIHMudHJpbSgpO30pO31cclxuICAgIH0pO1xyXG4gICAgbW9kdWxlLmFwcGx5KFN0cmluZy5wcm90b3R5cGUsIHtcclxuICAgICAgcmVwbGFjZUFsbCAgOiBmdW5jdGlvbihwYXR0ZXJuLCByZXBsYWNlbWVudCkgeyByZXR1cm4gdGhpcy5zcGxpdChwYXR0ZXJuKS5qb2luKHJlcGxhY2VtZW50KTsgfSxcclxuICAgICAgcmVwZWF0ICAgICAgOiBTdHJpbmcucHJvdG90eXBlLnJlcGVhdCAgICAgfHwgZnVuY3Rpb24oYSkgeyByZXR1cm4gbmV3IEFycmF5KGEgKyAxKS5qb2luKHRoaXMpOyB9LFxyXG4gICAgICBjb250YWlucyAgICA6IFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMgICB8fCBmdW5jdGlvbih0LCBzdGFydCkgeyByZXR1cm4gdGhpcy5pbmRleE9mKHQpID49IChzdGFydCB8fCAwKTsgfSxcclxuICAgICAgc3RhcnRzV2l0aCAgOiBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggfHwgZnVuY3Rpb24odCl7IHJldHVybiB0aGlzLmluZGV4T2YodCkgPT0gMDsgfSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICB0b0Zsb2F0ICAgICA6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLnRyaW0oKS5yZXBsYWNlQWxsKCcuJywgJycpLnJlcGxhY2VBbGwoJywnLCAnLicpIH0sXHJcbiAgICAgIGZpeERhdGUgICAgIDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuc3BsaXQoJyAnKVswXTsgfSxcclxuICAgICAgZml4VGltZSAgICAgOiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5zcGxpdCgnICcpWzFdOyB9LFxyXG4gICAgICBmaXhZZWFyICAgICA6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLmZpeERhdGUoKS5zcGxpdCgnLycpWzJdO30sXHJcbiAgICAgIHRyaW1TZWNvbmRzIDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuc3BsaXQoJzonKVswXSArICc6JyArIHRoaXMuc3BsaXQoJzonKVsxXSA7IH0sXHJcbiAgICAgIHBhZGRpbmdMZWZ0IDogZnVuY3Rpb24ocGFkZGluZ1ZhbHVlKXsgcmV0dXJuIChwYWRkaW5nVmFsdWUgKyB0aGlzKS5zbGljZSgtcGFkZGluZ1ZhbHVlLmxlbmd0aCk7IH0sXHJcbiAgICAgIGZvcm1hdCAgICAgIDogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgX19hcmcgICAgID0gYXJndW1lbnRzO1xyXG4gICAgICAgIHZhciBfX2NvbnRleHQgPSBfX2FyZ1tfX2FyZy5sZW5ndGggLSAxXSB8fCBzZWxmOyAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoL1xceyhcXGQrfFtee10rKVxcfS9nLCBmdW5jdGlvbihtLCBrZXkpe1xyXG4gICAgICAgICAgaWYoa2V5LmluZGV4T2YoJzonKSA+IDApe1xyXG4gICAgICAgICAgICB2YXIgX19mbiA9IGtleS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICBfX2ZuWzBdICA9IG1vZHVsZS50ZW1wbGF0ZXMuZ2V0VmFsdWUoX19mblswXSwgX19jb250ZXh0KTtcclxuICAgICAgICAgICAgX19mblsxXSAgPSBtb2R1bGUudGVtcGxhdGVzLmdldFZhbHVlKF9fZm5bMV0sIF9fY29udGV4dCk7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2ZuWzBdKF9fZm5bMV0sIF9fY29udGV4dCk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gL15cXGQrJC8udGVzdChrZXkpID8gX19hcmdba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHR5cGVvZiBfX2NvbnRleHRba2V5XSA9PT0gXCJ1bmRlZmluZWRcIikgPyBtb2R1bGUudGVtcGxhdGVzLmdldFZhbHVlKGtleSwgX19jb250ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX19jb250ZXh0W2tleV07IFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTsgICAgICBcclxuICB9KF9tb2R1bGUpKTsgICAgICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gQXJyYXlcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAgIFxyXG4gIChmdW5jdGlvbihtb2R1bGUpe1xyXG4gICAgbW9kdWxlLmFwcGx5KEFycmF5LnByb3RvdHlwZSwgeyAgICAgICAgICBcclxuICAgICAgcmVtb3ZlICAgOiBmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleE9mKG8pO1xyXG4gICAgICAgIGlmIChpbmRleCAhPSAtMSkgdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9LFxyXG4gICAgICBhZGQgICAgICA6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICB0aGlzLnB1c2gobyk7XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgIH0sXHJcbiAgICAgIGFwcGVuZCAgIDogZnVuY3Rpb24obykge1xyXG4gICAgICAgIHRoaXMucHVzaChvKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfSxcclxuICAgICAgaXRlbSAgICAgOiBmdW5jdGlvbihwcm9wTmFtZSwgdmFsdWUsIGRlZil7XHJcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50cz09MSA/IHRoaXMuZmlsdGVyKCBmdW5jdGlvbih2KXtyZXR1cm4gdlsnaWQnXSA9PSBwcm9wTmFtZSB8fCB2WydfaWQnXSA9PSBwcm9wTmFtZX0pWzBdIHx8IGRlZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmZpbHRlciggZnVuY3Rpb24odil7cmV0dXJuIHZbcHJvcE5hbWVdID09IHZhbHVlfSlbMF0gfHwgZGVmO1xyXG4gICAgICB9LFxyXG4gICAgICBjb250YWlucyA6IGZ1bmN0aW9uKHByb3BOYW1lLHZhbHVlKXsgcmV0dXJuIHRoaXMuaXRlbShwcm9wTmFtZSx2YWx1ZSk7IH0sXHJcbiAgICAgIGxhc3RJdGVtIDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07IH0sXHJcbiAgICAgIHNlbGVjdCAgIDogZnVuY3Rpb24oc2VudGVuY2UpeyByZXR1cm4gdGhpcy5tYXAoc2VudGVuY2UpIH0sICAgXHJcbiAgICAgIHdoZXJlICAgIDogZnVuY3Rpb24oc2VudGVuY2UpeyBcclxuICAgICAgICBpZihtb2R1bGUuaXNGdW5jdGlvbihzZW50ZW5jZSkpIHJldHVybiB0aGlzLmZpbHRlcihzZW50ZW5jZSk7XHJcbiAgICAgICAgaWYobW9kdWxlLmlzT2JqZWN0KHNlbnRlbmNlKSl7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXIobmV3IEZ1bmN0aW9uKCdhJywgT2JqZWN0LmtleXMoc2VudGVuY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbihhLCBwcm9wbmFtZSwgaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhICsgKGkgPiAwID8gJyAmJiAnIDogJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgIChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX3ZhbHVlID0gc2VudGVuY2VbcHJvcG5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKF9fdmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHJldHVybiAnezF9LnRlc3QoYS57MH0pJy5mb3JtYXQocHJvcG5hbWUsIF9fdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1vZHVsZS5pc1N0cmluZyhfX3ZhbHVlKSkgcmV0dXJuICdhLnswfSA9PT0gXFwnezF9XFwnJy5mb3JtYXQocHJvcG5hbWUsIF9fdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnYS57MH0gPT09IHsxfScuZm9ybWF0KHByb3BuYW1lLCBfX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oKSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJ3JldHVybiAnKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfSxcclxuICAgICAgc29ydEJ5ICAgICAgOiBmdW5jdGlvbihwcm9wbmFtZSwgZGVzYyl7XHJcbiAgICAgICAgdmFyIF9fb3JkZXIgPSBbXTtcclxuICAgICAgICB2YXIgX19uYW1lcyA9IHByb3BuYW1lLnNwbGl0KCcsJykubWFwKCBmdW5jdGlvbih0b2tlbixpKXsgXHJcbiAgICAgICAgICB2YXIgX19wYWlyID0gdG9rZW4uc3BsaXQoJyAnKTtcclxuICAgICAgICAgIF9fb3JkZXJbaV0gPSAoX19wYWlyWzFdICYmIChfX3BhaXJbMV0udG9VcHBlckNhc2UoKT09J0RFU0MnKSkgPyAtMSA6IDE7ICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gX19wYWlyWzBdOyAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBfX29yZGVyWzBdID0gKGRlc2MgPyAtMSA6IDEpXHJcbiAgICAgICAgdGhpcy5zb3J0KGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gMDsgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfX2ZuID0gZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgX194ID0gYVtfX25hbWVzW2ldXTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciBfX3kgPSBiW19fbmFtZXNbaV1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoX194IDwgX195KSByZXR1cm4gLTEgKiBfX29yZGVyW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoX194ID4gX195KSByZXR1cm4gIDEgKiBfX29yZGVyW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoaSA8IF9fbmFtZXMubGVuZ3RoKSByZXR1cm4gX19mbihhLGIpOyAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19mbihhLGIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7ICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBvcmRlckJ5ICAgICA6IGZ1bmN0aW9uKHNlbnRlbmNlKXtcclxuICAgICAgICB2YXIgX19zZW50ZW5jZSA9IHNlbnRlbmNlOyAgICBcclxuICAgICAgICBpZihtb2R1bGUuaXNTdHJpbmcoc2VudGVuY2UpKSBfX3NlbnRlbmNlID0gZnVuY3Rpb24oYSl7IHJldHVybiBhW3NlbnRlbmNlXTsgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZX0pXHJcbiAgICAgICAgICAgICAgICAgICAuc29ydChmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciB4ID0gX19zZW50ZW5jZShhKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciB5ID0gX19zZW50ZW5jZShiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoKHggPCB5KSA/IC0xIDogKCh4ID4geSkgPyAxIDogMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgfSk7ICAgICBcclxuICAgICAgfSxcclxuICAgICAgZGlzdGluY3QgICAgOiBmdW5jdGlvbihzZW50ZW5jZSkge1xyXG4gICAgICAgIHZhciBfX3NlbnRlbmNlID0gc2VudGVuY2U7ICAgIFxyXG4gICAgICAgIGlmKG1vZHVsZS5pc1N0cmluZyhzZW50ZW5jZSkpIF9fc2VudGVuY2UgPSBmdW5jdGlvbihhKXsgcmV0dXJuIGFbc2VudGVuY2VdOyB9XHJcbiAgICAgICAgdmFyIHIgPSBbXTtcclxuICAgICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICB2YXIgX3ZhbHVlID0gX19zZW50ZW5jZShpdGVtKTtcclxuICAgICAgICAgIGlmKHIuaW5kZXhPZihfdmFsdWUpPT0tMSkgci5wdXNoKF92YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdyb3VwQnkgOiBmdW5jdGlvbihwcm9wKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWR1Y2UoZnVuY3Rpb24oZ3JvdXBzLCBpdGVtKSB7XHJcbiAgICAgICAgICB2YXIgdmFsID0gaXRlbVtwcm9wXTtcclxuICAgICAgICAgIChncm91cHNbdmFsXSA9IGdyb3Vwc1t2YWxdIHx8IFtdKS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgcmV0dXJuIGdyb3Vwc1xyXG4gICAgICAgIH0sIHt9KVxyXG4gICAgICB9LFxyXG4gICAgICB0b0RpY3Rpb25hcnkgOiBmdW5jdGlvbihwcm9wLCB2YWx1ZSl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVkdWNlKGZ1bmN0aW9uKGEsIGQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbZFtwcm9wXV0gPSB2YWx1ZSA/IGRbdmFsdWVdIDogZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge30pOyAgXHJcbiAgICAgIH1cclxuICAgIH0pOyAgICAgICBcclxuICB9KF9tb2R1bGUpKTtcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFRlbXBsYXRlc1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24obW9kdWxlKXtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRWYWx1ZShrZXksIHNjb3BlKSB7ICAgICAgICBcclxuICAgICAgcmV0dXJuIGtleS5zcGxpdCgvXFwufFxcW3xcXF0vKVxyXG4gICAgICAgICAgICAgICAgLnJlZHVjZSggZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChiID09PSAnJykgcmV0dXJuIGE7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhW2JdID09PSB1bmRlZmluZWQgPyAoYSA9PT0gc2VsZiA/ICcnIDogc2VsZikgOiBhW2JdO1xyXG4gICAgICAgICAgICAgICAgfSwgc2NvcGUgfHwgc2VsZiApOyAgICBcclxuICAgIH1cclxuICAgXHJcbiAgICBmdW5jdGlvbiBtZXJnZSh0ZW1wbGF0ZSwgbywga2V5KSB7XHJcbiAgICAgIHZhciBfX3Jlc3VsdCA9IHRlbXBsYXRlLnJlcGxhY2UoL3soW157XSspP30vZywgZnVuY3Rpb24gKG0sIGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoa2V5LmluZGV4T2YoJzonKSA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19mbiA9IGtleS5zcGxpdCgnOicpOyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fZm5bMF0gID0gZ2V0VmFsdWUoX19mblswXSwgbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fZm5bMV0gID0gZ2V0VmFsdWUoX19mblsxXSwgbyk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2ZuWzBdKF9fZm5bMV0sIG8pOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHIgICA9IGdldFZhbHVlKGtleSwgbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgX19rID0gKGtleS5jb250YWlucygnLicpID8gJycgOiAnby4nKSArIGtleTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHIpID09ICdmdW5jdGlvbicpeyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcihvKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1lbHNleyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcjtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiAocikgPT0gJ2Z1bmN0aW9uJyA/IHIobykgOiByO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pOyAgICAgXHJcbiAgICAgIHJldHVybiBfX3Jlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaWxsVGVtcGxhdGUoZSwgc2NvcGUpIHtcclxuICAgICAgdmFyIF9yb290ID0gbW9kdWxlLiQoZSk7XHJcbiAgICAgIHZhciBfZWxlbWVudHMgPSBtb2R1bGUuJCgnW3hiaW5kXScsIF9yb290KTsgXHJcbiAgICAgIGlmIChfcm9vdC5hdHRyaWJ1dGVzLnhiaW5kKSBfZWxlbWVudHMucHVzaChfcm9vdCk7XHJcbiAgICAgIF9lbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIFN0cmluZy50cmltVmFsdWVzKGNoaWxkLmF0dHJpYnV0ZXMueGJpbmQudmFsdWUuc3BsaXQoJzsnKSkuZm9yRWFjaChmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICAgIGlmICh0b2tlbiA9PT0gJycpIHJldHVybjtcclxuICAgICAgICAgIHZhciBfdG9rZW5zID0gU3RyaW5nLnRyaW1WYWx1ZXModG9rZW4uc3BsaXQoJzonKSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICB2YXIgX3BhcmFtcyA9IFN0cmluZy50cmltVmFsdWVzKF90b2tlbnNbMV0uc3BsaXQoL1xcc3xcXCwvKSk7XHJcbiAgICAgICAgICB2YXIgX3ZhbHVlID0gZ2V0VmFsdWUoX3BhcmFtc1swXSwgc2NvcGUpO1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiAoX3ZhbHVlKSA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHZhciBfYXJncyA9IF9wYXJhbXMuc2xpY2UoMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIHApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8geGJpbmQ9XCJ0ZXh0Q29udGVudDpEYXRhLmZuVGVzdCBAT3RoZXIsQSw1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5wdXNoKHAuY2hhckF0KDApID09ICdAJyA/IGdldFZhbHVlKHAuc2xpY2UoMSksIHNjb3BlKSA6IHApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtzY29wZSwgY2hpbGRdKTtcclxuICAgICAgICAgICAgX3ZhbHVlID0gX3ZhbHVlLmFwcGx5KHNjb3BlLCBfYXJncyk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKF9wYXJhbXNbMV0pIHtcclxuICAgICAgICAgICAgdmFyIF9mdW5jID0gZ2V0VmFsdWUoX3BhcmFtc1sxXSwgc2NvcGUpO1xyXG4gICAgICAgICAgICBfdmFsdWUgPSBfZnVuYyhfdmFsdWUsIF9wYXJhbXNbMl0sIHNjb3BlLCBjaGlsZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjaGlsZFtfdG9rZW5zWzBdXSA9IF92YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGV4ZWN1dGVUZW1wbGF0ZShlLCB2YWx1ZXMsIGRvbSkge1xyXG4gICAgICB2YXIgX3RlbXBsYXRlID0gbW9kdWxlLiQoZSk7XHJcbiAgICAgIHZhciBfcmVzdWx0ICAgPSB2YWx1ZXMucmVkdWNlKCBmdW5jdGlvbihhLCB2LCBpKXtcclxuICAgICAgICB2YXIgX25vZGUgPSB7IGluZGV4IDogaSxcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEgIDogdixcclxuICAgICAgICAgICAgICAgICAgICAgIG5vZGUgIDogZmlsbFRlbXBsYXRlKF90ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSksIHYpIH07XHJcbiAgICAgICAgYS5ub2Rlcy5wdXNoKF9ub2RlKTtcclxuICAgICAgICBpZiAoIWRvbSkgYS5odG1sLnB1c2goX25vZGUubm9kZS5vdXRlckhUTUwucmVwbGFjZSgveGJpbmQ9XCJbXlwiXSpcIi9nLCAnJykpO1xyXG4gICAgICAgIHJldHVybiBhOyBcclxuICAgICAgfSwgeyBub2RlcyA6IFtdLCBodG1sIDogW10gfSk7XHJcbiAgICAgIHJldHVybiBkb20gPyBfcmVzdWx0Lm5vZGVzIDogX3Jlc3VsdC5odG1sLmpvaW4oJycpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBtb2R1bGUudGVtcGxhdGVzID0geyBnZXRWYWx1ZSAgOiBnZXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlICAgICA6IG1lcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZXhlY3V0ZSAgIDogZXhlY3V0ZVRlbXBsYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZmlsbCAgICAgIDogZmlsbFRlbXBsYXRlIH07XHJcblxyXG4gIH0oX21vZHVsZSkpO1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gQWpheFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24obW9kdWxlKXsgIFxyXG4gICAgbW9kdWxlLmFqYXggPSB7fTtcclxuICAgIG1vZHVsZS5hcHBseShtb2R1bGUuYWpheCwge1xyXG4gICAgICBnZXQgIDogZnVuY3Rpb24gKHVybCwgY2FsbEJhY2spIHtcclxuICAgICAgICB1cmwgKz0gKHVybC5jb250YWlucygnPycpID8gJyZtcz0nIDogJz9tcz0nKSArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciB4bWwgPSB0aGlzLmNyZWF0ZVhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeG1sLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeG1sLnNldFJlcXVlc3RIZWFkZXIoJ0lmLU1vZGlmaWVkLVNpbmNlJywgJ1RodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UJyk7XHJcbiAgICAgICAgeG1sLnNldFJlcXVlc3RIZWFkZXIoJ0NhY2hlLUNvbnRyb2wnLCAnbm8tY2FjaGUnKTtcclxuICAgICAgICB4bWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkgeyBpZiAoeG1sLnJlYWR5U3RhdGUgPT0gNCkgY2FsbEJhY2soeG1sLnJlc3BvbnNlVGV4dCkgfTtcclxuICAgICAgICB4bWwuc2VuZChudWxsKTtcclxuICAgICAgfSxcclxuICAgICAgcG9zdCA6IGZ1bmN0aW9uKHVybCwgcGFyYW1zLCBjYWxsQmFjaykgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHZhciB4bWwgPSB0aGlzLmNyZWF0ZVhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeG1sLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHsgaWYgKHhtbC5yZWFkeVN0YXRlID09IDQpIGNhbGxCYWNrKHhtbC5yZXNwb25zZVRleHQpIH07XHJcbiAgICAgICAgeG1sLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ6SVNPLTg4NTktMScpO1xyXG4gICAgICAgIHhtbC5zZW5kKHBhcmFtcyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNhbGxXZWJNZXRob2QgOiBmdW5jdGlvbih1cmwsIHBhcmFtcywgY2FsbEJhY2spIHtcclxuICAgICAgICB2YXIgeG1sID0gdGhpcy5jcmVhdGVYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhtbC5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcclxuICAgICAgICB4bWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXsgaWYgKHhtbC5yZWFkeVN0YXRlID09IDQpIGNhbGxCYWNrKHhtbC5yZXNwb25zZVRleHQpIH07XHJcbiAgICAgICAgeG1sLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICAgICAgeG1sLnNlbmQocGFyYW1zKTtcclxuICAgICAgfSxcclxuICAgICAgY3JlYXRlWE1MSHR0cFJlcXVlc3QgOiBmdW5jdGlvbigpeyByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7IH1cclxuICAgIH0pOyAgXHJcbiAgfShfbW9kdWxlKSk7IFxyXG4gICAgICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gVGFiYmx5XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbiAobW9kdWxlKXtcclxuICAgICAgXHJcbiAgICB2YXIgX19jb250ZXh0O1xyXG5cclxuICAgIGZ1bmN0aW9uIF9fRXhlY3V0ZUNvZGUoY29kZSl7XHJcblxyXG4gICAgICBfX2NvbnRleHQgPSB7IHNlY3Rpb25zIDogW10sIGdyb3VwcyA6IFtdLCBkZXRhaWxzIDogW119O1xyXG5cclxuICAgICAgdmFyIF9fY3VyO1xyXG4gICAgICB2YXIgX19mdW5jICAgICAgID0gJyc7XHJcbiAgICAgIHZhciBfX2Z1bmNCb2R5ICAgPSAnJztcclxuICAgICAgdmFyIF9fc2V0U3RhdGUgID0gZmFsc2U7XHJcblxyXG4gICAgICBmdW5jdGlvbiBfX2dldCh2YWx1ZSl7XHJcbiAgICAgICAgaWYodmFsdWUgJiYgdmFsdWUudHJpbSgpLnN0YXJ0c1dpdGgoJ0AnKSl7XHJcbiAgICAgICAgICByZXR1cm4gX19jb250ZXh0W3ZhbHVlLnRyaW0oKS5zcGxpdCgnQCcpWzFdLnRyaW0oKV0gfHwgJyc7XHJcbiAgICAgICAgfWVsc2UgaWYodmFsdWUpe1xyXG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnRyaW0oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9ICBcclxuXHJcbiAgICAgIGZ1bmN0aW9uIF9fcGFyc2VfcHJvcGVydGllcyh2YWx1ZSl7XHJcbiAgICAgICAgdmFyIF9fcmVnICAgPSAgLyhbYS16QS1aMC05X1xcLV0qKVxccyo6XFxzKignW14nXSonfFteXFxzXSopL2c7XHJcbiAgICAgICAgdmFyIF9fbyAgICAgPSB7fTtcclxuICAgICAgICB2YXIgX19tYXRjaCA9IF9fcmVnLmV4ZWModmFsdWUpO1xyXG4gICAgICAgIHdoaWxlIChfX21hdGNoICE9IG51bGwpIHtcclxuICAgICAgICAgIF9fb1tfX21hdGNoWzFdLnRyaW0oKV0gPSBfX2dldChfX21hdGNoWzJdLnRyaW0oKS5yZXBsYWNlKC9eJyhbXiddKiknJC9nLCAnJDEnKSk7XHJcbiAgICAgICAgICBfX21hdGNoID0gX19yZWcuZXhlYyh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfX29cclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gX19wYXJzZUxpbmUobCwgbyl7XHJcbiAgICAgICAgaWYoIV9fZnVuYyAmJiAhbC50cmltKCkpIHJldHVybiBmdW5jdGlvbigpe307XHJcbiAgICAgICAgdmFyIF9fa2V5cyA9IC9ERUZJTkV8I3xDUkVBVEV8U0VUfEZVTkNUSU9OfEVORC87XHJcbiAgICAgICAgaWYoX19rZXlzLnRlc3QobCkpe1xyXG4gICAgICAgICAgaWYoL14jLy50ZXN0KGwpKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICAgIH1lbHNlIGlmKC9eU0VUIChcXHcuKikvLnRlc3QobCkpeyAgXHJcbiAgICAgICAgICAgIHZhciBfX3Rva2VucyA9IGwubWF0Y2goL15TRVQgKFxcdy4qKSQvKTtcclxuICAgICAgICAgICAgX19zZXRTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIF9fZnVuYyAgICAgID0gX190b2tlbnNbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICBfX2Z1bmNCb2R5ICA9ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXt9O1xyXG4gICAgICAgICAgfWVsc2UgaWYoL15GVU5DVElPTiAoXFx3LiopLy50ZXN0KGwpKXsgIFxyXG4gICAgICAgICAgICB2YXIgX190b2tlbnMgPSBsLm1hdGNoKC9eRlVOQ1RJT04gKFxcdy4qKSQvKTtcclxuICAgICAgICAgICAgX19zZXRTdGF0ZSAgPSBmYWxzZTtcclxuICAgICAgICAgICAgX19mdW5jICAgICAgID0gX190b2tlbnNbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICBfX2Z1bmNCb2R5ICAgPSAnJztcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICAgIH1lbHNlIGlmKC9eRU5ELy50ZXN0KGwpKXsgICAgICBcclxuICAgICAgICAgICAgdmFyIF9fYm9keSA9IF9fZnVuY0JvZHk7XHJcbiAgICAgICAgICAgIHZhciBfX25hbWUgPSBfX2Z1bmM7XHJcbiAgICAgICAgICAgIF9fZnVuYyA9IF9fZnVuY0JvZHkgPSAnJzsgXHJcbiAgICAgICAgICAgIGlmKF9fc2V0U3RhdGUpe1xyXG4gICAgICAgICAgICAgIF9fc2V0U3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpeyBfX2N1cltfX25hbWVdID0gX19ib2R5LnRyaW0oKTsgfVxyXG4gICAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXsgY3R4W19fbmFtZV0gPSBuZXcgRnVuY3Rpb24oJ2N0eCcsIF9fYm9keSk7IH1cclxuICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgfWVsc2UgaWYoL15ERUZJTkVcXHNcXHMqKFxcdy4qKVxccyo9XFxzKiguKikkLy50ZXN0KGwpKXtcclxuICAgICAgICAgICAgdmFyIF9fdG9rZW5zID0gbC5tYXRjaCgvXkRFRklORVxcc1xccyooW2EtekEtWjAtOV9cXC1dKilcXHMqPVxccyooLiopJC8pO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgICAgICAgdmFyIHRva2VucyA9IF9fdG9rZW5zO1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpeyBjdHhbdG9rZW5zWzFdLnRyaW0oKV0gPSB0b2tlbnNbMl0udHJpbSgpOyB9XHJcbiAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgIH1lbHNlIGlmKC9eQ1JFQVRFXFxzXFxzKihcXHcqKSAoLiopJC8udGVzdChsKSl7XHJcbiAgICAgICAgICAgIHZhciBfX3Rva2VucyA9IGwubWF0Y2goL15DUkVBVEVcXHNcXHMqKFxcdyopICguKikkLyk7XHJcbiAgICAgICAgICAgIGlmKF9fdG9rZW5zWzFdPT0nc2VjdGlvbicpe1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyBcclxuICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBfX3Rva2VucztcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpeyBcclxuICAgICAgICAgICAgICAgICAgY3R4LnNlY3Rpb25zLnB1c2goX19wYXJzZV9wcm9wZXJ0aWVzKHRva2Vuc1syXSkpOyBcclxuICAgICAgICAgICAgICAgICAgX19jdXIgPSBjdHguc2VjdGlvbnNbY3R4LnNlY3Rpb25zLmxlbmd0aCAtIDFdO31cclxuICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihfX3Rva2Vuc1sxXT09J2dyb3VwJyl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IF9fdG9rZW5zO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7IFxyXG4gICAgICAgICAgICAgICAgICBjdHguZ3JvdXBzLnB1c2goX19wYXJzZV9wcm9wZXJ0aWVzKHRva2Vuc1syXSkpO1xyXG4gICAgICAgICAgICAgICAgICBfX2N1ciA9IGN0eC5ncm91cHNbY3R4Lmdyb3Vwcy5sZW5ndGggLSAxXTt9XHJcbiAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihfX3Rva2Vuc1sxXT09J2RldGFpbCcpe1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyBcclxuICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBfX3Rva2VucztcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpe1xyXG4gICAgICAgICAgICAgICAgICBjdHguZGV0YWlscy5wdXNoKF9fcGFyc2VfcHJvcGVydGllcyh0b2tlbnNbMl0pKTtcclxuICAgICAgICAgICAgICAgICAgX19jdXIgPSBjdHguZGV0YWlsc1tjdHguZGV0YWlscy5sZW5ndGggLSAxXTt9XHJcbiAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9ZWxzZXsgdGhyb3cgbmV3IEVycm9yKCdUYWJibHkgOiBVbnJlY29nbml6ZWQgdGV4dCBhZnRlciBERUZJTkUnKX0gIFxyXG4gICAgICAgIH1lbHNleyBcclxuICAgICAgICAgIGlmKF9fZnVuYyl7XHJcbiAgICAgICAgICAgIF9fZnVuY0JvZHkgKz0gbztcclxuICAgICAgICAgICAgX19mdW5jQm9keSArPSAnXFxuJztcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGFiYmx5IDogVW5yZWNvZ25pemVkIHRleHQnKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29kZS5zcGxpdCgnXFxuJykuZm9yRWFjaChmdW5jdGlvbihsKXsgXHJcbiAgICAgICAgX19wYXJzZUxpbmUobC50cmltKCksbCkoX19jb250ZXh0KTsgXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHsgY29udGV4dCA6IF9fY29udGV4dCB9O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb2R1bGUudGFiYmx5ID0geyBleGVjdXRlIDogX19FeGVjdXRlQ29kZSB9O1xyXG5cclxuICB9KF9tb2R1bGUpKTtcclxuICAgICAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFJlcG9ydHNcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUgICAgICAgICAgICAgICAgPSB7fTsgICAgICBcclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuZ2VuZXJhdGVSZXBvcnQgPSBmdW5jdGlvbihyZCwgZGF0YSwgbWVkaWF0b3Ipe1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuYmVnaW4nIH0pO1xyXG4gICAgICB2YXIgX19yZCAgICAgID0gcmQgfHwgbW9kdWxlLlJlcG9ydEVuZ2luZS5yZDtcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBUcmFuc2Zvcm1hciBsb3MgZGF0b3NcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICB2YXIgX19kYXRhU2V0ID0gX19yZC5jb250ZXh0LnBhcnNlRGF0YSA/IF9fcmQuY29udGV4dC5wYXJzZURhdGEoX19yZCwgZGF0YSwgbWVkaWF0b3IubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkYXRhO1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQubG9nLm1lc3NhZ2UnLCB0ZXh0IDogJ0luaWNpYWxpemFuZG8uLi4nIH0pO1xyXG4gICAgICBjb25zb2xlLnRpbWUoJ1JlbmRlcicpO1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEluaWNpYWxpemFyIGZ1bmNpb25lcyBwYXJhIGxhIGdlbmVyYWNpw7NuIGRlIGNvbnRlbmlkbyBwZXJzb25hbGl6YWRvXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19pbml0Q29udGVudFByb3ZpZGVycygpe1xyXG4gICAgICAgIFtfX3JkLmNvbnRleHQuc2VjdGlvbnMsIF9fcmQuY29udGV4dC5kZXRhaWxzLCBfX3JkLmNvbnRleHQuZ3JvdXBzXVxyXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24oYSxiKXsgcmV0dXJuIGEuY29uY2F0KGIpOyB9LCBbXSlcclxuICAgICAgICAubWFwKGZ1bmN0aW9uKHMpe1xyXG4gICAgICAgICAgaWYocy52YWx1ZVByb3ZpZGVyZm4pe1xyXG4gICAgICAgICAgICBzLnZhbHVlUHJvdmlkZXIgPSBtb2R1bGUudGVtcGxhdGVzLmdldFZhbHVlKHMudmFsdWVQcm92aWRlcmZuLCBzZWxmKTsgXHJcbiAgICAgICAgICAgIGRlbGV0ZSBzLnZhbHVlUHJvdmlkZXJmbjsgICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihzLmZvb3RlclZhbHVlUHJvdmlkZXJmbil7XHJcbiAgICAgICAgICAgIHMuZm9vdGVyVmFsdWVQcm92aWRlciA9IG1vZHVsZS50ZW1wbGF0ZXMuZ2V0VmFsdWUocy5mb290ZXJWYWx1ZVByb3ZpZGVyZm4sIHNlbGYpOyBcclxuICAgICAgICAgICAgZGVsZXRlIHMuZm9vdGVyVmFsdWVQcm92aWRlcmZuOyBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKHMuaGVhZGVyVmFsdWVQcm92aWRlcmZuKXtcclxuICAgICAgICAgICAgcy5oZWFkZXJWYWx1ZVByb3ZpZGVyID0gbW9kdWxlLnRlbXBsYXRlcy5nZXRWYWx1ZShzLmhlYWRlclZhbHVlUHJvdmlkZXJmbiwgc2VsZik7IFxyXG4gICAgICAgICAgICBkZWxldGUgcy5oZWFkZXJWYWx1ZVByb3ZpZGVyZm47XHJcbiAgICAgICAgICB9ICBcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gR2VuZXJhY2nDs24gZGUgbGFzIHNlY2Npb25lcyBkZSBjYWJlY2VyYSBkZSBsYXMgYWdydXBhY2lvbmVzXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICB2YXIgX19NRVJHRV9BTkRfU0VORCA9IGZ1bmN0aW9uKHQsIHAsIGZua2V5KXsgbWVkaWF0b3Iuc2VuZChtb2R1bGUudGVtcGxhdGVzLm1lcmdlKHQsIHAsIGZua2V5KSk7IH07XHJcbiAgICAgIGZ1bmN0aW9uIF9fZ3JvdXBzSGVhZGVycygpe1xyXG4gICAgICAgIF9fZ3JvdXBzLmZvckVhY2goZnVuY3Rpb24oZywgaWkpe1xyXG4gICAgICAgICAgaWYoaWkgPCBfX2JyZWFrSW5kZXgpIHJldHVybjsgXHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuc2VjdGlvbnMuZ3JvdXAuaGVhZGVyJywgdmFsdWUgOiBnLmlkIH0pOyAgXHJcbiAgICAgICAgICBpZihnLmRlZmluaXRpb24uaGVhZGVyKSByZXR1cm4gX19NRVJHRV9BTkRfU0VORChnLmRlZmluaXRpb24uaGVhZGVyLCBnLCAnY29tcGlsZWRfaGVhZGVyZm4nKTtcclxuICAgICAgICAgIGlmKGcuZGVmaW5pdGlvbi5oZWFkZXJWYWx1ZVByb3ZpZGVyKSByZXR1cm4gbWVkaWF0b3Iuc2VuZChnLmRlZmluaXRpb24uaGVhZGVyVmFsdWVQcm92aWRlcihnKSk7IFxyXG4gICAgICAgIH0pOyAgICBcclxuICAgICAgfVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gR2VuZXJhY2nDs24gZGUgbGFzIHNlY2Npb25lcyBkZSByZXN1bWVuIGRlIGxhcyBhZ3J1cGFjaW9uZXNcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9fZ3JvdXBzRm9vdGVycyhpbmRleCl7XHJcbiAgICAgICAgdmFyIF9fZ2cgPSBfX2dyb3Vwcy5tYXAoZnVuY3Rpb24oZyl7cmV0dXJuIGc7fSk7IFxyXG4gICAgICAgIGlmKGluZGV4KSBfX2dnLnNwbGljZSgwLCBpbmRleCk7XHJcbiAgICAgICAgX19nZy5yZXZlcnNlKCkuZm9yRWFjaCggZnVuY3Rpb24oZyl7XHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuc2VjdGlvbnMuZ3JvdXAuZm9vdGVyJywgdmFsdWUgOiBnLmlkIH0pOyAgICAgICAgICBcclxuICAgICAgICAgIGlmKGcuZGVmaW5pdGlvbi5mb290ZXIpIHJldHVybiBfX01FUkdFX0FORF9TRU5EKGcuZGVmaW5pdGlvbi5mb290ZXIsIGcsICdjb21waWxlZF9mb290ZXJmbicpO1xyXG4gICAgICAgICAgaWYoZy5kZWZpbml0aW9uLmZvb3RlclZhbHVlUHJvdmlkZXIpIHJldHVybiBtZWRpYXRvci5zZW5kKGcuZGVmaW5pdGlvbi5mb290ZXJWYWx1ZVByb3ZpZGVyKGcpKTtcclxuICAgICAgICB9KTsgXHJcbiAgICAgIH0gXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEdlbmVyYWNpw7NuIGRlIGxhcyBzZWNjaW9uZXMgZGUgZGV0YWxsZVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX2RldGFpbHNTZWN0aW9ucygpe1xyXG4gICAgICAgIF9fZGV0YWlscy5mb3JFYWNoKGZ1bmN0aW9uKGQpe1xyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnNlY3Rpb25zLmRldGFpbCcsIHZhbHVlIDogZC5pZCB9KTtcclxuICAgICAgICAgIGlmKGQudGVtcGxhdGUpIHJldHVybiBfX01FUkdFX0FORF9TRU5EKGQudGVtcGxhdGUsIGQsICdjb21waWxlZGZuJylcclxuICAgICAgICAgIGlmKGQudmFsdWVQcm92aWRlcikgcmV0dXJuIG1lZGlhdG9yLnNlbmQoZC52YWx1ZVByb3ZpZGVyKGQpKTtcclxuICAgICAgICB9KSAgICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEdlbmVyYWNpw7NuIGRlIGxhcyBzZWNjaW9uZXMgZGUgdG90YWwgZ2VuZXJhbFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX2dyYW5kVG90YWxTZWN0aW9ucygpe1xyXG4gICAgICAgIF9fdG90YWxzLmZvckVhY2goZnVuY3Rpb24odCl7XHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuc2VjdGlvbnMudG90YWwnLCB2YWx1ZSA6IHQuaWQgfSk7XHJcbiAgICAgICAgICBpZih0LnRlbXBsYXRlKSByZXR1cm4gX19NRVJHRV9BTkRfU0VORCh0LnRlbXBsYXRlLCB0LCAnY29tcGlsZWRmbicpXHJcbiAgICAgICAgICBpZih0LnZhbHVlUHJvdmlkZXIpIHJldHVybiBtZWRpYXRvci5zZW5kKHQudmFsdWVQcm92aWRlcih0KSk7XHJcbiAgICAgICAgfSkgICAgICAgICAgICBcclxuICAgICAgfSBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gR2VuZXJhY2nDs24gZGUgbGFzIHNlY2Npb25lcyBkZSBjYWJlY2VyYSBkZWwgaW5mb3JtZVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX3JlcG9ydEhlYWRlclNlY3Rpb25zKCl7XHJcbiAgICAgICAgX19oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odCl7XHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuc2VjdGlvbnMuaGVhZGVyJywgdmFsdWUgOiB0IH0pO1xyXG4gICAgICAgICAgaWYodC50ZW1wbGF0ZSkgcmV0dXJuIF9fTUVSR0VfQU5EX1NFTkQodC50ZW1wbGF0ZSwgdCwgJ2NvbXBpbGVkZm4nKVxyXG4gICAgICAgICAgaWYodC52YWx1ZVByb3ZpZGVyKSByZXR1cm4gbWVkaWF0b3Iuc2VuZCh0LnZhbHVlUHJvdmlkZXIodCkpO1xyXG4gICAgICAgIH0pICAgICAgICAgICAgXHJcbiAgICAgIH0gXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEluaWNpYWxpemFyIGVsIG9iamV0byBxdWUgc2lydmUgZGUgYWN1bXVsYWRvclxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX3Jlc29sdmVTdW1tYXJ5T2JqZWN0KCl7XHJcbiAgICAgICAgdmFyIF9fc3VtbWFyeSA9IEpTT04ucGFyc2UoX19yZC5jb250ZXh0LnN1bW1hcnkgfHwgJ3t9Jyk7XHJcbiAgICAgICAgaWYoX19yZC5jb250ZXh0Lm9uSW5pdFN1bW1hcnlPYmplY3QpIHJldHVybiBfX3JkLmNvbnRleHQub25Jbml0U3VtbWFyeU9iamVjdChfX3N1bW1hcnkpOyAgICAgIFxyXG4gICAgICAgIHJldHVybiBfX3N1bW1hcnk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBfX2JyZWFrSW5kZXggPSAtMTsgXHJcblxyXG4gICAgICB2YXIgX19zdW1tYXJ5ICAgID0gX19yZXNvbHZlU3VtbWFyeU9iamVjdCgpO1xyXG4gICAgICB2YXIgX19oZWFkZXJzICAgID0gKF9fcmQuY29udGV4dC5zZWN0aW9ucyB8fCBbXSkud2hlcmUoeyB0eXBlIDogJ2hlYWRlcicgfSk7XHJcbiAgICAgIHZhciBfX3RvdGFscyAgICAgPSAoX19yZC5jb250ZXh0LnNlY3Rpb25zIHx8IFtdKS53aGVyZSh7IHR5cGUgOiAndG90YWwnIH0pO1xyXG4gICAgICB2YXIgX19mb290ZXJzICAgID0gKF9fcmQuY29udGV4dC5zZWN0aW9ucyB8fCBbXSkud2hlcmUoeyB0eXBlIDogJ2Zvb3RlcicgfSk7XHJcbiAgICAgIHZhciBfX2RldGFpbHMgICAgPSBfX3JkLmNvbnRleHQuZGV0YWlscyB8fCBbXTtcclxuICAgICAgdmFyIF9fZ3JvdXBzICAgICA9IF9fcmQuY29udGV4dC5ncm91cHMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGcsIGkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAgbmFtZSAgICAgICA6ICdHJyArIChpKzEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmQgICAgICAgICA6IF9fcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uIDogZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgICAgOiAnJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhICAgICAgIDogbW9kdWxlLmNsb25lKF9fc3VtbWFyeSksICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdCA6IGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fayA9IHZhbHVlW3RoaXMuZGVmaW5pdGlvbi5rZXldLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX0d4ID0gc2VsZi5CU1t0aGlzLm5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LmFsbFtfX2tdID0gX19HeC5hbGxbX19rXSB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5hbGxbX19rXS5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5yZWNvcmRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX19yZXN1bWUgPT09IGZhbHNlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX19yZXN1bWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuY29weSh2YWx1ZSwgdGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9fcmVzdW1lID0gT2JqZWN0LmtleXModGhpcy5kYXRhKS5sZW5ndGggPiAwKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuY29weSh2YWx1ZSwgdGhpcy5kYXRhKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtICA6IGZ1bmN0aW9uKHZhbHVlKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2sgPSB2YWx1ZVt0aGlzLmRlZmluaXRpb24ua2V5XS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19HeCA9IHNlbGYuQlNbdGhpcy5uYW1lXTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3guYWxsW19fa10gPSBfX0d4LmFsbFtfX2tdIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LmFsbFtfX2tdLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LnJlY29yZENvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX19yZXN1bWUgPT09IGZhbHNlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuc3VtKHZhbHVlLCB0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0IDogZnVuY3Rpb24odmFsdWUpeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVbdGhpcy5kZWZpbml0aW9uLmtleV0gPT0gdGhpcy5jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSB8fCBbXTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBzZWxmLkJTID0geyByZXBvcnREZWZpbml0aW9uIDogX19yZCwgbWVkaWF0b3IgOiBtZWRpYXRvciB9OyAgICAgICAgICAgICAgXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gT3JkZW5hciBsb3MgZGF0b3NcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBpZihfX3JkLmNvbnRleHQuaXRlcmF0ZWZuKXtcclxuICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQubG9nLm1lc3NhZ2UnLCB0ZXh0IDogJ0luaWNpYWxpemFuZG8gZWxlbWVudG9zLi4uJyB9KTtcclxuICAgICAgICBfX2RhdGFTZXQuZm9yRWFjaChfX3JkLmNvbnRleHQuaXRlcmF0ZWZuKTtcclxuICAgICAgfVxyXG4gICAgICBpZihfX3JkLmNvbnRleHQub3JkZXJCeSl7XHJcbiAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmxvZy5tZXNzYWdlJywgdGV4dCA6ICdPcmRlbmFuZG8gZGF0b3MuLi4nIH0pO1xyXG4gICAgICAgIF9fZGF0YVNldC5zb3J0QnkoX19yZC5jb250ZXh0Lm9yZGVyQnksIGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEluaWNpYWxpemFyXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgc2VsZi5CUyA9IHsgcmVjb3JkQ291bnQgICAgICA6IDAsIFxyXG4gICAgICAgICAgICAgICAgICBHMCAgICAgICAgICAgICAgIDogbW9kdWxlLmNsb25lKF9fc3VtbWFyeSksXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFTZXQgICAgICAgICAgOiBfX2RhdGFTZXQsXHJcbiAgICAgICAgICAgICAgICAgIHJlcG9ydERlZmluaXRpb24gOiBfX3JkLCBcclxuICAgICAgICAgICAgICAgICAgbWVkaWF0b3IgICAgICAgICA6IG1lZGlhdG9yIH07XHJcbiAgICAgIF9fZ3JvdXBzLmZvckVhY2goIGZ1bmN0aW9uKGcsIGkpeyAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBnLmN1cnJlbnQgPSAoX19kYXRhU2V0ICYmIF9fZGF0YVNldFswXSkgPyBfX2RhdGFTZXRbMF1bZy5kZWZpbml0aW9uLmtleV0gOiAnJztcclxuICAgICAgICBzZWxmLkJTW2cubmFtZV0gPSB7IHJlY29yZENvdW50IDogMCwgYWxsIDoge30gfTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmKF9fcmQuY29udGV4dC5vblN0YXJ0Zm4pIF9fcmQuY29udGV4dC5vblN0YXJ0Zm4oc2VsZi5CUyk7XHJcbiAgICAgIF9faW5pdENvbnRlbnRQcm92aWRlcnMoKTtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnJlbmRlci5yb3dzJyB9KTtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmxvZy5tZXNzYWdlJywgdGV4dCA6ICdHZW5lcmFuZG8gaW5mb3JtZS4uLicgfSk7XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBDYWJlY2VyYXMgZGVsIGluZm9ybWVcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIF9fcmVwb3J0SGVhZGVyU2VjdGlvbnMoKTtcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIENhYmVjZXJhcyBpbmljaWFsZXNcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGlmKF9fZGF0YVNldC5sZW5ndGggPiAwKSBfX2dyb3Vwc0hlYWRlcnMoKTsgXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBJdGVyYXIgc29icmUgbG9zIGVsZW1lbnRvc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgX19kYXRhU2V0LmZvckVhY2goZnVuY3Rpb24ociwgaSl7IFxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBQcm9jZXNhciBlbCBlbGVtZW50b1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgICAgICBcclxuICAgICAgICBzZWxmLkJTLnJlY29yZENvdW50Kys7XHJcbiAgICAgICAgc2VsZi5CUy5pc0xhc3RSb3cgICAgICAgID0gX19kYXRhU2V0Lmxlbmd0aCA9PT0gc2VsZi5CUy5yZWNvcmRDb3VudDtcclxuICAgICAgICBzZWxmLkJTLmlzTGFzdFJvd0luR3JvdXAgPSBzZWxmLkJTLmlzTGFzdFJvdztcclxuICAgICAgICBzZWxmLkJTLnBlcmNlbnQgICAgICA9IChzZWxmLkJTLnJlY29yZENvdW50L19fZGF0YVNldC5sZW5ndGgpICogMTAwOyAgXHJcbiAgICAgICAgc2VsZi5CUy5wcmV2aW91cyAgICAgPSBzZWxmLkJTLmRhdGEgfHwgcjtcclxuICAgICAgICBzZWxmLkJTLmRhdGEgICAgICAgICA9IHI7IFxyXG4gICAgICAgIF9fZ3JvdXBzLmZvckVhY2goIGZ1bmN0aW9uKGcsIGkpeyBcclxuICAgICAgICAgIHNlbGYuQlNbZy5uYW1lXS5kYXRhICA9IE9iamVjdC5jcmVhdGUoZy5kYXRhKTtcclxuICAgICAgICB9KTsgXHJcbiAgICAgICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5zdW0ociwgc2VsZi5CUy5HMCk7ICAgICAgICBcclxuICAgICAgICBpZihfX3JkLmNvbnRleHQub25Sb3dmbikgX19yZC5jb250ZXh0Lm9uUm93Zm4oc2VsZi5CUyk7XHJcbiAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgIDogJ3JlcG9ydC5yZW5kZXIucm93JywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgIDogc2VsZi5CUy5wZXJjZW50LnRvRml4ZWQoMSkgKyAnICUnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgOiBzZWxmLkJTLnBlcmNlbnQgfSk7XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIERldGVybWluYXIgc2kgaGF5IGNhbWJpbyBlbiBhbGd1bmEgZGUgbGFzIGNsYXZlcyBkZSBhZ3J1cGFjacOzblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBpZihfX2dyb3Vwcy5ldmVyeSggZnVuY3Rpb24oZyl7IHJldHVybiBnLnRlc3QocikgfSkpe1xyXG4gICAgICAgICAgX19ncm91cHMuZm9yRWFjaCggZnVuY3Rpb24oZyl7IGcuc3VtKHIpOyB9KTsgICAgICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIF9fZ3JvdXBzLnNvbWUoIGZ1bmN0aW9uKGcsIGkpeyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCFnLnRlc3Qocikpe1xyXG4gICAgICAgICAgICAgIF9fYnJlYWtJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAvLyBQaWVzIGRlIGdydXBvIGRlIGxvcyBxdWUgaGFuIGNhbWJpYWRvXHJcbiAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICBfX2dyb3Vwc0Zvb3RlcnMoX19icmVha0luZGV4KTtcclxuICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgIC8vIEFjdHVhbGl6YXIgbG9zIGdydXBvc1xyXG4gICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgX19ncm91cHMuZm9yRWFjaCggZnVuY3Rpb24oZ3J1cG8sIGlpKXsgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGlpID49IF9fYnJlYWtJbmRleCl7XHJcbiAgICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgLy8gSW5pY2lhbGl6YXIgbG9zIHF1ZSBoYW4gY2FtYmlhZG9cclxuICAgICAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICBncnVwby5pbml0KHIpXHJcbiAgICAgICAgICAgICAgICAgIF9fYnJlYWtJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAvLyBBY3VtdWxhciB2YWxvcmVzIGRlIGxvcyBxdWUgc2lndWVuIGlndWFsXHJcbiAgICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgZ3J1cG8uc3VtKHIpO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIC8vIE5vdGlmaWNhciBkZWwgZXZlbnRvIG9uR3JvdXBDaGFuZ2VcclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICBfX2dyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uKGcpe1xyXG4gICAgICAgICAgICBnLmN1cnJlbnQgPSByW2cuZGVmaW5pdGlvbi5rZXldO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZihfX3JkLmNvbnRleHQub25Hcm91cENoYW5nZWZuKSBfX3JkLmNvbnRleHQub25Hcm91cENoYW5nZWZuKHNlbGYuQlMpOyAgICAgICAgICBcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlICA6ICdyZXBvcnQuc2VjdGlvbnMuZ3JvdXAuY2hhbmdlJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgOiAnX19ncm91cHMnIH0pO1xyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgLy8gQ2FiZWNlcmFzXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICBfX2dyb3Vwc0hlYWRlcnMoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBEZXRlcm1pbmFyIHNpIGVzdGUgZXMgZWwgw7psdGltbyBlbGVtZW50byBkZSBsYSBhZ3J1cGFjacOzbiBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT07XHJcbiAgICAgICAgaWYoX19ncm91cHMubGVuZ3RoICYmICFzZWxmLkJTLmlzTGFzdFJvdyApe1xyXG4gICAgICAgICAgdmFyIF9fbmV4dCAgICAgICAgICAgICAgID0gX19kYXRhU2V0W3NlbGYuQlMucmVjb3JkQ291bnRdOyAgICAgICAgICBcclxuICAgICAgICAgIHNlbGYuQlMuaXNMYXN0Um93SW5Hcm91cCA9ICEgX19ncm91cHMuZXZlcnkoIGZ1bmN0aW9uKGcpe1xyXG4gICAgICAgICAgICB2YXIgX19rID0gZy5kZWZpbml0aW9uLmtleTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fbmV4dFtfX2tdID09PSBzZWxmLkJTLmRhdGFbX19rXTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBTZWNjaW9uZXMgZGUgZGV0YWxsZVxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIF9fZGV0YWlsc1NlY3Rpb25zKCkgICAgICAgICAgICBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZihfX2RhdGFTZXQubGVuZ3RoID4gMCl7IFxyXG4gICAgICAgIHNlbGYuQlMucHJldmlvdXMgPSBzZWxmLkJTLmRhdGE7XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBQaWVzIGRlIGdydXBvXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBfX2dyb3Vwc0Zvb3RlcnMoKTtcclxuICAgICAgfVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gVG90YWwgZ2VuZXJhbFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgX19ncmFuZFRvdGFsU2VjdGlvbnMoKTtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnJlbmRlci5lbmQnIH0pO1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuZW5kJyB9KTtcclxuICAgICAgbWVkaWF0b3IuZmx1c2goKTtcclxuICAgICAgY29uc29sZS50aW1lRW5kKCdSZW5kZXInKTtcclxuICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5jb3B5ICAgID0gZnVuY3Rpb24ocywgZCl7IE9iamVjdC5rZXlzKGQpLm1hcChmdW5jdGlvbihrKXsgZFtrXSA9IHNba107fSk7fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5zdW0gICAgID0gZnVuY3Rpb24ocywgZCl7IE9iamVjdC5rZXlzKGQpLm1hcChmdW5jdGlvbihrKXsgZFtrXSArPSBzW2tdO30pO30gICBcclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuY29tcHV0ZSA9IGZ1bmN0aW9uKGRzLCBuYW1lKXsgcmV0dXJuIGRzLnJlZHVjZSggZnVuY3Rpb24odCwgbyl7IHJldHVybiB0ICsgb1tuYW1lXTsgfSwgMC4wKTsgfVxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5ncm91cCAgID0gZnVuY3Rpb24oYSwgYyl7XHJcblx0ICAgIHZhciBkcyA9IGE7XHJcblx0ICAgIHZhciBfX2YgPSBmdW5jdGlvbihrLCB0KXtcclxuXHQgICAgICBkcy5kaXN0aW5jdCggZnVuY3Rpb24odil7IHJldHVybiB2W2tdOyB9KVx0ICAgICAgICAgICAgXHJcblx0ICAgICAgICAuZm9yRWFjaCAoIGZ1bmN0aW9uKHYpeyBjW3ZdID0gZHMucmVkdWNlKCBmdW5jdGlvbihwLCBjLCBpLCBhKXsgcmV0dXJuIChjW2tdPT12KSA/IHAgKyBjW3RdIDogcDsgfSwgMC4wKTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIF9fZjtcdCAgICAgICAgICAgXHJcblx0ICAgIH1cclxuXHQgICAgcmV0dXJuIF9fZjtcclxuICAgIH1cclxuIFxyXG4gIH0pKF9tb2R1bGUpO1xyXG5cclxufShfX21vZHVsZSwgJ1BvbCcpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9fbW9kdWxlLlBvbDsiLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGAgIFxyXG48ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyIHczLW1hcmdpbi1ib3R0b21cIj5cclxuICA8aDE+U29icmUgTm90YXMgQXBwPC9oMT5cclxuICA8cCBzdHlsZT1cInRleHQtaW5kZW50OjFlbTtcIj5cclxuICAgIE5vdGFzIEFwcCBlcyB1bmEgcHJ1ZWJhIGRlIGNvbmNlcHRvIGRlIGxvIHF1ZSBwb2Ryw61hIHNlciB1biA8c3BhbiBjbGFzcz1cInczLWJvbGQgdzMtaXRhbGljXCI+ZnJhbWV3b3JrPC9zcGFuPiBcclxuICAgIHNlbmNpbGxvIGNvbiBlbCBjdWFsIGRlc2Fycm9sbGFyIGFwbGljYWNpb25lcyA8c3BhbiBjbGFzcz1cInczLWJvbGQgdzMtaXRhbGljXCI+U1BBPC9zcGFuPiBiYXNhZGFzIMO6bmljYW1lbnRlIGVuIDxzcGFuIGNsYXNzPVwidzMtYm9sZFwiPkhUTUw1PC9zcGFuPiB5IDxzcGFuIGNsYXNzPVwidzMtYm9sZFwiPkphdmFTY3JpcHQ8L3NwYW4+LlxyXG4gIDwvcD5cclxuICA8cCBzdHlsZT1cInRleHQtaW5kZW50OjFlbTtcIj5cclxuICAgIEVzdGFzIGFwbGljYWNpb25lcyBzZXLDrWFuIHN1YmNlcHRpYmxlcyBkZSBzZXIgaW5zdGFsYWRhcyBlbiBkaXNwb3NpdGl2b3MgbcOzdmlsZXMgY29tbyB1bmEgPHNwYW4gY2xhc3M9XCJ3My1ib2xkIHczLWl0YWxpY1wiPlBXQTwvc3Bhbj4uXHJcbiAgPC9wPlxyXG4gIDx1bCBjbGFzcz1cInczLXVsIHczLWJvcmRlclwiPlxyXG4gICAgPGxpPjxoMj5SZWZlcmVuY2lhczwvaDI+PC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9lcy53aWtpcGVkaWEub3JnL3dpa2kvU2luZ2xlLXBhZ2VfYXBwbGljYXRpb25cIiB0YXJnZXQ9XCJfYmxhbmtcIj5TUEEgKFNpbmdsZS1wYWdlIGFwcGxpY2F0aW9uKTwvYT48L2xpPlxyXG4gICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2VzLndpa2lwZWRpYS5vcmcvd2lraS9Qcm9ncmVzc2l2ZV9XZWJfQXBwc1wiIHRhcmdldD1cIl9ibGFua1wiPlBXQSAoUHJvZ3Jlc3NpdmUgV2ViIEFwcHMpPC9hPjwvbGk+XHJcbiAgPC91bD5cclxuICA8cCBzdHlsZT1cInRleHQtaW5kZW50OjFlbTtcIj5cclxuICAgIFBhcmEgZWwgZGVzYXJyb2xsbyBkZSBlc3RhIGFwbGljYWNpw7NuIG5vIHNlIGhhbiB1dGlsaXphZG8gbmluZ3VubyBkZSBsb3MgPHNwYW4gY2xhc3M9XCJ3My1ib2xkIHczLWl0YWxpY1wiPmZyYW1ld29ya3M8L3NwYW4+IGV4aXN0ZW50ZXMgY29tbyBwdWVkZW4gc2VyIEFuZ3VsYXIsIFJlYWN0IG8gVnVlLmpzLlxyXG4gIDwvcD5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWJvdHRvbSB3My1jZW50ZXJcIj5cclxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBhYm91dC1idG4tYmFjayBjbGFzcz1cInczLWJ1dHRvbiB3My1ibGFja1wiPlZvbHZlcjwvYnV0dG9uPlxyXG48L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcblxyXG4gIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ2RpdicsIF9fdGVtcGxhdGUpO1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignW2Fib3V0LWJ0bi1iYWNrXScpXHJcbiAgICAgICAgICAgICAgIC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIGhpc3RvcnkuYmFjaygpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGAgIFxyXG4gIDxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtY2VudGVyXCIgc3R5bGU9XCJwYWRkaW5nLXRvcDo2MHB4O1wiPlxyXG4gICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWcvbG9nby5wbmdcIiBhbHQ9XCJDYXJcIiBzdHlsZT1cIndpZHRoOiAzMDBweFwiPlxyXG4gICAgPHA+TGEgYXBwIHF1ZSB0ZSBwZXJtaXRlIGFsbWFjZW5hciB0b2RhcyB0dXMgbm90YXMgZW4gZWwgbcOzdmlsISEhPC9wPlxyXG4gIDwvZGl2PmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG5cclxuICBsZXQgY29tcG9uZW50ID0ge1xyXG4gICAgcm9vdCAgIDoge30sXHJcbiAgICBpbml0ICAgOiBmdW5jdGlvbihjb250YWluZXIpeyB9LFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgdGhpcy5yb290ID0gcG9sLmJ1aWxkKCdkaXYnLCBfX3RlbXBsYXRlKS5maXJzdEVsZW1lbnRDaGlsZCA7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvb3Q7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIC8vPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYnRuLXRlc3QgY2xhc3M9XCJ3My1idXR0b24gdzMtYmxhY2tcIj5odG1sPC9idXR0b24+XHJcbiAgICAgIC8vbGV0IGJ0biA9IHBvbC4kKCdbYnRuLXRlc3RdJywgY29udGFpbmVyKVswXTtcclxuICAgICAgLy9idG4ub25jbGljayA9IG9uVGVzdEJ1dHRvbkNsaWNrO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIEZpbGxUZW1wbGF0ZVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGZ1bmN0aW9uIG9uVGVzdEJ1dHRvbkNsaWNrX2ZpbGwobW91c2VFdmVudCl7XHJcbiAgICBsZXQgdGVtcGxhdGUgPSBwb2wuYnVpbGQoJ2RpdicsICc8aDMgeGJpbmQ9XCJpZDppZDtpbm5lckhUTUw6bm9tYnJlO29uY2xpY2s6X19jbGlja1wiPjwvaDM+JylcclxuICAgICAgICAgICAgICAgICAgICAgIC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGxldCByID0gcG9sLnRlbXBsYXRlcy5maWxsKFxyXG4gICAgICAgICAgICAgIHRlbXBsYXRlLCBcclxuICAgICAgICAgICAgICB7IGlkIDogNTU1LCBcclxuICAgICAgICAgICAgICAgIG5vbWJyZSA6ICdyYWZhJyxcclxuICAgICAgICAgICAgICAgIF9fY2xpY2sgOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH19KTtcclxuXHJcbiAgICBjb21wb25lbnQucm9vdC5hcHBlbmRDaGlsZChyKTtcclxuICB9XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIEV4ZWN1dGVUZW1wbGF0ZVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGZ1bmN0aW9uIG9uVGVzdEJ1dHRvbkNsaWNrKG1vdXNlRXZlbnQpe1xyXG4gICAgbGV0IHRlbXBsYXRlID0gcG9sLmJ1aWxkKCdkaXYnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGgzIHhiaW5kPVwiaWQ6aWQ7aW5uZXJIVE1MOm5vbWJyZTtcIj48L2gzPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBsZXQgaW5uZXJIdG1sID0gcG9sLnRlbXBsYXRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgIC5leGVjdXRlKHRlbXBsYXRlLCBbeyBpZCA6IDU1NSwgbm9tYnJlIDogJ3JhZmEnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaWQgOiA0NDQsIG5vbWJyZSA6ICdyYWZhIDQ0NCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpZCA6IDMzMywgbm9tYnJlIDogJ3JhZmEgMzMzJ31dKTtcclxuICAgIHBvbC50ZW1wbGF0ZXNcclxuICAgICAgIC5leGVjdXRlKHRlbXBsYXRlLFxyXG4gICAgICAgICAgICAgICAgW3sgaWQgOiA1NTUsIG5vbWJyZSA6ICdyYWZhJ30sXHJcbiAgICAgICAgICAgICAgICAgeyBpZCA6IDQ0NCwgbm9tYnJlIDogJ3JhZmEgNDQ0J30sXHJcbiAgICAgICAgICAgICAgICAgeyBpZCA6IDMzMywgbm9tYnJlIDogJ3JhZmEgMzMzJ31dLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICApXHJcbiAgICAgIC5tYXAoIGUgPT4gZS5ub2RlIClcclxuICAgICAgLmZvckVhY2goIG5vZGUgPT4gY29tcG9uZW50LnJvb3QuYXBwZW5kQ2hpbGQobm9kZSkgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcblxyXG59XHJcbiIsIu+7v2ltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhXCI7XHJcbmltcG9ydCBEYldyYXBwZXJTZXJ2aWNlIGZyb20gXCIuLi9saWIvZGJXcmFwcGVyLnNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IE5PVEFTX0RBVEFCQVNFICAgPSAnbm90YXMtYXBwLmRiJzsgXHJcbmNvbnN0IE5PVEFTX1RBQkxFX05BTUUgPSAnbm90YXMnO1xyXG5cclxuY29uc3QgVEVNUExBVEUgPSBgXHJcbjxkaXYgbm90YXMtY29udGFpbmVyIHN0eWxlPVwicGFkZGluZzowOyBtYXJnaW4tYm90dG9tOjQzcHg7XCI+PC9kaXY+XHJcbjxidXR0b24gYnRuLWFkZC1ub3RlIG9uLWNsaWNrPVwiYWRkTm90ZVwiIGNsYXNzPVwidzMtYnV0dG9uIHczLWJsYWNrIHczLWNpcmNsZVwiPu+8izwvYnV0dG9uPmA7XHJcblxyXG5jb25zdCBfX0lURU1fVEVNUExBVEUgPWBcclxuPGRpdiBjbGFzcz1cInczLWJvcmRlci1ib3R0b21cIiBzdHlsZT1cInBhZGRpbmc6MDsgZm9udC1zaXplOjE0cHg7XCIgaWQ9XCJub3RlLXtub3RlLmtleX1cIj5cclxuICA8ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyXCIgc3R5bGU9XCJwYWRkaW5nOjVweFwiPlxyXG4gICAgPGRpdiBvbi1jbGljaz1cImV4cGFuZENvbGxhcHNlXCI+PGI+e25vdGUudGl0bGV9PC9iPjxpIGNsYXNzPVwidzMtcmlnaHQgdzMtbGFyZ2UgZmEgZmEtY2FyZXQtZG93blwiPjwvaT48L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7cGFkZGluZzowIDRweFwiPlxyXG4gICAgPHAgY2xhc3M9XCJcIiBzdHlsZT1cInBhZGRpbmc6MnB4O21pbi1oZWlnaHQ6NGVtO21hcmdpbjoycHggMDt3aGl0ZS1zcGFjZTogcHJlLXdyYXBcIj57Zm9ybWF0VGV4dDpub3RlLnRleHR9PC9wPlxyXG4gICAgPGRpdiBjbGFzcz1cInczLWJhciB3My1jZW50ZXJcIiBzdHlsZT1cInBhZGRpbmc6NHB4IDA7XCI+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZGVsZXRlLXtub3RlLmtleX1cIiBvbi1jbGljaz1cImRlbGV0ZU5vdGVcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1ib3JkZXJcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImluZm8te25vdGUua2V5fVwiICBvbi1jbGljaz1cInNob3dJbmZvXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtYm9yZGVyXCI+PGkgY2xhc3M9XCJmYSBmYS1pbmZvXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImVkaXQte25vdGUua2V5fVwiICBvbi1jbGljaz1cImVkaXROb3RlXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtYm9yZGVyXCI+PGkgY2xhc3M9XCJmYSBmYS1lZGl0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjdHgpe1xyXG4gICAgXHJcbiAgbGV0IGRiO1xyXG4gIGxldCByb3dzID0gW107XHJcbiAgbGV0IGl0ZW1zQ29udGFpbmVyO1xyXG4gIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ2RpdicsIFRFTVBMQVRFKTtcclxuICAgICAgaXRlbXNDb250YWluZXIgPSB0aGlzLnJvb3QuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvb3Q7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIGluaXRBbGwoKTsgIFxyXG4gICAgfSxcclxuICAgIGV2ZW50SGFuZGxlcnMgOiB7IFxyXG4gICAgICBhZGROb3RlICAgICAgICA6IGFkZE5vdGUsXHJcbiAgICAgIGRlbGV0ZU5vdGUgICAgIDogZGVsZXRlTm90ZSxcclxuICAgICAgZXhwYW5kQ29sbGFwc2UgOiBleHBhbmRDb2xsYXBzZSxcclxuICAgICAgc2hvd0luZm8gICAgICAgOiBzaG93Tm90ZUluZm8sXHJcbiAgICAgIGVkaXROb3RlICAgICAgIDogZWRpdE5vdGVcclxuICAgIH0gXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdEFsbCgpIHtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPcGVuIGRhdGFiYXNlXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgZGIgPSBuZXcgRGJXcmFwcGVyU2VydmljZShOT1RBU19EQVRBQkFTRSk7XHJcbiAgICBkYi5vcGVuRGIoKVxyXG4gICAgICAudGhlbiggZGIgPT4ge1xyXG4gICAgICAgIGxvYWREYXRhKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIGFkZEV2ZW50TGlzdGVuZXJcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBhZGRFdmVudExpc3RlbmVycyhjb21wb25lbnQucm9vdCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycyhjb250YWluZXIpIHtcclxuICAgIFsnW29uLWNsaWNrXSddLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICBwb2wudG9BcnJheShjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChldmVudCkpXHJcbiAgICAgICAgICAuZm9yRWFjaCggZSA9PiB7XHJcbiAgICAgICAgICAgIGUub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBuYW1lID0gZS5hdHRyaWJ1dGVzWydvbi1jbGljayddLnZhbHVlO1xyXG4gICAgICAgICAgICAgIGNvbXBvbmVudC5ldmVudEhhbmRsZXJzW25hbWVdKGUsIGV2ZW50KTtcclxuICAgICAgICAgICAgfTsgICAgICAgIFxyXG4gICAgICAgICAgfSk7IFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGxvYWREYXRhKCkge1xyXG4gICAgZGIucmVhZEFsbChOT1RBU19UQUJMRV9OQU1FKVxyXG4gICAgICAudGhlbiggdmFsdWVzID0+IHtcclxuICAgICAgICByb3dzID0gdmFsdWVzLnJldmVyc2UoKTtcclxuICAgICAgICByZW5kZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICBpdGVtc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIHJvd3MubWFwKCBub3RlID0+IHtcclxuICAgICAgICAgIGxldCBfX2JhZyA9IHtcclxuICAgICAgICAgICAgbm90ZSxcclxuICAgICAgICAgICAgZm9ybWF0VGV4dDogZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHJldHVybiBwb2wuYnVpbGQoJ2RpdicsIF9fSVRFTV9URU1QTEFURS5mb3JtYXQoX19iYWcpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm1hcCggZSA9PiBlLmZpcnN0RWxlbWVudENoaWxkIClcclxuICAgICAgICAuZm9yRWFjaCggZSA9PiB7XHJcbiAgICAgICAgICBpdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlKTtcclxuICAgICAgICB9KTtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBhZGRFdmVudExpc3RlbmVyXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoaXRlbXNDb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlTm90ZSh0YXJnZXQsIG1vdXNlRXZlbnQpe1xyXG4gICAgbGV0IF9faWQgICAgICA9IHBhcnNlSW50KHRhcmdldC5pZC5zcGxpdCgnLScpWzFdKTtcclxuICAgIGxldCBfX3BheWxvYWQgPSByb3dzLndoZXJlKHsga2V5IDogX19pZCB9KVswXTtcclxuICAgIGxldCBfX2VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZS17MH0nLmZvcm1hdChfX2lkKSk7XHJcbiAgICBcclxuICAgIGRiLmRlbGV0ZShOT1RBU19UQUJMRV9OQU1FLCBfX2lkKVxyXG4gICAgICAudGhlbiggKCkgPT4ge1xyXG4gICAgICAgIHJvd3MucmVtb3ZlKF9fcGF5bG9hZCk7XHJcbiAgICAgICAgX19lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX19lbGVtZW50KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCBlID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgfSk7ICAgICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBleHBhbmRDb2xsYXBzZSh0YXJnZXQsIG1vdXNlRXZlbnQpIHtcclxuICAgIGxldCBfX3N0eWxlID0gdGFyZ2V0LnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlO1xyXG4gICAgaWYoX19zdHlsZS5kaXNwbGF5ID09ICdub25lJyl7XHJcbiAgICAgIF9fc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNhcmV0LWRvd24nKTtcclxuICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QuYWRkKCdmYS1jYXJldC11cCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX19zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNhcmV0LXVwJyk7XHJcbiAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuY2xhc3NMaXN0LmFkZCgnZmEtY2FyZXQtZG93bicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkTm90ZSh0YXJnZXQsIG1vdXNlRXZlbnQpIHtcclxuICAgIGN0eC5yb3V0ZXIubmF2aWdhdGVUbygnYWRkJyk7XHJcbiAgfSAgXHJcblxyXG4gIGZ1bmN0aW9uIHNob3dOb3RlSW5mbyh0YXJnZXQsIG1vdXNlRXZlbnQpIHtcclxuICAgIGFsZXJ0KHRhcmdldC5pZCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlZGl0Tm90ZSh0YXJnZXQsIG1vdXNlRXZlbnQpIHtcclxuICAgIGN0eC5yb3V0ZXIubmF2aWdhdGVUbygnYWRkOicgKyB0YXJnZXQuaWQuc3BsaXQoJy0nKVsxXSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG5cclxufVxyXG5cclxuIiwi77u/aW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuaW1wb3J0IERiV3JhcHBlclNlcnZpY2UgZnJvbSBcIi4uL2xpYi9kYldyYXBwZXIuc2VydmljZVwiO1xyXG5cclxuY29uc3QgTk9UQVNfREFUQUJBU0UgICA9ICdub3Rhcy1hcHAuZGInOyBcclxuY29uc3QgTk9UQVNfVEFCTEVfTkFNRSA9ICdub3Rhcyc7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYCAgXHJcbjxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWJvdHRvbVwiPlxyXG4gIDxoMj5OdWV2YSBub3RhPC9oMj5cclxuICA8Zm9ybSBjbGFzcz1cInczLW1hcmdpbi1ib3R0b21cIj5cclxuICAgIDxsYWJlbCBmb3I9XCJ0eHQtdGl0bGVcIj5Uw610dWxvPC9sYWJlbD5cclxuICAgIDxpbnB1dCBjbGFzcz1cInczLWlucHV0IHczLWJvcmRlclwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0eHQtdGl0bGVcIiBwbGFjZWhvbGRlcj1cIkludHJvZHVjZSB1biB0w610dWxvXCIgPlxyXG4gICAgPGxhYmVsIGZvcj1cInR4dC10ZXh0XCI+VGV4dG88L2xhYmVsPlxyXG4gICAgPHRleHRhcmVhIGNsYXNzPVwidzMtaW5wdXQgdzMtYm9yZGVyXCIgaWQ9XCJ0eHQtdGV4dFwiIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCJDb250ZW5pZG8gZGUgbGEgbm90YVwiPjwvdGV4dGFyZWE+XHJcbiAgPC9mb3JtPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lciB3My1tYXJnaW4tYm90dG9tIHczLWNlbnRlclwiPlxyXG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiYnRuLWdyYWJhclwiIGNsYXNzPVwidzMtYnV0dG9uIHczLWJsYWNrXCI+R3JhYmFyPC9idXR0b24+XHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY3R4KXtcclxuICBcclxuICBsZXQgZGI7XHJcbiAgbGV0IGNvbXBvbmVudCA9IHtcclxuICAgIHJvb3QgICA6IHt9LFxyXG4gICAgaW5pdCAgIDogZnVuY3Rpb24oY29udGFpbmVyKXsgfSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIHRoaXMucm9vdCA9IHBvbC5idWlsZCgnZGl2JywgX190ZW1wbGF0ZSk7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvb3Q7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIGluaXRBbGwoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBpbml0QWxsKCkge1xyXG4gICAgbGV0IF9fY29udGFpbmVyID0gY29tcG9uZW50LnJvb3QuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBfX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9wZW4gZGF0YWJhc2VcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBkYiA9IG5ldyBEYldyYXBwZXJTZXJ2aWNlKE5PVEFTX0RBVEFCQVNFKTtcclxuICAgIGRiLm9wZW5EYigpXHJcbiAgICAgIC50aGVuKCAoKSA9PiB7XHJcbiAgICAgICAgX19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgIHBvbC4kKCdidG4tZ3JhYmFyJykub25jbGljayA9IGFkZE5vdGU7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkTm90ZSgpIHtcclxuICAgIHZhciBfX3R4dFRpdGxlID0gcG9sLiQoJ3R4dC10aXRsZScpO1xyXG4gICAgdmFyIF9fdHh0VGV4dCAgPSBwb2wuJCgndHh0LXRleHQnKTtcclxuICAgIHZhciBfX3RpdGxlID0gX190eHRUaXRsZS52YWx1ZS50cmltKCk7XHJcbiAgICB2YXIgX190ZXh0ICA9IF9fdHh0VGV4dC52YWx1ZS50cmltKCk7XHJcbiAgICBpZiAoIV9fdGl0bGUpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiBfX3R4dFRpdGxlLmZvY3VzKCksIDIwKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFfX3RleHQpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiBfX3R4dFRleHQuZm9jdXMoKSwgMjApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBkYi5zYXZlKE5PVEFTX1RBQkxFX05BTUUsXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAga2V5ICAgOiBkYXRlLnZhbHVlT2YoKSwgXHJcbiAgICAgICAgICAgICAgZGF0ZSAgOiAnezB9L3sxfS97Mn0nLmZvcm1hdChkYXRlLmdldERhdGUoKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlLmdldE1vbnRoLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSksIFxyXG4gICAgICAgICAgICAgIHRpdGxlIDogX190aXRsZSwgXHJcbiAgICAgICAgICAgICAgdGV4dCAgOiBfX3RleHQgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCBub3RhID0+IHtcclxuICAgICAgICAgICAgICBjdHgucm91dGVyLm5hdmlnYXRlVG8oJ2xpc3QnKTsgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCggZSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9