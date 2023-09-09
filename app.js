// alert("testing...");

const dayInput = document.querySelector('.day');
const timeInput = document.querySelector('.time');

const d = new Date();

const utcTime = d.getTime();

// console.log(utcTime);

timeInput.innerHTML = utcTime;

let day = d.getDay();

switch (day) {
  case 0:
    day = "Sunday"
    break;
  case 1:
    day = "Monday"
    break;
  case 2:
    day = "Tuesday"
    break;
  case 3:
    day = "Wednesday"
    break;
  case 4:
    day = "Thursday"
    break;
  case 5:
    day = "Friday"
    break;
  case 6:
    day = "Saturday"
}

// console.log(day);

dayInput.innerHTML = day;
