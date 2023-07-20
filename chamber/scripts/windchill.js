const API_KEY = "ad971ed827569efa86a502d028b44a9f";
const city = "Dallas";
const state = "Texas";

const weatherDescElement = document.getElementById("current-weather-desc");
const temperatureElement = document.getElementById("temperature");
const windSpeedElement = document.getElementById("wind-speed");
const weatherImageElement = document.getElementById("weather-image");

function kelvinToFahrenheit(kelvin) {
  return ((kelvin - 273.15) * 9) / 5 + 32;
}

function updateWeatherInfo() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.dir(data);
      const weatherDescription = data.weather[0].description;
      const temperatureInKelvin = data.main.temp;
      const windSpeedInMeterPerSec = data.wind.speed;

      const temperatureInFahrenheit = kelvinToFahrenheit(temperatureInKelvin);

			weatherImageElement.src = `./images/weather/${data.weather[0].icon}@2x.png`;
      weatherDescElement.textContent = `Weather: ${weatherDescription}`;
      temperatureElement.textContent = `Temperature: ${temperatureInFahrenheit.toFixed(
        2
      )}°F`;
      windSpeedElement.textContent = `Wind Speed: ${windSpeedInMeterPerSec} m/s`;
      addWeather(temperatureInFahrenheit, windSpeedInMeterPerSec);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function addWeather(temprature, windSpeed) {
  const windChillElement = document.getElementById("wind-chill");


  if (temprature && windSpeed) {
    const windChillText =
      Math.round(calculateWindChill(temprature, windSpeed)) + "°F";
    windChillElement.innerHTML = windChillText;
  }
}

function calculateWindChill(temprature, windSpeed) {
  return (
    35.74 +
    0.6215 * temprature -
    35.75 * Math.pow(windSpeed, 0.16) +
    0.4275 * temprature * Math.pow(windSpeed, 0.16)
  );
}

updateWeatherInfo();
