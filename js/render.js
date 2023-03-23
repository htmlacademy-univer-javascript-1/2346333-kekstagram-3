import { posts } from "./data.js";

const templatePicture = document.querySelector('#picture').content;
const picturesBlock = document.querySelector('.pictures');
const fragment = new DocumentFragment();;

function renderPhotos() {
  posts.forEach((post) => {
    const element = templatePicture.cloneNode(true);

    element.querySelector('.picture__img').src = post.url;
    element.querySelector('.picture__likes').textContent = post.likes;
    element.querySelector('.picture__comments').textContent = post.comments;
    fragment.append(element);
  });
};

picturesBlock.append(fragment);