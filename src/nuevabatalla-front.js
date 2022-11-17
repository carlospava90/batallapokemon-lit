import { LitElement, html } from 'lit-element';

class NuevaBatallaFront  extends LitElement {
  render() {
    return html`
      <p>Nueva batalla pokemon </p>
    `;
  }
}

customElements.define('nuevabatalla-front', NuevaBatallaFront);
