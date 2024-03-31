import { openUploadPicture } from './form/form-modal';
import { closeUploadPictureHandler } from './form/form-modal';
import { getData } from './api/get-data';
import { setPictureFormSubmit } from './form/form-validate';
import { openPicture } from './picture/open-picture';
import { renderPictures } from './picture/render-pictures';

import { showFiltersPanel } from './filters/filters';
import { getRandomElementsFromArray, removeElements } from './util';


const AMOUNT_FOR_RANDOM_FILTER = 10;
const RERENDER_DELAY = 500;

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

openUploadPicture();
getData()
  .then((data) => openPicture(renderPictures(data), data)).then(() => showFiltersPanel());
setPictureFormSubmit(closeUploadPictureHandler);


const filterButtons = document.querySelectorAll('.img-filters__button');

filterButtons.forEach((button) => {
  button.addEventListener('click', debounce((evt) => {
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
          const sortedData = data.sort((a , b) => b.comments.length - a.comments.length);
          openPicture(renderPictures(sortedData), sortedData);
        });
    }
  }, RERENDER_DELAY));
});


