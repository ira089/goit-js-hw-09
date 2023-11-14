import { Notify } from 'notiflix/build/notiflix-notify-aio';

let position = 0;
let delay = 0;
console.log('eha');
function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}

const refs = {
  starPromises: document.querySelector('button'),
  form: document.querySelector('.form'),
  delayInput: document.querySelector('input[name="delay"]'),
  stepInput: document.querySelector('input[name="step"]'),
  amountInput: document.querySelector('input[name="amount"]'),
};
// console.dir(refs.starPromises);
// console.dir(refs.form);
refs.starPromises.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  refs.starPromises.disabled = true;

  const step = Number(refs.stepInput.value);
  const amount = Number(refs.amountInput.value);
  const delayStart = Number(refs.delayInput.value);

  for (let i = 0; i < amount; i += 1) {
    position = i + 1;
    delay = delayStart + step * i;
    // console.log(delay);

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.success(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
  // refs.form.reset();
  refs.starPromises.disabled = false;
}
