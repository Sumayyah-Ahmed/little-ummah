document.addEventListener("DOMContentLoaded", () => {
  // Slider logic
  const slidesContainer = document.querySelector(".slides");
  const dotsContainer = document.querySelector(".dots");

 // Highlight active nav link based on current URL
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage || link.getAttribute("href") === "#") {
    link.classList.add("active");
  }
});
 

  // Add image filenames here when you add to assets folder
  const images = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","7.jpg", "10.jpg","14.jpg","13.jpg","12.jpg","11.jpg","19.jpg", "18.jpg"]; 

  images.forEach((img, i) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    if (i === 0) slide.classList.add("active");
    const image = document.createElement("img");
    image.src = "assets/" + img;
    slide.appendChild(image);
    slidesContainer.appendChild(slide);

    const dot = document.createElement("span");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
  });

  const slides = document.querySelectorAll(".slide");
  const dots = dotsContainer.querySelectorAll("span");

  let slideIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i].classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
        dots[i].classList.add("active");
      }
    });
    slideIndex = index;
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  document.querySelector(".next").addEventListener("click", nextSlide);
  document.querySelector(".prev").addEventListener("click", prevSlide);

  setInterval(nextSlide, 4000);

  showSlide(slideIndex);
});

// Sticky header shadow on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
