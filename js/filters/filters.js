import { getRandomElementsFromArray, removeElements, debounce } from '../util';
import { renderPictures } from '../picture/render-pictures';

const AMOUNT_FOR_RANDOM_FILTER = 10;
const RERENDER_DELAY = 500;
const filters = document.querySelector('.img-filters');

const showFiltersForPreviewPanel = () => {
  filters.classList.remove('img-filters--inactive');
};

const filterButtons = document.querySelectorAll('.img-filters__button');

const changeFilterForPreview = (buttons, getDataPromise) => {
  getDataPromise.then((data) => {
    buttons.forEach((button) => {
      button.addEventListener('click', (evt) => {
        filterButtons.forEach((filterButton) => {
          filterButton.classList.remove('img-filters__button--active');
        });

        evt.target.classList.add('img-filters__button--active');

        const debouncedRenderPictures = debounce(renderPictures, RERENDER_DELAY);

        if (evt.target.id === 'filter-default') {
          removeElements('.picture');
          debouncedRenderPictures(data);
        }

        if (evt.target.id === 'filter-random') {
          removeElements('.picture');
          const randomData = getRandomElementsFromArray(data, AMOUNT_FOR_RANDOM_FILTER);
          debouncedRenderPictures(randomData);
        }

        if (evt.target.id === 'filter-discussed') {
          removeElements('.picture');
          const sortedData = data.slice().sort((a, b) => b.comments.length - a.comments.length);
          debouncedRenderPictures(sortedData);
        }
      });
    });
  });
};

export { showFiltersForPreviewPanel, changeFilterForPreview, filterButtons };
