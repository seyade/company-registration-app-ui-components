import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Forms/Inputs Fields', module)
  .add(
    'Base',
    () => `
    <div class="ui-form-element slds-form-element">
      <label class="ui-form-element__label slds-form-element__label" for="text-input-id-1">
        <span class="ui-form-element__label-name">Input Label</span>
      </label>
      <div class="ui-form-element__control slds-form-element__control">
        <input
          id="text-input-id-1"
          class="ui-form-element__control-input slds-input"
          type="text"
          placeholder="Type something..."
        />
      </div>
    </div>
    `
  )
  .add(
    'Base with description',
    () => `
    <div class="ui-form-element slds-form-element">
      <label class="ui-form-element__label slds-form-element__label" for="text-input-id-1">
        <span class="ui-form-element__label-name">Input Label</span>
        <span class="ui-form-element__label-description">
          Description of input label here
        </span>
      </label>
      <div class="ui-form-element__control slds-form-element__control">
        <input
          id="text-input-id-1"
          class="ui-form-element__control-input slds-input"
          type="text"
          placeholder="Type something..."
        />
      </div>
    </div>
    `
  )
  .add(
    'Optional',
    () => `
    <div class="ui-form-element slds-form-element">
      <label class="ui-form-element__label slds-form-element__label" for="text-input-id-1">
        <span class="ui-form-element__label-name">
          Input Label <span class="ui-form-element__label-optional">(optional)</span>
        </span>
      </label>
      <div class="ui-form-element__control slds-form-element__control">
        <input
          id="text-input-id-1"
          class="ui-form-element__control-input slds-input"
          type="text"
          placeholder="Type something..."
          required
        />
      </div>
    </div>
    `
  )
  .add(
    'Optional with description',
    () => `
    <div class="ui-form-element slds-form-element">
      <label class="ui-form-element__label slds-form-element__label" for="text-input-id-1">
        <span class="ui-form-element__label-name">
          Input Label <span class="ui-form-element__label-optional">(optional)</span>
          <span class="ui-form-element__label-description">
            Description of input label here
          </span>
        </span>
      </label>
      <div class="ui-form-element__control slds-form-element__control">
        <input
          id="text-input-id-1"
          class="ui-form-element__control-input slds-input"
          type="text"
          placeholder="Type something..."
          required
        />
      </div>
    </div>
    `
  )
  .add(
    'Disabled',
    () => `
    <div class="ui-form-element slds-form-element">
      <label class="ui-form-element__label slds-form-element__label" for="text-input-id-1">
        <span class="ui-form-element__label-name">Input Label</span>
      </label>
      <div class="ui-form-element__control slds-form-element__control">
        <input
          id="text-input-id-1"
          class="ui-form-element__control-input slds-input"
          type="text"
          placeholder="Disabled..."
          disabled
        />
      </div>
    </div>
    `
  )
  .add(
    'Error',
    () => `
    <div class="ui-form-element slds-form-element slds-has-error">
      <label class="ui-form-element__label slds-form-element__label" for="text-input-id-1">
        <span class="ui-form-element__label-name">Input Label</span>
      </label>
      <div class="ui-form-element__control slds-form-element__control">
        <input
          id="text-input-id-1"
          aria-describedby="error-message-unique-id"
          class="ui-form-element__control-input slds-input"
          type="text"
          placeholder="Type something..."
          required
        />
      </div>
      <div class="slds-form-element__help" id="error-message-unique-id">
      <abbr class="slds-required">*</abbr> This field is required
      </div>
    </div>
    `
  )
  .add(
    'Left icon and "clear" button',
    () => `
    <div class="ui-form-element slds-form-element">
      <label
        class="ui-form-element__label slds-form-element__label"
        for="text-input-id-1"
      >
        <span class="ui-form-element__label-name">Input Label</span>
      </label>
      <div
        class="ui-form-element__control slds-form-element__control slds-input-has-icon slds-input-has-icon_left-right"
      >
        <svg
          class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
          aria-hidden="true"
        >
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"
          />
        </svg>
        <input
          id="text-input-id-1"
          class="ui-form-element__control-input slds-input"
          type="text"
          placeholder="Search something..."
        />
        <button
          class="slds-button slds-button_icon slds-input__icon slds-input__icon_right"
          title="Clear"
        >
          <svg class="slds-button__icon slds-icon-text-light" aria-hidden="true">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#clear"
            />
          </svg>
          <span class="slds-assistive-text">Clear</span>
        </button>
      </div>
    </div>
    `
  )
  .add(
    'Inlined x 2',
    () => `
    <div class="slds-grid slds-gutters_medium">
      <div class="slds-col">
        <div class="ui-form-element slds-form-element">
          <label
            class="ui-form-element__label slds-form-element__label"
            for="text-input-id-1"
          >
            <span class="ui-form-element__label-name">Input Label</span>

            <span class="ui-form-element__label-description">
              Description of input label here
            </span>
          </label>
          <div class="ui-form-element__control slds-form-element__control">
            <input
              id="text-input-id-1"
              class="ui-form-element__control-input slds-input"
              type="text"
              placeholder="Type something..."
            />
          </div>
        </div>
      </div>
      <div class="slds-col">
        <div class="ui-form-element slds-form-element">
          <label
            class="ui-form-element__label slds-form-element__label"
            for="text-input-id-1"
          >
            <span class="ui-form-element__label-name">
              Input Label
              <span class="ui-form-element__label-optional">(optional)</span>
            </span>

            <span class="ui-form-element__label-description">
              Description of input label here
            </span>
          </label>
          <div class="ui-form-element__control slds-form-element__control">
            <input
              id="text-input-id-1"
              class="ui-form-element__control-input slds-input"
              type="text"
              placeholder="Type something..."
            />
          </div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Inlined x 3',
    () => `
    <div class="slds-grid slds-gutters_medium">
      <div class="slds-col">
        <div class="ui-form-element slds-form-element">
          <label
            class="ui-form-element__label slds-form-element__label"
            for="text-input-id-1"
          >
            <span class="ui-form-element__label-name">Input Label</span>

            <span class="ui-form-element__label-description">
              Description of input label here
            </span>
          </label>
          <div class="ui-form-element__control slds-form-element__control">
            <input
              id="text-input-id-1"
              class="ui-form-element__control-input slds-input"
              type="text"
              placeholder="Type something..."
            />
          </div>
        </div>
      </div>
      <div class="slds-col">
        <div class="ui-form-element slds-form-element">
          <label
            class="ui-form-element__label slds-form-element__label"
            for="text-input-id-1"
          >
            <span class="ui-form-element__label-name">Input Label</span>

            <span class="ui-form-element__label-description">
              Description of input label here
            </span>
          </label>
          <div class="ui-form-element__control slds-form-element__control">
            <input
              id="text-input-id-1"
              class="ui-form-element__control-input slds-input"
              type="text"
              placeholder="Type something..."
            />
          </div>
        </div>
      </div>
      <div class="slds-col">
        <div class="ui-form-element slds-form-element">
          <label
            class="ui-form-element__label slds-form-element__label"
            for="text-input-id-1"
          >
            <span class="ui-form-element__label-name">
              Input Label
              <span class="ui-form-element__label-optional">(optional)</span>
            </span>

            <span class="ui-form-element__label-description">
              Description of input label here
            </span>
          </label>
          <div class="ui-form-element__control slds-form-element__control">
            <input
              id="text-input-id-1"
              class="ui-form-element__control-input slds-input"
              type="text"
              placeholder="Type something..."
            />
          </div>
        </div>
      </div>
    </div>
    `
  );
