import { picturesContainer } from './picture/render-pictures';
import { modalBigPicture, openModal } from './modal';
// import { createCommentList } from './test2';
// import { usersPictures } from './picture/render-pictures';

const thumbnails = picturesContainer.querySelectorAll('.picture');
const bigPicturePreviev = modalBigPicture.querySelector(
  '.big-picture__preview'
);

const openPicture = (gallery) => {
  for (const thumbnail of gallery) {
    const thumbnailImg = thumbnail.querySelector('img');
    const thumbnailUrl = thumbnailImg.src;
    const thumbnailAlt = thumbnailImg.alt;

    const thumbnailComments =
      thumbnail.querySelector('.picture__comments').textContent;

    const thumbnailLikes =
      thumbnail.querySelector('.picture__likes').textContent;

    thumbnail.addEventListener('click', () => {
      openModal();

      const bigPictureImage = bigPicturePreviev
        .querySelector('.big-picture__img')
        .querySelector('img');
      bigPictureImage.src = thumbnailUrl;
      bigPictureImage.alt = thumbnailAlt;

      const bigPictureLikesCount =
        bigPicturePreviev.querySelector('.likes-count');
      bigPictureLikesCount.textContent = thumbnailLikes;

      const bigPictureCommentsCount = bigPicturePreviev.querySelector(
        '.social__comment-total-count'
      );

      bigPictureCommentsCount.textContent = thumbnailComments;



      // for (const userPicture of usersPictures) {
      //   const commentsArray = userPicture.comments;

      //   console.log(createCommentList(commentsArray));
      // }

      const commentsList = bigPicturePreviev.querySelector('.social__comments');
      //TODO вот сюда как-то надо передать результат создания списков комментариев
      commentsList.append('контейнер с комментариями');

      const bigPictureDescription =
        bigPicturePreviev.querySelector('.social__caption');
      bigPictureDescription.textContent = thumbnailAlt;
    });
  }
};

openPicture(thumbnails);
