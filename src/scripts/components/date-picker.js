import * as utils from '../utils';

class UIDatePicker {
  constructor() {
    /**
     * component container
     * @type {Element}
     */
    this.component;
    /**
     * calendar toggle button
     * @type {Element}
     */
    this.calendarButtons;
  }

  init() {
    this.component = document.querySelector('.ui-date-picker');

    this.calendarButtons = this.component.querySelectorAll(
      '.ui-date-picker__button'
    );

    this._addEvents();
  }

  _addEvents() {
    for (let calendarButton of this.calendarButtons) {
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

UIDatePicker.CLASSES = {
  uiFormElement: 'ui-form-element',
  isOpen: 'slds-is-open',
};

export default UIDatePicker;
