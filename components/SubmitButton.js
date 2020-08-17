class SubmitButton extends HTMLButtonElement {
  constructor() {
    super();
  }

  handleSubmit(e) {
    e.preventDefault();

    const url = this.dataset.currentSubscription;

    window.location.href = url;
  }

  connectedCallback() {
    this.addEventListener('click', (e) => this.handleSubmit(e));
  }
}

export default SubmitButton;
