import useLocalStorage from "../hooks/useLocalStorage";

/**
 * Esta funcion maneja lo que ocurre cuando se realiza una
 * compra, solo para visualizarlo.
 * @param {*} id 
 */
const handleBuy = (id) => {
    const {getItem, setItem} = useLocalStorage();
    const food = getItem(id);
    food.reservas--;
    food.comprado = true;
    setItem(id, food);
};

export default handleBuy;