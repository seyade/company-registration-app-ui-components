import { storiesOf } from '@storybook/html';
import { action, configureActions } from '@storybook/addon-actions';
import '../dist/main.css';

storiesOf('DIFC Components/Accordion', module)
  .add(
    'Base',
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
    'Expanded',
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

storiesOf('DIFC Components/Avatars/Circles', module)
  .add(
    'With user picture',
    () => `
    <span class="ui-avatar ui-avatar--circle">
      <span class="slds-avatar slds-avatar_circle slds-avatar_large">
        <img 
          src="/assets/images/rihanna-gopal.jpg" 
          alt="avatar image" 
          class="ui-avatar__image icon-image" 
        />
      </span>
    </span>
    `
  )
  .add(
    'With user picture small',
    () => `
    <span class="ui-avatar ui-avatar--small ui-avatar--circle">
      <span class="slds-avatar slds-avatar_circle">
        <img 
          src="/assets/images/rihanna-gopal.jpg" 
          alt="avatar image" 
          class="ui-avatar__image icon-image" 
        />
      </span>
    </span>
    `
  )
  .add(
    'With initials',
    () => `
    <span class="ui-avatar ui-avatar--circle">
      <span class="slds-avatar slds-avatar_circle slds-avatar_large">
        <abbr 
          class="slds-avatar__initials slds-icon-standard-account"
          title="company name"
        >
          Ac
        </abbr>
      </span>
    </span>
    `
  )
  .add(
    'With initials small',
    () => `
    <span class="ui-avatar ui-avatar--small ui-avatar--circle">
      <span class="slds-avatar slds-avatar_circle">
        <abbr 
          class="slds-avatar__initials slds-icon-standard-account"
          title="company name"
        >
          Ac
        </abbr>
      </span>
    </span>
    `
  )
  .add(
    'User icon',
    () => `
    <span class="ui-avatar ui-avatar--circle">
      <span class="slds-avatar slds-avatar_circle slds-avatar_medium">
        <span class="slds-icon_container slds-icon-standard-user" title="Description of icon when needed">
          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#user" />
          </svg>
          <span class="slds-assistive-text">Description of icon when needed</span>
        </span>
      </span>
    </span>
    `
  )
  .add(
    'User icon small',
    () => `
    <span class="ui-avatar ui-avatar--small ui-avatar--circle">
      <span class="slds-avatar slds-avatar_circle slds-avatar_small">
        <span class="slds-icon_container slds-icon-standard-user" title="Description of icon when needed">
          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#user" />
          </svg>
          <span class="slds-assistive-text">Description of icon when needed</span>
        </span>
      </span>
    </span>
    `
  );

storiesOf('DIFC Components/Avatars/Squares', module)
  .add(
    'With user picture',
    () => `
    <span class="ui-avatar">
      <span class="slds-avatar slds-avatar_large">
        <img 
          src="/assets/images/rihanna-gopal.jpg" 
          alt="avatar image" 
          class="ui-avatar__image icon-image" 
        />
      </span>
    </span>
    `
  )
  .add(
    'With user picture small',
    () => `
    <span class="ui-avatar ui-avatar--small">
      <span class="slds-avatar">
        <img 
          src="/assets/images/rihanna-gopal.jpg" 
          alt="avatar image" 
          class="ui-avatar__image icon-image" 
        />
      </span>
    </span>
    `
  )
  .add(
    'With initials',
    () => `
    <span class="ui-avatar">
      <span class="slds-avatar slds-avatar_large">
        <abbr 
          class="slds-avatar__initials slds-icon-standard-account"
          title="company name"
        >
          Ac
        </abbr>
      </span>
    </span>
    `
  )
  .add(
    'With initials small',
    () => `
    <span class="ui-avatar ui-avatar--small">
      <span class="slds-avatar">
        <abbr 
          class="slds-avatar__initials slds-icon-standard-account"
          title="company name"
        >
          Ac
        </abbr>
      </span>
    </span>
    `
  )
  .add(
    'User icon',
    () => `
    <span class="ui-avatar">
      <span class="slds-avatar slds-avatar_medium">
        <span class="slds-icon_container slds-icon-standard-user" title="Description of icon when needed">
          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#user" />
          </svg>
          <span class="slds-assistive-text">Description of icon when needed</span>
        </span>
      </span>
    </span>
    `
  )
  .add(
    'User icon small',
    () => `
    <span class="ui-avatar ui-avatar--small">
      <span class="slds-avatar slds-avatar_small">
        <span class="slds-icon_container slds-icon-standard-user" title="Description of icon when needed">
          <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#user" />
          </svg>
          <span class="slds-assistive-text">Description of icon when needed</span>
        </span>
      </span>
    </span>
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
          <li class="slds-breadcrumb__item slds-text-title_caps">
            <span class="ui-breadcrumbs__text ui-breadcrumbs__text--truncated">
              ...
            </span>
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
    'Default Ouline',
    () => `
    <div class="ui-button-group" style="background: #002f6c;">
      <button class="ui-button ui-button--default ui-button--default-outline">Default</button>
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
    'Primary Outline',
    () => `
    <div class="ui-button-group" style="background: #002f6c;">
      <button class="ui-button ui-button--primary ui-button--primary-outline">Primary</button>
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
  )
  .add(
    'Back button (link)',
    () => `
    <div class="ui-button-group">
      <button class="ui-button ui-button--back-link">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#back"></use>
        </svg>
        <span class="slds-assistive-text">Back to your pathway</span>
        <span>Back to your pathway</span>
      </button>
    </div>
    `
  )
  .add(
    'Back button inverse (link)',
    () => `
    <div class="ui-button-group" style="background-color: #002f6c;">
      <button class="ui-button ui-button--back-link ui-button--back-link--inverse">
        <svg class="slds-button__icon" aria-hidden="true">
          <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#back"></use>
        </svg>
        <span class="slds-assistive-text">Back to your pathway</span>
        <span>Back to your pathway</span>
      </button>
    </div>
    `
  );

storiesOf('DIFC Components/Button Icons', module)
  .add(
    'Base',
    () => `
    <button class="ui-button-icon slds-button slds-button_icon" title="Settings">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#settings"></use>
      </svg>
      <span class="slds-assistive-text">Settings</span>
    </button>
    `
  )
  .add(
    'Disabled',
    () => `
    <button class="ui-button-icon slds-button slds-button_icon" disabled>
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#settings"></use>
      </svg>
      <span class="slds-assistive-text">Settings</span>
    </button>
    `
  )
  .add(
    'Stateful',
    () => `
    <button class="ui-button-icon slds-button slds-button_icon" aria-pressed="false" title="Like">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#settings"></use>
      </svg>
      <span class="slds-assistive-text">Like</span>
    </button>
    `
  )
  .add(
    'Stateful selected',
    () => `
    <button class="ui-button-icon  slds-button slds-button_icon slds-is-selected slds-button_icon-border-filled" aria-pressed="true" title="Like">
      <svg class="slds-button__icon" aria-hidden="true">
        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#settings"></use>
      </svg>
      <span class="slds-assistive-text">Like</span>
    </button>
    `
  );

storiesOf('DIFC Components/Cards', module)
  .add(
    'Base',
    () => `
    <div class="ui-card" style="min-height:100px;width:400px;">
      
    </div>
  `
  )
  .add(
    'Base with content',
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
    'Guide card',
    () => `
    <div class="ui-guide-card ui-card ui-card--light-blue">
      <div class="ui-card__header">
        <span class="ui-card__header-title">Pathway Guide</span>
        <span class="ui-card__header-subtitle">
          Section One: Prepare company documents
        </span>
      </div>
      <div class="ui-card__content ui-card__content--padding-med">
        <p class="ui-card__paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia magni
          repellat nesciunt sapiente eius eum commodi.
        </p>

        <p class="ui-card__paragraph">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia magni
          repellat nesciunt sapiente eius eum commodi illo voluptates vel ratione
          consectetur, laborum earum blanditiis officiis, adipisci cumque. Fuga,
          illum molestiae.
        </p>

        <div class="ui-guide-card__notice">
          <p class="ui-guide-card__notice-text">
            Please make sure you fill in all details on each part of the section.
          </p>
        </div>
      </div>
    </div>
  `
  )
  .add(
    'Next Steps card',
    () => `
    <div
      class="ui-next-step-card ui-card ui-card--very-light-blue ui-card--next-steps"
    >
      <div class="ui-card__content ui-card__content--padding-med">
        <span class="ui-card__title">Next Steps</span>
        <p class="ui-card__subtitle">Sed do eiusm Company Profile. Here are your next 3 steps</p>
        <ul class="ui-next-step-card__list">
          <li class="ui-next-step-card__item">
            <a class="ui-next-step-card__item-link" href="#">
              <span class="ui-next-step-card__item-description">
                Create your busniess structure
              </span>
              <span class="ui-next-step-card__item-info">4 questions</span>
            </a>
          </li>
          <li class="ui-next-step-card__item">
            <a class="ui-next-step-card__item-link" href="#">
              <span class="ui-next-step-card__item-description">
                Reserve your company name
              </span>
              <span class="ui-next-step-card__item-info">10 minutes</span>
            </a>
          </li>
          <li class="ui-next-step-card__item">
            <a class="ui-next-step-card__item-link" href="#">
              <span class="ui-next-step-card__item-description">
                Fill in company details
              </span>
              <span class="ui-next-step-card__item-info">12 questions</span>
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
    'Marketing card',
    () => `
    <div
      class="ui-marketing-card ui-card"
      style="min-width:800px;"
    >
      <button class="ui-button ui-button--close">
        <span class="ui-button__text ui-button__text--hidden">Close</span>
        <img
          class="ui-button__icon--close icon-image"
          src="/assets/svg/close-light.svg"
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
    'Marketing card without button',
    () => `
    <div
      class="ui-marketing-card ui-card"
      style="min-width:800px;"
    >
      <button class="ui-button ui-button--close">
        <span class="ui-button__text ui-button__text--hidden">Close</span>
        <img
          class="ui-button__icon--close icon-image"
          src="/assets/svg/close-light.svg"
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
    'Pathway card collapsed',
    () => `
    <div class="ui-card ui-path-card ui-path-card--collapsed">
      <div class="ui-path-card__content">
        <div class="ui-path-card__header">
          <div class="ui-path-card__header-top">
            <div class="ui-path-card__progress-ring">
              <div
                class="ui-progress-ring slds-progress-ring slds-progress-ring_complete"
              >
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
                  <span
                    class="slds-icon_container slds-icon-utility-check"
                    title="Complete"
                  >
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
            </div>

            <div class="ui-path-card__header-panel">
              <div class="ui-path-card__header-title">Submit company profile</div>

              <div class="ui-path-card__progress-updates">
                <span class="ui-path-card__progress-updates-item">1/4 Steps</span>
                |
                <span class="ui-path-card__progress-updates-item">
                  6/24 Questions
                </span>
                |
                <span class="ui-path-card__progress-updates-item">
                  0/4 Documents
                </span>

                <div class="ui-path-card__time">2 Days</div>
              </div>

              <p class="ui-path-card__text">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud.
              </p>
            </div>
          </div>

          <div class="ui-path-card__header-bottom">
            <div class="ui-path-card__action ui-card__action">
              <div class="ui-button-group">
                <button class="ui-path-card__button--show-details ui-button">
                  <span class="ui-button__text">Show details</span>

                  <img class="ui-icon" src="/assets/svg/arrow-down.svg" />
                </button>
                <button
                  class="ui-path-card__button--start-path ui-button ui-button--primary"
                >
                  Start path
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- end: ui-path-card__header -->

        <div
          class="ui-path-card__details ui-progress-indicator ui-progress-indicator--vertical slds-progress slds-progress_vertical"
        >
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
                <a href="#" class="ui-path-card__details-item">
                  <span class="ui-path-card__details-item-name">
                    Business structure
                  </span>
                  <span class="ui-path-card__details-item-info">4 questions</span>
                </a>
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
                <a href="#" class="ui-path-card__details-item">
                  <span class="ui-path-card__details-item-name">Company name</span>
                  <span class="ui-path-card__details-item-info">10 minutes</span>
                </a>
              </div>
            </li>
            <li class="form__list-item slds-progress__item slds-is-active">
              <div class="slds-progress__marker">
                <span class="slds-assistive-text">Active</span>
              </div>
              <div
                class="slds-progress__item_content slds-grid slds-grid_align-spread"
              >
                <a href="#" class="ui-path-card__details-item">
                  <span class="ui-path-card__details-item-name">
                    Company details
                  </span>
                  <span class="ui-path-card__details-item-info">12 questions</span>
                </a>
              </div>
            </li>
            <li class="form__list-item slds-progress__item">
              <div class="slds-progress__marker"></div>
              <div
                class="slds-progress__item_content slds-grid slds-grid_align-spread"
              >
                <a href="#" class="ui-path-card__details-item">
                  <span class="ui-path-card__details-item-name">
                    Owners &amp; key people
                  </span>
                  <span class="ui-path-card__details-item-info">
                    8 questions | 2 documents
                  </span>
                </a>
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
      </div>
    </div>
    `
  )
  .add(
    'Pathway card expanded',
    () => `
    <div class="ui-card ui-path-card">
      <div class="ui-path-card__content">
        <div class="ui-path-card__header">
          <div class="ui-path-card__header-top">
            <div class="ui-path-card__progress-ring">
              <div
                class="ui-progress-ring slds-progress-ring slds-progress-ring_complete"
              >
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
                  <span
                    class="slds-icon_container slds-icon-utility-check"
                    title="Complete"
                  >
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
            </div>

            <div class="ui-path-card__header-panel">
              <div class="ui-path-card__header-title">Submit company profile</div>

              <div class="ui-path-card__progress-updates">
                <span class="ui-path-card__progress-updates-item">1/4 Steps</span>
                |
                <span class="ui-path-card__progress-updates-item">
                  6/24 Questions
                </span>
                |
                <span class="ui-path-card__progress-updates-item">
                  0/4 Documents
                </span>

                <div class="ui-path-card__time">2 Days</div>
              </div>

              <p class="ui-path-card__text">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud.
              </p>
            </div>
          </div>

          <div class="ui-path-card__header-bottom">
            <div class="ui-path-card__action ui-card__action">
              <div class="ui-button-group">
                <button class="ui-path-card__button--show-details ui-button">
                  <span class="ui-button__text">Show details</span>

                  <img class="ui-icon" src="/assets/svg/arrow-down.svg" />
                </button>
                <button
                  class="ui-path-card__button--start-path ui-button ui-button--primary"
                >
                  Start path
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- end: ui-path-card__header -->

        <div
          class="ui-path-card__details ui-progress-indicator ui-progress-indicator--vertical slds-progress slds-progress_vertical"
        >
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
                <a href="#" class="ui-path-card__details-item">
                  <span class="ui-path-card__details-item-name">
                    Business structure
                  </span>
                  <span class="ui-path-card__details-item-info">4 questions</span>
                </a>
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
                <a href="#" class="ui-path-card__details-item">
                  <span class="ui-path-card__details-item-name">Company name</span>
                  <span class="ui-path-card__details-item-info">10 minutes</span>
                </a>
              </div>
            </li>
            <li class="form__list-item slds-progress__item slds-is-active">
              <div class="slds-progress__marker">
                <span class="slds-assistive-text">Active</span>
              </div>
              <div
                class="slds-progress__item_content slds-grid slds-grid_align-spread"
              >
                <a href="#" class="ui-path-card__details-item">
                  <span class="ui-path-card__details-item-name">
                    Company details
                  </span>
                  <span class="ui-path-card__details-item-info">12 questions</span>
                </a>
              </div>
            </li>
            <li class="form__list-item slds-progress__item">
              <div class="slds-progress__marker"></div>
              <div
                class="slds-progress__item_content slds-grid slds-grid_align-spread"
              >
                <a href="#" class="ui-path-card__details-item">
                  <span class="ui-path-card__details-item-name">
                    Owners &amp; key people
                  </span>
                  <span class="ui-path-card__details-item-info">
                    8 questions | 2 documents
                  </span>
                </a>
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
      </div>
    </div>
    `
  )
  .add(
    'With header and button',
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
            class="ui-button ui-button--default"
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
    'With Related list',
    () => `
    <div
      class="ui-related-list-card ui-card"
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
            class="ui-button ui-button--default"
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
  )
  .add(
    'Section panel / Form panel expanded',
    () => `
    <div class="ui-form-card ui-card">
      <div class="ui-form-card__content">
        <div class="ui-form-card__header">
          <div class="ui-form-card__progress-ring">
            <div
              class="ui-progress-ring slds-progress-ring slds-progress-ring_complete"
            >
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
                <span
                  class="slds-icon_container slds-icon-utility-check"
                  title="Complete"
                >
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
          </div>

          <div class="ui-form-card__title-panel">
            <div class="ui-form-card__header-title">
              Define entity structure and activities
            </div>
            <div class="ui-form-card__header-subtitle">
              A description here on this line right here. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud.
            </div>
          </div>

          <div class="ui-form-card__time">about 10 min</div>
        </div>

        <form class="ui-form ui-form-card__form">
          <div class="slds-progress slds-progress_vertical">
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
                  <div class="ui-form-element slds-form-element">
                    <label
                      class="ui-form-element__label slds-form-element__label"
                      for="text-input-id-1"
                    >
                      <span class="ui-form-element__label-name">
                        What is your entity's name?
                      </span>

                      <span class="ui-form-element__label-description">
                        Don't worry. You will be able to change your name later if
                        you need.
                      </span>
                    </label>
                    <div
                      class="ui-form-element__control slds-form-element__control"
                    >
                      <input
                        id="text-input-id-1"
                        class="ui-form-element__control-input slds-input"
                        type="text"
                        placeholder="Type something..."
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li class="form__list-item slds-progress__item slds-is-active">
                <div class="slds-progress__marker">
                  <span class="slds-assistive-text">Active</span>
                </div>
                <div
                  class="slds-progress__item_content slds-grid slds-grid_align-spread"
                >
                  <div class="ui-form-element slds-form-element">
                    <label
                      class="ui-form-element__label slds-form-element__label"
                      for="text-input-id-1"
                    >
                      <span class="ui-form-element__label-name">
                        Are you a financial company?
                      </span>

                      <span class="ui-form-element__label-description">
                        A finanacial company is a bank, investment business or
                        similar.
                      </span>
                    </label>
                    <div
                      class="ui-form-element__control slds-form-element__control"
                    >
                      <input
                        id="text-input-id-1"
                        class="ui-form-element__control-input slds-input"
                        type="text"
                        placeholder="Type something..."
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li class="form__list-item slds-progress__item">
                <div class="slds-progress__marker"></div>
                <div
                  class="slds-progress__item_content slds-grid slds-grid_align-spread"
                >
                  <div class="ui-form-element slds-form-element">
                    <label
                      class="ui-form-element__label slds-form-element__label"
                      for="text-input-id-1"
                    >
                      <span class="ui-form-element__label-name">
                        What business sector are you in?
                      </span>

                      <span class="ui-form-element__label-description">
                        Tell us what sector you work in
                      </span>
                    </label>
                    <div
                      class="ui-form-element__control slds-form-element__control"
                    >
                      <input
                        id="text-input-id-1"
                        class="ui-form-element__control-input slds-input"
                        type="text"
                        placeholder="Type something..."
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li class="form__list-item slds-progress__item">
                <div class="slds-progress__marker"></div>
                <div
                  class="slds-progress__item_content slds-grid slds-grid_align-spread"
                >
                  <div class="form-control-group">
                    {% include 'components/picklist--b.html' %}
                  </div>
                </div>
              </li>
              <li class="form__list-item slds-progress__item">
                <div class="slds-progress__marker"></div>
                <div
                  class="slds-progress__item_content slds-grid slds-grid_align-spread"
                >
                  <div class="ui-form-element slds-form-element">
                    <label
                      class="ui-form-element__label slds-form-element__label"
                      for="text-input-id-1"
                    >
                      <span class="ui-form-element__label-name">
                        Stage of set up
                      </span>

                      <span class="ui-form-element__label-description">
                        Are you setting up a branch, transferring or setting up a
                        new entity
                      </span>
                    </label>
                    <div
                      class="ui-form-element__control slds-form-element__control"
                    >
                      <input
                        id="text-input-id-1"
                        class="ui-form-element__control-input slds-input"
                        type="text"
                        placeholder="Type something..."
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li class="form__list-item slds-progress__item">
                <div class="slds-progress__marker"></div>
                <div
                  class="slds-progress__item_content slds-grid slds-grid_align-spread"
                >
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
                    <div
                      class="ui-form-element__control slds-form-element__control"
                    >
                      <input
                        id="text-input-id-1"
                        class="ui-form-element__control-input slds-input"
                        type="text"
                        placeholder="Type something..."
                        autocomplete="off"
                      />
                    </div>
                  </div>
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
          <div class="ui-form-card__action">
            <span class="ui-form-card__field-steps">
              <span class="ui-form-card__field-steps-focused">0</span>
              /
              <span class="ui-form-card__field-steps-number">1</span>
            </span>
            <div class="ui-button-group ui-button-group--right">
              <button class="ui-button ui-button--default">Edit</button>
              <button class="ui-button ui-button--primary">Confrim</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    `
  )
  .add(
    'Section panel / Form panel collapsed',
    () => `
    <div class="ui-form-card ui-card ui-form-card--collapsed">
      <div class="ui-form-card__content">
        <div class="ui-form-card__header">
          <div class="ui-form-card__progress-ring">
            <div
              class="ui-progress-ring slds-progress-ring slds-progress-ring_complete"
            >
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
                <span
                  class="slds-icon_container slds-icon-utility-check"
                  title="Complete"
                >
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
          </div>

          <div class="ui-form-card__title-panel">
            <div class="ui-form-card__header-title">
              Define entity structure and activities
            </div>
            <div class="ui-form-card__header-subtitle">
              A description here on this line right here. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud.
            </div>
          </div>

          <div class="ui-form-card__time">about 10 min</div>
        </div>

        <form class="ui-form ui-form-card__form">
          <div class="slds-progress slds-progress_vertical">
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
                  <div class="ui-form-element slds-form-element">
                    <label
                      class="ui-form-element__label slds-form-element__label"
                      for="text-input-id-1"
                    >
                      <span class="ui-form-element__label-name">
                        What is your entity's name?
                      </span>

                      <span class="ui-form-element__label-description">
                        Don't worry. You will be able to change your name later if
                        you need.
                      </span>
                    </label>
                    <div
                      class="ui-form-element__control slds-form-element__control"
                    >
                      <input
                        id="text-input-id-1"
                        class="ui-form-element__control-input slds-input"
                        type="text"
                        placeholder="Type something..."
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li class="form__list-item slds-progress__item slds-is-active">
                <div class="slds-progress__marker">
                  <span class="slds-assistive-text">Active</span>
                </div>
                <div
                  class="slds-progress__item_content slds-grid slds-grid_align-spread"
                >
                  <div class="ui-form-element slds-form-element">
                    <label
                      class="ui-form-element__label slds-form-element__label"
                      for="text-input-id-1"
                    >
                      <span class="ui-form-element__label-name">
                        Are you a financial company?
                      </span>

                      <span class="ui-form-element__label-description">
                        A finanacial company is a bank, investment business or
                        similar.
                      </span>
                    </label>
                    <div
                      class="ui-form-element__control slds-form-element__control"
                    >
                      <input
                        id="text-input-id-1"
                        class="ui-form-element__control-input slds-input"
                        type="text"
                        placeholder="Type something..."
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li class="form__list-item slds-progress__item">
                <div class="slds-progress__marker"></div>
                <div
                  class="slds-progress__item_content slds-grid slds-grid_align-spread"
                >
                  <div class="ui-form-element slds-form-element">
                    <label
                      class="ui-form-element__label slds-form-element__label"
                      for="text-input-id-1"
                    >
                      <span class="ui-form-element__label-name">
                        What business sector are you in?
                      </span>

                      <span class="ui-form-element__label-description">
                        Tell us what sector you work in
                      </span>
                    </label>
                    <div
                      class="ui-form-element__control slds-form-element__control"
                    >
                      <input
                        id="text-input-id-1"
                        class="ui-form-element__control-input slds-input"
                        type="text"
                        placeholder="Type something..."
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li class="form__list-item slds-progress__item">
                <div class="slds-progress__marker"></div>
                <div
                  class="slds-progress__item_content slds-grid slds-grid_align-spread"
                >
                  <div class="form-control-group">
                    {% include 'components/picklist--b.html' %}
                  </div>
                </div>
              </li>
              <li class="form__list-item slds-progress__item">
                <div class="slds-progress__marker"></div>
                <div
                  class="slds-progress__item_content slds-grid slds-grid_align-spread"
                >
                  <div class="ui-form-element slds-form-element">
                    <label
                      class="ui-form-element__label slds-form-element__label"
                      for="text-input-id-1"
                    >
                      <span class="ui-form-element__label-name">
                        Stage of set up
                      </span>

                      <span class="ui-form-element__label-description">
                        Are you setting up a branch, transferring or setting up a
                        new entity
                      </span>
                    </label>
                    <div
                      class="ui-form-element__control slds-form-element__control"
                    >
                      <input
                        id="text-input-id-1"
                        class="ui-form-element__control-input slds-input"
                        type="text"
                        placeholder="Type something..."
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li class="form__list-item slds-progress__item">
                <div class="slds-progress__marker"></div>
                <div
                  class="slds-progress__item_content slds-grid slds-grid_align-spread"
                >
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
                    <div
                      class="ui-form-element__control slds-form-element__control"
                    >
                      <input
                        id="text-input-id-1"
                        class="ui-form-element__control-input slds-input"
                        type="text"
                        placeholder="Type something..."
                        autocomplete="off"
                      />
                    </div>
                  </div>
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
          <div class="ui-form-card__action">
            <span class="ui-form-card__field-steps">
              <span class="ui-form-card__field-steps-focused">0</span>
              /
              <span class="ui-form-card__field-steps-number">1</span>
            </span>
            <div class="ui-button-group ui-button-group--right">
              <button class="ui-button ui-button--default">Edit</button>
              <button class="ui-button ui-button--primary">Confrim</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    `
  )
  .add(
    'Section panel / Form panel disabled',
    () => `
    <div class="ui-form-card ui-form-card--collapsed ui-card ui-card--disabled">
      <div class="ui-form-card__content">
        <div class="ui-form-card__header">
          <div class="ui-form-card__progress-ring">
            <div
              class="ui-progress-ring slds-progress-ring slds-progress-ring_complete"
            >
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
                <span
                  class="slds-icon_container slds-icon-utility-check"
                  title="Complete"
                >
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
          </div>

          <div class="ui-form-card__title-panel">
            <div class="ui-form-card__header-title">
              Define entity structure and activities
            </div>
            <div class="ui-form-card__header-subtitle">
              A description here on this line right here. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud.
            </div>
          </div>

          <div class="ui-form-card__time">about 10 min</div>
        </div>

        <form class="ui-form ui-form-card__form">
          <div class="slds-progress slds-progress_vertical">
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
                  <div class="ui-form-element slds-form-element">
                    <label
                      class="ui-form-element__label slds-form-element__label"
                      for="text-input-id-1"
                    >
                      <span class="ui-form-element__label-name">
                        What is your entity's name?
                      </span>

                      <span class="ui-form-element__label-description">
                        Don't worry. You will be able to change your name later if
                        you need.
                      </span>
                    </label>
                    <div
                      class="ui-form-element__control slds-form-element__control"
                    >
                      <input
                        id="text-input-id-1"
                        class="ui-form-element__control-input slds-input"
                        type="text"
                        placeholder="Type something..."
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li class="form__list-item slds-progress__item slds-is-active">
                <div class="slds-progress__marker">
                  <span class="slds-assistive-text">Active</span>
                </div>
                <div
                  class="slds-progress__item_content slds-grid slds-grid_align-spread"
                >
                  <div class="ui-form-element slds-form-element">
                    <label
                      class="ui-form-element__label slds-form-element__label"
                      for="text-input-id-1"
                    >
                      <span class="ui-form-element__label-name">
                        Are you a financial company?
                      </span>

                      <span class="ui-form-element__label-description">
                        A finanacial company is a bank, investment business or
                        similar.
                      </span>
                    </label>
                    <div
                      class="ui-form-element__control slds-form-element__control"
                    >
                      <input
                        id="text-input-id-1"
                        class="ui-form-element__control-input slds-input"
                        type="text"
                        placeholder="Type something..."
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li class="form__list-item slds-progress__item">
                <div class="slds-progress__marker"></div>
                <div
                  class="slds-progress__item_content slds-grid slds-grid_align-spread"
                >
                  <div class="ui-form-element slds-form-element">
                    <label
                      class="ui-form-element__label slds-form-element__label"
                      for="text-input-id-1"
                    >
                      <span class="ui-form-element__label-name">
                        What business sector are you in?
                      </span>

                      <span class="ui-form-element__label-description">
                        Tell us what sector you work in
                      </span>
                    </label>
                    <div
                      class="ui-form-element__control slds-form-element__control"
                    >
                      <input
                        id="text-input-id-1"
                        class="ui-form-element__control-input slds-input"
                        type="text"
                        placeholder="Type something..."
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li class="form__list-item slds-progress__item">
                <div class="slds-progress__marker"></div>
                <div
                  class="slds-progress__item_content slds-grid slds-grid_align-spread"
                >
                  <div class="form-control-group">
                    {% include 'components/picklist--b.html' %}
                  </div>
                </div>
              </li>
              <li class="form__list-item slds-progress__item">
                <div class="slds-progress__marker"></div>
                <div
                  class="slds-progress__item_content slds-grid slds-grid_align-spread"
                >
                  <div class="ui-form-element slds-form-element">
                    <label
                      class="ui-form-element__label slds-form-element__label"
                      for="text-input-id-1"
                    >
                      <span class="ui-form-element__label-name">
                        Stage of set up
                      </span>

                      <span class="ui-form-element__label-description">
                        Are you setting up a branch, transferring or setting up a
                        new entity
                      </span>
                    </label>
                    <div
                      class="ui-form-element__control slds-form-element__control"
                    >
                      <input
                        id="text-input-id-1"
                        class="ui-form-element__control-input slds-input"
                        type="text"
                        placeholder="Type something..."
                        autocomplete="off"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li class="form__list-item slds-progress__item">
                <div class="slds-progress__marker"></div>
                <div
                  class="slds-progress__item_content slds-grid slds-grid_align-spread"
                >
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
                    <div
                      class="ui-form-element__control slds-form-element__control"
                    >
                      <input
                        id="text-input-id-1"
                        class="ui-form-element__control-input slds-input"
                        type="text"
                        placeholder="Type something..."
                        autocomplete="off"
                      />
                    </div>
                  </div>
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
          <div class="ui-form-card__action">
            <span class="ui-form-card__field-steps">
              <span class="ui-form-card__field-steps-focused">0</span>
              /
              <span class="ui-form-card__field-steps-number">1</span>
            </span>
            <div class="ui-button-group ui-button-group--right">
              <button class="ui-button ui-button--default">Edit</button>
              <button class="ui-button ui-button--primary">Confrim</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    `
  )
  .add(
    'Property base',
    () => `
    <div class="ui-property-card ui-card">
      <span class="ui-property-card__property-size">10,000 Sq ft</span>
      <div class="ui-property-card__picture">
        <img
          src="/assets/images/DIFC_General Architecture_087.jpg"
          alt="A property"
          class="ui-property-card__image"
        />
      </div>

      <div class="ui-property-card__body">
        <div class="ui-property-card__body-top">
          <span class="ui-property-card__name">Building name here</span>
          <span class="ui-property-card__type">Property type</span>
        </div>

        <div class="ui-property-card__body-bottom">
          <div class="ui-property-card__meta">
            <span class="ui-property-card__agency">Shell &amp; Core</span>
            <span class="ui-property-card__price">799,000 AED</span>
          </div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Property selected',
    () => `
    <div class="ui-property-card ui-property-card--selected ui-card">
      <img src="/assets/svg/tick-lrg.svg" alt="" />
    </div>
    `
  )
  .add(
    'Property details',
    () => `
    <div class="ui-property-details-card ui-card">
      <h2 class="ui-property-details-card__title">Details</h2>
      <button class="ui-button ui-button--close">
        <span class="ui-button__text ui-button__text--hidden">Close</span>
        <img
          class="ui-button__icon--close icon-image"
          src="/assets/svg/close-light.svg"
          alt="cross"
        />
      </button>

      <div class="ui-property-details-card__pictures">
        <div class="ui-property-details-card__pictures-main">
          <a href="#">
            <img src="/assets/images/DIFC_General Architecture_095.jpg" alt="" />
          </a>
        </div>
        <div class="ui-property-details-card__pictures-secondary">
          <a href="#">
            <img src="/assets/images/DIFC_General Architecture_096.jpg" alt="" />
          </a>
          <a href="#">
            <img src="/assets/images/DIFC_General Architecture_097.jpg" alt="" />
          </a>
        </div>
      </div>

      <div class="ui-property-details-card__description">
        <span class="ui-property-details-card__description-type">
          Property type or Rent/Sale
        </span>
        <span class="ui-property-details-card__description-name">
          Unit 1370, Building name
        </span>
        <span class="ui-property-details-card__description-price">
          850,000 AED Year
        </span>

        <button class="ui-button ui-button--primary">Request viewing</button>

        <div class="ui-property-details-card__description-info">
          <p class="ui-property-details-card__description-info-text">
            Suspendisse ultrices mattis erat, sit amet interdum nibh tempus sed.
            Quisque aliquet massa et diam condimentum, nec luctus dolor tincidunt.
            Vivamus et faucibus dolor, vitae porttitor neque. Pellentesque lobortis
            mi arcu, sit amet egestas nibh accumsan vestibulum. Cras euismod lorem
            in ex tincidunt varius. Quisque quis ligula sed.
            <a href="#">See more</a>
          </p>

          <div class="ui-property-details-card__description-section">
            <h4>Facts</h4>
            <div class="ui-property-details-card__description-section-item">
              <span>
                <strong>Area:</strong>
                11,000 sq ft
              </span>
              <span>
                <strong>Price/Sq. ft:</strong>
                270.00 AED
              </span>
              <span>
                <strong>Delivery Condition:</strong>
                Shell and Core
              </span>
            </div>
          </div>

          <div class="ui-property-details-card__description-section">
            <h4>Amenities</h4>
            <div class="ui-property-details-card__description-section-item">
              <ul>
                <li>Covered parking</li>
                <li>Visitor and valet parking</li>
                <li>Easy access to Sheik Zayed Road</li>
                <li>Retail in building</li>
              </ul>

              <ul>
                <li>Easy access to Dubai Metro</li>
                <li>24 hour security</li>
                <li>Easy access to Dubai Metro</li>
              </ul>
            </div>
          </div>

          <div class="ui-property-details-card__description-section">
            <h4>Location</h4>
            <img src="/assets/images/google-map.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Service request',
    () => `
    <div class="ui-service-request-card ui-card">
      <h3 class="ui-service-request-card__title">Service request name</h3>
      <p class="ui-service-request-card__text">
        A description of how request work. Explain to the user that our recomended
        actions are in next steps and a list of all service request are in the All
        Services tab.
      </p>

      <div class="ui-card__action ui-card__action--spread">
        <span class="ui-service-request-card__time">about 4 days</span>
        <a href="#" class="ui-button ui-button--default">View request</a>
      </div>
    </div>
    `
  );

storiesOf('DIFC Components/Comments', module)
  .add(
    'Base',
    () => `
    <div class="ui-comment slds-feed">
      <ul class="ui-comment__list slds-feed__list">
        <li class="ui-comment__item slds-feed__item">
          <article class="ui-comment__post slds-post">
            <header class="slds-post__header slds-media">
              <div class="slds-media__figure">
                <a class="ui-avatar ui-avatar--circle" href="#">
                  <span class="slds-avatar slds-avatar_circle slds-avatar_medium">
                    <span
                      class="slds-icon_container slds-icon-standard-user"
                      title="Description of icon when needed"
                    >
                      <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                        <use
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#user"
                        />
                      </svg>
                      <span class="slds-assistive-text">
                        Description of icon when needed
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div class="slds-media__body">
                <div
                  class="ui-comment__user slds-grid slds-grid_align-spread slds-has-flexi-truncate"
                >
                  <p>
                    <a href="#" title="Jason Rodgers">Jason Rogers</a>
                    —
                    <a href="#" title="Design Systems">Design Systems</a>
                  </p>
                  <button
                    class="slds-button slds-button_icon slds-button_icon-x-small"
                    aria-haspopup="true"
                    title="More Options"
                  >
                    <svg class="slds-button__icon" aria-hidden="true">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"
                      />
                    </svg>
                    <span class="slds-assistive-text">More Options</span>
                  </button>
                </div>
                <p class="slds-text-body_small">
                  <a
                    href="#"
                    title="Click for single-item view of this post"
                    class="ui-comment__time slds-text-link_reset"
                  >
                    5 days Ago
                  </a>
                </p>
              </div>
            </header>
            <div class="slds-post__content slds-text-longform">
              <p>
                Hey there! Here's the latest demo presentation
                <a href="#" title="Jenna Davis">@Jenna Davis</a>
                , let me know if there are any changes. I've updated slides 3-8 and
                slides 16-18 slides with new product shots.
              </p>
            </div>
            <footer class="slds-post__footer">
              <ul class="slds-post__footer-actions-list slds-list_horizontal">
                <li class="slds-col slds-item slds-m-right_medium">
                  <button
                    title="Like this item"
                    class="slds-button_reset slds-post__footer-action"
                    aria-pressed="false"
                  >
                    <svg
                      class="slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle"
                      aria-hidden="true"
                    >
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#like"
                      />
                    </svg>
                    Like
                  </button>
                </li>
                <li class="slds-col slds-item slds-m-right_medium">
                  <button
                    title="Comment on this item"
                    class="slds-button_reset slds-post__footer-action"
                  >
                    <svg
                      class="slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle"
                      aria-hidden="true"
                    >
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#share_post"
                      />
                    </svg>
                    Comment
                  </button>
                </li>
                <li class="slds-col slds-item slds-m-right_medium">
                  <button
                    title="Share this item"
                    class="slds-button_reset slds-post__footer-action"
                  >
                    <svg
                      class="slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle"
                      aria-hidden="true"
                    >
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#share"
                      />
                    </svg>
                    Share
                  </button>
                </li>
              </ul>
              <ul
                class="slds-post__footer-meta-list slds-list_horizontal slds-has-dividers_right slds-text-title"
              >
                <li class="slds-item">20 Shares</li>
                <li class="slds-item">259 Views</li>
              </ul>
            </footer>
          </article>
        </li>
      </ul>
    </div>
    `
  )
  .add(
    'With reply',
    () => `
    <div class="ui-comment slds-feed">
      <ul class="ui-comment__list slds-feed__list">
        <li class="ui-comment__item slds-feed__item">
          <article class="ui-comment__post slds-post">
            <header class="slds-post__header slds-media">
              <div class="slds-media__figure">
                <a class="ui-avatar ui-avatar--circle" href="#">
                  <span class="slds-avatar slds-avatar_circle slds-avatar_medium">
                    <span
                      class="slds-icon_container slds-icon-standard-user"
                      title="Description of icon when needed"
                    >
                      <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                        <use
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#user"
                        />
                      </svg>
                      <span class="slds-assistive-text">
                        Description of icon when needed
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div class="slds-media__body">
                <div
                  class="slds-grid slds-grid_align-spread slds-has-flexi-truncate"
                >
                  <p>
                    <a href="#" title="Jason Rodgers">
                      Jason Rogers
                    </a>
                    —
                    <a href="#" title="Design Systems">
                      Design Systems
                    </a>
                  </p>
                  <button
                    class="slds-button slds-button_icon slds-button_icon-x-small"
                    aria-haspopup="true"
                    title="More Options"
                  >
                    <svg class="slds-button__icon" aria-hidden="true">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"
                      />
                    </svg>
                    <span class="slds-assistive-text">More Options</span>
                  </button>
                </div>
                <p class="slds-text-body_small">
                  <a
                    href="#"
                    title="Click for single-item view of this post"
                    class="ui-comment__time slds-text-link_reset"
                  >
                    5 days Ago
                  </a>
                </p>
              </div>
            </header>
            <div class="slds-post__content slds-text-longform">
              <p>
                Hey there! Here's the latest demo presentation
                <a href="#" title="Jenna Davis">@Jenna Davis</a>
                , let me know if there are any changes. I've updated slides 3-8 and
                slides 16-18 slides with new product shots.
              </p>
            </div>
            <footer class="slds-post__footer">
              <ul class="slds-post__footer-actions-list slds-list_horizontal">
                <li class="slds-col slds-item slds-m-right_medium">
                  <button
                    title="Like this item"
                    class="slds-button_reset slds-post__footer-action"
                    aria-pressed="false"
                  >
                    <svg
                      class="slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle"
                      aria-hidden="true"
                    >
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#like"
                      />
                    </svg>
                    Like
                  </button>
                </li>
                <li class="slds-col slds-item slds-m-right_medium">
                  <button
                    title="Comment on this item"
                    class="slds-button_reset slds-post__footer-action"
                  >
                    <svg
                      class="slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle"
                      aria-hidden="true"
                    >
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#share_post"
                      />
                    </svg>
                    Comment
                  </button>
                </li>
                <li class="slds-col slds-item slds-m-right_medium">
                  <button
                    title="Share this item"
                    class="slds-button_reset slds-post__footer-action"
                  >
                    <svg
                      class="slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle"
                      aria-hidden="true"
                    >
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#share"
                      />
                    </svg>
                    Share
                  </button>
                </li>
              </ul>
              <ul
                class="slds-post__footer-meta-list slds-list_horizontal slds-has-dividers_right slds-text-title"
              >
                <li class="slds-item">20 Shares</li>
                <li class="slds-item">259 Views</li>
              </ul>
            </footer>
          </article>
          <div class="ui-comment__post-reply slds-feed__item-comments">
            <ul>
              <li>
                <article class="slds-comment slds-media slds-hint-parent">
                  <div class="slds-media__figure">
                    <a class="ui-avatar ui-avatar--small ui-avatar--circle" href="#">
                      <span
                        class="slds-avatar slds-avatar_circle slds-avatar_small"
                      >
                        <span
                          class="slds-icon_container slds-icon-standard-user"
                          title="Description of icon when needed"
                        >
                          <svg
                            class="slds-icon slds-icon_x-small"
                            aria-hidden="true"
                          >
                            <use
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#user"
                            />
                          </svg>
                          <span class="slds-assistive-text">
                            Description of icon when needed
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div class="slds-media__body">
                    <header class="slds-media slds-media_center">
                      <div
                        class="slds-grid slds-grid_align-spread slds-has-flexi-truncate"
                      >
                        <p class="slds-truncate" title="Jenna Davis">
                          <a href="#">Jenna Davis</a>
                        </p>
                        <button
                          class="slds-button slds-button_icon slds-button_icon-x-small"
                          aria-haspopup="true"
                          title="More Options"
                        >
                          <svg class="slds-button__icon" aria-hidden="true">
                            <use
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"
                            />
                          </svg>
                          <span class="slds-assistive-text">More Options</span>
                        </button>
                      </div>
                    </header>
                    <div class="slds-comment__content slds-text-longform">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <footer>
                      <ul
                        class="ui-comment__post-reply-meta-list slds-list_horizontal slds-has-dividers_right slds-text-body_small"
                      >
                        <li class="slds-item">
                          <button
                            class="slds-button_reset"
                            title="Like this item"
                            aria-pressed="false"
                          >
                            Like
                          </button>
                        </li>
                        <li class="ui-comment__time slds-item">16hr Ago</li>
                      </ul>
                    </footer>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    `
  );

storiesOf('DIFC Components/Date Picker', module)
  .add(
    'Base',
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
          <button class="ui-date-picker__button">
            <img src="/assets/svg/event.svg" alt="" />
          </button>
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
    'Open',
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
          <button class="ui-date-picker__button">
            <img src="/assets/svg/event.svg" alt="" />
          </button>
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
    'With range selection',
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
          <button class="ui-date-picker__button">
            <img src="/assets/svg/event.svg" alt="" />
          </button>
        </label>
        <div
          class="ui-form-element__control slds-form-element__control slds-input-has-icon slds-input-has-icon_right"
        >
          <input
            id="date-input-id"
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
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"
                    />
                  </svg>
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
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"
                    />
                  </svg>
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
          <button class="slds-button slds-align_absolute-center slds-text-link">
            Today
          </button>
        </div>
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

storiesOf('DIFC Components/Forms/Checkboxes', module)
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

storiesOf('DIFC Components/Forms/Checkbox Toggles', module)
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

storiesOf('DIFC Components/Forms/Inputs Fields', module)
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
    'Side by side',
    () => `
    <div class="ui-form-element-group">
      <div class="ui-form-element slds-form-element">
        <label
          class="ui-form-element__label slds-form-element__label"
          for="text-input-id-1"
        >
          <span class="ui-form-element__label-name">
            Input Label
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
    `
  );

storiesOf('DIFC Components/Forms/Radios', module)
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

storiesOf('DIFC Components/Forms/Textareas', module)
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

storiesOf('DIFC Components/Footer', module).add(
  'Base',
  () => `
      <div class="ui-footer">
        <div class="ui-footer__top">
          <div class="ui-footer__col">
            <ul class="ui-footer__list">
              <li><a href="#">Data Protections</a></li>
              <li><a href="#">Terms and Privacy</a></li>
              <li><a href="#">Information security</a></li>
            </ul>
          </div>

          <div class="ui-footer__col">
            <ul class="ui-footer__list">
              <li><a href="#">OneDIFC Support</a></li>
              <li><a href="#">OneDIFC Account view</a></li>
              <li class="social-icons-panel">
                <a href="#">
                  <img src="/assets/svg/facebook.svg" alt="" />
                </a>
                <a href="#">
                  <img src="/assets/svg/linkedin.svg" alt="" />
                </a>
                <a href="#">
                  <img src="/assets/svg/twitter.svg" alt="" />
                </a>
                <a href="#">
                <img src="/assets/svg/youtube.svg" alt="" />
                </a>
                <a href="#">
                  <img src="/assets/svg/instagram.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>

          <div class="ui-footer__col">
            <form class="ui-form">
              <div class="ui-form-element slds-form-element">
                <label
                  class="ui-form-element__label slds-form-element__label"
                  for="text-input-id-1"
                >
                  Who do you need to contact?
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
              <div class="ui-form-element__action">
                <button class="ui-button ui-button--primary">Contact us</button>
              </div>
            </form>
          </div>
        </div>

        <div class="ui-footer__bottom">
          <p>COPYRIGHTS &copy; 2019 DIFC. ALL RIGHTS RESERVED.</p>
          <button class="ui-button-icon slds-button slds-button_icon" aria-pressed="false">
            <span>Back to top</span>
            <svg class="slds-button__icon" aria-hidden="true">
              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronup"></use>
            </svg>
            <span class="slds-assistive-text">Back to top</span>
          </button>
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
    'Base smaller height',
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
                <span class="ui-global-navigation__user-name">Company name</span>
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
                <span class="ui-global-navigation__user-name">Company name</span>
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
    'With header and sub items',
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
    'Item selected',
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
    'With icons on both sides of item',
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

storiesOf('DIFC Components/Page Headers', module)
  .add(
    'With Progress Indicator',
    () => `
    <div class="ui-page-header">
      <div class="ui-page-header__wrap">
        <div class="ui-page-header__col">
          <h1 class="ui-page-header__title">Incorporate a company</h1>
          <h2 class="ui-page-header__subtitle">
            Apply for incorporation to receive your licence to operate.
          </h2>
        </div>
        <div class="ui-page-header__col">
          <div class="ui-progress-indicator ui-progress-indicator--horizontal">
            <div class="slds-progress">
              <ol class="slds-progress__list">
                <li class="slds-progress__item slds-is-completed">
                  <button
                    class="slds-button slds-button_icon slds-button_icon slds-progress__marker slds-progress__marker_icon"
                    title="Step 1 - Completed"
                  >
                    <img
                      src="/assets/svg/progress-ring-complete.svg"
                      alt="complete icon"
                      class="icon-image"
                    />
                    <span class="slds-assistive-text">Step 1 - Completed</span>
                  </button>
                </li>
                <li class="slds-progress__item slds-is-completed">
                  <button
                    class="slds-button slds-button_icon slds-button_icon slds-progress__marker slds-progress__marker_icon"
                    title="Step 2 - Completed"
                  >
                    <img
                      src="/assets/svg/progress-ring-complete.svg"
                      alt="complete icon"
                      class="icon-image"
                    />
                    <span class="slds-assistive-text">Step 2 - Completed</span>
                  </button>
                </li>
                <li class="slds-progress__item slds-is-active">
                  <button
                    class="slds-button slds-progress__marker"
                    aria-describedby="step-3-tooltip"
                  >
                    <span class="slds-assistive-text">Step 3 - Active</span>
                  </button>
                </li>
                <li class="slds-progress__item">
                  <button class="slds-button slds-progress__marker">
                    <span class="slds-assistive-text">Step 4</span>
                  </button>
                </li>
                <li class="slds-progress__item">
                  <button class="slds-button slds-progress__marker">
                    <span class="slds-assistive-text">Step 5</span>
                  </button>
                </li>
              </ol>
              <div
                class="slds-progress-bar slds-progress-bar_x-small"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="50"
                role="progressbar"
              >
                <span class="slds-progress-bar__value" style="width:50%">
                  <span class="slds-assistive-text">Progress: 50%</span>
                </span>
              </div>
            </div>
            <div
              class="ui-popover slds-popover slds-popover_tooltip slds-nubbin_bottom"
              role="tooltip"
              id="step-3-tooltip"
            >
              <div class="slds-popover__body">Submit info</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'With Progress Bar',
    () => `
    <div class="ui-page-header">
      <div class="ui-page-header__wrap">
        <div class="ui-page-header__col">
          <h1 class="ui-page-header__title">Incorporate a company</h1>
          <h2 class="ui-page-header__subtitle">
            Apply for incorporation to receive your licence to operate.
          </h2>
        </div>
        <div class="ui-page-header__col">
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
        </div>
      </div>
    </div>
    `
  )
  .add(
    'With Breadcrumbs',
    () => `
    <div class="ui-page-header">
      <div class="ui-page-header__col">
        <h1 class="ui-page-header__title">Incorporate a company</h1>
        <h2 class="ui-page-header__subtitle">
          Apply for incorporation to receive your licence to operate.
        </h2>

        <nav class="ui-breadcrumbs" role="navigation" aria-label="Breadcrumbs">
          <ol class="slds-breadcrumb slds-list_horizontal slds-wrap">
            <li class="slds-breadcrumb__item slds-text-title_caps">
              <a href="#">Parent Name</a>
            </li>
            <li class="slds-breadcrumb__item slds-text-title_caps">
              <a href="#">Child Name</a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
    `
  );

storiesOf('DIFC Components/Picklists', module)
  .add(
    'Closed',
    () => `
    <div class="ui-picklist">
      <div class="ui-form-element slds-form-element">
        <label
          class="ui-form-element__label slds-form-element__label"
          for="combobox-unique-id-33"
        >
          Search
        </label>
        <div class="ui-form-element__control slds-form-element__control">
          <div class="slds-combobox_container slds-size_small">
            <div
              class="slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click"
              aria-expanded="true"
              aria-haspopup="listbox"
              role="combobox"
            >
              <div
                class="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_right"
                role="none"
              >
                <input
                  class="ui-form-element__control-input slds-input ui-form-element__combobox-input slds-combobox__input"
                  id="combobox-unique-id-33"
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
          class="ui-form-element__label slds-form-element__label"
          for="combobox-unique-id-33"
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
                  class="ui-form-element__control-input slds-input ui-form-element__combobox-input slds-combobox__input"
                  id="combobox-unique-id-33"
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
                  role="presentation"
                >
                  <li role="presentation" class="slds-listbox__item">
                    <div
                      id="listbox-option-unique-id-01"
                      class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center"
                      role="option"
                    >
                      <span class="slds-media__body">
                        <span class="slds-truncate" title="Option A">
                          Option A
                        </span>
                      </span>
                      <span class="slds-media__figure">
                        <svg
                          class="slds-icon slds-icon_x-small slds-listbox__icon-selected"
                          aria-hidden="true"
                        >
                          <use
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"
                          />
                        </svg>
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
                        <span class="slds-truncate" title="Option B">
                          Option B
                        </span>
                      </span>
                      <span class="slds-media__figure">
                        <svg
                          class="slds-icon slds-icon_x-small slds-listbox__icon-selected"
                          aria-hidden="true"
                        >
                          <use
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"
                          />
                        </svg>
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
                        <span class="slds-truncate" title="Option C">
                          Option C
                        </span>
                      </span>
                      <span class="slds-media__figure">
                        <svg
                          class="slds-icon slds-icon_x-small slds-listbox__icon-selected"
                          aria-hidden="true"
                        >
                          <use
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"
                          />
                        </svg>
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
                        <span class="slds-truncate" title="Option D">
                          Option D
                        </span>
                      </span>
                      <span class="slds-media__figure">
                        <svg
                          class="slds-icon slds-icon_x-small slds-listbox__icon-selected"
                          aria-hidden="true"
                        >
                          <use
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"
                          />
                        </svg>
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
                  class="ui-form-element__control-input slds-input slds-combobox__input slds-combobox__input-value"
                  id="combobox-unique-id-38"
                  aria-controls="listbox-unique-id"
                  autocomplete="off"
                  role="textbox"
                  type="text"
                  placeholder="Select an Option"
                  readonly=""
                  value="Option A"
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
                  <li role="presentation" class="slds-listbox__item">
                    <div
                      class="slds-media slds-listbox__option slds-listbox__option_plain"
                      role="presentation"
                      id="listbox-option-unique-id-00"
                    >
                      <h3 class="slds-listbox__option-header" role="presentation">
                        Recently List Viewed
                      </h3>
                    </div>
                  </li>
                  <li role="presentation" class="slds-listbox__item">
                    <div
                      id="listbox-option-unique-id-01"
                      class="slds-media slds-listbox__option slds-listbox__option_plain slds-media_small slds-media_center"
                      role="option"
                    >
                      <span class="slds-media__body">
                        <span class="slds-truncate" title="Option A">
                          Option A
                        </span>
                      </span>
                      <span class="slds-media__figure">
                        <svg
                          class="slds-icon slds-icon_x-small slds-listbox__icon-selected"
                          aria-hidden="true"
                        >
                          <use
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"
                          />
                        </svg>
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
                      <span class="slds-media__figure">
                        <svg
                          class="slds-icon slds-icon_x-small slds-listbox__icon-selected"
                          aria-hidden="true"
                        >
                          <use
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"
                          />
                        </svg>
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
                      <span class="slds-media__figure">
                        <svg
                          class="slds-icon slds-icon_x-small slds-listbox__icon-selected"
                          aria-hidden="true"
                        >
                          <use
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"
                          />
                        </svg>
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
                      <span class="slds-media__figure">
                        <svg
                          class="slds-icon slds-icon_x-small slds-listbox__icon-selected"
                          aria-hidden="true"
                        >
                          <use
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"
                          />
                        </svg>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            sed do eiusmod tempor incididunt ut labore.
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            sed do eiusmod tempor incididunt ut labore
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
            <button class="ui-button ui-button--primary ui-button--primary-outline slds-button slds-button_brand slds-col_bump-left">
              Next
            </button>
          </div>
        </footer>
      </section>
    </div>
    `
  )
  .add(
    'Walkthrough inline form',
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
              class="ui-button ui-button--primary ui-button--primary-outline slds-button slds-button_brand slds-col_bump-left"
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
    'Feature with icon',
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
    'Feature with header and footer',
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
              class="ui-button ui-button--default slds-button slds-button_neutral slds-col_bump-left"
            >
              Neutral
            </button>
          </div>
        </footer>
      </section>
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
        class="ui-popover slds-popover slds-popover_tooltip slds-nubbin_bottom" role="tooltip" 
        id="step-3-tooltip"
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
    <div 
      class="ui-progress-indicator ui-progress-indicator--vertical slds-progress slds-progress_vertical"
    >
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
  )
  .add(
    'Vertical with progress rings',
    () => `
    <div 
      class="ui-progress-indicator ui-progress-indicator--vertical ui-progress-indicator--vertical-rings slds-progress slds-progress_vertical"
    >
      <ol class="form__list slds-progress__list">
        <li class="form__list-item slds-progress__item slds-is-completed">
          <span
            class="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon"
            title="Complete"
          >
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
          </span>
          <div
            class="slds-progress__item_content slds-grid slds-grid_align-spread"
          >
            [Content Here]
          </div>
        </li>
        <li class="form__list-item slds-progress__item">
          <span
            class="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon"
            title="Complete"
          >
            <div class="ui-progress-ring slds-progress-ring slds-progress-ring_warning">
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
          </span>
          <div
            class="slds-progress__item_content slds-grid slds-grid_align-spread"
          >
            [Content Here]
          </div>
        </li>
        <li class="form__list-item slds-progress__item">
          <span
            class="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon"
            title="Complete"
          >
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
          </span>
          <div
            class="slds-progress__item_content slds-grid slds-grid_align-spread"
          >
            [Content Here]
          </div>
        </li>
        <li class="form__list-item slds-progress__item">
          <span
            class="slds-icon_container slds-icon-utility-success slds-progress__marker slds-progress__marker_icon"
            title="Complete"
          >
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
                  <span class="progress-count-number">4</span>
                  <span class="slds-assistive-text">Expired</span>
                </span>
              </div>
            </div>
          </span>
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
    'Partially drain',
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

storiesOf('DIFC Components/Spinners', module)
  .add(
    'Large',
    () => `
    <div class="ui-spinner">
      <div role="status" class="slds-spinner slds-spinner_large">
        <span class="slds-assistive-text">Loading</span>
        <div class="slds-spinner__dot-a"></div>
        <div class="slds-spinner__dot-b"></div>
      </div>
    </div>
    `
  )
  .add(
    'Medium',
    () => `
    <div class="ui-spinner">
      <div role="status" class="slds-spinner slds-spinner_medium">
        <span class="slds-assistive-text">Loading</span>
        <div class="slds-spinner__dot-a"></div>
        <div class="slds-spinner__dot-b"></div>
      </div>
    </div>
    `
  )
  .add(
    'Small',
    () => `
    <div class="ui-spinner">
      <div role="status" class="slds-spinner slds-spinner_small">
        <span class="slds-assistive-text">Loading</span>
        <div class="slds-spinner__dot-a"></div>
        <div class="slds-spinner__dot-b"></div>
      </div>
    </div>
    `
  )
  .add(
    'Inverse Large',
    () => `
    <div style="background-color: #0076cf">
      <div class="ui-spinner ui-spinner--inverse">
        <div role="status" class="slds-spinner slds-spinner_large">
          <span class="slds-assistive-text">Loading</span>
          <div class="slds-spinner__dot-a"></div>
          <div class="slds-spinner__dot-b"></div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Inverse Medium',
    () => `
    <div style="background-color: #0076cf">
      <div class="ui-spinner ui-spinner--inverse">
        <div role="status" class="slds-spinner slds-spinner_medium">
          <span class="slds-assistive-text">Loading</span>
          <div class="slds-spinner__dot-a"></div>
          <div class="slds-spinner__dot-b"></div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Inverse Small',
    () => `
    <div style="background-color: #0076cf">
      <div class="ui-spinner ui-spinner--inverse">
        <div role="status" class="slds-spinner slds-spinner_small">
          <span class="slds-assistive-text">Loading</span>
          <div class="slds-spinner__dot-a"></div>
          <div class="slds-spinner__dot-b"></div>
        </div>
      </div>
    </div>
    `
  );

storiesOf('DIFC Components/Tab Bars', module)
  .add(
    'Base',
    () => `
    <div class="ui-tab-bar">
      <div class="slds-tabs_default">
        <ul class="slds-tabs_default__nav" role="tablist">
          <li
            class="slds-tabs_default__item slds-is-active"
            title="Item One"
            role="presentation"
          >
            <a
              class="slds-tabs_default__link"
              href="#"
              role="tab"
              tabindex="0"
              aria-selected="true"
              aria-controls="tab-default-1"
              id="tab-default-1__item"
            >
              Item One
            </a>
          </li>
          <li class="slds-tabs_default__item" title="Item Two" role="presentation">
            <a
              class="slds-tabs_default__link"
              href="#"
              role="tab"
              tabindex="-1"
              aria-selected="false"
              aria-controls="tab-default-2"
              id="tab-default-2__item"
            >
              Item Two
            </a>
          </li>
          <li
            class="slds-tabs_default__item"
            title="Item Three"
            role="presentation"
          >
            <a
              class="slds-tabs_default__link"
              href="#"
              role="tab"
              tabindex="-1"
              aria-selected="false"
              aria-controls="tab-default-3"
              id="tab-default-3__item"
            >
              Item Three
            </a>
          </li>
        </ul>
        <div
          id="tab-default-1"
          class="slds-tabs_default__content slds-show"
          role="tabpanel"
          aria-labelledby="tab-default-1__item"
        >
          Item One Content
        </div>
        <div
          id="tab-default-2"
          class="slds-tabs_default__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-default-2__item"
        >
          Item Two Content
        </div>
        <div
          id="tab-default-3"
          class="slds-tabs_default__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-default-3__item"
        >
          Item Three Content
        </div>
      </div>
    </div>
    `
  )
  .add(
    'With longer text',
    () => `
    <div class="ui-tab-bar">
      <div class="slds-tabs_default">
        <ul class="slds-tabs_default__nav" role="tablist">
          <li
            class="slds-tabs_default__item slds-is-active"
            title="Item One"
            role="presentation"
          >
            <a
              class="slds-tabs_default__link"
              href="#"
              role="tab"
              tabindex="0"
              aria-selected="true"
              aria-controls="tab-default-1"
              id="tab-default-1__item"
            >
              Item One long head
            </a>
          </li>
          <li class="slds-tabs_default__item" title="Item Two" role="presentation">
            <a
              class="slds-tabs_default__link"
              href="#"
              role="tab"
              tabindex="-1"
              aria-selected="false"
              aria-controls="tab-default-2"
              id="tab-default-2__item"
            >
              Item Two long head
            </a>
          </li>
          <li
            class="slds-tabs_default__item"
            title="Item Three"
            role="presentation"
          >
            <a
              class="slds-tabs_default__link"
              href="#"
              role="tab"
              tabindex="-1"
              aria-selected="false"
              aria-controls="tab-default-3"
              id="tab-default-3__item"
            >
              Item Three long head
            </a>
          </li>
        </ul>
        <div
          id="tab-default-1"
          class="slds-tabs_default__content slds-show"
          role="tabpanel"
          aria-labelledby="tab-default-1__item"
        >
          Item One Content
        </div>
        <div
          id="tab-default-2"
          class="slds-tabs_default__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-default-2__item"
        >
          Item Two Content
        </div>
        <div
          id="tab-default-3"
          class="slds-tabs_default__content slds-hide"
          role="tabpanel"
          aria-labelledby="tab-default-3__item"
        >
          Item Three Content
        </div>
      </div>
    </div>
    `
  );

storiesOf('DIFC Components/Toasts', module)
  .add(
    'Base',
    () => `
    <div class="ui-toast">
      <div class="slds-notify_container slds-is-relative">
        <div class="slds-notify slds-notify_toast slds-theme_success" role="status">
          <span class="slds-assistive-text">success</span>
          <div class="slds-notify__content">
            <h2 class="slds-text-heading_small">
              "Holiday Campaign" was updated.
            </h2>
          </div>
          <div class="slds-notify__close">
            <button
              class="slds-button slds-button_icon slds-button_icon-inverse"
              title="Close"
            >
              <svg
                class="ui-toast__button slds-button__icon slds-button__icon_large"
                aria-hidden="true"
              >
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"
                />
              </svg>
              <span class="slds-assistive-text">Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Base with extra text',
    () => `
    <div class="ui-toast">
      <div class="slds-notify_container slds-is-relative">
        <div class="slds-notify slds-notify_toast slds-theme_success" role="status">
          <span class="slds-assistive-text">success</span>
          <div class="slds-notify__content">
            <h2 class="slds-text-heading_small">
              "Holiday Campaign" was updated.
            </h2>

            <h3>258 contacts were already added and they remained as is.</h3>
          </div>
          <div class="slds-notify__close">
            <button
              class="ui-toast__button slds-button slds-button_icon slds-button_icon-inverse"
              title="Close"
            >
              <svg
                class="slds-button__icon slds-button__icon_large"
                aria-hidden="true"
              >
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"
                />
              </svg>
              <span class="slds-assistive-text">Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Success',
    () => `
    <div class="ui-toast ui-toast--success">
      <div class="slds-notify_container slds-is-relative">
        <div class="slds-notify slds-notify_toast slds-theme_success" role="status">
          <span class="slds-assistive-text">success</span>
          <div class="slds-notify__content">
            <h2 class="slds-text-heading_small">
              "Holiday Campaign" was updated.
            </h2>
          </div>
          <div class="slds-notify__close">
            <button
              class="ui-toast__button slds-button slds-button_icon slds-button_icon-inverse"
              title="Close"
            >
              <svg
                class="slds-button__icon slds-button__icon_large"
                aria-hidden="true"
              >
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"
                />
              </svg>
              <span class="slds-assistive-text">Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Warning',
    () => `
    <div class="ui-toast ui-toast--warning">
      <div class="slds-notify_container slds-is-relative">
        <div class="slds-notify slds-notify_toast slds-theme_success" role="status">
          <span class="slds-assistive-text">success</span>
          <div class="slds-notify__content">
            <h2 class="slds-text-heading_small">
              "Holiday Campaign" was updated.
            </h2>
          </div>
          <div class="slds-notify__close">
            <button
              class="ui-toast__button slds-button slds-button_icon slds-button_icon-inverse"
              title="Close"
            >
              <svg
                class="slds-button__icon slds-button__icon_large"
                aria-hidden="true"
              >
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"
                />
              </svg>
              <span class="slds-assistive-text">Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    `
  )
  .add(
    'Error',
    () => `
    <div class="ui-toast ui-toast--error">
      <div class="slds-notify_container slds-is-relative">
        <div class="slds-notify slds-notify_toast slds-theme_success" role="status">
          <span class="slds-assistive-text">success</span>
          <div class="slds-notify__content">
            <h2 class="slds-text-heading_small">
              "Holiday Campaign" was updated.
            </h2>
          </div>
          <div class="slds-notify__close">
            <button
              class="ui-toast__button slds-button slds-button_icon slds-button_icon-inverse"
              title="Close"
            >
              <svg
                class="slds-button__icon slds-button__icon_large"
                aria-hidden="true"
              >
                <use
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#close"
                />
              </svg>
              <span class="slds-assistive-text">Close</span>
            </button>
          </div>
        </div>
      </div>
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
