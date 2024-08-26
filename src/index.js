import pol from "./lib/mapa.js";
import pubsub from "./lib/pubSub.Service";
// ==============================================================================
// Components
// ==============================================================================
import headerComponent from "./components/header.component";
import footerComponent from "./components/footer.component";
import contentComponent from "./components/main-content.component";
import menuComponent from "./components/menu.component";
// ==============================================================================
// Pages
// ==============================================================================
import homePage from "./views/home.page";
import listPage from "./views/list.page";
import aboutPage from "./views/about.page";
import notePage from "./views/new-item.page";
import elTiempoPage from "./views/el-tiempo.page";
import {templatePage,
        getValueInfoPage,
        addEventListenersInfoPage
       } from "./views/test.pages";
import imagePage from "./views/images/page";
import schedulePage from "./views/schedule/page";
import {stravaAuthPage,
        stravaConfigPage,
        stravaMainPage} from "./views/strava/strava";
import routeEditorPage from "./views/google-maps/editor";
import utils from "./lib/utils.js";

const TOPICS = pubsub.TOPICS;

// ==========================================================================
// App context
// ==========================================================================
const ctx = {
  root       : pol.$('appContent'),
  components : [],
  router : {
    routes  : [],
    addRoute: function (name, pattern, controller, isView) {
      this.routes.push({ name      : name,
                         path      : pattern,
                         controler : controller, 
                         isView    : isView || false });
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
      let url = '{origin}{0}{1}'.format(APP_PATH, route, location);
      window.history.pushState('', route, url);
      this.current.queryValues = pol.parseQueryString();
      showContent();
    },
    normalizePath : function (url) {
      return url.replace(document.baseURI, '');
    },
    sync : function(){
      this.current = this.getRoute(this.normalizePath(window.location.href));
      this.current.queryValues = pol.parseQueryString();
      showContent();
    },
    current : {}
  },
  topics   : pubsub.TOPICS,
  publish  : pubsub.publish,
  subscribe : pubsub.subscribe,
  unsubscribe : pubsub.unsubscribe
};

