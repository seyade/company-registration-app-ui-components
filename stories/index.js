import { storiesOf } from '@storybook/html';
import '../dist/main.css';

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
    'Toggle',
    () => `
    <div class="button-group">
    <button class="button button--toggle">
      <span class="button__text">View details</span>
      <img
        class="button__icon--arrow"
        src="/assets/svg/arrow-line-right-dark.svg"
        alt=""
      />
    </button>
    </div>
    `
  );

storiesOf('DIFC Components/Progress Indicators', module)
  .add(
    'Horizontal',
    () => `
    <div style="padding:3.5rem 1rem 0">
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
      <div class="slds-popover slds-popover_tooltip slds-nubbin_bottom" role="tooltip" id="step-3-tooltip" style="position:absolute;top:1rem;left:calc(50% + 6px);transform:translateX(-50%)">
        <div class="slds-popover__body">Submit info</div>
      </div>
    </div>
  `
  )
  .add(
    'Vertical',
    () => `
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
