import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Global Navigation', module)
  .add(
    'Logged in (v2)',
    () => `
    <div class="ui-global-navigation">
      <div class="ui-global-navigation__inner-wrap">
        <h1 class="ui-global-navigation__title">
          <img
            class="ui-global-navigation__title-icon"
            src="/assets/svg/difc-diamond.svg"
            alt="DIFC"
          />
          <span class="ui-global-navigation__title-text">One DIFC</span>
        </h1>

        <div class="ui-global-navigation__content">
          <div class="ui-global-navigation__content-col">
            <div class="ui-global-navigation__user">
              <a
                class="ui-global-navigation__user-link ui-global-navigation__link"
                href="#"
              >
                <span class="ui-global-navigation__user-details">
                  <span class="ui-global-navigation__user-details-company">
                    ABC Corp
                  </span>
                  <span class="ui-global-navigation__user-details-name">
                    Rihanna Gopal
                  </span>
                </span>
                <span class="ui-global-navigation__user-avatar">
                  <img
                    src="/assets/images/rihanna-gopal.jpg"
                    alt="avatar image"
                    class="ui-global-navigation__avatar icon-image"
                  />
                </span>
              </a>

              <!-- ui-menu -->
              <div class="ui-menu">
                <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
                  <button
                    class="ui-menu__button slds-button slds-button_icon"
                    aria-haspopup="true"
                    title="Show More"
                  >
                    <img class="ui-icon" src="/assets/svg/arrow-down-white.svg" />
                    <span class="slds-assistive-text">Show More</span>
                  </button>
                  <div class="slds-dropdown slds-dropdown_right">
                    <ul
                      class="slds-dropdown__list"
                      role="menu"
                      aria-label="Show More"
                    >
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="javascript:void(0);" role="menuitem" tabindex="0">
                          <span class="slds-truncate" title="Menu Item One">
                            My Home
                          </span>
                        </a>
                      </li>
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                          <span class="slds-truncate" title="Menu Item Two">
                            Entity profile
                          </span>
                        </a>
                      </li>
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                          <span class="slds-truncate" title="Menu Item Three">
                            Team and profile
                          </span>
                        </a>
                      </li>
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                          <span class="slds-truncate" title="Menu Item Four">
                            Account settings
                          </span>
                        </a>
                      </li>
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                          <span class="slds-truncate" title="Menu Item Four">
                            Help and feedback
                          </span>
                        </a>
                      </li>
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                          <span class="slds-truncate" title="Menu Item Four">
                            Log out
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- end ui-menu -->
            </div>

            <button
              class="ui-global-navigation__button ui-global-navigation__action-button ui-global-navigation__button--icon"
            >
              <svg
                class="slds-button__icon slds-button__icon_large"
                aria-hidden="true"
              >
                <use
                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#notification"
                ></use>
              </svg>
              <span class="slds-assistive-text">no new notifications</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Logged in (v2) with context menu',
    () => `
    <div class="ui-global-navigation">
      <div class="ui-global-navigation__inner-wrap">
        <h1 class="ui-global-navigation__title">
          <img
            class="ui-global-navigation__title-icon"
            src="/assets/svg/difc-diamond.svg"
            alt="DIFC"
          />
          <span class="ui-global-navigation__title-text">One DIFC</span>
        </h1>

        <div class="ui-global-navigation__content">
          <div class="ui-global-navigation__content-col">
            <div class="ui-global-navigation__user">
              <a
                class="ui-global-navigation__user-link ui-global-navigation__link"
                href="#"
              >
                <span class="ui-global-navigation__user-details">
                  <span class="ui-global-navigation__user-details-company">
                    ABC Corp
                  </span>
                  <span class="ui-global-navigation__user-details-name">
                    Rihanna Gopal
                  </span>
                </span>
                <span class="ui-global-navigation__user-avatar">
                  <img
                    src="/assets/images/rihanna-gopal.jpg"
                    alt="avatar image"
                    class="ui-global-navigation__avatar icon-image"
                  />
                </span>
              </a>

              <!-- ui-menu -->
              <div class="ui-menu">
                <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
                  <button
                    class="ui-menu__button slds-button slds-button_icon"
                    aria-haspopup="true"
                    title="Show More"
                  >
                    <img class="ui-icon" src="/assets/svg/arrow-down-white.svg" />
                    <span class="slds-assistive-text">Show More</span>
                  </button>
                  <div class="slds-dropdown slds-dropdown_right">
                    <ul
                      class="slds-dropdown__list"
                      role="menu"
                      aria-label="Show More"
                    >
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="javascript:void(0);" role="menuitem" tabindex="0">
                          <span class="slds-truncate" title="Menu Item One">
                            My Home
                          </span>
                        </a>
                      </li>
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                          <span class="slds-truncate" title="Menu Item Two">
                            Entity profile
                          </span>
                        </a>
                      </li>
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                          <span class="slds-truncate" title="Menu Item Three">
                            Team and profile
                          </span>
                        </a>
                      </li>
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                          <span class="slds-truncate" title="Menu Item Four">
                            Account settings
                          </span>
                        </a>
                      </li>
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                          <span class="slds-truncate" title="Menu Item Four">
                            Help and feedback
                          </span>
                        </a>
                      </li>
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                          <span class="slds-truncate" title="Menu Item Four">
                            Log out
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- end ui-menu -->
            </div>

            <button
              class="ui-global-navigation__button ui-global-navigation__action-button ui-global-navigation__button--icon"
            >
              <svg
                class="slds-button__icon slds-button__icon_large"
                aria-hidden="true"
              >
                <use
                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#notification"
                ></use>
              </svg>
              <span class="slds-assistive-text">no new notifications</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Logged in (v2) with badge',
    () => `
    <div class="ui-global-navigation">
      <div class="ui-global-navigation__inner-wrap">
        <h1 class="ui-global-navigation__title">
          <img
            class="ui-global-navigation__title-icon"
            src="/assets/svg/difc-diamond.svg"
            alt="DIFC"
          />
          <span class="ui-global-navigation__title-text">One DIFC</span>
        </h1>

        <div class="ui-global-navigation__content">
          <div class="ui-global-navigation__content-col">
            <div class="ui-global-navigation__user">
              <a
                class="ui-global-navigation__user-link ui-global-navigation__link"
                href="#"
              >
                <span class="ui-global-navigation__user-details">
                  <span class="ui-global-navigation__user-details-company">
                    ABC Corp
                  </span>
                  <span class="ui-global-navigation__user-details-name">
                    Rihanna Gopal
                  </span>
                </span>
                <span class="ui-global-navigation__user-avatar">
                  <img
                    src="/assets/images/rihanna-gopal.jpg"
                    alt="avatar image"
                    class="ui-global-navigation__avatar icon-image"
                  />
                </span>
              </a>

              <!-- ui-menu -->
              <div class="ui-menu">
                <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
                  <button
                    class="ui-menu__button slds-button slds-button_icon"
                    aria-haspopup="true"
                    title="Show More"
                  >
                    <img class="ui-icon" src="/assets/svg/arrow-down-white.svg" />
                    <span class="slds-assistive-text">Show More</span>
                  </button>
                  <div class="slds-dropdown slds-dropdown_right">
                    <ul
                      class="slds-dropdown__list"
                      role="menu"
                      aria-label="Show More"
                    >
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="javascript:void(0);" role="menuitem" tabindex="0">
                          <span class="slds-truncate" title="Menu Item One">
                            My Home
                          </span>
                        </a>
                      </li>
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                          <span class="slds-truncate" title="Menu Item Two">
                            Entity profile
                          </span>
                        </a>
                      </li>
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                          <span class="slds-truncate" title="Menu Item Three">
                            Team and profile
                          </span>
                        </a>
                      </li>
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                          <span class="slds-truncate" title="Menu Item Four">
                            Account settings
                          </span>
                        </a>
                      </li>
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                          <span class="slds-truncate" title="Menu Item Four">
                            Help and feedback
                          </span>
                        </a>
                      </li>
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="javascript:void(0);" role="menuitem" tabindex="-1">
                          <span class="slds-truncate" title="Menu Item Four">
                            Log out
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- end ui-menu -->
            </div>

            <button
              class="ui-global-navigation__button ui-global-navigation__action-button ui-global-navigation__button--icon"
            >
              <svg
                class="slds-button__icon slds-button__icon_large"
                aria-hidden="true"
              >
                <use
                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#notification"
                ></use>
              </svg>
              <span class="slds-assistive-text">no new notifications</span>
              <span class="ui-badge ui-badge--red slds-badge">142</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Logged out (v2)',
    () => `
    <div class="ui-global-navigation">
      <div class="ui-global-navigation__inner-wrap">
        <h1 class="ui-global-navigation__title">
          <img
            class="ui-global-navigation__title-icon"
            src="/assets/svg/difc-diamond.svg"
            alt="DIFC"
          />
          <span class="ui-global-navigation__title-text">One DIFC</span>
        </h1>

        <div class="ui-global-navigation__content">
          <div class="ui-global-navigation__content-col">
            <div class="ui-global-navigation__action">
              <div class="ui-global-navigation__user">
                <a href="#" class="ui-global-navigation__link">Register</a>
                <a
                  href="#"
                  class="ui-button ui-button--primary ui-button--primary-outline"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="ui-global-navigation__menu ui-global-navigation__menu--hidden">
        <ul class="ui-global-navigation__menu-list">
          <li class="ui-global-navigation__menu-item">
            <a class="ui-global-navigation__menu-link" href="#">Menu item</a>
          </li>
          <li class="ui-global-navigation__menu-item">
            <a
              class="ui-global-navigation__menu-link ui-global-navigation__menu-link--selected"
              href="#"
            >
              Menu item
            </a>
          </li>
          <li class="ui-global-navigation__menu-item">
            <a class="ui-global-navigation__menu-link" href="#">Menu item</a>
          </li>
          <li class="ui-global-navigation__menu-item">
            <a class="ui-global-navigation__menu-link" href="#">Menu item</a>
          </li>
        </ul>
      </div>
    </div>
    `
  )
  .add(
    'Logged in',
    () => `
    <div class="ui-global-navigation">
      <div class="ui-global-navigation__inner-wrap">
        <h1 class="ui-global-navigation__title">
          <img
            class="ui-global-navigation__title-icon"
            src="/assets/svg/difc-diamond.svg"
            alt="DIFC"
          />
          <span class="ui-global-navigation__title-text">One DIFC</span>
        </h1>

        <div class="ui-global-navigation__content">
          <div class="ui-global-navigation__content-col">
            <div class="ui-global-navigation__action">
              <div class="ui-global-navigation__action--private">
                <button
                  class="ui-global-navigation__button ui-global-navigation__action-button ui-global-navigation__button--icon"
                >
                  <svg
                    class="slds-button__icon slds-button__icon_large"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#notification"
                    ></use>
                  </svg>
                  <span class="slds-assistive-text">no new notifications</span>
                </button>
              </div>
            </div>

            <div class="ui-global-navigation__user">
              <a 
                class="ui-global-navigation__user-link ui-global-navigation__link" href="#"
              >
                <span class="ui-global-navigation__user-details">
                  <span class="ui-global-navigation__user-details-company">
                    ABC Corp
                  </span>
                  <span class="ui-global-navigation__user-details-name">
                    Rihanna Gopal
                  </span>
                </span>
                <span class="ui-global-navigation__user-avatar">
                <img
                  src="/assets/images/rihanna-gopal.jpg"
                  alt="avatar image"
                  class="ui-global-navigation__avatar icon-image"
                />
                </span>
              </a>
            </div>

            <!-- HAMBURGERS PLUGIN -->
            <button
              class="ui-global-navigation__button ui-global-navigation__button--menu hamburger hamburger--collapse"
              type="button"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
            <!-- HAMBURGERS PLUGIN -->
          </div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Logged in and expanded with menu',
    () => `
    <div class="ui-global-navigation">
      <div class="ui-global-navigation__inner-wrap">
        <h1 class="ui-global-navigation__title">
          <img
            class="ui-global-navigation__title-icon"
            src="/assets/svg/difc-diamond.svg"
            alt="DIFC"
          />
          <span class="ui-global-navigation__title-text">One DIFC</span>
        </h1>

        <div class="ui-global-navigation__content">
          <div class="ui-global-navigation__content-col">
            <div class="ui-global-navigation__action">
              <div class="ui-global-navigation__action--private">
                <button
                  class="ui-global-navigation__button ui-global-navigation__action-button ui-global-navigation__button--icon"
                >
                  <svg
                    class="slds-button__icon slds-button__icon_large"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#notification"
                    ></use>
                  </svg>
                  <span class="slds-assistive-text">no new notifications</span>
                </button>
              </div>
            </div>

            <div class="ui-global-navigation__user">
              <a
                class="ui-global-navigation__user-link ui-global-navigation__link"
                href="#"
              >
                <span class="ui-global-navigation__user-details">
                  <span class="ui-global-navigation__user-details-company">
                    ABC Corp
                  </span>
                  <span class="ui-global-navigation__user-details-name">
                    Rihanna Gopal
                  </span>
                </span>
                <span class="ui-global-navigation__user-avatar">
                <img
                  src="/assets/images/rihanna-gopal.jpg"
                  alt="avatar image"
                  class="ui-global-navigation__avatar icon-image"
                />
                </span>
              </a>
            </div>

            <!-- HAMBURGERS PLUGIN -->
            <button
              class="ui-global-navigation__button ui-global-navigation__button--menu hamburger hamburger--collapse"
              type="button"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
            <!-- HAMBURGERS PLUGIN -->
          </div>
        </div>
      </div>

      <div class="ui-global-navigation__menu">
        <ul class="ui-global-navigation__menu-list">
          <li class="ui-global-navigation__menu-item">
            <a class="ui-global-navigation__menu-link" href="#">Menu item</a>
          </li>
          <li class="ui-global-navigation__menu-item">
            <a
              class="ui-global-navigation__menu-link ui-global-navigation__menu-link--selected"
              href="#"
            >
              Menu item
            </a>
          </li>
          <li class="ui-global-navigation__menu-item">
            <a class="ui-global-navigation__menu-link" href="#">Menu item</a>
          </li>
          <li class="ui-global-navigation__menu-item">
            <a class="ui-global-navigation__menu-link" href="#">Menu item</a>
          </li>
        </ul>
      </div>
    </div>
    `
  )
  .add(
    'Logged in smaller height',
    () => `
    <div class="ui-global-navigation">
      <div class="ui-global-navigation__inner-wrap">
        <h1 class="ui-global-navigation__title ui-global-navigation__title--compact">
          <img
            class="ui-global-navigation__title-icon"
            src="/assets/svg/difc-diamond.svg"
            alt="DIFC"
          />
          <span class="ui-global-navigation__title-text">One DIFC</span>
        </h1>

        <div class="ui-global-navigation__content">
          <div class="ui-global-navigation__content-col">
            <div class="ui-global-navigation__user">
              <a href="#" class="ui-global-navigation__link">Register</a>
              <a href="#" class="ui-global-navigation__link">Login</a>
            </div>
            
            <!-- HAMBURGERS PLUGIN -->
            <button
              class="ui-global-navigation__button ui-global-navigation__button--menu hamburger hamburger--collapse"
              type="button"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
            <!-- HAMBURGERS PLUGIN -->
          </div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Logged out',
    () => `
    <div class="ui-global-navigation">
      <div class="ui-global-navigation__inner-wrap">
        <h1 class="ui-global-navigation__title">
          <img
            class="ui-global-navigation__title-icon"
            src="/assets/svg/difc-diamond.svg"
            alt="DIFC"
          />
          <span class="ui-global-navigation__title-text">One DIFC</span>
        </h1>

        <div class="ui-global-navigation__content">
          <div class="ui-global-navigation__content-col">
            <div class="ui-global-navigation__user">
              <a href="#" class="ui-global-navigation__link">Register</a>
              <a href="#" class="ui-global-navigation__link">Login</a>
            </div>
            
            <!-- HAMBURGERS PLUGIN -->
            <button
              class="ui-global-navigation__button ui-global-navigation__button--menu hamburger hamburger--collapse"
              type="button"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
            <!-- HAMBURGERS PLUGIN -->
          </div>
        </div>
      </div>
    </div>
    `
  );
