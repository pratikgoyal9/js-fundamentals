const valStopwatch = document.getElementById("ipt-stopwatch");
const btnStopwatch = document.getElementById("btn-stopwatch");
const displayStopwatch = document.getElementById("display-stopwatch");
let inputNumber = 0;
let stopTimeout;

btnStopwatch.addEventListener("click", () => {
  inputNumber = parseInt(valStopwatch.value);
  stopTimeout = setInterval(startStopwatch, 1000);
});

function startStopwatch() {
  if (inputNumber > 0) {
    displayStopwatch.innerHTML = inputNumber;
    setTimeout(1000);
    inputNumber--;
  } else {
    displayStopwatch.innerHTML = "Time is up!";
    clearInterval(stopTimeout);
  }
}
