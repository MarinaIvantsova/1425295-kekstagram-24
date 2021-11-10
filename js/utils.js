const getRandomInteger = function (min = 0, max = 0) {
  return Math.floor(Math.random() * (max - min) + min);
};
/*
const checkMaxLength = function (checkedString = '', maxLength = 0) {
  return (checkedString.length <= maxLength);
};

checkMaxLength('Ехал грека через реку', 25);
*/
const shuffle = function (array) {
  array.sort(() => Math.random() - 0.5);
};

const createSuffleIntArray = function (length) {
  const arr = [];
  for (let integer = 0; integer < length; integer++) {
    arr.push(integer);
  }
  shuffle(arr);
  return arr;
};


export { getRandomInteger, createSuffleIntArray };
