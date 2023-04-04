import { isEscapeKey } from './util.js';

const userModalElement = document.querySelector('.img-upload__overlay');
const userModalCloseElement = document.querySelector('.img-upload__cancel');
const userModalInputElement = document.querySelector('.img-upload__input');

const onModalEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
        evt.preventDefault();
        closeUserModal();
    }
};

function closeUserModal() {
    userModalElement.classList.add('hidden');
    document.removeEventListener('keydown', onModalEscKeydown);
}

function openUserModal() {
    userModalElement.classList.remove('hidden');
    document.addEventListener('keydown', onModalEscKeydown);
}

userModalInputElement.addEventListener('change', openUserModal);
userModalCloseElement.addEventListener('click', closeUserModal);