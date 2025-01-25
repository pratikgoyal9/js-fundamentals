const displayTime = document.getElementById("lbl-user-time");
const stopButton = document.getElementById("btn-stop");

function showTime() {
  const currentTime = new Date();
  const currentHours = currentTime.getHours();
  const currentMins = currentTime.getMinutes();
  const currentSecs = currentTime.getSeconds();
  displayTime.innerHTML = `${currentHours}:${currentMins}:${currentSecs}`;
}

const interval = setInterval(() => showTime(), 1000);

stopButton.addEventListener("click", () => {
  clearInterval(interval);
});
