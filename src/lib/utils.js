import pol from "./mapa";
import pubsub from "./pubSub.Service";

const EVENTS = ['[on-click]', '[on-message]'];

function addEventListeners(container, handlers) {

  function innerHTML(e, value) { e.innerHTML = value; }

  EVENTS.forEach((selector, index) => {
    pol.toArray(pol.$(selector, container))
       .forEach( e => {
         let name  = selector.replace('[', '').replace(']', '');
         let value = e.attributes[name].value
         if (index === 0) {
           e.onclick = (event) => handlers[value](e, event);
           return;
         }
         if (index === 1) {
           pubsub.subscribe(value, (message, data) => {
             innerHTML(e, data);  
           })
         }
       }); 
  });
}

export default { 
  addEventListeners
}