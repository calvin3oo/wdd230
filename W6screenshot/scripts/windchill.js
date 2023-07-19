

function addWeather(temprature, windSpeed){
    const windSpeedElement = document.getElementById('wind-speed');
    const tempratureElement = document.getElementById('temprature');
    const windChillElement = document.getElementById('wind-chill');

    const tempText = !temprature? "N/A" : temprature + "°F";
    const windSpeedText = !windSpeed? "N/A" : windSpeed + " mph";

    windSpeedElement.innerHTML = windSpeedText;
    tempratureElement.innerHTML = tempText;

    if(temprature && windSpeed){
        const windChillText = Math.round(calculateWindChill(temprature, windSpeed)) + "°F";
        windChillElement.innerHTML = windChillText;
    }
}

function calculateWindChill(temprature, windSpeed){
    return (
    35.74
    + (0.6215 * temprature)
    - (35.75 * Math.pow(windSpeed, 0.16))
    + (0.4275 * temprature * Math.pow(windSpeed, 0.16)));
}

addWeather(1, 3);