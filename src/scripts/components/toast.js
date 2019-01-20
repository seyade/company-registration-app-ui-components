import * as utils from '../utils';

class UIToast {
  constructor() {
    this.components;

    this.closeButton;
  }

  init() {
    this.components = document.querySelectorAll('.ui-toast');

    for (let component of this.components) {
      this.closeButton = component.querySelector('.ui-toast__button');

      this._addEvents();
    }
  }

  _addEvents() {
    this.closeButton.addEventListener('click', event => {
      const _ancestor = utils.findParent(
        event.currentTarget,
        UIToast.CLASSES.toast
      );

      if (!_ancestor.classList.contains(UIToast.CLASSES.isClose)) {
        _ancestor.classList.add(UIToast.CLASSES.isClose);
      }
    });
  }
}

UIToast.CLASSES = {
  toast: 'ui-toast',
  isClose: 'ui-toast--is-close',
};

export default UIToast;
