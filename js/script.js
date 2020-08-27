var swiper = new Swiper('.swiper-container', {
    slidesPerView: 6.2,
    spaceBetween: 3,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2.2,
            spaceBetween: 3,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2.2,
            spaceBetween: 3,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4.2,
            spaceBetween: 3,
        },

        900: {
            slidesPerView: 5.2,
            spaceBetween: 3,
        },
        1400: {
            slidesPerView: 6.2,
            spaceBetween: 3,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
