if (typeof(Storage) !== "undefined") {
var currentTimestamp = Date.now();

var previousTimestamp = localStorage.getItem("lastVisitTimestamp");

if (previousTimestamp) {
    var timeDifference = Math.round((currentTimestamp - previousTimestamp) / (1000 * 60 * 60 * 24));

    document.getElementById("timeDifference").textContent = "Days since last visit: " + timeDifference;
}

localStorage.setItem("lastVisitTimestamp", currentTimestamp);
}