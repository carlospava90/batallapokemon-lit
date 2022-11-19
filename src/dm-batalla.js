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
      checkbox1:{type:Boolean},
      checked:{type:Boolean},
      buttonbatallachecked:{type:Boolean},
      buttonnuevabatallachecked:{type:Boolean},
      pokemonganadornombre:{type:String},
      pokemonganadorurl:{type:String}
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
    this.urlpokemon2='./src/img/buscarpokemon.png';
    this.dataFilms = [];
    this.datos=[];
    this.datospokemones=[];
    this.checkbox1=false;
    this.checked=false;
    this.buttonbatallachecked=true;
    this.buttonnuevabatallachecked=true;
    this.pokemonganadornombre='';
    this.pokemonganadorurl='./src/img/buscarpokemon.png';
  }
firstUpdated(){
    this._handleApi().then(response => this._datos(response));
}
connectedCallback() {
  super.connectedCallback();
  this.addEventListener('pokemon-seleccionado-batalla', this._handleSearch);
  this.addEventListener('batalla-pokemon', this._batallaPokemon);
  this.addEventListener('nueva-batalla-pokemon', this._nuevabatalla);
  this._handleApi().then(response => this.dataFilms = [...response.results]);
  this._datos(this.dataFilms);
}

_handleSearch({ detail }) {
  const pokemon = JSON.stringify(detail);
  this.datos.push([JSON.parse(pokemon)]);
  this.nombre1=this.datos[0][0].nombre;
  this.urlpokemon1=this.datos[0][0].url;
  this.datos.length==2?(this.buttonbatallachecked=false,this.nombre2=this.datos[1][0].nombre,
    this.urlpokemon2=this.datos[1][0].url,this.checkbox1=true):'';
}

_batallaPokemon(){
  this.buttonbatallachecked=true;
  this.buttonnuevabatallachecked=false;
  let ataque = Math.round(Math.random() * 1);
  let resul=Number(this.datos[0][0].hp);
  let resul1=Number(this.datos[1][0].hp);
  do {
    ataque==0?(resul1-=Number(this.datos[0][0].poder),ataque=1):(resul-=Number(this.datos[1][0].poder),ataque=0);
  } while ((resul>0)&&(resul1>0)); 
  (resul<=0&&resul1>0)?(this.pokemonganadornombre=this.datos[1][0].nombre,this.pokemonganadorurl=this.datos[1][0].url):(this.pokemonganadornombre=this.datos[0][0].nombre,this.pokemonganadorurl=this.datos[0][0].url) ;
}

_nuevabatalla({detail}){
  this.checkbox1=false;
  this.checked=false;
  this.buttonnuevabatallachecked=true;
  this.buttonbatallachecked=false;
  this.nombre1='';
  this.nombre2='';
  this.urlpokemon1='./src/img/buscarpokemon.png';
  this.urlpokemon2='./src/img/buscarpokemon.png';
  this.datos=[];
  this._handleApi().then(response => this.dataFilms = [...response.results]);
  this._datos(this.dataFilms);
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
    return html`
    <div id="container-pokemones">
     ${this.dataFilms ? this.datospokemones.map(film => (
              html `
               <listapokemon-front 
               nombre=${film[0].name} 
               ataque=${film[0].stats[1].base_stat} 
               vida=${film[0].stats[0].base_stat} 
               urlpokemon=${film[0].sprites.front_default}
               ?checkboxpokemon=${this.checkbox1}
               ?checked=${this.checked}
              ></listapokemon-front>
              `
            )) : ''}
      </div>
      <div id="container-batallas">
     
      ${this.datos!='' ?html`
        <batalla-front 
        nombre1=${this.nombre1}
        nombre2=${this.nombre2}
        urlpokemon1=${this.urlpokemon1} 
        urlpokemon2=${this.urlpokemon2}
        ?buttondisabled=${this.buttonbatallachecked}
        >
        </batalla-front>`:html` <batalla-front></batalla-front>`}

        ${this.datos!='' ?html`
        <nuevabatalla-front
        pokemonganadorurl=${this.pokemonganadorurl}
        pokemonganadornombre=${this.pokemonganadornombre}
        ?buttondisabled=${this.buttonnuevabatallachecked}
        ></nuevabatalla-front>`:html` <nuevabatalla-front></nuevabatalla-front>`}
      </div>
    `;
  }
}
window.customElements.define('dm-batalla', DmBatalla);