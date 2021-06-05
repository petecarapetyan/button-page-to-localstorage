import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';


declare global {
  interface HTMLElementTagNameMap {
    'button-page': ButtonPageElement
  }
}

@customElement('button-page')
export class ButtonPageElement extends LitElement {

  private _onClick() {
    alert("clicked")
  }

  render() {
    return html`
    <button @click=${this._onClick}>+</button>
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