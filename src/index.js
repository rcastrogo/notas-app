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
import {templatePage} from "./views/test.pages";

const TOPICS = pubsub.TOPICS;

// ==============================================================================
// Routes
// ==============================================================================
const components =  [ 
  headerComponent(),
  menuComponent(),
  contentComponent(),
  footerComponent()
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
    let url = '{origin}{0}{1}'.format(APP_PATH, route, location);
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
router.addRoute('list',  /list$/,            listPage)
      .addRoute('about', /about$/,           aboutPage)
      .addRoute('note',  /note$/,            notePage)
      .addRoute('note',  /note\/(\d{13})$/,  notePage)
      .addRoute('el-tiempo',  /el-tiempo$/,  elTiempoPage)
      .addRoute('templates', /templates$/,   templatePage)
      .addRoute('',      /$/,                homePage);

// ==============================================================================
// Init App
// ==============================================================================
(function(){

  const root = pol.$('appContent');
  components.forEach( c => {
    if(c.init) c.init(root, router);
    root.appendChild(c.render(root));
    if(c.mounted) c.mounted(root); 
  });

})();
// ===================================================
// Sync content
// ===================================================
const container = pol.$('app-content-container');
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
    current = viewBuilder({router, components});
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
    pubsub.publish(TOPICS.VIEW_CHANGE, router.current);
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
