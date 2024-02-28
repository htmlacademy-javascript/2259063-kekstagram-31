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

export {getRandomInteger, getRandomArrayElement, getRandomId, getRandomText}
