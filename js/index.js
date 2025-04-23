//C R U D

export function leerDatos() {
    const contenedor = document.querySelector('.swiper-wrapper');
    const template = contenedor.querySelector('.card__article');
    fetch('../data/productos.json')
        .then((response) => response.json())
        .then((data) => {
            contenedor.innerHTML = '';
            data.forEach((producto) => {
                const card = template.cloneNode(true);
                card.style.display = 'block';
                card.querySelector('.card__img').src = `../assets/productos/${producto.image}.jpg`;
                card.querySelector('.card__img').alt = producto.nombre;
                card.querySelector('.card__name').textContent = producto.nombre;
                //card.querySelector('.card__description').textContent = producto.descripcion || 'Sin descripción.';
                card.querySelector('.card__price').textContent = `$${producto.precio} MXN`;
                const boton = card.querySelector('.card__button');
                boton.addEventListener('click', () => {
                    // Muestra el modal activando el checkbox
                    document.getElementById('products__btn-modal').checked = true;

                    // Inserta los datos del producto en el modal
                    document.getElementById('modal-title').textContent = producto.nombre;
                    document.getElementById('modal-image').src = `../assets/productos/${producto.image}.jpg`;
                    document.getElementById('modal-description').textContent = producto.descripcion || 'Sin descripción.';
                    document.getElementById('modal-price').textContent = `$${producto.precio} MXN`;

                    // Acción del botón Agregar al carrito
                    const addToCartBtn = document.getElementById('modal-add-cart');
                    addToCartBtn.onclick = () => {
                        // Obtener el carrito actual desde localStorage o inicializar uno nuevo
                        let cart = JSON.parse(localStorage.getItem('cart')) || {};

                        // Si el producto ya está en el carrito, incrementa su cantidad
                        if (cart[producto.nombre]) {
                            cart[producto.nombre].cantidad += 1;
                        } else {
                            // Si no está, lo agregas con cantidad 1
                            cart[producto.nombre] = {
                                precio: producto.precio,
                                cantidad: 1,
                            };
                        }

                        // Guardar de nuevo el carrito en localStorage
                        localStorage.setItem('cart', JSON.stringify(cart));

                        alert(`"${producto.nombre}" agregado al carrito`);
                        document.getElementById('products__btn-modal').checked = false;

                        location.reload();
                    };
                });
                contenedor.appendChild(card);
            });
        })
        .catch((error) => console.log(error));
}

export function showCartNumber() {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    let total = 0;

    // Sumar la cantidad total de productos
    for (let producto in cart) {
        total += cart[producto].cantidad;
    }

    // Mostrar en el span
    document.getElementById('navbar__cart-length').textContent = total;
}

export function initSwiper() {
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
