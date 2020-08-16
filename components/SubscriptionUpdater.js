const updaterTemplate = document.createElement('template');
updaterTemplate.innerHTML = `
  <style>

  .subscription-plan__updater {
    margin: 5rem 0;
    padding: 0 calc(2rem + (40 - 20) * ((100vw - 300px) / (1920 - 300)));
    font-size: 1.3rem;
  }

  .subscription-plan__updater h3 {
    font-weight: bold;
  }

  </style>

  <ul class='subscription-plan__updater'>
    <h3>Avast Driver Updater</h3>
    <slot name='benefit-list'></slot> 
  </ul>
`;

class SubscriptionUpdater extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(updaterTemplate.content.cloneNode(true));
  }
}

window.customElements.define('subscription-updater', SubscriptionUpdater);
