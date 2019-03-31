const daysSpan = document.querySelector("div.days span.days");
const hoursSpan = document.querySelector("div.hours span.hours");
const minutesSpan = document.querySelector("div.minutes span.minutes");
const secondsSpan = document.querySelector("div.seconds span.seconds");

// const endTime = new Date("2021-10-24 18:00:00").getTime();

var endTime = "2021-10-24 18:00:00";
var d = new Date(endTime.replace(/-/g, '/')).getTime();

const showTime = () => {
    const currentTime = new Date().getTime();
    const time = d - currentTime;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor(time / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(time / (1000 * 60) % 60);
    let seconds = Math.floor((time / 1000) % 60);

    minutes < 10 ? minutes = "0" + minutes : minutes;
    seconds < 10 ? seconds = "0" + seconds : seconds;

    daysSpan.textContent = days;
    hoursSpan.textContent = hours;
    minutesSpan.textContent = minutes;
    secondsSpan.textContent = seconds;
}

setInterval(showTime, 1000);