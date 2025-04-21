import { initSwiper, crearDato, leerDatos, actualizarDatos, eliminarDatos } from './crud.js';

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    initSwiper();
});

function initApp() {
    leerDatos();

    const toggleButton = document.getElementById('menuToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    if (toggleButton && navbarMenu) {
        toggleButton.addEventListener('click', () => {
            navbarMenu.classList.toggle('open');
        });
    } else {
        console.warn('No se encontró el menú o el botón del menú');
    }

    const closeButton = document.getElementById('menuClosed');
    if (closeButton && navbarMenu) {
        closeButton.addEventListener('click', () => {
            navbarMenu.classList.remove('open');
        });
    }
}
