const smallerButton= document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const element = document.querySelector('.img-upload__preview');

const STEP = 25;

const onSmallerButton = () => {
  let value = parseInt(scaleValue.value, 10);

  if (value > 25) {
    value -= STEP;
    scaleValue.value = `${value}%`;
    element.style.transform = `scale(${value / 100})`;
  }
};

const onBiggerButton = () => {
  let value = parseInt(scaleValue.value, 10);

  if (value < 100) {
    value += STEP;
    scaleValue.value = `${value}%`;
    element.style.transform = `scale(${value / 100})`;
  }
};

const resetScale = () => {
  scaleValue.value = '100%';
  element.style.transform = 'none';
};

const addEventListenerImage = () => {
  smallerButton.addEventListener('click', onSmallerButton);
  biggerButton.addEventListener('click', onBiggerButton);
};

const removeEventListenerImage = () => {
  smallerButton.removeEventListener('click', onSmallerButton);
  biggerButton.removeEventListener('click', onBiggerButton);
};

export {addEventListenerImage, removeEventListenerImage, resetScale};
