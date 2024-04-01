import { getRandomElementsFromArray, removeElements, debounce } from '../util';
import { getData } from '../api/get-data';
import { renderPictures } from '../picture/render-pictures';
import { openPicture } from '../picture/open-picture';

const AMOUNT_FOR_RANDOM_FILTER = 10;
const RERENDER_DELAY = 500;
const filters = document.querySelector('.img-filters');

const showFiltersForPreviewPanel = () => {
  filters.classList.remove('img-filters--inactive');
};

const filterButtons = document.querySelectorAll('.img-filters__button');

const changeFilterForPreview = (buttons) => {
  buttons.forEach((button) => {
    button.addEventListener('click', debounce((evt) => {
      // Удаление класса img-filters__button--active со всех кнопок фильтров
      filterButtons.forEach((filterButton) => {
        filterButton.classList.remove('img-filters__button--active');
      });

      // Добавление класса img-filters__button--active к выбранной кнопке фильтра
      evt.target.classList.add('img-filters__button--active');

      if (evt.target.id === 'filter-default') {
        removeElements('.picture');
        getData()
          .then((data) => renderPictures(data));
      }

      if (evt.target.id === 'filter-random') {
        removeElements('.picture');
        getData()
          .then((data) => {
            const randomData = getRandomElementsFromArray(data, AMOUNT_FOR_RANDOM_FILTER);
            openPicture(renderPictures(randomData), randomData);
          });
      }

      if (evt.target.id === 'filter-discussed') {
        removeElements('.picture');
        getData()
          .then((data) => {
            const sortedData = data.sort((a, b) => b.comments.length - a.comments.length);
            openPicture(renderPictures(sortedData), sortedData);
          });
      }
    }, RERENDER_DELAY));
  });
};

export { showFiltersForPreviewPanel, changeFilterForPreview, filterButtons };
