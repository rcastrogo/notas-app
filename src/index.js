import pol from "./lib/mapa.js";
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
import newItemPage from "./views/new-item.page";
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
// Views
// ==============================================================================
const views = { 
  'home'    : homePage,
  'list'    : listPage,
  'about'   : aboutPage,
  'add'     : newItemPage,
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

  const root = pol.$('appContent');
  components.forEach( c => {
    if(c.init) c.init(root);
    root.appendChild(c.render(root));
    if(c.mounted) c.mounted(root); 
  });

  pol.$('[route-link]')
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
const container = pol.$('app-content-container');
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
