//Styrer "boblen" der viser hvilken "side" man er på, oppe i navbaren
const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
    "linear-gradient(to right top, #0c114e, #0c114e)",
    "linear-gradient(to right top, #8591a4, #8591a4)",
    "linear-gradient(to right top, #005c97, #363795",
    "linear-gradient(to right top, #e53935, #e35d5b)",
    "linear-gradient(to right top, #f46b45, #eea849)"
];

const options = {
    threshold: 0.6
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute("data-index");
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if (entry.isIntersecting) {
            bubble.style.setProperty("left", `${directions.left}px`);
            bubble.style.setProperty("top", `${directions.top}px`);
            bubble.style.setProperty("width", `${directions.width}px`);
            bubble.style.setProperty("height", `${directions.height}px`);
            if (!(gradientIndex === '0')) {

                // bubble.style.background = gradients[gradientIndex];
                bubble.style.background = gradients[1]
            } else {
                bubble.style.background = gradients[0];
            }

        }
    });
}

sections.forEach(section => {
    observer.observe(section);
});
