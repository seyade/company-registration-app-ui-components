import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Tooltip', module).add(
  'Base',
  () => `
  <div class="ui-tooltip">
    <div class="slds-form-element">
      <div class="slds-form-element__icon slds-align-middle">
        <button
          class="slds-button slds-button_icon slds-button slds-button_icon"
          aria-describedby="help"
          title="Help"
        >
          <svg class="slds-button__icon" aria-hidden="true">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"
            />
          </svg>
          <span class="slds-assistive-text">Help</span>
        </button>
      </div>
    </div>
    <div
      class="slds-popover slds-popover_tooltip slds-nubbin_bottom-left"
      role="tooltip"
      id="help"
      style="position: absolute; top: 0px; left: 15px;"
    >
      <div class="slds-popover__body">
        Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
        deserunt aute id consequat veniam incididunt duis in sint irure nisi.
      </div>
    </div>
  </div>
  `
);