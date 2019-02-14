import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Page Headers', module)
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
