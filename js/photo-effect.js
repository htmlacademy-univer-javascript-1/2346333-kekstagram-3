const imgPreview = document.querySelector('.img-upload__preview');
const sliderBlock = document.querySelector('.img-upload__effect-level');
const slider = sliderBlock.querySelector('.effect-level__slider');
const effectLevel = sliderBlock.querySelector('.effect-level__value');
let currentEffect = 'none';

const effects = {
  chrome: {
    filter: 'grayscale',
    max: 1,
    min: 0,
    step: 0.1,
    postfix: ''
  },
  sepia: {
    filter: 'sepia',
    max: 1,
    min: 0,
    step: 0.1,
    postfix: ''
  },
  marvin: {
    filter: 'invert',
    max: 100,
    min: 0,
    step: 1,
    postfix: '%'
  },
  phobos: {
    filter: 'blur',
    max: 3,
    min: 0,
    step: 0.1,
    postfix: 'px'
  },
  heat: {
    filter: 'brightness',
    max: 3,
    min: 1,
    step: 0.1,
    postfix: ''
  }
};

const removeFilter = () => {
  const prevEffectClass = `effects__preview--${currentEffect}`;

  imgPreview.classList.remove(prevEffectClass);
  imgPreview.classList.add('effects__preview--none');
  imgPreview.style.filter = 'none';

  slider.classList.toggle('hidden');
  currentEffect = 'none';
}

const changeFilterClass = (effect) => {
  imgPreview.classList.remove(`effects__preview--${currentEffect}`);
  imgPreview.classList.add(`effects__preview--${effect}`);

  currentEffect = effect;
}

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100
  },
  start: 0,
  step: 1,
  connect: 'lower'
})

export const changeFilter = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    const newEffect = evt.target.value;
    changeFilterClass(newEffect);

    if (newEffect !== 'none') {
  
      if (slider.classList.contains('hidden')) {
        slider.classList.remove('hidden');
      }

      slider.noUiSlider.updateOptions({
        range: {
          min: effects[newEffect].min,
          max: effects[newEffect].max
        },
        step: effects[newEffect].step
      });

      slider.noUiSlider.on('update', () => {
        effectLevel.value = slider.noUiSlider.get();
        imgPreview.style.filter = `${effects[newEffect].filter}(${effectLevel.value}${effects[newEffect].postfix})`;
      })
    } else {
      imgPreview.style.filter = 'none';
      slider.classList.toggle('hidden');
    }
  }
};