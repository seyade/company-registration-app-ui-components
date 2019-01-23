import { AppComponents } from '../app-core';
import UIGlobalNavigation from './global-navigation';
import UISelectBox from './select-box';
import UIAccordion from './accordion';
import UIDataTable from './data-table';
import UIDatePicker from './date-picker';
import UIPickList from './picklist';
import UIToast from './toast';
import UIFormCard from './form-card';

/**
 * @name App
 * Class APP for DIFC app UI interactions
 */
class App {
  constructor() {
    /**
     * @name toggleButtons
     * @type {Element}
     * @description buttons to toggle content of Path Summary
     */
    this.toggleButtons;

    /**
     * @name pathsSummaryDetails
     * @type {Element}
     * @description details of company registration path
     */
    this.pathsSummaryDetails;

    /**
     * @name closeButtons
     * @type {Element}
     */
    this.closeButtons;
  }

  /**
   * @method init
   * @description initialise the app
   */
  init() {
    this.toggleButtons = document.querySelectorAll('.ui-button--toggle');
    this.pathsSummaryDetails = document.querySelectorAll(
      '.path-summary__details'
    );
    this.closeButtons = document.querySelectorAll('.ui-button--close');

    this._toggle();
    this._closePanel();

    new AppComponents([
      UIGlobalNavigation,
      UISelectBox,
      UIAccordion,
      UIDataTable,
      UIDatePicker,
      UIPickList,
      UIToast,
      UIFormCard,
    ]).render();

    console.log('Welcome to DIFC App!');
  }

  /**
   * @method toggle
   * @description toggle content on path summary, but might make global.
   * @private
   */
  _toggle() {
    let toggleButton;

    for (toggleButton of this.toggleButtons) {
      toggleButton.addEventListener('click', event => {
        let parentGroup = event.currentTarget.parentElement;
        let details = parentGroup.nextElementSibling;

        if (details.classList.contains(App.CLASSES.pathSummaryDetailsHidden)) {
          details.classList.remove(App.CLASSES.pathSummaryDetailsHidden);
          details.classList.add(App.CLASSES.pathSummaryDetailsOpen);

          event.currentTarget.classList.add('ui-button--toggle--open');
        } else {
          details.classList.add(App.CLASSES.pathSummaryDetailsHidden);
          details.classList.remove(App.CLASSES.pathSummaryDetailsOpen);

          event.currentTarget.classList.remove('ui-button--toggle--open');
        }
      });
    }
  }

  /**
   * @method closePanel
   * @description close a panel
   * @private
   */
  _closePanel() {
    let closeButton;

    for (closeButton of this.closeButtons) {
      closeButton.addEventListener('click', event => {
        event.currentTarget.parentElement.classList.add('ui-card--hidden');
      });
    }
  }
}

// CSS classes used by the app
App.CLASSES = {
  pathSummaryDetailsHidden: 'path-summary__details--hidden',
  pathSummaryDetailsOpen: 'path-summary__details--open',
};

export default App;
