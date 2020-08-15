import { __DATA__ } from '../constants/index.js';
// import { PlanListItem } from './PlanListItem';

const { planSelector } = __DATA__;

const template = document.createElement('template');
template.innerHTML = `
  <style>

    .selector-plan {
      padding-left: 0;
    }


  </style>

  <ul class='selector-plan'>

  </ul>
`;

class SelectorList extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(template.content.cloneNode(true));
    console.log(this);
    // this.renderPlanItems();
  }

  renderPlanItems = () => {
    const list = this.shadow.querySelector('.selector-plan');

    const plans = planSelector
      .map((data) => {
        const { monthlyPrice, yearlyPrice, url } = data;
        console.log(list);
        return `
        <plan-list-item>
          <div slot='years'>1</div>
          <div slot='monthly'>${monthlyPrice} / month</div>
          <div slot='yearly'>${yearlyPrice}</div>
        </plan-list-item>`;
      })
      .join('');

    list.innerHTML = plans;
  };

  connectedCallback() {
    this.renderPlanItems();
  }
}

window.customElements.define('selector-list', SelectorList);
