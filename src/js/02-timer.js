import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

console.log('чаокакао');
const refs = {
  calendar: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  timer: document.querySelector('.timer'),
};
console.dir(refs.btnStart);
console.dir(refs.calendar);
console.dir(refs.timer);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
const fp = flatpickr(refs.calendar, { options });

//   refs.btnStart.addEventListener('click', onBtnStart);
//   refs.btnStop.addEventListener('click', onBtn
