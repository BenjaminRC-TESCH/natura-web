import { crearDato, leerDatos, actualizarDatos, eliminarDatos } from './crud.js';

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    initSwiper();
});

function initApp() {
    leerDatos();

    document.getElementById('range').addEventListener('click', (e) => {
        const myModal = new bootstrap.Modal(document.getElementById('modal-range'));
        myModal.show();
    });
}

function initSwiper() {
    new Swiper('.card__content', {
        loop: true,
        spaceBetween: 32,
        grabCursor: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            600: {
                slidesPerView: 2,
            },
            968: {
                slidesPerView: 3,
            },
        },
    });
}
