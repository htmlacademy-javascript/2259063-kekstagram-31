const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelSliderContainer = document.querySelector('.img-upload__effect-level');
const effectFieldset = document.querySelectorAll('.img-upload__effects');
const uploadPicturePreviev = document.querySelector('.img-upload__preview img');

const effectsMap = {
  chrome: { filter: 'grayscale', unit: '', min: 0, max: 1 },
  sepia: { filter: 'sepia', unit: '', min: 0, max: 1 },
  marvin: { filter: 'invert', unit: '%', min: 0, max: 1 },
  phobos: { filter: 'blur', unit: 'px', min: 0, max: 3 },
  heat: { filter: 'brightness', unit: '', min: 1, max: 3 }
};

let currentEffect = 'none';
const updatePictureStyle = () => {
  const effect = effectsMap[currentEffect];
  let value;

  if (currentEffect === 'chrome' || currentEffect === 'sepia') {
    value = effectLevelValue.value * (effect.max - effect.min) / 100;
    uploadPicturePreviev.style.filter = `${effect.filter}(${value})`;
    effectLevelSliderContainer.classList.remove('hidden');
  } else if (currentEffect === 'marvin') {
    value = Math.round(effectLevelValue.value * (effect.max - effect.min) + effect.min);
    uploadPicturePreviev.style.filter = `${effect.filter}(${value}${effect.unit})`;
    effectLevelSliderContainer.classList.remove('hidden');
  } else if (currentEffect === 'phobos') {
    value = Math.round(effectLevelValue.value * (effect.max - effect.min) / 100);
    uploadPicturePreviev.style.filter = `${effect.filter}(${value}${effect.unit})`;
    effectLevelSliderContainer.classList.remove('hidden');
  } else if (currentEffect === 'heat') {
    value = Math.round(effectLevelValue.value * (effect.max - effect.min) / 100 + effect.min);
    uploadPicturePreviev.style.filter = `${effect.filter}(${value})`;
    effectLevelSliderContainer.classList.remove('hidden');
  } else {
    uploadPicturePreviev.style.filter = 'none';
    effectLevelSliderContainer.classList.add('hidden');
  }
};

const changeEffectHandler = (evt) => {
  if (evt.target.checked) {
    currentEffect = evt.target.value;
    effectLevelSlider.noUiSlider.set(100);
    effectLevelValue.value = 100;
    updatePictureStyle();
    if (currentEffect === 'none') {
      effectLevelSlider.classList.add('hidden');
    } else {
      effectLevelSlider.classList.remove('hidden');
    }
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

effectLevelSlider.noUiSlider.on('update', (values) => {
  effectLevelValue.value = values;
  updatePictureStyle();
});

const addEffectFieldsetEventHandler = () => {
  effectFieldset.forEach((radio) => {
    radio.addEventListener('change', changeEffectHandler);
  });
};

const removeEffectFieldsetEventHandler = () => {
  effectFieldset.forEach((radio) => {
    radio.removeEventListener('change', changeEffectHandler);
  });
};

//Сброс настроек до дефолтных
function resetEffectSlider() {
  uploadPicturePreviev.style.filter = 'none';
  effectLevelSliderContainer.classList.add('hidden');
  currentEffect = 'none';
  updatePictureStyle();
  removeEffectFieldsetEventHandler();
}

export { addEffectFieldsetEventHandler, removeEffectFieldsetEventHandler, resetEffectSlider };
