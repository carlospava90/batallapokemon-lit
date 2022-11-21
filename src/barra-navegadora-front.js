import { LitElement,css, html } from 'lit';
import { barranavegadorastyle } from './styles/barranavegadorastyle';
import './dm-batalla';
class BarraNavegadoraFront  extends LitElement {
  static get properties() {
    return {

    };
  }
  static get styles(){
    return [barranavegadorastyle,css``]
  }
  constructor(){
    super();

  }

  render() {
    return html`
      <div id="container-nav">
        <nav id="nav-listapokemon" >
          <ul id="ul-nav" class="pagination justify-content-center">
              <li id="anterior-pagina" class="page-item " >
                <a class="page-link" href="#" @click=${this.previousClick}>Previous</a>
              </li>
              <li id="home-pagina" class="page-item">
                <a class="page-link" href="#" @click=${this.homeClick}>Home</a>
              </li>
              <li id="siguiente-pagina" class="page-item">
                <a class="page-link" href="#" @click=${this.nextClick}>Next</a>
              </li>
          </ul>
        </nav>
      </div>
      
    `;  
  }
  nextClick(){
    const event=new CustomEvent('pagina-siguiente',{
        bubble:true,
        composed:true,
    });
    this.dispatchEvent(event);
  }
  previousClick(){
    const event=new CustomEvent('pagina-anterior',{
        bubble:true,
        composed:true,
    });
    this.dispatchEvent(event);
  }
  homeClick(){
    const event=new CustomEvent('pagina-home',{
        bubble:true,
        composed:true,
    });
    this.dispatchEvent(event);
  }
}

customElements.define('barra-navegadora-front', BarraNavegadoraFront);

