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
/* harmony import */ var _lib_pubSub_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/pubSub.Service */ "./src/lib/pubSub.Service.js");
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/utils.js */ "./src/lib/utils.js");




const __TEMPLATE = `  
  <a href=""          route-link on-publish="view.change:sync" class="w3-bar-item w3-button selected">Inicio</a>
  <a href="el-tiempo" route-link on-publish="view.change:sync" class="w3-bar-item w3-button">El tiempo</a>
  <a href="list"      route-link on-publish="view.change:sync" class="w3-bar-item w3-button">Notas</a>
  <a href="note"      route-link on-publish="view.change:sync" class="w3-bar-item w3-button">+</a>
  <a href="about"     route-link on-publish="view.change:sync" class="w3-bar-item w3-button w3-right">?</a>`;

/* harmony default export */ __webpack_exports__["default"] = (function(){

  let component =  {
    root   : {},
    id     : 'menu.component.ref',
    init   : function(container, router){
      this.router = router;
    },
    render : function(container) {
      let options = { 
        id        : "appMenu",
        innerHTML : __TEMPLATE.format(this),
        className : 'w3-bar w3-black'
      }
      this.root = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('nav', options);
      return this.root;
    },
    mounted: function(container){
      initAll();
    },
    eventHandlers : { 
      sync : syncMenuItem
    }
  };

  function initAll() {

    _lib_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].addEventListeners(component.root, 
                            component.eventHandlers, { 
                              router : component.router,
                              syncr   : syncMenuItem
                            });


  }

  function syncMenuItem(e, data) {
    if (data.name === e.href.split('/').lastItem())
      e.classList.add('selected')
    else
      e.classList.remove('selected')
  }

  return component;

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
/* harmony import */ var _lib_pubSub_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/pubSub.Service */ "./src/lib/pubSub.Service.js");
/* harmony import */ var _components_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header.component */ "./src/components/header.component.js");
/* harmony import */ var _components_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer.component */ "./src/components/footer.component.js");
/* harmony import */ var _components_main_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main-content.component */ "./src/components/main-content.component.js");
/* harmony import */ var _components_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu.component */ "./src/components/menu.component.js");
/* harmony import */ var _views_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/home.page */ "./src/views/home.page.js");
/* harmony import */ var _views_list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/list.page */ "./src/views/list.page.js");
/* harmony import */ var _views_about_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/about.page */ "./src/views/about.page.js");
/* harmony import */ var _views_new_item_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/new-item.page */ "./src/views/new-item.page.js");
/* harmony import */ var _views_el_tiempo_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/el-tiempo.page */ "./src/views/el-tiempo.page.js");


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
  Object(_components_header_component__WEBPACK_IMPORTED_MODULE_2__["default"])(),
  Object(_components_menu_component__WEBPACK_IMPORTED_MODULE_5__["default"])(),
  Object(_components_main_content_component__WEBPACK_IMPORTED_MODULE_4__["default"])(),
  Object(_components_footer_component__WEBPACK_IMPORTED_MODULE_3__["default"])()
];
// ==============================================================================
// Router
// ==============================================================================
const router = {
  routes  : [],
  addRoute: function (name, pattern, controller) {
    this.routes.push({ name : name, path : pattern, controler : controller });
    return this;
  },
  getRoute: function (route) {
    return this.routes.where(function(r){
      let match = r.path.exec(route);
      if (match) {
        r.params = match.map( e => e );
      }
      return match;
    })[0];
  },
  navigateTo : function (route) {
    this.current = this.getRoute(route);
    let url = '{origin}{0}{1}'.format('/notas-app/', route, location);
    window.history.pushState({}, route, url);
    showContent();
  },
  normalizePath : function (url) {
    return url.replace(document.baseURI, '');
  },
  sync : function(){
    this.current = this.getRoute(this.normalizePath(window.location.href));
    showContent();
  },
  current : {}
};
router.addRoute('list',  /list$/,            _views_list_page__WEBPACK_IMPORTED_MODULE_7__["default"])
      .addRoute('about', /about$/,           _views_about_page__WEBPACK_IMPORTED_MODULE_8__["default"])
      .addRoute('note',  /note$/,            _views_new_item_page__WEBPACK_IMPORTED_MODULE_9__["default"])
      .addRoute('note',  /note\/(\d{13})$/,  _views_new_item_page__WEBPACK_IMPORTED_MODULE_9__["default"])
      .addRoute('el-tiempo',  /el-tiempo$/,  _views_el_tiempo_page__WEBPACK_IMPORTED_MODULE_10__["default"])
      .addRoute('',      /$/,                _views_home_page__WEBPACK_IMPORTED_MODULE_6__["default"]);

// ==============================================================================
// Init App
// ==============================================================================
(function(){

  const root = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].$('appContent');
  components.forEach( c => {
    if(c.init) c.init(root, router);
    root.appendChild(c.render(root));
    if(c.mounted) c.mounted(root); 
  });

})();
// ===================================================
// Sync content
// ===================================================
const container = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].$('app-content-container');
let currentBuilder;
let current;
function showContent(){
  let viewBuilder = router.current.controler;
  if(!current || currentBuilder != viewBuilder) {
    // ===============================================
    // Dispose
    // ===============================================
    if (current && current.dispose) current.dispose();
    // ===============================================
    // Clear
    // ===============================================
    container.innerHTML = '';  
    // ===============================================
    // Init
    // ===============================================  
    current = viewBuilder({router});
    currentBuilder = viewBuilder;
    if(current.init) current.init();
    // ===============================================
    // Render
    // ===============================================
    container.appendChild(current.render());
    // ===============================================
    // Mounted
    // ===============================================
    if(current.mounted) current.mounted(container);
    _lib_pubSub_Service__WEBPACK_IMPORTED_MODULE_1__["default"].publish('view.change', router.current);
  }

}

router.sync();

window.onpopstate = function(){
  router.sync();
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
          if(key.indexOf('#') > 0){
            let __tokens = key.split('#');
            let value  = __arg[__tokens[0]];
            let cmd    = __tokens[1];
            return (value + '').paddingLeft(cmd);
          }
          if(key.indexOf(':') > 0){
            var __fn = key.split(':');
            __fn[0]  = module.templates.getValue(__fn[0], __context);
            __fn[1]  = module.templates.getValue(__fn[1], __context);
            return __fn[0](__fn[1], __context, __fn.slice(2));            
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
                      if (typeof (r) == 'function'){                        
                        return r(o);
                      }else{                        
                        return r;
                      }                    
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
      get  : function (url, interceptor) {
        return new Promise( (resolve, reject) => {
          //url += (url.contains('?') ? '&ms=' : '?ms=') + new Date().getTime();
          var xml = this.createXMLHttpRequest();
          xml.open('GET', url, true);
          if(interceptor) interceptor(xml);
          xml.setRequestHeader('If-Modified-Since', 'Thu, 01 Jan 1970 00:00:00 GMT');
          xml.setRequestHeader('Cache-Control', 'no-cache');
          xml.onreadystatechange = function () { if (xml.readyState == 4) resolve(xml.responseText) };
          xml.onerror = function(e) { reject(e); };
          xml.send(null);
        });

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

/***/ "./src/lib/pubSub.Service.js":
/*!***********************************!*\
  !*** ./src/lib/pubSub.Service.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapa.js */ "./src/lib/mapa.js");



let topics = {};
let subUid = -1;

let subscribe = function(topic, func) {
  if (!topics[topic]) {
    topics[topic] = [];
  }
  var token = (++subUid).toString();
  topics[topic].push({
    token: token,
    func: func
  });
  return token;
};

let publish = function(topic, args) {
  if (!topics[topic]) {
      return false;
  }
  setTimeout(function() {
    var subscribers = topics[topic];
    var len = subscribers ? subscribers.length : 0;

    while (len--) {
      subscribers[len].func(topic, args);
    }
  }, 0);
  return true;
};

let unsubscribe = function(token) {
  for (var m in topics) {
    if (topics[m]) {
      for (var i = 0, j = topics[m].length; i < j; i++) {
        if (topics[m][i].token === token) {
          topics[m].splice(i, 1);
          return token;
        }
      }
    }
  }
  return false;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  subscribe,
  publish,
  unsubscribe
});

/***/ }),

/***/ "./src/lib/utils.js":
/*!**************************!*\
  !*** ./src/lib/utils.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapa */ "./src/lib/mapa.js");
/* harmony import */ var _pubSub_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubSub.Service */ "./src/lib/pubSub.Service.js");



const EVENTS = ['[on-click]', '[on-publish]', '[route-link]'];

function addEventListeners(container, handlers, context) {

  function innerHTML(e, value) { e.innerHTML = value; }

  EVENTS.forEach((selector, index) => {
    _mapa__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(_mapa__WEBPACK_IMPORTED_MODULE_0__["default"].$(selector, container))
       .forEach( e => {
         let name   = selector.replace('[', '').replace(']', '');
         let value  = e.attributes[name].value
         let tokens = value.split(':');
         // =======================================================
         // on-click
         // =======================================================
         if (index === 0) {
           let fn = handlers[value] || 
                    _mapa__WEBPACK_IMPORTED_MODULE_0__["default"].templates.getValue(value, context);
           e.onclick = (event) => fn(e, event);
           return;
         }
         // =======================================================
         // on-publish
         // =======================================================
         if (index === 1) {
           _pubSub_Service__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe(tokens[0], (message, data) => {
             if (tokens[1]) {
               let fn = handlers[tokens[1]] || 
                        _mapa__WEBPACK_IMPORTED_MODULE_0__["default"].templates.getValue(tokens[1], context);
               if (fn) fn(e, data);
               return;
             } else {
               innerHTML(e, data);
             }
           })
         }
         // =======================================================
         // route-link
         // =======================================================
         if (index === 2) {
           e.onclick = function(e){
             let router = context.router;
             let route = router.normalizePath(e.target.href);
             if (router.current != route) {
               try {
                 router.navigateTo(route);
               } catch (error) {
                 console.log(error);
               }
             }
             return false;
           }
         }
       }); 
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({ 
  addEventListeners
});

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
<div class="w3-container w3-margin-bottom w3-animate-left">
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
    <li><h2>Repositorio</h2></li>
    <li><a href="https://github.com/rcastrogo/notas-app" target="_blank">https://github.com/rcastrogo/notas-app</a></li>
  </ul>
  <p style="text-indent:1em;">
    Para su desarrollo no se han utilizado ninguno de los <span class="w3-bold w3-italic">frameworks</span> existentes como pueden ser Angular, React o Vue.js.
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
               };
    }
  };

  return component;

});


/***/ }),

/***/ "./src/views/el-tiempo.page.js":
/*!*************************************!*\
  !*** ./src/views/el-tiempo.page.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_mapa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/mapa */ "./src/lib/mapa.js");
/* harmony import */ var _lib_pubSub_Service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/pubSub.Service */ "./src/lib/pubSub.Service.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/utils */ "./src/lib/utils.js");




const __TEMPLATE = `  
<div class="w3-container w3-margin-bottom w3-animate-bottom">
  <div class="w3-border w3-margin-top">
    <button on-click="expandCollapse" class="w3-button w3-block w3-left-align">
      <span on-publish="municipio.change:css">Buenaventura</span><i class="w3-right w3-large fa fa-caret-down"></i>
    </button>
    <div class="w3-hide">
      <ul class="w3-ul">
        <li on-click="requestData" id="loc-45022">Buenaventura</li>
        <li on-click="requestData" id="loc-28079">Madrid</li>
      </ul>
    </div>
  </div>
  <div class="w3-margin-top w3-hide" id="aemetApi-container" style="padding:0;">
    <div id="progress-bar-container">
      <div class="w3-center">Cargando datos desde la AEMET...</div>
      <div class="w3-border">
        <div id="progress-bar" class="w3-green" style="height:24px;width:0%"></div>
      </div>
    <div>
  </div>
</div>`;

function aemetComponent() {

  const __TEMPLATE = `
  <div class="w3-container w3-teal w3-center w3-small w3-padding">
    {fn.formatFecha:elaborado}
  </div>
  <div style="padding:0">
    <h3 class="w3-center w3-border-bottom">{fn.formatFecha:prediccion.dia[0].fecha:day}</h3>
    <div>{fn.showDay:rows-0}</div>
    <div class="w3-small w3-teal w3-padding w3-center">
      <div><i class="fa fa-arrow-up"></i> {prediccion.dia[0].orto}</div>
      <div><i class="fa fa-arrow-down"></i> {prediccion.dia[0].ocaso}</div>
    </div>
  </div>
  <br/>
  <div style="padding:0">
    <h3 class="w3-center w3-border-bottom">{fn.formatFecha:prediccion.dia[1].fecha:day}</h3>
    <div>{fn.showDay:rows-1}</div>
    <div class="w3-small w3-teal w3-padding w3-center">
      <div><i class="fa fa-arrow-up"></i> {prediccion.dia[1].orto}</div>
      <div><i class="fa fa-arrow-down"></i> {prediccion.dia[1].ocaso}</div> 
    </div>
  </div>
  <br/>
  <div style="padding:0">
    <h3 class="w3-center w3-border-bottom">{fn.formatFecha:prediccion.dia[2].fecha:day}</h3>
    <div>{fn.showDay:rows-2}</div>
    <div class="w3-small w3-teal w3-padding w3-center">
      <div><i class="fa fa-arrow-up"></i> {prediccion.dia[2].orto}</div>
      <div><i class="fa fa-arrow-down"></i> {prediccion.dia[2].ocaso}</div>
    </div>
  </div>`;

  let fn = { 
    formatFecha : function(value, ctx, options){
      let tokens = value.split('T');
      if (options && options[0] === 'date') return tokens[0];
      if (options && options[0] === 'time') return tokens[1];
      if (options && options[0] === 'day'){
        tokens = tokens[0].split('-');
        let nombres = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];
        let day     = new Date(~~tokens[0], ~~tokens[1] - 1, ~~tokens[2]).getDay();
        return '{0} {1}'.format(nombres[day], ~~tokens[2]);
      };
      return '{1} - {0}'.format(...tokens)
    },
    showDay: function (data) {
      function renderRow(sb, row) {
        let row_template = `
          <tr class="w3-center">
            <td>{row.periodo}:00</td>
            <td>{row.cielo}</td>
            <td>{row.temperatura}</td>
            <td>{fn.formatZero:row.lluvia}</td>
            <td><i class="fa fa-2x fa-long-arrow-right pol-{row.viento[0]}"></i> {row.viento[1]}</td>
          </tr>`;
        let row_wrapper = {row, fn};
        return sb.append(row_template.format(row_wrapper));
      }
      return data.reduce(renderRow, _lib_mapa__WEBPACK_IMPORTED_MODULE_0__["default"].stringBuilder()
                                       .append('<table class="w3-table w3-bordered w3-small w3-striped">')
                                       .append('<tr class="w3-center w3-teal">' + 
                                                 '<th>Hora</th>' + 
                                                 '<th>Cielo</th>' + 
                                                 '<th>Temp<br>ºC</th>' + 
                                                 '<th>Lluvia<br>mmm</th>' + 
                                                 '<th>Viento<br>km/h</th>' + 
                                               '</tr>'))
                 .append('</table>')
                 .value;
    },
    formatZero: function (value) {
      return value == '0' ? '' : value;
    }
  };

  let component = {
    root   : {},
    init   : function(container){ },
    render : function(container){
      this.root = _lib_mapa__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', __TEMPLATE.format(this.data));
      return this.root;
    },
    mounted : function(container){ },
    withData : function(data){
      this.data = JSON.parse(data)[0];
      this.data.fn = fn;
      this.data
          .prediccion
          .dia
          .reduce(function (a, dia, i) {
            // =======================================================================================================================
            // Filtrar datos del día anterior
            // =======================================================================================================================
            //let now = new Date();
            //let targetDate = fn.formatFecha(dia.fecha, null, ['date']);
            //let today      = '{0#0000}-{1#00}-{2#00}'.format(now.getFullYear(), now.getMonth() + 1, now.getDate());
            //if (targetDate < today) {
            //  return a;
            //}
            // =======================================================================================================================
            // Agrupar los datos por hora
            // =======================================================================================================================
            let group = [].concat(dia.estadoCielo.map( function(e){ return { t : 'c', periodo : e.periodo, value : e.descripcion }}),
                                  dia.temperatura.map( function(e){ return { t : 't', periodo : e.periodo, value : e.value }}),
                                  dia.precipitacion.map( function(e){ return { t : 'p', periodo : e.periodo, value : e.value }}),
                                  dia.vientoAndRachaMax
                                     .where(e => e.velocidad)
                                     .map( function(e){ 
                                       return { t       : 'v', 
                                                periodo : e.periodo, 
                                                value   : [e.direccion[0], e.velocidad[0]]
                                     }}))
                          .groupBy('periodo');
            // =======================================================================================================================
            // convertir en datos tabulados
            // =======================================================================================================================
            a['rows-{0}'.format(i)] = Object.keys(group)
                                            .reduce( function(rows, key){
                                              // ===================================================
                                              // Filtrar los datos de horas anteriores a la actual
                                              // ===================================================
                                              //if (i == 0 && key < '{0#00}'.format(now.getHours())) {
                                              //  return rows;
                                              //} 
                                              let datosHora = group[key];
                                              rows.push( { periodo     : key, 
                                                            cielo       : datosHora.where({ t : 'c' })[0].value,
                                                            temperatura : datosHora.where({ t : 't' })[0].value,
                                                            lluvia      : datosHora.where({ t : 'p' })[0].value,
                                                            viento      : datosHora.where({ t : 'v' })[0].value });
                                              return rows;
                                            }, [])
                                            .sortBy('periodo');
            return a;
          }, this.data);

      return this;
    }
  };

  return component;

}

