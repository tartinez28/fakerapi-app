async function obtenerDatos() {
  const response = await fetch("https://fakerapi.it/api/v1/users?_quantity=10");
  const data = await response.json();
  return data.data;
}
