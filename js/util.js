const getRandomElementsFromArray = (array, amount) => array.slice().sort(() => Math.random() - 0.5).slice(0, amount);

const removeElements = (removedElements) => {
  const elementsToRemove = document.querySelectorAll(removedElements);
  elementsToRemove.forEach((element) => element.remove());
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { debounce, getRandomElementsFromArray, removeElements };
