// Adds the Menu HTML to the page along with a 'active' class to the 'active' tab
function addMenu() {
  const menuElement = document.getElementById("menu");
  const navigation = [
    { name: "Home", url: "index.html" },
    { name: "Join", url: "join.html" },
    { name: "Discover", url: "discover.html" },
    { name: "Directory", url: "directory.html" },
  ];
  navigation.forEach((nav) => {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    aElement.textContent = nav.name;
    aElement.href = nav.url;

    if (window.location.pathname.includes(nav.url)) {
      aElement.classList.add("active");
    }

    liElement.appendChild(aElement);
    menuElement.appendChild(liElement);
  });
}

// Adds expanding and collapsing capability to the hamburger menu
function addHamburgerListener() {
  document.getElementById("hamburger").addEventListener("click", (e) => {
    // toggle the hamburger
    e.target.classList.toggle("open");

    // show the menu
    document.getElementById("menu").classList.toggle("mobile-hidden");
  });
}

addMenu();
addHamburgerListener();
