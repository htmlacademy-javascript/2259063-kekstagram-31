const modalBigPicture = document.querySelector(".big-picture");
const modalCloseButton = modalBigPicture.querySelector(".cancel");

const openModal = () => {
  modalBigPicture.classList.remove("hidden");
  document.body.classList.add("modal-open");
};

const closeModal = () => {
  modalBigPicture.classList.add("hidden");
  document.body.classList.remove("modal-open");
};

modalCloseButton.addEventListener("click", closeModal);

const keyDownHandler = (evt) => {
  evt.key === "Escape" ? closeModal() : null;
};

document.addEventListener("keydown", keyDownHandler);

document.removeEventListener("keydown", keyDownHandler);

export { modalBigPicture, openModal };
