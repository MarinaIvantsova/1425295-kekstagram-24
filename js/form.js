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

const validateSameHashtags = function (current, next) {
  if (current === next) {
    hashtagElement.setCustomValidity('#ХэшТег и #хэштег считаются одним и тем же тегом, теги не должны повторяться.');
  }
};


const onUploadForm = function () {
  const hashtags = hashtagElement.value;
  hashtagElement.setCustomValidity('');
  const arrayOfHashtags = hashtags.split(' ');
  if (arrayOfHashtags.length > MAX_HASHTAG_NUMBERS) {
    hashtagElement.setCustomValidity(`Хэш-тегов не должно быть ${MAX_HASHTAG_NUMBERS}`);
  } else {
    for (let i = 0; i < arrayOfHashtags.length; i++) {
      validateHashtag(arrayOfHashtags[i]);
      for (let j = i + 1; j < arrayOfHashtags.length; j++) {
        const currentHashtag = arrayOfHashtags[i].toLowerCase();
        const nextHashtag = arrayOfHashtags[j].toLowerCase();
        validateSameHashtags(currentHashtag, nextHashtag);
      }
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