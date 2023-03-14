export function returnRandomNumber(min, max) {

  if (min < 0 || min >= max) {
    throw new Error('Incorrect data');
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function checkMaxLength(str, maxLength) {
  return str.length <= maxLength;
}

checkMaxLength();
