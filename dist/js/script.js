const hamburger = document.querySelector(".hamburger"),
      menu = document.querySelector(".menu"),
      closeElem = document.querySelector(".menu__close");
      overlay = document.querySelector(".menu__overlay");

hamburger.addEventListener("click", ()=> {
    menu.classList.add("active");
});

closeElem.addEventListener("click", ()=> {
    menu.classList.remove("active");
});

overlay.addEventListener("click", ()=> {
    menu.classList.remove("active");
});

window.addEventListener("keydown", (e) => {
    if (e.key == 'Escape') {
    menu.classList.remove('active');
    }
});

const counters = document.querySelectorAll(".skills__progress-percent"),
      lines = document.querySelectorAll(".skills__progress-line span");

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(document).ready(function(){
	$(".promo,  .menu__list").on("click","a", function (event) {
		event.preventDefault(); //опустошим стандартную обработку
		var id  = $(this).attr('href'), //заберем айдишник блока с параметром URL
			top = $(id).offset().top; //определим высоту от начала страницы до якоря
	$('body,html').animate({scrollTop: top}, 1000); //сделаем прокрутку за 1 с
	});

    $("form").submit(function(e) {
        e.preventDefault();
        $.ajax({
            type:"POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");


            $("form").trigger("reset");
        });
        return false;
    });
});
