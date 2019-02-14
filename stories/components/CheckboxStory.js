import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Forms/Checkboxes', module)
  .add(
    'Base',
    () => `
    <div class="ui-form-element slds-form-element">
      <div class="ui-form-element__control slds-form-element__control">
        <div class="ui-form-element__checkbox slds-checkbox">
          <input
            type="checkbox"
            name="options"
            id="checkbox-23"
            value="checkbox-23"
          />
          <label
            class="ui-form-element__checkbox-label slds-checkbox__label" 
            for="checkbox-23"
          >
            <span class="slds-checkbox_faux"></span>
            <span 
              class="ui-form-element__label slds-form-element__label"
            >
              Checkbox Value
            </span>
          </label>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Selected',
    () => `
    <div class="ui-form-element slds-form-element">
      <div class="ui-form-element__control slds-form-element__control">
        <div class="ui-form-element__checkbox slds-checkbox">
          <input
            type="checkbox"
            name="options"
            id="checkbox-23"
            value="checkbox-23"
            checked
          />
          <label
            class="ui-form-element__checkbox-label slds-checkbox__label" 
            for="checkbox-23"
          >
            <span class="slds-checkbox_faux"></span>
            <span 
              class="ui-form-element__label slds-form-element__label"
            >
              Checkbox Value
            </span>
          </label>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Group',
    () => `
    <div class="ui-checkbox-group">
      <fieldset class="ui-form-element slds-form-element">
        <legend
          class="ui-form-element__legend slds-form-element__legend slds-form-element__label"
        >
          Checkbox Group Label
        </legend>
        <div class="ui-form-element__control slds-form-element__control">
          <div class="ui-form-element__checkbox slds-checkbox">
            <input
              type="checkbox"
              name="options"
              id="checkbox-30"
              value="checkbox-30"
            />
            <label
              class="ui-form-element__checkbox-label slds-checkbox__label"
              for="checkbox-30"
            >
              <span class="slds-checkbox_faux"></span>
              <span class="ui-form-element__label slds-form-element__label">
                Checkbox Value
              </span>
            </label>
          </div>
          <div class="ui-form-element__checkbox slds-checkbox">
            <input
              type="checkbox"
              name="options"
              id="checkbox-31"
              value="checkbox-31"
            />
            <label
              class="ui-form-element__checkbox-label slds-checkbox__label"
              for="checkbox-31"
            >
              <span class="slds-checkbox_faux"></span>
              <span class="ui-form-element__label slds-form-element__label">
                Checkbox Value
              </span>
            </label>
          </div>
        </div>
      </fieldset>
    </div>
    `
  )
  .add(
    'Group multi-select (even more options)',
    () => `
    <div class="ui-checkbox-group ui-checkbox-group--multiselect">
      <fieldset class="ui-form-element slds-form-element">
        <legend
          class="ui-form-element__legend slds-form-element__legend slds-form-element__label"
        >
          Do you have systems, policies and procedures in place?
        </legend>
        <div class="ui-form-element__control slds-form-element__control">
          <div class="ui-form-element__checkbox slds-checkbox">
            <input
              type="checkbox"
              name="options"
              id="checkbox-30"
              value="checkbox-30"
            />
            <label
              class="ui-form-element__checkbox-label slds-checkbox__label"
              for="checkbox-30"
            >
              <span class="slds-checkbox_faux"></span>
              <span class="ui-form-element__label slds-form-element__label">
                Option 1
              </span>
            </label>
          </div>
          <div class="ui-form-element__checkbox slds-checkbox">
            <input
              type="checkbox"
              name="options"
              id="checkbox-31"
              value="checkbox-31"
            />
            <label
              class="ui-form-element__checkbox-label slds-checkbox__label"
              for="checkbox-31"
            >
              <span class="slds-checkbox_faux"></span>
              <span class="ui-form-element__label slds-form-element__label">
                Option 2
              </span>
            </label>
          </div>
          <div class="ui-form-element__checkbox slds-checkbox">
            <input
              type="checkbox"
              name="options"
              id="checkbox-32"
              value="checkbox-32"
            />
            <label
              class="ui-form-element__checkbox-label slds-checkbox__label"
              for="checkbox-32"
            >
              <span class="slds-checkbox_faux"></span>
              <span class="ui-form-element__label slds-form-element__label">
                Option 3
              </span>
            </label>
          </div>
          <div class="ui-form-element__checkbox slds-checkbox">
            <input
              type="checkbox"
              name="options"
              id="checkbox-33"
              value="checkbox-33"
            />
            <label
              class="ui-form-element__checkbox-label slds-checkbox__label"
              for="checkbox-33"
            >
              <span class="slds-checkbox_faux"></span>
              <span class="ui-form-element__label slds-form-element__label">
                Option 4
              </span>
            </label>
          </div>
        </div>
      </fieldset>
    </div>
    `
  )
  .add(
    'As button base',
    () => `
    <div class="ui-checkbox ui-checkbox--button slds-checkbox_add-button">
      <input 
        class="slds-assistive-text" 
        type="checkbox" 
        id="add-checkbox-13" 
        value="add-checkbox-13"
      />
      <label for="add-checkbox-13" class="slds-checkbox_faux">
        <span class="slds-assistive-text">Add product</span>
      </label>
    </div>
    `
  )
  .add(
    'As button checked',
    () => `
    <div class="ui-checkbox ui-checkbox--button slds-checkbox_add-button">
      <input 
        class="slds-assistive-text" 
        type="checkbox" 
        id="add-checkbox-20" 
        value="add-checkbox-20" 
        checked
      />
      <label for="add-checkbox-20" class="slds-checkbox_faux">
        <span class="slds-assistive-text">Add product</span>
      </label>
    </div>
    `
  )
  .add(
    'As button disabled',
    () => `
    <div class="ui-checkbox ui-checkbox--button slds-checkbox_add-button">
      <input 
        class="slds-assistive-text" 
        type="checkbox" 
        id="add-checkbox-21" 
        value="add-checkbox-21"
        disabled
      />
      <label for="add-checkbox-21" class="slds-checkbox_faux">
        <span class="slds-assistive-text">Add product</span>
      </label>
    </div>
    `
  )
  .add(
    'As button checked disabled',
    () => `
    <div class="ui-checkbox ui-checkbox--button slds-checkbox_add-button">
      <input 
        class="slds-assistive-text" 
        type="checkbox" 
        id="add-checkbox-21" 
        value="add-checkbox-21"
        checked
        disabled
      />
      <label for="add-checkbox-21" class="slds-checkbox_faux">
        <span class="slds-assistive-text">Add product</span>
      </label>
    </div>
    `
  );
