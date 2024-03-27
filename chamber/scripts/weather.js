const LAT = "43.8866";
const LON = "-111.6777";
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

  const temperature = Math.round(currentWeatherData.main.temp);
  const description = currentWeatherData.weather[0].description;

  // Update the information card with the current weather data
  const tempElement = document.getElementById("temp");
  const descriptionElement = document.getElementById("weatherDesc");

  tempElement.textContent = `${temperature}°F`;
  descriptionElement.textContent = description;
}

async function populateForecastData() {
  const forecastData = await (
    await fetch(FORECAST_URL).catch((err) => console.error(err))
  ).json();

  const forecastDays = 3;
  const forecast = forecastData.list.reduce((acc, forecastItem) => {
    const date = new Date(forecastItem.dt_txt);
    const day = daysOfWeek[date.getDay()];
    const temperature = Math.round(forecastItem.main.temp);
    const icon = forecastItem.weather[0].icon;
    const iconID = forecastItem.weather[0].id;

    if (!acc[day]) {
      if (Object.keys(acc).length >= forecastDays) return acc;
      acc[day] = {
        min: temperature,
        max: temperature,
        icon: icon,
        iconID: iconID,
      };
    } else {
      acc[day].min = Math.min(acc[day].min, temperature);
      acc[day].max = Math.max(acc[day].max, temperature);
      if (iconID < acc[day].iconID) {
        acc[day].icon = icon;
        acc[day].iconID = iconID;
      }
    }
    return acc;
  }, {});

  const threeDayForecastElement = document.getElementById("threeDayForecast");

  Object.keys(forecast).forEach((day) => {
    const forecastElement = document.createElement("div");
    forecastElement.classList.add("forecast-item");

    const dayElement = document.createElement("p");
    dayElement.textContent = day;
    forecastElement.appendChild(dayElement);

    const iconElement = document.createElement("img");
    iconElement.src = `https://openweathermap.org/img/wn/${forecast[day].icon}.png`;
    iconElement.alt = forecast[day].icon;
    forecastElement.appendChild(iconElement);

    const minElement = document.createElement("p");
    minElement.textContent = `Low: ${forecast[day].min}°F`;
    forecastElement.appendChild(minElement);

    const maxElement = document.createElement("p");
    maxElement.textContent = `High: ${forecast[day].max}°F`;
    forecastElement.appendChild(maxElement);

    threeDayForecastElement.appendChild(forecastElement);
  });
}

main();
