
import { addDataError } from './add-data-error';
import { showFiltersForPreviewPanel } from '../filters/filters';

const getData = () => fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(addDataError());
  })
  .then((data) => {
    showFiltersForPreviewPanel();
    return data;
  });

export { getData };
