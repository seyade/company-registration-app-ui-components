import * as utils from '../utils';

/**
 * Picklist component
 */
class UIPicklist {
  constructor() {
    this._component;

    /**
     * components
     * @type {Element}
     */
    this._components;

    /**
     * combobox
     * @type {Element}
     */
    this._combobox;

    /**
     * comboboxes
     * @type {Element}
     */
    this._comboboxes;

    /**
     * combobox input
     * @type {Element}
     */
    this._comboboxInput;

    /**
     * components
     * @type {Element}
     */
    this._comboboxInputs;

    /**
     * listbox
     * @type {Element}
     */
    this._listBox;

    /**
     * listbox options
     * @type {Element}
     */
    this._listBoxOptions;

    /**
     * listbox single option
     * @type {Element}
     */
    this._listBoxOption;

    /**
     * all listboxes options in the whole page
     * @type {Element}
     */
    this._allListBoxOptions;

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
    this._components = document.querySelectorAll(UIPicklist.SELECTORS.picklist);
    this._comboboxes = document.querySelectorAll(UIPicklist.SELECTORS.comboBox);

    for (this._component of this._components) {
      this._comboboxInput = this._component.querySelector(
        UIPicklist.SELECTORS.comboBoxInput
      );

      this._listBoxOptions = this._component.querySelectorAll(
        UIPicklist.SELECTORS.listBoxOption
      );

      this._listBox = this._component.querySelector(
        UIPicklist.SELECTORS.listBox
      );

      this._allListBoxOptions = this._listBox.querySelectorAll(
        '[role="presentation"'
      );

      this._registerEvents();
    }
  }

  /**
   * register events
   * @type {Element}
   * @private
   */
  _registerEvents() {
    this._comboboxInput.addEventListener('focus', this._manageFocus.bind(this));

    this._comboboxInput.addEventListener(
      'keyup',
      this._queryPickList.bind(this)
    );

    this._comboboxInput.addEventListener('click', event => {
      this._manageFocus(event);
      event.stopPropagation();
    });

    for (this._listBoxOption of this._listBoxOptions) {
      this._listBoxOption.addEventListener('click', event => {
        this._getSelectedOptionValue(event.currentTarget);
      });
    }

    this._listBox.addEventListener('keyup', event => {
      if (
        (event.which === 13 || event.keyCode === 13) &&
        document.activeElement.tagName === 'LI'
      ) {
        let _activelistOption = document.activeElement;

        this._getSelectedOptionValue(_activelistOption);
      }
    });

    document.body.addEventListener(
      'click',
      this._closeListBoxGlobally.bind(this)
    );

    document.body.addEventListener(
      'keyup',
      this._closeListBoxGlobally.bind(this)
    );
  }

  /**
   * close listbox when when clicking anywhere on the page
   * or pressing "Esc"
   * @param {Event} event
   */
  _closeListBoxGlobally(event) {
    if (event.which === 27 || event.keyCode === 27 || event.type === 'click') {
      let _environment = event.target;

      for (let component of this._components) {
        let _comboboxInput = component.querySelector(
          UIPicklist.SELECTORS.comboBoxInput
        );

        if (_environment !== _comboboxInput) {
          this._closeListBox(
            component.querySelector(UIPicklist.SELECTORS.comboBox)
          );

          _comboboxInput.setAttribute('aria-expanded', 'false');
        }
      }
    }
  }

  /**
   * manage focused element
   * @param {Event} event
   * @private
   */
  _manageFocus(event) {
    const _self = event.currentTarget;

    this._combobox = utils.findParent(_self, UIPicklist.CLASSES.comboBox);

    let _listBox = this._combobox.querySelector(UIPicklist.SELECTORS.listBox);
    let _listOptions = _listBox.querySelectorAll('[role="presentation"');

    this._comboboxes.forEach(comboBox => {
      comboBox.setAttribute('tabindex', '-1');
    });

    if (!this._combobox.classList.contains(UIPicklist.CLASSES.isOpen)) {
      this._combobox.classList.add(UIPicklist.CLASSES.isOpen);
    }

    this._allListBoxOptions.forEach(listBoxOption => {
      listBoxOption.setAttribute('tabindex', '-1');
    });

    _listOptions.forEach((listOption, index) => {
      listOption.setAttribute('tabindex', `0`);
    });

    _listOptions[_listOptions.length - 1].addEventListener('blur', () => {
      this._combobox.classList.remove(UIPicklist.CLASSES.isOpen);
    });

    _self.setAttribute('aria-expanded', 'true');
  }

  /**
   * query option in picklist
   * @param {Event} event
   * @private
   */
  _queryPickList(event) {
    const _self = event.currentTarget;

    this._combobox = utils.findParent(_self, UIPicklist.CLASSES.comboBox);

    let _filter = _self.value.toUpperCase();
    let _queries = this._combobox.querySelectorAll(
      UIPicklist.SELECTORS.optionBodySpan
    );
    let _listItem;
    let _queryText;

    if (event.which === 27 || event.keyCode === 27) {
      this._closeListBox(this._combobox);
    }

    for (let i = 0, qlen = _queries.length; i < qlen; i += 1) {
      _queryText = _queries[i].textContent || _queries[i].innerText;

      _listItem = utils.findParent(_queries[i], UIPicklist.CLASSES.listBoxItem);

      if (_queryText.toUpperCase().indexOf(_filter) > -1) {
        _listItem.style.display = '';
      } else {
        _listItem.style.display = 'none';
      }
    }
  }

  /**
   * get the selected option value
   * @param {Element} element
   * @private
   */
  _getSelectedOptionValue(element) {
    this._combobox = utils.findParent(element, UIPicklist.CLASSES.comboBox);

    const _thisComboInput = this._combobox.querySelector(
      UIPicklist.SELECTORS.comboBoxInput
    );

    let _optionText = element.querySelector(UIPicklist.SELECTORS.optionBodySpan)
      .innerText;

    _thisComboInput.value = _optionText;

    this._closeListBox(this._combobox);
  }

  /**
   * close listbox
   * @param {Element} comboBox
   * @private
   */
  _closeListBox(comboBox) {
    if (comboBox.classList.contains(UIPicklist.CLASSES.isOpen)) {
      comboBox.classList.remove(UIPicklist.CLASSES.isOpen);
    }
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
