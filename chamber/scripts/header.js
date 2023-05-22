
// Get the element with ID "current-date"
const currentDateElement = document.getElementById("current-date");

// Function to format the date as "Wednesday, 24 July 2020"
function formatDate(date) {
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// Set the content of the element to the current date
currentDateElement.innerHTML = formatDate(new Date());


// Check the checkbox when the hamburger is clicked
const hamburger = document.querySelector(".hamburger-lines");
const check = document.querySelector("#header-check");

hamburger.addEventListener("click", () => {
  check.checked = !check.checked;
});
