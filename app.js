const productosGrid = document.getElementById("productosGrid");

function renderizarProductos() {
  productosGrid.innerHTML = "";

  productos.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("producto-card");
    
    const precioTexto = prod.precio === 0 ? "Consultá" : `$${prod.precio}`;
    
    card.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}" class="producto-imagen">
      <div class="producto-info">
        <h3 class="producto-nombre">${prod.nombre}</h3>
        <p class="producto-precio">${precioTexto}</p>
      </div>
    `;
    productosGrid.appendChild(card);
  });
}

renderizarProductos();
