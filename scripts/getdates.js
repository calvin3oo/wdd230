// Dynamically populate current year
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

// Dynamically populate last modified date
const lastModified = new Date(document.lastModified).toISOString().slice(0, 10);
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;