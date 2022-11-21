import { LitElement,css, html } from 'lit-element';
import { batallastyles } from './styles/batallastyle';

class BatallaFront  extends LitElement {
  static get styles(){
    return [batallastyles, css``]
  }
  static get properties() {
    return {
      nombre1: { type: String },
      nombre2: { type: String },
      urlpokemon1:{ type: String},
      urlpokemon2:{type: String},
      buttonbatalladisabled:{type:Boolean}
    };
  }
  constructor(){
    super();
    this.buttonbatalladisabled=true;
    this.nombre1= '';
    this.nombre2 = '';
    this.urlpokemon1='./src/img/buscarpokemon.png';
    this.urlpokemon2='./src/img/buscarpokemon.png';
  }

  render() {
    return html`
      <div id="container-pokemones-seleccionados">
        <div id="contenido-pokemones">
            <div id="seleccion-pokemon-uno" class="">
              <div id="container-img-seleccion-batalla-pokemon1">
                <img id="img-seleccion-batalla-pokemon1" class="img-seleccion-batalla"  src="${this.urlpokemon1}" alt="pokemon 1">
              </div>
              <div  id="container-p-seleccion-pokemon1">
                <p id="p-seleccion-pokemon1">${this.nombre1} </p>
              </div>
            </div>
            <div id="seleccion-pokemon-dos" class=" ">
              <div id="container-img-seleccion-batalla-pokemon2">
                <img id="img-seleccion-batalla-pokemon2" class="img-seleccion-batalla" src="${this.urlpokemon2}" alt="pokemon 2">
              </div>  
              <div id="container-p-seleccion-pokemon2">
                <p id="p-seleccion-pokemon2">${this.nombre2} </p>
              </div>
            </div>
        </div>          
        <div id="container-boton-batalla" class=" ">   
              <button id="boton-batalla-empezar" @click=${this. batallaPokemonClick} class="botones-pantalla-derecha" ?disabled=${this.buttonbatalladisabled} >Batalla</button>
        </div>
      </div>
    `;
  }
  batallaPokemonClick(){
    const event=new CustomEvent('batalla-pokemon',{
        detail:{
            nombre:this.nombre,
            url:this.urlpokemon,
            poder:this.ataque,
            hp:this.vida,
        },
        bubble:true,
        composed:true
    });
    this.dispatchEvent(event);
  }
}

customElements.define('batalla-front', BatallaFront);
