const getRandomInteger = function(min = 0, max = 0) {
  return Math.random() * (max - min) + min;
}
console.log(Math.floor(getRandomInteger(4, 8)));

 const checkMaxLength = function(checkedString, maxLength) {
  return (checkedString.length <= maxLength) ? true : false;
 }
 console.log(checkMaxLength('Ехал грека через реку', 25))
