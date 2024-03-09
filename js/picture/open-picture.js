import { picturesContainer } from './render-pictures';
import { modalBigPicture, openModal } from '../modal';
import { createCommentList } from '../comment/create-comment-list';
import { usersPictures } from './render-pictures';

const thumbnails = picturesContainer.querySelectorAll('.picture');
const bigPicturePreviev = modalBigPicture.querySelector(
  '.big-picture__preview'
);
const commentsList = bigPicturePreviev.querySelector('.social__comments');

// цикл на массиве данных по каждой миниатюре
const openPicture = (gallery) => {
  for (let i = 0; i < gallery.length; i++) {
    const thumbnail = gallery[i];
    const thumbnailImg = thumbnail.querySelector('img');
    const thumbnailUrl = thumbnailImg.src;
    const thumbnailAlt = thumbnailImg.alt;
    const thumbnailComments =
      thumbnail.querySelector('.picture__comments').textContent;
    const thumbnailLikes =
      thumbnail.querySelector('.picture__likes').textContent;

    // обработчик на клик по миниатюре
    thumbnail.addEventListener('click', () => {
      openModal();
      const bigPictureImage = bigPicturePreviev
        .querySelector('.big-picture__img')
        .querySelector('img');
      const bigPictureLikesCount =
        bigPicturePreviev.querySelector('.likes-count');
      const bigPictureCommentsCount = bigPicturePreviev.querySelector(
        '.social__comment-total-count'
      );
      const commentsData = usersPictures[i].comments;
      const bigPictureDescription =
        bigPicturePreviev.querySelector('.social__caption');

      bigPictureImage.src = thumbnailUrl;
      bigPictureImage.alt = thumbnailAlt;
      bigPictureLikesCount.textContent = thumbnailLikes;
      bigPictureCommentsCount.textContent = thumbnailComments;
      bigPictureDescription.textContent = thumbnailAlt;
      commentsList.append(createCommentList(commentsData));
    });
  }
};

const fullSizeViewer = openPicture(thumbnails);

export { commentsList, fullSizeViewer };
