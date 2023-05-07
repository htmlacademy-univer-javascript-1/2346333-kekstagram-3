import { isEscapeKey } from './util.js';

function displayMessage (isSuccess) {
  const messageTemplate = document.querySelector(`#${isSuccess ? 'success' : 'error'}`).content.querySelector('section');
  const message = messageTemplate.cloneNode(true);
  const button = message.querySelector('button');

  document.body.append(message);

  const removeMessage = () => {
    message.remove();
  };

  const onEscapeKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      removeMessage();
    }
  };

  button.addEventListener('click', removeMessage);
  message.addEventListener('click', (evt) => {
    if (evt.target.matches('.success')) {
      removeMessage();
    }
  });
  document.addEventListener('keydown', onEscapeKeydown);
}

export {displayMessage};
