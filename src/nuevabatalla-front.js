import { LitElement,css, html } from 'lit';
import { nuevabatallastyles } from './styles/nuevabatallastyle';

class NuevaBatallaFront  extends LitElement {
  static get styles(){
    return [nuevabatallastyles,css``]
  }
  static get properties(){
    return{
    buttonnuevabatalladisabled: { type: Boolean },
    pokemonganadorurl:{type:String},
    pokemonganadornombre:{type:String},
  };
  }
  constructor(){
    super();
    this.buttonnuevabatalladisabled=true;
    this.pokemonganadorurl='./src/img/buscarpokemon.jpg';
    this.pokemonganadornombre='';

  }
  render() {
    return html`
      <div id="contenido-seleccion">
        <div id="container-batalla-ganador" class="">
          <div id="container-titulo">
            <h3>GANADOR</h3>
          </div>
          <div id="container-ganador-img-p"> 
                <div id="container-img-ganador">
                  <img id="img-ganador" src="${this.pokemonganadorurl}" alt="pokemon ganador">
                </div>
                <div id="container-p-ganador" class="">
                  <p id="p-ganador">${this.pokemonganadornombre}ganador</p>
                </div>
          </div>
        </div>
                    
        <div id="container-boton-batalla-nueva" class=" ">
          <button id="boton-batalla-nueva" @click=${this.nuevaBatallaPokemonClick} class=" botones-pantalla-derecha" type="button"  ?disabled=${this.buttonnuevabatalladisabled}>Nueva Batalla</button>
        </div>
      </div>
    `;
    
  }
  nuevaBatallaPokemonClick(){
 
    const event=new CustomEvent('nueva-batalla-pokemon',{
        detail:{
            ganador:2,
        },
        bubble:true,
        composed:true
    });
    this.dispatchEvent(event);
  }
}

customElements.define('nuevabatalla-front', NuevaBatallaFront);
