const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//variables DOM
let deadline = document.querySelector(".deadline");
let deadline_format = document.querySelectorAll(".deadline-format h4");
let giveaway = document.querySelector(".giveaway");

//variables Date
let featureDay = new Date("2024/12/16,20:16:59"); //2022, 5, 14, 21, 59, 59
let year = featureDay.getFullYear();
let month = featureDay.getMonth();
let day = featureDay.getDate();
let dayOfWeek = featureDay.getDay();
let hours = featureDay.getHours();
let minutes = featureDay.getMinutes();
let second = featureDay.getSeconds();
let milliSecond = featureDay.getMilliseconds();

giveaway.innerHTML = `giveaway ends on ${weekdays[dayOfWeek]}, ${day} ${month}  ${year},${hours}:${minutes}`;

let getdays = 24 * 60 * 60 * 1000;
let getHours = 60 * 60 * 1000;
let getMinutes = 60 * 1000;

function affiche() {
  let getTime = featureDay.getTime() - new Date().getTime();
  let mydays = Math.floor(getTime / getdays);
  let myHours = Math.floor((getTime % getdays) / getHours);
  let myminutes = Math.floor((getTime % getHours) / getMinutes);
  let mysecond = Math.floor((getTime % getMinutes) / 1000);

  let arrayOfTime = [mydays, myHours, myminutes, mysecond];

  function format(form) {
    if (form < 10) {
      return `0${form}`;
    }
    return form;
  }

  if (getTime > 0) {
    deadline_format.forEach((item, key) => {
      item.innerHTML = `${format(arrayOfTime[key])}`;
    });
  } else {
    clearInterval(myCounter);
  }
}

let myCounter = setInterval(affiche, 1000);
affiche();
