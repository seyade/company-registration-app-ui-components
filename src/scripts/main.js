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
    this.toggleButtons = document.querySelectorAll('.button--toggle');

    /**
     * @name pathsSummaryDetails
     * @type {Element}
     * @description details of company registration path
     */
    this.pathsSummaryDetails = document.querySelectorAll(
      '.path-summary__details'
    );

    /**
     * @name closeButtons
     * @type {Element}
     */
    this.closeButtons = document.querySelectorAll('.button--close');

    /**
     * @name searchBarButton
     * @type {Element}
     */
    this.searchBarButton = document.querySelector('.search-bar__button');

    /**
     * @name searchbarField
     * @type {Element}
     */
    this.searchbarField = document.querySelector('.search-bar__field');
  }

  /**
   * @function init
   * @description initialise the app
   */
  init() {
    console.log('APP IS RUNNING!!!!');

    this.toggle();
    this.closePanel();
    this.searchBar();
  }

  /**
   * @function searchBar
   * @description search bar functionalitiy
   */
  searchBar() {
    this.searchBarButton.addEventListener('click', event => {
      const searchBarPanel = event.currentTarget.parentElement;

      if (searchBarPanel.classList.contains(App.CLASSES.searchBarCollapsed)) {
        searchBarPanel.classList.remove(App.CLASSES.searchBarCollapsed);
        searchBarPanel.classList.add(App.CLASSES.searchBarExpanded);

        this.searchbarField.focus();
      } else {
        searchBarPanel.classList.remove(App.CLASSES.searchBarExpanded);
        searchBarPanel.classList.add(App.CLASSES.searchBarCollapsed);
      }
    });
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
  searchBarCollapsed: 'search-bar--collapsed',
  searchBarExpanded: 'search-bar--expanded',
  pathSummaryDetailsHidden: 'path-summary__details--hidden',
  pathSummaryDetailsOpen: 'path-summary__details--open',
};

// start the app
const app = new App();

app.init();
