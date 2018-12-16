/**
 * SelectBox component
 * @description styled select dropdown to replace native HTML select.
 */
class SelectBox {
  constructor() {
    /**
     * selectBoxes
     * @type {Element}
     */
    this.selectBoxes;

    /**
     * options
     * @type {Element}
     */
    this.options;

    /**
     * pseudoSelect
     * @type {Element}
     */
    this.pseudoSelect;

    /**
     * pseudoList
     * @type {Element}
     */
    this.pseudoList;

    /**
     * selectBoxWrap
     * @type {Element}
     */
    this.selectBoxWrap;
  }

  /**
   * initiate component
   */
  init() {
    this._renderSelectBox();
  }

  _renderSelectBox() {
    this.selectBoxes = document.querySelectorAll('.select-box');

    this.selectBoxes.forEach(selectBox => {
      const parentItem = selectBox.parentElement;

      selectBox.classList.add(SelectBox.CLASSES.selectBoxHidden);

      this.options = selectBox.querySelectorAll('option');

      this.selectBoxWrap = document.createElement('div');
      this.selectBoxWrap.className = SelectBox.CLASSES.selectBoxWrap;

      this.pseudoSelect = document.createElement('span');
      this.pseudoSelect.className = SelectBox.CLASSES.pseudoSelect;
      this.pseudoSelect.innerText = 'Type of business in DIFC';

      this.pseudoList = document.createElement('ul');
      this.pseudoList.className =
        'pseudo-select__option-list pseudo-select__option-list--hidden';

      // add each pseudo options to list
      this._addPseudoOptions(this.pseudoList, this.options);

      this.selectBoxWrap.appendChild(this.pseudoSelect);
      this.selectBoxWrap.appendChild(this.pseudoList);

      parentItem.appendChild(this.selectBoxWrap);

      // interaction
      this._addEvent();
    }, this);
  }

  _addPseudoOptions(newList, initialOptions) {
    initialOptions.forEach((option, i) => {
      const optionItem = document.createElement('li');

      optionItem.className = 'pseudo-select__option';
      optionItem.innerText = option.innerText;

      newList.appendChild(optionItem);
    });
  }

  _addEvent() {
    this.pseudoSelect.addEventListener('click', event => {
      const thisPseudoSelect = event.currentTarget;
      const thisPseudoList = thisPseudoSelect.nextElementSibling;

      if (
        !thisPseudoList.classList.contains(SelectBox.CLASSES.pseudoListHidden)
      ) {
        thisPseudoList.classList.add(SelectBox.CLASSES.pseudoListHidden);
      } else {
        thisPseudoList.classList.remove(SelectBox.CLASSES.pseudoListHidden);
      }
    });
  }
}

// classes used by component
SelectBox.CLASSES = {
  selectBoxWrap: 'select-box-wrap',
  selectBoxHidden: 'select-box--hidden',
  pseudoSelect: 'pseudo-select',
  pseudoListHidden: 'pseudo-select__option-list--hidden',
};

export default SelectBox;
