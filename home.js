async function homePage() {
  const contenedor = document.getElementById("content");
  contenedor.innerHTML = "<h2>Lista de Personas</h2><div id='lista'></div>";

  const lista = document.getElementById("lista");

  try {
    const res = await fetch("https://fakerapi.it/api/v1/persons?_quantity=10");
    const data = await res.json();
    const personas = data.data;
    window._datos = personas; // Guardamos globalmente

    personas.forEach((persona, index) => {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `
        <h3>${persona.firstname} ${persona.lastname}</h3>
        <p>${persona.email}</p>
        <button onclick="verDetalle(${index})">Ver Detalle</button>
        <button onclick="agregarFavoritoPorObjeto(${index})">❤️ Favorito</button>
      `;
      lista.appendChild(div);
    });
  } catch (error) {
    console.error("Error al cargar datos:", error);
  }
}
