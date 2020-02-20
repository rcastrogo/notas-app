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
// ==============================================================================
// Routes/views
// ==============================================================================
const views = { 'home'    : homePage,
                'list'    : listPage,
                'about'   : aboutPage };
// ==============================================================================
// root html
// ==============================================================================
const root      = document.querySelector('#appContent');

const components =  [ 
  headerComponent(),
  menuComponent(),
  contentComponent(),
  footerComponent()
];
// ==============================================================================
// Init App
// ==============================================================================
(function(element){

  components.forEach( c => element.appendChild(c.render()) );

  pol.toArray(document.querySelectorAll('[route-link]'))
     .forEach(element => {
        element.onclick = function(e){
          let pathName = e.target.pathname;
          window.history
                .pushState({}, pathName, location.origin + pathName);
          showContent();
          return false;
        }  
     });

})(root);
// ==============================================================================
// Sync content
// ==============================================================================
const container = document.querySelector('#app-content-container');
let currentView;
function showContent(){
  let route = window.location
                    .href
                    .replace(document.baseURI, '');
  let view_ref = views[route] || views.home;
  if(!currentView || currentView != view_ref) {
    container.innerHTML = '';    
    currentView = view_ref;
    let view_instance = currentView();
    if(view_instance.init) view_instance.init();
    container.appendChild(view_instance.render());
    if(view_instance.mounted) view_instance.mounted(container);
  }

}

showContent();

window.onpopstate = showContent;

// ==============================================================================
// ServiceWorker
// ==============================================================================
window.addEventListener('load', ()=>{

  if('serviceWorker' in navigator){
    try {
      navigator.serviceWorker.register('serviceWorker.js');
      console.log("Service Worker Registered");
    } catch (error) {
      console.log("Service Worker Registration Failed");
    }
  }

});