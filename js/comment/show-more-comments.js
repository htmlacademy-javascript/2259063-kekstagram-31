import { commentsMoreButton, commentsList } from "../picture/open-picture";

// import { keyDownHandler, modalBigPicture } from "../modal";

const SHOWED_COMMENTS_INTERVAL = 5;
let isHandlerOn = false;

const showMoreComments = (commentList, inter, button, counter) => {
  let interval = inter;
  if (commentList.length < interval) {
    counter.textContent = commentList.length;
    button.style.display = "none";
  } else {
    button.style.display = "block";
  }

  if (commentList.length > interval) {
    for (let i = interval; i < commentList.length; i++) {
      commentList[i].style.display = "none";
    }
  }

  const ShowMoreCommentsHandler = () => {
    console.log(interval);
    for (let j = interval; j < interval + 5 && j < commentList.length; j++) {
      commentList[j].style.display = "flex";
    }
    interval += 5;
    counter.textContent = interval;
    if (interval >= commentList.length) {
      commentsMoreButton.style.display = "none";
      interval = SHOWED_COMMENTS_INTERVAL;
      counter.textContent = commentList.length;
    }
    isHandlerOn = true;
  };

  if (!isHandlerOn) button.addEventListener("click", ShowMoreCommentsHandler);
};

export { showMoreComments, SHOWED_COMMENTS_INTERVAL };
