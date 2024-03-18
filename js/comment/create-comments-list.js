const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsListFragment = document.createDocumentFragment();

const createCommentsList = (commentArray) => {
  commentArray.forEach((comment) => {
    const newComment = commentTemplate.cloneNode(true);
    const newCommentPictureInfo = newComment.querySelector('.social__picture');
    newCommentPictureInfo.src = comment.avatar;
    newCommentPictureInfo.alt = comment.name;
    const newCommentText = newComment.querySelector('.social__text');
    newCommentText.textContent = comment.message;

    commentsListFragment.append(newComment);
  });

  return commentsListFragment;
};

export { createCommentsList };
