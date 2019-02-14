import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Popovers', module)
  .add(
    'Base',
    () => `
    <div class="ui-popover">
      <section
        class="slds-popover slds-nubbin_left"
        role="dialog"
        aria-label="Dialog Title"
        aria-describedby="dialog-body-id-2"
      >
        <button
          class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon"
          title="Close dialog"
        >
          <svg class="slds-button__icon" aria-hidden="true">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"
            />
          </svg>
          <span class="slds-assistive-text">Close dialog</span>
        </button>
        <div class="slds-popover__body" id="dialog-body-id-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
    </div>
    `
  )
  .add(
    'Error',
    () => `
    <div class="ui-popover">
      <section
        class="slds-popover slds-popover_error slds-nubbin_bottom-left"
        role="dialog"
        aria-labelledby="dialog-heading-id-1"
        aria-describedby="dialog-body-id-5"
      >
        <button
          class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse"
          title="Close dialog"
        >
          <svg class="slds-button__icon" aria-hidden="true">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"
            />
          </svg>
          <span class="slds-assistive-text">Close dialog</span>
        </button>
        <header class="slds-popover__header">
          <div class="slds-media slds-media_center slds-has-flexi-truncate ">
            <div class="slds-media__figure">
              <span class="slds-icon_container slds-icon-utility-error">
                <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"
                  />
                </svg>
              </span>
            </div>
            <div class="slds-media__body">
              <h2
                class="slds-truncate slds-text-heading_medium"
                id="dialog-heading-id-1"
              >
                Manage your details
              </h2>
            </div>
          </div>
        </header>
        <div class="slds-popover__body" id="dialog-body-id-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>
      </section>
    </div>
    `
  )
  .add(
    'Warning',
    () => `
    <div class="ui-popover">
      <section
        class="slds-popover slds-popover_warning slds-nubbin_bottom-left"
        role="dialog"
        aria-labelledby="dialog-heading-id-2"
        aria-describedby="dialog-body-id-5"
      >
        <button
          class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon"
          title="Close dialog"
        >
          <svg class="slds-button__icon" aria-hidden="true">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"
            />
          </svg>
          <span class="slds-assistive-text">Close dialog</span>
        </button>
        <header class="slds-popover__header">
          <div class="slds-media slds-media_center slds-has-flexi-truncate ">
            <div class="slds-media__figure">
              <span class="slds-icon_container slds-icon-utility-warning">
                <svg
                  class="slds-icon slds-icon_x-small slds-icon-text-default"
                  aria-hidden="true"
                >
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#warning"
                  />
                </svg>
              </span>
            </div>
            <div class="slds-media__body">
              <h2
                class="slds-truncate slds-text-heading_medium"
                id="dialog-heading-id-2"
                title="Review warning"
              >
                Manage your pathways
              </h2>
            </div>
          </div>
        </header>
        <div
          class="slds-popover__body slds-popover_warning__body"
          id="dialog-body-id-5"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            sed do eiusmod tempor incididunt ut labore
          </p>
        </div>
      </section>
    </div>
    `
  )
  .add(
    'Walkthrough',
    () => `
    <div class="ui-popover">
      <section
        class="slds-popover slds-popover_walkthrough slds-nubbin_left"
        role="dialog"
        aria-labelledby="dialog-heading-id-1"
        aria-describedby="dialog-body-id-5"
      >
        <button
          class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse"
          title="Close dialog"
        >
          <svg class="slds-button__icon" aria-hidden="true">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"
            />
          </svg>
          <span class="slds-assistive-text">Close dialog</span>
        </button>
        <header class="slds-popover__header slds-p-vertical_medium">
          <h2 id="dialog-heading-id-1" class="slds-text-heading_medium">
            Manage your channels
          </h2>
        </header>
        <div class="slds-popover__body" id="dialog-body-id-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <footer class="slds-popover__footer">
          <div class="slds-grid slds-grid_vertical-align-center">
            <span class="slds-text-title">Step 2 of 4</span>
            <button class="ui-button ui-button--primary ui-button--primary-outline slds-button slds-button_brand slds-col_bump-left">
              Next
            </button>
          </div>
        </footer>
      </section>
    </div>
    `
  )
  .add(
    'Walkthrough inline form',
    () => `
    <div class="ui-popover">
      <section
        class="slds-popover slds-popover_walkthrough slds-nubbin_left"
        role="dialog"
        aria-labelledby="dialog-heading-id-1"
        aria-describedby="dialog-body-id-23"
      >
        <button
          class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse"
          title="Close dialog"
        >
          <svg class="slds-button__icon" aria-hidden="true">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"
            />
          </svg>
          <span class="slds-assistive-text">Close dialog</span>
        </button>
        <header class="slds-popover__header slds-p-vertical_medium">
          <h2 id="dialog-heading-id-1" class="slds-text-heading_medium">
            Manage your channels
          </h2>
        </header>
        <div class="slds-popover__body" id="dialog-body-id-23">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div class="ui-form-element slds-form-element slds-p-top_small">
            <label
              class="ui-form-element__label slds-form-element__label slds-assistive-text"
              for="email-text-input-01"
            >
              Email Address
            </label>
            <div class="ui-form-element__control slds-form-element__control">
              <input
                id="email-text-input-01"
                class="ui-form-element__control-input slds-input"
                type="text"
                placeholder="Email Address"
              />
            </div>
          </div>
        </div>
        <footer class="slds-popover__footer">
          <div class="slds-grid slds-grid_vertical-align-center">
            <span class="slds-text-title">Step 2 of 4</span>
            <button class="ui-button ui-button--default slds-button slds-button_inverse slds-col_bump-left">
              Previous
            </button>
            <button
              class="ui-button ui-button--primary ui-button--primary-outline slds-button slds-button_brand slds-col_bump-left"
            >
              Next
            </button>
          </div>
        </footer>
      </section>
    </div>
    `
  )
  .add(
    'Feature',
    () => `
    <div class="ui-popover">
      <section
        class="slds-popover slds-popover_walkthrough slds-popover_feature slds-nubbin_left"
        role="dialog"
        aria-label="Dialog Title"
        aria-describedby="dialog-body-id-5"
      >
        <button
          class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse"
          title="Close dialog"
        >
          <svg class="slds-button__icon" aria-hidden="true">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"
            />
          </svg>
          <span class="slds-assistive-text">Close dialog</span>
        </button>
        <div class="slds-popover__body" id="dialog-body-id-5">
          <div class="slds-media">
            <div class="slds-media__body">
              <p class="slds-text-heading_small">
                User name, it seems you frequent this record. Try favoriting it for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    `
  )
  .add(
    'Feature with icon',
    () => `
    <div class="ui-popover">
      <section
        class="slds-popover slds-popover_walkthrough slds-popover_feature slds-nubbin_left"
        role="dialog"
        aria-label="Dialog Title"
        aria-describedby="dialog-body-id-6"
      >
        <button
          class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse"
          title="Close dialog"
        >
          <svg class="slds-button__icon" aria-hidden="true">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"
            />
          </svg>
          <span class="slds-assistive-text">Close dialog</span>
        </button>
        <div class="slds-popover__body" id="dialog-body-id-6">
          <div class="slds-media">
            <div class="slds-media__figure">
              <span
                class="slds-icon_container"
                title="description of icon when needed"
              >
                <svg
                  class="slds-icon slds-icon_small slds-icon-text-default"
                  aria-hidden="true"
                >
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#favorite"
                  />
                </svg>
                <span class="slds-assistive-text">Description of icon</span>
              </span>
            </div>
            <div class="slds-media__body">
              <p class="slds-text-heading_small">
                User name, it seems you frequent this record. Try favoriting it for
                easy access.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    `
  )
  .add(
    'Feature with header and footer',
    () => `
    <div class="ui-popover">
      <section
        class="slds-popover slds-popover_walkthrough slds-popover_feature slds-nubbin_left"
        role="dialog"
        aria-labelledby="dialog-heading-id-2"
        aria-describedby="dialog-body-id-7"
      >
        <button
          class="slds-button slds-button_icon slds-button_icon-small slds-float_right slds-popover__close slds-button_icon-inverse"
          title="Close dialog"
        >
          <svg class="slds-button__icon" aria-hidden="true">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"
            />
          </svg>
          <span class="slds-assistive-text">Close dialog</span>
        </button>
        <div class="slds-popover__body" id="dialog-body-id-7">
          <div class="slds-media">
            <div class="slds-media__figure">
              <span
                class="slds-icon_container"
                title="description of icon when needed"
              >
                <svg
                  class="slds-icon slds-icon_small slds-icon-text-default"
                  aria-hidden="true"
                >
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#favorite"
                  />
                </svg>
                <span class="slds-assistive-text">Description of icon</span>
              </span>
            </div>
            <div class="slds-media__body">
              <h2 id="dialog-heading-id-2" class="slds-text-heading_small">
                Title
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <footer class="slds-popover__footer">
          <div class="slds-grid slds-grid_vertical-align-center">
            <button
              class="ui-button ui-button--default slds-button slds-button_neutral slds-col_bump-left"
            >
              Neutral
            </button>
          </div>
        </footer>
      </section>
    </div>
    `
  );
