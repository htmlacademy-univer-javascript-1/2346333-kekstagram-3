import { addEventListenerImage, removeEventListenerImage, resetScale } from './scale.js';
import { changeFilter, removeFilter } from './photo-effect.js';
import { isEscapeKey } from './util.js';
import { pristine } from './user-form.js';
import { displayMessage } from './message.js';
import { sendData } from './api.js';

const userModalElement = document.querySelector('.img-upload__overlay');
const userModalInputElement = document.querySelector('#upload-file');
const userModalCloseElement = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const submitButton = form.querySelector('.img-upload__submit');

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

  removeFilter();
  form.reset();
  resetScale();
}

userModalInputElement.addEventListener('change', () => {
  openUserModal();
});
userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      blockSubmitButton();

      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          displayMessage('success');
        },
        () => {
          unblockSubmitButton();
          displayMessage('error');
        },
        new FormData(evt.target),
      );
    }
  });
};

export {setUserFormSubmit, closeUserModal};
