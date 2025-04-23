function showAllProducts() {
    const contenedor = document.querySelector('.product__grid');
    const template = contenedor.querySelector('.product__card');
    fetch('../data/productos.json')
        .then((response) => response.json())
        .then((data) => {
            contenedor.innerHTML = '';
            data.forEach((producto) => {
                const card = template.cloneNode(true);
                card.style.display = 'block';
                card.querySelector('.product__img').src = `../assets/productos/${producto.image}.jpg`;
                card.querySelector('.product__img').alt = producto.nombre;
                card.querySelector('.product__name').textContent = producto.nombre;
                card.querySelector('.product__description').textContent = producto.descripcion || 'Sin descripción.';
                card.querySelector('.product__price').textContent = `$${producto.precio} MXN`;
                const boton = card.querySelector('.product__button');
                boton.addEventListener('click', () => {
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

                    location.reload();
                });
                contenedor.appendChild(card);
            });
        })
        .catch((error) => console.log(error));
}

function showCartNumber() {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    let total = 0;

    for (let producto in cart) {
        total += cart[producto].cantidad;
    }

    document.getElementById('navbar__cart-length').textContent = total;
}

showAllProducts();
showCartNumber();
