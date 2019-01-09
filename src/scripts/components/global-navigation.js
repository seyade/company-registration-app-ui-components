import * as utils from '../utils';

/**
 * GlobalNavigation
 */
class UIGlobalNavigation {
  constructor() {
    /**
     * component
     * @type {Element}
     */
    this.component;

    /**
     * navigation menu
     * @type {Element}
     */
    this.navigationMenu;

    /**
     * navigation menu button
     * @type {Element}
     */
    this.navigationMenuButton;

    /**
     * navigation menu close button
     * @type {Element}
     */
    this.navigationMenuCloseButton;

    /**
     * search button
     * @type {Element}
     */
    this.searchButton;

    /**
     * search button
     * @type {Element}
     */
    this.searchBarInput;
  }

  init() {
    this.component = document.querySelector('.ui-global-navigation');

    this.navigationMenu = this.component.querySelector(
      '.ui-global-navigation__menu'
    );

    this.navigationMenuButton = this.component.querySelector(
      '.ui-global-navigation__button--menu'
    );

    this.navigationMenuCloseButton = this.component.querySelector(
      '.ui-global-navigation__button--menu-close'
    );

    this.searchBar = this.component.querySelector(
      '.ui-global-navigation__search-bar'
    );

    this.searchBarInput = this.component.querySelector('.ui-search-bar__input');

    this.searchButton = this.component.querySelector(
      '.ui-global-navigation__button--search'
    );

    this._addEvents();

    return this.component;
  }

  /**
   * Add events
   * @private
   */
  _addEvents() {
    this.navigationMenuButton.addEventListener('click', event => {
      this.navigationMenu.classList.remove(
        UIGlobalNavigation.CLASSES.containerMenuHidden
      );

      event.currentTarget.classList.add(
        UIGlobalNavigation.CLASSES.buttonHidden
      );

      this.navigationMenuCloseButton.classList.remove(
        UIGlobalNavigation.CLASSES.buttonHidden
      );
    });

    this.navigationMenuCloseButton.addEventListener('click', event => {
      this.navigationMenu.classList.add(
        UIGlobalNavigation.CLASSES.containerMenuHidden
      );

      event.currentTarget.classList.add(
        UIGlobalNavigation.CLASSES.buttonHidden
      );

      this.navigationMenuButton.classList.remove(
        UIGlobalNavigation.CLASSES.buttonHidden
      );
    });

    this.searchButton.addEventListener('click', event => {
      const searchBar = this.component.getElementsByClassName(
        UIGlobalNavigation.CLASSES.searchBar
      )[0];

      searchBar.classList.add(UIGlobalNavigation.CLASSES.searchBarOpen);

      this.searchBarInput.focus();
    });
  }
}

/**
 * classes use by component
 */
UIGlobalNavigation.CLASSES = {
  container: 'ui-global-navigation',
  containerExpanded: 'ui-global-navigation--expanded',
  containerMenuHidden: 'ui-global-navigation__menu--hidden',
  buttonHidden: 'ui-global-navigation__button--hidden',
  searchBarOpen: 'ui-search-bar--is-open',
  searchBar: 'ui-search-bar',
};

export default UIGlobalNavigation;
