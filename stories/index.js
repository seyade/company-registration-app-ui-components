import { storiesOf } from '@storybook/html';
import { action, configureActions } from '@storybook/addon-actions';
import '../dist/main.css';

storiesOf('DIFC Components/Avatar', module).add(
  'Avatar',
  () => `
  <img 
    src="/assets/svg/avatar-placeholder.svg" 
    alt="avatar image" 
    class="main-navigation__user-avatar-image icon-image" 
  />
  `
);

storiesOf('DIFC Components/Buttons', module)
  .add(
    'Default',
    () => `
    <div class="ui-button-group">
      <button class="ui-button ui-button--default">Default</button>
    </div>
    `
  )
  .add(
    'Primary',
    () => `
    <div class="ui-button-group">
      <button class="ui-button ui-button--primary">Primary</button>
    </div>
    `
  )
  .add(
    'Destructive',
    () => `
    <div class="ui-button-group">
      <button class="ui-button ui-button--destructive">Destructive</button>
    </div>
    `
  )
  .add(
    'Disabled',
    () => `
    <div class="ui-button-group">
      <button class="ui-button ui-button--disabled" disabled>Disabled</button>
    </div>
    `
  )
  .add(
    'Upload',
    () => `
    <div class="ui-button-group">
      <button class="ui-button ui-button--upload">
        <img
          src="/assets/svg/plus.svg"
          alt=""
        />
        <span>Upload</span>
      </button>
    </div>
    `
  )
  .add(
    'Upload disabled',
    () => `
    <div class="ui-button-group">
      <button class="ui-button ui-button--upload-disabled" disabled>
        <img
          src="/assets/svg/plus.svg"
          alt=""
        />
        <span>Upload</span>
      </button>
    </div>
    `
  )
  .add(
    'Not selected',
    () => `
    <div class="ui-button-group">
      <button class="ui-button ui-button--not-selected">
        <img
          src="/assets/svg/plus-blue.svg"
          alt=""
        />
        <span>Follow</span>
      </button>
    </div>
    `
  )
  .add(
    'Selected',
    () => `
    <div class="ui-button-group">
      <button class="ui-button ui-button--selected">
        <img
          src="/assets/svg/tick-blue.svg"
          alt=""
        />
        <span>Following</span>
      </button>
    </div>
    `
  );

storiesOf('DIFC Components/Cards', module)
  .add(
    'Card Base',
    () => `
    <div class="ui-card" style="min-height:100px;width:400px;">
      
    </div>
  `
  )
  .add(
    'Card Base With Content',
    () => `
    <div class="ui-card" style="min-height:100px;width:320px;">
      <div class="ui-card__content ui-card__content--padding-med">
        <span class="ui-card__title">Card heading herer and also on this second line if needed...</span>
        <p class="ui-card__paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia magni repellat nesciunt
          sapiente eius eum commodi
          illo voluptates vel ratione consectetur, laborum earum blanditiis officiis, adipisci cumque. Fuga, illum
          molestiae!
        </p>

        <p class="ui-card__paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia magni repellat nesciunt
          sapiente eius eum commodi
          illo voluptates vel ratione consectetur, laborum earum blanditiis officiis, adipisci cumque. Fuga, illum
          molestiae!
        </p>
      </div>
    </div>
  `
  )
  .add(
    'Card Guide',
    () => `
    <div 
      class="ui-card ui-card--light-blue"
      style="min-height:100px;width:320px;"
    >
      <div class="ui-card__header">
        <span class="ui-card__header-title">
          Pathway Guide
        </span>
        <span class="ui-card__header-subtitle">
          Section One: Prepare company documents
        </span>
      </div>
      <div class="ui-card__content ui-card__content--padding-med">
        <p class="ui-card__paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia magni repellat nesciunt
          sapiente eius eum commodi
          illo voluptates vel ratione consectetur, laborum earum blanditiis officiis, adipisci cumque. Fuga, illum
          molestiae!
        </p>
      </div>
    </div>
  `
  )
  .add(
    'Card Next Steps',
    () => `
    <div
      class="ui-card ui-card--very-light-blue ui-card--next-steps"
      style="min-height:100px;width:456px;"
    >
      <div class="ui-card__content">
        <span class="ui-card__title">Next Steps</span>
        <p class="ui-card__subtitle">Sed do eiusm Company Profile. Here are your next 3 steps</p>
        <ul class="next-steps__list">
          <li class="next-steps__item">
            <a class="next-steps__item-link" href="#">
              <span class="next-steps__item-description">
                Create your busniess structure
              </span>
              <span class="next-steps__item-info">4 questions</span>
            </a>
          </li>
          <li class="next-steps__item">
            <a class="next-steps__item-link" href="#">
              <span class="next-steps__item-description">
                Reserve your company name
              </span>
              <span class="next-steps__item-info">10 minutes</span>
            </a>
          </li>
          <li class="next-steps__item">
            <a class="next-steps__item-link" href="#">
              <span class="next-steps__item-description">
                Fill in company details
              </span>
              <span class="next-steps__item-info">12 questions</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="ui-card__action">
        <div class="ui-button-group ui-button-group--right">
          <a class="ui-button ui-button--default">Continue</a>
        </div>
      </div>
    </div>
  `
  )
  .add(
    'Card Marketing',
    () => `
    <div
      class="ui-card ui-card--marketing"
      style="min-width:800px;"
    >
      <button class="ui-button ui-button--close">
        <span class="ui-button__text ui-button__text--hidden">Close</span>
        <img
          class="ui-button__icon--close icon-image"
          src="/assets/svg/close-dark.svg"
          alt="cross"
        />
      </button>

      <div class="ui-card__content ui-card__content--padding-med">
        <h2 class="ui-card__title">Marketing service information here </h2>
        <div class="ui-card__content-section">
          <p class="ui-card__paragraph">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venit enim an enim la enim  enimt tempor labore enim.
          </p>
          <div class="ui-card__action">
            <a href="#" class="ui-button ui-button--primary">
              Call to action here
            </a>
          </div>
        </div>
        
      </div>
    </div>
  `
  )
  .add(
    'Card Marketing without button',
    () => `
    <div
      class="ui-card ui-card--marketing"
      style="min-width:800px;"
    >
      <button class="ui-button ui-button--close">
        <span class="ui-button__text ui-button__text--hidden">Close</span>
        <img
          class="ui-button__icon--close icon-image"
          src="/assets/svg/close-dark.svg"
          alt="cross"
        />
      </button>

      <div class="ui-card__content ui-card__content--padding-med">
        <h2 class="ui-card__title">Marketing service information here </h2>
        <div class="ui-card__content-section">
          <p class="ui-card__paragraph">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venit enim an enim la enim  enimt tempor labore enim.
          </p>
        </div>
      </div>
    </div>
  `
  )
  .add(
    'Card Pathway',
    () => `
    <div
      class="ui-card ui-card--pathway"
    >
      <div class="ui-card__content ui-card__content--padding-med">
        <div class="ui-card__content--head">
          <h2 class="ui-card__title">
            Heading of section here and here but only on one...
          </h2>
          <span>2 mins</span>
        </div>
        <div class="ui-card__content--body">
          <p class="ui-card__paragraph">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venit enim an enim la enim  enimt tempor labore enim.
          </p>
        </div>

        <div class="ui-card__action ui-card__action--spread">
          <button class="ui-button ui-button--toggle">
            Show details
            <img
              class="pw-icon"
              src="/assets/svg/arrow-down.svg"
            />
          </button>
          <a href="#" class="ui-button ui-button--primary">Start Path</a>
        </div>
      </div>
    </div>
  `
  )
  .add(
    'Card With Header and Button',
    () => `
    <div
      class="ui-card"
      style="width:320px;"
    >
      <div class="ui-card__content ui-card__content--padding-med">
        <span class="ui-card__title">
          <img
            class="pw-icon"
            src="/assets/svg/contact.svg"
          />
          <span class="ui-card__title-text">Contact details</span>
          <button 
            class="ui-button ui-button--tertiary"
            style="min-width:64px;position:absolute;right:0;"
          >
            New
          </button>
        </span>
      </div>
    </div>
  `
  )
  .add(
    'Card With Related List',
    () => `
    <div
      class="ui-card"
      style="width:320px;"
    >
      <div class="ui-card__content">
        <span class="ui-card__title">
          <img
            class="ui-icon"
            src="/assets/svg/contact.svg"
          />
          <span class="ui-card__title-text">
            Contacts
            (<span class="">3</span>)
          </span>
          <button 
            class="ui-button ui-button--tertiary"
            style="min-width:64px;position:absolute;right:0;"
          >
            New
          </button>
        </span>
        <div class="ui-accordion">
          <ul>
            <li class="slds-accordion__list-item">
              <section class="slds-accordion__section slds-is-open">
                <div class="slds-accordion__summary">
                  <h3 class="slds-accordion__summary-heading">
                    <button
                      aria-controls="accordion-details-01"
                      aria-expanded="true"
                      class="slds-button slds-button_reset slds-accordion__summary-action"
                    >
                      <img src="/assets/svg/contact-light.svg" />
                      <span class="ui-accordion__title slds-truncate">
                        Related Record Title 2
                      </span>
                      <img
                        class="ui-icon"
                        src="/assets/svg/arrow-down.svg"
                      />
                    </button>
                  </h3>
                </div>
                <div
                  aria-hidden="false"
                  class="slds-accordion__content"
                  id="accordion-details-01"
                >
                  <dl>
                    <dt>Label:</dt>
                      <dd>Description for first label</dd>
                    <dt>Label 2:</dt>
                      <dd>Description for second label</dd>
                  </dl>
                </div>
              </section>
            </li>
            <li class="slds-accordion__list-item">
              <section class="slds-accordion__section slds-is-open">
                <div class="slds-accordion__summary">
                  <h3 class="slds-accordion__summary-heading">
                    <button
                      aria-controls="accordion-details-01"
                      aria-expanded="true"
                      class="slds-button slds-button_reset slds-accordion__summary-action"
                    >
                      <img src="/assets/svg/contact-light.svg" />
                      <span class="ui-accordion__title slds-truncate">
                        Related Record Title 2
                      </span>
                      <img
                        class="ui-icon"
                        src="/assets/svg/arrow-down.svg"
                      />
                    </button>
                  </h3>
                </div>
                <div
                  aria-hidden="false"
                  class="slds-accordion__content"
                  id="accordion-details-01"
                >
                  <dl>
                    <dt>Label:</dt>
                      <dd>Description for first label</dd>
                    <dt>Label 2:</dt>
                      <dd>Description for second label</dd>
                  </dl>
                </div>
              </section>
            </li>
            <li class="slds-accordion__list-item">
              <section class="slds-accordion__section slds-is-open">
                <div class="slds-accordion__summary">
                  <h3 class="slds-accordion__summary-heading">
                    <button
                      aria-controls="accordion-details-01"
                      aria-expanded="true"
                      class="slds-button slds-button_reset slds-accordion__summary-action"
                    >
                      <img src="/assets/svg/contact-light.svg" />
                      <span class="ui-accordion__title slds-truncate">
                        Related Record Title 2
                      </span>
                      <img
                        class="ui-icon"
                        src="/assets/svg/arrow-down.svg"
                      />
                    </button>
                  </h3>
                </div>
                <div
                  aria-hidden="false"
                  class="slds-accordion__content"
                  id="accordion-details-01"
                >
                  <dl>
                    <dt>Label:</dt>
                      <dd>Description for first label</dd>
                    <dt>Label 2:</dt>
                      <dd>Description for second label</dd>
                  </dl>
                </div>
              </section>
            </li>
          </ul>
        </div>
        <div class="ui-card__action">
          <button class="ui-accordion__button ui-button ui-button--default">See more</button>
        </div>
      </div>
    </div>
  `
  );

