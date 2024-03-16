import { modalBigPicture, openModal } from '../modal';
import { renderComments } from '../comment/render-comments';
import {
  showMoreComments,
  SHOWED_COMMENTS_INTERVAL,
} from '../comment/show-more-comments';

const bigPicturePreviev = modalBigPicture.querySelector(
  '.big-picture__preview'
);
const commentsList = bigPicturePreviev.querySelector('.social__comments');
const commentsMoreButton = bigPicturePreviev.querySelector('.comments-loader');
commentsMoreButton.classList.add('hidden');
const commentsShowCount = bigPicturePreviev.querySelector(
  '.social__comment-shown-count'
);

const openPicture = (gallery, dataArr) => {
  gallery = gallery.querySelectorAll('.picture');
  gallery.forEach((thumbnail, index) => {
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
      const defaultCounter = SHOWED_COMMENTS_INTERVAL;
      const bigPictureImage = bigPicturePreviev
        .querySelector('.big-picture__img')
        .querySelector('img');
      const bigPictureLikesCount =
        bigPicturePreviev.querySelector('.likes-count');
      const bigPictureCommentsCount = bigPicturePreviev.querySelector(
        '.social__comment-total-count'
      );
      const bigPictureDescription =
        bigPicturePreviev.querySelector('.social__caption');

      bigPictureImage.src = thumbnailUrl;
      bigPictureImage.alt = thumbnailAlt;
      bigPictureLikesCount.textContent = thumbnailLikes;
      bigPictureCommentsCount.textContent = thumbnailComments;
      bigPictureDescription.textContent = thumbnailAlt;

      const userComments = renderComments(
        dataArr,
        index,
        commentsList
      ).children;
      // функция для показа большего кол-ва комментариев
      showMoreComments(
        userComments,
        defaultCounter,
        commentsMoreButton,
        commentsShowCount
      );
    });
  });
};

export {
  commentsShowCount,
  commentsMoreButton,
  openPicture,
  bigPicturePreviev,
  commentsList,
};
