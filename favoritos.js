function agregarFavorito(index) {
  const persona = window._datos[index];
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  if (!favoritos.some(fav => fav.email === persona.email)) {
    favoritos.push(persona);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    alert("Añadido a favoritos ❤️");
  } else {
    alert("Ya está en favoritos");
  }
}

function favoritosPage() {
  const contenedor = document.getElementById("content");
  contenedor.innerHTML = "<h2>Favoritos</h2><div id='listaFav'></div>";

  const lista = document.getElementById("listaFav");
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  if (favoritos.length === 0) {
    lista.innerHTML = "<p>No hay favoritos aún.</p>";
    return;
  }

  favoritos.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <h3>${item.firstname} ${item.lastname}</h3>
      <p>${item.email}</p>
      <button onclick="eliminarFavorito(${index})">❌ Quitar</button>
    `;
    lista.appendChild(div);
  });
}

function eliminarFavorito(index) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  favoritos.splice(index, 1);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  favoritosPage();
}
