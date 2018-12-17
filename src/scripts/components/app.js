import SelectBox from './selectBox';
import SearchBar from './searchBar';

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
   * @function init
   * @description initialise the app
   */
  init() {
    console.log('APP IS RUNNING!!!!');

    this.toggleButtons = document.querySelectorAll('.button--toggle');
    this.pathsSummaryDetails = document.querySelectorAll(
      '.path-summary__details'
    );
    this.closeButtons = document.querySelectorAll('.button--close');

    this.toggle();
    this.closePanel();

    // seacrhbar
    const searcheBar = new SearchBar();
    searcheBar.init();

    // start selectbox
    const selectBox = new SelectBox();
    selectBox.init();
  }

  /**
   * @function toggle
   * @description toggle content on path summary, but might make global.
   */
  toggle() {
    let toggleButton;

    for (toggleButton of this.toggleButtons) {
      toggleButton.addEventListener('click', event => {
        let parentGroup = event.currentTarget.parentElement;
        let details = parentGroup.nextElementSibling;

        if (details.classList.contains(App.CLASSES.pathSummaryDetailsHidden)) {
          details.classList.remove(App.CLASSES.pathSummaryDetailsHidden);
          details.classList.add(App.CLASSES.pathSummaryDetailsOpen);

          event.currentTarget.classList.add('button--toggle--open');
        } else {
          details.classList.add(App.CLASSES.pathSummaryDetailsHidden);
          details.classList.remove(App.CLASSES.pathSummaryDetailsOpen);

          event.currentTarget.classList.remove('button--toggle--open');
        }
      });
    }
  }

  /**
   * @function closePanel
   * @description close a panel
   */
  closePanel() {
    let closeButton;

    for (closeButton of this.closeButtons) {
      closeButton.addEventListener('click', event => {
        event.currentTarget.parentElement.classList.add('card--hidden');
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
