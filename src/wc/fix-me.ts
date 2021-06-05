import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';


declare global {
  interface HTMLElementTagNameMap {
    'fix-me': FixMeElement
  }
}

@customElement('fix-me')
export class FixMeElement extends LitElement {


  render() {
    return html`
    <p> nu component</p>
    `
  }

  static get styles() {
    return css`
      .something {
        display: block;
      }
    `
  }
}