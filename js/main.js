"use strict";

//Javascript for slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Slideshow next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Slides thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
//Function to show slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
let img = document.getElementById("productImg");
let modalImg = document.getElementById("productImg");
let captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

//Function to open shopping cart
function openCart() {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

//Function to show/hide hamburger menu on click
function hamburgerMenu() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}