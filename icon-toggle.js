import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';

class IconToggle extends PolymerElement {
  static get template() {
    return html `
      <style>
        :host {
          display: inline-block;
        }
        iron-icon {
          fill: var(--icon-toggle-color, rgba(0,0,0,0));
          stroke: var(--icon-toggle-outline-color, currentcolor);
        }
        :host([pressed]) iron-icon {
          fill: var(--icon-toggle-pressed-color, currentcolor);
        }
      </style>

      <!-- shadow DOM goes here -->
      <iron-icon icon="[[toggleIcon]]" pressed click></iron-icon>
      <span>[[click]]</span>
    `;
  }

  static get properties() {
    return {
      click: {
        value: 0,
        notify: true,
        reflectToAttribute: true
      },
      toggleIcon: {
        type: String
      },
      pressed: {
        type: Boolean,
        value: false,
        notify: true,
        reflectToAttribute: true
      },
    };
  }

  constructor() {
    super();
    this.addEventListener('click', this.toggle.bind(this));
    this.addEventListener('click', this.countClicks.bind(this));
  }

  toggle() {
    this.pressed = !this.pressed;
  }

  countClicks() {
    console.log(this.click);
    return this.click = this.click + 1;
  }
}

customElements.define('icon-toggle', IconToggle);
