import pol from "../lib/mapa.js";

const __template = `  
    <p>{title}</p>
`;

export default function(){
  return {
    title  : '© Rafael Castro Gómez, 2020',
    render : function() {
      let options = { 
        id        : "appFooter",
        innerHTML : __template.format(this),
        className : 'w3-container w3-teal w3-center'
      }
      return pol.build('footer', options);
    }
  };
}
