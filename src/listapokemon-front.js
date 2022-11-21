import { LitElement,css, html } from 'lit';
import { listapokemonstyles } from './styles/listapokemonstyle';
import './dm-batalla';
class ListaPokemonFront  extends LitElement {
  static get properties() {
    return {
      nombre: { type: String },
      vida:{type: String},
      urlpokemon:{type: String},
      ataque:{type: String},
      checkboxpokemon:{type:Boolean},
      checked:{type:Boolean},
      prueba:{type:Object},
      batallasganadas:{type:String}
    };
  }
  static get styles(){
    return [listapokemonstyles,css``]
  }
  constructor(){
    super();
    this.nombre = '';
    this.vida='';
    this.urlpokemon='';
    this.ataque='';
    this.checkboxpokemon=false;
    this.checked=false;
    this.prueba=[];
    this.batallasganadas='0';

  }

  render() {
    return html`
      <div id="listapokemon">
        <div id="listapokemoncheckbox">
          <input id="checkbokpokemon" @click=${this.handleClick} type="checkbox" ?checked=${this.checked} ?disabled=${this.checkboxpokemon}>
       </div> 
        <div id="listapokemonimg">
          <img alt="pokemon" src="${this.urlpokemon}">
        </div>
        <div id="listapokemoncontenido">
          <ul>
            <li><a>Nombre: ${this.nombre}</a></li>
            <li><a>Poder: ${this.ataque}</a></li>
            <li><a>vida: ${this.vida}</a></li>
            <li><a>batallas ganadas: ${this.batallasganadas}</a></li>
          </ul>
        </div>
      </div>         
    `;   
  }
  handleClick(){
    const event=new CustomEvent('pokemon-seleccionado-batalla',{
        detail:{
            nombre:this.nombre,
            url:this.urlpokemon,
            poder:this.ataque,
            hp:this.vida,
        },
        bubble:true,
        composed:true,
    });
    this.dispatchEvent(event);
  }

}

customElements.define('listapokemon-front', ListaPokemonFront);
