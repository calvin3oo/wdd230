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
    const iconElement = document.getElementById("weatherIcon");
    const tempElement = document.getElementById("temp");
    const windSpeedElement = document.getElementById("windSpeed");
    const windChillElement = document.getElementById("windChill");

    iconElement.src = `https://openweathermap.org/img/w/${icon}.png`;
    tempElement.textContent = `${temperature}°F`;
    windSpeedElement.textContent = `${data.wind.speed} mph`;
    windChillElement.textContent = `${Math.round(data.wind.deg)}°`;
  })
  .catch((error) => {
    console.error("Error:", error);
  });
