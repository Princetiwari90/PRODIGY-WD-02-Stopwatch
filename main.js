let hours = 0, minutes = 0, seconds = 0;
let timer;

const updateDisplay = () => {
    document.getElementById('hour').innerText = hours.toString().padStart(2, '0');
    document.getElementById('min').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('sec').innerText = seconds.toString().padStart(2, '0');
}

const startTimer = () => {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    }
}

const pauseTimer = () => {
    clearInterval(timer);
    timer = null;
}

const resetTimer = () => {
    clearInterval(timer);
    timer = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);