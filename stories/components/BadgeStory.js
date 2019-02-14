import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Badges', module)
  .add('Base', () => `<span class="ui-badge slds-badge">142</span>`)
  .add(
    'Red',
    () => `<span class="ui-badge ui-badge--red slds-badge">142</span>`
  );
