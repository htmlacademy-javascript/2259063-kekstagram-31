const SHOWED_COMMENTS_INTERVAL = 5;
let isHandlerOn = false;

const showMoreComments = (commentList, inter, button, counter) => {
  let interval = inter;
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
    for (let j = interval; j < interval + 5 && j < commentList.length; j++) {
      commentList[j].classList.remove('hidden');
    }
    interval += 5;
    counter.textContent = interval;
    if (interval >= commentList.length) {
      button.classList.add('hidden');
      interval = SHOWED_COMMENTS_INTERVAL;
      counter.textContent = commentList.length;
    }
    isHandlerOn = true;
  };

  if (!isHandlerOn) {
    button.addEventListener('click', ShowMoreCommentsHandler);
  }
};

export { showMoreComments, SHOWED_COMMENTS_INTERVAL };
