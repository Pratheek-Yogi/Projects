const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let counter = 0;
const imageWidth = images[0].clientWidth;

// Function to display the image
function goToSlide() {
    slider.style.transform = `translateX(${-imageWidth * counter}px)`;
}

//Go to next image
function goNext() {
    counter++;
    if (counter >= images.length) {
        counter = 0;
    }
    goToSlide();
}

//Go to previous image
function goPrev() {
    counter--;
    if (counter < 0) {
        counter = images.length - 1;
    }
    goToSlide();
}

nextButton.addEventListener('click', goNext);
prevButton.addEventListener('click', goPrev);

// Automatic slideshow (optional)
setInterval(goNext, 3000);