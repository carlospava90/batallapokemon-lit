import { LitElement} from 'lit-element';

class DmBatalla  extends LitElement {
  static get properties(){
    return{
      url:{type: String}
    }
  }
firstUpdated(){
  this.getData();
  // this.datos();
}
  // constructor(){
  //   super();
  //   console.log('Hola desde dm-batalla');
  // }

  _sendDatos(data){
    const datos=data.results.map(({url})=>url);
    const detailpokemones = [];
    const nuevosdato={};
    for (const iterator of datos) {
      fetch(iterator)
        .then((response)=>{
          if(response.ok) return response.json();
          return Promise.reject(response);
      })
      .then((data)=>{ detailpokemones.push(data)})
      .catch((error)=>{console.warn('error en la consulta',error);})
    }
    nuevosdato.dato=detailpokemones;
    console.log(nuevosdato)
    this.dispatchEvent(new CustomEvent('ApiData',{
      detail:{nuevosdato},bubbles: true, composed: true
    }));
  }
  getData(){
    fetch(this.url)
      .then((response)=>{
        if(response.ok) return response.json();
        return Promise.reject(response);
    })
     .then((data)=>{this._sendDatos (data)})
    .catch((error)=>{console.warn('error en la consulta',error);})
  }

  datos() {
    const nuevo=this.getData();
    console.log(nuevo)
  }
  
}

customElements.define('dm-batalla', DmBatalla);
  // render() {
  //   return html`
  //     <h1>Batalla Pokemon</h1>

  //   <listapokemon-front></listapokemon-front>
  //   <batalla-front></batalla-front>
  //   <nuevabatalla-front></nuevabatalla-front>
  //   `;
  // }