storiesOf('DIFC Components/Global Navigation', module)
  .add(
    'Base',
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
              <button
                class="ui-global-navigation__button ui-global-navigation__button--search"
              >
                <img
                  src="/assets/svg/magnifier-icon.svg"
                  alt="search icon"
                  class="search-bar__icon-image icon-image"
                />
              </button>
            </div>
            <div class="ui-global-navigation__user">
              <a href="#" class="ui-global-navigation__link">Register</a>
              <a href="#" class="ui-global-navigation__link">Login</a>
            </div>
            <button 
              class="ui-global-navigation__button ui-global-navigation__button--menu"
            >
              <img
                src="/assets/svg/hamburger-line.svg"
                alt="notification bell"
                class="ui-global-navigation__button-image icon-image"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  `
  )
  .add(
    'Logged In',
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
                  class="ui-global-navigation__button ui-global-navigation__button--icon"
                >
                  <img
                    src="/assets/svg/answer-public.svg"
                    alt="search icon"
                    class="search-bar__icon-image icon-image"
                  />
                </button>
                <button
                  class="ui-global-navigation__button ui-global-navigation__button--icon"
                >
                  <img
                    src="/assets/svg/announcement.svg"
                    alt="search icon"
                    class="search-bar__icon-image icon-image"
                  />
                </button>
              </div>
              
              <button
                class="ui-global-navigation__button ui-global-navigation__button--search"
              >
                <img
                  src="/assets/svg/magnifier-icon.svg"
                  alt="search icon"
                  class="search-bar__icon-image icon-image"
                />
              </button>
            </div>

            <div class="ui-global-navigation__user">
              <a 
                class="ui-global-navigation__user-link ui-global-navigation__link" href="#"
              >
                <span class="ui-global-navigation__user-name">Company name</span>
                <span class="ui-global-navigation__user-avatar">
                  <img
                    src="/assets/svg/avatar-placeholder.svg"
                    alt="avatar image"
                    class="ui-global-navigation__button-image icon-image"
                  />
                </span>
              </a>
            </div>

            <button 
              class="ui-global-navigation__button ui-global-navigation__button--menu"
            >
              <img
                src="/assets/svg/hamburger-line.svg"
                alt="notification bell"
                class="ui-global-navigation__button-image icon-image"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  `
  )
  .add(
    'Logged In Expanded with Menu',
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
                  class="ui-global-navigation__button ui-global-navigation__button--icon"
                >
                  <img
                    src="/assets/svg/answer-public.svg"
                    alt="search icon"
                    class="search-bar__icon-image icon-image"
                  />
                </button>
                <button
                  class="ui-global-navigation__button ui-global-navigation__button--icon"
                >
                  <img
                    src="/assets/svg/announcement.svg"
                    alt="search icon"
                    class="search-bar__icon-image icon-image"
                  />
                </button>
              </div>

              <button
                class="ui-global-navigation__button ui-global-navigation__button--search"
              >
                <img
                  src="/assets/svg/magnifier-icon.svg"
                  alt="search icon"
                  class="search-bar__icon-image icon-image"
                />
              </button>
            </div>

            <div class="ui-global-navigation__user">
              <a
                class="ui-global-navigation__user-link ui-global-navigation__link"
                href="#"
              >
                <span class="ui-global-navigation__user-name">Company name</span>
                <span class="ui-global-navigation__user-avatar">
                  <img
                    src="/assets/svg/avatar-placeholder.svg"
                    alt="avatar image"
                    class="ui-global-navigation__button-image icon-image"
                  />
                </span>
              </a>
            </div>

            <button 
              class="ui-global-navigation__button ui-global-navigation__button--menu ui-global-navigation__button--hidden"
            >
              <img
                src="/assets/svg/hamburger-line.svg"
                alt="notification bell"
                class="ui-global-navigation__button-image icon-image"
              />
            </button>
            <button
              class="ui-global-navigation__button ui-global-navigation__button--menu-close"
            >
              <img
                src="/assets/svg/cross-line.svg"
                alt="notification bell"
                class="ui-global-navigation__button-image icon-image"
              />
            </button>
          </div>
        </div>

        <div class="ui-global-navigation__search-bar">
          <div class="ui-global-navigation__search-bar-action">
            <img
              src="/assets/svg/magnifier-icon.svg"
              alt="search icon"
              class="search-bar__icon-image icon-image"
            />
            <input
              class="ui-global-navigation__search-bar-input"
              placeholder="Search item here with csv, for data entry"
              type="text"
            />
            <button
              class="ui-global-navigation__button ui-global-navigation__button--search-close"
            >
              <img
                src="/assets/svg/cross-line.svg"
                alt="search icon"
                class="search-bar__icon-image icon-image"
              />
            </button>
          </div>
          <div class="ui-global-navigation__search-bar-results">
            <ul class="ui-global-navigation__search-bar-results-list">
              <li class="ui-global-navigation__search-bar-results-link">
                <a href="#">Search item article here</a>
              </li>
              <li class="ui-global-navigation__search-bar-results-link">
                <a href="#">Search you are looking for here</a>
              </li>
              <li class="ui-global-navigation__search-bar-results-link">
                <a href="#">Search item article here</a>
              </li>
              <li class="ui-global-navigation__search-bar-results-link">
                <a href="#">Search you are looking for here</a>
              </li>
              <li class="ui-global-navigation__search-bar-results-link">
                <a href="#">Search item article here</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="ui-global-navigation__menu">
        <ul class="ui-global-navigation__menu-list">
          <li class="ui-global-navigation__menu-item"><a href="#">Menu item</a></li>
          <li class="ui-global-navigation__menu-item"><a href="#">Menu item</a></li>
          <li class="ui-global-navigation__menu-item"><a href="#">Menu item</a></li>
          <li class="ui-global-navigation__menu-item"><a href="#">Menu item</a></li>
        </ul>
      </div>
    </div>
    `
  )
  .add(
    'Logged In Expanded with Search Bar',
    () => `
    <div class="ui-global-navigation ui-global-navigation--expanded">
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
                  class="ui-global-navigation__button ui-global-navigation__button--icon"
                >
                  <img
                    src="/assets/svg/answer-public.svg"
                    alt="search icon"
                    class="search-bar__icon-image icon-image"
                  />
                </button>
                <button
                  class="ui-global-navigation__button ui-global-navigation__button--icon"
                >
                  <img
                    src="/assets/svg/announcement.svg"
                    alt="search icon"
                    class="search-bar__icon-image icon-image"
                  />
                </button>
              </div>
              
              <button
                class="ui-global-navigation__button ui-global-navigation__button--search"
              >
                <img
                  src="/assets/svg/magnifier-icon.svg"
                  alt="search icon"
                  class="search-bar__icon-image icon-image"
                />
              </button>
            </div>

            <div class="ui-global-navigation__user">
              <a 
                class="ui-global-navigation__user-link ui-global-navigation__link" href="#"
              >
                <span class="ui-global-navigation__user-name">Company name</span>
                <span class="ui-global-navigation__user-avatar">
                  <img
                    src="/assets/svg/avatar-placeholder.svg"
                    alt="avatar image"
                    class="ui-global-navigation__button-image icon-image"
                  />
                </span>
              </a>
            </div>

            <button 
              class="ui-global-navigation__button ui-global-navigation__button--menu"
            >
              <img
                src="/assets/svg/hamburger-line.svg"
                alt="notification bell"
                class="ui-global-navigation__button-image icon-image"
              />
            </button>
          </div>
        </div>

        <div class="ui-global-navigation__search-bar">
          <div class="ui-global-navigation__search-bar-action">
            <img
              src="/assets/svg/magnifier-icon.svg"
              alt="search icon"
              class="search-bar__icon-image icon-image"
            />
            <input
              class="ui-global-navigation__search-bar-input"
              placeholder="Search item here with csv, for data entry"
              type="text"
            />
            <button 
              class="ui-global-navigation__button ui-global-navigation__button--search-close"
            >
              <img
                src="/assets/svg/cross-line.svg"
                alt="search icon"
                class="search-bar__icon-image icon-image"
              />
            </button>
          </div>
          <div class="ui-global-navigation__search-bar-results">
            <ul class="ui-global-navigation__search-bar-results-list">
              <li class="ui-global-navigation__search-bar-results-link">
                <a href="#">Search item article here</a>
              </li>
              <li class="ui-global-navigation__search-bar-results-link">
                <a href="#">Search you are looking for here</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
  );

