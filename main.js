const toggleButton = document.getElementById("toggle-theme");
const navbar = document.getElementById("header__topnav");
const linkSpans = document.querySelectorAll(".link-style");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDark);
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("dark-mode");
  if (savedTheme === "true") {
    document.body.classList.add("dark-mode");
  }
});

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
  toggleButton.classList.toggle("scrolled", window.scrollY > 20);
  linkSpans.forEach((span) => {
    span.classList.toggle("remove", window.scrollY > 20);
  });
});
