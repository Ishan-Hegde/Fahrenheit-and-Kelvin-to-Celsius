// // script.js
// const resultField = document.querySelector("#celsius");
// const degree = document.querySelector("#degree");
// const convertBtn = document.querySelector("#convert-btn");
// const tempType = document.querySelector("#temp-type");

// window.addEventListener("load", () => {
//   degree.value = "";
//   resultField.innerHTML = "";
// });

// if (degree.value === "") {
//   convertBtn.setAttribute("disabled", "");
//   setTimeout(() => {
//     convertBtn.removeAttribute("disabled");
//   }, 4000);
// }

// convertBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   convertToCelsius();
//   convertBtn.innerHTML =
//     "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
//   setTimeout(() => {
//     convertBtn.innerHTML = "<span>Convert</span>";
//   }, 1000);
// });

// function convertToCelsius() {
//   let inputValue = degree.value;

//   setTimeout(() => {
//     if (tempType.value === "fahrenheit") {
//       const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
//       resultField.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
//     } else if (tempType.value === "kelvin") {
//       const KelvinToCelsius = inputValue - 273.15;
//       resultField.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
//     }
//   }, 1200);
// }

// // TIMER
// window.addEventListener("load", () => {
//   clock();
//   function clock() {
//     const today = new Date();

//     // get time components
//     const hours = today.getHours();
//     const minutes = today.getMinutes();
//     const seconds = today.getSeconds();

//     //add '0' to hour, minute & second when they are less 10
//     const hour = hours < 10 ? "0" + hours : hours;
//     const minute = minutes < 10 ? "0" + minutes : minutes;
//     const second = seconds < 10 ? "0" + seconds : seconds;

//     //make clock a 12-hour time clock
//     const hourTime = hour > 12 ? hour - 12 : hour;

//     // if (hour === 0) {
//     //   hour = 12;
//     // }
//     //assigning 'am' or 'pm' to indicate time of the day
//     const ampm = hour < 12 ? "AM" : "PM";

//     // get date components
//     const month = today.getMonth();
//     const year = today.getFullYear();
//     const day = today.getDate();

//     //declaring a list of all months in  a year
//     const monthList = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ];

//     //get current date and time
//     const date = monthList[month] + " " + day + ", " + year;
//     const time = hourTime + ":" + minute + ":" + second + ampm;

//     //combine current date and time
//     const dateTime = date + " - " + time;

//     //print current date and time to the DOM
//     document.getElementById("date-time").innerHTML = dateTime;
//     setTimeout(clock, 1000);
//   }
// });

// DRAFT
// script.js
const resultField = document.querySelector("#result-value");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  resultField.innerHTML = "";
});

if (degree.value === "") {
  convertBtn.setAttribute("disabled", "");
  setTimeout(() => {
    convertBtn.removeAttribute("disabled");
  }, 4000);
}

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
  convertToKelvin();
  convertToFahrenheit();
  convertBtn.innerHTML =
    "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    convertBtn.innerHTML = "<span>Convert</span>";
  }, 1000);
});

// TO CELSIUS
function convertToCelsius() {
  let inputValue = degree.value;

  setTimeout(() => {
    if (tempType.value === "fahrenheit") {
      const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      resultField.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
    } else if (tempType.value === "kelvin") {
      const KelvinToCelsius = inputValue - 273.15;
      resultField.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
    }
  }, 1200);
}
// TO KELVIN
function convertToKelvin() {
  let inputValue = degree.value;

  setTimeout(() => {
    if (tempType.value === "fahrenheit") {
      const FahrenheitToKelvin = (inputValue - 32) * (5 / 9) + 273.15;
      resultField.innerHTML = `${FahrenheitToKelvin.toFixed(3)} &deg;c`;
    } else if (tempType.value === "celsius") {
      const CelsiusToKelvin = inputValue + 273.15;
      resultField.innerHTML = `${CelsiusToKelvin.toFixed(3)} &deg;c`;
    }
  }, 1200);
}
// TO FAH
function convertToFahrenheit() {
  let inputValue = degree.value;

  setTimeout(() => {
    if (tempType.value === "celsius") {
      const CelsiusToFahrenheit = (inputValue * (5 / 9)) + 32;
      resultField.innerHTML = `${CelsiusToFahrenheit.toFixed(3)} &deg;c`;
    } else if (tempType.value === "kelvin") {
      const KelvinToFahrenheit = (inputValue - 273.15) * (9 / 5) + 32;
      resultField.innerHTML = `${KelvinToFahrenheit.toFixed(3)} &deg;c`;
    }
  }, 1200);
}

// TIMER
window.addEventListener("load", () => {
  clock();
  function clock() {
    const today = new Date();

    // get time components
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    //add '0' to hour, minute & second when they are less 10
    const hour = hours < 10 ? "0" + hours : hours;
    const minute = minutes < 10 ? "0" + minutes : minutes;
    const second = seconds < 10 ? "0" + seconds : seconds;

    //make clock a 12-hour time clock
    const hourTime = hour > 12 ? hour - 12 : hour;

    // if (hour === 0) {
    //   hour = 12;
    // }
    //assigning 'am' or 'pm' to indicate time of the day
    const ampm = hour < 12 ? "AM" : "PM";

    // get date components
    const month = today.getMonth();
    const year = today.getFullYear();
    const day = today.getDate();

    //declaring a list of all months in  a year
    const monthList = [
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

    //get current date and time
    const date = monthList[month] + " " + day + ", " + year;
    const time = hourTime + ":" + minute + ":" + second + ampm;

    //combine current date and time
    const dateTime = date + " - " + time;

    //print current date and time to the DOM
    document.getElementById("date-time").innerHTML = dateTime;
    setTimeout(clock, 1000);
  }
});
