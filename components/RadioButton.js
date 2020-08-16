const radioButtonTemplate = document.createElement('template');
radioButtonTemplate.innerHTML = `
  <style>
  
    .selector-list__radio {
      display: flex;
      align-items: center;
      width:17px;
      height:17px;
      background: var(--ternary-blue);
      border-radius: 50%;
      border: 1px solid var(--secondary-text);
      margin-right: 1.5rem;
    }

  </style>

    <span class='selector-list__radio' slot='radio-button'>
      <span></span>
    </span>
       
`;

class RadioButton extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(radioButtonTemplate.content.cloneNode(true));
  }
}

window.customElements.define('radio-button', RadioButton);
