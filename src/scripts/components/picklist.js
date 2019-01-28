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

    this.listBox;

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

      this.listBox = component.querySelector(UIPicklist.SELECTORS.listBox);

      this._registerEvents();
    }
  }

  _registerEvents() {
    this.comboboxInput.addEventListener('focus', event => {
      const _self = event.currentTarget;
      this.combobox = utils.findParent(_self, UIPicklist.CLASSES.comboBox);

      if (!this.combobox.classList.contains(UIPicklist.CLASSES.isOpen)) {
        this.combobox.classList.add(UIPicklist.CLASSES.isOpen);
      }

      _self.setAttribute('aria-expanded', 'true');
    });

    this.comboboxInput.addEventListener('keyup', event => {
      const _self = event.currentTarget;

      this.combobox = utils.findParent(_self, UIPicklist.CLASSES.comboBox);

      let _allListItems = this.combobox.querySelectorAll(
        '.slds-listbox__item[style]:not([style=""])'
      );

      let filter = _self.value.toUpperCase();
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
    });

    this.comboboxInput.addEventListener('click', event =>
      event.stopPropagation()
    );

    for (let listBoxOption of this.listBoxOptions) {
      listBoxOption.addEventListener('click', event => {
        const _self = event.currentTarget;

        this.combobox = utils.findParent(_self, UIPicklist.CLASSES.comboBox);

        const _thisComboInput = this.combobox.querySelector(
          UIPicklist.SELECTORS.comboBoxInput
        );

        let optionText = _self.querySelector(
          UIPicklist.SELECTORS.optionBodySpan
        ).innerText;

        _thisComboInput.value = optionText;

        if (this.combobox.classList.contains(UIPicklist.CLASSES.isOpen)) {
          this.combobox.classList.remove(UIPicklist.CLASSES.isOpen);
        }
      });
    }

    this.listBox.addEventListener('focus', event => {
      const _self = event.currentTarget;

      this.combobox = utils.findParent(_self, UIPicklist.CLASSES.comboBox);

      let _options = this.combobox.querySelectorAll(
        UIPicklist.SELECTORS.listBoxOption
      );

      let ariaSelected = _self.querySelectorAll('[aria-selected="true"]');

      if (!ariaSelected.length) {
        ariaSelected[0].setAttribute('aria-selected', 'true');
        ariaSelected[0].focus();
      }
    });

    document.body.addEventListener('click', event => {
      let environment = event.target;

      for (let component of this.components) {
        let comboboxInput = component.querySelector(
          UIPicklist.SELECTORS.comboBoxInput
        );

        if (environment !== comboboxInput) {
          component
            .querySelector(UIPicklist.SELECTORS.comboBox)
            .classList.remove(UIPicklist.CLASSES.isOpen);

          comboboxInput.setAttribute('aria-expanded', 'false');
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
  listBox: 'slds-listbox',
  listBoxItem: 'slds-listbox__item',
  listBoxOption: 'slds-listbox__option',
  listBoxOptionHighlighted: 'slds-listbox__option--highlighted',
};

UIPicklist.SELECTORS = {
  picklist: '.ui-picklist',
  comboBox: '.slds-combobox',
  comboBoxInput: '.ui-form-element__combobox-input',
  optionBodySpan: '.slds-media__body > span',
  listBox: '.slds-listbox',
  listBoxOption: '.slds-listbox__option',
  listBoxItem: '.slds-listbox__item',
};

export default UIPicklist;
