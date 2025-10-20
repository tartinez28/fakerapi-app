function verDetalle(index) {
  const persona = window._datos[index];
  const contenedor = document.getElementById("content");

  contenedor.innerHTML = `
    <h2>Detalle de ${persona.firstname}</h2>
    <div class="item">
      <p><strong>Nombre:</strong> ${persona.firstname} ${persona.lastname}</p>
      <p><strong>Email:</strong> ${persona.email}</p>
      <p><strong>Teléfono:</strong> ${persona.phone}</p>
      <p><strong>Dirección:</strong> ${persona.address.city}</p>
      <button onclick="agregarFavorito(${index})">Agregar a Favoritos</button>
      <button onclick="homePage()">Volver</button>
    </div>
  `;
}
