
    document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
    if (window.scrollY > 70) {
    navbar.classList.add("bg-black");
    navbar.classList.remove("bg-transparent");
} else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-black");
}
});
});