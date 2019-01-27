/**
 * findParent
 * @param {Element} el
 * @param {string} cls
 * @method
 * @private
 */
export function findParent(el, cls) {
  while (
    (el = el.parentElement || el.parentNode) &&
    !el.classList.contains(cls)
  );
  return el;
}

/**
 * scrollTo
 * @param {Element} container
 * @param {Number} to
 * @param {Number} duration
 */
export function scrollTo(container, to, duration) {
  let start = container.scrollTop;
  let change = to - start;
  let currentTime = 0;
  let increment = 20;

  let animateScroll = () => {
    currentTime += increment;

    let val = Math.easeInOutQuad(currentTime, start, change, duration);

    container.scrollTop = val;

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function(currentTime, start, difference, duration) {
  currentTime /= duration / 2;

  if (currentTime < 1) {
    return (difference / 2) * currentTime * currentTime + start;
  }

  currentTime--;

  return (-difference / 2) * (currentTime * (currentTime - 2) - 1) + start;
};
