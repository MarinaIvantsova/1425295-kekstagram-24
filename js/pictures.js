import { MAX_ITEM } from './constants.js';
import { createData } from './data.js';

const similarListPicture = document.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPictures = createData(MAX_ITEM);
const similarListFragment = document.createDocumentFragment();


similarPictures.forEach(({url, comments, likes}) => {
  const pictureElement = similarPictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  similarListFragment.appendChild(pictureElement);
});

similarListPicture.appendChild(similarListFragment);
