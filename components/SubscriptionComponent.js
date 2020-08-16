const bodyTemplate = document.createElement('template');
bodyTemplate.innerHTML = `
  <style>
    .subscription-plan {
    width: 1008px;
    height: 632px;
    background: salmon;
    background: rgb(6, 6, 51);
    background: -moz-linear-gradient(
      167deg,
      rgba(6, 6, 51, 1) 0%,
      rgba(31, 28, 92, 1) 43%,
      rgba(61, 61, 132, 1) 100%
    );
    background: -webkit-linear-gradient(
      167deg,
      rgba(6, 6, 51, 1) 0%,
      rgba(31, 28, 92, 1) 43%,
      rgba(61, 61, 132, 1) 100%
    );
    background: linear-gradient(
      167deg,
      rgba(6, 6, 51, 1) 0%,
      rgba(31, 28, 92, 1) 43%,
      rgba(61, 61, 132, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#060633",endColorstr="#3d3d84",GradientType=1);
  }

  .subscription-plan__wrapper {
    box-sizing: border-box;
    height: 100%;
    padding: 5.5rem calc(2rem + (60 - 20) * ((100vw - 300px) / (1920 - 300)));
    padding-bottom: 0;
  }

  </style>

    <form class="subscription-plan">
        <div class="subscription-plan__wrapper">
          <slot name='subscription-header'></slot>
          <slot name='subscription-body'></slot>
          <slot name='subscription-footer'></slot>
        </div>
    </form>
`;

class SubscriptionComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(bodyTemplate.content.cloneNode(true));
  }
}

window.customElements.define('subscription-component', SubscriptionComponent);
