import {API_URL} from '@env';

/**
 * Funcion que realiza el POST del menu al backend
 * @param menuNuevo 
 * @returns 
 */
export const addPost = async (menuNuevo) => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(menuNuevo)
    });
    let msg = await response.status;
   return msg;
};