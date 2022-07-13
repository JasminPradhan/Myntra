//function to add sticky navbar

const navlist = document.getElementsByClassName(".container");
const sticky = navlist.offsetTop;

window.addEventListener("scroll", function() {
    if (window.pageYOffset >= sticky) {
        navlist.classList.add("sticky");
    }
    else {
        navlist.classList.remove("sticky");
    }
})

//function to add image carousel


let slideIndex = 0;//for automatic slide display
let slideIndexCurrent = 0;//for manual slide display

const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

showSlides();//for automatic slide display

//manual 

function currentSlide(n) {
    //precautionary steps
    slideIndexCurrent = n;

    if (n > slides.length) { slideIndexCurrent = 1 }

    if (n < 0) { slideIndexCurrent = slides.length }

    // default value
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;//after clicking on button x the next slide be index x+1: this is automatic

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndexCurrent - 1].style.display = "block";
    dots[slideIndexCurrent - 1].className += " active";
    slideIndexCurrent++;
}



//auto 

function showSlides() {
    if (slideIndex > slides.length) { slideIndex = 1 }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 5000); // Change image every x seconds
}