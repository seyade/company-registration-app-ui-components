import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Menu', module)
  .add(
    'Base',
    () => `
    <div class="ui-menu">
      <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <button
          class="ui-menu__button slds-button slds-button_icon"
          aria-haspopup="true"
          title="Show More"
        >
          <img class="ui-icon" src="/assets/svg/arrow-down.svg" />
          <span class="slds-assistive-text">Show More</span>
        </button>
        <div class="slds-dropdown slds-dropdown_left">
          <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
            <li class="slds-dropdown__item" role="presentation">
              <a href="javascript:void(0);" role="menuitem" tabindex="0">
                <span class="slds-truncate" title="Menu Item One">
                  Menu Item One
                </span>
              </a>
            </li>
            <li class="slds-dropdown__item" role="presentation">
              <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                <span class="slds-truncate" title="Menu Item Two">
                  Menu Item Two
                </span>
              </a>
            </li>
            <li class="slds-dropdown__item" role="presentation">
              <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                <span class="slds-truncate" title="Menu Item Three">
                  Menu Item Three
                </span>
              </a>
            </li>
            <li class="slds-has-divider_top-space" role="separator"></li>
            <li class="slds-dropdown__item" role="presentation">
              <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                <span class="slds-truncate" title="Menu Item Four">
                  Menu Item Four
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Base right position',
    () => `
    <div class="ui-menu" style="margin-left: 105px">
      <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <button
          class="ui-menu__button slds-button slds-button_icon"
          aria-haspopup="true"
          title="Show More"
        >
          <img class="ui-icon" src="/assets/svg/arrow-down.svg" />
          <span class="slds-assistive-text">Show More</span>
        </button>
        <div class="slds-dropdown slds-dropdown_right">
          <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
            <li class="slds-dropdown__item" role="presentation">
              <a href="javascript:void(0);" role="menuitem" tabindex="0">
                <span class="slds-truncate" title="Menu Item One">
                  Menu Item One
                </span>
              </a>
            </li>
            <li class="slds-dropdown__item" role="presentation">
              <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                <span class="slds-truncate" title="Menu Item Two">
                  Menu Item Two
                </span>
              </a>
            </li>
            <li class="slds-dropdown__item" role="presentation">
              <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                <span class="slds-truncate" title="Menu Item Three">
                  Menu Item Three
                </span>
              </a>
            </li>
            <li class="slds-has-divider_top-space" role="separator"></li>
            <li class="slds-dropdown__item" role="presentation">
              <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                <span class="slds-truncate" title="Menu Item Four">
                  Menu Item Four
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'With header and sub items',
    () => `
    <div class="ui-menu">
      <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <button
          class="ui-menu__button slds-button slds-button_icon"
          aria-haspopup="true"
          title="Show More"
        >
          <svg class="slds-button__icon" aria-hidden="true">
            <use
              xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"
            ></use>
          </svg>
          <span class="slds-assistive-text">Show More</span>
        </button>
        <div class="slds-dropdown slds-dropdown_left">
          <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
            <li class="slds-dropdown__item" role="presentation">
              <a href="javascript:void(0);" role="menuitem" tabindex="0">
                <span class="slds-truncate" title="Menu Item One">
                  Menu Item One
                </span>
              </a>
            </li>
            <li class="slds-dropdown__item" role="presentation">
              <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                <span class="slds-truncate" title="Menu Item Two">
                  Menu Item Two
                </span>
              </a>
            </li>
            <li class="slds-dropdown__item slds-has-submenu" role="presentation">
              <a
                role="menuitem"
                href="javascript:void(0);"
                aria-haspopup="true"
                aria-expanded="true"
                tabindex="-1"
              >
                <span class="slds-truncate" title="Menu Item Three">
                  Menu Item Three
                </span>
                <svg
                  class="slds-icon slds-icon_x-small slds-icon-text-default slds-m-left_small slds-shrink-none"
                  aria-hidden="true"
                >
                  <use
                    xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"
                  ></use>
                </svg>
              </a>
              <div
                class="slds-dropdown slds-dropdown_submenu slds-dropdown_submenu-right"
              >
                <ul
                  class="slds-dropdown__list"
                  role="menu"
                  aria-label="Menu Item Three"
                >
                  <li class="slds-dropdown__item" role="presentation">
                    <a href="javascript:void(0);" role="menuitem" tabindex="0">
                      <span class="slds-truncate" title="Submenu Item One">
                        Submenu Item One
                      </span>
                    </a>
                  </li>
                  <li class="slds-dropdown__item" role="presentation">
                    <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                      <span class="slds-truncate" title="Submenu Item Two">
                        Submenu Item Two
                      </span>
                    </a>
                  </li>
                  <li class="slds-dropdown__item" role="presentation">
                    <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                      <span class="slds-truncate" title="Submenu Item Three">
                        Submenu Item Three
                      </span>
                    </a>
                  </li>
                  <li class="slds-has-divider_top-space" role="separator"></li>
                  <li class="slds-dropdown__item" role="presentation">
                    <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                      <span class="slds-truncate" title="Submenu Item Four">
                        Submenu Item Four
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Item selected',
    () => `
    <div class="ui-menu">
      <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <button
          class="ui-menu__button slds-button slds-button_icon"
          aria-haspopup="true"
          title="Show More"
        >
          <svg class="slds-button__icon" aria-hidden="true">
            <use
              xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"
            ></use>
          </svg>
          <span class="slds-assistive-text">Show More</span>
        </button>
        <div class="slds-dropdown slds-dropdown_left slds-dropdown_small">
          <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
            <li class="slds-dropdown__item slds-is-selected" role="presentation">
              <a
                href="javascript:void(0);"
                role="menuitemcheckbox"
                aria-checked="true"
                tabindex="0"
              >
                <span class="slds-truncate" title="Menu Item One">
                  <svg
                    class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"
                    ></use>
                  </svg>
                  Menu Item One
                </span>
              </a>
            </li>
            <li class="slds-dropdown__item" role="presentation">
              <a
                href="javascript:void(0);"
                role="menuitemcheckbox"
                aria-checked="false"
                tabindex="-1"
              >
                <span class="slds-truncate" title="Menu Item Two">
                  <svg
                    class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"
                    ></use>
                  </svg>
                  Menu Item Two
                </span>
              </a>
            </li>
            <li class="slds-dropdown__item" role="presentation">
              <a
                href="javascript:void(0);"
                role="menuitemcheckbox"
                aria-checked="false"
                tabindex="-1"
              >
                <span class="slds-truncate" title="Menu Item Three">
                  <svg
                    class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"
                    ></use>
                  </svg>
                  Menu Item Three
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'With icons on both sides of item',
    () => `
    <div class="ui-menu">
      <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <button
          class="ui-menu__button slds-button slds-button_icon"
          aria-haspopup="true"
          title="Show More"
        >
          <svg class="slds-button__icon" aria-hidden="true">
            <use
              xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"
            ></use>
          </svg>
          <span class="slds-assistive-text">Show More</span>
        </button>
        <div class="slds-dropdown slds-dropdown_left slds-dropdown_small">
          <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
            <li class="slds-dropdown__item slds-is-selected" role="presentation">
              <a
                href="javascript:void(0);"
                role="menuitemcheckbox"
                aria-checked="true"
                tabindex="0"
              >
                <span class="slds-truncate" title="Table View">
                  <svg
                    class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"
                    ></use>
                  </svg>
                  Menu Item One
                </span>
                <svg
                  class="slds-icon slds-icon_x-small slds-icon-text-default slds-m-left_small slds-shrink-none"
                  aria-hidden="true"
                >
                  <use
                    xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#apps"
                  ></use>
                </svg>
              </a>
            </li>
            <li class="slds-dropdown__item" role="presentation">
              <a
                href="javascript:void(0);"
                role="menuitemcheckbox"
                aria-checked="false"
                tabindex="-1"
              >
                <span class="slds-truncate" title="Kanban Board">
                  <svg
                    class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"
                    ></use>
                  </svg>
                  Menu Item Two
                </span>
              </a>
            </li>
            <li class="slds-dropdown__item" role="presentation">
              <a
                href="javascript:void(0);"
                role="menuitemcheckbox"
                aria-checked="false"
                tabindex="-1"
              >
                <span class="slds-truncate" title="List View">
                  <svg
                    class="slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"
                    ></use>
                  </svg>
                  Menu Item Three
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `
  );
