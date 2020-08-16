// const template = document.createElement('template');

// template.innerHTML = `
//   <style>
//     .benefit__benefit {
//       padding: 1rem;
//     }

//     .benefit__check {
//       width: 10px;
//       height: 10px;
//       background-image: url('images/tick.svg') center no-repeat;
//       background-size: 100%;
//     }

//   </style>

//     <li class='benefit__benefit'>
//       <span class='benefit__check'></span>
//       ${this.content}
//     </li>
//   `;

// class BenefitListItem extends HTMLElement {
//   constructor() {
//     super();
//     this.shadow = this.attachShadow({ mode: 'open' });
//   }

//   get content() {
//     return this.getAttribute('content');
//   }

//   connectedCallback() {
//     this.render();
//   }

//   render() {
//     // this.shadow.innerHTML = this.renderComponent();
//     this.shadow.appendChild(template.content.cloneNode(true));
//   }
// }

// window.customElements.define('benefit-list-item', BenefitListItem);

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .benefit__item {
      padding-top: 0.5rem;
      display: flex;
      align-items: center;
      font-weight: 600;
      color: var(--secondary-text);
    }

    .benefit__check {

    }

  </style>

  <li class='benefit__item'>
    <span class='benefit__check'>
      <img src='images/tick.svg'/>
    </span>
    <slot name='content'/>
  </li>
`;

class BenefitListItem extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(template.content.cloneNode(true));
    this.isHidden;
  }
}

window.customElements.define('benefit-list-item', BenefitListItem);
