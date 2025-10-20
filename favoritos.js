function obtenerFavoritos() {
  const favs = localStorage.getItem("favoritos");
  return favs ? JSON.parse(favs) : [];
}

function guardarFavoritos(favs) {
  localStorage.setItem("favoritos", JSON.stringify(favs));
}

// 🔥 Nuevo método: guarda por objeto real, no solo índice
function agregarFavoritoPorObjeto(index) {
  const persona = window._datos[index];
  let favoritos = obtenerFavoritos();

  const yaExiste = favoritos.some(fav => fav.email === persona.email);
  if (yaExiste) {
    alert("⚠️ Esta persona ya está en tus favoritos");
    return;
  }

  favoritos.push(persona);
  guardarFavoritos(favoritos);
  alert(`✅ ${persona.firstname} agregado a favoritos`);
}

function eliminarFavorito(email) {
  const favoritos = obtenerFavoritos().filter(fav => fav.email !== email);
  guardarFavoritos(favoritos);
  favoritosPage();
}

function favoritosPage() {
  const contenedor = document.getElementById("content");
  contenedor.innerHTML = "<h2>Favoritos</h2><div id='lista'></div>";

  const lista = document.getElementById("lista");
  const favoritos = obtenerFavoritos();

  if (favoritos.length === 0) {
    lista.innerHTML = "<p style='text-align:center;color:#777;'>No tienes favoritos aún.</p>";
    return;
  }

  favoritos.forEach(persona => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <h3>${persona.firstname} ${persona.lastname}</h3>
      <p>${persona.email}</p>
      <button onclick="eliminarFavorito('${persona.email}')" style="background-color:#dc3545;">Eliminar</button>
    `;
    lista.appendChild(div);
  });
}
