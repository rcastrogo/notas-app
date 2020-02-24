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
  'add'     : newItemPage 
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
          let pathName = e.target.pathname;
          if (currentPath != pathName) {
            currentPath = pathName;
            window.history
                  .pushState({}, pathName, location.origin + pathName);
            try {
              showContent();
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
let currentPath;
function showContent(){
  let route = window.location
                    .href
                    .replace(document.baseURI, '');
  let view_ref = views[route] || views.home;
  if(!currentView || currentView != view_ref) {
    container.innerHTML = '';    
    currentView = view_ref;
    let view_instance = currentView({ currentView : currentView });
    if(view_instance.init) view_instance.init();
    container.appendChild(view_instance.render());
    if(view_instance.mounted) view_instance.mounted(container);
  }

}

showContent();

window.onpopstate = function(){ 
  currentPath = window.location.pathname;
  showContent();
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
