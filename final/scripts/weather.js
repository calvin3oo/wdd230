const LAT = "20.4230";
const LON = "-86.9223";
const APIKEY = "ad971ed827569efa86a502d028b44a9f";

const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;
const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

async function main() {
  await populateWeatherData();
  await populateForecastData();
}

async function populateWeatherData() {
  const currentWeatherData = await (
    await fetch(WEATHER_URL).catch((err) => console.error(err))
  ).json();

  console.dir(currentWeatherData);

  const temperature = Math.round(currentWeatherData.main.temp);
  const weather = currentWeatherData.weather[0];

  // Update the information card with the current weather data
  const otherWeatherElement = document.getElementById("weather-cont");

  otherWeatherElement.innerHTML = `
    <p>${temperature}°F ${weather.main}</p>
    <p>${weather.description}<p>
    <p>Humidity: ${currentWeatherData.main.humidity}%</p>
    <img src="http://openweathermap.org/img/wn/${weather.icon}.png" alt="Weather Icon">
  `;

    document.getElementById('max-temp').textContent = `Tomorrows High: ${Math.round(currentWeatherData.main.temp_max)}°F`;
}

async function populateForecastData() {
  const forecastData = await (
    await fetch(FORECAST_URL).catch((err) => console.error(err))
  ).json();
  const tomorrowAtThree = forecastData.list.find(item => new Date(item.dt_txt).getHours() === 15); 
  const tomorrowForecastElement = document.getElementById("tomorrow");

  tomorrowForecastElement.innerHTML = `<p>${Math.round(tomorrowAtThree.main.temp)}°F </p>`;
}

main();
