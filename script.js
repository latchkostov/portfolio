window.onload = function () {
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;
  var prevButton = document.getElementById("prevBtn");
  var prevButtonWidth = prevButton.offsetWidth;

  document.getElementById("nextBtn").addEventListener("click", function () {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
    document.getElementById("carouselSlides").scrollLeft =
      slides[currentSlide].offsetLeft - prevButtonWidth;
  });

  document.getElementById("prevBtn").addEventListener("click", function () {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
    document.getElementById("carouselSlides").scrollLeft =
      slides[currentSlide].offsetLeft - prevButtonWidth;
  });
};
