import pol from "../lib/mapa.js";

const __template = `
  <h1>{title}</h1>
`;

export default function(){
  return {
    root   : {},
    title  : 'Notas App',
    init   : function(container){},
    render : function(container){
      let options = { 
        id        : 'appHeader',
        innerHTML : __template.format(this),
        className : 'w3-container w3-teal'
      }
      this.root = pol.build('header', options);
      return this.root;
    },
    mounted: function(container){
      
    }
  };
}
