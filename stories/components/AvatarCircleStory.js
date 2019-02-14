import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Avatars/Circles', module)
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
