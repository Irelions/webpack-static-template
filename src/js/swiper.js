var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    freeMode: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiperCard = new Swiper(".swiperCard", {
  slidesPerView: "auto",
  spaceBetween: 16,
  freeMode: false,
  pagination: {
    el: ".swiper-pagination-card",
    clickable: true,
  },
});
