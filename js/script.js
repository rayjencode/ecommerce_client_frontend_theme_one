let swiper = new Swiper('.swiper-container', {
    slidesPerView: 2.1,
    spaceBetween: 3,
    breakpoints: {
        // when window width is >= 320px
        120: {
            slidesPerView: 1.3,
            spaceBetween: 3,
        },
        // when window width is >= 480px
        400: {
            slidesPerView: 2.2,
            spaceBetween: 3,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3.1,
            spaceBetween: 3,
        },

        900: {
            slidesPerView: 4.1,
            spaceBetween: 3,
        },

        1090: {
            slidesPerView: 5.1,
            spaceBetween: 3,
        },
        1400: {
            slidesPerView: 6.1,
            spaceBetween: 3,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

let swiper2 = new Swiper('.swiper-container-2', {
    slidesPerView: 2.1,
    spaceBetween: 3,
    breakpoints: {
        // when window width is >= 320px
        120: {
            slidesPerView: 1.3,
            spaceBetween: 3,
        },
        // when window width is >= 480px
        400: {
            slidesPerView: 1.3,
            spaceBetween: 3,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2.1,
            spaceBetween: 3,
        },

        1400: {
            slidesPerView: 3,
            spaceBetween: 3,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// const slides = document.querySelectorAll('.swiper-container');

// slides.forEach((x) => {
//     const dataNum = x.getAttribute('data-num');

//     if (dataNum === 'A') {
//         console.log(dataNum);
//         x = new Swiper('.swiper-container', {
//             slidesPerView: 2.1,
//             spaceBetween: 3,
//             breakpoints: {
//                 120: {
//                     slidesPerView: 1.3,
//                     spaceBetween: 3,
//                 },
//                 // when window width is >= 480px
//                 400: {
//                     slidesPerView: 2.2,
//                     spaceBetween: 3,
//                 },
//                 // when window width is >= 640px
//                 640: {
//                     slidesPerView: 3.1,
//                     spaceBetween: 3,
//                 },

//                 900: {
//                     slidesPerView: 4.1,
//                     spaceBetween: 3,
//                 },

//                 1090: {
//                     slidesPerView: 5.1,
//                     spaceBetween: 3,
//                 },
//                 1400: {
//                     slidesPerView: 6.1,
//                     spaceBetween: 3,
//                 },
//             },
//             navigation: {
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//             },
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true,
//             },
//         });
//     }

//     if (dataNum === 'B') {
//         console.log(dataNum);
//         x = new Swiper('.swiper-container', {
//             slidesPerView: 2.1,
//             spaceBetween: 3,
//             breakpoints: {
//                 // when window width is >= 320px
//                 120: {
//                     slidesPerView: 1.3,
//                     spaceBetween: 3,
//                 },
//                 // when window width is >= 480px
//                 400: {
//                     slidesPerView: 1.3,
//                     spaceBetween: 3,
//                 },
//                 // when window width is >= 640px
//                 640: {
//                     slidesPerView: 2.1,
//                     spaceBetween: 3,
//                 },

//                 1400: {
//                     slidesPerView: 3,
//                     spaceBetween: 3,
//                 },
//             },
//             navigation: {
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//             },
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true,
//             },
//         });
//     }
// });
