import * as utils from '../utils';

class UIPathCard {
  constructor() {
    this.components;

    this.startPathButton;

    this.showDetailsButton;
  }

  init() {
    this.components = document.querySelectorAll(UIPathCard.SELECTORS.component);

    for (let component of this.components) {
      this.showDetailsButton = component.querySelector(
        UIPathCard.SELECTORS.showDetailsButton
      );

      this._registerEvents();
    }
  }

  _registerEvents() {
    this.showDetailsButton.addEventListener('click', event => {
      const _self = event.currentTarget;
      const _ancestor = utils.findParent(_self, UIPathCard.CLASSES.component);

      if (_ancestor.classList.contains(UIPathCard.CLASSES.collapsed)) {
        _ancestor.classList.remove(UIPathCard.CLASSES.collapsed);
      } else {
        _ancestor.classList.add(UIPathCard.CLASSES.collapsed);
      }
    });
  }
}

UIPathCard.CLASSES = {
  component: 'ui-path-card',
  collapsed: 'ui-path-card--collapsed',
};

UIPathCard.SELECTORS = {
  component: '.ui-path-card',
  showDetailsButton: '.ui-path-card__button--show-details',
};

export default UIPathCard;
