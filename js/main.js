import { createData } from './data.js';
import { MAX_ITEM } from './constants.js';
import { createPicturesFragment } from './pictures.js';
import { onChangeUploadFile, onCLoseModal, onCloseModalEsc, onUploadForm } from './form.js';

const data = createData(MAX_ITEM);
const bigPicture = document.querySelector('.big-picture');
const similarListPicture = document.querySelector('.pictures');
const closePopupButton = document.querySelector('.big-picture__cancel');
const uploadFile = document.querySelector('#upload-file');

const uploadCancel = document.querySelector('#upload-cancel');
const formUploadElement = document.querySelector('#upload-select-image');


similarListPicture.appendChild(
  createPicturesFragment(data),
);
closePopupButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
});

const onCloseBigPictureEsc = function (evt) {
  if (evt.keyCode === 27) {
    bigPicture.classList.add('hidden');
  }
};


document.addEventListener('keydown', onCloseBigPictureEsc);

uploadFile.addEventListener( 'change', onChangeUploadFile);
uploadCancel.addEventListener('click', onCLoseModal);
document.addEventListener('keydown', onCloseModalEsc);
formUploadElement.addEventListener('input', onUploadForm);
