import * as utils from '../utils';

/**
 * GlobalNavigation
 */
class UIGlobalNavigation {
  constructor() {
    /**
     * component
     * @type {Element}
     * @private
     */
    this._components;

    /**
     * navigation menu
     * @type {Element}
     * @private
     */
    this._navigationMenu;

    /**
     * navigation menu button
     * @type {Element}
     * @private
     */
    this._navigationMenuButton;

    /**
     * navigation menu close button
     * @type {Element}
     * @private
     */
    this._navigationMenuCloseButton;

    /**
     * search button
     * @type {Element}
     * @private
     */
    this._searchBarInput;
  }

  init() {
    this._components = document.querySelectorAll('.ui-global-navigation');

    for (let component of this._components) {
      this._navigationMenuButton = component.querySelector(
        '.ui-global-navigation__button--menu'
      );

      this._registerEvents();
    }
  }

  /**
   * Register events
   * @private
   */
  _registerEvents() {
    if (this._navigationMenuButton) {
      this._navigationMenuButton.addEventListener('click', event => {
        const _thisButton = event.currentTarget;
        const _ancestor = utils.findParent(
          _thisButton,
          UIGlobalNavigation.CLASSES.container
        );
        const _thisGlobalNavMenu = _ancestor.querySelector(
          '.ui-global-navigation__menu'
        );

        if (
          !_thisButton.classList.contains(UIGlobalNavigation.CLASSES.isActive)
        ) {
          _thisButton.classList.add(UIGlobalNavigation.CLASSES.isActive);

          _thisGlobalNavMenu.classList.remove(
            UIGlobalNavigation.CLASSES.containerMenuHidden
          );
        } else {
          _thisButton.classList.remove(UIGlobalNavigation.CLASSES.isActive);

          _thisGlobalNavMenu.classList.add(
            UIGlobalNavigation.CLASSES.containerMenuHidden
          );
        }
      });
    }
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
  isActive: 'is-active',
};

export default UIGlobalNavigation;
