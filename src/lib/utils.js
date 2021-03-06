import pol from "./mapa";
import pubsub from "./pubSub.Service";

const EVENTS = ['[on-click]', '[on-publish]', '[route-link]', '[on-change]'];

function addEventListeners(container, handlers, context) {

  let fn = {
    innerHTML : (e, value) => e.innerHTML = value,
    className : (e, value) => e.className = value
  }
  
  EVENTS.forEach((selector, index) => {
    pol.toArray(pol.$(selector, container))
       .concat([container])
       .forEach( e => {
         let name   = selector.replace('[', '').replace(']', '');
         if (!e.attributes[name]) return;
         let value  = e.attributes[name].value
         let tokens = value.split(':');
         // =============================================================
         // on-click
         // =============================================================
         if (index === 0) {
           let fn = handlers[tokens[0]] || 
                    pol.templates.getValue(tokens[0], context);
           e.onclick = (event) =>{
            let _args = tokens.slice(1)
                              .reduce(function (a, p) {                                
                                a.push(p.charAt(0) == '@' 
                                       ? pol.templates.getValue(p.slice(1), context)
                                       : p);
                                return a;
                              }, [e, event]);
             return fn.apply(context, _args);
           }
           return;
         }
         // =============================================================
         // on-publish
         // =============================================================
         if (index === 1) {
           let topic = pol.templates.getValue(tokens[0], pubsub);
           topic = topic === window ? tokens[0] : topic;
           pubsub.subscribe(topic, (message, data) => {
             let fnName = tokens[1];
             if(fnName){
               let f = fn[fnName]       ||
                       handlers[fnName] || 
                       pol.templates.getValue(fnName, context);
               if (f) f.apply(context, [e, data]);
               return;
             }else{
               fn.innerHTML(e, data);
             }
           })
         }
         // =============================================================
         // route-link
         // =============================================================
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
             e.onchange = () => fn.apply(context, [e]);
           else 
             e.oninput  = () => fn.apply(context, [e]);
         }
       }); 
  });
}

// =============================================
// CommandManager
// =============================================
function CommandManager(doc){
  var _this = { 
    _undos : [],
    _redos : [],
    clear : function(){
      _this._undos.length = 0;
      _this._redos.length = 0;
    },
    executeCommad : function(command){
      try{
        _this._undos.push(command.execute(doc));
        _this._redos.length = 0;
      }catch(e){ console.error(e) }
    },
    undo : function(){
      if(_this._undos.length > 0) {
        _this._redos.push(_this._undos
                               .pop()
                               .undo(doc));
      }                
    },
    redo : function(){
      if(_this._redos.length > 0) {    
        _this._undos.push(_this._redos
                               .pop()
                               .execute(doc));
      }
    }
  };  
  return _this;
};

// =============================================
// DialogHelper
// =============================================
class DialogHelper {

  constructor() { }

  getDialogWrapper(id){
    let __container = document.getElementById(id);
    let __dlg = { container   : __container,
                  title       : __container.querySelector('.js-title'),
                  body        : __container.querySelector('.js-content'),
                  closeButton : __container.querySelector('.js-close-button'),
                  acceptButton: __container.querySelector('.js-accept-button'),
                  close       : function(){ 
                    __container.style.display = 'none'; 
                    if(this.content) this.content.style.display = 'none';
                  },
                  show        : function(onConfirm){
                    if (onConfirm) {
                      __dlg.acceptButton.onclick = () => {
                        onConfirm(__dlg);
                      };
                    }
                    __container.style.display = 'block';
                  },
                  setTitle: (title) => {
                    __dlg.title.innerHTML = title;
                    return __dlg;
                  },
                  setBody: (content) => {
                    if (content.tagName) {
                      __dlg.body.innerHTML = '';
                      __dlg.body.appendChild(content);
                      this.content = content;
                      this.content.style.display = 'block';
                    }else{
                      __dlg.body.innerHTML = content;
                      this.content = undefined;
                    }
                    return __dlg;
                  },
                  disableClickOutside: () => {
                    __dlg.container.onclick = () => {};
                    return __dlg;
                  }
                };
    __dlg.acceptButton.onclick = __dlg.close;
    __dlg.closeButton.onclick = __dlg.close;
    __dlg.container.onclick   = (sender) => { if (sender.target === __dlg.container) __dlg.close(); }
    return __dlg;
  }

}


export default { 
  addEventListeners,
  CommandManager,
  DialogHelper
}