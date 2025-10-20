async function buscadorPage() {
  const contenedor = document.getElementById("content");
  contenedor.innerHTML = `
    <h2>Buscador de Personas</h2>
    <input type="text" id="searchInput" placeholder="Buscar por nombre..." />
    <div id="lista"></div>
  `;

  const lista = document.getElementById("lista");
  const datos = await obtenerDatos();
  window._datos = datos;

  const renderLista = (filtro = "") => {
    lista.innerHTML = "";
    const filtrados = datos.filter(p =>
      `${p.firstname} ${p.lastname}`.toLowerCase().includes(filtro.toLowerCase())
    );

    filtrados.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `
        <h3>${item.firstname} ${item.lastname}</h3>
        <p>${item.email}</p>
        <button onclick="verDetalle(${index})">Ver Detalle</button>
      `;
      lista.appendChild(div);
    });
  };

  renderLista();
  document.getElementById("searchInput").addEventListener("input", e => {
    renderLista(e.target.value);
  });
}
