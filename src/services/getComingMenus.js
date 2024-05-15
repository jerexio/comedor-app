/**
 * Funcion para obtener paginas de los proximos menus
 * @param url --> URL a hacer fetch 
 * @returns 
 */
export const getComingMenus = async (url) => {
    const response = await fetch(url);
    const menuRes = await response.json();
    return menuRes;
};