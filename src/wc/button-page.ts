import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';


declare global {
  interface HTMLElementTagNameMap {
    'button-page': ButtonPageElement
  }
}

@customElement('button-page')
export class ButtonPageElement extends LitElement {


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