const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <style>

  .subscription-plan__footer {
    padding-left: 0;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .subscription-plan__money-back {
    margin-top: 2rem;
    font-size: 1.3rem;
  }


  </style>

  <ul class='subscription-plan__footer'>
    <submit-button>
        <div slot='content'>Buy Now</div>
    </submit-button>
    <p class='subscription-plan__money-back'>30-day money-back guarantee</p>
  </ul>
`;

class SubscriptionFooter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(footerTemplate.content.cloneNode(true));
  }
}

window.customElements.define('subscription-footer', SubscriptionFooter);
