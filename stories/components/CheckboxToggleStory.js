import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Forms/Checkbox Toggles', module)
  .add(
    'Base',
    () => `
    <div class="ui-checkbox-toggle">
      <div class="ui-form-element slds-form-element">
        <label
          class="ui-form-element__checkbox-toggle slds-checkbox_toggle slds-grid"
        >
          <span
            class="ui-form-element__label slds-form-element__label slds-m-bottom_none"
          >
            Toggle Label
          </span>
          <input
            name="checkbox-toggle-4"
            type="checkbox"
            aria-describedby="checkbox-toggle-4"
            value="checkbox-toggle-4"
          />
          <span
            id="checkbox-toggle-4"
            class="slds-checkbox_faux_container"
            aria-live="assertive"
          >
            <span class="slds-checkbox_faux"></span>
            <span class="slds-checkbox_on">Enabled</span>
            <span class="slds-checkbox_off">Disabled</span>
          </span>
        </label>
      </div>
    </div>
    `
  )
  .add(
    'Checked',
    () => `
    <div class="ui-checkbox-toggle">
      <div class="ui-form-element slds-form-element">
        <label
          class="ui-form-element__checkbox-toggle slds-checkbox_toggle slds-grid"
        >
          <span
            class="ui-form-element__label slds-form-element__label slds-m-bottom_none"
          >
            Toggle Label
          </span>
          <input
            name="checkbox-toggle-4"
            type="checkbox"
            aria-describedby="checkbox-toggle-4"
            value="checkbox-toggle-4"
            checked
          />
          <span
            id="checkbox-toggle-4"
            class="slds-checkbox_faux_container"
            aria-live="assertive"
          >
            <span class="slds-checkbox_faux"></span>
            <span class="slds-checkbox_on">Enabled</span>
            <span class="slds-checkbox_off">Disabled</span>
          </span>
        </label>
      </div>
    </div>
    `
  )
  .add(
    'Disabled',
    () => `
    <div class="ui-checkbox-toggle">
      <div class="ui-form-element slds-form-element">
        <label
          class="ui-form-element__checkbox-toggle slds-checkbox_toggle slds-grid"
        >
          <span
            class="ui-form-element__label slds-form-element__label slds-m-bottom_none"
          >
            Toggle Label
          </span>
          <input
            name="checkbox-toggle-4"
            type="checkbox"
            aria-describedby="checkbox-toggle-4"
            value="checkbox-toggle-4"
            disabled
          />
          <span
            id="checkbox-toggle-4"
            class="slds-checkbox_faux_container"
            aria-live="assertive"
          >
            <span class="slds-checkbox_faux"></span>
            <span class="slds-checkbox_on">Enabled</span>
            <span class="slds-checkbox_off">Disabled</span>
          </span>
        </label>
      </div>
    </div>
    `
  )
  .add(
    'Checked disabled',
    () => `
    <div class="ui-checkbox-toggle">
      <div class="ui-form-element slds-form-element">
        <label
          class="ui-form-element__checkbox-toggle slds-checkbox_toggle slds-grid"
        >
          <span
            class="ui-form-element__label slds-form-element__label slds-m-bottom_none"
          >
            Toggle Label
          </span>
          <input
            name="checkbox-toggle-4"
            type="checkbox"
            aria-describedby="checkbox-toggle-4"
            value="checkbox-toggle-4"
            disabled
            checked
          />
          <span
            id="checkbox-toggle-4"
            class="slds-checkbox_faux_container"
            aria-live="assertive"
          >
            <span class="slds-checkbox_faux"></span>
            <span class="slds-checkbox_on">Enabled</span>
            <span class="slds-checkbox_off">Disabled</span>
          </span>
        </label>
      </div>
    </div>
    `
  );
