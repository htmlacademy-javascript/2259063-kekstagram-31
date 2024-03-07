import { addPicture } from './add-picture';

const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const picturesContainer = document.querySelector('.pictures');

const pictureListFragments = document.createDocumentFragment();

const usersPictures = addPicture();

usersPictures.forEach(({ url, description, likes, comments }) => {
  const newPicture = pictureTemplate.cloneNode(true);

  const pictureImg = newPicture.querySelector('.picture__img');
  pictureImg.alt = description;
  pictureImg.src = url;

  const pictureLikes = newPicture.querySelector('.picture__likes');
  pictureLikes.textContent = likes;

  const pictureComments = newPicture.querySelector('.picture__comments');
  pictureComments.textContent = comments.length;

  // вставляем в фрагмент элемент
  pictureListFragments.append(newPicture);
});

const renderPicutres = picturesContainer.append(pictureListFragments);

export { renderPicutres };
