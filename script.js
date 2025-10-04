var swiper = new Swiper(".slide-content", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
    0:    { slidesPerView: 1, spaceBetween: 12 },
    600:  { slidesPerView: 2, spaceBetween: 16 },
    1400:  { slidesPerView: 3, spaceBetween: 24 }
  },
    });