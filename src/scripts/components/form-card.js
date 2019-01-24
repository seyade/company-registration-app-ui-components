import * as utils from '../utils';

class UIFormCard {
  constructor() {
    this.components;

    this.component;

    this.cardHeader;

    this.content;

    this.form;

    this.steps;
  }

  init() {
    this.components = document.querySelectorAll('.ui-form-card');

    this._displayStatus();
    this._addEvents();
  }

  _addEvents() {
    for (let component of this.components) {
      this.cardHeader = component.querySelector(
        UIFormCard.SELECTORS.cardHeader
      );
      this.content = component.querySelector(UIFormCard.SELECTORS.content);
      this.form = component.querySelector(UIFormCard.SELECTORS.form);

      this.cardHeader.addEventListener('click', event => {
        const _thisComponent = utils.findParent(
          event.currentTarget,
          UIFormCard.CLASSES.container
        );

        this.form.removeAttribute('style');

        if (!_thisComponent.classList.contains(UIFormCard.CLASSES.collapsed)) {
          _thisComponent.classList.add(UIFormCard.CLASSES.collapsed);
        } else {
          _thisComponent.classList.remove(UIFormCard.CLASSES.collapsed);
        }
      });

      this.content.addEventListener('scroll', event => {
        const _thisContent = event.currentTarget;

        this.form.style.transition = 'none';
        // this.form.style.maxHeight = 'inherit';

        if (_thisContent.scrollTop > 32) {
          component.classList.add(UIFormCard.CLASSES.sticky);
        } else {
          component.classList.remove(UIFormCard.CLASSES.sticky);
        }
      });
    }
  }

  _displayStatus() {
    for (let component of this.components) {
      this.numberOfSteps = component.querySelector(
        UIFormCard.SELECTORS.numberOfSteps
      );

      this.focusedStep = component.querySelector(
        UIFormCard.SELECTORS.focusedStep
      );

      this.steps = component.querySelectorAll(
        '.ui-form-element__control-input'
      );

      this.form = component.querySelector(UIFormCard.SELECTORS.form);

      this.numberOfSteps.innerText = this.steps.length;

      this.steps.forEach((step, index) => {
        step.addEventListener('focus', () => {
          this.focusedStep.innerText = index + 1;
          let offset = event.currentTarget.offsetTop;
          // let offset_2 = event.currentTarget.getBoundingClientRect().top;

          let _ancestorLi = utils.findParent(
            event.currentTarget,
            'form__list-item'
          );

          let offset_3 = _ancestorLi.offsetTop;

          // component.scrollTop = offset / 2;

          console.log('ELEM POSITION!!!!!', this.content.clientHeight / 2);
          console.log('ELEM POSITION!!!!!', offset);
          console.log('CONTENT POSITION!!!!!', this.content);

          let pos = screen.height - component.offsetTop;

          this.content = component.querySelector(UIFormCard.SELECTORS.content);

          utils.scrollTo(this.content, offset_3, 300);
        });

        step.addEventListener('blur', () => {
          this.focusedStep.innerText = 0;
        });
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
  form: '.ui-form-card__form',
  focusedStep: '.ui-form-card__field-steps-focused',
  numberOfSteps: '.ui-form-card__field-steps-number',
};

export default UIFormCard;
