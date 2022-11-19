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

  }

  render() {
    console.log(this.checkboxpokemon)
    return html`
     
      <div id="listapokemon">
        <div>
        <input @click=${this.handleClick} type="checkbox" ?checked=${this.checked} ?disabled=${this.checkboxpokemon}>
        <img alt="pokemon" src="${this.urlpokemon}">
        </div>
        <div>
          <p>Nombre: ${this.nombre}</p>
          <p>Poder: ${this.ataque}</p>
          <p>vida: ${this.vida}</p>
          <p>batallas ganadas</p>
        </div>

      </div>
      <!-- <div class=" container-nav" id="container-nav">
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
       -->
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
        composed:true
    });
    this.dispatchEvent(event);
  }
}

customElements.define('listapokemon-front', ListaPokemonFront);
