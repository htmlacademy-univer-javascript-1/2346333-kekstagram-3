const ALERT_SHOW_TIME = 5000;

function returnRandomNumber(min, max) {
  if (min < 0 || min >= max) {
    return 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkMaxLength(str, maxLength) {
  return str.length <= maxLength;
}

function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'gold';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {returnRandomNumber, isEscapeKey, showAlert};
