const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("mins");
const secondsEl = document.getElementById("secs");

var input = "";

function countdown() {
  const inputDate = new Date(input);
  const currentDate = new Date();
  var remainder = moment.duration(inputDate - currentDate);

  const days = remainder.days();
  const hours = remainder.hours();
  const minutes = remainder.minutes();
  const seconds = moment.utc(remainder.asMilliseconds()).format("ss");

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
}

function submitHandler() {
  input = document.getElementById("inputdate").value;
  setInterval(countdown, 1000);
}
