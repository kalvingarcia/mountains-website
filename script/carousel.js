let slide_index = 1;
showSlides(slide_index);

function moveSlides(num) {
    showSlides(slide_index += num);
}

function currentSlide(num) {
    showSlides(slide_index = num);
}

function showSlides(num) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if(num > slides.length) {
        slide_index = 1;
    }
    if(num < 1) {
        slide_index = slides.length;
    }

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot_active", "");
    }

    slides[slide_index - 1].style.display = "block";
    dots[slide_index - 1].className += " dot_active";
}