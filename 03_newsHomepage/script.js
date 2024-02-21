const navItemContainer = document.querySelector(".nav-items-container");
const navExtra = document.querySelector(".navbar-extra");

navExtra.addEventListener("click", function () {
  navItemContainer.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!navExtra.contains(e.target) && !navItemContainer.contains(e.target)) {
    navItemContainer.classList.remove("active");
  }
});
