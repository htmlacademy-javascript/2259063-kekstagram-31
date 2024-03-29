const renderPictures = (dataArr) => {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const picturesContainer = document.querySelector('.pictures');
  const pictureListFragments = document.createDocumentFragment();
  dataArr.forEach(({ url, description, likes, comments}) => {
    const newPicture = pictureTemplate.cloneNode(true);
    const pictureImg = newPicture.querySelector('.picture__img');
    const pictureLikes = newPicture.querySelector('.picture__likes');
    const pictureComments = newPicture.querySelector('.picture__comments');

    pictureImg.alt = description;
    pictureImg.src = url;
    pictureLikes.textContent = likes;
    pictureComments.textContent = comments.length;

    pictureListFragments.append(newPicture);
  });

  picturesContainer.append(pictureListFragments);
  return picturesContainer;
};

export { renderPictures };
