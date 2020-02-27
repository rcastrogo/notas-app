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
/* harmony import */ var _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/mapa.js */ "./src/lib/mapa.js");


const __TEMPLATE = `  
<div class="w3-container w3-margin-bottom w3-animate-bottom">
  <div class="w3-border w3-margin-top">
    <button on-click="expandCollapse" class="w3-button w3-block w3-left-align"><span>Buenaventura<span><i class="w3-right w3-large fa fa-caret-down"></i></button>
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
</div>
`;

function aemetComponent() {

  const __TEMPLATE = `
  <div class="w3-container w3-border w3-center w3-round w3-margin-bottom">
    <h3>{nombre} ({provincia})</h3>
    <div>{fn.formatFecha:elaborado}</div>
    <br>
  </div>
  <div style="padding:0">
    <h3 class="w3-center w3-border-bottom">{fn.formatFecha:prediccion.dia[0].fecha:date}</h3>
    <div>{fn.showDay:rows-0}</div>
    <div class="w3-small w3-teal w3-padding w3-center">
      <div><i class="fa fa-arrow-up"></i> {prediccion.dia[0].orto}</div>
      <div><i class="fa fa-arrow-down"></i> {prediccion.dia[0].ocaso}</div>
    </div>
  </div>
  <br/>
  <div style="padding:0">
    <h3 class="w3-center w3-border-bottom">{fn.formatFecha:prediccion.dia[1].fecha:date}</h3>
    <div>{fn.showDay:rows-1}</div>
    <div class="w3-small w3-teal w3-padding w3-center">
      <div><i class="fa fa-arrow-up"></i> {prediccion.dia[1].orto}</div>
      <div><i class="fa fa-arrow-down"></i> {prediccion.dia[1].ocaso}</div> 
    </div>
  </div>
  <br/>
  <div style="padding:0">
    <h3 class="w3-center w3-border-bottom">{fn.formatFecha:prediccion.dia[2].fecha:date}</h3>
    <div>{fn.showDay:rows-2}</div>
    <div class="w3-small w3-teal w3-padding w3-center">
      <div><i class="fa fa-arrow-up"></i> {prediccion.dia[2].orto}</div>
      <div><i class="fa fa-arrow-down"></i> {prediccion.dia[2].ocaso}</div>
    </div>
  </div>
  `;
  let fn = { 
    formatFecha : function(value, ctx, options){
      let tokens = value.split('T');
      if (options && options[0] === 'date') {
        return tokens[0];
      }
      if (options && options[0] === 'time') {
        return tokens[1];
      }
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
      return data.reduce(renderRow, _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].stringBuilder()
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
      this.root = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', __TEMPLATE.format(this.data));
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
    init   : function(container){ },
    render : function(container){
      this.root = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].build('div', __TEMPLATE);
      return this.root;
    },
    mounted : function(container){
      aemetContainer       = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].$('aemetApi-container');
      progressBar          = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].$('progress-bar');
      progressBarContainer = _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].$('progress-bar-container');   
      // =====================================================
      // addEventListener
      // =====================================================
      addEventListeners(component.root);
      callAemetApi();
    },
    eventHandlers : { 
      expandCollapse : expandCollapse,
      requestData    : requestData
    }
  };

  function addEventListeners(container) {
    ['[on-click]'].forEach(event => {
      _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(container.querySelectorAll(event))
          .forEach( e => {
            e.onclick = (event) => {
              let name = e.attributes['on-click'].value;
              component.eventHandlers[name](e, event);
            };        
          }); 
    })
  }

  let timerId;
  function initProgressBar() {
    let counter = 0;
    timerId = setInterval(() => {
      counter = (counter + 9) % 100;
      progressBar.style.width = '{0}%'.format(counter);
    }, 200);
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
    _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].ajax
       .get(ENDPOINT, req => {
         req.setRequestHeader('Accept', 'application/javascript');
       })
       .then(text => JSON.parse(text))
       .then(result => {
         if(result.estado == 200) return _lib_mapa_js__WEBPACK_IMPORTED_MODULE_0__["default"].ajax.get(result.datos);
         throw new Error(result.descripcion);
       })
       .then( text => {
         clearInterval(timerId);                                       
         aemetContainer.innerHTML = '';
         let __aemet = aemetComponent().withData(text);
         aemetContainer.appendChild(__aemet.render());
         __aemet.mounted(ctx);
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
    expandCollapse(target.parentNode.parentNode.previousElementSibling);
    codigo = target.id.split('-')[1];
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
/* harmony import */ var _lib_dbWrapper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/dbWrapper.service */ "./src/lib/dbWrapper.service.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW4tY29udGVudC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVudS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvZGJXcmFwcGVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9tYXBhLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvcHViU3ViLlNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Fib3V0LnBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2VsLXRpZW1wby5wYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ob21lLnBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2xpc3QucGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbmV3LWl0ZW0ucGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsNEM7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX3RlbXBsYXRlID0gYCAgXHJcbiAgPHA+e3RleHR9PC9wPlxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuICByZXR1cm4ge1xyXG4gICAgdGV4dCAgIDogJ8KpIFJhZmFlbCBDYXN0cm8gR8OzbWV6LCAyMDIwJyxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7fSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpZCAgICAgICAgOiBcImFwcEZvb3RlclwiLFxyXG4gICAgICAgIGlubmVySFRNTCA6IF9fdGVtcGxhdGUuZm9ybWF0KHRoaXMpLFxyXG4gICAgICAgIGNsYXNzTmFtZSA6ICd3My1jb250YWluZXIgdzMtdGVhbCB3My1jZW50ZXInXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnZm9vdGVyJywgb3B0aW9ucyk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGBcclxuICA8aDE+e3RpdGxlfTwvaDE+XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xyXG4gIHJldHVybiB7XHJcbiAgICB0aXRsZSAgOiAnTm90YXMgQXBwJyxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7fSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpZCAgICAgICAgOiAnYXBwSGVhZGVyJyxcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLmZvcm1hdCh0aGlzKSxcclxuICAgICAgICBjbGFzc05hbWUgOiAndzMtY29udGFpbmVyIHczLXRlYWwnXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBvbC5idWlsZCgnaGVhZGVyJywgb3B0aW9ucyk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5cclxuY29uc3QgX190ZW1wbGF0ZSA9IGBgO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuXHJcbiAgbGV0IGNvbXBvbmVudCA9IHtcclxuICAgIHJvb3QgICA6IHt9LFxyXG4gICAgaW5pdCAgIDogZnVuY3Rpb24oY29udGFpbmVyKXsgfSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHsgXHJcbiAgICAgICAgaWQgICAgICAgIDogXCJhcHAtY29udGVudC1jb250YWluZXJcIixcclxuICAgICAgICBpbm5lckhUTUwgOiBfX3RlbXBsYXRlLFxyXG4gICAgICAgIGNsYXNzTmFtZSA6ICd3My1jb250YWluZXInLFxyXG4gICAgICAgIHN0eWxlICAgICA6IHsgXHJcbiAgICAgICAgICBtaW5IZWlnaHQgOiAnNDQwcHgnLFxyXG4gICAgICAgICAgcGFkZGluZyAgIDogJzAgMCA2MHB4IDAnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwb2wuYnVpbGQoJ3NlY3Rpb24nLCBvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBpbml0U2Nyb2xsKCk7ICBcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG5cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU2Nyb2xsXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGluaXRTY3JvbGwoKXtcclxuICAgIFxyXG4gIGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xyXG5cdCAgdmFyIHRpbWVvdXQ7XHJcblx0ICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0XHQgIHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcclxuXHRcdCAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdCAgdGltZW91dCA9IG51bGw7XHJcblx0XHRcdCAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcblx0XHQgIH07XHJcblx0XHQgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xyXG5cdFx0ICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcblx0XHQgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcclxuXHRcdCAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcblx0ICB9O1xyXG4gIH07ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIFxyXG4gIGZ1bmN0aW9uIGluaXRTY3JvbGwoKXsgICAgICAgIFxyXG4gICAgdmFyIG5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwTWVudVwiKTtcclxuICAgIGlmKG5hdmJhci5jbGFzc05hbWUuaW5jbHVkZXMoJ3N0aWNreScpKSByZXR1cm47XHJcbiAgICB2YXIgc3RpY2t5ID0gbmF2YmFyLm9mZnNldFRvcDsgICAgICAgICAgXHJcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiBteUZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IHN0aWNreSkge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwic3RpY2t5XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5XCIpO1xyXG4gICAgICB9XHJcbiAgICB9OyAgXHJcbiAgfVxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGRlYm91bmNlKGluaXRTY3JvbGwsIDE1MCksIGZhbHNlKTtcclxuICBpbml0U2Nyb2xsKCk7XHJcbn07IiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi4vbGliL3B1YlN1Yi5TZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBfX1RFTVBMQVRFID0gYCAgXHJcbiAgPGEgaHJlZj1cIlwiIHJvdXRlLWxpbmsgY2xhc3M9XCJ3My1iYXItaXRlbSB3My1idXR0b24gc2VsZWN0ZWRcIj5JbmljaW88L2E+XHJcbiAgPGEgaHJlZj1cImVsLXRpZW1wb1wiIHJvdXRlLWxpbmsgY2xhc3M9XCJ3My1iYXItaXRlbSB3My1idXR0b25cIj5FbCB0aWVtcG88L2E+XHJcbiAgPGEgaHJlZj1cImxpc3RcIiByb3V0ZS1saW5rIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uXCI+Tm90YXM8L2E+XHJcbiAgPGEgaHJlZj1cIm5vdGVcIiByb3V0ZS1saW5rIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uXCI+KzwvYT5cclxuICA8YSBocmVmPVwiYWJvdXRcIiByb3V0ZS1saW5rIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uIHczLXJpZ2h0XCI+PzwvYT5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgbGV0IGNvbXBvbmVudCA9ICB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGlkICAgICA6ICdtZW51LmNvbXBvbmVudC5yZWYnLFxyXG4gICAgaW5pdCAgIDogZnVuY3Rpb24oY29udGFpbmVyKXt9LFxyXG4gICAgcmVuZGVyIDogZnVuY3Rpb24oY29udGFpbmVyKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0geyBcclxuICAgICAgICBpZCAgICAgICAgOiBcImFwcE1lbnVcIixcclxuICAgICAgICBpbm5lckhUTUwgOiBfX1RFTVBMQVRFLmZvcm1hdCh0aGlzKSxcclxuICAgICAgICBjbGFzc05hbWUgOiAndzMtYmFyIHczLWJsYWNrJ1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucm9vdCA9IHBvbC5idWlsZCgnbmF2Jywgb3B0aW9ucyk7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvb3Q7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgaW5pdEFsbCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRBbGwoKSB7XHJcbiAgICBsZXQgbGlua3MgPSBwb2wuJCgnW3JvdXRlLWxpbmtdJywgY29tcG9uZW50LnJvb3QpO1xyXG4gICAgbGV0IG1hcCAgID0gbGlua3MubWFwKCBmdW5jdGlvbihsaW5rKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcGF0aCA6IGxpbmsuaHJlZi5zcGxpdCgnLycpLmxhc3RJdGVtKCksIGxpbmsgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgLnRvRGljdGlvbmFyeSgncGF0aCcsICdsaW5rJyk7XHJcbiAgICBwdWJzdWIuc3Vic2NyaWJlKCd2aWV3LmNoYW5nZScsIChuYW1lLCByb3V0ZSkgPT4ge1xyXG4gICAgICBsaW5rcy5mb3JFYWNoKCBlID0+IGUuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSApO1xyXG4gICAgICBtYXBbcm91dGUubmFtZV0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgIH0pOyBcclxuICB9XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcblxyXG59XHJcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4vbGliL21hcGEuanNcIjtcclxuaW1wb3J0IHB1YnN1YiBmcm9tIFwiLi9saWIvcHViU3ViLlNlcnZpY2VcIjtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENvbXBvbmVudHNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmltcG9ydCBoZWFkZXJDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCBmb290ZXJDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9mb290ZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCBjb250ZW50Q29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbi1jb250ZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgbWVudUNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL21lbnUuY29tcG9uZW50XCI7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQYWdlc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuaW1wb3J0IGhvbWVQYWdlIGZyb20gXCIuL3ZpZXdzL2hvbWUucGFnZVwiO1xyXG5pbXBvcnQgbGlzdFBhZ2UgZnJvbSBcIi4vdmlld3MvbGlzdC5wYWdlXCI7XHJcbmltcG9ydCBhYm91dFBhZ2UgZnJvbSBcIi4vdmlld3MvYWJvdXQucGFnZVwiO1xyXG5pbXBvcnQgbm90ZVBhZ2UgZnJvbSBcIi4vdmlld3MvbmV3LWl0ZW0ucGFnZVwiO1xyXG5pbXBvcnQgZWxUaWVtcG9QYWdlIGZyb20gXCIuL3ZpZXdzL2VsLXRpZW1wby5wYWdlXCI7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBSb3V0ZXNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IGNvbXBvbmVudHMgPSAgWyBcclxuICBoZWFkZXJDb21wb25lbnQoKSxcclxuICBtZW51Q29tcG9uZW50KCksXHJcbiAgY29udGVudENvbXBvbmVudCgpLFxyXG4gIGZvb3RlckNvbXBvbmVudCgpXHJcbl07XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBSb3V0ZXJcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IHJvdXRlciA9IHtcclxuICByb3V0ZXMgIDogW10sXHJcbiAgYWRkUm91dGU6IGZ1bmN0aW9uIChuYW1lLCBwYXR0ZXJuLCBjb250cm9sbGVyKSB7XHJcbiAgICB0aGlzLnJvdXRlcy5wdXNoKHsgbmFtZSA6IG5hbWUsIHBhdGggOiBwYXR0ZXJuLCBjb250cm9sZXIgOiBjb250cm9sbGVyIH0pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfSxcclxuICBnZXRSb3V0ZTogZnVuY3Rpb24gKHJvdXRlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXMud2hlcmUoZnVuY3Rpb24ocil7XHJcbiAgICAgIGxldCBtYXRjaCA9IHIucGF0aC5leGVjKHJvdXRlKTtcclxuICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgci5wYXJhbXMgPSBtYXRjaC5tYXAoIGUgPT4gZSApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBtYXRjaDtcclxuICAgIH0pWzBdO1xyXG4gIH0sXHJcbiAgbmF2aWdhdGVUbyA6IGZ1bmN0aW9uIChyb3V0ZSkge1xyXG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5nZXRSb3V0ZShyb3V0ZSk7XHJcbiAgICBsZXQgdXJsID0gJ3tvcmlnaW59ezB9ezF9Jy5mb3JtYXQoJy9ub3Rhcy1hcHAvJywgcm91dGUsIGxvY2F0aW9uKTtcclxuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgcm91dGUsIHVybCk7XHJcbiAgICBzaG93Q29udGVudCgpO1xyXG4gIH0sXHJcbiAgbm9ybWFsaXplUGF0aCA6IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgIHJldHVybiB1cmwucmVwbGFjZShkb2N1bWVudC5iYXNlVVJJLCAnJyk7XHJcbiAgfSxcclxuICBzeW5jIDogZnVuY3Rpb24oKXtcclxuICAgIHRoaXMuY3VycmVudCA9IHRoaXMuZ2V0Um91dGUodGhpcy5ub3JtYWxpemVQYXRoKHdpbmRvdy5sb2NhdGlvbi5ocmVmKSk7XHJcbiAgICBzaG93Q29udGVudCgpO1xyXG4gIH0sXHJcbiAgY3VycmVudCA6IHt9XHJcbn07XHJcbnJvdXRlci5hZGRSb3V0ZSgnbGlzdCcsICAvbGlzdCQvLCAgICAgICAgICAgIGxpc3RQYWdlKVxyXG4gICAgICAuYWRkUm91dGUoJ2Fib3V0JywgL2Fib3V0JC8sICAgICAgICAgICBhYm91dFBhZ2UpXHJcbiAgICAgIC5hZGRSb3V0ZSgnbm90ZScsICAvbm90ZSQvLCAgICAgICAgICAgIG5vdGVQYWdlKVxyXG4gICAgICAuYWRkUm91dGUoJ25vdGUnLCAgL25vdGVcXC8oXFxkezEzfSkkLywgIG5vdGVQYWdlKVxyXG4gICAgICAuYWRkUm91dGUoJ2VsLXRpZW1wbycsICAvZWwtdGllbXBvJC8sICBlbFRpZW1wb1BhZ2UpXHJcbiAgICAgIC5hZGRSb3V0ZSgnJywgICAgICAvJC8sICAgICAgICAgICAgICAgIGhvbWVQYWdlKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJbml0IEFwcFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKGZ1bmN0aW9uKCl7XHJcblxyXG4gIGNvbnN0IHJvb3QgPSBwb2wuJCgnYXBwQ29udGVudCcpO1xyXG4gIGNvbXBvbmVudHMuZm9yRWFjaCggYyA9PiB7XHJcbiAgICBpZihjLmluaXQpIGMuaW5pdChyb290KTtcclxuICAgIHJvb3QuYXBwZW5kQ2hpbGQoYy5yZW5kZXIocm9vdCkpO1xyXG4gICAgaWYoYy5tb3VudGVkKSBjLm1vdW50ZWQocm9vdCk7IFxyXG4gIH0pO1xyXG5cclxuICBwb2wuJCgnW3JvdXRlLWxpbmtdJylcclxuICAgICAuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbihlKXtcclxuICAgICAgICAgIGxldCByb3V0ZSA9IHJvdXRlci5ub3JtYWxpemVQYXRoKGUudGFyZ2V0LmhyZWYpO1xyXG4gICAgICAgICAgaWYgKHJvdXRlci5jdXJyZW50ICE9IHJvdXRlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgcm91dGVyLm5hdmlnYXRlVG8ocm91dGUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gIFxyXG4gICAgIH0pO1xyXG5cclxufSkoKTtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFN5bmMgY29udGVudFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgY29udGFpbmVyID0gcG9sLiQoJ2FwcC1jb250ZW50LWNvbnRhaW5lcicpO1xyXG5sZXQgY3VycmVudFZpZXc7XHJcbmZ1bmN0aW9uIHNob3dDb250ZW50KCl7XHJcbiAgbGV0IHZpZXdfcmVmID0gcm91dGVyLmN1cnJlbnQuY29udHJvbGVyO1xyXG4gIGlmKCFjdXJyZW50VmlldyB8fCBjdXJyZW50VmlldyAhPSB2aWV3X3JlZikge1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnOyAgICBcclxuICAgIGN1cnJlbnRWaWV3ID0gdmlld19yZWY7XHJcbiAgICBsZXQgdmlld19pbnN0YW5jZSA9IGN1cnJlbnRWaWV3KHtyb3V0ZXJ9KTtcclxuICAgIGlmKHZpZXdfaW5zdGFuY2UuaW5pdCkgdmlld19pbnN0YW5jZS5pbml0KCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodmlld19pbnN0YW5jZS5yZW5kZXIoKSk7XHJcbiAgICBpZih2aWV3X2luc3RhbmNlLm1vdW50ZWQpIHZpZXdfaW5zdGFuY2UubW91bnRlZChjb250YWluZXIpO1xyXG4gICAgcHVic3ViLnB1Ymxpc2goJ3ZpZXcuY2hhbmdlJywgcm91dGVyLmN1cnJlbnQpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbnJvdXRlci5zeW5jKCk7XHJcblxyXG53aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uKCl7XHJcbiAgcm91dGVyLnN5bmMoKTtcclxufVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU2VydmljZVdvcmtlclxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcblxyXG4gIGlmKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3Ipe1xyXG4gICAgdHJ5IHtcclxuICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2VXb3JrZXIuanMnKTtcclxuICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciBSZWdpc3RlcmVkXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciBSZWdpc3RyYXRpb24gRmFpbGVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pO1xyXG4iLCLvu79pbXBvcnQgcG9sIGZyb20gXCIuL21hcGEuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERiV3JhcHBlclNlcnZpY2V7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgIHRoaXMuZGJuYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGIgPSAnJztcclxuICB9XHJcblxyXG4gIG9wZW5EYigpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICBsZXQgcmVxdWVzdCA9IHdpbmRvdy5pbmRleGVkREIub3Blbih0aGlzLmRibmFtZSwgMSk7XHJcblxyXG5cdCAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kYiA9IGUudGFyZ2V0LnJlc3VsdDtcclxuXHRcdCAgICByZXNvbHZlKHRoaXMuZGIpO1xyXG5cdCAgICB9O1xyXG5cclxuICAgICAgcmVxdWVzdC5vbmVycm9yID0gZSA9PiB7ICBcclxuICAgICAgICByZWplY3QoJ0Vycm9yJyk7XHJcbiAgICAgIH07XHJcblx0XHJcblx0ICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKGUpID0+IHtcclxuXHRcdCAgICB0aGlzLmRiID0gZS50YXJnZXQucmVzdWx0O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZih0aGlzLmRiLm9iamVjdFN0b3JlTmFtZXMgJiYgdGhpcy5kYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKFwibm90YXNcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5kYi5kZWxldGVPYmplY3RTdG9yZShcIm5vdGFzXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RvcmUgPSB0aGlzLmRiLmNyZWF0ZU9iamVjdFN0b3JlKFwibm90YXNcIiwgeyBrZXlQYXRoIDogXCJrZXlcIiB9KTsgICAgICAgXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlYWRBbGwobmFtZSl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdmFyIF9faXRlbXMgPSBbXTtcclxuICAgICAgdGhpcy5kYlxyXG4gICAgICAgICAgLnRyYW5zYWN0aW9uKG5hbWUsIFwicmVhZG9ubHlcIilcclxuICAgICAgICAgIC5vYmplY3RTdG9yZShuYW1lKVxyXG4gICAgICAgICAgLm9wZW5DdXJzb3IoSURCS2V5UmFuZ2UubG93ZXJCb3VuZCgwKSlcclxuICAgICAgICAgIC5vbnN1Y2Nlc3MgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdmFyIF9fY3Vyc29yID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcclxuICAgICAgICAgICAgaWYoX19jdXJzb3IpIHtcclxuICAgICAgICAgICAgICBfX2l0ZW1zLnB1c2goX19jdXJzb3IudmFsdWUpO1xyXG4gICAgICAgICAgICAgIF9fY3Vyc29yLmNvbnRpbnVlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShfX2l0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2F2ZShzdG9yZSwgdmFsdWUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHtcclxuICAgICAgKGZ1bmN0aW9uKHJlc3VsdCl7XHJcbiAgICAgICAgcmVzdWx0Lm9uc3VjY2VzcyA9IGV2ZW50ID0+IHsgcmVzb2x2ZSh2YWx1ZSk7IH07XHJcbiAgICAgICAgcmVzdWx0Lm9uZXJyb3IgICA9IGVycm9yID0+IHsgY29uc29sZS5sb2coZXJyb3IpOyB9O1xyXG4gICAgICB9KSh0aGlzLmRiXHJcbiAgICAgICAgICAgICAudHJhbnNhY3Rpb24oc3RvcmUsIFwicmVhZHdyaXRlXCIpXHJcbiAgICAgICAgICAgICAub2JqZWN0U3RvcmUoc3RvcmUpXHJcbiAgICAgICAgICAgICAucHV0KHZhbHVlKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZShzdG9yZSwga2V5KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIChmdW5jdGlvbihyZXN1bHQpe1xyXG4gICAgICAgIHJlc3VsdC5vbnN1Y2Nlc3MgPSBldmVudCA9PiB7IHJlc29sdmUoKTsgfTtcclxuICAgICAgICByZXN1bHQub25lcnJvciAgID0gZXJyb3IgPT4geyBjb25zb2xlLmxvZyhlcnJvcik7IH07XHJcbiAgICAgIH0pKHRoaXMuZGJcclxuICAgICAgICAgICAgIC50cmFuc2FjdGlvbihzdG9yZSwgXCJyZWFkd3JpdGVcIilcclxuICAgICAgICAgICAgIC5vYmplY3RTdG9yZShzdG9yZSlcclxuICAgICAgICAgICAgIC5kZWxldGUoa2V5KSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlYWRPbmUoc3RvcmUsIGtleSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAoZnVuY3Rpb24ocmVzdWx0KXtcclxuICAgICAgICByZXN1bHQub25zdWNjZXNzID0gZXZlbnQgPT4geyByZXNvbHZlKGV2ZW50LnRhcmdldC5yZXN1bHQpOyB9O1xyXG4gICAgICAgIHJlc3VsdC5vbmVycm9yICAgPSBlcnJvciA9PiB7IGNvbnNvbGUubG9nKGVycm9yKTt9O1xyXG4gICAgICB9KSh0aGlzLmRiXHJcbiAgICAgICAgICAgICAudHJhbnNhY3Rpb24oc3RvcmUsIFwicmVhZHdyaXRlXCIpXHJcbiAgICAgICAgICAgICAub2JqZWN0U3RvcmUoc3RvcmUpXHJcbiAgICAgICAgICAgICAuZ2V0KGtleSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIiwiXHJcblxyXG5sZXQgX19tb2R1bGUgPSB7fTtcclxuKGZ1bmN0aW9uKG1vZHVsZSwgbmFtZSl7XHJcblxyXG4gIHZhciBfbW9kdWxlID0gIG1vZHVsZVtuYW1lXSA9IHsgYXBwbHkgOiBmdW5jdGlvbiBhcHBseShvLCBjLCBkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZCkgYXBwbHkobywgZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8gJiYgYyAmJiB0eXBlb2YgYyA9PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIGMpeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjW3BdID09ICdvYmplY3QnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBseShvW3BdLCBjW3BdICkgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvW3BdID0gY1twXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19OyAgICAgIFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBVdGlsc1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24obW9kdWxlKXtcclxuICAgIG1vZHVsZS5hcHBseShtb2R1bGUseyBcclxuICAgICAgdG9BcnJheSAgICAgOiBmdW5jdGlvbih2KXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodik7IH0sXHJcbiAgICAgIGlzTnVsbCAgICAgIDogZnVuY3Rpb24odil7cmV0dXJuIHYgPT09IG51bGw7IH0sXHJcbiAgICAgIGlzQXJyYXkgICAgIDogZnVuY3Rpb24odil7cmV0dXJuIEFycmF5LmlzQXJyYXkodik7IH0sXHJcbiAgICAgIGlzU3RyaW5nICAgIDogZnVuY3Rpb24odil7cmV0dXJuIHR5cGVvZiB2ID09ICdzdHJpbmcnO30sXHJcbiAgICAgIGlzQm9vbGVhbiAgIDogZnVuY3Rpb24odil7cmV0dXJuIHR5cGVvZiB2ID09ICdib29sZWFuJzt9LFxyXG4gICAgICBpc051bWJlciAgICA6IGZ1bmN0aW9uKHYpe3JldHVybiB0eXBlb2YgdiA9PSAnbnVtYmVyJzt9LFxyXG4gICAgICBpc0Z1bmN0aW9uICA6IGZ1bmN0aW9uKHYpe3JldHVybiB0eXBlb2YgdiA9PSAnZnVuY3Rpb24nO30sXHJcbiAgICAgIGlzT2JqZWN0ICAgIDogZnVuY3Rpb24odil7cmV0dXJuIHYgJiYgdHlwZW9mIHYgPT0gJ29iamVjdCc7fSxcclxuICAgICAgY2xvbmUgICAgICAgOiBmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgaWYobW9kdWxlLmlzQXJyYXkobykpICAgICAgICAgICAgIHJldHVybiBvLnNsaWNlKDApO1xyXG4gICAgICAgIGlmKG1vZHVsZS5pc09iamVjdChvKSAmJiBvLmNsb25lKSByZXR1cm4gby5jbG9uZSgpO1xyXG4gICAgICAgIGlmKG1vZHVsZS5pc09iamVjdChvKSl7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMobykucmVkdWNlKCBmdW5jdGlvbihhLCBrKXtcclxuICAgICAgICAgICAgYVtrXSA9IG1vZHVsZS5jbG9uZShvW2tdKTtcclxuICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgICB9LCB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvO1xyXG4gICAgICB9LCAgICAgICAgXHJcbiAgICAgIGpvaW4gICAgICAgIDogZnVuY3Rpb24oaXRlbXMsIHByb3BlcnR5LCBzZXBhcmF0b3Ipe1xyXG4gICAgICAgIHJldHVybiBpdGVtcy5yZWR1Y2UoZnVuY3Rpb24oYSwgbyl7IHJldHVybiBhLmFwcGVuZChvW3Byb3BlcnR5IHx8ICdpZCddKTsgfSwgW10pXHJcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLScgOiAoc2VwYXJhdG9yIHx8ICcnKSk7IFxyXG4gICAgICB9LFxyXG4gICAgICBzdHJpbmdCdWlsZGVyIDogZnVuY3Rpb24ocyl7XHJcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZSAgICAgIDogcyB8fCAnJyxcclxuICAgICAgICAgICAgICAgICAgIGFwcGVuZCAgICAgOiBmdW5jdGlvbihzKXsgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUgKyBzOyByZXR1cm4gdGhpczt9LFxyXG4gICAgICAgICAgICAgICAgICAgYXBwZW5kTGluZSA6IGZ1bmN0aW9uKHMpeyB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZSArIChzIHx8ICcnKSArICdcXG4nOyByZXR1cm4gdGhpczt9fVxyXG4gICAgICB9LFxyXG4gICAgICBidWlsZCA6IGZ1bmN0aW9uKHRhZ05hbWUsIG8pe1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbW9kdWxlLmlzU3RyaW5nKG8pID8geyBpbm5lckhUTUwgOiBvIH0gOiBvO1xyXG4gICAgICAgIHJldHVybiBfbW9kdWxlLmFwcGx5KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSksIG9wdGlvbnMpO1xyXG4gICAgICB9LFxyXG4gICAgICAkIDogZnVuY3Rpb24oZSwgY29udHJvbCl7IFxyXG4gICAgICAgIHJldHVybiAodHlwZW9mIGUgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUpIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZS50b0FycmF5KChjb250cm9sIHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKGUpIHx8IFtdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGU7XHJcbiAgICAgIH0gXHJcbiAgICB9KTtcclxuICB9KF9tb2R1bGUpKTtcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gU3RyaW5nc1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24obW9kdWxlKXtcclxuICAgIG1vZHVsZS5hcHBseShTdHJpbmcsIHtcclxuICAgICAgc3RyaW5nQnVpbGRlciA6IG1vZHVsZS5zdHJpbmdCdWlsZGVyLFxyXG4gICAgICBsZWZ0UGFkICAgICAgIDogZnVuY3Rpb24gKHZhbCwgc2l6ZSwgY2gpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gJycgKyB2YWw7XHJcbiAgICAgICAgaWYgKGNoID09PSBudWxsIHx8IGNoID09PSB1bmRlZmluZWQgfHwgY2ggPT09ICcnKSBjaCA9ICcgJzsgICAgICAgICAgICBcclxuICAgICAgICB3aGlsZSAocmVzdWx0Lmxlbmd0aCA8IHNpemUpIHJlc3VsdCA9IGNoICsgcmVzdWx0OyAgICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRyaW1WYWx1ZXMgOiBmdW5jdGlvbiAodmFsdWVzKXsgcmV0dXJuIHZhbHVlcy5tYXAoZnVuY3Rpb24ocyl7cmV0dXJuIHMudHJpbSgpO30pO31cclxuICAgIH0pO1xyXG4gICAgbW9kdWxlLmFwcGx5KFN0cmluZy5wcm90b3R5cGUsIHtcclxuICAgICAgcmVwbGFjZUFsbCAgOiBmdW5jdGlvbihwYXR0ZXJuLCByZXBsYWNlbWVudCkgeyByZXR1cm4gdGhpcy5zcGxpdChwYXR0ZXJuKS5qb2luKHJlcGxhY2VtZW50KTsgfSxcclxuICAgICAgcmVwZWF0ICAgICAgOiBTdHJpbmcucHJvdG90eXBlLnJlcGVhdCAgICAgfHwgZnVuY3Rpb24oYSkgeyByZXR1cm4gbmV3IEFycmF5KGEgKyAxKS5qb2luKHRoaXMpOyB9LFxyXG4gICAgICBjb250YWlucyAgICA6IFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMgICB8fCBmdW5jdGlvbih0LCBzdGFydCkgeyByZXR1cm4gdGhpcy5pbmRleE9mKHQpID49IChzdGFydCB8fCAwKTsgfSxcclxuICAgICAgc3RhcnRzV2l0aCAgOiBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggfHwgZnVuY3Rpb24odCl7IHJldHVybiB0aGlzLmluZGV4T2YodCkgPT0gMDsgfSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICB0b0Zsb2F0ICAgICA6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLnRyaW0oKS5yZXBsYWNlQWxsKCcuJywgJycpLnJlcGxhY2VBbGwoJywnLCAnLicpIH0sXHJcbiAgICAgIGZpeERhdGUgICAgIDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuc3BsaXQoJyAnKVswXTsgfSxcclxuICAgICAgZml4VGltZSAgICAgOiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5zcGxpdCgnICcpWzFdOyB9LFxyXG4gICAgICBmaXhZZWFyICAgICA6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLmZpeERhdGUoKS5zcGxpdCgnLycpWzJdO30sXHJcbiAgICAgIHRyaW1TZWNvbmRzIDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuc3BsaXQoJzonKVswXSArICc6JyArIHRoaXMuc3BsaXQoJzonKVsxXSA7IH0sXHJcbiAgICAgIHBhZGRpbmdMZWZ0IDogZnVuY3Rpb24ocGFkZGluZ1ZhbHVlKXsgcmV0dXJuIChwYWRkaW5nVmFsdWUgKyB0aGlzKS5zbGljZSgtcGFkZGluZ1ZhbHVlLmxlbmd0aCk7IH0sXHJcbiAgICAgIGZvcm1hdCAgICAgIDogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgX19hcmcgICAgID0gYXJndW1lbnRzO1xyXG4gICAgICAgIHZhciBfX2NvbnRleHQgPSBfX2FyZ1tfX2FyZy5sZW5ndGggLSAxXSB8fCBzZWxmOyAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2UoL1xceyhcXGQrfFtee10rKVxcfS9nLCBmdW5jdGlvbihtLCBrZXkpe1xyXG4gICAgICAgICAgaWYoa2V5LmluZGV4T2YoJzonKSA+IDApe1xyXG4gICAgICAgICAgICB2YXIgX19mbiA9IGtleS5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICBfX2ZuWzBdICA9IG1vZHVsZS50ZW1wbGF0ZXMuZ2V0VmFsdWUoX19mblswXSwgX19jb250ZXh0KTtcclxuICAgICAgICAgICAgX19mblsxXSAgPSBtb2R1bGUudGVtcGxhdGVzLmdldFZhbHVlKF9fZm5bMV0sIF9fY29udGV4dCk7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2ZuWzBdKF9fZm5bMV0sIF9fY29udGV4dCwgX19mbi5zbGljZSgyKSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gL15cXGQrJC8udGVzdChrZXkpID8gX19hcmdba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHR5cGVvZiBfX2NvbnRleHRba2V5XSA9PT0gXCJ1bmRlZmluZWRcIikgPyBtb2R1bGUudGVtcGxhdGVzLmdldFZhbHVlKGtleSwgX19jb250ZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX19jb250ZXh0W2tleV07IFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTsgICAgICBcclxuICB9KF9tb2R1bGUpKTsgICAgICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gQXJyYXlcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAgIFxyXG4gIChmdW5jdGlvbihtb2R1bGUpe1xyXG4gICAgbW9kdWxlLmFwcGx5KEFycmF5LnByb3RvdHlwZSwgeyAgICAgICAgICBcclxuICAgICAgcmVtb3ZlICAgOiBmdW5jdGlvbihvKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleE9mKG8pO1xyXG4gICAgICAgIGlmIChpbmRleCAhPSAtMSkgdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9LFxyXG4gICAgICBhZGQgICAgICA6IGZ1bmN0aW9uKG8pIHtcclxuICAgICAgICB0aGlzLnB1c2gobyk7XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICAgIH0sXHJcbiAgICAgIGFwcGVuZCAgIDogZnVuY3Rpb24obykge1xyXG4gICAgICAgIHRoaXMucHVzaChvKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfSxcclxuICAgICAgaXRlbSAgICAgOiBmdW5jdGlvbihwcm9wTmFtZSwgdmFsdWUsIGRlZil7XHJcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50cz09MSA/IHRoaXMuZmlsdGVyKCBmdW5jdGlvbih2KXtyZXR1cm4gdlsnaWQnXSA9PSBwcm9wTmFtZSB8fCB2WydfaWQnXSA9PSBwcm9wTmFtZX0pWzBdIHx8IGRlZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmZpbHRlciggZnVuY3Rpb24odil7cmV0dXJuIHZbcHJvcE5hbWVdID09IHZhbHVlfSlbMF0gfHwgZGVmO1xyXG4gICAgICB9LFxyXG4gICAgICBjb250YWlucyA6IGZ1bmN0aW9uKHByb3BOYW1lLHZhbHVlKXsgcmV0dXJuIHRoaXMuaXRlbShwcm9wTmFtZSx2YWx1ZSk7IH0sXHJcbiAgICAgIGxhc3RJdGVtIDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzW3RoaXMubGVuZ3RoIC0gMV07IH0sXHJcbiAgICAgIHNlbGVjdCAgIDogZnVuY3Rpb24oc2VudGVuY2UpeyByZXR1cm4gdGhpcy5tYXAoc2VudGVuY2UpIH0sICAgXHJcbiAgICAgIHdoZXJlICAgIDogZnVuY3Rpb24oc2VudGVuY2UpeyBcclxuICAgICAgICBpZihtb2R1bGUuaXNGdW5jdGlvbihzZW50ZW5jZSkpIHJldHVybiB0aGlzLmZpbHRlcihzZW50ZW5jZSk7XHJcbiAgICAgICAgaWYobW9kdWxlLmlzT2JqZWN0KHNlbnRlbmNlKSl7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXIobmV3IEZ1bmN0aW9uKCdhJywgT2JqZWN0LmtleXMoc2VudGVuY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbihhLCBwcm9wbmFtZSwgaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhICsgKGkgPiAwID8gJyAmJiAnIDogJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgIChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX3ZhbHVlID0gc2VudGVuY2VbcHJvcG5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKF9fdmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHJldHVybiAnezF9LnRlc3QoYS57MH0pJy5mb3JtYXQocHJvcG5hbWUsIF9fdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG1vZHVsZS5pc1N0cmluZyhfX3ZhbHVlKSkgcmV0dXJuICdhLnswfSA9PT0gXFwnezF9XFwnJy5mb3JtYXQocHJvcG5hbWUsIF9fdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnYS57MH0gPT09IHsxfScuZm9ybWF0KHByb3BuYW1lLCBfX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0oKSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJ3JldHVybiAnKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfSxcclxuICAgICAgc29ydEJ5ICAgICAgOiBmdW5jdGlvbihwcm9wbmFtZSwgZGVzYyl7XHJcbiAgICAgICAgdmFyIF9fb3JkZXIgPSBbXTtcclxuICAgICAgICB2YXIgX19uYW1lcyA9IHByb3BuYW1lLnNwbGl0KCcsJykubWFwKCBmdW5jdGlvbih0b2tlbixpKXsgXHJcbiAgICAgICAgICB2YXIgX19wYWlyID0gdG9rZW4uc3BsaXQoJyAnKTtcclxuICAgICAgICAgIF9fb3JkZXJbaV0gPSAoX19wYWlyWzFdICYmIChfX3BhaXJbMV0udG9VcHBlckNhc2UoKT09J0RFU0MnKSkgPyAtMSA6IDE7ICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gX19wYWlyWzBdOyAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBfX29yZGVyWzBdID0gKGRlc2MgPyAtMSA6IDEpXHJcbiAgICAgICAgdGhpcy5zb3J0KGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gMDsgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfX2ZuID0gZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgX194ID0gYVtfX25hbWVzW2ldXTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciBfX3kgPSBiW19fbmFtZXNbaV1dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoX194IDwgX195KSByZXR1cm4gLTEgKiBfX29yZGVyW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoX194ID4gX195KSByZXR1cm4gIDEgKiBfX29yZGVyW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoaSA8IF9fbmFtZXMubGVuZ3RoKSByZXR1cm4gX19mbihhLGIpOyAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwOyAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19mbihhLGIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7ICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBvcmRlckJ5ICAgICA6IGZ1bmN0aW9uKHNlbnRlbmNlKXtcclxuICAgICAgICB2YXIgX19zZW50ZW5jZSA9IHNlbnRlbmNlOyAgICBcclxuICAgICAgICBpZihtb2R1bGUuaXNTdHJpbmcoc2VudGVuY2UpKSBfX3NlbnRlbmNlID0gZnVuY3Rpb24oYSl7IHJldHVybiBhW3NlbnRlbmNlXTsgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZX0pXHJcbiAgICAgICAgICAgICAgICAgICAuc29ydChmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciB4ID0gX19zZW50ZW5jZShhKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHZhciB5ID0gX19zZW50ZW5jZShiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoKHggPCB5KSA/IC0xIDogKCh4ID4geSkgPyAxIDogMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgfSk7ICAgICBcclxuICAgICAgfSxcclxuICAgICAgZGlzdGluY3QgICAgOiBmdW5jdGlvbihzZW50ZW5jZSkge1xyXG4gICAgICAgIHZhciBfX3NlbnRlbmNlID0gc2VudGVuY2U7ICAgIFxyXG4gICAgICAgIGlmKG1vZHVsZS5pc1N0cmluZyhzZW50ZW5jZSkpIF9fc2VudGVuY2UgPSBmdW5jdGlvbihhKXsgcmV0dXJuIGFbc2VudGVuY2VdOyB9XHJcbiAgICAgICAgdmFyIHIgPSBbXTtcclxuICAgICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgICB2YXIgX3ZhbHVlID0gX19zZW50ZW5jZShpdGVtKTtcclxuICAgICAgICAgIGlmKHIuaW5kZXhPZihfdmFsdWUpPT0tMSkgci5wdXNoKF92YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdyb3VwQnkgOiBmdW5jdGlvbihwcm9wKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWR1Y2UoZnVuY3Rpb24oZ3JvdXBzLCBpdGVtKSB7XHJcbiAgICAgICAgICB2YXIgdmFsID0gaXRlbVtwcm9wXTtcclxuICAgICAgICAgIChncm91cHNbdmFsXSA9IGdyb3Vwc1t2YWxdIHx8IFtdKS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgcmV0dXJuIGdyb3Vwc1xyXG4gICAgICAgIH0sIHt9KVxyXG4gICAgICB9LFxyXG4gICAgICB0b0RpY3Rpb25hcnkgOiBmdW5jdGlvbihwcm9wLCB2YWx1ZSl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVkdWNlKGZ1bmN0aW9uKGEsIGQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbZFtwcm9wXV0gPSB2YWx1ZSA/IGRbdmFsdWVdIDogZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge30pOyAgXHJcbiAgICAgIH1cclxuICAgIH0pOyAgICAgICBcclxuICB9KF9tb2R1bGUpKTtcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFRlbXBsYXRlc1xyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24obW9kdWxlKXtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRWYWx1ZShrZXksIHNjb3BlKSB7ICAgICAgICBcclxuICAgICAgcmV0dXJuIGtleS5zcGxpdCgvXFwufFxcW3xcXF0vKVxyXG4gICAgICAgICAgICAgICAgLnJlZHVjZSggZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChiID09PSAnJykgcmV0dXJuIGE7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhW2JdID09PSB1bmRlZmluZWQgPyAoYSA9PT0gc2VsZiA/ICcnIDogc2VsZikgOiBhW2JdO1xyXG4gICAgICAgICAgICAgICAgfSwgc2NvcGUgfHwgc2VsZiApOyAgICBcclxuICAgIH1cclxuICAgXHJcbiAgICBmdW5jdGlvbiBtZXJnZSh0ZW1wbGF0ZSwgbywga2V5KSB7XHJcbiAgICAgIHZhciBfX3Jlc3VsdCA9IHRlbXBsYXRlLnJlcGxhY2UoL3soW157XSspP30vZywgZnVuY3Rpb24gKG0sIGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYoa2V5LmluZGV4T2YoJzonKSA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19mbiA9IGtleS5zcGxpdCgnOicpOyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fZm5bMF0gID0gZ2V0VmFsdWUoX19mblswXSwgbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fZm5bMV0gID0gZ2V0VmFsdWUoX19mblsxXSwgbyk7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2ZuWzBdKF9fZm5bMV0sIG8pOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHIgICA9IGdldFZhbHVlKGtleSwgbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgX19rID0gKGtleS5jb250YWlucygnLicpID8gJycgOiAnby4nKSArIGtleTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHIpID09ICdmdW5jdGlvbicpeyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcihvKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1lbHNleyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcjtcclxuICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiAocikgPT0gJ2Z1bmN0aW9uJyA/IHIobykgOiByO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pOyAgICAgXHJcbiAgICAgIHJldHVybiBfX3Jlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaWxsVGVtcGxhdGUoZSwgc2NvcGUpIHtcclxuICAgICAgdmFyIF9yb290ID0gbW9kdWxlLiQoZSk7XHJcbiAgICAgIHZhciBfZWxlbWVudHMgPSBtb2R1bGUuJCgnW3hiaW5kXScsIF9yb290KTsgXHJcbiAgICAgIGlmIChfcm9vdC5hdHRyaWJ1dGVzLnhiaW5kKSBfZWxlbWVudHMucHVzaChfcm9vdCk7XHJcbiAgICAgIF9lbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIFN0cmluZy50cmltVmFsdWVzKGNoaWxkLmF0dHJpYnV0ZXMueGJpbmQudmFsdWUuc3BsaXQoJzsnKSkuZm9yRWFjaChmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICAgIGlmICh0b2tlbiA9PT0gJycpIHJldHVybjtcclxuICAgICAgICAgIHZhciBfdG9rZW5zID0gU3RyaW5nLnRyaW1WYWx1ZXModG9rZW4uc3BsaXQoJzonKSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICB2YXIgX3BhcmFtcyA9IFN0cmluZy50cmltVmFsdWVzKF90b2tlbnNbMV0uc3BsaXQoL1xcc3xcXCwvKSk7XHJcbiAgICAgICAgICB2YXIgX3ZhbHVlID0gZ2V0VmFsdWUoX3BhcmFtc1swXSwgc2NvcGUpO1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiAoX3ZhbHVlKSA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHZhciBfYXJncyA9IF9wYXJhbXMuc2xpY2UoMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIHApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8geGJpbmQ9XCJ0ZXh0Q29udGVudDpEYXRhLmZuVGVzdCBAT3RoZXIsQSw1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5wdXNoKHAuY2hhckF0KDApID09ICdAJyA/IGdldFZhbHVlKHAuc2xpY2UoMSksIHNjb3BlKSA6IHApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtzY29wZSwgY2hpbGRdKTtcclxuICAgICAgICAgICAgX3ZhbHVlID0gX3ZhbHVlLmFwcGx5KHNjb3BlLCBfYXJncyk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKF9wYXJhbXNbMV0pIHtcclxuICAgICAgICAgICAgdmFyIF9mdW5jID0gZ2V0VmFsdWUoX3BhcmFtc1sxXSwgc2NvcGUpO1xyXG4gICAgICAgICAgICBfdmFsdWUgPSBfZnVuYyhfdmFsdWUsIF9wYXJhbXNbMl0sIHNjb3BlLCBjaGlsZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjaGlsZFtfdG9rZW5zWzBdXSA9IF92YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGV4ZWN1dGVUZW1wbGF0ZShlLCB2YWx1ZXMsIGRvbSkge1xyXG4gICAgICB2YXIgX3RlbXBsYXRlID0gbW9kdWxlLiQoZSk7XHJcbiAgICAgIHZhciBfcmVzdWx0ICAgPSB2YWx1ZXMucmVkdWNlKCBmdW5jdGlvbihhLCB2LCBpKXtcclxuICAgICAgICB2YXIgX25vZGUgPSB7IGluZGV4IDogaSxcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEgIDogdixcclxuICAgICAgICAgICAgICAgICAgICAgIG5vZGUgIDogZmlsbFRlbXBsYXRlKF90ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSksIHYpIH07XHJcbiAgICAgICAgYS5ub2Rlcy5wdXNoKF9ub2RlKTtcclxuICAgICAgICBpZiAoIWRvbSkgYS5odG1sLnB1c2goX25vZGUubm9kZS5vdXRlckhUTUwucmVwbGFjZSgveGJpbmQ9XCJbXlwiXSpcIi9nLCAnJykpO1xyXG4gICAgICAgIHJldHVybiBhOyBcclxuICAgICAgfSwgeyBub2RlcyA6IFtdLCBodG1sIDogW10gfSk7XHJcbiAgICAgIHJldHVybiBkb20gPyBfcmVzdWx0Lm5vZGVzIDogX3Jlc3VsdC5odG1sLmpvaW4oJycpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBtb2R1bGUudGVtcGxhdGVzID0geyBnZXRWYWx1ZSAgOiBnZXRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlICAgICA6IG1lcmdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZXhlY3V0ZSAgIDogZXhlY3V0ZVRlbXBsYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZmlsbCAgICAgIDogZmlsbFRlbXBsYXRlIH07XHJcblxyXG4gIH0oX21vZHVsZSkpO1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gQWpheFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24obW9kdWxlKXsgIFxyXG4gICAgbW9kdWxlLmFqYXggPSB7fTtcclxuICAgIG1vZHVsZS5hcHBseShtb2R1bGUuYWpheCwge1xyXG4gICAgICBnZXQgIDogZnVuY3Rpb24gKHVybCwgaW50ZXJjZXB0b3IpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIC8vdXJsICs9ICh1cmwuY29udGFpbnMoJz8nKSA/ICcmbXM9JyA6ICc/bXM9JykgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICAgIHZhciB4bWwgPSB0aGlzLmNyZWF0ZVhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICB4bWwub3BlbignR0VUJywgdXJsLCB0cnVlKTtcclxuICAgICAgICAgIGlmKGludGVyY2VwdG9yKSBpbnRlcmNlcHRvcih4bWwpO1xyXG4gICAgICAgICAgeG1sLnNldFJlcXVlc3RIZWFkZXIoJ0lmLU1vZGlmaWVkLVNpbmNlJywgJ1RodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UJyk7XHJcbiAgICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignQ2FjaGUtQ29udHJvbCcsICduby1jYWNoZScpO1xyXG4gICAgICAgICAgeG1sLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHsgaWYgKHhtbC5yZWFkeVN0YXRlID09IDQpIHJlc29sdmUoeG1sLnJlc3BvbnNlVGV4dCkgfTtcclxuICAgICAgICAgIHhtbC5vbmVycm9yID0gZnVuY3Rpb24oZSkgeyByZWplY3QoZSk7IH07XHJcbiAgICAgICAgICB4bWwuc2VuZChudWxsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIHBvc3QgOiBmdW5jdGlvbih1cmwsIHBhcmFtcywgY2FsbEJhY2spIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB2YXIgeG1sID0gdGhpcy5jcmVhdGVYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhtbC5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcclxuICAgICAgICB4bWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7IGlmICh4bWwucmVhZHlTdGF0ZSA9PSA0KSBjYWxsQmFjayh4bWwucmVzcG9uc2VUZXh0KSB9O1xyXG4gICAgICAgIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0OklTTy04ODU5LTEnKTtcclxuICAgICAgICB4bWwuc2VuZChwYXJhbXMpO1xyXG4gICAgICB9LFxyXG4gICAgICBjYWxsV2ViTWV0aG9kIDogZnVuY3Rpb24odXJsLCBwYXJhbXMsIGNhbGxCYWNrKSB7XHJcbiAgICAgICAgdmFyIHhtbCA9IHRoaXMuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4bWwub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeG1sLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7IGlmICh4bWwucmVhZHlTdGF0ZSA9PSA0KSBjYWxsQmFjayh4bWwucmVzcG9uc2VUZXh0KSB9O1xyXG4gICAgICAgIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcpO1xyXG4gICAgICAgIHhtbC5zZW5kKHBhcmFtcyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNyZWF0ZVhNTEh0dHBSZXF1ZXN0IDogZnVuY3Rpb24oKXsgcmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpOyB9XHJcbiAgICB9KTsgIFxyXG4gIH0oX21vZHVsZSkpOyBcclxuICAgICAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIC8vIFRhYmJseVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAoZnVuY3Rpb24gKG1vZHVsZSl7XHJcbiAgICAgIFxyXG4gICAgdmFyIF9fY29udGV4dDtcclxuXHJcbiAgICBmdW5jdGlvbiBfX0V4ZWN1dGVDb2RlKGNvZGUpe1xyXG5cclxuICAgICAgX19jb250ZXh0ID0geyBzZWN0aW9ucyA6IFtdLCBncm91cHMgOiBbXSwgZGV0YWlscyA6IFtdfTtcclxuXHJcbiAgICAgIHZhciBfX2N1cjtcclxuICAgICAgdmFyIF9fZnVuYyAgICAgICA9ICcnO1xyXG4gICAgICB2YXIgX19mdW5jQm9keSAgID0gJyc7XHJcbiAgICAgIHZhciBfX3NldFN0YXRlICA9IGZhbHNlO1xyXG5cclxuICAgICAgZnVuY3Rpb24gX19nZXQodmFsdWUpe1xyXG4gICAgICAgIGlmKHZhbHVlICYmIHZhbHVlLnRyaW0oKS5zdGFydHNXaXRoKCdAJykpe1xyXG4gICAgICAgICAgcmV0dXJuIF9fY29udGV4dFt2YWx1ZS50cmltKCkuc3BsaXQoJ0AnKVsxXS50cmltKCldIHx8ICcnO1xyXG4gICAgICAgIH1lbHNlIGlmKHZhbHVlKXtcclxuICAgICAgICAgIHJldHVybiB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfSAgXHJcblxyXG4gICAgICBmdW5jdGlvbiBfX3BhcnNlX3Byb3BlcnRpZXModmFsdWUpe1xyXG4gICAgICAgIHZhciBfX3JlZyAgID0gIC8oW2EtekEtWjAtOV9cXC1dKilcXHMqOlxccyooJ1teJ10qJ3xbXlxcc10qKS9nO1xyXG4gICAgICAgIHZhciBfX28gICAgID0ge307XHJcbiAgICAgICAgdmFyIF9fbWF0Y2ggPSBfX3JlZy5leGVjKHZhbHVlKTtcclxuICAgICAgICB3aGlsZSAoX19tYXRjaCAhPSBudWxsKSB7XHJcbiAgICAgICAgICBfX29bX19tYXRjaFsxXS50cmltKCldID0gX19nZXQoX19tYXRjaFsyXS50cmltKCkucmVwbGFjZSgvXicoW14nXSopJyQvZywgJyQxJykpO1xyXG4gICAgICAgICAgX19tYXRjaCA9IF9fcmVnLmV4ZWModmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX19vXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIF9fcGFyc2VMaW5lKGwsIG8pe1xyXG4gICAgICAgIGlmKCFfX2Z1bmMgJiYgIWwudHJpbSgpKSByZXR1cm4gZnVuY3Rpb24oKXt9O1xyXG4gICAgICAgIHZhciBfX2tleXMgPSAvREVGSU5FfCN8Q1JFQVRFfFNFVHxGVU5DVElPTnxFTkQvO1xyXG4gICAgICAgIGlmKF9fa2V5cy50ZXN0KGwpKXtcclxuICAgICAgICAgIGlmKC9eIy8udGVzdChsKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe307XHJcbiAgICAgICAgICB9ZWxzZSBpZigvXlNFVCAoXFx3LiopLy50ZXN0KGwpKXsgIFxyXG4gICAgICAgICAgICB2YXIgX190b2tlbnMgPSBsLm1hdGNoKC9eU0VUIChcXHcuKikkLyk7XHJcbiAgICAgICAgICAgIF9fc2V0U3RhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBfX2Z1bmMgICAgICA9IF9fdG9rZW5zWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgX19mdW5jQm9keSAgPSAnJztcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICAgIH1lbHNlIGlmKC9eRlVOQ1RJT04gKFxcdy4qKS8udGVzdChsKSl7ICBcclxuICAgICAgICAgICAgdmFyIF9fdG9rZW5zID0gbC5tYXRjaCgvXkZVTkNUSU9OIChcXHcuKikkLyk7XHJcbiAgICAgICAgICAgIF9fc2V0U3RhdGUgID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF9fZnVuYyAgICAgICA9IF9fdG9rZW5zWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgX19mdW5jQm9keSAgID0gJyc7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe307XHJcbiAgICAgICAgICB9ZWxzZSBpZigvXkVORC8udGVzdChsKSl7ICAgICAgXHJcbiAgICAgICAgICAgIHZhciBfX2JvZHkgPSBfX2Z1bmNCb2R5O1xyXG4gICAgICAgICAgICB2YXIgX19uYW1lID0gX19mdW5jO1xyXG4gICAgICAgICAgICBfX2Z1bmMgPSBfX2Z1bmNCb2R5ID0gJyc7IFxyXG4gICAgICAgICAgICBpZihfX3NldFN0YXRlKXtcclxuICAgICAgICAgICAgICBfX3NldFN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXsgX19jdXJbX19uYW1lXSA9IF9fYm9keS50cmltKCk7IH1cclxuICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCl7IGN0eFtfX25hbWVdID0gbmV3IEZ1bmN0aW9uKCdjdHgnLCBfX2JvZHkpOyB9XHJcbiAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIH1lbHNlIGlmKC9eREVGSU5FXFxzXFxzKihcXHcuKilcXHMqPVxccyooLiopJC8udGVzdChsKSl7XHJcbiAgICAgICAgICAgIHZhciBfX3Rva2VucyA9IGwubWF0Y2goL15ERUZJTkVcXHNcXHMqKFthLXpBLVowLTlfXFwtXSopXFxzKj1cXHMqKC4qKSQvKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBfX3Rva2VucztcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXsgY3R4W3Rva2Vuc1sxXS50cmltKCldID0gdG9rZW5zWzJdLnRyaW0oKTsgfVxyXG4gICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICB9ZWxzZSBpZigvXkNSRUFURVxcc1xccyooXFx3KikgKC4qKSQvLnRlc3QobCkpe1xyXG4gICAgICAgICAgICB2YXIgX190b2tlbnMgPSBsLm1hdGNoKC9eQ1JFQVRFXFxzXFxzKihcXHcqKSAoLiopJC8pO1xyXG4gICAgICAgICAgICBpZihfX3Rva2Vuc1sxXT09J3NlY3Rpb24nKXtcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gX190b2tlbnM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXsgXHJcbiAgICAgICAgICAgICAgICAgIGN0eC5zZWN0aW9ucy5wdXNoKF9fcGFyc2VfcHJvcGVydGllcyh0b2tlbnNbMl0pKTsgXHJcbiAgICAgICAgICAgICAgICAgIF9fY3VyID0gY3R4LnNlY3Rpb25zW2N0eC5zZWN0aW9ucy5sZW5ndGggLSAxXTt9XHJcbiAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoX190b2tlbnNbMV09PSdncm91cCcpe1xyXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpeyBcclxuICAgICAgICAgICAgICAgIHZhciB0b2tlbnMgPSBfX3Rva2VucztcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihjdHgpeyBcclxuICAgICAgICAgICAgICAgICAgY3R4Lmdyb3Vwcy5wdXNoKF9fcGFyc2VfcHJvcGVydGllcyh0b2tlbnNbMl0pKTtcclxuICAgICAgICAgICAgICAgICAgX19jdXIgPSBjdHguZ3JvdXBzW2N0eC5ncm91cHMubGVuZ3RoIC0gMV07fVxyXG4gICAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoX190b2tlbnNbMV09PSdkZXRhaWwnKXtcclxuICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgICAgICAgICB2YXIgdG9rZW5zID0gX190b2tlbnM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oY3R4KXtcclxuICAgICAgICAgICAgICAgICAgY3R4LmRldGFpbHMucHVzaChfX3BhcnNlX3Byb3BlcnRpZXModG9rZW5zWzJdKSk7XHJcbiAgICAgICAgICAgICAgICAgIF9fY3VyID0gY3R4LmRldGFpbHNbY3R4LmRldGFpbHMubGVuZ3RoIC0gMV07fVxyXG4gICAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfWVsc2V7IHRocm93IG5ldyBFcnJvcignVGFiYmx5IDogVW5yZWNvZ25pemVkIHRleHQgYWZ0ZXIgREVGSU5FJyl9ICBcclxuICAgICAgICB9ZWxzZXsgXHJcbiAgICAgICAgICBpZihfX2Z1bmMpe1xyXG4gICAgICAgICAgICBfX2Z1bmNCb2R5ICs9IG87XHJcbiAgICAgICAgICAgIF9fZnVuY0JvZHkgKz0gJ1xcbic7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpe307XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RhYmJseSA6IFVucmVjb2duaXplZCB0ZXh0JylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvZGUuc3BsaXQoJ1xcbicpLmZvckVhY2goZnVuY3Rpb24obCl7IFxyXG4gICAgICAgIF9fcGFyc2VMaW5lKGwudHJpbSgpLGwpKF9fY29udGV4dCk7IFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiB7IGNvbnRleHQgOiBfX2NvbnRleHQgfTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW9kdWxlLnRhYmJseSA9IHsgZXhlY3V0ZSA6IF9fRXhlY3V0ZUNvZGUgfTtcclxuXHJcbiAgfShfbW9kdWxlKSk7XHJcbiAgICAgIFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAvLyBSZXBvcnRzXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIChmdW5jdGlvbihtb2R1bGUpIHtcclxuXHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lICAgICAgICAgICAgICAgID0ge307ICAgICAgXHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmdlbmVyYXRlUmVwb3J0ID0gZnVuY3Rpb24ocmQsIGRhdGEsIG1lZGlhdG9yKXtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmJlZ2luJyB9KTtcclxuICAgICAgdmFyIF9fcmQgICAgICA9IHJkIHx8IG1vZHVsZS5SZXBvcnRFbmdpbmUucmQ7XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gVHJhbnNmb3JtYXIgbG9zIGRhdG9zXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgdmFyIF9fZGF0YVNldCA9IF9fcmQuY29udGV4dC5wYXJzZURhdGEgPyBfX3JkLmNvbnRleHQucGFyc2VEYXRhKF9fcmQsIGRhdGEsIG1lZGlhdG9yLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZGF0YTtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmxvZy5tZXNzYWdlJywgdGV4dCA6ICdJbmljaWFsaXphbmRvLi4uJyB9KTtcclxuICAgICAgY29uc29sZS50aW1lKCdSZW5kZXInKTtcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBJbmljaWFsaXphciBmdW5jaW9uZXMgcGFyYSBsYSBnZW5lcmFjacOzbiBkZSBjb250ZW5pZG8gcGVyc29uYWxpemFkb1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIGZ1bmN0aW9uIF9faW5pdENvbnRlbnRQcm92aWRlcnMoKXtcclxuICAgICAgICBbX19yZC5jb250ZXh0LnNlY3Rpb25zLCBfX3JkLmNvbnRleHQuZGV0YWlscywgX19yZC5jb250ZXh0Lmdyb3Vwc11cclxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKGEsYil7IHJldHVybiBhLmNvbmNhdChiKTsgfSwgW10pXHJcbiAgICAgICAgLm1hcChmdW5jdGlvbihzKXtcclxuICAgICAgICAgIGlmKHMudmFsdWVQcm92aWRlcmZuKXtcclxuICAgICAgICAgICAgcy52YWx1ZVByb3ZpZGVyID0gbW9kdWxlLnRlbXBsYXRlcy5nZXRWYWx1ZShzLnZhbHVlUHJvdmlkZXJmbiwgc2VsZik7IFxyXG4gICAgICAgICAgICBkZWxldGUgcy52YWx1ZVByb3ZpZGVyZm47ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYocy5mb290ZXJWYWx1ZVByb3ZpZGVyZm4pe1xyXG4gICAgICAgICAgICBzLmZvb3RlclZhbHVlUHJvdmlkZXIgPSBtb2R1bGUudGVtcGxhdGVzLmdldFZhbHVlKHMuZm9vdGVyVmFsdWVQcm92aWRlcmZuLCBzZWxmKTsgXHJcbiAgICAgICAgICAgIGRlbGV0ZSBzLmZvb3RlclZhbHVlUHJvdmlkZXJmbjsgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihzLmhlYWRlclZhbHVlUHJvdmlkZXJmbil7XHJcbiAgICAgICAgICAgIHMuaGVhZGVyVmFsdWVQcm92aWRlciA9IG1vZHVsZS50ZW1wbGF0ZXMuZ2V0VmFsdWUocy5oZWFkZXJWYWx1ZVByb3ZpZGVyZm4sIHNlbGYpOyBcclxuICAgICAgICAgICAgZGVsZXRlIHMuaGVhZGVyVmFsdWVQcm92aWRlcmZuO1xyXG4gICAgICAgICAgfSAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEdlbmVyYWNpw7NuIGRlIGxhcyBzZWNjaW9uZXMgZGUgY2FiZWNlcmEgZGUgbGFzIGFncnVwYWNpb25lc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgdmFyIF9fTUVSR0VfQU5EX1NFTkQgPSBmdW5jdGlvbih0LCBwLCBmbmtleSl7IG1lZGlhdG9yLnNlbmQobW9kdWxlLnRlbXBsYXRlcy5tZXJnZSh0LCBwLCBmbmtleSkpOyB9O1xyXG4gICAgICBmdW5jdGlvbiBfX2dyb3Vwc0hlYWRlcnMoKXtcclxuICAgICAgICBfX2dyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uKGcsIGlpKXtcclxuICAgICAgICAgIGlmKGlpIDwgX19icmVha0luZGV4KSByZXR1cm47IFxyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnNlY3Rpb25zLmdyb3VwLmhlYWRlcicsIHZhbHVlIDogZy5pZCB9KTsgIFxyXG4gICAgICAgICAgaWYoZy5kZWZpbml0aW9uLmhlYWRlcikgcmV0dXJuIF9fTUVSR0VfQU5EX1NFTkQoZy5kZWZpbml0aW9uLmhlYWRlciwgZywgJ2NvbXBpbGVkX2hlYWRlcmZuJyk7XHJcbiAgICAgICAgICBpZihnLmRlZmluaXRpb24uaGVhZGVyVmFsdWVQcm92aWRlcikgcmV0dXJuIG1lZGlhdG9yLnNlbmQoZy5kZWZpbml0aW9uLmhlYWRlclZhbHVlUHJvdmlkZXIoZykpOyBcclxuICAgICAgICB9KTsgICAgXHJcbiAgICAgIH1cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEdlbmVyYWNpw7NuIGRlIGxhcyBzZWNjaW9uZXMgZGUgcmVzdW1lbiBkZSBsYXMgYWdydXBhY2lvbmVzXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBmdW5jdGlvbiBfX2dyb3Vwc0Zvb3RlcnMoaW5kZXgpe1xyXG4gICAgICAgIHZhciBfX2dnID0gX19ncm91cHMubWFwKGZ1bmN0aW9uKGcpe3JldHVybiBnO30pOyBcclxuICAgICAgICBpZihpbmRleCkgX19nZy5zcGxpY2UoMCwgaW5kZXgpO1xyXG4gICAgICAgIF9fZ2cucmV2ZXJzZSgpLmZvckVhY2goIGZ1bmN0aW9uKGcpe1xyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnNlY3Rpb25zLmdyb3VwLmZvb3RlcicsIHZhbHVlIDogZy5pZCB9KTsgICAgICAgICAgXHJcbiAgICAgICAgICBpZihnLmRlZmluaXRpb24uZm9vdGVyKSByZXR1cm4gX19NRVJHRV9BTkRfU0VORChnLmRlZmluaXRpb24uZm9vdGVyLCBnLCAnY29tcGlsZWRfZm9vdGVyZm4nKTtcclxuICAgICAgICAgIGlmKGcuZGVmaW5pdGlvbi5mb290ZXJWYWx1ZVByb3ZpZGVyKSByZXR1cm4gbWVkaWF0b3Iuc2VuZChnLmRlZmluaXRpb24uZm9vdGVyVmFsdWVQcm92aWRlcihnKSk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICB9IFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBHZW5lcmFjacOzbiBkZSBsYXMgc2VjY2lvbmVzIGRlIGRldGFsbGVcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19kZXRhaWxzU2VjdGlvbnMoKXtcclxuICAgICAgICBfX2RldGFpbHMuZm9yRWFjaChmdW5jdGlvbihkKXtcclxuICAgICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5zZWN0aW9ucy5kZXRhaWwnLCB2YWx1ZSA6IGQuaWQgfSk7XHJcbiAgICAgICAgICBpZihkLnRlbXBsYXRlKSByZXR1cm4gX19NRVJHRV9BTkRfU0VORChkLnRlbXBsYXRlLCBkLCAnY29tcGlsZWRmbicpXHJcbiAgICAgICAgICBpZihkLnZhbHVlUHJvdmlkZXIpIHJldHVybiBtZWRpYXRvci5zZW5kKGQudmFsdWVQcm92aWRlcihkKSk7XHJcbiAgICAgICAgfSkgICAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBHZW5lcmFjacOzbiBkZSBsYXMgc2VjY2lvbmVzIGRlIHRvdGFsIGdlbmVyYWxcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19ncmFuZFRvdGFsU2VjdGlvbnMoKXtcclxuICAgICAgICBfX3RvdGFscy5mb3JFYWNoKGZ1bmN0aW9uKHQpe1xyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnNlY3Rpb25zLnRvdGFsJywgdmFsdWUgOiB0LmlkIH0pO1xyXG4gICAgICAgICAgaWYodC50ZW1wbGF0ZSkgcmV0dXJuIF9fTUVSR0VfQU5EX1NFTkQodC50ZW1wbGF0ZSwgdCwgJ2NvbXBpbGVkZm4nKVxyXG4gICAgICAgICAgaWYodC52YWx1ZVByb3ZpZGVyKSByZXR1cm4gbWVkaWF0b3Iuc2VuZCh0LnZhbHVlUHJvdmlkZXIodCkpO1xyXG4gICAgICAgIH0pICAgICAgICAgICAgXHJcbiAgICAgIH0gXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIEdlbmVyYWNpw7NuIGRlIGxhcyBzZWNjaW9uZXMgZGUgY2FiZWNlcmEgZGVsIGluZm9ybWVcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19yZXBvcnRIZWFkZXJTZWN0aW9ucygpe1xyXG4gICAgICAgIF9faGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHQpe1xyXG4gICAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LnNlY3Rpb25zLmhlYWRlcicsIHZhbHVlIDogdCB9KTtcclxuICAgICAgICAgIGlmKHQudGVtcGxhdGUpIHJldHVybiBfX01FUkdFX0FORF9TRU5EKHQudGVtcGxhdGUsIHQsICdjb21waWxlZGZuJylcclxuICAgICAgICAgIGlmKHQudmFsdWVQcm92aWRlcikgcmV0dXJuIG1lZGlhdG9yLnNlbmQodC52YWx1ZVByb3ZpZGVyKHQpKTtcclxuICAgICAgICB9KSAgICAgICAgICAgIFxyXG4gICAgICB9IFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBJbmljaWFsaXphciBlbCBvYmpldG8gcXVlIHNpcnZlIGRlIGFjdW11bGFkb3JcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgZnVuY3Rpb24gX19yZXNvbHZlU3VtbWFyeU9iamVjdCgpe1xyXG4gICAgICAgIHZhciBfX3N1bW1hcnkgPSBKU09OLnBhcnNlKF9fcmQuY29udGV4dC5zdW1tYXJ5IHx8ICd7fScpO1xyXG4gICAgICAgIGlmKF9fcmQuY29udGV4dC5vbkluaXRTdW1tYXJ5T2JqZWN0KSByZXR1cm4gX19yZC5jb250ZXh0Lm9uSW5pdFN1bW1hcnlPYmplY3QoX19zdW1tYXJ5KTsgICAgICBcclxuICAgICAgICByZXR1cm4gX19zdW1tYXJ5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgX19icmVha0luZGV4ID0gLTE7IFxyXG5cclxuICAgICAgdmFyIF9fc3VtbWFyeSAgICA9IF9fcmVzb2x2ZVN1bW1hcnlPYmplY3QoKTtcclxuICAgICAgdmFyIF9faGVhZGVycyAgICA9IChfX3JkLmNvbnRleHQuc2VjdGlvbnMgfHwgW10pLndoZXJlKHsgdHlwZSA6ICdoZWFkZXInIH0pO1xyXG4gICAgICB2YXIgX190b3RhbHMgICAgID0gKF9fcmQuY29udGV4dC5zZWN0aW9ucyB8fCBbXSkud2hlcmUoeyB0eXBlIDogJ3RvdGFsJyB9KTtcclxuICAgICAgdmFyIF9fZm9vdGVycyAgICA9IChfX3JkLmNvbnRleHQuc2VjdGlvbnMgfHwgW10pLndoZXJlKHsgdHlwZSA6ICdmb290ZXInIH0pO1xyXG4gICAgICB2YXIgX19kZXRhaWxzICAgID0gX19yZC5jb250ZXh0LmRldGFpbHMgfHwgW107XHJcbiAgICAgIHZhciBfX2dyb3VwcyAgICAgPSBfX3JkLmNvbnRleHQuZ3JvdXBzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihnLCBpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgIG5hbWUgICAgICAgOiAnRycgKyAoaSsxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJkICAgICAgICAgOiBfX3JkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pdGlvbiA6IGcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ICAgIDogJycsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSAgICAgICA6IG1vZHVsZS5jbG9uZShfX3N1bW1hcnkpLCAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXQgOiBmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfX2sgPSB2YWx1ZVt0aGlzLmRlZmluaXRpb24ua2V5XS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19HeCA9IHNlbGYuQlNbdGhpcy5uYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5hbGxbX19rXSA9IF9fR3guYWxsW19fa10gfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3guYWxsW19fa10ucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fR3gucmVjb3JkQ291bnQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9fcmVzdW1lID09PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9fcmVzdW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmNvcHkodmFsdWUsIHRoaXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fX3Jlc3VtZSA9IE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubGVuZ3RoID4gMCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmNvcHkodmFsdWUsIHRoaXMuZGF0YSk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bSAgOiBmdW5jdGlvbih2YWx1ZSl7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX19rID0gdmFsdWVbdGhpcy5kZWZpbml0aW9uLmtleV0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9fR3ggPSBzZWxmLkJTW3RoaXMubmFtZV07IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX0d4LmFsbFtfX2tdID0gX19HeC5hbGxbX19rXSB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5hbGxbX19rXS5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19HeC5yZWNvcmRDb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9fcmVzdW1lID09PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGUuUmVwb3J0RW5naW5lLnN1bSh2YWx1ZSwgdGhpcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdCA6IGZ1bmN0aW9uKHZhbHVlKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlW3RoaXMuZGVmaW5pdGlvbi5rZXldID09IHRoaXMuY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19ICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgfHwgW107ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgc2VsZi5CUyA9IHsgcmVwb3J0RGVmaW5pdGlvbiA6IF9fcmQsIG1lZGlhdG9yIDogbWVkaWF0b3IgfTsgICAgICAgICAgICAgIFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIE9yZGVuYXIgbG9zIGRhdG9zXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgaWYoX19yZC5jb250ZXh0Lml0ZXJhdGVmbil7XHJcbiAgICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmxvZy5tZXNzYWdlJywgdGV4dCA6ICdJbmljaWFsaXphbmRvIGVsZW1lbnRvcy4uLicgfSk7XHJcbiAgICAgICAgX19kYXRhU2V0LmZvckVhY2goX19yZC5jb250ZXh0Lml0ZXJhdGVmbik7XHJcbiAgICAgIH1cclxuICAgICAgaWYoX19yZC5jb250ZXh0Lm9yZGVyQnkpe1xyXG4gICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5sb2cubWVzc2FnZScsIHRleHQgOiAnT3JkZW5hbmRvIGRhdG9zLi4uJyB9KTtcclxuICAgICAgICBfX2RhdGFTZXQuc29ydEJ5KF9fcmQuY29udGV4dC5vcmRlckJ5LCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBJbmljaWFsaXphclxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIHNlbGYuQlMgPSB7IHJlY29yZENvdW50ICAgICAgOiAwLCBcclxuICAgICAgICAgICAgICAgICAgRzAgICAgICAgICAgICAgICA6IG1vZHVsZS5jbG9uZShfX3N1bW1hcnkpLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhU2V0ICAgICAgICAgIDogX19kYXRhU2V0LFxyXG4gICAgICAgICAgICAgICAgICByZXBvcnREZWZpbml0aW9uIDogX19yZCwgXHJcbiAgICAgICAgICAgICAgICAgIG1lZGlhdG9yICAgICAgICAgOiBtZWRpYXRvciB9O1xyXG4gICAgICBfX2dyb3Vwcy5mb3JFYWNoKCBmdW5jdGlvbihnLCBpKXsgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgZy5jdXJyZW50ID0gKF9fZGF0YVNldCAmJiBfX2RhdGFTZXRbMF0pID8gX19kYXRhU2V0WzBdW2cuZGVmaW5pdGlvbi5rZXldIDogJyc7XHJcbiAgICAgICAgc2VsZi5CU1tnLm5hbWVdID0geyByZWNvcmRDb3VudCA6IDAsIGFsbCA6IHt9IH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZihfX3JkLmNvbnRleHQub25TdGFydGZuKSBfX3JkLmNvbnRleHQub25TdGFydGZuKHNlbGYuQlMpO1xyXG4gICAgICBfX2luaXRDb250ZW50UHJvdmlkZXJzKCk7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5yZW5kZXIucm93cycgfSk7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5sb2cubWVzc2FnZScsIHRleHQgOiAnR2VuZXJhbmRvIGluZm9ybWUuLi4nIH0pO1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gQ2FiZWNlcmFzIGRlbCBpbmZvcm1lXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBfX3JlcG9ydEhlYWRlclNlY3Rpb25zKCk7XHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAvLyBDYWJlY2VyYXMgaW5pY2lhbGVzXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBpZihfX2RhdGFTZXQubGVuZ3RoID4gMCkgX19ncm91cHNIZWFkZXJzKCk7IFxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gSXRlcmFyIHNvYnJlIGxvcyBlbGVtZW50b3NcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIF9fZGF0YVNldC5mb3JFYWNoKGZ1bmN0aW9uKHIsIGkpeyBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gUHJvY2VzYXIgZWwgZWxlbWVudG9cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICAgICAgICAgXHJcbiAgICAgICAgc2VsZi5CUy5yZWNvcmRDb3VudCsrO1xyXG4gICAgICAgIHNlbGYuQlMuaXNMYXN0Um93ICAgICAgICA9IF9fZGF0YVNldC5sZW5ndGggPT09IHNlbGYuQlMucmVjb3JkQ291bnQ7XHJcbiAgICAgICAgc2VsZi5CUy5pc0xhc3RSb3dJbkdyb3VwID0gc2VsZi5CUy5pc0xhc3RSb3c7XHJcbiAgICAgICAgc2VsZi5CUy5wZXJjZW50ICAgICAgPSAoc2VsZi5CUy5yZWNvcmRDb3VudC9fX2RhdGFTZXQubGVuZ3RoKSAqIDEwMDsgIFxyXG4gICAgICAgIHNlbGYuQlMucHJldmlvdXMgICAgID0gc2VsZi5CUy5kYXRhIHx8IHI7XHJcbiAgICAgICAgc2VsZi5CUy5kYXRhICAgICAgICAgPSByOyBcclxuICAgICAgICBfX2dyb3Vwcy5mb3JFYWNoKCBmdW5jdGlvbihnLCBpKXsgXHJcbiAgICAgICAgICBzZWxmLkJTW2cubmFtZV0uZGF0YSAgPSBPYmplY3QuY3JlYXRlKGcuZGF0YSk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuc3VtKHIsIHNlbGYuQlMuRzApOyAgICAgICAgXHJcbiAgICAgICAgaWYoX19yZC5jb250ZXh0Lm9uUm93Zm4pIF9fcmQuY29udGV4dC5vblJvd2ZuKHNlbGYuQlMpO1xyXG4gICAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlICA6ICdyZXBvcnQucmVuZGVyLnJvdycsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICA6IHNlbGYuQlMucGVyY2VudC50b0ZpeGVkKDEpICsgJyAlJywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIDogc2VsZi5CUy5wZXJjZW50IH0pO1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBEZXRlcm1pbmFyIHNpIGhheSBjYW1iaW8gZW4gYWxndW5hIGRlIGxhcyBjbGF2ZXMgZGUgYWdydXBhY2nDs25cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgaWYoX19ncm91cHMuZXZlcnkoIGZ1bmN0aW9uKGcpeyByZXR1cm4gZy50ZXN0KHIpIH0pKXtcclxuICAgICAgICAgIF9fZ3JvdXBzLmZvckVhY2goIGZ1bmN0aW9uKGcpeyBnLnN1bShyKTsgfSk7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBfX2dyb3Vwcy5zb21lKCBmdW5jdGlvbihnLCBpKXsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZighZy50ZXN0KHIpKXtcclxuICAgICAgICAgICAgICBfX2JyZWFrSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgLy8gUGllcyBkZSBncnVwbyBkZSBsb3MgcXVlIGhhbiBjYW1iaWFkb1xyXG4gICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgX19ncm91cHNGb290ZXJzKF9fYnJlYWtJbmRleCk7XHJcbiAgICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAvLyBBY3R1YWxpemFyIGxvcyBncnVwb3NcclxuICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgIF9fZ3JvdXBzLmZvckVhY2goIGZ1bmN0aW9uKGdydXBvLCBpaSl7ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihpaSA+PSBfX2JyZWFrSW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgIC8vIEluaWNpYWxpemFyIGxvcyBxdWUgaGFuIGNhbWJpYWRvXHJcbiAgICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgZ3J1cG8uaW5pdChyKVxyXG4gICAgICAgICAgICAgICAgICBfX2JyZWFrSW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgLy8gQWN1bXVsYXIgdmFsb3JlcyBkZSBsb3MgcXVlIHNpZ3VlbiBpZ3VhbFxyXG4gICAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgIGdydXBvLnN1bShyKTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAvLyBOb3RpZmljYXIgZGVsIGV2ZW50byBvbkdyb3VwQ2hhbmdlXHJcbiAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgX19ncm91cHMuZm9yRWFjaChmdW5jdGlvbihnKXtcclxuICAgICAgICAgICAgZy5jdXJyZW50ID0gcltnLmRlZmluaXRpb24ua2V5XTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYoX19yZC5jb250ZXh0Lm9uR3JvdXBDaGFuZ2VmbikgX19yZC5jb250ZXh0Lm9uR3JvdXBDaGFuZ2VmbihzZWxmLkJTKTsgICAgICAgICAgXHJcbiAgICAgICAgICBtZWRpYXRvci5tZXNzYWdlKHsgdHlwZSAgOiAncmVwb3J0LnNlY3Rpb25zLmdyb3VwLmNoYW5nZScsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIDogJ19fZ3JvdXBzJyB9KTtcclxuICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgIC8vIENhYmVjZXJhc1xyXG4gICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgX19ncm91cHNIZWFkZXJzKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gRGV0ZXJtaW5hciBzaSBlc3RlIGVzIGVsIMO6bHRpbW8gZWxlbWVudG8gZGUgbGEgYWdydXBhY2nDs24gXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09O1xyXG4gICAgICAgIGlmKF9fZ3JvdXBzLmxlbmd0aCAmJiAhc2VsZi5CUy5pc0xhc3RSb3cgKXtcclxuICAgICAgICAgIHZhciBfX25leHQgICAgICAgICAgICAgICA9IF9fZGF0YVNldFtzZWxmLkJTLnJlY29yZENvdW50XTsgICAgICAgICAgXHJcbiAgICAgICAgICBzZWxmLkJTLmlzTGFzdFJvd0luR3JvdXAgPSAhIF9fZ3JvdXBzLmV2ZXJ5KCBmdW5jdGlvbihnKXtcclxuICAgICAgICAgICAgdmFyIF9fayA9IGcuZGVmaW5pdGlvbi5rZXk7XHJcbiAgICAgICAgICAgIHJldHVybiBfX25leHRbX19rXSA9PT0gc2VsZi5CUy5kYXRhW19fa107XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gU2VjY2lvbmVzIGRlIGRldGFsbGVcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBfX2RldGFpbHNTZWN0aW9ucygpICAgICAgICAgICAgXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYoX19kYXRhU2V0Lmxlbmd0aCA+IDApeyBcclxuICAgICAgICBzZWxmLkJTLnByZXZpb3VzID0gc2VsZi5CUy5kYXRhO1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gUGllcyBkZSBncnVwb1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgX19ncm91cHNGb290ZXJzKCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIC8vIFRvdGFsIGdlbmVyYWxcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgIF9fZ3JhbmRUb3RhbFNlY3Rpb25zKCk7XHJcbiAgICAgIG1lZGlhdG9yLm1lc3NhZ2UoeyB0eXBlIDogJ3JlcG9ydC5yZW5kZXIuZW5kJyB9KTtcclxuICAgICAgbWVkaWF0b3IubWVzc2FnZSh7IHR5cGUgOiAncmVwb3J0LmVuZCcgfSk7XHJcbiAgICAgIG1lZGlhdG9yLmZsdXNoKCk7XHJcbiAgICAgIGNvbnNvbGUudGltZUVuZCgnUmVuZGVyJyk7XHJcbiAgICB9XHJcbiAgICAgICAgICBcclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuY29weSAgICA9IGZ1bmN0aW9uKHMsIGQpeyBPYmplY3Qua2V5cyhkKS5tYXAoZnVuY3Rpb24oayl7IGRba10gPSBzW2tdO30pO30gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuc3VtICAgICA9IGZ1bmN0aW9uKHMsIGQpeyBPYmplY3Qua2V5cyhkKS5tYXAoZnVuY3Rpb24oayl7IGRba10gKz0gc1trXTt9KTt9ICAgXHJcbiAgICBtb2R1bGUuUmVwb3J0RW5naW5lLmNvbXB1dGUgPSBmdW5jdGlvbihkcywgbmFtZSl7IHJldHVybiBkcy5yZWR1Y2UoIGZ1bmN0aW9uKHQsIG8peyByZXR1cm4gdCArIG9bbmFtZV07IH0sIDAuMCk7IH1cclxuICAgIG1vZHVsZS5SZXBvcnRFbmdpbmUuZ3JvdXAgICA9IGZ1bmN0aW9uKGEsIGMpe1xyXG5cdCAgICB2YXIgZHMgPSBhO1xyXG5cdCAgICB2YXIgX19mID0gZnVuY3Rpb24oaywgdCl7XHJcblx0ICAgICAgZHMuZGlzdGluY3QoIGZ1bmN0aW9uKHYpeyByZXR1cm4gdltrXTsgfSlcdCAgICAgICAgICAgIFxyXG5cdCAgICAgICAgLmZvckVhY2ggKCBmdW5jdGlvbih2KXsgY1t2XSA9IGRzLnJlZHVjZSggZnVuY3Rpb24ocCwgYywgaSwgYSl7IHJldHVybiAoY1trXT09dikgPyBwICsgY1t0XSA6IHA7IH0sIDAuMCk7IH0pO1xyXG4gICAgICAgIHJldHVybiBfX2Y7XHQgICAgICAgICAgIFxyXG5cdCAgICB9XHJcblx0ICAgIHJldHVybiBfX2Y7XHJcbiAgICB9XHJcbiBcclxuICB9KShfbW9kdWxlKTtcclxuXHJcbn0oX19tb2R1bGUsICdQb2wnKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfX21vZHVsZS5Qb2w7IiwiaW1wb3J0IHBvbCBmcm9tIFwiLi9tYXBhLmpzXCI7XHJcblxyXG5cclxubGV0IHRvcGljcyA9IHt9O1xyXG5sZXQgc3ViVWlkID0gLTE7XHJcblxyXG5sZXQgc3Vic2NyaWJlID0gZnVuY3Rpb24odG9waWMsIGZ1bmMpIHtcclxuICBpZiAoIXRvcGljc1t0b3BpY10pIHtcclxuICAgIHRvcGljc1t0b3BpY10gPSBbXTtcclxuICB9XHJcbiAgdmFyIHRva2VuID0gKCsrc3ViVWlkKS50b1N0cmluZygpO1xyXG4gIHRvcGljc1t0b3BpY10ucHVzaCh7XHJcbiAgICB0b2tlbjogdG9rZW4sXHJcbiAgICBmdW5jOiBmdW5jXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHRva2VuO1xyXG59O1xyXG5cclxubGV0IHB1Ymxpc2ggPSBmdW5jdGlvbih0b3BpYywgYXJncykge1xyXG4gIGlmICghdG9waWNzW3RvcGljXSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc3Vic2NyaWJlcnMgPSB0b3BpY3NbdG9waWNdO1xyXG4gICAgdmFyIGxlbiA9IHN1YnNjcmliZXJzID8gc3Vic2NyaWJlcnMubGVuZ3RoIDogMDtcclxuXHJcbiAgICB3aGlsZSAobGVuLS0pIHtcclxuICAgICAgc3Vic2NyaWJlcnNbbGVuXS5mdW5jKHRvcGljLCBhcmdzKTtcclxuICAgIH1cclxuICB9LCAwKTtcclxuICByZXR1cm4gdHJ1ZTtcclxufTtcclxuXHJcbmxldCB1bnN1YnNjcmliZSA9IGZ1bmN0aW9uKHRva2VuKSB7XHJcbiAgZm9yICh2YXIgbSBpbiB0b3BpY3MpIHtcclxuICAgIGlmICh0b3BpY3NbbV0pIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSB0b3BpY3NbbV0ubGVuZ3RoOyBpIDwgajsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRvcGljc1ttXVtpXS50b2tlbiA9PT0gdG9rZW4pIHtcclxuICAgICAgICAgIHRvcGljc1ttXS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzdWJzY3JpYmUsXHJcbiAgcHVibGlzaCxcclxuICB1bnN1YnNjcmliZVxyXG59IiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgICBcclxuPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lciB3My1tYXJnaW4tYm90dG9tIHczLWFuaW1hdGUtbGVmdFwiPlxyXG4gIDxoMT5Tb2JyZSBOb3RhcyBBcHA8L2gxPlxyXG4gIDxwIHN0eWxlPVwidGV4dC1pbmRlbnQ6MWVtO1wiPlxyXG4gICAgTm90YXMgQXBwIGVzIHVuYSBwcnVlYmEgZGUgY29uY2VwdG8gZGUgbG8gcXVlIHBvZHLDrWEgc2VyIHVuIDxzcGFuIGNsYXNzPVwidzMtYm9sZCB3My1pdGFsaWNcIj5mcmFtZXdvcms8L3NwYW4+IFxyXG4gICAgc2VuY2lsbG8gY29uIGVsIGN1YWwgZGVzYXJyb2xsYXIgYXBsaWNhY2lvbmVzIDxzcGFuIGNsYXNzPVwidzMtYm9sZCB3My1pdGFsaWNcIj5TUEE8L3NwYW4+IGJhc2FkYXMgw7puaWNhbWVudGUgZW4gPHNwYW4gY2xhc3M9XCJ3My1ib2xkXCI+SFRNTDU8L3NwYW4+IHkgPHNwYW4gY2xhc3M9XCJ3My1ib2xkXCI+SmF2YVNjcmlwdDwvc3Bhbj4uXHJcbiAgPC9wPlxyXG4gIDxwIHN0eWxlPVwidGV4dC1pbmRlbnQ6MWVtO1wiPlxyXG4gICAgRXN0YXMgYXBsaWNhY2lvbmVzIHNlcsOtYW4gc3ViY2VwdGlibGVzIGRlIHNlciBpbnN0YWxhZGFzIGVuIGRpc3Bvc2l0aXZvcyBtw7N2aWxlcyBjb21vIHVuYSA8c3BhbiBjbGFzcz1cInczLWJvbGQgdzMtaXRhbGljXCI+UFdBPC9zcGFuPi5cclxuICA8L3A+XHJcbiAgPHVsIGNsYXNzPVwidzMtdWwgdzMtYm9yZGVyXCI+XHJcbiAgICA8bGk+PGgyPlJlZmVyZW5jaWFzPC9oMj48L2xpPlxyXG4gICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2VzLndpa2lwZWRpYS5vcmcvd2lraS9TaW5nbGUtcGFnZV9hcHBsaWNhdGlvblwiIHRhcmdldD1cIl9ibGFua1wiPlNQQSAoU2luZ2xlLXBhZ2UgYXBwbGljYXRpb24pPC9hPjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZXMud2lraXBlZGlhLm9yZy93aWtpL1Byb2dyZXNzaXZlX1dlYl9BcHBzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+UFdBIChQcm9ncmVzc2l2ZSBXZWIgQXBwcyk8L2E+PC9saT5cclxuICAgIDxsaT48aDI+UmVwb3NpdG9yaW88L2gyPjwvbGk+XHJcbiAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yY2FzdHJvZ28vbm90YXMtYXBwXCIgdGFyZ2V0PVwiX2JsYW5rXCI+aHR0cHM6Ly9naXRodWIuY29tL3JjYXN0cm9nby9ub3Rhcy1hcHA8L2E+PC9saT5cclxuICA8L3VsPlxyXG4gIDxwIHN0eWxlPVwidGV4dC1pbmRlbnQ6MWVtO1wiPlxyXG4gICAgUGFyYSBzdSBkZXNhcnJvbGxvIG5vIHNlIGhhbiB1dGlsaXphZG8gbmluZ3VubyBkZSBsb3MgPHNwYW4gY2xhc3M9XCJ3My1ib2xkIHczLWl0YWxpY1wiPmZyYW1ld29ya3M8L3NwYW4+IGV4aXN0ZW50ZXMgY29tbyBwdWVkZW4gc2VyIEFuZ3VsYXIsIFJlYWN0IG8gVnVlLmpzLlxyXG4gIDwvcD5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWJvdHRvbSB3My1jZW50ZXJcIj5cclxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBhYm91dC1idG4tYmFjayBjbGFzcz1cInczLWJ1dHRvbiB3My1ibGFja1wiPlZvbHZlcjwvYnV0dG9uPlxyXG48L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcblxyXG4gIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ2RpdicsIF9fdGVtcGxhdGUpO1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignW2Fib3V0LWJ0bi1iYWNrXScpXHJcbiAgICAgICAgICAgICAgIC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIGhpc3RvcnkuYmFjaygpO1xyXG4gICAgICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcblxyXG59XHJcbiIsImltcG9ydCBwb2wgZnJvbSBcIi4uL2xpYi9tYXBhLmpzXCI7XHJcblxyXG5jb25zdCBfX1RFTVBMQVRFID0gYCAgXHJcbjxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWJvdHRvbSB3My1hbmltYXRlLWJvdHRvbVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJ3My1ib3JkZXIgdzMtbWFyZ2luLXRvcFwiPlxyXG4gICAgPGJ1dHRvbiBvbi1jbGljaz1cImV4cGFuZENvbGxhcHNlXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtYmxvY2sgdzMtbGVmdC1hbGlnblwiPjxzcGFuPkJ1ZW5hdmVudHVyYTxzcGFuPjxpIGNsYXNzPVwidzMtcmlnaHQgdzMtbGFyZ2UgZmEgZmEtY2FyZXQtZG93blwiPjwvaT48L2J1dHRvbj5cclxuICAgIDxkaXYgY2xhc3M9XCJ3My1oaWRlXCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cInczLXVsXCI+XHJcbiAgICAgICAgPGxpIG9uLWNsaWNrPVwicmVxdWVzdERhdGFcIiBpZD1cImxvYy00NTAyMlwiPkJ1ZW5hdmVudHVyYTwvbGk+XHJcbiAgICAgICAgPGxpIG9uLWNsaWNrPVwicmVxdWVzdERhdGFcIiBpZD1cImxvYy0yODA3OVwiPk1hZHJpZDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwidzMtbWFyZ2luLXRvcCB3My1oaWRlXCIgaWQ9XCJhZW1ldEFwaS1jb250YWluZXJcIiBzdHlsZT1cInBhZGRpbmc6MDtcIj5cclxuICAgIDxkaXYgaWQ9XCJwcm9ncmVzcy1iYXItY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ3My1jZW50ZXJcIj5DYXJnYW5kbyBkYXRvcyBkZXNkZSBsYSBBRU1FVC4uLjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidzMtYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cInByb2dyZXNzLWJhclwiIGNsYXNzPVwidzMtZ3JlZW5cIiBzdHlsZT1cImhlaWdodDoyNHB4O3dpZHRoOjAlXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBhZW1ldENvbXBvbmVudCgpIHtcclxuXHJcbiAgY29uc3QgX19URU1QTEFURSA9IGBcclxuICA8ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyIHczLWJvcmRlciB3My1jZW50ZXIgdzMtcm91bmQgdzMtbWFyZ2luLWJvdHRvbVwiPlxyXG4gICAgPGgzPntub21icmV9ICh7cHJvdmluY2lhfSk8L2gzPlxyXG4gICAgPGRpdj57Zm4uZm9ybWF0RmVjaGE6ZWxhYm9yYWRvfTwvZGl2PlxyXG4gICAgPGJyPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgc3R5bGU9XCJwYWRkaW5nOjBcIj5cclxuICAgIDxoMyBjbGFzcz1cInczLWNlbnRlciB3My1ib3JkZXItYm90dG9tXCI+e2ZuLmZvcm1hdEZlY2hhOnByZWRpY2Npb24uZGlhWzBdLmZlY2hhOmRhdGV9PC9oMz5cclxuICAgIDxkaXY+e2ZuLnNob3dEYXk6cm93cy0wfTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInczLXNtYWxsIHczLXRlYWwgdzMtcGFkZGluZyB3My1jZW50ZXJcIj5cclxuICAgICAgPGRpdj48aSBjbGFzcz1cImZhIGZhLWFycm93LXVwXCI+PC9pPiB7cHJlZGljY2lvbi5kaWFbMF0ub3J0b308L2Rpdj5cclxuICAgICAgPGRpdj48aSBjbGFzcz1cImZhIGZhLWFycm93LWRvd25cIj48L2k+IHtwcmVkaWNjaW9uLmRpYVswXS5vY2Fzb308L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxici8+XHJcbiAgPGRpdiBzdHlsZT1cInBhZGRpbmc6MFwiPlxyXG4gICAgPGgzIGNsYXNzPVwidzMtY2VudGVyIHczLWJvcmRlci1ib3R0b21cIj57Zm4uZm9ybWF0RmVjaGE6cHJlZGljY2lvbi5kaWFbMV0uZmVjaGE6ZGF0ZX08L2gzPlxyXG4gICAgPGRpdj57Zm4uc2hvd0RheTpyb3dzLTF9PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidzMtc21hbGwgdzMtdGVhbCB3My1wYWRkaW5nIHczLWNlbnRlclwiPlxyXG4gICAgICA8ZGl2PjxpIGNsYXNzPVwiZmEgZmEtYXJyb3ctdXBcIj48L2k+IHtwcmVkaWNjaW9uLmRpYVsxXS5vcnRvfTwvZGl2PlxyXG4gICAgICA8ZGl2PjxpIGNsYXNzPVwiZmEgZmEtYXJyb3ctZG93blwiPjwvaT4ge3ByZWRpY2Npb24uZGlhWzFdLm9jYXNvfTwvZGl2PiBcclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxici8+XHJcbiAgPGRpdiBzdHlsZT1cInBhZGRpbmc6MFwiPlxyXG4gICAgPGgzIGNsYXNzPVwidzMtY2VudGVyIHczLWJvcmRlci1ib3R0b21cIj57Zm4uZm9ybWF0RmVjaGE6cHJlZGljY2lvbi5kaWFbMl0uZmVjaGE6ZGF0ZX08L2gzPlxyXG4gICAgPGRpdj57Zm4uc2hvd0RheTpyb3dzLTJ9PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidzMtc21hbGwgdzMtdGVhbCB3My1wYWRkaW5nIHczLWNlbnRlclwiPlxyXG4gICAgICA8ZGl2PjxpIGNsYXNzPVwiZmEgZmEtYXJyb3ctdXBcIj48L2k+IHtwcmVkaWNjaW9uLmRpYVsyXS5vcnRvfTwvZGl2PlxyXG4gICAgICA8ZGl2PjxpIGNsYXNzPVwiZmEgZmEtYXJyb3ctZG93blwiPjwvaT4ge3ByZWRpY2Npb24uZGlhWzJdLm9jYXNvfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYDtcclxuICBsZXQgZm4gPSB7IFxyXG4gICAgZm9ybWF0RmVjaGEgOiBmdW5jdGlvbih2YWx1ZSwgY3R4LCBvcHRpb25zKXtcclxuICAgICAgbGV0IHRva2VucyA9IHZhbHVlLnNwbGl0KCdUJyk7XHJcbiAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnNbMF0gPT09ICdkYXRlJykge1xyXG4gICAgICAgIHJldHVybiB0b2tlbnNbMF07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9uc1swXSA9PT0gJ3RpbWUnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRva2Vuc1sxXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gJ3sxfSAtIHswfScuZm9ybWF0KC4uLnRva2VucylcclxuICAgIH0sXHJcbiAgICBzaG93RGF5OiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICBmdW5jdGlvbiByZW5kZXJSb3coc2IsIHJvdykge1xyXG4gICAgICAgIGxldCByb3dfdGVtcGxhdGUgPSBgXHJcbiAgICAgICAgICA8dHIgY2xhc3M9XCJ3My1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHRkPntyb3cucGVyaW9kb306MDA8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3Jvdy5jaWVsb308L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3Jvdy50ZW1wZXJhdHVyYX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e2ZuLmZvcm1hdFplcm86cm93LmxsdXZpYX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+PGkgY2xhc3M9XCJmYSBmYS0yeCBmYS1sb25nLWFycm93LXJpZ2h0IHBvbC17cm93LnZpZW50b1swXX1cIj48L2k+IHtyb3cudmllbnRvWzFdfTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPmA7XHJcbiAgICAgICAgbGV0IHJvd193cmFwcGVyID0ge3JvdywgZm59O1xyXG4gICAgICAgIHJldHVybiBzYi5hcHBlbmQocm93X3RlbXBsYXRlLmZvcm1hdChyb3dfd3JhcHBlcikpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBkYXRhLnJlZHVjZShyZW5kZXJSb3csIHBvbC5zdHJpbmdCdWlsZGVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgnPHRhYmxlIGNsYXNzPVwidzMtdGFibGUgdzMtYm9yZGVyZWQgdzMtc21hbGwgdzMtc3RyaXBlZFwiPicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoJzx0ciBjbGFzcz1cInczLWNlbnRlciB3My10ZWFsXCI+JyArIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzx0aD5Ib3JhPC90aD4nICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHRoPkNpZWxvPC90aD4nICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHRoPlRlbXA8YnI+wrpDPC90aD4nICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHRoPkxsdXZpYTxicj5tbDwvdGg+JyArIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzx0aD5WaWVudG88YnI+a20vaDwvdGg+JyArIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L3RyPicpKVxyXG4gICAgICAgICAgICAgICAgIC5hcHBlbmQoJzwvdGFibGU+JylcclxuICAgICAgICAgICAgICAgICAudmFsdWU7XHJcbiAgICB9LFxyXG4gICAgZm9ybWF0WmVybzogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZSA9PSAnMCcgPyAnJyA6IHZhbHVlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ2RpdicsIF9fVEVNUExBVEUuZm9ybWF0KHRoaXMuZGF0YSkpO1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgOiBmdW5jdGlvbihjb250YWluZXIpeyB9LFxyXG4gICAgd2l0aERhdGEgOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgdGhpcy5kYXRhID0gSlNPTi5wYXJzZShkYXRhKVswXTtcclxuICAgICAgdGhpcy5kYXRhLmZuID0gZm47XHJcbiAgICAgIHRoaXMuZGF0YVxyXG4gICAgICAgICAgLnByZWRpY2Npb25cclxuICAgICAgICAgIC5kaWFcclxuICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGRpYSwgaSkge1xyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyBBZ3J1cGFyIGxvcyBkYXRvcyBwb3IgaG9yYVxyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICBsZXQgZ3JvdXAgPSBbXS5jb25jYXQoZGlhLmVzdGFkb0NpZWxvLm1hcCggZnVuY3Rpb24oZSl7IHJldHVybiB7IHQgOiAnYycsIHBlcmlvZG8gOiBlLnBlcmlvZG8sIHZhbHVlIDogZS5kZXNjcmlwY2lvbiB9fSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWEudGVtcGVyYXR1cmEubWFwKCBmdW5jdGlvbihlKXsgcmV0dXJuIHsgdCA6ICd0JywgcGVyaW9kbyA6IGUucGVyaW9kbywgdmFsdWUgOiBlLnZhbHVlIH19KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYS5wcmVjaXBpdGFjaW9uLm1hcCggZnVuY3Rpb24oZSl7IHJldHVybiB7IHQgOiAncCcsIHBlcmlvZG8gOiBlLnBlcmlvZG8sIHZhbHVlIDogZS52YWx1ZSB9fSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWEudmllbnRvQW5kUmFjaGFNYXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC53aGVyZShlID0+IGUudmVsb2NpZGFkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCggZnVuY3Rpb24oZSl7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB0ICAgICAgIDogJ3YnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyaW9kbyA6IGUucGVyaW9kbywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiBbZS5kaXJlY2Npb25bMF0sIGUudmVsb2NpZGFkWzBdXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5ncm91cEJ5KCdwZXJpb2RvJyk7XHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIC8vIGNvbnZlcnRpciBlbiBkYXRvcyB0YWJ1bGFkb3NcclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgYVsncm93cy17MH0nLmZvcm1hdChpKV0gPSBPYmplY3Qua2V5cyhncm91cClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKCBmdW5jdGlvbihyb3dzLCBrZXkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdG9zSG9yYSA9IGdyb3VwW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzLnB1c2goIHsgcGVyaW9kbyAgICAgOiBrZXksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpZWxvICAgICAgIDogZGF0b3NIb3JhLndoZXJlKHsgdCA6ICdjJyB9KVswXS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyYSA6IGRhdG9zSG9yYS53aGVyZSh7IHQgOiAndCcgfSlbMF0udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGx1dmlhICAgICAgOiBkYXRvc0hvcmEud2hlcmUoeyB0IDogJ3AnIH0pWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZW50byAgICAgIDogZGF0b3NIb3JhLndoZXJlKHsgdCA6ICd2JyB9KVswXS52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3dzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFtdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zb3J0QnkoJ3BlcmlvZG8nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgICB9LCB0aGlzLmRhdGEpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGN0eCl7XHJcblxyXG4gIGxldCBhZW1ldENvbnRhaW5lcjtcclxuICBsZXQgcHJvZ3Jlc3NCYXJDb250YWluZXI7XHJcbiAgbGV0IHByb2dyZXNzQmFyO1xyXG4gIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ2RpdicsIF9fVEVNUExBVEUpO1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBhZW1ldENvbnRhaW5lciAgICAgICA9IHBvbC4kKCdhZW1ldEFwaS1jb250YWluZXInKTtcclxuICAgICAgcHJvZ3Jlc3NCYXIgICAgICAgICAgPSBwb2wuJCgncHJvZ3Jlc3MtYmFyJyk7XHJcbiAgICAgIHByb2dyZXNzQmFyQ29udGFpbmVyID0gcG9sLiQoJ3Byb2dyZXNzLWJhci1jb250YWluZXInKTsgICBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgLy8gYWRkRXZlbnRMaXN0ZW5lclxyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICBhZGRFdmVudExpc3RlbmVycyhjb21wb25lbnQucm9vdCk7XHJcbiAgICAgIGNhbGxBZW1ldEFwaSgpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50SGFuZGxlcnMgOiB7IFxyXG4gICAgICBleHBhbmRDb2xsYXBzZSA6IGV4cGFuZENvbGxhcHNlLFxyXG4gICAgICByZXF1ZXN0RGF0YSAgICA6IHJlcXVlc3REYXRhXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoY29udGFpbmVyKSB7XHJcbiAgICBbJ1tvbi1jbGlja10nXS5mb3JFYWNoKGV2ZW50ID0+IHtcclxuICAgICAgcG9sLnRvQXJyYXkoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoZXZlbnQpKVxyXG4gICAgICAgICAgLmZvckVhY2goIGUgPT4ge1xyXG4gICAgICAgICAgICBlLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICBsZXQgbmFtZSA9IGUuYXR0cmlidXRlc1snb24tY2xpY2snXS52YWx1ZTtcclxuICAgICAgICAgICAgICBjb21wb25lbnQuZXZlbnRIYW5kbGVyc1tuYW1lXShlLCBldmVudCk7XHJcbiAgICAgICAgICAgIH07ICAgICAgICBcclxuICAgICAgICAgIH0pOyBcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBsZXQgdGltZXJJZDtcclxuICBmdW5jdGlvbiBpbml0UHJvZ3Jlc3NCYXIoKSB7XHJcbiAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICB0aW1lcklkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjb3VudGVyID0gKGNvdW50ZXIgKyA5KSAlIDEwMDtcclxuICAgICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnezB9JScuZm9ybWF0KGNvdW50ZXIpO1xyXG4gICAgfSwgMjAwKTtcclxuICB9XHJcblxyXG4gIGxldCBjb2RpZ28gPSA0NTAyMjtcclxuICBmdW5jdGlvbiBjYWxsQWVtZXRBcGkoKSB7XHJcbiAgICBcclxuICAgIGluaXRQcm9ncmVzc0JhcigpO1xyXG5cclxuICAgIGFlbWV0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgYWVtZXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXJDb250YWluZXIpO1xyXG4gICAgYWVtZXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndzMtaGlkZScpO1xyXG5cclxuICAgIGNvbnN0IEVORFBPSU5UID0gJ2h0dHBzOi8vb3BlbmRhdGEuYWVtZXQuZXMvb3BlbmRhdGEvYXBpL3ByZWRpY2Npb24vZXNwZWNpZmljYS9tdW5pY2lwaW8vaG9yYXJpYS8nICtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvZGlnbyArXHJcbiAgICAgICAgICAgICAgICAgICAgICc/YXBpX2tleT0nICtcclxuICAgICAgICAgICAgICAgICAgICAgJ2V5SmhiR2NpT2lKSVV6STFOaUo5LmV5SnpkV0lpT2lKeVkyRnpkSEp2WjI5QWFHOTBiV0ZwYkM1amIyMGlMQ0pxZEdraU9pSm1abUkzT1dKalppMWxaV1F3TFQnICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICdRd09ETXRZVGt3WkMwNE1tTmtNbVJoTVRBMk1qUWlMQ0pwYzNNaU9pSkJSVTFGVkNJc0ltbGhkQ0k2TVRVNE1qY3lOVGczTml3aWRYTmxja2xrSWpvaVptWmlOJyArIFxyXG4gICAgICAgICAgICAgICAgICAgICAnemxpWTJZdFpXVmtNQzAwTURnekxXRTVNR1F0T0RKalpESmtZVEV3TmpJMElpd2ljbTlzWlNJNklpSjkuYlBoQUpEdXRQNjJfNzVwZW8zcXI4OFFzMUpRNGptdTZUV1hIanZJelp4MCc7XHJcbiAgICBwb2wuYWpheFxyXG4gICAgICAgLmdldChFTkRQT0lOVCwgcmVxID0+IHtcclxuICAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0Jyk7XHJcbiAgICAgICB9KVxyXG4gICAgICAgLnRoZW4odGV4dCA9PiBKU09OLnBhcnNlKHRleHQpKVxyXG4gICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgaWYocmVzdWx0LmVzdGFkbyA9PSAyMDApIHJldHVybiBwb2wuYWpheC5nZXQocmVzdWx0LmRhdG9zKTtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3VsdC5kZXNjcmlwY2lvbik7XHJcbiAgICAgICB9KVxyXG4gICAgICAgLnRoZW4oIHRleHQgPT4ge1xyXG4gICAgICAgICBjbGVhckludGVydmFsKHRpbWVySWQpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICBhZW1ldENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgbGV0IF9fYWVtZXQgPSBhZW1ldENvbXBvbmVudCgpLndpdGhEYXRhKHRleHQpO1xyXG4gICAgICAgICBhZW1ldENvbnRhaW5lci5hcHBlbmRDaGlsZChfX2FlbWV0LnJlbmRlcigpKTtcclxuICAgICAgICAgX19hZW1ldC5tb3VudGVkKGN0eCk7XHJcbiAgICAgICB9KVxyXG4gICAgICAgLmNhdGNoKCBlID0+IHtcclxuICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGV4cGFuZENvbGxhcHNlKHRhcmdldCwgbW91c2VFdmVudCkge1xyXG4gICAgbGV0IF9fbGlzdCA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0O1xyXG4gICAgaWYoX19saXN0LmNvbnRhaW5zKCd3My1oaWRlJykpe1xyXG4gICAgICBfX2xpc3QucmVtb3ZlKCd3My1oaWRlJyk7XHJcbiAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuY2xhc3NMaXN0LnJlbW92ZSgnZmEtY2FyZXQtZG93bicpO1xyXG4gICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLmNsYXNzTGlzdC5hZGQoJ2ZhLWNhcmV0LXVwJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfX2xpc3QuYWRkKCd3My1oaWRlJyk7XHJcbiAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuY2xhc3NMaXN0LnJlbW92ZSgnZmEtY2FyZXQtdXAnKTtcclxuICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QuYWRkKCdmYS1jYXJldC1kb3duJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXF1ZXN0RGF0YSh0YXJnZXQsIG1vdXNlRXZlbnQpIHtcclxuICAgIGV4cGFuZENvbGxhcHNlKHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZyk7XHJcbiAgICBjb2RpZ28gPSB0YXJnZXQuaWQuc3BsaXQoJy0nKVsxXTtcclxuICAgIGNhbGxBZW1ldEFwaSgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGEuanNcIjtcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgICBcclxuICA8ZGl2IGNsYXNzPVwidzMtY29udGFpbmVyIHczLWNlbnRlciB3My1hbmltYXRlLWxlZnRcIiBzdHlsZT1cInBhZGRpbmctdG9wOjYwcHg7XCI+XHJcbiAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltZy9sb2dvLnBuZ1wiIGFsdD1cIkNhclwiIHN0eWxlPVwid2lkdGg6IDMwMHB4XCI+XHJcbiAgICA8cD5MYSBhcHAgcXVlIHRlIHBlcm1pdGUgYWxtYWNlbmFyIHRvZGFzIHR1cyBub3RhcyBlbiBlbCBtw7N2aWwhISE8L3A+XHJcbiAgPC9kaXY+YDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcblxyXG4gIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ2RpdicsIF9fdGVtcGxhdGUpLmZpcnN0RWxlbWVudENoaWxkIDtcclxuICAgICAgcmV0dXJuIHRoaXMucm9vdDtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgLy88YnV0dG9uIHR5cGU9XCJidXR0b25cIiBidG4tdGVzdCBjbGFzcz1cInczLWJ1dHRvbiB3My1ibGFja1wiPmh0bWw8L2J1dHRvbj5cclxuICAgICAgLy9sZXQgYnRuID0gcG9sLiQoJ1tidG4tdGVzdF0nLCBjb250YWluZXIpWzBdO1xyXG4gICAgICAvL2J0bi5vbmNsaWNrID0gb25UZXN0QnV0dG9uQ2xpY2s7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gRmlsbFRlbXBsYXRlXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgZnVuY3Rpb24gb25UZXN0QnV0dG9uQ2xpY2tfZmlsbChtb3VzZUV2ZW50KXtcclxuICAgIGxldCB0ZW1wbGF0ZSA9IHBvbC5idWlsZCgnZGl2JywgJzxoMyB4YmluZD1cImlkOmlkO2lubmVySFRNTDpub21icmU7b25jbGljazpfX2NsaWNrXCI+PC9oMz4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgbGV0IHIgPSBwb2wudGVtcGxhdGVzLmZpbGwoXHJcbiAgICAgICAgICAgICAgdGVtcGxhdGUsIFxyXG4gICAgICAgICAgICAgIHsgaWQgOiA1NTUsIFxyXG4gICAgICAgICAgICAgICAgbm9tYnJlIDogJ3JhZmEnLFxyXG4gICAgICAgICAgICAgICAgX19jbGljayA6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfX0pO1xyXG5cclxuICAgIGNvbXBvbmVudC5yb290LmFwcGVuZENoaWxkKHIpO1xyXG4gIH1cclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgLy8gRXhlY3V0ZVRlbXBsYXRlXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgZnVuY3Rpb24gb25UZXN0QnV0dG9uQ2xpY2sobW91c2VFdmVudCl7XHJcbiAgICBsZXQgdGVtcGxhdGUgPSBwb2wuYnVpbGQoJ2RpdicsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aDMgeGJpbmQ9XCJpZDppZDtpbm5lckhUTUw6bm9tYnJlO1wiPjwvaDM+JylcclxuICAgICAgICAgICAgICAgICAgICAgIC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGxldCBpbm5lckh0bWwgPSBwb2wudGVtcGxhdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgLmV4ZWN1dGUodGVtcGxhdGUsIFt7IGlkIDogNTU1LCBub21icmUgOiAncmFmYSd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpZCA6IDQ0NCwgbm9tYnJlIDogJ3JhZmEgNDQ0J30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkIDogMzMzLCBub21icmUgOiAncmFmYSAzMzMnfV0pO1xyXG4gICAgcG9sLnRlbXBsYXRlc1xyXG4gICAgICAgLmV4ZWN1dGUodGVtcGxhdGUsXHJcbiAgICAgICAgICAgICAgICBbeyBpZCA6IDU1NSwgbm9tYnJlIDogJ3JhZmEnfSxcclxuICAgICAgICAgICAgICAgICB7IGlkIDogNDQ0LCBub21icmUgOiAncmFmYSA0NDQnfSxcclxuICAgICAgICAgICAgICAgICB7IGlkIDogMzMzLCBub21icmUgOiAncmFmYSAzMzMnfV0sXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICAgIClcclxuICAgICAgLm1hcCggZSA9PiBlLm5vZGUgKVxyXG4gICAgICAuZm9yRWFjaCggbm9kZSA9PiBjb21wb25lbnQucm9vdC5hcHBlbmRDaGlsZChub2RlKSApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudDtcclxuXHJcbn1cclxuIiwi77u/aW1wb3J0IHBvbCBmcm9tIFwiLi4vbGliL21hcGFcIjtcclxuaW1wb3J0IERiV3JhcHBlclNlcnZpY2UgZnJvbSBcIi4uL2xpYi9kYldyYXBwZXIuc2VydmljZVwiO1xyXG5cclxuY29uc3QgTk9UQVNfREFUQUJBU0UgICA9ICdub3Rhcy1hcHAuZGInOyBcclxuY29uc3QgTk9UQVNfVEFCTEVfTkFNRSA9ICdub3Rhcyc7XHJcblxyXG5jb25zdCBURU1QTEFURSA9IGBcclxuPGRpdiBub3Rhcy1jb250YWluZXIgc3R5bGU9XCJwYWRkaW5nOjA7IG1hcmdpbi1ib3R0b206NDNweDtcIiBjbGFzcz1cInczLWFuaW1hdGUtbGVmdFwiPjwvZGl2PlxyXG48YnV0dG9uIGJ0bi1hZGQtbm90ZSBvbi1jbGljaz1cImFkZE5vdGVcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1ibGFjayB3My1jaXJjbGVcIj7vvIs8L2J1dHRvbj5gO1xyXG5cclxuY29uc3QgX19JVEVNX1RFTVBMQVRFID1gXHJcbjxkaXYgY2xhc3M9XCJ3My1ib3JkZXItYm90dG9tIHczLWFuaW1hdGUtbGVmdFwiIHN0eWxlPVwicGFkZGluZzowOyBmb250LXNpemU6MTRweDtcIiBpZD1cIm5vdGUte25vdGUua2V5fVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJ3My1jb250YWluZXJcIiBzdHlsZT1cInBhZGRpbmc6NXB4XCI+XHJcbiAgICA8ZGl2IG9uLWNsaWNrPVwiZXhwYW5kQ29sbGFwc2VcIj48Yj57bm90ZS50aXRsZX08L2I+PGkgY2xhc3M9XCJ3My1yaWdodCB3My1sYXJnZSBmYSBmYS1jYXJldC1kb3duXCI+PC9pPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJ3My1jb250YWluZXJcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtwYWRkaW5nOjAgNHB4XCI+XHJcbiAgICA8cCBpZD1cImVkaXRwLXtub3RlLmtleX1cIiBvbi1jbGljaz1cImVkaXROb3RlXCIgc3R5bGU9XCJwYWRkaW5nOjJweDttaW4taGVpZ2h0OjRlbTttYXJnaW46MnB4IDA7d2hpdGUtc3BhY2U6IHByZS13cmFwXCI+e2Zvcm1hdFRleHQ6bm90ZS50ZXh0fTwvcD5cclxuICAgIDxkaXYgY2xhc3M9XCJ3My1iYXIgdzMtY2VudGVyXCIgc3R5bGU9XCJwYWRkaW5nOjRweCAwO1wiPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImRlbGV0ZS17bm90ZS5rZXl9XCIgb24tY2xpY2s9XCJkZWxldGVOb3RlXCIgY2xhc3M9XCJ3My1idXR0b24gdzMtYm9yZGVyXCI+PGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJmYXYte25vdGUua2V5fVwiIG9uLWNsaWNrPVwic2F2ZUZhdm9yaXRlc1wiIGNsYXNzPVwidzMtYnV0dG9uIHczLWJvcmRlclwiPjxpIGNsYXNzPVwiZmEge2Nzczpub3RlLmtleX1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZWRpdC17bm90ZS5rZXl9XCIgb24tY2xpY2s9XCJlZGl0Tm90ZVwiIGNsYXNzPVwidzMtYnV0dG9uIHczLWJvcmRlclwiPjxpIGNsYXNzPVwiZmEgZmEtZWRpdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY3R4KXtcclxuICAgIFxyXG4gIGxldCBkYjtcclxuICBsZXQgcm93cyA9IFtdO1xyXG4gIGxldCBmYXZvcml0ZXMgPSBbXTtcclxuICBsZXQgaXRlbXNDb250YWluZXI7XHJcbiAgbGV0IGNvbXBvbmVudCA9IHtcclxuICAgIHJvb3QgICA6IHt9LFxyXG4gICAgaW5pdCAgIDogZnVuY3Rpb24oY29udGFpbmVyKXsgfSxcclxuICAgIHJlbmRlciA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcbiAgICAgIHRoaXMucm9vdCA9IHBvbC5idWlsZCgnZGl2JywgVEVNUExBVEUpO1xyXG4gICAgICBpdGVtc0NvbnRhaW5lciA9IHRoaXMucm9vdC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgcmV0dXJuIHRoaXMucm9vdDtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkIDogZnVuY3Rpb24oY29udGFpbmVyKXtcclxuICAgICAgaW5pdEFsbCgpOyAgXHJcbiAgICB9LFxyXG4gICAgZXZlbnRIYW5kbGVycyA6IHsgXHJcbiAgICAgIGFkZE5vdGUgICAgICAgIDogYWRkTm90ZSxcclxuICAgICAgZGVsZXRlTm90ZSAgICAgOiBkZWxldGVOb3RlLFxyXG4gICAgICBleHBhbmRDb2xsYXBzZSA6IGV4cGFuZENvbGxhcHNlLFxyXG4gICAgICBzYXZlRmF2b3JpdGVzICA6IHNhdmVGYXZvcml0ZXMsXHJcbiAgICAgIGVkaXROb3RlICAgICAgIDogZWRpdE5vdGVcclxuICAgIH0gXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdEFsbCgpIHtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBPcGVuIGRhdGFiYXNlXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgZGIgPSBuZXcgRGJXcmFwcGVyU2VydmljZShOT1RBU19EQVRBQkFTRSk7XHJcbiAgICBkYi5vcGVuRGIoKVxyXG4gICAgICAudGhlbiggZGIgPT4ge1xyXG4gICAgICAgIGxvYWREYXRhKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIGFkZEV2ZW50TGlzdGVuZXJcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBhZGRFdmVudExpc3RlbmVycyhjb21wb25lbnQucm9vdCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycyhjb250YWluZXIpIHtcclxuICAgIFsnW29uLWNsaWNrXSddLmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICBwb2wudG9BcnJheShjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChldmVudCkpXHJcbiAgICAgICAgICAuZm9yRWFjaCggZSA9PiB7XHJcbiAgICAgICAgICAgIGUub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBuYW1lID0gZS5hdHRyaWJ1dGVzWydvbi1jbGljayddLnZhbHVlO1xyXG4gICAgICAgICAgICAgIGNvbXBvbmVudC5ldmVudEhhbmRsZXJzW25hbWVdKGUsIGV2ZW50KTtcclxuICAgICAgICAgICAgfTsgICAgICAgIFxyXG4gICAgICAgICAgfSk7IFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGxvYWREYXRhKCkge1xyXG4gICAgZGIucmVhZEFsbChOT1RBU19UQUJMRV9OQU1FKVxyXG4gICAgICAudGhlbiggdmFsdWVzID0+IHtcclxuICAgICAgICByb3dzID0gdmFsdWVzLnJldmVyc2UoKTtcclxuICAgICAgICBmYXZvcml0ZXMgPSAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSB8fCAnJykuc3BsaXQoJy0nKTtcclxuICAgICAgICByZW5kZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICBpdGVtc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIHJvd3MubWFwKCBub3RlID0+IHtcclxuICAgICAgICAgIGxldCBfX2JhZyA9IHtcclxuICAgICAgICAgICAgbm90ZSxcclxuICAgICAgICAgICAgZm9ybWF0VGV4dDogZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3NzOiBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhdm9yaXRlcy5pbmNsdWRlcyhrZXkudG9TdHJpbmcoKSkgPyAnZmEtc3RhcicgOiAnZmEtc3Rhci1vJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHJldHVybiBwb2wuYnVpbGQoJ2RpdicsIF9fSVRFTV9URU1QTEFURS5mb3JtYXQoX19iYWcpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm1hcCggZSA9PiBlLmZpcnN0RWxlbWVudENoaWxkIClcclxuICAgICAgICAuZm9yRWFjaCggZSA9PiB7XHJcbiAgICAgICAgICBpdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlKTtcclxuICAgICAgICB9KTtcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBhZGRFdmVudExpc3RlbmVyXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoaXRlbXNDb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZGVsZXRlTm90ZSh0YXJnZXQsIG1vdXNlRXZlbnQpe1xyXG4gICAgbGV0IF9faWQgICAgICA9IHBhcnNlSW50KHRhcmdldC5pZC5zcGxpdCgnLScpWzFdKTtcclxuICAgIGxldCBfX3BheWxvYWQgPSByb3dzLndoZXJlKHsga2V5IDogX19pZCB9KVswXTtcclxuICAgIGxldCBfX2VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZS17MH0nLmZvcm1hdChfX2lkKSk7XHJcbiAgICBcclxuICAgIGRiLmRlbGV0ZShOT1RBU19UQUJMRV9OQU1FLCBfX2lkKVxyXG4gICAgICAudGhlbiggKCkgPT4ge1xyXG4gICAgICAgIHJvd3MucmVtb3ZlKF9fcGF5bG9hZCk7XHJcbiAgICAgICAgX19lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoX19lbGVtZW50KTtcclxuICAgICAgfSk7ICAgICAgICAgICAgICAgXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBleHBhbmRDb2xsYXBzZSh0YXJnZXQsIG1vdXNlRXZlbnQpIHtcclxuICAgIGxldCBfX3N0eWxlID0gdGFyZ2V0LnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlO1xyXG4gICAgaWYoX19zdHlsZS5kaXNwbGF5ID09ICdub25lJyl7XHJcbiAgICAgIF9fc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNhcmV0LWRvd24nKTtcclxuICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2knKS5jbGFzc0xpc3QuYWRkKCdmYS1jYXJldC11cCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX19zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB0YXJnZXQucXVlcnlTZWxlY3RvcignaScpLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLWNhcmV0LXVwJyk7XHJcbiAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yKCdpJykuY2xhc3NMaXN0LmFkZCgnZmEtY2FyZXQtZG93bicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkTm90ZSh0YXJnZXQsIG1vdXNlRXZlbnQpIHtcclxuICAgIGN0eC5yb3V0ZXIubmF2aWdhdGVUbygnbm90ZScpO1xyXG4gIH0gIFxyXG5cclxuICBmdW5jdGlvbiBzYXZlRmF2b3JpdGVzKHRhcmdldCwgbW91c2VFdmVudCkge1xyXG4gICAgbGV0IHN0YXIgPSB0YXJnZXQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBsZXQga2V5ID0gdGFyZ2V0LmlkLnNwbGl0KCctJylbMV07XHJcbiAgICBpZiAoZmF2b3JpdGVzLmluY2x1ZGVzKGtleSkpe1xyXG4gICAgICBmYXZvcml0ZXMucmVtb3ZlKGtleSk7XHJcbiAgICAgIHN0YXIuY2xhc3NMaXN0LmFkZCgnZmEtc3Rhci1vJyk7XHJcbiAgICAgIHN0YXIuY2xhc3NMaXN0LnJlbW92ZSgnZmEtc3RhcicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmF2b3JpdGVzLnB1c2goa2V5KTtcclxuICAgICAgc3Rhci5jbGFzc0xpc3QucmVtb3ZlKCdmYS1zdGFyLW8nKTtcclxuICAgICAgc3Rhci5jbGFzc0xpc3QuYWRkKCdmYS1zdGFyJyk7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zhdm9yaXRlcycsIGZhdm9yaXRlcy5qb2luKCctJykpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZWRpdE5vdGUodGFyZ2V0LCBtb3VzZUV2ZW50KSB7XHJcbiAgICBjdHgucm91dGVyLm5hdmlnYXRlVG8oJ25vdGUvJyArIHRhcmdldC5pZC5zcGxpdCgnLScpWzFdKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcblxyXG59XHJcblxyXG4iLCLvu79pbXBvcnQgcG9sIGZyb20gXCIuLi9saWIvbWFwYS5qc1wiO1xyXG5pbXBvcnQgRGJXcmFwcGVyU2VydmljZSBmcm9tIFwiLi4vbGliL2RiV3JhcHBlci5zZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBOT1RBU19EQVRBQkFTRSAgID0gJ25vdGFzLWFwcC5kYic7IFxyXG5jb25zdCBOT1RBU19UQUJMRV9OQU1FID0gJ25vdGFzJztcclxuXHJcbmNvbnN0IF9fdGVtcGxhdGUgPSBgICBcclxuPGRpdiBjbGFzcz1cInczLWNvbnRhaW5lciB3My1tYXJnaW4tYm90dG9tIHczLWFuaW1hdGUtbGVmdFwiPlxyXG4gIDxoMj5OdWV2YSBub3RhPC9oMj5cclxuICA8Zm9ybSBjbGFzcz1cInczLW1hcmdpbi1ib3R0b21cIj5cclxuICAgIDxsYWJlbCBmb3I9XCJ0eHQtdGl0bGVcIj5Uw610dWxvPC9sYWJlbD5cclxuICAgIDxpbnB1dCBjbGFzcz1cInczLWlucHV0IHczLWJvcmRlclwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0eHQtdGl0bGVcIiBwbGFjZWhvbGRlcj1cIkludHJvZHVjZSB1biB0w610dWxvXCIgPlxyXG4gICAgPGxhYmVsIGZvcj1cInR4dC10ZXh0XCI+VGV4dG88L2xhYmVsPlxyXG4gICAgPHRleHRhcmVhIGNsYXNzPVwidzMtaW5wdXQgdzMtYm9yZGVyXCIgaWQ9XCJ0eHQtdGV4dFwiIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCJDb250ZW5pZG8gZGUgbGEgbm90YVwiPjwvdGV4dGFyZWE+XHJcbiAgPC9mb3JtPlxyXG4gIDxkaXYgY2xhc3M9XCJ3My1jb250YWluZXIgdzMtbWFyZ2luLWJvdHRvbSB3My1jZW50ZXIgdzMtYW5pbWF0ZS16b29tXCI+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImJ0bi1ncmFiYXJcIiBjbGFzcz1cInczLWJ1dHRvbiB3My1ibGFja1wiPkdyYWJhcjwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGN0eCl7XHJcbiAgXHJcbiAgbGV0IGN1cnJlbnQ7XHJcbiAgbGV0IGRiO1xyXG4gIGxldCBjb21wb25lbnQgPSB7XHJcbiAgICByb290ICAgOiB7fSxcclxuICAgIGluaXQgICA6IGZ1bmN0aW9uKGNvbnRhaW5lcil7IH0sXHJcbiAgICByZW5kZXIgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICB0aGlzLnJvb3QgPSBwb2wuYnVpbGQoJ2RpdicsIF9fdGVtcGxhdGUpO1xyXG4gICAgICByZXR1cm4gdGhpcy5yb290O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgOiBmdW5jdGlvbihjb250YWluZXIpe1xyXG4gICAgICBpbml0QWxsKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdEFsbCgpIHtcclxuXHJcbiAgICBsZXQgX19jb250YWluZXIgPSBjb21wb25lbnQucm9vdC5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIF9fY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gT3BlbiBkYXRhYmFzZVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGRiID0gbmV3IERiV3JhcHBlclNlcnZpY2UoTk9UQVNfREFUQUJBU0UpO1xyXG4gICAgZGIub3BlbkRiKClcclxuICAgICAgLnRoZW4oICgpID0+IHtcclxuICAgICAgICBsZXQgX19lbmFibGVVSSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBfX2NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgICBwb2wuJCgnYnRuLWdyYWJhcicpLm9uY2xpY2sgPSBhZGROb3RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgX19pZCA9IGN0eC5yb3V0ZXIuY3VycmVudC5wYXJhbXNbMV0gfHwgJyc7XHJcbiAgICAgICAgaWYgKF9faWQpIHtcclxuICAgICAgICAgIGRiLnJlYWRPbmUoTk9UQVNfVEFCTEVfTkFNRSwgcGFyc2VJbnQoX19pZCkpXHJcbiAgICAgICAgICAgIC50aGVuKCBub3RlID0+IHtcclxuICAgICAgICAgICAgICBjdXJyZW50ID0gbm90ZTtcclxuICAgICAgICAgICAgICBwb2wuJCgndHh0LXRpdGxlJykudmFsdWUgPSBjdXJyZW50LnRpdGxlO1xyXG4gICAgICAgICAgICAgIHBvbC4kKCd0eHQtdGV4dCcpLnZhbHVlICA9IGN1cnJlbnQudGV4dDtcclxuICAgICAgICAgICAgICBwb2wuJCgnaDInLCBjb21wb25lbnQucm9vdClbMF0uaW5uZXJIVE1MID0gJ0VkaWNpw7NuIGRlIG5vdGEnO1xyXG4gICAgICAgICAgICAgIF9fZW5hYmxlVUkoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9fZW5hYmxlVUkoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhZGROb3RlKCkge1xyXG4gICAgdmFyIF9fdHh0VGl0bGUgPSBwb2wuJCgndHh0LXRpdGxlJyk7XHJcbiAgICB2YXIgX190eHRUZXh0ICA9IHBvbC4kKCd0eHQtdGV4dCcpO1xyXG4gICAgdmFyIF9fdGl0bGUgPSBfX3R4dFRpdGxlLnZhbHVlLnRyaW0oKTtcclxuICAgIHZhciBfX3RleHQgID0gX190eHRUZXh0LnZhbHVlLnRyaW0oKTtcclxuICAgIGlmICghX190aXRsZSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IF9fdHh0VGl0bGUuZm9jdXMoKSwgMjApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIV9fdGV4dCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IF9fdHh0VGV4dC5mb2N1cygpLCAyMCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGRiLnNhdmUoTk9UQVNfVEFCTEVfTkFNRSxcclxuICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICBrZXkgICA6IGN1cnJlbnQgPyBjdXJyZW50LmtleSAgOiBkYXRlLnZhbHVlT2YoKSwgXHJcbiAgICAgICAgICAgICAgZGF0ZSAgOiBjdXJyZW50ID8gY3VycmVudC5kYXRlIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnezB9L3sxfS97Mn0nLmZvcm1hdChkYXRlLmdldERhdGUoKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZS5nZXRNb250aCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpKSwgXHJcbiAgICAgICAgICAgICAgdGl0bGUgOiBfX3RpdGxlLCBcclxuICAgICAgICAgICAgICB0ZXh0ICA6IF9fdGV4dCBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oIG5vdGEgPT4ge1xyXG4gICAgICAgICAgICAgIGN0eC5yb3V0ZXIubmF2aWdhdGVUbygnbGlzdCcpOyBcclxuICAgICAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29tcG9uZW50O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=