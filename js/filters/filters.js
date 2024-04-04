// import { debounce } from '../util';
import { handleFilterButtonClick } from './handle-filter-button';

// const RERENDER_DELAY = 500;
const filters = document.querySelector('.img-filters');
const filterButtons = document.querySelectorAll('.img-filters__button');

const showFiltersForPreviewPanel = () => {
  filters.classList.remove('img-filters--inactive');
};

const changeFilterForPreview = (buttons, data) => {
  buttons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      handleFilterButtonClick(buttons, data, evt);
    });
  });
};

export { showFiltersForPreviewPanel, changeFilterForPreview, filterButtons };
