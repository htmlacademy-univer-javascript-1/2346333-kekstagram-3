const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error-text',
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  return pristine.validate();
});

export {pristine};
