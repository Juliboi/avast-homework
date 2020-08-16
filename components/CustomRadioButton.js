const customRadioTemplate = document.createElement('template');
customRadioTemplate.innerHTML = `
  <style>

    .selector-list__radio {
      display: none;
    }

    .selector-list__radio-cont {
      display: flex;
    }

    .selector-list__pointer {
      position:relative;
    }
    
    .selector-list__radio + .selector-list__pointer {
      content: '';
      display: inline-block;
      border: 1px solid var(--secondary-text);
      height: 14px;
      width: 14px;
      border-radius: 50%;
      margin-right: 1.5rem;
    }
    .selector-list__radio:checked + .selector-list__pointer::after {
      content: '';
      position: absolute;
      border-width: 1px;
      background-color: var(--primary-green);
      top: 3px;
      left: 3px;
      right: 0;
      bottom: 0;
      height: 8px;
      width: 8px;
      border-radius: 50%;
    }

  </style>

  <div class='selector-list__radio-cont' slot='radio-button'>
      <input id='radio' class='selector-list__radio' type='radio'
     slot='radio-button' name='subscription'/>
      <label class='selector-list__pointer' slot='pointer' for='radio'></label>
  </div>
`;

class CustomRadioButton extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(customRadioTemplate.content.cloneNode(true));
  }
}

window.customElements.define('custom-radio-button', CustomRadioButton);
