const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;
  
  navToggle.setAttribute("aria-expanded", !expanded);
  nav.classList.toggle("active");
});
