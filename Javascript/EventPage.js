var slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("page");

    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}
