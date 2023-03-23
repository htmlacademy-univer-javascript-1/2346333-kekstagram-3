export function returnRandomNumber(min, max) {
  if (min < 0 || min >= max) {
    return 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function checkMaxLength(str, maxLength) {
  return str.length <= maxLength;
};
