import { commentsMoreButton, commentsList } from "../picture/open-picture";

import { keyDownHandler, modalBigPicture } from "../modal";

const SHOWED_COMMENTS_INTERVAL = 5;

const showMoreComments = (commentList, interval, button, counter) => {
  if (commentList.length < interval) {
    counter.textContent = commentList.length;
  } else {
    button.style.display = "block";
  }

  if (commentList.length > interval) {
    for (let i = interval; i < commentList.length; i++) {
      commentList[i].style.display = "none";
    }
  }

  const ShowMoreCommentsHandler = () => {
    for (let j = interval; j < interval + 5 && j < commentList.length; j++) {
      commentList[j].style.display = "flex";
    }
    interval += 5;
    counter.textContent = interval;
    if (interval >= commentList.length) {
      commentsMoreButton.style.display = "none";
      counter.textContent = commentList.length;
    }
  };

  button.addEventListener("click", ShowMoreCommentsHandler);

  const closeModal = () => {
    commentsList.innerHTML = "";

    modalBigPicture.classList.add("hidden");
    document.body.classList.remove("modal-open");

    document.removeEventListener("keydown", keyDownHandler);
    button.removeEventListener("click", ShowMoreCommentsHandler);
  };

  // button.addEventListener('click', () => {
  //   for (let j = interval; j < interval + 5 && j < commentList.length; j++) {
  //     commentList[j].style.display = 'flex';
  //   }
  //   interval += 5;
  //   counter.textContent = interval;
  //   if (interval >= commentList.length) {
  //     button.style.display = 'none';
  //     counter.textContent = commentList.length;
  //   }
  // });
};

export { showMoreComments, SHOWED_COMMENTS_INTERVAL };
