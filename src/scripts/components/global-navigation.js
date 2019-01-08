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

    /**
     * searchbar close button
     * @type {Element}
     */
    this.searchBarCloseButton;
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

    this.searchBarInput = this.component.querySelector(
      '.ui-global-navigation__search-bar-input'
    );

    this.searchButton = this.component.querySelector(
      '.ui-global-navigation__button--search'
    );

    this.searchBarCloseButton = this.component.querySelector(
      '.ui-global-navigation__button--search-close'
    );

    this._addEvents();

    return this.component;
  }

  /**
   * Add events
   * @private
   */
  _addEvents() {
    this.navigationMenuButton.addEventListener('click', e => {
      this.navigationMenu.classList.remove(
        UIGlobalNavigation.CLASS.containerMenuHidden
      );

      e.currentTarget.classList.add(UIGlobalNavigation.CLASS.buttonHidden);
      this.navigationMenuCloseButton.classList.remove(
        UIGlobalNavigation.CLASS.buttonHidden
      );
    });

    this.navigationMenuCloseButton.addEventListener('click', e => {
      this.navigationMenu.classList.add(
        UIGlobalNavigation.CLASS.containerMenuHidden
      );

      e.currentTarget.classList.add(UIGlobalNavigation.CLASS.buttonHidden);
      this.navigationMenuButton.classList.remove(
        UIGlobalNavigation.CLASS.buttonHidden
      );
    });

    this.searchButton.addEventListener('click', e => {
      const ancestor = utils.findParent(
        e.currentTarget,
        UIGlobalNavigation.CLASS.container
      );

      ancestor.classList.add(UIGlobalNavigation.CLASS.containerExpanded);
      this.searchBarInput.focus();
    });

    this.searchBarCloseButton.addEventListener('click', e => {
      const ancestor = utils.findParent(
        e.currentTarget,
        UIGlobalNavigation.CLASS.container
      );

      ancestor.classList.remove(UIGlobalNavigation.CLASS.containerExpanded);
      ancestor.removeAttribute('style');
    });
  }
}

/**
 * classes use by component
 */
UIGlobalNavigation.CLASS = {
  container: 'ui-global-navigation',
  containerExpanded: 'ui-global-navigation--expanded',
  containerMenuHidden: 'ui-global-navigation__menu--hidden',
  buttonHidden: 'ui-global-navigation__button--hidden',
};

export default UIGlobalNavigation;
