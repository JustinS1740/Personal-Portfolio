// scroll speed function
window.addEventListener("scroll", function () {
document.querySelectorAll("[data-scroll-speed]").forEach(function (el) {
    const speed = parseFloat(el.getAttribute("data-scroll-speed"));
    const offset = window.scrollY * (speed / 10);
    el.style.transform = `translateY(${offset}px)`;
});
});

// banner shrinking function
window.addEventListener("scroll", () => {
    const banner = document.querySelector("#banner");
    const speed = 0.5; // lower = slower
    const offset = window.scrollY * speed;
    banner.querySelector("img").style.transform = `translateY(${offset}px)`;
});

// site opacity transition function
window.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    if (content) {
      setTimeout(() => {
        content.classList.add('show');
      }, 50); // 50ms delay
    }
});
