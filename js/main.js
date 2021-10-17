const getRandomInteger = function(min = 0, max = 0) {
  return Math.floor(Math.random() * (max - min) + min);
};

getRandomInteger(4, 8);

const checkMaxLength = function(checkedString = '', maxLength = 0) {
  return (checkedString.length <= maxLength);
};

checkMaxLength('Ехал грека через реку', 25);
