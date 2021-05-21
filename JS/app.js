const myfunc = window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
});

const mobileMenu = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const navCta = document.querySelector("#nav-cta");

mobileMenu.addEventListener("click", function () {
  navList.classList.toggle("active");
  navCta.classList.toggle("active");
});

