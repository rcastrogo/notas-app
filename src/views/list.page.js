import pol from "../lib/mapa";
import DbWrapperService from "../lib/dbWrapper.service";

const NOTAS_DATABASE   = 'notas-app.db'; 
const NOTAS_TABLE_NAME = 'notas';

const __template = `
<div class="w3-bar w3-center">
  <button btn-add-note class="w3-button w3-dark-grey w3-margin">Crear una nota</button>
</div>
<div notas-container class="w3-margin-bottom w3-margin-top" style="padding:0">
</div>`;

const __item_template =`
<div class="w3-panel w3-border w3-round" style="padding:3px" id="note-{key}">
  <header class="w3-container w3-light-grey" style="padding:0">
    <h4 btn-expand><span>+</span> {title}</h4>
  </header>

  <div class="w3-container" style="display:none">
    <span>{date}</span>
    <p>{text}</p>
  </div>
  <div class="w3-bar w3-center">
    <button class="w3-button w3-dark-grey w3-margin">Eliminar</button>
  </div>
</div>`;

export default function(){
  return {
    db     : '',
    rows   : [],
    render : function() {
      let options = { 
        innerHTML : __template.format(this),
      }
      return pol.build('div', options); 
    },
    mounted : function(container){
            
      container.querySelector('[btn-add-note]')
               .onclick = () => {
                 var __payload = { key   : new Date().valueOf(), 
                                   date  : '21/02/2020', 
                                   title : 'Nueva nota', 
                                   text  : 'Texto de la nota' };
                 saveNote.apply(this, [__payload])
                         .then( nota => {
                           this.rows.push(nota)
                           __render();    
                         });
               };

      var __loadData = () => {
        this.db
            .readAll(NOTAS_TABLE_NAME)
            .then( values => {
              this.rows = values;
              __render();
            });
      };

      var __render = () => {
        let __container = container.querySelector('[notas-container]');
        __container.innerHTML = '';
        this.rows
            .map( note => pol.build('div', { innerHTML : __item_template.format(note) }))
            .map( e => e.firstElementChild  )
            .forEach( e => __container.appendChild(e) );

      pol.toArray(container.querySelectorAll('[btn-expand]'))
         .forEach(h4 => {
           h4.onclick = () => {
             let __style = h4.parentNode.nextElementSibling.style;
             if(__style.display == 'none'){
                __style.display = '';
             } else {
               __style.display = 'none';
             }
           }
         })
      }

      this.db = new DbWrapperService(NOTAS_DATABASE);
      this.db
          .openDb()
          .then( db => {
            __loadData();
          });
    }
  };
}

function deleteNote(target) {
  this.db
      .delete(NOTAS_TABLE_NAME, __target.key)
      .then( () => {
        this.rows.remove(__target);
        
      });
}

function saveNote(payload) {
  return this.db
             .save(NOTAS_TABLE_NAME, payload);

            //.then( data => {
            //  this.rows.push(data);                                    
            //}).catch( error => {
            //  console.log(error);
            //});
}
