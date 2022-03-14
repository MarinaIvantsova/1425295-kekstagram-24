const overLay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const comment = document.querySelector('.text__description');
const uploadFile = document.querySelector('#upload-file');
const hashtagElement = document.querySelector('.text__hashtags');
const MAX_HASHTAG_NUMBERS = 5;


const validateHashtag = function (currentHashTag) {
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

  if (currentHashTag.length === 1 && (currentHashTag === '#')) {
    hashtagElement.setCustomValidity('Хеш-тег не может состоять только из одной решётки.');
  }
  else if (!re.test(currentHashTag)) {
    hashtagElement.setCustomValidity('Хэш-тег начинается с символа #, не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д., максимальная длина одного хэш-тега 20 символов, включая решётку.');
  }

};


const onUploadForm = function () {
  const hashtags = hashtagElement.value.trim();
  if (hashtags.length === 0) {
    hashtagElement.setCustomValidity('');
  } else {
    hashtagElement.setCustomValidity('');
    const arrayOfHashtags = hashtags.split(' ');

    const unique = {};
    let int = 0;
    for (let i = 0; i < arrayOfHashtags.length; i++) {
      if (arrayOfHashtags[i] === '') {
        hashtagElement.setCustomValidity('Нельзя больше одного пробела между хэштегами');
      } else {
        validateHashtag(arrayOfHashtags[i]);
        int++;
        if (unique[arrayOfHashtags[i].toLowerCase()] !== 1) {
          unique[arrayOfHashtags[i].toLowerCase()] = 1;
        }
        else {
          hashtagElement.setCustomValidity('#ХэшТег и #хэштег считаются одним и тем же тегом, теги не должны повторяться.');
        }
      }
    }
    if (int > MAX_HASHTAG_NUMBERS) {
      hashtagElement.setCustomValidity(`Хэш-тегов не должно быть больше, чем  ${MAX_HASHTAG_NUMBERS}`);
    }

  }
};

const cleanUploadFile = function () {
  uploadFile.value = '';
};


const onChangeUploadFile = function () {
  overLay.classList.remove('hidden');
  body.classList.add('modal-open');
};

const onCLoseModal = function () {
  overLay.classList.add('hidden');
  body.classList.remove('modal-open');
  cleanUploadFile();
};

const onCloseModalEsc = function (evt) {
  if (evt.keyCode === 27 && (comment !== document.activeElement) && (hashtagElement !== document.activeElement)) {
    onCLoseModal();
  }
};

export { onChangeUploadFile, onCLoseModal, onCloseModalEsc, onUploadForm };
