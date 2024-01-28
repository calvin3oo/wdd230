document.getElementById("hamburger").addEventListener("click", (e) => {
    // toggle the hamburger
    e.target.classList.toggle("open");

    // show the menu
    document.getElementById("menu").classList.toggle("mobile-hidden");
});