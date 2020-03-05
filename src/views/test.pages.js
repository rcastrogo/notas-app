import pol from "../lib/mapa.js";
import utils from "../lib/utils.js";


let templatePage = function(ctx){

  const __TEMPLATE = ``;

  
  let component = {
    root   : {},
    data   : {},
    init   : function(container){ },
    render : function(container){
      this.root = pol.build('div', __TEMPLATE);
      return this.root;
    },
    mounted : function(container){
      onTestButtonClick_fill();  
    },
    dispose : function(){

    },
    eventHandlers : { 

    }
  };
  
  // ==========================================================================================
  // FillTemplate
  // ==========================================================================================
  function onTestButtonClick_fill(mouseEvent){
    let html = `
      <h3 xbind="id:id;innerHTML:this.nombre fn.toUpperCase" on-click="__click"></h3>
      <h3 xbind=""><b>All:</b> {id} <b>-</b> {nombre:fn.toUpperCase} {fn.counter}</h3>
      <ul>
        <li xfor="enlace in enlaces" xbind="id:enlace.id;innerHTML:enlace.nombre fn.toUpperCase a b c d"></li>
      </ul>
      <div>
        <div xfor="otro in otros" xbind="id:otro.id;className:otro.nombre fn.toUpperCase">
          <div xbind="innerHTML:outerScope.nombre fn.toUpperCase"></div>
          <table>
            <caption xbind="innerHTML:otro.nombre fn.toUpperCase"></caption>
            <tbody>
              <tr xfor="valor in otro.valores">
                <td xbind="innerHTML:index"></td><td xbind="innerHTML:valor fn.toUpperCase"></td>
              </tr>
            </tbody>
          </table>
          <h2 xfor="entrada in otro.data" xbind="innerHTML:entrada.descripcion fn.toUpperCase"></h2>       
        </div>
      </div>
    `;
    let template = pol.build('div', html);
    let r = pol.templates.fill(
              template, 
              { id      : 555, 
                nombre  : 'fer',
                enlaces : [
                  { id : 555, nombre : 'Enlace 1'},
                  { id : 444, nombre : 'Enlace 444'},
                  { id : 333, nombre : 'Enlace 333'}
                ],
                otros : [
                  { id : 555, 
                    nombre  : 'Otros 1', 
                    data    : [ { numero : 5, descripcion : 'La descripción' }, 
                                { numero : 15, descripcion : 'La descripción 15' }], 
                    valores : ['v1', 'v2', 56]
                  },
                  { id : 444, nombre : 'Otros 2', valores : ['v3', 'v4']},
                  { id : 333, nombre : 'Otros 3', valores : ['v5', 'v6']}
                ],
                fn: {
                  toUpperCase : (v, scope, child, p1, p2, p3) => {
                    return (v) ? v.toString().toUpperCase(v) : '';
                  },
                  counter: scope => {
                    return 'a78';
                  }
                }
              });

    component.root.appendChild(r);
    utils.addEventListeners(template, {}, 
                            { __click : (event) => {
                                  console.log(event);
                              }
                            });
  }

  // ==========================================================================================
  // ExecuteTemplate
  // ==========================================================================================
  function onTestButtonClick(mouseEvent){
    let template = pol.build('div', 
                             '<h3 xbind="id:id;innerHTML:nombre;"></h3>')
                      .firstElementChild;
    let innerHtml = pol.templates
                       .execute(template, [{ id : 555, nombre : 'rafa'},
                                           { id : 444, nombre : 'rafa 444'},
                                           { id : 333, nombre : 'rafa 333'}]);
    pol.templates
       .execute(template,
                [{ id : 555, nombre : 'rafa'},
                 { id : 444, nombre : 'rafa 444'},
                 { id : 333, nombre : 'rafa 333'}],
                true
               )
      .map( e => e.node )
      .forEach( node => component.root.appendChild(node) );
  }


  return component;

}

export {
  templatePage
}