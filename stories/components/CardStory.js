import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Cards', module)
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
