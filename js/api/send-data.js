import { resetEffectSlider } from '../form/form-effects-slider';
import { resetScale } from '../form/form-scale';
import { uploadForm } from '../form/form-validate';
import { showValidateMessage } from '../form/show-validate-message';

const sendData = (body) => fetch(
  'https://31.javascript.htmlacademy.pro/kekstagram1',
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (response.ok) {
      uploadForm.reset();
      resetEffectSlider();
      resetScale();
      showValidateMessage('success');
    } else {
      throw new Error();
    }
  })
  .catch (() => {
    showValidateMessage('error');
    throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
  });

export {sendData};

