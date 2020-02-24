import pol from "../lib/mapa";
import DbWrapperService from "../lib/dbWrapper.service";

const NOTAS_DATABASE   = 'notas-app.db'; 
const NOTAS_TABLE_NAME = 'notas';

const TEMPLATE = `
<div notas-container style="padding:0; margin-bottom:43px;"></div>
<button btn-add-note on-click="addNote" class="w3-button w3-black w3-circle">＋</button>`;

const __ITEM_TEMPLATE =`
<div class="w3-border-bottom" style="padding:0; font-size:14px;" id="note-{key}">
  <div class="w3-container" style="padding:5px">
    <div on-click="expandCollapse"><b>{title}</b><i class="w3-right w3-large fa fa-caret-down"></i></div>
  </div>
  <div class="w3-container" style="display:none;padding:0 4px">
    <p class="w3-border-bottom" style="padding:2px;min-height:4em;margin:2px 0;">{text}</p>
    <div class="w3-bar w3-center" style="padding:4px 0;">
      <button type="button" id="delete-{key}" btn-item-delete on-click="deleteNote" class="w3-button w3-black">Borrar</button>
      <button type="button" id="info-{key}" btn-item-delete on-click="showInfo" class="w3-button w3-black">?</button>
    </div>
  </div>
</div>`;

export default function(){
    
  let db;
  let rows = [];
  let itemsContainer;
  let component = {
    root   : {},
    init   : function(container){ },
    render : function(container){
      this.root = pol.build('div', TEMPLATE);
      itemsContainer = this.root.firstElementChild;
      return this.root;
    },
    mounted : function(container){
      initAll();  
    },
    eventHandlers : { 
      addNote        : addNote,
      deleteNote     : deleteNote,
      expandCollapse : expandCollapse,
      showInfo       : showNoteInfo
    } 
  };

  function initAll() {
    // =====================================================
    // Open database
    // =====================================================
    db = new DbWrapperService(NOTAS_DATABASE);
    db.openDb()
      .then( db => {
        loadData();
      });
    // =====================================================
    // addEventListener
    // =====================================================
    addEventListeners(component.root);
  }

  function addEventListeners(container) {
    ['[on-click]'].forEach(event => {
      pol.toArray(container.querySelectorAll(event))
          .forEach( e => {
            e.onclick = (event) => {
              let name = e.attributes['on-click'].value;
              component.eventHandlers[name](e, event);
            };        
          }); 
    })
  }

  function loadData() {
    db.readAll(NOTAS_TABLE_NAME)
      .then( values => {
        rows = values;
        render();
      });
  }

  function render() {
    itemsContainer.innerHTML = '';
    rows.map( note => pol.build('div', __ITEM_TEMPLATE.format(note)))
        .map( e => e.firstElementChild )
        .forEach( e => {
          e.querySelector('[btn-item-delete]')
           .onclick = (event) => {
             deleteNote(event.target)
           }
          itemsContainer.appendChild(e);
        });
    // =====================================================
    // addEventListener
    // =====================================================
    addEventListeners(itemsContainer);
  }

  function deleteNote(target, mouseEvent){
    let __id      = parseInt(target.id.split('-')[1]);
    let __payload = rows.where({ key : __id })[0];
    let __element = document.getElementById('note-{0}'.format(__id));
    
    db.delete(NOTAS_TABLE_NAME, __id)
      .then( () => {
        rows.remove(__payload);
        __element.parentNode.removeChild(__element);
      })
      .catch( e => {
        console.log(e);
      });               
  }

  function expandCollapse(target, mouseEvent) {
    let __style = target.parentNode.nextElementSibling.style;
    if(__style.display == 'none'){
      __style.display = '';
      target.querySelector('i').classList.remove('fa-caret-down');
      target.querySelector('i').classList.add('fa-caret-up');
    } else {
      __style.display = 'none';
      target.querySelector('i').classList.remove('fa-caret-up');
      target.querySelector('i').classList.add('fa-caret-down');
    }
  }

  function addNote(target, mouseEvent) {
    var __payload = { key   : new Date().valueOf(), 
                      date  : '21/02/2020', 
                      title : 'Nueva nota', 
                      text  : 'Texto de la nota' };
    db.save(NOTAS_TABLE_NAME, __payload)
      .then( nota => {
        rows.push(nota)
        render();    
      })
      .catch( e => {
        console.log(e);
      });
  }  

  function showNoteInfo(target, mouseEvent) {
    alert(target.id);
  }

  return component;

}

