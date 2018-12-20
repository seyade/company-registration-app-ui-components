/**
 * _findParent
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
