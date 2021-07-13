const navE = document.querySelector(".nav");
const navIcon = document.querySelector(".nav__icon");
const navMenu = document.querySelector(".nav__menu");
const btnDropdown = document.querySelector(
  ".nav__menu-dropdown .nav__menu-link"
);
const dropdownE = document.querySelector(".dropdown-list");
const btnRegister = document.querySelector("btn-register");

let isScroll = false;

window.onscroll = function (e) {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navE.classList.add("active");
  } else {
    navE.classList.remove("active");
  }
};
navIcon.addEventListener("click", () => {
  if (navMenu.classList.value.includes("active")) {
    navIcon.innerHTML = '<i class="fas fa-bars"></i>';
    navMenu.classList.remove("active");
  } else {
    navIcon.innerHTML = '<i class="fas fa-times"></i>';
    navMenu.classList.add("active");
  }
});

btnDropdown.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownE.classList.toggle("active");
});
