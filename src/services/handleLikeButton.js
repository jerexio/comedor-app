import useLocalStorage from "../hooks/useLocalStorage";

/**
 * Maneja lo que ocurre cuando se presiona el corazon en un menu.
 * @param {} objFood 
 * @param {} amount 
 */
const handleLikeButton = (objFood, amount) => {
    const {setItem} = useLocalStorage();
    objFood.likes = objFood.likes + amount;
    objFood.liked = amount > 0 ? true : false;
    setItem(objFood.id, objFood);
};

export default handleLikeButton;