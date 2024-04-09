import { commentsShowCount, commentsList } from './open-picture';

const INITIAL_COMMENTS_COUNT = 5;
const modalBigPicture = document.querySelector('.big-picture');
const modalBigPictureCloseButton = modalBigPicture.querySelector('.cancel');

const openModalBigPicture = () => {
  modalBigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', bigPictureKeyDownHandler);

  if (commentsList.length < INITIAL_COMMENTS_COUNT) {
    commentsShowCount.textContent = commentsList.length;
  } else {
    commentsShowCount.textContent = INITIAL_COMMENTS_COUNT;
  }
};

const closeModalBigPicture = () => {
  commentsList.innerHTML = '';
  modalBigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', bigPictureKeyDownHandler);
};

function bigPictureKeyDownHandler(evt) {
  if (evt.key === 'Escape') {
    closeModalBigPicture();
  }
}

modalBigPictureCloseButton.addEventListener('click', closeModalBigPicture);

export { modalBigPicture, openModalBigPicture };
