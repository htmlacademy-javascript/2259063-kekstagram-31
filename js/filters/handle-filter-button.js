
import { renderPictures } from '../picture/render-pictures';
import { getRandomElementsFromArray, removeElements } from '../util';
import { debounce } from '../util';

const RERENDER_DELAY = 500;
const AMOUNT_FOR_RANDOM_FILTER = 10;

const fooDef = (data) => {
  removeElements('.picture');
  renderPictures(data);
};
const fooRandom = (data) => {
  removeElements('.picture');
  const randomData = getRandomElementsFromArray(data, AMOUNT_FOR_RANDOM_FILTER);
  renderPictures(randomData);
};
const fooSorted = (data) => {
  removeElements('.picture');
  const sortedData = data.slice().sort((a, b) => b.comments.length - a.comments.length);
  renderPictures(sortedData);
};

const handleFilterButtonClick = (buttons, data, evt) => {
  buttons.forEach((filterButton) => {
    filterButton.classList.remove('img-filters__button--active');
  });

  if (evt.target.id === 'filter-default') {
    debounce(fooDef(data), RERENDER_DELAY);
  }

  if (evt.target.id === 'filter-random') {
    debounce(fooRandom(data), RERENDER_DELAY);
  }

  if (evt.target.id === 'filter-discussed') {
    debounce(fooSorted(data), RERENDER_DELAY);
  }

  evt.target.classList.add('img-filters__button--active');
};

export { handleFilterButtonClick };
