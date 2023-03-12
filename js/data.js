import { returnRandomNumber } from "./util.js";

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

export {arrayWithObjects};
