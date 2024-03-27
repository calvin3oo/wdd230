const welcomeMessageElement = document.getElementById("welcome-message");

// Check if this is the user's first visit
if (!localStorage.getItem("lastVisit")) {
  welcomeMessageElement.textContent = "Welcome! Let us know if you have any questions.";
  
  // Save the current date in localStorage
  localStorage.setItem("lastVisit", new Date());
} else {
  // Get the last visit date from localStorage
  const lastVisit = new Date(localStorage.getItem("lastVisit"));
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate.getTime() - lastVisit.getTime();

  // Calculate the number of days between visits
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // Update the last visit date in localStorage
  localStorage.setItem("lastVisit", currentDate);

  // Display the appropriate message based on the time between visits
  if (daysDifference === 0) {
    welcomeMessageElement.textContent = "Back so soon! Awesome!";
  } else {
    const message = daysDifference === 1 ? "day" : "days";
    welcomeMessageElement.textContent = `You last visited ${daysDifference} ${message} ago.`;
  }
}