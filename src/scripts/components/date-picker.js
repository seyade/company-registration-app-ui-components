import * as utils from '../utils';

/**
 * Date Picker component
 */
class UIDatePicker {
  constructor() {
    /**
     * component container
     * @type {Element}
     * @private
     */
    this._component;

    /**
     * calendar toggle button
     * @type {Element}
     * @private
     */
    this._calendarButtons;
  }

  init() {
    this._component = document.querySelector('.ui-date-picker');

    this._calendarButtons = this._component.querySelectorAll(
      '.ui-date-picker__button'
    );

    this._registerEvents();
  }

  /**
   * Register events
   * @private
   */
  _registerEvents() {
    for (let calendarButton of this._calendarButtons) {
      calendarButton.addEventListener('click', event => {
        let ancestor = utils.findParent(
          event.currentTarget,
          UIDatePicker.CLASSES.uiFormElement
        );

        if (!ancestor.classList.contains(UIDatePicker.CLASSES.isOpen)) {
          ancestor.classList.add(UIDatePicker.CLASSES.isOpen);
        } else {
          ancestor.classList.remove(UIDatePicker.CLASSES.isOpen);
        }
      });
    }
  }
}

// classes used by components
UIDatePicker.CLASSES = {
  uiFormElement: 'ui-form-element',
  isOpen: 'slds-is-open',
};

export default UIDatePicker;
