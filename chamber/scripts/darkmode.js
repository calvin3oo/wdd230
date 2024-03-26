const modeToggle = document.getElementById("modeToggle");
const modeIcon = document.getElementById("modeIcon");
const slider = document.querySelector(".slider");

const moonEmojisLight = ["🌑", "🌒", "🌓", "🌔", "🌕"];
const moonEmojisDark = ["🌕", "🌖", "🌗", "🌘", "🌑"];
async function changeEmoji(darkMode, animation) {
  const emojis = darkMode ? moonEmojisDark : moonEmojisLight;
  if (animation) {
    for (let i = 0; i < emojis.length; i++) {
      await new Promise((r) => setTimeout(r, 100));
      modeIcon.innerHTML = emojis[i];
    }
  } else {
    modeIcon.innerHTML = emojis[emojis.length - 1];
  }
}

function toggleRootVars(darkMode) {
  const root = document.documentElement;

  if (darkMode) {
    root.style.setProperty("--white-smoke", "#37323eff");
    root.style.setProperty("--french-gray", "#6d6a75ff");
    root.style.setProperty("--dim-gray", "#bfbdc1ff");
    root.style.setProperty("--raisin-black", "#F5F5F5");
  } else {
    root.style.setProperty("--white-smoke", "#F5F5F5");
    root.style.setProperty("--french-gray", "#bfbdc1ff");
    root.style.setProperty("--dim-gray", "#6d6a75ff");
    root.style.setProperty("--raisin-black", "#37323eff");
  }
}

function storePrefrences(darkMode) {
  localStorage.setItem("darkMode", darkMode);
}
function getPrefrence() {
  let darkMode = localStorage.getItem("darkMode");
  if (darkMode === null) {
    storePrefrences(false);
    darkMode = false;
  }
  return darkMode === "true";
}

function setDarkMode(darkMode, animation = true) {
  changeEmoji(darkMode, animation);
  toggleRootVars(darkMode);
  storePrefrences(darkMode);

  if (modeToggle.checked !== darkMode) modeToggle.checked = darkMode;
  if (slider.hidden) slider.hidden = false;
}

function addDarkModeListener() {
  modeToggle.addEventListener("change", () => {
    setDarkMode(modeToggle.checked);
  });
}

setDarkMode(getPrefrence(), false);
addDarkModeListener();
