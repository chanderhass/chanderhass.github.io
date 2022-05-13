let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    menuBar.classList.remove('active');
}





let menuBar= document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    menuBar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}


window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    menuBar.classList.remove('active');
}


var swiper = new Swiper(".product-slider", {
    loop:true,
    autoplay: {
        delay: 6500,
        disableOnInteraction :false,
    },
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".product-slider", {
    loop:true,
    autoplay: {
        delay: 6500,
        disableOnInteraction :false,
    },
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".product-slider", {
    loop:true,
    autoplay: {
        delay: 6500,
        disableOnInteraction :false,
    },
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".review-slider", {
    loop:true,
    autoplay: {
        delay: 6500,
        disableOnInteraction :false,
    },
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });



  