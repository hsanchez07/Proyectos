const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const header = document.getElementById("header");
const loader = document.getElementById("loader");

/* MENU MOVIL */

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }

});

/* CERRAR MENU AL HACER CLICK */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");
    menuBtn.textContent = "☰";

  });

});

/* NAVBAR SCROLL */

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});

/* LOADER */

window.addEventListener("load", () => {

  setTimeout(() => {
    loader.classList.add("hide");
  }, 1000);

});

/* ANIMACIONES SCROLL */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

  reveals.forEach(element => {

    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      element.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();