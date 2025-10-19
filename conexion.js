async function obtenerDatos() {
  try {
    const response = await fetch("https://fakerapi.it/api/v1/persons?_quantity=10");
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return [];
  } 
}