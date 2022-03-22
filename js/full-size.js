
let commentsBound = 5;

const createComments = function (data, comment, similarListFragment, commentsList) {
  let breakBtn = 0;
  data.comments.forEach(({ avatar, name, message }) => {
    if (breakBtn === commentsBound) {
      return;
    }
    const commentItem = comment.cloneNode(true);
    commentItem.querySelector('.social__picture').src = avatar;
    commentItem.querySelector('.social__picture').alt = name;
    commentItem.querySelector('.social__text').textContent = message;
    similarListFragment.appendChild(commentItem);
    breakBtn++;
  });
  commentsList.replaceChildren(similarListFragment);
};


const createFullSizeImage = function (data) {

  const bigPicture = document.querySelector('.big-picture');
  const descriptionItem = document.querySelector('.social__caption');
  const comment = document.querySelector('.social__comment');
  const commentsList = document.querySelector('.social__comments');
  const socialCommentCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');
  const likesCount = document.querySelector('.likes-count');
  const similarListFragment = document.createDocumentFragment();
  commentsLoader.classList.remove('hidden');

  if (commentsBound >= data.comments.length) {
    commentsBound = data.comments.length;
    commentsLoader.classList.add('hidden');
  }

  bigPicture.classList.remove('hidden');
  socialCommentCount.classList.remove('hidden');
  bigPicture.querySelector('img').src = data.url;
  descriptionItem.textContent = data.description;
  likesCount.textContent = data.likes;
  socialCommentCount.textContent = `${commentsBound} из ${data.comments.length} комментариев`;
  commentsList.replaceChildren(similarListFragment);

  createComments(data, comment, similarListFragment, commentsList);

  const clickListener = () => {
    commentsBound += 5;
    if (commentsBound >= data.comments.length) {
      commentsBound = data.comments.length;
      commentsLoader.classList.add('hidden');
    }
    socialCommentCount.textContent = `${commentsBound} из ${data.comments.length} комментариев`;
    createComments(data, comment, similarListFragment, commentsList);
  };

  commentsLoader.addEventListener('click', clickListener);

  const fullPhotoButtonClose = document.querySelector('.big-picture__cancel');
  fullPhotoButtonClose.addEventListener('click', () => commentsLoader.removeEventListener('click', clickListener));
  document.addEventListener('keydown', () => commentsLoader.removeEventListener('click', clickListener));
};


export { createFullSizeImage };
