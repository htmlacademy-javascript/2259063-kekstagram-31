import { renderPicutres } from './picture/render-pictures';

const getData = () => {
  fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error (`${response.status} ${response.statusText}`);
    })
    .then((data) => renderPicutres(data))
    .catch((error) => {
      error();
    });
};

export {getData};
