import { LitElement,css, html } from 'lit';
import { nuevabatallastyles } from './styles/nuevabatallastyle';

class NuevaBatallaFront  extends LitElement {
  static get styles(){
    return [nuevabatallastyles,css``]
  }
  render() {
    return html`
      <div>
        <div id="container-batalla-ganador" class="">
            <h3>GANADOR</h3>
              <div id="container-ganador-img-p"> 
                <div class="">
                  <img id="img-ganador" src="./src/img/buscarpokemon.png" alt="pokemon ganador">
                </div>

                <div id="container-p-ganador" class="">
                  <p id="p-ganador"></p>
                </div>
              </div>
        </div>
                    
        <div id="container-boton-batalla-nueva" class=" ">
          <button id="boton-batalla-nueva" class=" botones-pantalla-derecha" type="button" onclick="botonBatallaNueva()" src="img/buscarpokemon.png" disabled>Nueva Batalla</button>
        </div>
      </div>
    `;
  }
}

customElements.define('nuevabatalla-front', NuevaBatallaFront);
