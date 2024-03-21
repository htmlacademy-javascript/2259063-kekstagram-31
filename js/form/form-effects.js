import { uploadPicturePreviev } from './form-modal';

const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');

const effectsMap = {
  chrome: { filter: 'grayscale', unit: '', min: 0, max: 1 },
  sepia: { filter: 'sepia', unit: '', min: 0, max: 1 },
  marvin: { filter: 'invert', unit: '%', min: 0, max: 100 },
  phobos: { filter: 'blur', unit: 'px', min: 0, max: 3 },
  heat: { filter: 'brightness', unit: '', min: 1, max: 3 }
};

let currentEffect = 'none';

const updatePictureStyle = () => {
  const effect = effectsMap[currentEffect];
  let value;

  if (currentEffect === 'none') {
    uploadPicturePreviev.style.filter = 'none';
  } else if (currentEffect === 'invert') {
    value = effectLevelValue.value * (effect.max - effect.min) + effect.min;
    uploadPicturePreviev.style.filter = `${effect.filter}(${value}${effect.unit})`;
  } else if (currentEffect === 'phobos') {
    value = effectLevelValue.value * (effect.max - effect.min) / 100;
    uploadPicturePreviev.style.filter = `${effect.filter}(${value}${effect.unit})`;
  } else {
    value = effectLevelValue.value * (effect.max - effect.min) / 100 + effect.min;
    uploadPicturePreviev.style.filter = `${effect.filter}(${value}${effect.unit})`;
  }
};

const changeEffectHandler = (evt) => {
  if (evt.target.checked) {
    currentEffect = evt.target.value;
    updatePictureStyle();
    if (currentEffect === 'none') {
      effectLevelSlider.style.display = 'none';
    } else {
      effectLevelSlider.style.display = 'block';
    }
    effectLevelValue.value = '100';
  }
};

noUiSlider.create(effectLevelSlider, {
  start: 100,
  connect: 'lower',
  step: 1,
  range: {
    min: 0,
    max: 100
  }
});

effectLevelSlider.noUiSlider.on('update', (values, handle) => {
  effectLevelValue.value = Math.round(values[handle]);
  updatePictureStyle();
});

// Добавляем обработчик событий для переключения эффектов
document.querySelectorAll('.effects__radio').forEach((radio) => {
  radio.addEventListener('change', changeEffectHandler);
});
