import { TIMES } from '../consts/consts.js';
import useLocalStorage from '../hooks/useLocalStorage.js';

/**
 * Funcion que organiza el almacenamiento del menu de hoy en el almacenamiento local
 * @param menus 
 */
const storeData = (menus) => {
    const {setItem, clearStorage} = useLocalStorage();
    clearStorage();
    TIMES.forEach((item) => {
        const foodSet = Object.values(menus[item]);
        foodSet.forEach((food) => {
            food.comprado = false;
            food.liked = false;
            setItem(food.id, food);
        });
    });
};

export default storeData;