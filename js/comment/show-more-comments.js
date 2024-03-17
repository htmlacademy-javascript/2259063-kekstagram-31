const SHOWED_COMMENTS_INTERVAL = 5;
let isHandlerOn = false;

const showMoreComments = (commentList, interval, button, counter) => {
  let commentsToShow = interval;
  if (commentList.length <= interval) {
    counter.textContent = commentList.length;
    button.classList.add('hidden');
  } else {
    button.classList.remove('hidden');
  }

  if (commentList.length > interval) {
    for (let i = interval; i < commentList.length; i++) {
      commentList[i].classList.add('hidden');
    }
  }

  const ShowMoreCommentsHandler = () => {
    const showedCount = document.querySelectorAll('.social__comment:not(.hidden)').length;
    if (commentsToShow > showedCount) {
      commentsToShow = interval;
    }

    const maxCountComments = Math.min(commentList.length, commentsToShow + interval);
    for (let j = commentsToShow; j < maxCountComments; j++) {
      commentList[j].classList.remove('hidden');
    }
    if (maxCountComments === commentList.length) {
      button.classList.add('hidden');
      commentsToShow = interval;
    } else {
      commentsToShow += interval;
    }

    counter.textContent = maxCountComments;
  };

  if (!isHandlerOn) {
    button.addEventListener('click', ShowMoreCommentsHandler);
    isHandlerOn = true;
  }
};

export { showMoreComments, SHOWED_COMMENTS_INTERVAL };
