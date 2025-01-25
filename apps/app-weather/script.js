const input = document.getElementById("location");
const search = document.getElementById("search");
const cityName = document.getElementById("city-name");
const cityTemp = document.getElementById("city-temp");
const localTime = document.getElementById("local-time");

// Note - Please create your key from https://www.weatherapi.com/api-explorer.aspx

async function getWeatherData(location) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=<private-key>&q=${location}&aqi=yes`,
  );
  return await response.json(); // return response in json format
}

search.addEventListener("click", async () => {
  const userLocation = input.value; // .value is the correct property to retrieve the value of an input element
  const weatherData = await getWeatherData(userLocation);
  cityName.innerHTML = `${weatherData.location.name}, ${weatherData.location.country}`;
  cityTemp.innerHTML = `${weatherData.current.temp_c} C`;
  localTime.innerHTML = weatherData.current.last_updated;
});
