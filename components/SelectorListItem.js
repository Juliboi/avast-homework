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
      border-bottom: 1px solid var(--secondary-text-transparent);
      font-size: 1.5rem;
      cursor: pointer;
      transition: background 350ms ease;
    }

    .selector-list__button:hover {
      background: #a09db51f;
    }

    .selector-list__subscription {
      display: flex;
      align-items: center;
    }

    .selector-list__pricing {
      display: flex;
      justify-content: space-between;
      width: 350px;
    }

    .selector-list__monthly {
      color: var(--primary-green-dark);
    }

    .selector-list__yearly {
      margin-left: 6rem;
    }

  </style>

  <li class='selector-list__item'>
    <button  class='selector-list__button'> 
      <div class='selector-list__subscription'>
        <slot name='radio-button'></slot>
        <p class='selector-list__years'><slot name='years' /></p>
        <slot name='recommended'></slot>
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

    this.state = {};
  }

  connectedCallback() {
    this.shadow.addEventListener('click', (e) => this.handleCheckbox(e));

    this.addEventListener('click', this.handleSubscription);

    this.handleSubscription = this.handleSubscription.bind(this);
  }

  get url() {
    return this.getAttribute('url');
  }

  handleSubscription() {
    this.dispatchEvent(
      new CustomEvent('add-subscription', {
        bubbles: true,
        composed: true,
        detail: {
          currentSubscription: this.url,
        },
      })
    );
  }

  handleCheckbox(e) {
    this.querySelector('.selector-list__radio').checked = true;
  }
}

export default SelectorListItem;
