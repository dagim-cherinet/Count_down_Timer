const newYear = "1 jan 2023";
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const countdown = () => {
  const newYearDate = new Date(newYear);
  const currentdate = new Date();
  totalSeconds = (newYearDate - currentdate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const mins = Math.floor((totalSeconds / 60) % 60);
  const sec = Math.floor(totalSeconds % 60);

  //   console.log(days);
  //   console.log(hours);
  //   console.log(mins);
  //   console.log(sec);
  //HTML ELEMENTS
  daysEl.innerText = formatTime(days);
  hoursEl.innerText = formatTime(hours);
  minsEl.innerText = formatTime(mins);
  secondsEl.innerText = formatTime(sec);

  //console.log(newYearDate - currentdate);
};
//initial call
//countdown();
setInterval(countdown, 1000);
const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};
