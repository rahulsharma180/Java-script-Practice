let timerRef = document.querySelector(".timer-display");
let int = null;
let startTime = null;
let elapsedTime = 0;

function displayTimer() {
  let currentTime = performance.now();
  elapsedTime = currentTime - startTime;

  let totalMilliseconds = Math.floor(elapsedTime);
  let ms = totalMilliseconds % 1000;
  let s = Math.floor((totalMilliseconds / 1000) % 60);
  let m = Math.floor((totalMilliseconds / 60000) % 60);
  let h = Math.floor(totalMilliseconds / 3600000);

  let formattedH = String(h).padStart(2, "0");
  let formattedM = String(m).padStart(2, "0");
  let formattedS = String(s).padStart(2, "0");
  let formattedMs = String(ms).padStart(3, "0");

  timerRef.innerHTML = `${formattedH} : ${formattedM} : ${formattedS} : ${formattedMs}`;
}

document.getElementById("start-timer").addEventListener("click", () => {
  if (int === null) {
    startTime = performance.now() - elapsedTime;  // Pehle ka time maintain karna
    int = setInterval(displayTimer, 10);
  }
});

document.getElementById("pause-timer").addEventListener("click", () => {
  clearInterval(int);
  int = null;
});

document.getElementById("reset-timer").addEventListener("click", () => {
  clearInterval(int);
  int = null;
  elapsedTime = 0;
  timerRef.innerHTML = "00 : 00 : 00 : 000";
});


// let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
// let timerRef = document.querySelector(".timer-display");
// let int = null;

// document.getElementById("start-timer").addEventListener("click", () => {
//   if (int !== null) {
//     clearInterval(int);
//   }
//   int = setInterval(displayTimer, 10);
// });

// function displayTimer() {
//   milliseconds += 10;
//   // seconds = milliseconds == 1000 ? (seconds + 1) % 60 : seconds;
//   // minutes = seconds == 0 && milliseconds == 0 ? (minutes + 1) % 60 : minutes;
//   // hours = minutes == 0 && seconds == 0 && milliseconds == 0 ? hours + 1 : hours;
//   // milliseconds = milliseconds == 1000 ? 0 : milliseconds;

//   if (milliseconds == 1000) {
//     seconds += 1;
//     milliseconds = 0;
//   }

//   if (seconds == 60) {
//     minutes += 1;
//     seconds = 0;
//   }

//   if (minutes == 60) {
//     hours += 1;
//     minutes = 0;
//   }


//   let h = String(hours).padStart(2, "0");
//   let m = String(minutes).padStart(2, "0");
//   let s = String(seconds).padStart(2, "0");
//   let ms = String(milliseconds).padStart(3, "0");

//   timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
// }

// document.getElementById("pause-timer").addEventListener("click", () => {
//   clearInterval(int);
// });

// document.getElementById("reset-timer").addEventListener("click", () => {
//   clearInterval(int);
//   [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
//   timerRef.innerHTML = "00 : 00 : 00 : 000";
// });