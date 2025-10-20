function verDetalle(index) {
  const persona = window._datos[index];
  const contenedor = document.getElementById("content");

  contenedor.innerHTML = `
    <h2>Detalle de Persona</h2>
    <div class="item">
      <h3>${persona.firstname} ${persona.lastname}</h3>
      <p><strong>Email:</strong> ${persona.email}</p>
      <p><strong>Dirección:</strong> ${persona.address.street}, ${persona.address.city}</p>
      <p><strong>Teléfono:</strong> ${persona.phone}</p>
      <div style="margin-top: 15px; display: flex; gap: 10px; justify-content: center;">
        <button onclick="agregarFavoritoPorObjeto(${index})">❤️ Agregar a Favoritos</button>
        <button onclick="homePage()" style="background-color:#6c757d;">⬅️ Volver</button>
      </div>
    </div>
  `;
}
