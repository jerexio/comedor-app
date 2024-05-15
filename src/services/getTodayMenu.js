import { API_URL } from '@env';

//Fetch para obtener el menu a renderizar
const getTodayMenu = async () => {
    const date = new Date().toISOString().substring(0, 10);
    const link = API_URL+date;
    const response = await fetch(link);
    const menuRes = await response.json();
    return menuRes;
};

export default getTodayMenu;