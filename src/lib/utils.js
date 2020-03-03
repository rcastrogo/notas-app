import pol from "./mapa";
import pubsub from "./pubSub.Service";

const EVENTS = ['[on-click]', '[on-publish]', '[route-link]', '[on-change]'];

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
           let topic = pol.templates.getValue(tokens[0], pubsub);
           pubsub.subscribe(topic, (message, data) => {
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
         // ====================================================================
         // on-change
         // ====================================================================
         if (index === 3) {
           let select = e.tagName === 'SELECT';
           if (value === 'publish') {
             if (select) 
               e.onchange = () => pubsub.publish(pubsub.TOPICS.VALUE_CHANGE, e); 
             else 
               e.oninput = () => pubsub.publish(pubsub.TOPICS.VALUE_CHANGE, e);
             return;
           }

           let fn = handlers[value] ||
                    pol.templates.getValue(value, context);
           if (select) 
             e.onchange = () => fn(e);
           else 
             e.oninput = () => fn(e);
         }
       }); 
  });
}

export default { 
  addEventListeners
}