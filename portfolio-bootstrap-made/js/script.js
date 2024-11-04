var loader = document.getElementById("preloader");

window.addEventListener("load", ()=>{
  loader.classList.add("display-load");
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: false,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


//hamburger menu
// document.querySelector('.menu').addEventListener('click', function() {
//   this.classList.toggle('open');
// });

//hamburger menu 3
let header_aside = document.getElementById("header-aside");
document.querySelector('.openbtn').addEventListener('click', function() {
  this.classList.toggle('active');
  header_aside.classList.toggle('active');
});


//count up js
let valueDisplays = document.querySelectorAll(".num");
let interval = 500;

// console.log(valueDisplays)

valueDisplays.forEach(valueDisplays => {
  let startVal = 0;
  let endVal = parseInt(valueDisplays.getAttribute("data-val"));
  let duration = Math.floor(interval / endVal);
  let counter = setInterval( a =>{
    startVal ++;
    valueDisplays.textContent = startVal;
    if(startVal == endVal){
      clearInterval(counter);
    }
  },duration);
})

//loader

// back to top btn
let topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", ()=>{
  // let scrollY = window.scrollY;
  if(window.scrollY > 900){
    topBtn.classList.remove("d-none");
    topBtn.classList.add("d-block");
    topBtn.classList.add("animate__animated");
    topBtn.classList.add("animate__fadeInUp");
    topBtn.classList.remove("animate__fadeOutDown");
  }
  else{
    topBtn.classList.add("d-none");
    topBtn.classList.add("d-block");
    // topBtn.classList.add("animate__animated");
    topBtn.classList.remove("animate__fadeInUp");
    topBtn.classList.add("animate__fadeOutDown");
  }
})
