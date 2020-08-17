import BenefitList from './BenefitList.js';
import BenefitListItem from './BenefitListItem.js';
import SubscriptionUpdater from './SubscriptionUpdater.js';
import SubscriptionComponent from './SubscriptionComponent.js';
import SubscriptionHeader from './SubscriptionHeader.js';
import SubscriptionBody from './SubscriptionBody.js';
import SubscriptionFooter from './SubscriptionFooter.js';
import SelectorList from './SelectorList.js';
import SelectorListItem from './SelectorListItem.js';
import RecommendedBadge from './RecommendedBadge.js';
import RadioButton from './RadioButton.js';
import SubmitButton from './SubmitButton.js';

customElements.define('benefit-list', BenefitList);
customElements.define('benefit-list-item', BenefitListItem);
customElements.define('subscription-updater', SubscriptionUpdater);
customElements.define('subscription-component', SubscriptionComponent);
customElements.define('subscription-header', SubscriptionHeader);
customElements.define('subscription-body', SubscriptionBody);
customElements.define('subscription-footer', SubscriptionFooter);
customElements.define('selector-list', SelectorList);
customElements.define('selector-list-item', SelectorListItem);
customElements.define('recommended-badge', RecommendedBadge);
customElements.define('radio-button', RadioButton, {
  extends: 'input',
});
customElements.define('submit-button', SubmitButton, {
  extends: 'button',
});
