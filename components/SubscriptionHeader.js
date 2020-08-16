const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
  <style>
    .subscription-plan__header {
      padding-left: 0;
      margin-top: 0;
    }

    .subscription-plan__title {
      margin-top: 0;
      font-size: 2.8rem;
      font-weight: 600;
      text-align: center;
    }
  </style>

  <ul class='subscription-plan__header'>
    <h1 class='subscription-plan__title'>Please choose the length of your plan</h1>
    <slot name='subscription-updater'></slot>
  </ul>
`;

class SubscriptionHeader extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(headerTemplate.content.cloneNode(true));
  }
}

window.customElements.define('subscription-header', SubscriptionHeader);
