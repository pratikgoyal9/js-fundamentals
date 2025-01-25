const locationButton = document.getElementById("auto-location-button");
const temp = document.getElementById("temp");

async function successlocation(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;

  const weatherData = await getWeather(lat, long);

  temp.innerText = weatherData.current.temp_c;
}

function errorLocation() {
  console.log(`Cannot find location`);
}

async function getWeather(lat, long) {
  const weatherData = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=<private-key>&q=${lat},${long}&aqi=no`,
  );
  return await weatherData.json();
}

locationButton.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(successlocation, errorLocation);
});
