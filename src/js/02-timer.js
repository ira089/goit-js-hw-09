import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

console.log('чаокакао');
const refs = {
  calendar: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  timer: document.querySelector('.timer'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};
// console.dir(refs.btnStart);
// console.dir(refs.calendar);
// console.dir(refs.timer);
console.log(refs.days);

const dateStart = new Date();
console.log(dateStart);
let ms = null;
let selDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    selDate = selectedDates[0];
    console.log(selDate);
    if (selDate <= dateStart) {
      alert('Please choose a date in the future');
      refs.btnStart.disabled = true;
    } else {
      refs.btnStart.disabled = false;
    }
    // ms = selectedDates[0] - date;
    // console.log(ms);
  },
};
const fp = flatpickr(refs.calendar, options);
console.log(options);
// console.log(onClose());

refs.btnStart.addEventListener('click', onBtnStart);

function onBtnStart() {
  // console.log('helo');
  setInterval(() => {
    const currentTime = Date.now();
    console.log(currentTime);
    ms = selDate - currentTime;
    console.log(ms);
    const { days, hours, minutes, seconds } = convertMs(ms);
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${minutes}`;
    refs.seconds.textContent = `${seconds}`;
    // console.log(`${days}::${hours}::${minutes}::${seconds}`);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor(((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}
// console.log(pad(2));
// function updateTimer({ days, hours, minutes, seconds }) {
//   refs.timer.children
// }
