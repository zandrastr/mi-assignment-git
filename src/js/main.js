let header = document.querySelector(".header");
let toggleBtn = document.querySelector(".toggle-button");
let plantSections = document.querySelector(".plant-sections-wrapper");
let footer = document.querySelector(".footer");
let bodyToggle = document.body;

function toggleTheme () {
    console.log("Button is pressed!");     
    header.classList.toggle("header-dark-mode");
    bodyToggle.classList.toggle("body-dark-mode");
    plantSections.classList.toggle("text-dark-mode");
    footer.classList.toggle("footer-dark-mode");
};

toggleBtn.addEventListener("click", toggleTheme);