storiesOf('DIFC Components/Progress Indicators', module)
  .add(
    'Horizontal Base',
    () => `
    <div class="ui-progress-indicator ui-progress-indicator--horizontal">
      <div class="slds-progress">
        <ol class="slds-progress__list">
          <li class="slds-progress__item slds-is-active">
            <button class="slds-button slds-progress__marker" aria-describedby="step-1-tooltip">
              <span class="slds-assistive-text">Step 1 - Active</span>
            </button>
          </li>
          <li class="slds-progress__item">
            <button class="slds-button slds-progress__marker">
              <span class="slds-assistive-text">Step 2 </span>
            </button>
          </li>
          <li class="slds-progress__item">
            <button class="slds-button slds-progress__marker">
              <span class="slds-assistive-text">Step 3 </span>
            </button>
          </li>
          <li class="slds-progress__item">
            <button class="slds-button slds-progress__marker">
              <span class="slds-assistive-text">Step 4 </span>
            </button>
          </li>
          <li class="slds-progress__item">
            <button class="slds-button slds-progress__marker">
              <span class="slds-assistive-text">Step 5 </span>
            </button>
          </li>
        </ol>
        <div class="slds-progress-bar slds-progress-bar_x-small" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" role="progressbar">
          <span class="slds-progress-bar__value" style="width:0%">
            <span class="slds-assistive-text">Progress: 0%</span>
          </span>
        </div>
      </div>
    </div>
  `
  )
  .add(
    'Horizontal Error',
    () => `
    <div class="ui-progress-indicator ui-progress-indicator--horizontal">
      <div class="slds-progress">
        <ol class="slds-progress__list">
          <li class="slds-progress__item slds-is-completed">
            <button class="slds-button slds-button_icon slds-button_icon slds-progress__marker slds-progress__marker_icon" title="Step 1 - Completed">
              <img
                src="/assets/svg/progress-ring-complete.svg"
                alt="complete icon"
                class="icon-image"
              />
              <span class="slds-assistive-text">Step 1 - Completed</span>
            </button>
          </li>
          <li class="slds-progress__item slds-is-completed">
            <button class="slds-button slds-button_icon slds-button_icon slds-progress__marker slds-progress__marker_icon" title="Step 2 - Completed">
              <img
                src="/assets/svg/progress-ring-complete.svg"
                alt="complete icon"
                class="icon-image"
              />
              <span class="slds-assistive-text">Step 2 - Completed</span>
            </button>
          </li>
          <li class="slds-progress__item slds-has-error">
            <button class="slds-button slds-button_icon slds-button_icon slds-progress__marker slds-progress__marker_icon" title="Step 2 - Completed">
              <img
                src="/assets/svg/error.svg"
                alt="complete icon"
                class="icon-image"
              />
              <span class="slds-assistive-text">Step 2 - Completed</span>
            </button>
          </li>
          <li class="slds-progress__item">
            <button class="slds-button slds-progress__marker">
              <span class="slds-assistive-text">Step 4 </span>
            </button>
          </li>
          <li class="slds-progress__item">
            <button class="slds-button slds-progress__marker">
              <span class="slds-assistive-text">Step 5 </span>
            </button>
          </li>
        </ol>
        <div class="slds-progress-bar slds-progress-bar_x-small" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" role="progressbar">
          <span class="slds-progress-bar__value" style="width: 50%">
            <span class="slds-assistive-text">Progress: 50%</span>
          </span>
        </div>
      </div>
    </div>
  `
  )
  .add(
    'Horizontal Next Step',
    () => `
    <div class="ui-progress-indicator ui-progress-indicator--horizontal">
      <div class="slds-progress">
        <ol class="slds-progress__list">
          <li class="slds-progress__item slds-is-completed">
            <button class="slds-button slds-button_icon slds-button_icon slds-progress__marker slds-progress__marker_icon" title="Step 1 - Completed">
              <img
                src="/assets/svg/progress-ring-complete.svg"
                alt="complete icon"
                class="icon-image"
              />
              <span class="slds-assistive-text">Step 1 - Completed</span>
            </button>
          </li>
          <li class="slds-progress__item slds-is-completed">
            <button class="slds-button slds-button_icon slds-button_icon slds-progress__marker slds-progress__marker_icon" title="Step 2 - Completed">
              <img
                src="/assets/svg/progress-ring-complete.svg"
                alt="complete icon"
                class="icon-image"
              />
              <span class="slds-assistive-text">Step 2 - Completed</span>
            </button>
          </li>
          <li class="slds-progress__item slds-is-active">
            <button class="slds-button slds-progress__marker" aria-describedby="step-3-tooltip">
              <span class="slds-assistive-text">Step 3 - Active</span>
            </button>
          </li>
          <li class="slds-progress__item">
            <button class="slds-button slds-progress__marker">
              <span class="slds-assistive-text">Step 4 </span>
            </button>
          </li>
          <li class="slds-progress__item">
            <button class="slds-button slds-progress__marker">
              <span class="slds-assistive-text">Step 5 </span>
            </button>
          </li>
        </ol>
        <div class="slds-progress-bar slds-progress-bar_x-small" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" role="progressbar">
          <span class="slds-progress-bar__value" style="width: 50%">
            <span class="slds-assistive-text">Progress: 50%</span>
          </span>
        </div>
      </div>
    </div>
  `
  )
  .add(
    'Horizontal Tooltip',
    () => `
    <div class="ui-progress-indicator ui-progress-indicator--horizontal">
      <div class="slds-progress">
        <ol class="slds-progress__list">
          <li class="slds-progress__item slds-is-completed">
            <button class="slds-button slds-button_icon slds-button_icon slds-progress__marker slds-progress__marker_icon" title="Step 1 - Completed">
              <img
                src="/assets/svg/progress-ring-complete.svg"
                alt="complete icon"
                class="icon-image"
              />
              <span class="slds-assistive-text">Step 1 - Completed</span>
            </button>
          </li>
          <li class="slds-progress__item slds-is-completed">
            <button class="slds-button slds-button_icon slds-button_icon slds-progress__marker slds-progress__marker_icon" title="Step 2 - Completed">
              <img
                src="/assets/svg/progress-ring-complete.svg"
                alt="complete icon"
                class="icon-image"
              />
              <span class="slds-assistive-text">Step 2 - Completed</span>
            </button>
          </li>
          <li class="slds-progress__item slds-is-active">
            <button class="slds-button slds-progress__marker" aria-describedby="step-3-tooltip">
              <span class="slds-assistive-text">Step 3 - Active</span>
            </button>
          </li>
          <li class="slds-progress__item">
            <button class="slds-button slds-progress__marker">
              <span class="slds-assistive-text">Step 4 </span>
            </button>
          </li>
          <li class="slds-progress__item">
            <button class="slds-button slds-progress__marker">
              <span class="slds-assistive-text">Step 5 </span>
            </button>
          </li>
        </ol>
        <div class="slds-progress-bar slds-progress-bar_x-small" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" role="progressbar">
          <span class="slds-progress-bar__value" style="width:50%">
            <span class="slds-assistive-text">Progress: 50%</span>
          </span>
        </div>
      </div>
      <div 
        class="popover slds-popover slds-popover_tooltip slds-nubbin_bottom" role="tooltip" 
        id="step-3-tooltip" 
        style="position:absolute;top:8px;left:calc(50% + 6px);transform:translateX(-50%)"
      >
        <div class="slds-popover__body">Submit info</div>
      </div>
    </div>
  `
  )
  .add(
    'Vertical Base',
    () => `
    <div class="ui-progress-indicator ui-progress-indicator--vertical slds-progress slds-progress_vertical">
      <ol class="form__list slds-progress__list">
        <li class="slds-progress__item slds-is-active">
          <button class="slds-button slds-progress__marker" aria-describedby="step-3-tooltip">
            <span class="slds-assistive-text">Step 3 - Active</span>
          </button>
        </li>
        <li class="form__list-item slds-progress__item">
          <div class="slds-progress__marker"></div>
          <div
            class="slds-progress__item_content slds-grid slds-grid_align-spread"
          >
            [Content Here]
          </div>
        </li>
        <li class="form__list-item slds-progress__item">
          <div class="slds-progress__marker"></div>
          <div
            class="slds-progress__item_content slds-grid slds-grid_align-spread"
          >
            [Content Here]
          </div>
        </li>
        <li class="form__list-item slds-progress__item">
          <div class="slds-progress__marker"></div>
          <div
            class="slds-progress__item_content slds-grid slds-grid_align-spread"
          >
            [Content Here]
          </div>
        </li>
        <li class="form__list-item slds-progress__item">
          <div class="slds-progress__marker"></div>
          <div
            class="slds-progress__item_content slds-grid slds-grid_align-spread"
          >
            [Content Here]
          </div>
        </li>
        <li class="form__list-item slds-progress__item">
          <div class="slds-progress__marker"></div>
          <div
            class="slds-progress__item_content slds-grid slds-grid_align-spread"
          >
            [Content Here]
          </div>
        </li>
      </ol>
      <div
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="25"
        role="progressbar"
      >
        <span class="slds-assistive-text">Progress: 25%</span>
      </div>
    </div>
  `
  )
  .add(
    'Vertical Next Step',
    () => `
    <div class="ui-progress-indicator ui-progress-indicator--vertical slds-progress slds-progress_vertical">
      <ol class="form__list slds-progress__list">
        <li class="form__list-item slds-progress__item slds-is-completed">
          <span
            class="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon"
            title="Complete"
          >
            <img
              src="/assets/svg/progress-ring-complete.svg"
              alt="complete icon"
              class="icon-image"
            />
            <span class="slds-assistive-text">Complete</span>
          </span>
          <div
            class="slds-progress__item_content slds-grid slds-grid_align-spread"
          >
            [Content Here]
          </div>
        </li>
        <li class="form__list-item slds-progress__item slds-is-completed">
          <span
            class="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon"
            title="Complete"
          >
            <img
              src="/assets/svg/progress-ring-complete.svg"
              alt="complete icon"
              class="icon-image"
            />
            <span class="slds-assistive-text">Complete</span>
          </span>
          <div
            class="slds-progress__item_content slds-grid slds-grid_align-spread"
          >
            [Content Here]
          </div>
        </li>
        <li class="form__list-item slds-progress__item slds-is-active">
          <div class="slds-progress__marker">
            <span class="slds-assistive-text">Active</span>
          </div>
          <div
            class="slds-progress__item_content slds-grid slds-grid_align-spread"
          >
            [Content Here]
          </div>
        </li>
        <li class="form__list-item slds-progress__item">
          <div class="slds-progress__marker"></div>
          <div
            class="slds-progress__item_content slds-grid slds-grid_align-spread"
          >
            [Content Here]
          </div>
        </li>
        <li class="form__list-item slds-progress__item">
          <div class="slds-progress__marker"></div>
          <div
            class="slds-progress__item_content slds-grid slds-grid_align-spread"
          >
            [Content Here]
          </div>
        </li>
        <li class="form__list-item slds-progress__item">
          <div class="slds-progress__marker"></div>
          <div
            class="slds-progress__item_content slds-grid slds-grid_align-spread"
          >
            [Content Here]
          </div>
        </li>
      </ol>
      <div
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="25"
        role="progressbar"
      >
        <span class="slds-assistive-text">Progress: 25%</span>
      </div>
    </div>
  `
  );

