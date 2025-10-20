function verDetalle(index) {
  const persona = window._datos[index];
  const contenedor = document.getElementById("content");
  contenedor.innerHTML = `
    <h2>Detalle de la Persona</h2>
    <div class="item">
      <h3>${persona.firstname} ${persona.lastname}</h3>
      <p><b>Email:</b> ${persona.email}</p>
      <p><b>Teléfono:</b> ${persona.phone}</p>
      <p><b>Dirección:</b> ${persona.address.city}, ${persona.address.country}</p>
      <button onclick="agregarFavorito(${index})">❤️ Agregar a Favoritos</button>
      <button onclick="homePage()">⬅️ Volver</button>
    </div>
  `;
}
