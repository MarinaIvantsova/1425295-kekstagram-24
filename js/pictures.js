import { createFullSizeImage } from './full-size.js';

const similarPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');


const createPicturesFragment = function (similarPictures) {
  const similarListFragment = document.createDocumentFragment();
  similarPictures.forEach((similarPicture) => {
    const pictureElement = similarPictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = similarPicture.url;
    pictureElement.querySelector('.picture__comments').textContent = similarPicture.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = similarPicture.likes;
    pictureElement.addEventListener('click', () => {
      createFullSizeImage(similarPicture);
    });
    similarListFragment.appendChild(pictureElement);
  });
  return similarListFragment;
};
export { createPicturesFragment };
