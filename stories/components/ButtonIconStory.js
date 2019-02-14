import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Button Icons', module)
  .add(
    'Base',
    () => `
    <button 
      class="ui-button-icon slds-button slds-button_icon" 
      title="Settings"
    >
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#settings"></use>
      </svg>
      <span class="slds-assistive-text">Settings</span>
    </button>
    `
  )
  .add(
    'Disabled',
    () => `
    <button class="ui-button-icon slds-button slds-button_icon" disabled>
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#settings"></use>
      </svg>
      <span class="slds-assistive-text">Settings</span>
    </button>
    `
  )
  .add(
    'Stateful',
    () => `
    <button 
      class="ui-button-icon slds-button slds-button_icon" 
      aria-pressed="false" 
      title="Like"
    >
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#settings"></use>
      </svg>
      <span class="slds-assistive-text">Like</span>
    </button>
    `
  )
  .add(
    'Stateful selected',
    () => `
    <button 
      class="ui-button-icon slds-button slds-button_icon slds-is-selected slds-button_icon-border-filled" 
      aria-pressed="true" 
      title="Like"
    >
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#settings"></use>
      </svg>
      <span class="slds-assistive-text">Like</span>
    </button>
    `
  );
