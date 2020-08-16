const selectorListTemplate = document.createElement('template');
selectorListTemplate.innerHTML = `
  <style>
    .selector-list__item {
      width: 100%;
      list-style: none;
    }

    .selector-list__button {
      display: flex;
      width: 100%;
      height: 6rem;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem; 
      background: transparent;
      color: var(--primary-text);
      border: none;
      border-top: 1px solid var(--secondary-text-transparent);
      font-size: 1.5rem;
      font-family: 'Montserrat';
      cursor: pointer;
      transition: background 350ms ease;
    }

    .selector-list__button:hover {
      background: #a09db51f;
    }

    // ::slotted(*:last-child) {
    //   display: none;
    // }

    .selector-list__subscription {
      display: flex;
      align-items: center;
    }

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

    .selector-list__pricing {
      display: flex;
    }

    .selector-list__monthly {
      color: var(--primary-green-dark);
    }

    .selector-list__yearly {
      margin-left: 6rem;
    }
    
  </style>

  <li class='selector-list__item'>
    <button class='selector-list__button'> 
      <div class='selector-list__subscription'>
        <radio-button></radio-button>
        <p class='selector-list__years'><slot name='years' /></p>
      </div>

      <div class='selector-list__pricing'>
        <p class='selector-list__monthly'><slot name='monthly' /></p>
        <p class='selector-list__yearly'><slot name='yearly' /></p>
      </div>
    </button>
  </li>
`;

class SelectorListItem extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(selectorListTemplate.content.cloneNode(true));
    this.isRecommended === 'true' && console.log(123);
  }

  get isRecommended() {
    return this.getAttribute('isRecommended');
  }

  set recommendedBadge(yo) {
    console.log(123);
  }
}

window.customElements.define('selector-list-item', SelectorListItem);
