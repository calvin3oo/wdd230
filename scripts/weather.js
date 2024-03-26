const LAT = "43.8866";
const LON = "-111.6777";
const APIKEY = "ad971ed827569efa86a502d028b44a9f";

const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

// Get the current weather data
fetch(WEATHER_URL)
  .then((response) => response.json())
  .then((data) => {
    // Extract the necessary information from the response
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    // Update the information card with the current weather data
    const weatherContainerElement = document.getElementById("weather");

    weatherContainerElement.innerHTML = `<img class="weather-icon" src="https://openweathermap.org/img/w/${icon}.png" alt="Weather icon">${temperature}°F ${description}`;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
