import * as utils from '../utils';

/**
 * GlobalNavigation
 */
class GlobalNavigation {
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

    /**
     * searchbar close button
     * @type {Element}
     */
    this.searchBarCloseButton;
  }

  init() {
    console.log('GLOBAL HEADER STARTED!!!!!');

    this.component = document.querySelector('.global-navigation');

    this.navigationMenu = this.component.querySelector(
      '.global-navigation__menu'
    );

    this.navigationMenuButton = this.component.querySelector(
      '.global-navigation__button--menu'
    );

    this.navigationMenuCloseButton = this.component.querySelector(
      '.global-navigation__button--menu-close'
    );

    this.searchBar = this.component.querySelector(
      '.global-navigation__search-bar'
    );

    this.searchBarInput = this.component.querySelector(
      '.global-navigation__search-bar-input'
    );

    this.searchButton = this.component.querySelector(
      '.global-navigation__button--search'
    );

    this.searchBarCloseButton = this.component.querySelector(
      '.global-navigation__button--search-close'
    );

    this._addEvents();
  }

  /**
   * Add events
   * @private
   */
  _addEvents() {
    this.navigationMenuButton.addEventListener('click', e => {
      this.navigationMenu.classList.remove(
        GlobalNavigation.CLASS.containerMenuHidden
      );

      e.currentTarget.classList.add(GlobalNavigation.CLASS.buttonHidden);
      this.navigationMenuCloseButton.classList.remove(
        GlobalNavigation.CLASS.buttonHidden
      );
    });

    this.navigationMenuCloseButton.addEventListener('click', e => {
      this.navigationMenu.classList.add(
        GlobalNavigation.CLASS.containerMenuHidden
      );

      e.currentTarget.classList.add(GlobalNavigation.CLASS.buttonHidden);
      this.navigationMenuButton.classList.remove(
        GlobalNavigation.CLASS.buttonHidden
      );
    });

    this.searchButton.addEventListener('click', e => {
      const ancestor = utils.findParent(
        e.currentTarget,
        GlobalNavigation.CLASS.container
      );

      ancestor.classList.add(GlobalNavigation.CLASS.containerExpanded);
      this.searchBarInput.focus();
    });

    this.searchBarCloseButton.addEventListener('click', e => {
      const ancestor = utils.findParent(
        e.currentTarget,
        GlobalNavigation.CLASS.container
      );

      ancestor.classList.remove(GlobalNavigation.CLASS.containerExpanded);
      ancestor.removeAttribute('style');
    });
  }
}

/**
 * classes use by component
 */
GlobalNavigation.CLASS = {
  container: 'global-navigation',
  containerExpanded: 'global-navigation--expanded',
  containerMenuHidden: 'global-navigation__menu--hidden',
  buttonHidden: 'global-navigation__button--hidden',
};

export default GlobalNavigation;
