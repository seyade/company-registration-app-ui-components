/**
 * Search bar component
 */
class SearchBar {
  constructor() {
    this.searchBar;
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
    this.searchBar = document.querySelector('.search-bar');
    this.searchBarButton = this.searchBar.querySelector('.search-bar__button');
    this.searchbarField = this.searchBar.querySelector('.search-bar__field');

    this._addEvents();
  }

  _addEvents() {
    this.searchBarButton.addEventListener('click', event => {
      const searchBarPanel = event.currentTarget.parentElement;

      if (
        searchBarPanel.classList.contains(SearchBar.CLASSES.searchBarCollapsed)
      ) {
        searchBarPanel.classList.remove(SearchBar.CLASSES.searchBarCollapsed);
        searchBarPanel.classList.add(SearchBar.CLASSES.searchBarExpanded);

        this.searchbarField.focus();
      } else {
        searchBarPanel.classList.remove(SearchBar.CLASSES.searchBarExpanded);
        searchBarPanel.classList.add(SearchBar.CLASSES.searchBarCollapsed);
      }
    });
  }
}

// classes used by component
SearchBar.CLASSES = {
  searchBarCollapsed: 'search-bar--collapsed',
  searchBarExpanded: 'search-bar--expanded',
};

export default SearchBar;
