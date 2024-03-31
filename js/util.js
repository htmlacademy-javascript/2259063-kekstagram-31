const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

const getRandomId = () => {
  let counter = 1;
  return () => counter++;
};

const getRandomText = (text) => {
  const textArray = text.split(/[.!?]+ |\.!\?/);
  return `${getRandomArrayElement(textArray)}.`;
};

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

export { getRandomInteger, debounce, getRandomArrayElement, getRandomId, getRandomText, getRandomElementsFromArray, removeElements };
