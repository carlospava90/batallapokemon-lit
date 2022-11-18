import { LitElement,css, html } from 'lit-element';
import { batallastyles } from './styles/batallastyle';

class BatallaFront  extends LitElement {
  static get styles(){
    return [ batallastyles , css``]
  }
  static get properties() {
    return {
      nombre1: { type: String },
      nombre2: { type: String },
      urlpokemon1:{type: String},
      urlpokemon2:{type: String},
    };
  }
  constructor(){
    super();
    this.nombre1= '';
    this.nombre2 = '';
    this.urlpokemon1='./src/img/buscarpokemon.png';
    this.urlpokemon2='./src/img/buscarpokemon.png';
  }
  render() {
    console.log(this.nombre1)
    return html`
      <div id="container-pokemones-seleccionados">
        <div id="contenido-pokemones">
            <div id="seleccion-pokemon-uno" class="">
                <img id="img-seleccion-batalla-pokemon1" class="img-seleccion-batalla"  src="${this.urlpokemon1}" alt="pokemon 1">
                <p id="p-seleccion-pokemon1">${this.nombre1} </p>
            </div>

            <div id="seleccion-pokemon-dos" class=" ">
                <img id="img-seleccion-batalla-pokemon2" class="img-seleccion-batalla" src="${this.urlpokemon2}" alt="pokemon 2">
                <p id="p-seleccion-pokemon2">${this.nombre2} ${this.urlpokemon1} </p>
            </div>
        </div>          
            <!-- <div id="container-boton-batalla" class=" ">   
              <button id="boton-batalla-empezar" class="botones-pantalla-derecha" onclick="comienzoBatallaPokemones()" >Batalla</button>
            </div> -->
      </div>
    `;
  }
}

customElements.define('batalla-front', BatallaFront);
