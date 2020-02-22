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
  'about'   : aboutPage 
};

// ==============================================================================
// Init App
// ==============================================================================
(function(){

  const root = document.querySelector('#appContent');
  components.forEach( c => {
    root.appendChild(c.render());
    if(c.mounted) c.mounted(root); 
  });

  pol.toArray(document.querySelectorAll('[route-link]'))
     .forEach(element => {
        element.onclick = function(e){
          let pathName = e.target.pathname;
          window.history
                .pushState({}, pathName, location.origin + pathName);
          try {
            showContent();
          } catch (error) {
            console.log(error);
          }
          return false;
        }  
     });

})();
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
      window.initMapaScroll();
    } catch (error) {
      console.log("Service Worker Registration Failed");
    }
  }

});

// ==============================================================================
// Scroll
// ==============================================================================
(function(module){
    
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
      
  module.initMapaScroll = function(){        
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
  window.addEventListener("resize", debounce(module.initMapaScroll, 150), false);
}(window));