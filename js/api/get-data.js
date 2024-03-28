
import { addDataError } from './add-data-error';

const getData = () => fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(addDataError());
  });

export { getData };
