let display = document.getElementById('result');
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isRunning = false;

function start() {
    starttime = Date.now() - elapsedtime;
    timer = setInterval(update, 10);

    isRunning = true;

}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedtime = Date.now() - starttime;
        isRunning = false;
    }

}
function reset() {
    clearInterval(timer);
    starttime = 0
    isRunning = false;
    display.textContent = " 00: 00: 00: 00"

}
function update() {
    const cuurenttime = Date.now();
    elapsedtime = cuurenttime - starttime
    let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
    let Minutes = Math.floor(elapsedtime / (1000 * 60) % 60);
    let second = Math.floor(elapsedtime / 1000 % 60);
    let milisecond = Math.floor(elapsedtime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    Minutes = String(Minutes).padStart(2, "0");
    second = String(second).padStart(2, "0");
    milisecond = String(milisecond).padStart(2, "0");
    display.textContent = `${hours}: ${Minutes}: ${second}: ${milisecond}`

}