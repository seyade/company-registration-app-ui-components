import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Progress Rings', module)
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
