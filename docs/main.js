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
  <a href="about" route-link class="w3-bar-item w3-button w3-right">?</a>
`;

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
      get  : function (url) {
        return new Promise( (resolve, reject) => {
          //url += (url.contains('?') ? '&ms=' : '?ms=') + new Date().getTime();
          var xml = this.createXMLHttpRequest();
          xml.open('GET', url, true);
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
/* harmony import */ var _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/mapa.js */ "./src/lib/mapa.js");


const __template = `  
<div class="w3-container w3-margin-bottom">
  <h2>La predicción del tiempo</h2>
  <div id="aemetApi-container" style="padding:0;">
    <div class="w3-center">Cargando datos desde la AEMET...</div>
    <div class="w3-border">
      <div id="progress-bar" class="w3-green" style="height:24px;width:0%"></div>
    </div>
  </div>
</div>
`;

/* harmony default export */ __webpack_exports__["default"] = (function(){

  let aemetContainer;
  let progressBar;
  let component = {
    root   : {},
    init   : function(container){ },
    render : function(container){
      this.root = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', __template);
      return this.root;
    },
    mounted : function(container){
      aemetContainer = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].$('aemetApi-container');
      progressBar = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].$('progress-bar');
      initProgressBar();
      callAemetApi();
    }
  };

  let timerId;
  function initProgressBar() {
    let counter = 0;
    timerId = setInterval(() => {
      counter = (counter + 9) % 100;
      progressBar.style.width = '{0}%'.format(counter);
    }, 200);
  }

  function callAemetApi() {
    
    let endpoint = 'https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/horaria/45022' +
                   '?api_key=' +
                   'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyY2FzdHJvZ29AaG90bWFpbC5jb20iLCJqdGkiOiJmZmI3OWJjZi1lZWQwLTQwODMtYTkwZC04MmNkMmRhMTA2MjQiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTU4MjcyNTg3NiwidXNlcklkIjoiZmZiNzliY2YtZWVkMC00MDgzLWE5MGQtODJjZDJkYTEwNjI0Iiwicm9sZSI6IiJ9.bPhAJDutP62_75peo3qr88Qs1JQ4jmu6TWXHjvIzZx0';
    _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].ajax
       .get(endpoint)
       .then(text => JSON.parse(text))
       .then(result => {
         if(result.estado == 200) return _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].ajax.get(result.datos);
         throw new Error(result.descripcion);
       })
       .then( text => {
         let data = JSON.parse(text);
         clearInterval(timerId);
         aemetContainer.innerHTML = JSON.stringify(data, null, 2);
       })
       .catch( e => {
         console.log(e);
       });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW4tY29udGVudC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVudS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvZGJXcmFwcGVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9tYXBhLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvcHViU3ViLlNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Fib3V0LnBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2VsLXRpZW1wby5wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ob21lLnBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2xpc3QucGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbmV3LWl0ZW0ucGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsb0RBQUc7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG9EQUFHO0FBQ2pCLGNBQWMsb0RBQUc7QUFDakIsY0FBYyxvREFBRztBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxxQkFBcUIsb0RBQUc7QUFDeEIscUJBQXFCLG9EQUFHO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDRDO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGAgIFxyXG4gIDxwPnt0ZXh0fTwvcD5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRleHQgICA6ICfCqSBSYWZhZWwgQ2FzdHJvIEfDs21leiwgMjAyMCcsXHJcbiAgICBpbml0ICAgOiBmdW5jdGlvbihjb250YWluZXIpe30sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaWQgICAgICAgIDogXCJhcHBGb290ZXJcIixcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLmZvcm1hdCh0aGlzKSxcclxuICAgICAgICBjbGFzc05hbWUgOiAndzMtY29udGFpbmVyIHczLXRlYWwgdzMtY2VudGVyJ1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwb2wuYnVpbGQoJ2Zvb3RlcicsIG9wdGlvbnMpO1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgXHJcbiAgPGgxPnt0aXRsZX08L2gxPlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICByZXR1cm4ge1xyXG4gICAgdGl0bGUgIDogJ05vdGFzIEFwcCcsXHJcbiAgICBpbml0ICAgOiBmdW5jdGlvbihjb250YWluZXIpe30sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaWQgICAgICAgIDogJ2FwcEhlYWRlcicsXHJcbiAgICAgICAgaW5uZXJIVE1MIDogX190ZW1wbGF0ZS5mb3JtYXQodGhpcyksXHJcbiAgICAgICAgY2xhc3NOYW1lIDogJ3czLWNvbnRhaW5lciB3My10ZWFsJ1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwb2wuYnVpbGQoJ2hlYWRlcicsIG9wdGlvbnMpO1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcblxyXG4gIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7IFxyXG4gICAgICAgIGlkICAgICAgICA6IFwiYXBwLWNvbnRlbnQtY29udGFpbmVyXCIsXHJcbiAgICAgICAgaW5uZXJIVE1MIDogX190ZW1wbGF0ZSxcclxuICAgICAgICBjbGFzc05hbWUgOiAndzMtY29udGFpbmVyJyxcclxuICAgICAgICBzdHlsZSAgICAgOiB7IFxyXG4gICAgICAgICAgbWluSGVpZ2h0IDogJzQ0MHB4JyxcclxuICAgICAgICAgIHBhZGRpbmcgICA6ICcwIDAgNjBweCAwJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcG9sLmJ1aWxkKCdzZWN0aW9uJywgb3B0aW9ucyk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgaW5pdFNjcm9sbCgpOyAgXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxuXHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNjcm9sbFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBpbml0U2Nyb2xsKCl7XHJcbiAgICBcclxuICBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcclxuXHQgIHZhciB0aW1lb3V0O1xyXG5cdCAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdFx0ICB2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XHJcblx0XHQgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQgIHRpbWVvdXQgPSBudWxsO1xyXG5cdFx0XHQgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdFx0ICB9O1xyXG5cdFx0ICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcclxuXHRcdCAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0ICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XHJcblx0XHQgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdCAgfTtcclxuICB9OyAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICBcclxuICBmdW5jdGlvbiBpbml0U2Nyb2xsKCl7ICAgICAgICBcclxuICAgIHZhciBuYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcE1lbnVcIik7XHJcbiAgICBpZihuYXZiYXIuY2xhc3NOYW1lLmluY2x1ZGVzKCdzdGlja3knKSkgcmV0dXJuO1xyXG4gICAgdmFyIHN0aWNreSA9IG5hdmJhci5vZmZzZXRUb3A7ICAgICAgICAgIFxyXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gbXlGdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+PSBzdGlja3kpIHtcclxuICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZChcInN0aWNreVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcInN0aWNreVwiKTtcclxuICAgICAgfVxyXG4gICAgfTsgIFxyXG4gIH1cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBkZWJvdW5jZShpbml0U2Nyb2xsLCAxNTApLCBmYWxzZSk7XHJcbiAgaW5pdFNjcm9sbCgpO1xyXG59OyIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4uL2xpYi9wdWJTdWIuU2VydmljZVwiO1xyXG5cclxuY29uc3QgX19URU1QTEFURSA9IGAgIFxyXG4gIDxhIGhyZWY9XCJcIiByb3V0ZS1saW5rIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uIHNlbGVjdGVkXCI+SW5pY2lvPC9hPlxyXG4gIDxhIGhyZWY9XCJlbC10aWVtcG9cIiByb3V0ZS1saW5rIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uXCI+RWwgdGllbXBvPC9hPlxyXG4gIDxhIGhyZWY9XCJsaXN0XCIgcm91dGUtbGluayBjbGFzcz1cInczLWJhci1pdGVtIHczLWJ1dHRvblwiPk5vdGFzPC9hPlxyXG4gIDxhIGhyZWY9XCJub3RlXCIgcm91dGUtbGluayBjbGFzcz1cInczLWJhci1pdGVtIHczLWJ1dHRvblwiPis8L2E+XHJcbiAgPGEgaHJlZj1cImFib3V0XCIgcm91dGUtbGluayBjbGFzcz1cInczLWJhci1pdGVtIHczLWJ1dHRvbiB3My1yaWdodFwiPj88L2E+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gIGxldCBjb21wb25lbnQgPSAge1xyXG4gICAgcm9vdCAgIDoge30sXHJcbiAgICBpZCAgICAgOiAnbWVudS5jb21wb25lbnQucmVmJyxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7fSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaWQgICAgICAgIDogXCJhcHBNZW51XCIsXHJcbiAgICAgICAgaW5uZXJIVE1MIDogX19URU1QTEFURS5mb3JtYXQodGhpcyksXHJcbiAgICAgICAgY2xhc3NOYW1lIDogJ3czLWJhciB3My1ibGFjaydcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ25hdicsIG9wdGlvbnMpO1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIGluaXRBbGwoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBpbml0QWxsKCkge1xyXG4gICAgbGV0IGxpbmtzID0gcG9sLiQoJ1tyb3V0ZS1saW5rXScsIGNvbXBvbmVudC5yb290KTtcclxuICAgIGxldCBtYXAgICA9IGxpbmtzLm1hcCggZnVuY3Rpb24obGluayl7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHBhdGggOiBsaW5rLmhyZWYuc3BsaXQoJy8nKS5sYXN0SXRlbSgpLCBsaW5rIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgIC50b0RpY3Rpb25hcnkoJ3BhdGgnLCAnbGluaycpO1xyXG4gICAgcHVic3ViLnN1YnNjcmliZSgndmlldy5jaGFuZ2UnLCAobmFtZSwgcm91dGUpID0+IHtcclxuICAgICAgbGlua3MuZm9yRWFjaCggZSA9PiBlLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykgKTtcclxuICAgICAgbWFwW3JvdXRlLm5hbWVdLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICB9KTsgXHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG5cclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuL2xpYi9tYXBhLmpzXCI7XHJcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4vbGliL3B1YlN1Yi5TZXJ2aWNlXCI7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDb21wb25lbnRzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5pbXBvcnQgaGVhZGVyQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgZm9vdGVyQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvZm9vdGVyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgY29udGVudENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL21haW4tY29udGVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IG1lbnVDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9tZW51LmNvbXBvbmVudFwiO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUGFnZXNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmltcG9ydCBob21lUGFnZSBmcm9tIFwiLi92aWV3cy9ob21lLnBhZ2VcIjtcclxuaW1wb3J0IGxpc3RQYWdlIGZyb20gXCIuL3ZpZXdzL2xpc3QucGFnZVwiO1xyXG5pbXBvcnQgYWJvdXRQYWdlIGZyb20gXCIuL3ZpZXdzL2Fib3V0LnBhZ2VcIjtcclxuaW1wb3J0IG5vdGVQYWdlIGZyb20gXCIuL3ZpZXdzL25ldy1pdGVtLnBhZ2VcIjtcclxuaW1wb3J0IGVsVGllbXBvUGFnZSBmcm9tIFwiLi92aWV3cy9lbC10aWVtcG8ucGFnZVwiO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUm91dGVzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBjb21wb25lbnRzID0gIFsgXHJcbiAgaGVhZGVyQ29tcG9uZW50KCksXHJcbiAgbWVudUNvbXBvbmVudCgpLFxyXG4gIGNvbnRlbnRDb21wb25lbnQoKSxcclxuICBmb290ZXJDb21wb25lbnQoKVxyXG5dO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUm91dGVyXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCByb3V0ZXIgPSB7XHJcbiAgcm91dGVzICA6IFtdLFxyXG4gIGFkZFJvdXRlOiBmdW5jdGlvbiAobmFtZSwgcGF0dGVybiwgY29udHJvbGxlcikge1xyXG4gICAgdGhpcy5yb3V0ZXMucHVzaCh7IG5hbWUgOiBuYW1lLCBwYXRoIDogcGF0dGVybiwgY29udHJvbGVyIDogY29udHJvbGxlciB9KTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH0sXHJcbiAgZ2V0Um91dGU6IGZ1bmN0aW9uIChyb3V0ZSkge1xyXG4gICAgcmV0dXJuIHRoaXMucm91dGVzLndoZXJlKGZ1bmN0aW9uKHIpe1xyXG4gICAgICBsZXQgbWF0Y2ggPSByLnBhdGguZXhlYyhyb3V0ZSk7XHJcbiAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgIHIucGFyYW1zID0gbWF0Y2gubWFwKCBlID0+IGUgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbWF0Y2g7XHJcbiAgICB9KVswXTtcclxuICB9LFxyXG4gIG5hdmlnYXRlVG8gOiBmdW5jdGlvbiAocm91dGUpIHtcclxuICAgIHRoaXMuY3VycmVudCA9IHRoaXMuZ2V0Um91dGUocm91dGUpO1xyXG4gICAgbGV0IHVybCA9ICd7b3JpZ2lufXswfXsxfScuZm9ybWF0KCcvbm90YXMtYXBwLycsIHJvdXRlLCBsb2NhdGlvbik7XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIHJvdXRlLCB1cmwpO1xyXG4gICAgc2hvd0NvbnRlbnQoKTtcclxuICB9LFxyXG4gIG5vcm1hbGl6ZVBhdGggOiBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICByZXR1cm4gdXJsLnJlcGxhY2UoZG9jdW1lbnQuYmFzZVVSSSwgJycpO1xyXG4gIH0sXHJcbiAgc3luYyA6IGZ1bmN0aW9uKCl7XHJcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmdldFJvdXRlKHRoaXMubm9ybWFsaXplUGF0aCh3aW5kb3cubG9jYXRpb24uaHJlZikpO1xyXG4gICAgc2hvd0NvbnRlbnQoKTtcclxuICB9LFxyXG4gIGN1cnJlbnQgOiB7fVxyXG59O1xyXG5yb3V0ZXIuYWRkUm91dGUoJ2xpc3QnLCAgL2xpc3QkLywgICAgICAgICAgICBsaXN0UGFnZSlcclxuICAgICAgLmFkZFJvdXRlKCdhYm91dCcsIC9hYm91dCQvLCAgICAgICAgICAgYWJvdXRQYWdlKVxyXG4gICAgICAuYWRkUm91dGUoJ25vdGUnLCAgL25vdGUkLywgICAgICAgICAgICBub3RlUGFnZSlcclxuICAgICAgLmFkZFJvdXRlKCdub3RlJywgIC9ub3RlXFwvKFxcZHsxM30pJC8sICBub3RlUGFnZSlcclxuICAgICAgLmFkZFJvdXRlKCdlbC10aWVtcG8nLCAgL2VsLXRpZW1wbyQvLCAgZWxUaWVtcG9QYWdlKVxyXG4gICAgICAuYWRkUm91dGUoJycsICAgICAgLyQvLCAgICAgICAgICAgICAgICBob21lUGFnZSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSW5pdCBBcHBcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbihmdW5jdGlvbigpe1xyXG5cclxuICBjb25zdCByb290ID0gcG9sLiQoJ2FwcENvbnRlbnQnKTtcclxuICBjb21wb25lbnRzLmZvckVhY2goIGMgPT4ge1xyXG4gICAgaWYoYy5pbml0KSBjLmluaXQocm9vdCk7XHJcbiAgICByb290LmFwcGVuZENoaWxkKGMucmVuZGVyKHJvb3QpKTtcclxuICAgIGlmKGMubW91bnRlZCkgYy5tb3VudGVkKHJvb3QpOyBcclxuICB9KTtcclxuXHJcbiAgcG9sLiQoJ1tyb3V0ZS1saW5rXScpXHJcbiAgICAgLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5vbmNsaWNrID0gZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICBsZXQgcm91dGUgPSByb3V0ZXIubm9ybWFsaXplUGF0aChlLnRhcmdldC5ocmVmKTtcclxuICAgICAgICAgIGlmIChyb3V0ZXIuY3VycmVudCAhPSByb3V0ZSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIHJvdXRlci5uYXZpZ2F0ZVRvKHJvdXRlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ICBcclxuICAgICB9KTtcclxuXHJcbn0pKCk7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTeW5jIGNvbnRlbnRcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IGNvbnRhaW5lciA9IHBvbC4kKCdhcHAtY29udGVudC1jb250YWluZXInKTtcclxubGV0IGN1cnJlbnRWaWV3O1xyXG5mdW5jdGlvbiBzaG93Q29udGVudCgpe1xyXG4gIGxldCB2aWV3X3JlZiA9IHJvdXRlci5jdXJyZW50LmNvbnRyb2xlcjtcclxuICBpZighY3VycmVudFZpZXcgfHwgY3VycmVudFZpZXcgIT0gdmlld19yZWYpIHtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJzsgICAgXHJcbiAgICBjdXJyZW50VmlldyA9IHZpZXdfcmVmO1xyXG4gICAgbGV0IHZpZXdfaW5zdGFuY2UgPSBjdXJyZW50Vmlldyh7cm91dGVyfSk7XHJcbiAgICBpZih2aWV3X2luc3RhbmNlLmluaXQpIHZpZXdfaW5zdGFuY2UuaW5pdCgpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHZpZXdfaW5zdGFuY2UucmVuZGVyKCkpO1xyXG4gICAgaWYodmlld19pbnN0YW5jZS5tb3VudGVkKSB2aWV3X2luc3RhbmNlLm1vdW50ZWQoY29udGFpbmVyKTtcclxuICAgIHB1YnN1Yi5wdWJsaXNoKCd2aWV3LmNoYW5nZScsIHJvdXRlci5jdXJyZW50KTtcclxuICB9XHJcblxyXG59XHJcblxyXG5yb3V0ZXIuc3luYygpO1xyXG5cclxud2luZG93Lm9ucG9wc3RhdGUgPSBmdW5jdGlvbigpe1xyXG4gIHJvdXRlci5zeW5jKCk7XHJcbn1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNlcnZpY2VXb3JrZXJcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG5cclxuICBpZignc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKXtcclxuICAgIHRyeSB7XHJcbiAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNlV29ya2VyLmpzJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSBXb3JrZXIgUmVnaXN0ZXJlZFwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSBXb3JrZXIgUmVnaXN0cmF0aW9uIEZhaWxlZFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59KTtcclxuIiwi77u/aW1wb3J0IHBvbCBmcm9tIFwiLi9tYXBhLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYldyYXBwZXJTZXJ2aWNle1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLmRibmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmRiID0gJyc7XHJcbiAgfVxyXG5cclxuICBvcGVuRGIoKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgbGV0IHJlcXVlc3QgPSB3aW5kb3cuaW5kZXhlZERCLm9wZW4odGhpcy5kYm5hbWUsIDEpO1xyXG5cclxuXHQgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSAoZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGIgPSBlLnRhcmdldC5yZXN1bHQ7XHJcblx0XHQgICAgcmVzb2x2ZSh0aGlzLmRiKTtcclxuXHQgICAgfTtcclxuXHJcbiAgICAgIHJlcXVlc3Qub25lcnJvciA9IGUgPT4geyAgXHJcbiAgICAgICAgcmVqZWN0KCdFcnJvcicpO1xyXG4gICAgICB9O1xyXG5cdFxyXG5cdCAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9IChlKSA9PiB7XHJcblx0XHQgICAgdGhpcy5kYiA9IGUudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgaWYodGhpcy5kYi5vYmplY3RTdG9yZU5hbWVzICYmIHRoaXMuZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhcIm5vdGFzXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGIuZGVsZXRlT2JqZWN0U3RvcmUoXCJub3Rhc1wiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN0b3JlID0gdGhpcy5kYi5jcmVhdGVPYmplY3RTdG9yZShcIm5vdGFzXCIsIHsga2V5UGF0aCA6IFwia2V5XCIgfSk7ICAgICAgIFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWFkQWxsKG5hbWUpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHZhciBfX2l0ZW1zID0gW107XHJcbiAgICAgIHRoaXMuZGJcclxuICAgICAgICAgIC50cmFuc2FjdGlvbihuYW1lLCBcInJlYWRvbmx5XCIpXHJcbiAgICAgICAgICAub2JqZWN0U3RvcmUobmFtZSlcclxuICAgICAgICAgIC5vcGVuQ3Vyc29yKElEQktleVJhbmdlLmxvd2VyQm91bmQoMCkpXHJcbiAgICAgICAgICAub25zdWNjZXNzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBfX2N1cnNvciA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgICAgIGlmKF9fY3Vyc29yKSB7XHJcbiAgICAgICAgICAgICAgX19pdGVtcy5wdXNoKF9fY3Vyc29yLnZhbHVlKTtcclxuICAgICAgICAgICAgICBfX2N1cnNvci5jb250aW51ZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoX19pdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNhdmUoc3RvcmUsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIChmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgIHJlc3VsdC5vbnN1Y2Nlc3MgPSBldmVudCA9PiB7IHJlc29sdmUodmFsdWUpOyB9O1xyXG4gICAgICAgIHJlc3VsdC5vbmVycm9yICAgPSBlcnJvciA9PiB7IGNvbnNvbGUubG9nKGVycm9yKTsgfTtcclxuICAgICAgfSkodGhpcy5kYlxyXG4gICAgICAgICAgICAgLnRyYW5zYWN0aW9uKHN0b3JlLCBcInJlYWR3cml0ZVwiKVxyXG4gICAgICAgICAgICAgLm9iamVjdFN0b3JlKHN0b3JlKVxyXG4gICAgICAgICAgICAgLnB1dCh2YWx1ZSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGUoc3RvcmUsIGtleSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAoZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgICByZXN1bHQub25zdWNjZXNzID0gZXZlbnQgPT4geyByZXNvbHZlKCk7IH07XHJcbiAgICAgICAgcmVzdWx0Lm9uZXJyb3IgICA9IGVycm9yID0+IHsgY29uc29sZS5sb2coZXJyb3IpOyB9O1xyXG4gICAgICB9KSh0aGlzLmRiXHJcbiAgICAgICAgICAgICAudHJhbnNhY3Rpb24oc3RvcmUsIFwicmVhZHdyaXRlXCIpXHJcbiAgICAgICAgICAgICAub2JqZWN0U3RvcmUoc3RvcmUpXHJcbiAgICAgICAgICAgICAuZGVsZXRlKGtleSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWFkT25lKHN0b3JlLCBrZXkpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHtcclxuICAgICAgKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgcmVzdWx0Lm9uc3VjY2VzcyA9IGV2ZW50ID0+IHsgcmVzb2x2ZShldmVudC50YXJnZXQucmVzdWx0KTsgfTtcclxuICAgICAgICByZXN1bHQub25lcnJvciAgID0gZXJyb3IgPT4geyBjb25zb2xlLmxvZyhlcnJvcik7fTtcclxuICAgICAgfSkodGhpcy5kYlxyXG4gICAgICAgICAgICAgLnRyYW5zYWN0aW9uKHN0b3JlLCBcInJlYWR3cml0ZVwiKVxyXG4gICAgICAgICAgICAgLm9iamVjdFN0b3JlKHN0b3JlKVxyXG4gICAgICAgICAgICAgLmdldChrZXkpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiIsIlxyXG5cclxubGV0IF9fbW9kdWxlID0ge307XHJcbihmdW5jdGlvbihtb2R1bGUsIG5hbWUpe1xyXG5cclxuICB2YXIgX21vZHVsZSA9ICBtb2R1bGVbbmFtZV0gPSB7IGFwcGx5IDogZnVuY3Rpb24gYXBwbHkobywgYywgZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQpIGFwcGx5KG8sIGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvICYmIGMgJiYgdHlwZW9mIGMgPT0gJ29iamVjdCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBjKXsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY1twXSA9PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHkob1twXSwgY1twXSApICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb1twXSA9IGNbcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTsgICAgICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gVXRpbHNcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKGZ1bmN0aW9uKG1vZHVsZSl7XHJcbiAgICBtb2R1bGUuYXBwbHkobW9kdWxlLHsgXHJcbiAgICAgIHRvQXJyYXkgICAgIDogZnVuY3Rpb24odil7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHYpOyB9LFxyXG4gICAgICBpc051bGwgICAgICA6IGZ1bmN0aW9uKHYpe3JldHVybiB2ID09PSBudWxsOyB9LFxyXG4gICAgICBpc0FycmF5ICAgICA6IGZ1bmN0aW9uKHYpe3JldHVybiBBcnJheS5pc0FycmF5KHYpOyB9LFxyXG4gICAgICBpc1N0cmluZyAgICA6IGZ1bmN0aW9uKHYpe3JldHVybiB0eXBlb2YgdiA9PSAnc3RyaW5nJzt9LFxyXG4gICAgICBpc0Jvb2xlYW4gICA6IGZ1bmN0aW9uKHYpe3JldHVybiB0eXBlb2YgdiA9PSAnYm9vbGVhbic7fSxcclxuICAgICAgaXNOdW1iZXIgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdHlwZW9mIHYgPT0gJ251bWJlcic7fSxcclxuICAgICAgaXNGdW5jdGlvbiAgOiBmdW5jdGlvbih2KXtyZXR1cm4gdHlwZW9mIHYgPT0gJ2Z1bmN0aW9uJzt9LFxyXG4gICAgICBpc09iamVjdCAgICA6IGZ1bmN0aW9uKHYpe3JldHVybiB2ICYmIHR5cGVvZiB2ID09ICdvYmplY3QnO30sXHJcbiAgICAgIGNsb25lICAgICAgIDogZnVuY3Rpb24obykge1xyXG4gICAgICAgIGlmKG1vZHVsZS5pc0FycmF5KG8pKSAgICAgICAgICAgICByZXR1cm4gby5zbGljZSgwKTtcclxuICAgICAgICBpZihtb2R1bGUuaXNPYmplY3QobykgJiYgby5jbG9uZSkgcmV0dXJuIG8uY2xvbmUoKTtcclxuICAgICAgICBpZihtb2R1bGUuaXNPYmplY3QobykpeyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG8pLnJlZHVjZSggZnVuY3Rpb24oYSwgayl7XHJcbiAgICAgICAgICAgIGFba10gPSBtb2R1bGUuY2xvbmUob1trXSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgICAgfSwge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbztcclxuICAgICAgfSwgICAgICAgIFxyXG4gICAgICBqb2luICAgICAgICA6IGZ1bmN0aW9uKGl0ZW1zLCBwcm9wZXJ0eSwgc2VwYXJhdG9yKXtcclxuICAgICAgICByZXR1cm4gaXRlbXMucmVkdWNlKGZ1bmN0aW9uKGEsIG8peyByZXR1cm4gYS5hcHBlbmQob1twcm9wZXJ0eSB8fCAnaWQnXSk7IH0sIFtdKVxyXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJy0nIDogKHNlcGFyYXRvciB8fCAnJykpOyBcclxuICAgICAgfSxcclxuICAgICAgc3RyaW5nQnVpbGRlciA6IGZ1bmN0aW9uKHMpe1xyXG4gICAgICAgICAgcmV0dXJuIHsgdmFsdWUgICAgICA6IHMgfHwgJycsXHJcbiAgICAgICAgICAgICAgICAgICBhcHBlbmQgICAgIDogZnVuY3Rpb24ocyl7IHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlICsgczsgcmV0dXJuIHRoaXM7fSxcclxuICAgICAgICAgICAgICAgICAgIGFwcGVuZExpbmUgOiBmdW5jdGlvbihzKXsgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUgKyAocyB8fCAnJykgKyAnXFxuJzsgcmV0dXJuIHRoaXM7fX1cclxuICAgICAgfSxcclxuICAgICAgYnVpbGQgOiBmdW5jdGlvbih0YWdOYW1lLCBvKXtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG1vZHVsZS5pc1N0cmluZyhvKSA/IHsgaW5uZXJIVE1MIDogbyB9IDogbztcclxuICAgICAgICByZXR1cm4gX21vZHVsZS5hcHBseShkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpLCBvcHRpb25zKTtcclxuICAgICAgfSxcclxuICAgICAgJCA6IGZ1bmN0aW9uKGUsIGNvbnRyb2wpeyBcclxuICAgICAgICByZXR1cm4gKHR5cGVvZiBlID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlKSB8fCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUudG9BcnJheSgoY29udHJvbCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChlKSB8fCBbXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlO1xyXG4gICAgICB9IFxyXG4gICAgfSk7XHJcbiAgfShfbW9kdWxlKSk7XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFN0cmluZ3NcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKGZ1bmN0aW9uKG1vZHVsZSl7XHJcbiAgICBtb2R1bGUuYXBwbHkoU3RyaW5nLCB7XHJcbiAgICAgIHN0cmluZ0J1aWxkZXIgOiBtb2R1bGUuc3RyaW5nQnVpbGRlcixcclxuICAgICAgbGVmdFBhZCAgICAgICA6IGZ1bmN0aW9uICh2YWwsIHNpemUsIGNoKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICcnICsgdmFsO1xyXG4gICAgICAgIGlmIChjaCA9PT0gbnVsbCB8fCBjaCA9PT0gdW5kZWZpbmVkIHx8IGNoID09PSAnJykgY2ggPSAnICc7ICAgICAgICAgICAgXHJcbiAgICAgICAgd2hpbGUgKHJlc3VsdC5sZW5ndGggPCBzaXplKSByZXN1bHQgPSBjaCArIHJlc3VsdDsgICAgICAgICAgICBcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9LFxyXG4gICAgICB0cmltVmFsdWVzIDogZnVuY3Rpb24gKHZhbHVlcyl7IHJldHVybiB2YWx1ZXMubWFwKGZ1bmN0aW9uKHMpe3JldHVybiBzLnRyaW0oKTt9KTt9XHJcbiAgICB9KTtcclxuICAgIG1vZHVsZS5hcHBseShTdHJpbmcucHJvdG90eXBlLCB7XHJcbiAgICAgIHJlcGxhY2VBbGwgIDogZnVuY3Rpb24ocGF0dGVybiwgcmVwbGFjZW1lbnQpIHsgcmV0dXJuIHRoaXMuc3BsaXQocGF0dGVybikuam9pbihyZXBsYWNlbWVudCk7IH0sXHJcbiAgICAgIHJlcGVhdCAgICAgIDogU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQgICAgIHx8IGZ1bmN0aW9uKGEpIHsgcmV0dXJuIG5ldyBBcnJheShhICsgMSkuam9pbih0aGlzKTsgfSxcclxuICAgICAgY29udGFpbnMgICAgOiBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzICAgfHwgZnVuY3Rpb24odCwgc3RhcnQpIHsgcmV0dXJuIHRoaXMuaW5kZXhPZih0KSA+PSAoc3RhcnQgfHwgMCk7IH0sXHJcbiAgICAgIHN0YXJ0c1dpdGggIDogU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoIHx8IGZ1bmN0aW9uKHQpeyByZXR1cm4gdGhpcy5pbmRleE9mKHQpID09IDA7IH0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgdG9GbG9hdCAgICAgOiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy50cmltKCkucmVwbGFjZUFsbCgnLicsICcnKS5yZXBsYWNlQWxsKCcsJywgJy4nKSB9LFxyXG4gICAgICBmaXhEYXRlICAgICA6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLnNwbGl0KCcgJylbMF07IH0sXHJcbiAgICAgIGZpeFRpbWUgICAgIDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuc3BsaXQoJyAnKVsxXTsgfSxcclxuICAgICAgZml4WWVhciAgICAgOiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5maXhEYXRlKCkuc3BsaXQoJy8nKVsyXTt9LFxyXG4gICAgICB0cmltU2Vjb25kcyA6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLnNwbGl0KCc6JylbMF0gKyAnOicgKyB0aGlzLnNwbGl0KCc6JylbMV0gOyB9LFxyXG4gICAgICBwYWRkaW5nTGVmdCA6IGZ1bmN0aW9uKHBhZGRpbmdWYWx1ZSl7IHJldHVybiAocGFkZGluZ1ZhbHVlICsgdGhpcykuc2xpY2UoLXBhZGRpbmdWYWx1ZS5sZW5ndGgpOyB9LFxyXG4gICAgICBmb3JtYXQgICAgICA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIF9fYXJnICAgICA9IGFyZ3VtZW50cztcclxuICAgICAgICB2YXIgX19jb250ZXh0ID0gX19hcmdbX19hcmcubGVuZ3RoIC0gMV0gfHwgc2VsZjsgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC9cXHsoXFxkK3xbXntdKylcXH0vZywgZnVuY3Rpb24obSwga2V5KXtcclxuICAgICAgICAgIGlmKGtleS5pbmRleE9mKCc6JykgPiAwKXtcclxuICAgICAgICAgICAgdmFyIF9fZm4gPSBrZXkuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgX19mblswXSAgPSBtb2R1bGUudGVtcGxhdGVzLmdldFZhbHVlKF9fZm5bMF0sIF9fY29udGV4dCk7XHJcbiAgICAgICAgICAgIF9fZm5bMV0gID0gbW9kdWxlLnRlbXBsYXRlcy5nZXRWYWx1ZShfX2ZuWzFdLCBfX2NvbnRleHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gX19mblswXShfX2ZuWzFdLCBfX2NvbnRleHQpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIC9eXFxkKyQvLnRlc3Qoa2V5KSA/IF9fYXJnW2tleV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICh0eXBlb2YgX19jb250ZXh0W2tleV0gPT09IFwidW5kZWZpbmVkXCIpID8gbW9kdWxlLnRlbXBsYXRlcy5nZXRWYWx1ZShrZXksIF9fY29udGV4dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9fY29udGV4dFtrZXldOyBcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7ICAgICAgXHJcbiAgfShfbW9kdWxlKSk7ICAgICAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIEFycmF5XHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgICBcclxuICAoZnVuY3Rpb24obW9kdWxlKXtcclxuICAgIG1vZHVsZS5hcHBseShBcnJheS5wcm90b3R5cGUsIHsgICAgICAgICAgXHJcbiAgICAgIHJlbW92ZSAgIDogZnVuY3Rpb24obykge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXhPZihvKTtcclxuICAgICAgICBpZiAoaW5kZXggIT0gLTEpIHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfSxcclxuICAgICAgYWRkICAgICAgOiBmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgdGhpcy5wdXNoKG8pO1xyXG4gICAgICAgIHJldHVybiBvO1xyXG4gICAgICB9LFxyXG4gICAgICBhcHBlbmQgICA6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICB0aGlzLnB1c2gobyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW0gICAgIDogZnVuY3Rpb24ocHJvcE5hbWUsIHZhbHVlLCBkZWYpe1xyXG4gICAgICAgIHJldHVybiBhcmd1bWVudHM9PTEgPyB0aGlzLmZpbHRlciggZnVuY3Rpb24odil7cmV0dXJuIHZbJ2lkJ10gPT0gcHJvcE5hbWUgfHwgdlsnX2lkJ10gPT0gcHJvcE5hbWV9KVswXSB8fCBkZWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5maWx0ZXIoIGZ1bmN0aW9uKHYpe3JldHVybiB2W3Byb3BOYW1lXSA9PSB2YWx1ZX0pWzBdIHx8IGRlZjtcclxuICAgICAgfSxcclxuICAgICAgY29udGFpbnMgOiBmdW5jdGlvbihwcm9wTmFtZSx2YWx1ZSl7IHJldHVybiB0aGlzLml0ZW0ocHJvcE5hbWUsdmFsdWUpOyB9LFxyXG4gICAgICBsYXN0SXRlbSA6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpc1t0aGlzLmxlbmd0aCAtIDFdOyB9LFxyXG4gICAgICBzZWxlY3QgICA6IGZ1bmN0aW9uKHNlbnRlbmNlKXsgcmV0dXJuIHRoaXMubWFwKHNlbnRlbmNlKSB9LCAgIFxyXG4gICAgICB3aGVyZSAgICA6IGZ1bmN0aW9uKHNlbnRlbmNlKXsgXHJcbiAgICAgICAgaWYobW9kdWxlLmlzRnVuY3Rpb24oc2VudGVuY2UpKSByZXR1cm4gdGhpcy5maWx0ZXIoc2VudGVuY2UpO1xyXG4gICAgICAgIGlmKG1vZHVsZS5pc09iamVjdChzZW50ZW5jZSkpe1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKG5ldyBGdW5jdGlvbignYScsIE9iamVjdC5rZXlzKHNlbnRlbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24oYSwgcHJvcG5hbWUsIGkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSArIChpID4gMCA/ICcgJiYgJyA6ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArICAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX192YWx1ZSA9IHNlbnRlbmNlW3Byb3BuYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihfX3ZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSByZXR1cm4gJ3sxfS50ZXN0KGEuezB9KScuZm9ybWF0KHByb3BuYW1lLCBfX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihtb2R1bGUuaXNTdHJpbmcoX192YWx1ZSkpIHJldHVybiAnYS57MH0gPT09IFxcJ3sxfVxcJycuZm9ybWF0KHByb3BuYW1lLCBfX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2EuezB9ID09PSB7MX0nLmZvcm1hdChwcm9wbmFtZSwgX192YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KCkpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICdyZXR1cm4gJykpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNvcnRCeSAgICAgIDogZnVuY3Rpb24ocHJvcG5hbWUsIGRlc2Mpe1xyXG4gICAgICAgIHZhciBfX29yZGVyID0gW107XHJcbiAgICAgICAgdmFyIF9fbmFtZXMgPSBwcm9wbmFtZS5zcGxpdCgnLCcpLm1hcCggZnVuY3Rpb24odG9rZW4saSl7IFxyXG4gICAgICAgICAgdmFyIF9fcGFpciA9IHRva2VuLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICBfX29yZGVyW2ldID0gKF9fcGFpclsxXSAmJiAoX19wYWlyWzFdLnRvVXBwZXJDYXNlKCk9PSdERVNDJykpID8gLTEgOiAxOyAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuIF9fcGFpclswXTsgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgX19vcmRlclswXSA9IChkZXNjID8gLTEgOiAxKVxyXG4gICAgICAgIHRoaXMuc29ydChmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IDA7ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX19mbiA9IGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIF9feCA9IGFbX19uYW1lc1tpXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgX195ID0gYltfX25hbWVzW2ldXTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKF9feCA8IF9feSkgcmV0dXJuIC0xICogX19vcmRlcltpXTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKF9feCA+IF9feSkgcmV0dXJuICAxICogX19vcmRlcltpXTtcclxuICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKGkgPCBfX25hbWVzLmxlbmd0aCkgcmV0dXJuIF9fZm4oYSxiKTsgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDsgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZm4oYSxiKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzOyAgICBcclxuICAgICAgfSxcclxuICAgICAgb3JkZXJCeSAgICAgOiBmdW5jdGlvbihzZW50ZW5jZSl7XHJcbiAgICAgICAgdmFyIF9fc2VudGVuY2UgPSBzZW50ZW5jZTsgICAgXHJcbiAgICAgICAgaWYobW9kdWxlLmlzU3RyaW5nKHNlbnRlbmNlKSkgX19zZW50ZW5jZSA9IGZ1bmN0aW9uKGEpeyByZXR1cm4gYVtzZW50ZW5jZV07IH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGV9KVxyXG4gICAgICAgICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IF9fc2VudGVuY2UoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IF9fc2VudGVuY2UoYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCh4IDwgeSkgPyAtMSA6ICgoeCA+IHkpID8gMSA6IDApKTtcclxuICAgICAgICAgICAgICAgICAgIH0pOyAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIGRpc3RpbmN0ICAgIDogZnVuY3Rpb24oc2VudGVuY2UpIHtcclxuICAgICAgICB2YXIgX19zZW50ZW5jZSA9IHNlbnRlbmNlOyAgICBcclxuICAgICAgICBpZihtb2R1bGUuaXNTdHJpbmcoc2VudGVuY2UpKSBfX3NlbnRlbmNlID0gZnVuY3Rpb24oYSl7IHJldHVybiBhW3NlbnRlbmNlXTsgfVxyXG4gICAgICAgIHZhciByID0gW107XHJcbiAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgdmFyIF92YWx1ZSA9IF9fc2VudGVuY2UoaXRlbSk7XHJcbiAgICAgICAgICBpZihyLmluZGV4T2YoX3ZhbHVlKT09LTEpIHIucHVzaChfdmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgICB9LFxyXG4gICAgICBncm91cEJ5IDogZnVuY3Rpb24ocHJvcCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVkdWNlKGZ1bmN0aW9uKGdyb3VwcywgaXRlbSkge1xyXG4gICAgICAgICAgdmFyIHZhbCA9IGl0ZW1bcHJvcF07XHJcbiAgICAgICAgICAoZ3JvdXBzW3ZhbF0gPSBncm91cHNbdmFsXSB8fCBbXSkucHVzaChpdGVtKTtcclxuICAgICAgICAgIHJldHVybiBncm91cHNcclxuICAgICAgICB9LCB7fSlcclxuICAgICAgfSxcclxuICAgICAgdG9EaWN0aW9uYXJ5IDogZnVuY3Rpb24ocHJvcCwgdmFsdWUpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZHVjZShmdW5jdGlvbihhLCBkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW2RbcHJvcF1dID0gdmFsdWUgPyBkW3ZhbHVlXSA6IGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHt9KTsgIFxyXG4gICAgICB9XHJcbiAgICB9KTsgICAgICAgXHJcbiAgfShfbW9kdWxlKSk7XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBUZW1wbGF0ZXNcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKGZ1bmN0aW9uKG1vZHVsZSl7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VmFsdWUoa2V5LCBzY29wZSkgeyAgICAgICAgXHJcbiAgICAgIHJldHVybiBrZXkuc3BsaXQoL1xcLnxcXFt8XFxdLylcclxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoIGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICAgICAgICAgICAgICBpZiAoYiA9PT0gJycpIHJldHVybiBhO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gYVtiXSA9PT0gdW5kZWZpbmVkID8gKGEgPT09IHNlbGYgPyAnJyA6IHNlbGYpIDogYVtiXTtcclxuICAgICAgICAgICAgICAgIH0sIHNjb3BlIHx8IHNlbGYgKTsgICAgXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgZnVuY3Rpb24gbWVyZ2UodGVtcGxhdGUsIG8sIGtleSkge1xyXG4gICAgICB2YXIgX19yZXN1bHQgPSB0ZW1wbGF0ZS5yZXBsYWNlKC97KFtee10rKT99L2csIGZ1bmN0aW9uIChtLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKGtleS5pbmRleE9mKCc6JykgPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fZm4gPSBrZXkuc3BsaXQoJzonKTsgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX2ZuWzBdICA9IGdldFZhbHVlKF9fZm5bMF0sIG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX2ZuWzFdICA9IGdldFZhbHVlKF9fZm5bMV0sIG8pOyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19mblswXShfX2ZuWzFdLCBvKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhciByICAgPSBnZXRWYWx1ZShrZXksIG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIF9fayA9IChrZXkuY29udGFpbnMoJy4nKSA/ICcnIDogJ28uJykgKyBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChyKSA9PSAnZnVuY3Rpb24nKXsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHIobyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHI7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgKHIpID09ICdmdW5jdGlvbicgPyByKG8pIDogcjtcclxuICAgICAgICAgICAgICAgICAgICB9KTsgICAgIFxyXG4gICAgICByZXR1cm4gX19yZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlsbFRlbXBsYXRlKGUsIHNjb3BlKSB7XHJcbiAgICAgIHZhciBfcm9vdCA9IG1vZHVsZS4kKGUpO1xyXG4gICAgICB2YXIgX2VsZW1lbnRzID0gbW9kdWxlLiQoJ1t4YmluZF0nLCBfcm9vdCk7IFxyXG4gICAgICBpZiAoX3Jvb3QuYXR0cmlidXRlcy54YmluZCkgX2VsZW1lbnRzLnB1c2goX3Jvb3QpO1xyXG4gICAgICBfZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBTdHJpbmcudHJpbVZhbHVlcyhjaGlsZC5hdHRyaWJ1dGVzLnhiaW5kLnZhbHVlLnNwbGl0KCc7JykpLmZvckVhY2goZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgICBpZiAodG9rZW4gPT09ICcnKSByZXR1cm47XHJcbiAgICAgICAgICB2YXIgX3Rva2VucyA9IFN0cmluZy50cmltVmFsdWVzKHRva2VuLnNwbGl0KCc6JykpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgdmFyIF9wYXJhbXMgPSBTdHJpbmcudHJpbVZhbHVlcyhfdG9rZW5zWzFdLnNwbGl0KC9cXHN8XFwsLykpO1xyXG4gICAgICAgICAgdmFyIF92YWx1ZSA9IGdldFZhbHVlKF9wYXJhbXNbMF0sIHNjb3BlKTtcclxuICAgICAgICAgIGlmICh0eXBlb2YgKF92YWx1ZSkgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB2YXIgX2FyZ3MgPSBfcGFyYW1zLnNsaWNlKDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHhiaW5kPVwidGV4dENvbnRlbnQ6RGF0YS5mblRlc3QgQE90aGVyLEEsNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEucHVzaChwLmNoYXJBdCgwKSA9PSAnQCcgPyBnZXRWYWx1ZShwLnNsaWNlKDEpLCBzY29wZSkgOiBwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbc2NvcGUsIGNoaWxkXSk7XHJcbiAgICAgICAgICAgIF92YWx1ZSA9IF92YWx1ZS5hcHBseShzY29wZSwgX2FyZ3MpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChfcGFyYW1zWzFdKSB7XHJcbiAgICAgICAgICAgIHZhciBfZnVuYyA9IGdldFZhbHVlKF9wYXJhbXNbMV0sIHNjb3BlKTtcclxuICAgICAgICAgICAgX3ZhbHVlID0gX2Z1bmMoX3ZhbHVlLCBfcGFyYW1zWzJdLCBzY29wZSwgY2hpbGQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2hpbGRbX3Rva2Vuc1swXV0gPSBfdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBleGVjdXRlVGVtcGxhdGUoZSwgdmFsdWVzLCBkb20pIHtcclxuICAgICAgdmFyIF90ZW1wbGF0ZSA9IG1vZHVsZS4kKGUpO1xyXG4gICAgICB2YXIgX3Jlc3VsdCAgID0gdmFsdWVzLnJlZHVjZSggZnVuY3Rpb24oYSwgdiwgaSl7XHJcbiAgICAgICAgdmFyIF9ub2RlID0geyBpbmRleCA6IGksXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhICA6IHYsXHJcbiAgICAgICAgICAgICAgICAgICAgICBub2RlICA6IGZpbGxUZW1wbGF0ZShfdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpLCB2KSB9O1xyXG4gICAgICAgIGEubm9kZXMucHVzaChfbm9kZSk7XHJcbiAgICAgICAgaWYgKCFkb20pIGEuaHRtbC5wdXNoKF9ub2RlLm5vZGUub3V0ZXJIVE1MLnJlcGxhY2UoL3hiaW5kPVwiW15cIl0qXCIvZywgJycpKTtcclxuICAgICAgICByZXR1cm4gYTsgXHJcbiAgICAgIH0sIHsgbm9kZXMgOiBbXSwgaHRtbCA6IFtdIH0pO1xyXG4gICAgICByZXR1cm4gZG9tID8gX3Jlc3VsdC5ub2RlcyA6IF9yZXN1bHQuaHRtbC5qb2luKCcnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbW9kdWxlLnRlbXBsYXRlcyA9IHsgZ2V0VmFsdWUgIDogZ2V0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBtZXJnZSAgICAgOiBtZXJnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGV4ZWN1dGUgICA6IGV4ZWN1dGVUZW1wbGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGwgICAgICA6IGZpbGxUZW1wbGF0ZSB9O1xyXG5cclxuICB9KF9tb2R1bGUpKTtcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIEFqYXhcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKGZ1bmN0aW9uKG1vZHVsZSl7ICBcclxuICAgIG1vZHVsZS5hamF4ID0ge307XHJcbiAgICBtb2R1bGUuYXBwbHkobW9kdWxlLmFqYXgsIHtcclxuICAgICAgZ2V0ICA6IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIC8vdXJsICs9ICh1cmwuY29udGFpbnMoJz8nKSA/ICcmbXM9JyA6ICc/bXM9JykgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgIHZhciB4bWwgPSB0aGlzLmNyZWF0ZVhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICB4bWwub3BlbignR0VUJywgdXJsLCB0cnVlKTtcclxuICAgICAgICAgIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdJZi1Nb2RpZmllZC1TaW5jZScsICdUaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVCcpO1xyXG4gICAgICAgICAgeG1sLnNldFJlcXVlc3RIZWFkZXIoJ0NhY2hlLUNvbnRyb2wnLCAnbm8tY2FjaGUnKTtcclxuICAgICAgICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7IGlmICh4bWwucmVhZHlTdGF0ZSA9PSA0KSByZXNvbHZlKHhtbC5yZXNwb25zZVRleHQpIH07XHJcbiAgICAgICAgICB4bWwub25lcnJvciA9IGZ1bmN0aW9uKGUpIHsgcmVqZWN0KGUpOyB9O1xyXG4gICAgICAgICAgeG1sLnNlbmQobnVsbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9LFxyXG4gICAgICBwb3N0IDogZnVuY3Rpb24odXJsLCBwYXJhbXMsIGNhbGxCYWNrKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgdmFyIHhtbCA9IHRoaXMuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4bWwub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeG1sLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkgeyBpZiAoeG1sLnJlYWR5U3RhdGUgPT0gNCkgY2FsbEJhY2soeG1sLnJlc3BvbnNlVGV4dCkgfTtcclxuICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldDpJU08tODg1OS0xJyk7XHJcbiAgICAgICAgeG1sLnNlbmQocGFyYW1zKTtcclxuICAgICAgfSxcclxuICAgICAgY2FsbFdlYk1ldGhvZCA6IGZ1bmN0aW9uKHVybCwgcGFyYW1zLCBjYWxsQmFjaykge1xyXG4gICAgICAgIHZhciB4bWwgPSB0aGlzLmNyZWF0ZVhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeG1sLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpeyBpZiAoeG1sLnJlYWR5U3RhdGUgPT0gNCkgY2FsbEJhY2soeG1sLnJlc3BvbnNlVGV4dCkgfTtcclxuICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnKTtcclxuICAgICAgICB4bWwuc2VuZChwYXJhbXMpO1xyXG4gICAgICB9LFxyXG4gICAgICBjcmVhdGVYTUxIdHRwUmVxdWVzdCA6IGZ1bmN0aW9uKCl7IHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgfVxyXG4gICAgfSk7ICBcclxuICB9KF9tb2R1bGUpKTsgXHJcbiAgICAgIFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBUYWJibHlcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgKGZ1bmN0aW9uIChtb2R1bGUpe1xyXG4gICAgICBcclxuICAgIHZhciBfX2NvbnRleHQ7XHJcblxyXG4gICAgZnVuY3Rpb24gX19FeGVjdXRlQ29kZShjb2RlKXtcclxuXHJcbiAgICAgIF9fY29udGV4dCA9IHsgc2VjdGlvbnMgOiBbXSwgZ3JvdXBzIDogW10sIGRldGFpbHMgOiBbXX07XHJcblxyXG4gICAgICB2YXIgX19jdXI7XHJcbiAgICAgIHZhciBfX2Z1bmMgICAgICAgPSAnJztcclxuICAgICAgdmFyIF9fZnVuY0JvZHkgICA9ICcnO1xyXG4gICAgICB2YXIgX19zZXRTdGF0ZSAgPSBmYWxzZTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIF9fZ2V0KHZhbHVlKXtcclxuICAgICAgICBpZih2YWx1ZSAmJiB2YWx1ZS50cmltKCkuc3RhcnRzV2l0aCgnQCcpKXtcclxuICAgICAgICAgIHJldHVybiBfX2NvbnRleHRbdmFsdWUudHJpbSgpLnNwbGl0KCdAJylbMV0udHJpbSgpXSB8fCAnJztcclxuICAgICAgICB9ZWxzZSBpZih2YWx1ZSl7XHJcbiAgICAgICAgICByZXR1cm4gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH0gIFxyXG5cclxuICAgICAgZnVuY3Rpb24gX19wYXJzZV9wcm9wZXJ0aWVzKHZhbHVlKXtcclxuICAgICAgICB2YXIgX19yZWcgICA9ICAvKFthLXpBLVowLTlfXFwtXSopXFxzKjpcXHMqKCdbXiddKid8W15cXHNdKikvZztcclxuICAgICAgICB2YXIgX19vICAgICA9IHt9O1xyXG4gICAgICAgIHZhciBfX21hdGNoID0gX19yZWcuZXhlYyh2YWx1ZSk7XHJcbiAgICAgICAgd2hpbGUgKF9fbWF0Y2ggIT0gbnVsbCkge1xyXG4gICAgICAgICAgX19vW19fbWF0Y2hbMV0udHJpbSgpXSA9IF9fZ2V0KF9fbWF0Y2hbMl0udHJpbSgpLnJlcGxhY2UoL14nKFteJ10qKSckL2csICckMScpKTtcclxuICAgICAgICAgIF9fbWF0Y2ggPSBfX3JlZy5leGVjKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9fb1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBfX3BhcnNlTGluZShsLCBvKXtcclxuICAgICAgICBpZighX19mdW5jICYmICFsLnRyaW0oKSkgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICB2YXIgX19rZXlzID0gL0RFRklORXwjfENSRUFURXxTRVR8RlVOQ1RJT058RU5ELztcclxuICAgICAgICBpZihfX2tleXMudGVzdChsKSl7XHJcbiAgICAgICAgICBpZigvXiMvLnRlc3QobCkpe1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXt9O1xyXG4gICAgICAgICAgfWVsc2UgaWYoL15TRVQgKFxcdy4qKS8udGVzdChsKSl7ICBcclxuICAgICAgICAgICAgdmFyIF9fdG9rZW5zID0gbC5tYXRjaCgvXlNFVCAoXFx3LiopJC8pO1xyXG4gICAgICAgICAgICBfX3NldFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgX19mdW5jICAgICAgPSBfX3Rva2Vuc1sxXS50cmltKCk7XHJcbiAgICAgICAgICAgIF9fZnVuY0JvZHkgID0gJyc7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe307XHJcbiAgICAgICAgICB9ZWxzZSBpZigvXkZVTkNUSU9OIChcXHcuKikvLnRlc3QobCkpeyAgXHJcbiAgICAgICAgICAgIHZhciBfX3Rva2VucyA9IGwubWF0Y2goL15GVU5DVElPTiAoXFx3LiopJC8pO1xyXG4gICAgICAgICAgICBfX3NldFN0YXRlICA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfX2Z1bmMgICAgICAgPSBfX3Rva2Vuc1sxXS50cmltKCk7XHJcbiAgICAgICAgICAgIF9fZnVuY0JvZHkgICA9ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXt9O1xyXG4gICAgICAgICAgfWVsc2UgaWYoL15FTkQvLnRlc3QobCkpeyAgICAgIFxyXG4gICAgICAgICAgICB2YXIgX19ib2R5ID0gX19mdW5jQm9keTtcclxuICAgICAgICAgICAgdmFyIF9fbmFtZSA9IF9fZnVuYztcclxuICAgICAgICAgICAgX19mdW5jID0gX19mdW5jQm9keSA9ICcnOyBcclxuICAgICAgICAgICAgaWYoX19zZXRTdGF0ZSl7XHJcbiAgICAgICAgICAgICAgX19zZXRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7IF9fY3VyW19fbmFtZV0gPSBfX2JvZHkudHJpbSgpOyB9XHJcbiAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpeyBjdHhbX19uYW1lXSA9IG5ldyBGdW5jdGlvbignY3R4JywgX19ib2R5KTsgfVxyXG4gICAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICB9ZWxzZSBpZigvXkRFRklORVxcc1xccyooXFx3LiopXFxzKj1cXHMqKC4qKSQvLnRlc3QobCkpe1xyXG4gICAgICAgICAgICB2YXIgX190b2tlbnMgPSBsLm1hdGNoKC9eREVGSU5FXFxzXFxzKihbYS16QS1aMC05X1xcLV0qKVxccyo9XFxzKiguKikkLyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyBcclxuICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gX190b2tlbnM7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7IGN0eFt0b2tlbnNbMV0udHJpbSgpXSA9IHRva2Vuc1syXS50cmltKCk7IH1cclxuICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgfWVsc2UgaWYoL15DUkVBVEVcXHNcXHMqKFxcdyopICguKikkLy50ZXN0KGwpKXtcclxuICAgICAgICAgICAgdmFyIF9fdG9rZW5zID0gbC5tYXRjaCgvXkNSRUFURVxcc1xccyooXFx3KikgKC4qKSQvKTtcclxuICAgICAgICAgICAgaWYoX190b2tlbnNbMV09PSdzZWN0aW9uJyl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IF9fdG9rZW5zO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7IFxyXG4gICAgICAgICAgICAgICAgICBjdHguc2VjdGlvbnMucHVzaChfX3BhcnNlX3Byb3BlcnRpZXModG9rZW5zWzJdKSk7IFxyXG4gICAgICAgICAgICAgICAgICBfX2N1ciA9IGN0eC5zZWN0aW9uc1tjdHguc2VjdGlvbnMubGVuZ3RoIC0gMV07fVxyXG4gICAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKF9fdG9rZW5zWzFdPT0nZ3JvdXAnKXtcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gX190b2tlbnM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXsgXHJcbiAgICAgICAgICAgICAgICAgIGN0eC5ncm91cHMucHVzaChfX3BhcnNlX3Byb3BlcnRpZXModG9rZW5zWzJdKSk7XHJcbiAgICAgICAgICAgICAgICAgIF9fY3VyID0gY3R4Lmdyb3Vwc1tjdHguZ3JvdXBzLmxlbmd0aCAtIDFdO31cclxuICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKF9fdG9rZW5zWzFdPT0nZGV0YWlsJyl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICAgICAgdmFyIHRva2VucyA9IF9fdG9rZW5zO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7XHJcbiAgICAgICAgICAgICAgICAgIGN0eC5kZXRhaWxzLnB1c2goX19wYXJzZV9wcm9wZXJ0aWVzKHRva2Vuc1syXSkpO1xyXG4gICAgICAgICAgICAgICAgICBfX2N1ciA9IGN0eC5kZXRhaWxzW2N0eC5kZXRhaWxzLmxlbmd0aCAtIDFdO31cclxuICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1lbHNleyB0aHJvdyBuZXcgRXJyb3IoJ1RhYmJseSA6IFVucmVjb2duaXplZCB0ZXh0IGFmdGVyIERFRklORScpfSAgXHJcbiAgICAgICAgfWVsc2V7IFxyXG4gICAgICAgICAgaWYoX19mdW5jKXtcclxuICAgICAgICAgICAgX19mdW5jQm9keSArPSBvO1xyXG4gICAgICAgICAgICBfX2Z1bmNCb2R5ICs9ICdcXG4nO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXt9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYWJibHkgOiBVbnJlY29nbml6ZWQgdGV4dCcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb2RlLnNwbGl0KCdcXG4nKS5mb3JFYWNoKGZ1bmN0aW9uKGwpeyBcclxuICAgICAgICBfX3BhcnNlTGluZShsLnRyaW0oKSxsKShfX2NvbnRleHQpOyBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4geyBjb250ZXh0IDogX19jb250ZXh0IH07XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vZHVsZS50YWJibHkgPSB7IGV4ZWN1dGUgOiBfX0V4ZWN1dGVDb2RlIH07XHJcblxyXG4gIH0oX21vZHVsZSkpO1xyXG4gICAgICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gUmVwb3J0c1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24obW9kdWxlKSB7XHJcblxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZSAgICAgICAgICAgICAgICA9IHt9OyAgICAgIFxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5nZW5lcmF0ZVJlcG9ydCA9IGZ1bmN0aW9uKHJkLCBkYXRhLCBtZWRpYXRvcil7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5iZWdpbicgfSk7XHJcbiAgICAgIHZhciBfX3JkICAgICAgPSByZCB8fCBtb2R1bGUuUmVwb3J0RW5naW5lLnJkO1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIFRyYW5zZm9ybWFyIGxvcyBkYXRvc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIHZhciBfX2RhdGFTZXQgPSBfX3JkLmNvbnRleHQucGFyc2VEYXRhID8gX19yZC5jb250ZXh0LnBhcnNlRGF0YShfX3JkLCBkYXRhLCBtZWRpYXRvci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRhdGE7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5sb2cubWVzc2FnZScsIHRleHQgOiAnSW5pY2lhbGl6YW5kby4uLicgfSk7XHJcbiAgICAgIGNvbnNvbGUudGltZSgnUmVuZGVyJyk7XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gSW5pY2lhbGl6YXIgZnVuY2lvbmVzIHBhcmEgbGEgZ2VuZXJhY2nDs24gZGUgY29udGVuaWRvIHBlcnNvbmFsaXphZG9cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX2luaXRDb250ZW50UHJvdmlkZXJzKCl7XHJcbiAgICAgICAgW19fcmQuY29udGV4dC5zZWN0aW9ucywgX19yZC5jb250ZXh0LmRldGFpbHMsIF9fcmQuY29udGV4dC5ncm91cHNdXHJcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbihhLGIpeyByZXR1cm4gYS5jb25jYXQoYik7IH0sIFtdKVxyXG4gICAgICAgIC5tYXAoZnVuY3Rpb24ocyl7XHJcbiAgICAgICAgICBpZihzLnZhbHVlUHJvdmlkZXJmbil7XHJcbiAgICAgICAgICAgIHMudmFsdWVQcm92aWRlciA9IG1vZHVsZS50ZW1wbGF0ZXMuZ2V0VmFsdWUocy52YWx1ZVByb3ZpZGVyZm4sIHNlbGYpOyBcclxuICAgICAgICAgICAgZGVsZXRlIHMudmFsdWVQcm92aWRlcmZuOyAgICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKHMuZm9vdGVyVmFsdWVQcm92aWRlcmZuKXtcclxuICAgICAgICAgICAgcy5mb290ZXJWYWx1ZVByb3ZpZGVyID0gbW9kdWxlLnRlbXBsYXRlcy5nZXRWYWx1ZShzLmZvb3RlclZhbHVlUHJvdmlkZXJmbiwgc2VsZik7IFxyXG4gICAgICAgICAgICBkZWxldGUgcy5mb290ZXJWYWx1ZVByb3ZpZGVyZm47IFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYocy5oZWFkZXJWYWx1ZVByb3ZpZGVyZm4pe1xyXG4gICAgICAgICAgICBzLmhlYWRlclZhbHVlUHJvdmlkZXIgPSBtb2R1bGUudGVtcGxhdGVzLmdldFZhbHVlKHMuaGVhZGVyVmFsdWVQcm92aWRlcmZuLCBzZWxmKTsgXHJcbiAgICAgICAgICAgIGRlbGV0ZSBzLmhlYWRlclZhbHVlUHJvdmlkZXJmbjtcclxuICAgICAgICAgIH0gIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBHZW5lcmFjacOzbiBkZSBsYXMgc2VjY2lvbmVzIGRlIGNhYmVjZXJhIGRlIGxhcyBhZ3J1cGFjaW9uZXNcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIHZhciBfX01FUkdFX0FORF9TRU5EID0gZnVuY3Rpb24odCwgcCwgZm5rZXkpeyBtZWRpYXRvci5zZW5kKG1vZHVsZS50ZW1wbGF0ZXMubWVyZ2UodCwgcCwgZm5rZXkpKTsgfTtcclxuICAgICAgZnVuY3Rpb24gX19ncm91cHNIZWFkZXJzKCl7XHJcbiAgICAgICAgX19ncm91cHMuZm9yRWFjaChmdW5jdGlvbihnLCBpaSl7XHJcbiAgICAgICAgICBpZihpaSA8IF9fYnJlYWtJbmRleCkgcmV0dXJuOyBcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5zZWN0aW9ucy5ncm91cC5oZWFkZXInLCB2YWx1ZSA6IGcuaWQgfSk7ICBcclxuICAgICAgICAgIGlmKGcuZGVmaW5pdGlvbi5oZWFkZXIpIHJldHVybiBfX01FUkdFX0FORF9TRU5EKGcuZGVmaW5pdGlvbi5oZWFkZXIsIGcsICdjb21waWxlZF9oZWFkZXJmbicpO1xyXG4gICAgICAgICAgaWYoZy5kZWZpbml0aW9uLmhlYWRlclZhbHVlUHJvdmlkZXIpIHJldHVybiBtZWRpYXRvci5zZW5kKGcuZGVmaW5pdGlvbi5oZWFkZXJWYWx1ZVByb3ZpZGVyKGcpKTsgXHJcbiAgICAgICAgfSk7ICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBHZW5lcmFjacOzbiBkZSBsYXMgc2VjY2lvbmVzIGRlIHJlc3VtZW4gZGUgbGFzIGFncnVwYWNpb25lc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19ncm91cHNGb290ZXJzKGluZGV4KXtcclxuICAgICAgICB2YXIgX19nZyA9IF9fZ3JvdXBzLm1hcChmdW5jdGlvbihnKXtyZXR1cm4gZzt9KTsgXHJcbiAgICAgICAgaWYoaW5kZXgpIF9fZ2cuc3BsaWNlKDAsIGluZGV4KTtcclxuICAgICAgICBfX2dnLnJldmVyc2UoKS5mb3JFYWNoKCBmdW5jdGlvbihnKXtcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5zZWN0aW9ucy5ncm91cC5mb290ZXInLCB2YWx1ZSA6IGcuaWQgfSk7ICAgICAgICAgIFxyXG4gICAgICAgICAgaWYoZy5kZWZpbml0aW9uLmZvb3RlcikgcmV0dXJuIF9fTUVSR0VfQU5EX1NFTkQoZy5kZWZpbml0aW9uLmZvb3RlciwgZywgJ2NvbXBpbGVkX2Zvb3RlcmZuJyk7XHJcbiAgICAgICAgICBpZihnLmRlZmluaXRpb24uZm9vdGVyVmFsdWVQcm92aWRlcikgcmV0dXJuIG1lZGlhdG9yLnNlbmQoZy5kZWZpbml0aW9uLmZvb3RlclZhbHVlUHJvdmlkZXIoZykpO1xyXG4gICAgICAgIH0pOyBcclxuICAgICAgfSBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gR2VuZXJhY2nDs24gZGUgbGFzIHNlY2Npb25lcyBkZSBkZXRhbGxlXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9fZGV0YWlsc1NlY3Rpb25zKCl7XHJcbiAgICAgICAgX19kZXRhaWxzLmZvckVhY2goZnVuY3Rpb24oZCl7XHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQuc2VjdGlvbnMuZGV0YWlsJywgdmFsdWUgOiBkLmlkIH0pO1xyXG4gICAgICAgICAgaWYoZC50ZW1wbGF0ZSkgcmV0dXJuIF9fTUVSR0VfQU5EX1NFTkQoZC50ZW1wbGF0ZSwgZCwgJ2NvbXBpbGVkZm4nKVxyXG4gICAgICAgICAgaWYoZC52YWx1ZVByb3ZpZGVyKSByZXR1cm4gbWVkaWF0b3Iuc2VuZChkLnZhbHVlUHJvdmlkZXIoZCkpO1xyXG4gICAgICAgIH0pICAgICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gR2VuZXJhY2nDs24gZGUgbGFzIHNlY2Npb25lcyBkZSB0b3RhbCBnZW5lcmFsXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9fZ3JhbmRUb3RhbFNlY3Rpb25zKCl7XHJcbiAgICAgICAgX190b3RhbHMuZm9yRWFjaChmdW5jdGlvbih0KXtcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5zZWN0aW9ucy50b3RhbCcsIHZhbHVlIDogdC5pZCB9KTtcclxuICAgICAgICAgIGlmKHQudGVtcGxhdGUpIHJldHVybiBfX01FUkdFX0FORF9TRU5EKHQudGVtcGxhdGUsIHQsICdjb21waWxlZGZuJylcclxuICAgICAgICAgIGlmKHQudmFsdWVQcm92aWRlcikgcmV0dXJuIG1lZGlhdG9yLnNlbmQodC52YWx1ZVByb3ZpZGVyKHQpKTtcclxuICAgICAgICB9KSAgICAgICAgICAgIFxyXG4gICAgICB9IFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBHZW5lcmFjacOzbiBkZSBsYXMgc2VjY2lvbmVzIGRlIGNhYmVjZXJhIGRlbCBpbmZvcm1lXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9fcmVwb3J0SGVhZGVyU2VjdGlvbnMoKXtcclxuICAgICAgICBfX2hlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih0KXtcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5zZWN0aW9ucy5oZWFkZXInLCB2YWx1ZSA6IHQgfSk7XHJcbiAgICAgICAgICBpZih0LnRlbXBsYXRlKSByZXR1cm4gX19NRVJHRV9BTkRfU0VORCh0LnRlbXBsYXRlLCB0LCAnY29tcGlsZWRmbicpXHJcbiAgICAgICAgICBpZih0LnZhbHVlUHJvdmlkZXIpIHJldHVybiBtZWRpYXRvci5zZW5kKHQudmFsdWVQcm92aWRlcih0KSk7XHJcbiAgICAgICAgfSkgICAgICAgICAgICBcclxuICAgICAgfSBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gSW5pY2lhbGl6YXIgZWwgb2JqZXRvIHF1ZSBzaXJ2ZSBkZSBhY3VtdWxhZG9yXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9fcmVzb2x2ZVN1bW1hcnlPYmplY3QoKXtcclxuICAgICAgICB2YXIgX19zdW1tYXJ5ID0gSlNPTi5wYXJzZShfX3JkLmNvbnRleHQuc3VtbWFyeSB8fCAne30nKTtcclxuICAgICAgICBpZihfX3JkLmNvbnRleHQub25Jbml0U3VtbWFyeU9iamVjdCkgcmV0dXJuIF9fcmQuY29udGV4dC5vbkluaXRTdW1tYXJ5T2JqZWN0KF9fc3VtbWFyeSk7ICAgICAgXHJcbiAgICAgICAgcmV0dXJuIF9fc3VtbWFyeTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIF9fYnJlYWtJbmRleCA9IC0xOyBcclxuXHJcbiAgICAgIHZhciBfX3N1bW1hcnkgICAgPSBfX3Jlc29sdmVTdW1tYXJ5T2JqZWN0KCk7XHJcbiAgICAgIHZhciBfX2hlYWRlcnMgICAgPSAoX19yZC5jb250ZXh0LnNlY3Rpb25zIHx8IFtdKS53aGVyZSh7IHR5cGUgOiAnaGVhZGVyJyB9KTtcclxuICAgICAgdmFyIF9fdG90YWxzICAgICA9IChfX3JkLmNvbnRleHQuc2VjdGlvbnMgfHwgW10pLndoZXJlKHsgdHlwZSA6ICd0b3RhbCcgfSk7XHJcbiAgICAgIHZhciBfX2Zvb3RlcnMgICAgPSAoX19yZC5jb250ZXh0LnNlY3Rpb25zIHx8IFtdKS53aGVyZSh7IHR5cGUgOiAnZm9vdGVyJyB9KTtcclxuICAgICAgdmFyIF9fZGV0YWlscyAgICA9IF9fcmQuY29udGV4dC5kZXRhaWxzIHx8IFtdO1xyXG4gICAgICB2YXIgX19ncm91cHMgICAgID0gX19yZC5jb250ZXh0Lmdyb3VwcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24oZywgaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7ICBuYW1lICAgICAgIDogJ0cnICsgKGkrMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZCAgICAgICAgIDogX19yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaXRpb24gOiBnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCAgICA6ICcnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgICAgICAgOiBtb2R1bGUuY2xvbmUoX19zdW1tYXJ5KSwgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0IDogZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19rID0gdmFsdWVbdGhpcy5kZWZpbml0aW9uLmtleV0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fR3ggPSBzZWxmLkJTW3RoaXMubmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3guYWxsW19fa10gPSBfX0d4LmFsbFtfX2tdIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LmFsbFtfX2tdLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LnJlY29yZENvdW50ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fX3Jlc3VtZSA9PT0gZmFsc2UpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fX3Jlc3VtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5jb3B5KHZhbHVlLCB0aGlzLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX19yZXN1bWUgPSBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmxlbmd0aCA+IDApICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5jb3B5KHZhbHVlLCB0aGlzLmRhdGEpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdW0gIDogZnVuY3Rpb24odmFsdWUpeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fayA9IHZhbHVlW3RoaXMuZGVmaW5pdGlvbi5rZXldLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX0d4ID0gc2VsZi5CU1t0aGlzLm5hbWVdOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5hbGxbX19rXSA9IF9fR3guYWxsW19fa10gfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3guYWxsW19fa10ucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3gucmVjb3JkQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fX3Jlc3VtZSA9PT0gZmFsc2UpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5zdW0odmFsdWUsIHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3QgOiBmdW5jdGlvbih2YWx1ZSl7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVt0aGlzLmRlZmluaXRpb24ua2V5XSA9PSB0aGlzLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIHx8IFtdOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIHNlbGYuQlMgPSB7IHJlcG9ydERlZmluaXRpb24gOiBfX3JkLCBtZWRpYXRvciA6IG1lZGlhdG9yIH07ICAgICAgICAgICAgICBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBPcmRlbmFyIGxvcyBkYXRvc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGlmKF9fcmQuY29udGV4dC5pdGVyYXRlZm4pe1xyXG4gICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5sb2cubWVzc2FnZScsIHRleHQgOiAnSW5pY2lhbGl6YW5kbyBlbGVtZW50b3MuLi4nIH0pO1xyXG4gICAgICAgIF9fZGF0YVNldC5mb3JFYWNoKF9fcmQuY29udGV4dC5pdGVyYXRlZm4pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKF9fcmQuY29udGV4dC5vcmRlckJ5KXtcclxuICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQubG9nLm1lc3NhZ2UnLCB0ZXh0IDogJ09yZGVuYW5kbyBkYXRvcy4uLicgfSk7XHJcbiAgICAgICAgX19kYXRhU2V0LnNvcnRCeShfX3JkLmNvbnRleHQub3JkZXJCeSwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gSW5pY2lhbGl6YXJcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBzZWxmLkJTID0geyByZWNvcmRDb3VudCAgICAgIDogMCwgXHJcbiAgICAgICAgICAgICAgICAgIEcwICAgICAgICAgICAgICAgOiBtb2R1bGUuY2xvbmUoX19zdW1tYXJ5KSxcclxuICAgICAgICAgICAgICAgICAgZGF0YVNldCAgICAgICAgICA6IF9fZGF0YVNldCxcclxuICAgICAgICAgICAgICAgICAgcmVwb3J0RGVmaW5pdGlvbiA6IF9fcmQsIFxyXG4gICAgICAgICAgICAgICAgICBtZWRpYXRvciAgICAgICAgIDogbWVkaWF0b3IgfTtcclxuICAgICAgX19ncm91cHMuZm9yRWFjaCggZnVuY3Rpb24oZywgaSl7ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGcuY3VycmVudCA9IChfX2RhdGFTZXQgJiYgX19kYXRhU2V0WzBdKSA/IF9fZGF0YVNldFswXVtnLmRlZmluaXRpb24ua2V5XSA6ICcnO1xyXG4gICAgICAgIHNlbGYuQlNbZy5uYW1lXSA9IHsgcmVjb3JkQ291bnQgOiAwLCBhbGwgOiB7fSB9O1xyXG4gICAgICB9KTtcclxuICAgICAgaWYoX19yZC5jb250ZXh0Lm9uU3RhcnRmbikgX19yZC5jb250ZXh0Lm9uU3RhcnRmbihzZWxmLkJTKTtcclxuICAgICAgX19pbml0Q29udGVudFByb3ZpZGVycygpO1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQucmVuZGVyLnJvd3MnIH0pO1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQubG9nLm1lc3NhZ2UnLCB0ZXh0IDogJ0dlbmVyYW5kbyBpbmZvcm1lLi4uJyB9KTtcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIENhYmVjZXJhcyBkZWwgaW5mb3JtZVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgX19yZXBvcnRIZWFkZXJTZWN0aW9ucygpO1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gQ2FiZWNlcmFzIGluaWNpYWxlc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgaWYoX19kYXRhU2V0Lmxlbmd0aCA+IDApIF9fZ3JvdXBzSGVhZGVycygpOyBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEl0ZXJhciBzb2JyZSBsb3MgZWxlbWVudG9zXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBfX2RhdGFTZXQuZm9yRWFjaChmdW5jdGlvbihyLCBpKXsgXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIFByb2Nlc2FyIGVsIGVsZW1lbnRvXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgICAgICAgIFxyXG4gICAgICAgIHNlbGYuQlMucmVjb3JkQ291bnQrKztcclxuICAgICAgICBzZWxmLkJTLmlzTGFzdFJvdyAgICAgICAgPSBfX2RhdGFTZXQubGVuZ3RoID09PSBzZWxmLkJTLnJlY29yZENvdW50O1xyXG4gICAgICAgIHNlbGYuQlMuaXNMYXN0Um93SW5Hcm91cCA9IHNlbGYuQlMuaXNMYXN0Um93O1xyXG4gICAgICAgIHNlbGYuQlMucGVyY2VudCAgICAgID0gKHNlbGYuQlMucmVjb3JkQ291bnQvX19kYXRhU2V0Lmxlbmd0aCkgKiAxMDA7ICBcclxuICAgICAgICBzZWxmLkJTLnByZXZpb3VzICAgICA9IHNlbGYuQlMuZGF0YSB8fCByO1xyXG4gICAgICAgIHNlbGYuQlMuZGF0YSAgICAgICAgID0gcjsgXHJcbiAgICAgICAgX19ncm91cHMuZm9yRWFjaCggZnVuY3Rpb24oZywgaSl7IFxyXG4gICAgICAgICAgc2VsZi5CU1tnLm5hbWVdLmRhdGEgID0gT2JqZWN0LmNyZWF0ZShnLmRhdGEpO1xyXG4gICAgICAgIH0pOyBcclxuICAgICAgICBtb2R1bGUuUmVwb3J0RW5naW5lLnN1bShyLCBzZWxmLkJTLkcwKTsgICAgICAgIFxyXG4gICAgICAgIGlmKF9fcmQuY29udGV4dC5vblJvd2ZuKSBfX3JkLmNvbnRleHQub25Sb3dmbihzZWxmLkJTKTtcclxuICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSAgOiAncmVwb3J0LnJlbmRlci5yb3cnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgOiBzZWxmLkJTLnBlcmNlbnQudG9GaXhlZCgxKSArICcgJScsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6IHNlbGYuQlMucGVyY2VudCB9KTtcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gRGV0ZXJtaW5hciBzaSBoYXkgY2FtYmlvIGVuIGFsZ3VuYSBkZSBsYXMgY2xhdmVzIGRlIGFncnVwYWNpw7NuXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGlmKF9fZ3JvdXBzLmV2ZXJ5KCBmdW5jdGlvbihnKXsgcmV0dXJuIGcudGVzdChyKSB9KSl7XHJcbiAgICAgICAgICBfX2dyb3Vwcy5mb3JFYWNoKCBmdW5jdGlvbihnKXsgZy5zdW0ocik7IH0pOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNleyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgX19ncm91cHMuc29tZSggZnVuY3Rpb24oZywgaSl7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoIWcudGVzdChyKSl7XHJcbiAgICAgICAgICAgICAgX19icmVha0luZGV4ID0gaTtcclxuICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgIC8vIFBpZXMgZGUgZ3J1cG8gZGUgbG9zIHF1ZSBoYW4gY2FtYmlhZG9cclxuICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgIF9fZ3JvdXBzRm9vdGVycyhfX2JyZWFrSW5kZXgpO1xyXG4gICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgLy8gQWN0dWFsaXphciBsb3MgZ3J1cG9zXHJcbiAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICBfX2dyb3Vwcy5mb3JFYWNoKCBmdW5jdGlvbihncnVwbywgaWkpeyAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoaWkgPj0gX19icmVha0luZGV4KXtcclxuICAgICAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAvLyBJbmljaWFsaXphciBsb3MgcXVlIGhhbiBjYW1iaWFkb1xyXG4gICAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgIGdydXBvLmluaXQocilcclxuICAgICAgICAgICAgICAgICAgX19icmVha0luZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgIC8vIEFjdW11bGFyIHZhbG9yZXMgZGUgbG9zIHF1ZSBzaWd1ZW4gaWd1YWxcclxuICAgICAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICBncnVwby5zdW0ocik7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgLy8gTm90aWZpY2FyIGRlbCBldmVudG8gb25Hcm91cENoYW5nZVxyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIF9fZ3JvdXBzLmZvckVhY2goZnVuY3Rpb24oZyl7XHJcbiAgICAgICAgICAgIGcuY3VycmVudCA9IHJbZy5kZWZpbml0aW9uLmtleV07XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmKF9fcmQuY29udGV4dC5vbkdyb3VwQ2hhbmdlZm4pIF9fcmQuY29udGV4dC5vbkdyb3VwQ2hhbmdlZm4oc2VsZi5CUyk7ICAgICAgICAgIFxyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgIDogJ3JlcG9ydC5zZWN0aW9ucy5ncm91cC5jaGFuZ2UnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA6ICdfX2dyb3VwcycgfSk7XHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAvLyBDYWJlY2VyYXNcclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIF9fZ3JvdXBzSGVhZGVycygpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIERldGVybWluYXIgc2kgZXN0ZSBlcyBlbCDDumx0aW1vIGVsZW1lbnRvIGRlIGxhIGFncnVwYWNpw7NuIFxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PTtcclxuICAgICAgICBpZihfX2dyb3Vwcy5sZW5ndGggJiYgIXNlbGYuQlMuaXNMYXN0Um93ICl7XHJcbiAgICAgICAgICB2YXIgX19uZXh0ICAgICAgICAgICAgICAgPSBfX2RhdGFTZXRbc2VsZi5CUy5yZWNvcmRDb3VudF07ICAgICAgICAgIFxyXG4gICAgICAgICAgc2VsZi5CUy5pc0xhc3RSb3dJbkdyb3VwID0gISBfX2dyb3Vwcy5ldmVyeSggZnVuY3Rpb24oZyl7XHJcbiAgICAgICAgICAgIHZhciBfX2sgPSBnLmRlZmluaXRpb24ua2V5O1xyXG4gICAgICAgICAgICByZXR1cm4gX19uZXh0W19fa10gPT09IHNlbGYuQlMuZGF0YVtfX2tdO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIFNlY2Npb25lcyBkZSBkZXRhbGxlXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgX19kZXRhaWxzU2VjdGlvbnMoKSAgICAgICAgICAgIFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmKF9fZGF0YVNldC5sZW5ndGggPiAwKXsgXHJcbiAgICAgICAgc2VsZi5CUy5wcmV2aW91cyA9IHNlbGYuQlMuZGF0YTtcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIFBpZXMgZGUgZ3J1cG9cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIF9fZ3JvdXBzRm9vdGVycygpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBUb3RhbCBnZW5lcmFsXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBfX2dyYW5kVG90YWxTZWN0aW9ucygpO1xyXG4gICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSA6ICdyZXBvcnQucmVuZGVyLmVuZCcgfSk7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5lbmQnIH0pO1xyXG4gICAgICBtZWRpYXRvci5mbHVzaCgpO1xyXG4gICAgICBjb25zb2xlLnRpbWVFbmQoJ1JlbmRlcicpO1xyXG4gICAgfVxyXG4gICAgICAgICAgXHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmNvcHkgICAgPSBmdW5jdGlvbihzLCBkKXsgT2JqZWN0LmtleXMoZCkubWFwKGZ1bmN0aW9uKGspeyBkW2tdID0gc1trXTt9KTt9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lLnN1bSAgICAgPSBmdW5jdGlvbihzLCBkKXsgT2JqZWN0LmtleXMoZCkubWFwKGZ1bmN0aW9uKGspeyBkW2tdICs9IHNba107fSk7fSAgIFxyXG4gICAgbW9kdWxlLlJlcG9ydEVuZ2luZS5jb21wdXRlID0gZnVuY3Rpb24oZHMsIG5hbWUpeyByZXR1cm4gZHMucmVkdWNlKCBmdW5jdGlvbih0LCBvKXsgcmV0dXJuIHQgKyBvW25hbWVdOyB9LCAwLjApOyB9XHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmdyb3VwICAgPSBmdW5jdGlvbihhLCBjKXtcclxuXHQgICAgdmFyIGRzID0gYTtcclxuXHQgICAgdmFyIF9fZiA9IGZ1bmN0aW9uKGssIHQpe1xyXG5cdCAgICAgIGRzLmRpc3RpbmN0KCBmdW5jdGlvbih2KXsgcmV0dXJuIHZba107IH0pXHQgICAgICAgICAgICBcclxuXHQgICAgICAgIC5mb3JFYWNoICggZnVuY3Rpb24odil7IGNbdl0gPSBkcy5yZWR1Y2UoIGZ1bmN0aW9uKHAsIGMsIGksIGEpeyByZXR1cm4gKGNba109PXYpID8gcCArIGNbdF0gOiBwOyB9LCAwLjApOyB9KTtcclxuICAgICAgICByZXR1cm4gX19mO1x0ICAgICAgICAgICBcclxuXHQgICAgfVxyXG5cdCAgICByZXR1cm4gX19mO1xyXG4gICAgfVxyXG4gXHJcbiAgfSkoX21vZHVsZSk7XHJcblxyXG59KF9fbW9kdWxlLCAnUG9sJykpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX19tb2R1bGUuUG9sOyIsImltcG9ydCBwb2wgZnJvbSBcIi4vbWFwYS5qc1wiO1xyXG5cclxuXHJcbmxldCB0b3BpY3MgPSB7fTtcclxubGV0IHN1YlVpZCA9IC0xO1xyXG5cclxubGV0IHN1YnNjcmliZSA9IGZ1bmN0aW9uKHRvcGljLCBmdW5jKSB7XHJcbiAgaWYgKCF0b3BpY3NbdG9waWNdKSB7XHJcbiAgICB0b3BpY3NbdG9waWNdID0gW107XHJcbiAgfVxyXG4gIHZhciB0b2tlbiA9ICgrK3N1YlVpZCkudG9TdHJpbmcoKTtcclxuICB0b3BpY3NbdG9waWNdLnB1c2goe1xyXG4gICAgdG9rZW46IHRva2VuLFxyXG4gICAgZnVuYzogZnVuY1xyXG4gIH0pO1xyXG4gIHJldHVybiB0b2tlbjtcclxufTtcclxuXHJcbmxldCBwdWJsaXNoID0gZnVuY3Rpb24odG9waWMsIGFyZ3MpIHtcclxuICBpZiAoIXRvcGljc1t0b3BpY10pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHN1YnNjcmliZXJzID0gdG9waWNzW3RvcGljXTtcclxuICAgIHZhciBsZW4gPSBzdWJzY3JpYmVycyA/IHN1YnNjcmliZXJzLmxlbmd0aCA6IDA7XHJcblxyXG4gICAgd2hpbGUgKGxlbi0tKSB7XHJcbiAgICAgIHN1YnNjcmliZXJzW2xlbl0uZnVuYyh0b3BpYywgYXJncyk7XHJcbiAgICB9XHJcbiAgfSwgMCk7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn07XHJcblxyXG5sZXQgdW5zdWJzY3JpYmUgPSBmdW5jdGlvbih0b2tlbikge1xyXG4gIGZvciAodmFyIG0gaW4gdG9waWNzKSB7XHJcbiAgICBpZiAodG9waWNzW21dKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gdG9waWNzW21dLmxlbmd0aDsgaSA8IGo7IGkrKykge1xyXG4gICAgICAgIGlmICh0b3BpY3NbbV1baV0udG9rZW4gPT09IHRva2VuKSB7XHJcbiAgICAgICAgICB0b3BpY3NbbV0uc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgc3Vic2NyaWJlLFxyXG4gIHB1Ymxpc2gsXHJcbiAgdW5zdWJzY3JpYmVcclxufSIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYCAgXHJcbjxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWJvdHRvbVwiPlxyXG4gIDxoMT5Tb2JyZSBOb3RhcyBBcHA8L2gxPlxyXG4gIDxwIHN0eWxlPVwidGV4dC1pbmRlbnQ6MWVtO1wiPlxyXG4gICAgTm90YXMgQXBwIGVzIHVuYSBwcnVlYmEgZGUgY29uY2VwdG8gZGUgbG8gcXVlIHBvZHLDrWEgc2VyIHVuIDxzcGFuIGNsYXNzPVwidzMtYm9sZCB3My1pdGFsaWNcIj5mcmFtZXdvcms8L3NwYW4+IFxyXG4gICAgc2VuY2lsbG8gY29uIGVsIGN1YWwgZGVzYXJyb2xsYXIgYXBsaWNhY2lvbmVzIDxzcGFuIGNsYXNzPVwidzMtYm9sZCB3My1pdGFsaWNcIj5TUEE8L3NwYW4+IGJhc2FkYXMgw7puaWNhbWVudGUgZW4gPHNwYW4gY2xhc3M9XCJ3My1ib2xkXCI+SFRNTDU8L3NwYW4+IHkgPHNwYW4gY2xhc3M9XCJ3My1ib2xkXCI+SmF2YVNjcmlwdDwvc3Bhbj4uXHJcbiAgPC9wPlxyXG4gIDxwIHN0eWxlPVwidGV4dC1pbmRlbnQ6MWVtO1wiPlxyXG4gICAgRXN0YXMgYXBsaWNhY2lvbmVzIHNlcsOtYW4gc3ViY2VwdGlibGVzIGRlIHNlciBpbnN0YWxhZGFzIGVuIGRpc3Bvc2l0aXZvcyBtw7N2aWxlcyBjb21vIHVuYSA8c3BhbiBjbGFzcz1cInczLWJvbGQgdzMtaXRhbGljXCI+UFdBPC9zcGFuPi5cclxuICA8L3A+XHJcbiAgPHVsIGNsYXNzPVwidzMtdWwgdzMtYm9yZGVyXCI+XHJcbiAgICA8bGk+PGgyPlJlZmVyZW5jaWFzPC9oMj48L2xpPlxyXG4gICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2VzLndpa2lwZWRpYS5vcmcvd2lraS9TaW5nbGUtcGFnZV9hcHBsaWNhdGlvblwiIHRhcmdldD1cIl9ibGFua1wiPlNQQSAoU2luZ2xlLXBhZ2UgYXBwbGljYXRpb24pPC9hPjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZXMud2lraXBlZGlhLm9yZy93aWtpL1Byb2dyZXNzaXZlX1dlYl9BcHBzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UFdBIChQcm9ncmVzc2l2ZSBXZWIgQXBwcyk8L2E+PC9saT5cclxuICAgIDxsaT48aDI+UmVwb3NpdG9yaW88L2gyPjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yY2FzdHJvZ28vbm90YXMtYXBwXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly9naXRodWIuY29tL3JjYXN0cm9nby9ub3Rhcy1hcHA8L2E+PC9saT5cclxuICA8L3VsPlxyXG4gIDxwIHN0eWxlPVwidGV4dC1pbmRlbnQ6MWVtO1wiPlxyXG4gICAgUGFyYSBzdSBkZXNhcnJvbGxvIG5vIHNlIGhhbiB1dGlsaXphZG8gbmluZ3VubyBkZSBsb3MgPHNwYW4gY2xhc3M9XCJ3My1ib2xkIHczLWl0YWxpY1wiPmZyYW1ld29ya3M8L3NwYW4+IGV4aXN0ZW50ZXMgY29tbyBwdWVkZW4gc2VyIEFuZ3VsYXIsIFJlYWN0IG8gVnVlLmpzLlxyXG4gIDwvcD5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWJvdHRvbSB3My1jZW50ZXJcIj5cclxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBhYm91dC1idG4tYmFjayBjbGFzcz1cInczLWJ1dHRvbiB3My1ibGFja1wiPlZvbHZlcjwvYnV0dG9uPlxyXG48L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcblxyXG4gIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ2RpdicsIF9fdGVtcGxhdGUpO1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignW2Fib3V0LWJ0bi1iYWNrXScpXHJcbiAgICAgICAgICAgICAgIC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIGhpc3RvcnkuYmFjaygpO1xyXG4gICAgICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcblxyXG59XHJcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYCAgXHJcbjxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWJvdHRvbVwiPlxyXG4gIDxoMj5MYSBwcmVkaWNjacOzbiBkZWwgdGllbXBvPC9oMj5cclxuICA8ZGl2IGlkPVwiYWVtZXRBcGktY29udGFpbmVyXCIgc3R5bGU9XCJwYWRkaW5nOjA7XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidzMtY2VudGVyXCI+Q2FyZ2FuZG8gZGF0b3MgZGVzZGUgbGEgQUVNRVQuLi48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ3My1ib3JkZXJcIj5cclxuICAgICAgPGRpdiBpZD1cInByb2dyZXNzLWJhclwiIGNsYXNzPVwidzMtZ3JlZW5cIiBzdHlsZT1cImhlaWdodDoyNHB4O3dpZHRoOjAlXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG5cclxuICBsZXQgYWVtZXRDb250YWluZXI7XHJcbiAgbGV0IHByb2dyZXNzQmFyO1xyXG4gIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ2RpdicsIF9fdGVtcGxhdGUpO1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBhZW1ldENvbnRhaW5lciA9IHBvbC4kKCdhZW1ldEFwaS1jb250YWluZXInKTtcclxuICAgICAgcHJvZ3Jlc3NCYXIgPSBwb2wuJCgncHJvZ3Jlc3MtYmFyJyk7XHJcbiAgICAgIGluaXRQcm9ncmVzc0JhcigpO1xyXG4gICAgICBjYWxsQWVtZXRBcGkoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsZXQgdGltZXJJZDtcclxuICBmdW5jdGlvbiBpbml0UHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICB0aW1lcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjb3VudGVyID0gKGNvdW50ZXIgKyA5KSAlIDEwMDtcclxuICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnezB9JScuZm9ybWF0KGNvdW50ZXIpO1xyXG4gICAgfSwgMjAwKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhbGxBZW1ldEFwaSgpIHtcclxuICAgIFxyXG4gICAgbGV0IGVuZHBvaW50ID0gJ2h0dHBzOi8vb3BlbmRhdGEuYWVtZXQuZXMvb3BlbmRhdGEvYXBpL3ByZWRpY2Npb24vZXNwZWNpZmljYS9tdW5pY2lwaW8vaG9yYXJpYS80NTAyMicgK1xyXG4gICAgICAgICAgICAgICAgICAgJz9hcGlfa2V5PScgK1xyXG4gICAgICAgICAgICAgICAgICAgJ2V5SmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKeVkyRnpkSEp2WjI5QWFHOTBiV0ZwYkM1amIyMGlMQ0pxZEdraU9pSm1abUkzT1dKalppMWxaV1F3TFRRd09ETXRZVGt3WkMwNE1tTmtNbVJoTVRBMk1qUWlMQ0pwYzNNaU9pSkJSVTFGVkNJc0ltbGhkQ0k2TVRVNE1qY3lOVGczTml3aWRYTmxja2xrSWpvaVptWmlOemxpWTJZdFpXVmtNQzAwTURnekxXRTVNR1F0T0RKalpESmtZVEV3TmpJMElpd2ljbTlzWlNJNklpSjkuYlBoQUpEdXRQNjJfNzVwZW8zcXI4OFFzMUpRNGptdTZUV1hIanZJelp4MCc7XHJcbiAgICBwb2wuYWpheFxyXG4gICAgICAgLmdldChlbmRwb2ludClcclxuICAgICAgIC50aGVuKHRleHQgPT4gSlNPTi5wYXJzZSh0ZXh0KSlcclxuICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgIGlmKHJlc3VsdC5lc3RhZG8gPT0gMjAwKSByZXR1cm4gcG9sLmFqYXguZ2V0KHJlc3VsdC5kYXRvcyk7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXN1bHQuZGVzY3JpcGNpb24pO1xyXG4gICAgICAgfSlcclxuICAgICAgIC50aGVuKCB0ZXh0ID0+IHtcclxuICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRleHQpO1xyXG4gICAgICAgICBjbGVhckludGVydmFsKHRpbWVySWQpO1xyXG4gICAgICAgICBhZW1ldENvbnRhaW5lci5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKTtcclxuICAgICAgIH0pXHJcbiAgICAgICAuY2F0Y2goIGUgPT4ge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgICBcclxuICA8ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyIHczLWNlbnRlclwiIHN0eWxlPVwicGFkZGluZy10b3A6NjBweDtcIj5cclxuICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1nL2xvZ28ucG5nXCIgYWx0PVwiQ2FyXCIgc3R5bGU9XCJ3aWR0aDogMzAwcHhcIj5cclxuICAgIDxwPkxhIGFwcCBxdWUgdGUgcGVybWl0ZSBhbG1hY2VuYXIgdG9kYXMgdHVzIG5vdGFzIGVuIGVsIG3Ds3ZpbCEhITwvcD5cclxuICA8L2Rpdj5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuXHJcbiAgbGV0IGNvbXBvbmVudCA9IHtcclxuICAgIHJvb3QgICA6IHt9LFxyXG4gICAgaW5pdCAgIDogZnVuY3Rpb24oY29udGFpbmVyKXsgfSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIHRoaXMucm9vdCA9IHBvbC5idWlsZCgnZGl2JywgX190ZW1wbGF0ZSkuZmlyc3RFbGVtZW50Q2hpbGQgO1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICAvLzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGJ0bi10ZXN0IGNsYXNzPVwidzMtYnV0dG9uIHczLWJsYWNrXCI+aHRtbDwvYnV0dG9uPlxyXG4gICAgICAvL2xldCBidG4gPSBwb2wuJCgnW2J0bi10ZXN0XScsIGNvbnRhaW5lcilbMF07XHJcbiAgICAgIC8vYnRuLm9uY2xpY2sgPSBvblRlc3RCdXR0b25DbGljaztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBGaWxsVGVtcGxhdGVcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBmdW5jdGlvbiBvblRlc3RCdXR0b25DbGlja19maWxsKG1vdXNlRXZlbnQpe1xyXG4gICAgbGV0IHRlbXBsYXRlID0gcG9sLmJ1aWxkKCdkaXYnLCAnPGgzIHhiaW5kPVwiaWQ6aWQ7aW5uZXJIVE1MOm5vbWJyZTtvbmNsaWNrOl9fY2xpY2tcIj48L2gzPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBsZXQgciA9IHBvbC50ZW1wbGF0ZXMuZmlsbChcclxuICAgICAgICAgICAgICB0ZW1wbGF0ZSwgXHJcbiAgICAgICAgICAgICAgeyBpZCA6IDU1NSwgXHJcbiAgICAgICAgICAgICAgICBub21icmUgOiAncmFmYScsXHJcbiAgICAgICAgICAgICAgICBfX2NsaWNrIDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9fSk7XHJcblxyXG4gICAgY29tcG9uZW50LnJvb3QuYXBwZW5kQ2hpbGQocik7XHJcbiAgfVxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBFeGVjdXRlVGVtcGxhdGVcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBmdW5jdGlvbiBvblRlc3RCdXR0b25DbGljayhtb3VzZUV2ZW50KXtcclxuICAgIGxldCB0ZW1wbGF0ZSA9IHBvbC5idWlsZCgnZGl2JywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxoMyB4YmluZD1cImlkOmlkO2lubmVySFRNTDpub21icmU7XCI+PC9oMz4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgbGV0IGlubmVySHRtbCA9IHBvbC50ZW1wbGF0ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAuZXhlY3V0ZSh0ZW1wbGF0ZSwgW3sgaWQgOiA1NTUsIG5vbWJyZSA6ICdyYWZhJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkIDogNDQ0LCBub21icmUgOiAncmFmYSA0NDQnfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgaWQgOiAzMzMsIG5vbWJyZSA6ICdyYWZhIDMzMyd9XSk7XHJcbiAgICBwb2wudGVtcGxhdGVzXHJcbiAgICAgICAuZXhlY3V0ZSh0ZW1wbGF0ZSxcclxuICAgICAgICAgICAgICAgIFt7IGlkIDogNTU1LCBub21icmUgOiAncmFmYSd9LFxyXG4gICAgICAgICAgICAgICAgIHsgaWQgOiA0NDQsIG5vbWJyZSA6ICdyYWZhIDQ0NCd9LFxyXG4gICAgICAgICAgICAgICAgIHsgaWQgOiAzMzMsIG5vbWJyZSA6ICdyYWZhIDMzMyd9XSxcclxuICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICAgKVxyXG4gICAgICAubWFwKCBlID0+IGUubm9kZSApXHJcbiAgICAgIC5mb3JFYWNoKCBub2RlID0+IGNvbXBvbmVudC5yb290LmFwcGVuZENoaWxkKG5vZGUpICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG5cclxufVxyXG4iLCLvu79pbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYVwiO1xyXG5pbXBvcnQgRGJXcmFwcGVyU2VydmljZSBmcm9tIFwiLi4vbGliL2RiV3JhcHBlci5zZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBOT1RBU19EQVRBQkFTRSAgID0gJ25vdGFzLWFwcC5kYic7IFxyXG5jb25zdCBOT1RBU19UQUJMRV9OQU1FID0gJ25vdGFzJztcclxuXHJcbmNvbnN0IFRFTVBMQVRFID0gYFxyXG48ZGl2IG5vdGFzLWNvbnRhaW5lciBzdHlsZT1cInBhZGRpbmc6MDsgbWFyZ2luLWJvdHRvbTo0M3B4O1wiPjwvZGl2PlxyXG48YnV0dG9uIGJ0bi1hZGQtbm90ZSBvbi1jbGljaz1cImFkZE5vdGVcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1ibGFjayB3My1jaXJjbGVcIj7vvIs8L2J1dHRvbj5gO1xyXG5cclxuY29uc3QgX19JVEVNX1RFTVBMQVRFID1gXHJcbjxkaXYgY2xhc3M9XCJ3My1ib3JkZXItYm90dG9tXCIgc3R5bGU9XCJwYWRkaW5nOjA7IGZvbnQtc2l6ZToxNHB4O1wiIGlkPVwibm90ZS17bm90ZS5rZXl9XCI+XHJcbiAgPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lclwiIHN0eWxlPVwicGFkZGluZzo1cHhcIj5cclxuICAgIDxkaXYgb24tY2xpY2s9XCJleHBhbmRDb2xsYXBzZVwiPjxiPntub3RlLnRpdGxlfTwvYj48aSBjbGFzcz1cInczLXJpZ2h0IHczLWxhcmdlIGZhIGZhLWNhcmV0LWRvd25cIj48L2k+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lclwiIHN0eWxlPVwiZGlzcGxheTpub25lO3BhZGRpbmc6MCA0cHhcIj5cclxuICAgIDxwIGlkPVwiZWRpdHAte25vdGUua2V5fVwiIG9uLWNsaWNrPVwiZWRpdE5vdGVcIiBzdHlsZT1cInBhZGRpbmc6MnB4O21pbi1oZWlnaHQ6NGVtO21hcmdpbjoycHggMDt3aGl0ZS1zcGFjZTogcHJlLXdyYXBcIj57Zm9ybWF0VGV4dDpub3RlLnRleHR9PC9wPlxyXG4gICAgPGRpdiBjbGFzcz1cInczLWJhciB3My1jZW50ZXJcIiBzdHlsZT1cInBhZGRpbmc6NHB4IDA7XCI+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZGVsZXRlLXtub3RlLmtleX1cIiBvbi1jbGljaz1cImRlbGV0ZU5vdGVcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1ib3JkZXJcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImZhdi17bm90ZS5rZXl9XCIgb24tY2xpY2s9XCJzYXZlRmF2b3JpdGVzXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtYm9yZGVyXCI+PGkgY2xhc3M9XCJmYSB7Y3NzOm5vdGUua2V5fVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJlZGl0LXtub3RlLmtleX1cIiBvbi1jbGljaz1cImVkaXROb3RlXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtYm9yZGVyXCI+PGkgY2xhc3M9XCJmYSBmYS1lZGl0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjdHgpe1xyXG4gICAgXHJcbiAgbGV0IGRiO1xyXG4gIGxldCByb3dzID0gW107XHJcbiAgbGV0IGZhdm9yaXRlcyA9IFtdO1xyXG4gIGxldCBpdGVtc0NvbnRhaW5lcjtcclxuICBsZXQgY29tcG9uZW50ID0ge1xyXG4gICAgcm9vdCAgIDoge30sXHJcbiAgICBpbml0ICAgOiBmdW5jdGlvbihjb250YWluZXIpeyB9LFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgdGhpcy5yb290ID0gcG9sLmJ1aWxkKCdkaXYnLCBURU1QTEFURSk7XHJcbiAgICAgIGl0ZW1zQ29udGFpbmVyID0gdGhpcy5yb290LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBpbml0QWxsKCk7ICBcclxuICAgIH0sXHJcbiAgICBldmVudEhhbmRsZXJzIDogeyBcclxuICAgICAgYWRkTm90ZSAgICAgICAgOiBhZGROb3RlLFxyXG4gICAgICBkZWxldGVOb3RlICAgICA6IGRlbGV0ZU5vdGUsXHJcbiAgICAgIGV4cGFuZENvbGxhcHNlIDogZXhwYW5kQ29sbGFwc2UsXHJcbiAgICAgIHNhdmVGYXZvcml0ZXMgIDogc2F2ZUZhdm9yaXRlcyxcclxuICAgICAgZWRpdE5vdGUgICAgICAgOiBlZGl0Tm90ZVxyXG4gICAgfSBcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBpbml0QWxsKCkge1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE9wZW4gZGF0YWJhc2VcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBkYiA9IG5ldyBEYldyYXBwZXJTZXJ2aWNlKE5PVEFTX0RBVEFCQVNFKTtcclxuICAgIGRiLm9wZW5EYigpXHJcbiAgICAgIC50aGVuKCBkYiA9PiB7XHJcbiAgICAgICAgbG9hZERhdGEoKTtcclxuICAgICAgfSk7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gYWRkRXZlbnRMaXN0ZW5lclxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKGNvbXBvbmVudC5yb290KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKGNvbnRhaW5lcikge1xyXG4gICAgWydbb24tY2xpY2tdJ10uZm9yRWFjaChldmVudCA9PiB7XHJcbiAgICAgIHBvbC50b0FycmF5KGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKGV2ZW50KSlcclxuICAgICAgICAgIC5mb3JFYWNoKCBlID0+IHtcclxuICAgICAgICAgICAgZS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IG5hbWUgPSBlLmF0dHJpYnV0ZXNbJ29uLWNsaWNrJ10udmFsdWU7XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50LmV2ZW50SGFuZGxlcnNbbmFtZV0oZSwgZXZlbnQpO1xyXG4gICAgICAgICAgICB9OyAgICAgICAgXHJcbiAgICAgICAgICB9KTsgXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbG9hZERhdGEoKSB7XHJcbiAgICBkYi5yZWFkQWxsKE5PVEFTX1RBQkxFX05BTUUpXHJcbiAgICAgIC50aGVuKCB2YWx1ZXMgPT4ge1xyXG4gICAgICAgIHJvd3MgPSB2YWx1ZXMucmV2ZXJzZSgpO1xyXG4gICAgICAgIGZhdm9yaXRlcyA9ICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm9yaXRlcycpIHx8ICcnKS5zcGxpdCgnLScpO1xyXG4gICAgICAgIHJlbmRlcigpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIGl0ZW1zQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgcm93cy5tYXAoIG5vdGUgPT4ge1xyXG4gICAgICAgICAgbGV0IF9fYmFnID0ge1xyXG4gICAgICAgICAgICBub3RlLFxyXG4gICAgICAgICAgICBmb3JtYXRUZXh0OiBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjc3M6IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZmF2b3JpdGVzLmluY2x1ZGVzKGtleS50b1N0cmluZygpKSA/ICdmYS1zdGFyJyA6ICdmYS1zdGFyLW8nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcmV0dXJuIHBvbC5idWlsZCgnZGl2JywgX19JVEVNX1RFTVBMQVRFLmZvcm1hdChfX2JhZykpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAubWFwKCBlID0+IGUuZmlyc3RFbGVtZW50Q2hpbGQgKVxyXG4gICAgICAgIC5mb3JFYWNoKCBlID0+IHtcclxuICAgICAgICAgIGl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIGFkZEV2ZW50TGlzdGVuZXJcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBhZGRFdmVudExpc3RlbmVycyhpdGVtc0NvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkZWxldGVOb3RlKHRhcmdldCwgbW91c2VFdmVudCl7XHJcbiAgICBsZXQgX19pZCAgICAgID0gcGFyc2VJbnQodGFyZ2V0LmlkLnNwbGl0KCctJylbMV0pO1xyXG4gICAgbGV0IF9fcGF5bG9hZCA9IHJvd3Mud2hlcmUoeyBrZXkgOiBfX2lkIH0pWzBdO1xyXG4gICAgbGV0IF9fZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RlLXswfScuZm9ybWF0KF9faWQpKTtcclxuICAgIFxyXG4gICAgZGIuZGVsZXRlKE5PVEFTX1RBQkxFX05BTUUsIF9faWQpXHJcbiAgICAgIC50aGVuKCAoKSA9PiB7XHJcbiAgICAgICAgcm93cy5yZW1vdmUoX19wYXlsb2FkKTtcclxuICAgICAgICBfX2VsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfX2VsZW1lbnQpO1xyXG4gICAgICB9KTsgICAgICAgICAgICAgICBcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGV4cGFuZENvbGxhcHNlKHRhcmdldCwgbW91c2VFdmVudCkge1xyXG4gICAgbGV0IF9fc3R5bGUgPSB0YXJnZXQucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGU7XHJcbiAgICBpZihfX3N0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKXtcclxuICAgICAgX19zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuY2xhc3NMaXN0LnJlbW92ZSgnZmEtY2FyZXQtZG93bicpO1xyXG4gICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLmNsYXNzTGlzdC5hZGQoJ2ZhLWNhcmV0LXVwJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfX3N0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuY2xhc3NMaXN0LnJlbW92ZSgnZmEtY2FyZXQtdXAnKTtcclxuICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QuYWRkKCdmYS1jYXJldC1kb3duJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGROb3RlKHRhcmdldCwgbW91c2VFdmVudCkge1xyXG4gICAgY3R4LnJvdXRlci5uYXZpZ2F0ZVRvKCdub3RlJyk7XHJcbiAgfSAgXHJcblxyXG4gIGZ1bmN0aW9uIHNhdmVGYXZvcml0ZXModGFyZ2V0LCBtb3VzZUV2ZW50KSB7XHJcbiAgICBsZXQgc3RhciA9IHRhcmdldC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGxldCBrZXkgPSB0YXJnZXQuaWQuc3BsaXQoJy0nKVsxXTtcclxuICAgIGlmIChmYXZvcml0ZXMuaW5jbHVkZXMoa2V5KSl7XHJcbiAgICAgIGZhdm9yaXRlcy5yZW1vdmUoa2V5KTtcclxuICAgICAgc3Rhci5jbGFzc0xpc3QuYWRkKCdmYS1zdGFyLW8nKTtcclxuICAgICAgc3Rhci5jbGFzc0xpc3QucmVtb3ZlKCdmYS1zdGFyJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmYXZvcml0ZXMucHVzaChrZXkpO1xyXG4gICAgICBzdGFyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXN0YXItbycpO1xyXG4gICAgICBzdGFyLmNsYXNzTGlzdC5hZGQoJ2ZhLXN0YXInKTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmF2b3JpdGVzJywgZmF2b3JpdGVzLmpvaW4oJy0nKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBlZGl0Tm90ZSh0YXJnZXQsIG1vdXNlRXZlbnQpIHtcclxuICAgIGN0eC5yb3V0ZXIubmF2aWdhdGVUbygnbm90ZS8nICsgdGFyZ2V0LmlkLnNwbGl0KCctJylbMV0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxuXHJcbn1cclxuXHJcbiIsIu+7v2ltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcbmltcG9ydCBEYldyYXBwZXJTZXJ2aWNlIGZyb20gXCIuLi9saWIvZGJXcmFwcGVyLnNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IE5PVEFTX0RBVEFCQVNFICAgPSAnbm90YXMtYXBwLmRiJzsgXHJcbmNvbnN0IE5PVEFTX1RBQkxFX05BTUUgPSAnbm90YXMnO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGAgIFxyXG48ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyIHczLW1hcmdpbi1ib3R0b21cIj5cclxuICA8aDI+TnVldmEgbm90YTwvaDI+XHJcbiAgPGZvcm0gY2xhc3M9XCJ3My1tYXJnaW4tYm90dG9tXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwidHh0LXRpdGxlXCI+VMOtdHVsbzwvbGFiZWw+XHJcbiAgICA8aW5wdXQgY2xhc3M9XCJ3My1pbnB1dCB3My1ib3JkZXJcIiB0eXBlPVwidGV4dFwiIGlkPVwidHh0LXRpdGxlXCIgcGxhY2Vob2xkZXI9XCJJbnRyb2R1Y2UgdW4gdMOtdHVsb1wiID5cclxuICAgIDxsYWJlbCBmb3I9XCJ0eHQtdGV4dFwiPlRleHRvPC9sYWJlbD5cclxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cInczLWlucHV0IHczLWJvcmRlclwiIGlkPVwidHh0LXRleHRcIiByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPVwiQ29udGVuaWRvIGRlIGxhIG5vdGFcIj48L3RleHRhcmVhPlxyXG4gIDwvZm9ybT5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWJvdHRvbSB3My1jZW50ZXJcIj5cclxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImJ0bi1ncmFiYXJcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1ibGFja1wiPkdyYWJhcjwvYnV0dG9uPlxyXG48L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGN0eCl7XHJcbiAgXHJcbiAgbGV0IGN1cnJlbnQ7XHJcbiAgbGV0IGRiO1xyXG4gIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ2RpdicsIF9fdGVtcGxhdGUpO1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBpbml0QWxsKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdEFsbCgpIHtcclxuXHJcbiAgICBsZXQgX19jb250YWluZXIgPSBjb21wb25lbnQucm9vdC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIF9fY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT3BlbiBkYXRhYmFzZVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGRiID0gbmV3IERiV3JhcHBlclNlcnZpY2UoTk9UQVNfREFUQUJBU0UpO1xyXG4gICAgZGIub3BlbkRiKClcclxuICAgICAgLnRoZW4oICgpID0+IHtcclxuICAgICAgICBsZXQgX19lbmFibGVVSSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBfX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgICBwb2wuJCgnYnRuLWdyYWJhcicpLm9uY2xpY2sgPSBhZGROb3RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgX19pZCA9IGN0eC5yb3V0ZXIuY3VycmVudC5wYXJhbXNbMV0gfHwgJyc7XHJcbiAgICAgICAgaWYgKF9faWQpIHtcclxuICAgICAgICAgIGRiLnJlYWRPbmUoTk9UQVNfVEFCTEVfTkFNRSwgcGFyc2VJbnQoX19pZCkpXHJcbiAgICAgICAgICAgIC50aGVuKCBub3RlID0+IHtcclxuICAgICAgICAgICAgICBjdXJyZW50ID0gbm90ZTtcclxuICAgICAgICAgICAgICBwb2wuJCgndHh0LXRpdGxlJykudmFsdWUgPSBjdXJyZW50LnRpdGxlO1xyXG4gICAgICAgICAgICAgIHBvbC4kKCd0eHQtdGV4dCcpLnZhbHVlICA9IGN1cnJlbnQudGV4dDtcclxuICAgICAgICAgICAgICBwb2wuJCgnaDInLCBjb21wb25lbnQucm9vdClbMF0uaW5uZXJIVE1MID0gJ0VkaWNpw7NuIGRlIG5vdGEnO1xyXG4gICAgICAgICAgICAgIF9fZW5hYmxlVUkoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9fZW5hYmxlVUkoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGROb3RlKCkge1xyXG4gICAgdmFyIF9fdHh0VGl0bGUgPSBwb2wuJCgndHh0LXRpdGxlJyk7XHJcbiAgICB2YXIgX190eHRUZXh0ICA9IHBvbC4kKCd0eHQtdGV4dCcpO1xyXG4gICAgdmFyIF9fdGl0bGUgPSBfX3R4dFRpdGxlLnZhbHVlLnRyaW0oKTtcclxuICAgIHZhciBfX3RleHQgID0gX190eHRUZXh0LnZhbHVlLnRyaW0oKTtcclxuICAgIGlmICghX190aXRsZSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IF9fdHh0VGl0bGUuZm9jdXMoKSwgMjApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIV9fdGV4dCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IF9fdHh0VGV4dC5mb2N1cygpLCAyMCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGRiLnNhdmUoTk9UQVNfVEFCTEVfTkFNRSxcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICBrZXkgICA6IGN1cnJlbnQgPyBjdXJyZW50LmtleSAgOiBkYXRlLnZhbHVlT2YoKSwgXHJcbiAgICAgICAgICAgICAgZGF0ZSAgOiBjdXJyZW50ID8gY3VycmVudC5kYXRlIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnezB9L3sxfS97Mn0nLmZvcm1hdChkYXRlLmdldERhdGUoKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZS5nZXRNb250aCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpKSwgXHJcbiAgICAgICAgICAgICAgdGl0bGUgOiBfX3RpdGxlLCBcclxuICAgICAgICAgICAgICB0ZXh0ICA6IF9fdGV4dCBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oIG5vdGEgPT4ge1xyXG4gICAgICAgICAgICAgIGN0eC5yb3V0ZXIubmF2aWdhdGVUbygnbGlzdCcpOyBcclxuICAgICAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=