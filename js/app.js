import { showCartNumber, initSwiper, leerDatos } from './index.js';

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    initSwiper();
    showCartNumber();
});

function initApp() {
    leerDatos();
    setupNavbarToggle();
    setupMenuClose();
    setupRangeButton();
    startTypewriter();
    setupViewAllProductsButton();
}

// BOTONES
// 🧭 Toggle menú
function setupNavbarToggle() {
    const toggleButton = document.getElementById('menuToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    if (toggleButton && navbarMenu) {
        toggleButton.addEventListener('click', () => {
            navbarMenu.classList.toggle('open');
        });
    } else {
        console.warn('No se encontró el menú o el botón del menú');
    }
}

// ❌ Cerrar menú
function setupMenuClose() {
    const closeButton = document.getElementById('menuClosed');
    const navbarMenu = document.getElementById('navbarMenu');

    if (closeButton && navbarMenu) {
        closeButton.addEventListener('click', () => {
            navbarMenu.classList.remove('open');
        });
    }
}

// 🎯 Botón rango
function setupRangeButton() {
    const rangeButton = document.getElementById('range');
    if (rangeButton) {
        rangeButton.addEventListener('click', () => {
            alert('Hola');
        });
    }
}

// 🔄 Botón para ver todos los productos
function setupViewAllProductsButton() {
    const showAllProducts = document.getElementById('products__all');
    if (showAllProducts) {
        showAllProducts.onclick = () => {
            window.location.href = '../views/all-products.html';
        };
    }
}

// 📝 Efecto máquina de escribir
function startTypewriter() {
    const text = 'Hola, soy Fany, vendedora Natura';
    const typewriter = document.getElementById('typewriter-text');

    if (!typewriter) return;

    let i = 0;
    function type() {
        if (i < text.length) {
            typewriter.textContent += text.charAt(i);
            i++;
            setTimeout(type, 55);
        }
    }
    type();
}
