const numVisitsElem = document.getElementById("num-visits");
let path = window.location.pathname;
let visits = localStorage.getItem(path) || 0;

// Get numVisits from LocalStorage for home page, increment and display
function displayNumVisits() {
  numVisitsElem.innerHTML = visits;
}
function incrementNumVisits() {
  visits++;
  localStorage.setItem(path, visits);
}

incrementNumVisits();
displayNumVisits();
