import { addPictures } from './picture/add-picture';
import { renderPicutres } from './picture/render-pictures';
import { openPicture } from './picture/open-picture';

const picturesDataArr = addPictures();
const picturesLayout = renderPicutres(picturesDataArr);
openPicture(picturesLayout, picturesDataArr);

export { picturesDataArr, picturesLayout };


import { uploadPicturePreviev } from './form/form-modal';

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
}

increaseScaleControlButton.addEventListener('click', () => {
  changeScale('increase');
});

decreaseScaleControlButton.addEventListener('click', () => {
  changeScale('decrease');
});

// increaseScaleControlButton.addEventListener('click', () => {
//   if (defaultScale < SCALE_MAX) {
//     defaultScale += SCALE_INTERVAL;
//   }
//   uploadPicturePreviev.style.transform = `scale(${defaultScale / 100})`;
//   scaleControlValue.value = `${defaultScale}%`;
// });

// decreaseScaleControlButton.addEventListener('click', () => {
//   if (defaultScale > SCALE_MIN) {
//     defaultScale -= SCALE_INTERVAL;
//   }
//   uploadPicturePreviev.style.transform = `scale(${defaultScale / 100})`;
//   scaleControlValue.value = `${defaultScale}%`;
// });
