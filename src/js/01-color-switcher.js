const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  bodyColor: document.querySelector('body'),
};
// console.dir(refs.btnStart);
// console.dir(refs.btnStop);
// console.dir(refs.bodyColor);

refs.btnStart.addEventListener('click', onBtnStart);
refs.btnStop.addEventListener('click', onBtnStop);
let timerId = null;
refs.btnStop.disabled = true;

function onBtnStart() {
  //   console.log(evt);
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;

  timerId = setInterval(() => {
    // console.log('qw');
    refs.bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onBtnStop() {
  //   console.log(evt);
  clearInterval(timerId);
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
