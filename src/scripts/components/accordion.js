import * as utils from '../utils';

/**
 * Accordion component
 */
class UIAccordion {
  constructor() {
    /**
     * component
     * @type {Element}
     */
    this.component;

    /**
     * header buttons to toggle accordion
     * @type {Element}
     */
    this.headerToggles;
  }

  init() {
    this.component = document.querySelector('.ui-accordion');

    this.headerToggles = this.component.querySelectorAll(
      '.slds-accordion__summary-action'
    );

    this._addEvents();
  }

  _addEvents() {
    for (let headerToggle of this.headerToggles) {
      headerToggle.addEventListener('click', e => {
        let ancestor = utils.findParent(
          e.currentTarget,
          UIAccordion.CLASSES.accordionSection
        );

        if (!ancestor.classList.contains(UIAccordion.CLASSES.isOpen)) {
          ancestor.classList.remove(UIAccordion.CLASSES.isClose);
          ancestor.classList.add(UIAccordion.CLASSES.isOpen);
        } else {
          ancestor.classList.remove(UIAccordion.CLASSES.isOpen);
          ancestor.classList.add(UIAccordion.CLASSES.isClose);
        }
      });
    }
  }
}

// classes used by components
UIAccordion.CLASSES = {
  accordionSection: 'slds-accordion__section',
  isOpen: 'slds-is-open',
  isClose: 'slds-is-close',
};

export default UIAccordion;
