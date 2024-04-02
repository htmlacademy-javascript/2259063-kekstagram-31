const uploadPicture = (input, picture, effectsPreviews) => {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = (element) => {
      picture.src = element.target.result;
      effectsPreviews.forEach((effectPreview) => {
        effectPreview.style.backgroundImage = `url(${reader.result})`;
      });
    };
    reader.readAsDataURL(input.files[0]);
  }
};

export {uploadPicture};

