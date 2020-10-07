const daysEl = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondssEl = document.getElementById("seconds");

const newYears = "3 Nov 2020";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEL.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondssEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);