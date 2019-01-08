import { AppComponents } from '../app-core';
import UIGlobalNavigation from './global-navigation';
import UISelectBox from './select-box';
import UISearchBar from './search-bar';
import UIAccordion from './accordion';
import UIDataTable from './data-table';

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
    console.log('APP IS RUNNING!!!!');

    this.toggleButtons = document.querySelectorAll('.ui-button--toggle');
    this.pathsSummaryDetails = document.querySelectorAll(
      '.path-summary__details'
    );
    this.closeButtons = document.querySelectorAll('.ui-button--close');

    this._toggle();
    this._closePanel();

    // // global navigation
    // const globalNavigation = new UIGlobalNavigation();
    // globalNavigation.init();

    // // seacrhbar
    // const searcheBar = new UISearchBar();
    // // searcheBar.init();

    // // start selectbox
    // const selectBox = new UISelectBox();
    // selectBox.init();

    // // accordion
    // const accordion = new UIAccordion();
    // accordion.init();

    // // data table
    // const dataTable = new UIDataTable();
    // dataTable.init();

    new AppComponents([
      UIGlobalNavigation,
      // UISearchBar,
      UISelectBox,
      UIAccordion,
      UIDataTable,
    ]).render();
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
