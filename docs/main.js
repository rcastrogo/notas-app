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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW4tY29udGVudC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVudS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvZGJXcmFwcGVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9tYXBhLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvcHViU3ViLlNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWJvdXQucGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZWwtdGllbXBvLnBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2hvbWUucGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbGlzdC5wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9uZXctaXRlbS5wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGlDQUFpQyxFQUFFO0FBQ25DO0FBQ0Esa0JBQWtCLG9EQUFHO0FBQ3JCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDhEQUFnQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsb0RBQUc7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG9EQUFHO0FBQ2pCLGNBQWMsb0RBQUc7QUFDakIsY0FBYyxvREFBRztBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxxQkFBcUIsb0RBQUc7QUFDeEIscUJBQXFCLG9EQUFHO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDRDO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGAgIFxyXG4gIDxwPnt0ZXh0fTwvcD5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRleHQgICA6ICfCqSBSYWZhZWwgQ2FzdHJvIEfDs21leiwgMjAyMCcsXHJcbiAgICBpbml0ICAgOiBmdW5jdGlvbihjb250YWluZXIpe30sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaWQgICAgICAgIDogXCJhcHBGb290ZXJcIixcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLmZvcm1hdCh0aGlzKSxcclxuICAgICAgICBjbGFzc05hbWUgOiAndzMtY29udGFpbmVyIHczLXRlYWwgdzMtY2VudGVyJ1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwb2wuYnVpbGQoJ2Zvb3RlcicsIG9wdGlvbnMpO1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgXHJcbiAgPGgxPnt0aXRsZX08L2gxPlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICByZXR1cm4ge1xyXG4gICAgdGl0bGUgIDogJ05vdGFzIEFwcCcsXHJcbiAgICBpbml0ICAgOiBmdW5jdGlvbihjb250YWluZXIpe30sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaWQgICAgICAgIDogJ2FwcEhlYWRlcicsXHJcbiAgICAgICAgaW5uZXJIVE1MIDogX190ZW1wbGF0ZS5mb3JtYXQodGhpcyksXHJcbiAgICAgICAgY2xhc3NOYW1lIDogJ3czLWNvbnRhaW5lciB3My10ZWFsJ1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwb2wuYnVpbGQoJ2hlYWRlcicsIG9wdGlvbnMpO1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcblxyXG4gIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7IFxyXG4gICAgICAgIGlkICAgICAgICA6IFwiYXBwLWNvbnRlbnQtY29udGFpbmVyXCIsXHJcbiAgICAgICAgaW5uZXJIVE1MIDogX190ZW1wbGF0ZSxcclxuICAgICAgICBjbGFzc05hbWUgOiAndzMtY29udGFpbmVyJyxcclxuICAgICAgICBzdHlsZSAgICAgOiB7IFxyXG4gICAgICAgICAgbWluSGVpZ2h0IDogJzQ0MHB4JyxcclxuICAgICAgICAgIHBhZGRpbmcgICA6ICcwIDAgNjBweCAwJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcG9sLmJ1aWxkKCdzZWN0aW9uJywgb3B0aW9ucyk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgaW5pdFNjcm9sbCgpOyAgXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxuXHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNjcm9sbFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBpbml0U2Nyb2xsKCl7XHJcbiAgICBcclxuICBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcclxuXHQgIHZhciB0aW1lb3V0O1xyXG5cdCAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdFx0ICB2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XHJcblx0XHQgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQgIHRpbWVvdXQgPSBudWxsO1xyXG5cdFx0XHQgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdFx0ICB9O1xyXG5cdFx0ICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcclxuXHRcdCAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0ICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XHJcblx0XHQgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdCAgfTtcclxuICB9OyAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBcclxuICBmdW5jdGlvbiBpbml0U2Nyb2xsKCl7ICAgICAgICBcclxuICAgIHZhciBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcE1lbnVcIik7XHJcbiAgICBpZihuYXZiYXIuY2xhc3NOYW1lLmluY2x1ZGVzKCdzdGlja3knKSkgcmV0dXJuO1xyXG4gICAgdmFyIHN0aWNreSA9IG5hdmJhci5vZmZzZXRUb3A7ICAgICAgICAgIFxyXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gbXlGdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSBzdGlja3kpIHtcclxuICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcInN0aWNreVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreVwiKTtcclxuICAgICAgfVxyXG4gICAgfTsgIFxyXG4gIH1cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBkZWJvdW5jZShpbml0U2Nyb2xsLCAxNTApLCBmYWxzZSk7XHJcbiAgaW5pdFNjcm9sbCgpO1xyXG59OyIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4uL2xpYi9wdWJTdWIuU2VydmljZVwiO1xyXG5cclxuY29uc3QgX19URU1QTEFURSA9IGAgIFxyXG4gIDxhIGhyZWY9XCJcIiByb3V0ZS1saW5rIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uIHNlbGVjdGVkXCI+SW5pY2lvPC9hPlxyXG4gIDxhIGhyZWY9XCJlbC10aWVtcG9cIiByb3V0ZS1saW5rIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uXCI+RWwgdGllbXBvPC9hPlxyXG4gIDxhIGhyZWY9XCJsaXN0XCIgcm91dGUtbGluayBjbGFzcz1cInczLWJhci1pdGVtIHczLWJ1dHRvblwiPk5vdGFzPC9hPlxyXG4gIDxhIGhyZWY9XCJub3RlXCIgcm91dGUtbGluayBjbGFzcz1cInczLWJhci1pdGVtIHczLWJ1dHRvblwiPis8L2E+XHJcbiAgPGEgaHJlZj1cImFib3V0XCIgcm91dGUtbGluayBjbGFzcz1cInczLWJhci1pdGVtIHczLWJ1dHRvbiB3My1yaWdodFwiPj88L2E+YDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcblxyXG4gIGxldCBjb21wb25lbnQgPSAge1xyXG4gICAgcm9vdCAgIDoge30sXHJcbiAgICBpZCAgICAgOiAnbWVudS5jb21wb25lbnQucmVmJyxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7fSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaWQgICAgICAgIDogXCJhcHBNZW51XCIsXHJcbiAgICAgICAgaW5uZXJIVE1MIDogX19URU1QTEFURS5mb3JtYXQodGhpcyksXHJcbiAgICAgICAgY2xhc3NOYW1lIDogJ3czLWJhciB3My1ibGFjaydcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ25hdicsIG9wdGlvbnMpO1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIGluaXRBbGwoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBpbml0QWxsKCkge1xyXG4gICAgbGV0IGxpbmtzID0gcG9sLiQoJ1tyb3V0ZS1saW5rXScsIGNvbXBvbmVudC5yb290KTtcclxuICAgIGxldCBtYXAgICA9IGxpbmtzLm1hcCggZnVuY3Rpb24obGluayl7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHBhdGggOiBsaW5rLmhyZWYuc3BsaXQoJy8nKS5sYXN0SXRlbSgpLCBsaW5rIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgIC50b0RpY3Rpb25hcnkoJ3BhdGgnLCAnbGluaycpO1xyXG4gICAgcHVic3ViLnN1YnNjcmliZSgndmlldy5jaGFuZ2UnLCAobmFtZSwgcm91dGUpID0+IHtcclxuICAgICAgbGlua3MuZm9yRWFjaCggZSA9PiBlLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykgKTtcclxuICAgICAgbWFwW3JvdXRlLm5hbWVdLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICB9KTsgXHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG5cclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuL2xpYi9tYXBhLmpzXCI7XHJcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4vbGliL3B1YlN1Yi5TZXJ2aWNlXCI7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDb21wb25lbnRzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5pbXBvcnQgaGVhZGVyQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgZm9vdGVyQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvZm9vdGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgY29udGVudENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL21haW4tY29udGVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IG1lbnVDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9tZW51LmNvbXBvbmVudFwiO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUGFnZXNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmltcG9ydCBob21lUGFnZSBmcm9tIFwiLi92aWV3cy9ob21lLnBhZ2VcIjtcclxuaW1wb3J0IGxpc3RQYWdlIGZyb20gXCIuL3ZpZXdzL2xpc3QucGFnZVwiO1xyXG5pbXBvcnQgYWJvdXRQYWdlIGZyb20gXCIuL3ZpZXdzL2Fib3V0LnBhZ2VcIjtcclxuaW1wb3J0IG5vdGVQYWdlIGZyb20gXCIuL3ZpZXdzL25ldy1pdGVtLnBhZ2VcIjtcclxuaW1wb3J0IGVsVGllbXBvUGFnZSBmcm9tIFwiLi92aWV3cy9lbC10aWVtcG8ucGFnZVwiO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUm91dGVzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBjb21wb25lbnRzID0gIFsgXHJcbiAgaGVhZGVyQ29tcG9uZW50KCksXHJcbiAgbWVudUNvbXBvbmVudCgpLFxyXG4gIGNvbnRlbnRDb21wb25lbnQoKSxcclxuICBmb290ZXJDb21wb25lbnQoKVxyXG5dO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUm91dGVyXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCByb3V0ZXIgPSB7XHJcbiAgcm91dGVzICA6IFtdLFxyXG4gIGFkZFJvdXRlOiBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgY29udHJvbGxlcikge1xyXG4gICAgdGhpcy5yb3V0ZXMucHVzaCh7IG5hbWUgOiBuYW1lLCBwYXRoIDogcGF0dGVybiwgY29udHJvbGVyIDogY29udHJvbGxlciB9KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH0sXHJcbiAgZ2V0Um91dGU6IGZ1bmN0aW9uIChyb3V0ZSkge1xyXG4gICAgcmV0dXJuIHRoaXMucm91dGVzLndoZXJlKGZ1bmN0aW9uKHIpe1xyXG4gICAgICBsZXQgbWF0Y2ggPSByLnBhdGguZXhlYyhyb3V0ZSk7XHJcbiAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgIHIucGFyYW1zID0gbWF0Y2gubWFwKCBlID0+IGUgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbWF0Y2g7XHJcbiAgICB9KVswXTtcclxuICB9LFxyXG4gIG5hdmlnYXRlVG8gOiBmdW5jdGlvbiAocm91dGUpIHtcclxuICAgIHRoaXMuY3VycmVudCA9IHRoaXMuZ2V0Um91dGUocm91dGUpO1xyXG4gICAgbGV0IHVybCA9ICd7b3JpZ2lufXswfXsxfScuZm9ybWF0KCcvbm90YXMtYXBwLycsIHJvdXRlLCBsb2NhdGlvbik7XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIHJvdXRlLCB1cmwpO1xyXG4gICAgc2hvd0NvbnRlbnQoKTtcclxuICB9LFxyXG4gIG5vcm1hbGl6ZVBhdGggOiBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICByZXR1cm4gdXJsLnJlcGxhY2UoZG9jdW1lbnQuYmFzZVVSSSwgJycpO1xyXG4gIH0sXHJcbiAgc3luYyA6IGZ1bmN0aW9uKCl7XHJcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmdldFJvdXRlKHRoaXMubm9ybWFsaXplUGF0aCh3aW5kb3cubG9jYXRpb24uaHJlZikpO1xyXG4gICAgc2hvd0NvbnRlbnQoKTtcclxuICB9LFxyXG4gIGN1cnJlbnQgOiB7fVxyXG59O1xyXG5yb3V0ZXIuYWRkUm91dGUoJ2xpc3QnLCAgL2xpc3QkLywgICAgICAgICAgICBsaXN0UGFnZSlcclxuICAgICAgLmFkZFJvdXRlKCdhYm91dCcsIC9hYm91dCQvLCAgICAgICAgICAgYWJvdXRQYWdlKVxyXG4gICAgICAuYWRkUm91dGUoJ25vdGUnLCAgL25vdGUkLywgICAgICAgICAgICBub3RlUGFnZSlcclxuICAgICAgLmFkZFJvdXRlKCdub3RlJywgIC9ub3RlXFwvKFxcZHsxM30pJC8sICBub3RlUGFnZSlcclxuICAgICAgLmFkZFJvdXRlKCdlbC10aWVtcG8nLCAgL2VsLXRpZW1wbyQvLCAgZWxUaWVtcG9QYWdlKVxyXG4gICAgICAuYWRkUm91dGUoJycsICAgICAgLyQvLCAgICAgICAgICAgICAgICBob21lUGFnZSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSW5pdCBBcHBcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbihmdW5jdGlvbigpe1xyXG5cclxuICBjb25zdCByb290ID0gcG9sLiQoJ2FwcENvbnRlbnQnKTtcclxuICBjb21wb25lbnRzLmZvckVhY2goIGMgPT4ge1xyXG4gICAgaWYoYy5pbml0KSBjLmluaXQocm9vdCk7XHJcbiAgICByb290LmFwcGVuZENoaWxkKGMucmVuZGVyKHJvb3QpKTtcclxuICAgIGlmKGMubW91bnRlZCkgYy5tb3VudGVkKHJvb3QpOyBcclxuICB9KTtcclxuXHJcbiAgcG9sLiQoJ1tyb3V0ZS1saW5rXScpXHJcbiAgICAgLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5vbmNsaWNrID0gZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICBsZXQgcm91dGUgPSByb3V0ZXIubm9ybWFsaXplUGF0aChlLnRhcmdldC5ocmVmKTtcclxuICAgICAgICAgIGlmIChyb3V0ZXIuY3VycmVudCAhPSByb3V0ZSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHJvdXRlci5uYXZpZ2F0ZVRvKHJvdXRlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ICBcclxuICAgICB9KTtcclxuXHJcbn0pKCk7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTeW5jIGNvbnRlbnRcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IGNvbnRhaW5lciA9IHBvbC4kKCdhcHAtY29udGVudC1jb250YWluZXInKTtcclxubGV0IGN1cnJlbnRWaWV3O1xyXG5mdW5jdGlvbiBzaG93Q29udGVudCgpe1xyXG4gIGxldCB2aWV3X3JlZiA9IHJvdXRlci5jdXJyZW50LmNvbnRyb2xlcjtcclxuICBpZighY3VycmVudFZpZXcgfHwgY3VycmVudFZpZXcgIT0gdmlld19yZWYpIHtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJzsgICAgXHJcbiAgICBjdXJyZW50VmlldyA9IHZpZXdfcmVmO1xyXG4gICAgbGV0IHZpZXdfaW5zdGFuY2UgPSBjdXJyZW50Vmlldyh7cm91dGVyfSk7XHJcbiAgICBpZih2aWV3X2luc3RhbmNlLmluaXQpIHZpZXdfaW5zdGFuY2UuaW5pdCgpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHZpZXdfaW5zdGFuY2UucmVuZGVyKCkpO1xyXG4gICAgaWYodmlld19pbnN0YW5jZS5tb3VudGVkKSB2aWV3X2luc3RhbmNlLm1vdW50ZWQoY29udGFpbmVyKTtcclxuICAgIHB1YnN1Yi5wdWJsaXNoKCd2aWV3LmNoYW5nZScsIHJvdXRlci5jdXJyZW50KTtcclxuICB9XHJcblxyXG59XHJcblxyXG5yb3V0ZXIuc3luYygpO1xyXG5cclxud2luZG93Lm9ucG9wc3RhdGUgPSBmdW5jdGlvbigpe1xyXG4gIHJvdXRlci5zeW5jKCk7XHJcbn1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNlcnZpY2VXb3JrZXJcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG5cclxuICBpZignc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKXtcclxuICAgIHRyeSB7XHJcbiAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNlV29ya2VyLmpzJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSBXb3JrZXIgUmVnaXN0ZXJlZFwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSBXb3JrZXIgUmVnaXN0cmF0aW9uIEZhaWxlZFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59KTtcclxuIiwi77u/aW1wb3J0IHBvbCBmcm9tIFwiLi9tYXBhLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYldyYXBwZXJTZXJ2aWNle1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLmRibmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmRiID0gJyc7XHJcbiAgfVxyXG5cclxuICBvcGVuRGIoKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgbGV0IHJlcXVlc3QgPSB3aW5kb3cuaW5kZXhlZERCLm9wZW4odGhpcy5kYm5hbWUsIDEpO1xyXG5cclxuXHQgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGIgPSBlLnRhcmdldC5yZXN1bHQ7XHJcblx0XHQgICAgcmVzb2x2ZSh0aGlzLmRiKTtcclxuXHQgICAgfTtcclxuXHJcbiAgICAgIHJlcXVlc3Qub25lcnJvciA9IGUgPT4geyAgXHJcbiAgICAgICAgcmVqZWN0KCdFcnJvcicpO1xyXG4gICAgICB9O1xyXG5cdFxyXG5cdCAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IChlKSA9PiB7XHJcblx0XHQgICAgdGhpcy5kYiA9IGUudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgaWYodGhpcy5kYi5vYmplY3RTdG9yZU5hbWVzICYmIHRoaXMuZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhcIm5vdGFzXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGIuZGVsZXRlT2JqZWN0U3RvcmUoXCJub3Rhc1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN0b3JlID0gdGhpcy5kYi5jcmVhdGVPYmplY3RTdG9yZShcIm5vdGFzXCIsIHsga2V5UGF0aCA6IFwia2V5XCIgfSk7ICAgICAgIFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWFkQWxsKG5hbWUpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHZhciBfX2l0ZW1zID0gW107XHJcbiAgICAgIHRoaXMuZGJcclxuICAgICAgICAgIC50cmFuc2FjdGlvbihuYW1lLCBcInJlYWRvbmx5XCIpXHJcbiAgICAgICAgICAub2JqZWN0U3RvcmUobmFtZSlcclxuICAgICAgICAgIC5vcGVuQ3Vyc29yKElEQktleVJhbmdlLmxvd2VyQm91bmQoMCkpXHJcbiAgICAgICAgICAub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBfX2N1cnNvciA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgICAgIGlmKF9fY3Vyc29yKSB7XHJcbiAgICAgICAgICAgICAgX19pdGVtcy5wdXNoKF9fY3Vyc29yLnZhbHVlKTtcclxuICAgICAgICAgICAgICBfX2N1cnNvci5jb250aW51ZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoX19pdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNhdmUoc3RvcmUsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIChmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgIHJlc3VsdC5vbnN1Y2Nlc3MgPSBldmVudCA9PiB7IHJlc29sdmUodmFsdWUpOyB9O1xyXG4gICAgICAgIHJlc3VsdC5vbmVycm9yICAgPSBlcnJvciA9PiB7IGNvbnNvbGUubG9nKGVycm9yKTsgfTtcclxuICAgICAgfSkodGhpcy5kYlxyXG4gICAgICAgICAgICAgLnRyYW5zYWN0aW9uKHN0b3JlLCBcInJlYWR3cml0ZVwiKVxyXG4gICAgICAgICAgICAgLm9iamVjdFN0b3JlKHN0b3JlKVxyXG4gICAgICAgICAgICAgLnB1dCh2YWx1ZSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoc3RvcmUsIGtleSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAoZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgICByZXN1bHQub25zdWNjZXNzID0gZXZlbnQgPT4geyByZXNvbHZlKCk7IH07XHJcbiAgICAgICAgcmVzdWx0Lm9uZXJyb3IgICA9IGVycm9yID0+IHsgY29uc29sZS5sb2coZXJyb3IpOyB9O1xyXG4gICAgICB9KSh0aGlzLmRiXHJcbiAgICAgICAgICAgICAudHJhbnNhY3Rpb24oc3RvcmUsIFwicmVhZHdyaXRlXCIpXHJcbiAgICAgICAgICAgICAub2JqZWN0U3RvcmUoc3RvcmUpXHJcbiAgICAgICAgICAgICAuZGVsZXRlKGtleSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWFkT25lKHN0b3JlLCBrZXkpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHtcclxuICAgICAgKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgcmVzdWx0Lm9uc3VjY2VzcyA9IGV2ZW50ID0+IHsgcmVzb2x2ZShldmVudC50YXJnZXQucmVzdWx0KTsgfTtcclxuICAgICAgICByZXN1bHQub25lcnJvciAgID0gZXJyb3IgPT4geyBjb25zb2xlLmxvZyhlcnJvcik7fTtcclxuICAgICAgfSkodGhpcy5kYlxyXG4gICAgICAgICAgICAgLnRyYW5zYWN0aW9uKHN0b3JlLCBcInJlYWR3cml0ZVwiKVxyXG4gICAgICAgICAgICAgLm9iamVjdFN0b3JlKHN0b3JlKVxyXG4gICAgICAgICAgICAgLmdldChrZXkpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiIsIlxyXG5cclxubGV0IF9fbW9kdWxlID0ge307XHJcbihmdW5jdGlvbihtb2R1bGUsIG5hbWUpe1xyXG5cclxuICB2YXIgX21vZHVsZSA9ICBtb2R1bGVbbmFtZV0gPSB7IGFwcGx5IDogZnVuY3Rpb24gYXBwbHkobywgYywgZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQpIGFwcGx5KG8sIGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvICYmIGMgJiYgdHlwZW9mIGMgPT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBjKXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY1twXSA9PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHkob1twXSwgY1twXSApICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb1twXSA9IGNbcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTsgICAgICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gVXRpbHNcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKGZ1bmN0aW9uKG1vZHVsZSl7XHJcbiAgICBtb2R1bGUuYXBwbHkobW9kdWxlLHsgXHJcbiAgICAgIHRvQXJyYXkgICAgIDogZnVuY3Rpb24odil7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHYpOyB9LFxyXG4gICAgICBpc051bGwgICAgICA6IGZ1bmN0aW9uKHYpe3JldHVybiB2ID09PSBudWxsOyB9LFxyXG4gICAgICBpc0FycmF5ICAgICA6IGZ1bmN0aW9uKHYpe3JldHVybiBBcnJheS5pc0FycmF5KHYpOyB9LFxyXG4gICAgICBpc1N0cmluZyAgICA6IGZ1bmN0aW9uKHYpe3JldHVybiB0eXBlb2YgdiA9PSAnc3RyaW5nJzt9LFxyXG4gICAgICBpc0Jvb2xlYW4gICA6IGZ1bmN0aW9uKHYpe3JldHVybiB0eXBlb2YgdiA9PSAnYm9vbGVhbic7fSxcclxuICAgICAgaXNOdW1iZXIgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdHlwZW9mIHYgPT0gJ251bWJlcic7fSxcclxuICAgICAgaXNGdW5jdGlvbiAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdHlwZW9mIHYgPT0gJ2Z1bmN0aW9uJzt9LFxyXG4gICAgICBpc09iamVjdCAgICA6IGZ1bmN0aW9uKHYpe3JldHVybiB2ICYmIHR5cGVvZiB2ID09ICdvYmplY3QnO30sXHJcbiAgICAgIGNsb25lICAgICAgIDogZnVuY3Rpb24obykge1xyXG4gICAgICAgIGlmKG1vZHVsZS5pc0FycmF5KG8pKSAgICAgICAgICAgICByZXR1cm4gby5zbGljZSgwKTtcclxuICAgICAgICBpZihtb2R1bGUuaXNPYmplY3QobykgJiYgby5jbG9uZSkgcmV0dXJuIG8uY2xvbmUoKTtcclxuICAgICAgICBpZihtb2R1bGUuaXNPYmplY3QobykpeyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG8pLnJlZHVjZSggZnVuY3Rpb24oYSwgayl7XHJcbiAgICAgICAgICAgIGFba10gPSBtb2R1bGUuY2xvbmUob1trXSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgICAgfSwge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbztcclxuICAgICAgfSwgICAgICAgIFxyXG4gICAgICBqb2luICAgICAgICA6IGZ1bmN0aW9uKGl0ZW1zLCBwcm9wZXJ0eSwgc2VwYXJhdG9yKXtcclxuICAgICAgICByZXR1cm4gaXRlbXMucmVkdWNlKGZ1bmN0aW9uKGEsIG8peyByZXR1cm4gYS5hcHBlbmQob1twcm9wZXJ0eSB8fCAnaWQnXSk7IH0sIFtdKVxyXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJy0nIDogKHNlcGFyYXRvciB8fCAnJykpOyBcclxuICAgICAgfSxcclxuICAgICAgc3RyaW5nQnVpbGRlciA6IGZ1bmN0aW9uKHMpe1xyXG4gICAgICAgICAgcmV0dXJuIHsgdmFsdWUgICAgICA6IHMgfHwgJycsXHJcbiAgICAgICAgICAgICAgICAgICBhcHBlbmQgICAgIDogZnVuY3Rpb24ocyl7IHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlICsgczsgcmV0dXJuIHRoaXM7fSxcclxuICAgICAgICAgICAgICAgICAgIGFwcGVuZExpbmUgOiBmdW5jdGlvbihzKXsgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUgKyAocyB8fCAnJykgKyAnXFxuJzsgcmV0dXJuIHRoaXM7fX1cclxuICAgICAgfSxcclxuICAgICAgYnVpbGQgOiBmdW5jdGlvbih0YWdOYW1lLCBvKXtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG1vZHVsZS5pc1N0cmluZyhvKSA/IHsgaW5uZXJIVE1MIDogbyB9IDogbztcclxuICAgICAgICByZXR1cm4gX21vZHVsZS5hcHBseShkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpLCBvcHRpb25zKTtcclxuICAgICAgfSxcclxuICAgICAgJCA6IGZ1bmN0aW9uKGUsIGNvbnRyb2wpeyBcclxuICAgICAgICByZXR1cm4gKHR5cGVvZiBlID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlKSB8fCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUudG9BcnJheSgoY29udHJvbCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChlKSB8fCBbXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlO1xyXG4gICAgICB9IFxyXG4gICAgfSk7XHJcbiAgfShfbW9kdWxlKSk7XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFN0cmluZ3NcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKGZ1bmN0aW9uKG1vZHVsZSl7XHJcbiAgICBtb2R1bGUuYXBwbHkoU3RyaW5nLCB7XHJcbiAgICAgIHN0cmluZ0J1aWxkZXIgOiBtb2R1bGUuc3RyaW5nQnVpbGRlcixcclxuICAgICAgbGVmdFBhZCAgICAgICA6IGZ1bmN0aW9uICh2YWwsIHNpemUsIGNoKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICcnICsgdmFsO1xyXG4gICAgICAgIGlmIChjaCA9PT0gbnVsbCB8fCBjaCA9PT0gdW5kZWZpbmVkIHx8IGNoID09PSAnJykgY2ggPSAnICc7ICAgICAgICAgICAgXHJcbiAgICAgICAgd2hpbGUgKHJlc3VsdC5sZW5ndGggPCBzaXplKSByZXN1bHQgPSBjaCArIHJlc3VsdDsgICAgICAgICAgICBcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9LFxyXG4gICAgICB0cmltVmFsdWVzIDogZnVuY3Rpb24gKHZhbHVlcyl7IHJldHVybiB2YWx1ZXMubWFwKGZ1bmN0aW9uKHMpe3JldHVybiBzLnRyaW0oKTt9KTt9XHJcbiAgICB9KTtcclxuICAgIG1vZHVsZS5hcHBseShTdHJpbmcucHJvdG90eXBlLCB7XHJcbiAgICAgIHJlcGxhY2VBbGwgIDogZnVuY3Rpb24ocGF0dGVybiwgcmVwbGFjZW1lbnQpIHsgcmV0dXJuIHRoaXMuc3BsaXQocGF0dGVybikuam9pbihyZXBsYWNlbWVudCk7IH0sXHJcbiAgICAgIHJlcGVhdCAgICAgIDogU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQgICAgIHx8IGZ1bmN0aW9uKGEpIHsgcmV0dXJuIG5ldyBBcnJheShhICsgMSkuam9pbih0aGlzKTsgfSxcclxuICAgICAgY29udGFpbnMgICAgOiBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzICAgfHwgZnVuY3Rpb24odCwgc3RhcnQpIHsgcmV0dXJuIHRoaXMuaW5kZXhPZih0KSA+PSAoc3RhcnQgfHwgMCk7IH0sXHJcbiAgICAgIHN0YXJ0c1dpdGggIDogU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoIHx8IGZ1bmN0aW9uKHQpeyByZXR1cm4gdGhpcy5pbmRleE9mKHQpID09IDA7IH0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgdG9GbG9hdCAgICAgOiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy50cmltKCkucmVwbGFjZUFsbCgnLicsICcnKS5yZXBsYWNlQWxsKCcsJywgJy4nKSB9LFxyXG4gICAgICBmaXhEYXRlICAgICA6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLnNwbGl0KCcgJylbMF07IH0sXHJcbiAgICAgIGZpeFRpbWUgICAgIDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuc3BsaXQoJyAnKVsxXTsgfSxcclxuICAgICAgZml4WWVhciAgICAgOiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5maXhEYXRlKCkuc3BsaXQoJy8nKVsyXTt9LFxyXG4gICAgICB0cmltU2Vjb25kcyA6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLnNwbGl0KCc6JylbMF0gKyAnOicgKyB0aGlzLnNwbGl0KCc6JylbMV0gOyB9LFxyXG4gICAgICBwYWRkaW5nTGVmdCA6IGZ1bmN0aW9uKHBhZGRpbmdWYWx1ZSl7IHJldHVybiAocGFkZGluZ1ZhbHVlICsgdGhpcykuc2xpY2UoLXBhZGRpbmdWYWx1ZS5sZW5ndGgpOyB9LFxyXG4gICAgICBmb3JtYXQgICAgICA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIF9fYXJnICAgICA9IGFyZ3VtZW50cztcclxuICAgICAgICB2YXIgX19jb250ZXh0ID0gX19hcmdbX19hcmcubGVuZ3RoIC0gMV0gfHwgc2VsZjsgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC9cXHsoXFxkK3xbXntdKylcXH0vZywgZnVuY3Rpb24obSwga2V5KXtcclxuICAgICAgICAgIGlmKGtleS5pbmRleE9mKCcjJykgPiAwKXtcclxuICAgICAgICAgICAgbGV0IF9fdG9rZW5zID0ga2V5LnNwbGl0KCcjJyk7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSAgPSBfX2FyZ1tfX3Rva2Vuc1swXV07XHJcbiAgICAgICAgICAgIGxldCBjbWQgICAgPSBfX3Rva2Vuc1sxXTtcclxuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSArICcnKS5wYWRkaW5nTGVmdChjbWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYoa2V5LmluZGV4T2YoJzonKSA+IDApe1xyXG4gICAgICAgICAgICB2YXIgX19mbiA9IGtleS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICBfX2ZuWzBdICA9IG1vZHVsZS50ZW1wbGF0ZXMuZ2V0VmFsdWUoX19mblswXSwgX19jb250ZXh0KTtcclxuICAgICAgICAgICAgX19mblsxXSAgPSBtb2R1bGUudGVtcGxhdGVzLmdldFZhbHVlKF9fZm5bMV0sIF9fY29udGV4dCk7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2ZuWzBdKF9fZm5bMV0sIF9fY29udGV4dCwgX19mbi5zbGljZSgyKSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gL15cXGQrJC8udGVzdChrZXkpID8gX19hcmdba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHR5cGVvZiBfX2NvbnRleHRba2V5XSA9PT0gXCJ1bmRlZmluZWRcIikgPyBtb2R1bGUudGVtcGxhdGVzLmdldFZhbHVlKGtleSwgX19jb250ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX19jb250ZXh0W2tleV07IFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTsgICAgICBcclxuICB9KF9tb2R1bGUpKTsgICAgICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gQXJyYXlcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAgIFxyXG4gIChmdW5jdGlvbihtb2R1bGUpe1xyXG4gICAgbW9kdWxlLmFwcGx5KEFycmF5LnByb3RvdHlwZSwgeyAgICAgICAgICBcclxuICAgICAgcmVtb3ZlICAgOiBmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleE9mKG8pO1xyXG4gICAgICAgIGlmIChpbmRleCAhPSAtMSkgdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9LFxyXG4gICAgICBhZGQgICAgICA6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICB0aGlzLnB1c2gobyk7XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgIH0sXHJcbiAgICAgIGFwcGVuZCAgIDogZnVuY3Rpb24obykge1xyXG4gICAgICAgIHRoaXMucHVzaChvKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfSxcclxuICAgICAgaXRlbSAgICAgOiBmdW5jdGlvbihwcm9wTmFtZSwgdmFsdWUsIGRlZil7XHJcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50cz09MSA/IHRoaXMuZmlsdGVyKCBmdW5jdGlvbih2KXtyZXR1cm4gdlsnaWQnXSA9PSBwcm9wTmFtZSB8fCB2WydfaWQnXSA9PSBwcm9wTmFtZX0pWzBdIHx8IGRlZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmZpbHRlciggZnVuY3Rpb24odil7cmV0dXJuIHZbcHJvcE5hbWVdID09IHZhbHVlfSlbMF0gfHwgZGVmO1xyXG4gICAgICB9LFxyXG4gICAgICBjb250YWlucyA6IGZ1bmN0aW9uKHByb3BOYW1lLHZhbHVlKXsgcmV0dXJuIHRoaXMuaXRlbShwcm9wTmFtZSx2YWx1ZSk7IH0sXHJcbiAgICAgIGxhc3RJdGVtIDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07IH0sXHJcbiAgICAgIHNlbGVjdCAgIDogZnVuY3Rpb24oc2VudGVuY2UpeyByZXR1cm4gdGhpcy5tYXAoc2VudGVuY2UpIH0sICAgXHJcbiAgICAgIHdoZXJlICAgIDogZnVuY3Rpb24oc2VudGVuY2UpeyBcclxuICAgICAgICBpZihtb2R1bGUuaXNGdW5jdGlvbihzZW50ZW5jZSkpIHJldHVybiB0aGlzLmZpbHRlcihzZW50ZW5jZSk7XHJcbiAgICAgICAgaWYobW9kdWxlLmlzT2JqZWN0KHNlbnRlbmNlKSl7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXIobmV3IEZ1bmN0aW9uKCdhJywgT2JqZWN0LmtleXMoc2VudGVuY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbihhLCBwcm9wbmFtZSwgaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhICsgKGkgPiAwID8gJyAmJiAnIDogJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgIChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX3ZhbHVlID0gc2VudGVuY2VbcHJvcG5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKF9fdmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHJldHVybiAnezF9LnRlc3QoYS57MH0pJy5mb3JtYXQocHJvcG5hbWUsIF9fdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1vZHVsZS5pc1N0cmluZyhfX3ZhbHVlKSkgcmV0dXJuICdhLnswfSA9PT0gXFwnezF9XFwnJy5mb3JtYXQocHJvcG5hbWUsIF9fdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnYS57MH0gPT09IHsxfScuZm9ybWF0KHByb3BuYW1lLCBfX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oKSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJ3JldHVybiAnKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfSxcclxuICAgICAgc29ydEJ5ICAgICAgOiBmdW5jdGlvbihwcm9wbmFtZSwgZGVzYyl7XHJcbiAgICAgICAgdmFyIF9fb3JkZXIgPSBbXTtcclxuICAgICAgICB2YXIgX19uYW1lcyA9IHByb3BuYW1lLnNwbGl0KCcsJykubWFwKCBmdW5jdGlvbih0b2tlbixpKXsgXHJcbiAgICAgICAgICB2YXIgX19wYWlyID0gdG9rZW4uc3BsaXQoJyAnKTtcclxuICAgICAgICAgIF9fb3JkZXJbaV0gPSAoX19wYWlyWzFdICYmIChfX3BhaXJbMV0udG9VcHBlckNhc2UoKT09J0RFU0MnKSkgPyAtMSA6IDE7ICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gX19wYWlyWzBdOyAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBfX29yZGVyWzBdID0gKGRlc2MgPyAtMSA6IDEpXHJcbiAgICAgICAgdGhpcy5zb3J0KGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gMDsgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfX2ZuID0gZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgX194ID0gYVtfX25hbWVzW2ldXTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciBfX3kgPSBiW19fbmFtZXNbaV1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoX194IDwgX195KSByZXR1cm4gLTEgKiBfX29yZGVyW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoX194ID4gX195KSByZXR1cm4gIDEgKiBfX29yZGVyW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoaSA8IF9fbmFtZXMubGVuZ3RoKSByZXR1cm4gX19mbihhLGIpOyAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19mbihhLGIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7ICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBvcmRlckJ5ICAgICA6IGZ1bmN0aW9uKHNlbnRlbmNlKXtcclxuICAgICAgICB2YXIgX19zZW50ZW5jZSA9IHNlbnRlbmNlOyAgICBcclxuICAgICAgICBpZihtb2R1bGUuaXNTdHJpbmcoc2VudGVuY2UpKSBfX3NlbnRlbmNlID0gZnVuY3Rpb24oYSl7IHJldHVybiBhW3NlbnRlbmNlXTsgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZX0pXHJcbiAgICAgICAgICAgICAgICAgICAuc29ydChmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciB4ID0gX19zZW50ZW5jZShhKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciB5ID0gX19zZW50ZW5jZShiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoKHggPCB5KSA/IC0xIDogKCh4ID4geSkgPyAxIDogMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgfSk7ICAgICBcclxuICAgICAgfSxcclxuICAgICAgZGlzdGluY3QgICAgOiBmdW5jdGlvbihzZW50ZW5jZSkge1xyXG4gICAgICAgIHZhciBfX3NlbnRlbmNlID0gc2VudGVuY2U7ICAgIFxyXG4gICAgICAgIGlmKG1vZHVsZS5pc1N0cmluZyhzZW50ZW5jZSkpIF9fc2VudGVuY2UgPSBmdW5jdGlvbihhKXsgcmV0dXJuIGFbc2VudGVuY2VdOyB9XHJcbiAgICAgICAgdmFyIHIgPSBbXTtcclxuICAgICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICB2YXIgX3ZhbHVlID0gX19zZW50ZW5jZShpdGVtKTtcclxuICAgICAgICAgIGlmKHIuaW5kZXhPZihfdmFsdWUpPT0tMSkgci5wdXNoKF92YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdyb3VwQnkgOiBmdW5jdGlvbihwcm9wKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWR1Y2UoZnVuY3Rpb24oZ3JvdXBzLCBpdGVtKSB7XHJcbiAgICAgICAgICB2YXIgdmFsID0gaXRlbVtwcm9wXTtcclxuICAgICAgICAgIChncm91cHNbdmFsXSA9IGdyb3Vwc1t2YWxdIHx8IFtdKS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgcmV0dXJuIGdyb3Vwc1xyXG4gICAgICAgIH0sIHt9KVxyXG4gICAgICB9LFxyXG4gICAgICB0b0RpY3Rpb25hcnkgOiBmdW5jdGlvbihwcm9wLCB2YWx1ZSl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVkdWNlKGZ1bmN0aW9uKGEsIGQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbZFtwcm9wXV0gPSB2YWx1ZSA/IGRbdmFsdWVdIDogZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge30pOyAgXHJcbiAgICAgIH1cclxuICAgIH0pOyAgICAgICBcclxuICB9KF9tb2R1bGUpKTtcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFRlbXBsYXRlc1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24obW9kdWxlKXtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRWYWx1ZShrZXksIHNjb3BlKSB7ICAgICAgICBcclxuICAgICAgcmV0dXJuIGtleS5zcGxpdCgvXFwufFxcW3xcXF0vKVxyXG4gICAgICAgICAgICAgICAgLnJlZHVjZSggZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChiID09PSAnJykgcmV0dXJuIGE7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhW2JdID09PSB1bmRlZmluZWQgPyAoYSA9PT0gc2VsZiA/ICcnIDogc2VsZikgOiBhW2JdO1xyXG4gICAgICAgICAgICAgICAgfSwgc2NvcGUgfHwgc2VsZiApOyAgICBcclxuICAgIH1cclxuICAgXHJcbiAgICBmdW5jdGlvbiBtZXJnZSh0ZW1wbGF0ZSwgbywga2V5KSB7XHJcbiAgICAgIHZhciBfX3Jlc3VsdCA9IHRlbXBsYXRlLnJlcGxhY2UoL3soW157XSspP30vZywgZnVuY3Rpb24gKG0sIGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoa2V5LmluZGV4T2YoJzonKSA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19mbiA9IGtleS5zcGxpdCgnOicpOyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fZm5bMF0gID0gZ2V0VmFsdWUoX19mblswXSwgbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fZm5bMV0gID0gZ2V0VmFsdWUoX19mblsxXSwgbyk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2ZuWzBdKF9fZm5bMV0sIG8pOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHIgICA9IGdldFZhbHVlKGtleSwgbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgX19rID0gKGtleS5jb250YWlucygnLicpID8gJycgOiAnby4nKSArIGtleTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHIpID09ICdmdW5jdGlvbicpeyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcihvKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1lbHNleyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcjtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiAocikgPT0gJ2Z1bmN0aW9uJyA/IHIobykgOiByO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pOyAgICAgXHJcbiAgICAgIHJldHVybiBfX3Jlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaWxsVGVtcGxhdGUoZSwgc2NvcGUpIHtcclxuICAgICAgdmFyIF9yb290ID0gbW9kdWxlLiQoZSk7XHJcbiAgICAgIHZhciBfZWxlbWVudHMgPSBtb2R1bGUuJCgnW3hiaW5kXScsIF9yb290KTsgXHJcbiAgICAgIGlmIChfcm9vdC5hdHRyaWJ1dGVzLnhiaW5kKSBfZWxlbWVudHMucHVzaChfcm9vdCk7XHJcbiAgICAgIF9lbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIFN0cmluZy50cmltVmFsdWVzKGNoaWxkLmF0dHJpYnV0ZXMueGJpbmQudmFsdWUuc3BsaXQoJzsnKSkuZm9yRWFjaChmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICAgIGlmICh0b2tlbiA9PT0gJycpIHJldHVybjtcclxuICAgICAgICAgIHZhciBfdG9rZW5zID0gU3RyaW5nLnRyaW1WYWx1ZXModG9rZW4uc3BsaXQoJzonKSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICB2YXIgX3BhcmFtcyA9IFN0cmluZy50cmltVmFsdWVzKF90b2tlbnNbMV0uc3BsaXQoL1xcc3xcXCwvKSk7XHJcbiAgICAgICAgICB2YXIgX3ZhbHVlID0gZ2V0VmFsdWUoX3BhcmFtc1swXSwgc2NvcGUpO1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiAoX3ZhbHVlKSA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHZhciBfYXJncyA9IF9wYXJhbXMuc2xpY2UoMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIHApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8geGJpbmQ9XCJ0ZXh0Q29udGVudDpEYXRhLmZuVGVzdCBAT3RoZXIsQSw1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5wdXNoKHAuY2hhckF0KDApID09ICdAJyA/IGdldFZhbHVlKHAuc2xpY2UoMSksIHNjb3BlKSA6IHApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtzY29wZSwgY2hpbGRdKTtcclxuICAgICAgICAgICAgX3ZhbHVlID0gX3ZhbHVlLmFwcGx5KHNjb3BlLCBfYXJncyk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKF9wYXJhbXNbMV0pIHtcclxuICAgICAgICAgICAgdmFyIF9mdW5jID0gZ2V0VmFsdWUoX3BhcmFtc1sxXSwgc2NvcGUpO1xyXG4gICAgICAgICAgICBfdmFsdWUgPSBfZnVuYyhfdmFsdWUsIF9wYXJhbXNbMl0sIHNjb3BlLCBjaGlsZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjaGlsZFtfdG9rZW5zWzBdXSA9IF92YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGV4ZWN1dGVUZW1wbGF0ZShlLCB2YWx1ZXMsIGRvbSkge1xyXG4gICAgICB2YXIgX3RlbXBsYXRlID0gbW9kdWxlLiQoZSk7XHJcbiAgICAgIHZhciBfcmVzdWx0ICAgPSB2YWx1ZXMucmVkdWNlKCBmdW5jdGlvbihhLCB2LCBpKXtcclxuICAgICAgICB2YXIgX25vZGUgPSB7IGluZGV4IDogaSxcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEgIDogdixcclxuICAgICAgICAgICAgICAgICAgICAgIG5vZGUgIDogZmlsbFRlbXBsYXRlKF90ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSksIHYpIH07XHJcbiAgICAgICAgYS5ub2Rlcy5wdXNoKF9ub2RlKTtcclxuICAgICAgICBpZiAoIWRvbSkgYS5odG1sLnB1c2goX25vZGUubm9kZS5vdXRlckhUTUwucmVwbGFjZSgveGJpbmQ9XCJbXlwiXSpcIi9nLCAnJykpO1xyXG4gICAgICAgIHJldHVybiBhOyBcclxuICAgICAgfSwgeyBub2RlcyA6IFtdLCBodG1sIDogW10gfSk7XHJcbiAgICAgIHJldHVybiBkb20gPyBfcmVzdWx0Lm5vZGVzIDogX3Jlc3VsdC5odG1sLmpvaW4oJycpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBtb2R1bGUudGVtcGxhdGVzID0geyBnZXRWYWx1ZSAgOiBnZXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlICAgICA6IG1lcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZXhlY3V0ZSAgIDogZXhlY3V0ZVRlbXBsYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZmlsbCAgICAgIDogZmlsbFRlbXBsYXRlIH07XHJcblxyXG4gIH0oX21vZHVsZSkpO1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gQWpheFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24obW9kdWxlKXsgIFxyXG4gICAgbW9kdWxlLmFqYXggPSB7fTtcclxuICAgIG1vZHVsZS5hcHBseShtb2R1bGUuYWpheCwge1xyXG4gICAgICBnZXQgIDogZnVuY3Rpb24gKHVybCwgaW50ZXJjZXB0b3IpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIC8vdXJsICs9ICh1cmwuY29udGFpbnMoJz8nKSA/ICcmbXM9JyA6ICc/bXM9JykgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgIHZhciB4bWwgPSB0aGlzLmNyZWF0ZVhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICB4bWwub3BlbignR0VUJywgdXJsLCB0cnVlKTtcclxuICAgICAgICAgIGlmKGludGVyY2VwdG9yKSBpbnRlcmNlcHRvcih4bWwpO1xyXG4gICAgICAgICAgeG1sLnNldFJlcXVlc3RIZWFkZXIoJ0lmLU1vZGlmaWVkLVNpbmNlJywgJ1RodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UJyk7XHJcbiAgICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignQ2FjaGUtQ29udHJvbCcsICduby1jYWNoZScpO1xyXG4gICAgICAgICAgeG1sLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHsgaWYgKHhtbC5yZWFkeVN0YXRlID09IDQpIHJlc29sdmUoeG1sLnJlc3BvbnNlVGV4dCkgfTtcclxuICAgICAgICAgIHhtbC5vbmVycm9yID0gZnVuY3Rpb24oZSkgeyByZWplY3QoZSk7IH07XHJcbiAgICAgICAgICB4bWwuc2VuZChudWxsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIHBvc3QgOiBmdW5jdGlvbih1cmwsIHBhcmFtcywgY2FsbEJhY2spIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB2YXIgeG1sID0gdGhpcy5jcmVhdGVYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhtbC5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcclxuICAgICAgICB4bWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7IGlmICh4bWwucmVhZHlTdGF0ZSA9PSA0KSBjYWxsQmFjayh4bWwucmVzcG9uc2VUZXh0KSB9O1xyXG4gICAgICAgIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0OklTTy04ODU5LTEnKTtcclxuICAgICAgICB4bWwuc2VuZChwYXJhbXMpO1xyXG4gICAgICB9LFxyXG4gICAgICBjYWxsV2ViTWV0aG9kIDogZnVuY3Rpb24odXJsLCBwYXJhbXMsIGNhbGxCYWNrKSB7XHJcbiAgICAgICAgdmFyIHhtbCA9IHRoaXMuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4bWwub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeG1sLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7IGlmICh4bWwucmVhZHlTdGF0ZSA9PSA0KSBjYWxsQmFjayh4bWwucmVzcG9uc2VUZXh0KSB9O1xyXG4gICAgICAgIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgICAgIHhtbC5zZW5kKHBhcmFtcyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNyZWF0ZVhNTEh0dHBSZXF1ZXN0IDogZnVuY3Rpb24oKXsgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpOyB9XHJcbiAgICB9KTsgIFxyXG4gIH0oX21vZHVsZSkpOyBcclxuICAgICAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFRhYmJseVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24gKG1vZHVsZSl7XHJcbiAgICAgIFxyXG4gICAgdmFyIF9fY29udGV4dDtcclxuXHJcbiAgICBmdW5jdGlvbiBfX0V4ZWN1dGVDb2RlKGNvZGUpe1xyXG5cclxuICAgICAgX19jb250ZXh0ID0geyBzZWN0aW9ucyA6IFtdLCBncm91cHMgOiBbXSwgZGV0YWlscyA6IFtdfTtcclxuXHJcbiAgICAgIHZhciBfX2N1cjtcclxuICAgICAgdmFyIF9fZnVuYyAgICAgICA9ICcnO1xyXG4gICAgICB2YXIgX19mdW5jQm9keSAgID0gJyc7XHJcbiAgICAgIHZhciBfX3NldFN0YXRlICA9IGZhbHNlO1xyXG5cclxuICAgICAgZnVuY3Rpb24gX19nZXQodmFsdWUpe1xyXG4gICAgICAgIGlmKHZhbHVlICYmIHZhbHVlLnRyaW0oKS5zdGFydHNXaXRoKCdAJykpe1xyXG4gICAgICAgICAgcmV0dXJuIF9fY29udGV4dFt2YWx1ZS50cmltKCkuc3BsaXQoJ0AnKVsxXS50cmltKCldIHx8ICcnO1xyXG4gICAgICAgIH1lbHNlIGlmKHZhbHVlKXtcclxuICAgICAgICAgIHJldHVybiB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfSAgXHJcblxyXG4gICAgICBmdW5jdGlvbiBfX3BhcnNlX3Byb3BlcnRpZXModmFsdWUpe1xyXG4gICAgICAgIHZhciBfX3JlZyAgID0gIC8oW2EtekEtWjAtOV9cXC1dKilcXHMqOlxccyooJ1teJ10qJ3xbXlxcc10qKS9nO1xyXG4gICAgICAgIHZhciBfX28gICAgID0ge307XHJcbiAgICAgICAgdmFyIF9fbWF0Y2ggPSBfX3JlZy5leGVjKHZhbHVlKTtcclxuICAgICAgICB3aGlsZSAoX19tYXRjaCAhPSBudWxsKSB7XHJcbiAgICAgICAgICBfX29bX19tYXRjaFsxXS50cmltKCldID0gX19nZXQoX19tYXRjaFsyXS50cmltKCkucmVwbGFjZSgvXicoW14nXSopJyQvZywgJyQxJykpO1xyXG4gICAgICAgICAgX19tYXRjaCA9IF9fcmVnLmV4ZWModmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX19vXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIF9fcGFyc2VMaW5lKGwsIG8pe1xyXG4gICAgICAgIGlmKCFfX2Z1bmMgJiYgIWwudHJpbSgpKSByZXR1cm4gZnVuY3Rpb24oKXt9O1xyXG4gICAgICAgIHZhciBfX2tleXMgPSAvREVGSU5FfCN8Q1JFQVRFfFNFVHxGVU5DVElPTnxFTkQvO1xyXG4gICAgICAgIGlmKF9fa2V5cy50ZXN0KGwpKXtcclxuICAgICAgICAgIGlmKC9eIy8udGVzdChsKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe307XHJcbiAgICAgICAgICB9ZWxzZSBpZigvXlNFVCAoXFx3LiopLy50ZXN0KGwpKXsgIFxyXG4gICAgICAgICAgICB2YXIgX190b2tlbnMgPSBsLm1hdGNoKC9eU0VUIChcXHcuKikkLyk7XHJcbiAgICAgICAgICAgIF9fc2V0U3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBfX2Z1bmMgICAgICA9IF9fdG9rZW5zWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgX19mdW5jQm9keSAgPSAnJztcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICAgIH1lbHNlIGlmKC9eRlVOQ1RJT04gKFxcdy4qKS8udGVzdChsKSl7ICBcclxuICAgICAgICAgICAgdmFyIF9fdG9rZW5zID0gbC5tYXRjaCgvXkZVTkNUSU9OIChcXHcuKikkLyk7XHJcbiAgICAgICAgICAgIF9fc2V0U3RhdGUgID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF9fZnVuYyAgICAgICA9IF9fdG9rZW5zWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgX19mdW5jQm9keSAgID0gJyc7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe307XHJcbiAgICAgICAgICB9ZWxzZSBpZigvXkVORC8udGVzdChsKSl7ICAgICAgXHJcbiAgICAgICAgICAgIHZhciBfX2JvZHkgPSBfX2Z1bmNCb2R5O1xyXG4gICAgICAgICAgICB2YXIgX19uYW1lID0gX19mdW5jO1xyXG4gICAgICAgICAgICBfX2Z1bmMgPSBfX2Z1bmNCb2R5ID0gJyc7IFxyXG4gICAgICAgICAgICBpZihfX3NldFN0YXRlKXtcclxuICAgICAgICAgICAgICBfX3NldFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXsgX19jdXJbX19uYW1lXSA9IF9fYm9keS50cmltKCk7IH1cclxuICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7IGN0eFtfX25hbWVdID0gbmV3IEZ1bmN0aW9uKCdjdHgnLCBfX2JvZHkpOyB9XHJcbiAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIH1lbHNlIGlmKC9eREVGSU5FXFxzXFxzKihcXHcuKilcXHMqPVxccyooLiopJC8udGVzdChsKSl7XHJcbiAgICAgICAgICAgIHZhciBfX3Rva2VucyA9IGwubWF0Y2goL15ERUZJTkVcXHNcXHMqKFthLXpBLVowLTlfXFwtXSopXFxzKj1cXHMqKC4qKSQvKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBfX3Rva2VucztcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXsgY3R4W3Rva2Vuc1sxXS50cmltKCldID0gdG9rZW5zWzJdLnRyaW0oKTsgfVxyXG4gICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICB9ZWxzZSBpZigvXkNSRUFURVxcc1xccyooXFx3KikgKC4qKSQvLnRlc3QobCkpe1xyXG4gICAgICAgICAgICB2YXIgX190b2tlbnMgPSBsLm1hdGNoKC9eQ1JFQVRFXFxzXFxzKihcXHcqKSAoLiopJC8pO1xyXG4gICAgICAgICAgICBpZihfX3Rva2Vuc1sxXT09J3NlY3Rpb24nKXtcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gX190b2tlbnM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXsgXHJcbiAgICAgICAgICAgICAgICAgIGN0eC5zZWN0aW9ucy5wdXNoKF9fcGFyc2VfcHJvcGVydGllcyh0b2tlbnNbMl0pKTsgXHJcbiAgICAgICAgICAgICAgICAgIF9fY3VyID0gY3R4LnNlY3Rpb25zW2N0eC5zZWN0aW9ucy5sZW5ndGggLSAxXTt9XHJcbiAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoX190b2tlbnNbMV09PSdncm91cCcpe1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyBcclxuICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBfX3Rva2VucztcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpeyBcclxuICAgICAgICAgICAgICAgICAgY3R4Lmdyb3Vwcy5wdXNoKF9fcGFyc2VfcHJvcGVydGllcyh0b2tlbnNbMl0pKTtcclxuICAgICAgICAgICAgICAgICAgX19jdXIgPSBjdHguZ3JvdXBzW2N0eC5ncm91cHMubGVuZ3RoIC0gMV07fVxyXG4gICAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoX190b2tlbnNbMV09PSdkZXRhaWwnKXtcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gX190b2tlbnM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXtcclxuICAgICAgICAgICAgICAgICAgY3R4LmRldGFpbHMucHVzaChfX3BhcnNlX3Byb3BlcnRpZXModG9rZW5zWzJdKSk7XHJcbiAgICAgICAgICAgICAgICAgIF9fY3VyID0gY3R4LmRldGFpbHNbY3R4LmRldGFpbHMubGVuZ3RoIC0gMV07fVxyXG4gICAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfWVsc2V7IHRocm93IG5ldyBFcnJvcignVGFiYmx5IDogVW5yZWNvZ25pemVkIHRleHQgYWZ0ZXIgREVGSU5FJyl9ICBcclxuICAgICAgICB9ZWxzZXsgXHJcbiAgICAgICAgICBpZihfX2Z1bmMpe1xyXG4gICAgICAgICAgICBfX2Z1bmNCb2R5ICs9IG87XHJcbiAgICAgICAgICAgIF9fZnVuY0JvZHkgKz0gJ1xcbic7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe307XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RhYmJseSA6IFVucmVjb2duaXplZCB0ZXh0JylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvZGUuc3BsaXQoJ1xcbicpLmZvckVhY2goZnVuY3Rpb24obCl7IFxyXG4gICAgICAgIF9fcGFyc2VMaW5lKGwudHJpbSgpLGwpKF9fY29udGV4dCk7IFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiB7IGNvbnRleHQgOiBfX2NvbnRleHQgfTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW9kdWxlLnRhYmJseSA9IHsgZXhlY3V0ZSA6IF9fRXhlY3V0ZUNvZGUgfTtcclxuXHJcbiAgfShfbW9kdWxlKSk7XHJcbiAgICAgIFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBSZXBvcnRzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpIHtcclxuXHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lICAgICAgICAgICAgICAgID0ge307ICAgICAgXHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmdlbmVyYXRlUmVwb3J0ID0gZnVuY3Rpb24ocmQsIGRhdGEsIG1lZGlhdG9yKXtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmJlZ2luJyB9KTtcclxuICAgICAgdmFyIF9fcmQgICAgICA9IHJkIHx8IG1vZHVsZS5SZXBvcnRFbmdpbmUucmQ7XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gVHJhbnNmb3JtYXIgbG9zIGRhdG9zXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgdmFyIF9fZGF0YVNldCA9IF9fcmQuY29udGV4dC5wYXJzZURhdGEgPyBfX3JkLmNvbnRleHQucGFyc2VEYXRhKF9fcmQsIGRhdGEsIG1lZGlhdG9yLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZGF0YTtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmxvZy5tZXNzYWdlJywgdGV4dCA6ICdJbmljaWFsaXphbmRvLi4uJyB9KTtcclxuICAgICAgY29uc29sZS50aW1lKCdSZW5kZXInKTtcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBJbmljaWFsaXphciBmdW5jaW9uZXMgcGFyYSBsYSBnZW5lcmFjacOzbiBkZSBjb250ZW5pZG8gcGVyc29uYWxpemFkb1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9faW5pdENvbnRlbnRQcm92aWRlcnMoKXtcclxuICAgICAgICBbX19yZC5jb250ZXh0LnNlY3Rpb25zLCBfX3JkLmNvbnRleHQuZGV0YWlscywgX19yZC5jb250ZXh0Lmdyb3Vwc11cclxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKGEsYil7IHJldHVybiBhLmNvbmNhdChiKTsgfSwgW10pXHJcbiAgICAgICAgLm1hcChmdW5jdGlvbihzKXtcclxuICAgICAgICAgIGlmKHMudmFsdWVQcm92aWRlcmZuKXtcclxuICAgICAgICAgICAgcy52YWx1ZVByb3ZpZGVyID0gbW9kdWxlLnRlbXBsYXRlcy5nZXRWYWx1ZShzLnZhbHVlUHJvdmlkZXJmbiwgc2VsZik7IFxyXG4gICAgICAgICAgICBkZWxldGUgcy52YWx1ZVByb3ZpZGVyZm47ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYocy5mb290ZXJWYWx1ZVByb3ZpZGVyZm4pe1xyXG4gICAgICAgICAgICBzLmZvb3RlclZhbHVlUHJvdmlkZXIgPSBtb2R1bGUudGVtcGxhdGVzLmdldFZhbHVlKHMuZm9vdGVyVmFsdWVQcm92aWRlcmZuLCBzZWxmKTsgXHJcbiAgICAgICAgICAgIGRlbGV0ZSBzLmZvb3RlclZhbHVlUHJvdmlkZXJmbjsgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihzLmhlYWRlclZhbHVlUHJvdmlkZXJmbil7XHJcbiAgICAgICAgICAgIHMuaGVhZGVyVmFsdWVQcm92aWRlciA9IG1vZHVsZS50ZW1wbGF0ZXMuZ2V0VmFsdWUocy5oZWFkZXJWYWx1ZVByb3ZpZGVyZm4sIHNlbGYpOyBcclxuICAgICAgICAgICAgZGVsZXRlIHMuaGVhZGVyVmFsdWVQcm92aWRlcmZuO1xyXG4gICAgICAgICAgfSAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEdlbmVyYWNpw7NuIGRlIGxhcyBzZWNjaW9uZXMgZGUgY2FiZWNlcmEgZGUgbGFzIGFncnVwYWNpb25lc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgdmFyIF9fTUVSR0VfQU5EX1NFTkQgPSBmdW5jdGlvbih0LCBwLCBmbmtleSl7IG1lZGlhdG9yLnNlbmQobW9kdWxlLnRlbXBsYXRlcy5tZXJnZSh0LCBwLCBmbmtleSkpOyB9O1xyXG4gICAgICBmdW5jdGlvbiBfX2dyb3Vwc0hlYWRlcnMoKXtcclxuICAgICAgICBfX2dyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uKGcsIGlpKXtcclxuICAgICAgICAgIGlmKGlpIDwgX19icmVha0luZGV4KSByZXR1cm47IFxyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnNlY3Rpb25zLmdyb3VwLmhlYWRlcicsIHZhbHVlIDogZy5pZCB9KTsgIFxyXG4gICAgICAgICAgaWYoZy5kZWZpbml0aW9uLmhlYWRlcikgcmV0dXJuIF9fTUVSR0VfQU5EX1NFTkQoZy5kZWZpbml0aW9uLmhlYWRlciwgZywgJ2NvbXBpbGVkX2hlYWRlcmZuJyk7XHJcbiAgICAgICAgICBpZihnLmRlZmluaXRpb24uaGVhZGVyVmFsdWVQcm92aWRlcikgcmV0dXJuIG1lZGlhdG9yLnNlbmQoZy5kZWZpbml0aW9uLmhlYWRlclZhbHVlUHJvdmlkZXIoZykpOyBcclxuICAgICAgICB9KTsgICAgXHJcbiAgICAgIH1cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEdlbmVyYWNpw7NuIGRlIGxhcyBzZWNjaW9uZXMgZGUgcmVzdW1lbiBkZSBsYXMgYWdydXBhY2lvbmVzXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX2dyb3Vwc0Zvb3RlcnMoaW5kZXgpe1xyXG4gICAgICAgIHZhciBfX2dnID0gX19ncm91cHMubWFwKGZ1bmN0aW9uKGcpe3JldHVybiBnO30pOyBcclxuICAgICAgICBpZihpbmRleCkgX19nZy5zcGxpY2UoMCwgaW5kZXgpO1xyXG4gICAgICAgIF9fZ2cucmV2ZXJzZSgpLmZvckVhY2goIGZ1bmN0aW9uKGcpe1xyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnNlY3Rpb25zLmdyb3VwLmZvb3RlcicsIHZhbHVlIDogZy5pZCB9KTsgICAgICAgICAgXHJcbiAgICAgICAgICBpZihnLmRlZmluaXRpb24uZm9vdGVyKSByZXR1cm4gX19NRVJHRV9BTkRfU0VORChnLmRlZmluaXRpb24uZm9vdGVyLCBnLCAnY29tcGlsZWRfZm9vdGVyZm4nKTtcclxuICAgICAgICAgIGlmKGcuZGVmaW5pdGlvbi5mb290ZXJWYWx1ZVByb3ZpZGVyKSByZXR1cm4gbWVkaWF0b3Iuc2VuZChnLmRlZmluaXRpb24uZm9vdGVyVmFsdWVQcm92aWRlcihnKSk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICB9IFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBHZW5lcmFjacOzbiBkZSBsYXMgc2VjY2lvbmVzIGRlIGRldGFsbGVcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19kZXRhaWxzU2VjdGlvbnMoKXtcclxuICAgICAgICBfX2RldGFpbHMuZm9yRWFjaChmdW5jdGlvbihkKXtcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5zZWN0aW9ucy5kZXRhaWwnLCB2YWx1ZSA6IGQuaWQgfSk7XHJcbiAgICAgICAgICBpZihkLnRlbXBsYXRlKSByZXR1cm4gX19NRVJHRV9BTkRfU0VORChkLnRlbXBsYXRlLCBkLCAnY29tcGlsZWRmbicpXHJcbiAgICAgICAgICBpZihkLnZhbHVlUHJvdmlkZXIpIHJldHVybiBtZWRpYXRvci5zZW5kKGQudmFsdWVQcm92aWRlcihkKSk7XHJcbiAgICAgICAgfSkgICAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBHZW5lcmFjacOzbiBkZSBsYXMgc2VjY2lvbmVzIGRlIHRvdGFsIGdlbmVyYWxcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19ncmFuZFRvdGFsU2VjdGlvbnMoKXtcclxuICAgICAgICBfX3RvdGFscy5mb3JFYWNoKGZ1bmN0aW9uKHQpe1xyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnNlY3Rpb25zLnRvdGFsJywgdmFsdWUgOiB0LmlkIH0pO1xyXG4gICAgICAgICAgaWYodC50ZW1wbGF0ZSkgcmV0dXJuIF9fTUVSR0VfQU5EX1NFTkQodC50ZW1wbGF0ZSwgdCwgJ2NvbXBpbGVkZm4nKVxyXG4gICAgICAgICAgaWYodC52YWx1ZVByb3ZpZGVyKSByZXR1cm4gbWVkaWF0b3Iuc2VuZCh0LnZhbHVlUHJvdmlkZXIodCkpO1xyXG4gICAgICAgIH0pICAgICAgICAgICAgXHJcbiAgICAgIH0gXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEdlbmVyYWNpw7NuIGRlIGxhcyBzZWNjaW9uZXMgZGUgY2FiZWNlcmEgZGVsIGluZm9ybWVcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19yZXBvcnRIZWFkZXJTZWN0aW9ucygpe1xyXG4gICAgICAgIF9faGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHQpe1xyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnNlY3Rpb25zLmhlYWRlcicsIHZhbHVlIDogdCB9KTtcclxuICAgICAgICAgIGlmKHQudGVtcGxhdGUpIHJldHVybiBfX01FUkdFX0FORF9TRU5EKHQudGVtcGxhdGUsIHQsICdjb21waWxlZGZuJylcclxuICAgICAgICAgIGlmKHQudmFsdWVQcm92aWRlcikgcmV0dXJuIG1lZGlhdG9yLnNlbmQodC52YWx1ZVByb3ZpZGVyKHQpKTtcclxuICAgICAgICB9KSAgICAgICAgICAgIFxyXG4gICAgICB9IFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBJbmljaWFsaXphciBlbCBvYmpldG8gcXVlIHNpcnZlIGRlIGFjdW11bGFkb3JcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19yZXNvbHZlU3VtbWFyeU9iamVjdCgpe1xyXG4gICAgICAgIHZhciBfX3N1bW1hcnkgPSBKU09OLnBhcnNlKF9fcmQuY29udGV4dC5zdW1tYXJ5IHx8ICd7fScpO1xyXG4gICAgICAgIGlmKF9fcmQuY29udGV4dC5vbkluaXRTdW1tYXJ5T2JqZWN0KSByZXR1cm4gX19yZC5jb250ZXh0Lm9uSW5pdFN1bW1hcnlPYmplY3QoX19zdW1tYXJ5KTsgICAgICBcclxuICAgICAgICByZXR1cm4gX19zdW1tYXJ5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgX19icmVha0luZGV4ID0gLTE7IFxyXG5cclxuICAgICAgdmFyIF9fc3VtbWFyeSAgICA9IF9fcmVzb2x2ZVN1bW1hcnlPYmplY3QoKTtcclxuICAgICAgdmFyIF9faGVhZGVycyAgICA9IChfX3JkLmNvbnRleHQuc2VjdGlvbnMgfHwgW10pLndoZXJlKHsgdHlwZSA6ICdoZWFkZXInIH0pO1xyXG4gICAgICB2YXIgX190b3RhbHMgICAgID0gKF9fcmQuY29udGV4dC5zZWN0aW9ucyB8fCBbXSkud2hlcmUoeyB0eXBlIDogJ3RvdGFsJyB9KTtcclxuICAgICAgdmFyIF9fZm9vdGVycyAgICA9IChfX3JkLmNvbnRleHQuc2VjdGlvbnMgfHwgW10pLndoZXJlKHsgdHlwZSA6ICdmb290ZXInIH0pO1xyXG4gICAgICB2YXIgX19kZXRhaWxzICAgID0gX19yZC5jb250ZXh0LmRldGFpbHMgfHwgW107XHJcbiAgICAgIHZhciBfX2dyb3VwcyAgICAgPSBfX3JkLmNvbnRleHQuZ3JvdXBzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihnLCBpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgIG5hbWUgICAgICAgOiAnRycgKyAoaSsxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJkICAgICAgICAgOiBfX3JkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbiA6IGcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ICAgIDogJycsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSAgICAgICA6IG1vZHVsZS5jbG9uZShfX3N1bW1hcnkpLCAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXQgOiBmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2sgPSB2YWx1ZVt0aGlzLmRlZmluaXRpb24ua2V5XS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19HeCA9IHNlbGYuQlNbdGhpcy5uYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5hbGxbX19rXSA9IF9fR3guYWxsW19fa10gfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3guYWxsW19fa10ucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3gucmVjb3JkQ291bnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9fcmVzdW1lID09PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9fcmVzdW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmNvcHkodmFsdWUsIHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fX3Jlc3VtZSA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubGVuZ3RoID4gMCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmNvcHkodmFsdWUsIHRoaXMuZGF0YSk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bSAgOiBmdW5jdGlvbih2YWx1ZSl7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19rID0gdmFsdWVbdGhpcy5kZWZpbml0aW9uLmtleV0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fR3ggPSBzZWxmLkJTW3RoaXMubmFtZV07IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LmFsbFtfX2tdID0gX19HeC5hbGxbX19rXSB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5hbGxbX19rXS5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5yZWNvcmRDb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9fcmVzdW1lID09PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuUmVwb3J0RW5naW5lLnN1bSh2YWx1ZSwgdGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdCA6IGZ1bmN0aW9uKHZhbHVlKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlW3RoaXMuZGVmaW5pdGlvbi5rZXldID09IHRoaXMuY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgfHwgW107ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgc2VsZi5CUyA9IHsgcmVwb3J0RGVmaW5pdGlvbiA6IF9fcmQsIG1lZGlhdG9yIDogbWVkaWF0b3IgfTsgICAgICAgICAgICAgIFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIE9yZGVuYXIgbG9zIGRhdG9zXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgaWYoX19yZC5jb250ZXh0Lml0ZXJhdGVmbil7XHJcbiAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmxvZy5tZXNzYWdlJywgdGV4dCA6ICdJbmljaWFsaXphbmRvIGVsZW1lbnRvcy4uLicgfSk7XHJcbiAgICAgICAgX19kYXRhU2V0LmZvckVhY2goX19yZC5jb250ZXh0Lml0ZXJhdGVmbik7XHJcbiAgICAgIH1cclxuICAgICAgaWYoX19yZC5jb250ZXh0Lm9yZGVyQnkpe1xyXG4gICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5sb2cubWVzc2FnZScsIHRleHQgOiAnT3JkZW5hbmRvIGRhdG9zLi4uJyB9KTtcclxuICAgICAgICBfX2RhdGFTZXQuc29ydEJ5KF9fcmQuY29udGV4dC5vcmRlckJ5LCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBJbmljaWFsaXphclxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIHNlbGYuQlMgPSB7IHJlY29yZENvdW50ICAgICAgOiAwLCBcclxuICAgICAgICAgICAgICAgICAgRzAgICAgICAgICAgICAgICA6IG1vZHVsZS5jbG9uZShfX3N1bW1hcnkpLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhU2V0ICAgICAgICAgIDogX19kYXRhU2V0LFxyXG4gICAgICAgICAgICAgICAgICByZXBvcnREZWZpbml0aW9uIDogX19yZCwgXHJcbiAgICAgICAgICAgICAgICAgIG1lZGlhdG9yICAgICAgICAgOiBtZWRpYXRvciB9O1xyXG4gICAgICBfX2dyb3Vwcy5mb3JFYWNoKCBmdW5jdGlvbihnLCBpKXsgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgZy5jdXJyZW50ID0gKF9fZGF0YVNldCAmJiBfX2RhdGFTZXRbMF0pID8gX19kYXRhU2V0WzBdW2cuZGVmaW5pdGlvbi5rZXldIDogJyc7XHJcbiAgICAgICAgc2VsZi5CU1tnLm5hbWVdID0geyByZWNvcmRDb3VudCA6IDAsIGFsbCA6IHt9IH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZihfX3JkLmNvbnRleHQub25TdGFydGZuKSBfX3JkLmNvbnRleHQub25TdGFydGZuKHNlbGYuQlMpO1xyXG4gICAgICBfX2luaXRDb250ZW50UHJvdmlkZXJzKCk7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5yZW5kZXIucm93cycgfSk7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5sb2cubWVzc2FnZScsIHRleHQgOiAnR2VuZXJhbmRvIGluZm9ybWUuLi4nIH0pO1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gQ2FiZWNlcmFzIGRlbCBpbmZvcm1lXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBfX3JlcG9ydEhlYWRlclNlY3Rpb25zKCk7XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBDYWJlY2VyYXMgaW5pY2lhbGVzXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBpZihfX2RhdGFTZXQubGVuZ3RoID4gMCkgX19ncm91cHNIZWFkZXJzKCk7IFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gSXRlcmFyIHNvYnJlIGxvcyBlbGVtZW50b3NcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIF9fZGF0YVNldC5mb3JFYWNoKGZ1bmN0aW9uKHIsIGkpeyBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gUHJvY2VzYXIgZWwgZWxlbWVudG9cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAgICAgICAgXHJcbiAgICAgICAgc2VsZi5CUy5yZWNvcmRDb3VudCsrO1xyXG4gICAgICAgIHNlbGYuQlMuaXNMYXN0Um93ICAgICAgICA9IF9fZGF0YVNldC5sZW5ndGggPT09IHNlbGYuQlMucmVjb3JkQ291bnQ7XHJcbiAgICAgICAgc2VsZi5CUy5pc0xhc3RSb3dJbkdyb3VwID0gc2VsZi5CUy5pc0xhc3RSb3c7XHJcbiAgICAgICAgc2VsZi5CUy5wZXJjZW50ICAgICAgPSAoc2VsZi5CUy5yZWNvcmRDb3VudC9fX2RhdGFTZXQubGVuZ3RoKSAqIDEwMDsgIFxyXG4gICAgICAgIHNlbGYuQlMucHJldmlvdXMgICAgID0gc2VsZi5CUy5kYXRhIHx8IHI7XHJcbiAgICAgICAgc2VsZi5CUy5kYXRhICAgICAgICAgPSByOyBcclxuICAgICAgICBfX2dyb3Vwcy5mb3JFYWNoKCBmdW5jdGlvbihnLCBpKXsgXHJcbiAgICAgICAgICBzZWxmLkJTW2cubmFtZV0uZGF0YSAgPSBPYmplY3QuY3JlYXRlKGcuZGF0YSk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuc3VtKHIsIHNlbGYuQlMuRzApOyAgICAgICAgXHJcbiAgICAgICAgaWYoX19yZC5jb250ZXh0Lm9uUm93Zm4pIF9fcmQuY29udGV4dC5vblJvd2ZuKHNlbGYuQlMpO1xyXG4gICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlICA6ICdyZXBvcnQucmVuZGVyLnJvdycsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICA6IHNlbGYuQlMucGVyY2VudC50b0ZpeGVkKDEpICsgJyAlJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIDogc2VsZi5CUy5wZXJjZW50IH0pO1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBEZXRlcm1pbmFyIHNpIGhheSBjYW1iaW8gZW4gYWxndW5hIGRlIGxhcyBjbGF2ZXMgZGUgYWdydXBhY2nDs25cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgaWYoX19ncm91cHMuZXZlcnkoIGZ1bmN0aW9uKGcpeyByZXR1cm4gZy50ZXN0KHIpIH0pKXtcclxuICAgICAgICAgIF9fZ3JvdXBzLmZvckVhY2goIGZ1bmN0aW9uKGcpeyBnLnN1bShyKTsgfSk7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBfX2dyb3Vwcy5zb21lKCBmdW5jdGlvbihnLCBpKXsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZighZy50ZXN0KHIpKXtcclxuICAgICAgICAgICAgICBfX2JyZWFrSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgLy8gUGllcyBkZSBncnVwbyBkZSBsb3MgcXVlIGhhbiBjYW1iaWFkb1xyXG4gICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgX19ncm91cHNGb290ZXJzKF9fYnJlYWtJbmRleCk7XHJcbiAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAvLyBBY3R1YWxpemFyIGxvcyBncnVwb3NcclxuICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgIF9fZ3JvdXBzLmZvckVhY2goIGZ1bmN0aW9uKGdydXBvLCBpaSl7ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihpaSA+PSBfX2JyZWFrSW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgIC8vIEluaWNpYWxpemFyIGxvcyBxdWUgaGFuIGNhbWJpYWRvXHJcbiAgICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgZ3J1cG8uaW5pdChyKVxyXG4gICAgICAgICAgICAgICAgICBfX2JyZWFrSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgLy8gQWN1bXVsYXIgdmFsb3JlcyBkZSBsb3MgcXVlIHNpZ3VlbiBpZ3VhbFxyXG4gICAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgIGdydXBvLnN1bShyKTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAvLyBOb3RpZmljYXIgZGVsIGV2ZW50byBvbkdyb3VwQ2hhbmdlXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgX19ncm91cHMuZm9yRWFjaChmdW5jdGlvbihnKXtcclxuICAgICAgICAgICAgZy5jdXJyZW50ID0gcltnLmRlZmluaXRpb24ua2V5XTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYoX19yZC5jb250ZXh0Lm9uR3JvdXBDaGFuZ2VmbikgX19yZC5jb250ZXh0Lm9uR3JvdXBDaGFuZ2VmbihzZWxmLkJTKTsgICAgICAgICAgXHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSAgOiAncmVwb3J0LnNlY3Rpb25zLmdyb3VwLmNoYW5nZScsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIDogJ19fZ3JvdXBzJyB9KTtcclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIC8vIENhYmVjZXJhc1xyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgX19ncm91cHNIZWFkZXJzKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gRGV0ZXJtaW5hciBzaSBlc3RlIGVzIGVsIMO6bHRpbW8gZWxlbWVudG8gZGUgbGEgYWdydXBhY2nDs24gXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09O1xyXG4gICAgICAgIGlmKF9fZ3JvdXBzLmxlbmd0aCAmJiAhc2VsZi5CUy5pc0xhc3RSb3cgKXtcclxuICAgICAgICAgIHZhciBfX25leHQgICAgICAgICAgICAgICA9IF9fZGF0YVNldFtzZWxmLkJTLnJlY29yZENvdW50XTsgICAgICAgICAgXHJcbiAgICAgICAgICBzZWxmLkJTLmlzTGFzdFJvd0luR3JvdXAgPSAhIF9fZ3JvdXBzLmV2ZXJ5KCBmdW5jdGlvbihnKXtcclxuICAgICAgICAgICAgdmFyIF9fayA9IGcuZGVmaW5pdGlvbi5rZXk7XHJcbiAgICAgICAgICAgIHJldHVybiBfX25leHRbX19rXSA9PT0gc2VsZi5CUy5kYXRhW19fa107XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gU2VjY2lvbmVzIGRlIGRldGFsbGVcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBfX2RldGFpbHNTZWN0aW9ucygpICAgICAgICAgICAgXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYoX19kYXRhU2V0Lmxlbmd0aCA+IDApeyBcclxuICAgICAgICBzZWxmLkJTLnByZXZpb3VzID0gc2VsZi5CUy5kYXRhO1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gUGllcyBkZSBncnVwb1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgX19ncm91cHNGb290ZXJzKCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIFRvdGFsIGdlbmVyYWxcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIF9fZ3JhbmRUb3RhbFNlY3Rpb25zKCk7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5yZW5kZXIuZW5kJyB9KTtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmVuZCcgfSk7XHJcbiAgICAgIG1lZGlhdG9yLmZsdXNoKCk7XHJcbiAgICAgIGNvbnNvbGUudGltZUVuZCgnUmVuZGVyJyk7XHJcbiAgICB9XHJcbiAgICAgICAgICBcclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuY29weSAgICA9IGZ1bmN0aW9uKHMsIGQpeyBPYmplY3Qua2V5cyhkKS5tYXAoZnVuY3Rpb24oayl7IGRba10gPSBzW2tdO30pO30gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuc3VtICAgICA9IGZ1bmN0aW9uKHMsIGQpeyBPYmplY3Qua2V5cyhkKS5tYXAoZnVuY3Rpb24oayl7IGRba10gKz0gc1trXTt9KTt9ICAgXHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmNvbXB1dGUgPSBmdW5jdGlvbihkcywgbmFtZSl7IHJldHVybiBkcy5yZWR1Y2UoIGZ1bmN0aW9uKHQsIG8peyByZXR1cm4gdCArIG9bbmFtZV07IH0sIDAuMCk7IH1cclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuZ3JvdXAgICA9IGZ1bmN0aW9uKGEsIGMpe1xyXG5cdCAgICB2YXIgZHMgPSBhO1xyXG5cdCAgICB2YXIgX19mID0gZnVuY3Rpb24oaywgdCl7XHJcblx0ICAgICAgZHMuZGlzdGluY3QoIGZ1bmN0aW9uKHYpeyByZXR1cm4gdltrXTsgfSlcdCAgICAgICAgICAgIFxyXG5cdCAgICAgICAgLmZvckVhY2ggKCBmdW5jdGlvbih2KXsgY1t2XSA9IGRzLnJlZHVjZSggZnVuY3Rpb24ocCwgYywgaSwgYSl7IHJldHVybiAoY1trXT09dikgPyBwICsgY1t0XSA6IHA7IH0sIDAuMCk7IH0pO1xyXG4gICAgICAgIHJldHVybiBfX2Y7XHQgICAgICAgICAgIFxyXG5cdCAgICB9XHJcblx0ICAgIHJldHVybiBfX2Y7XHJcbiAgICB9XHJcbiBcclxuICB9KShfbW9kdWxlKTtcclxuXHJcbn0oX19tb2R1bGUsICdQb2wnKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfX21vZHVsZS5Qb2w7IiwiaW1wb3J0IHBvbCBmcm9tIFwiLi9tYXBhLmpzXCI7XHJcblxyXG5cclxubGV0IHRvcGljcyA9IHt9O1xyXG5sZXQgc3ViVWlkID0gLTE7XHJcblxyXG5sZXQgc3Vic2NyaWJlID0gZnVuY3Rpb24odG9waWMsIGZ1bmMpIHtcclxuICBpZiAoIXRvcGljc1t0b3BpY10pIHtcclxuICAgIHRvcGljc1t0b3BpY10gPSBbXTtcclxuICB9XHJcbiAgdmFyIHRva2VuID0gKCsrc3ViVWlkKS50b1N0cmluZygpO1xyXG4gIHRvcGljc1t0b3BpY10ucHVzaCh7XHJcbiAgICB0b2tlbjogdG9rZW4sXHJcbiAgICBmdW5jOiBmdW5jXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHRva2VuO1xyXG59O1xyXG5cclxubGV0IHB1Ymxpc2ggPSBmdW5jdGlvbih0b3BpYywgYXJncykge1xyXG4gIGlmICghdG9waWNzW3RvcGljXSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc3Vic2NyaWJlcnMgPSB0b3BpY3NbdG9waWNdO1xyXG4gICAgdmFyIGxlbiA9IHN1YnNjcmliZXJzID8gc3Vic2NyaWJlcnMubGVuZ3RoIDogMDtcclxuXHJcbiAgICB3aGlsZSAobGVuLS0pIHtcclxuICAgICAgc3Vic2NyaWJlcnNbbGVuXS5mdW5jKHRvcGljLCBhcmdzKTtcclxuICAgIH1cclxuICB9LCAwKTtcclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmxldCB1bnN1YnNjcmliZSA9IGZ1bmN0aW9uKHRva2VuKSB7XHJcbiAgZm9yICh2YXIgbSBpbiB0b3BpY3MpIHtcclxuICAgIGlmICh0b3BpY3NbbV0pIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSB0b3BpY3NbbV0ubGVuZ3RoOyBpIDwgajsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRvcGljc1ttXVtpXS50b2tlbiA9PT0gdG9rZW4pIHtcclxuICAgICAgICAgIHRvcGljc1ttXS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzdWJzY3JpYmUsXHJcbiAgcHVibGlzaCxcclxuICB1bnN1YnNjcmliZVxyXG59IiwiaW1wb3J0IHBvbCBmcm9tIFwiLi9tYXBhXCI7XHJcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4vcHViU3ViLlNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IEVWRU5UUyA9IFsnW29uLWNsaWNrXScsICdbb24tbWVzc2FnZV0nXTtcclxuXHJcbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKGNvbnRhaW5lciwgaGFuZGxlcnMpIHtcclxuXHJcbiAgZnVuY3Rpb24gaW5uZXJIVE1MKGUsIHZhbHVlKSB7IGUuaW5uZXJIVE1MID0gdmFsdWU7IH1cclxuXHJcbiAgRVZFTlRTLmZvckVhY2goKHNlbGVjdG9yLCBpbmRleCkgPT4ge1xyXG4gICAgcG9sLnRvQXJyYXkocG9sLiQoc2VsZWN0b3IsIGNvbnRhaW5lcikpXHJcbiAgICAgICAuZm9yRWFjaCggZSA9PiB7XHJcbiAgICAgICAgIGxldCBuYW1lICA9IHNlbGVjdG9yLnJlcGxhY2UoJ1snLCAnJykucmVwbGFjZSgnXScsICcnKTtcclxuICAgICAgICAgbGV0IHZhbHVlID0gZS5hdHRyaWJ1dGVzW25hbWVdLnZhbHVlXHJcbiAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgIGUub25jbGljayA9IChldmVudCkgPT4gaGFuZGxlcnNbdmFsdWVdKGUsIGV2ZW50KTtcclxuICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYgKGluZGV4ID09PSAxKSB7XHJcbiAgICAgICAgICAgcHVic3ViLnN1YnNjcmliZSh2YWx1ZSwgKG1lc3NhZ2UsIGRhdGEpID0+IHtcclxuICAgICAgICAgICAgIGlubmVySFRNTChlLCBkYXRhKTsgIFxyXG4gICAgICAgICAgIH0pXHJcbiAgICAgICAgIH1cclxuICAgICAgIH0pOyBcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBcclxuICBhZGRFdmVudExpc3RlbmVyc1xyXG59IiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgICBcclxuPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lciB3My1tYXJnaW4tYm90dG9tIHczLWFuaW1hdGUtbGVmdFwiPlxyXG4gIDxoMT5Tb2JyZSBOb3RhcyBBcHA8L2gxPlxyXG4gIDxwIHN0eWxlPVwidGV4dC1pbmRlbnQ6MWVtO1wiPlxyXG4gICAgTm90YXMgQXBwIGVzIHVuYSBwcnVlYmEgZGUgY29uY2VwdG8gZGUgbG8gcXVlIHBvZHLDrWEgc2VyIHVuIDxzcGFuIGNsYXNzPVwidzMtYm9sZCB3My1pdGFsaWNcIj5mcmFtZXdvcms8L3NwYW4+IFxyXG4gICAgc2VuY2lsbG8gY29uIGVsIGN1YWwgZGVzYXJyb2xsYXIgYXBsaWNhY2lvbmVzIDxzcGFuIGNsYXNzPVwidzMtYm9sZCB3My1pdGFsaWNcIj5TUEE8L3NwYW4+IGJhc2FkYXMgw7puaWNhbWVudGUgZW4gPHNwYW4gY2xhc3M9XCJ3My1ib2xkXCI+SFRNTDU8L3NwYW4+IHkgPHNwYW4gY2xhc3M9XCJ3My1ib2xkXCI+SmF2YVNjcmlwdDwvc3Bhbj4uXHJcbiAgPC9wPlxyXG4gIDxwIHN0eWxlPVwidGV4dC1pbmRlbnQ6MWVtO1wiPlxyXG4gICAgRXN0YXMgYXBsaWNhY2lvbmVzIHNlcsOtYW4gc3ViY2VwdGlibGVzIGRlIHNlciBpbnN0YWxhZGFzIGVuIGRpc3Bvc2l0aXZvcyBtw7N2aWxlcyBjb21vIHVuYSA8c3BhbiBjbGFzcz1cInczLWJvbGQgdzMtaXRhbGljXCI+UFdBPC9zcGFuPi5cclxuICA8L3A+XHJcbiAgPHVsIGNsYXNzPVwidzMtdWwgdzMtYm9yZGVyXCI+XHJcbiAgICA8bGk+PGgyPlJlZmVyZW5jaWFzPC9oMj48L2xpPlxyXG4gICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2VzLndpa2lwZWRpYS5vcmcvd2lraS9TaW5nbGUtcGFnZV9hcHBsaWNhdGlvblwiIHRhcmdldD1cIl9ibGFua1wiPlNQQSAoU2luZ2xlLXBhZ2UgYXBwbGljYXRpb24pPC9hPjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZXMud2lraXBlZGlhLm9yZy93aWtpL1Byb2dyZXNzaXZlX1dlYl9BcHBzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UFdBIChQcm9ncmVzc2l2ZSBXZWIgQXBwcyk8L2E+PC9saT5cclxuICAgIDxsaT48aDI+UmVwb3NpdG9yaW88L2gyPjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yY2FzdHJvZ28vbm90YXMtYXBwXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly9naXRodWIuY29tL3JjYXN0cm9nby9ub3Rhcy1hcHA8L2E+PC9saT5cclxuICA8L3VsPlxyXG4gIDxwIHN0eWxlPVwidGV4dC1pbmRlbnQ6MWVtO1wiPlxyXG4gICAgUGFyYSBzdSBkZXNhcnJvbGxvIG5vIHNlIGhhbiB1dGlsaXphZG8gbmluZ3VubyBkZSBsb3MgPHNwYW4gY2xhc3M9XCJ3My1ib2xkIHczLWl0YWxpY1wiPmZyYW1ld29ya3M8L3NwYW4+IGV4aXN0ZW50ZXMgY29tbyBwdWVkZW4gc2VyIEFuZ3VsYXIsIFJlYWN0IG8gVnVlLmpzLlxyXG4gIDwvcD5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWJvdHRvbSB3My1jZW50ZXJcIj5cclxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBhYm91dC1idG4tYmFjayBjbGFzcz1cInczLWJ1dHRvbiB3My1ibGFja1wiPlZvbHZlcjwvYnV0dG9uPlxyXG48L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcblxyXG4gIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ2RpdicsIF9fdGVtcGxhdGUpO1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignW2Fib3V0LWJ0bi1iYWNrXScpXHJcbiAgICAgICAgICAgICAgIC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIGhpc3RvcnkuYmFjaygpO1xyXG4gICAgICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcblxyXG59XHJcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhXCI7XHJcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4uL2xpYi9wdWJTdWIuU2VydmljZVwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xyXG5cclxuY29uc3QgX19URU1QTEFURSA9IGAgIFxyXG48ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyIHczLW1hcmdpbi1ib3R0b20gdzMtYW5pbWF0ZS1ib3R0b21cIj5cclxuICA8ZGl2IGNsYXNzPVwidzMtYm9yZGVyIHczLW1hcmdpbi10b3BcIj5cclxuICAgIDxidXR0b24gb24tY2xpY2s9XCJleHBhbmRDb2xsYXBzZVwiIGNsYXNzPVwidzMtYnV0dG9uIHczLWJsb2NrIHczLWxlZnQtYWxpZ25cIj5cclxuICAgICAgPHNwYW4gb24tbWVzc2FnZT1cIm11bmljaXBpby5jaGFuZ2VcIiBpZD1cImxibC1tdW5pY2lwaW9cIj5CdWVuYXZlbnR1cmE8L3NwYW4+PGkgY2xhc3M9XCJ3My1yaWdodCB3My1sYXJnZSBmYSBmYS1jYXJldC1kb3duXCI+PC9pPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8ZGl2IGNsYXNzPVwidzMtaGlkZVwiPlxyXG4gICAgICA8dWwgY2xhc3M9XCJ3My11bFwiPlxyXG4gICAgICAgIDxsaSBvbi1jbGljaz1cInJlcXVlc3REYXRhXCIgaWQ9XCJsb2MtNDUwMjJcIj5CdWVuYXZlbnR1cmE8L2xpPlxyXG4gICAgICAgIDxsaSBvbi1jbGljaz1cInJlcXVlc3REYXRhXCIgaWQ9XCJsb2MtMjgwNzlcIj5NYWRyaWQ8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInczLW1hcmdpbi10b3AgdzMtaGlkZVwiIGlkPVwiYWVtZXRBcGktY29udGFpbmVyXCIgc3R5bGU9XCJwYWRkaW5nOjA7XCI+XHJcbiAgICA8ZGl2IGlkPVwicHJvZ3Jlc3MtYmFyLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidzMtY2VudGVyXCI+Q2FyZ2FuZG8gZGF0b3MgZGVzZGUgbGEgQUVNRVQuLi48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInczLWJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJwcm9ncmVzcy1iYXJcIiBjbGFzcz1cInczLWdyZWVuXCIgc3R5bGU9XCJoZWlnaHQ6MjRweDt3aWR0aDowJVwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDxkaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcblxyXG5mdW5jdGlvbiBhZW1ldENvbXBvbmVudCgpIHtcclxuXHJcbiAgY29uc3QgX19URU1QTEFURSA9IGBcclxuICA8ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyIHczLXRlYWwgdzMtY2VudGVyIHczLXNtYWxsIHczLXBhZGRpbmdcIj5cclxuICAgIHtmbi5mb3JtYXRGZWNoYTplbGFib3JhZG99XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBzdHlsZT1cInBhZGRpbmc6MFwiPlxyXG4gICAgPGgzIGNsYXNzPVwidzMtY2VudGVyIHczLWJvcmRlci1ib3R0b21cIj57Zm4uZm9ybWF0RmVjaGE6cHJlZGljY2lvbi5kaWFbMF0uZmVjaGE6ZGF5fTwvaDM+XHJcbiAgICA8ZGl2Pntmbi5zaG93RGF5OnJvd3MtMH08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ3My1zbWFsbCB3My10ZWFsIHczLXBhZGRpbmcgdzMtY2VudGVyXCI+XHJcbiAgICAgIDxkaXY+PGkgY2xhc3M9XCJmYSBmYS1hcnJvdy11cFwiPjwvaT4ge3ByZWRpY2Npb24uZGlhWzBdLm9ydG99PC9kaXY+XHJcbiAgICAgIDxkaXY+PGkgY2xhc3M9XCJmYSBmYS1hcnJvdy1kb3duXCI+PC9pPiB7cHJlZGljY2lvbi5kaWFbMF0ub2Nhc299PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8YnIvPlxyXG4gIDxkaXYgc3R5bGU9XCJwYWRkaW5nOjBcIj5cclxuICAgIDxoMyBjbGFzcz1cInczLWNlbnRlciB3My1ib3JkZXItYm90dG9tXCI+e2ZuLmZvcm1hdEZlY2hhOnByZWRpY2Npb24uZGlhWzFdLmZlY2hhOmRheX08L2gzPlxyXG4gICAgPGRpdj57Zm4uc2hvd0RheTpyb3dzLTF9PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidzMtc21hbGwgdzMtdGVhbCB3My1wYWRkaW5nIHczLWNlbnRlclwiPlxyXG4gICAgICA8ZGl2PjxpIGNsYXNzPVwiZmEgZmEtYXJyb3ctdXBcIj48L2k+IHtwcmVkaWNjaW9uLmRpYVsxXS5vcnRvfTwvZGl2PlxyXG4gICAgICA8ZGl2PjxpIGNsYXNzPVwiZmEgZmEtYXJyb3ctZG93blwiPjwvaT4ge3ByZWRpY2Npb24uZGlhWzFdLm9jYXNvfTwvZGl2PiBcclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxici8+XHJcbiAgPGRpdiBzdHlsZT1cInBhZGRpbmc6MFwiPlxyXG4gICAgPGgzIGNsYXNzPVwidzMtY2VudGVyIHczLWJvcmRlci1ib3R0b21cIj57Zm4uZm9ybWF0RmVjaGE6cHJlZGljY2lvbi5kaWFbMl0uZmVjaGE6ZGF5fTwvaDM+XHJcbiAgICA8ZGl2Pntmbi5zaG93RGF5OnJvd3MtMn08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ3My1zbWFsbCB3My10ZWFsIHczLXBhZGRpbmcgdzMtY2VudGVyXCI+XHJcbiAgICAgIDxkaXY+PGkgY2xhc3M9XCJmYSBmYS1hcnJvdy11cFwiPjwvaT4ge3ByZWRpY2Npb24uZGlhWzJdLm9ydG99PC9kaXY+XHJcbiAgICAgIDxkaXY+PGkgY2xhc3M9XCJmYSBmYS1hcnJvdy1kb3duXCI+PC9pPiB7cHJlZGljY2lvbi5kaWFbMl0ub2Nhc299PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gO1xyXG5cclxuICBsZXQgZm4gPSB7IFxyXG4gICAgZm9ybWF0RmVjaGEgOiBmdW5jdGlvbih2YWx1ZSwgY3R4LCBvcHRpb25zKXtcclxuICAgICAgbGV0IHRva2VucyA9IHZhbHVlLnNwbGl0KCdUJyk7XHJcbiAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnNbMF0gPT09ICdkYXRlJykgcmV0dXJuIHRva2Vuc1swXTtcclxuICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9uc1swXSA9PT0gJ3RpbWUnKSByZXR1cm4gdG9rZW5zWzFdO1xyXG4gICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zWzBdID09PSAnZGF5Jyl7XHJcbiAgICAgICAgdG9rZW5zID0gdG9rZW5zWzBdLnNwbGl0KCctJyk7XHJcbiAgICAgICAgbGV0IG5vbWJyZXMgPSBbJ0RvbWluZ28nLCAnTHVuZXMnLCAnTWFydGVzJywgJ01pw6lyY29sZXMnLCAnSnVldmVzJywgJ1ZpZXJuZXMnLCAnU2FiYWRvJ107XHJcbiAgICAgICAgbGV0IGRheSAgICAgPSBuZXcgRGF0ZSh+fnRva2Vuc1swXSwgfn50b2tlbnNbMV0gLSAxLCB+fnRva2Vuc1syXSkuZ2V0RGF5KCk7XHJcbiAgICAgICAgcmV0dXJuICd7MH0gezF9Jy5mb3JtYXQobm9tYnJlc1tkYXldLCB+fnRva2Vuc1syXSk7XHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybiAnezF9IC0gezB9Jy5mb3JtYXQoLi4udG9rZW5zKVxyXG4gICAgfSxcclxuICAgIHNob3dEYXk6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgIGZ1bmN0aW9uIHJlbmRlclJvdyhzYiwgcm93KSB7XHJcbiAgICAgICAgbGV0IHJvd190ZW1wbGF0ZSA9IGBcclxuICAgICAgICAgIDx0ciBjbGFzcz1cInczLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8dGQ+e3Jvdy5wZXJpb2RvfTowMDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57cm93LmNpZWxvfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57cm93LnRlbXBlcmF0dXJhfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57Zm4uZm9ybWF0WmVybzpyb3cubGx1dmlhfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD48aSBjbGFzcz1cImZhIGZhLTJ4IGZhLWxvbmctYXJyb3ctcmlnaHQgcG9sLXtyb3cudmllbnRvWzBdfVwiPjwvaT4ge3Jvdy52aWVudG9bMV19PC90ZD5cclxuICAgICAgICAgIDwvdHI+YDtcclxuICAgICAgICBsZXQgcm93X3dyYXBwZXIgPSB7cm93LCBmbn07XHJcbiAgICAgICAgcmV0dXJuIHNiLmFwcGVuZChyb3dfdGVtcGxhdGUuZm9ybWF0KHJvd193cmFwcGVyKSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGRhdGEucmVkdWNlKHJlbmRlclJvdywgcG9sLnN0cmluZ0J1aWxkZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCc8dGFibGUgY2xhc3M9XCJ3My10YWJsZSB3My1ib3JkZXJlZCB3My1zbWFsbCB3My1zdHJpcGVkXCI+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgnPHRyIGNsYXNzPVwidzMtY2VudGVyIHczLXRlYWxcIj4nICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHRoPkhvcmE8L3RoPicgKyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGg+Q2llbG88L3RoPicgKyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGg+VGVtcDxicj7CukM8L3RoPicgKyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8dGg+TGx1dmlhPGJyPm1sPC90aD4nICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHRoPlZpZW50bzxicj5rbS9oPC90aD4nICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvdHI+JykpXHJcbiAgICAgICAgICAgICAgICAgLmFwcGVuZCgnPC90YWJsZT4nKVxyXG4gICAgICAgICAgICAgICAgIC52YWx1ZTtcclxuICAgIH0sXHJcbiAgICBmb3JtYXRaZXJvOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlID09ICcwJyA/ICcnIDogdmFsdWU7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGV0IGNvbXBvbmVudCA9IHtcclxuICAgIHJvb3QgICA6IHt9LFxyXG4gICAgaW5pdCAgIDogZnVuY3Rpb24oY29udGFpbmVyKXsgfSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIHRoaXMucm9vdCA9IHBvbC5idWlsZCgnZGl2JywgX19URU1QTEFURS5mb3JtYXQodGhpcy5kYXRhKSk7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvb3Q7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICB3aXRoRGF0YSA6IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICB0aGlzLmRhdGEgPSBKU09OLnBhcnNlKGRhdGEpWzBdO1xyXG4gICAgICB0aGlzLmRhdGEuZm4gPSBmbjtcclxuICAgICAgdGhpcy5kYXRhXHJcbiAgICAgICAgICAucHJlZGljY2lvblxyXG4gICAgICAgICAgLmRpYVxyXG4gICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgZGlhLCBpKSB7XHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIC8vIEZpbHRyYXIgZGF0b3MgZGVsIGTDrWEgYW50ZXJpb3JcclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgLy9sZXQgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgLy9sZXQgdGFyZ2V0RGF0ZSA9IGZuLmZvcm1hdEZlY2hhKGRpYS5mZWNoYSwgbnVsbCwgWydkYXRlJ10pO1xyXG4gICAgICAgICAgICAvL2xldCB0b2RheSAgICAgID0gJ3swIzAwMDB9LXsxIzAwfS17MiMwMH0nLmZvcm1hdChub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCkgKyAxLCBub3cuZ2V0RGF0ZSgpKTtcclxuICAgICAgICAgICAgLy9pZiAodGFyZ2V0RGF0ZSA8IHRvZGF5KSB7XHJcbiAgICAgICAgICAgIC8vICByZXR1cm4gYTtcclxuICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIC8vIEFncnVwYXIgbG9zIGRhdG9zIHBvciBob3JhXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIGxldCBncm91cCA9IFtdLmNvbmNhdChkaWEuZXN0YWRvQ2llbG8ubWFwKCBmdW5jdGlvbihlKXsgcmV0dXJuIHsgdCA6ICdjJywgcGVyaW9kbyA6IGUucGVyaW9kbywgdmFsdWUgOiBlLmRlc2NyaXBjaW9uIH19KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYS50ZW1wZXJhdHVyYS5tYXAoIGZ1bmN0aW9uKGUpeyByZXR1cm4geyB0IDogJ3QnLCBwZXJpb2RvIDogZS5wZXJpb2RvLCB2YWx1ZSA6IGUudmFsdWUgfX0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhLnByZWNpcGl0YWNpb24ubWFwKCBmdW5jdGlvbihlKXsgcmV0dXJuIHsgdCA6ICdwJywgcGVyaW9kbyA6IGUucGVyaW9kbywgdmFsdWUgOiBlLnZhbHVlIH19KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYS52aWVudG9BbmRSYWNoYU1heFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLndoZXJlKGUgPT4gZS52ZWxvY2lkYWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKCBmdW5jdGlvbihlKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHQgICAgICAgOiAndicsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJpb2RvIDogZS5wZXJpb2RvLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6IFtlLmRpcmVjY2lvblswXSwgZS52ZWxvY2lkYWRbMF1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmdyb3VwQnkoJ3BlcmlvZG8nKTtcclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgLy8gY29udmVydGlyIGVuIGRhdG9zIHRhYnVsYWRvc1xyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICBhWydyb3dzLXswfScuZm9ybWF0KGkpXSA9IE9iamVjdC5rZXlzKGdyb3VwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoIGZ1bmN0aW9uKHJvd3MsIGtleSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpbHRyYXIgbG9zIGRhdG9zIGRlIGhvcmFzIGFudGVyaW9yZXMgYSBsYSBhY3R1YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiAoaSA9PSAwICYmIGtleSA8ICd7MCMwMH0nLmZvcm1hdChub3cuZ2V0SG91cnMoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICByZXR1cm4gcm93cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRvc0hvcmEgPSBncm91cFtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cy5wdXNoKCB7IHBlcmlvZG8gICAgIDoga2V5LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2llbG8gICAgICAgOiBkYXRvc0hvcmEud2hlcmUoeyB0IDogJ2MnIH0pWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyYSA6IGRhdG9zSG9yYS53aGVyZSh7IHQgOiAndCcgfSlbMF0udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxsdXZpYSAgICAgIDogZGF0b3NIb3JhLndoZXJlKHsgdCA6ICdwJyB9KVswXS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmllbnRvICAgICAgOiBkYXRvc0hvcmEud2hlcmUoeyB0IDogJ3YnIH0pWzBdLnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvd3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnRCeSgncGVyaW9kbycpO1xyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgIH0sIHRoaXMuZGF0YSk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY3R4KXtcclxuXHJcbiAgbGV0IGFlbWV0Q29udGFpbmVyO1xyXG4gIGxldCBwcm9ncmVzc0JhckNvbnRhaW5lcjtcclxuICBsZXQgcHJvZ3Jlc3NCYXI7XHJcblxyXG4gIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGRhdGEgICA6IHsgXHJcbiAgICAgIG11bmljaXBpb3MgOiB7IFxyXG4gICAgICAgICc0NTAyMicgOiAnQnVlbmF2ZW50dXJhIChUT0xFRE8pJyxcclxuICAgICAgICAnMjgwNzknIDogJ01hZHJpZCdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ2RpdicsIF9fVEVNUExBVEUpO1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBpbml0QWxsKGNvbnRhaW5lcik7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRIYW5kbGVycyA6IHsgXHJcbiAgICAgIGV4cGFuZENvbGxhcHNlIDogZXhwYW5kQ29sbGFwc2UsXHJcbiAgICAgIHJlcXVlc3REYXRhICAgIDogcmVxdWVzdERhdGFcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBpbml0QWxsKGNvbnRhaW5lcikge1xyXG4gICAgYWVtZXRDb250YWluZXIgICAgICAgPSBwb2wuJCgnYWVtZXRBcGktY29udGFpbmVyJyk7XHJcbiAgICBwcm9ncmVzc0JhciAgICAgICAgICA9IHBvbC4kKCdwcm9ncmVzcy1iYXInKTtcclxuICAgIHByb2dyZXNzQmFyQ29udGFpbmVyID0gcG9sLiQoJ3Byb2dyZXNzLWJhci1jb250YWluZXInKTsgICBcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBhZGRFdmVudExpc3RlbmVyXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdXRpbHMuYWRkRXZlbnRMaXN0ZW5lcnMoY29tcG9uZW50LnJvb3QsIGNvbXBvbmVudC5ldmVudEhhbmRsZXJzKTtcclxuICAgIGNhbGxBZW1ldEFwaSgpO1xyXG4gIH1cclxuXHJcbiAgbGV0IHRpbWVySWQ7XHJcbiAgZnVuY3Rpb24gaW5pdFByb2dyZXNzQmFyKCkge1xyXG4gICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnezB9JScuZm9ybWF0KGNvdW50ZXIpO1xyXG4gICAgaWYodGltZXJJZCkgY2xlYXJJbnRlcnZhbCh0aW1lcklkKTtcclxuICAgIHRpbWVySWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNvdW50ZXIgPSAoY291bnRlciArIDkpICUgMTAwO1xyXG4gICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9ICd7MH0lJy5mb3JtYXQoY291bnRlcik7XHJcbiAgICB9LCAzMDApO1xyXG4gIH1cclxuXHJcbiAgbGV0IGNvZGlnbyA9IDQ1MDIyO1xyXG4gIGZ1bmN0aW9uIGNhbGxBZW1ldEFwaSgpIHtcclxuICAgIFxyXG4gICAgaW5pdFByb2dyZXNzQmFyKCk7XHJcblxyXG4gICAgYWVtZXRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBhZW1ldENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9ncmVzc0JhckNvbnRhaW5lcik7XHJcbiAgICBhZW1ldENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd3My1oaWRlJyk7XHJcblxyXG4gICAgY29uc3QgRU5EUE9JTlQgPSAnaHR0cHM6Ly9vcGVuZGF0YS5hZW1ldC5lcy9vcGVuZGF0YS9hcGkvcHJlZGljY2lvbi9lc3BlY2lmaWNhL211bmljaXBpby9ob3JhcmlhLycgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29kaWdvICtcclxuICAgICAgICAgICAgICAgICAgICAgJz9hcGlfa2V5PScgK1xyXG4gICAgICAgICAgICAgICAgICAgICAnZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKemRXSWlPaUp5WTJGemRISnZaMjlBYUc5MGJXRnBiQzVqYjIwaUxDSnFkR2tpT2lKbVptSTNPV0pqWmkxbFpXUXdMVCcgKyBcclxuICAgICAgICAgICAgICAgICAgICAgJ1F3T0RNdFlUa3daQzA0TW1Oa01tUmhNVEEyTWpRaUxDSnBjM01pT2lKQlJVMUZWQ0lzSW1saGRDSTZNVFU0TWpjeU5UZzNOaXdpZFhObGNrbGtJam9pWm1aaU4nICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICd6bGlZMll0WldWa01DMDBNRGd6TFdFNU1HUXRPREpqWkRKa1lURXdOakkwSWl3aWNtOXNaU0k2SWlKOS5iUGhBSkR1dFA2Ml83NXBlbzNxcjg4UXMxSlE0am11NlRXWEhqdkl6WngwJztcclxuICAgIHBvbC5hamF4XHJcbiAgICAgICAuZ2V0KEVORFBPSU5ULCByZXEgPT4ge1xyXG4gICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnKTtcclxuICAgICAgIH0pXHJcbiAgICAgICAudGhlbih0ZXh0ID0+IEpTT04ucGFyc2UodGV4dCkpXHJcbiAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICBpZihyZXN1bHQuZXN0YWRvID09IDIwMCkgcmV0dXJuIHBvbC5hamF4LmdldChyZXN1bHQuZGF0b3MpO1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzdWx0LmRlc2NyaXBjaW9uKTtcclxuICAgICAgIH0pXHJcbiAgICAgICAudGhlbiggdGV4dCA9PiB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgYWVtZXRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgIChmdW5jdGlvbihjb21wb25ldCkge1xyXG4gICAgICAgICAgIGNvbXBvbmV0LmluaXQoY3R4KTtcclxuICAgICAgICAgICBhZW1ldENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wb25ldC5yZW5kZXIoKSk7XHJcbiAgICAgICAgICAgY29tcG9uZXQubW91bnRlZChjdHgpO1xyXG4gICAgICAgICB9KGFlbWV0Q29tcG9uZW50KCkud2l0aERhdGEodGV4dCkpKTsgICAgICAgICBcclxuICAgICAgIH0pXHJcbiAgICAgICAuY2F0Y2goIGUgPT4ge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZXhwYW5kQ29sbGFwc2UodGFyZ2V0LCBtb3VzZUV2ZW50KSB7XHJcbiAgICBsZXQgX19saXN0ID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3Q7XHJcbiAgICBpZihfX2xpc3QuY29udGFpbnMoJ3czLWhpZGUnKSl7XHJcbiAgICAgIF9fbGlzdC5yZW1vdmUoJ3czLWhpZGUnKTtcclxuICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jYXJldC1kb3duJyk7XHJcbiAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuY2xhc3NMaXN0LmFkZCgnZmEtY2FyZXQtdXAnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9fbGlzdC5hZGQoJ3czLWhpZGUnKTtcclxuICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jYXJldC11cCcpO1xyXG4gICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLmNsYXNzTGlzdC5hZGQoJ2ZhLWNhcmV0LWRvd24nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlcXVlc3REYXRhKHRhcmdldCwgbW91c2VFdmVudCkge1xyXG5cclxuICAgIGxldCBjb21ibyA9IHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgIGNvZGlnbyA9IHRhcmdldC5pZC5zcGxpdCgnLScpWzFdO1xyXG5cclxuICAgIHB1YnN1Yi5wdWJsaXNoKCdtdW5pY2lwaW8uY2hhbmdlJywgY29tcG9uZW50LmRhdGEubXVuaWNpcGlvc1tjb2RpZ29dICk7XHJcblxyXG4gICAgZXhwYW5kQ29sbGFwc2UoY29tYm8pO1xyXG4gICAgY2FsbEFlbWV0QXBpKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG5cclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGAgIFxyXG4gIDxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtY2VudGVyIHczLWFuaW1hdGUtbGVmdFwiIHN0eWxlPVwicGFkZGluZy10b3A6NjBweDtcIj5cclxuICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1nL2xvZ28ucG5nXCIgYWx0PVwiQ2FyXCIgc3R5bGU9XCJ3aWR0aDogMzAwcHhcIj5cclxuICAgIDxwPkxhIGFwcCBxdWUgdGUgcGVybWl0ZSBhbG1hY2VuYXIgdG9kYXMgdHVzIG5vdGFzIGVuIGVsIG3Ds3ZpbCEhITwvcD5cclxuICA8L2Rpdj5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuXHJcbiAgbGV0IGNvbXBvbmVudCA9IHtcclxuICAgIHJvb3QgICA6IHt9LFxyXG4gICAgaW5pdCAgIDogZnVuY3Rpb24oY29udGFpbmVyKXsgfSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIHRoaXMucm9vdCA9IHBvbC5idWlsZCgnZGl2JywgX190ZW1wbGF0ZSkuZmlyc3RFbGVtZW50Q2hpbGQgO1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICAvLzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGJ0bi10ZXN0IGNsYXNzPVwidzMtYnV0dG9uIHczLWJsYWNrXCI+aHRtbDwvYnV0dG9uPlxyXG4gICAgICAvL2xldCBidG4gPSBwb2wuJCgnW2J0bi10ZXN0XScsIGNvbnRhaW5lcilbMF07XHJcbiAgICAgIC8vYnRuLm9uY2xpY2sgPSBvblRlc3RCdXR0b25DbGljaztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBGaWxsVGVtcGxhdGVcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBmdW5jdGlvbiBvblRlc3RCdXR0b25DbGlja19maWxsKG1vdXNlRXZlbnQpe1xyXG4gICAgbGV0IHRlbXBsYXRlID0gcG9sLmJ1aWxkKCdkaXYnLCAnPGgzIHhiaW5kPVwiaWQ6aWQ7aW5uZXJIVE1MOm5vbWJyZTtvbmNsaWNrOl9fY2xpY2tcIj48L2gzPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBsZXQgciA9IHBvbC50ZW1wbGF0ZXMuZmlsbChcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZSwgXHJcbiAgICAgICAgICAgICAgeyBpZCA6IDU1NSwgXHJcbiAgICAgICAgICAgICAgICBub21icmUgOiAncmFmYScsXHJcbiAgICAgICAgICAgICAgICBfX2NsaWNrIDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9fSk7XHJcblxyXG4gICAgY29tcG9uZW50LnJvb3QuYXBwZW5kQ2hpbGQocik7XHJcbiAgfVxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBFeGVjdXRlVGVtcGxhdGVcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBmdW5jdGlvbiBvblRlc3RCdXR0b25DbGljayhtb3VzZUV2ZW50KXtcclxuICAgIGxldCB0ZW1wbGF0ZSA9IHBvbC5idWlsZCgnZGl2JywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxoMyB4YmluZD1cImlkOmlkO2lubmVySFRNTDpub21icmU7XCI+PC9oMz4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgbGV0IGlubmVySHRtbCA9IHBvbC50ZW1wbGF0ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAuZXhlY3V0ZSh0ZW1wbGF0ZSwgW3sgaWQgOiA1NTUsIG5vbWJyZSA6ICdyYWZhJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkIDogNDQ0LCBub21icmUgOiAncmFmYSA0NDQnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaWQgOiAzMzMsIG5vbWJyZSA6ICdyYWZhIDMzMyd9XSk7XHJcbiAgICBwb2wudGVtcGxhdGVzXHJcbiAgICAgICAuZXhlY3V0ZSh0ZW1wbGF0ZSxcclxuICAgICAgICAgICAgICAgIFt7IGlkIDogNTU1LCBub21icmUgOiAncmFmYSd9LFxyXG4gICAgICAgICAgICAgICAgIHsgaWQgOiA0NDQsIG5vbWJyZSA6ICdyYWZhIDQ0NCd9LFxyXG4gICAgICAgICAgICAgICAgIHsgaWQgOiAzMzMsIG5vbWJyZSA6ICdyYWZhIDMzMyd9XSxcclxuICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICAgKVxyXG4gICAgICAubWFwKCBlID0+IGUubm9kZSApXHJcbiAgICAgIC5mb3JFYWNoKCBub2RlID0+IGNvbXBvbmVudC5yb290LmFwcGVuZENoaWxkKG5vZGUpICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG5cclxufVxyXG4iLCLvu79pbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYVwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgRGJXcmFwcGVyU2VydmljZSBmcm9tIFwiLi4vbGliL2RiV3JhcHBlci5zZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBOT1RBU19EQVRBQkFTRSAgID0gJ25vdGFzLWFwcC5kYic7IFxyXG5jb25zdCBOT1RBU19UQUJMRV9OQU1FID0gJ25vdGFzJztcclxuXHJcbmNvbnN0IFRFTVBMQVRFID0gYFxyXG48ZGl2IG5vdGFzLWNvbnRhaW5lciBzdHlsZT1cInBhZGRpbmc6MDsgbWFyZ2luLWJvdHRvbTo0M3B4O1wiIGNsYXNzPVwidzMtYW5pbWF0ZS1sZWZ0XCI+PC9kaXY+XHJcbjxidXR0b24gYnRuLWFkZC1ub3RlIG9uLWNsaWNrPVwiYWRkTm90ZVwiIGNsYXNzPVwidzMtYnV0dG9uIHczLWJsYWNrIHczLWNpcmNsZVwiPu+8izwvYnV0dG9uPmA7XHJcblxyXG5jb25zdCBfX0lURU1fVEVNUExBVEUgPWBcclxuPGRpdiBjbGFzcz1cInczLWJvcmRlci1ib3R0b20gdzMtYW5pbWF0ZS1sZWZ0XCIgc3R5bGU9XCJwYWRkaW5nOjA7IGZvbnQtc2l6ZToxNHB4O1wiIGlkPVwibm90ZS17bm90ZS5rZXl9XCI+XHJcbiAgPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lclwiIHN0eWxlPVwicGFkZGluZzo1cHhcIj5cclxuICAgIDxkaXYgb24tY2xpY2s9XCJleHBhbmRDb2xsYXBzZVwiPjxiPntub3RlLnRpdGxlfTwvYj48aSBjbGFzcz1cInczLXJpZ2h0IHczLWxhcmdlIGZhIGZhLWNhcmV0LWRvd25cIj48L2k+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lclwiIHN0eWxlPVwiZGlzcGxheTpub25lO3BhZGRpbmc6MCA0cHhcIj5cclxuICAgIDxwIGlkPVwiZWRpdHAte25vdGUua2V5fVwiIG9uLWNsaWNrPVwiZWRpdE5vdGVcIiBzdHlsZT1cInBhZGRpbmc6MnB4O21pbi1oZWlnaHQ6NGVtO21hcmdpbjoycHggMDt3aGl0ZS1zcGFjZTogcHJlLXdyYXBcIj57Zm9ybWF0VGV4dDpub3RlLnRleHR9PC9wPlxyXG4gICAgPGRpdiBjbGFzcz1cInczLWJhciB3My1jZW50ZXJcIiBzdHlsZT1cInBhZGRpbmc6NHB4IDA7XCI+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZGVsZXRlLXtub3RlLmtleX1cIiBvbi1jbGljaz1cImRlbGV0ZU5vdGVcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1ib3JkZXJcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImZhdi17bm90ZS5rZXl9XCIgb24tY2xpY2s9XCJzYXZlRmF2b3JpdGVzXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtYm9yZGVyXCI+PGkgY2xhc3M9XCJmYSB7Y3NzOm5vdGUua2V5fVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJlZGl0LXtub3RlLmtleX1cIiBvbi1jbGljaz1cImVkaXROb3RlXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtYm9yZGVyXCI+PGkgY2xhc3M9XCJmYSBmYS1lZGl0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjdHgpe1xyXG4gICAgXHJcbiAgbGV0IGRiO1xyXG4gIGxldCByb3dzID0gW107XHJcbiAgbGV0IGZhdm9yaXRlcyA9IFtdO1xyXG4gIGxldCBpdGVtc0NvbnRhaW5lcjtcclxuICBsZXQgY29tcG9uZW50ID0ge1xyXG4gICAgcm9vdCAgIDoge30sXHJcbiAgICBpbml0ICAgOiBmdW5jdGlvbihjb250YWluZXIpeyB9LFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgdGhpcy5yb290ID0gcG9sLmJ1aWxkKCdkaXYnLCBURU1QTEFURSk7XHJcbiAgICAgIGl0ZW1zQ29udGFpbmVyID0gdGhpcy5yb290LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBpbml0QWxsKCk7ICBcclxuICAgIH0sXHJcbiAgICBldmVudEhhbmRsZXJzIDogeyBcclxuICAgICAgYWRkTm90ZSAgICAgICAgOiBhZGROb3RlLFxyXG4gICAgICBkZWxldGVOb3RlICAgICA6IGRlbGV0ZU5vdGUsXHJcbiAgICAgIGV4cGFuZENvbGxhcHNlIDogZXhwYW5kQ29sbGFwc2UsXHJcbiAgICAgIHNhdmVGYXZvcml0ZXMgIDogc2F2ZUZhdm9yaXRlcyxcclxuICAgICAgZWRpdE5vdGUgICAgICAgOiBlZGl0Tm90ZVxyXG4gICAgfSBcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBpbml0QWxsKCkge1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9wZW4gZGF0YWJhc2VcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBkYiA9IG5ldyBEYldyYXBwZXJTZXJ2aWNlKE5PVEFTX0RBVEFCQVNFKTtcclxuICAgIGRiLm9wZW5EYigpXHJcbiAgICAgIC50aGVuKCBkYiA9PiB7XHJcbiAgICAgICAgbG9hZERhdGEoKTtcclxuICAgICAgfSk7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gYWRkRXZlbnRMaXN0ZW5lclxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHV0aWxzLmFkZEV2ZW50TGlzdGVuZXJzKGNvbXBvbmVudC5yb290LCBjb21wb25lbnQuZXZlbnRIYW5kbGVycyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBsb2FkRGF0YSgpIHtcclxuICAgIGRiLnJlYWRBbGwoTk9UQVNfVEFCTEVfTkFNRSlcclxuICAgICAgLnRoZW4oIHZhbHVlcyA9PiB7XHJcbiAgICAgICAgcm93cyA9IHZhbHVlcy5yZXZlcnNlKCk7XHJcbiAgICAgICAgZmF2b3JpdGVzID0gKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJykgfHwgJycpLnNwbGl0KCctJyk7XHJcbiAgICAgICAgcmVuZGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgaXRlbXNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICByb3dzLm1hcCggbm90ZSA9PiB7XHJcbiAgICAgICAgICBsZXQgX19iYWcgPSB7XHJcbiAgICAgICAgICAgIG5vdGUsXHJcbiAgICAgICAgICAgIGZvcm1hdFRleHQ6IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNzczogZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBmYXZvcml0ZXMuaW5jbHVkZXMoa2V5LnRvU3RyaW5nKCkpID8gJ2ZhLXN0YXInIDogJ2ZhLXN0YXItbyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICByZXR1cm4gcG9sLmJ1aWxkKCdkaXYnLCBfX0lURU1fVEVNUExBVEUuZm9ybWF0KF9fYmFnKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5tYXAoIGUgPT4gZS5maXJzdEVsZW1lbnRDaGlsZCApXHJcbiAgICAgICAgLmZvckVhY2goIGUgPT4ge1xyXG4gICAgICAgICAgaXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gYWRkRXZlbnRMaXN0ZW5lclxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKGl0ZW1zQ29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRlbGV0ZU5vdGUodGFyZ2V0LCBtb3VzZUV2ZW50KXtcclxuICAgIGxldCBfX2lkICAgICAgPSBwYXJzZUludCh0YXJnZXQuaWQuc3BsaXQoJy0nKVsxXSk7XHJcbiAgICBsZXQgX19wYXlsb2FkID0gcm93cy53aGVyZSh7IGtleSA6IF9faWQgfSlbMF07XHJcbiAgICBsZXQgX19lbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGUtezB9Jy5mb3JtYXQoX19pZCkpO1xyXG4gICAgXHJcbiAgICBkYi5kZWxldGUoTk9UQVNfVEFCTEVfTkFNRSwgX19pZClcclxuICAgICAgLnRoZW4oICgpID0+IHtcclxuICAgICAgICByb3dzLnJlbW92ZShfX3BheWxvYWQpO1xyXG4gICAgICAgIF9fZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9fZWxlbWVudCk7XHJcbiAgICAgIH0pOyAgICAgICAgICAgICAgIFxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZXhwYW5kQ29sbGFwc2UodGFyZ2V0LCBtb3VzZUV2ZW50KSB7XHJcbiAgICBsZXQgX19zdHlsZSA9IHRhcmdldC5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZy5zdHlsZTtcclxuICAgIGlmKF9fc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpe1xyXG4gICAgICBfX3N0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jYXJldC1kb3duJyk7XHJcbiAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuY2xhc3NMaXN0LmFkZCgnZmEtY2FyZXQtdXAnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF9fc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QucmVtb3ZlKCdmYS1jYXJldC11cCcpO1xyXG4gICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLmNsYXNzTGlzdC5hZGQoJ2ZhLWNhcmV0LWRvd24nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZE5vdGUodGFyZ2V0LCBtb3VzZUV2ZW50KSB7XHJcbiAgICBjdHgucm91dGVyLm5hdmlnYXRlVG8oJ25vdGUnKTtcclxuICB9ICBcclxuXHJcbiAgZnVuY3Rpb24gc2F2ZUZhdm9yaXRlcyh0YXJnZXQsIG1vdXNlRXZlbnQpIHtcclxuICAgIGxldCBzdGFyID0gdGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgbGV0IGtleSA9IHRhcmdldC5pZC5zcGxpdCgnLScpWzFdO1xyXG4gICAgaWYgKGZhdm9yaXRlcy5pbmNsdWRlcyhrZXkpKXtcclxuICAgICAgZmF2b3JpdGVzLnJlbW92ZShrZXkpO1xyXG4gICAgICBzdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXN0YXItbycpO1xyXG4gICAgICBzdGFyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXN0YXInKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZhdm9yaXRlcy5wdXNoKGtleSk7XHJcbiAgICAgIHN0YXIuY2xhc3NMaXN0LnJlbW92ZSgnZmEtc3Rhci1vJyk7XHJcbiAgICAgIHN0YXIuY2xhc3NMaXN0LmFkZCgnZmEtc3RhcicpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXZvcml0ZXMnLCBmYXZvcml0ZXMuam9pbignLScpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGVkaXROb3RlKHRhcmdldCwgbW91c2VFdmVudCkge1xyXG4gICAgY3R4LnJvdXRlci5uYXZpZ2F0ZVRvKCdub3RlLycgKyB0YXJnZXQuaWQuc3BsaXQoJy0nKVsxXSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG5cclxufVxyXG5cclxuIiwi77u/aW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuaW1wb3J0IERiV3JhcHBlclNlcnZpY2UgZnJvbSBcIi4uL2xpYi9kYldyYXBwZXIuc2VydmljZVwiO1xyXG5cclxuY29uc3QgTk9UQVNfREFUQUJBU0UgICA9ICdub3Rhcy1hcHAuZGInOyBcclxuY29uc3QgTk9UQVNfVEFCTEVfTkFNRSA9ICdub3Rhcyc7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYCAgXHJcbjxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWJvdHRvbSB3My1hbmltYXRlLWxlZnRcIj5cclxuICA8aDI+TnVldmEgbm90YTwvaDI+XHJcbiAgPGZvcm0gY2xhc3M9XCJ3My1tYXJnaW4tYm90dG9tXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwidHh0LXRpdGxlXCI+VMOtdHVsbzwvbGFiZWw+XHJcbiAgICA8aW5wdXQgY2xhc3M9XCJ3My1pbnB1dCB3My1ib3JkZXJcIiB0eXBlPVwidGV4dFwiIGlkPVwidHh0LXRpdGxlXCIgcGxhY2Vob2xkZXI9XCJJbnRyb2R1Y2UgdW4gdMOtdHVsb1wiID5cclxuICAgIDxsYWJlbCBmb3I9XCJ0eHQtdGV4dFwiPlRleHRvPC9sYWJlbD5cclxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cInczLWlucHV0IHczLWJvcmRlclwiIGlkPVwidHh0LXRleHRcIiByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPVwiQ29udGVuaWRvIGRlIGxhIG5vdGFcIj48L3RleHRhcmVhPlxyXG4gIDwvZm9ybT5cclxuICA8ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyIHczLW1hcmdpbi1ib3R0b20gdzMtY2VudGVyIHczLWFuaW1hdGUtem9vbVwiPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJidG4tZ3JhYmFyXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtYmxhY2tcIj5HcmFiYXI8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjdHgpe1xyXG4gIFxyXG4gIGxldCBjdXJyZW50O1xyXG4gIGxldCBkYjtcclxuICBsZXQgY29tcG9uZW50ID0ge1xyXG4gICAgcm9vdCAgIDoge30sXHJcbiAgICBpbml0ICAgOiBmdW5jdGlvbihjb250YWluZXIpeyB9LFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgdGhpcy5yb290ID0gcG9sLmJ1aWxkKCdkaXYnLCBfX3RlbXBsYXRlKTtcclxuICAgICAgcmV0dXJuIHRoaXMucm9vdDtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgaW5pdEFsbCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRBbGwoKSB7XHJcblxyXG4gICAgbGV0IF9fY29udGFpbmVyID0gY29tcG9uZW50LnJvb3QuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBfX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9wZW4gZGF0YWJhc2VcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBkYiA9IG5ldyBEYldyYXBwZXJTZXJ2aWNlKE5PVEFTX0RBVEFCQVNFKTtcclxuICAgIGRiLm9wZW5EYigpXHJcbiAgICAgIC50aGVuKCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IF9fZW5hYmxlVUkgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgX19jb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgICAgcG9sLiQoJ2J0bi1ncmFiYXInKS5vbmNsaWNrID0gYWRkTm90ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IF9faWQgPSBjdHgucm91dGVyLmN1cnJlbnQucGFyYW1zWzFdIHx8ICcnO1xyXG4gICAgICAgIGlmIChfX2lkKSB7XHJcbiAgICAgICAgICBkYi5yZWFkT25lKE5PVEFTX1RBQkxFX05BTUUsIHBhcnNlSW50KF9faWQpKVxyXG4gICAgICAgICAgICAudGhlbiggbm90ZSA9PiB7XHJcbiAgICAgICAgICAgICAgY3VycmVudCA9IG5vdGU7XHJcbiAgICAgICAgICAgICAgcG9sLiQoJ3R4dC10aXRsZScpLnZhbHVlID0gY3VycmVudC50aXRsZTtcclxuICAgICAgICAgICAgICBwb2wuJCgndHh0LXRleHQnKS52YWx1ZSAgPSBjdXJyZW50LnRleHQ7XHJcbiAgICAgICAgICAgICAgcG9sLiQoJ2gyJywgY29tcG9uZW50LnJvb3QpWzBdLmlubmVySFRNTCA9ICdFZGljacOzbiBkZSBub3RhJztcclxuICAgICAgICAgICAgICBfX2VuYWJsZVVJKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfX2VuYWJsZVVJKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkTm90ZSgpIHtcclxuICAgIHZhciBfX3R4dFRpdGxlID0gcG9sLiQoJ3R4dC10aXRsZScpO1xyXG4gICAgdmFyIF9fdHh0VGV4dCAgPSBwb2wuJCgndHh0LXRleHQnKTtcclxuICAgIHZhciBfX3RpdGxlID0gX190eHRUaXRsZS52YWx1ZS50cmltKCk7XHJcbiAgICB2YXIgX190ZXh0ICA9IF9fdHh0VGV4dC52YWx1ZS50cmltKCk7XHJcbiAgICBpZiAoIV9fdGl0bGUpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiBfX3R4dFRpdGxlLmZvY3VzKCksIDIwKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFfX3RleHQpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiBfX3R4dFRleHQuZm9jdXMoKSwgMjApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBkYi5zYXZlKE5PVEFTX1RBQkxFX05BTUUsXHJcbiAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAga2V5ICAgOiBjdXJyZW50ID8gY3VycmVudC5rZXkgIDogZGF0ZS52YWx1ZU9mKCksIFxyXG4gICAgICAgICAgICAgIGRhdGUgIDogY3VycmVudCA/IGN1cnJlbnQuZGF0ZSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3swfS97MX0vezJ9Jy5mb3JtYXQoZGF0ZS5nZXREYXRlKCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUuZ2V0TW9udGgsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSksIFxyXG4gICAgICAgICAgICAgIHRpdGxlIDogX190aXRsZSwgXHJcbiAgICAgICAgICAgICAgdGV4dCAgOiBfX3RleHQgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCBub3RhID0+IHtcclxuICAgICAgICAgICAgICBjdHgucm91dGVyLm5hdmlnYXRlVG8oJ2xpc3QnKTsgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9