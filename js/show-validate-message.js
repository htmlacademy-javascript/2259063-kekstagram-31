import { uploadPictureKeyDownHandler } from './form/form-modal';

const showValidateMessage = (value) => {
  const validateMessageTemplate = document.querySelector(`#${value}`).content.querySelector(`.${value}`);
  const validateMessage = validateMessageTemplate.cloneNode(true);
  document.body.append(validateMessage);
  const validateMessageButton = document.querySelector(`.${value}__button`);
  validateMessageButton.addEventListener('click', () => {
    validateMessage.remove();

  });
  validateMessage.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.stopPropagation();
      validateMessage.remove();
    }
  });
};

export { showValidateMessage };
