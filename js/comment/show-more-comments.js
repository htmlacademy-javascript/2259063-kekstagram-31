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

  button.addEventListener("click", () => {
    for (let j = interval; j < interval + 5 && j < commentList.length; j++) {
      commentList[j].style.display = "flex";
    }
    interval += 5;
    counter.textContent = interval;
    if (interval >= commentList.length) {
      button.style.display = "none";
      counter.textContent = commentList.length;
    }
  });
};

export { showMoreComments };
