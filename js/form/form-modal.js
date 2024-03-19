const uploadPictureInput = document.querySelector('.img-upload__input');
const uploadPictureOverlay = document.querySelector('.img-upload__overlay');
const uploadOverlaycloseButton = uploadPictureOverlay.querySelector('.img-upload__cancel');
const uploadPicturePreviev = document.querySelector('.img-upload__preview img');
const uploadEffectsPreviev = document.querySelectorAll('.effects__preview');

const uploadPictureHandler = () => {
  uploadPictureOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', uploadPictureKeyDownHandler);

  // загрузка изображений
  if (uploadPictureInput.files && uploadPictureInput.files[0]) {
    const reader = new FileReader();
    reader.onload = (element) => {
      uploadPicturePreviev.src = element.target.result;
      uploadEffectsPreviev.forEach((effectPreview) => {
        effectPreview.style.backgroundImage = `url('./photos/${uploadPictureInput.files[0].name}')`;
      });
    };
    reader.readAsDataURL(uploadPictureInput.files[0]);
  }
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

