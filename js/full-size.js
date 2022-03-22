const createFullSizeImage = function (data) {
  const bigPicture = document.querySelector('.big-picture');
  const descriptionItem = document.querySelector('.social__caption');
  const comment = document.querySelector('.social__comment');
  const commentsList = document.querySelector('.social__comments');
  const socialCommentCount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');
  const likesCount = document.querySelector('.likes-count');
  const commentsCount = document.querySelector('.comments-count');
  const similarListFragment = document.createDocumentFragment();
  const commentsBound = 5;
  let breakBtn = 0;

  bigPicture.classList.remove('hidden');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  bigPicture.querySelector('img').src = data.url;
  descriptionItem.textContent = data.description;
  likesCount.textContent = data.likes;
  commentsCount.textContent = data.comments.length;
  socialCommentCount.value = commentsBound;


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

export { createFullSizeImage };