storiesOf('DIFC Components/Progress Bars', module).add(
  'Base with descriptions',
  () => `
    <div class="ui-progress-bar">
      <div
        class="slds-grid slds-grid_align-spread slds-p-bottom_large"
        id="progress-bar-label-id-1"
      >
        <strong>Your pathway</strong>
        <span aria-hidden="true"><strong>25% Complete</strong></span>
      </div>
      <div
        class="slds-progress-bar slds-progress-bar_small"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="25"
        aria-labelledby="progress-bar-label-id-1"
        role="progressbar"
      >
        <span class="slds-progress-bar__value" style="width: 25%;">
          <span class="slds-assistive-text">Progress: 25%</span>
        </span>
      </div>
    </div>
  `
);

storiesOf('DIFC Components/Progress Rings', module)
  .add(
    'Fill',
    () => `
    <div class="ui-progress-ring slds-progress-ring">
      <div 
        class="slds-progress-ring__progress" 
        role="progressbar" 
        aria-valuemin="0" 
        aria-valuemax="100" 
        aria-valuenow="100"
      >
        <svg viewBox="-1 -1 2 2">
          <path 
            class="slds-progress-ring__path" 
            id="slds-progress-ring-path-2" 
            d="M 1 0 A 1 1 0 1 1 1 -2.4492935982947064e-16 L 0 0" 
          />
        </svg>
      </div>
      <div class="slds-progress-ring__content"></div>
    </div>
    `
  )
  .add(
    'Partially Drain',
    () => `
    <div class="ui-progress-ring slds-progress-ring">
      <div 
        class="slds-progress-ring__progress" 
        role="progressbar" 
        aria-valuemin="0" 
        aria-valuemax="100" 
        aria-valuenow="88"
      >
        <svg viewBox="-1 -1 2 2">
          <path 
            class="slds-progress-ring__path" 
            id="slds-progress-ring-path-15" 
            d="M 1 0 A 1 1 0 1 1 0.7289686274214112 -0.684547105928689 L 0 0" 
          />
        </svg>
      </div>
      <div class="slds-progress-ring__content"></div>
    </div>
    `
  )
  .add(
    'Complete',
    () => `
    <div class="ui-progress-ring slds-progress-ring slds-progress-ring_complete">
      <div
        class="slds-progress-ring__progress"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="100"
      >
        <svg viewBox="-1 -1 2 2">
          <path
            class="slds-progress-ring__path"
            id="slds-progress-ring-path-16"
            d="M 1 0 A 1 1 0 1 1 1 -2.4492935982947064e-16 L 0 0"
          />
        </svg>
      </div>
      <div class="slds-progress-ring__content">
        <span class="slds-icon_container slds-icon-utility-check" title="Complete">
          <svg class="slds-icon" aria-hidden="true">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"
            />
          </svg>
          <span class="slds-assistive-text">Complete</span>
        </span>
      </div>
    </div>
    `
  )
  .add(
    'Warning',
    () => `
    <div class="ui-progress-ring slds-progress-ring slds-progress-ring_warning">
      <div
        class="slds-progress-ring__progress"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="20"
      >
        <svg viewBox="-1 -1 2 2">
          <path
            class="slds-progress-ring__path"
            id="slds-progress-ring-path-22"
            d="M 1 0 A 1 1 0 0 1 0.30901699437494745 0.9510565162951535 L 0 0"
          />
        </svg>
      </div>
      <div class="slds-progress-ring__content">
        <span class="slds-icon_container slds-icon-utility-warning" title="Warning">
          <svg class="slds-icon" aria-hidden="true">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#warning"
            />
          </svg>
          <span class="slds-assistive-text">Warning</span>
        </span>
      </div>
    </div>
    `
  )
  .add(
    'Error',
    () => `
    <div class="ui-progress-ring slds-progress-ring slds-progress-ring_expired">
      <div
        class="slds-progress-ring__progress"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="0"
      >
        <svg viewBox="-1 -1 2 2">
          <path
            class="slds-progress-ring__path"
            id="slds-progress-ring-path-23"
            d="M 1 0 A 1 1 0 0 1 1 0 L 0 0"
          />
        </svg>
      </div>
      <div class="slds-progress-ring__content">
        <span class="slds-icon_container slds-icon-utility-error" title="Expired">
          <svg class="slds-icon" aria-hidden="true">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#error"
            />
          </svg>
          <span class="slds-assistive-text">Expired</span>
        </span>
      </div>
    </div>
    `
  )
  .add(
    'Count',
    () => `
    <div class="ui-progress-ring slds-progress-ring">
      <div
        class="slds-progress-ring__progress"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="0"
      >
        <svg viewBox="-1 -1 2 2">
          <path
            class="slds-progress-ring__path"
            id="slds-progress-ring-path-23"
            d="M 1 0 A 1 1 0 0 1 1 0 L 0 0"
          />
        </svg>
      </div>
      <div class="slds-progress-ring__content">
        <span class="slds-icon_container slds-icon-utility-error" title="Expired">
          <span class="progress-count-number">1</span>
          <span class="slds-assistive-text">Expired</span>
        </span>
      </div>
    </div>
    `
  );

