import { addPictures } from './add-picture';

const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const pictureListFragments = document.createDocumentFragment();
const PicturesDataArr = addPictures();

PicturesDataArr.forEach(({ url, description, likes, comments }) => {
  const newPicture = pictureTemplate.cloneNode(true);
  const pictureImg = newPicture.querySelector('.picture__img');
  const pictureLikes = newPicture.querySelector('.picture__likes');
  const pictureComments = newPicture.querySelector('.picture__comments');

  pictureImg.alt = description;
  pictureImg.src = url;
  pictureLikes.textContent = likes;
  pictureComments.textContent = comments.length;

  pictureListFragments.append(newPicture);
});

const renderPicutres = () => picturesContainer.append(pictureListFragments);

export { renderPicutres, picturesContainer, PicturesDataArr};
