import * as utils from '../utils';

class UIFormCard {
  constructor() {
    this.components;

    this.component;

    this.cardHeader;
  }

  init() {
    this.components = document.querySelectorAll('.ui-form-card');

    this._addEvents();
  }

  _addEvents() {
    for (let component of this.components) {
      this.cardHeader = component.querySelector(
        UIFormCard.SELECTORS.cardHeader
      );

      this.cardHeader.addEventListener('click', event => {
        const _thisComponent = utils.findParent(
          event.currentTarget,
          UIFormCard.CLASSES.container
        );

        if (!_thisComponent.classList.contains(UIFormCard.CLASSES.collapsed)) {
          _thisComponent.classList.add(UIFormCard.CLASSES.collapsed);
        } else {
          _thisComponent.classList.remove(UIFormCard.CLASSES.collapsed);
        }
      });
    }
  }
}

UIFormCard.CLASSES = {
  container: 'ui-form-card',
  collapsed: 'ui-form-card--collapsed',
  cardHeader: 'ui-form-card__header',
};

UIFormCard.SELECTORS = {
  container: '.ui-form-card',
  cardHeader: '.ui-form-card__header',
};

export default UIFormCard;
