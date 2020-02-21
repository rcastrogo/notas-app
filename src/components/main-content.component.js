import pol from "../lib/mapa.js";

const __template = ``;

export default function(){
  return {
    text  : '',
    render : function() {
      let options = { 
        id        : "app-content-container",
        innerHTML : __template.format(this),
        className : 'w3-container',
        style     : { 
          minHeight : '440px',
          padding   : '0'
        }
      }
      return pol.build('section', options);
    },
    mounted: function(parent){
      
    }
  };
}
