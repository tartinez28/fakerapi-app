async function homePage() {
  const contenedor = document.getElementById("content");
  contenedor.innerHTML = `
    <h2>Lista de Personas</h2>
    <div class="busqueda">
      <input type="text" id="buscador" placeholder="Buscar por nombre...">
      <select id="filtro">
        <option value="todos">Todos</option>
        <option value="gmail">Solo Gmail</option>
        <option value="empresa">Solo empresa</option>
      </select>
    </div>
    <div id='lista'></div>
  `;

  const lista = document.getElementById("lista");
  const datos = await obtenerDatos();
  window._datos = datos;

  function renderizarLista(filtrados) {
    lista.innerHTML = "";
    filtrados.forEach((item, index) => {
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
  }

  renderizarLista(datos);

  // 🔍 Buscador
  document.getElementById("buscador").addEventListener("input", (e) => {
    const texto = e.target.value.toLowerCase();
    const filtrados = datos.filter(
      p => p.firstname.toLowerCase().includes(texto) || p.lastname.toLowerCase().includes(texto)
    );
    renderizarLista(filtrados);
  });

  // 🔽 Filtro
  document.getElementById("filtro").addEventListener("change", (e) => {
    const valor = e.target.value;
    let filtrados = datos;
    if (valor === "gmail") filtrados = datos.filter(p => p.email.includes("gmail"));
    if (valor === "empresa") filtrados = datos.filter(p => p.email.includes("company"));
    renderizarLista(filtrados);
  });
}

function agregarFavorito(index) {
  const persona = window._datos[index];
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  const existe = favoritos.some(f => f.email === persona.email);
  if (!existe) {
    favoritos.push(persona);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    alert(`Agregado a favoritos ❤️`);
  } else {
    alert("Ya está en favoritos!");
  }
}
