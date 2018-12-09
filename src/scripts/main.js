console.log('MAIN IS RUNNING!!!!');
(function() {
  const toggleButtons = document.querySelectorAll('.button--toggle');

  for (let toggleButton of toggleButtons) {
    toggleButton.addEventListener('click', event => {
      let parentGroup = event.currentTarget.parentElement;
      let details = parentGroup.nextElementSibling;

      if (details.classList.contains('path-summary__details--hidden')) {
        details.classList.remove('path-summary__details--hidden');
        event.currentTarget.classList.add('button--toggle--open');
      } else {
        details.classList.add('path-summary__details--hidden');
        event.currentTarget.classList.remove('button--toggle--open');
      }
    });
  }

  const closeButton = document.querySelector('.button--close');

  closeButton.addEventListener('click', event => {
    event.currentTarget.parentElement.classList.add('announcement--hidden');
  });
})();
