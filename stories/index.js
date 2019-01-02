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
    <div class="button-group">
      <button class="button button--default">Default</button>
    </div>
    `
  )
  .add(
    'Primary',
    () => `
    <div class="button-group">
      <button class="button button--primary">Primary</button>
    </div>
    `
  )
  .add(
    'Destructive',
    () => `
    <div class="button-group">
      <button class="button button--destructive">Destructive</button>
    </div>
    `
  )
  .add(
    'Disabled',
    () => `
    <div class="button-group">
      <button class="button button--disabled" disabled>Disabled</button>
    </div>
    `
  )
  .add(
    'Upload',
    () => `
    <div class="button-group">
      <button class="button button--upload">
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
    <div class="button-group">
      <button class="button button--upload-disabled" disabled>
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
    <div class="button-group">
      <button class="button button--not-selected">
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
    <div class="button-group">
      <button class="button button--selected">
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
    <div class="card" style="min-height:100px;width:400px;margin-left:16px">
      
    </div>
  `
  )
  .add(
    'Card Base With Content',
    () => `
    <div class="card" style="min-height:100px;width:320px;margin-left:16px">
      <div class="card__content card__content--padding-med">
        <span class="card__title">Card heading herer and also on this second line if needed...</span>
        <p class="card__paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia magni repellat nesciunt
          sapiente eius eum commodi
          illo voluptates vel ratione consectetur, laborum earum blanditiis officiis, adipisci cumque. Fuga, illum
          molestiae!
        </p>

        <p class="card__paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia magni repellat nesciunt
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
      class="card card--light-blue"
      style="min-height:100px;width:320px;margin-left:16px"
    >
      <div class="card__header">
        <span class="card__header-title">
          Pathway Guide
        </span>
        <span class="card__header-subtitle">
          Section One: Prepare company documents
        </span>
      </div>
      <div class="card__content card__content--padding-med">
        <p class="card__paragraph">
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
      class="card card--very-light-blue card--next-steps"
      style="min-height:100px;width:456px;margin-left:16px"
    >
      <div class="card__content">
        <span class="card__title">Next Steps</span>
        <p class="card__subtitle">Sed do eiusm Company Profile. Here are your next 3 steps</p>
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
      <div class="card__action">
        <div class="button-group button-group--right">
          <a class="button button--default">Continue</a>
        </div>
      </div>
    </div>
  `
  )
  .add(
    'Card Marketing',
    () => `
    <div
      class="card card--marketing"
      style="width:1140px;margin-left:16px;margin-right:16px"
    >
      <button class="button button--close">
        <span class="button__text button__text--hidden">Close</span>
        <img
          class="button__icon--close icon-image"
          src="/assets/svg/close-dark.svg"
          alt="cross"
        />
      </button>

      <div class="card__content card__content--padding-med">
        <h2 class="card__title">Marketing service information here </h2>
        <div class="card__content-section">
          <p class="card__paragraph">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venit enim an enim la enim  enimt tempor labore enim.
          </p>
          <div class="card__action">
            <a href="" class="button button--primary">Call to action here</a>
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
      class="card card--marketing"
      style="width:1140px;margin-left:16px;margin-right:16px"
    >
      <button class="button button--close">
        <span class="button__text button__text--hidden">Close</span>
        <img
          class="button__icon--close icon-image"
          src="/assets/svg/close-dark.svg"
          alt="cross"
        />
      </button>

      <div class="card__content card__content--padding-med">
        <h2 class="card__title">Marketing service information here </h2>
        <div class="card__content-section">
          <p class="card__paragraph">
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
      class="card card--pathway"
      style="margin-left:16px;margin-right:16px"
    >
      <div class="card__content card__content--padding-med">
        <div class="card__content--head">
          <h2 class="card__title">
            Heading of section here and here but only on one...
          </h2>
          <span>2 mins</span>
        </div>
        <div class="card__content--body">
          <p class="card__paragraph">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venit enim an enim la enim  enimt tempor labore enim.
          </p>
        </div>

        <div class="card__action card__action--spread">
          <button class="button button--toggle">
            Show details
            <img
              class="pw-icon"
              src="/assets/svg/arrow-down.svg"
            />
          </button>
          <a href="#" class="button button--primary">Start Path</a>
        </div>
      </div>
    </div>
  `
  )
  .add(
    'Card With Header and Button',
    () => `
    <div
      class="card"
      style="width:320px;margin-left:16px;margin-right:16px"
    >
      <div class="card__content card__content--padding-med">
        <span class="card__title">
          <img
            class="pw-icon"
            src="/assets/svg/contact.svg"
          />
          <span class="card__title-text">Contact details</span>
          <button 
            class="button button--tertiary"
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
      class="card"
      style="width:320px;margin-left:16px;margin-right:16px"
    >
      <div class="card__content">
        <span class="card__title">
          <img
            class="pw-icon"
            src="/assets/svg/contact.svg"
          />
          <span class="card__title-text">
            Contacts
            (<span class="">3</span>)
          </span>
          <button 
            class="button button--tertiary"
            style="min-width:64px;position:absolute;right:0;"
          >
            New
          </button>
        </span>
        <div class="pw-accordion">
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
                      <span class="pw-accordion__title slds-truncate">
                        Related Record Title 2
                      </span>
                      <img
                        class="pw-icon"
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
                      <span class="pw-accordion__title slds-truncate">
                        Related Record Title 2
                      </span>
                      <img
                        class="pw-icon"
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
                      <span class="pw-accordion__title slds-truncate">
                        Related Record Title 2
                      </span>
                      <img
                        class="pw-icon"
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
        <div class="card__action">
          <button class="pw-accordion__button button button--default">See more</button>
        </div>
      </div>
    </div>
  `
  );

storiesOf('DIFC Components/Progress Indicators', module)
  .add(
    'Horizontal Base',
    () => `
    <div class="progress-indicator progress-indicator--horizontal"  style="padding:3.5rem 1rem 0">
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
    <div class="progress-indicator progress-indicator--horizontal"  style="padding:3.5rem 1rem 0">
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
    <div class="progress-indicator progress-indicator--horizontal"  style="padding:3.5rem 1rem 0">
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
    <div class="progress-indicator progress-indicator--horizontal"  style="padding:3.5rem 1rem 0">
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
    <div class="progress-indicator progress-indicator--vertical slds-progress slds-progress_vertical">
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
    <div class="progress-indicator progress-indicator--vertical slds-progress slds-progress_vertical">
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

