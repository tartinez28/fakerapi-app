function favoritosPage() {
  const contenedor = document.getElementById("content");
  contenedor.innerHTML = "<h2>⭐ Tus Favoritos ⭐</h2><div id='listaFavoritos'></div>";

  const listaFavoritos = document.getElementById("listaFavoritos");
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  if (favoritos.length === 0) {
    listaFavoritos.innerHTML = "<p style='text-align:center;'>Aún no tienes favoritos ❤️</p>";
    return;
  }

  favoritos.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <h3>${item.firstname} ${item.lastname}</h3>
      <p>Email: ${item.email}</p>
      <button onclick="verDetalleFavorito(${index})">Ver Detalle</button>
      <button class="btn-eliminar" onclick="eliminarFavorito(${index})">🗑️ Eliminar</button>
    `;
    listaFavoritos.appendChild(div);
  });
}

function verDetalleFavorito(index) {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  const item = favoritos[index];
  const contenedor = document.getElementById("content");

  contenedor.innerHTML = `
    <div class="item">
      <h2>${item.firstname} ${item.lastname}</h2>
      <p><strong>Email:</strong> ${item.email}</p>
      <button onclick="favoritosPage()">⬅️ Volver</button>
    </div>
  `;
}

function eliminarFavorito(index) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  const eliminado = favoritos.splice(index, 1); // eliminar del arreglo
  localStorage.setItem("favoritos", JSON.stringify(favoritos)); // guardar cambios

  alert(`Eliminaste a ${eliminado[0].firstname} de tus favoritos ❤️‍🔥`);
  favoritosPage(); // refrescar lista
}
