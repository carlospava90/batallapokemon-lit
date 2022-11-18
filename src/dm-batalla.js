import { LitElement,html,css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

class DmBatalla  extends LitElement {
  static get properties(){
    return{
      response: { type: Object },
      nombre:{type:String},
      vida:{type:String},
      ataque:{type:String},
      urlpokemon:{type:String},
      dataFilms: { type: Array },
      datos:{type:Array},
      datospokemones:{type:Array},
    }
  }
  constructor() {
    super();
    this.response = [];
    this.nombre='';
    this.vida='';
    this.ataque='';
    this.urlpokemon='';
    this.dataFilms = [];
    this.datos=[];
    this.datospokemones=[];
  }
firstUpdated(){
  // fetch("https://swapi.dev/api/people/")
  // fetch(`https://pokeapi.co/api/v2/pokemon/${this.name}?limit=4`)
  // .then((r) => r.json())
  // .then((r) => {
  //   this.response = r.results;
  // this.dataFilms = [...response.results]);
  //   this.response.forEach(element => {
  //     console.log(element.name) 
  //   });
      
  // });
    this._handleApi().then(response => this._datos(response));
}
connectedCallback() {
  super.connectedCallback();
  
  // this.addEventListener('on-submit-search', this._handleSearch);
  // eslint-disable-next-line no-return-assign
  //  this._handleApi().then(response => console.log(response));
    this._handleApi().then(response => this.dataFilms = [...response.results]);
  this._datos(this.dataFilms);
}
async _handleApi() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=4`);
  return await response.json();
}
async _datos(data=''){

  data.results?
   data.results.forEach(element => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${element.name}?limit=4`)
   .then((response)=> response.json())
   .then((response)=>this._sendDatos(response))
  //  .then((response)=>{this.datospokemones= [...response]})

  // )
    } ):'';
  // console.log(this.datospokemones,'a')
  // console.log(this.datospokemones[0])
}
async _sendDatos(data)  {
  // console.log(data.sprites.front_default)
  this.nombre=data.name;
  this.vida=data.stats[0].base_stat;
  this.ataque=data.stats[1].base_stat;
  this.urlpokemon=data.sprites.front_default;
  const jsonFromMap = JSON.stringify(data);
  this.datospokemones=JSON.parse(jsonFromMap);
// {"user1":"John","user2":"Kate","user3":"Peter"}
console.log(this.datospokemones.stats);
  // const arr = Object.entries(data);

  // console.log(arr);

}
  static get styles(){
    return [css`
    :host{ display: flex }`]
  }
  render() {
  //  this.datospokemones?
  //  datospokemones.forEach(element => {
  //  }):'';
  // console.log(this.datospokemones)
    // const { response } = this;
  //  this.name= this.dataFilms[3].name;
    return html`
    ${this.dataFilms ? (
              html `
      <listapokemon-front nombre=${this.nombre} vida=${this.vida} ataque=${this.ataque} urlpokemon=${this.urlpokemon}>
    </listapokemon-front>
    `
            ) : ''}
    <batalla-front></batalla-front>
    <nuevabatalla-front></nuevabatalla-front>
    `;
  }
  
}

window.customElements.define('dm-batalla', DmBatalla);