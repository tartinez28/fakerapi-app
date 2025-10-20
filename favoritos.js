function obtenerFavoritos() {
  const favs = localStorage.getItem("favoritos");
  return favs ? JSON.parse(favs) : [];
}

function guardarFavoritos(favs) {
  localStorage.setItem("favoritos", JSON.stringify(favs));
}

function agregarFavorito(index) {
  const persona = window._datos[index];
  let favoritos = obtenerFavoritos();

  if (!favoritos.some(fav => fav.email === persona.email)) {
    favoritos.push(persona);
    guardarFavoritos(favoritos);
    alert("✅ Persona agregada a favoritos");
  } else {
    alert("⚠️ Esta persona ya está en favoritos");
  }
}

function eliminarFavorito(email) {
  let favoritos = obtenerFavoritos().filter(fav => fav.email !== email);
  guardarFavoritos(favoritos);
  favoritosPage();
}

function favoritosPage() {
  const contenedor = document.getElementById("content");
  contenedor.innerHTML = "<h2>Personas Favoritas</h2><div id='lista'></div>";

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
      <p>Email: ${persona.email}</p>
      <button onclick="eliminarFavorito('${persona.email}')" style="background-color:#dc3545;">Eliminar</button>
    `;
    lista.appendChild(div);
  });
}
