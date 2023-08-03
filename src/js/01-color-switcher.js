function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};


const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector("button[data-stop]");
let Id = null;


startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    Id = setInterval(() => {
        const color = getRandomHexColor();
        document.body.style.backgroundColor = color;
    }, 1000)
});

stopBtn.addEventListener("click", () => {
    startBtn.disabled = false;
    clearInterval(Id)
})