storiesOf('DIFC Components/Breadcrumbs', module)
  .add(
    'Base',
    () => `
    <div class="demo-only" style="height:150px;">
      <!-- below is the real component -->
      <nav class="ui-breadcrumbs" role="navigation" aria-label="Breadcrumbs">
        <ol class="slds-breadcrumb slds-list_horizontal slds-wrap">
          <li class="slds-breadcrumb__item slds-text-title_caps"><a href="javascript:void(0);">Parent Name</a></li>
          <li class="slds-breadcrumb__item slds-text-title_caps"><a href="javascript:void(0);">Child Name</a></li>
        </ol>
      </nav>
    </div>
    `
  )
  .add(
    'Overflow',
    () => `
    <div class="demo-only" style="height:150px;">
      <nav class="ui-breadcrumbs" role="navigation" aria-label="Breadcrumbs">
        <ol class="slds-breadcrumb slds-list_horizontal slds-wrap slds-grid_vertical-align-center">
          <li class="slds-breadcrumb__item">
            <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
              <button class="button button--breadcrumb slds-button" aria-haspopup="true" title="Show More">
                <span>...</span>
                <span class="slds-assistive-text">Show More</span>
              </button>
              <div class="slds-dropdown slds-dropdown_left slds-dropdown_actions">
                <ul class="slds-dropdown__list" role="menu">
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
                </ul>
              </div>
            </div>
          </li>
          <li class="slds-breadcrumb__item slds-text-title_caps">
            <a href="javascript:void(0);">Parent Name</a>
          </li>
          <li class="slds-breadcrumb__item slds-text-title_caps">
            <a href="javascript:void(0);">Child Name</a>
          </li>
        </ol>
      </nav>
    </div>
      `
  );

