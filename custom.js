let currentSlide = 0;
let autoScroll = true;
const customSliderData = [
  {
    image: "./resources/hero1.png",
    heading: "Sony Headphone",
    desc: "The best sound quality. Don't miss the change. We are offering you with 20% discount.",
  },
  {
    image: "./resources/hero2.png",
    heading: "Ipad 12 pro",
    desc: "Big super amoled display and long time battery life and water prof granted.",
  },
  {
    image: "./resources/hero3.png",
    heading: "Mac book m1",
    desc: "Best seller product in mac world. To buy this amazing product just only one click.",
  },
];

function showSlides() {
  const sliderContent = document.getElementById("sliderContent");
  sliderContent.innerHTML = "";

  customSliderData.forEach((slide, index) => {
    const slideElement = document.createElement("div");
    slideElement.className = index === currentSlide ? "slide current" : "slide";

    if (index === currentSlide) {
      const content = `
        <div>
          <img src="${slide.image}" alt="slide" class="image">
          <div class="content">
            <h2 class="underline underline-offset-8 decoration-solid decoration-rose-600">
              ${slide.heading}
            </h2>
            <p>${slide.desc}</p>
            <hr>
            <a href="#" class="btn bg-gradient-to-r text-white border-none">
              Shop Now
            </a>
          </div>
        </div>
      `;
      slideElement.innerHTML = content;
    }

    sliderContent.appendChild(slideElement);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % customSliderData.length;
  showSlides();
}

function prevSlide() {
  currentSlide =
    (currentSlide - 1 + customSliderData.length) % customSliderData.length;
  showSlides();
}

function toggleAutoScroll() {
  autoScroll = !autoScroll;
  const autoIcon = document.getElementById("autoIcon");
  if (autoScroll) {
    autoIcon.classList.remove("fa-play-circle");
    autoIcon.classList.add("fa-pause-circle");
    auto();
  } else {
    autoIcon.classList.remove("fa-pause-circle");
    autoIcon.classList.add("fa-play-circle");
    clearInterval(slideInterval);
  }
}

function auto() {
  slideInterval = setInterval(nextSlide, 6000);
}

showSlides();
auto(); // Start auto scroll by default
