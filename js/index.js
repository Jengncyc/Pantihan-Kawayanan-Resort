
const btns = document.querySelectorAll(".navbtn");
const slides = document.querySelectorAll(".slidess");
const text = document.querySelectorAll(".swiper");

let currentIndex = 0;
let timer;

const playSlider = () => {
    timer = setInterval(() => {
        nextSlide();
    }, 3000);
};

const stopSlider = () => {
    clearInterval(timer);
};

const nextSlide = () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    updateSlider();
};

const prevSlide = () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateSlider();
};

const updateSlider = () => {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });

    text.forEach((text, index) => {
        if (index === currentIndex) {
            text.classList.add("active");
        } else {
            text.classList.remove("active");
        }
    });

    btns.forEach((btn, index) => {
        if (index === currentIndex) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
};

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        currentIndex = i;
        updateSlider();
        stopSlider();
        playSlider();
    });
});

playSlider();

