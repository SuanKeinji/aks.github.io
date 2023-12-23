'use strict';

     // First Like Button   
    var btnvar1 = document.getElementById('btnh1');
    var btnvar2 = document.getElementById('btnh2');
    var btnvar3 = document.getElementById('btnh3');
    var btnvar4 = document.getElementById('btnh4');
    var btnvar5 = document.getElementById('btnh5');
    


function Toggle1(){
         if (btnvar1.style.color =="blue") {
            btnvar1.style.color = "grey"
           
            console.log('unreacted');
         }
         else{
             btnvar1.style.color = "blue"
             
             console.log('reacted');
         }
}
function Toggle2(){
         if (btnvar2.style.color =="red") {
            btnvar2.style.color = "grey"
            console.log('unreacted')
         }
         else{
             btnvar2.style.color = "red"
             console.log('reacted');
             
         }
}
function Toggle3(){
         if (btnvar3.style.color =="yellow") {
            btnvar3.style.color = "grey"
            console.log('unreacted')
         }
         else{
             btnvar3.style.color = "yellow"
             
             console.log('reacted');
         }
}
function Toggle4(){
         if (btnvar4.style.color =="yellow") {
            btnvar4.style.color = "grey"
            console.log('unreacted');
         }
         else{
             btnvar4.style.color = "yellow"
             console.log('reacted');
             
         }
}
function Toggle5(){
         if (btnvar5.style.color =="red") {
            btnvar5.style.color = "grey"
            console.log('unreacted');

         }
         else{
             btnvar5.style.color = "red"
             console.log('reacted');
             
         }
}

/**
 * Add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * MOBILE NAVBAR TOGGLER
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);



/**
 * HEADER ANIMATION
 * When scrolled donw to 100px header will be active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * SLIDER
 */

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
  sliderContainer.style.transform = translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px);
}

/**
 * RESPONSIVE
 */
window.addEventListener("resize", function () {
  totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
  totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  moveSliderItem();
});
