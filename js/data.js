import { returnRandomNumber } from './util.js';

const posts = Array.from({length: 25}, (_, i) => ({
  id: i + 1,
  url: `photos/${i + 1}.jpg`,
  descriprion: `Фотография ${i + 1}`,
  likes: returnRandomNumber(15, 200),
  comments: returnRandomNumber(0, 200),
}));

export {posts};
