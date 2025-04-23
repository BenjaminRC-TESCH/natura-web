let cartItems = JSON.parse(localStorage.getItem('cart')) || {};

function renderCart() {
    const container = document.getElementById('cartItemsContainer');
    const summary = document.getElementById('summaryItems');
    const totalDisplay = document.getElementById('totalPrice');
    const productCount = document.getElementById('productCount');

    container.innerHTML = '';
    summary.innerHTML = '';

    let total = 0;
    let count = 0;

    for (let [name, item] of Object.entries(cartItems)) {
        let precio = parseFloat(item.precio);
        let cantidad = parseInt(item.cantidad);
        count += cantidad;
        total += precio * cantidad;

        // Cart Items
        const itemHTML = `
            <div class="cart__item">
                <div class="cart__item-content">
                
                <div class="cart__item-details">
                    <div class="cart__item-category">Categoría</div>
                    <div class="cart__item-name">${name}</div>
                </div>

                <div class="cart__item-controls">
                    <button onclick="removeOne('${name}')">−</button>
                    <p>${cantidad}</p>
                    <button onclick="addOne('${name}')">+</button>
                </div>

                <div class="cart__item-price">$${precio}</div>
                <div class="cart__item-unit">C/U</div>

                <div class="cart__item-remove">
                    <button class="cart__remove-btn" onclick="removeProduct('${name}')">🗑️</button>
                </div>

                </div>
            </div>
            `;

        container.innerHTML += itemHTML;

        // Summary Items
        const summaryHTML = `
            <div class="cart__summary-row">
                <div class="cart__summary-name">${cantidad} ${name}</div>
                <div class="cart__summary-price">$${(precio * cantidad).toFixed(2)}</div>
            </div>
        `;
        summary.innerHTML += summaryHTML;
    }

    productCount.textContent = `${count} productos`;
    totalDisplay.textContent = `$${total.toFixed(2)}`;
}

function addOne(name) {
    cartItems[name].cantidad++;
    updateCart();
}

function removeOne(name) {
    if (cartItems[name].cantidad > 1) {
        cartItems[name].cantidad--;
    } else {
        delete cartItems[name];
    }
    updateCart();
}

function removeProduct(name) {
    delete cartItems[name];
    updateCart();
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    renderCart();
}

function pagar() {
    alert('Procesando pago...');
    const countProducts = JSON.parse(localStorage.getItem('cart', JSON.stringify(cartItems)));
    for (const nombre in countProducts) {
        const { precio, cantidad } = countProducts[nombre];

        console.log(`Nombre: ${nombre} Precio: ${precio} Cantidad: ${cantidad}`);
    }
}

// Inicializar
renderCart();
