const modeToggle = document.getElementById("modeToggle");
const modeIcon = document.getElementById("modeIcon");

const moonEmojisOn = ["🌑", "🌒", "🌓", "🌔", "🌕"];
const moonEmojisOff = ["🌕", "🌖", "🌗", "🌘", "🌑"];
async function changeEmoji(turnOn) {
  const emojis = turnOn ? moonEmojisOn : moonEmojisOff;
  for (let i = 0; i < emojis.length; i++) {
    await new Promise((r) => setTimeout(r, 100));
    modeIcon.innerHTML = emojis[i];
  }
}

modeToggle.addEventListener("change", () => {
  changeEmoji(!modeToggle.checked);

  const root = document.documentElement;
  if (modeToggle.checked) {
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
});
