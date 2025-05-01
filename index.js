window.addEventListener("scroll", function () {
document.querySelectorAll("[data-scroll-speed]").forEach(function (el) {
    const speed = parseFloat(el.getAttribute("data-scroll-speed"));
    const offset = window.scrollY * (speed / 10);
    el.style.transform = `translateY(${offset}px)`;
});
});

window.addEventListener("scroll", () => {
    const banner = document.querySelector("#banner");
    const speed = 0.5; // lower = slower
    const offset = window.scrollY * speed;
    banner.querySelector("img").style.transform = `translateY(${offset}px)`;
});
