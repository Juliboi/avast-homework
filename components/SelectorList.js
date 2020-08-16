import { __DATA__ } from '../constants/index.js';

const { planSelector } = __DATA__;

const selectorItemTemplate = document.createElement('template');
selectorItemTemplate.innerHTML = `
  <style>

    .selector-list {
      padding-left: 0;
    }


  </style>

  <ul class='selector-list'>
  ${planSelector
    .map((data) => {
      const {
        monthlyPrice,
        yearlyPrice,
        url,
        isRecommended,
        yearsCount,
      } = data;
      const yearsCounter = `${yearsCount > 1 ? 'years' : 'year'}`;

      return `
        <selector-list-item url=${url} isRecommended=${isRecommended}>
          <div slot='years'>${yearsCount}-${yearsCounter} subscription</div>
          <div slot='monthly'>${monthlyPrice} / month</div>
          <div slot='yearly'>Billed as ${yearlyPrice} / ${yearsCount} ${yearsCounter}</div>
        </selector-list-item>`;
    })
    .join('')}

  </ul>
`;

class SelectorList extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(selectorItemTemplate.content.cloneNode(true));

    this.checkedRadio = [];
  }
}

window.customElements.define('selector-list', SelectorList);
