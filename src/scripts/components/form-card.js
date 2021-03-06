import * as utils from '../utils';

/**
 * Form component
 */
class UIFormCard {
  constructor() {
    /**
     * component
     * @type {Element}
     * @private
     */
    this._components;

    this._cardHeader;

    this._content;

    this._form;

    this._steps;

    this._numberOfSteps;

    this._focusedStep;
  }

  init() {
    this._components = document.querySelectorAll('.ui-form-card');

    for (let component of this._components) {
      this._cardHeader = component.querySelector(
        UIFormCard.SELECTORS.cardHeader
      );
      this._content = component.querySelector(UIFormCard.SELECTORS.content);
      this._form = component.querySelector(UIFormCard.SELECTORS.form);

      this._displayStatus();
      this._registerEvents();
    }
  }

  /**
   * Register events
   * @private
   */
  _registerEvents() {
    this._cardHeader.addEventListener('click', event => {
      const _thisComponent = utils.findParent(
        event.currentTarget,
        UIFormCard.CLASSES.container
      );

      this._form.removeAttribute('style');

      if (!_thisComponent.classList.contains(UIFormCard.CLASSES.collapsed)) {
        _thisComponent.classList.add(UIFormCard.CLASSES.collapsed);
      } else {
        _thisComponent.classList.remove(UIFormCard.CLASSES.collapsed);
      }
    });

    this._content.addEventListener('scroll', event => {
      const _self = event.currentTarget;

      const _thisComponent = utils.findParent(
        _self,
        UIFormCard.CLASSES.container
      );

      this._form.style.transition = 'none';

      if (_self.scrollTop > 32) {
        _thisComponent.classList.add(UIFormCard.CLASSES.sticky);
      } else {
        _thisComponent.classList.remove(UIFormCard.CLASSES.sticky);
      }
    });
  }

  /**
   * Display status
   * @private
   */
  _displayStatus() {
    for (let component of this._components) {
      this._numberOfSteps = component.querySelector(
        UIFormCard.SELECTORS.numberOfSteps
      );

      this._focusedStep = component.querySelector(
        UIFormCard.SELECTORS.focusedStep
      );

      this._steps = component.querySelectorAll(
        '.ui-form-element__control-input'
      );

      this._form = component.querySelector(UIFormCard.SELECTORS.form);
      this._numberOfSteps.innerText = this._steps.length;

      this._steps.forEach((step, index) => {
        step.addEventListener('focus', () => {
          this._focusedStep.innerText = index + 1;

          let _ancestorLi = utils.findParent(
            event.currentTarget,
            'form__list-item'
          );

          let offset = _ancestorLi.offsetTop;

          this._content = component.querySelector(UIFormCard.SELECTORS.content);

          utils.scrollTo(this._content, offset, 300);
        });

        step.addEventListener('blur', () => {
          this._focusedStep.innerText = 0;
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
