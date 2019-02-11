import * as utils from '../utils';

/**
 * Card component
 */
class UICard {
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
    this._components = document.querySelectorAll('.ui-card');

    for (let component of this._components) {
      this.closeButton = component.querySelector('.ui-button--close');

      this._registerEvents();
    }
  }

  /**
   * Register events
   * @private
   */
  _registerEvents() {
    if (this.closeButton) {
      this.closeButton.addEventListener('click', event => {
        const _ancestor = utils.findParent(
          event.currentTarget,
          UICard.CLASSES.card
        );

        if (!_ancestor.classList.contains(UICard.CLASSES.isClose)) {
          _ancestor.classList.add(UICard.CLASSES.isClose);
        }
      });
    }
  }
}

// classes used by components
UICard.CLASSES = {
  card: 'ui-card',
  isClose: 'ui-card--is-close',
};

export default UICard;
