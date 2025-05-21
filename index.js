// scroll speed function
window.addEventListener("scroll", function () {
document.querySelectorAll("[data-scroll-speed]").forEach(function (el) {
    const speed = parseFloat(el.getAttribute("data-scroll-speed"));
    const offset = -(window.scrollY * (1.2 * speed));
    el.style.marginTop = `${offset}px`;
});
});

// banner shrinking/opacity function
window.addEventListener("scroll", () => {
    const banner = document.querySelector("#banner");
    const speed = 0.4;
    const offset = -(window.scrollY * speed);
    banner.style.marginTop = `${offset}px`;
    banner.style.opacity = 1 - Math.min(window.scrollY / 300, 1);
});

// site opacity transition function
window.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    if (content) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
        content.classList.add('show');
        });
      });
    }
});
