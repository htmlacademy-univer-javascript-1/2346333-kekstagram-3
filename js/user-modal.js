import { isEscapeKey } from './util.js';

const userModalElement = document.querySelector('.img-upload__overlay');
const userModalInputElement = document.querySelector('#upload-file');
const userModalCloseElement = document.querySelector('#upload-cancel');

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
}
  
function closeUserModal () {
  userModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscKeydown);
}
  
userModalInputElement.addEventListener('change', openUserModal);
userModalCloseElement.addEventListener('click', closeUserModal);