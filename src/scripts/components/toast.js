import * as utils from '../utils';

/**
 * Toast component
 */
class UIToast {
  constructor() {
    /**
     * component
     * @type {Element}
     * @private
     */
    this._components;

    /**
     * close button
     * @type {Element}
     * @private
     */
    this._closeButton;
  }

  init() {
    this._components = document.querySelectorAll('.ui-toast');

    for (let component of this._components) {
      this._closeButton = component.querySelector('.ui-toast__button');

      this._registerEvents();
    }
  }

  /**
   * Register events
   * @private
   */
  _registerEvents() {
    this._closeButton.addEventListener('click', event => {
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

// classes used by components
UIToast.CLASSES = {
  toast: 'ui-toast',
  isClose: 'ui-toast--is-close',
};

export default UIToast;
