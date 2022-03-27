
const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
let limit;

const createComments = function (comment, commentsList, data) {
  let breakBtn = 0;
  const documentFragment = document.createDocumentFragment();

  data.comments.forEach(({ avatar, name, message }) => {
    if (breakBtn === limit) {
      return;
    }
    const commentClone = comment.cloneNode(true);
    commentClone.querySelector('img').src = avatar;
    commentClone.querySelector('.social__picture').alt = name;
    commentClone.querySelector('.social__text').textContent = message;
    documentFragment.appendChild(commentClone);
    breakBtn++;
  });
  commentsList.replaceChildren(documentFragment);
};

const onCLoseFullPhoto = function () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const createFullSizeImage = function (data) {
  const likesCount = bigPicture.querySelector('.likes-count');
  //const commentsCount = bigPicture.querySelector('.comments-count');
  const socialCommentCount = bigPicture.querySelector('.social__comment-count');
  const descriptionPhoto = bigPicture.querySelector('.social__caption');
  const commentsList = bigPicture.querySelector('.social__comments');
  const comment = bigPicture.querySelector('.social__comment');
  const commentsLoader = bigPicture.querySelector('.comments-loader');

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  limit = 5;
  if (limit >= data.comments.length) {
    limit = data.comments.length;
    commentsLoader.classList.add('hidden');
  }
  bigPicture.querySelector('img').src = data.url;
  likesCount.textContent = data.likes;
  descriptionPhoto.textContent = data.description;
  socialCommentCount.textContent = `${limit} из ${data.comments.length} комментариев`;
  createComments(comment, commentsList, data);

  const onLoadMore = function () {
    limit += 5;
    if (limit >= data.comments.length) {
      limit = data.comments.length;
      commentsLoader.classList.add('hidden');
    }
    socialCommentCount.textContent = `${limit} из ${data.comments.length} комментариев`;
    createComments(comment, commentsList, data);
  };

  const onRemoveListenerCommentsLoader = function () {
    commentsLoader.removeEventListener('click', onLoadMore);
  };

  commentsLoader.addEventListener('click', onLoadMore);
  const closeFullButton = bigPicture.querySelector('.big-picture__cancel');
  closeFullButton.addEventListener('click', onRemoveListenerCommentsLoader);
  document.addEventListener('keydown', onRemoveListenerCommentsLoader);

};
export { createFullSizeImage, onCLoseFullPhoto };
