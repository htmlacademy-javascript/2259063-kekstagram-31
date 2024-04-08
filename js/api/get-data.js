
import { addDataError } from './add-data-error';
import { showFiltersForPreviewPanel } from '../filters/filters';

const getData = async () => {
  try {
    const response = await fetch('https://31.javascript.htmlacademy.pro/kekstagram/data');
    if (response.ok) {
      const data = await response.json();
      showFiltersForPreviewPanel();
      return data;
    } else {
      throw new Error('Ошибка получения данных');
    }
  } catch (error) {
    addDataError();
  }
};

export { getData };
