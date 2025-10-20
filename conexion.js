async function obtenerDatos() {
  try {
    const response = await fetch("https://fakerapi.it/api/v1/users?_locale=es_ES&_quantity=10");
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return [];
  }
}
