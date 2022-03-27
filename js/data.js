import { IMG_START, IMG_EXTEND, MIN_LIKES, MAX_LIKES, AVATAR_START, AVATAR_EXTEND, MESSAGE_MOCK, NAMES_MOCK } from './constants.js';
import { getRandomInteger, createSuffleIntArray } from './utils.js';

const suffleArr = createSuffleIntArray(1000);
let counter = 0;
const createComments = function (maxLength) {
  const result = [];
  if (counter >= 1000) {
    counter = 0;
  }
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
  for (let index = 0; index < maxLength; index++) {
    result.push({
      id: index + 1,
      url: IMG_START + (index + 1) + IMG_EXTEND,
      description: 'Ехал грека через реку',
      likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
      comments: createComments(getRandomInteger(2, 15)),
    });
  }
  return result;
};

export { createData };
