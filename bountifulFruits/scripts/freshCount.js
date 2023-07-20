
var totalSubmitted = 'unknown';
if (localStorage.getItem("totalSubmitted")) totalSubmitted = localStorage.getItem("totalSubmitted"); 


document.getElementById("total-submitted").innerHTML = totalSubmitted