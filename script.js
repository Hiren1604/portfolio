var typingEffect = new Typed(".sec-text", {
    strings: ["UI/UX Enthusiast", "Front-End Developer", "Programmer", "Designer"],
    loop: true,
    typeSpeed: 120,
    backSpeed: 100,
    backDelay: 1520
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        speed: 3000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 3, // Adjust this based on your preference
        spaceBetween: 10,
        on: {
            init: function () {
                this.autoplay.start();
            },
            mouseenter: function () {
                this.autoplay.stop();
            },
            mouseleave: function () {
                this.autoplay.start();
            }
        }
    });
});



