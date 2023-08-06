// Описаний в документації
import flatpickr from "flatpickr";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector("button[data-start]");
const input = document.querySelector("#datetime-picker");
const inputDays = document.querySelector("span[data-days]");
const inputHourse = document.querySelector("span[data-hours]");
const inputMinutes = document.querySelector("span[data-minutes]");
const inputSeconds = document.querySelector("span[data-seconds]")

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //   console.log(selectedDates[0]);
      const date = new Date();
      if (selectedDates[0] < date) {
        return Notify.warning("Please choose a date in the future");
      } else {
          startBtn.disabled = false;
    }

  },
};
flatpickr("#datetime-picker", options);

startBtn.addEventListener("click", time);

function time() {
const id = setInterval(() => {
    const currentDate = new Date();
    const selectedDate = new Date(input.value);
    startBtn.disabled = false;
    const diference = selectedDate - currentDate;
    // console.log(diference)
    if(diference <= 0){
      clearInterval(id)
    }else{
    startBtn.disabled = true;
    
    const { days, hours, minutes, seconds } = convertMs(diference);
    inputDays.textContent = addLeadingZero(days);
    inputHourse.textContent = addLeadingZero(hours);
    inputMinutes.textContent = addLeadingZero(minutes);
    inputSeconds.textContent = addLeadingZero(seconds);
    }
    }, 1000)


};


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value){
  return value.toString().padStart(2, '0')
}
