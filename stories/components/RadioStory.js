import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Forms/Radios', module)
  .add(
    'Base',
    () => `
    <div class="ui-form-element slds-form-element">
      <div class="ui-form-element__control slds-form-element__control">
        <span class="ui-form-element__radio slds-radio">
          <input type="radio" id="radio-19" name="options" value="radio-19" />
          <label class="slds-radio__label" for="radio-19">
            <span class="slds-radio_faux"></span>
            <span class="slds-form-element__label">Radio Value One</span>
          </label>
        </span>
      </div>
    </div>
    `
  )
  .add(
    'Checked',
    () => `
    <div class="ui-form-element slds-form-element">
      <div class="ui-form-element__control slds-form-element__control">
        <span class="ui-form-element__radio slds-radio">
          <input 
            type="radio" 
            id="radio-19" 
            name="options" 
            value="radio-19" 
            checked
          />
          <label class="slds-radio__label" for="radio-19">
            <span class="slds-radio_faux"></span>
            <span class="slds-form-element__label">Radio Value One</span>
          </label>
        </span>
      </div>
    </div>
    `
  )
  .add(
    'Group Base',
    () => `
    <div class="ui-radio-group">
      <fieldset class="ui-form-element slds-form-element">
        <legend 
          class="ui-form-element__legend slds-form-element__legend slds-form-element__label"
        >
          Radio Group Label
        </legend>
        <div class="ui-form-element__control slds-form-element__control">
          <span class="ui-form-element__radio slds-radio">
            <input type="radio" id="radio-19" name="options" value="radio-19" />
            <label class="slds-radio__label" for="radio-19">
              <span class="slds-radio_faux"></span>
              <span class="slds-form-element__label">Radio Value One</span>
            </label>
          </span>
          <span class="ui-form-element__radio slds-radio">
            <input type="radio" id="radio-20" name="options" value="radio-20" />
            <label class="slds-radio__label" for="radio-20">
              <span class="slds-radio_faux"></span>
              <span class="slds-form-element__label">Radio Value Two</span>
            </label>
          </span>
        </div>
      </fieldset>
    </div>
    `
  )
  .add(
    'Group Checked / Selected',
    () => `
    <div class="ui-radio-group">
      <fieldset class="ui-form-element slds-form-element">
        <legend class="ui-form-element__legend slds-form-element__legend slds-form-element__label">
          Radio Group Label
        </legend>
        <div class="ui-form-element__control slds-form-element__control">
          <span class="ui-form-element__radio slds-radio">
            <input 
              type="radio"
              id="radio-19"
              name="options"
              value="radio-19" 
              checked
            />
            <label class="slds-radio__label" for="radio-19">
              <span class="slds-radio_faux"></span>
              <span class="slds-form-element__label">Radio Value One</span>
            </label>
          </span>
          <span class="ui-form-element__radio slds-radio">
            <input type="radio" id="radio-20" name="options" value="radio-20" />
            <label class="slds-radio__label" for="radio-20">
              <span class="slds-radio_faux"></span>
              <span class="slds-form-element__label">Radio Value Two</span>
            </label>
          </span>
        </div>
      </fieldset>
    </div>
    `
  )
  .add(
    'Group Disabled',
    () => `
    <div class="ui-radio-group">
      <fieldset class="ui-form-element slds-form-element">
        <legend class="ui-form-element__legend slds-form-element__legend slds-form-element__label">
          Radio Group Label
        </legend>
        <div class="ui-form-element__control slds-form-element__control">
          <span class="ui-form-element__radio slds-radio">
            <input
              type="radio"
              id="radio-23"
              name="options"
              value="radio-23"
              disabled
            />
            <label class="slds-radio__label" for="radio-23">
              <span class="slds-radio_faux"></span>
              <span class="slds-form-element__label">Radio Value One</span>
            </label>
          </span>
          <span class="ui-form-element__radio slds-radio">
            <input
              type="radio"
              id="radio-24"
              name="options"
              value="radio-24"
              disabled
            />
            <label class="slds-radio__label" for="radio-24">
              <span class="slds-radio_faux"></span>
              <span class="slds-form-element__label">Radio Value Two</span>
            </label>
          </span>
        </div>
      </fieldset>
    </div>
    `
  )
  .add(
    'Group Disabled and checked',
    () => `
    <div class="ui-radio-group">
      <fieldset class="ui-form-element slds-form-element">
        <legend class="ui-form-element__legend slds-form-element__legend slds-form-element__label">
          Radio Group Label
        </legend>
        <div class="ui-form-element__control slds-form-element__control">
          <span class="ui-form-element__radio slds-radio">
            <input
              type="radio"
              id="radio-23"
              name="options"
              value="radio-23"
              disabled
              checked
            />
            <label class="slds-radio__label" for="radio-23">
              <span class="slds-radio_faux"></span>
              <span class="slds-form-element__label">Radio Value One</span>
            </label>
          </span>
          <span class="ui-form-element__radio slds-radio">
            <input
              type="radio"
              id="radio-24"
              name="options"
              value="radio-24"
              disabled
            />
            <label class="slds-radio__label" for="radio-24">
              <span class="slds-radio_faux"></span>
              <span class="slds-form-element__label">Radio Value Two</span>
            </label>
          </span>
        </div>
      </fieldset>
    </div>
    `
  );
