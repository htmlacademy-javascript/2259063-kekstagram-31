const uploadPictureInput = document.querySelector('.img-upload__input');
const uploadPictureOverlay = document.querySelector('.img-upload__overlay');
const uploadOverlaycloseButton = uploadPictureOverlay.querySelector('.img-upload__cancel');

const uploadPictureHandler = () => {
  uploadPictureOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', uploadPictureKeyDownHandler);
};

const closeUploadPictureOverlay = () => {
  uploadPictureOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', uploadPictureKeyDownHandler);
};

function uploadPictureKeyDownHandler(evt) {
  if (evt.key === 'Escape') {
    closeUploadPictureOverlay();
  }
}

uploadPictureInput.addEventListener('change', uploadPictureHandler);
uploadOverlaycloseButton.addEventListener('click', closeUploadPictureOverlay);

