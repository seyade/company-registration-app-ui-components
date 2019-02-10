import * as utils from '../utils';

class UIMenu {
  constructor() {
    this.components;

    this.uiMenuButton;
  }

  init() {
    this.components = document.querySelectorAll(UIMenu.SELECTORS.component);

    for (let component of this.components) {
      this.uiMenuButton = component.querySelector(
        UIMenu.SELECTORS.uiMenuButton
      );

      this._registerEvents();
    }
  }

  _registerEvents() {
    this.uiMenuButton.addEventListener('click', event => {
      const _self = event.currentTarget;
      const _ancestor = utils.findParent(
        _self,
        UIMenu.CLASSES.dropdownContainer
      );

      if (!_ancestor.classList.contains(UIMenu.CLASSES.isOpen)) {
        _ancestor.classList.add(UIMenu.CLASSES.isOpen);
      } else {
        _ancestor.classList.remove(UIMenu.CLASSES.isOpen);
      }
    });
  }
}

UIMenu.CLASSES = {
  component: 'ui-menu',
  dropdownContainer: 'slds-dropdown-trigger_click',
  isOpen: 'slds-is-open',
};

UIMenu.SELECTORS = {
  component: '.ui-menu',
  uiMenuButton: '.ui-menu__button',
};

export default UIMenu;
