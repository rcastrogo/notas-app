import pol from "../lib/mapa";
import DbWrapperService from "../lib/dbWrapper.service";

const NOTAS_DATABASE   = 'notas-app.db'; 
const NOTAS_TABLE_NAME = 'notas';

const __template = `
<div notas-container class="" style="padding:0; margin-bottom:43px;">
</div>
<button btn-add-note class="w3-button w3-black w3-circle">＋</button>
`;

const __item_template =`
<div style="padding:5px 0" id="note-{key}">

  <div class="w3-container w3-light-grey" style="padding:5px">
    <div btn-expand><b>{title}</b><i>+</i></div>
  </div>

  <div class="w3-container" style="display:none; style="padding:5px">
    <div class="w3-border-bottom" style="text-align:right">{date}</div>
    <p class="w3-border w3-pale-yellow" style="padding:5px;min-height: 4em;margin:5px 0">{text}</p>

    <div class="w3-center">
      <button type="button" id="delete-{key}" btn-item-delete class="w3-button w3-xlarge fa fa-trash"></button>
    </div>
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

      var __delete = (target) => {

        let __id = target.id.split('-')[1];
        let __element = document.getElementById('note-{0}'.format(__id));

        let __payload = this.rows.where( { key : parseInt(__id, 10) })[0];
        deleteNote.apply(this, [__id])
                  .then( () => {
          console.log('Delete ok');
          this.rows.remove(__payload);
          __element.parentNode.removeChild(__element);
        });               
      }

      var __render = () => {
        let __container = container.querySelector('[notas-container]');
        __container.innerHTML = '';
        this.rows
            .map( note => pol.build('div', { innerHTML : __item_template.format(note) }))
            .map( e => e.firstElementChild  )
            .forEach( e => {
              e.querySelector('[btn-item-delete]')
               .onclick = (event) => {
                 __delete(event.target)
               }
              __container.appendChild(e)
            });

      pol.toArray(container.querySelectorAll('[btn-expand]'))
         .forEach(h4 => {
           h4.onclick = () => {
             let __style = h4.parentNode.nextElementSibling.style;
             if(__style.display == 'none'){
                __style.display = '';
                h4.querySelector('i').textContent = '-';
             } else {
               __style.display = 'none';
               h4.querySelector('i').textContent = '+';
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

function deleteNote(key) {
  return this.db.delete(NOTAS_TABLE_NAME, key);
}

function saveNote(payload) {
  return this.db.save(NOTAS_TABLE_NAME, payload);
}
