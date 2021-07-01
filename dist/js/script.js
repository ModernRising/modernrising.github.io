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
