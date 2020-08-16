class RadioButton extends HTMLInputElement {
  constructor() {
    super();
  }
}

window.customElements.define('radio-button', RadioButton, {
  extends: 'input',
});
