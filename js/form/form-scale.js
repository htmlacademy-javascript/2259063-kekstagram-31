import { uploadPicturePreviev } from './form-modal';

const SCALE_INTERVAL = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const scaleControl = document.querySelector('.scale');
const increaseScaleControlButton = scaleControl.querySelector('.scale__control--bigger');
const decreaseScaleControlButton = scaleControl.querySelector('.scale__control--smaller');
const scaleControlValue = scaleControl.querySelector('.scale__control--value');
let defaultScale = 100;

const changeScale = (direction) => {
  if (direction === 'increase' && defaultScale < SCALE_MAX) {
    defaultScale += SCALE_INTERVAL;
  } else if (direction === 'decrease' && defaultScale > SCALE_MIN) {
    defaultScale -= SCALE_INTERVAL;
  }

  uploadPicturePreviev.style.transform = `scale(${defaultScale / 100})`;
  scaleControlValue.value = `${defaultScale}%`;
};

const increaseScaleHandler = () => {
  changeScale('increase');
};

const decreaseScaleHandler = () => {
  changeScale('decrease');
};

const addScaleEventHandlers = () => {
  increaseScaleControlButton.addEventListener('click', increaseScaleHandler);
  decreaseScaleControlButton.addEventListener('click', decreaseScaleHandler);
};

const removeScaleEventHandlers = () => {
  increaseScaleControlButton.removeEventListener('click', increaseScaleHandler);
  decreaseScaleControlButton.removeEventListener('click', decreaseScaleHandler);
};

// сброс масштаба до дефолтного
const resetScale = () => {
  defaultScale = 100;
  uploadPicturePreviev.style.transform = `scale(${defaultScale / 100})`;
  scaleControlValue.value = `${defaultScale}%`;
};

export { removeScaleEventHandlers, addScaleEventHandlers, resetScale };
