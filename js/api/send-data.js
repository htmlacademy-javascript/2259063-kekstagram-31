import { resetEffectSlider } from '../form/form-effects-slider';
import { resetScale } from '../form/form-scale';
import { uploadForm } from '../form/form-validate';

const sendData = (body) => fetch(
  'https://31.javascript.htmlacademy.pro/kekstagram',
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (response.ok) {
      uploadForm.reset();
      resetEffectSlider();
      resetScale();
      //TODO нужно оформить всплытие окна об успешной отправке формы
    } else {
      throw new Error();
      //TODO нужно оформить всплытие окна о неудачной отправке формы
    }
  })
  .catch (() => {
    throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
  });

export {sendData};


