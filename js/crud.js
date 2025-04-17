//C R U D

export function crearDato() {}

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
                card.querySelector('.card__description').textContent = producto.descripcion || 'Sin descripción.';

                const boton = card.querySelector('.card__button');
                boton.addEventListener('click', () => {
                    console.log(`Has clickeado: ${producto.nombre}`);
                });

                contenedor.appendChild(card);
            });
        })
        .catch((error) => console.log(error));
}

export function actualizarDatos() {}

export function eliminarDatos() {}
