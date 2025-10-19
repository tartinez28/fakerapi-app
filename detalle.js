function verDetalle(index) {
  const persona = window._datos[index];
  const contenedor = document.getElementById("content");
  contenedor.innerHTML = `
    <h2>Detalle</h2>
    <p><strong>Nombre:</strong> ${persona.firstname} ${persona.lastname}</p>
    <p><strong>Email:</strong> ${persona.email}</p>
    <p><strong>Teléfono:</strong> ${persona.phone}</p>
    <button onclick="agregarFavorito(${index})">Agregar a Favoritos</button>
  `;
}