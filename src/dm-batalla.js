import { LitElement,html,css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

class DmBatalla  extends LitElement {
  static get styles(){
    return [css`
    :host{ 
      display: flex;
      flex-direction:row;
      border:solid;    
    }
    #container-pokemones{
      border:solid;
      width:50%
    }
    #container-batallas{
      border:solid;
      width:50%
    }
    
    `]
  }
  static get properties(){
    return{
      response: { type: Object },
      nombre:{type:String},
      nombre1:{type:String},
      nombre2:{type:String},
      vida:{type:String},
      ataque:{type:String},
      urlpokemon:{type:String},
      urlpokemon1:{type:String},
      urlpokemon2:{type:String},
      dataFilms: { type: Array },
      datos:{type:Array},
      datospokemones:{type:Array},
      checkbox1:{type:String}
    }
  }
  constructor() {
    super();
    this.response = [];
    this.nombre='';
    this.nombre1='';
    this.nombre2='';
    this.vida='';
    this.ataque='';
    this.urlpokemon='';
    this.urlpokemon1='';
    this.urlpokemon2='';
    this.dataFilms = [];
    this.datos=[];
    this.datospokemones=[];
    this.checkbox1='false';
  }
firstUpdated(){
    this._handleApi().then(response => this._datos(response));
}
connectedCallback() {
  super.connectedCallback();
  this.addEventListener('pokemon-seleccionado-batalla', this._handleSearch);
  this._handleApi().then(response => this.dataFilms = [...response.results]);
  this._datos(this.dataFilms);
}
_handleSearch({ detail }) {
  
  const pokemon = JSON.stringify(detail);
  this.datos.push([JSON.parse(pokemon)]);
  
  if(this.datos.length==2){
    this.datos.map(film=>(console.log(film[0].nombre)))
    // this.datos.forEach(element => {
    //   console.log(element)
    // })
  //   this.nombre1=this.datos[0].nombre;
  // this.nombre2=this.datos[1].nombre;
  // this.urlpokemon1=this.datos[0].url;
  // this.urlpokemonq=this.datos[1].url;
  }
 
this.datos[1]?this.checkbox1=true:'';

}
async _handleApi() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=4&offset=0`);
  return await response.json();
}
async _datos(data=''){

  data.results?
   data.results.forEach(element => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${element.name}?limit=4`)
   .then((response)=> response.json())
   .then((response)=>this._sendDatos(response))
    } )
    :'';

}
async _sendDatos(data)  {
  
  this.nombre=data.name;
  this.vida=data.stats[0].base_stat;
  this.ataque=data.stats[1].base_stat;
  this.urlpokemon=data.sprites.front_default;
  const jsonFromMap = JSON.stringify(data);
  this.datospokemones.push([JSON.parse(jsonFromMap)]);

}
 
  render() {
    // console.log(this.nombre1)
    return html`
    <div id="container-pokemones">
     ${this.dataFilms ? this.datospokemones.map(film => (
              html `
               <listapokemon-front 
               nombre=${film[0].name} 
               ataque=${film[0].stats[1].base_stat} 
               vida=${film[0].stats[0].base_stat} 
               urlpokemon=${film[0].sprites.front_default}
               checkboxpokemon=${this.checkbox1}
              ></listapokemon-front>
              `
            )) : ''}
      </div>
      <div id="container-batallas">
     
      ${this.datos!='' ?this.datos.map(film=> html`
        <batalla-front 
        nombre1=${this.nombre1}
        nombre2=${this.nombre1}
        urlpokemon1=${this.urlpokemon1.url} 
        urlpokemon2=${this.urlpokemon2.url}
        >
        </batalla-front>`):html` <batalla-front></batalla-front>`}
        <nuevabatalla-front></nuevabatalla-front>
      </div>
    `;
  }
  
}

window.customElements.define('dm-batalla', DmBatalla);