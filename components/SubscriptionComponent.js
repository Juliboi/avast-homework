const bodyTemplate = document.createElement('template');
bodyTemplate.innerHTML = `
  <style>

  .subscription-plan__wrapper {
    box-sizing: border-box;
    height: 100%;
    padding: 5.5rem calc(2rem + (60 - 20) * ((100vw - 300px) / (1920 - 300))); //dynamic value according to viewport width
    padding-bottom: 0;
  }

  </style>

  <div class="subscription-plan__wrapper">
    <slot name='subscription-header'></slot>
    <slot name='subscription-body'></slot>
    <slot name='subscription-footer'>
    </slot>
  </div>
`;

class SubscriptionComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(bodyTemplate.content.cloneNode(true));

    this.state = {
      currentSubscription: 'https://url-2-years.com',
    };
  }

  connectedCallback() {
    this.updateChildren();

    this.addEventListener('add-subscription', this.handleSubscription);

    this.handleSubscription = this.handleSubscription.bind(this);
  }

  handleSubscription() {
    this.state.currentSubscription = event.detail.currentSubscription;

    this.updateChildren();
  }

  updateChildren() {
    this.querySelector(
      '.submit-button'
    ).dataset.currentSubscription = this.state.currentSubscription;

    console.log(this.querySelector('subscription-header'));
    console.log(this.querySelector('benefit-list'));
  }
}

export default SubscriptionComponent;
