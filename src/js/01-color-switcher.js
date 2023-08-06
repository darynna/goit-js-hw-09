function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};


const StartBtn = document.querySelector('button[data-start]');
const StopBtn = document.querySelector("button[data-stop]");
let id = null;


StartBtn.addEventListener("click", () => {
    StartBtn.disabled = true;
    id = setInterval(() => {
        const color = getRandomHexColor();
        document.body.style.backgroundColor = color;
    }, 1000)
});

StopBtn.addEventListener("click", () => {
    StartBtn.disabled = false;
    clearInterval(id)
})
