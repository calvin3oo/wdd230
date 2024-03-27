// Get the current day of the week
const currentDay = new Date().getDay();

document.getElementById('banner-close').addEventListener('click', () => {
  document.getElementById('banner-container').hidden = true;
});

// Check if it's Monday, Tuesday, or Wednesday
if (currentDay >= 1 && currentDay <= 3) {
  // Create the banner element
  const banner = document.getElementById("banner-container");
  const bannerText = document.getElementById("banner-text");
  bannerText.innerHTML =
    "Join us for the Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.";

  banner.hidden = false;
}
