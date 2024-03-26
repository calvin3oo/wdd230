// Dynamically populate current year
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

// Dynamically populate last modified date
const lastModified = new Date(document.lastModified).toISOString().slice(0, 10);
document.getElementById(
  "lastModified"
).textContent = `Last Modified: ${lastModified}`;

// Dynamically populate current date in the form if the element exists
const currentDateElement = document.getElementById("formLoadTime");
if (currentDateElement) currentDateElement.value = new Date().now();
