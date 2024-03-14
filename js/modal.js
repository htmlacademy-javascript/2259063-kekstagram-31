// имопртирую для того чтобы на closeModal() очищать список комментариев
import {
  commentsList,
  commentsShowCount,
} from "./picture/open-picture";

const modalBigPicture = document.querySelector(".big-picture");
const modalCloseButton = modalBigPicture.querySelector(".cancel");

const openModal = () => {
  modalBigPicture.classList.remove("hidden");
  document.body.classList.add("modal-open");
  document.addEventListener("keydown", keyDownHandler);

  if (commentsList.length < 5) {
    commentsShowCount.textContent = commentsList.length;
  } else {
    commentsShowCount.textContent = 5;
  }
};

const closeModal = () => {
  commentsList.innerHTML = "";

  modalBigPicture.classList.add("hidden");
  document.body.classList.remove("modal-open");

  document.removeEventListener("keydown", keyDownHandler);

  //удалить обработчик событий на button show more
};

function keyDownHandler(evt) {
  if (evt.key === "Escape") {
    closeModal();
  }
}

modalCloseButton.addEventListener("click", closeModal);

export { modalBigPicture, openModal, closeModal };
