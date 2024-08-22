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
})




