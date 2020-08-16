const template = document.createElement('template');
template.innerHTML = `
  <style>
    .benefit__item {
      padding-top: 0.5rem;
      display: flex;
      align-items: center;
      font-weight: 600;
      color: var(--secondary-text);
    }

    .benefit__check {

    }

  </style>

  <li class='benefit__item'>
    <span class='benefit__check'>
      <img src='images/tick.svg'/>
    </span>
    <slot name='content'/>
  </li>
`;

class BenefitListItem extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('benefit-list-item', BenefitListItem);
