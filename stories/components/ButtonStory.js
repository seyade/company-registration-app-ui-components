import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Buttons', module)
  .add(
    'Default',
    () => `
  <div class="ui-button-group">
    <button class="ui-button ui-button--default">Default</button>
  </div>
  `
  )
  .add(
    'Default Ouline',
    () => `
  <div class="ui-button-group" style="background: #002f6c;">
    <button class="ui-button ui-button--default ui-button--default-outline">Default</button>
  </div>
  `
  )
  .add(
    'Primary',
    () => `
  <div class="ui-button-group">
    <button class="ui-button ui-button--primary">Primary</button>
  </div>
  `
  )
  .add(
    'Primary Outline',
    () => `
  <div class="ui-button-group" style="background: #002f6c;">
    <button class="ui-button ui-button--primary ui-button--primary-outline">Primary</button>
  </div>
  `
  )
  .add(
    'Destructive',
    () => `
  <div class="ui-button-group">
    <button class="ui-button ui-button--destructive">Destructive</button>
  </div>
  `
  )
  .add(
    'Disabled',
    () => `
  <div class="ui-button-group">
    <button class="ui-button ui-button--disabled" disabled>Disabled</button>
  </div>
  `
  )
  .add(
    'Upload',
    () => `
  <div class="ui-button-group">
    <button class="ui-button ui-button--upload">
      <img
        src="/assets/svg/plus.svg"
        alt=""
      />
      <span>Upload</span>
    </button>
  </div>
  `
  )
  .add(
    'Upload disabled',
    () => `
  <div class="ui-button-group">
    <button class="ui-button ui-button--upload-disabled" disabled>
      <img
        src="/assets/svg/plus.svg"
        alt=""
      />
      <span>Upload</span>
    </button>
  </div>
  `
  )
  .add(
    'Not selected',
    () => `
  <div class="ui-button-group">
    <button class="ui-button ui-button--not-selected">
      <img
        src="/assets/svg/plus-blue.svg"
        alt=""
      />
      <span>Follow</span>
    </button>
  </div>
  `
  )
  .add(
    'Selected',
    () => `
  <div class="ui-button-group">
    <button class="ui-button ui-button--selected">
      <img
        src="/assets/svg/tick-blue.svg"
        alt=""
      />
      <span>Following</span>
    </button>
  </div>
  `
  )
  .add(
    'Back button (link)',
    () => `
  <div class="ui-button-group">
    <button class="ui-button ui-button--back-link">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#back"></use>
      </svg>
      <span class="slds-assistive-text">Back to your pathway</span>
      <span>Back to your pathway</span>
    </button>
  </div>
  `
  )
  .add(
    'Back button inverse (link)',
    () => `
  <div class="ui-button-group" style="background-color: #002f6c;">
    <button class="ui-button ui-button--back-link ui-button--back-link--inverse">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#back"></use>
      </svg>
      <span class="slds-assistive-text">Back to your pathway</span>
      <span>Back to your pathway</span>
    </button>
  </div>
  `
  );