/* harmony default export */ __webpack_exports__["default"] = (function(ctx){

  let aemetContainer;
  let progressBarContainer;
  let progressBar;

  let component = {
    root   : {},
    data   : { 
      municipios : { 
        '45022' : 'Buenaventura (TOLEDO)',
        '28079' : 'Madrid'
      }
    },
    init   : function(container){ },
    render : function(container){
      this.root = _lib_mapa__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', __TEMPLATE);
      return this.root;
    },
    mounted : function(container){
      initAll(container);
    },
    dispose : function(){
      clearInterval(timerId);
    },
    eventHandlers : { 
      expandCollapse : expandCollapse,
      requestData    : requestData
    }
  };

  function initAll(container) {
    aemetContainer       = _lib_mapa__WEBPACK_IMPORTED_MODULE_0__["default"].$('aemetApi-container');
    progressBar          = _lib_mapa__WEBPACK_IMPORTED_MODULE_0__["default"].$('progress-bar');
    progressBarContainer = _lib_mapa__WEBPACK_IMPORTED_MODULE_0__["default"].$('progress-bar-container');   
    // ==============================================================
    // addEventListener
    // ==============================================================
    _lib_utils__WEBPACK_IMPORTED_MODULE_2__["default"].addEventListeners(component.root, 
                            component.eventHandlers,
                            { 
                              css : (target, data) => {
                                console.log(target);
                              }
                            });
    callAemetApi();
  }

  let timerId;
  function initProgressBar() {
    let counter = 0;
    progressBar.style.width = '{0}%'.format(counter);
    if(timerId) clearInterval(timerId);
    timerId = setInterval(() => {
      counter = (counter + 9) % 100;
      progressBar.style.width = '{0}%'.format(counter);
    }, 300);
  }

  let codigo = 45022;
  function callAemetApi() {
    
    initProgressBar();

    aemetContainer.innerHTML = '';
    aemetContainer.appendChild(progressBarContainer);
    aemetContainer.classList.remove('w3-hide');

    const ENDPOINT = 'https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/horaria/' +
                      codigo +
                     '?api_key=' +
                     'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyY2FzdHJvZ29AaG90bWFpbC5jb20iLCJqdGkiOiJmZmI3OWJjZi1lZWQwLT' + 
                     'QwODMtYTkwZC04MmNkMmRhMTA2MjQiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTU4MjcyNTg3NiwidXNlcklkIjoiZmZiN' + 
                     'zliY2YtZWVkMC00MDgzLWE5MGQtODJjZDJkYTEwNjI0Iiwicm9sZSI6IiJ9.bPhAJDutP62_75peo3qr88Qs1JQ4jmu6TWXHjvIzZx0';
    _lib_mapa__WEBPACK_IMPORTED_MODULE_0__["default"].ajax
       .get(ENDPOINT, req => {
         req.setRequestHeader('Accept', 'application/javascript');
       })
       .then(text => JSON.parse(text))
       .then(result => {
         if(result.estado == 200) return _lib_mapa__WEBPACK_IMPORTED_MODULE_0__["default"].ajax.get(result.datos);
         throw new Error(result.descripcion);
       })
       .then( text => {                                               
         aemetContainer.innerHTML = '';
         (function(componet) {
           componet.init(ctx);
           aemetContainer.appendChild(componet.render());
           componet.mounted(ctx);
         }(aemetComponent().withData(text)));         
       })
       .catch( e => {
         console.log(e);
       });
  }

  function expandCollapse(target, mouseEvent) {
    let __list = target.nextElementSibling.classList;
    if(__list.contains('w3-hide')){
      __list.remove('w3-hide');
      target.querySelector('i').classList.remove('fa-caret-down');
      target.querySelector('i').classList.add('fa-caret-up');
    } else {
      __list.add('w3-hide');
      target.querySelector('i').classList.remove('fa-caret-up');
      target.querySelector('i').classList.add('fa-caret-down');
    }
  }

  function requestData(target, mouseEvent) {

    let combo = target.parentNode.parentNode.previousElementSibling;
    codigo = target.id.split('-')[1];

    _lib_pubSub_Service__WEBPACK_IMPORTED_MODULE_1__["default"].publish('municipio.change', component.data.municipios[codigo] );

    expandCollapse(combo);
    callAemetApi();
  }

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
  <div class="w3-container w3-animate-left" style="padding-top:10px;">

  </div>`;

let _time = 0;
/* harmony default export */ __webpack_exports__["default"] = (function(){

  let component = {
    root   : {},
    init   : function(container){ },
    render : function(container){
      this.root = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', __template).firstElementChild ;
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
    _that.Canvas       = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('canvas', { id : 'canvas', width : _that.GameWidth, height : _that.GameHeight });
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
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/utils */ "./src/lib/utils.js");
/* harmony import */ var _lib_dbWrapper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/dbWrapper.service */ "./src/lib/dbWrapper.service.js");
﻿



const NOTAS_DATABASE   = 'notas-app.db'; 
const NOTAS_TABLE_NAME = 'notas';

const TEMPLATE = `
<div notas-container style="padding:0; margin-bottom:43px;" class="w3-animate-left"></div>
<button btn-add-note on-click="addNote" class="w3-button w3-black w3-circle">＋</button>`;

const __ITEM_TEMPLATE =`
<div class="w3-border-bottom w3-animate-left" style="padding:0; font-size:14px;" id="note-{note.key}">
  <div class="w3-container" style="padding:5px">
    <div on-click="expandCollapse"><b>{note.title}</b><i class="w3-right w3-large fa fa-caret-down"></i></div>
  </div>
  <div class="w3-container" style="display:none;padding:0 4px">
    <p id="editp-{note.key}" on-click="editNote" style="padding:2px;min-height:4em;margin:2px 0;white-space: pre-wrap">{formatText:note.text}</p>
    <div class="w3-bar w3-center" style="padding:4px 0;">
      <button type="button" id="delete-{note.key}" on-click="deleteNote" class="w3-button w3-border"><i class="fa fa-trash" aria-hidden="true"></i></button>
      <button type="button" id="fav-{note.key}" on-click="saveFavorites" class="w3-button w3-border"><i class="fa {css:note.key}" aria-hidden="true"></i></button>
      <button type="button" id="edit-{note.key}" on-click="editNote" class="w3-button w3-border"><i class="fa fa-edit" aria-hidden="true"></i></button>
    </div>
  </div>
</div>`;

/* harmony default export */ __webpack_exports__["default"] = (function(ctx){
    
  let db;
  let rows = [];
  let favorites = [];
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
      saveFavorites  : saveFavorites,
      editNote       : editNote
    } 
  };

  function initAll() {
    // ==============================================================
    // Open database
    // ==============================================================
    db = new _lib_dbWrapper_service__WEBPACK_IMPORTED_MODULE_2__["default"](NOTAS_DATABASE);
    db.openDb()
      .then( db => {
        loadData();
      });
    // ==============================================================
    // addEventListener
    // ==============================================================
    _lib_utils__WEBPACK_IMPORTED_MODULE_1__["default"].addEventListeners(component.root, component.eventHandlers);
  }

  function loadData() {
    db.readAll(NOTAS_TABLE_NAME)
      .then( values => {
        rows = values.reverse();
        favorites = (window.localStorage.getItem('favorites') || '').split('-');
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
            },
            css: function (key) {
              return favorites.includes(key.toString()) ? 'fa-star' : 'fa-star-o';
            }
          };
          return _lib_mapa__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', __ITEM_TEMPLATE.format(__bag))
        })
        .map( e => e.firstElementChild )
        .forEach( e => {
          itemsContainer.appendChild(e);
        });
    // ==============================================================
    // addEventListener
    // ==============================================================
    _lib_utils__WEBPACK_IMPORTED_MODULE_1__["default"].addEventListeners(itemsContainer, component.eventHandlers);
  }

  function deleteNote(target, mouseEvent){
    let __id      = parseInt(target.id.split('-')[1]);
    let __payload = rows.where({ key : __id })[0];
    let __element = document.getElementById('note-{0}'.format(__id));
    
    db.delete(NOTAS_TABLE_NAME, __id)
      .then( () => {
        rows.remove(__payload);
        __element.parentNode.removeChild(__element);
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
    ctx.router.navigateTo('note');
  }  

  function saveFavorites(target, mouseEvent) {
    let star = target.firstElementChild;
    let key = target.id.split('-')[1];
    if (favorites.includes(key)){
      favorites.remove(key);
      star.classList.add('fa-star-o');
      star.classList.remove('fa-star');
    } else {
      favorites.push(key);
      star.classList.remove('fa-star-o');
      star.classList.add('fa-star');
    }
    window.localStorage.setItem('favorites', favorites.join('-'));
  }

  function editNote(target, mouseEvent) {
    ctx.router.navigateTo('note/' + target.id.split('-')[1]);
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
<div class="w3-container w3-margin-bottom w3-animate-left">
  <h2>Nueva nota</h2>
  <form class="w3-margin-bottom">
    <label for="txt-title">Título</label>
    <input class="w3-input w3-border" type="text" id="txt-title" placeholder="Introduce un título" >
    <label for="txt-text">Texto</label>
    <textarea class="w3-input w3-border" id="txt-text" rows="4" placeholder="Contenido de la nota"></textarea>
  </form>
  <div class="w3-container w3-margin-bottom w3-center w3-animate-zoom">
    <button type="button" id="btn-grabar" class="w3-button w3-black">Grabar</button>
  </div>
</div>
`;

/* harmony default export */ __webpack_exports__["default"] = (function(ctx){
  
  let current;
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
        let __enableUI = function(){
          __container.style.display = '';
          _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].$('btn-grabar').onclick = addNote;
        }
        let __id = ctx.router.current.params[1] || '';
        if (__id) {
          db.readOne(NOTAS_TABLE_NAME, parseInt(__id))
            .then( note => {
              current = note;
              _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].$('txt-title').value = current.title;
              _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].$('txt-text').value  = current.text;
              _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].$('h2', component.root)[0].innerHTML = 'Edición de nota';
              __enableUI();
            });
          return;
        }
        __enableUI();
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
              key   : current ? current.key  : date.valueOf(), 
              date  : current ? current.date :
                                '{0}/{1}/{2}'.format(date.getDate(), 
                                                     date.getMonth, 
                                                     date.getFullYear()), 
              title : __title, 
              text  : __text 
            })
            .then( nota => {
              ctx.router.navigateTo('list'); 
            });
  }

  return component;
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW4tY29udGVudC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVudS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvZGJXcmFwcGVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9tYXBhLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvcHViU3ViLlNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWJvdXQucGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZWwtdGllbXBvLnBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2hvbWUucGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbGlzdC5wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9uZXctaXRlbS5wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFD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QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw4REFBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG9EQUFHO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxvREFBRztBQUNqQixjQUFjLG9EQUFHO0FBQ2pCLGNBQWMsb0RBQUc7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0EscUJBQXFCLG9EQUFHO0FBQ3hCLHFCQUFxQixvREFBRztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw0QztBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgICBcclxuICA8cD57dGV4dH08L3A+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gIHJldHVybiB7XHJcbiAgICB0ZXh0ICAgOiAnwqkgUmFmYWVsIENhc3RybyBHw7NtZXosIDIwMjAnLFxyXG4gICAgaW5pdCAgIDogZnVuY3Rpb24oY29udGFpbmVyKXt9LFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7IFxyXG4gICAgICAgIGlkICAgICAgICA6IFwiYXBwRm9vdGVyXCIsXHJcbiAgICAgICAgaW5uZXJIVE1MIDogX190ZW1wbGF0ZS5mb3JtYXQodGhpcyksXHJcbiAgICAgICAgY2xhc3NOYW1lIDogJ3czLWNvbnRhaW5lciB3My10ZWFsIHczLWNlbnRlcidcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcG9sLmJ1aWxkKCdmb290ZXInLCBvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYFxyXG4gIDxoMT57dGl0bGV9PC9oMT5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRpdGxlICA6ICdOb3RhcyBBcHAnLFxyXG4gICAgaW5pdCAgIDogZnVuY3Rpb24oY29udGFpbmVyKXt9LFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7IFxyXG4gICAgICAgIGlkICAgICAgICA6ICdhcHBIZWFkZXInLFxyXG4gICAgICAgIGlubmVySFRNTCA6IF9fdGVtcGxhdGUuZm9ybWF0KHRoaXMpLFxyXG4gICAgICAgIGNsYXNzTmFtZSA6ICd3My1jb250YWluZXIgdzMtdGVhbCdcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcG9sLmJ1aWxkKCdoZWFkZXInLCBvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYGA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG5cclxuICBsZXQgY29tcG9uZW50ID0ge1xyXG4gICAgcm9vdCAgIDoge30sXHJcbiAgICBpbml0ICAgOiBmdW5jdGlvbihjb250YWluZXIpeyB9LFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oY29udGFpbmVyKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpZCAgICAgICAgOiBcImFwcC1jb250ZW50LWNvbnRhaW5lclwiLFxyXG4gICAgICAgIGlubmVySFRNTCA6IF9fdGVtcGxhdGUsXHJcbiAgICAgICAgY2xhc3NOYW1lIDogJ3czLWNvbnRhaW5lcicsXHJcbiAgICAgICAgc3R5bGUgICAgIDogeyBcclxuICAgICAgICAgIG1pbkhlaWdodCA6ICc0NDBweCcsXHJcbiAgICAgICAgICBwYWRkaW5nICAgOiAnMCAwIDYwcHggMCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnc2VjdGlvbicsIG9wdGlvbnMpO1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIGluaXRTY3JvbGwoKTsgIFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcblxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTY3JvbGxcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gaW5pdFNjcm9sbCgpe1xyXG4gICAgXHJcbiAgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XHJcblx0ICB2YXIgdGltZW91dDtcclxuXHQgIHJldHVybiBmdW5jdGlvbigpIHtcclxuXHRcdCAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xyXG5cdFx0ICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0ICB0aW1lb3V0ID0gbnVsbDtcclxuXHRcdFx0ICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHRcdCAgfTtcclxuXHRcdCAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XHJcblx0XHQgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuXHRcdCAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG5cdFx0ICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHQgIH07XHJcbiAgfTsgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgXHJcbiAgZnVuY3Rpb24gaW5pdFNjcm9sbCgpeyAgICAgICAgXHJcbiAgICB2YXIgbmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBNZW51XCIpO1xyXG4gICAgaWYobmF2YmFyLmNsYXNzTmFtZS5pbmNsdWRlcygnc3RpY2t5JykpIHJldHVybjtcclxuICAgIHZhciBzdGlja3kgPSBuYXZiYXIub2Zmc2V0VG9wOyAgICAgICAgICBcclxuICAgIHdpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPj0gc3RpY2t5KSB7XHJcbiAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJzdGlja3lcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzdGlja3lcIik7XHJcbiAgICAgIH1cclxuICAgIH07ICBcclxuICB9XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZGVib3VuY2UoaW5pdFNjcm9sbCwgMTUwKSwgZmFsc2UpO1xyXG4gIGluaXRTY3JvbGwoKTtcclxufTsiLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5pbXBvcnQgcHVic3ViIGZyb20gXCIuLi9saWIvcHViU3ViLlNlcnZpY2VcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCIuLi9saWIvdXRpbHMuanNcIjtcclxuXHJcbmNvbnN0IF9fVEVNUExBVEUgPSBgICBcclxuICA8YSBocmVmPVwiXCIgICAgICAgICAgcm91dGUtbGluayBvbi1wdWJsaXNoPVwidmlldy5jaGFuZ2U6c3luY1wiIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uIHNlbGVjdGVkXCI+SW5pY2lvPC9hPlxyXG4gIDxhIGhyZWY9XCJlbC10aWVtcG9cIiByb3V0ZS1saW5rIG9uLXB1Ymxpc2g9XCJ2aWV3LmNoYW5nZTpzeW5jXCIgY2xhc3M9XCJ3My1iYXItaXRlbSB3My1idXR0b25cIj5FbCB0aWVtcG88L2E+XHJcbiAgPGEgaHJlZj1cImxpc3RcIiAgICAgIHJvdXRlLWxpbmsgb24tcHVibGlzaD1cInZpZXcuY2hhbmdlOnN5bmNcIiBjbGFzcz1cInczLWJhci1pdGVtIHczLWJ1dHRvblwiPk5vdGFzPC9hPlxyXG4gIDxhIGhyZWY9XCJub3RlXCIgICAgICByb3V0ZS1saW5rIG9uLXB1Ymxpc2g9XCJ2aWV3LmNoYW5nZTpzeW5jXCIgY2xhc3M9XCJ3My1iYXItaXRlbSB3My1idXR0b25cIj4rPC9hPlxyXG4gIDxhIGhyZWY9XCJhYm91dFwiICAgICByb3V0ZS1saW5rIG9uLXB1Ymxpc2g9XCJ2aWV3LmNoYW5nZTpzeW5jXCIgY2xhc3M9XCJ3My1iYXItaXRlbSB3My1idXR0b24gdzMtcmlnaHRcIj4/PC9hPmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG5cclxuICBsZXQgY29tcG9uZW50ID0gIHtcclxuICAgIHJvb3QgICA6IHt9LFxyXG4gICAgaWQgICAgIDogJ21lbnUuY29tcG9uZW50LnJlZicsXHJcbiAgICBpbml0ICAgOiBmdW5jdGlvbihjb250YWluZXIsIHJvdXRlcil7XHJcbiAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgfSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaWQgICAgICAgIDogXCJhcHBNZW51XCIsXHJcbiAgICAgICAgaW5uZXJIVE1MIDogX19URU1QTEFURS5mb3JtYXQodGhpcyksXHJcbiAgICAgICAgY2xhc3NOYW1lIDogJ3czLWJhciB3My1ibGFjaydcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ25hdicsIG9wdGlvbnMpO1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIGluaXRBbGwoKTtcclxuICAgIH0sXHJcbiAgICBldmVudEhhbmRsZXJzIDogeyBcclxuICAgICAgc3luYyA6IHN5bmNNZW51SXRlbVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRBbGwoKSB7XHJcblxyXG4gICAgdXRpbHMuYWRkRXZlbnRMaXN0ZW5lcnMoY29tcG9uZW50LnJvb3QsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmV2ZW50SGFuZGxlcnMsIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlciA6IGNvbXBvbmVudC5yb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bmNyICAgOiBzeW5jTWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzeW5jTWVudUl0ZW0oZSwgZGF0YSkge1xyXG4gICAgaWYgKGRhdGEubmFtZSA9PT0gZS5ocmVmLnNwbGl0KCcvJykubGFzdEl0ZW0oKSlcclxuICAgICAgZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXHJcbiAgICBlbHNlXHJcbiAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHBvbCBmcm9tIFwiLi9saWIvbWFwYS5qc1wiO1xyXG5pbXBvcnQgcHVic3ViIGZyb20gXCIuL2xpYi9wdWJTdWIuU2VydmljZVwiO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ29tcG9uZW50c1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuaW1wb3J0IGhlYWRlckNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IGZvb3RlckNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3Rlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IGNvbnRlbnRDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9tYWluLWNvbnRlbnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCBtZW51Q29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudS5jb21wb25lbnRcIjtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBhZ2VzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSBcIi4vdmlld3MvaG9tZS5wYWdlXCI7XHJcbmltcG9ydCBsaXN0UGFnZSBmcm9tIFwiLi92aWV3cy9saXN0LnBhZ2VcIjtcclxuaW1wb3J0IGFib3V0UGFnZSBmcm9tIFwiLi92aWV3cy9hYm91dC5wYWdlXCI7XHJcbmltcG9ydCBub3RlUGFnZSBmcm9tIFwiLi92aWV3cy9uZXctaXRlbS5wYWdlXCI7XHJcbmltcG9ydCBlbFRpZW1wb1BhZ2UgZnJvbSBcIi4vdmlld3MvZWwtdGllbXBvLnBhZ2VcIjtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJvdXRlc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgY29tcG9uZW50cyA9ICBbIFxyXG4gIGhlYWRlckNvbXBvbmVudCgpLFxyXG4gIG1lbnVDb21wb25lbnQoKSxcclxuICBjb250ZW50Q29tcG9uZW50KCksXHJcbiAgZm9vdGVyQ29tcG9uZW50KClcclxuXTtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJvdXRlclxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3Qgcm91dGVyID0ge1xyXG4gIHJvdXRlcyAgOiBbXSxcclxuICBhZGRSb3V0ZTogZnVuY3Rpb24gKG5hbWUsIHBhdHRlcm4sIGNvbnRyb2xsZXIpIHtcclxuICAgIHRoaXMucm91dGVzLnB1c2goeyBuYW1lIDogbmFtZSwgcGF0aCA6IHBhdHRlcm4sIGNvbnRyb2xlciA6IGNvbnRyb2xsZXIgfSk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9LFxyXG4gIGdldFJvdXRlOiBmdW5jdGlvbiAocm91dGUpIHtcclxuICAgIHJldHVybiB0aGlzLnJvdXRlcy53aGVyZShmdW5jdGlvbihyKXtcclxuICAgICAgbGV0IG1hdGNoID0gci5wYXRoLmV4ZWMocm91dGUpO1xyXG4gICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICByLnBhcmFtcyA9IG1hdGNoLm1hcCggZSA9PiBlICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgfSlbMF07XHJcbiAgfSxcclxuICBuYXZpZ2F0ZVRvIDogZnVuY3Rpb24gKHJvdXRlKSB7XHJcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmdldFJvdXRlKHJvdXRlKTtcclxuICAgIGxldCB1cmwgPSAne29yaWdpbn17MH17MX0nLmZvcm1hdCgnL25vdGFzLWFwcC8nLCByb3V0ZSwgbG9jYXRpb24pO1xyXG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCByb3V0ZSwgdXJsKTtcclxuICAgIHNob3dDb250ZW50KCk7XHJcbiAgfSxcclxuICBub3JtYWxpemVQYXRoIDogZnVuY3Rpb24gKHVybCkge1xyXG4gICAgcmV0dXJuIHVybC5yZXBsYWNlKGRvY3VtZW50LmJhc2VVUkksICcnKTtcclxuICB9LFxyXG4gIHN5bmMgOiBmdW5jdGlvbigpe1xyXG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5nZXRSb3V0ZSh0aGlzLm5vcm1hbGl6ZVBhdGgod2luZG93LmxvY2F0aW9uLmhyZWYpKTtcclxuICAgIHNob3dDb250ZW50KCk7XHJcbiAgfSxcclxuICBjdXJyZW50IDoge31cclxufTtcclxucm91dGVyLmFkZFJvdXRlKCdsaXN0JywgIC9saXN0JC8sICAgICAgICAgICAgbGlzdFBhZ2UpXHJcbiAgICAgIC5hZGRSb3V0ZSgnYWJvdXQnLCAvYWJvdXQkLywgICAgICAgICAgIGFib3V0UGFnZSlcclxuICAgICAgLmFkZFJvdXRlKCdub3RlJywgIC9ub3RlJC8sICAgICAgICAgICAgbm90ZVBhZ2UpXHJcbiAgICAgIC5hZGRSb3V0ZSgnbm90ZScsICAvbm90ZVxcLyhcXGR7MTN9KSQvLCAgbm90ZVBhZ2UpXHJcbiAgICAgIC5hZGRSb3V0ZSgnZWwtdGllbXBvJywgIC9lbC10aWVtcG8kLywgIGVsVGllbXBvUGFnZSlcclxuICAgICAgLmFkZFJvdXRlKCcnLCAgICAgIC8kLywgICAgICAgICAgICAgICAgaG9tZVBhZ2UpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEluaXQgQXBwXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4oZnVuY3Rpb24oKXtcclxuXHJcbiAgY29uc3Qgcm9vdCA9IHBvbC4kKCdhcHBDb250ZW50Jyk7XHJcbiAgY29tcG9uZW50cy5mb3JFYWNoKCBjID0+IHtcclxuICAgIGlmKGMuaW5pdCkgYy5pbml0KHJvb3QsIHJvdXRlcik7XHJcbiAgICByb290LmFwcGVuZENoaWxkKGMucmVuZGVyKHJvb3QpKTtcclxuICAgIGlmKGMubW91bnRlZCkgYy5tb3VudGVkKHJvb3QpOyBcclxuICB9KTtcclxuXHJcbn0pKCk7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTeW5jIGNvbnRlbnRcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IGNvbnRhaW5lciA9IHBvbC4kKCdhcHAtY29udGVudC1jb250YWluZXInKTtcclxubGV0IGN1cnJlbnRCdWlsZGVyO1xyXG5sZXQgY3VycmVudDtcclxuZnVuY3Rpb24gc2hvd0NvbnRlbnQoKXtcclxuICBsZXQgdmlld0J1aWxkZXIgPSByb3V0ZXIuY3VycmVudC5jb250cm9sZXI7XHJcbiAgaWYoIWN1cnJlbnQgfHwgY3VycmVudEJ1aWxkZXIgIT0gdmlld0J1aWxkZXIpIHtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBEaXNwb3NlXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudC5kaXNwb3NlKSBjdXJyZW50LmRpc3Bvc2UoKTtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBDbGVhclxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJzsgIFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEluaXRcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICBcclxuICAgIGN1cnJlbnQgPSB2aWV3QnVpbGRlcih7cm91dGVyfSk7XHJcbiAgICBjdXJyZW50QnVpbGRlciA9IHZpZXdCdWlsZGVyO1xyXG4gICAgaWYoY3VycmVudC5pbml0KSBjdXJyZW50LmluaXQoKTtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSZW5kZXJcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudC5yZW5kZXIoKSk7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gTW91bnRlZFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGlmKGN1cnJlbnQubW91bnRlZCkgY3VycmVudC5tb3VudGVkKGNvbnRhaW5lcik7XHJcbiAgICBwdWJzdWIucHVibGlzaCgndmlldy5jaGFuZ2UnLCByb3V0ZXIuY3VycmVudCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxucm91dGVyLnN5bmMoKTtcclxuXHJcbndpbmRvdy5vbnBvcHN0YXRlID0gZnVuY3Rpb24oKXtcclxuICByb3V0ZXIuc3luYygpO1xyXG59XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTZXJ2aWNlV29ya2VyXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuXHJcbiAgaWYoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcil7XHJcbiAgICB0cnkge1xyXG4gICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZVdvcmtlci5qcycpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIFJlZ2lzdGVyZWRcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIFJlZ2lzdHJhdGlvbiBGYWlsZWRcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSk7XHJcbiIsIu+7v2ltcG9ydCBwb2wgZnJvbSBcIi4vbWFwYS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGJXcmFwcGVyU2VydmljZXtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgdGhpcy5kYm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kYiA9ICcnO1xyXG4gIH1cclxuXHJcbiAgb3BlbkRiKCl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgIGxldCByZXF1ZXN0ID0gd2luZG93LmluZGV4ZWREQi5vcGVuKHRoaXMuZGJuYW1lLCAxKTtcclxuXHJcblx0ICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKGUpID0+IHtcclxuICAgICAgICB0aGlzLmRiID0gZS50YXJnZXQucmVzdWx0O1xyXG5cdFx0ICAgIHJlc29sdmUodGhpcy5kYik7XHJcblx0ICAgIH07XHJcblxyXG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBlID0+IHsgIFxyXG4gICAgICAgIHJlamVjdCgnRXJyb3InKTtcclxuICAgICAgfTtcclxuXHRcclxuXHQgICAgcmVxdWVzdC5vbnVwZ3JhZGVuZWVkZWQgPSAoZSkgPT4ge1xyXG5cdFx0ICAgIHRoaXMuZGIgPSBlLnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGlmKHRoaXMuZGIub2JqZWN0U3RvcmVOYW1lcyAmJiB0aGlzLmRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoXCJub3Rhc1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRiLmRlbGV0ZU9iamVjdFN0b3JlKFwibm90YXNcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdG9yZSA9IHRoaXMuZGIuY3JlYXRlT2JqZWN0U3RvcmUoXCJub3Rhc1wiLCB7IGtleVBhdGggOiBcImtleVwiIH0pOyAgICAgICBcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVhZEFsbChuYW1lKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB2YXIgX19pdGVtcyA9IFtdO1xyXG4gICAgICB0aGlzLmRiXHJcbiAgICAgICAgICAudHJhbnNhY3Rpb24obmFtZSwgXCJyZWFkb25seVwiKVxyXG4gICAgICAgICAgLm9iamVjdFN0b3JlKG5hbWUpXHJcbiAgICAgICAgICAub3BlbkN1cnNvcihJREJLZXlSYW5nZS5sb3dlckJvdW5kKDApKVxyXG4gICAgICAgICAgLm9uc3VjY2VzcyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgX19jdXJzb3IgPSBldmVudC50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgICAgICBpZihfX2N1cnNvcikge1xyXG4gICAgICAgICAgICAgIF9faXRlbXMucHVzaChfX2N1cnNvci52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgX19jdXJzb3IuY29udGludWUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXNvbHZlKF9faXRlbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzYXZlKHN0b3JlLCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAoZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgICByZXN1bHQub25zdWNjZXNzID0gZXZlbnQgPT4geyByZXNvbHZlKHZhbHVlKTsgfTtcclxuICAgICAgICByZXN1bHQub25lcnJvciAgID0gZXJyb3IgPT4geyBjb25zb2xlLmxvZyhlcnJvcik7IH07XHJcbiAgICAgIH0pKHRoaXMuZGJcclxuICAgICAgICAgICAgIC50cmFuc2FjdGlvbihzdG9yZSwgXCJyZWFkd3JpdGVcIilcclxuICAgICAgICAgICAgIC5vYmplY3RTdG9yZShzdG9yZSlcclxuICAgICAgICAgICAgIC5wdXQodmFsdWUpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlKHN0b3JlLCBrZXkpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHtcclxuICAgICAgKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgcmVzdWx0Lm9uc3VjY2VzcyA9IGV2ZW50ID0+IHsgcmVzb2x2ZSgpOyB9O1xyXG4gICAgICAgIHJlc3VsdC5vbmVycm9yICAgPSBlcnJvciA9PiB7IGNvbnNvbGUubG9nKGVycm9yKTsgfTtcclxuICAgICAgfSkodGhpcy5kYlxyXG4gICAgICAgICAgICAgLnRyYW5zYWN0aW9uKHN0b3JlLCBcInJlYWR3cml0ZVwiKVxyXG4gICAgICAgICAgICAgLm9iamVjdFN0b3JlKHN0b3JlKVxyXG4gICAgICAgICAgICAgLmRlbGV0ZShrZXkpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVhZE9uZShzdG9yZSwga2V5KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIChmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgIHJlc3VsdC5vbnN1Y2Nlc3MgPSBldmVudCA9PiB7IHJlc29sdmUoZXZlbnQudGFyZ2V0LnJlc3VsdCk7IH07XHJcbiAgICAgICAgcmVzdWx0Lm9uZXJyb3IgICA9IGVycm9yID0+IHsgY29uc29sZS5sb2coZXJyb3IpO307XHJcbiAgICAgIH0pKHRoaXMuZGJcclxuICAgICAgICAgICAgIC50cmFuc2FjdGlvbihzdG9yZSwgXCJyZWFkd3JpdGVcIilcclxuICAgICAgICAgICAgIC5vYmplY3RTdG9yZShzdG9yZSlcclxuICAgICAgICAgICAgIC5nZXQoa2V5KSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcblxyXG4iLCJcclxuXHJcbmxldCBfX21vZHVsZSA9IHt9O1xyXG4oZnVuY3Rpb24obW9kdWxlLCBuYW1lKXtcclxuXHJcbiAgdmFyIF9tb2R1bGUgPSAgbW9kdWxlW25hbWVdID0geyBhcHBseSA6IGZ1bmN0aW9uIGFwcGx5KG8sIGMsIGQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkKSBhcHBseShvLCBkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobyAmJiBjICYmIHR5cGVvZiBjID09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gYyl7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNbcF0gPT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5KG9bcF0sIGNbcF0gKSAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9bcF0gPSBjW3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX07ICAgICAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFV0aWxzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpe1xyXG4gICAgbW9kdWxlLmFwcGx5KG1vZHVsZSx7IFxyXG4gICAgICB0b0FycmF5ICAgICA6IGZ1bmN0aW9uKHYpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh2KTsgfSxcclxuICAgICAgaXNOdWxsICAgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdiA9PT0gbnVsbDsgfSxcclxuICAgICAgaXNBcnJheSAgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gQXJyYXkuaXNBcnJheSh2KTsgfSxcclxuICAgICAgaXNTdHJpbmcgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdHlwZW9mIHYgPT0gJ3N0cmluZyc7fSxcclxuICAgICAgaXNCb29sZWFuICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdHlwZW9mIHYgPT0gJ2Jvb2xlYW4nO30sXHJcbiAgICAgIGlzTnVtYmVyICAgIDogZnVuY3Rpb24odil7cmV0dXJuIHR5cGVvZiB2ID09ICdudW1iZXInO30sXHJcbiAgICAgIGlzRnVuY3Rpb24gIDogZnVuY3Rpb24odil7cmV0dXJuIHR5cGVvZiB2ID09ICdmdW5jdGlvbic7fSxcclxuICAgICAgaXNPYmplY3QgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdiAmJiB0eXBlb2YgdiA9PSAnb2JqZWN0Jzt9LFxyXG4gICAgICBjbG9uZSAgICAgICA6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICBpZihtb2R1bGUuaXNBcnJheShvKSkgICAgICAgICAgICAgcmV0dXJuIG8uc2xpY2UoMCk7XHJcbiAgICAgICAgaWYobW9kdWxlLmlzT2JqZWN0KG8pICYmIG8uY2xvbmUpIHJldHVybiBvLmNsb25lKCk7XHJcbiAgICAgICAgaWYobW9kdWxlLmlzT2JqZWN0KG8pKXsgICAgICAgICAgICAgICBcclxuICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvKS5yZWR1Y2UoIGZ1bmN0aW9uKGEsIGspe1xyXG4gICAgICAgICAgICBhW2tdID0gbW9kdWxlLmNsb25lKG9ba10pO1xyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgIH0sIHt9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgIH0sICAgICAgICBcclxuICAgICAgam9pbiAgICAgICAgOiBmdW5jdGlvbihpdGVtcywgcHJvcGVydHksIHNlcGFyYXRvcil7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLnJlZHVjZShmdW5jdGlvbihhLCBvKXsgcmV0dXJuIGEuYXBwZW5kKG9bcHJvcGVydHkgfHwgJ2lkJ10pOyB9LCBbXSlcclxuICAgICAgICAgICAgICAgICAgICAuam9pbihzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICctJyA6IChzZXBhcmF0b3IgfHwgJycpKTsgXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0cmluZ0J1aWxkZXIgOiBmdW5jdGlvbihzKXtcclxuICAgICAgICAgIHJldHVybiB7IHZhbHVlICAgICAgOiBzIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgYXBwZW5kICAgICA6IGZ1bmN0aW9uKHMpeyB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZSArIHM7IHJldHVybiB0aGlzO30sXHJcbiAgICAgICAgICAgICAgICAgICBhcHBlbmRMaW5lIDogZnVuY3Rpb24ocyl7IHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlICsgKHMgfHwgJycpICsgJ1xcbic7IHJldHVybiB0aGlzO319XHJcbiAgICAgIH0sXHJcbiAgICAgIGJ1aWxkIDogZnVuY3Rpb24odGFnTmFtZSwgbyl7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBtb2R1bGUuaXNTdHJpbmcobykgPyB7IGlubmVySFRNTCA6IG8gfSA6IG87XHJcbiAgICAgICAgcmV0dXJuIF9tb2R1bGUuYXBwbHkoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKSwgb3B0aW9ucyk7XHJcbiAgICAgIH0sXHJcbiAgICAgICQgOiBmdW5jdGlvbihlLCBjb250cm9sKXsgXHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSkgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLnRvQXJyYXkoKGNvbnRyb2wgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoZSkgfHwgW10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZTtcclxuICAgICAgfSBcclxuICAgIH0pO1xyXG4gIH0oX21vZHVsZSkpO1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBTdHJpbmdzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpe1xyXG4gICAgbW9kdWxlLmFwcGx5KFN0cmluZywge1xyXG4gICAgICBzdHJpbmdCdWlsZGVyIDogbW9kdWxlLnN0cmluZ0J1aWxkZXIsXHJcbiAgICAgIGxlZnRQYWQgICAgICAgOiBmdW5jdGlvbiAodmFsLCBzaXplLCBjaCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAnJyArIHZhbDtcclxuICAgICAgICBpZiAoY2ggPT09IG51bGwgfHwgY2ggPT09IHVuZGVmaW5lZCB8fCBjaCA9PT0gJycpIGNoID0gJyAnOyAgICAgICAgICAgIFxyXG4gICAgICAgIHdoaWxlIChyZXN1bHQubGVuZ3RoIDwgc2l6ZSkgcmVzdWx0ID0gY2ggKyByZXN1bHQ7ICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSxcclxuICAgICAgdHJpbVZhbHVlcyA6IGZ1bmN0aW9uICh2YWx1ZXMpeyByZXR1cm4gdmFsdWVzLm1hcChmdW5jdGlvbihzKXtyZXR1cm4gcy50cmltKCk7fSk7fVxyXG4gICAgfSk7XHJcbiAgICBtb2R1bGUuYXBwbHkoU3RyaW5nLnByb3RvdHlwZSwge1xyXG4gICAgICByZXBsYWNlQWxsICA6IGZ1bmN0aW9uKHBhdHRlcm4sIHJlcGxhY2VtZW50KSB7IHJldHVybiB0aGlzLnNwbGl0KHBhdHRlcm4pLmpvaW4ocmVwbGFjZW1lbnQpOyB9LFxyXG4gICAgICByZXBlYXQgICAgICA6IFN0cmluZy5wcm90b3R5cGUucmVwZWF0ICAgICB8fCBmdW5jdGlvbihhKSB7IHJldHVybiBuZXcgQXJyYXkoYSArIDEpLmpvaW4odGhpcyk7IH0sXHJcbiAgICAgIGNvbnRhaW5zICAgIDogU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyAgIHx8IGZ1bmN0aW9uKHQsIHN0YXJ0KSB7IHJldHVybiB0aGlzLmluZGV4T2YodCkgPj0gKHN0YXJ0IHx8IDApOyB9LFxyXG4gICAgICBzdGFydHNXaXRoICA6IFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCB8fCBmdW5jdGlvbih0KXsgcmV0dXJuIHRoaXMuaW5kZXhPZih0KSA9PSAwOyB9LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIHRvRmxvYXQgICAgIDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMudHJpbSgpLnJlcGxhY2VBbGwoJy4nLCAnJykucmVwbGFjZUFsbCgnLCcsICcuJykgfSxcclxuICAgICAgZml4RGF0ZSAgICAgOiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5zcGxpdCgnICcpWzBdOyB9LFxyXG4gICAgICBmaXhUaW1lICAgICA6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLnNwbGl0KCcgJylbMV07IH0sXHJcbiAgICAgIGZpeFllYXIgICAgIDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuZml4RGF0ZSgpLnNwbGl0KCcvJylbMl07fSxcclxuICAgICAgdHJpbVNlY29uZHMgOiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5zcGxpdCgnOicpWzBdICsgJzonICsgdGhpcy5zcGxpdCgnOicpWzFdIDsgfSxcclxuICAgICAgcGFkZGluZ0xlZnQgOiBmdW5jdGlvbihwYWRkaW5nVmFsdWUpeyByZXR1cm4gKHBhZGRpbmdWYWx1ZSArIHRoaXMpLnNsaWNlKC1wYWRkaW5nVmFsdWUubGVuZ3RoKTsgfSxcclxuICAgICAgZm9ybWF0ICAgICAgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBfX2FyZyAgICAgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgdmFyIF9fY29udGV4dCA9IF9fYXJnW19fYXJnLmxlbmd0aCAtIDFdIHx8IHNlbGY7ICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvXFx7KFxcZCt8W157XSspXFx9L2csIGZ1bmN0aW9uKG0sIGtleSl7XHJcbiAgICAgICAgICBpZihrZXkuaW5kZXhPZignIycpID4gMCl7XHJcbiAgICAgICAgICAgIGxldCBfX3Rva2VucyA9IGtleS5zcGxpdCgnIycpO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgID0gX19hcmdbX190b2tlbnNbMF1dO1xyXG4gICAgICAgICAgICBsZXQgY21kICAgID0gX190b2tlbnNbMV07XHJcbiAgICAgICAgICAgIHJldHVybiAodmFsdWUgKyAnJykucGFkZGluZ0xlZnQoY21kKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKGtleS5pbmRleE9mKCc6JykgPiAwKXtcclxuICAgICAgICAgICAgdmFyIF9fZm4gPSBrZXkuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgX19mblswXSAgPSBtb2R1bGUudGVtcGxhdGVzLmdldFZhbHVlKF9fZm5bMF0sIF9fY29udGV4dCk7XHJcbiAgICAgICAgICAgIF9fZm5bMV0gID0gbW9kdWxlLnRlbXBsYXRlcy5nZXRWYWx1ZShfX2ZuWzFdLCBfX2NvbnRleHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gX19mblswXShfX2ZuWzFdLCBfX2NvbnRleHQsIF9fZm4uc2xpY2UoMikpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIC9eXFxkKyQvLnRlc3Qoa2V5KSA/IF9fYXJnW2tleV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICh0eXBlb2YgX19jb250ZXh0W2tleV0gPT09IFwidW5kZWZpbmVkXCIpID8gbW9kdWxlLnRlbXBsYXRlcy5nZXRWYWx1ZShrZXksIF9fY29udGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9fY29udGV4dFtrZXldOyBcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7ICAgICAgXHJcbiAgfShfbW9kdWxlKSk7ICAgICAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIEFycmF5XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgICBcclxuICAoZnVuY3Rpb24obW9kdWxlKXtcclxuICAgIG1vZHVsZS5hcHBseShBcnJheS5wcm90b3R5cGUsIHsgICAgICAgICAgXHJcbiAgICAgIHJlbW92ZSAgIDogZnVuY3Rpb24obykge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXhPZihvKTtcclxuICAgICAgICBpZiAoaW5kZXggIT0gLTEpIHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfSxcclxuICAgICAgYWRkICAgICAgOiBmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoKG8pO1xyXG4gICAgICAgIHJldHVybiBvO1xyXG4gICAgICB9LFxyXG4gICAgICBhcHBlbmQgICA6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICB0aGlzLnB1c2gobyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW0gICAgIDogZnVuY3Rpb24ocHJvcE5hbWUsIHZhbHVlLCBkZWYpe1xyXG4gICAgICAgIHJldHVybiBhcmd1bWVudHM9PTEgPyB0aGlzLmZpbHRlciggZnVuY3Rpb24odil7cmV0dXJuIHZbJ2lkJ10gPT0gcHJvcE5hbWUgfHwgdlsnX2lkJ10gPT0gcHJvcE5hbWV9KVswXSB8fCBkZWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5maWx0ZXIoIGZ1bmN0aW9uKHYpe3JldHVybiB2W3Byb3BOYW1lXSA9PSB2YWx1ZX0pWzBdIHx8IGRlZjtcclxuICAgICAgfSxcclxuICAgICAgY29udGFpbnMgOiBmdW5jdGlvbihwcm9wTmFtZSx2YWx1ZSl7IHJldHVybiB0aGlzLml0ZW0ocHJvcE5hbWUsdmFsdWUpOyB9LFxyXG4gICAgICBsYXN0SXRlbSA6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdOyB9LFxyXG4gICAgICBzZWxlY3QgICA6IGZ1bmN0aW9uKHNlbnRlbmNlKXsgcmV0dXJuIHRoaXMubWFwKHNlbnRlbmNlKSB9LCAgIFxyXG4gICAgICB3aGVyZSAgICA6IGZ1bmN0aW9uKHNlbnRlbmNlKXsgXHJcbiAgICAgICAgaWYobW9kdWxlLmlzRnVuY3Rpb24oc2VudGVuY2UpKSByZXR1cm4gdGhpcy5maWx0ZXIoc2VudGVuY2UpO1xyXG4gICAgICAgIGlmKG1vZHVsZS5pc09iamVjdChzZW50ZW5jZSkpe1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKG5ldyBGdW5jdGlvbignYScsIE9iamVjdC5rZXlzKHNlbnRlbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24oYSwgcHJvcG5hbWUsIGkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSArIChpID4gMCA/ICcgJiYgJyA6ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX192YWx1ZSA9IHNlbnRlbmNlW3Byb3BuYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihfX3ZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSByZXR1cm4gJ3sxfS50ZXN0KGEuezB9KScuZm9ybWF0KHByb3BuYW1lLCBfX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtb2R1bGUuaXNTdHJpbmcoX192YWx1ZSkpIHJldHVybiAnYS57MH0gPT09IFxcJ3sxfVxcJycuZm9ybWF0KHByb3BuYW1lLCBfX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2EuezB9ID09PSB7MX0nLmZvcm1hdChwcm9wbmFtZSwgX192YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KCkpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICdyZXR1cm4gJykpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNvcnRCeSAgICAgIDogZnVuY3Rpb24ocHJvcG5hbWUsIGRlc2Mpe1xyXG4gICAgICAgIHZhciBfX29yZGVyID0gW107XHJcbiAgICAgICAgdmFyIF9fbmFtZXMgPSBwcm9wbmFtZS5zcGxpdCgnLCcpLm1hcCggZnVuY3Rpb24odG9rZW4saSl7IFxyXG4gICAgICAgICAgdmFyIF9fcGFpciA9IHRva2VuLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICBfX29yZGVyW2ldID0gKF9fcGFpclsxXSAmJiAoX19wYWlyWzFdLnRvVXBwZXJDYXNlKCk9PSdERVNDJykpID8gLTEgOiAxOyAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuIF9fcGFpclswXTsgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgX19vcmRlclswXSA9IChkZXNjID8gLTEgOiAxKVxyXG4gICAgICAgIHRoaXMuc29ydChmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IDA7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX19mbiA9IGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIF9feCA9IGFbX19uYW1lc1tpXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgX195ID0gYltfX25hbWVzW2ldXTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKF9feCA8IF9feSkgcmV0dXJuIC0xICogX19vcmRlcltpXTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKF9feCA+IF9feSkgcmV0dXJuICAxICogX19vcmRlcltpXTtcclxuICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKGkgPCBfX25hbWVzLmxlbmd0aCkgcmV0dXJuIF9fZm4oYSxiKTsgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZm4oYSxiKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzOyAgICBcclxuICAgICAgfSxcclxuICAgICAgb3JkZXJCeSAgICAgOiBmdW5jdGlvbihzZW50ZW5jZSl7XHJcbiAgICAgICAgdmFyIF9fc2VudGVuY2UgPSBzZW50ZW5jZTsgICAgXHJcbiAgICAgICAgaWYobW9kdWxlLmlzU3RyaW5nKHNlbnRlbmNlKSkgX19zZW50ZW5jZSA9IGZ1bmN0aW9uKGEpeyByZXR1cm4gYVtzZW50ZW5jZV07IH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGV9KVxyXG4gICAgICAgICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IF9fc2VudGVuY2UoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IF9fc2VudGVuY2UoYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCh4IDwgeSkgPyAtMSA6ICgoeCA+IHkpID8gMSA6IDApKTtcclxuICAgICAgICAgICAgICAgICAgIH0pOyAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIGRpc3RpbmN0ICAgIDogZnVuY3Rpb24oc2VudGVuY2UpIHtcclxuICAgICAgICB2YXIgX19zZW50ZW5jZSA9IHNlbnRlbmNlOyAgICBcclxuICAgICAgICBpZihtb2R1bGUuaXNTdHJpbmcoc2VudGVuY2UpKSBfX3NlbnRlbmNlID0gZnVuY3Rpb24oYSl7IHJldHVybiBhW3NlbnRlbmNlXTsgfVxyXG4gICAgICAgIHZhciByID0gW107XHJcbiAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgdmFyIF92YWx1ZSA9IF9fc2VudGVuY2UoaXRlbSk7XHJcbiAgICAgICAgICBpZihyLmluZGV4T2YoX3ZhbHVlKT09LTEpIHIucHVzaChfdmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgICB9LFxyXG4gICAgICBncm91cEJ5IDogZnVuY3Rpb24ocHJvcCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVkdWNlKGZ1bmN0aW9uKGdyb3VwcywgaXRlbSkge1xyXG4gICAgICAgICAgdmFyIHZhbCA9IGl0ZW1bcHJvcF07XHJcbiAgICAgICAgICAoZ3JvdXBzW3ZhbF0gPSBncm91cHNbdmFsXSB8fCBbXSkucHVzaChpdGVtKTtcclxuICAgICAgICAgIHJldHVybiBncm91cHNcclxuICAgICAgICB9LCB7fSlcclxuICAgICAgfSxcclxuICAgICAgdG9EaWN0aW9uYXJ5IDogZnVuY3Rpb24ocHJvcCwgdmFsdWUpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZHVjZShmdW5jdGlvbihhLCBkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW2RbcHJvcF1dID0gdmFsdWUgPyBkW3ZhbHVlXSA6IGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHt9KTsgIFxyXG4gICAgICB9XHJcbiAgICB9KTsgICAgICAgXHJcbiAgfShfbW9kdWxlKSk7XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBUZW1wbGF0ZXNcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKGZ1bmN0aW9uKG1vZHVsZSl7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VmFsdWUoa2V5LCBzY29wZSkgeyAgICAgICAgXHJcbiAgICAgIHJldHVybiBrZXkuc3BsaXQoL1xcLnxcXFt8XFxdLylcclxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoIGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICAgICAgICAgICAgICBpZiAoYiA9PT0gJycpIHJldHVybiBhO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gYVtiXSA9PT0gdW5kZWZpbmVkID8gKGEgPT09IHNlbGYgPyAnJyA6IHNlbGYpIDogYVtiXTtcclxuICAgICAgICAgICAgICAgIH0sIHNjb3BlIHx8IHNlbGYgKTsgICAgXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgZnVuY3Rpb24gbWVyZ2UodGVtcGxhdGUsIG8sIGtleSkge1xyXG4gICAgICB2YXIgX19yZXN1bHQgPSB0ZW1wbGF0ZS5yZXBsYWNlKC97KFtee10rKT99L2csIGZ1bmN0aW9uIChtLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKGtleS5pbmRleE9mKCc6JykgPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fZm4gPSBrZXkuc3BsaXQoJzonKTsgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX2ZuWzBdICA9IGdldFZhbHVlKF9fZm5bMF0sIG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX2ZuWzFdICA9IGdldFZhbHVlKF9fZm5bMV0sIG8pOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19mblswXShfX2ZuWzFdLCBvKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhciByICAgPSBnZXRWYWx1ZShrZXksIG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAocikgPT0gJ2Z1bmN0aW9uJyl7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByKG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfWVsc2V7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7ICAgICBcclxuICAgICAgcmV0dXJuIF9fcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbGxUZW1wbGF0ZShlLCBzY29wZSkge1xyXG4gICAgICB2YXIgX3Jvb3QgPSBtb2R1bGUuJChlKTtcclxuICAgICAgdmFyIF9lbGVtZW50cyA9IG1vZHVsZS4kKCdbeGJpbmRdJywgX3Jvb3QpOyBcclxuICAgICAgaWYgKF9yb290LmF0dHJpYnV0ZXMueGJpbmQpIF9lbGVtZW50cy5wdXNoKF9yb290KTtcclxuICAgICAgX2VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgU3RyaW5nLnRyaW1WYWx1ZXMoY2hpbGQuYXR0cmlidXRlcy54YmluZC52YWx1ZS5zcGxpdCgnOycpKS5mb3JFYWNoKGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgICAgaWYgKHRva2VuID09PSAnJykgcmV0dXJuO1xyXG4gICAgICAgICAgdmFyIF90b2tlbnMgPSBTdHJpbmcudHJpbVZhbHVlcyh0b2tlbi5zcGxpdCgnOicpKTsgICAgICAgICAgICBcclxuICAgICAgICAgIHZhciBfcGFyYW1zID0gU3RyaW5nLnRyaW1WYWx1ZXMoX3Rva2Vuc1sxXS5zcGxpdCgvXFxzfFxcLC8pKTtcclxuICAgICAgICAgIHZhciBfdmFsdWUgPSBnZXRWYWx1ZShfcGFyYW1zWzBdLCBzY29wZSk7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIChfdmFsdWUpID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdmFyIF9hcmdzID0gX3BhcmFtcy5zbGljZSgxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB4YmluZD1cInRleHRDb250ZW50OkRhdGEuZm5UZXN0IEBPdGhlcixBLDVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnB1c2gocC5jaGFyQXQoMCkgPT0gJ0AnID8gZ2V0VmFsdWUocC5zbGljZSgxKSwgc2NvcGUpIDogcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW3Njb3BlLCBjaGlsZF0pO1xyXG4gICAgICAgICAgICBfdmFsdWUgPSBfdmFsdWUuYXBwbHkoc2NvcGUsIF9hcmdzKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoX3BhcmFtc1sxXSkge1xyXG4gICAgICAgICAgICB2YXIgX2Z1bmMgPSBnZXRWYWx1ZShfcGFyYW1zWzFdLCBzY29wZSk7XHJcbiAgICAgICAgICAgIF92YWx1ZSA9IF9mdW5jKF92YWx1ZSwgX3BhcmFtc1syXSwgc2NvcGUsIGNoaWxkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNoaWxkW190b2tlbnNbMF1dID0gX3ZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXhlY3V0ZVRlbXBsYXRlKGUsIHZhbHVlcywgZG9tKSB7XHJcbiAgICAgIHZhciBfdGVtcGxhdGUgPSBtb2R1bGUuJChlKTtcclxuICAgICAgdmFyIF9yZXN1bHQgICA9IHZhbHVlcy5yZWR1Y2UoIGZ1bmN0aW9uKGEsIHYsIGkpe1xyXG4gICAgICAgIHZhciBfbm9kZSA9IHsgaW5kZXggOiBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YSAgOiB2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgbm9kZSAgOiBmaWxsVGVtcGxhdGUoX3RlbXBsYXRlLmNsb25lTm9kZSh0cnVlKSwgdikgfTtcclxuICAgICAgICBhLm5vZGVzLnB1c2goX25vZGUpO1xyXG4gICAgICAgIGlmICghZG9tKSBhLmh0bWwucHVzaChfbm9kZS5ub2RlLm91dGVySFRNTC5yZXBsYWNlKC94YmluZD1cIlteXCJdKlwiL2csICcnKSk7XHJcbiAgICAgICAgcmV0dXJuIGE7IFxyXG4gICAgICB9LCB7IG5vZGVzIDogW10sIGh0bWwgOiBbXSB9KTtcclxuICAgICAgcmV0dXJuIGRvbSA/IF9yZXN1bHQubm9kZXMgOiBfcmVzdWx0Lmh0bWwuam9pbignJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG1vZHVsZS50ZW1wbGF0ZXMgPSB7IGdldFZhbHVlICA6IGdldFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2UgICAgIDogbWVyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBleGVjdXRlICAgOiBleGVjdXRlVGVtcGxhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsICAgICAgOiBmaWxsVGVtcGxhdGUgfTtcclxuXHJcbiAgfShfbW9kdWxlKSk7XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBBamF4XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpeyAgXHJcbiAgICBtb2R1bGUuYWpheCA9IHt9O1xyXG4gICAgbW9kdWxlLmFwcGx5KG1vZHVsZS5hamF4LCB7XHJcbiAgICAgIGdldCAgOiBmdW5jdGlvbiAodXJsLCBpbnRlcmNlcHRvcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgLy91cmwgKz0gKHVybC5jb250YWlucygnPycpID8gJyZtcz0nIDogJz9tcz0nKSArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgdmFyIHhtbCA9IHRoaXMuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgIHhtbC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgaWYoaW50ZXJjZXB0b3IpIGludGVyY2VwdG9yKHhtbCk7XHJcbiAgICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignSWYtTW9kaWZpZWQtU2luY2UnLCAnVGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVQnKTtcclxuICAgICAgICAgIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdDYWNoZS1Db250cm9sJywgJ25vLWNhY2hlJyk7XHJcbiAgICAgICAgICB4bWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkgeyBpZiAoeG1sLnJlYWR5U3RhdGUgPT0gNCkgcmVzb2x2ZSh4bWwucmVzcG9uc2VUZXh0KSB9O1xyXG4gICAgICAgICAgeG1sLm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7IHJlamVjdChlKTsgfTtcclxuICAgICAgICAgIHhtbC5zZW5kKG51bGwpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfSxcclxuICAgICAgcG9zdCA6IGZ1bmN0aW9uKHVybCwgcGFyYW1zLCBjYWxsQmFjaykgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHZhciB4bWwgPSB0aGlzLmNyZWF0ZVhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeG1sLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHsgaWYgKHhtbC5yZWFkeVN0YXRlID09IDQpIGNhbGxCYWNrKHhtbC5yZXNwb25zZVRleHQpIH07XHJcbiAgICAgICAgeG1sLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ6SVNPLTg4NTktMScpO1xyXG4gICAgICAgIHhtbC5zZW5kKHBhcmFtcyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNhbGxXZWJNZXRob2QgOiBmdW5jdGlvbih1cmwsIHBhcmFtcywgY2FsbEJhY2spIHtcclxuICAgICAgICB2YXIgeG1sID0gdGhpcy5jcmVhdGVYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhtbC5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcclxuICAgICAgICB4bWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXsgaWYgKHhtbC5yZWFkeVN0YXRlID09IDQpIGNhbGxCYWNrKHhtbC5yZXNwb25zZVRleHQpIH07XHJcbiAgICAgICAgeG1sLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICAgICAgeG1sLnNlbmQocGFyYW1zKTtcclxuICAgICAgfSxcclxuICAgICAgY3JlYXRlWE1MSHR0cFJlcXVlc3QgOiBmdW5jdGlvbigpeyByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7IH1cclxuICAgIH0pOyAgXHJcbiAgfShfbW9kdWxlKSk7IFxyXG4gICAgICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gVGFiYmx5XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbiAobW9kdWxlKXtcclxuICAgICAgXHJcbiAgICB2YXIgX19jb250ZXh0O1xyXG5cclxuICAgIGZ1bmN0aW9uIF9fRXhlY3V0ZUNvZGUoY29kZSl7XHJcblxyXG4gICAgICBfX2NvbnRleHQgPSB7IHNlY3Rpb25zIDogW10sIGdyb3VwcyA6IFtdLCBkZXRhaWxzIDogW119O1xyXG5cclxuICAgICAgdmFyIF9fY3VyO1xyXG4gICAgICB2YXIgX19mdW5jICAgICAgID0gJyc7XHJcbiAgICAgIHZhciBfX2Z1bmNCb2R5ICAgPSAnJztcclxuICAgICAgdmFyIF9fc2V0U3RhdGUgID0gZmFsc2U7XHJcblxyXG4gICAgICBmdW5jdGlvbiBfX2dldCh2YWx1ZSl7XHJcbiAgICAgICAgaWYodmFsdWUgJiYgdmFsdWUudHJpbSgpLnN0YXJ0c1dpdGgoJ0AnKSl7XHJcbiAgICAgICAgICByZXR1cm4gX19jb250ZXh0W3ZhbHVlLnRyaW0oKS5zcGxpdCgnQCcpWzFdLnRyaW0oKV0gfHwgJyc7XHJcbiAgICAgICAgfWVsc2UgaWYodmFsdWUpe1xyXG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnRyaW0oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9ICBcclxuXHJcbiAgICAgIGZ1bmN0aW9uIF9fcGFyc2VfcHJvcGVydGllcyh2YWx1ZSl7XHJcbiAgICAgICAgdmFyIF9fcmVnICAgPSAgLyhbYS16QS1aMC05X1xcLV0qKVxccyo6XFxzKignW14nXSonfFteXFxzXSopL2c7XHJcbiAgICAgICAgdmFyIF9fbyAgICAgPSB7fTtcclxuICAgICAgICB2YXIgX19tYXRjaCA9IF9fcmVnLmV4ZWModmFsdWUpO1xyXG4gICAgICAgIHdoaWxlIChfX21hdGNoICE9IG51bGwpIHtcclxuICAgICAgICAgIF9fb1tfX21hdGNoWzFdLnRyaW0oKV0gPSBfX2dldChfX21hdGNoWzJdLnRyaW0oKS5yZXBsYWNlKC9eJyhbXiddKiknJC9nLCAnJDEnKSk7XHJcbiAgICAgICAgICBfX21hdGNoID0gX19yZWcuZXhlYyh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfX29cclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gX19wYXJzZUxpbmUobCwgbyl7XHJcbiAgICAgICAgaWYoIV9fZnVuYyAmJiAhbC50cmltKCkpIHJldHVybiBmdW5jdGlvbigpe307XHJcbiAgICAgICAgdmFyIF9fa2V5cyA9IC9ERUZJTkV8I3xDUkVBVEV8U0VUfEZVTkNUSU9OfEVORC87XHJcbiAgICAgICAgaWYoX19rZXlzLnRlc3QobCkpe1xyXG4gICAgICAgICAgaWYoL14jLy50ZXN0KGwpKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICAgIH1lbHNlIGlmKC9eU0VUIChcXHcuKikvLnRlc3QobCkpeyAgXHJcbiAgICAgICAgICAgIHZhciBfX3Rva2VucyA9IGwubWF0Y2goL15TRVQgKFxcdy4qKSQvKTtcclxuICAgICAgICAgICAgX19zZXRTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIF9fZnVuYyAgICAgID0gX190b2tlbnNbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICBfX2Z1bmNCb2R5ICA9ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXt9O1xyXG4gICAgICAgICAgfWVsc2UgaWYoL15GVU5DVElPTiAoXFx3LiopLy50ZXN0KGwpKXsgIFxyXG4gICAgICAgICAgICB2YXIgX190b2tlbnMgPSBsLm1hdGNoKC9eRlVOQ1RJT04gKFxcdy4qKSQvKTtcclxuICAgICAgICAgICAgX19zZXRTdGF0ZSAgPSBmYWxzZTtcclxuICAgICAgICAgICAgX19mdW5jICAgICAgID0gX190b2tlbnNbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICBfX2Z1bmNCb2R5ICAgPSAnJztcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICAgIH1lbHNlIGlmKC9eRU5ELy50ZXN0KGwpKXsgICAgICBcclxuICAgICAgICAgICAgdmFyIF9fYm9keSA9IF9fZnVuY0JvZHk7XHJcbiAgICAgICAgICAgIHZhciBfX25hbWUgPSBfX2Z1bmM7XHJcbiAgICAgICAgICAgIF9fZnVuYyA9IF9fZnVuY0JvZHkgPSAnJzsgXHJcbiAgICAgICAgICAgIGlmKF9fc2V0U3RhdGUpe1xyXG4gICAgICAgICAgICAgIF9fc2V0U3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpeyBfX2N1cltfX25hbWVdID0gX19ib2R5LnRyaW0oKTsgfVxyXG4gICAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXsgY3R4W19fbmFtZV0gPSBuZXcgRnVuY3Rpb24oJ2N0eCcsIF9fYm9keSk7IH1cclxuICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgfWVsc2UgaWYoL15ERUZJTkVcXHNcXHMqKFxcdy4qKVxccyo9XFxzKiguKikkLy50ZXN0KGwpKXtcclxuICAgICAgICAgICAgdmFyIF9fdG9rZW5zID0gbC5tYXRjaCgvXkRFRklORVxcc1xccyooW2EtekEtWjAtOV9cXC1dKilcXHMqPVxccyooLiopJC8pO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgICAgICAgdmFyIHRva2VucyA9IF9fdG9rZW5zO1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpeyBjdHhbdG9rZW5zWzFdLnRyaW0oKV0gPSB0b2tlbnNbMl0udHJpbSgpOyB9XHJcbiAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgIH1lbHNlIGlmKC9eQ1JFQVRFXFxzXFxzKihcXHcqKSAoLiopJC8udGVzdChsKSl7XHJcbiAgICAgICAgICAgIHZhciBfX3Rva2VucyA9IGwubWF0Y2goL15DUkVBVEVcXHNcXHMqKFxcdyopICguKikkLyk7XHJcbiAgICAgICAgICAgIGlmKF9fdG9rZW5zWzFdPT0nc2VjdGlvbicpe1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyBcclxuICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBfX3Rva2VucztcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpeyBcclxuICAgICAgICAgICAgICAgICAgY3R4LnNlY3Rpb25zLnB1c2goX19wYXJzZV9wcm9wZXJ0aWVzKHRva2Vuc1syXSkpOyBcclxuICAgICAgICAgICAgICAgICAgX19jdXIgPSBjdHguc2VjdGlvbnNbY3R4LnNlY3Rpb25zLmxlbmd0aCAtIDFdO31cclxuICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihfX3Rva2Vuc1sxXT09J2dyb3VwJyl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IF9fdG9rZW5zO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7IFxyXG4gICAgICAgICAgICAgICAgICBjdHguZ3JvdXBzLnB1c2goX19wYXJzZV9wcm9wZXJ0aWVzKHRva2Vuc1syXSkpO1xyXG4gICAgICAgICAgICAgICAgICBfX2N1ciA9IGN0eC5ncm91cHNbY3R4Lmdyb3Vwcy5sZW5ndGggLSAxXTt9XHJcbiAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihfX3Rva2Vuc1sxXT09J2RldGFpbCcpe1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyBcclxuICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBfX3Rva2VucztcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpe1xyXG4gICAgICAgICAgICAgICAgICBjdHguZGV0YWlscy5wdXNoKF9fcGFyc2VfcHJvcGVydGllcyh0b2tlbnNbMl0pKTtcclxuICAgICAgICAgICAgICAgICAgX19jdXIgPSBjdHguZGV0YWlsc1tjdHguZGV0YWlscy5sZW5ndGggLSAxXTt9XHJcbiAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9ZWxzZXsgdGhyb3cgbmV3IEVycm9yKCdUYWJibHkgOiBVbnJlY29nbml6ZWQgdGV4dCBhZnRlciBERUZJTkUnKX0gIFxyXG4gICAgICAgIH1lbHNleyBcclxuICAgICAgICAgIGlmKF9fZnVuYyl7XHJcbiAgICAgICAgICAgIF9fZnVuY0JvZHkgKz0gbztcclxuICAgICAgICAgICAgX19mdW5jQm9keSArPSAnXFxuJztcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGFiYmx5IDogVW5yZWNvZ25pemVkIHRleHQnKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29kZS5zcGxpdCgnXFxuJykuZm9yRWFjaChmdW5jdGlvbihsKXsgXHJcbiAgICAgICAgX19wYXJzZUxpbmUobC50cmltKCksbCkoX19jb250ZXh0KTsgXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHsgY29udGV4dCA6IF9fY29udGV4dCB9O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb2R1bGUudGFiYmx5ID0geyBleGVjdXRlIDogX19FeGVjdXRlQ29kZSB9O1xyXG5cclxuICB9KF9tb2R1bGUpKTtcclxuICAgICAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFJlcG9ydHNcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUgICAgICAgICAgICAgICAgPSB7fTsgICAgICBcclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuZ2VuZXJhdGVSZXBvcnQgPSBmdW5jdGlvbihyZCwgZGF0YSwgbWVkaWF0b3Ipe1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuYmVnaW4nIH0pO1xyXG4gICAgICB2YXIgX19yZCAgICAgID0gcmQgfHwgbW9kdWxlLlJlcG9ydEVuZ2luZS5yZDtcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBUcmFuc2Zvcm1hciBsb3MgZGF0b3NcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICB2YXIgX19kYXRhU2V0ID0gX19yZC5jb250ZXh0LnBhcnNlRGF0YSA/IF9fcmQuY29udGV4dC5wYXJzZURhdGEoX19yZCwgZGF0YSwgbWVkaWF0b3IubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkYXRhO1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQubG9nLm1lc3NhZ2UnLCB0ZXh0IDogJ0luaWNpYWxpemFuZG8uLi4nIH0pO1xyXG4gICAgICBjb25zb2xlLnRpbWUoJ1JlbmRlcicpO1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEluaWNpYWxpemFyIGZ1bmNpb25lcyBwYXJhIGxhIGdlbmVyYWNpw7NuIGRlIGNvbnRlbmlkbyBwZXJzb25hbGl6YWRvXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19pbml0Q29udGVudFByb3ZpZGVycygpe1xyXG4gICAgICAgIFtfX3JkLmNvbnRleHQuc2VjdGlvbnMsIF9fcmQuY29udGV4dC5kZXRhaWxzLCBfX3JkLmNvbnRleHQuZ3JvdXBzXVxyXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24oYSxiKXsgcmV0dXJuIGEuY29uY2F0KGIpOyB9LCBbXSlcclxuICAgICAgICAubWFwKGZ1bmN0aW9uKHMpe1xyXG4gICAgICAgICAgaWYocy52YWx1ZVByb3ZpZGVyZm4pe1xyXG4gICAgICAgICAgICBzLnZhbHVlUHJvdmlkZXIgPSBtb2R1bGUudGVtcGxhdGVzLmdldFZhbHVlKHMudmFsdWVQcm92aWRlcmZuLCBzZWxmKTsgXHJcbiAgICAgICAgICAgIGRlbGV0ZSBzLnZhbHVlUHJvdmlkZXJmbjsgICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihzLmZvb3RlclZhbHVlUHJvdmlkZXJmbil7XHJcbiAgICAgICAgICAgIHMuZm9vdGVyVmFsdWVQcm92aWRlciA9IG1vZHVsZS50ZW1wbGF0ZXMuZ2V0VmFsdWUocy5mb290ZXJWYWx1ZVByb3ZpZGVyZm4sIHNlbGYpOyBcclxuICAgICAgICAgICAgZGVsZXRlIHMuZm9vdGVyVmFsdWVQcm92aWRlcmZuOyBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKHMuaGVhZGVyVmFsdWVQcm92aWRlcmZuKXtcclxuICAgICAgICAgICAgcy5oZWFkZXJWYWx1ZVByb3ZpZGVyID0gbW9kdWxlLnRlbXBsYXRlcy5nZXRWYWx1ZShzLmhlYWRlclZhbHVlUHJvdmlkZXJmbiwgc2VsZik7IFxyXG4gICAgICAgICAgICBkZWxldGUgcy5oZWFkZXJWYWx1ZVByb3ZpZGVyZm47XHJcbiAgICAgICAgICB9ICBcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gR2VuZXJhY2nDs24gZGUgbGFzIHNlY2Npb25lcyBkZSBjYWJlY2VyYSBkZSBsYXMgYWdydXBhY2lvbmVzXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICB2YXIgX19NRVJHRV9BTkRfU0VORCA9IGZ1bmN0aW9uKHQsIHAsIGZua2V5KXsgbWVkaWF0b3Iuc2VuZChtb2R1bGUudGVtcGxhdGVzLm1lcmdlKHQsIHAsIGZua2V5KSk7IH07XHJcbiAgICAgIGZ1bmN0aW9uIF9fZ3JvdXBzSGVhZGVycygpe1xyXG4gICAgICAgIF9fZ3JvdXBzLmZvckVhY2goZnVuY3Rpb24oZywgaWkpe1xyXG4gICAgICAgICAgaWYoaWkgPCBfX2JyZWFrSW5kZXgpIHJldHVybjsgXHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuc2VjdGlvbnMuZ3JvdXAuaGVhZGVyJywgdmFsdWUgOiBnLmlkIH0pOyAgXHJcbiAgICAgICAgICBpZihnLmRlZmluaXRpb24uaGVhZGVyKSByZXR1cm4gX19NRVJHRV9BTkRfU0VORChnLmRlZmluaXRpb24uaGVhZGVyLCBnLCAnY29tcGlsZWRfaGVhZGVyZm4nKTtcclxuICAgICAgICAgIGlmKGcuZGVmaW5pdGlvbi5oZWFkZXJWYWx1ZVByb3ZpZGVyKSByZXR1cm4gbWVkaWF0b3Iuc2VuZChnLmRlZmluaXRpb24uaGVhZGVyVmFsdWVQcm92aWRlcihnKSk7IFxyXG4gICAgICAgIH0pOyAgICBcclxuICAgICAgfVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gR2VuZXJhY2nDs24gZGUgbGFzIHNlY2Npb25lcyBkZSByZXN1bWVuIGRlIGxhcyBhZ3J1cGFjaW9uZXNcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9fZ3JvdXBzRm9vdGVycyhpbmRleCl7XHJcbiAgICAgICAgdmFyIF9fZ2cgPSBfX2dyb3Vwcy5tYXAoZnVuY3Rpb24oZyl7cmV0dXJuIGc7fSk7IFxyXG4gICAgICAgIGlmKGluZGV4KSBfX2dnLnNwbGljZSgwLCBpbmRleCk7XHJcbiAgICAgICAgX19nZy5yZXZlcnNlKCkuZm9yRWFjaCggZnVuY3Rpb24oZyl7XHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuc2VjdGlvbnMuZ3JvdXAuZm9vdGVyJywgdmFsdWUgOiBnLmlkIH0pOyAgICAgICAgICBcclxuICAgICAgICAgIGlmKGcuZGVmaW5pdGlvbi5mb290ZXIpIHJldHVybiBfX01FUkdFX0FORF9TRU5EKGcuZGVmaW5pdGlvbi5mb290ZXIsIGcsICdjb21waWxlZF9mb290ZXJmbicpO1xyXG4gICAgICAgICAgaWYoZy5kZWZpbml0aW9uLmZvb3RlclZhbHVlUHJvdmlkZXIpIHJldHVybiBtZWRpYXRvci5zZW5kKGcuZGVmaW5pdGlvbi5mb290ZXJWYWx1ZVByb3ZpZGVyKGcpKTtcclxuICAgICAgICB9KTsgXHJcbiAgICAgIH0gXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEdlbmVyYWNpw7NuIGRlIGxhcyBzZWNjaW9uZXMgZGUgZGV0YWxsZVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX2RldGFpbHNTZWN0aW9ucygpe1xyXG4gICAgICAgIF9fZGV0YWlscy5mb3JFYWNoKGZ1bmN0aW9uKGQpe1xyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnNlY3Rpb25zLmRldGFpbCcsIHZhbHVlIDogZC5pZCB9KTtcclxuICAgICAgICAgIGlmKGQudGVtcGxhdGUpIHJldHVybiBfX01FUkdFX0FORF9TRU5EKGQudGVtcGxhdGUsIGQsICdjb21waWxlZGZuJylcclxuICAgICAgICAgIGlmKGQudmFsdWVQcm92aWRlcikgcmV0dXJuIG1lZGlhdG9yLnNlbmQoZC52YWx1ZVByb3ZpZGVyKGQpKTtcclxuICAgICAgICB9KSAgICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEdlbmVyYWNpw7NuIGRlIGxhcyBzZWNjaW9uZXMgZGUgdG90YWwgZ2VuZXJhbFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX2dyYW5kVG90YWxTZWN0aW9ucygpe1xyXG4gICAgICAgIF9fdG90YWxzLmZvckVhY2goZnVuY3Rpb24odCl7XHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuc2VjdGlvbnMudG90YWwnLCB2YWx1ZSA6IHQuaWQgfSk7XHJcbiAgICAgICAgICBpZih0LnRlbXBsYXRlKSByZXR1cm4gX19NRVJHRV9BTkRfU0VORCh0LnRlbXBsYXRlLCB0LCAnY29tcGlsZWRmbicpXHJcbiAgICAgICAgICBpZih0LnZhbHVlUHJvdmlkZXIpIHJldHVybiBtZWRpYXRvci5zZW5kKHQudmFsdWVQcm92aWRlcih0KSk7XHJcbiAgICAgICAgfSkgICAgICAgICAgICBcclxuICAgICAgfSBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gR2VuZXJhY2nDs24gZGUgbGFzIHNlY2Npb25lcyBkZSBjYWJlY2VyYSBkZWwgaW5mb3JtZVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX3JlcG9ydEhlYWRlclNlY3Rpb25zKCl7XHJcbiAgICAgICAgX19oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odCl7XHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuc2VjdGlvbnMuaGVhZGVyJywgdmFsdWUgOiB0IH0pO1xyXG4gICAgICAgICAgaWYodC50ZW1wbGF0ZSkgcmV0dXJuIF9fTUVSR0VfQU5EX1NFTkQodC50ZW1wbGF0ZSwgdCwgJ2NvbXBpbGVkZm4nKVxyXG4gICAgICAgICAgaWYodC52YWx1ZVByb3ZpZGVyKSByZXR1cm4gbWVkaWF0b3Iuc2VuZCh0LnZhbHVlUHJvdmlkZXIodCkpO1xyXG4gICAgICAgIH0pICAgICAgICAgICAgXHJcbiAgICAgIH0gXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEluaWNpYWxpemFyIGVsIG9iamV0byBxdWUgc2lydmUgZGUgYWN1bXVsYWRvclxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX3Jlc29sdmVTdW1tYXJ5T2JqZWN0KCl7XHJcbiAgICAgICAgdmFyIF9fc3VtbWFyeSA9IEpTT04ucGFyc2UoX19yZC5jb250ZXh0LnN1bW1hcnkgfHwgJ3t9Jyk7XHJcbiAgICAgICAgaWYoX19yZC5jb250ZXh0Lm9uSW5pdFN1bW1hcnlPYmplY3QpIHJldHVybiBfX3JkLmNvbnRleHQub25Jbml0U3VtbWFyeU9iamVjdChfX3N1bW1hcnkpOyAgICAgIFxyXG4gICAgICAgIHJldHVybiBfX3N1bW1hcnk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBfX2JyZWFrSW5kZXggPSAtMTsgXHJcblxyXG4gICAgICB2YXIgX19zdW1tYXJ5ICAgID0gX19yZXNvbHZlU3VtbWFyeU9iamVjdCgpO1xyXG4gICAgICB2YXIgX19oZWFkZXJzICAgID0gKF9fcmQuY29udGV4dC5zZWN0aW9ucyB8fCBbXSkud2hlcmUoeyB0eXBlIDogJ2hlYWRlcicgfSk7XHJcbiAgICAgIHZhciBfX3RvdGFscyAgICAgPSAoX19yZC5jb250ZXh0LnNlY3Rpb25zIHx8IFtdKS53aGVyZSh7IHR5cGUgOiAndG90YWwnIH0pO1xyXG4gICAgICB2YXIgX19mb290ZXJzICAgID0gKF9fcmQuY29udGV4dC5zZWN0aW9ucyB8fCBbXSkud2hlcmUoeyB0eXBlIDogJ2Zvb3RlcicgfSk7XHJcbiAgICAgIHZhciBfX2RldGFpbHMgICAgPSBfX3JkLmNvbnRleHQuZGV0YWlscyB8fCBbXTtcclxuICAgICAgdmFyIF9fZ3JvdXBzICAgICA9IF9fcmQuY29udGV4dC5ncm91cHMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGcsIGkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAgbmFtZSAgICAgICA6ICdHJyArIChpKzEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmQgICAgICAgICA6IF9fcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uIDogZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgICAgOiAnJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhICAgICAgIDogbW9kdWxlLmNsb25lKF9fc3VtbWFyeSksICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdCA6IGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fayA9IHZhbHVlW3RoaXMuZGVmaW5pdGlvbi5rZXldLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX0d4ID0gc2VsZi5CU1t0aGlzLm5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LmFsbFtfX2tdID0gX19HeC5hbGxbX19rXSB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5hbGxbX19rXS5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5yZWNvcmRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX19yZXN1bWUgPT09IGZhbHNlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX19yZXN1bWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuY29weSh2YWx1ZSwgdGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9fcmVzdW1lID0gT2JqZWN0LmtleXModGhpcy5kYXRhKS5sZW5ndGggPiAwKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuY29weSh2YWx1ZSwgdGhpcy5kYXRhKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtICA6IGZ1bmN0aW9uKHZhbHVlKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2sgPSB2YWx1ZVt0aGlzLmRlZmluaXRpb24ua2V5XS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19HeCA9IHNlbGYuQlNbdGhpcy5uYW1lXTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3guYWxsW19fa10gPSBfX0d4LmFsbFtfX2tdIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LmFsbFtfX2tdLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LnJlY29yZENvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX19yZXN1bWUgPT09IGZhbHNlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuc3VtKHZhbHVlLCB0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0IDogZnVuY3Rpb24odmFsdWUpeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVbdGhpcy5kZWZpbml0aW9uLmtleV0gPT0gdGhpcy5jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSB8fCBbXTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBzZWxmLkJTID0geyByZXBvcnREZWZpbml0aW9uIDogX19yZCwgbWVkaWF0b3IgOiBtZWRpYXRvciB9OyAgICAgICAgICAgICAgXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gT3JkZW5hciBsb3MgZGF0b3NcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBpZihfX3JkLmNvbnRleHQuaXRlcmF0ZWZuKXtcclxuICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQubG9nLm1lc3NhZ2UnLCB0ZXh0IDogJ0luaWNpYWxpemFuZG8gZWxlbWVudG9zLi4uJyB9KTtcclxuICAgICAgICBfX2RhdGFTZXQuZm9yRWFjaChfX3JkLmNvbnRleHQuaXRlcmF0ZWZuKTtcclxuICAgICAgfVxyXG4gICAgICBpZihfX3JkLmNvbnRleHQub3JkZXJCeSl7XHJcbiAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmxvZy5tZXNzYWdlJywgdGV4dCA6ICdPcmRlbmFuZG8gZGF0b3MuLi4nIH0pO1xyXG4gICAgICAgIF9fZGF0YVNldC5zb3J0QnkoX19yZC5jb250ZXh0Lm9yZGVyQnksIGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEluaWNpYWxpemFyXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgc2VsZi5CUyA9IHsgcmVjb3JkQ291bnQgICAgICA6IDAsIFxyXG4gICAgICAgICAgICAgICAgICBHMCAgICAgICAgICAgICAgIDogbW9kdWxlLmNsb25lKF9fc3VtbWFyeSksXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFTZXQgICAgICAgICAgOiBfX2RhdGFTZXQsXHJcbiAgICAgICAgICAgICAgICAgIHJlcG9ydERlZmluaXRpb24gOiBfX3JkLCBcclxuICAgICAgICAgICAgICAgICAgbWVkaWF0b3IgICAgICAgICA6IG1lZGlhdG9yIH07XHJcbiAgICAgIF9fZ3JvdXBzLmZvckVhY2goIGZ1bmN0aW9uKGcsIGkpeyAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBnLmN1cnJlbnQgPSAoX19kYXRhU2V0ICYmIF9fZGF0YVNldFswXSkgPyBfX2RhdGFTZXRbMF1bZy5kZWZpbml0aW9uLmtleV0gOiAnJztcclxuICAgICAgICBzZWxmLkJTW2cubmFtZV0gPSB7IHJlY29yZENvdW50IDogMCwgYWxsIDoge30gfTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmKF9fcmQuY29udGV4dC5vblN0YXJ0Zm4pIF9fcmQuY29udGV4dC5vblN0YXJ0Zm4oc2VsZi5CUyk7XHJcbiAgICAgIF9faW5pdENvbnRlbnRQcm92aWRlcnMoKTtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnJlbmRlci5yb3dzJyB9KTtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmxvZy5tZXNzYWdlJywgdGV4dCA6ICdHZW5lcmFuZG8gaW5mb3JtZS4uLicgfSk7XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBDYWJlY2VyYXMgZGVsIGluZm9ybWVcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIF9fcmVwb3J0SGVhZGVyU2VjdGlvbnMoKTtcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIENhYmVjZXJhcyBpbmljaWFsZXNcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGlmKF9fZGF0YVNldC5sZW5ndGggPiAwKSBfX2dyb3Vwc0hlYWRlcnMoKTsgXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBJdGVyYXIgc29icmUgbG9zIGVsZW1lbnRvc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgX19kYXRhU2V0LmZvckVhY2goZnVuY3Rpb24ociwgaSl7IFxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBQcm9jZXNhciBlbCBlbGVtZW50b1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgICAgICBcclxuICAgICAgICBzZWxmLkJTLnJlY29yZENvdW50Kys7XHJcbiAgICAgICAgc2VsZi5CUy5pc0xhc3RSb3cgICAgICAgID0gX19kYXRhU2V0Lmxlbmd0aCA9PT0gc2VsZi5CUy5yZWNvcmRDb3VudDtcclxuICAgICAgICBzZWxmLkJTLmlzTGFzdFJvd0luR3JvdXAgPSBzZWxmLkJTLmlzTGFzdFJvdztcclxuICAgICAgICBzZWxmLkJTLnBlcmNlbnQgICAgICA9IChzZWxmLkJTLnJlY29yZENvdW50L19fZGF0YVNldC5sZW5ndGgpICogMTAwOyAgXHJcbiAgICAgICAgc2VsZi5CUy5wcmV2aW91cyAgICAgPSBzZWxmLkJTLmRhdGEgfHwgcjtcclxuICAgICAgICBzZWxmLkJTLmRhdGEgICAgICAgICA9IHI7IFxyXG4gICAgICAgIF9fZ3JvdXBzLmZvckVhY2goIGZ1bmN0aW9uKGcsIGkpeyBcclxuICAgICAgICAgIHNlbGYuQlNbZy5uYW1lXS5kYXRhICA9IE9iamVjdC5jcmVhdGUoZy5kYXRhKTtcclxuICAgICAgICB9KTsgXHJcbiAgICAgICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5zdW0ociwgc2VsZi5CUy5HMCk7ICAgICAgICBcclxuICAgICAgICBpZihfX3JkLmNvbnRleHQub25Sb3dmbikgX19yZC5jb250ZXh0Lm9uUm93Zm4oc2VsZi5CUyk7XHJcbiAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgIDogJ3JlcG9ydC5yZW5kZXIucm93JywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgIDogc2VsZi5CUy5wZXJjZW50LnRvRml4ZWQoMSkgKyAnICUnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgOiBzZWxmLkJTLnBlcmNlbnQgfSk7XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIERldGVybWluYXIgc2kgaGF5IGNhbWJpbyBlbiBhbGd1bmEgZGUgbGFzIGNsYXZlcyBkZSBhZ3J1cGFjacOzblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBpZihfX2dyb3Vwcy5ldmVyeSggZnVuY3Rpb24oZyl7IHJldHVybiBnLnRlc3QocikgfSkpe1xyXG4gICAgICAgICAgX19ncm91cHMuZm9yRWFjaCggZnVuY3Rpb24oZyl7IGcuc3VtKHIpOyB9KTsgICAgICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIF9fZ3JvdXBzLnNvbWUoIGZ1bmN0aW9uKGcsIGkpeyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCFnLnRlc3Qocikpe1xyXG4gICAgICAgICAgICAgIF9fYnJlYWtJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAvLyBQaWVzIGRlIGdydXBvIGRlIGxvcyBxdWUgaGFuIGNhbWJpYWRvXHJcbiAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICBfX2dyb3Vwc0Zvb3RlcnMoX19icmVha0luZGV4KTtcclxuICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgIC8vIEFjdHVhbGl6YXIgbG9zIGdydXBvc1xyXG4gICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgX19ncm91cHMuZm9yRWFjaCggZnVuY3Rpb24oZ3J1cG8sIGlpKXsgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGlpID49IF9fYnJlYWtJbmRleCl7XHJcbiAgICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgLy8gSW5pY2lhbGl6YXIgbG9zIHF1ZSBoYW4gY2FtYmlhZG9cclxuICAgICAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICBncnVwby5pbml0KHIpXHJcbiAgICAgICAgICAgICAgICAgIF9fYnJlYWtJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAvLyBBY3VtdWxhciB2YWxvcmVzIGRlIGxvcyBxdWUgc2lndWVuIGlndWFsXHJcbiAgICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgZ3J1cG8uc3VtKHIpO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIC8vIE5vdGlmaWNhciBkZWwgZXZlbnRvIG9uR3JvdXBDaGFuZ2VcclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICBfX2dyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uKGcpe1xyXG4gICAgICAgICAgICBnLmN1cnJlbnQgPSByW2cuZGVmaW5pdGlvbi5rZXldO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZihfX3JkLmNvbnRleHQub25Hcm91cENoYW5nZWZuKSBfX3JkLmNvbnRleHQub25Hcm91cENoYW5nZWZuKHNlbGYuQlMpOyAgICAgICAgICBcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlICA6ICdyZXBvcnQuc2VjdGlvbnMuZ3JvdXAuY2hhbmdlJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgOiAnX19ncm91cHMnIH0pO1xyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgLy8gQ2FiZWNlcmFzXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICBfX2dyb3Vwc0hlYWRlcnMoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBEZXRlcm1pbmFyIHNpIGVzdGUgZXMgZWwgw7psdGltbyBlbGVtZW50byBkZSBsYSBhZ3J1cGFjacOzbiBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT07XHJcbiAgICAgICAgaWYoX19ncm91cHMubGVuZ3RoICYmICFzZWxmLkJTLmlzTGFzdFJvdyApe1xyXG4gICAgICAgICAgdmFyIF9fbmV4dCAgICAgICAgICAgICAgID0gX19kYXRhU2V0W3NlbGYuQlMucmVjb3JkQ291bnRdOyAgICAgICAgICBcclxuICAgICAgICAgIHNlbGYuQlMuaXNMYXN0Um93SW5Hcm91cCA9ICEgX19ncm91cHMuZXZlcnkoIGZ1bmN0aW9uKGcpe1xyXG4gICAgICAgICAgICB2YXIgX19rID0gZy5kZWZpbml0aW9uLmtleTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fbmV4dFtfX2tdID09PSBzZWxmLkJTLmRhdGFbX19rXTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBTZWNjaW9uZXMgZGUgZGV0YWxsZVxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIF9fZGV0YWlsc1NlY3Rpb25zKCkgICAgICAgICAgICBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZihfX2RhdGFTZXQubGVuZ3RoID4gMCl7IFxyXG4gICAgICAgIHNlbGYuQlMucHJldmlvdXMgPSBzZWxmLkJTLmRhdGE7XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBQaWVzIGRlIGdydXBvXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBfX2dyb3Vwc0Zvb3RlcnMoKTtcclxuICAgICAgfVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gVG90YWwgZ2VuZXJhbFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgX19ncmFuZFRvdGFsU2VjdGlvbnMoKTtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnJlbmRlci5lbmQnIH0pO1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuZW5kJyB9KTtcclxuICAgICAgbWVkaWF0b3IuZmx1c2goKTtcclxuICAgICAgY29uc29sZS50aW1lRW5kKCdSZW5kZXInKTtcclxuICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5jb3B5ICAgID0gZnVuY3Rpb24ocywgZCl7IE9iamVjdC5rZXlzKGQpLm1hcChmdW5jdGlvbihrKXsgZFtrXSA9IHNba107fSk7fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5zdW0gICAgID0gZnVuY3Rpb24ocywgZCl7IE9iamVjdC5rZXlzKGQpLm1hcChmdW5jdGlvbihrKXsgZFtrXSArPSBzW2tdO30pO30gICBcclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuY29tcHV0ZSA9IGZ1bmN0aW9uKGRzLCBuYW1lKXsgcmV0dXJuIGRzLnJlZHVjZSggZnVuY3Rpb24odCwgbyl7IHJldHVybiB0ICsgb1tuYW1lXTsgfSwgMC4wKTsgfVxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5ncm91cCAgID0gZnVuY3Rpb24oYSwgYyl7XHJcblx0ICAgIHZhciBkcyA9IGE7XHJcblx0ICAgIHZhciBfX2YgPSBmdW5jdGlvbihrLCB0KXtcclxuXHQgICAgICBkcy5kaXN0aW5jdCggZnVuY3Rpb24odil7IHJldHVybiB2W2tdOyB9KVx0ICAgICAgICAgICAgXHJcblx0ICAgICAgICAuZm9yRWFjaCAoIGZ1bmN0aW9uKHYpeyBjW3ZdID0gZHMucmVkdWNlKCBmdW5jdGlvbihwLCBjLCBpLCBhKXsgcmV0dXJuIChjW2tdPT12KSA/IHAgKyBjW3RdIDogcDsgfSwgMC4wKTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIF9fZjtcdCAgICAgICAgICAgXHJcblx0ICAgIH1cclxuXHQgICAgcmV0dXJuIF9fZjtcclxuICAgIH1cclxuIFxyXG4gIH0pKF9tb2R1bGUpO1xyXG5cclxufShfX21vZHVsZSwgJ1BvbCcpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9fbW9kdWxlLlBvbDsiLCJpbXBvcnQgcG9sIGZyb20gXCIuL21hcGEuanNcIjtcclxuXHJcblxyXG5sZXQgdG9waWNzID0ge307XHJcbmxldCBzdWJVaWQgPSAtMTtcclxuXHJcbmxldCBzdWJzY3JpYmUgPSBmdW5jdGlvbih0b3BpYywgZnVuYykge1xyXG4gIGlmICghdG9waWNzW3RvcGljXSkge1xyXG4gICAgdG9waWNzW3RvcGljXSA9IFtdO1xyXG4gIH1cclxuICB2YXIgdG9rZW4gPSAoKytzdWJVaWQpLnRvU3RyaW5nKCk7XHJcbiAgdG9waWNzW3RvcGljXS5wdXNoKHtcclxuICAgIHRva2VuOiB0b2tlbixcclxuICAgIGZ1bmM6IGZ1bmNcclxuICB9KTtcclxuICByZXR1cm4gdG9rZW47XHJcbn07XHJcblxyXG5sZXQgcHVibGlzaCA9IGZ1bmN0aW9uKHRvcGljLCBhcmdzKSB7XHJcbiAgaWYgKCF0b3BpY3NbdG9waWNdKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgIHZhciBzdWJzY3JpYmVycyA9IHRvcGljc1t0b3BpY107XHJcbiAgICB2YXIgbGVuID0gc3Vic2NyaWJlcnMgPyBzdWJzY3JpYmVycy5sZW5ndGggOiAwO1xyXG5cclxuICAgIHdoaWxlIChsZW4tLSkge1xyXG4gICAgICBzdWJzY3JpYmVyc1tsZW5dLmZ1bmModG9waWMsIGFyZ3MpO1xyXG4gICAgfVxyXG4gIH0sIDApO1xyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxubGV0IHVuc3Vic2NyaWJlID0gZnVuY3Rpb24odG9rZW4pIHtcclxuICBmb3IgKHZhciBtIGluIHRvcGljcykge1xyXG4gICAgaWYgKHRvcGljc1ttXSkge1xyXG4gICAgICBmb3IgKHZhciBpID0gMCwgaiA9IHRvcGljc1ttXS5sZW5ndGg7IGkgPCBqOyBpKyspIHtcclxuICAgICAgICBpZiAodG9waWNzW21dW2ldLnRva2VuID09PSB0b2tlbikge1xyXG4gICAgICAgICAgdG9waWNzW21dLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHN1YnNjcmliZSxcclxuICBwdWJsaXNoLFxyXG4gIHVuc3Vic2NyaWJlXHJcbn0iLCJpbXBvcnQgcG9sIGZyb20gXCIuL21hcGFcIjtcclxuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9wdWJTdWIuU2VydmljZVwiO1xyXG5cclxuY29uc3QgRVZFTlRTID0gWydbb24tY2xpY2tdJywgJ1tvbi1wdWJsaXNoXScsICdbcm91dGUtbGlua10nXTtcclxuXHJcbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKGNvbnRhaW5lciwgaGFuZGxlcnMsIGNvbnRleHQpIHtcclxuXHJcbiAgZnVuY3Rpb24gaW5uZXJIVE1MKGUsIHZhbHVlKSB7IGUuaW5uZXJIVE1MID0gdmFsdWU7IH1cclxuXHJcbiAgRVZFTlRTLmZvckVhY2goKHNlbGVjdG9yLCBpbmRleCkgPT4ge1xyXG4gICAgcG9sLnRvQXJyYXkocG9sLiQoc2VsZWN0b3IsIGNvbnRhaW5lcikpXHJcbiAgICAgICAuZm9yRWFjaCggZSA9PiB7XHJcbiAgICAgICAgIGxldCBuYW1lICAgPSBzZWxlY3Rvci5yZXBsYWNlKCdbJywgJycpLnJlcGxhY2UoJ10nLCAnJyk7XHJcbiAgICAgICAgIGxldCB2YWx1ZSAgPSBlLmF0dHJpYnV0ZXNbbmFtZV0udmFsdWVcclxuICAgICAgICAgbGV0IHRva2VucyA9IHZhbHVlLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgLy8gb24tY2xpY2tcclxuICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICBsZXQgZm4gPSBoYW5kbGVyc1t2YWx1ZV0gfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgcG9sLnRlbXBsYXRlcy5nZXRWYWx1ZSh2YWx1ZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgZS5vbmNsaWNrID0gKGV2ZW50KSA9PiBmbihlLCBldmVudCk7XHJcbiAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgLy8gb24tcHVibGlzaFxyXG4gICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgIGlmIChpbmRleCA9PT0gMSkge1xyXG4gICAgICAgICAgIHB1YnN1Yi5zdWJzY3JpYmUodG9rZW5zWzBdLCAobWVzc2FnZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgaWYgKHRva2Vuc1sxXSkge1xyXG4gICAgICAgICAgICAgICBsZXQgZm4gPSBoYW5kbGVyc1t0b2tlbnNbMV1dIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2wudGVtcGxhdGVzLmdldFZhbHVlKHRva2Vuc1sxXSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgIGlmIChmbikgZm4oZSwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgIGlubmVySFRNTChlLCBkYXRhKTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9KVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgLy8gcm91dGUtbGlua1xyXG4gICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgIGlmIChpbmRleCA9PT0gMikge1xyXG4gICAgICAgICAgIGUub25jbGljayA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgbGV0IHJvdXRlciA9IGNvbnRleHQucm91dGVyO1xyXG4gICAgICAgICAgICAgbGV0IHJvdXRlID0gcm91dGVyLm5vcm1hbGl6ZVBhdGgoZS50YXJnZXQuaHJlZik7XHJcbiAgICAgICAgICAgICBpZiAocm91dGVyLmN1cnJlbnQgIT0gcm91dGUpIHtcclxuICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICByb3V0ZXIubmF2aWdhdGVUbyhyb3V0ZSk7XHJcbiAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICB9KTsgXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgXHJcbiAgYWRkRXZlbnRMaXN0ZW5lcnNcclxufSIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYCAgXHJcbjxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWJvdHRvbSB3My1hbmltYXRlLWxlZnRcIj5cclxuICA8aDE+U29icmUgTm90YXMgQXBwPC9oMT5cclxuICA8cCBzdHlsZT1cInRleHQtaW5kZW50OjFlbTtcIj5cclxuICAgIE5vdGFzIEFwcCBlcyB1bmEgcHJ1ZWJhIGRlIGNvbmNlcHRvIGRlIGxvIHF1ZSBwb2Ryw61hIHNlciB1biA8c3BhbiBjbGFzcz1cInczLWJvbGQgdzMtaXRhbGljXCI+ZnJhbWV3b3JrPC9zcGFuPiBcclxuICAgIHNlbmNpbGxvIGNvbiBlbCBjdWFsIGRlc2Fycm9sbGFyIGFwbGljYWNpb25lcyA8c3BhbiBjbGFzcz1cInczLWJvbGQgdzMtaXRhbGljXCI+U1BBPC9zcGFuPiBiYXNhZGFzIMO6bmljYW1lbnRlIGVuIDxzcGFuIGNsYXNzPVwidzMtYm9sZFwiPkhUTUw1PC9zcGFuPiB5IDxzcGFuIGNsYXNzPVwidzMtYm9sZFwiPkphdmFTY3JpcHQ8L3NwYW4+LlxyXG4gIDwvcD5cclxuICA8cCBzdHlsZT1cInRleHQtaW5kZW50OjFlbTtcIj5cclxuICAgIEVzdGFzIGFwbGljYWNpb25lcyBzZXLDrWFuIHN1YmNlcHRpYmxlcyBkZSBzZXIgaW5zdGFsYWRhcyBlbiBkaXNwb3NpdGl2b3MgbcOzdmlsZXMgY29tbyB1bmEgPHNwYW4gY2xhc3M9XCJ3My1ib2xkIHczLWl0YWxpY1wiPlBXQTwvc3Bhbj4uXHJcbiAgPC9wPlxyXG4gIDx1bCBjbGFzcz1cInczLXVsIHczLWJvcmRlclwiPlxyXG4gICAgPGxpPjxoMj5SZWZlcmVuY2lhczwvaDI+PC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9lcy53aWtpcGVkaWEub3JnL3dpa2kvU2luZ2xlLXBhZ2VfYXBwbGljYXRpb25cIiB0YXJnZXQ9XCJfYmxhbmtcIj5TUEEgKFNpbmdsZS1wYWdlIGFwcGxpY2F0aW9uKTwvYT48L2xpPlxyXG4gICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2VzLndpa2lwZWRpYS5vcmcvd2lraS9Qcm9ncmVzc2l2ZV9XZWJfQXBwc1wiIHRhcmdldD1cIl9ibGFua1wiPlBXQSAoUHJvZ3Jlc3NpdmUgV2ViIEFwcHMpPC9hPjwvbGk+XHJcbiAgICA8bGk+PGgyPlJlcG9zaXRvcmlvPC9oMj48L2xpPlxyXG4gICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmNhc3Ryb2dvL25vdGFzLWFwcFwiIHRhcmdldD1cIl9ibGFua1wiPmh0dHBzOi8vZ2l0aHViLmNvbS9yY2FzdHJvZ28vbm90YXMtYXBwPC9hPjwvbGk+XHJcbiAgPC91bD5cclxuICA8cCBzdHlsZT1cInRleHQtaW5kZW50OjFlbTtcIj5cclxuICAgIFBhcmEgc3UgZGVzYXJyb2xsbyBubyBzZSBoYW4gdXRpbGl6YWRvIG5pbmd1bm8gZGUgbG9zIDxzcGFuIGNsYXNzPVwidzMtYm9sZCB3My1pdGFsaWNcIj5mcmFtZXdvcmtzPC9zcGFuPiBleGlzdGVudGVzIGNvbW8gcHVlZGVuIHNlciBBbmd1bGFyLCBSZWFjdCBvIFZ1ZS5qcy5cclxuICA8L3A+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyIHczLW1hcmdpbi1ib3R0b20gdzMtY2VudGVyXCI+XHJcbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYWJvdXQtYnRuLWJhY2sgY2xhc3M9XCJ3My1idXR0b24gdzMtYmxhY2tcIj5Wb2x2ZXI8L2J1dHRvbj5cclxuPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG5cclxuICBsZXQgY29tcG9uZW50ID0ge1xyXG4gICAgcm9vdCAgIDoge30sXHJcbiAgICBpbml0ICAgOiBmdW5jdGlvbihjb250YWluZXIpeyB9LFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgdGhpcy5yb290ID0gcG9sLmJ1aWxkKCdkaXYnLCBfX3RlbXBsYXRlKTtcclxuICAgICAgcmV0dXJuIHRoaXMucm9vdDtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1thYm91dC1idG4tYmFja10nKVxyXG4gICAgICAgICAgICAgICAub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICBoaXN0b3J5LmJhY2soKTtcclxuICAgICAgICAgICAgICAgfTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG5cclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYVwiO1xyXG5pbXBvcnQgcHVic3ViIGZyb20gXCIuLi9saWIvcHViU3ViLlNlcnZpY2VcIjtcclxuaW1wb3J0IHV0aWxzIGZyb20gXCIuLi9saWIvdXRpbHNcIjtcclxuXHJcbmNvbnN0IF9fVEVNUExBVEUgPSBgICBcclxuPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lciB3My1tYXJnaW4tYm90dG9tIHczLWFuaW1hdGUtYm90dG9tXCI+XHJcbiAgPGRpdiBjbGFzcz1cInczLWJvcmRlciB3My1tYXJnaW4tdG9wXCI+XHJcbiAgICA8YnV0dG9uIG9uLWNsaWNrPVwiZXhwYW5kQ29sbGFwc2VcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1ibG9jayB3My1sZWZ0LWFsaWduXCI+XHJcbiAgICAgIDxzcGFuIG9uLXB1Ymxpc2g9XCJtdW5pY2lwaW8uY2hhbmdlOmNzc1wiPkJ1ZW5hdmVudHVyYTwvc3Bhbj48aSBjbGFzcz1cInczLXJpZ2h0IHczLWxhcmdlIGZhIGZhLWNhcmV0LWRvd25cIj48L2k+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxkaXYgY2xhc3M9XCJ3My1oaWRlXCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cInczLXVsXCI+XHJcbiAgICAgICAgPGxpIG9uLWNsaWNrPVwicmVxdWVzdERhdGFcIiBpZD1cImxvYy00NTAyMlwiPkJ1ZW5hdmVudHVyYTwvbGk+XHJcbiAgICAgICAgPGxpIG9uLWNsaWNrPVwicmVxdWVzdERhdGFcIiBpZD1cImxvYy0yODA3OVwiPk1hZHJpZDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwidzMtbWFyZ2luLXRvcCB3My1oaWRlXCIgaWQ9XCJhZW1ldEFwaS1jb250YWluZXJcIiBzdHlsZT1cInBhZGRpbmc6MDtcIj5cclxuICAgIDxkaXYgaWQ9XCJwcm9ncmVzcy1iYXItY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ3My1jZW50ZXJcIj5DYXJnYW5kbyBkYXRvcyBkZXNkZSBsYSBBRU1FVC4uLjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidzMtYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cInByb2dyZXNzLWJhclwiIGNsYXNzPVwidzMtZ3JlZW5cIiBzdHlsZT1cImhlaWdodDoyNHB4O3dpZHRoOjAlXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuXHJcbmZ1bmN0aW9uIGFlbWV0Q29tcG9uZW50KCkge1xyXG5cclxuICBjb25zdCBfX1RFTVBMQVRFID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtdGVhbCB3My1jZW50ZXIgdzMtc21hbGwgdzMtcGFkZGluZ1wiPlxyXG4gICAge2ZuLmZvcm1hdEZlY2hhOmVsYWJvcmFkb31cclxuICA8L2Rpdj5cclxuICA8ZGl2IHN0eWxlPVwicGFkZGluZzowXCI+XHJcbiAgICA8aDMgY2xhc3M9XCJ3My1jZW50ZXIgdzMtYm9yZGVyLWJvdHRvbVwiPntmbi5mb3JtYXRGZWNoYTpwcmVkaWNjaW9uLmRpYVswXS5mZWNoYTpkYXl9PC9oMz5cclxuICAgIDxkaXY+e2ZuLnNob3dEYXk6cm93cy0wfTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInczLXNtYWxsIHczLXRlYWwgdzMtcGFkZGluZyB3My1jZW50ZXJcIj5cclxuICAgICAgPGRpdj48aSBjbGFzcz1cImZhIGZhLWFycm93LXVwXCI+PC9pPiB7cHJlZGljY2lvbi5kaWFbMF0ub3J0b308L2Rpdj5cclxuICAgICAgPGRpdj48aSBjbGFzcz1cImZhIGZhLWFycm93LWRvd25cIj48L2k+IHtwcmVkaWNjaW9uLmRpYVswXS5vY2Fzb308L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxici8+XHJcbiAgPGRpdiBzdHlsZT1cInBhZGRpbmc6MFwiPlxyXG4gICAgPGgzIGNsYXNzPVwidzMtY2VudGVyIHczLWJvcmRlci1ib3R0b21cIj57Zm4uZm9ybWF0RmVjaGE6cHJlZGljY2lvbi5kaWFbMV0uZmVjaGE6ZGF5fTwvaDM+XHJcbiAgICA8ZGl2Pntmbi5zaG93RGF5OnJvd3MtMX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ3My1zbWFsbCB3My10ZWFsIHczLXBhZGRpbmcgdzMtY2VudGVyXCI+XHJcbiAgICAgIDxkaXY+PGkgY2xhc3M9XCJmYSBmYS1hcnJvdy11cFwiPjwvaT4ge3ByZWRpY2Npb24uZGlhWzFdLm9ydG99PC9kaXY+XHJcbiAgICAgIDxkaXY+PGkgY2xhc3M9XCJmYSBmYS1hcnJvdy1kb3duXCI+PC9pPiB7cHJlZGljY2lvbi5kaWFbMV0ub2Nhc299PC9kaXY+IFxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGJyLz5cclxuICA8ZGl2IHN0eWxlPVwicGFkZGluZzowXCI+XHJcbiAgICA8aDMgY2xhc3M9XCJ3My1jZW50ZXIgdzMtYm9yZGVyLWJvdHRvbVwiPntmbi5mb3JtYXRGZWNoYTpwcmVkaWNjaW9uLmRpYVsyXS5mZWNoYTpkYXl9PC9oMz5cclxuICAgIDxkaXY+e2ZuLnNob3dEYXk6cm93cy0yfTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInczLXNtYWxsIHczLXRlYWwgdzMtcGFkZGluZyB3My1jZW50ZXJcIj5cclxuICAgICAgPGRpdj48aSBjbGFzcz1cImZhIGZhLWFycm93LXVwXCI+PC9pPiB7cHJlZGljY2lvbi5kaWFbMl0ub3J0b308L2Rpdj5cclxuICAgICAgPGRpdj48aSBjbGFzcz1cImZhIGZhLWFycm93LWRvd25cIj48L2k+IHtwcmVkaWNjaW9uLmRpYVsyXS5vY2Fzb308L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PmA7XHJcblxyXG4gIGxldCBmbiA9IHsgXHJcbiAgICBmb3JtYXRGZWNoYSA6IGZ1bmN0aW9uKHZhbHVlLCBjdHgsIG9wdGlvbnMpe1xyXG4gICAgICBsZXQgdG9rZW5zID0gdmFsdWUuc3BsaXQoJ1QnKTtcclxuICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9uc1swXSA9PT0gJ2RhdGUnKSByZXR1cm4gdG9rZW5zWzBdO1xyXG4gICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zWzBdID09PSAndGltZScpIHJldHVybiB0b2tlbnNbMV07XHJcbiAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnNbMF0gPT09ICdkYXknKXtcclxuICAgICAgICB0b2tlbnMgPSB0b2tlbnNbMF0uc3BsaXQoJy0nKTtcclxuICAgICAgICBsZXQgbm9tYnJlcyA9IFsnRG9taW5nbycsICdMdW5lcycsICdNYXJ0ZXMnLCAnTWnDqXJjb2xlcycsICdKdWV2ZXMnLCAnVmllcm5lcycsICdTYWJhZG8nXTtcclxuICAgICAgICBsZXQgZGF5ICAgICA9IG5ldyBEYXRlKH5+dG9rZW5zWzBdLCB+fnRva2Vuc1sxXSAtIDEsIH5+dG9rZW5zWzJdKS5nZXREYXkoKTtcclxuICAgICAgICByZXR1cm4gJ3swfSB7MX0nLmZvcm1hdChub21icmVzW2RheV0sIH5+dG9rZW5zWzJdKTtcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuICd7MX0gLSB7MH0nLmZvcm1hdCguLi50b2tlbnMpXHJcbiAgICB9LFxyXG4gICAgc2hvd0RheTogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgZnVuY3Rpb24gcmVuZGVyUm93KHNiLCByb3cpIHtcclxuICAgICAgICBsZXQgcm93X3RlbXBsYXRlID0gYFxyXG4gICAgICAgICAgPHRyIGNsYXNzPVwidzMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDx0ZD57cm93LnBlcmlvZG99OjAwPC90ZD5cclxuICAgICAgICAgICAgPHRkPntyb3cuY2llbG99PC90ZD5cclxuICAgICAgICAgICAgPHRkPntyb3cudGVtcGVyYXR1cmF9PC90ZD5cclxuICAgICAgICAgICAgPHRkPntmbi5mb3JtYXRaZXJvOnJvdy5sbHV2aWF9PC90ZD5cclxuICAgICAgICAgICAgPHRkPjxpIGNsYXNzPVwiZmEgZmEtMnggZmEtbG9uZy1hcnJvdy1yaWdodCBwb2wte3Jvdy52aWVudG9bMF19XCI+PC9pPiB7cm93LnZpZW50b1sxXX08L3RkPlxyXG4gICAgICAgICAgPC90cj5gO1xyXG4gICAgICAgIGxldCByb3dfd3JhcHBlciA9IHtyb3csIGZufTtcclxuICAgICAgICByZXR1cm4gc2IuYXBwZW5kKHJvd190ZW1wbGF0ZS5mb3JtYXQocm93X3dyYXBwZXIpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZGF0YS5yZWR1Y2UocmVuZGVyUm93LCBwb2wuc3RyaW5nQnVpbGRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJzx0YWJsZSBjbGFzcz1cInczLXRhYmxlIHczLWJvcmRlcmVkIHczLXNtYWxsIHczLXN0cmlwZWRcIj4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCc8dHIgY2xhc3M9XCJ3My1jZW50ZXIgdzMtdGVhbFwiPicgKyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGg+SG9yYTwvdGg+JyArIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzx0aD5DaWVsbzwvdGg+JyArIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzx0aD5UZW1wPGJyPsK6QzwvdGg+JyArIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzx0aD5MbHV2aWE8YnI+bW1tPC90aD4nICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHRoPlZpZW50bzxicj5rbS9oPC90aD4nICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvdHI+JykpXHJcbiAgICAgICAgICAgICAgICAgLmFwcGVuZCgnPC90YWJsZT4nKVxyXG4gICAgICAgICAgICAgICAgIC52YWx1ZTtcclxuICAgIH0sXHJcbiAgICBmb3JtYXRaZXJvOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlID09ICcwJyA/ICcnIDogdmFsdWU7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGV0IGNvbXBvbmVudCA9IHtcclxuICAgIHJvb3QgICA6IHt9LFxyXG4gICAgaW5pdCAgIDogZnVuY3Rpb24oY29udGFpbmVyKXsgfSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIHRoaXMucm9vdCA9IHBvbC5idWlsZCgnZGl2JywgX19URU1QTEFURS5mb3JtYXQodGhpcy5kYXRhKSk7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvb3Q7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICB3aXRoRGF0YSA6IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKGRhdGEpWzBdO1xyXG4gICAgICB0aGlzLmRhdGEuZm4gPSBmbjtcclxuICAgICAgdGhpcy5kYXRhXHJcbiAgICAgICAgICAucHJlZGljY2lvblxyXG4gICAgICAgICAgLmRpYVxyXG4gICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgZGlhLCBpKSB7XHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIC8vIEZpbHRyYXIgZGF0b3MgZGVsIGTDrWEgYW50ZXJpb3JcclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgLy9sZXQgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgLy9sZXQgdGFyZ2V0RGF0ZSA9IGZuLmZvcm1hdEZlY2hhKGRpYS5mZWNoYSwgbnVsbCwgWydkYXRlJ10pO1xyXG4gICAgICAgICAgICAvL2xldCB0b2RheSAgICAgID0gJ3swIzAwMDB9LXsxIzAwfS17MiMwMH0nLmZvcm1hdChub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCkgKyAxLCBub3cuZ2V0RGF0ZSgpKTtcclxuICAgICAgICAgICAgLy9pZiAodGFyZ2V0RGF0ZSA8IHRvZGF5KSB7XHJcbiAgICAgICAgICAgIC8vICByZXR1cm4gYTtcclxuICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIC8vIEFncnVwYXIgbG9zIGRhdG9zIHBvciBob3JhXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIGxldCBncm91cCA9IFtdLmNvbmNhdChkaWEuZXN0YWRvQ2llbG8ubWFwKCBmdW5jdGlvbihlKXsgcmV0dXJuIHsgdCA6ICdjJywgcGVyaW9kbyA6IGUucGVyaW9kbywgdmFsdWUgOiBlLmRlc2NyaXBjaW9uIH19KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYS50ZW1wZXJhdHVyYS5tYXAoIGZ1bmN0aW9uKGUpeyByZXR1cm4geyB0IDogJ3QnLCBwZXJpb2RvIDogZS5wZXJpb2RvLCB2YWx1ZSA6IGUudmFsdWUgfX0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhLnByZWNpcGl0YWNpb24ubWFwKCBmdW5jdGlvbihlKXsgcmV0dXJuIHsgdCA6ICdwJywgcGVyaW9kbyA6IGUucGVyaW9kbywgdmFsdWUgOiBlLnZhbHVlIH19KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYS52aWVudG9BbmRSYWNoYU1heFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLndoZXJlKGUgPT4gZS52ZWxvY2lkYWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKCBmdW5jdGlvbihlKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHQgICAgICAgOiAndicsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJpb2RvIDogZS5wZXJpb2RvLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6IFtlLmRpcmVjY2lvblswXSwgZS52ZWxvY2lkYWRbMF1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmdyb3VwQnkoJ3BlcmlvZG8nKTtcclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgLy8gY29udmVydGlyIGVuIGRhdG9zIHRhYnVsYWRvc1xyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICBhWydyb3dzLXswfScuZm9ybWF0KGkpXSA9IE9iamVjdC5rZXlzKGdyb3VwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoIGZ1bmN0aW9uKHJvd3MsIGtleSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpbHRyYXIgbG9zIGRhdG9zIGRlIGhvcmFzIGFudGVyaW9yZXMgYSBsYSBhY3R1YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiAoaSA9PSAwICYmIGtleSA8ICd7MCMwMH0nLmZvcm1hdChub3cuZ2V0SG91cnMoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICByZXR1cm4gcm93cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRvc0hvcmEgPSBncm91cFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cy5wdXNoKCB7IHBlcmlvZG8gICAgIDoga2V5LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2llbG8gICAgICAgOiBkYXRvc0hvcmEud2hlcmUoeyB0IDogJ2MnIH0pWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyYSA6IGRhdG9zSG9yYS53aGVyZSh7IHQgOiAndCcgfSlbMF0udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxsdXZpYSAgICAgIDogZGF0b3NIb3JhLndoZXJlKHsgdCA6ICdwJyB9KVswXS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmllbnRvICAgICAgOiBkYXRvc0hvcmEud2hlcmUoeyB0IDogJ3YnIH0pWzBdLnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvd3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnRCeSgncGVyaW9kbycpO1xyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgIH0sIHRoaXMuZGF0YSk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY3R4KXtcclxuXHJcbiAgbGV0IGFlbWV0Q29udGFpbmVyO1xyXG4gIGxldCBwcm9ncmVzc0JhckNvbnRhaW5lcjtcclxuICBsZXQgcHJvZ3Jlc3NCYXI7XHJcblxyXG4gIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGRhdGEgICA6IHsgXHJcbiAgICAgIG11bmljaXBpb3MgOiB7IFxyXG4gICAgICAgICc0NTAyMicgOiAnQnVlbmF2ZW50dXJhIChUT0xFRE8pJyxcclxuICAgICAgICAnMjgwNzknIDogJ01hZHJpZCdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ2RpdicsIF9fVEVNUExBVEUpO1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBpbml0QWxsKGNvbnRhaW5lcik7XHJcbiAgICB9LFxyXG4gICAgZGlzcG9zZSA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJZCk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRIYW5kbGVycyA6IHsgXHJcbiAgICAgIGV4cGFuZENvbGxhcHNlIDogZXhwYW5kQ29sbGFwc2UsXHJcbiAgICAgIHJlcXVlc3REYXRhICAgIDogcmVxdWVzdERhdGFcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBpbml0QWxsKGNvbnRhaW5lcikge1xyXG4gICAgYWVtZXRDb250YWluZXIgICAgICAgPSBwb2wuJCgnYWVtZXRBcGktY29udGFpbmVyJyk7XHJcbiAgICBwcm9ncmVzc0JhciAgICAgICAgICA9IHBvbC4kKCdwcm9ncmVzcy1iYXInKTtcclxuICAgIHByb2dyZXNzQmFyQ29udGFpbmVyID0gcG9sLiQoJ3Byb2dyZXNzLWJhci1jb250YWluZXInKTsgICBcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBhZGRFdmVudExpc3RlbmVyXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdXRpbHMuYWRkRXZlbnRMaXN0ZW5lcnMoY29tcG9uZW50LnJvb3QsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmV2ZW50SGFuZGxlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3MgOiAodGFyZ2V0LCBkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICBjYWxsQWVtZXRBcGkoKTtcclxuICB9XHJcblxyXG4gIGxldCB0aW1lcklkO1xyXG4gIGZ1bmN0aW9uIGluaXRQcm9ncmVzc0JhcigpIHtcclxuICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gJ3swfSUnLmZvcm1hdChjb3VudGVyKTtcclxuICAgIGlmKHRpbWVySWQpIGNsZWFySW50ZXJ2YWwodGltZXJJZCk7XHJcbiAgICB0aW1lcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjb3VudGVyID0gKGNvdW50ZXIgKyA5KSAlIDEwMDtcclxuICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnezB9JScuZm9ybWF0KGNvdW50ZXIpO1xyXG4gICAgfSwgMzAwKTtcclxuICB9XHJcblxyXG4gIGxldCBjb2RpZ28gPSA0NTAyMjtcclxuICBmdW5jdGlvbiBjYWxsQWVtZXRBcGkoKSB7XHJcbiAgICBcclxuICAgIGluaXRQcm9ncmVzc0JhcigpO1xyXG5cclxuICAgIGFlbWV0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgYWVtZXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXJDb250YWluZXIpO1xyXG4gICAgYWVtZXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndzMtaGlkZScpO1xyXG5cclxuICAgIGNvbnN0IEVORFBPSU5UID0gJ2h0dHBzOi8vb3BlbmRhdGEuYWVtZXQuZXMvb3BlbmRhdGEvYXBpL3ByZWRpY2Npb24vZXNwZWNpZmljYS9tdW5pY2lwaW8vaG9yYXJpYS8nICtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvZGlnbyArXHJcbiAgICAgICAgICAgICAgICAgICAgICc/YXBpX2tleT0nICtcclxuICAgICAgICAgICAgICAgICAgICAgJ2V5SmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKeVkyRnpkSEp2WjI5QWFHOTBiV0ZwYkM1amIyMGlMQ0pxZEdraU9pSm1abUkzT1dKalppMWxaV1F3TFQnICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICdRd09ETXRZVGt3WkMwNE1tTmtNbVJoTVRBMk1qUWlMQ0pwYzNNaU9pSkJSVTFGVkNJc0ltbGhkQ0k2TVRVNE1qY3lOVGczTml3aWRYTmxja2xrSWpvaVptWmlOJyArIFxyXG4gICAgICAgICAgICAgICAgICAgICAnemxpWTJZdFpXVmtNQzAwTURnekxXRTVNR1F0T0RKalpESmtZVEV3TmpJMElpd2ljbTlzWlNJNklpSjkuYlBoQUpEdXRQNjJfNzVwZW8zcXI4OFFzMUpRNGptdTZUV1hIanZJelp4MCc7XHJcbiAgICBwb2wuYWpheFxyXG4gICAgICAgLmdldChFTkRQT0lOVCwgcmVxID0+IHtcclxuICAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0Jyk7XHJcbiAgICAgICB9KVxyXG4gICAgICAgLnRoZW4odGV4dCA9PiBKU09OLnBhcnNlKHRleHQpKVxyXG4gICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgaWYocmVzdWx0LmVzdGFkbyA9PSAyMDApIHJldHVybiBwb2wuYWpheC5nZXQocmVzdWx0LmRhdG9zKTtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3VsdC5kZXNjcmlwY2lvbik7XHJcbiAgICAgICB9KVxyXG4gICAgICAgLnRoZW4oIHRleHQgPT4geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgIGFlbWV0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAoZnVuY3Rpb24oY29tcG9uZXQpIHtcclxuICAgICAgICAgICBjb21wb25ldC5pbml0KGN0eCk7XHJcbiAgICAgICAgICAgYWVtZXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcG9uZXQucmVuZGVyKCkpO1xyXG4gICAgICAgICAgIGNvbXBvbmV0Lm1vdW50ZWQoY3R4KTtcclxuICAgICAgICAgfShhZW1ldENvbXBvbmVudCgpLndpdGhEYXRhKHRleHQpKSk7ICAgICAgICAgXHJcbiAgICAgICB9KVxyXG4gICAgICAgLmNhdGNoKCBlID0+IHtcclxuICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGV4cGFuZENvbGxhcHNlKHRhcmdldCwgbW91c2VFdmVudCkge1xyXG4gICAgbGV0IF9fbGlzdCA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0O1xyXG4gICAgaWYoX19saXN0LmNvbnRhaW5zKCd3My1oaWRlJykpe1xyXG4gICAgICBfX2xpc3QucmVtb3ZlKCd3My1oaWRlJyk7XHJcbiAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuY2xhc3NMaXN0LnJlbW92ZSgnZmEtY2FyZXQtZG93bicpO1xyXG4gICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLmNsYXNzTGlzdC5hZGQoJ2ZhLWNhcmV0LXVwJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfX2xpc3QuYWRkKCd3My1oaWRlJyk7XHJcbiAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuY2xhc3NMaXN0LnJlbW92ZSgnZmEtY2FyZXQtdXAnKTtcclxuICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QuYWRkKCdmYS1jYXJldC1kb3duJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXF1ZXN0RGF0YSh0YXJnZXQsIG1vdXNlRXZlbnQpIHtcclxuXHJcbiAgICBsZXQgY29tYm8gPSB0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICBjb2RpZ28gPSB0YXJnZXQuaWQuc3BsaXQoJy0nKVsxXTtcclxuXHJcbiAgICBwdWJzdWIucHVibGlzaCgnbXVuaWNpcGlvLmNoYW5nZScsIGNvbXBvbmVudC5kYXRhLm11bmljaXBpb3NbY29kaWdvXSApO1xyXG5cclxuICAgIGV4cGFuZENvbGxhcHNlKGNvbWJvKTtcclxuICAgIGNhbGxBZW1ldEFwaSgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgICBcclxuICA8ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyIHczLWFuaW1hdGUtbGVmdFwiIHN0eWxlPVwicGFkZGluZy10b3A6MTBweDtcIj5cclxuXHJcbiAgPC9kaXY+YDtcclxuXHJcbmxldCBfdGltZSA9IDA7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcblxyXG4gIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ2RpdicsIF9fdGVtcGxhdGUpLmZpcnN0RWxlbWVudENoaWxkIDtcclxuICAgICAgcmV0dXJuIHRoaXMucm9vdDtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuXHJcbiAgICAgIF9fY3JlYXRlUGFydGljbGVzKCk7XHJcbiAgICAgIF9tZXRhQmFsbHMuaW5pdCgpO1xyXG5cclxuICAgICAgdGhpcy5yb290LmFwcGVuZENoaWxkKEdhbWUuSW5pdENhbnZhcyh7IHdpZHRoIDogMTAwMCwgaGVpZ2h0IDogNTUwIH0pLkNhbnZhcyk7XHJcbiAgICAgIEdhbWUuSW5pdEdhbWVMb29wKF9fdXBkYXRlLCBfX2RyYXcpO1xyXG4gICAgICBHYW1lLlBsYXkoKTtcclxuICAgIH0sXHJcbiAgICBkaXNwb3NlIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICBHYW1lLlN0b3AoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBfX3VwZGF0ZShkdCkge1xyXG4gICAgIF90aW1lICs9IGR0O1xyXG4gICAgX191cGRhdGVQYXJ0aWNsZXMoZHQpO1xyXG4gICAgX21ldGFCYWxscy51cGRhdGUoZHQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX19kcmF3KGN0eCkge1xyXG4gICAgX21ldGFCYWxscy5mbGlwKCk7XHJcbiAgICBjdHguZHJhd0ltYWdlKF9tZXRhQmFsbHMuY29udGV4dC5jYW52YXMsIDAsIDAsIEdhbWUuR2FtZVdpZHRoLCBHYW1lLkdhbWVIZWlnaHQpO1xyXG4gICAgICBcclxuICAgIGN0eC50cmFuc2xhdGUoMzUsIDkwKTtcclxuICAgIGN0eC5zY2FsZSg3LDcpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LC40KSc7ICAgICBcclxuICAgIF9wYXJ0aWNsZXMuZm9yRWFjaCggZnVuY3Rpb24ocCl7XHJcbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDEvX19DbGFtcCggcC52ZWxvY2l0eVswXSArIHAudmVsb2NpdHlbMV0sIDAuMDEsIDEpO1xyXG4gICAgICBfX2RyYXdQYXJ0aWNsZShjdHgsIHApO1xyXG4gICAgfSk7XHJcbiAgICBjdHguZ2xvYmFsQWxwaGEgPSAxO1xyXG4gICAgY3R4LnNjYWxlKC03LCAtNyk7XHJcbiAgICBjdHgudHJhbnNsYXRlKC0zNSwgLTkwKTtcclxuICB9XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIEZpbGxUZW1wbGF0ZVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGZ1bmN0aW9uIG9uVGVzdEJ1dHRvbkNsaWNrX2ZpbGwobW91c2VFdmVudCl7XHJcbiAgICBsZXQgdGVtcGxhdGUgPSBwb2wuYnVpbGQoJ2RpdicsICc8aDMgeGJpbmQ9XCJpZDppZDtpbm5lckhUTUw6bm9tYnJlO29uY2xpY2s6X19jbGlja1wiPjwvaDM+JylcclxuICAgICAgICAgICAgICAgICAgICAgIC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGxldCByID0gcG9sLnRlbXBsYXRlcy5maWxsKFxyXG4gICAgICAgICAgICAgIHRlbXBsYXRlLCBcclxuICAgICAgICAgICAgICB7IGlkIDogNTU1LCBcclxuICAgICAgICAgICAgICAgIG5vbWJyZSA6ICdyYWZhJyxcclxuICAgICAgICAgICAgICAgIF9fY2xpY2sgOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH19KTtcclxuXHJcbiAgICBjb21wb25lbnQucm9vdC5hcHBlbmRDaGlsZChyKTtcclxuICB9XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIEV4ZWN1dGVUZW1wbGF0ZVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGZ1bmN0aW9uIG9uVGVzdEJ1dHRvbkNsaWNrKG1vdXNlRXZlbnQpe1xyXG4gICAgbGV0IHRlbXBsYXRlID0gcG9sLmJ1aWxkKCdkaXYnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGgzIHhiaW5kPVwiaWQ6aWQ7aW5uZXJIVE1MOm5vbWJyZTtcIj48L2gzPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBsZXQgaW5uZXJIdG1sID0gcG9sLnRlbXBsYXRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgIC5leGVjdXRlKHRlbXBsYXRlLCBbeyBpZCA6IDU1NSwgbm9tYnJlIDogJ3JhZmEnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaWQgOiA0NDQsIG5vbWJyZSA6ICdyYWZhIDQ0NCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpZCA6IDMzMywgbm9tYnJlIDogJ3JhZmEgMzMzJ31dKTtcclxuICAgIHBvbC50ZW1wbGF0ZXNcclxuICAgICAgIC5leGVjdXRlKHRlbXBsYXRlLFxyXG4gICAgICAgICAgICAgICAgW3sgaWQgOiA1NTUsIG5vbWJyZSA6ICdyYWZhJ30sXHJcbiAgICAgICAgICAgICAgICAgeyBpZCA6IDQ0NCwgbm9tYnJlIDogJ3JhZmEgNDQ0J30sXHJcbiAgICAgICAgICAgICAgICAgeyBpZCA6IDMzMywgbm9tYnJlIDogJ3JhZmEgMzMzJ31dLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICApXHJcbiAgICAgIC5tYXAoIGUgPT4gZS5ub2RlIClcclxuICAgICAgLmZvckVhY2goIG5vZGUgPT4gY29tcG9uZW50LnJvb3QuYXBwZW5kQ2hpbGQobm9kZSkgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcblxyXG59XHJcblxyXG5sZXQgRHJhd2luZyA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciBfdGhhdCA9IHt9O1xyXG4gIFxyXG4gIF90aGF0LkNsZWFyID0gZnVuY3Rpb24oY29sb3Ipe1xyXG4gICAgR2FtZS5Db250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgR2FtZS5Db250ZXh0LmZpbGxSZWN0KDAsMCwgR2FtZS5HYW1lV2lkdGgsIEdhbWUuR2FtZUhlaWdodCk7XHJcbiAgICByZXR1cm4gX3RoYXQ7XHJcbiAgfVxyXG4gIFxyXG4gIF90aGF0LmNyZWF0ZUJ1ZmZlciA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCByZW5kZXJGdW5jdGlvbikge1xyXG4gICAgdmFyIGJ1ZmZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgYnVmZmVyLndpZHRoID0gd2lkdGg7XHJcbiAgICBidWZmZXIuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgcmVuZGVyRnVuY3Rpb24oYnVmZmVyLmdldENvbnRleHQoJzJkJykpO1xyXG4gICAgcmV0dXJuIGJ1ZmZlcjtcclxuICB9O1xyXG5cclxuICByZXR1cm4gX3RoYXQ7XHJcblxyXG59ICgpO1xyXG5cclxubGV0IEdhbWUgPSBmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgX3RoYXQgPSB7IH07ICAgXHJcbiAgdmFyIF9yZW5kZXJMb29wSWQsX3VwZGF0ZUxvb3BJZDsgICAgXHJcbiAgdmFyIF9yZW5kZXJMb29wLF91cGRhdGVMb29wOyAgXHJcbiAgXHJcbiAgZnVuY3Rpb24gX19nZXRUaW1lc3RhbXAoKXsgXHJcbiAgICByZXR1cm4gKCB3aW5kb3cucGVyZm9ybWFuY2UgJiYgd2luZG93LnBlcmZvcm1hbmNlLm5vdyApXHJcbiAgICAgICAgICAgPyB3aW5kb3cucGVyZm9ybWFuY2Uubm93KClcclxuICAgICAgICAgICA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpOyBcclxuICB9IFxyXG4gXHJcbiAgX3RoYXQuUGxheSA9IGZ1bmN0aW9uKGNvbnRyb2xsZXJOYW1lKSB7XHJcbiAgICBfdXBkYXRlTG9vcElkID0gc2V0SW50ZXJ2YWwoX3VwZGF0ZUxvb3AsIDEwMDAgLyAzMCk7IC8vIGZwc1xyXG4gICAgX3JlbmRlckxvb3BJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShfcmVuZGVyTG9vcCk7XHJcbiAgfVxyXG5cclxuICBfdGhhdC5TdG9wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY2xlYXJJbnRlcnZhbChfdXBkYXRlTG9vcElkKTtcclxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKF9yZW5kZXJMb29wSWQpO1xyXG4gIH1cclxuXHJcbiAgX3RoYXQuSW5pdEdhbWVMb29wID0gZnVuY3Rpb24odXBkYXRlLCBkcmF3KSB7ICAgICAgICBcclxuICAgIHZhciBsYXN0ID0gX19nZXRUaW1lc3RhbXAoKTtcclxuICAgIHZhciBkdCAgID0gMDtcclxuICAgIF91cGRhdGVMb29wID0gZnVuY3Rpb24oKXtcclxuICAgICAgdmFyIG5vdyA9IF9fZ2V0VGltZXN0YW1wKCk7XHJcbiAgICAgIHZhciBkdCA9IE1hdGgubWluKDEsIChub3cgLSBsYXN0KSAvIDEwMDApOyAgICAgIFxyXG4gICAgICB1cGRhdGUoZHQpOyAgICAgICAgICAgIFxyXG4gICAgICBsYXN0ID0gbm93OyAgICAgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgbGV0IF9fY2xlYXJDb250ZXh0ID0gZnVuY3Rpb24oY3R4KXtcclxuICAgICAgY3R4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgY3R4LkltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIF90aGF0LkNhbnZhcy53aWR0aCwgX3RoYXQuQ2FudmFzLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBfcmVuZGVyTG9vcCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBfX2NsZWFyQ29udGV4dChfdGhhdC5Db250ZXh0KTtcclxuICAgICAgZHJhdyhfdGhhdC5Db250ZXh0KTtcclxuICAgICAgX3JlbmRlckxvb3BJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShfcmVuZGVyTG9vcCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF90aGF0O1xyXG4gIH0gXHJcbiAgICAgICAgICBcclxuICBfdGhhdC5Jbml0Q2FudmFzICAgID0gZnVuY3Rpb24obyl7XHJcbiAgICBfdGhhdC5HYW1lV2lkdGggICAgPSBvLndpZHRoIHx8IDIwMDtcclxuICAgIF90aGF0LkdhbWVIZWlnaHQgICA9IG8uaGVpZ2h0fHwgMjgwOyAgICAgICAgXHJcbiAgICBfdGhhdC5DYW52YXMgICAgICAgPSBwb2wuYnVpbGQoJ2NhbnZhcycsIHsgaWQgOiAnY2FudmFzJywgd2lkdGggOiBfdGhhdC5HYW1lV2lkdGgsIGhlaWdodCA6IF90aGF0LkdhbWVIZWlnaHQgfSk7XHJcbiAgICBfdGhhdC5Db250ZXh0ICAgICAgPV90aGF0LkNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7ICAgICAgICAgIFxyXG4gICAgcmV0dXJuIF90aGF0O1xyXG4gIH0gXHJcbiAgICAgICAgICAgIFxyXG4gIHJldHVybiBfdGhhdDtcclxuICBcclxufSgpO1xyXG5cclxuZnVuY3Rpb24gX19kcmF3UGFydGljbGUoY3R4LCBwYXJ0aWNsZSl7ICAgICAgIFxyXG4gIGN0eC5iZWdpblBhdGgoKTsgXHJcbiAgY3R4LmFyYyhwYXJ0aWNsZS5wb3NpdGlvblswXSwgcGFydGljbGUucG9zaXRpb25bMV0sIDEsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XHJcbiAgY3R4LmZpbGwoKTtcclxuICBjdHguY2xvc2VQYXRoKCk7XHJcbn1cclxuXHJcbnZhciBfcGFydGljbGVzID0gW107XHJcbmZ1bmN0aW9uIF9fY3JlYXRlUGFydGljbGVzKCl7XHJcblxyXG4gIHZhciBfX2NvbnRleHQgPSBEcmF3aW5nLmNyZWF0ZUJ1ZmZlcigyNTAsIDE2MCwgZnVuY3Rpb24oY3R4KXtcclxuICAgIGN0eC5maWxsU3R5bGU9ICdyZ2JhKDAsMCwwLDApJztcclxuICAgIGN0eC5maWxsUmVjdCgwLDAsMjUwLDE2MCkgICAgICBcclxuICAgIGN0eC5mb250ID0gJzQwcHggTW9pcmUgRXh0cmFCb2xkJztcclxuICAgIGN0eC5maWxsU3R5bGU9ICdyZ2JhKDAsMCwyNTUsMSknO1xyXG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xyXG4gICAgY3R4LmZpbGxUZXh0KCdNIGkgcycsIDM4LCAwKTtcclxuICAgIGN0eC5maWxsVGV4dCgnTiBvIHQgYSBzJywgMywgMjUpO1xyXG4gIH0pLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gIHZhciBpbWFnZURhdGEgPSBfX2NvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsMCwyNTAsMTYwKTtcclxuICBfcGFydGljbGVzLmxlbmd0aCA9IDA7XHJcbiAgdmFyIF9faGFsZl93ID0gR2FtZS5HYW1lV2lkdGg+PjE7XHJcbiAgdmFyIF9faGFsZl9oID0gR2FtZS5HYW1lSGVpZ2h0Pj4xO1xyXG4gIGZvciAodmFyIHggPSAwOyB4IDwgaW1hZ2VEYXRhLndpZHRoOyB4KyspIHtcclxuICAgIGZvciAodmFyIHkgPSAwOyB5IDwgaW1hZ2VEYXRhLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgICAgdmFyIHBpeGVsSW5kZXggPSBpbWFnZURhdGEud2lkdGggKiA0ICogeSArIHggKiA0ICAgICAgICAgICAgICBcclxuICAgICAgICB2YXIgciA9IGltYWdlRGF0YS5kYXRhW3BpeGVsSW5kZXhdO1xyXG4gICAgICAgIHZhciBnID0gaW1hZ2VEYXRhLmRhdGFbcGl4ZWxJbmRleCArIDFdO1xyXG4gICAgICAgIHZhciBiID0gaW1hZ2VEYXRhLmRhdGFbcGl4ZWxJbmRleCArIDJdO1xyXG4gICAgICAgIHZhciBhID0gaW1hZ2VEYXRhLmRhdGFbcGl4ZWxJbmRleCArIDNdOyBcclxuICAgICAgICBpZihiIT0wKXtcclxuICAgICAgICAgIHZhciBwb3NYID0gfn4oTWF0aC5yYW5kb20oKSAqIEdhbWUuR2FtZVdpZHRoKSAtIF9faGFsZl93O1xyXG4gICAgICAgICAgdmFyIHBvc1kgPSB+fihNYXRoLnJhbmRvbSgpICogR2FtZS5HYW1lSGVpZ2h0KSAtIF9faGFsZl9oO1xyXG4gICAgICAgICAgX3BhcnRpY2xlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uICAgIDogW3Bvc1gsIHBvc1ldLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luICAgICAgOiBbcG9zWCxwb3NZXSwgXHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbiA6IFt4LCB5XSxcclxuICAgICAgICAgICAgICAgIHZlbG9jaXR5ICAgIDogWzAsIDBdXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgfSAgICAgICAgICAgICBcclxufVxyXG5cclxudmFyIF9fUmFuZG9tID0gZnVuY3Rpb24obWF4LG1pbil7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoobWF4LW1pbisxKSttaW4pO1xyXG59XHJcblxyXG52YXIgX19DbGFtcCA9IGZ1bmN0aW9uKHZhbHVlLCBtaW4sIG1heCkge1xyXG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KTtcclxufTtcclxuZnVuY3Rpb24gX191cGRhdGVQYXJ0aWNsZXMoZHQpe1xyXG4gIHZhciBfX3RvdGFsID0gMDtcclxuICB2YXIgX19oYWxmX3cgPSBHYW1lLkdhbWVXaWR0aD4+MztcclxuICB2YXIgX19oYWxmX2ggPSBHYW1lLkdhbWVIZWlnaHQ+PjM7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBfcGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgcGFydGljbGUgPSBfcGFydGljbGVzW2ldO1xyXG4gICAgcGFydGljbGUudmVsb2NpdHlbMF0gPSAocGFydGljbGUuZGVzdGluYXRpb25bMF0gLSBwYXJ0aWNsZS5wb3NpdGlvblswXSkgKiBkdCoxLjU7XHJcbiAgICBwYXJ0aWNsZS52ZWxvY2l0eVsxXSA9IChwYXJ0aWNsZS5kZXN0aW5hdGlvblsxXSAtIHBhcnRpY2xlLnBvc2l0aW9uWzFdKSAqIGR0O1xyXG4gICAgaWYoTWF0aC5hYnMocGFydGljbGUudmVsb2NpdHlbMF0gKyBwYXJ0aWNsZS52ZWxvY2l0eVsxXSkgPCAuMDAwNSl7XHJcbiAgICAgIGlmKF9fUmFuZG9tKDEwLDApPjkpe1xyXG4gICAgICAgIGlmKE1hdGguc2luKF90aW1lKT4wKXtcclxuICAgICAgICAgIHBhcnRpY2xlLnBvc2l0aW9uWzBdID0gfn4oTWF0aC5yYW5kb20oKSAqIEdhbWUuR2FtZVdpZHRoKSAtIF9faGFsZl93OyBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHBhcnRpY2xlLnBvc2l0aW9uWzFdID0gfn4oTWF0aC5yYW5kb20oKSAqIEdhbWUuR2FtZUhlaWdodCkgLSBfX2hhbGZfaDsgXHJcbiAgICAgICAgfVxyXG4gICAgICB9ICAgICAgICBcclxuICAgIH1lbHNle1xyXG4gICAgICBwYXJ0aWNsZS5wb3NpdGlvblswXSArPSBwYXJ0aWNsZS52ZWxvY2l0eVswXTtcclxuICAgICAgcGFydGljbGUucG9zaXRpb25bMV0gKz0gcGFydGljbGUudmVsb2NpdHlbMV07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiAgXHJcbnZhciBfbWV0YUJhbGxzID0geyBcclxuICBiYWxscyAgOiBbXSxcclxuICBpbml0ICAgOiBmdW5jdGlvbigpe1xyXG4gICAgX21ldGFCYWxscy5jb250ZXh0ID0gRHJhd2luZy5jcmVhdGVCdWZmZXIoMTUwLCA2MCwgZnVuY3Rpb24oY3R4KXsgfSkuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGZvciggdmFyIHg9MDsgeDwzOyB4Kyspe1xyXG4gICAgICB2YXIgX19iYWxsID0geyBwb3NpdGlvbiAgICA6IHsgeCA6IF9fUmFuZG9tKDAsIDE1MCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkgOiBfX1JhbmRvbSgwLCA2MCl9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHkgICAgOiB7IHggOiBfX1JhbmRvbSgzMiwgLTMyKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA6IF9fUmFuZG9tKDMyLCAtMzIpfSxcclxuICAgICAgICAgICAgICAgICAgICAgIHNpemUgICAgICAgIDogX19SYW5kb20oNDQsIDE4KVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgIF9fYmFsbC5ncmFkaWVudCA9IF9tZXRhQmFsbHMuY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudCgwLCAwLCAzLCAwLCAwLCBfX2JhbGwuc2l6ZSk7XHJcbiAgICAgIF9fYmFsbC5ncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMCwwLDI1MCwxKScpO1xyXG4gICAgICBfX2JhbGwuZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDAsMCwxNTUsMCknKTtcclxuICAgICAgX21ldGFCYWxscy5iYWxscy5wdXNoKCBfX2JhbGwpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgdXBkYXRlIDogZnVuY3Rpb24oZHQpe1xyXG4gICAgX21ldGFCYWxscy5iYWxscy5mb3JFYWNoKCBmdW5jdGlvbihiKXtcclxuICAgICAgYi5wb3NpdGlvbi54ICs9IGIudmVsb2NpdHkueCAqIGR0O1xyXG4gICAgICBiLnBvc2l0aW9uLnkgKz0gYi52ZWxvY2l0eS55ICogZHQ7XHJcbiAgICAgIGlmKGIucG9zaXRpb24ueDwwIHx8IGIucG9zaXRpb24ueD4xNTApe1xyXG4gICAgICAgIGIudmVsb2NpdHkueCAgPSAtYi52ZWxvY2l0eS54O1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGIucG9zaXRpb24ueTwwIHx8IGIucG9zaXRpb24ueT42MCl7XHJcbiAgICAgICAgYi52ZWxvY2l0eS55ICA9IC1iLnZlbG9jaXR5Lnk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZmxpcCAgIDogZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgX19jdHggPSBfbWV0YUJhbGxzLmNvbnRleHQ7XHJcbiAgICBfX2N0eC5jbGVhclJlY3QoMCwwLDE1MCw2MCk7ICAgICAgXHJcbiAgICBfbWV0YUJhbGxzLmJhbGxzLmZvckVhY2goIGZ1bmN0aW9uKGIpe1xyXG4gICAgICBfX2N0eC5iZWdpblBhdGgoKTtcclxuICAgICAgX19jdHguZmlsbFN0eWxlID0gYi5ncmFkaWVudDtcclxuICAgICAgX19jdHguYXJjKGIucG9zaXRpb24ueCwgYi5wb3NpdGlvbi55LCBiLnNpemUsIDAsIE1hdGguUEkqMik7XHJcbiAgICAgIF9fY3R4LnRyYW5zbGF0ZShiLnBvc2l0aW9uLngsIGIucG9zaXRpb24ueSk7XHJcbiAgICAgIF9fY3R4LmZpbGwoKTsgICBcclxuICAgICAgX19jdHgudHJhbnNsYXRlKC1iLnBvc2l0aW9uLngsIC1iLnBvc2l0aW9uLnkpO1xyXG4gICAgfSlcclxuXHJcbiAgICB2YXIgX19pbWFnZURhdGEgPSBfX2N0eC5nZXRJbWFnZURhdGEoMCwwLDE1MCw2MCk7XHJcbiAgICB2YXIgX19kYXRhID0gX19pbWFnZURhdGEuZGF0YTtcclxuICAgIGZvciAodmFyIGkgPSAwLCBuID0gX19kYXRhLmxlbmd0aDsgaSA8IG47IGkgKz0gNCkge1xyXG4gICAgICBpZihfX2RhdGFbaSszXSA+IDkwICYmIF9fZGF0YVtpKzNdPDEyMCl7XHJcbiAgICAgICAgX19kYXRhW2krM10gPSAwO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBfX2RhdGFbaV0gICA9IH5+KE1hdGguc2luKF90aW1lKSAqIDEyNyArIDEyOCk7XHJcbiAgICAgICAgX19kYXRhW2krMV0gPSB+fihNYXRoLnNpbihfdGltZSsyKSAqIDEyNyArIDEyOCk7XHJcbiAgICAgICAgX19kYXRhW2krMl0gPSB+fihNYXRoLnNpbihfdGltZSs1KSAqIDEyNyArIDEyOCk7ICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIF9fY3R4LnB1dEltYWdlRGF0YShfX2ltYWdlRGF0YSwgMCwgMCk7IFxyXG4gIH1cclxufSIsIu+7v2ltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhXCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vbGliL3V0aWxzXCI7XHJcbmltcG9ydCBEYldyYXBwZXJTZXJ2aWNlIGZyb20gXCIuLi9saWIvZGJXcmFwcGVyLnNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IE5PVEFTX0RBVEFCQVNFICAgPSAnbm90YXMtYXBwLmRiJzsgXHJcbmNvbnN0IE5PVEFTX1RBQkxFX05BTUUgPSAnbm90YXMnO1xyXG5cclxuY29uc3QgVEVNUExBVEUgPSBgXHJcbjxkaXYgbm90YXMtY29udGFpbmVyIHN0eWxlPVwicGFkZGluZzowOyBtYXJnaW4tYm90dG9tOjQzcHg7XCIgY2xhc3M9XCJ3My1hbmltYXRlLWxlZnRcIj48L2Rpdj5cclxuPGJ1dHRvbiBidG4tYWRkLW5vdGUgb24tY2xpY2s9XCJhZGROb3RlXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtYmxhY2sgdzMtY2lyY2xlXCI+77yLPC9idXR0b24+YDtcclxuXHJcbmNvbnN0IF9fSVRFTV9URU1QTEFURSA9YFxyXG48ZGl2IGNsYXNzPVwidzMtYm9yZGVyLWJvdHRvbSB3My1hbmltYXRlLWxlZnRcIiBzdHlsZT1cInBhZGRpbmc6MDsgZm9udC1zaXplOjE0cHg7XCIgaWQ9XCJub3RlLXtub3RlLmtleX1cIj5cclxuICA8ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyXCIgc3R5bGU9XCJwYWRkaW5nOjVweFwiPlxyXG4gICAgPGRpdiBvbi1jbGljaz1cImV4cGFuZENvbGxhcHNlXCI+PGI+e25vdGUudGl0bGV9PC9iPjxpIGNsYXNzPVwidzMtcmlnaHQgdzMtbGFyZ2UgZmEgZmEtY2FyZXQtZG93blwiPjwvaT48L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7cGFkZGluZzowIDRweFwiPlxyXG4gICAgPHAgaWQ9XCJlZGl0cC17bm90ZS5rZXl9XCIgb24tY2xpY2s9XCJlZGl0Tm90ZVwiIHN0eWxlPVwicGFkZGluZzoycHg7bWluLWhlaWdodDo0ZW07bWFyZ2luOjJweCAwO3doaXRlLXNwYWNlOiBwcmUtd3JhcFwiPntmb3JtYXRUZXh0Om5vdGUudGV4dH08L3A+XHJcbiAgICA8ZGl2IGNsYXNzPVwidzMtYmFyIHczLWNlbnRlclwiIHN0eWxlPVwicGFkZGluZzo0cHggMDtcIj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkZWxldGUte25vdGUua2V5fVwiIG9uLWNsaWNrPVwiZGVsZXRlTm90ZVwiIGNsYXNzPVwidzMtYnV0dG9uIHczLWJvcmRlclwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZmF2LXtub3RlLmtleX1cIiBvbi1jbGljaz1cInNhdmVGYXZvcml0ZXNcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1ib3JkZXJcIj48aSBjbGFzcz1cImZhIHtjc3M6bm90ZS5rZXl9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImVkaXQte25vdGUua2V5fVwiIG9uLWNsaWNrPVwiZWRpdE5vdGVcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1ib3JkZXJcIj48aSBjbGFzcz1cImZhIGZhLWVkaXRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGN0eCl7XHJcbiAgICBcclxuICBsZXQgZGI7XHJcbiAgbGV0IHJvd3MgPSBbXTtcclxuICBsZXQgZmF2b3JpdGVzID0gW107XHJcbiAgbGV0IGl0ZW1zQ29udGFpbmVyO1xyXG4gIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ2RpdicsIFRFTVBMQVRFKTtcclxuICAgICAgaXRlbXNDb250YWluZXIgPSB0aGlzLnJvb3QuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvb3Q7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIGluaXRBbGwoKTsgIFxyXG4gICAgfSxcclxuICAgIGV2ZW50SGFuZGxlcnMgOiB7IFxyXG4gICAgICBhZGROb3RlICAgICAgICA6IGFkZE5vdGUsXHJcbiAgICAgIGRlbGV0ZU5vdGUgICAgIDogZGVsZXRlTm90ZSxcclxuICAgICAgZXhwYW5kQ29sbGFwc2UgOiBleHBhbmRDb2xsYXBzZSxcclxuICAgICAgc2F2ZUZhdm9yaXRlcyAgOiBzYXZlRmF2b3JpdGVzLFxyXG4gICAgICBlZGl0Tm90ZSAgICAgICA6IGVkaXROb3RlXHJcbiAgICB9IFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRBbGwoKSB7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT3BlbiBkYXRhYmFzZVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGRiID0gbmV3IERiV3JhcHBlclNlcnZpY2UoTk9UQVNfREFUQUJBU0UpO1xyXG4gICAgZGIub3BlbkRiKClcclxuICAgICAgLnRoZW4oIGRiID0+IHtcclxuICAgICAgICBsb2FkRGF0YSgpO1xyXG4gICAgICB9KTtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBhZGRFdmVudExpc3RlbmVyXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdXRpbHMuYWRkRXZlbnRMaXN0ZW5lcnMoY29tcG9uZW50LnJvb3QsIGNvbXBvbmVudC5ldmVudEhhbmRsZXJzKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGxvYWREYXRhKCkge1xyXG4gICAgZGIucmVhZEFsbChOT1RBU19UQUJMRV9OQU1FKVxyXG4gICAgICAudGhlbiggdmFsdWVzID0+IHtcclxuICAgICAgICByb3dzID0gdmFsdWVzLnJldmVyc2UoKTtcclxuICAgICAgICBmYXZvcml0ZXMgPSAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSB8fCAnJykuc3BsaXQoJy0nKTtcclxuICAgICAgICByZW5kZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICBpdGVtc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIHJvd3MubWFwKCBub3RlID0+IHtcclxuICAgICAgICAgIGxldCBfX2JhZyA9IHtcclxuICAgICAgICAgICAgbm90ZSxcclxuICAgICAgICAgICAgZm9ybWF0VGV4dDogZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3NzOiBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhdm9yaXRlcy5pbmNsdWRlcyhrZXkudG9TdHJpbmcoKSkgPyAnZmEtc3RhcicgOiAnZmEtc3Rhci1vJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHJldHVybiBwb2wuYnVpbGQoJ2RpdicsIF9fSVRFTV9URU1QTEFURS5mb3JtYXQoX19iYWcpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm1hcCggZSA9PiBlLmZpcnN0RWxlbWVudENoaWxkIClcclxuICAgICAgICAuZm9yRWFjaCggZSA9PiB7XHJcbiAgICAgICAgICBpdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlKTtcclxuICAgICAgICB9KTtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBhZGRFdmVudExpc3RlbmVyXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdXRpbHMuYWRkRXZlbnRMaXN0ZW5lcnMoaXRlbXNDb250YWluZXIsIGNvbXBvbmVudC5ldmVudEhhbmRsZXJzKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGV0ZU5vdGUodGFyZ2V0LCBtb3VzZUV2ZW50KXtcclxuICAgIGxldCBfX2lkICAgICAgPSBwYXJzZUludCh0YXJnZXQuaWQuc3BsaXQoJy0nKVsxXSk7XHJcbiAgICBsZXQgX19wYXlsb2FkID0gcm93cy53aGVyZSh7IGtleSA6IF9faWQgfSlbMF07XHJcbiAgICBsZXQgX19lbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGUtezB9Jy5mb3JtYXQoX19pZCkpO1xyXG4gICAgXHJcbiAgICBkYi5kZWxldGUoTk9UQVNfVEFCTEVfTkFNRSwgX19pZClcclxuICAgICAgLnRoZW4oICgpID0+IHtcclxuICAgICAgICByb3dzLnJlbW92ZShfX3BheWxvYWQpO1xyXG4gICAgICAgIF9fZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9fZWxlbWVudCk7XHJcbiAgICAgIH0pOyAgICAgICAgICAgICAgIFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZXhwYW5kQ29sbGFwc2UodGFyZ2V0LCBtb3VzZUV2ZW50KSB7XHJcbiAgICBsZXQgX19zdHlsZSA9IHRhcmdldC5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZy5zdHlsZTtcclxuICAgIGlmKF9fc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpe1xyXG4gICAgICBfX3N0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jYXJldC1kb3duJyk7XHJcbiAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuY2xhc3NMaXN0LmFkZCgnZmEtY2FyZXQtdXAnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9fc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jYXJldC11cCcpO1xyXG4gICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLmNsYXNzTGlzdC5hZGQoJ2ZhLWNhcmV0LWRvd24nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZE5vdGUodGFyZ2V0LCBtb3VzZUV2ZW50KSB7XHJcbiAgICBjdHgucm91dGVyLm5hdmlnYXRlVG8oJ25vdGUnKTtcclxuICB9ICBcclxuXHJcbiAgZnVuY3Rpb24gc2F2ZUZhdm9yaXRlcyh0YXJnZXQsIG1vdXNlRXZlbnQpIHtcclxuICAgIGxldCBzdGFyID0gdGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgbGV0IGtleSA9IHRhcmdldC5pZC5zcGxpdCgnLScpWzFdO1xyXG4gICAgaWYgKGZhdm9yaXRlcy5pbmNsdWRlcyhrZXkpKXtcclxuICAgICAgZmF2b3JpdGVzLnJlbW92ZShrZXkpO1xyXG4gICAgICBzdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXN0YXItbycpO1xyXG4gICAgICBzdGFyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXN0YXInKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZhdm9yaXRlcy5wdXNoKGtleSk7XHJcbiAgICAgIHN0YXIuY2xhc3NMaXN0LnJlbW92ZSgnZmEtc3Rhci1vJyk7XHJcbiAgICAgIHN0YXIuY2xhc3NMaXN0LmFkZCgnZmEtc3RhcicpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXZvcml0ZXMnLCBmYXZvcml0ZXMuam9pbignLScpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVkaXROb3RlKHRhcmdldCwgbW91c2VFdmVudCkge1xyXG4gICAgY3R4LnJvdXRlci5uYXZpZ2F0ZVRvKCdub3RlLycgKyB0YXJnZXQuaWQuc3BsaXQoJy0nKVsxXSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG5cclxufVxyXG5cclxuIiwi77u/aW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuaW1wb3J0IERiV3JhcHBlclNlcnZpY2UgZnJvbSBcIi4uL2xpYi9kYldyYXBwZXIuc2VydmljZVwiO1xyXG5cclxuY29uc3QgTk9UQVNfREFUQUJBU0UgICA9ICdub3Rhcy1hcHAuZGInOyBcclxuY29uc3QgTk9UQVNfVEFCTEVfTkFNRSA9ICdub3Rhcyc7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYCAgXHJcbjxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWJvdHRvbSB3My1hbmltYXRlLWxlZnRcIj5cclxuICA8aDI+TnVldmEgbm90YTwvaDI+XHJcbiAgPGZvcm0gY2xhc3M9XCJ3My1tYXJnaW4tYm90dG9tXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwidHh0LXRpdGxlXCI+VMOtdHVsbzwvbGFiZWw+XHJcbiAgICA8aW5wdXQgY2xhc3M9XCJ3My1pbnB1dCB3My1ib3JkZXJcIiB0eXBlPVwidGV4dFwiIGlkPVwidHh0LXRpdGxlXCIgcGxhY2Vob2xkZXI9XCJJbnRyb2R1Y2UgdW4gdMOtdHVsb1wiID5cclxuICAgIDxsYWJlbCBmb3I9XCJ0eHQtdGV4dFwiPlRleHRvPC9sYWJlbD5cclxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cInczLWlucHV0IHczLWJvcmRlclwiIGlkPVwidHh0LXRleHRcIiByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPVwiQ29udGVuaWRvIGRlIGxhIG5vdGFcIj48L3RleHRhcmVhPlxyXG4gIDwvZm9ybT5cclxuICA8ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyIHczLW1hcmdpbi1ib3R0b20gdzMtY2VudGVyIHczLWFuaW1hdGUtem9vbVwiPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJidG4tZ3JhYmFyXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtYmxhY2tcIj5HcmFiYXI8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjdHgpe1xyXG4gIFxyXG4gIGxldCBjdXJyZW50O1xyXG4gIGxldCBkYjtcclxuICBsZXQgY29tcG9uZW50ID0ge1xyXG4gICAgcm9vdCAgIDoge30sXHJcbiAgICBpbml0ICAgOiBmdW5jdGlvbihjb250YWluZXIpeyB9LFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgdGhpcy5yb290ID0gcG9sLmJ1aWxkKCdkaXYnLCBfX3RlbXBsYXRlKTtcclxuICAgICAgcmV0dXJuIHRoaXMucm9vdDtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgaW5pdEFsbCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRBbGwoKSB7XHJcblxyXG4gICAgbGV0IF9fY29udGFpbmVyID0gY29tcG9uZW50LnJvb3QuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBfX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9wZW4gZGF0YWJhc2VcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBkYiA9IG5ldyBEYldyYXBwZXJTZXJ2aWNlKE5PVEFTX0RBVEFCQVNFKTtcclxuICAgIGRiLm9wZW5EYigpXHJcbiAgICAgIC50aGVuKCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IF9fZW5hYmxlVUkgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgX19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgICAgcG9sLiQoJ2J0bi1ncmFiYXInKS5vbmNsaWNrID0gYWRkTm90ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IF9faWQgPSBjdHgucm91dGVyLmN1cnJlbnQucGFyYW1zWzFdIHx8ICcnO1xyXG4gICAgICAgIGlmIChfX2lkKSB7XHJcbiAgICAgICAgICBkYi5yZWFkT25lKE5PVEFTX1RBQkxFX05BTUUsIHBhcnNlSW50KF9faWQpKVxyXG4gICAgICAgICAgICAudGhlbiggbm90ZSA9PiB7XHJcbiAgICAgICAgICAgICAgY3VycmVudCA9IG5vdGU7XHJcbiAgICAgICAgICAgICAgcG9sLiQoJ3R4dC10aXRsZScpLnZhbHVlID0gY3VycmVudC50aXRsZTtcclxuICAgICAgICAgICAgICBwb2wuJCgndHh0LXRleHQnKS52YWx1ZSAgPSBjdXJyZW50LnRleHQ7XHJcbiAgICAgICAgICAgICAgcG9sLiQoJ2gyJywgY29tcG9uZW50LnJvb3QpWzBdLmlubmVySFRNTCA9ICdFZGljacOzbiBkZSBub3RhJztcclxuICAgICAgICAgICAgICBfX2VuYWJsZVVJKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfX2VuYWJsZVVJKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkTm90ZSgpIHtcclxuICAgIHZhciBfX3R4dFRpdGxlID0gcG9sLiQoJ3R4dC10aXRsZScpO1xyXG4gICAgdmFyIF9fdHh0VGV4dCAgPSBwb2wuJCgndHh0LXRleHQnKTtcclxuICAgIHZhciBfX3RpdGxlID0gX190eHRUaXRsZS52YWx1ZS50cmltKCk7XHJcbiAgICB2YXIgX190ZXh0ICA9IF9fdHh0VGV4dC52YWx1ZS50cmltKCk7XHJcbiAgICBpZiAoIV9fdGl0bGUpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiBfX3R4dFRpdGxlLmZvY3VzKCksIDIwKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFfX3RleHQpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiBfX3R4dFRleHQuZm9jdXMoKSwgMjApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBkYi5zYXZlKE5PVEFTX1RBQkxFX05BTUUsXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAga2V5ICAgOiBjdXJyZW50ID8gY3VycmVudC5rZXkgIDogZGF0ZS52YWx1ZU9mKCksIFxyXG4gICAgICAgICAgICAgIGRhdGUgIDogY3VycmVudCA/IGN1cnJlbnQuZGF0ZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3swfS97MX0vezJ9Jy5mb3JtYXQoZGF0ZS5nZXREYXRlKCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUuZ2V0TW9udGgsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSksIFxyXG4gICAgICAgICAgICAgIHRpdGxlIDogX190aXRsZSwgXHJcbiAgICAgICAgICAgICAgdGV4dCAgOiBfX3RleHQgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCBub3RhID0+IHtcclxuICAgICAgICAgICAgICBjdHgucm91dGVyLm5hdmlnYXRlVG8oJ2xpc3QnKTsgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9