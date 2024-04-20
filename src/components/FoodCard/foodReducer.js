import { HEART, NOHEART } from '../../consts/consts.js';
import handleLikeButton from '../../services/handleLikeButton.js';

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