import pol from "./mapa";
import pubsub from "./pubSub.Service";

const EVENTS = ['[on-click]', '[on-publish]', '[route-link]'];

function addEventListeners(container, handlers, context) {

  function innerHTML(e, value) { e.innerHTML = value; }

  EVENTS.forEach((selector, index) => {
    pol.toArray(pol.$(selector, container))
       .forEach( e => {
         let name   = selector.replace('[', '').replace(']', '');
         let value  = e.attributes[name].value
         let tokens = value.split(':');
         // =======================================================
         // on-click
         // =======================================================
         if (index === 0) {
           let fn = handlers[value] || 
                    pol.templates.getValue(value, context);
           e.onclick = (event) => fn(e, event);
           return;
         }
         // =======================================================
         // on-publish
         // =======================================================
         if (index === 1) {
           pubsub.subscribe(tokens[0], (message, data) => {
             if (tokens[1]) {
               let fn = handlers[tokens[1]] || 
                        pol.templates.getValue(tokens[1], context);
               if (fn) fn(e, data);
               return;
             } else {
               innerHTML(e, data);
             }
           })
         }
         // =======================================================
         // route-link
         // =======================================================
         if (index === 2) {
           e.onclick = function(e){
             let router = context.router;
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
         }
       }); 
  });
}

export default { 
  addEventListeners
}