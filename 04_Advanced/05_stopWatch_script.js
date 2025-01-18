const inputTimer = document.getElementById("ipt-stopwatch");
const btnTimer = document.getElementById("btn-stopwatch");
const displayTimer = document.getElementById("display-stopwatch");

let inputNumber = 0;

btnTimer.addEventListener("click", () => {
  inputNumber = parseInt(inputTimer.value);
  setInterval(startTimer, 1000);
});

function startTimer() {
  if (inputNumber >= 0) {
    displayTimer.innerHTML = `Time left: ${inputNumber}`;
    inputNumber--;
    setTimeout(1000);
  } else {
    displayTimer.innerHTML = "Time's up!";
  }
}
