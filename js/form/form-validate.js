const uploadForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  successClass: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'pristine-error'
},
false
);

const inputHashtag = uploadForm.querySelector('#hashtags');

const validateHashtagsFormat = (value) => {
  const hashtags = value.split(' ');
  const regex = /^#[a-zA-Z0-9]{1,19}$/;
  return hashtags.every((tag) => regex.test(tag));
};

const validateHashtagsCount = (value) => {
  const hashtags = value.split(' ');
  return hashtags.length <= 5;
};

const validateHashtagsUnique = (value) => {
  const hashtags = value.split(' ');
  const uniqueHashtags = new Set(hashtags.map((tag) => tag.toLowerCase()));
  return hashtags.length === uniqueHashtags.size;
};

pristine.addValidator(inputHashtag, validateHashtagsFormat, 'Хэштег должен начинаться с символа # и содержать только буквы и цифры, длиной от 1 до 20 символов (включая #)');
pristine.addValidator(inputHashtag, validateHashtagsCount, 'Максимальное количество хэштегов - 5');
pristine.addValidator(inputHashtag, validateHashtagsUnique, 'Имеются повторяющиеся хэштеги');

uploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
