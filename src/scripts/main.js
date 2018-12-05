console.log('MAIN IS RUNNING!!!!');

const toggleButtons = document.querySelectorAll('.onedifc-button--toggle');

for (let toggleButton of toggleButtons) {
  toggleButton.addEventListener('click', event => {
    let parentGroup = event.currentTarget.parentElement;
    let details = parentGroup.nextElementSibling;

    if (details.classList.contains('path-summary__details--hidden')) {
      details.classList.remove('path-summary__details--hidden');
    } else {
      details.classList.add('path-summary__details--hidden');
    }
  });
}

const closeButton = document.querySelector('.onedifc-close');

closeButton.addEventListener('click', event => {
  event.currentTarget.parentElement.classList.add(
    'onedifc-announcement--hidden'
  );
});
