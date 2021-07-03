"use strict";
window.addEventListener("DOMContentLoaded", () => {

 /////////////////////// Слайдер //////////////////////
  
  $(".slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 550,
    draggable: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          dots: true,
        }
      },  
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          dots: true,
        }
      }
    ]
  });
  /////////////////////////////////////////////


  /////////////////////// Переключатель блоков через табы //////////////////////
  
  $("[data-open-block").on("click", function () {
    const activeCls = "advantages__demo_active";
    $("[data-content]").removeClass(activeCls);
    $(`[data-content="${$(this).data("open-block")}"`).addClass(activeCls);
  });
  
  /////////////////////////////////////////////


  /////////////////////// Плавный скролл //////////////////////

  $(document).on('click', '#sales-link', function() {
    var linkID = $(this).attr('href');
    $('html, body').animate({ 
      scrollTop: $(linkID).offset().top 
    }, 1200);
  });

  ///////////////////////////////////////////////////////////
  

  /////////////////////// Переключение активного таба //////////////////////
  
  const toggleActive = function () {
    let btns = document.querySelectorAll(".btn__choice");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("btn__choice_active");
        current[0].className = current[0].className.replace(
          " btn__choice_active", ""
        );
        this.className += " btn__choice_active";
      });
    }
  };

  ///////////////////////////////////////////////////////////

  
    /////////////////////// Анимация сдвигов ботинков //////////////////////

  const initialState = [
    { bottom: "35px", left: "-81px", right: "-130px" },
    {
      bottom: "34px",
      left: "-39px",
      right: "230px",
    },
  ];
  const initialStateSecond = [
    { bottom: "-18px", left: "-109px", right: "250px" },
    {
      bottom: "35px",
      left: "-81px",
      right: "-80px",
    },
  ];
  
  const copyInitialState = [].concat(initialState).reverse();
  const copyinitialStateSecond = [].concat(initialStateSecond).reverse();
  
  const slides = document.querySelectorAll(".slide");
  
  let shoes1 = document.querySelector(".products__shoes-1");
  let shoes2 = document.querySelector(".products__shoes-2");
  const title = document.querySelector(".products__title");
  
  let isPlay = false;
  
  function changeShoes(arrSlides, flag) {
    arrSlides.forEach((element) => {
      element.addEventListener("click", () => {
        if (flag) {
          animationSlide(shoes1, copyInitialState);
          animationSlide(shoes2, copyinitialStateSecond);
          title.textContent = "BLACK SHOES";
  
          flag = false;
        } else {
          animationSlide(shoes1, initialState);
          animationSlide(shoes2, initialStateSecond);
          flag = true;
          title.textContent = "RED SHOES";
        }
      });
    });
  }
  
  function animationSlide(shoes, state) {
    shoes.animate(state, {
      duration: 1500,
      iterations: 1,
      fill: "forwards",
    });
  }

  ///////////////////////////////////////////////////////////////////////
  

  /////////////////////// Переключения галлереи //////////////////////
  
  const slideLeft = document.querySelector(".slide");
  const slideRight = document.querySelector(".slide_right");
  
  const toggleImages = function() {
    const productsImages = document.querySelectorAll(".products__images");
    for (let i = 0; i < productsImages.length; i++) {
      slideRight.addEventListener("click", () => {
        productsImages[i].classList.toggle("products__images_active");
      });
      slideLeft.addEventListener("click", () => {
        productsImages[i].classList.toggle("products__images_active");
      });
    }
  };

  

  ////////////////////////////////////////////////////////////////////////


  /////////////////////// Переключение угловых ботинков //////////////////////

  const toggleAsideImage = function() {
    const asideShoes = document.querySelectorAll(".products__shoes-aside");
    for (let i = 0; i < asideShoes.length; i++) {
      slideRight.addEventListener("click", ()=> {
        asideShoes[i].classList.toggle("products__shoes-aside_active");
      });
      slideLeft.addEventListener("click", ()=> {
        asideShoes[i].classList.toggle("products__shoes-aside_active");
      });
    }
  };
  
  

  ////////////////////////////////////////////////////////////////////////////


  /////////////////////// Переключение блоков через кнопку заказать//////////////////////
  
  const toggleProductsBlock = function() {
    const btnOrder = document.querySelector(".btn__order");
    const linkBack = document.querySelector(".link-back");
    const productsContainer = document.querySelectorAll(".products__col-2-container");
    for (let i = 0; i < productsContainer.length; i++) {
      btnOrder.addEventListener("click", () => {
        productsContainer[i].classList.toggle("products__col-2-container_active");
      });
      linkBack.addEventListener("click", (e) => {
        e.preventDefault();
        productsContainer[i].classList.toggle("products__col-2-container_active");
      });
    }
   
  };
  

  //////////////////////////////////////////////////////////////////////////////////////

  /////////////////////// Переключение блоков со спреем //////////////////////
  
  const toggleSpray = function() {
    const btnRight = document.querySelector(".arr_right");
    const btnLeft = document.querySelector(".arr_left");
    const sprayItem = document.querySelectorAll(".products__item");
    for (let i = 0; i < sprayItem.length; i++) {
      btnRight.addEventListener("click", () => {
        sprayItem[i].classList.toggle("products__item_active");
      });
      btnLeft.addEventListener("click", () => {
        sprayItem[i].classList.toggle("products__item_active");
      });
    }
  };
  



  toggleActive();
  changeShoes(slides, isPlay);
  toggleImages();
  toggleAsideImage();
  toggleProductsBlock();
  toggleSpray();
});



