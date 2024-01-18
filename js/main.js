const toggleMenu = document.querySelector(".toggle-menu");
const menu = document.querySelector(".nav");

window.addEventListener("click", function (e) {
        if (menu.contains(e.target) || e.target.matches(".toggle-menu")) {
          menu.classList.add("active");
        } else {
          menu.classList.remove("active");
        }
});
