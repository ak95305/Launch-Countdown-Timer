let secondsUpper = document.querySelector(".seconds .upper-box h1");
let secondsLower = document.querySelector(".seconds .lower-box h1");
let minutesUpper = document.querySelector(".minutes .upper-box h1");
let minutesLower = document.querySelector(".minutes .lower-box h1");
let hoursUpper = document.querySelector(".hours .upper-box h1");
let hoursLower = document.querySelector(".hours .lower-box h1");
let daysUpper = document.querySelector(".days .upper-box h1");
let daysLower = document.querySelector(".days .lower-box h1");
let heading = document.querySelector("h1");

seconds = 41;
minutes = 55;
hours = 23;
days = 8;

var x = setInterval(function () {
  seconds--;
  if (seconds < 0) {
    minutes--;
    seconds = 59;
    if (minutes < 0) {
      hours--;
      minutes = 59;
      if (hours < 0) {
        days--;
        hours = 23;
      }
    }
  }

  if(seconds < 10){
    secondsLower.innerHTML = "0" + seconds;
    secondsUpper.innerHTML = "0" + seconds;
  } else{
    secondsLower.innerHTML = seconds;
    secondsUpper.innerHTML = seconds;
  }
  if(minutes < 10){
    minutesLower.innerHTML = "0" + minutes;
    minutesUpper.innerHTML = "0" + minutes;
  } else{
    minutesLower.innerHTML = minutes;
    minutesUpper.innerHTML = minutes;
  }if(hours < 10){
    hoursLower.innerHTML = "0" + hours;
    hoursUpper.innerHTML = "0" + hours;
  } else{
    hoursLower.innerHTML = hours;
    hoursUpper.innerHTML = hours;
  }if(days < 10){
    daysLower.innerHTML = "0" + days;
    daysUpper.innerHTML = "0" + days;
  } else{
    daysLower.innerHTML = days;
    daysUpper.innerHTML = days;
  }

  if(days === 0 && hours === 0 && minutes === 0 && seconds === 0){
    heading.innerHTML = "COUNTDOWN OVER";
    clearInterval(x);
  }

}, 1000);
