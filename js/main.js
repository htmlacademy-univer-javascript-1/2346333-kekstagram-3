function returnRandomNumber(min, max) {

  if (min < 0 || min >= max) {
    return 0;
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function checkMaxLength(str, maxLength) {
  return str.length <= maxLength;
}

const array = Array.from({length: 25}, (_, i) => i+1);

const createObject = () => {
  const result = array[0];
  array.shift();
  return {
      id: result,
      url: `photos/${result}.jpg`,
      descriprion: `Фотография ${result}`,
      likes: returnRandomNumber(15, 200),
      comments: returnRandomNumber(0, 200),
  };
};

const countObjects = 25;
const arrayWithObjects = Array.from({length: countObjects}, createObject);
