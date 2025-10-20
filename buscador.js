async function buscadorPage() {
  const contenedor = document.getElementById("content");
  contenedor.innerHTML = `
    <h2>Buscar Personas</h2>
    <input type="text" id="search" placeholder="Buscar por nombre o email...">
    <div id="resultados"></div>
  `;

  const input = document.getElementById("search");
  const resultados = document.getElementById("resultados");
  const datos = window._datos || await obtenerDatos();

  const mostrarResultados = (filtro = "") => {
    resultados.innerHTML = "";
    const filtrados = datos.filter(
      (item) =>
        item.firstname.toLowerCase().includes(filtro.toLowerCase()) ||
        item.lastname.toLowerCase().includes(filtro.toLowerCase()) ||
        item.email.toLowerCase().includes(filtro.toLowerCase())
    );

    filtrados.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `
        <h3>${item.firstname} ${item.lastname}</h3>
        <p>${item.email}</p>
        <button onclick="verDetalle(${index})">Ver Detalle</button>
      `;
      resultados.appendChild(div);
    });
  };

  input.addEventListener("input", (e) => mostrarResultados(e.target.value));
  mostrarResultados();
}
