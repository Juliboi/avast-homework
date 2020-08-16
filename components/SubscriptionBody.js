const bodyTemplate = document.createElement('template');
bodyTemplate.innerHTML = `
  <style>

  .subscription-plan__body {
    padding-left: 0;
  }

  </style>

  <ul class='subscription-plan__body'>
    <slot name='selector-list'></slot>
  </ul>
`;

export class SubscriptionBody extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(bodyTemplate.content.cloneNode(true));
  }
}
