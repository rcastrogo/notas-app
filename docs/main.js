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



const __TEMPLATE = `  
  <a href="" route-link class="w3-bar-item w3-button selected">Inicio</a>
  <a href="el-tiempo" route-link class="w3-bar-item w3-button">El tiempo</a>
  <a href="list" route-link class="w3-bar-item w3-button">Notas</a>
  <a href="note" route-link class="w3-bar-item w3-button">+</a>
  <a href="about" route-link class="w3-bar-item w3-button w3-right">?</a>`;

/* harmony default export */ __webpack_exports__["default"] = (function(){

  let component =  {
    root   : {},
    id     : 'menu.component.ref',
    init   : function(container){},
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
    }
  };

  function initAll() {
    let links = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].$('[route-link]', component.root);
    let map   = links.map( function(link){ 
                             return { path : link.href.split('/').lastItem(), link };
                           })
                     .toDictionary('path', 'link');
    _lib_pubSub_Service__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('view.change', (name, route) => {
      links.forEach( e => e.classList.remove('selected') );
      map[route.name].classList.add('selected');
    }); 
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
    if(c.init) c.init(root);
    root.appendChild(c.render(root));
    if(c.mounted) c.mounted(root); 
  });

  _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].$('[route-link]')
     .forEach(element => {
        element.onclick = function(e){
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
     });

})();
// ==============================================================================
// Sync content
// ==============================================================================
const container = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].$('app-content-container');
let currentView;
function showContent(){
  let view_ref = router.current.controler;
  if(!currentView || currentView != view_ref) {
    container.innerHTML = '';    
    currentView = view_ref;
    let view_instance = currentView({router});
    if(view_instance.init) view_instance.init();
    container.appendChild(view_instance.render());
    if(view_instance.mounted) view_instance.mounted(container);
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



const EVENTS = ['[on-click]', '[on-message]'];

function addEventListeners(container, handlers) {

  function innerHTML(e, value) { e.innerHTML = value; }

  EVENTS.forEach((selector, index) => {
    _mapa__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(_mapa__WEBPACK_IMPORTED_MODULE_0__["default"].$(selector, container))
       .forEach( e => {
         let name  = selector.replace('[', '').replace(']', '');
         let value = e.attributes[name].value
         if (index === 0) {
           e.onclick = (event) => handlers[value](e, event);
           return;
         }
         if (index === 1) {
           _pubSub_Service__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe(value, (message, data) => {
             innerHTML(e, data);  
           })
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
      <span on-message="municipio.change" id="lbl-municipio">Buenaventura</span><i class="w3-right w3-large fa fa-caret-down"></i>
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
                                                 '<th>Lluvia<br>ml</th>' + 
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
    _lib_utils__WEBPACK_IMPORTED_MODULE_2__["default"].addEventListeners(component.root, component.eventHandlers);
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
  <div class="w3-container w3-center w3-animate-left" style="padding-top:60px;">
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
    // =====================================================
    // addEventListener
    // =====================================================
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW4tY29udGVudC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVudS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvZGJXcmFwcGVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9tYXBhLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvcHViU3ViLlNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWJvdXQucGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZWwtdGllbXBvLnBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2hvbWUucGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbGlzdC5wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9uZXctaXRlbS5wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsaUNBQWlDLEVBQUU7QUFDbkM7QUFDQSxrQkFBa0Isb0RBQUc7QUFDckI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsOERBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxvREFBRztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsb0RBQUc7QUFDakIsY0FBYyxvREFBRztBQUNqQixjQUFjLG9EQUFHO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLHFCQUFxQixvREFBRztBQUN4QixxQkFBcUIsb0RBQUc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsNEM7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYCAgXHJcbiAgPHA+e3RleHR9PC9wPlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICByZXR1cm4ge1xyXG4gICAgdGV4dCAgIDogJ8KpIFJhZmFlbCBDYXN0cm8gR8OzbWV6LCAyMDIwJyxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7fSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpZCAgICAgICAgOiBcImFwcEZvb3RlclwiLFxyXG4gICAgICAgIGlubmVySFRNTCA6IF9fdGVtcGxhdGUuZm9ybWF0KHRoaXMpLFxyXG4gICAgICAgIGNsYXNzTmFtZSA6ICd3My1jb250YWluZXIgdzMtdGVhbCB3My1jZW50ZXInXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnZm9vdGVyJywgb3B0aW9ucyk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGBcclxuICA8aDE+e3RpdGxlfTwvaDE+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gIHJldHVybiB7XHJcbiAgICB0aXRsZSAgOiAnTm90YXMgQXBwJyxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7fSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpZCAgICAgICAgOiAnYXBwSGVhZGVyJyxcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLmZvcm1hdCh0aGlzKSxcclxuICAgICAgICBjbGFzc05hbWUgOiAndzMtY29udGFpbmVyIHczLXRlYWwnXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnaGVhZGVyJywgb3B0aW9ucyk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGBgO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuXHJcbiAgbGV0IGNvbXBvbmVudCA9IHtcclxuICAgIHJvb3QgICA6IHt9LFxyXG4gICAgaW5pdCAgIDogZnVuY3Rpb24oY29udGFpbmVyKXsgfSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaWQgICAgICAgIDogXCJhcHAtY29udGVudC1jb250YWluZXJcIixcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLFxyXG4gICAgICAgIGNsYXNzTmFtZSA6ICd3My1jb250YWluZXInLFxyXG4gICAgICAgIHN0eWxlICAgICA6IHsgXHJcbiAgICAgICAgICBtaW5IZWlnaHQgOiAnNDQwcHgnLFxyXG4gICAgICAgICAgcGFkZGluZyAgIDogJzAgMCA2MHB4IDAnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwb2wuYnVpbGQoJ3NlY3Rpb24nLCBvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBpbml0U2Nyb2xsKCk7ICBcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG5cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU2Nyb2xsXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGluaXRTY3JvbGwoKXtcclxuICAgIFxyXG4gIGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xyXG5cdCAgdmFyIHRpbWVvdXQ7XHJcblx0ICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0XHQgIHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcclxuXHRcdCAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdCAgdGltZW91dCA9IG51bGw7XHJcblx0XHRcdCAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcblx0XHQgIH07XHJcblx0XHQgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xyXG5cdFx0ICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblx0XHQgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcclxuXHRcdCAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcblx0ICB9O1xyXG4gIH07ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIFxyXG4gIGZ1bmN0aW9uIGluaXRTY3JvbGwoKXsgICAgICAgIFxyXG4gICAgdmFyIG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwTWVudVwiKTtcclxuICAgIGlmKG5hdmJhci5jbGFzc05hbWUuaW5jbHVkZXMoJ3N0aWNreScpKSByZXR1cm47XHJcbiAgICB2YXIgc3RpY2t5ID0gbmF2YmFyLm9mZnNldFRvcDsgICAgICAgICAgXHJcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiBteUZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IHN0aWNreSkge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5XCIpO1xyXG4gICAgICB9XHJcbiAgICB9OyAgXHJcbiAgfVxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGRlYm91bmNlKGluaXRTY3JvbGwsIDE1MCksIGZhbHNlKTtcclxuICBpbml0U2Nyb2xsKCk7XHJcbn07IiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi4vbGliL3B1YlN1Yi5TZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBfX1RFTVBMQVRFID0gYCAgXHJcbiAgPGEgaHJlZj1cIlwiIHJvdXRlLWxpbmsgY2xhc3M9XCJ3My1iYXItaXRlbSB3My1idXR0b24gc2VsZWN0ZWRcIj5JbmljaW88L2E+XHJcbiAgPGEgaHJlZj1cImVsLXRpZW1wb1wiIHJvdXRlLWxpbmsgY2xhc3M9XCJ3My1iYXItaXRlbSB3My1idXR0b25cIj5FbCB0aWVtcG88L2E+XHJcbiAgPGEgaHJlZj1cImxpc3RcIiByb3V0ZS1saW5rIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uXCI+Tm90YXM8L2E+XHJcbiAgPGEgaHJlZj1cIm5vdGVcIiByb3V0ZS1saW5rIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uXCI+KzwvYT5cclxuICA8YSBocmVmPVwiYWJvdXRcIiByb3V0ZS1saW5rIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uIHczLXJpZ2h0XCI+PzwvYT5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuXHJcbiAgbGV0IGNvbXBvbmVudCA9ICB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGlkICAgICA6ICdtZW51LmNvbXBvbmVudC5yZWYnLFxyXG4gICAgaW5pdCAgIDogZnVuY3Rpb24oY29udGFpbmVyKXt9LFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oY29udGFpbmVyKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpZCAgICAgICAgOiBcImFwcE1lbnVcIixcclxuICAgICAgICBpbm5lckhUTUwgOiBfX1RFTVBMQVRFLmZvcm1hdCh0aGlzKSxcclxuICAgICAgICBjbGFzc05hbWUgOiAndzMtYmFyIHczLWJsYWNrJ1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucm9vdCA9IHBvbC5idWlsZCgnbmF2Jywgb3B0aW9ucyk7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvb3Q7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgaW5pdEFsbCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRBbGwoKSB7XHJcbiAgICBsZXQgbGlua3MgPSBwb2wuJCgnW3JvdXRlLWxpbmtdJywgY29tcG9uZW50LnJvb3QpO1xyXG4gICAgbGV0IG1hcCAgID0gbGlua3MubWFwKCBmdW5jdGlvbihsaW5rKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcGF0aCA6IGxpbmsuaHJlZi5zcGxpdCgnLycpLmxhc3RJdGVtKCksIGxpbmsgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgLnRvRGljdGlvbmFyeSgncGF0aCcsICdsaW5rJyk7XHJcbiAgICBwdWJzdWIuc3Vic2NyaWJlKCd2aWV3LmNoYW5nZScsIChuYW1lLCByb3V0ZSkgPT4ge1xyXG4gICAgICBsaW5rcy5mb3JFYWNoKCBlID0+IGUuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSApO1xyXG4gICAgICBtYXBbcm91dGUubmFtZV0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgIH0pOyBcclxuICB9XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcblxyXG59XHJcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4vbGliL21hcGEuanNcIjtcclxuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9saWIvcHViU3ViLlNlcnZpY2VcIjtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENvbXBvbmVudHNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmltcG9ydCBoZWFkZXJDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCBmb290ZXJDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9mb290ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCBjb250ZW50Q29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbi1jb250ZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgbWVudUNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL21lbnUuY29tcG9uZW50XCI7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQYWdlc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuaW1wb3J0IGhvbWVQYWdlIGZyb20gXCIuL3ZpZXdzL2hvbWUucGFnZVwiO1xyXG5pbXBvcnQgbGlzdFBhZ2UgZnJvbSBcIi4vdmlld3MvbGlzdC5wYWdlXCI7XHJcbmltcG9ydCBhYm91dFBhZ2UgZnJvbSBcIi4vdmlld3MvYWJvdXQucGFnZVwiO1xyXG5pbXBvcnQgbm90ZVBhZ2UgZnJvbSBcIi4vdmlld3MvbmV3LWl0ZW0ucGFnZVwiO1xyXG5pbXBvcnQgZWxUaWVtcG9QYWdlIGZyb20gXCIuL3ZpZXdzL2VsLXRpZW1wby5wYWdlXCI7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBSb3V0ZXNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IGNvbXBvbmVudHMgPSAgWyBcclxuICBoZWFkZXJDb21wb25lbnQoKSxcclxuICBtZW51Q29tcG9uZW50KCksXHJcbiAgY29udGVudENvbXBvbmVudCgpLFxyXG4gIGZvb3RlckNvbXBvbmVudCgpXHJcbl07XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBSb3V0ZXJcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IHJvdXRlciA9IHtcclxuICByb3V0ZXMgIDogW10sXHJcbiAgYWRkUm91dGU6IGZ1bmN0aW9uIChuYW1lLCBwYXR0ZXJuLCBjb250cm9sbGVyKSB7XHJcbiAgICB0aGlzLnJvdXRlcy5wdXNoKHsgbmFtZSA6IG5hbWUsIHBhdGggOiBwYXR0ZXJuLCBjb250cm9sZXIgOiBjb250cm9sbGVyIH0pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfSxcclxuICBnZXRSb3V0ZTogZnVuY3Rpb24gKHJvdXRlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXMud2hlcmUoZnVuY3Rpb24ocil7XHJcbiAgICAgIGxldCBtYXRjaCA9IHIucGF0aC5leGVjKHJvdXRlKTtcclxuICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgci5wYXJhbXMgPSBtYXRjaC5tYXAoIGUgPT4gZSApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBtYXRjaDtcclxuICAgIH0pWzBdO1xyXG4gIH0sXHJcbiAgbmF2aWdhdGVUbyA6IGZ1bmN0aW9uIChyb3V0ZSkge1xyXG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5nZXRSb3V0ZShyb3V0ZSk7XHJcbiAgICBsZXQgdXJsID0gJ3tvcmlnaW59ezB9ezF9Jy5mb3JtYXQoJy9ub3Rhcy1hcHAvJywgcm91dGUsIGxvY2F0aW9uKTtcclxuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgcm91dGUsIHVybCk7XHJcbiAgICBzaG93Q29udGVudCgpO1xyXG4gIH0sXHJcbiAgbm9ybWFsaXplUGF0aCA6IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgIHJldHVybiB1cmwucmVwbGFjZShkb2N1bWVudC5iYXNlVVJJLCAnJyk7XHJcbiAgfSxcclxuICBzeW5jIDogZnVuY3Rpb24oKXtcclxuICAgIHRoaXMuY3VycmVudCA9IHRoaXMuZ2V0Um91dGUodGhpcy5ub3JtYWxpemVQYXRoKHdpbmRvdy5sb2NhdGlvbi5ocmVmKSk7XHJcbiAgICBzaG93Q29udGVudCgpO1xyXG4gIH0sXHJcbiAgY3VycmVudCA6IHt9XHJcbn07XHJcbnJvdXRlci5hZGRSb3V0ZSgnbGlzdCcsICAvbGlzdCQvLCAgICAgICAgICAgIGxpc3RQYWdlKVxyXG4gICAgICAuYWRkUm91dGUoJ2Fib3V0JywgL2Fib3V0JC8sICAgICAgICAgICBhYm91dFBhZ2UpXHJcbiAgICAgIC5hZGRSb3V0ZSgnbm90ZScsICAvbm90ZSQvLCAgICAgICAgICAgIG5vdGVQYWdlKVxyXG4gICAgICAuYWRkUm91dGUoJ25vdGUnLCAgL25vdGVcXC8oXFxkezEzfSkkLywgIG5vdGVQYWdlKVxyXG4gICAgICAuYWRkUm91dGUoJ2VsLXRpZW1wbycsICAvZWwtdGllbXBvJC8sICBlbFRpZW1wb1BhZ2UpXHJcbiAgICAgIC5hZGRSb3V0ZSgnJywgICAgICAvJC8sICAgICAgICAgICAgICAgIGhvbWVQYWdlKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJbml0IEFwcFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKGZ1bmN0aW9uKCl7XHJcblxyXG4gIGNvbnN0IHJvb3QgPSBwb2wuJCgnYXBwQ29udGVudCcpO1xyXG4gIGNvbXBvbmVudHMuZm9yRWFjaCggYyA9PiB7XHJcbiAgICBpZihjLmluaXQpIGMuaW5pdChyb290KTtcclxuICAgIHJvb3QuYXBwZW5kQ2hpbGQoYy5yZW5kZXIocm9vdCkpO1xyXG4gICAgaWYoYy5tb3VudGVkKSBjLm1vdW50ZWQocm9vdCk7IFxyXG4gIH0pO1xyXG5cclxuICBwb2wuJCgnW3JvdXRlLWxpbmtdJylcclxuICAgICAuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbihlKXtcclxuICAgICAgICAgIGxldCByb3V0ZSA9IHJvdXRlci5ub3JtYWxpemVQYXRoKGUudGFyZ2V0LmhyZWYpO1xyXG4gICAgICAgICAgaWYgKHJvdXRlci5jdXJyZW50ICE9IHJvdXRlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgcm91dGVyLm5hdmlnYXRlVG8ocm91dGUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gIFxyXG4gICAgIH0pO1xyXG5cclxufSkoKTtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFN5bmMgY29udGVudFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgY29udGFpbmVyID0gcG9sLiQoJ2FwcC1jb250ZW50LWNvbnRhaW5lcicpO1xyXG5sZXQgY3VycmVudFZpZXc7XHJcbmZ1bmN0aW9uIHNob3dDb250ZW50KCl7XHJcbiAgbGV0IHZpZXdfcmVmID0gcm91dGVyLmN1cnJlbnQuY29udHJvbGVyO1xyXG4gIGlmKCFjdXJyZW50VmlldyB8fCBjdXJyZW50VmlldyAhPSB2aWV3X3JlZikge1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnOyAgICBcclxuICAgIGN1cnJlbnRWaWV3ID0gdmlld19yZWY7XHJcbiAgICBsZXQgdmlld19pbnN0YW5jZSA9IGN1cnJlbnRWaWV3KHtyb3V0ZXJ9KTtcclxuICAgIGlmKHZpZXdfaW5zdGFuY2UuaW5pdCkgdmlld19pbnN0YW5jZS5pbml0KCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodmlld19pbnN0YW5jZS5yZW5kZXIoKSk7XHJcbiAgICBpZih2aWV3X2luc3RhbmNlLm1vdW50ZWQpIHZpZXdfaW5zdGFuY2UubW91bnRlZChjb250YWluZXIpO1xyXG4gICAgcHVic3ViLnB1Ymxpc2goJ3ZpZXcuY2hhbmdlJywgcm91dGVyLmN1cnJlbnQpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbnJvdXRlci5zeW5jKCk7XHJcblxyXG53aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uKCl7XHJcbiAgcm91dGVyLnN5bmMoKTtcclxufVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU2VydmljZVdvcmtlclxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcblxyXG4gIGlmKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3Ipe1xyXG4gICAgdHJ5IHtcclxuICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2VXb3JrZXIuanMnKTtcclxuICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciBSZWdpc3RlcmVkXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciBSZWdpc3RyYXRpb24gRmFpbGVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pO1xyXG4iLCLvu79pbXBvcnQgcG9sIGZyb20gXCIuL21hcGEuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERiV3JhcHBlclNlcnZpY2V7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgIHRoaXMuZGJuYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGIgPSAnJztcclxuICB9XHJcblxyXG4gIG9wZW5EYigpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICBsZXQgcmVxdWVzdCA9IHdpbmRvdy5pbmRleGVkREIub3Blbih0aGlzLmRibmFtZSwgMSk7XHJcblxyXG5cdCAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kYiA9IGUudGFyZ2V0LnJlc3VsdDtcclxuXHRcdCAgICByZXNvbHZlKHRoaXMuZGIpO1xyXG5cdCAgICB9O1xyXG5cclxuICAgICAgcmVxdWVzdC5vbmVycm9yID0gZSA9PiB7ICBcclxuICAgICAgICByZWplY3QoJ0Vycm9yJyk7XHJcbiAgICAgIH07XHJcblx0XHJcblx0ICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGUpID0+IHtcclxuXHRcdCAgICB0aGlzLmRiID0gZS50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZih0aGlzLmRiLm9iamVjdFN0b3JlTmFtZXMgJiYgdGhpcy5kYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKFwibm90YXNcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5kYi5kZWxldGVPYmplY3RTdG9yZShcIm5vdGFzXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RvcmUgPSB0aGlzLmRiLmNyZWF0ZU9iamVjdFN0b3JlKFwibm90YXNcIiwgeyBrZXlQYXRoIDogXCJrZXlcIiB9KTsgICAgICAgXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlYWRBbGwobmFtZSl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdmFyIF9faXRlbXMgPSBbXTtcclxuICAgICAgdGhpcy5kYlxyXG4gICAgICAgICAgLnRyYW5zYWN0aW9uKG5hbWUsIFwicmVhZG9ubHlcIilcclxuICAgICAgICAgIC5vYmplY3RTdG9yZShuYW1lKVxyXG4gICAgICAgICAgLm9wZW5DdXJzb3IoSURCS2V5UmFuZ2UubG93ZXJCb3VuZCgwKSlcclxuICAgICAgICAgIC5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdmFyIF9fY3Vyc29yID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICAgICAgaWYoX19jdXJzb3IpIHtcclxuICAgICAgICAgICAgICBfX2l0ZW1zLnB1c2goX19jdXJzb3IudmFsdWUpO1xyXG4gICAgICAgICAgICAgIF9fY3Vyc29yLmNvbnRpbnVlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShfX2l0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZShzdG9yZSwgdmFsdWUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHtcclxuICAgICAgKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgcmVzdWx0Lm9uc3VjY2VzcyA9IGV2ZW50ID0+IHsgcmVzb2x2ZSh2YWx1ZSk7IH07XHJcbiAgICAgICAgcmVzdWx0Lm9uZXJyb3IgICA9IGVycm9yID0+IHsgY29uc29sZS5sb2coZXJyb3IpOyB9O1xyXG4gICAgICB9KSh0aGlzLmRiXHJcbiAgICAgICAgICAgICAudHJhbnNhY3Rpb24oc3RvcmUsIFwicmVhZHdyaXRlXCIpXHJcbiAgICAgICAgICAgICAub2JqZWN0U3RvcmUoc3RvcmUpXHJcbiAgICAgICAgICAgICAucHV0KHZhbHVlKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZShzdG9yZSwga2V5KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIChmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgIHJlc3VsdC5vbnN1Y2Nlc3MgPSBldmVudCA9PiB7IHJlc29sdmUoKTsgfTtcclxuICAgICAgICByZXN1bHQub25lcnJvciAgID0gZXJyb3IgPT4geyBjb25zb2xlLmxvZyhlcnJvcik7IH07XHJcbiAgICAgIH0pKHRoaXMuZGJcclxuICAgICAgICAgICAgIC50cmFuc2FjdGlvbihzdG9yZSwgXCJyZWFkd3JpdGVcIilcclxuICAgICAgICAgICAgIC5vYmplY3RTdG9yZShzdG9yZSlcclxuICAgICAgICAgICAgIC5kZWxldGUoa2V5KSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlYWRPbmUoc3RvcmUsIGtleSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAoZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgICByZXN1bHQub25zdWNjZXNzID0gZXZlbnQgPT4geyByZXNvbHZlKGV2ZW50LnRhcmdldC5yZXN1bHQpOyB9O1xyXG4gICAgICAgIHJlc3VsdC5vbmVycm9yICAgPSBlcnJvciA9PiB7IGNvbnNvbGUubG9nKGVycm9yKTt9O1xyXG4gICAgICB9KSh0aGlzLmRiXHJcbiAgICAgICAgICAgICAudHJhbnNhY3Rpb24oc3RvcmUsIFwicmVhZHdyaXRlXCIpXHJcbiAgICAgICAgICAgICAub2JqZWN0U3RvcmUoc3RvcmUpXHJcbiAgICAgICAgICAgICAuZ2V0KGtleSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIiwiXHJcblxyXG5sZXQgX19tb2R1bGUgPSB7fTtcclxuKGZ1bmN0aW9uKG1vZHVsZSwgbmFtZSl7XHJcblxyXG4gIHZhciBfbW9kdWxlID0gIG1vZHVsZVtuYW1lXSA9IHsgYXBwbHkgOiBmdW5jdGlvbiBhcHBseShvLCBjLCBkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZCkgYXBwbHkobywgZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8gJiYgYyAmJiB0eXBlb2YgYyA9PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIGMpeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjW3BdID09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBseShvW3BdLCBjW3BdICkgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvW3BdID0gY1twXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19OyAgICAgIFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBVdGlsc1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24obW9kdWxlKXtcclxuICAgIG1vZHVsZS5hcHBseShtb2R1bGUseyBcclxuICAgICAgdG9BcnJheSAgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodik7IH0sXHJcbiAgICAgIGlzTnVsbCAgICAgIDogZnVuY3Rpb24odil7cmV0dXJuIHYgPT09IG51bGw7IH0sXHJcbiAgICAgIGlzQXJyYXkgICAgIDogZnVuY3Rpb24odil7cmV0dXJuIEFycmF5LmlzQXJyYXkodik7IH0sXHJcbiAgICAgIGlzU3RyaW5nICAgIDogZnVuY3Rpb24odil7cmV0dXJuIHR5cGVvZiB2ID09ICdzdHJpbmcnO30sXHJcbiAgICAgIGlzQm9vbGVhbiAgIDogZnVuY3Rpb24odil7cmV0dXJuIHR5cGVvZiB2ID09ICdib29sZWFuJzt9LFxyXG4gICAgICBpc051bWJlciAgICA6IGZ1bmN0aW9uKHYpe3JldHVybiB0eXBlb2YgdiA9PSAnbnVtYmVyJzt9LFxyXG4gICAgICBpc0Z1bmN0aW9uICA6IGZ1bmN0aW9uKHYpe3JldHVybiB0eXBlb2YgdiA9PSAnZnVuY3Rpb24nO30sXHJcbiAgICAgIGlzT2JqZWN0ICAgIDogZnVuY3Rpb24odil7cmV0dXJuIHYgJiYgdHlwZW9mIHYgPT0gJ29iamVjdCc7fSxcclxuICAgICAgY2xvbmUgICAgICAgOiBmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgaWYobW9kdWxlLmlzQXJyYXkobykpICAgICAgICAgICAgIHJldHVybiBvLnNsaWNlKDApO1xyXG4gICAgICAgIGlmKG1vZHVsZS5pc09iamVjdChvKSAmJiBvLmNsb25lKSByZXR1cm4gby5jbG9uZSgpO1xyXG4gICAgICAgIGlmKG1vZHVsZS5pc09iamVjdChvKSl7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMobykucmVkdWNlKCBmdW5jdGlvbihhLCBrKXtcclxuICAgICAgICAgICAgYVtrXSA9IG1vZHVsZS5jbG9uZShvW2tdKTtcclxuICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgICB9LCB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvO1xyXG4gICAgICB9LCAgICAgICAgXHJcbiAgICAgIGpvaW4gICAgICAgIDogZnVuY3Rpb24oaXRlbXMsIHByb3BlcnR5LCBzZXBhcmF0b3Ipe1xyXG4gICAgICAgIHJldHVybiBpdGVtcy5yZWR1Y2UoZnVuY3Rpb24oYSwgbyl7IHJldHVybiBhLmFwcGVuZChvW3Byb3BlcnR5IHx8ICdpZCddKTsgfSwgW10pXHJcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLScgOiAoc2VwYXJhdG9yIHx8ICcnKSk7IFxyXG4gICAgICB9LFxyXG4gICAgICBzdHJpbmdCdWlsZGVyIDogZnVuY3Rpb24ocyl7XHJcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZSAgICAgIDogcyB8fCAnJyxcclxuICAgICAgICAgICAgICAgICAgIGFwcGVuZCAgICAgOiBmdW5jdGlvbihzKXsgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUgKyBzOyByZXR1cm4gdGhpczt9LFxyXG4gICAgICAgICAgICAgICAgICAgYXBwZW5kTGluZSA6IGZ1bmN0aW9uKHMpeyB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZSArIChzIHx8ICcnKSArICdcXG4nOyByZXR1cm4gdGhpczt9fVxyXG4gICAgICB9LFxyXG4gICAgICBidWlsZCA6IGZ1bmN0aW9uKHRhZ05hbWUsIG8pe1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbW9kdWxlLmlzU3RyaW5nKG8pID8geyBpbm5lckhUTUwgOiBvIH0gOiBvO1xyXG4gICAgICAgIHJldHVybiBfbW9kdWxlLmFwcGx5KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSksIG9wdGlvbnMpO1xyXG4gICAgICB9LFxyXG4gICAgICAkIDogZnVuY3Rpb24oZSwgY29udHJvbCl7IFxyXG4gICAgICAgIHJldHVybiAodHlwZW9mIGUgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS50b0FycmF5KChjb250cm9sIHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKGUpIHx8IFtdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGU7XHJcbiAgICAgIH0gXHJcbiAgICB9KTtcclxuICB9KF9tb2R1bGUpKTtcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gU3RyaW5nc1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24obW9kdWxlKXtcclxuICAgIG1vZHVsZS5hcHBseShTdHJpbmcsIHtcclxuICAgICAgc3RyaW5nQnVpbGRlciA6IG1vZHVsZS5zdHJpbmdCdWlsZGVyLFxyXG4gICAgICBsZWZ0UGFkICAgICAgIDogZnVuY3Rpb24gKHZhbCwgc2l6ZSwgY2gpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gJycgKyB2YWw7XHJcbiAgICAgICAgaWYgKGNoID09PSBudWxsIHx8IGNoID09PSB1bmRlZmluZWQgfHwgY2ggPT09ICcnKSBjaCA9ICcgJzsgICAgICAgICAgICBcclxuICAgICAgICB3aGlsZSAocmVzdWx0Lmxlbmd0aCA8IHNpemUpIHJlc3VsdCA9IGNoICsgcmVzdWx0OyAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRyaW1WYWx1ZXMgOiBmdW5jdGlvbiAodmFsdWVzKXsgcmV0dXJuIHZhbHVlcy5tYXAoZnVuY3Rpb24ocyl7cmV0dXJuIHMudHJpbSgpO30pO31cclxuICAgIH0pO1xyXG4gICAgbW9kdWxlLmFwcGx5KFN0cmluZy5wcm90b3R5cGUsIHtcclxuICAgICAgcmVwbGFjZUFsbCAgOiBmdW5jdGlvbihwYXR0ZXJuLCByZXBsYWNlbWVudCkgeyByZXR1cm4gdGhpcy5zcGxpdChwYXR0ZXJuKS5qb2luKHJlcGxhY2VtZW50KTsgfSxcclxuICAgICAgcmVwZWF0ICAgICAgOiBTdHJpbmcucHJvdG90eXBlLnJlcGVhdCAgICAgfHwgZnVuY3Rpb24oYSkgeyByZXR1cm4gbmV3IEFycmF5KGEgKyAxKS5qb2luKHRoaXMpOyB9LFxyXG4gICAgICBjb250YWlucyAgICA6IFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMgICB8fCBmdW5jdGlvbih0LCBzdGFydCkgeyByZXR1cm4gdGhpcy5pbmRleE9mKHQpID49IChzdGFydCB8fCAwKTsgfSxcclxuICAgICAgc3RhcnRzV2l0aCAgOiBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggfHwgZnVuY3Rpb24odCl7IHJldHVybiB0aGlzLmluZGV4T2YodCkgPT0gMDsgfSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICB0b0Zsb2F0ICAgICA6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLnRyaW0oKS5yZXBsYWNlQWxsKCcuJywgJycpLnJlcGxhY2VBbGwoJywnLCAnLicpIH0sXHJcbiAgICAgIGZpeERhdGUgICAgIDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuc3BsaXQoJyAnKVswXTsgfSxcclxuICAgICAgZml4VGltZSAgICAgOiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5zcGxpdCgnICcpWzFdOyB9LFxyXG4gICAgICBmaXhZZWFyICAgICA6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLmZpeERhdGUoKS5zcGxpdCgnLycpWzJdO30sXHJcbiAgICAgIHRyaW1TZWNvbmRzIDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuc3BsaXQoJzonKVswXSArICc6JyArIHRoaXMuc3BsaXQoJzonKVsxXSA7IH0sXHJcbiAgICAgIHBhZGRpbmdMZWZ0IDogZnVuY3Rpb24ocGFkZGluZ1ZhbHVlKXsgcmV0dXJuIChwYWRkaW5nVmFsdWUgKyB0aGlzKS5zbGljZSgtcGFkZGluZ1ZhbHVlLmxlbmd0aCk7IH0sXHJcbiAgICAgIGZvcm1hdCAgICAgIDogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgX19hcmcgICAgID0gYXJndW1lbnRzO1xyXG4gICAgICAgIHZhciBfX2NvbnRleHQgPSBfX2FyZ1tfX2FyZy5sZW5ndGggLSAxXSB8fCBzZWxmOyAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoL1xceyhcXGQrfFtee10rKVxcfS9nLCBmdW5jdGlvbihtLCBrZXkpe1xyXG4gICAgICAgICAgaWYoa2V5LmluZGV4T2YoJyMnKSA+IDApe1xyXG4gICAgICAgICAgICBsZXQgX190b2tlbnMgPSBrZXkuc3BsaXQoJyMnKTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlICA9IF9fYXJnW19fdG9rZW5zWzBdXTtcclxuICAgICAgICAgICAgbGV0IGNtZCAgICA9IF9fdG9rZW5zWzFdO1xyXG4gICAgICAgICAgICByZXR1cm4gKHZhbHVlICsgJycpLnBhZGRpbmdMZWZ0KGNtZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihrZXkuaW5kZXhPZignOicpID4gMCl7XHJcbiAgICAgICAgICAgIHZhciBfX2ZuID0ga2V5LnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgIF9fZm5bMF0gID0gbW9kdWxlLnRlbXBsYXRlcy5nZXRWYWx1ZShfX2ZuWzBdLCBfX2NvbnRleHQpO1xyXG4gICAgICAgICAgICBfX2ZuWzFdICA9IG1vZHVsZS50ZW1wbGF0ZXMuZ2V0VmFsdWUoX19mblsxXSwgX19jb250ZXh0KTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZm5bMF0oX19mblsxXSwgX19jb250ZXh0LCBfX2ZuLnNsaWNlKDIpKTsgICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiAvXlxcZCskLy50ZXN0KGtleSkgPyBfX2FyZ1trZXldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAodHlwZW9mIF9fY29udGV4dFtrZXldID09PSBcInVuZGVmaW5lZFwiKSA/IG1vZHVsZS50ZW1wbGF0ZXMuZ2V0VmFsdWUoa2V5LCBfX2NvbnRleHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfX2NvbnRleHRba2V5XTsgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pOyAgICAgIFxyXG4gIH0oX21vZHVsZSkpOyAgICAgIFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBBcnJheVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgXHJcbiAgKGZ1bmN0aW9uKG1vZHVsZSl7XHJcbiAgICBtb2R1bGUuYXBwbHkoQXJyYXkucHJvdG90eXBlLCB7ICAgICAgICAgIFxyXG4gICAgICByZW1vdmUgICA6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4T2Yobyk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9IC0xKSB0aGlzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZCAgICAgIDogZnVuY3Rpb24obykge1xyXG4gICAgICAgIHRoaXMucHVzaChvKTtcclxuICAgICAgICByZXR1cm4gbztcclxuICAgICAgfSxcclxuICAgICAgYXBwZW5kICAgOiBmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoKG8pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9LFxyXG4gICAgICBpdGVtICAgICA6IGZ1bmN0aW9uKHByb3BOYW1lLCB2YWx1ZSwgZGVmKXtcclxuICAgICAgICByZXR1cm4gYXJndW1lbnRzPT0xID8gdGhpcy5maWx0ZXIoIGZ1bmN0aW9uKHYpe3JldHVybiB2WydpZCddID09IHByb3BOYW1lIHx8IHZbJ19pZCddID09IHByb3BOYW1lfSlbMF0gfHwgZGVmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZmlsdGVyKCBmdW5jdGlvbih2KXtyZXR1cm4gdltwcm9wTmFtZV0gPT0gdmFsdWV9KVswXSB8fCBkZWY7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRhaW5zIDogZnVuY3Rpb24ocHJvcE5hbWUsdmFsdWUpeyByZXR1cm4gdGhpcy5pdGVtKHByb3BOYW1lLHZhbHVlKTsgfSxcclxuICAgICAgbGFzdEl0ZW0gOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXNbdGhpcy5sZW5ndGggLSAxXTsgfSxcclxuICAgICAgc2VsZWN0ICAgOiBmdW5jdGlvbihzZW50ZW5jZSl7IHJldHVybiB0aGlzLm1hcChzZW50ZW5jZSkgfSwgICBcclxuICAgICAgd2hlcmUgICAgOiBmdW5jdGlvbihzZW50ZW5jZSl7IFxyXG4gICAgICAgIGlmKG1vZHVsZS5pc0Z1bmN0aW9uKHNlbnRlbmNlKSkgcmV0dXJuIHRoaXMuZmlsdGVyKHNlbnRlbmNlKTtcclxuICAgICAgICBpZihtb2R1bGUuaXNPYmplY3Qoc2VudGVuY2UpKXtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmZpbHRlcihuZXcgRnVuY3Rpb24oJ2EnLCBPYmplY3Qua2V5cyhzZW50ZW5jZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKGEsIHByb3BuYW1lLCBpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgKyAoaSA+IDAgPyAnICYmICcgOiAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAgKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fdmFsdWUgPSBzZW50ZW5jZVtwcm9wbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoX192YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuICd7MX0udGVzdChhLnswfSknLmZvcm1hdChwcm9wbmFtZSwgX192YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobW9kdWxlLmlzU3RyaW5nKF9fdmFsdWUpKSByZXR1cm4gJ2EuezB9ID09PSBcXCd7MX1cXCcnLmZvcm1hdChwcm9wbmFtZSwgX192YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhLnswfSA9PT0gezF9Jy5mb3JtYXQocHJvcG5hbWUsIF9fdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSgpKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAncmV0dXJuICcpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9LFxyXG4gICAgICBzb3J0QnkgICAgICA6IGZ1bmN0aW9uKHByb3BuYW1lLCBkZXNjKXtcclxuICAgICAgICB2YXIgX19vcmRlciA9IFtdO1xyXG4gICAgICAgIHZhciBfX25hbWVzID0gcHJvcG5hbWUuc3BsaXQoJywnKS5tYXAoIGZ1bmN0aW9uKHRva2VuLGkpeyBcclxuICAgICAgICAgIHZhciBfX3BhaXIgPSB0b2tlbi5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgX19vcmRlcltpXSA9IChfX3BhaXJbMV0gJiYgKF9fcGFpclsxXS50b1VwcGVyQ2FzZSgpPT0nREVTQycpKSA/IC0xIDogMTsgICAgICBcclxuICAgICAgICAgIHJldHVybiBfX3BhaXJbMF07ICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIF9fb3JkZXJbMF0gPSAoZGVzYyA/IC0xIDogMSlcclxuICAgICAgICB0aGlzLnNvcnQoZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwOyAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9fZm4gPSBmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciBfX3ggPSBhW19fbmFtZXNbaV1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIF9feSA9IGJbX19uYW1lc1tpXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihfX3ggPCBfX3kpIHJldHVybiAtMSAqIF9fb3JkZXJbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihfX3ggPiBfX3kpIHJldHVybiAgMSAqIF9fb3JkZXJbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihpIDwgX19uYW1lcy5sZW5ndGgpIHJldHVybiBfX2ZuKGEsYik7ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2ZuKGEsYik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpczsgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIG9yZGVyQnkgICAgIDogZnVuY3Rpb24oc2VudGVuY2Upe1xyXG4gICAgICAgIHZhciBfX3NlbnRlbmNlID0gc2VudGVuY2U7ICAgIFxyXG4gICAgICAgIGlmKG1vZHVsZS5pc1N0cmluZyhzZW50ZW5jZSkpIF9fc2VudGVuY2UgPSBmdW5jdGlvbihhKXsgcmV0dXJuIGFbc2VudGVuY2VdOyB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlfSlcclxuICAgICAgICAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBfX3NlbnRlbmNlKGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBfX3NlbnRlbmNlKGIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgoeCA8IHkpID8gLTEgOiAoKHggPiB5KSA/IDEgOiAwKSk7XHJcbiAgICAgICAgICAgICAgICAgICB9KTsgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBkaXN0aW5jdCAgICA6IGZ1bmN0aW9uKHNlbnRlbmNlKSB7XHJcbiAgICAgICAgdmFyIF9fc2VudGVuY2UgPSBzZW50ZW5jZTsgICAgXHJcbiAgICAgICAgaWYobW9kdWxlLmlzU3RyaW5nKHNlbnRlbmNlKSkgX19zZW50ZW5jZSA9IGZ1bmN0aW9uKGEpeyByZXR1cm4gYVtzZW50ZW5jZV07IH1cclxuICAgICAgICB2YXIgciA9IFtdO1xyXG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICAgIHZhciBfdmFsdWUgPSBfX3NlbnRlbmNlKGl0ZW0pO1xyXG4gICAgICAgICAgaWYoci5pbmRleE9mKF92YWx1ZSk9PS0xKSByLnB1c2goX3ZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgICAgfSxcclxuICAgICAgZ3JvdXBCeSA6IGZ1bmN0aW9uKHByb3Ape1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZHVjZShmdW5jdGlvbihncm91cHMsIGl0ZW0pIHtcclxuICAgICAgICAgIHZhciB2YWwgPSBpdGVtW3Byb3BdO1xyXG4gICAgICAgICAgKGdyb3Vwc1t2YWxdID0gZ3JvdXBzW3ZhbF0gfHwgW10pLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICByZXR1cm4gZ3JvdXBzXHJcbiAgICAgICAgfSwge30pXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvRGljdGlvbmFyeSA6IGZ1bmN0aW9uKHByb3AsIHZhbHVlKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWR1Y2UoZnVuY3Rpb24oYSwgZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtkW3Byb3BdXSA9IHZhbHVlID8gZFt2YWx1ZV0gOiBkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB7fSk7ICBcclxuICAgICAgfVxyXG4gICAgfSk7ICAgICAgIFxyXG4gIH0oX21vZHVsZSkpO1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gVGVtcGxhdGVzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpe1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFZhbHVlKGtleSwgc2NvcGUpIHsgICAgICAgIFxyXG4gICAgICByZXR1cm4ga2V5LnNwbGl0KC9cXC58XFxbfFxcXS8pXHJcbiAgICAgICAgICAgICAgICAucmVkdWNlKCBmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICAgICAgICAgICAgaWYgKGIgPT09ICcnKSByZXR1cm4gYTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGFbYl0gPT09IHVuZGVmaW5lZCA/IChhID09PSBzZWxmID8gJycgOiBzZWxmKSA6IGFbYl07XHJcbiAgICAgICAgICAgICAgICB9LCBzY29wZSB8fCBzZWxmICk7ICAgIFxyXG4gICAgfVxyXG4gICBcclxuICAgIGZ1bmN0aW9uIG1lcmdlKHRlbXBsYXRlLCBvLCBrZXkpIHtcclxuICAgICAgdmFyIF9fcmVzdWx0ID0gdGVtcGxhdGUucmVwbGFjZSgveyhbXntdKyk/fS9nLCBmdW5jdGlvbiAobSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihrZXkuaW5kZXhPZignOicpID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2ZuID0ga2V5LnNwbGl0KCc6Jyk7ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19mblswXSAgPSBnZXRWYWx1ZShfX2ZuWzBdLCBvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19mblsxXSAgPSBnZXRWYWx1ZShfX2ZuWzFdLCBvKTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZm5bMF0oX19mblsxXSwgbyk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgciAgID0gZ2V0VmFsdWUoa2V5LCBvKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2sgPSAoa2V5LmNvbnRhaW5zKCcuJykgPyAnJyA6ICdvLicpICsga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAocikgPT0gJ2Z1bmN0aW9uJyl7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByKG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfWVsc2V7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIChyKSA9PSAnZnVuY3Rpb24nID8gcihvKSA6IHI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7ICAgICBcclxuICAgICAgcmV0dXJuIF9fcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbGxUZW1wbGF0ZShlLCBzY29wZSkge1xyXG4gICAgICB2YXIgX3Jvb3QgPSBtb2R1bGUuJChlKTtcclxuICAgICAgdmFyIF9lbGVtZW50cyA9IG1vZHVsZS4kKCdbeGJpbmRdJywgX3Jvb3QpOyBcclxuICAgICAgaWYgKF9yb290LmF0dHJpYnV0ZXMueGJpbmQpIF9lbGVtZW50cy5wdXNoKF9yb290KTtcclxuICAgICAgX2VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgU3RyaW5nLnRyaW1WYWx1ZXMoY2hpbGQuYXR0cmlidXRlcy54YmluZC52YWx1ZS5zcGxpdCgnOycpKS5mb3JFYWNoKGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgICAgaWYgKHRva2VuID09PSAnJykgcmV0dXJuO1xyXG4gICAgICAgICAgdmFyIF90b2tlbnMgPSBTdHJpbmcudHJpbVZhbHVlcyh0b2tlbi5zcGxpdCgnOicpKTsgICAgICAgICAgICBcclxuICAgICAgICAgIHZhciBfcGFyYW1zID0gU3RyaW5nLnRyaW1WYWx1ZXMoX3Rva2Vuc1sxXS5zcGxpdCgvXFxzfFxcLC8pKTtcclxuICAgICAgICAgIHZhciBfdmFsdWUgPSBnZXRWYWx1ZShfcGFyYW1zWzBdLCBzY29wZSk7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIChfdmFsdWUpID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdmFyIF9hcmdzID0gX3BhcmFtcy5zbGljZSgxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB4YmluZD1cInRleHRDb250ZW50OkRhdGEuZm5UZXN0IEBPdGhlcixBLDVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnB1c2gocC5jaGFyQXQoMCkgPT0gJ0AnID8gZ2V0VmFsdWUocC5zbGljZSgxKSwgc2NvcGUpIDogcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW3Njb3BlLCBjaGlsZF0pO1xyXG4gICAgICAgICAgICBfdmFsdWUgPSBfdmFsdWUuYXBwbHkoc2NvcGUsIF9hcmdzKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoX3BhcmFtc1sxXSkge1xyXG4gICAgICAgICAgICB2YXIgX2Z1bmMgPSBnZXRWYWx1ZShfcGFyYW1zWzFdLCBzY29wZSk7XHJcbiAgICAgICAgICAgIF92YWx1ZSA9IF9mdW5jKF92YWx1ZSwgX3BhcmFtc1syXSwgc2NvcGUsIGNoaWxkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNoaWxkW190b2tlbnNbMF1dID0gX3ZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXhlY3V0ZVRlbXBsYXRlKGUsIHZhbHVlcywgZG9tKSB7XHJcbiAgICAgIHZhciBfdGVtcGxhdGUgPSBtb2R1bGUuJChlKTtcclxuICAgICAgdmFyIF9yZXN1bHQgICA9IHZhbHVlcy5yZWR1Y2UoIGZ1bmN0aW9uKGEsIHYsIGkpe1xyXG4gICAgICAgIHZhciBfbm9kZSA9IHsgaW5kZXggOiBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YSAgOiB2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgbm9kZSAgOiBmaWxsVGVtcGxhdGUoX3RlbXBsYXRlLmNsb25lTm9kZSh0cnVlKSwgdikgfTtcclxuICAgICAgICBhLm5vZGVzLnB1c2goX25vZGUpO1xyXG4gICAgICAgIGlmICghZG9tKSBhLmh0bWwucHVzaChfbm9kZS5ub2RlLm91dGVySFRNTC5yZXBsYWNlKC94YmluZD1cIlteXCJdKlwiL2csICcnKSk7XHJcbiAgICAgICAgcmV0dXJuIGE7IFxyXG4gICAgICB9LCB7IG5vZGVzIDogW10sIGh0bWwgOiBbXSB9KTtcclxuICAgICAgcmV0dXJuIGRvbSA/IF9yZXN1bHQubm9kZXMgOiBfcmVzdWx0Lmh0bWwuam9pbignJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG1vZHVsZS50ZW1wbGF0ZXMgPSB7IGdldFZhbHVlICA6IGdldFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2UgICAgIDogbWVyZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBleGVjdXRlICAgOiBleGVjdXRlVGVtcGxhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsICAgICAgOiBmaWxsVGVtcGxhdGUgfTtcclxuXHJcbiAgfShfbW9kdWxlKSk7XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBBamF4XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpeyAgXHJcbiAgICBtb2R1bGUuYWpheCA9IHt9O1xyXG4gICAgbW9kdWxlLmFwcGx5KG1vZHVsZS5hamF4LCB7XHJcbiAgICAgIGdldCAgOiBmdW5jdGlvbiAodXJsLCBpbnRlcmNlcHRvcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgLy91cmwgKz0gKHVybC5jb250YWlucygnPycpID8gJyZtcz0nIDogJz9tcz0nKSArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgdmFyIHhtbCA9IHRoaXMuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgIHhtbC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgaWYoaW50ZXJjZXB0b3IpIGludGVyY2VwdG9yKHhtbCk7XHJcbiAgICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignSWYtTW9kaWZpZWQtU2luY2UnLCAnVGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVQnKTtcclxuICAgICAgICAgIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdDYWNoZS1Db250cm9sJywgJ25vLWNhY2hlJyk7XHJcbiAgICAgICAgICB4bWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkgeyBpZiAoeG1sLnJlYWR5U3RhdGUgPT0gNCkgcmVzb2x2ZSh4bWwucmVzcG9uc2VUZXh0KSB9O1xyXG4gICAgICAgICAgeG1sLm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7IHJlamVjdChlKTsgfTtcclxuICAgICAgICAgIHhtbC5zZW5kKG51bGwpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfSxcclxuICAgICAgcG9zdCA6IGZ1bmN0aW9uKHVybCwgcGFyYW1zLCBjYWxsQmFjaykgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHZhciB4bWwgPSB0aGlzLmNyZWF0ZVhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeG1sLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHsgaWYgKHhtbC5yZWFkeVN0YXRlID09IDQpIGNhbGxCYWNrKHhtbC5yZXNwb25zZVRleHQpIH07XHJcbiAgICAgICAgeG1sLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ6SVNPLTg4NTktMScpO1xyXG4gICAgICAgIHhtbC5zZW5kKHBhcmFtcyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNhbGxXZWJNZXRob2QgOiBmdW5jdGlvbih1cmwsIHBhcmFtcywgY2FsbEJhY2spIHtcclxuICAgICAgICB2YXIgeG1sID0gdGhpcy5jcmVhdGVYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhtbC5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcclxuICAgICAgICB4bWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXsgaWYgKHhtbC5yZWFkeVN0YXRlID09IDQpIGNhbGxCYWNrKHhtbC5yZXNwb25zZVRleHQpIH07XHJcbiAgICAgICAgeG1sLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04Jyk7XHJcbiAgICAgICAgeG1sLnNlbmQocGFyYW1zKTtcclxuICAgICAgfSxcclxuICAgICAgY3JlYXRlWE1MSHR0cFJlcXVlc3QgOiBmdW5jdGlvbigpeyByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7IH1cclxuICAgIH0pOyAgXHJcbiAgfShfbW9kdWxlKSk7IFxyXG4gICAgICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gVGFiYmx5XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbiAobW9kdWxlKXtcclxuICAgICAgXHJcbiAgICB2YXIgX19jb250ZXh0O1xyXG5cclxuICAgIGZ1bmN0aW9uIF9fRXhlY3V0ZUNvZGUoY29kZSl7XHJcblxyXG4gICAgICBfX2NvbnRleHQgPSB7IHNlY3Rpb25zIDogW10sIGdyb3VwcyA6IFtdLCBkZXRhaWxzIDogW119O1xyXG5cclxuICAgICAgdmFyIF9fY3VyO1xyXG4gICAgICB2YXIgX19mdW5jICAgICAgID0gJyc7XHJcbiAgICAgIHZhciBfX2Z1bmNCb2R5ICAgPSAnJztcclxuICAgICAgdmFyIF9fc2V0U3RhdGUgID0gZmFsc2U7XHJcblxyXG4gICAgICBmdW5jdGlvbiBfX2dldCh2YWx1ZSl7XHJcbiAgICAgICAgaWYodmFsdWUgJiYgdmFsdWUudHJpbSgpLnN0YXJ0c1dpdGgoJ0AnKSl7XHJcbiAgICAgICAgICByZXR1cm4gX19jb250ZXh0W3ZhbHVlLnRyaW0oKS5zcGxpdCgnQCcpWzFdLnRyaW0oKV0gfHwgJyc7XHJcbiAgICAgICAgfWVsc2UgaWYodmFsdWUpe1xyXG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnRyaW0oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICB9ICBcclxuXHJcbiAgICAgIGZ1bmN0aW9uIF9fcGFyc2VfcHJvcGVydGllcyh2YWx1ZSl7XHJcbiAgICAgICAgdmFyIF9fcmVnICAgPSAgLyhbYS16QS1aMC05X1xcLV0qKVxccyo6XFxzKignW14nXSonfFteXFxzXSopL2c7XHJcbiAgICAgICAgdmFyIF9fbyAgICAgPSB7fTtcclxuICAgICAgICB2YXIgX19tYXRjaCA9IF9fcmVnLmV4ZWModmFsdWUpO1xyXG4gICAgICAgIHdoaWxlIChfX21hdGNoICE9IG51bGwpIHtcclxuICAgICAgICAgIF9fb1tfX21hdGNoWzFdLnRyaW0oKV0gPSBfX2dldChfX21hdGNoWzJdLnRyaW0oKS5yZXBsYWNlKC9eJyhbXiddKiknJC9nLCAnJDEnKSk7XHJcbiAgICAgICAgICBfX21hdGNoID0gX19yZWcuZXhlYyh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfX29cclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gX19wYXJzZUxpbmUobCwgbyl7XHJcbiAgICAgICAgaWYoIV9fZnVuYyAmJiAhbC50cmltKCkpIHJldHVybiBmdW5jdGlvbigpe307XHJcbiAgICAgICAgdmFyIF9fa2V5cyA9IC9ERUZJTkV8I3xDUkVBVEV8U0VUfEZVTkNUSU9OfEVORC87XHJcbiAgICAgICAgaWYoX19rZXlzLnRlc3QobCkpe1xyXG4gICAgICAgICAgaWYoL14jLy50ZXN0KGwpKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICAgIH1lbHNlIGlmKC9eU0VUIChcXHcuKikvLnRlc3QobCkpeyAgXHJcbiAgICAgICAgICAgIHZhciBfX3Rva2VucyA9IGwubWF0Y2goL15TRVQgKFxcdy4qKSQvKTtcclxuICAgICAgICAgICAgX19zZXRTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIF9fZnVuYyAgICAgID0gX190b2tlbnNbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICBfX2Z1bmNCb2R5ICA9ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXt9O1xyXG4gICAgICAgICAgfWVsc2UgaWYoL15GVU5DVElPTiAoXFx3LiopLy50ZXN0KGwpKXsgIFxyXG4gICAgICAgICAgICB2YXIgX190b2tlbnMgPSBsLm1hdGNoKC9eRlVOQ1RJT04gKFxcdy4qKSQvKTtcclxuICAgICAgICAgICAgX19zZXRTdGF0ZSAgPSBmYWxzZTtcclxuICAgICAgICAgICAgX19mdW5jICAgICAgID0gX190b2tlbnNbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICBfX2Z1bmNCb2R5ICAgPSAnJztcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICAgIH1lbHNlIGlmKC9eRU5ELy50ZXN0KGwpKXsgICAgICBcclxuICAgICAgICAgICAgdmFyIF9fYm9keSA9IF9fZnVuY0JvZHk7XHJcbiAgICAgICAgICAgIHZhciBfX25hbWUgPSBfX2Z1bmM7XHJcbiAgICAgICAgICAgIF9fZnVuYyA9IF9fZnVuY0JvZHkgPSAnJzsgXHJcbiAgICAgICAgICAgIGlmKF9fc2V0U3RhdGUpe1xyXG4gICAgICAgICAgICAgIF9fc2V0U3RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpeyBfX2N1cltfX25hbWVdID0gX19ib2R5LnRyaW0oKTsgfVxyXG4gICAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXsgY3R4W19fbmFtZV0gPSBuZXcgRnVuY3Rpb24oJ2N0eCcsIF9fYm9keSk7IH1cclxuICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgfWVsc2UgaWYoL15ERUZJTkVcXHNcXHMqKFxcdy4qKVxccyo9XFxzKiguKikkLy50ZXN0KGwpKXtcclxuICAgICAgICAgICAgdmFyIF9fdG9rZW5zID0gbC5tYXRjaCgvXkRFRklORVxcc1xccyooW2EtekEtWjAtOV9cXC1dKilcXHMqPVxccyooLiopJC8pO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgICAgICAgdmFyIHRva2VucyA9IF9fdG9rZW5zO1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpeyBjdHhbdG9rZW5zWzFdLnRyaW0oKV0gPSB0b2tlbnNbMl0udHJpbSgpOyB9XHJcbiAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgIH1lbHNlIGlmKC9eQ1JFQVRFXFxzXFxzKihcXHcqKSAoLiopJC8udGVzdChsKSl7XHJcbiAgICAgICAgICAgIHZhciBfX3Rva2VucyA9IGwubWF0Y2goL15DUkVBVEVcXHNcXHMqKFxcdyopICguKikkLyk7XHJcbiAgICAgICAgICAgIGlmKF9fdG9rZW5zWzFdPT0nc2VjdGlvbicpe1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyBcclxuICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBfX3Rva2VucztcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpeyBcclxuICAgICAgICAgICAgICAgICAgY3R4LnNlY3Rpb25zLnB1c2goX19wYXJzZV9wcm9wZXJ0aWVzKHRva2Vuc1syXSkpOyBcclxuICAgICAgICAgICAgICAgICAgX19jdXIgPSBjdHguc2VjdGlvbnNbY3R4LnNlY3Rpb25zLmxlbmd0aCAtIDFdO31cclxuICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihfX3Rva2Vuc1sxXT09J2dyb3VwJyl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IF9fdG9rZW5zO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7IFxyXG4gICAgICAgICAgICAgICAgICBjdHguZ3JvdXBzLnB1c2goX19wYXJzZV9wcm9wZXJ0aWVzKHRva2Vuc1syXSkpO1xyXG4gICAgICAgICAgICAgICAgICBfX2N1ciA9IGN0eC5ncm91cHNbY3R4Lmdyb3Vwcy5sZW5ndGggLSAxXTt9XHJcbiAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICB9ZWxzZSBpZihfX3Rva2Vuc1sxXT09J2RldGFpbCcpe1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyBcclxuICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBfX3Rva2VucztcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpe1xyXG4gICAgICAgICAgICAgICAgICBjdHguZGV0YWlscy5wdXNoKF9fcGFyc2VfcHJvcGVydGllcyh0b2tlbnNbMl0pKTtcclxuICAgICAgICAgICAgICAgICAgX19jdXIgPSBjdHguZGV0YWlsc1tjdHguZGV0YWlscy5sZW5ndGggLSAxXTt9XHJcbiAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9ZWxzZXsgdGhyb3cgbmV3IEVycm9yKCdUYWJibHkgOiBVbnJlY29nbml6ZWQgdGV4dCBhZnRlciBERUZJTkUnKX0gIFxyXG4gICAgICAgIH1lbHNleyBcclxuICAgICAgICAgIGlmKF9fZnVuYyl7XHJcbiAgICAgICAgICAgIF9fZnVuY0JvZHkgKz0gbztcclxuICAgICAgICAgICAgX19mdW5jQm9keSArPSAnXFxuJztcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGFiYmx5IDogVW5yZWNvZ25pemVkIHRleHQnKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29kZS5zcGxpdCgnXFxuJykuZm9yRWFjaChmdW5jdGlvbihsKXsgXHJcbiAgICAgICAgX19wYXJzZUxpbmUobC50cmltKCksbCkoX19jb250ZXh0KTsgXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHsgY29udGV4dCA6IF9fY29udGV4dCB9O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb2R1bGUudGFiYmx5ID0geyBleGVjdXRlIDogX19FeGVjdXRlQ29kZSB9O1xyXG5cclxuICB9KF9tb2R1bGUpKTtcclxuICAgICAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFJlcG9ydHNcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUgICAgICAgICAgICAgICAgPSB7fTsgICAgICBcclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuZ2VuZXJhdGVSZXBvcnQgPSBmdW5jdGlvbihyZCwgZGF0YSwgbWVkaWF0b3Ipe1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuYmVnaW4nIH0pO1xyXG4gICAgICB2YXIgX19yZCAgICAgID0gcmQgfHwgbW9kdWxlLlJlcG9ydEVuZ2luZS5yZDtcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBUcmFuc2Zvcm1hciBsb3MgZGF0b3NcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICB2YXIgX19kYXRhU2V0ID0gX19yZC5jb250ZXh0LnBhcnNlRGF0YSA/IF9fcmQuY29udGV4dC5wYXJzZURhdGEoX19yZCwgZGF0YSwgbWVkaWF0b3IubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkYXRhO1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQubG9nLm1lc3NhZ2UnLCB0ZXh0IDogJ0luaWNpYWxpemFuZG8uLi4nIH0pO1xyXG4gICAgICBjb25zb2xlLnRpbWUoJ1JlbmRlcicpO1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEluaWNpYWxpemFyIGZ1bmNpb25lcyBwYXJhIGxhIGdlbmVyYWNpw7NuIGRlIGNvbnRlbmlkbyBwZXJzb25hbGl6YWRvXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19pbml0Q29udGVudFByb3ZpZGVycygpe1xyXG4gICAgICAgIFtfX3JkLmNvbnRleHQuc2VjdGlvbnMsIF9fcmQuY29udGV4dC5kZXRhaWxzLCBfX3JkLmNvbnRleHQuZ3JvdXBzXVxyXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24oYSxiKXsgcmV0dXJuIGEuY29uY2F0KGIpOyB9LCBbXSlcclxuICAgICAgICAubWFwKGZ1bmN0aW9uKHMpe1xyXG4gICAgICAgICAgaWYocy52YWx1ZVByb3ZpZGVyZm4pe1xyXG4gICAgICAgICAgICBzLnZhbHVlUHJvdmlkZXIgPSBtb2R1bGUudGVtcGxhdGVzLmdldFZhbHVlKHMudmFsdWVQcm92aWRlcmZuLCBzZWxmKTsgXHJcbiAgICAgICAgICAgIGRlbGV0ZSBzLnZhbHVlUHJvdmlkZXJmbjsgICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihzLmZvb3RlclZhbHVlUHJvdmlkZXJmbil7XHJcbiAgICAgICAgICAgIHMuZm9vdGVyVmFsdWVQcm92aWRlciA9IG1vZHVsZS50ZW1wbGF0ZXMuZ2V0VmFsdWUocy5mb290ZXJWYWx1ZVByb3ZpZGVyZm4sIHNlbGYpOyBcclxuICAgICAgICAgICAgZGVsZXRlIHMuZm9vdGVyVmFsdWVQcm92aWRlcmZuOyBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKHMuaGVhZGVyVmFsdWVQcm92aWRlcmZuKXtcclxuICAgICAgICAgICAgcy5oZWFkZXJWYWx1ZVByb3ZpZGVyID0gbW9kdWxlLnRlbXBsYXRlcy5nZXRWYWx1ZShzLmhlYWRlclZhbHVlUHJvdmlkZXJmbiwgc2VsZik7IFxyXG4gICAgICAgICAgICBkZWxldGUgcy5oZWFkZXJWYWx1ZVByb3ZpZGVyZm47XHJcbiAgICAgICAgICB9ICBcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gR2VuZXJhY2nDs24gZGUgbGFzIHNlY2Npb25lcyBkZSBjYWJlY2VyYSBkZSBsYXMgYWdydXBhY2lvbmVzXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICB2YXIgX19NRVJHRV9BTkRfU0VORCA9IGZ1bmN0aW9uKHQsIHAsIGZua2V5KXsgbWVkaWF0b3Iuc2VuZChtb2R1bGUudGVtcGxhdGVzLm1lcmdlKHQsIHAsIGZua2V5KSk7IH07XHJcbiAgICAgIGZ1bmN0aW9uIF9fZ3JvdXBzSGVhZGVycygpe1xyXG4gICAgICAgIF9fZ3JvdXBzLmZvckVhY2goZnVuY3Rpb24oZywgaWkpe1xyXG4gICAgICAgICAgaWYoaWkgPCBfX2JyZWFrSW5kZXgpIHJldHVybjsgXHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuc2VjdGlvbnMuZ3JvdXAuaGVhZGVyJywgdmFsdWUgOiBnLmlkIH0pOyAgXHJcbiAgICAgICAgICBpZihnLmRlZmluaXRpb24uaGVhZGVyKSByZXR1cm4gX19NRVJHRV9BTkRfU0VORChnLmRlZmluaXRpb24uaGVhZGVyLCBnLCAnY29tcGlsZWRfaGVhZGVyZm4nKTtcclxuICAgICAgICAgIGlmKGcuZGVmaW5pdGlvbi5oZWFkZXJWYWx1ZVByb3ZpZGVyKSByZXR1cm4gbWVkaWF0b3Iuc2VuZChnLmRlZmluaXRpb24uaGVhZGVyVmFsdWVQcm92aWRlcihnKSk7IFxyXG4gICAgICAgIH0pOyAgICBcclxuICAgICAgfVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gR2VuZXJhY2nDs24gZGUgbGFzIHNlY2Npb25lcyBkZSByZXN1bWVuIGRlIGxhcyBhZ3J1cGFjaW9uZXNcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9fZ3JvdXBzRm9vdGVycyhpbmRleCl7XHJcbiAgICAgICAgdmFyIF9fZ2cgPSBfX2dyb3Vwcy5tYXAoZnVuY3Rpb24oZyl7cmV0dXJuIGc7fSk7IFxyXG4gICAgICAgIGlmKGluZGV4KSBfX2dnLnNwbGljZSgwLCBpbmRleCk7XHJcbiAgICAgICAgX19nZy5yZXZlcnNlKCkuZm9yRWFjaCggZnVuY3Rpb24oZyl7XHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuc2VjdGlvbnMuZ3JvdXAuZm9vdGVyJywgdmFsdWUgOiBnLmlkIH0pOyAgICAgICAgICBcclxuICAgICAgICAgIGlmKGcuZGVmaW5pdGlvbi5mb290ZXIpIHJldHVybiBfX01FUkdFX0FORF9TRU5EKGcuZGVmaW5pdGlvbi5mb290ZXIsIGcsICdjb21waWxlZF9mb290ZXJmbicpO1xyXG4gICAgICAgICAgaWYoZy5kZWZpbml0aW9uLmZvb3RlclZhbHVlUHJvdmlkZXIpIHJldHVybiBtZWRpYXRvci5zZW5kKGcuZGVmaW5pdGlvbi5mb290ZXJWYWx1ZVByb3ZpZGVyKGcpKTtcclxuICAgICAgICB9KTsgXHJcbiAgICAgIH0gXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEdlbmVyYWNpw7NuIGRlIGxhcyBzZWNjaW9uZXMgZGUgZGV0YWxsZVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX2RldGFpbHNTZWN0aW9ucygpe1xyXG4gICAgICAgIF9fZGV0YWlscy5mb3JFYWNoKGZ1bmN0aW9uKGQpe1xyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnNlY3Rpb25zLmRldGFpbCcsIHZhbHVlIDogZC5pZCB9KTtcclxuICAgICAgICAgIGlmKGQudGVtcGxhdGUpIHJldHVybiBfX01FUkdFX0FORF9TRU5EKGQudGVtcGxhdGUsIGQsICdjb21waWxlZGZuJylcclxuICAgICAgICAgIGlmKGQudmFsdWVQcm92aWRlcikgcmV0dXJuIG1lZGlhdG9yLnNlbmQoZC52YWx1ZVByb3ZpZGVyKGQpKTtcclxuICAgICAgICB9KSAgICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEdlbmVyYWNpw7NuIGRlIGxhcyBzZWNjaW9uZXMgZGUgdG90YWwgZ2VuZXJhbFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX2dyYW5kVG90YWxTZWN0aW9ucygpe1xyXG4gICAgICAgIF9fdG90YWxzLmZvckVhY2goZnVuY3Rpb24odCl7XHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuc2VjdGlvbnMudG90YWwnLCB2YWx1ZSA6IHQuaWQgfSk7XHJcbiAgICAgICAgICBpZih0LnRlbXBsYXRlKSByZXR1cm4gX19NRVJHRV9BTkRfU0VORCh0LnRlbXBsYXRlLCB0LCAnY29tcGlsZWRmbicpXHJcbiAgICAgICAgICBpZih0LnZhbHVlUHJvdmlkZXIpIHJldHVybiBtZWRpYXRvci5zZW5kKHQudmFsdWVQcm92aWRlcih0KSk7XHJcbiAgICAgICAgfSkgICAgICAgICAgICBcclxuICAgICAgfSBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gR2VuZXJhY2nDs24gZGUgbGFzIHNlY2Npb25lcyBkZSBjYWJlY2VyYSBkZWwgaW5mb3JtZVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX3JlcG9ydEhlYWRlclNlY3Rpb25zKCl7XHJcbiAgICAgICAgX19oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odCl7XHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuc2VjdGlvbnMuaGVhZGVyJywgdmFsdWUgOiB0IH0pO1xyXG4gICAgICAgICAgaWYodC50ZW1wbGF0ZSkgcmV0dXJuIF9fTUVSR0VfQU5EX1NFTkQodC50ZW1wbGF0ZSwgdCwgJ2NvbXBpbGVkZm4nKVxyXG4gICAgICAgICAgaWYodC52YWx1ZVByb3ZpZGVyKSByZXR1cm4gbWVkaWF0b3Iuc2VuZCh0LnZhbHVlUHJvdmlkZXIodCkpO1xyXG4gICAgICAgIH0pICAgICAgICAgICAgXHJcbiAgICAgIH0gXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEluaWNpYWxpemFyIGVsIG9iamV0byBxdWUgc2lydmUgZGUgYWN1bXVsYWRvclxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX3Jlc29sdmVTdW1tYXJ5T2JqZWN0KCl7XHJcbiAgICAgICAgdmFyIF9fc3VtbWFyeSA9IEpTT04ucGFyc2UoX19yZC5jb250ZXh0LnN1bW1hcnkgfHwgJ3t9Jyk7XHJcbiAgICAgICAgaWYoX19yZC5jb250ZXh0Lm9uSW5pdFN1bW1hcnlPYmplY3QpIHJldHVybiBfX3JkLmNvbnRleHQub25Jbml0U3VtbWFyeU9iamVjdChfX3N1bW1hcnkpOyAgICAgIFxyXG4gICAgICAgIHJldHVybiBfX3N1bW1hcnk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBfX2JyZWFrSW5kZXggPSAtMTsgXHJcblxyXG4gICAgICB2YXIgX19zdW1tYXJ5ICAgID0gX19yZXNvbHZlU3VtbWFyeU9iamVjdCgpO1xyXG4gICAgICB2YXIgX19oZWFkZXJzICAgID0gKF9fcmQuY29udGV4dC5zZWN0aW9ucyB8fCBbXSkud2hlcmUoeyB0eXBlIDogJ2hlYWRlcicgfSk7XHJcbiAgICAgIHZhciBfX3RvdGFscyAgICAgPSAoX19yZC5jb250ZXh0LnNlY3Rpb25zIHx8IFtdKS53aGVyZSh7IHR5cGUgOiAndG90YWwnIH0pO1xyXG4gICAgICB2YXIgX19mb290ZXJzICAgID0gKF9fcmQuY29udGV4dC5zZWN0aW9ucyB8fCBbXSkud2hlcmUoeyB0eXBlIDogJ2Zvb3RlcicgfSk7XHJcbiAgICAgIHZhciBfX2RldGFpbHMgICAgPSBfX3JkLmNvbnRleHQuZGV0YWlscyB8fCBbXTtcclxuICAgICAgdmFyIF9fZ3JvdXBzICAgICA9IF9fcmQuY29udGV4dC5ncm91cHMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGcsIGkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAgbmFtZSAgICAgICA6ICdHJyArIChpKzEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmQgICAgICAgICA6IF9fcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbml0aW9uIDogZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgICAgOiAnJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhICAgICAgIDogbW9kdWxlLmNsb25lKF9fc3VtbWFyeSksICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdCA6IGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fayA9IHZhbHVlW3RoaXMuZGVmaW5pdGlvbi5rZXldLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX0d4ID0gc2VsZi5CU1t0aGlzLm5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LmFsbFtfX2tdID0gX19HeC5hbGxbX19rXSB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5hbGxbX19rXS5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5yZWNvcmRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX19yZXN1bWUgPT09IGZhbHNlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX19yZXN1bWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuY29weSh2YWx1ZSwgdGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9fcmVzdW1lID0gT2JqZWN0LmtleXModGhpcy5kYXRhKS5sZW5ndGggPiAwKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuY29weSh2YWx1ZSwgdGhpcy5kYXRhKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtICA6IGZ1bmN0aW9uKHZhbHVlKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2sgPSB2YWx1ZVt0aGlzLmRlZmluaXRpb24ua2V5XS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19HeCA9IHNlbGYuQlNbdGhpcy5uYW1lXTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3guYWxsW19fa10gPSBfX0d4LmFsbFtfX2tdIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LmFsbFtfX2tdLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LnJlY29yZENvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX19yZXN1bWUgPT09IGZhbHNlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuc3VtKHZhbHVlLCB0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0IDogZnVuY3Rpb24odmFsdWUpeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVbdGhpcy5kZWZpbml0aW9uLmtleV0gPT0gdGhpcy5jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSB8fCBbXTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBzZWxmLkJTID0geyByZXBvcnREZWZpbml0aW9uIDogX19yZCwgbWVkaWF0b3IgOiBtZWRpYXRvciB9OyAgICAgICAgICAgICAgXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gT3JkZW5hciBsb3MgZGF0b3NcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBpZihfX3JkLmNvbnRleHQuaXRlcmF0ZWZuKXtcclxuICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQubG9nLm1lc3NhZ2UnLCB0ZXh0IDogJ0luaWNpYWxpemFuZG8gZWxlbWVudG9zLi4uJyB9KTtcclxuICAgICAgICBfX2RhdGFTZXQuZm9yRWFjaChfX3JkLmNvbnRleHQuaXRlcmF0ZWZuKTtcclxuICAgICAgfVxyXG4gICAgICBpZihfX3JkLmNvbnRleHQub3JkZXJCeSl7XHJcbiAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmxvZy5tZXNzYWdlJywgdGV4dCA6ICdPcmRlbmFuZG8gZGF0b3MuLi4nIH0pO1xyXG4gICAgICAgIF9fZGF0YVNldC5zb3J0QnkoX19yZC5jb250ZXh0Lm9yZGVyQnksIGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEluaWNpYWxpemFyXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgc2VsZi5CUyA9IHsgcmVjb3JkQ291bnQgICAgICA6IDAsIFxyXG4gICAgICAgICAgICAgICAgICBHMCAgICAgICAgICAgICAgIDogbW9kdWxlLmNsb25lKF9fc3VtbWFyeSksXHJcbiAgICAgICAgICAgICAgICAgIGRhdGFTZXQgICAgICAgICAgOiBfX2RhdGFTZXQsXHJcbiAgICAgICAgICAgICAgICAgIHJlcG9ydERlZmluaXRpb24gOiBfX3JkLCBcclxuICAgICAgICAgICAgICAgICAgbWVkaWF0b3IgICAgICAgICA6IG1lZGlhdG9yIH07XHJcbiAgICAgIF9fZ3JvdXBzLmZvckVhY2goIGZ1bmN0aW9uKGcsIGkpeyAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBnLmN1cnJlbnQgPSAoX19kYXRhU2V0ICYmIF9fZGF0YVNldFswXSkgPyBfX2RhdGFTZXRbMF1bZy5kZWZpbml0aW9uLmtleV0gOiAnJztcclxuICAgICAgICBzZWxmLkJTW2cubmFtZV0gPSB7IHJlY29yZENvdW50IDogMCwgYWxsIDoge30gfTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmKF9fcmQuY29udGV4dC5vblN0YXJ0Zm4pIF9fcmQuY29udGV4dC5vblN0YXJ0Zm4oc2VsZi5CUyk7XHJcbiAgICAgIF9faW5pdENvbnRlbnRQcm92aWRlcnMoKTtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnJlbmRlci5yb3dzJyB9KTtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmxvZy5tZXNzYWdlJywgdGV4dCA6ICdHZW5lcmFuZG8gaW5mb3JtZS4uLicgfSk7XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBDYWJlY2VyYXMgZGVsIGluZm9ybWVcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIF9fcmVwb3J0SGVhZGVyU2VjdGlvbnMoKTtcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIENhYmVjZXJhcyBpbmljaWFsZXNcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGlmKF9fZGF0YVNldC5sZW5ndGggPiAwKSBfX2dyb3Vwc0hlYWRlcnMoKTsgXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBJdGVyYXIgc29icmUgbG9zIGVsZW1lbnRvc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgX19kYXRhU2V0LmZvckVhY2goZnVuY3Rpb24ociwgaSl7IFxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBQcm9jZXNhciBlbCBlbGVtZW50b1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgICAgICBcclxuICAgICAgICBzZWxmLkJTLnJlY29yZENvdW50Kys7XHJcbiAgICAgICAgc2VsZi5CUy5pc0xhc3RSb3cgICAgICAgID0gX19kYXRhU2V0Lmxlbmd0aCA9PT0gc2VsZi5CUy5yZWNvcmRDb3VudDtcclxuICAgICAgICBzZWxmLkJTLmlzTGFzdFJvd0luR3JvdXAgPSBzZWxmLkJTLmlzTGFzdFJvdztcclxuICAgICAgICBzZWxmLkJTLnBlcmNlbnQgICAgICA9IChzZWxmLkJTLnJlY29yZENvdW50L19fZGF0YVNldC5sZW5ndGgpICogMTAwOyAgXHJcbiAgICAgICAgc2VsZi5CUy5wcmV2aW91cyAgICAgPSBzZWxmLkJTLmRhdGEgfHwgcjtcclxuICAgICAgICBzZWxmLkJTLmRhdGEgICAgICAgICA9IHI7IFxyXG4gICAgICAgIF9fZ3JvdXBzLmZvckVhY2goIGZ1bmN0aW9uKGcsIGkpeyBcclxuICAgICAgICAgIHNlbGYuQlNbZy5uYW1lXS5kYXRhICA9IE9iamVjdC5jcmVhdGUoZy5kYXRhKTtcclxuICAgICAgICB9KTsgXHJcbiAgICAgICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5zdW0ociwgc2VsZi5CUy5HMCk7ICAgICAgICBcclxuICAgICAgICBpZihfX3JkLmNvbnRleHQub25Sb3dmbikgX19yZC5jb250ZXh0Lm9uUm93Zm4oc2VsZi5CUyk7XHJcbiAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgIDogJ3JlcG9ydC5yZW5kZXIucm93JywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgIDogc2VsZi5CUy5wZXJjZW50LnRvRml4ZWQoMSkgKyAnICUnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgOiBzZWxmLkJTLnBlcmNlbnQgfSk7XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIERldGVybWluYXIgc2kgaGF5IGNhbWJpbyBlbiBhbGd1bmEgZGUgbGFzIGNsYXZlcyBkZSBhZ3J1cGFjacOzblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBpZihfX2dyb3Vwcy5ldmVyeSggZnVuY3Rpb24oZyl7IHJldHVybiBnLnRlc3QocikgfSkpe1xyXG4gICAgICAgICAgX19ncm91cHMuZm9yRWFjaCggZnVuY3Rpb24oZyl7IGcuc3VtKHIpOyB9KTsgICAgICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIF9fZ3JvdXBzLnNvbWUoIGZ1bmN0aW9uKGcsIGkpeyAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKCFnLnRlc3Qocikpe1xyXG4gICAgICAgICAgICAgIF9fYnJlYWtJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAvLyBQaWVzIGRlIGdydXBvIGRlIGxvcyBxdWUgaGFuIGNhbWJpYWRvXHJcbiAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICBfX2dyb3Vwc0Zvb3RlcnMoX19icmVha0luZGV4KTtcclxuICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgIC8vIEFjdHVhbGl6YXIgbG9zIGdydXBvc1xyXG4gICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgX19ncm91cHMuZm9yRWFjaCggZnVuY3Rpb24oZ3J1cG8sIGlpKXsgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGlpID49IF9fYnJlYWtJbmRleCl7XHJcbiAgICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgLy8gSW5pY2lhbGl6YXIgbG9zIHF1ZSBoYW4gY2FtYmlhZG9cclxuICAgICAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICBncnVwby5pbml0KHIpXHJcbiAgICAgICAgICAgICAgICAgIF9fYnJlYWtJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAvLyBBY3VtdWxhciB2YWxvcmVzIGRlIGxvcyBxdWUgc2lndWVuIGlndWFsXHJcbiAgICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgZ3J1cG8uc3VtKHIpO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIC8vIE5vdGlmaWNhciBkZWwgZXZlbnRvIG9uR3JvdXBDaGFuZ2VcclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICBfX2dyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uKGcpe1xyXG4gICAgICAgICAgICBnLmN1cnJlbnQgPSByW2cuZGVmaW5pdGlvbi5rZXldO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZihfX3JkLmNvbnRleHQub25Hcm91cENoYW5nZWZuKSBfX3JkLmNvbnRleHQub25Hcm91cENoYW5nZWZuKHNlbGYuQlMpOyAgICAgICAgICBcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlICA6ICdyZXBvcnQuc2VjdGlvbnMuZ3JvdXAuY2hhbmdlJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgOiAnX19ncm91cHMnIH0pO1xyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgLy8gQ2FiZWNlcmFzXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICBfX2dyb3Vwc0hlYWRlcnMoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBEZXRlcm1pbmFyIHNpIGVzdGUgZXMgZWwgw7psdGltbyBlbGVtZW50byBkZSBsYSBhZ3J1cGFjacOzbiBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT07XHJcbiAgICAgICAgaWYoX19ncm91cHMubGVuZ3RoICYmICFzZWxmLkJTLmlzTGFzdFJvdyApe1xyXG4gICAgICAgICAgdmFyIF9fbmV4dCAgICAgICAgICAgICAgID0gX19kYXRhU2V0W3NlbGYuQlMucmVjb3JkQ291bnRdOyAgICAgICAgICBcclxuICAgICAgICAgIHNlbGYuQlMuaXNMYXN0Um93SW5Hcm91cCA9ICEgX19ncm91cHMuZXZlcnkoIGZ1bmN0aW9uKGcpe1xyXG4gICAgICAgICAgICB2YXIgX19rID0gZy5kZWZpbml0aW9uLmtleTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fbmV4dFtfX2tdID09PSBzZWxmLkJTLmRhdGFbX19rXTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBTZWNjaW9uZXMgZGUgZGV0YWxsZVxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIF9fZGV0YWlsc1NlY3Rpb25zKCkgICAgICAgICAgICBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZihfX2RhdGFTZXQubGVuZ3RoID4gMCl7IFxyXG4gICAgICAgIHNlbGYuQlMucHJldmlvdXMgPSBzZWxmLkJTLmRhdGE7XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBQaWVzIGRlIGdydXBvXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBfX2dyb3Vwc0Zvb3RlcnMoKTtcclxuICAgICAgfVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gVG90YWwgZ2VuZXJhbFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgX19ncmFuZFRvdGFsU2VjdGlvbnMoKTtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnJlbmRlci5lbmQnIH0pO1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuZW5kJyB9KTtcclxuICAgICAgbWVkaWF0b3IuZmx1c2goKTtcclxuICAgICAgY29uc29sZS50aW1lRW5kKCdSZW5kZXInKTtcclxuICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5jb3B5ICAgID0gZnVuY3Rpb24ocywgZCl7IE9iamVjdC5rZXlzKGQpLm1hcChmdW5jdGlvbihrKXsgZFtrXSA9IHNba107fSk7fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5zdW0gICAgID0gZnVuY3Rpb24ocywgZCl7IE9iamVjdC5rZXlzKGQpLm1hcChmdW5jdGlvbihrKXsgZFtrXSArPSBzW2tdO30pO30gICBcclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuY29tcHV0ZSA9IGZ1bmN0aW9uKGRzLCBuYW1lKXsgcmV0dXJuIGRzLnJlZHVjZSggZnVuY3Rpb24odCwgbyl7IHJldHVybiB0ICsgb1tuYW1lXTsgfSwgMC4wKTsgfVxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5ncm91cCAgID0gZnVuY3Rpb24oYSwgYyl7XHJcblx0ICAgIHZhciBkcyA9IGE7XHJcblx0ICAgIHZhciBfX2YgPSBmdW5jdGlvbihrLCB0KXtcclxuXHQgICAgICBkcy5kaXN0aW5jdCggZnVuY3Rpb24odil7IHJldHVybiB2W2tdOyB9KVx0ICAgICAgICAgICAgXHJcblx0ICAgICAgICAuZm9yRWFjaCAoIGZ1bmN0aW9uKHYpeyBjW3ZdID0gZHMucmVkdWNlKCBmdW5jdGlvbihwLCBjLCBpLCBhKXsgcmV0dXJuIChjW2tdPT12KSA/IHAgKyBjW3RdIDogcDsgfSwgMC4wKTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIF9fZjtcdCAgICAgICAgICAgXHJcblx0ICAgIH1cclxuXHQgICAgcmV0dXJuIF9fZjtcclxuICAgIH1cclxuIFxyXG4gIH0pKF9tb2R1bGUpO1xyXG5cclxufShfX21vZHVsZSwgJ1BvbCcpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9fbW9kdWxlLlBvbDsiLCJpbXBvcnQgcG9sIGZyb20gXCIuL21hcGEuanNcIjtcclxuXHJcblxyXG5sZXQgdG9waWNzID0ge307XHJcbmxldCBzdWJVaWQgPSAtMTtcclxuXHJcbmxldCBzdWJzY3JpYmUgPSBmdW5jdGlvbih0b3BpYywgZnVuYykge1xyXG4gIGlmICghdG9waWNzW3RvcGljXSkge1xyXG4gICAgdG9waWNzW3RvcGljXSA9IFtdO1xyXG4gIH1cclxuICB2YXIgdG9rZW4gPSAoKytzdWJVaWQpLnRvU3RyaW5nKCk7XHJcbiAgdG9waWNzW3RvcGljXS5wdXNoKHtcclxuICAgIHRva2VuOiB0b2tlbixcclxuICAgIGZ1bmM6IGZ1bmNcclxuICB9KTtcclxuICByZXR1cm4gdG9rZW47XHJcbn07XHJcblxyXG5sZXQgcHVibGlzaCA9IGZ1bmN0aW9uKHRvcGljLCBhcmdzKSB7XHJcbiAgaWYgKCF0b3BpY3NbdG9waWNdKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgIHZhciBzdWJzY3JpYmVycyA9IHRvcGljc1t0b3BpY107XHJcbiAgICB2YXIgbGVuID0gc3Vic2NyaWJlcnMgPyBzdWJzY3JpYmVycy5sZW5ndGggOiAwO1xyXG5cclxuICAgIHdoaWxlIChsZW4tLSkge1xyXG4gICAgICBzdWJzY3JpYmVyc1tsZW5dLmZ1bmModG9waWMsIGFyZ3MpO1xyXG4gICAgfVxyXG4gIH0sIDApO1xyXG4gIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxubGV0IHVuc3Vic2NyaWJlID0gZnVuY3Rpb24odG9rZW4pIHtcclxuICBmb3IgKHZhciBtIGluIHRvcGljcykge1xyXG4gICAgaWYgKHRvcGljc1ttXSkge1xyXG4gICAgICBmb3IgKHZhciBpID0gMCwgaiA9IHRvcGljc1ttXS5sZW5ndGg7IGkgPCBqOyBpKyspIHtcclxuICAgICAgICBpZiAodG9waWNzW21dW2ldLnRva2VuID09PSB0b2tlbikge1xyXG4gICAgICAgICAgdG9waWNzW21dLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHN1YnNjcmliZSxcclxuICBwdWJsaXNoLFxyXG4gIHVuc3Vic2NyaWJlXHJcbn0iLCJpbXBvcnQgcG9sIGZyb20gXCIuL21hcGFcIjtcclxuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9wdWJTdWIuU2VydmljZVwiO1xyXG5cclxuY29uc3QgRVZFTlRTID0gWydbb24tY2xpY2tdJywgJ1tvbi1tZXNzYWdlXSddO1xyXG5cclxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoY29udGFpbmVyLCBoYW5kbGVycykge1xyXG5cclxuICBmdW5jdGlvbiBpbm5lckhUTUwoZSwgdmFsdWUpIHsgZS5pbm5lckhUTUwgPSB2YWx1ZTsgfVxyXG5cclxuICBFVkVOVFMuZm9yRWFjaCgoc2VsZWN0b3IsIGluZGV4KSA9PiB7XHJcbiAgICBwb2wudG9BcnJheShwb2wuJChzZWxlY3RvciwgY29udGFpbmVyKSlcclxuICAgICAgIC5mb3JFYWNoKCBlID0+IHtcclxuICAgICAgICAgbGV0IG5hbWUgID0gc2VsZWN0b3IucmVwbGFjZSgnWycsICcnKS5yZXBsYWNlKCddJywgJycpO1xyXG4gICAgICAgICBsZXQgdmFsdWUgPSBlLmF0dHJpYnV0ZXNbbmFtZV0udmFsdWVcclxuICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgZS5vbmNsaWNrID0gKGV2ZW50KSA9PiBoYW5kbGVyc1t2YWx1ZV0oZSwgZXZlbnQpO1xyXG4gICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZiAoaW5kZXggPT09IDEpIHtcclxuICAgICAgICAgICBwdWJzdWIuc3Vic2NyaWJlKHZhbHVlLCAobWVzc2FnZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgaW5uZXJIVE1MKGUsIGRhdGEpOyAgXHJcbiAgICAgICAgICAgfSlcclxuICAgICAgICAgfVxyXG4gICAgICAgfSk7IFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IFxyXG4gIGFkZEV2ZW50TGlzdGVuZXJzXHJcbn0iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGAgIFxyXG48ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyIHczLW1hcmdpbi1ib3R0b20gdzMtYW5pbWF0ZS1sZWZ0XCI+XHJcbiAgPGgxPlNvYnJlIE5vdGFzIEFwcDwvaDE+XHJcbiAgPHAgc3R5bGU9XCJ0ZXh0LWluZGVudDoxZW07XCI+XHJcbiAgICBOb3RhcyBBcHAgZXMgdW5hIHBydWViYSBkZSBjb25jZXB0byBkZSBsbyBxdWUgcG9kcsOtYSBzZXIgdW4gPHNwYW4gY2xhc3M9XCJ3My1ib2xkIHczLWl0YWxpY1wiPmZyYW1ld29yazwvc3Bhbj4gXHJcbiAgICBzZW5jaWxsbyBjb24gZWwgY3VhbCBkZXNhcnJvbGxhciBhcGxpY2FjaW9uZXMgPHNwYW4gY2xhc3M9XCJ3My1ib2xkIHczLWl0YWxpY1wiPlNQQTwvc3Bhbj4gYmFzYWRhcyDDum5pY2FtZW50ZSBlbiA8c3BhbiBjbGFzcz1cInczLWJvbGRcIj5IVE1MNTwvc3Bhbj4geSA8c3BhbiBjbGFzcz1cInczLWJvbGRcIj5KYXZhU2NyaXB0PC9zcGFuPi5cclxuICA8L3A+XHJcbiAgPHAgc3R5bGU9XCJ0ZXh0LWluZGVudDoxZW07XCI+XHJcbiAgICBFc3RhcyBhcGxpY2FjaW9uZXMgc2Vyw61hbiBzdWJjZXB0aWJsZXMgZGUgc2VyIGluc3RhbGFkYXMgZW4gZGlzcG9zaXRpdm9zIG3Ds3ZpbGVzIGNvbW8gdW5hIDxzcGFuIGNsYXNzPVwidzMtYm9sZCB3My1pdGFsaWNcIj5QV0E8L3NwYW4+LlxyXG4gIDwvcD5cclxuICA8dWwgY2xhc3M9XCJ3My11bCB3My1ib3JkZXJcIj5cclxuICAgIDxsaT48aDI+UmVmZXJlbmNpYXM8L2gyPjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZXMud2lraXBlZGlhLm9yZy93aWtpL1NpbmdsZS1wYWdlX2FwcGxpY2F0aW9uXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U1BBIChTaW5nbGUtcGFnZSBhcHBsaWNhdGlvbik8L2E+PC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9lcy53aWtpcGVkaWEub3JnL3dpa2kvUHJvZ3Jlc3NpdmVfV2ViX0FwcHNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5QV0EgKFByb2dyZXNzaXZlIFdlYiBBcHBzKTwvYT48L2xpPlxyXG4gICAgPGxpPjxoMj5SZXBvc2l0b3JpbzwvaDI+PC9saT5cclxuICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JjYXN0cm9nby9ub3Rhcy1hcHBcIiB0YXJnZXQ9XCJfYmxhbmtcIj5odHRwczovL2dpdGh1Yi5jb20vcmNhc3Ryb2dvL25vdGFzLWFwcDwvYT48L2xpPlxyXG4gIDwvdWw+XHJcbiAgPHAgc3R5bGU9XCJ0ZXh0LWluZGVudDoxZW07XCI+XHJcbiAgICBQYXJhIHN1IGRlc2Fycm9sbG8gbm8gc2UgaGFuIHV0aWxpemFkbyBuaW5ndW5vIGRlIGxvcyA8c3BhbiBjbGFzcz1cInczLWJvbGQgdzMtaXRhbGljXCI+ZnJhbWV3b3Jrczwvc3Bhbj4gZXhpc3RlbnRlcyBjb21vIHB1ZWRlbiBzZXIgQW5ndWxhciwgUmVhY3QgbyBWdWUuanMuXHJcbiAgPC9wPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lciB3My1tYXJnaW4tYm90dG9tIHczLWNlbnRlclwiPlxyXG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGFib3V0LWJ0bi1iYWNrIGNsYXNzPVwidzMtYnV0dG9uIHczLWJsYWNrXCI+Vm9sdmVyPC9idXR0b24+XHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuXHJcbiAgbGV0IGNvbXBvbmVudCA9IHtcclxuICAgIHJvb3QgICA6IHt9LFxyXG4gICAgaW5pdCAgIDogZnVuY3Rpb24oY29udGFpbmVyKXsgfSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIHRoaXMucm9vdCA9IHBvbC5idWlsZCgnZGl2JywgX190ZW1wbGF0ZSk7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvb3Q7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdbYWJvdXQtYnRuLWJhY2tdJylcclxuICAgICAgICAgICAgICAgLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgaGlzdG9yeS5iYWNrKCk7XHJcbiAgICAgICAgICAgICAgIH07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGFcIjtcclxuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi4vbGliL3B1YlN1Yi5TZXJ2aWNlXCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vbGliL3V0aWxzXCI7XHJcblxyXG5jb25zdCBfX1RFTVBMQVRFID0gYCAgXHJcbjxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWJvdHRvbSB3My1hbmltYXRlLWJvdHRvbVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJ3My1ib3JkZXIgdzMtbWFyZ2luLXRvcFwiPlxyXG4gICAgPGJ1dHRvbiBvbi1jbGljaz1cImV4cGFuZENvbGxhcHNlXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtYmxvY2sgdzMtbGVmdC1hbGlnblwiPlxyXG4gICAgICA8c3BhbiBvbi1tZXNzYWdlPVwibXVuaWNpcGlvLmNoYW5nZVwiIGlkPVwibGJsLW11bmljaXBpb1wiPkJ1ZW5hdmVudHVyYTwvc3Bhbj48aSBjbGFzcz1cInczLXJpZ2h0IHczLWxhcmdlIGZhIGZhLWNhcmV0LWRvd25cIj48L2k+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxkaXYgY2xhc3M9XCJ3My1oaWRlXCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cInczLXVsXCI+XHJcbiAgICAgICAgPGxpIG9uLWNsaWNrPVwicmVxdWVzdERhdGFcIiBpZD1cImxvYy00NTAyMlwiPkJ1ZW5hdmVudHVyYTwvbGk+XHJcbiAgICAgICAgPGxpIG9uLWNsaWNrPVwicmVxdWVzdERhdGFcIiBpZD1cImxvYy0yODA3OVwiPk1hZHJpZDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwidzMtbWFyZ2luLXRvcCB3My1oaWRlXCIgaWQ9XCJhZW1ldEFwaS1jb250YWluZXJcIiBzdHlsZT1cInBhZGRpbmc6MDtcIj5cclxuICAgIDxkaXYgaWQ9XCJwcm9ncmVzcy1iYXItY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ3My1jZW50ZXJcIj5DYXJnYW5kbyBkYXRvcyBkZXNkZSBsYSBBRU1FVC4uLjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidzMtYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cInByb2dyZXNzLWJhclwiIGNsYXNzPVwidzMtZ3JlZW5cIiBzdHlsZT1cImhlaWdodDoyNHB4O3dpZHRoOjAlXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuXHJcbmZ1bmN0aW9uIGFlbWV0Q29tcG9uZW50KCkge1xyXG5cclxuICBjb25zdCBfX1RFTVBMQVRFID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtdGVhbCB3My1jZW50ZXIgdzMtc21hbGwgdzMtcGFkZGluZ1wiPlxyXG4gICAge2ZuLmZvcm1hdEZlY2hhOmVsYWJvcmFkb31cclxuICA8L2Rpdj5cclxuICA8ZGl2IHN0eWxlPVwicGFkZGluZzowXCI+XHJcbiAgICA8aDMgY2xhc3M9XCJ3My1jZW50ZXIgdzMtYm9yZGVyLWJvdHRvbVwiPntmbi5mb3JtYXRGZWNoYTpwcmVkaWNjaW9uLmRpYVswXS5mZWNoYTpkYXl9PC9oMz5cclxuICAgIDxkaXY+e2ZuLnNob3dEYXk6cm93cy0wfTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInczLXNtYWxsIHczLXRlYWwgdzMtcGFkZGluZyB3My1jZW50ZXJcIj5cclxuICAgICAgPGRpdj48aSBjbGFzcz1cImZhIGZhLWFycm93LXVwXCI+PC9pPiB7cHJlZGljY2lvbi5kaWFbMF0ub3J0b308L2Rpdj5cclxuICAgICAgPGRpdj48aSBjbGFzcz1cImZhIGZhLWFycm93LWRvd25cIj48L2k+IHtwcmVkaWNjaW9uLmRpYVswXS5vY2Fzb308L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxici8+XHJcbiAgPGRpdiBzdHlsZT1cInBhZGRpbmc6MFwiPlxyXG4gICAgPGgzIGNsYXNzPVwidzMtY2VudGVyIHczLWJvcmRlci1ib3R0b21cIj57Zm4uZm9ybWF0RmVjaGE6cHJlZGljY2lvbi5kaWFbMV0uZmVjaGE6ZGF5fTwvaDM+XHJcbiAgICA8ZGl2Pntmbi5zaG93RGF5OnJvd3MtMX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ3My1zbWFsbCB3My10ZWFsIHczLXBhZGRpbmcgdzMtY2VudGVyXCI+XHJcbiAgICAgIDxkaXY+PGkgY2xhc3M9XCJmYSBmYS1hcnJvdy11cFwiPjwvaT4ge3ByZWRpY2Npb24uZGlhWzFdLm9ydG99PC9kaXY+XHJcbiAgICAgIDxkaXY+PGkgY2xhc3M9XCJmYSBmYS1hcnJvdy1kb3duXCI+PC9pPiB7cHJlZGljY2lvbi5kaWFbMV0ub2Nhc299PC9kaXY+IFxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGJyLz5cclxuICA8ZGl2IHN0eWxlPVwicGFkZGluZzowXCI+XHJcbiAgICA8aDMgY2xhc3M9XCJ3My1jZW50ZXIgdzMtYm9yZGVyLWJvdHRvbVwiPntmbi5mb3JtYXRGZWNoYTpwcmVkaWNjaW9uLmRpYVsyXS5mZWNoYTpkYXl9PC9oMz5cclxuICAgIDxkaXY+e2ZuLnNob3dEYXk6cm93cy0yfTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInczLXNtYWxsIHczLXRlYWwgdzMtcGFkZGluZyB3My1jZW50ZXJcIj5cclxuICAgICAgPGRpdj48aSBjbGFzcz1cImZhIGZhLWFycm93LXVwXCI+PC9pPiB7cHJlZGljY2lvbi5kaWFbMl0ub3J0b308L2Rpdj5cclxuICAgICAgPGRpdj48aSBjbGFzcz1cImZhIGZhLWFycm93LWRvd25cIj48L2k+IHtwcmVkaWNjaW9uLmRpYVsyXS5vY2Fzb308L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PmA7XHJcblxyXG4gIGxldCBmbiA9IHsgXHJcbiAgICBmb3JtYXRGZWNoYSA6IGZ1bmN0aW9uKHZhbHVlLCBjdHgsIG9wdGlvbnMpe1xyXG4gICAgICBsZXQgdG9rZW5zID0gdmFsdWUuc3BsaXQoJ1QnKTtcclxuICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9uc1swXSA9PT0gJ2RhdGUnKSByZXR1cm4gdG9rZW5zWzBdO1xyXG4gICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zWzBdID09PSAndGltZScpIHJldHVybiB0b2tlbnNbMV07XHJcbiAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnNbMF0gPT09ICdkYXknKXtcclxuICAgICAgICB0b2tlbnMgPSB0b2tlbnNbMF0uc3BsaXQoJy0nKTtcclxuICAgICAgICBsZXQgbm9tYnJlcyA9IFsnRG9taW5nbycsICdMdW5lcycsICdNYXJ0ZXMnLCAnTWnDqXJjb2xlcycsICdKdWV2ZXMnLCAnVmllcm5lcycsICdTYWJhZG8nXTtcclxuICAgICAgICBsZXQgZGF5ICAgICA9IG5ldyBEYXRlKH5+dG9rZW5zWzBdLCB+fnRva2Vuc1sxXSAtIDEsIH5+dG9rZW5zWzJdKS5nZXREYXkoKTtcclxuICAgICAgICByZXR1cm4gJ3swfSB7MX0nLmZvcm1hdChub21icmVzW2RheV0sIH5+dG9rZW5zWzJdKTtcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuICd7MX0gLSB7MH0nLmZvcm1hdCguLi50b2tlbnMpXHJcbiAgICB9LFxyXG4gICAgc2hvd0RheTogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgZnVuY3Rpb24gcmVuZGVyUm93KHNiLCByb3cpIHtcclxuICAgICAgICBsZXQgcm93X3RlbXBsYXRlID0gYFxyXG4gICAgICAgICAgPHRyIGNsYXNzPVwidzMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDx0ZD57cm93LnBlcmlvZG99OjAwPC90ZD5cclxuICAgICAgICAgICAgPHRkPntyb3cuY2llbG99PC90ZD5cclxuICAgICAgICAgICAgPHRkPntyb3cudGVtcGVyYXR1cmF9PC90ZD5cclxuICAgICAgICAgICAgPHRkPntmbi5mb3JtYXRaZXJvOnJvdy5sbHV2aWF9PC90ZD5cclxuICAgICAgICAgICAgPHRkPjxpIGNsYXNzPVwiZmEgZmEtMnggZmEtbG9uZy1hcnJvdy1yaWdodCBwb2wte3Jvdy52aWVudG9bMF19XCI+PC9pPiB7cm93LnZpZW50b1sxXX08L3RkPlxyXG4gICAgICAgICAgPC90cj5gO1xyXG4gICAgICAgIGxldCByb3dfd3JhcHBlciA9IHtyb3csIGZufTtcclxuICAgICAgICByZXR1cm4gc2IuYXBwZW5kKHJvd190ZW1wbGF0ZS5mb3JtYXQocm93X3dyYXBwZXIpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZGF0YS5yZWR1Y2UocmVuZGVyUm93LCBwb2wuc3RyaW5nQnVpbGRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJzx0YWJsZSBjbGFzcz1cInczLXRhYmxlIHczLWJvcmRlcmVkIHczLXNtYWxsIHczLXN0cmlwZWRcIj4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCc8dHIgY2xhc3M9XCJ3My1jZW50ZXIgdzMtdGVhbFwiPicgKyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGg+SG9yYTwvdGg+JyArIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzx0aD5DaWVsbzwvdGg+JyArIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzx0aD5UZW1wPGJyPsK6QzwvdGg+JyArIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzx0aD5MbHV2aWE8YnI+bWw8L3RoPicgKyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGg+VmllbnRvPGJyPmttL2g8L3RoPicgKyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC90cj4nKSlcclxuICAgICAgICAgICAgICAgICAuYXBwZW5kKCc8L3RhYmxlPicpXHJcbiAgICAgICAgICAgICAgICAgLnZhbHVlO1xyXG4gICAgfSxcclxuICAgIGZvcm1hdFplcm86IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gdmFsdWUgPT0gJzAnID8gJycgOiB2YWx1ZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsZXQgY29tcG9uZW50ID0ge1xyXG4gICAgcm9vdCAgIDoge30sXHJcbiAgICBpbml0ICAgOiBmdW5jdGlvbihjb250YWluZXIpeyB9LFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgdGhpcy5yb290ID0gcG9sLmJ1aWxkKCdkaXYnLCBfX1RFTVBMQVRFLmZvcm1hdCh0aGlzLmRhdGEpKTtcclxuICAgICAgcmV0dXJuIHRoaXMucm9vdDtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkIDogZnVuY3Rpb24oY29udGFpbmVyKXsgfSxcclxuICAgIHdpdGhEYXRhIDogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgIHRoaXMuZGF0YSA9IEpTT04ucGFyc2UoZGF0YSlbMF07XHJcbiAgICAgIHRoaXMuZGF0YS5mbiA9IGZuO1xyXG4gICAgICB0aGlzLmRhdGFcclxuICAgICAgICAgIC5wcmVkaWNjaW9uXHJcbiAgICAgICAgICAuZGlhXHJcbiAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBkaWEsIGkpIHtcclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgLy8gRmlsdHJhciBkYXRvcyBkZWwgZMOtYSBhbnRlcmlvclxyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvL2xldCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAvL2xldCB0YXJnZXREYXRlID0gZm4uZm9ybWF0RmVjaGEoZGlhLmZlY2hhLCBudWxsLCBbJ2RhdGUnXSk7XHJcbiAgICAgICAgICAgIC8vbGV0IHRvZGF5ICAgICAgPSAnezAjMDAwMH0tezEjMDB9LXsyIzAwfScuZm9ybWF0KG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSArIDEsIG5vdy5nZXREYXRlKCkpO1xyXG4gICAgICAgICAgICAvL2lmICh0YXJnZXREYXRlIDwgdG9kYXkpIHtcclxuICAgICAgICAgICAgLy8gIHJldHVybiBhO1xyXG4gICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgLy8gQWdydXBhciBsb3MgZGF0b3MgcG9yIGhvcmFcclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgbGV0IGdyb3VwID0gW10uY29uY2F0KGRpYS5lc3RhZG9DaWVsby5tYXAoIGZ1bmN0aW9uKGUpeyByZXR1cm4geyB0IDogJ2MnLCBwZXJpb2RvIDogZS5wZXJpb2RvLCB2YWx1ZSA6IGUuZGVzY3JpcGNpb24gfX0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhLnRlbXBlcmF0dXJhLm1hcCggZnVuY3Rpb24oZSl7IHJldHVybiB7IHQgOiAndCcsIHBlcmlvZG8gOiBlLnBlcmlvZG8sIHZhbHVlIDogZS52YWx1ZSB9fSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWEucHJlY2lwaXRhY2lvbi5tYXAoIGZ1bmN0aW9uKGUpeyByZXR1cm4geyB0IDogJ3AnLCBwZXJpb2RvIDogZS5wZXJpb2RvLCB2YWx1ZSA6IGUudmFsdWUgfX0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhLnZpZW50b0FuZFJhY2hhTWF4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAud2hlcmUoZSA9PiBlLnZlbG9jaWRhZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoIGZ1bmN0aW9uKGUpeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdCAgICAgICA6ICd2JywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcmlvZG8gOiBlLnBlcmlvZG8sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogW2UuZGlyZWNjaW9uWzBdLCBlLnZlbG9jaWRhZFswXV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZ3JvdXBCeSgncGVyaW9kbycpO1xyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyBjb252ZXJ0aXIgZW4gZGF0b3MgdGFidWxhZG9zXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIGFbJ3Jvd3MtezB9Jy5mb3JtYXQoaSldID0gT2JqZWN0LmtleXMoZ3JvdXApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSggZnVuY3Rpb24ocm93cywga2V5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlsdHJhciBsb3MgZGF0b3MgZGUgaG9yYXMgYW50ZXJpb3JlcyBhIGxhIGFjdHVhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lmIChpID09IDAgJiYga2V5IDwgJ3swIzAwfScuZm9ybWF0KG5vdy5nZXRIb3VycygpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIHJldHVybiByb3dzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy99IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdG9zSG9yYSA9IGdyb3VwW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzLnB1c2goIHsgcGVyaW9kbyAgICAgOiBrZXksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaWVsbyAgICAgICA6IGRhdG9zSG9yYS53aGVyZSh7IHQgOiAnYycgfSlbMF0udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJhIDogZGF0b3NIb3JhLndoZXJlKHsgdCA6ICd0JyB9KVswXS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGx1dmlhICAgICAgOiBkYXRvc0hvcmEud2hlcmUoeyB0IDogJ3AnIH0pWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWVudG8gICAgICA6IGRhdG9zSG9yYS53aGVyZSh7IHQgOiAndicgfSlbMF0udmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm93cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc29ydEJ5KCdwZXJpb2RvJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgICAgfSwgdGhpcy5kYXRhKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjdHgpe1xyXG5cclxuICBsZXQgYWVtZXRDb250YWluZXI7XHJcbiAgbGV0IHByb2dyZXNzQmFyQ29udGFpbmVyO1xyXG4gIGxldCBwcm9ncmVzc0JhcjtcclxuXHJcbiAgbGV0IGNvbXBvbmVudCA9IHtcclxuICAgIHJvb3QgICA6IHt9LFxyXG4gICAgZGF0YSAgIDogeyBcclxuICAgICAgbXVuaWNpcGlvcyA6IHsgXHJcbiAgICAgICAgJzQ1MDIyJyA6ICdCdWVuYXZlbnR1cmEgKFRPTEVETyknLFxyXG4gICAgICAgICcyODA3OScgOiAnTWFkcmlkJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgaW5pdCAgIDogZnVuY3Rpb24oY29udGFpbmVyKXsgfSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIHRoaXMucm9vdCA9IHBvbC5idWlsZCgnZGl2JywgX19URU1QTEFURSk7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvb3Q7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIGluaXRBbGwoY29udGFpbmVyKTtcclxuICAgIH0sXHJcbiAgICBldmVudEhhbmRsZXJzIDogeyBcclxuICAgICAgZXhwYW5kQ29sbGFwc2UgOiBleHBhbmRDb2xsYXBzZSxcclxuICAgICAgcmVxdWVzdERhdGEgICAgOiByZXF1ZXN0RGF0YVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRBbGwoY29udGFpbmVyKSB7XHJcbiAgICBhZW1ldENvbnRhaW5lciAgICAgICA9IHBvbC4kKCdhZW1ldEFwaS1jb250YWluZXInKTtcclxuICAgIHByb2dyZXNzQmFyICAgICAgICAgID0gcG9sLiQoJ3Byb2dyZXNzLWJhcicpO1xyXG4gICAgcHJvZ3Jlc3NCYXJDb250YWluZXIgPSBwb2wuJCgncHJvZ3Jlc3MtYmFyLWNvbnRhaW5lcicpOyAgIFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIGFkZEV2ZW50TGlzdGVuZXJcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB1dGlscy5hZGRFdmVudExpc3RlbmVycyhjb21wb25lbnQucm9vdCwgY29tcG9uZW50LmV2ZW50SGFuZGxlcnMpO1xyXG4gICAgY2FsbEFlbWV0QXBpKCk7XHJcbiAgfVxyXG5cclxuICBsZXQgdGltZXJJZDtcclxuICBmdW5jdGlvbiBpbml0UHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9ICd7MH0lJy5mb3JtYXQoY291bnRlcik7XHJcbiAgICBpZih0aW1lcklkKSBjbGVhckludGVydmFsKHRpbWVySWQpO1xyXG4gICAgdGltZXJJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgY291bnRlciA9IChjb3VudGVyICsgOSkgJSAxMDA7XHJcbiAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gJ3swfSUnLmZvcm1hdChjb3VudGVyKTtcclxuICAgIH0sIDMwMCk7XHJcbiAgfVxyXG5cclxuICBsZXQgY29kaWdvID0gNDUwMjI7XHJcbiAgZnVuY3Rpb24gY2FsbEFlbWV0QXBpKCkge1xyXG4gICAgXHJcbiAgICBpbml0UHJvZ3Jlc3NCYXIoKTtcclxuXHJcbiAgICBhZW1ldENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIGFlbWV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2dyZXNzQmFyQ29udGFpbmVyKTtcclxuICAgIGFlbWV0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3czLWhpZGUnKTtcclxuXHJcbiAgICBjb25zdCBFTkRQT0lOVCA9ICdodHRwczovL29wZW5kYXRhLmFlbWV0LmVzL29wZW5kYXRhL2FwaS9wcmVkaWNjaW9uL2VzcGVjaWZpY2EvbXVuaWNpcGlvL2hvcmFyaWEvJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2RpZ28gK1xyXG4gICAgICAgICAgICAgICAgICAgICAnP2FwaV9rZXk9JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICdleUpoYkdjaU9pSklVekkxTmlKOS5leUp6ZFdJaU9pSnlZMkZ6ZEhKdloyOUFhRzkwYldGcGJDNWpiMjBpTENKcWRHa2lPaUptWm1JM09XSmpaaTFsWldRd0xUJyArIFxyXG4gICAgICAgICAgICAgICAgICAgICAnUXdPRE10WVRrd1pDMDRNbU5rTW1SaE1UQTJNalFpTENKcGMzTWlPaUpCUlUxRlZDSXNJbWxoZENJNk1UVTRNamN5TlRnM05pd2lkWE5sY2tsa0lqb2labVppTicgKyBcclxuICAgICAgICAgICAgICAgICAgICAgJ3psaVkyWXRaV1ZrTUMwME1EZ3pMV0U1TUdRdE9ESmpaREprWVRFd05qSTBJaXdpY205c1pTSTZJaUo5LmJQaEFKRHV0UDYyXzc1cGVvM3FyODhRczFKUTRqbXU2VFdYSGp2SXpaeDAnO1xyXG4gICAgcG9sLmFqYXhcclxuICAgICAgIC5nZXQoRU5EUE9JTlQsIHJlcSA9PiB7XHJcbiAgICAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vamF2YXNjcmlwdCcpO1xyXG4gICAgICAgfSlcclxuICAgICAgIC50aGVuKHRleHQgPT4gSlNPTi5wYXJzZSh0ZXh0KSlcclxuICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgIGlmKHJlc3VsdC5lc3RhZG8gPT0gMjAwKSByZXR1cm4gcG9sLmFqYXguZ2V0KHJlc3VsdC5kYXRvcyk7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXN1bHQuZGVzY3JpcGNpb24pO1xyXG4gICAgICAgfSlcclxuICAgICAgIC50aGVuKCB0ZXh0ID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICBhZW1ldENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgKGZ1bmN0aW9uKGNvbXBvbmV0KSB7XHJcbiAgICAgICAgICAgY29tcG9uZXQuaW5pdChjdHgpO1xyXG4gICAgICAgICAgIGFlbWV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBvbmV0LnJlbmRlcigpKTtcclxuICAgICAgICAgICBjb21wb25ldC5tb3VudGVkKGN0eCk7XHJcbiAgICAgICAgIH0oYWVtZXRDb21wb25lbnQoKS53aXRoRGF0YSh0ZXh0KSkpOyAgICAgICAgIFxyXG4gICAgICAgfSlcclxuICAgICAgIC5jYXRjaCggZSA9PiB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBleHBhbmRDb2xsYXBzZSh0YXJnZXQsIG1vdXNlRXZlbnQpIHtcclxuICAgIGxldCBfX2xpc3QgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdDtcclxuICAgIGlmKF9fbGlzdC5jb250YWlucygndzMtaGlkZScpKXtcclxuICAgICAgX19saXN0LnJlbW92ZSgndzMtaGlkZScpO1xyXG4gICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNhcmV0LWRvd24nKTtcclxuICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QuYWRkKCdmYS1jYXJldC11cCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX19saXN0LmFkZCgndzMtaGlkZScpO1xyXG4gICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNhcmV0LXVwJyk7XHJcbiAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuY2xhc3NMaXN0LmFkZCgnZmEtY2FyZXQtZG93bicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVxdWVzdERhdGEodGFyZ2V0LCBtb3VzZUV2ZW50KSB7XHJcblxyXG4gICAgbGV0IGNvbWJvID0gdGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgY29kaWdvID0gdGFyZ2V0LmlkLnNwbGl0KCctJylbMV07XHJcblxyXG4gICAgcHVic3ViLnB1Ymxpc2goJ211bmljaXBpby5jaGFuZ2UnLCBjb21wb25lbnQuZGF0YS5tdW5pY2lwaW9zW2NvZGlnb10gKTtcclxuXHJcbiAgICBleHBhbmRDb2xsYXBzZShjb21ibyk7XHJcbiAgICBjYWxsQWVtZXRBcGkoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcblxyXG59XHJcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYCAgXHJcbiAgPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lciB3My1jZW50ZXIgdzMtYW5pbWF0ZS1sZWZ0XCIgc3R5bGU9XCJwYWRkaW5nLXRvcDo2MHB4O1wiPlxyXG4gICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWcvbG9nby5wbmdcIiBhbHQ9XCJDYXJcIiBzdHlsZT1cIndpZHRoOiAzMDBweFwiPlxyXG4gICAgPHA+TGEgYXBwIHF1ZSB0ZSBwZXJtaXRlIGFsbWFjZW5hciB0b2RhcyB0dXMgbm90YXMgZW4gZWwgbcOzdmlsISEhPC9wPlxyXG4gIDwvZGl2PmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG5cclxuICBsZXQgY29tcG9uZW50ID0ge1xyXG4gICAgcm9vdCAgIDoge30sXHJcbiAgICBpbml0ICAgOiBmdW5jdGlvbihjb250YWluZXIpeyB9LFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgdGhpcy5yb290ID0gcG9sLmJ1aWxkKCdkaXYnLCBfX3RlbXBsYXRlKS5maXJzdEVsZW1lbnRDaGlsZCA7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvb3Q7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIC8vPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYnRuLXRlc3QgY2xhc3M9XCJ3My1idXR0b24gdzMtYmxhY2tcIj5odG1sPC9idXR0b24+XHJcbiAgICAgIC8vbGV0IGJ0biA9IHBvbC4kKCdbYnRuLXRlc3RdJywgY29udGFpbmVyKVswXTtcclxuICAgICAgLy9idG4ub25jbGljayA9IG9uVGVzdEJ1dHRvbkNsaWNrO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIEZpbGxUZW1wbGF0ZVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGZ1bmN0aW9uIG9uVGVzdEJ1dHRvbkNsaWNrX2ZpbGwobW91c2VFdmVudCl7XHJcbiAgICBsZXQgdGVtcGxhdGUgPSBwb2wuYnVpbGQoJ2RpdicsICc8aDMgeGJpbmQ9XCJpZDppZDtpbm5lckhUTUw6bm9tYnJlO29uY2xpY2s6X19jbGlja1wiPjwvaDM+JylcclxuICAgICAgICAgICAgICAgICAgICAgIC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGxldCByID0gcG9sLnRlbXBsYXRlcy5maWxsKFxyXG4gICAgICAgICAgICAgIHRlbXBsYXRlLCBcclxuICAgICAgICAgICAgICB7IGlkIDogNTU1LCBcclxuICAgICAgICAgICAgICAgIG5vbWJyZSA6ICdyYWZhJyxcclxuICAgICAgICAgICAgICAgIF9fY2xpY2sgOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH19KTtcclxuXHJcbiAgICBjb21wb25lbnQucm9vdC5hcHBlbmRDaGlsZChyKTtcclxuICB9XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIEV4ZWN1dGVUZW1wbGF0ZVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIGZ1bmN0aW9uIG9uVGVzdEJ1dHRvbkNsaWNrKG1vdXNlRXZlbnQpe1xyXG4gICAgbGV0IHRlbXBsYXRlID0gcG9sLmJ1aWxkKCdkaXYnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGgzIHhiaW5kPVwiaWQ6aWQ7aW5uZXJIVE1MOm5vbWJyZTtcIj48L2gzPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBsZXQgaW5uZXJIdG1sID0gcG9sLnRlbXBsYXRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgIC5leGVjdXRlKHRlbXBsYXRlLCBbeyBpZCA6IDU1NSwgbm9tYnJlIDogJ3JhZmEnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaWQgOiA0NDQsIG5vbWJyZSA6ICdyYWZhIDQ0NCd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpZCA6IDMzMywgbm9tYnJlIDogJ3JhZmEgMzMzJ31dKTtcclxuICAgIHBvbC50ZW1wbGF0ZXNcclxuICAgICAgIC5leGVjdXRlKHRlbXBsYXRlLFxyXG4gICAgICAgICAgICAgICAgW3sgaWQgOiA1NTUsIG5vbWJyZSA6ICdyYWZhJ30sXHJcbiAgICAgICAgICAgICAgICAgeyBpZCA6IDQ0NCwgbm9tYnJlIDogJ3JhZmEgNDQ0J30sXHJcbiAgICAgICAgICAgICAgICAgeyBpZCA6IDMzMywgbm9tYnJlIDogJ3JhZmEgMzMzJ31dLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICApXHJcbiAgICAgIC5tYXAoIGUgPT4gZS5ub2RlIClcclxuICAgICAgLmZvckVhY2goIG5vZGUgPT4gY29tcG9uZW50LnJvb3QuYXBwZW5kQ2hpbGQobm9kZSkgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcblxyXG59XHJcbiIsIu+7v2ltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhXCI7XHJcbmltcG9ydCB1dGlscyBmcm9tIFwiLi4vbGliL3V0aWxzXCI7XHJcbmltcG9ydCBEYldyYXBwZXJTZXJ2aWNlIGZyb20gXCIuLi9saWIvZGJXcmFwcGVyLnNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IE5PVEFTX0RBVEFCQVNFICAgPSAnbm90YXMtYXBwLmRiJzsgXHJcbmNvbnN0IE5PVEFTX1RBQkxFX05BTUUgPSAnbm90YXMnO1xyXG5cclxuY29uc3QgVEVNUExBVEUgPSBgXHJcbjxkaXYgbm90YXMtY29udGFpbmVyIHN0eWxlPVwicGFkZGluZzowOyBtYXJnaW4tYm90dG9tOjQzcHg7XCIgY2xhc3M9XCJ3My1hbmltYXRlLWxlZnRcIj48L2Rpdj5cclxuPGJ1dHRvbiBidG4tYWRkLW5vdGUgb24tY2xpY2s9XCJhZGROb3RlXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtYmxhY2sgdzMtY2lyY2xlXCI+77yLPC9idXR0b24+YDtcclxuXHJcbmNvbnN0IF9fSVRFTV9URU1QTEFURSA9YFxyXG48ZGl2IGNsYXNzPVwidzMtYm9yZGVyLWJvdHRvbSB3My1hbmltYXRlLWxlZnRcIiBzdHlsZT1cInBhZGRpbmc6MDsgZm9udC1zaXplOjE0cHg7XCIgaWQ9XCJub3RlLXtub3RlLmtleX1cIj5cclxuICA8ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyXCIgc3R5bGU9XCJwYWRkaW5nOjVweFwiPlxyXG4gICAgPGRpdiBvbi1jbGljaz1cImV4cGFuZENvbGxhcHNlXCI+PGI+e25vdGUudGl0bGV9PC9iPjxpIGNsYXNzPVwidzMtcmlnaHQgdzMtbGFyZ2UgZmEgZmEtY2FyZXQtZG93blwiPjwvaT48L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7cGFkZGluZzowIDRweFwiPlxyXG4gICAgPHAgaWQ9XCJlZGl0cC17bm90ZS5rZXl9XCIgb24tY2xpY2s9XCJlZGl0Tm90ZVwiIHN0eWxlPVwicGFkZGluZzoycHg7bWluLWhlaWdodDo0ZW07bWFyZ2luOjJweCAwO3doaXRlLXNwYWNlOiBwcmUtd3JhcFwiPntmb3JtYXRUZXh0Om5vdGUudGV4dH08L3A+XHJcbiAgICA8ZGl2IGNsYXNzPVwidzMtYmFyIHczLWNlbnRlclwiIHN0eWxlPVwicGFkZGluZzo0cHggMDtcIj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkZWxldGUte25vdGUua2V5fVwiIG9uLWNsaWNrPVwiZGVsZXRlTm90ZVwiIGNsYXNzPVwidzMtYnV0dG9uIHczLWJvcmRlclwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZmF2LXtub3RlLmtleX1cIiBvbi1jbGljaz1cInNhdmVGYXZvcml0ZXNcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1ib3JkZXJcIj48aSBjbGFzcz1cImZhIHtjc3M6bm90ZS5rZXl9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImVkaXQte25vdGUua2V5fVwiIG9uLWNsaWNrPVwiZWRpdE5vdGVcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1ib3JkZXJcIj48aSBjbGFzcz1cImZhIGZhLWVkaXRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGN0eCl7XHJcbiAgICBcclxuICBsZXQgZGI7XHJcbiAgbGV0IHJvd3MgPSBbXTtcclxuICBsZXQgZmF2b3JpdGVzID0gW107XHJcbiAgbGV0IGl0ZW1zQ29udGFpbmVyO1xyXG4gIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ2RpdicsIFRFTVBMQVRFKTtcclxuICAgICAgaXRlbXNDb250YWluZXIgPSB0aGlzLnJvb3QuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvb3Q7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIGluaXRBbGwoKTsgIFxyXG4gICAgfSxcclxuICAgIGV2ZW50SGFuZGxlcnMgOiB7IFxyXG4gICAgICBhZGROb3RlICAgICAgICA6IGFkZE5vdGUsXHJcbiAgICAgIGRlbGV0ZU5vdGUgICAgIDogZGVsZXRlTm90ZSxcclxuICAgICAgZXhwYW5kQ29sbGFwc2UgOiBleHBhbmRDb2xsYXBzZSxcclxuICAgICAgc2F2ZUZhdm9yaXRlcyAgOiBzYXZlRmF2b3JpdGVzLFxyXG4gICAgICBlZGl0Tm90ZSAgICAgICA6IGVkaXROb3RlXHJcbiAgICB9IFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRBbGwoKSB7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT3BlbiBkYXRhYmFzZVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGRiID0gbmV3IERiV3JhcHBlclNlcnZpY2UoTk9UQVNfREFUQUJBU0UpO1xyXG4gICAgZGIub3BlbkRiKClcclxuICAgICAgLnRoZW4oIGRiID0+IHtcclxuICAgICAgICBsb2FkRGF0YSgpO1xyXG4gICAgICB9KTtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBhZGRFdmVudExpc3RlbmVyXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdXRpbHMuYWRkRXZlbnRMaXN0ZW5lcnMoY29tcG9uZW50LnJvb3QsIGNvbXBvbmVudC5ldmVudEhhbmRsZXJzKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGxvYWREYXRhKCkge1xyXG4gICAgZGIucmVhZEFsbChOT1RBU19UQUJMRV9OQU1FKVxyXG4gICAgICAudGhlbiggdmFsdWVzID0+IHtcclxuICAgICAgICByb3dzID0gdmFsdWVzLnJldmVyc2UoKTtcclxuICAgICAgICBmYXZvcml0ZXMgPSAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSB8fCAnJykuc3BsaXQoJy0nKTtcclxuICAgICAgICByZW5kZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICBpdGVtc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIHJvd3MubWFwKCBub3RlID0+IHtcclxuICAgICAgICAgIGxldCBfX2JhZyA9IHtcclxuICAgICAgICAgICAgbm90ZSxcclxuICAgICAgICAgICAgZm9ybWF0VGV4dDogZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3NzOiBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhdm9yaXRlcy5pbmNsdWRlcyhrZXkudG9TdHJpbmcoKSkgPyAnZmEtc3RhcicgOiAnZmEtc3Rhci1vJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHJldHVybiBwb2wuYnVpbGQoJ2RpdicsIF9fSVRFTV9URU1QTEFURS5mb3JtYXQoX19iYWcpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm1hcCggZSA9PiBlLmZpcnN0RWxlbWVudENoaWxkIClcclxuICAgICAgICAuZm9yRWFjaCggZSA9PiB7XHJcbiAgICAgICAgICBpdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlKTtcclxuICAgICAgICB9KTtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBhZGRFdmVudExpc3RlbmVyXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdXRpbHMuYWRkRXZlbnRMaXN0ZW5lcnMoaXRlbXNDb250YWluZXIsIGNvbXBvbmVudC5ldmVudEhhbmRsZXJzKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGV0ZU5vdGUodGFyZ2V0LCBtb3VzZUV2ZW50KXtcclxuICAgIGxldCBfX2lkICAgICAgPSBwYXJzZUludCh0YXJnZXQuaWQuc3BsaXQoJy0nKVsxXSk7XHJcbiAgICBsZXQgX19wYXlsb2FkID0gcm93cy53aGVyZSh7IGtleSA6IF9faWQgfSlbMF07XHJcbiAgICBsZXQgX19lbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGUtezB9Jy5mb3JtYXQoX19pZCkpO1xyXG4gICAgXHJcbiAgICBkYi5kZWxldGUoTk9UQVNfVEFCTEVfTkFNRSwgX19pZClcclxuICAgICAgLnRoZW4oICgpID0+IHtcclxuICAgICAgICByb3dzLnJlbW92ZShfX3BheWxvYWQpO1xyXG4gICAgICAgIF9fZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9fZWxlbWVudCk7XHJcbiAgICAgIH0pOyAgICAgICAgICAgICAgIFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZXhwYW5kQ29sbGFwc2UodGFyZ2V0LCBtb3VzZUV2ZW50KSB7XHJcbiAgICBsZXQgX19zdHlsZSA9IHRhcmdldC5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZy5zdHlsZTtcclxuICAgIGlmKF9fc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpe1xyXG4gICAgICBfX3N0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jYXJldC1kb3duJyk7XHJcbiAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuY2xhc3NMaXN0LmFkZCgnZmEtY2FyZXQtdXAnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9fc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jYXJldC11cCcpO1xyXG4gICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLmNsYXNzTGlzdC5hZGQoJ2ZhLWNhcmV0LWRvd24nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZE5vdGUodGFyZ2V0LCBtb3VzZUV2ZW50KSB7XHJcbiAgICBjdHgucm91dGVyLm5hdmlnYXRlVG8oJ25vdGUnKTtcclxuICB9ICBcclxuXHJcbiAgZnVuY3Rpb24gc2F2ZUZhdm9yaXRlcyh0YXJnZXQsIG1vdXNlRXZlbnQpIHtcclxuICAgIGxldCBzdGFyID0gdGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgbGV0IGtleSA9IHRhcmdldC5pZC5zcGxpdCgnLScpWzFdO1xyXG4gICAgaWYgKGZhdm9yaXRlcy5pbmNsdWRlcyhrZXkpKXtcclxuICAgICAgZmF2b3JpdGVzLnJlbW92ZShrZXkpO1xyXG4gICAgICBzdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXN0YXItbycpO1xyXG4gICAgICBzdGFyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXN0YXInKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZhdm9yaXRlcy5wdXNoKGtleSk7XHJcbiAgICAgIHN0YXIuY2xhc3NMaXN0LnJlbW92ZSgnZmEtc3Rhci1vJyk7XHJcbiAgICAgIHN0YXIuY2xhc3NMaXN0LmFkZCgnZmEtc3RhcicpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXZvcml0ZXMnLCBmYXZvcml0ZXMuam9pbignLScpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVkaXROb3RlKHRhcmdldCwgbW91c2VFdmVudCkge1xyXG4gICAgY3R4LnJvdXRlci5uYXZpZ2F0ZVRvKCdub3RlLycgKyB0YXJnZXQuaWQuc3BsaXQoJy0nKVsxXSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG5cclxufVxyXG5cclxuIiwi77u/aW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuaW1wb3J0IERiV3JhcHBlclNlcnZpY2UgZnJvbSBcIi4uL2xpYi9kYldyYXBwZXIuc2VydmljZVwiO1xyXG5cclxuY29uc3QgTk9UQVNfREFUQUJBU0UgICA9ICdub3Rhcy1hcHAuZGInOyBcclxuY29uc3QgTk9UQVNfVEFCTEVfTkFNRSA9ICdub3Rhcyc7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYCAgXHJcbjxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWJvdHRvbSB3My1hbmltYXRlLWxlZnRcIj5cclxuICA8aDI+TnVldmEgbm90YTwvaDI+XHJcbiAgPGZvcm0gY2xhc3M9XCJ3My1tYXJnaW4tYm90dG9tXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwidHh0LXRpdGxlXCI+VMOtdHVsbzwvbGFiZWw+XHJcbiAgICA8aW5wdXQgY2xhc3M9XCJ3My1pbnB1dCB3My1ib3JkZXJcIiB0eXBlPVwidGV4dFwiIGlkPVwidHh0LXRpdGxlXCIgcGxhY2Vob2xkZXI9XCJJbnRyb2R1Y2UgdW4gdMOtdHVsb1wiID5cclxuICAgIDxsYWJlbCBmb3I9XCJ0eHQtdGV4dFwiPlRleHRvPC9sYWJlbD5cclxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cInczLWlucHV0IHczLWJvcmRlclwiIGlkPVwidHh0LXRleHRcIiByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPVwiQ29udGVuaWRvIGRlIGxhIG5vdGFcIj48L3RleHRhcmVhPlxyXG4gIDwvZm9ybT5cclxuICA8ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyIHczLW1hcmdpbi1ib3R0b20gdzMtY2VudGVyIHczLWFuaW1hdGUtem9vbVwiPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJidG4tZ3JhYmFyXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtYmxhY2tcIj5HcmFiYXI8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjdHgpe1xyXG4gIFxyXG4gIGxldCBjdXJyZW50O1xyXG4gIGxldCBkYjtcclxuICBsZXQgY29tcG9uZW50ID0ge1xyXG4gICAgcm9vdCAgIDoge30sXHJcbiAgICBpbml0ICAgOiBmdW5jdGlvbihjb250YWluZXIpeyB9LFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgdGhpcy5yb290ID0gcG9sLmJ1aWxkKCdkaXYnLCBfX3RlbXBsYXRlKTtcclxuICAgICAgcmV0dXJuIHRoaXMucm9vdDtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgaW5pdEFsbCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRBbGwoKSB7XHJcblxyXG4gICAgbGV0IF9fY29udGFpbmVyID0gY29tcG9uZW50LnJvb3QuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBfX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9wZW4gZGF0YWJhc2VcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBkYiA9IG5ldyBEYldyYXBwZXJTZXJ2aWNlKE5PVEFTX0RBVEFCQVNFKTtcclxuICAgIGRiLm9wZW5EYigpXHJcbiAgICAgIC50aGVuKCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IF9fZW5hYmxlVUkgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgX19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgICAgcG9sLiQoJ2J0bi1ncmFiYXInKS5vbmNsaWNrID0gYWRkTm90ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IF9faWQgPSBjdHgucm91dGVyLmN1cnJlbnQucGFyYW1zWzFdIHx8ICcnO1xyXG4gICAgICAgIGlmIChfX2lkKSB7XHJcbiAgICAgICAgICBkYi5yZWFkT25lKE5PVEFTX1RBQkxFX05BTUUsIHBhcnNlSW50KF9faWQpKVxyXG4gICAgICAgICAgICAudGhlbiggbm90ZSA9PiB7XHJcbiAgICAgICAgICAgICAgY3VycmVudCA9IG5vdGU7XHJcbiAgICAgICAgICAgICAgcG9sLiQoJ3R4dC10aXRsZScpLnZhbHVlID0gY3VycmVudC50aXRsZTtcclxuICAgICAgICAgICAgICBwb2wuJCgndHh0LXRleHQnKS52YWx1ZSAgPSBjdXJyZW50LnRleHQ7XHJcbiAgICAgICAgICAgICAgcG9sLiQoJ2gyJywgY29tcG9uZW50LnJvb3QpWzBdLmlubmVySFRNTCA9ICdFZGljacOzbiBkZSBub3RhJztcclxuICAgICAgICAgICAgICBfX2VuYWJsZVVJKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfX2VuYWJsZVVJKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkTm90ZSgpIHtcclxuICAgIHZhciBfX3R4dFRpdGxlID0gcG9sLiQoJ3R4dC10aXRsZScpO1xyXG4gICAgdmFyIF9fdHh0VGV4dCAgPSBwb2wuJCgndHh0LXRleHQnKTtcclxuICAgIHZhciBfX3RpdGxlID0gX190eHRUaXRsZS52YWx1ZS50cmltKCk7XHJcbiAgICB2YXIgX190ZXh0ICA9IF9fdHh0VGV4dC52YWx1ZS50cmltKCk7XHJcbiAgICBpZiAoIV9fdGl0bGUpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiBfX3R4dFRpdGxlLmZvY3VzKCksIDIwKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFfX3RleHQpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiBfX3R4dFRleHQuZm9jdXMoKSwgMjApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBkYi5zYXZlKE5PVEFTX1RBQkxFX05BTUUsXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAga2V5ICAgOiBjdXJyZW50ID8gY3VycmVudC5rZXkgIDogZGF0ZS52YWx1ZU9mKCksIFxyXG4gICAgICAgICAgICAgIGRhdGUgIDogY3VycmVudCA/IGN1cnJlbnQuZGF0ZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3swfS97MX0vezJ9Jy5mb3JtYXQoZGF0ZS5nZXREYXRlKCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUuZ2V0TW9udGgsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSksIFxyXG4gICAgICAgICAgICAgIHRpdGxlIDogX190aXRsZSwgXHJcbiAgICAgICAgICAgICAgdGV4dCAgOiBfX3RleHQgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCBub3RhID0+IHtcclxuICAgICAgICAgICAgICBjdHgucm91dGVyLm5hdmlnYXRlVG8oJ2xpc3QnKTsgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9