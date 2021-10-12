let getRandomInteger = function(min, max) {
  return Math.random() * (max - min) + min;

}
console.log(getRandomInteger(5, 100));

 let checkMaxLength = function(checkedLength, maxLength) {
  if (checkedLength <= maxLength ) {
    return true;
  }
  else {
    return false;
  }
 }
 console.log(checkMaxLength(55, 35))
