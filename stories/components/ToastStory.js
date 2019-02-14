import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Toasts', module)
  .add(
    'Base',
    () => `
    <div class="ui-toast">
      <div class="slds-notify_container slds-is-relative">
        <div class="slds-notify slds-notify_toast slds-theme_success" role="status">
          <span class="slds-assistive-text">success</span>
          <div class="slds-notify__content">
            <h2 class="slds-text-heading_small">
              "Holiday Campaign" was updated.
            </h2>
          </div>
          <div class="slds-notify__close">
            <button
              class="slds-button slds-button_icon slds-button_icon-inverse"
              title="Close"
            >
              <svg
                class="ui-toast__button slds-button__icon slds-button__icon_large"
                aria-hidden="true"
              >
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"
                />
              </svg>
              <span class="slds-assistive-text">Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Base with extra text',
    () => `
    <div class="ui-toast">
      <div class="slds-notify_container slds-is-relative">
        <div class="slds-notify slds-notify_toast slds-theme_success" role="status">
          <span class="slds-assistive-text">success</span>
          <div class="slds-notify__content">
            <h2 class="slds-text-heading_small">
              "Holiday Campaign" was updated.
            </h2>

            <h3>258 contacts were already added and they remained as is.</h3>
          </div>
          <div class="slds-notify__close">
            <button
              class="ui-toast__button slds-button slds-button_icon slds-button_icon-inverse"
              title="Close"
            >
              <svg
                class="slds-button__icon slds-button__icon_large"
                aria-hidden="true"
              >
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"
                />
              </svg>
              <span class="slds-assistive-text">Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Success',
    () => `
    <div class="ui-toast ui-toast--success">
      <div class="slds-notify_container slds-is-relative">
        <div class="slds-notify slds-notify_toast slds-theme_success" role="status">
          <span class="slds-assistive-text">success</span>
          <div class="slds-notify__content">
            <h2 class="slds-text-heading_small">
              "Holiday Campaign" was updated.
            </h2>
          </div>
          <div class="slds-notify__close">
            <button
              class="ui-toast__button slds-button slds-button_icon slds-button_icon-inverse"
              title="Close"
            >
              <svg
                class="slds-button__icon slds-button__icon_large"
                aria-hidden="true"
              >
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"
                />
              </svg>
              <span class="slds-assistive-text">Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Warning',
    () => `
    <div class="ui-toast ui-toast--warning">
      <div class="slds-notify_container slds-is-relative">
        <div class="slds-notify slds-notify_toast slds-theme_success" role="status">
          <span class="slds-assistive-text">success</span>
          <div class="slds-notify__content">
            <h2 class="slds-text-heading_small">
              "Holiday Campaign" was updated.
            </h2>
          </div>
          <div class="slds-notify__close">
            <button
              class="ui-toast__button slds-button slds-button_icon slds-button_icon-inverse"
              title="Close"
            >
              <svg
                class="slds-button__icon slds-button__icon_large"
                aria-hidden="true"
              >
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"
                />
              </svg>
              <span class="slds-assistive-text">Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Error',
    () => `
    <div class="ui-toast ui-toast--error">
      <div class="slds-notify_container slds-is-relative">
        <div class="slds-notify slds-notify_toast slds-theme_success" role="status">
          <span class="slds-assistive-text">success</span>
          <div class="slds-notify__content">
            <h2 class="slds-text-heading_small">
              "Holiday Campaign" was updated.
            </h2>
          </div>
          <div class="slds-notify__close">
            <button
              class="ui-toast__button slds-button slds-button_icon slds-button_icon-inverse"
              title="Close"
            >
              <svg
                class="slds-button__icon slds-button__icon_large"
                aria-hidden="true"
              >
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"
                />
              </svg>
              <span class="slds-assistive-text">Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    `
  );
