const lenis = new Lenis({
    autoRaf: true,
});

document.addEventListener("DOMContentLoaded", function () {
    const bottomToTopScroll = document.getElementById("bottomToTopScroll");

    bottomToTopScroll.innerHTML = `
    <div
      class="bottomToTop position-fixed bottom-0 end-0 me-3 mb-3 text-white d-flex align-items-center justify-content-center rounded d-none"
      style="width: 40px; height: 40px; cursor: pointer; z-index: 1040; background-color:#04488f; transition: all 0.5s;"
      id="scrollToTopBtn"
      onmouseover="this.style.opacity='0.8'"
      onmouseout="this.style.opacity='1'">
      <i class="fa-solid fa-angle-up"></i>
    </div>
  `;

    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.classList.remove("d-none");
        } else {
            scrollToTopBtn.classList.add("d-none");
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// navbar

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseBtns = document.querySelectorAll(".mobileMenuCloseBtn");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.style.width = "100%";
});

mobileMenuCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        mobileMenu.style.width = "0";
    });
});

// footer

const year = new Date().getFullYear()
const copyright = document.getElementById('copyright').innerHTML = year

// AOS (Animate On Scroll) initialization

AOS.init({
    once: true,
    duration: 1000
});

// slider

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // default (mobile)
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
    },
    breakpoints: {
        // From 640px and above, show 2 slides
        640: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    },
});
