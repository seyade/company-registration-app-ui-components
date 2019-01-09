/**
 * Search bar component
 */
class UISearchBar {
  constructor() {
    this.component;
    /**
     * @name searchBarButton
     * @type {Element}
     */
    this.searchBarButton;

    /**
     * @name searchbarField
     * @type {Element}
     */
    this.searchbarField;
  }

  /**
   * Initialise component
   */
  init() {
    this.component = document.querySelector('.search-bar');
    this.searchBarButton = this.component.querySelector('.search-bar__button');
    this.searchbarField = this.component.querySelector('.search-bar__field');

    this._addEvents();
  }

  _addEvents() {
    this.searchBarButton.addEventListener('click', event => {
      const searchBarPanel = event.currentTarget.parentElement;

      if (
        searchBarPanel.classList.contains(
          UISearchBar.CLASSES.searchBarCollapsed
        )
      ) {
        searchBarPanel.classList.remove(UISearchBar.CLASSES.searchBarCollapsed);
        searchBarPanel.classList.add(UISearchBar.CLASSES.searchBarExpanded);

        this.searchbarField.focus();
      } else {
        searchBarPanel.classList.remove(UISearchBar.CLASSES.searchBarExpanded);
        searchBarPanel.classList.add(UISearchBar.CLASSES.searchBarCollapsed);
      }
    });
  }
}

// classes used by component
UISearchBar.CLASSES = {
  searchBarCollapsed: 'search-bar--collapsed',
  searchBarExpanded: 'search-bar--expanded',
};

export default UISearchBar;
