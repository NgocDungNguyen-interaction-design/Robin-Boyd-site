document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav ul");

    toggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});
