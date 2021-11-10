const similarPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPicturesFragment = function (similarPictures) {
  const similarListFragment = document.createDocumentFragment();

  similarPictures.forEach(({ url, comments, likes }) => {
    const pictureElement = similarPictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    similarListFragment.appendChild(pictureElement);
  });

  return similarListFragment;
};

export {createPicturesFragment};
