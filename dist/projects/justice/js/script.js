



document.addEventListener('DOMContentLoaded', function(){
	const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("hamburger_active");
        menu.classList.toggle("menu_active");
    });
});

new WOW().init();