// =====================================================================
// Init App
// =====================================================================
(function(){
  pol.config = pol.config('notas-app');
  // ===================================================================
  // Main components
  // ===================================================================
  ctx.components = [ 
    headerComponent(ctx),
    menuComponent(ctx),
    contentComponent(ctx),
    footerComponent(ctx)
  ];
  // ===================================================================
  // Add Routes
  // ===================================================================
  ctx.router
     .addRoute('list',  /list$/,            listPage)
     .addRoute('about', /about$/,           aboutPage)
     .addRoute('note',  /note$/,            notePage)
     .addRoute('note',  /note\/(\d{13})$/,  notePage)
     .addRoute('el-tiempo',  /el-tiempo$/,  elTiempoPage)
     .addRoute('templates', /templates$/,   templatePage)
     .addRoute('get-value', /templates\/get-value$/,  getValueInfoPage)
     .addRoute('utils', /templates\/utils$/,  addEventListenersInfoPage)
     .addRoute('images', /images\/(\d+)$/, imagePage, true)
     .addRoute('schedule', /schedule$/,    schedulePage, true)
     .addRoute('strava-config', /strava\/config/, stravaConfigPage, true)
     .addRoute('strava-exchange-token', /strava\/exchange_token/, stravaAuthPage, true) 
     .addRoute('strava-main', /strava[?]?(.*)$/, stravaMainPage, true)
     .addRoute('routes', /routes$/, routeEditorPage, true)
     .addRoute('',      /$/,               homePage);
  // ===================================================================
  // Init components
  // ===================================================================
  ctx.components.forEach( c => {
    if(c.init) c.init();
    ctx.root.appendChild(c.render());
    if(c.mounted) c.mounted(); 
  });
  // ===================================================================
  // Sync UI on view change
  // ===================================================================
  pubsub.subscribe(TOPICS.VIEW_CHANGE, (msg, route) => {

    let headerStyle  = ctx.components[0].root.style;
    let menu         = ctx.components[1].root;
    let contentStyle = ctx.components[2].root.style;

    if (route.isView) {
      menu.classList.remove('sticky');
      menu.style.display = 'none';
      contentStyle.position ='absolute';
      contentStyle.paddingBottom = '0';
      contentStyle.left   = '0';
      contentStyle.right  = '0';
      contentStyle.bottom = '52px';
      contentStyle.top    = '73px';
      contentStyle.overflow = 'auto';
      headerStyle.position = 'fixed';
      headerStyle.width    = '100%';
      headerStyle.zIndex   = '1000';
    } else {
      menu.style.display = '';
      contentStyle.position ='';
      contentStyle.paddingBottom = '60px';
      contentStyle.overflow = '';
      headerStyle.position  = '';
      headerStyle.width     = '';
      headerStyle.zIndex    = ''; 
    }

    ctx.router.previous = ctx.router.current;

  });
  // ==============================================================================
  // Init Notifications system
  // ==============================================================================
  (function(){

    let panel = pol.build('div', { id : 'notificationPanel'});
    ctx.root.parentNode.insertBefore(panel, ctx.root)

    pubsub.subscribe(TOPICS.WINDOW_SCROLL, (message, w) => {
      if (w.pageYOffset >= 40) {
        panel.classList.add("sticky");
      } else {
        panel.classList.remove("sticky");
      }
    });

    pubsub.subscribe(TOPICS.NOTIFICATION, function (msg, data) {
      let template = `<div class="msg w3-container w3-border w3-round w3-animate-top">
                        <span on-click="close" class="w3-button w3-large w3-display-right">x</span>
                        <p style="overflow:hidden;margin-right:27px;">{message}</p>
                      </div>`
      let item = pol.build('div', template.format(data))
                    .firstElementChild;
      panel.appendChild(item);
      // =====================================================
      // addEventListeners
      // =====================================================
      utils.addEventListeners(
        item, 
        {
          close : target => {
            item.classList.remove('w3-animate-top');
            item.style.backgroundColor = 'gray';
            item.style.color = 'white';
            item.style.opacity = '0';
            item.style.transform = 'translate(0, -200px)';
            setTimeout(() => { 
              if(item.parentNode) panel.removeChild(item);
            }, 500);
          }
      });
      // =================================================================================
      // Auto-close
      // =================================================================================
      // if(Math.random() < .6) setTimeout(() => item.firstElementChild.onclick(), 3500);
    });

  })();

})();
// ===================================================
// View change
// ===================================================
const container = pol.$('app-content-container');
let currentBuilder;
let current;
function showContent(){
  let viewBuilder = ctx.router.current.controler;
  if(!current || currentBuilder != viewBuilder) {
    // =======================================================
    // Dispose
    // =======================================================
    if (current && current.dispose) current.dispose();
    // =======================================================
    // Clear 
    // =======================================================
    container.innerHTML = '';  
    // =======================================================
    // Init
    // =======================================================  
    current = viewBuilder(ctx);
    currentBuilder = viewBuilder;
    if(current.init) current.init(); 
    // =======================================================
    // Render
    // =======================================================
    container.appendChild(current.render());
    // =======================================================
    // Mounted
    // =======================================================
    if(current.mounted) current.mounted();
    pubsub.publish(TOPICS.VIEW_CHANGE, ctx.router.current);
  }

}

ctx.router.sync();

window.onpopstate = function(event){
  ctx.router.sync();
}
// ==============================================================================
// ServiceWorker
// ==============================================================================
//window.addEventListener('load', () => {

//  if('serviceWorker' in navigator){
//    try {
//      navigator.serviceWorker.register('serviceWorker.js');
//      console.log("Service Worker Registered");
//    } catch (error) {
//      console.log("Service Worker Registration Failed");
//    }
//  }

//});
