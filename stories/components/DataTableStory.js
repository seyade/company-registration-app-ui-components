import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Data Table', module)
  .add(
    'Base',
    () => `
    <div class="ui-data-table">
      <table class="slds-table slds-table_cell-buffer slds-table_bordered">
        <thead>
          <tr class="slds-line-height_reset">
            <th class="slds-text-title_caps" scope="col">
              <div class="slds-truncate">Name</div>
            </th>
            <th class="slds-text-title_caps" scope="col">
              <div class="slds-truncate">Company</div>
            </th>
            <th class="slds-text-title_caps" scope="col">
              <div class="slds-truncate">Title</div>
            </th>
            <th class="slds-text-title_caps" scope="col">
              <div class="slds-truncate">Email</div>
            </th>
            <th class="slds-text-title_caps" scope="col">
              <div class="slds-truncate">Phone</div>
            </th>
            <th class="slds-text-title_caps" scope="col">
              <div class="slds-truncate">Lead Status</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="slds-hint-parent">
            <td data-label="Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Coleb Pittman</a>
              </div>
            </td>
            <td data-label="Company Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Acme Inc.</a>
              </div>
            </td>
            <td data-label="Title" scope="row">
              <div class="slds-truncate">Buyer</div>
            </td>
            <td data-label="Email" scope="row">
              <div class="slds-truncate">
                <a href="#">kellie_langosh@gutmann.name</a>
              </div>
            </td>
            <td data-label="Phone" scope="row">
              <div class="slds-truncate">
                <a href="#">825-585-6515</a>
              </div>
            </td>
            <td data-label="Lead Status" scope="row">
              <div class="slds-truncate">Not Contacted</div>
            </td>
          </tr>
          <tr class="slds-hint-parent">
            <td data-label="Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Harvey Aguilar</a>
              </div>
            </td>
            <td data-label="Company Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Acme Inc.</a>
              </div>
            </td>
            <td data-label="Title" scope="row">
              <div class="slds-truncate">Buyer</div>
            </td>
            <td data-label="Email" scope="row">
              <div class="slds-truncate">
                <a href="#">gianni.jakubowski@yahoo.com</a>
              </div>
            </td>
            <td data-label="Phone" scope="row">
              <div class="slds-truncate">
                <a href="#">222-096-6440</a>
              </div>
            </td>
            <td data-label="Lead Status" scope="row">
              <div class="slds-truncate">Not Contacted</div>
            </td>
          </tr>
          <tr class="slds-hint-parent">
            <td data-label="Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Lettie Bates</a>
              </div>
            </td>
            <td data-label="Company Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Acme Inc.</a>
              </div>
            </td>
            <td data-label="Title" scope="row">
              <div class="slds-truncate">Buyer</div>
            </td>
            <td data-label="Email" scope="row">
              <div class="slds-truncate">
                <a href="#">marvin.deneski@chaplin.net</a>
              </div>
            </td>
            <td data-label="Phone" scope="row">
              <div class="slds-truncate">
                <a href="#">180-266-0504</a>
              </div>
            </td>
            <td data-label="Lead Status" scope="row">
              <div class="slds-truncate">Not Contacted</div>
            </td>
          </tr>
          <tr class="slds-hint-parent">
            <td data-label="Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Kevin Diaz</a>
              </div>
            </td>
            <td data-label="Company Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Acme Inc.</a>
              </div>
            </td>
            <td data-label="Title" scope="row">
              <div class="slds-truncate">Buyer</div>
            </td>
            <td data-label="Email" scope="row">
              <div class="slds-truncate">
                <a href="#">russel.albin@cristina.name</a>
              </div>
            </td>
            <td data-label="Phone" scope="row">
              <div class="slds-truncate">
                <a href="#">817-381-0406</a>
              </div>
            </td>
            <td data-label="Lead Status" scope="row">
              <div class="slds-truncate">Not Contacted</div>
            </td>
          </tr>
          <tr class="slds-hint-parent">
            <td data-label="Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Bettie Duncan</a>
              </div>
            </td>
            <td data-label="Company Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Acme Inc.</a>
              </div>
            </td>
            <td data-label="Title" scope="row">
              <div class="slds-truncate">Buyer</div>
            </td>
            <td data-label="Email" scope="row">
              <div class="slds-truncate">
                <a href="#">irma_abernathy@lauren.us</a>
              </div>
            </td>
            <td data-label="Phone" scope="row">
              <div class="slds-truncate">
                <a href="#">754-669-0871</a>
              </div>
            </td>
            <td data-label="Lead Status" scope="row">
              <div class="slds-truncate">Not Contacted</div>
            </td>
          </tr>
          <tr class="slds-hint-parent">
            <td data-label="Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Hattie Barrett</a>
              </div>
            </td>
            <td data-label="Company Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Acme Inc.</a>
              </div>
            </td>
            <td data-label="Title" scope="row">
              <div class="slds-truncate">Buyer</div>
            </td>
            <td data-label="Email" scope="row">
              <div class="slds-truncate">
                <a href="#">iva_vonrueden@gmail.com</a>
              </div>
            </td>
            <td data-label="Phone" scope="row">
              <div class="slds-truncate">
                <a href="#">290-513-3792</a>
              </div>
            </td>
            <td data-label="Lead Status" scope="row">
              <div class="slds-truncate">Not Contacted</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    `
  )
  .add(
    'Stripped rows',
    () => `
    <div class="ui-data-table">
      <table class="slds-table slds-table_cell-buffer slds-table_bordered slds-table_striped">
        <thead>
          <tr class="slds-line-height_reset">
            <th class="slds-text-title_caps" scope="col">
              <div class="slds-truncate">Name</div>
            </th>
            <th class="slds-text-title_caps" scope="col">
              <div class="slds-truncate">Company</div>
            </th>
            <th class="slds-text-title_caps" scope="col">
              <div class="slds-truncate">Title</div>
            </th>
            <th class="slds-text-title_caps" scope="col">
              <div class="slds-truncate">Email</div>
            </th>
            <th class="slds-text-title_caps" scope="col">
              <div class="slds-truncate">Phone</div>
            </th>
            <th class="slds-text-title_caps" scope="col">
              <div class="slds-truncate">Lead Status</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="slds-hint-parent">
            <td data-label="Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Coleb Pittman</a>
              </div>
            </td>
            <td data-label="Company Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Acme Inc.</a>
              </div>
            </td>
            <td data-label="Title" scope="row">
              <div class="slds-truncate">Buyer</div>
            </td>
            <td data-label="Email" scope="row">
              <div class="slds-truncate">
                <a href="#">kellie_langosh@gutmann.name</a>
              </div>
            </td>
            <td data-label="Phone" scope="row">
              <div class="slds-truncate">
                <a href="#">825-585-6515</a>
              </div>
            </td>
            <td data-label="Lead Status" scope="row">
              <div class="slds-truncate">Not Contacted</div>
            </td>
          </tr>
          <tr class="slds-hint-parent">
            <td data-label="Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Harvey Aguilar</a>
              </div>
            </td>
            <td data-label="Company Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Acme Inc.</a>
              </div>
            </td>
            <td data-label="Title" scope="row">
              <div class="slds-truncate">Buyer</div>
            </td>
            <td data-label="Email" scope="row">
              <div class="slds-truncate">
                <a href="#">gianni.jakubowski@yahoo.com</a>
              </div>
            </td>
            <td data-label="Phone" scope="row">
              <div class="slds-truncate">
                <a href="#">222-096-6440</a>
              </div>
            </td>
            <td data-label="Lead Status" scope="row">
              <div class="slds-truncate">Not Contacted</div>
            </td>
          </tr>
          <tr class="slds-hint-parent">
            <td data-label="Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Lettie Bates</a>
              </div>
            </td>
            <td data-label="Company Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Acme Inc.</a>
              </div>
            </td>
            <td data-label="Title" scope="row">
              <div class="slds-truncate">Buyer</div>
            </td>
            <td data-label="Email" scope="row">
              <div class="slds-truncate">
                <a href="#">marvin.deneski@chaplin.net</a>
              </div>
            </td>
            <td data-label="Phone" scope="row">
              <div class="slds-truncate">
                <a href="#">180-266-0504</a>
              </div>
            </td>
            <td data-label="Lead Status" scope="row">
              <div class="slds-truncate">Not Contacted</div>
            </td>
          </tr>
          <tr class="slds-hint-parent">
            <td data-label="Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Kevin Diaz</a>
              </div>
            </td>
            <td data-label="Company Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Acme Inc.</a>
              </div>
            </td>
            <td data-label="Title" scope="row">
              <div class="slds-truncate">Buyer</div>
            </td>
            <td data-label="Email" scope="row">
              <div class="slds-truncate">
                <a href="#">russel.albin@cristina.name</a>
              </div>
            </td>
            <td data-label="Phone" scope="row">
              <div class="slds-truncate">
                <a href="#">817-381-0406</a>
              </div>
            </td>
            <td data-label="Lead Status" scope="row">
              <div class="slds-truncate">Not Contacted</div>
            </td>
          </tr>
          <tr class="slds-hint-parent">
            <td data-label="Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Bettie Duncan</a>
              </div>
            </td>
            <td data-label="Company Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Acme Inc.</a>
              </div>
            </td>
            <td data-label="Title" scope="row">
              <div class="slds-truncate">Buyer</div>
            </td>
            <td data-label="Email" scope="row">
              <div class="slds-truncate">
                <a href="#">irma_abernathy@lauren.us</a>
              </div>
            </td>
            <td data-label="Phone" scope="row">
              <div class="slds-truncate">
                <a href="#">754-669-0871</a>
              </div>
            </td>
            <td data-label="Lead Status" scope="row">
              <div class="slds-truncate">Not Contacted</div>
            </td>
          </tr>
          <tr class="slds-hint-parent">
            <td data-label="Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Hattie Barrett</a>
              </div>
            </td>
            <td data-label="Company Name" scope="row">
              <div class="slds-truncate">
                <a href="#">Acme Inc.</a>
              </div>
            </td>
            <td data-label="Title" scope="row">
              <div class="slds-truncate">Buyer</div>
            </td>
            <td data-label="Email" scope="row">
              <div class="slds-truncate">
                <a href="#">iva_vonrueden@gmail.com</a>
              </div>
            </td>
            <td data-label="Phone" scope="row">
              <div class="slds-truncate">
                <a href="#">290-513-3792</a>
              </div>
            </td>
            <td data-label="Lead Status" scope="row">
              <div class="slds-truncate">Not Contacted</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    `
  )
  .add(
    'Advanced rows selection',
    () => `
    <div class="ui-data-table">
      <table
        aria-multiselectable="true"
        class="slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols"
        role="grid"
      >
        <thead>
          <tr class="slds-line-height_reset">
            <th
              class="slds-text-title_caps slds-text-align_right"
              scope="col"
              style="width: 3.25rem;"
            >
              <span id="column-group-header" class="slds-assistive-text">
                Choose a row
              </span>
              <div class="slds-th__action slds-th__action_form">
                <div class="slds-checkbox">
                  <input
                    type="checkbox"
                    name="options"
                    id="checkbox-9"
                    tabindex="0"
                    aria-labelledby="check-select-all-label column-group-header"
                    value="checkbox-9"
                  />
                  <label
                    class="slds-checkbox__label"
                    for="checkbox-9"
                    id="check-select-all-label"
                  >
                    <span class="slds-checkbox_faux"></span>
                    <span class="slds-form-element__label slds-assistive-text">
                      Select All
                    </span>
                  </label>
                </div>
              </div>
            </th>
            <th
              aria-label="Name"
              aria-sort="descending"
              class="slds-text-title_caps slds-is-resizable slds-is-sortable slds-is-sorted slds-is-sorted_desc"
              scope="col"
            >
              <a
                class="slds-th__action slds-text-link_reset"
                href="javascript:void(0);"
                role="button"
                tabindex="0"
              >
                <span class="slds-assistive-text">Sort by:</span>
                <div
                  class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate"
                >
                  <span class="slds-truncate" title="Name">Name</span>
                  <span class="slds-icon_container slds-icon-utility-arrowdown">
                    <img class="pw-icon" src="/assets/svg/arrow-long-down.svg" />
                  </span>
                </div>
              </a>
              <span
                class="slds-assistive-text"
                aria-live="assertive"
                aria-atomic="true"
              >
                Sorted descending
              </span>
              <div class="slds-resizable">
                <input
                  aria-label="Name column width"
                  class="slds-resizable__input slds-assistive-text"
                  id="cell-resize-handle-15"
                  max="1000"
                  min="20"
                  tabindex="0"
                  type="range"
                />
                <span class="slds-resizable__handle">
                  <span class="slds-resizable__divider"></span>
                </span>
              </div>
            </th>
            <th
              aria-label="Account Name"
              aria-sort="none"
              class="slds-text-title_caps slds-is-resizable slds-is-sortable"
              scope="col"
            >
              <a
                class="slds-th__action slds-text-link_reset"
                href="javascript:void(0);"
                role="button"
                tabindex="0"
              >
                <span class="slds-assistive-text">Sort by:</span>
                <div
                  class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate"
                >
                  <span class="slds-truncate" title="Account Name">Company</span>
                  <span class="slds-icon_container slds-icon-utility-arrowdown">
                    <img class="pw-icon" src="/assets/svg/arrow-long-down.svg" />
                  </span>
                </div>
              </a>
              <div class="slds-resizable">
                <input
                  aria-label="Account Name column width"
                  class="slds-resizable__input slds-assistive-text"
                  id="cell-resize-handle-16"
                  max="1000"
                  min="20"
                  tabindex="0"
                  type="range"
                />
                <span class="slds-resizable__handle">
                  <span class="slds-resizable__divider"></span>
                </span>
              </div>
            </th>
            <th
              aria-label="Close Date"
              aria-sort="none"
              class="slds-text-title_caps slds-is-resizable slds-is-sortable"
              scope="col"
            >
              <a
                class="slds-th__action slds-text-link_reset"
                href="javascript:void(0);"
                role="button"
                tabindex="0"
              >
                <span class="slds-assistive-text">Sort by:</span>
                <div
                  class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate"
                >
                  <span class="slds-truncate" title="Close Date">Title</span>
                  <span class="slds-icon_container slds-icon-utility-arrowdown">
                    <img class="pw-icon" src="/assets/svg/arrow-long-down.svg" />
                  </span>
                </div>
              </a>
              <div class="slds-resizable">
                <input
                  aria-label="Close Date column width"
                  class="slds-resizable__input slds-assistive-text"
                  id="cell-resize-handle-17"
                  max="1000"
                  min="20"
                  tabindex="0"
                  type="range"
                />
                <span class="slds-resizable__handle">
                  <span class="slds-resizable__divider"></span>
                </span>
              </div>
            </th>
            <th
              aria-label="Stage"
              aria-sort="none"
              class="slds-text-title_caps slds-is-resizable slds-is-sortable"
              scope="col"
            >
              <a
                class="slds-th__action slds-text-link_reset"
                href="javascript:void(0);"
                role="button"
                tabindex="0"
              >
                <span class="slds-assistive-text">Sort by:</span>
                <div
                  class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate"
                >
                  <span class="slds-truncate" title="Stage">Email</span>
                  <span class="slds-icon_container slds-icon-utility-arrowdown">
                    <img class="pw-icon" src="/assets/svg/arrow-long-down.svg" />
                  </span>
                </div>
              </a>
              <div class="slds-resizable">
                <input
                  aria-label="Stage column width"
                  class="slds-resizable__input slds-assistive-text"
                  id="cell-resize-handle-18"
                  max="1000"
                  min="20"
                  tabindex="0"
                  type="range"
                />
                <span class="slds-resizable__handle">
                  <span class="slds-resizable__divider"></span>
                </span>
              </div>
            </th>
            <th
              aria-label="Confidence"
              aria-sort="none"
              class="slds-text-title_caps slds-is-resizable slds-is-sortable"
              scope="col"
            >
              <a
                class="slds-th__action slds-text-link_reset"
                href="javascript:void(0);"
                role="button"
                tabindex="0"
              >
                <span class="slds-assistive-text">Sort by:</span>
                <div
                  class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate"
                >
                  <span class="slds-truncate" title="Confidence">Phone</span>
                  <span class="slds-icon_container slds-icon-utility-arrowdown">
                    <img class="pw-icon" src="/assets/svg/arrow-long-down.svg" />
                  </span>
                </div>
              </a>
              <div class="slds-resizable">
                <input
                  aria-label="Confidence column width"
                  class="slds-resizable__input slds-assistive-text"
                  id="cell-resize-handle-19"
                  max="1000"
                  min="20"
                  tabindex="0"
                  type="range"
                />
                <span class="slds-resizable__handle">
                  <span class="slds-resizable__divider"></span>
                </span>
              </div>
            </th>
            <th
              aria-label="Amount"
              aria-sort="none"
              class="slds-text-title_caps slds-is-resizable slds-is-sortable"
              scope="col"
            >
              <a
                class="slds-th__action slds-text-link_reset"
                href="javascript:void(0);"
                role="button"
                tabindex="0"
              >
                <span class="slds-assistive-text">Sort by:</span>
                <div
                  class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate"
                >
                  <span class="slds-truncate" title="Amount">Lead Status</span>
                  <span class="slds-icon_container slds-icon-utility-arrowdown">
                    <img class="pw-icon" src="/assets/svg/arrow-long-down.svg" />
                  </span>
                </div>
              </a>
              <div class="slds-resizable">
                <input
                  aria-label="Amount column width"
                  class="slds-resizable__input slds-assistive-text"
                  id="cell-resize-handle-20"
                  max="1000"
                  min="20"
                  tabindex="0"
                  type="range"
                />
                <span class="slds-resizable__handle">
                  <span class="slds-resizable__divider"></span>
                </span>
              </div>
            </th>
            <th class="slds-text-title_caps" scope="col" style="width: 3.25rem;">
              <div class="slds-truncate slds-assistive-text" title="Actions">
                Actions
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr aria-selected="false" class="slds-hint-parent">
            <td class="slds-text-align_right" role="gridcell">
              <div class="slds-checkbox">
                <input
                  type="checkbox"
                  name="options"
                  id="checkbox-01"
                  tabindex="0"
                  aria-labelledby="check-button-label-01 column-group-header"
                  value="checkbox-01"
                />
                <label
                  class="slds-checkbox__label"
                  for="checkbox-01"
                  id="check-button-label-01"
                >
                  <span class="slds-checkbox_faux"></span>
                  <span class="slds-form-element__label slds-assistive-text">
                    Select item 1
                  </span>
                </label>
              </div>
            </td>
            <td scope="row">
              <div class="slds-truncate">
                <a href="#" tabindex="0">Coleb Pittman</a>
              </div>
            </td>
            <td role="gridcell">
              <div class="slds-truncate">
                <a href="#" tabindex="0">Acme Inc.</a>
              </div>
            </td>
            <td role="gridcell"><div class="slds-truncate">Buyer</div></td>
            <td role="gridcell">
              <div class="slds-truncate">
                <a href="#" tabindex="0">kellie_langosh@gutmann.name</a>
              </div>
            </td>
            <td role="gridcell">
              <div class="slds-truncate"><a href="#">825-585-6515</a></div>
            </td>
            <td role="gridcell"><div class="slds-truncate">Not Contacted</div></td>
            <td role="gridcell">
              <button
                class="slds-button slds-button_icon slds-button_icon-x-small"
                aria-haspopup="true"
                tabindex="0"
              >
                <img class="pw-icon" src="/assets/svg/arrow-down.svg" />
                <span class="slds-assistive-text">Acme Inc.</span>
              </button>
            </td>
          </tr>
          <tr aria-selected="false" class="slds-hint-parent">
            <td class="slds-text-align_right" role="gridcell">
              <div class="slds-checkbox">
                <input
                  type="checkbox"
                  name="options"
                  id="checkbox-01"
                  tabindex="0"
                  aria-labelledby="check-button-label-01 column-group-header"
                  value="checkbox-01"
                />
                <label
                  class="slds-checkbox__label"
                  for="checkbox-01"
                  id="check-button-label-01"
                >
                  <span class="slds-checkbox_faux"></span>
                  <span class="slds-form-element__label slds-assistive-text">
                    Select item 1
                  </span>
                </label>
              </div>
            </td>
            <td scope="row">
              <div class="slds-truncate">
                <a href="#" tabindex="0">Coleb Pittman</a>
              </div>
            </td>
            <td role="gridcell">
              <div class="slds-truncate">
                <a href="#" tabindex="0">Acme Inc.</a>
              </div>
            </td>
            <td role="gridcell"><div class="slds-truncate">Buyer</div></td>
            <td role="gridcell">
              <div class="slds-truncate">
                <a href="#" tabindex="0">kellie_langosh@gutmann.name</a>
              </div>
            </td>
            <td role="gridcell">
              <div class="slds-truncate"><a href="#">825-585-6515</a></div>
            </td>
            <td role="gridcell"><div class="slds-truncate">Not Contacted</div></td>
            <td role="gridcell">
              <button
                class="slds-button slds-button_icon slds-button_icon-x-small"
                aria-haspopup="true"
                tabindex="0"
              >
                <img class="pw-icon" src="/assets/svg/arrow-down.svg" />
                <span class="slds-assistive-text">Acme Inc.</span>
              </button>
            </td>
          </tr>
          <tr aria-selected="false" class="slds-hint-parent">
            <td class="slds-text-align_right" role="gridcell">
              <div class="slds-checkbox">
                <input
                  type="checkbox"
                  name="options"
                  id="checkbox-01"
                  tabindex="0"
                  aria-labelledby="check-button-label-01 column-group-header"
                  value="checkbox-01"
                />
                <label
                  class="slds-checkbox__label"
                  for="checkbox-01"
                  id="check-button-label-01"
                >
                  <span class="slds-checkbox_faux"></span>
                  <span class="slds-form-element__label slds-assistive-text">
                    Select item 1
                  </span>
                </label>
              </div>
            </td>
            <td scope="row">
              <div class="slds-truncate">
                <a href="#" tabindex="0">Coleb Pittman</a>
              </div>
            </td>
            <td role="gridcell">
              <div class="slds-truncate">
                <a href="#" tabindex="0">Acme Inc.</a>
              </div>
            </td>
            <td role="gridcell"><div class="slds-truncate">Buyer</div></td>
            <td role="gridcell">
              <div class="slds-truncate">
                <a href="#" tabindex="0">kellie_langosh@gutmann.name</a>
              </div>
            </td>
            <td role="gridcell">
              <div class="slds-truncate"><a href="#">825-585-6515</a></div>
            </td>
            <td role="gridcell"><div class="slds-truncate">Not Contacted</div></td>
            <td role="gridcell">
              <button
                class="slds-button slds-button_icon slds-button_icon-x-small"
                aria-haspopup="true"
                tabindex="0"
              >
                <img class="pw-icon" src="/assets/svg/arrow-down.svg" />
                <span class="slds-assistive-text">Acme Inc.</span>
              </button>
            </td>
          </tr>
          <tr aria-selected="false" class="slds-hint-parent">
            <td class="slds-text-align_right" role="gridcell">
              <div class="slds-checkbox">
                <input
                  type="checkbox"
                  name="options"
                  id="checkbox-01"
                  tabindex="0"
                  aria-labelledby="check-button-label-01 column-group-header"
                  value="checkbox-01"
                />
                <label
                  class="slds-checkbox__label"
                  for="checkbox-01"
                  id="check-button-label-01"
                >
                  <span class="slds-checkbox_faux"></span>
                  <span class="slds-form-element__label slds-assistive-text">
                    Select item 1
                  </span>
                </label>
              </div>
            </td>
            <td scope="row">
              <div class="slds-truncate">
                <a href="#" tabindex="0">Coleb Pittman</a>
              </div>
            </td>
            <td role="gridcell">
              <div class="slds-truncate">
                <a href="#" tabindex="0">Acme Inc.</a>
              </div>
            </td>
            <td role="gridcell"><div class="slds-truncate">Buyer</div></td>
            <td role="gridcell">
              <div class="slds-truncate">
                <a href="#" tabindex="0">kellie_langosh@gutmann.name</a>
              </div>
            </td>
            <td role="gridcell">
              <div class="slds-truncate"><a href="#">825-585-6515</a></div>
            </td>
            <td role="gridcell"><div class="slds-truncate">Not Contacted</div></td>
            <td role="gridcell">
              <button
                class="slds-button slds-button_icon slds-button_icon-x-small"
                aria-haspopup="true"
                tabindex="0"
              >
                <img class="pw-icon" src="/assets/svg/arrow-down.svg" />
                <span class="slds-assistive-text">Acme Inc.</span>
              </button>
            </td>
          </tr>
          <tr aria-selected="false" class="slds-hint-parent">
            <td class="slds-text-align_right" role="gridcell">
              <div class="slds-checkbox">
                <input
                  type="checkbox"
                  name="options"
                  id="checkbox-01"
                  tabindex="0"
                  aria-labelledby="check-button-label-01 column-group-header"
                  value="checkbox-01"
                />
                <label
                  class="slds-checkbox__label"
                  for="checkbox-01"
                  id="check-button-label-01"
                >
                  <span class="slds-checkbox_faux"></span>
                  <span class="slds-form-element__label slds-assistive-text">
                    Select item 1
                  </span>
                </label>
              </div>
            </td>
            <td scope="row">
              <div class="slds-truncate">
                <a href="#" tabindex="0">Coleb Pittman</a>
              </div>
            </td>
            <td role="gridcell">
              <div class="slds-truncate">
                <a href="#" tabindex="0">Acme Inc.</a>
              </div>
            </td>
            <td role="gridcell"><div class="slds-truncate">Buyer</div></td>
            <td role="gridcell">
              <div class="slds-truncate">
                <a href="#" tabindex="0">kellie_langosh@gutmann.name</a>
              </div>
            </td>
            <td role="gridcell">
              <div class="slds-truncate"><a href="#">825-585-6515</a></div>
            </td>
            <td role="gridcell"><div class="slds-truncate">Not Contacted</div></td>
            <td role="gridcell">
              <button
                class="slds-button slds-button_icon slds-button_icon-x-small"
                aria-haspopup="true"
                tabindex="0"
              >
                <img class="pw-icon" src="/assets/svg/arrow-down.svg" />
                <span class="slds-assistive-text">Acme Inc.</span>
              </button>
            </td>
          </tr>
          <tr aria-selected="false" class="slds-hint-parent">
            <td class="slds-text-align_right" role="gridcell">
              <div class="slds-checkbox">
                <input
                  type="checkbox"
                  name="options"
                  id="checkbox-01"
                  tabindex="0"
                  aria-labelledby="check-button-label-01 column-group-header"
                  value="checkbox-01"
                />
                <label
                  class="slds-checkbox__label"
                  for="checkbox-01"
                  id="check-button-label-01"
                >
                  <span class="slds-checkbox_faux"></span>
                  <span class="slds-form-element__label slds-assistive-text">
                    Select item 1
                  </span>
                </label>
              </div>
            </td>
            <td scope="row">
              <div class="slds-truncate">
                <a href="#" tabindex="0">Coleb Pittman</a>
              </div>
            </td>
            <td role="gridcell">
              <div class="slds-truncate">
                <a href="#" tabindex="0">Acme Inc.</a>
              </div>
            </td>
            <td role="gridcell"><div class="slds-truncate">Buyer</div></td>
            <td role="gridcell">
              <div class="slds-truncate">
                <a href="#" tabindex="0">kellie_langosh@gutmann.name</a>
              </div>
            </td>
            <td role="gridcell">
              <div class="slds-truncate"><a href="#">825-585-6515</a></div>
            </td>
            <td role="gridcell"><div class="slds-truncate">Not Contacted</div></td>
            <td role="gridcell">
              <button
                class="slds-button slds-button_icon slds-button_icon-x-small"
                aria-haspopup="true"
                tabindex="0"
              >
                <img class="pw-icon" src="/assets/svg/arrow-down.svg" />
                <span class="slds-assistive-text">Acme Inc.</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    `
  );
