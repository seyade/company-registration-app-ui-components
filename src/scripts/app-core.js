export class AppComponents {
  /**
   * @constructor
   * @param {Array} components
   */
  constructor(components) {
    /**
     * @type {Array}
     */
    this.components = components;
  }

  render() {
    if (typeof this.components !== 'undefined') {
      for (let component of this.components) {
        let element = new component();
        element.init();
      }
    } else {
      throw new Error(
        'There appear to be a problem with the component! Please make sure it is defined, exported and imported properly'
      );
    }
  }
}
