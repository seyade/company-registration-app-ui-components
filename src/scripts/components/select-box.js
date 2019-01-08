import * as utils from '../utils';

/**
 * SelectBox component
 * @description styled select dropdown to replace native HTML select.
 */
class UISelectBox {
  constructor() {
    /**
     * selectBoxes array
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
     * pseudoOptions
     * @type {Element}
     */
    this.pseudoOptions;

    /**
     * selectBoxWrap
     * @type {Element}
     */
    this.selectBoxWrap;

    /**
     * progress marker
     * @type {Element}
     */
    this.marker;
  }

  /**
   * initiate component
   */
  init() {
    this._renderSelectBox();
  }

  /**
   * _renderSelectBox
   * @method
   * @private
   */
  _renderSelectBox() {
    this.selectBoxes = document.querySelectorAll('.select-box');

    this.selectBoxes.forEach(selectBox => {
      const parentItem = selectBox.parentElement;

      selectBox.classList.add(UISelectBox.CLASSES.selectBoxHidden);

      this.options = selectBox.querySelectorAll('option');

      this.selectBoxWrap = document.createElement('div');
      this.selectBoxWrap.className = UISelectBox.CLASSES.selectBoxWrap;

      this.pseudoSelect = document.createElement('span');
      this.pseudoSelect.className = UISelectBox.CLASSES.pseudoSelect;
      this.pseudoSelect.innerText = 'Type of business in DIFC';

      let arrowImage = document.createElement('img');
      arrowImage.className = 'pseudo-select__icon icon-image';
      arrowImage.src = '/assets/svg/arrow-down.svg';

      this.pseudoSelect.appendChild(arrowImage);

      this.pseudoList = document.createElement('ul');
      this.pseudoList.className =
        'pseudo-select__option-list pseudo-select__option-list--hidden';

      // add each pseudo options to list
      this._addPseudoOptions(this.pseudoList, this.options);

      this.selectBoxWrap.appendChild(this.pseudoSelect);
      this.selectBoxWrap.appendChild(this.pseudoList);

      parentItem.appendChild(this.selectBoxWrap);

      this.pseudoOptions = document.querySelectorAll('.pseudo-select__option');

      // interaction
      this._addEvents();
    }, this);
  }

  /**
   * _addPseudoOptions
   * @method
   * @private
   */
  _addPseudoOptions(newList, initialOptions) {
    initialOptions.forEach((option, i) => {
      let newOptionItem = document.createElement('li');

      newOptionItem.className = 'pseudo-select__option';
      newOptionItem.innerText = option.innerText;

      newList.appendChild(newOptionItem);
    });
  }

  /**
   * _addEvents
   * @method
   * @private
   */
  _addEvents() {
    this.pseudoSelect.addEventListener('click', event => {
      const thisPseudoSelect = event.currentTarget;
      const thisPseudoList = thisPseudoSelect.nextElementSibling;
      const listItemContent = utils.findParent(
        thisPseudoSelect,
        'slds-progress__item_content'
      );

      this.marker = listItemContent.previousElementSibling;

      if (
        !thisPseudoList.classList.contains(UISelectBox.CLASSES.pseudoListHidden)
      ) {
        thisPseudoList.classList.add(UISelectBox.CLASSES.pseudoListHidden);
        this.marker.removeAttribute('style');
        this.selectBoxWrap.classList.remove('select-box-wrap--expanded');
      } else {
        thisPseudoList.classList.remove(UISelectBox.CLASSES.pseudoListHidden);
        this.marker.style.transform = 'translateY(-69px)';
        this.selectBoxWrap.classList.add('select-box-wrap--expanded');
      }
    });

    for (const pseudoOtion of this.pseudoOptions) {
      pseudoOtion.addEventListener('click', event => {
        console.log(event.currentTarget.innerText);
      });
    }
  }
}

// classes used by component
UISelectBox.CLASSES = {
  selectBoxWrap: 'select-box-wrap',
  selectBoxHidden: 'select-box--hidden',
  pseudoSelect: 'pseudo-select',
  pseudoListHidden: 'pseudo-select__option-list--hidden',
};

export default UISelectBox;
