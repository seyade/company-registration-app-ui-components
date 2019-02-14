import { storiesOf } from '@storybook/html';

export default storiesOf('DIFC Components/Breadcrumbs', module)
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
