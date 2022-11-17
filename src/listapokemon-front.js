import { LitElement, html } from 'lit-element';
import './dm-batalla';
class ListaPokemonFront  extends LitElement {
  
  constructor(){
    super();
    this.addEventListener('ApiData',(e)=>{const datos=(e);
    console.log(datos)})
  }
  render() {
    return html`
    <dm-batalla url="https://pokeapi.co/api/v2/pokemon/?limit=4">
        </dm-batalla>
      <p>Listapokemon </p>
      <div>ass
        <p>foto</p>
        <p>nombre</p>
        <p>hp</p>
        <p>att</p>
      </div>
      
    `;
  }
}

customElements.define('listapokemon-front', ListaPokemonFront);
