import useLocalStorage from "../hooks/useLocalStorage";

const handleLikeButton = (objFood, amount) => {
    const {setItem} = useLocalStorage();
    objFood.likes = objFood.likes + amount;
    objFood.liked = amount > 0 ? true : false;
    setItem(objFood.id, objFood);
};

export default handleLikeButton;