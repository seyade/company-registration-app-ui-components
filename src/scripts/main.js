console.log('MAIN IS RUNNING!!!!');

class App {
  constructor() {
    /**
     * @description buttons to toggle content of Path Summary
     */
    this.toggleButtons = document.querySelectorAll('.button--toggle');

    /**
     * @description details of path
     */
    this.pathsSummaryDetails = document.querySelectorAll(
      '.path-summary__details'
    );

    /**
     * @description button to close panel
     */
    this.closeButton = document.querySelector('.button--close');
  }

  init() {
    this.toggle();
    this.closePanel();
  }

  toggle() {
    for (let toggleButton of this.toggleButtons) {
      toggleButton.addEventListener('click', event => {
        let parentGroup = event.currentTarget.parentElement;
        let details = parentGroup.nextElementSibling;

        if (details.classList.contains('path-summary__details--hidden')) {
          details.classList.remove('path-summary__details--hidden');
          details.classList.add('path-summary__details--open');

          event.currentTarget.classList.add('button--toggle--open');
        } else {
          details.classList.add('path-summary__details--hidden');
          details.classList.remove('path-summary__details--open');

          event.currentTarget.classList.remove('button--toggle--open');
        }
      });
    }
  }

  closePanel() {
    this.closeButton.addEventListener('click', event => {
      event.currentTarget.parentElement.classList.add('announcement--hidden');
    });
  }
}

// start the app
const app = new App();

app.init();
