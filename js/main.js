import { createData } from './data.js';
import { MAX_ITEM } from './constants.js';
import { createPicturesFragment } from './pictures.js';

const data = createData(MAX_ITEM);
const similarListPicture = document.querySelector('.pictures');
similarListPicture.appendChild(
  createPicturesFragment(data),
);
