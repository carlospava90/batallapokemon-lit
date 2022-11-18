import { LitElement,css, html } from 'lit-element';
import { batallastyles } from './styles/batallastyle';

class BatallaFront  extends LitElement {
  static get styles(){
    return [ batallastyles , css``]
  }
  
  render() {
    return html`
      <div>
            <div id="seleccion-pokemon-uno" class="">
                <img id="img-seleccion-batalla-pokemon1" class="img-seleccion-batalla" src="./src/img/buscarpokemon.png" alt="pokemon 1">
                <p id="p-seleccion-pokemon1"> </p>
            </div>

            <div id="seleccion-pokemon-dos" class=" ">
                <img id="img-seleccion-batalla-pokemon2" class="img-seleccion-batalla" src="./src/img/buscarpokemon.png" alt="pokemon 2">
                <p id="p-seleccion-pokemon2"> </p>
            </div>
                    
            <div id="container-boton-batalla" class=" ">   
              <button id="boton-batalla-empezar" class="botones-pantalla-derecha" onclick="comienzoBatallaPokemones()" >Batalla</button>
            </div>
      </div>
    `;
  }
}

customElements.define('batalla-front', BatallaFront);
