import { Notify } from 'notiflix/build/notiflix-notify-aio';
function createPromise(position, delay) {
  
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({position, delay})
  } else {
    reject({position, delay})
  }

}, delay)})};


const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const FirstDelay = form.delay.value
  const StepDelay = form.step.value
  const promAmount = form.amount.value

  let delay = Number(FirstDelay)

  for(let i = 1; i <= promAmount; i += 1){ 
  createPromise(i, delay).then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  }).catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }) 
  delay += Number(StepDelay)
};
})