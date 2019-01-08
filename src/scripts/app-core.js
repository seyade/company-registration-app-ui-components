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
      this.components.forEach(component => {
        let element = new component();
        element.init();
      });
    }
  }
}
