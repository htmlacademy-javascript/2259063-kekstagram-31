import { addPicture } from './add-picture';

// Вытаскиваем содержимое шаблона picture
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const picturesContainer = document.querySelector('.pictures');

const pictureListFragments = document.createDocumentFragment();

const usersPictures = addPicture();

// перебираем полученный массив из результата выполнения функции usersPictures
// и присваиваем результат перебора в переменную для экспорта
const renderPicture = usersPictures.forEach(({url, description, likes, comments}) => {
  // клонируем шаблон
  const newPicture = pictureTemplate.cloneNode(true);

  // находим нужные узлы в склонированном шаблоне и указываем значения из 'базы данных'
  // 1) изображение
  const pictureImg = newPicture.querySelector('.picture__img');
  pictureImg.alt = description;
  pictureImg.src = url;

  // 2) количество лайков
  const pictureLikes = newPicture.querySelector('.picture__likes');
  pictureLikes.textContent = likes;

  // 3) количество комментариев
  const pictureComments = newPicture.querySelector('.picture__comments');
  pictureComments.textContent = comments.length;

  // вставляем в разметку
  pictureListFragments.append(newPicture);
  picturesContainer.append(pictureListFragments);
});

export {renderPicture};
