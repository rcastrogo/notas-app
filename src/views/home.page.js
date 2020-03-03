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
     //onTestButtonClick_fill();
    },
    dispose : function(){ }
  };

  // ==========================================================================================
  // FillTemplate
  // ==========================================================================================
  function onTestButtonClick_fill(mouseEvent){
    let html = `
      <h3 xbind="id:id;innerHTML:nombre;" on-click="__click"></h3>
      <ul>
        <li xfor="enlaces" xbind="id:id;innerHTML:nombre"></li>
      </ul>
      <ul>
        <li xfor="otros" xbind="id:id;innerHTML:parentScope.nombre"></li>
      </ul>
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
                  { id : 555, nombre : 'Otros 1'},
                  { id : 444, nombre : 'Otros 2'},
                  { id : 333, nombre : 'Otros 3'}
                ]
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
