import { createData } from './data.js';
import { MAX_ITEM } from './constants.js';
import { createPicturesFragment } from './pictures.js';

const data = createData(MAX_ITEM);
const bigPicture = document.querySelector('.big-picture');
const similarListPicture = document.querySelector('.pictures');
const closePopupButton = document.querySelector('.big-picture__cancel');

similarListPicture.appendChild(
  createPicturesFragment(data),
);
closePopupButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
});
document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    bigPicture.classList.add('hidden');
  }
});
