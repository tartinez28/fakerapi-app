async function homePage() {
  const contenedor = document.getElementById("content");
  contenedor.innerHTML = "<h2>Lista de Personas</h2><div id='lista'></div>";

  const lista = document.getElementById("lista");
  const datos = await obtenerDatos();

  datos.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <h3>${item.firstname} ${item.lastname}</h3>
      <p>Email: ${item.email}</p>
      <button onclick="verDetalle(${index})">Ver Detalle</button>
      <button onclick="agregarFavorito(${index})">❤️ Favorito</button>
    `;
    lista.appendChild(div);
  });

  window._datos = datos;
}
