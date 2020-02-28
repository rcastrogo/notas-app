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
router.addRoute('list',  /list$/,            listPage)
      .addRoute('about', /about$/,           aboutPage)
      .addRoute('note',  /note$/,            notePage)
      .addRoute('note',  /note\/(\d{13})$/,  notePage)
      .addRoute('el-tiempo',  /el-tiempo$/,  elTiempoPage)
      .addRoute('',      /$/,                homePage);

// ==============================================================================
// Init App
// ==============================================================================
(function(){

  const root = pol.$('appContent');
  components.forEach( c => {
    if(c.init) c.init(root);
    root.appendChild(c.render(root));
    if(c.mounted) c.mounted(root); 
  });

  pol.$('[route-link]')
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
const container = pol.$('app-content-container');
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
    pubsub.publish('view.change', router.current);
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
