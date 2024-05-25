// create a small notification in the top of the screen.
const timer = document.getElementById('timer');

let seconds = 0;

function updateTime() {
    seconds++;
    timer.innerText = '00:' + (seconds < 10 ? '0' + seconds : seconds);
}

let runTimer;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

startButton.addEventListener('click', () => {
    runTimer = setInterval(updateTime, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
})


stopButton.addEventListener('click', () => {
    clearInterval(runTimer);
    startButton.disabled = false;
    stopButton.disabled = true;
})
