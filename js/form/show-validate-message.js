import { setValidateMessageState } from './form-modal';

const showValidateMessage = (value) => {
  const validateMessageTemplate = document.querySelector(`#${value}`).content.querySelector(`.${value}`);
  const validateMessage = validateMessageTemplate.cloneNode(true);
  document.body.append(validateMessage);
  const validateMessageButton = document.querySelector(`.${value}__button`);
  const validateMessageInner = validateMessage.querySelector(`.${value}__inner`);

  const onValidateMessageButtonClick = () => {
    closeValidateMessage();
  };

  const onDocumentKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.stopPropagation();
      closeValidateMessage();
    }
  };

  const onDocumentClick = (evt) => {
    if (!validateMessageInner.contains(evt.target)) {
      closeValidateMessage();
    }
  };

  function closeValidateMessage() {
    validateMessage.remove();
    setValidateMessageState(false);
    document.removeEventListener('keydown', onDocumentKeydown);
    document.removeEventListener('click', onDocumentClick);
    validateMessageButton.removeEventListener('click', onValidateMessageButtonClick);
  }

  validateMessageButton.addEventListener('click', onValidateMessageButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onDocumentClick);

  setValidateMessageState(true);
};

export { showValidateMessage };
