import pol from "../lib/mapa.js";
import utils from "../lib/utils";
import pubsub from "../lib/pubSub.Service";
import DbWrapperService from "../lib/dbWrapper.service";

const TOPICS           = pubsub.TOPICS;
const NOTAS_DATABASE   = 'notas-app.db'; 
const NOTAS_TABLE_NAME = 'notas';

const __template = `  
<div class="w3-container w3-margin-bottom w3-animate-left">
  <h2>Nueva nota</h2>
  <form class="w3-margin-bottom">
    <label for="txt-title">Título</label>
    <input on-change="onChange" class="w3-input w3-border" type="text" id="txt-title" placeholder="Introduce un título" >
    <label for="txt-text">Texto</label>
    <textarea on-change="publish" class="w3-input w3-border" id="txt-text" rows="4" placeholder="Contenido de la nota"></textarea>
  </form>
  <div class="w3-container w3-margin-bottom w3-center w3-animate-zoom">
    <button type="button" id="btn-grabar" class="w3-button w3-black">Grabar</button>
  </div>
</div>
`;

export default function(ctx){
  
  let current;
  let db;
  let component = {
    root   : {},
    init   : function(){ },
    render : function(){
      this.root = pol.build('div', __template);
      return this.root;
    },
    mounted : function(){
      initAll();
    }
  };

  function initAll() {

    let __container = component.root.firstElementChild;
    __container.style.display = 'none';
    // ==============================================================
    // addEventListener
    // ==============================================================
    utils.addEventListeners(__container, {}, {
      onChange: function(e){
        //console.log('onChange_fn', e.value);
      }
    });

    pubsub.subscribe(TOPICS.VALUE_CHANGE, function(message, e){
      //console.log('value.change', e.value);
    })

    // =====================================================
    // Open database
    // =====================================================
    db = new DbWrapperService(NOTAS_DATABASE);
    db.openDb()
      .then( () => {
        let __enableUI = function(){
          __container.style.display = '';
          pol.$('btn-grabar').onclick = addNote;
        }
        let __id = ctx.router.current.params[1] || '';
        if (__id) {
          db.readOne(NOTAS_TABLE_NAME, parseInt(__id))
            .then( note => {
              current = note;
              pol.$('txt-title').value = current.title;
              pol.$('txt-text').value  = current.text;
              pol.$('h2', component.root)[0].innerHTML = 'Edición de nota';
              __enableUI();
            });
          return;
        }
        __enableUI();
      });


  }

  function addNote() {
    var __txtTitle = pol.$('txt-title');
    var __txtText  = pol.$('txt-text');
    var __title = __txtTitle.value.trim();
    var __text  = __txtText.value.trim();
    if (!__title) {
      setTimeout(() => __txtTitle.focus(), 20);
      return;
    }
    if (!__text) {
      setTimeout(() => __txtText.focus(), 20);
      return;
    }
    let date = new Date();
    db.save(NOTAS_TABLE_NAME,
            { 
              key   : current ? current.key  : date.valueOf(), 
              date  : current ? current.date :
                                '{0}/{1}/{2}'.format(date.getDate(), 
                                                     date.getMonth(), 
                                                     date.getFullYear()), 
              title : __title, 
              text  : __text 
            })
            .then( nota => {
              ctx.router.navigateTo('list'); 
              pubsub.publish(TOPICS.NOTIFICATION, 
                { message : current ? 'La nota se ha actualizado correctamente!!!'
                                    : 'La nota se ha insertado correctamente!!!' });
            });
  }

  return component;
}
