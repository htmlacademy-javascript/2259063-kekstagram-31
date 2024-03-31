import { removeScaleEventHandlers, addScaleEventHandlers } from './form-scale';
import { addEffectFieldsetEventHandler, removeEffectFieldsetEventHandler } from './form-effects-slider';

const uploadPictureInput = document.querySelector('.img-upload__input');
const uploadPictureOverlay = document.querySelector('.img-upload__overlay');
const uploadOverlaycloseButton = uploadPictureOverlay.querySelector('.img-upload__cancel');
const uploadPicturePreviev = document.querySelector('.img-upload__preview img');
const uploadEffectsPreviev = document.querySelectorAll('.effects__preview');
let isValidateMessageShown = false;

const uploadPictureHandler = () => {
  uploadPictureOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', uploadPictureKeyDownHandler);
  addScaleEventHandlers();
  // addUploadFormEventHandler();
  addEffectFieldsetEventHandler();

  // загрузка изображений
  if (uploadPictureInput.files && uploadPictureInput.files[0]) {
    const reader = new FileReader();
    reader.onload = (element) => {
      uploadPicturePreviev.src = element.target.result;
      uploadEffectsPreviev.forEach((effectPreview) => {
        effectPreview.style.backgroundImage = `url(${reader.result})`;
      });
    };
    reader.readAsDataURL(uploadPictureInput.files[0]);
  }
};

const closeUploadPictureHandler = () => {
  uploadPictureOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', uploadPictureKeyDownHandler);
  removeScaleEventHandlers();
  removeEffectFieldsetEventHandler();

};

function uploadPictureKeyDownHandler(evt) {
  if (evt.key === 'Escape' && !isValidateMessageShown) {
    closeUploadPictureHandler();
  }
}

function setValidateMessageState(value) {
  isValidateMessageShown = value;
}

const openUploadPicture = () => {
  uploadPictureInput.addEventListener('change', uploadPictureHandler);
  uploadOverlaycloseButton.addEventListener('click', closeUploadPictureHandler);
};

export { uploadPicturePreviev, openUploadPicture, uploadPictureHandler, closeUploadPictureHandler, setValidateMessageState };
