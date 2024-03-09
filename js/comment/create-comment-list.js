const commentTemplate = document
  .querySelector('#comment')
  .content.querySelector('.social__comment');
const commentsListFragment = document.createDocumentFragment();

// функция для создания списка комментариев которые потом нужно будет вставлять
const createCommentList = (commentArray) => {
  commentArray.forEach((comment) => {
    // создаю новый комментарий и нужно в него загонять инф из массива
    const newComment = commentTemplate.cloneNode(true);
    const newCommentPictureInfo = newComment.querySelector('.social__picture');
    newCommentPictureInfo.src = comment.avatar;
    newCommentPictureInfo.alt = comment.name;
    const newCommentText = newComment.querySelector('.social__text');
    newCommentText.textContent = comment.message;

    //добавляю созданный элемент списка комментариев (li) в фрагмент
    commentsListFragment.append(newComment);
  });

  // результат этой функции - сформированный фрагмент - возвращается (см. open-picture.js)
  return commentsListFragment;
};

export { createCommentList };
