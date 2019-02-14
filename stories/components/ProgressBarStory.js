import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Progress Bars', module).add(
  'Base with descriptions',
  () => `
  <div class="ui-progress-bar">
    <div
      class="slds-grid slds-grid_align-spread slds-p-bottom_large"
      id="progress-bar-label-id-1"
    >
      <strong>Your pathway</strong>
      <span aria-hidden="true"><strong>25% Complete</strong></span>
    </div>
    <div
      class="slds-progress-bar slds-progress-bar_small"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow="25"
      aria-labelledby="progress-bar-label-id-1"
      role="progressbar"
    >
      <span class="slds-progress-bar__value" style="width: 25%;">
        <span class="slds-assistive-text">Progress: 25%</span>
      </span>
    </div>
  </div>
  `
);
