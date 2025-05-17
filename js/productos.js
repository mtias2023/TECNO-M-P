document.addEventListener('DOMContentLoaded', () => {
  fetch('data/productos.json')
    .then(res => res.json())
    .then(productos => mostrarProductos(productos));
});

function mostrarProductos(productos) {
  const contenedorCategorias = {
    "Electrodomésticos": document.getElementById('productos-electrodomesticos'),
    "Tecnología": document.getElementById('productos-tecnologia'),
    "Accesorios": document.getElementById('productos-accesorios')
  };

  const contenedorCelularesPorMarca = {
    "Samsung": document.getElementById("productos-celulares-samsung"),
    "Xiaomi": document.getElementById("productos-celulares-xiaomi"),
    "Motorola": document.getElementById("productos-celulares-motorola"),
    "Otros": document.getElementById("productos-celulares-otros")
  };

  productos.forEach(producto => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded shadow p-4';

    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" class="w-full h-76 object-cover mb-2 transition-transform transform hover:scale-105">
      <h3 class="text-xl font-bold">${producto.nombre}</h3>
      <p class="text-sm text-gray-600">${producto.descripcion}</p>
      <p class="text-lg font-bold text-[#0078ca]">${producto.precio}</p>
      <div class="mt-4 flex flex-row gap-2">
        <a href="https://wa.me/5491166008018?text=Hola,%20quiero%20consultar%20por%20el%20Samsung%20Galaxy%20${encodeURIComponent(producto.nombre)}"
           target="_blank"
           class="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition flex items-center justify-center gap-2">
          <i class="fab fa-whatsapp text-xl"></i> Consultar
        </a>
      </div>
    `;

    if (producto.categoria === "Celulares") {
      const marca = producto.marca?.trim() || "Otros";
      const contenedorMarca = contenedorCelularesPorMarca[marca] || contenedorCelularesPorMarca["Otros"];
      contenedorMarca.appendChild(card);
    } else if (contenedorCategorias[producto.categoria]) {
      contenedorCategorias[producto.categoria].appendChild(card);
    }
  });
}
