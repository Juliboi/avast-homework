import { __DATA__ } from '../constants/index.js';

const { contentOfBenefits } = __DATA__;

const benefitTemplate = document.createElement('template');
benefitTemplate.innerHTML = `
  <style>
    .benefit-list {
      padding-left: 0;
      margin-top: 0rem;
    }

  </style>

  <ul class='benefit-list'>
    ${contentOfBenefits
      .map((data) => {
        const { text, checked } = data;

        return `
          <benefit-list-item checked=${checked}>
            <div slot="content">${text}</div>
          </benefit-list-item>`;
      })
      .join('')}
  </ul>
`;

class BenefitList extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(benefitTemplate.content.cloneNode(true));
  }
}

window.customElements.define('benefit-list', BenefitList);
