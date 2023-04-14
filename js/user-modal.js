import { addEventListenerImage, removeEventListenerImage } from './scale.js';
import { changeFilter } from './photo-effect.js';
import { isEscapeKey } from './util.js';

const userModalElement = document.querySelector('.img-upload__overlay');
const userModalInputElement = document.querySelector('#upload-file');
const userModalCloseElement = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal () {
  userModalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onModalEscKeydown);
  addEventListenerImage();  
  form.querySelector('.effect-level__slider').classList.add('hidden');
  form.addEventListener('change', changeFilter);
}
  
function closeUserModal () {
  userModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  document.removeEventListener('keydown', onModalEscKeydown);
  removeEventListenerImage();
  form.removeEventListener('change', changeFilter);
}
  
userModalInputElement.addEventListener('change', openUserModal);
userModalCloseElement.addEventListener('click', closeUserModal);