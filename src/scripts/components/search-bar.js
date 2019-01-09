import * as utils from '../utils';

/**
 * Search bar component
 */
class UISearchBar {
  constructor() {
    /**
     * component container
     * @type {Element}
     */
    this.component;

    /**
     * search button
     * @type {Element}
     */
    this.searchBarInput;

    /**
     * searchbar close button
     * @type {Element}
     */
    this.searchBarCloseButton;

    /**
     * fake data for search
     * @type {Array}
     * @private
     */
    this._data = [
      'dragon ball z',
      'my hero academia',
      'ranma 1/2',
      'astro boy',
      'japan financial report 2018',
      'city hunter marketing strategy',
    ];
  }

  /**
   * Initialise component
   */
  init() {
    this.component = document.querySelector('.ui-search-bar');

    this.searchBarCloseButton = this.component.querySelector(
      '.ui-search-bar__button--close'
    );

    this._addEvents();

    return this.component;
  }

  _addEvents() {
    this.searchBarCloseButton.addEventListener('click', event => {
      const ancestor = utils.findParent(
        event.currentTarget,
        UISearchBar.CLASSES.container
      );

      ancestor.classList.remove(UISearchBar.CLASSES.containerOpen);
      ancestor.removeAttribute('style');
    });
  }
}

// classes used by component
UISearchBar.CLASSES = {
  container: 'ui-search-bar',
  containerOpen: 'ui-search-bar--is-open',
};

export default UISearchBar;
