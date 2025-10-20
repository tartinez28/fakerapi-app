function informativaPage() {
  const contenedor = document.getElementById("content");
  contenedor.innerHTML = `
    <h2>Acerca de la Aplicación</h2>
    <div class="item">
      <p>Esta app consume datos desde <strong>FakerAPI</strong> para mostrar información falsa de usuarios.</p>
      <p>Desarrollada por <strong>Sara Giraldo</strong> como proyecto académico.</p>
    </div>
  `;
}
