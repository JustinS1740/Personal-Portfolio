// scroll speed function
window.addEventListener("scroll", function () {
document.querySelectorAll("[data-scroll-speed]").forEach(function (el) {
    const speed = parseFloat(el.getAttribute("data-scroll-speed"));
    const offset = -(window.scrollY * (0.6 * speed)); //1.2
    el.style.marginTop = `${offset}px`;
});
});

// shrinking/opacity function
window.addEventListener("scroll", () => {
    const banner = document.querySelector("#banner");
    const speed = 0.35; // .35
    const offset = -(window.scrollY * speed);
    banner.style.marginTop = `${offset}px`;
    banner.style.opacity = 1 - Math.min(window.scrollY / 500, 1); //300

    // title shrink function
    const title = document.querySelector("#title")
    if (offset <= -170) {
      title.style.fontSize = "120%";
    } else {
      title.style.fontSize = "200%"
    }
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
