function agregarFavorito(index) {
  const persona = window._datos[index];
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  favoritos.push(persona);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  alert("Agregado a favoritos ✅");
}

function favoritosPage() {
  const contenedor = document.getElementById("content");
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  contenedor.innerHTML = "<h2>Favoritos</h2>";

  favoritos.forEach((item) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `<h3>${item.firstname} ${item.lastname}</h3><p>${item.email}</p>`;
    contenedor.appendChild(div);
  });
}