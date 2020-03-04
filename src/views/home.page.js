import pol from "../lib/mapa.js";
import utils from "../lib/utils.js";

const __template = `  
  <div class="w3-container w3-center w3-animate-left" style="padding-top:60px;">
    <img src="./assets/img/logo.png" alt="logo" style="width: 300px">
    <p>La app que te permite almacenar todas tus notas en el móvil!!!</p>
  </div>`;

export default function(){

  let component = {
    root   : {},
    init   : function(container){ },
    render : function(container){
      this.root = pol.build('div', __template).firstElementChild ;
      return this.root;
    },
    mounted : function(container){ 
     onTestButtonClick_fill();
    },
    dispose : function(){ }
  };

  // ==========================================================================================
  // FillTemplate
  // ==========================================================================================
  function onTestButtonClick_fill(mouseEvent){
    let html = `
      <h3 xbind="id:id;innerHTML:nombre fn.toUpperCase" on-click="__click"></h3>
      <ul>
        <li xfor="enlace in enlaces" xbind="id:enlace.id;innerHTML:enlace.nombre parentScope.fn.toUpperCase"></li>
      </ul>
      <div>
        <div xfor="otro in otros" xbind="id:otro.id;className:otro.nombre parentScope.fn.toUpperCase">
          <div xbind="innerHTML:parentScope.nombre parentScope.fn.toUpperCase"></div>
          <table>
            <caption xbind="innerHTML:otro.nombre parentScope.fn.toUpperCase"></caption>
            <tbody>
              <tr xfor="valor in otro.valores">
                <td xbind="innerHTML:index"></td><td xbind="innerHTML:valor parentScope.parentScope.fn.toUpperCase"></td>
              </tr>
            </tbody>
          </table>
          <h2 xfor="entrada in otro.data" xbind="innerHTML:entrada.descripcion parentScope.parentScope.fn.toUpperCase"></h2>
          <h3 xbind="">{id}</h3>
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
                  toUpperCase : v => (v) ? v.toString().toUpperCase(v) : ''
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
