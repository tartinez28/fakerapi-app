function agregarFavorito(index) {
  const persona = window._datos[index];
  const favoritos = window.sharedData.favoritos;

  const yaExiste = favoritos.some(p => p.email === persona.email);
  if (yaExiste) {
    alert("Ya está en favoritos.");
    return;
  }

  favoritos.push(persona);
  window.sharedData.setFavoritos(favoritos);
  alert(`${persona.firstname} fue agregado a favoritos.`);
}

function favoritosPage() {
  const contenedor = document.getElementById("content");
  const favoritos = window.sharedData.favoritos;

  contenedor.innerHTML = "<h2>Favoritos</h2>";

  if (favoritos.length === 0) {
    contenedor.innerHTML += "<p>No hay favoritos guardados.</p>";
    return;
  }

  favoritos.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <h3>${item.firstname} ${item.lastname}</h3>
      <p>${item.email}</p>
    `;
    contenedor.appendChild(div);
  });
}
