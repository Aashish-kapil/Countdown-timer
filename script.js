let daysEl = document.getElementById("days");
let hoursEL = document.getElementById("hours");
let minsEl = document.getElementById("mins");
let secEL = document.getElementById("sec");

const newYears = "1 jan 2023";

function countdown(){
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const Mins = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)%60;

    daysEl.innerHTML  = days;
    hoursEL.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(Mins);
    secEL.innerHTML = formatTime(seconds);
    
}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown,1000);