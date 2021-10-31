import {MAX_ITEM, IMG_START, IMG_EXTEND, MIN_LIKES, MAX_LIKES, AVATAR_START, AVATAR_EXTEND, MESSAGE_MOCK, NAMES_MOCK} from './constants.js';
import {getRandomInteger, suffleArr} from './utils.js';
const createComments = function (maxLength) {
  const result = [];
  let counter = 0;
  for (let index = 0; index < maxLength; index++) {
    result.push(
      {
        id: suffleArr[counter++],
        avatar: AVATAR_START + getRandomInteger(1, 6) + AVATAR_EXTEND,
        message: MESSAGE_MOCK[getRandomInteger(0, MESSAGE_MOCK.length - 1)],
        name: NAMES_MOCK[getRandomInteger(0, NAMES_MOCK.length - 1)],
      },
    );
  }
  return result;
};

const createData = function (maxLength) {
  const result = [];
  for (let index = 1; index <= maxLength; index++) {
    result.push({
      id: index,
      url: IMG_START + index + IMG_EXTEND,
      description: 'Ехал грека через реку',
      likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
      comments: createComments(getRandomInteger(2, 5)),
    });
  }
  return result;
};

createData(MAX_ITEM);

export {createComments, createData};
