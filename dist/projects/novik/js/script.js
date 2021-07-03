window.addEventListener("DOMContentLoaded", () => {
  const toggleActive = function () {
    let link = document.querySelectorAll(".menu__link");
    for (var i = 0; i < link.length; i++) {
      link[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("menu__link_active");
        current[0].className = current[0].className.replace(" menu__link_active", "");
        this.className += " menu__link_active";
      });
    }
  };
 toggleActive();




  const hamburger = document.querySelector(".c-hamburger");
  const menu = document.querySelector(".menu");
  const menuItem = menu.querySelectorAll(".menu__item");
  
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("menu_active");

    menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('is-active');
          menu.classList.toggle('menu_active');
      });
  });
  });
});

//////////// smooth scroll //////////////

jQuery(document).ready(function($){
  $(document).on('click', '.menu li a', function() {
  var linkID = $(this).attr('href');
  $('html, body').animate({ 
    scrollTop: $(linkID).offset().top 
  }, 1200);
});


});

