const submitTemplate = document.createElement('template');
submitTemplate.innerHTML = `
  <style>
   .submit-button {
     width: 15rem;
     height: 4.5rem;
     background: var(--primary-green);
     border-radius: 5rem;
     font-family: 'Montserrat';
     font-weight: bold;
     font-size: 1.7rem;
     color: #080836;
     border: none;
     box-shadow: 0px 3px 8px var(--ternary-blue);
     cursor: pointer;
     transition: background 350ms ease;
   }

   .submit-button:hover {
     background: var(--primary-green-dark)
   }
    
  </style>

    <button class='submit-button'> 
      <slot name='content'/>
    </button>

`;

class SubmitButton extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(submitTemplate.content.cloneNode(true));
    // console.log(this);
  }
}

window.customElements.define('submit-button', SubmitButton);
