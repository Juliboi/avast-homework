const badgeTemplate = document.createElement('template');
badgeTemplate.innerHTML = `
  <style>

    .recommended-badge {
      text-transform: uppercase;      
      font-size: 1.1rem;
      padding: 0.7rem 1.6rem;
      margin-left: 3rem;
      background-color: var(--primary-blue);
      border-radius: 1rem;
      font-weight: 500;
      letter-spacing: 2px;
    }


  </style>

  <div class='recommended-badge'>
    Recommended
  </div>
`;

class RecommendedBadge extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.appendChild(badgeTemplate.content.cloneNode(true));
  }
}

window.customElements.define('recommended-badge', RecommendedBadge);
