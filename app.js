let carrito = [];

const productosGrid = document.getElementById("productosGrid");
const carritoBtn = document.getElementById("carritoBtn");
const carritoCount = document.getElementById("carritoCount");
const carritoModal = document.getElementById("carritoModal");
const cerrarModal = document.getElementById("cerrarModal");
const carritoItems = document.getElementById("carritoItems");
const totalCarrito = document.getElementById("totalCarrito");
const finalizarBtn = document.getElementById("finalizarBtn");

function renderizarProductos() {
  productosGrid.innerHTML = "";

  productos.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("producto-card");
    card.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}" class="producto-imagen">
      <div class="producto-info">
        <h3 class="producto-nombre">${prod.nombre}</h3>
        <p class="producto-precio">$${prod.precio}</p>
        <button class="agregar-btn" onclick="agregarAlCarrito('${prod.nombre}', ${parseFloat(prod.precio)})">Agregar</button>
      </div>
    `;
    productosGrid.appendChild(card);
  });
}

function agregarAlCarrito(nombre, precio) {
  const item = carrito.find(p => p.nombre === nombre);
  if (item) {
    item.cantidad++;
  } else {
    carrito.push({ nombre, precio, cantidad: 1 });
  }
  actualizarCarrito();
}

function restarUnidad(nombre) {
  const index = carrito.findIndex(item => item.nombre === nombre);
  if (index !== -1) {
    if (carrito[index].cantidad > 1) {
      carrito[index].cantidad--;
    } else {
      carrito.splice(index, 1);
    }
    actualizarCarrito();
  }
}

function eliminarProducto(nombre) {
  carrito = carrito.filter(item => item.nombre !== nombre);
  actualizarCarrito();
}

function actualizarCarrito() {
  carritoItems.innerHTML = "";
  let total = 0;

  carrito.forEach(item => {
    total += item.precio * item.cantidad;
    carritoItems.innerHTML += `
      <div class="carrito-item">
        <div class="item-info">
          <span class="item-nombre">${item.nombre}</span>
          <span class="item-precio">$${item.precio}</span>
        </div>
        <div class="item-acciones">
          <button class="cantidad-btn minus" onclick="restarUnidad('${item.nombre}')">−</button>
          <span class="item-cantidad">${item.cantidad}</span>
          <button class="cantidad-btn plus" onclick="agregarAlCarrito('${item.nombre}', ${item.precio})">+</button>
          <button class="eliminar-btn" onclick="eliminarProducto('${item.nombre}')" title="Eliminar">🗑️</button>
        </div>
        <div class="item-subtotal">$${(item.precio * item.cantidad).toFixed(2)}</div>
      </div>
    `;
  });

  totalCarrito.textContent = `$${total.toFixed(2)}`;
  carritoCount.textContent = carrito.reduce((sum, i) => sum + i.cantidad, 0);
}

function finalizarCompra() {
  if (carrito.length === 0) return;

  let mensaje = "¡Hola! Quiero hacer un pedido en Salón Jaro:%0A%0A";
  let total = 0;

  carrito.forEach(item => {
    mensaje += `• ${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}%0A`;
    total += item.precio * item.cantidad;
  });

  mensaje += `%0ATotal: $${total}`;
  const url = `https://wa.me/59895089122?text=${mensaje}`;
  window.open(url, "_blank");
}

carritoBtn.addEventListener("click", () => carritoModal.classList.add("active"));
cerrarModal.addEventListener("click", () => carritoModal.classList.remove("active"));
finalizarBtn.addEventListener("click", finalizarCompra);

renderizarProductos();