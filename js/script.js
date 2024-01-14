// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika humberger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik di luar sidebar untuk menghilangkan nav
const humberger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.constains(e.target) && !navbarNav.constains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
