import * as utils from '../utils';

/**
 * Picklist component
 */
class UIPicklist {
  constructor() {
    /**
     * component
     * @type {Element}
     */
    this.components;

    /**
     * combobox
     * @type {Element}
     */
    this.combobox;

    /**
     * combobox input
     * @type {Element}
     */
    this.comboboxInput;

    /**
     * option data
     * @type {Array}
     */
    this.optionData = [
      'Dragon Ball Z',
      'Boku no Hero Academia',
      'Hajime no Ippo',
      'City Hunter',
    ];
  }

  init() {
    this.components = document.querySelectorAll('.ui-picklist');

    for (let component of this.components) {
      this.comboboxInput = component.querySelector(
        '.ui-form-element__combobox-input'
      );

      this._addEvents();
    }
  }

  _addEvents() {
    this.comboboxInput.addEventListener('focus', event => {
      const _thisInput = event.currentTarget;
      const ancestor = utils.findParent(
        _thisInput,
        UIPicklist.CLASSES.comboBox
      );

      if (!ancestor.classList.contains(UIPicklist.CLASSES.isOpen)) {
        ancestor.classList.add(UIPicklist.CLASSES.isOpen);
      }
    });

    this.comboboxInput.addEventListener('blur', event => {
      const _thisInput = event.currentTarget;
      const ancestor = utils.findParent(
        _thisInput,
        UIPicklist.CLASSES.comboBox
      );

      if (ancestor.classList.contains(UIPicklist.CLASSES.isOpen)) {
        ancestor.classList.remove(UIPicklist.CLASSES.isOpen);
      }
    });

    this.comboboxInput.addEventListener('keyup', event => {
      const _thisInput = event.currentTarget;

      this.combobox = utils.findParent(_thisInput, UIPicklist.CLASSES.comboBox);

      let filter = _thisInput.value.toUpperCase();
      let queries = this.combobox.querySelectorAll('.slds-media__body > span');
      let listItem;
      let queryText;

      for (let i = 0, qlen = queries.length; i < qlen; i++) {
        queryText = queries[i].textContent || queries[i].innerText;
        listItem = utils.findParent(queries[i], UIPicklist.CLASSES.listBoxItem);

        if (queryText.toUpperCase().indexOf(filter) > -1) {
          listItem.style.display = '';
        } else {
          listItem.style.display = 'none';
        }
      }
    });
  }
}

// classes used by components
UIPicklist.CLASSES = {
  isOpen: 'slds-is-open',
  comboBox: 'slds-combobox',
  listBoxItem: 'slds-listbox__item',
};

export default UIPicklist;
