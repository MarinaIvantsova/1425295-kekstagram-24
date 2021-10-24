const MAX_ITEM = 25;
const IMG_START = 'photos/';
const IMG_EXTEND = '.jpg';
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const AVATAR_START = 'img/avatar-';
const AVATAR_EXTEND = '.svg';
const MESSAGE_MOCK = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES_MOCK = [
  'Иван',
  'Петя',
  'Ольга'
];

const getRandomInteger = function (min = 0, max = 0) {
  return Math.floor(Math.random() * (max - min) + min);
};

const checkMaxLength = function (checkedString = '', maxLength = 0) {
  return (checkedString.length <= maxLength);
};

checkMaxLength('Ехал грека через реку', 25);

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
};

const arr = [];
let int = 0;
for (i = 0; i < 1000; i++) {
  arr.push(i);
}
shuffle(arr);

const createComments = function (maxLength) {
  const result = [];
  for (let i = 0; i < maxLength; i++) {
    result.push(
      {
        id: arr[int++],
        avatar: AVATAR_START + getRandomInteger(1, 6) + AVATAR_EXTEND,
        message: MESSAGE_MOCK[getRandomInteger(0, MESSAGE_MOCK.length - 1)],
        name: NAMES_MOCK[getRandomInteger(0, NAMES_MOCK.length - 1)]
      }
    )
  };
  return result;
}

const createData = function (maxLength) {
  const result = [];
  for (let i = 1; i <= maxLength; i++) {
    result.push({
      id: i,
      url: IMG_START + i + IMG_EXTEND,
      description: 'Ехал грека через реку',
      likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
      comments: createComments(getRandomInteger(2, 5))
    })
  }
  return result;
}
console.log(createData(MAX_ITEM));
