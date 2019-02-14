import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Spinners', module)
  .add(
    'Large',
    () => `
    <div class="ui-spinner">
      <div role="status" class="slds-spinner slds-spinner_large">
        <span class="slds-assistive-text">Loading</span>
        <div class="slds-spinner__dot-a"></div>
        <div class="slds-spinner__dot-b"></div>
      </div>
    </div>
    `
  )
  .add(
    'Medium',
    () => `
    <div class="ui-spinner">
      <div role="status" class="slds-spinner slds-spinner_medium">
        <span class="slds-assistive-text">Loading</span>
        <div class="slds-spinner__dot-a"></div>
        <div class="slds-spinner__dot-b"></div>
      </div>
    </div>
    `
  )
  .add(
    'Small',
    () => `
    <div class="ui-spinner">
      <div role="status" class="slds-spinner slds-spinner_small">
        <span class="slds-assistive-text">Loading</span>
        <div class="slds-spinner__dot-a"></div>
        <div class="slds-spinner__dot-b"></div>
      </div>
    </div>
    `
  )
  .add(
    'Inverse Large',
    () => `
    <div style="background-color: #0076cf">
      <div class="ui-spinner ui-spinner--inverse">
        <div role="status" class="slds-spinner slds-spinner_large">
          <span class="slds-assistive-text">Loading</span>
          <div class="slds-spinner__dot-a"></div>
          <div class="slds-spinner__dot-b"></div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Inverse Medium',
    () => `
    <div style="background-color: #0076cf">
      <div class="ui-spinner ui-spinner--inverse">
        <div role="status" class="slds-spinner slds-spinner_medium">
          <span class="slds-assistive-text">Loading</span>
          <div class="slds-spinner__dot-a"></div>
          <div class="slds-spinner__dot-b"></div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Inverse Small',
    () => `
    <div style="background-color: #0076cf">
      <div class="ui-spinner ui-spinner--inverse">
        <div role="status" class="slds-spinner slds-spinner_small">
          <span class="slds-assistive-text">Loading</span>
          <div class="slds-spinner__dot-a"></div>
          <div class="slds-spinner__dot-b"></div>
        </div>
      </div>
    </div>
    `
  );
