import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Forms/Textareas', module)
  .add(
    'Base',
    () => `
    <div class="ui-form-element slds-form-element">
      <label
        class="ui-form-element__label slds-form-element__label"
        for="textarea-id-01"
      >
        <span class="ui-form-element__label-name">Textarea Label</span>
      </label>
      <div class="ui-form-element__control slds-form-element__control">
        <textarea
          id="textarea-id-01"
          class="ui-form-element__control-textarea slds-textarea"
          placeholder="Placeholder Text"
        ></textarea>
      </div>
    </div>
    `
  )
  .add(
    'Base with description',
    () => `
    <div class="ui-form-element slds-form-element">
      <label
        class="ui-form-element__label slds-form-element__label"
        for="textarea-id-01"
      >
        <span class="ui-form-element__label-name">Textarea Label</span>
        <span class="ui-form-element__label-description">
          Description of input label here
        </span>
      </label>
      <div class="ui-form-element__control slds-form-element__control">
        <textarea
          id="textarea-id-01"
          class="ui-form-element__control-textarea slds-textarea"
          placeholder="Placeholder Text"
        ></textarea>
      </div>
    </div>
    `
  )
  .add(
    'Optional',
    () => `
    <div class="ui-form-element slds-form-element">
      <label
        class="ui-form-element__label slds-form-element__label"
        for="textarea-id-01"
      >
        <span class="ui-form-element__label-name">
          Textarea Label <span class="ui-form-element__label-optional">(optional)</span>
        </span>
      </label>
      <div class="ui-form-element__control slds-form-element__control">
        <textarea
          id="textarea-id-01"
          class="ui-form-element__control-textarea slds-textarea"
          placeholder="Placeholder Text"
          required
        ></textarea>
      </div>
    </div>
    `
  )
  .add(
    'Optional with description',
    () => `
    <div class="ui-form-element slds-form-element">
      <label
        class="ui-form-element__label slds-form-element__label"
        for="textarea-id-01"
      >
        <span class="ui-form-element__label-name">
          Textarea Label <span class="ui-form-element__label-optional">(optional)</span>
        </span>
        <span class="ui-form-element__label-description">
          Description of input label here
        </span>
      </label>
      <div class="ui-form-element__control slds-form-element__control">
        <textarea
          id="textarea-id-01"
          class="ui-form-element__control-textarea slds-textarea"
          placeholder="Placeholder Text"
          required
        ></textarea>
      </div>
    </div>
    `
  )
  .add(
    'Disabled',
    () => `
    <div class="ui-form-element slds-form-element">
      <label
        class="ui-form-element__label slds-form-element__label"
        for="textarea-id-01"
      >
        <span class="ui-form-element__label-name">Textarea Label</span>
      </label>
      <div class="ui-form-element__control slds-form-element__control">
        <textarea
          id="textarea-id-01"
          class="ui-form-element__control-textarea slds-textarea"
          placeholder="Placeholder Text"
          disabled
        ></textarea>
      </div>
    </div>
    `
  )
  .add(
    'Error',
    () => `
    <div class="ui-form-element slds-form-element slds-has-error">
      <label
        class="ui-form-element__label slds-form-element__label"
        for="textarea-id-01"
      >
        <span class="ui-form-element__label-name">Textarea Label</span>
      </label>
      <div class="ui-form-element__control slds-form-element__control">
        <textarea
          id="textarea-id-01"
          aria-describedby="error-01"
          class="ui-form-element__control-textarea slds-textarea"
          placeholder="Placeholder Text"
          required
        ></textarea>
      </div>
      <div class="slds-form-element__help" id="error-01">
      <abbr class="slds-required">*</abbr> This field is required
      </div>
    </div>
    `
  );
