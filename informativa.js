function informativaPage() {
  const contenedor = document.getElementById("content");
  contenedor.innerHTML = `
    <h2>Acerca de la App</h2>
    <div class="item">
      <p><b>Nombre:</b> FakerAPI App</p>
      <p><b>Desarrolladora:</b> Sara Giraldo</p>
      <p><b>Descripción:</b> Aplicación web conectada a una API que muestra personas ficticias, permite buscar, ver detalles y guardar favoritos.</p>
      <p><b>Versión:</b> 1.0</p>
    </div>
  `;
}
