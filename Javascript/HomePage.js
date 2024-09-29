const slideshowImages = document.querySelectorAll(".slideshow img");
let currentSlide = 0;

function showSlide() {
  
  slideshowImages.forEach((img) => {
    img.style.display = "none";
  });

  
  slideshowImages[currentSlide].style.display = "block";

  
  currentSlide++;
  
  if (currentSlide >= slideshowImages.length) {
    currentSlide = 0; 
  }

 
  setTimeout(showSlide, 5000);
}

showSlide();
var countdownDate = new Date("2023-06-30T18:00:00").getTime();


var countdown = setInterval(function() {
  
  var now = new Date().getTime();

  
  var timeRemaining = countdownDate - now;

  
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  
  document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  
  if (timeRemaining < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "Countdown Finished";
  }
}, 1000);

const overlay = document.querySelector('.Delay');
const overlayContent = document.querySelector('.Delay');

overlay.addEventListener('mouseenter', () => {
  overlayContent.classList.add('active');
});

overlay.addEventListener('mouseleave', () => {
  overlayContent.classList.remove('active');
});



const overlaya = document.querySelector('.overlay2');
const overlayContentt = document.querySelector('.overlay2');

overlaya.addEventListener('mouseenter', () => {
  overlayContentt.classList.add('active');
});

overlaya.addEventListener('mouseleave', () => {
  overlayContentt.classList.remove('active');
});