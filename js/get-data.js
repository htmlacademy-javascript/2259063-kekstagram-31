import { openPicture } from './picture/open-picture';
import { renderPicutres } from './picture/render-pictures';
import { addDataError } from './add-data-error';

const getData = () => {
  fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(addDataError());
    })
    .then((data) => openPicture(renderPicutres(data), data));
};

export { getData };
