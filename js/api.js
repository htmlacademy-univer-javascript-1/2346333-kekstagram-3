import { showAlert } from './util.js';

const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
      showAlert('Удалось загрузить данные с сервера');
    })
    .catch(() => {
      showAlert('Не удалось загрузить данные с сервера. Перезагрузите страницу');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch ('https://27.javascript.pages.academy/kekstagram-simple', {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
        showAlert('Форма отправилась');

      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
