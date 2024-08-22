var typingEffect = new Typed(".sec-text", {
    strings: ["UI/UX Enthusiast", "Front-End Developer", "Programmer", "Designer"],
    loop: true,
    typeSpeed: 120,
    backSpeed: 100,
    backDelay: 1520
});

let cursorDot = document.querySelector(".cursor-dot");
let cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (dets)=> {
    cursorDot.style.left = dets.clientX + "px";
    cursorDot.style.top = dets.clientY + "px";
    cursorOutline.animate({
       left: `${dets.clientX}px`,
       top : `${dets.clientY}px`
    }, {
        duration: 500,
        fill: "forwards"
    });
});

const sr = ScrollReveal(
    {
        origin: "top",
        distance: "80px",
        duration: 1000,
        delay: 300,
        easing: "ease-in-out",
        reset: true
    }
);

sr.reveal(`.bento-1, .bento-3`, {origin: "left"});
sr.reveal(`.bento-2, .bento-5`, {origin: "right"});
sr.reveal(`.bento-4, .bento-6`, {origin: "bottom"});