storiesOf('DIFC Components/Breadcrumb', module)
  .add(
    'Breadcrumb',
    () => `
      <div class="demo-only" style="height: 150px;padding: 16px;">
        <!-- below is the real component -->
        <nav class="breadcrumb" role="navigation" aria-label="Breadcrumbs">
          <ol class="slds-breadcrumb slds-list_horizontal slds-wrap">
            <li class="slds-breadcrumb__item slds-text-title_caps"><a href="javascript:void(0);">Parent Name</a></li>
            <li class="slds-breadcrumb__item slds-text-title_caps"><a href="javascript:void(0);">Child Name</a></li>
          </ol>
        </nav>
      </div>
      `
  )
  .add(
    'Breadcrumb overflow',
    () => `
    <div class="demo-only" style="height: 150px;">
      <nav class="breadcrumb" role="navigation" aria-label="Breadcrumbs">
        <ol class="slds-breadcrumb slds-list_horizontal slds-wrap slds-grid_vertical-align-center">
          <li class="slds-breadcrumb__item">
            <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
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
    <div class="pw-accordion">
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
                    class="pw-icon"
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
                    class="pw-icon"
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
                    class="pw-icon"
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
      <div class="pw-accordion">
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
                      class="pw-icon"
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
                      class="pw-icon"
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
                      class="pw-icon"
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
    <div class="form-element slds-form-element">
      <label class="form-element__label slds-form-element__label" for="text-input-id-1">
        Input Label
      </label>
      <div class="form-element__control slds-form-element__control">
        <input
          id="text-input-id-1"
          class="form-element__control-input slds-input"
          type="text"
        />
      </div>
    </div>
    `
  )
  .add(
    'Input Field Required',
    () => `
    <div class="form-element slds-form-element">
      <label class="form-element__label slds-form-element__label" for="text-input-id-1">
        <abbr class="slds-required">*</abbr>
        Input Label
      </label>
      <div class="form-element__control slds-form-element__control">
        <input
          id="text-input-id-1"
          class="form-element__control-input slds-input"
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
    <div class="form-element slds-form-element">
      <label class="form-element__label slds-form-element__label" for="text-input-id-1">
        Input Label
      </label>
      <div class="form-element__control slds-form-element__control">
        <input
          id="text-input-id-1"
          class="form-element__control-input slds-input"
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
    <div class="form-element slds-form-element slds-has-error">
      <label class="form-element__label slds-form-element__label" for="text-input-id-1">
        <abbr class="slds-required">*</abbr>
        Input Label
      </label>
      <div class="form-element__control slds-form-element__control">
        <input
          id="text-input-id-1"
          aria-describedby="error-message-unique-id"
          class="form-element__control-input slds-input"
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
    <div class="form-element slds-form-element">
      <label
        class="form-element__label slds-form-element__label"
        for="textarea-id-01"
      >
        Textarea Label
      </label>
      <div class="form-element__control slds-form-element__control">
        <textarea
          id="textarea-id-01"
          class="form-element__control-textarea slds-textarea"
          placeholder="Placeholder Text"
        ></textarea>
      </div>
    </div>
    `
  )
  .add(
    'Textarea Required',
    () => `
    <div class="form-element slds-form-element">
      <label
        class="form-element__label slds-form-element__label"
        for="textarea-id-01"
      >
        <abbr class="slds-required">*</abbr>
        Textarea Label
      </label>
      <div class="form-element__control slds-form-element__control">
        <textarea
          id="textarea-id-01"
          class="form-element__control-textarea slds-textarea"
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
    <div class="form-element slds-form-element">
      <label
        class="form-element__label slds-form-element__label"
        for="textarea-id-01"
      >
        Textarea Label
      </label>
      <div class="form-element__control slds-form-element__control">
        <textarea
          id="textarea-id-01"
          class="form-element__control-textarea slds-textarea"
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
    <div class="form-element slds-form-element slds-has-error">
      <label
        class="form-element__label slds-form-element__label"
        for="textarea-id-01"
      >
        <abbr class="slds-required">*</abbr>
        Textarea Label
      </label>
      <div class="form-element __control slds-form-element__control">
        <textarea
          id="textarea-id-01"
          aria-describedby="error-01"
          class="form-element__control-textarea slds-textarea"
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
    <div class="date-picker" style="height: 25rem;">
      <div
        class="form-element slds-form-element slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
      >
        <label
          class="form-element__label slds-form-element__label"
          for="date-input-id"
        >
          Date
          <img 
            src="/assets/svg/event.svg" 
            alt=""
          />
        </label>
        <div
          class="form-element__control slds-form-element__control slds-input-has-icon slds-input-has-icon_right"
        >
          <input id="date-input-id"
            placeholder=""
            class="slds-input"
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
    <div class="date-picker" style="height: 25rem;">
      <div
        class="form-element slds-form-element slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
      >
        <label
          class="form-element__label slds-form-element__label"
          for="date-input-id"
        >
          Date
          <img 
            src="/assets/svg/event.svg" 
            alt=""
          />
        </label>
        <div
          class="form-element__control slds-form-element__control slds-input-has-icon slds-input-has-icon_right"
        >
          <input id="date-input-id" placeholder="" class="slds-input" type="text" />
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
    <div class="date-picker" style="height: 25rem;">
      <div class="slds-form slds-form_compound">
        <fieldset class="slds-form-element">
          <legend class="form-element slds-form-element__label slds-form-element__legend">
            Start and End Date
          </legend>
          <div class="form-element_-control slds-form-element__control">
            <div class="form-element__group slds-form-element__group">
              <div class="slds-form-element__row">
                <div
                  class="form-element slds-form-element slds-dropdown-trigger slds-dropdown-trigger_click"
                >
                  <label 
                    class="form-element__label slds-form-element__label" for="date-input-id-01"
                  >
                    Start Date
                    <img 
                      src="/assets/svg/event.svg" 
                      alt=""
                    />
                  </label>
                  <div
                    class="form-element__control slds-form-element__control slds-input-has-icon slds-input-has-icon_right"
                  >
                    <input
                      id="date-input-id-01"
                      placeholder=""
                      class="form-element__control-input slds-input"
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
                  class="slds-form-element slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
                >
                  <label class="form-element__label slds-form-element__label" for="date-input-id-02">
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
                      class="form-element__control-input slds-input"
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
