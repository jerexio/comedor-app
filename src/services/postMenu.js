import {API_URL} from '@env';

export const addPost = async (menuNuevo) => {
  const url = API_URL;
  // Enviar los datos al backend
  console.log(menuNuevo);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(menuNuevo)
    });

    const result = await response.json();
    console.log(result); // Muestra la respuesta del backend en la consola
  } catch (error) {
    console.error("Error al enviar los datos al backend:", error);
  }
};