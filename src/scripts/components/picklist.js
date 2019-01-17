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

    this.listBoxOptions;

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
    this.components = document.querySelectorAll(UIPicklist.SELECTORS.picklist);

    for (let component of this.components) {
      this.comboboxInput = component.querySelector(
        UIPicklist.SELECTORS.comboBoxInput
      );

      this.listBoxOptions = component.querySelectorAll(
        UIPicklist.SELECTORS.listBoxOption
      );

      this._addEvents();
    }
  }

  _addEvents() {
    this.comboboxInput.addEventListener('focus', event => {
      const _thisInput = event.currentTarget;
      this.combobox = utils.findParent(_thisInput, UIPicklist.CLASSES.comboBox);

      if (!this.combobox.classList.contains(UIPicklist.CLASSES.isOpen)) {
        this.combobox.classList.add(UIPicklist.CLASSES.isOpen);
      }
    });

    this.comboboxInput.addEventListener('keyup', event => {
      const _thisInput = event.currentTarget;

      this.combobox = utils.findParent(_thisInput, UIPicklist.CLASSES.comboBox);

      let filter = _thisInput.value.toUpperCase();
      let queries = this.combobox.querySelectorAll(
        UIPicklist.SELECTORS.optionBodySpan
      );
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

      event.stopPropagation();
    });

    this.comboboxInput.addEventListener('click', event =>
      event.stopPropagation()
    );

    for (let listBoxOption of this.listBoxOptions) {
      listBoxOption.addEventListener('click', event => {
        const _thisOption = event.currentTarget;

        this.combobox = utils.findParent(
          _thisOption,
          UIPicklist.CLASSES.comboBox
        );

        const _thisComboInput = this.combobox.querySelector(
          UIPicklist.SELECTORS.comboBoxInput
        );

        _thisComboInput.value = _thisOption.querySelector(
          UIPicklist.SELECTORS.optionBodySpan
        ).innerText;

        if (this.combobox.classList.contains(UIPicklist.CLASSES.isOpen)) {
          this.combobox.classList.remove(UIPicklist.CLASSES.isOpen);
        }
      });
    }

    document.body.addEventListener('click', event => {
      let environment = event.target;

      for (let component of this.components) {
        if (environment !== component) {
          component
            .querySelector(UIPicklist.SELECTORS.comboBox)
            .classList.remove(UIPicklist.CLASSES.isOpen);
        }
      }
    });
  }
}

// classes used by components
UIPicklist.CLASSES = {
  isOpen: 'slds-is-open',
  isSelected: 'slds-is-selected',
  comboBox: 'slds-combobox',
  listBoxItem: 'slds-listbox__item',
  listBoxOption: 'slds-listbox__option',
};

UIPicklist.SELECTORS = {
  picklist: '.ui-picklist',
  comboBox: '.slds-combobox',
  comboBoxInput: '.ui-form-element__combobox-input',
  optionBodySpan: '.slds-media__body > span',
  listBoxOption: '.slds-listbox__option',
};

export default UIPicklist;