storiesOf('DIFC Components/Accordion', module)
  .add(
    'Accordion Base',
    () => `
    <div class="ui-accordion">
      <ul class="slds-accordion">
        <li class="slds-accordion__list-item">
          <section class="slds-accordion__section">
            <div class="slds-accordion__summary">
              <h3 class="slds-accordion__summary-heading">
                <button
                  aria-controls="accordion-details-01"
                  aria-expanded="true"
                  class="slds-button slds-button_reset slds-accordion__summary-action"
                >
                  <img
                    class="ui-icon"
                    src="/assets/svg/arrow-down.svg"
                  />
                  <span class="slds-truncate" title="Accordion summary">
                    Accordion Summary
                  </span>
                </button>
              </h3>
            </div>
            <div
              aria-hidden="false"
              class="slds-accordion__content"
              id="accordion-details-01"
            >
              Accordion Details
            </div>
          </section>
        </li>
        <li class="slds-accordion__list-item">
          <section class="slds-accordion__section">
            <div class="slds-accordion__summary">
              <h3 class="slds-accordion__summary-heading">
                <button
                  aria-controls="accordion-details-02"
                  aria-expanded="false"
                  class="slds-button slds-button_reset slds-accordion__summary-action"
                >
                  <img
                    class="ui-icon"
                    src="/assets/svg/arrow-down.svg"
                  />
                  <span class="slds-truncate" title="Accordion summary">
                    Accordion Summary
                  </span>
                </button>
              </h3>
            </div>
            <div
              aria-hidden="true"
              class="slds-accordion__content"
              id="accordion-details-02"
            >
              Accordion Details - B
            </div>
          </section>
        </li>
        <li class="slds-accordion__list-item">
          <section class="slds-accordion__section">
            <div class="slds-accordion__summary">
              <h3 class="slds-accordion__summary-heading">
                <button
                  aria-controls="accordion-details-03"
                  aria-expanded="false"
                  class="slds-button slds-button_reset slds-accordion__summary-action"
                >
                  <img
                    class="ui-icon"
                    src="/assets/svg/arrow-down.svg"
                  />
                  <span class="slds-truncate" title="Accordion summary">
                    Accordion Summary
                  </span>
                </button>
              </h3>
            </div>
            <div
              aria-hidden="true"
              class="slds-accordion__content"
              id="accordion-details-03"
            >
              Accordion Details - C
            </div>
          </section>
        </li>
      </ul>
    </div>
    `
  )
  .add(
    'Accordion Expanded',
    () => `
      <div class="ui-accordion">
        <ul class="slds-accordion">
          <li class="slds-accordion__list-item">
            <section class="slds-accordion__section slds-is-open">
              <div class="slds-accordion__summary">
                <h3 class="slds-accordion__summary-heading">
                  <button
                    aria-controls="accordion-details-01"
                    aria-expanded="true"
                    class="slds-button slds-button_reset slds-accordion__summary-action"
                  >
                    <img
                      class="ui-icon"
                      src="/assets/svg/arrow-down.svg"
                    />
                    <span class="slds-truncate" title="Accordion summary">
                      Accordion Summary
                    </span>
                  </button>
                </h3>
              </div>
              <div
                aria-hidden="false"
                class="slds-accordion__content"
                id="accordion-details-01"
              >
                Accordion Details
              </div>
            </section>
          </li>
          <li class="slds-accordion__list-item">
            <section class="slds-accordion__section">
              <div class="slds-accordion__summary">
                <h3 class="slds-accordion__summary-heading">
                  <button
                    aria-controls="accordion-details-02"
                    aria-expanded="false"
                    class="slds-button slds-button_reset slds-accordion__summary-action"
                  >
                    <img
                      class="ui-icon"
                      src="/assets/svg/arrow-down.svg"
                    />
                    <span class="slds-truncate" title="Accordion summary">
                      Accordion Summary
                    </span>
                  </button>
                </h3>
              </div>
              <div
                aria-hidden="true"
                class="slds-accordion__content"
                id="accordion-details-02"
              >
                Accordion Details - B
              </div>
            </section>
          </li>
          <li class="slds-accordion__list-item">
            <section class="slds-accordion__section">
              <div class="slds-accordion__summary">
                <h3 class="slds-accordion__summary-heading">
                  <button
                    aria-controls="accordion-details-03"
                    aria-expanded="false"
                    class="slds-button slds-button_reset slds-accordion__summary-action"
                  >
                    <img
                      class="ui-icon"
                      src="/assets/svg/arrow-down.svg"
                    />
                    <span class="slds-truncate" title="Accordion summary">
                      Accordion Summary
                    </span>
                  </button>
                </h3>
              </div>
              <div
                aria-hidden="true"
                class="slds-accordion__content"
                id="accordion-details-03"
              >
                Accordion Details - C
              </div>
            </section>
          </li>
        </ul>
      </div>
      `
  );

storiesOf('DIFC Components/Forms/Inputs', module)
  .add(
    'Input Field Base',
    () => `
    <div class="ui-form-element slds-form-element">
      <label class="ui-form-element__label slds-form-element__label" for="text-input-id-1">
        Input Label
      </label>
      <div class="ui-form-element__control slds-form-element__control">
        <input
          id="text-input-id-1"
          class="ui-form-element__control-input slds-input"
          type="text"
        />
      </div>
    </div>
    `
  )
  .add(
    'Input Field Required',
    () => `
    <div class="ui-form-element slds-form-element">
      <label class="ui-form-element__label slds-form-element__label" for="text-input-id-1">
        <abbr class="slds-required">*</abbr>
        Input Label
      </label>
      <div class="ui-form-element__control slds-form-element__control">
        <input
          id="text-input-id-1"
          class="ui-form-element__control-input slds-input"
          type="text"
          required
        />
      </div>
    </div>
    `
  )
  .add(
    'Input Field Disabled',
    () => `
    <div class="ui-form-element slds-form-element">
      <label class="ui-form-element__label slds-form-element__label" for="text-input-id-1">
        Input Label
      </label>
      <div class="ui-form-element__control slds-form-element__control">
        <input
          id="text-input-id-1"
          class="ui-form-element__control-input slds-input"
          type="text"
          disabled
        />
      </div>
    </div>
    `
  )
  .add(
    'Input Field Error',
    () => `
    <div class="ui-form-element slds-form-element slds-has-error">
      <label class="ui-form-element__label slds-form-element__label" for="text-input-id-1">
        <abbr class="slds-required">*</abbr>
        Input Label
      </label>
      <div class="ui-form-element__control slds-form-element__control">
        <input
          id="text-input-id-1"
          aria-describedby="error-message-unique-id"
          class="ui-form-element__control-input slds-input"
          type="text"
          required
        />
      </div>
      <div class="slds-form-element__help" id="error-message-unique-id">
        This field is required
      </div>
    </div>
    `
  );

