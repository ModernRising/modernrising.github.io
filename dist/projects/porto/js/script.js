
window.addEventListener("DOMContentLoaded", () => {
  $(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        speed: 800,
        draggable: false,
        rows: 2,
        slidesPerRow:2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows:false,
                slidesPerRow:1,
              }
            }
        ]
            
    });
    $('a[href*="#"]').on('click', function() {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
      return false;
    });
  });

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".banner__menu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("banner__menu_active");
});

});

