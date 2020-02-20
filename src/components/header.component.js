import pol from "../lib/mapa.js";

const __template = `
  <h1>{title}</h1>
`;

export default function(){
  return {
    title  : 'Notas App',
    render : function() {
      let options = { 
        id        : 'appHeader',
        innerHTML : __template.format(this),
        className : 'w3-container w3-teal'
      }
      return pol.build('header', options);
    }
  };
}