storiesOf('DIFC Components/Forms/Textareas', module)
  .add(
    'Textarea Base',
    () => `
    <div class="ui-form-element slds-form-element">
      <label
        class="ui-form-element__label slds-form-element__label"
        for="textarea-id-01"
      >
        Textarea Label
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
    'Textarea Required',
    () => `
    <div class="ui-form-element slds-form-element">
      <label
        class="ui-form-element__label slds-form-element__label"
        for="textarea-id-01"
      >
        <abbr class="slds-required">*</abbr>
        Textarea Label
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
    'Textarea Disabled',
    () => `
    <div class="ui-form-element slds-form-element">
      <label
        class="ui-form-element__label slds-form-element__label"
        for="textarea-id-01"
      >
        Textarea Label
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
    'Textarea Error',
    () => `
    <div class="ui-form-element slds-form-element slds-has-error">
      <label
        class="ui-form-element__label slds-form-element__label"
        for="textarea-id-01"
      >
        <abbr class="slds-required">*</abbr>
        Textarea Label
      </label>
      <div class="ui-form-element __control slds-form-element__control">
        <textarea
          id="textarea-id-01"
          aria-describedby="error-01"
          class="ui-form-element__control-textarea slds-textarea"
          placeholder="Placeholder Text"
          required
        ></textarea>
      </div>
      <div class="slds-form-element__help" id="error-01">
        This field is required
      </div>
    </div>
    `
  );

storiesOf('DIFC Components/Date Picker', module)
  .add(
    'Date Picker Base',
    () => `
    <div class="ui-date-picker" style="height: 25rem;">
      <div
        class="ui-form-element slds-form-element slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
      >
        <label
          class="ui-form-element__label slds-form-element__label"
          for="date-input-id"
        >
          Date
          <img 
            src="/assets/svg/event.svg" 
            alt=""
          />
        </label>
        <div
          class="ui-form-element__control slds-form-element__control slds-input-has-icon slds-input-has-icon_right"
        >
          <input id="date-input-id"
            placeholder=""
            class="ui-form-element__control-input slds-input"
            type="text"
          />
          <button
            class="slds-button slds-button_icon slds-input__icon slds-input__icon_right"
            title="Select a date"
          >
            <span class="slds-assistive-text">Select a date</span>
          </button>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Date Picker Open',
    () => `
    <div class="ui-date-picker" style="height: 25rem;">
      <div
        class="ui-form-element slds-form-element slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
      >
        <label
          class="ui-form-element__label slds-form-element__label"
          for="date-input-id"
        >
          Date
          <img 
            src="/assets/svg/event.svg" 
            alt=""
          />
        </label>
        <div
          class="ui-form-element__control slds-form-element__control slds-input-has-icon slds-input-has-icon_right"
        >
          <input 
            id="date-input-id"
            placeholder=""
            class="ui-form-element__control-input slds-input" type="text"
          />
          <button
            class="slds-button slds-button_icon slds-input__icon slds-input__icon_right"
            title="Select a date"
          >
            <span class="slds-assistive-text">Select a date</span>
          </button>
        </div>
        <div
          aria-hidden="false"
          aria-label="Date picker: June"
          class="slds-datepicker slds-dropdown slds-dropdown_left"
          role="dialog"
        >
          <div class="slds-datepicker__filter slds-grid">
            <div
              class="slds-datepicker__filter_month slds-grid slds-grid_align-spread slds-grow"
            >
              <div class="slds-align-middle">
                <button
                  class="slds-button slds-button_icon slds-button_icon-container"
                  title="Previous Month"
                >
                  <img 
                    src="/assets/svg/arrow-left.svg" 
                    alt=""
                  />
                  <span class="slds-assistive-text">Previous Month</span>
                </button>
              </div>
              <h2
                aria-atomic="true"
                aria-live="assertive"
                class="slds-align-middle"
                id="month"
              >
                June
              </h2>
              <div class="slds-align-middle">
                <button
                  class="slds-button slds-button_icon slds-button_icon-container"
                  title="Next Month"
                >
                  <img 
                    src="/assets/svg/arrow-right.svg" 
                    alt=""
                  />
                  <span class="slds-assistive-text">Next Month</span>
                </button>
              </div>
            </div>
            <div class="slds-shrink-none">
              <label class="slds-assistive-text" for="select-01">Pick a Year</label>
              <div class="slds-select_container">
                <select class="slds-select" id="select-01">
                  <option>2014</option>
                  <option>2015</option>
                  <option>2016</option>
                </select>
              </div>
            </div>
          </div>
          <table
            aria-labelledby="month"
            aria-multiselectable="true"
            class="slds-datepicker__month"
            role="grid"
          >
            <thead>
              <tr id="weekdays">
                <th id="Sunday" scope="col"><abbr title="Sunday">Sun</abbr></th>
                <th id="Monday" scope="col"><abbr title="Monday">Mon</abbr></th>
                <th id="Tuesday" scope="col"><abbr title="Tuesday">Tue</abbr></th>
                <th id="Wednesday" scope="col">
                  <abbr title="Wednesday">Wed</abbr>
                </th>
                <th id="Thursday" scope="col"><abbr title="Thursday">Thu</abbr></th>
                <th id="Friday" scope="col"><abbr title="Friday">Fri</abbr></th>
                <th id="Saturday" scope="col"><abbr title="Saturday">Sat</abbr></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  aria-disabled="true"
                  aria-selected="false"
                  class="slds-disabled-text"
                  role="gridcell"
                >
                  <span class="slds-day">31</span>
                </td>
                <td aria-selected="false" role="gridcell" tabindex="0">
                  <span class="slds-day">1</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">2</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">3</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">4</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">5</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">6</span>
                </td>
              </tr>
              <tr>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">7</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">8</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">9</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">10</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">11</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">12</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">13</span>
                </td>
              </tr>
              <tr>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">14</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">15</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">16</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">17</span>
                </td>
                <td
                  aria-selected="false"
                  aria-current="date"
                  class="slds-is-today"
                  role="gridcell"
                >
                  <span class="slds-day">18</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">19</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">20</span>
                </td>
              </tr>
              <tr class="">
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">21</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">22</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">23</span>
                </td>
                <td aria-selected="false" class="" role="gridcell">
                  <span class="slds-day">24</span>
                </td>
                <td aria-selected="false" class="" role="gridcell">
                  <span class="slds-day">25</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">26</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">27</span>
                </td>
              </tr>
              <tr class="">
                <td aria-selected="false" class="" role="gridcell">
                  <span class="slds-day">28</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">29</span>
                </td>
                <td aria-selected="false" role="gridcell">
                  <span class="slds-day">30</span>
                </td>
                <td
                  aria-disabled="true"
                  aria-selected="false"
                  class="slds-disabled-text"
                  role="gridcell"
                >
                  <span class="slds-day">1</span>
                </td>
                <td
                  aria-disabled="true"
                  aria-selected="false"
                  class="slds-disabled-text"
                  role="gridcell"
                >
                  <span class="slds-day">2</span>
                </td>
                <td
                  aria-disabled="true"
                  aria-selected="false"
                  class="slds-disabled-text"
                  role="gridcell"
                >
                  <span class="slds-day">3</span>
                </td>
                <td
                  aria-disabled="true"
                  aria-selected="false"
                  class="slds-disabled-text"
                  role="gridcell"
                >
                  <span class="slds-day">4</span>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="slds-button slds-align_absolute-center slds-text-link">
            Today
          </button>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Date Picker Range Selection',
    () => `
    <div class="ui-date-picker" style="height: 25rem;">
      <div class="slds-form slds-form_compound">
        <fieldset class="ui-form-element slds-form-element">
          <legend class="ui-form-element__label slds-form-element__label slds-form-element__legend">
            Please select Start and End Date
          </legend>
          <div class="ui-form-element__control slds-form-element__control">
            <div class="ui-form-element__group slds-form-element__group">
              <div class="slds-form-element__row">
                <div
                  class="ui-form-element slds-form-element slds-dropdown-trigger slds-dropdown-trigger_click"
                >
                  <label 
                    class="ui-form-element__label slds-form-element__label" for="date-input-id-01"
                  >
                    Start Date
                    <img 
                      src="/assets/svg/event.svg" 
                      alt=""
                    />
                  </label>
                  <div
                    class="ui-form-element__control slds-form-element__control slds-input-has-icon slds-input-has-icon_right"
                  >
                    <input
                      id="date-input-id-01"
                      placeholder=""
                      class="ui-form-element__control-input slds-input"
                      type="text"
                      value="06/24/2014"
                    />
                    <button
                      class="slds-button slds-button_icon slds-input__icon slds-input__icon--right"
                      title="Select a date"
                    >
                      <span class="slds-assistive-text">Select a date</span>
                    </button>
                  </div>
                </div>
                <div
                  class="ui-form-element slds-form-element slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
                >
                  <label class="ui-form-element__label slds-form-element__label" for="date-input-id-02">
                    End Date
                    <img 
                      src="/assets/svg/event.svg" 
                      alt=""
                    />
                  </label>
                  <div
                    class="slds-form-element__control slds-input-has-icon slds-input-has-icon_right"
                  >
                    <input
                      id="date-input-id-02"
                      placeholder=" "
                      class="ui-form-element__control-input slds-input"
                      type="text"
                      value="06/27/2014"
                    />
                    <button
                      class="slds-button slds-button_icon slds-input__icon slds-input__icon--right"
                      title="Select a date"
                    >
                      <span class="slds-assistive-text">Select a date</span>
                    </button>
                  </div>
                  <div
                    aria-hidden="false"
                    aria-label="Date picker: June"
                    class="slds-datepicker slds-dropdown slds-dropdown_left"
                    role="dialog"
                  >
                    <div class="slds-datepicker__filter slds-grid">
                      <div
                        class="slds-datepicker__filter_month slds-grid slds-grid_align-spread slds-grow"
                      >
                        <div class="slds-align-middle">
                          <button
                            class="slds-button slds-button_icon slds-button_icon-container"
                            title="Previous Month"
                          >
                            <img 
                              src="/assets/svg/arrow-left.svg" 
                              alt=""
                            />
                            <span class="slds-assistive-text">Previous Month</span>
                          </button>
                        </div>
                        <h2
                          aria-atomic="true"
                          aria-live="assertive"
                          class="slds-align-middle"
                          id="month"
                        >
                          June
                        </h2>
                        <div class="slds-align-middle">
                          <button
                            class="slds-button slds-button_icon slds-button_icon-container"
                            title="Next Month"
                          >
                            <img 
                              src="/assets/svg/arrow-right.svg" 
                              alt=""
                            />
                            <span class="slds-assistive-text">Next Month</span>
                          </button>
                        </div>
                      </div>
                      <div class="slds-shrink-none">
                        <label class="slds-assistive-text" for="select-01">
                          Pick a Year
                        </label>
                        <div class="slds-select_container">
                          <select class="slds-select" id="select-01">
                            <option>2014</option>
                            <option>2015</option>
                            <option>2016</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <table
                      aria-labelledby="month"
                      aria-multiselectable="true"
                      class="slds-datepicker__month"
                      role="grid"
                    >
                      <thead>
                        <tr id="weekdays">
                          <th id="Sunday" scope="col">
                            <abbr title="Sunday">Sun</abbr>
                          </th>
                          <th id="Monday" scope="col">
                            <abbr title="Monday">Mon</abbr>
                          </th>
                          <th id="Tuesday" scope="col">
                            <abbr title="Tuesday">Tue</abbr>
                          </th>
                          <th id="Wednesday" scope="col">
                            <abbr title="Wednesday">Wed</abbr>
                          </th>
                          <th id="Thursday" scope="col">
                            <abbr title="Thursday">Thu</abbr>
                          </th>
                          <th id="Friday" scope="col">
                            <abbr title="Friday">Fri</abbr>
                          </th>
                          <th id="Saturday" scope="col">
                            <abbr title="Saturday">Sat</abbr>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td
                            aria-disabled="true"
                            aria-selected="false"
                            class="slds-disabled-text"
                            role="gridcell"
                          >
                            <span class="slds-day">31</span>
                          </td>
                          <td aria-selected="false" role="gridcell" tabindex="0">
                            <span class="slds-day">1</span>
                          </td>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">2</span>
                          </td>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">3</span>
                          </td>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">4</span>
                          </td>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">5</span>
                          </td>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">6</span>
                          </td>
                        </tr>
                        <tr>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">7</span>
                          </td>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">8</span>
                          </td>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">9</span>
                          </td>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">10</span>
                          </td>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">11</span>
                          </td>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">12</span>
                          </td>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">13</span>
                          </td>
                        </tr>
                        <tr>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">14</span>
                          </td>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">15</span>
                          </td>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">16</span>
                          </td>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">17</span>
                          </td>
                          <td
                            aria-selected="false"
                            aria-current="date"
                            class="slds-is-today"
                            role="gridcell"
                          >
                            <span class="slds-day">18</span>
                          </td>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">19</span>
                          </td>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">20</span>
                          </td>
                        </tr>
                        <tr class="slds-has-multi-selection">
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">21</span>
                          </td>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">22</span>
                          </td>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">23</span>
                          </td>
                          <td
                            aria-selected="true"
                            class="slds-is-selected slds-is-selected-multi"
                            role="gridcell"
                          >
                            <span class="slds-day">24</span>
                          </td>
                          <td
                            aria-selected="true"
                            class="slds-is-selected slds-is-selected-multi"
                            role="gridcell"
                          >
                            <span class="slds-day">25</span>
                          </td>
                          <td
                            aria-selected="true"
                            class="slds-is-selected slds-is-selected-multi"
                            role="gridcell"
                          >
                            <span class="slds-day">26</span>
                          </td>
                          <td
                            aria-selected="true"
                            class="slds-is-selected slds-is-selected-multi"
                            role="gridcell"
                          >
                            <span class="slds-day">27</span>
                          </td>
                        </tr>
                        <tr class="">
                          <td aria-selected="false" class="" role="gridcell">
                            <span class="slds-day">28</span>
                          </td>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">29</span>
                          </td>
                          <td aria-selected="false" role="gridcell">
                            <span class="slds-day">30</span>
                          </td>
                          <td
                            aria-disabled="true"
                            aria-selected="false"
                            class="slds-disabled-text"
                            role="gridcell"
                          >
                            <span class="slds-day">1</span>
                          </td>
                          <td
                            aria-disabled="true"
                            aria-selected="false"
                            class="slds-disabled-text"
                            role="gridcell"
                          >
                            <span class="slds-day">2</span>
                          </td>
                          <td
                            aria-disabled="true"
                            aria-selected="false"
                            class="slds-disabled-text"
                            role="gridcell"
                          >
                            <span class="slds-day">3</span>
                          </td>
                          <td
                            aria-disabled="true"
                            aria-selected="false"
                            class="slds-disabled-text"
                            role="gridcell"
                          >
                            <span class="slds-day">4</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button
                      class="slds-button slds-align_absolute-center slds-text-link"
                    >
                      Today
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
    `
  );

storiesOf('DIFC Components/Data Table', module)
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
    'Stripped Rows',
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
    'Advanced Rows Selection',
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
                class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
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
                class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
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
                class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
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
                class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
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
                class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
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
                class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
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

storiesOf('DIFC Components/Popovers', module)
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore.
            <a href="javascript:void(0);" title="Learn More">Learn More</a>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore.
            <a href="javascript:void(0);" title="Learn More">Learn More</a>
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
            <button class="ui-button ui-button--primary slds-button slds-button_brand slds-col_bump-left">
              Next
            </button>
          </div>
        </footer>
      </section>
    </div>
  `
  )
  .add(
    'Walkthrough Inline Form',
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
              class="ui-button ui-button--primary slds-button slds-button_brand slds-col_bump-left"
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
    'Feature with Icon',
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
    'Feature with Header and Footer',
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
              class="ui-button ui-button-default slds-button slds-button_neutral slds-col_bump-left"
            >
              Neutral
            </button>
          </div>
        </footer>
      </section>
    </div>
  `
  );

storiesOf('DIFC Components/Tooltip', module).add(
  'Base',
  () => `
    <div class="ui-tooltip">
      <div class="slds-form-element">
        <div class="slds-form-element__icon slds-align-middle">
          <button
            class="slds-button slds-button_icon slds-button slds-button_icon"
            aria-describedby="help"
            title="Help"
          >
            <svg class="slds-button__icon" aria-hidden="true">
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#info"
              />
            </svg>
            <span class="slds-assistive-text">Help</span>
          </button>
        </div>
      </div>
      <div
        class="slds-popover slds-popover_tooltip slds-nubbin_bottom-left"
        role="tooltip"
        id="help"
        style="position: absolute; top: 0px; left: 15px;"
      >
        <div class="slds-popover__body">
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
        </div>
      </div>
    </div>

  `
);

storiesOf('DIFC Components/Menu', module)
  .add(
    'Base',
    () => `
    <div class="ui-menu">
      <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <button
          class="slds-button slds-button_icon"
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
    'With Header and Sub Items',
    () => `
    <div class="ui-menu">
      <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <button
          class="slds-button slds-button_icon"
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
    'Item Selected',
    () => `
    <div class="ui-menu">
      <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <button
          class="slds-button slds-button_icon"
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
    'With Icons on Both Sides of Item',
    () => `
    <div class="ui-menu">
      <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
        <button
          class="slds-button slds-button_icon"
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
