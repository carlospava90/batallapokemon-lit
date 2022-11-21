import { LitElement,html,css} from 'lit';
import { dmbatallastyle } from './styles/dmbatallastyle';
import {customElement, property} from 'lit/decorators.js';

class DmBatalla  extends LitElement {
  static get styles(){
    return [ dmbatallastyle ,css`
   
  
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
      url:{type:String},
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
      pokemonganadorurl:{type:String},
      siguienteurl:{type:String},
      anteriorurl:{type:String},
      contenidoganadores:{type:Array},
      peleasganadas:{type:String},
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
    this.url='https://pokeapi.co/api/v2/pokemon/?limit=4&offset=0';
    this.urlpokemon='';
    this.urlpokemon1='';
    this.urlpokemon2='./src/img/buscarpokemon.png';
    this.dataFilms = [];
    this.siguienteurl='';
    this.anteriorurl='';
    this.datos=[];
    this.datospokemones=[];
    this.checkbox1=false;
    this.check=false;
    this.buttonbatallachecked=true;
    this.buttonnuevabatallachecked=true;
    this.pokemonganadornombre='';
    this.pokemonganadorurl='./src/img/buscarpokemon.png';
    this.contenidoganadores=[];
    this.peleasganadas='';
  }
firstUpdated(){
    this._handleApi(this.url).then(response => this._datos(response));
}
connectedCallback() {
  super.connectedCallback();
  this.addEventListener('pokemon-seleccionado-batalla', this._handleSearch);
  this.addEventListener('batalla-pokemon', this._batallaPokemon);
  this.addEventListener('nueva-batalla-pokemon', this._nuevabatalla);
  this.addEventListener('pagina-siguiente', this._next);
  this.addEventListener('pagina-anterior', this._previous);
  this.addEventListener('pagina-home', this._home);
}
disconnectedCallback(){
super.disconnectedCallback();
}

_handleSearch({ detail }) {

  const pokemon = JSON.stringify(detail);
  this.datos.push([JSON.parse(pokemon)]);
  this.nombre1=this.datos[0][0].nombre;
  this.urlpokemon1=this.datos[0][0].url;
  this.datos.length==2?this.checked=false:'';
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

_nuevabatalla(){
  this.contenidoganadores.push(this.pokemonganadornombre);
  this.checkbox1=false;
  this.buttonnuevabatallachecked=true;
  this.buttonbatallachecked=true;
  this.nombre1='';
  this.nombre2='';
  this.urlpokemon1='./src/img/buscarpokemon.png';
  this.urlpokemon2='./src/img/buscarpokemon.png';
  this.datos=[];
  this.datospokemones=[];
  this._handleApi(this.url).then(response => this._datos(response));
}
async _handleApi(url) {
  const response = await fetch(`${url}`);
  return await response.json();
}
 _next(){
  this.url=this.dataFilms[4];
  this.datospokemones=[];
  this._handleApi(this.url).then(response => this._datos(response));

}
_previous(){
 this.dataFilms[5]==null?'':this.url=this.dataFilms[5];
  this.datospokemones=[];
  this._handleApi(this.url).then(response => this._datos(response));
}
_home(){
  this.url='https://pokeapi.co/api/v2/pokemon/?limit=4&offset=0';
  this.datospokemones=[];
  this._handleApi(this.url).then(response => this._datos(response));
}
async _datos(data=''){
  this.dataFilms = [...data.results,data.next,data.previous];
  data.results?
   data.results.forEach(element => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${element.name}?limit=4`)
   .then((response)=> response.json())
   .then((response)=>this._sendDatos(response))
    } )
    :'';

}
async _sendDatos(data)  {
  let ganadas=0;
  this.contenidoganadores.forEach(ganada => {
    data.name==ganada?ganadas+=1:'';
  });
  this.peleasganadas=ganadas;
  this.nombre=data.name;
  this.vida=data.stats[0].base_stat;
  this.ataque=data.stats[1].base_stat;
  this.urlpokemon=data.sprites.front_default;
  const jsonFromMap = JSON.stringify(data);
  this.datospokemones.push([JSON.parse(jsonFromMap)]);
}

  render() {

    return html`
    <h1>Batalla Pokemon</h1>
    <div id="container">
    
      <div id="container-pokemones">
        ${this.dataFilms ? this.datospokemones.map(film => (
              html `
               <listapokemon-front 
               nombre=${film[0].name} 
               ataque=${film[0].stats[1].base_stat} 
               vida=${film[0].stats[0].base_stat} 
               urlpokemon=${film[0].sprites.front_default}
               ?checked=${this.check}
               ?checkboxpokemon=${this.checkbox1}
               batallasganadas=${this.peleasganadas}
               .prueba=${this.datospokemones}
              
              ></listapokemon-front>
              `
            )) : ''}
        <barra-navegadora-front></barra-navegadora-front>
      </div>
      <div id="container-batallas">
        <div id="container-batallafront">
      ${this.datos!='' ?html`
        <batalla-front 
        nombre1=${this.nombre1}
        nombre2=${this.nombre2}
        urlpokemon1=${this.urlpokemon1} 
        urlpokemon2=${this.urlpokemon2}
        ?buttonbatalladisabled=${this.buttonbatallachecked}
        >
        </batalla-front>`:html` <batalla-front></batalla-front>`}
        </div>
        <div id="container-nuevabatallafront">
        ${this.datos!='' ?html`
        <nuevabatalla-front
        pokemonganadorurl=${this.pokemonganadorurl}
        pokemonganadornombre=${this.pokemonganadornombre}
        ?buttonnuevabatalladisabled=${this.buttonnuevabatallachecked}
        ></nuevabatalla-front>`:html` <nuevabatalla-front></nuevabatalla-front>`}
        </div>
      </div>
    </div>
    `;
  }
}
window.customElements.define('dm-batalla', DmBatalla);