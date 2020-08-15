const planTemplate = document.createElement('template');
planTemplate.innerHTML = `
  <style>
    .selector-plan__option {
      width: 100%;
      list-style: none;
    }

    .selector-plan__button {
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

    .selector-plan__button:hover {
      background: #a09db51f;
    }

    // ::slotted(*:last-child) {
    //   display: none;
    // }

    .selector-plan__pricing {
      display: flex;
    }

    .selector-plan__monthly {
      color: var(--primary-green-dark);
    }

    .selector-plan__yearly {
      margin-left: 6rem;
    }




    
  </style>

  <li class='selector-plan__option'>
    <button class='selector-plan__button'> 
      <div>
        <span> 
        </span>
        <p class='selector-plan__years'><slot name='years' /></p>
      </div>

      <div class='selector-plan__pricing'>
        <p class='selector-plan__monthly'><slot name='monthly' /></p>
        <p class='selector-plan__yearly'><slot name='yearly' /></p>
      </div>
    </button>
  </li>
`;

class PlanListItem extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(planTemplate.content.cloneNode(true));
    // console.log(this);
  }
}

window.customElements.define('plan-list-item', PlanListItem);
