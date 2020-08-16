import { __DATA__ } from '../constants/index.js';

const { planSelector } = __DATA__;

const selectorItemTemplate = document.createElement('template');
selectorItemTemplate.innerHTML = `
  <style>

    .selector-list {
      padding-left: 0;
    }
    
    .selector-list__radio {
      margin-top: 0;
      margin-right: 1.5rem;
    }



    .selector-list__radio {
      display: none;
    }

    .selector-list__pointer {
      position:relative;
    }

    .selector-list__radio + .selector-list__pointer {
      content: '';
      display: inline-block;
      border: 1px solid var(--secondary-text);
      height: 14px;
      width: 14px;
      border-radius: 50%;
      margin: 2px 5px 0 0px
    }
    .selector-list__radio:checked + .selector-list__pointer::after {
      content: '';
      position: absolute;
      border-width: 1px;
      background-color: var(--primary-green);
      top: 3px;
      left: 3px;
      right: 0;
      bottom: 0;
      height: 8px;
      width: 8px;
      border-radius: 50%;
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
          <selector-list-item url=${url}>
            <div class='selector-list__radio-cont' slot='radio-button'>
              <input id='radio' class='selector-list__radio' type='radio' ${
                yearsCount === 2 ? 'checked' : ''
              } slot='radio-button' name='subscription'/>
              <label class='selector-list__pointer' slot='pointer' for='radio'></label>
            </div>
            <div slot='years'>${yearsCount}-${yearsCounter} subscription</div>
            ${
              isRecommended
                ? "<recommended-badge slot='recommended'></recommended-badge>"
                : ''
            }
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
  }
}

window.customElements.define('selector-list', SelectorList);
