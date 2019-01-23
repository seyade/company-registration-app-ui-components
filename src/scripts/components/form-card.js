import * as utils from '../utils';

class UIFormCard {
  constructor() {
    this.components;

    this.component;

    this.cardHeader;

    this.content;
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

      this.content = component.querySelector(UIFormCard.SELECTORS.content);

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

      this.content.addEventListener('scroll', event => {
        console.log('SCROLLLING!!!!!!!!!!!!!!!!!!!');

        const _thisContent = event.currentTarget;

        if (_thisContent.scrollTop > 32) {
          component.classList.add(UIFormCard.CLASSES.sticky);
        } else {
          component.classList.remove(UIFormCard.CLASSES.sticky);
        }
      });
    }
  }
}

UIFormCard.CLASSES = {
  container: 'ui-form-card',
  collapsed: 'ui-form-card--collapsed',
  cardHeader: 'ui-form-card__header',
  content: 'ui-form-card__content',
  sticky: 'ui-form-card--sticky',
};

UIFormCard.SELECTORS = {
  container: '.ui-form-card',
  cardHeader: '.ui-form-card__header',
  content: '.ui-form-card__content',
};

export default UIFormCard;
