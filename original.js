function originalPage() {
  const contenedor = document.getElementById("content");
  contenedor.innerHTML = `
    <h2>Versión Original</h2>
    <div class="item">
      <p>Esta pestaña puede mostrar el contenido original de la API o una prueba especial.</p>
      <p>Ejemplo de endpoint usado:</p>
      <code>https://fakerapi.it/api/v1/users?_quantity=10</code>
    </div>
  `;
}
