function main(){
    var temp = 32;
    var windSpeed = 5;
    var windChill = getWindChill(temp, windSpeed);
    
    document.getElementById("windChill").innerHTML = windChill;
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("windSpeed").innerHTML = windSpeed;
}

function getWindChill(temp, windSpeed){
    var windChill = Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16)));
    return (temp <= 50 & windSpeed > 3) ? windChill : "N/A";
}




main();