import { HEART, NOHEART } from '../../consts/consts.js';
import handleLikeButton from '../../services/handleLikeButton.js';

/**
 * Reducer utilizado para simplificar el comportamiento del componente,
 * y mantener el comportamiento del corazon en un unico lugar.
 * @param objFood --> Objeto a actualizar
 * @param action --> Accion a realizar
 * @returns 
 */
export default function foodReducer (objFood, action) {
    switch (action.type){
        case NOHEART: {
            handleLikeButton(objFood, -1);
            break;
        }
        case HEART: {
            handleLikeButton(objFood, 1);
            break;
        }  
        default: {
            throw new Error("Invalid option");
        }
    }
    return objFood;
}