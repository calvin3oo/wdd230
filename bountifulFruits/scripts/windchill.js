const API_KEY = "ad971ed827569efa86a502d028b44a9f";
const city = "Carlsbad";
const state = "New Mexico";

const weatherDescElement = document.getElementById("current-weather-desc");
const temperatureElement = document.getElementById("temperature");
const humidityElement = document.getElementById("humidity");

function kelvinToFahrenheit(kelvin) {
  return ((kelvin - 273.15) * 9) / 5 + 32;
}

function updateWeatherInfo() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {

      weatherDescElement.textContent = `Weather: ${data.weather[0].description}`;
      temperatureElement.textContent = `Temperature: ${kelvinToFahrenheit(data.main.temp).toFixed(
        2
      )}°F`;
      humidityElement.textContent = `Humidity: ${data.main.humidity}%`;

    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

async function getWeatherForecast() {
  try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${state}&appid=${API_KEY}`);
      const data = await response.json();
      console.dir(data);
      const forecasts = [];

      // Take the next 3 forecasts
      forecasts.push(data.list[0]); 
      forecasts.push(data.list[8]); 
      forecasts.push(data.list[16]); 

      const threeDayForecastElement = document.getElementById('threeDayForecast');
      let forecastHTML = '';

      forecasts.forEach(forecast => {
        var date = new Date(forecast.dt_txt);
          // Extract necessary data from the API response
          const weatherId = forecast.weather[0].icon;
          const temperature = kelvinToFahrenheit(forecast.main.temp).toFixed(0);

          // Create the HTML for each forecast day
          forecastHTML += `
              <div>
                  <h3>${date.toLocaleDateString('en-US', { weekday: 'long' })}</h3>
                  <img src="./images/weather/${weatherId}@2x.png" alt="Weather Icon">
                  <p>${temperature}°F</p>
              </div>
          `;
      });

      // Update the innerHTML of the #threeDayForecast element
      threeDayForecastElement.innerHTML = forecastHTML;
  } catch (error) {
      console.error('Error fetching weather data:', error);
  }
}

updateWeatherInfo();
getWeatherForecast();