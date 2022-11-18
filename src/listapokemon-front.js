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
    this.addEventListener('ApiData',({detail})=>{console.log(detail)});
  }

  render() {
    return html`
     <h2>${this.nombre}</h2>
    <!-- <dm-batalla url="https://pokeapi.co/api/v2/pokemon/?limit=4">
        </dm-batalla> -->
      <h1>Listapokemon </h1>
      <div>
        <input type="checkbox">
        <img alt="pokemon" src="${this.urlpokemon}">
        <div>
          <p>Nombre: ${this.nombre}</p>
          <p>Poder: ${this.ataque}</p>
          <p>vida: ${this.vida}</p>
          <p>batallas ganadas</p>
        </div>
        <div class=" container-nav" id="container-nav">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-center">
                                <li id="anterior-pagina" class="page-item " >
                                    <a class="page-link" href="#">Previous</a>
                                </li>
                                <li id="home-pagina" class="page-item"><a class="page-link" href="#">Home</a></li>
                                <li id="siguiente-pagina" class="page-item">
                                    <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
      </div>
      
    `;
  }
}

customElements.define('listapokemon-front', ListaPokemonFront);
