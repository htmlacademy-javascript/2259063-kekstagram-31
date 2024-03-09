// имопртирую для того чтобы на closeModal() очищать список комментариев
import { commentsList } from './picture/open-picture';

const modalBigPicture = document.querySelector('.big-picture');
const modalCloseButton = modalBigPicture.querySelector('.cancel');

const keyDownHandler = (evt) => {
  evt.key === 'Escape' ? closeModal() : null;
};

const openModal = () => {
  modalBigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', keyDownHandler);
};

const closeModal = () => {
  while (commentsList.firstChild) {
    commentsList.removeChild(commentsList.firstChild);
  }

  modalBigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', keyDownHandler);
};

modalCloseButton.addEventListener('click', closeModal);

// экспортирую само модальное окно и функцию его открытия в open-picture.js
export { modalBigPicture, openModal, closeModal };
