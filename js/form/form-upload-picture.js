const uploadPicture = (input, picture, effectsPreviews) => {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const imageUrl = URL.createObjectURL(file);

    picture.src = imageUrl;
    effectsPreviews.forEach((effectPreview) => {
      effectPreview.style.backgroundImage = `url(${imageUrl})`;
    });
  }
};

export {uploadPicture};

