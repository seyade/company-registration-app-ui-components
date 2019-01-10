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
    this.components;

    /**
     * header buttons to toggle accordion
     * @type {Element}
     */
    this.accordionTogglers;
  }

  init() {
    this.components = document.querySelectorAll('.ui-accordion');

    for (let component of this.components) {
      this.accordionTogglers = component.querySelectorAll(
        '.slds-accordion__summary-heading'
      );

      this._addEvents();
    }
  }

  _addEvents() {
    for (let toggle of this.accordionTogglers) {
      toggle.addEventListener('click', event => {
        let ancestor = utils.findParent(
          event.currentTarget,
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
