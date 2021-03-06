import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Picklists', module)
  .add(
    'Closed',
    () => `
    <div class="ui-picklist">
      <div class="ui-form-element slds-form-element">
        <label
          id="ui-picklist__label-01"
          class="ui-form-element__label slds-form-element__label"
          for="combobox-unique-id-33"
        >
          Search
        </label>
        <div class="ui-form-element__control slds-form-element__control">
          <div class="slds-combobox_container">
            <div
              class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click"
              aria-expanded="true"
              aria-haspopup="listbox"
              role="combobox"
              tabindex="-1"
            >
              <div
                class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right"
                role="none"
              >
                <input
                  class="ui-form-element__control-input slds-input ui-form-element__combobox-input slds-combobox__input"
                  id="combobox-unique-id-33"
                  aria-controls="listbox-unique-id"
                  aria-expanded="false"
                  aria-labelledby="ui-picklist__label-01"
                  autocomplete="off"
                  role="textbox"
                  type="text"
                  placeholder="Select an Option"
                  value=""
                />
                <span
                  class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right"
                  title="Description of icon when needed"
                >
                  <svg
                    class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default"
                    aria-hidden="true"
                  >
                    <use
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"
                    />
                  </svg>
                  <span class="slds-assistive-text">
                    Description of icon when needed
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Open',
    () => `
    <div class="ui-picklist">
      <div class="ui-form-element slds-form-element">
        <label
          id="ui-picklist__label-01"
          class="ui-form-element__label slds-form-element__label"
          for="combobox-unique-id-33"
        >
          Search
        </label>
        <div class="ui-form-element__control slds-form-element__control">
          <div class="slds-combobox_container">
            <div
              class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
              aria-expanded="true"
              aria-haspopup="listbox"
              role="combobox"
              tabindex="-1"
            >
              <div
                class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right"
                role="none"
              >
                <input
                  class="ui-form-element__control-input slds-input ui-form-element__combobox-input slds-combobox__input"
                  id="combobox-unique-id-33"
                  aria-controls="listbox-unique-id"
                  aria-expanded="false"
                  aria-labelledby="ui-picklist__label-01"
                  autocomplete="off"
                  role="textbox"
                  type="text"
                  placeholder="Select an Option"
                  value=""
                />
                <span
                  class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right"
                  title="Description of icon when needed"
                >
                  <svg
                    class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default"
                    aria-hidden="true"
                  >
                    <use
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"
                    />
                  </svg>
                  <span class="slds-assistive-text">
                    Description of icon when needed
                  </span>
                </span>
              </div>
              <div id="listbox-unique-id">
                <ul
                  class="slds-listbox slds-listbox_vertical slds-dropdown slds-dropdown_fluid"
                  role="listbox"
                  aria-labelledby="ui-picklist__label-01"
                >
                  <li role="presentation" class="slds-listbox__item">
                    <div
                      id="listbox-option-unique-id-01"
                      class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center"
                      role="option"
                    >
                      <span class="slds-media__body">
                        <span class="slds-truncate" title="Option A">Option A</span>
                      </span>
                    </div>
                  </li>
                  <li role="presentation" class="slds-listbox__item">
                    <div
                      id="listbox-option-unique-id-02"
                      class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center"
                      role="option"
                    >
                      <span class="slds-media__body">
                        <span class="slds-truncate" title="Option B">Option B</span>
                      </span>
                    </div>
                  </li>
                  <li role="presentation" class="slds-listbox__item">
                    <div
                      id="listbox-option-unique-id-03"
                      class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center"
                      role="option"
                    >
                      <span class="slds-media__body">
                        <span class="slds-truncate" title="Option C">Option C</span>
                      </span>
                    </div>
                  </li>
                  <li role="presentation" class="slds-listbox__item">
                    <div
                      id="listbox-option-unique-id-03"
                      class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center"
                      role="option"
                    >
                      <span class="slds-media__body">
                        <span class="slds-truncate" title="Option D">Option D</span>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'With heading',
    () => `
    <div class="ui-picklist">
      <div class="ui-form-element slds-form-element">
        <label
          class="ui-form-element__label slds-form-element__label"
          for="combobox-unique-id-38"
        >
          Search
        </label>
        <div class="ui-form-element__control slds-form-element__control">
          <div class="slds-combobox_container slds-size_small">
            <div
              class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
              aria-expanded="true"
              aria-haspopup="listbox"
              role="combobox"
            >
              <div
                class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right"
                role="none"
              >
                <input
                  class="ui-form-element__control-input slds-input ui-form-element__combobox-input slds-combobox__input slds-combobox__input-value"
                  id="combobox-unique-id-38"
                  aria-controls="listbox-unique-id"
                  autocomplete="off"
                  role="textbox"
                  type="text"
                  placeholder="Select an Option"
                  value=""
                />
                <span
                  class="slds-icon_container slds-icon-utility-down slds-input__icon slds-input__icon_right"
                  title="Description of icon when needed"
                >
                  <svg
                    class="slds-icon slds-icon slds-icon_x-small slds-icon-text-default"
                    aria-hidden="true"
                  >
                    <use
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"
                    />
                  </svg>
                  <span class="slds-assistive-text">
                    Description of icon when needed
                  </span>
                </span>
              </div>
              <div id="listbox-unique-id" role="listbox">
                <ul
                  class="slds-listbox slds-listbox_vertical slds-dropdown slds-dropdown_fluid"
                  role="group"
                  aria-label="Recently Viewed"
                >
                  <li class="slds-listbox__item">
                    <div
                      class="slds-media slds-listbox__option slds-listbox__option_plain"
                      id="listbox-option-unique-id-00"
                    >
                      <h3 class="slds-listbox__option-header">Recently Viewed</h3>
                    </div>
                  </li>
                  <li role="presentation" class="slds-listbox__item">
                    <div
                      id="listbox-option-unique-id-01"
                      class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center"
                      role="option"
                    >
                      <span class="slds-media__body">
                        <span class="slds-truncate" title="Option A">Option A</span>
                      </span>
                    </div>
                  </li>
                  <li role="presentation" class="slds-listbox__item">
                    <div
                      id="listbox-option-unique-id-02"
                      class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center"
                      role="option"
                    >
                      <span class="slds-media__body">
                        <span class="slds-truncate" title="Option B">Option B</span>
                      </span>
                    </div>
                  </li>
                  <li role="presentation" class="slds-listbox__item">
                    <div
                      id="listbox-option-unique-id-03"
                      class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center"
                      role="option"
                    >
                      <span class="slds-media__body">
                        <span class="slds-truncate" title="Option C">Option C</span>
                      </span>
                    </div>
                  </li>
                  <li role="presentation" class="slds-listbox__item">
                    <div
                      id="listbox-option-unique-id-02"
                      class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center"
                      role="option"
                    >
                      <span class="slds-media__body">
                        <span class="slds-truncate" title="Option D">Option D</span>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  );
