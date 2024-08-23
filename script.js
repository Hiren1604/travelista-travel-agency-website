//NavBar Animation
const search = document.querySelector(".search");
document.querySelector(".explore-btn").addEventListener("click", () => {
    search.classList.toggle("active");
});

const navLinks = document.getElementById("nav-links");
document.querySelector(".fa-bars-staggered").addEventListener("click", () => {
    navLinks.classList.add("show");
});
document.querySelector(".fa-xmark").addEventListener("click", () => {
    navLinks.classList.remove("show");
});

//Swiper Animation

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            stopOnLastSlide: false,
        },
        speed: 3000,
        loop: true,
        pauseOnMouseEnter: true,
    });
});

//Scroll Reveal Animation

const sr = ScrollReveal(
    {
        origin: "top",
        distance: "80px",
        duration: 2500,
        delay: 300,
        // reset: true // animations repeat
    }
);

sr.reveal(`.main-content-box,.container`);
sr.reveal(`.label,.heading,container-box .heading,.box1,.box3,.fbox1,.fbox2,.clients-header`, { origin: "left" });
sr.reveal(`.content,.box2,.box5,.fbox3,.fbox4`, { origin: "right" });
sr.reveal(`.ticket-img`, { delay: 500 });
sr.reveal(`.news-box`, { delay: 700, origin: "bottom" });
sr.reveal(`.box4,.swiper`, { origin: "bottom" });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offsetPosition = target.offsetTop - document.querySelector('nav').offsetHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
