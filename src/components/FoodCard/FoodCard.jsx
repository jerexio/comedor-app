import { Image, Pressable, Text, TouchableWithoutFeedback, View } from "react-native";
import { FoodStyle } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome"
import { useEffect, useReducer, useState } from "react";
import { useNavigation, useIsFocused } from '@react-navigation/native';
import foodReducer from "./foodReducer";
import useLocalStorage from "../../hooks/useLocalStorage";
import { HEART, MODAL_NAME, NOHEART } from "../../consts/consts";

//Este componente representa una 'card' pero con un diseño especializado
const FoodCard = ({ idFood }) => {
    const {getItem} = useLocalStorage();
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [food, setFood] = useState(getItem(idFood));
    const [heartState, setHeartState] = useState(food.liked ? HEART : NOHEART);
    const [remaingState, setRemaingState] = useState();
    const [objFood, dispatch] = useReducer(foodReducer, food);

    const getFood = () => {
        const foodObj = getItem(idFood);
        setFood(foodObj);
        setRemaingState(foodObj.reservas > 0 ? FoodStyle.remainBoxNotEmpty : FoodStyle.remainBoxEmpty);
    }
    
    useEffect(() => {
        getFood();
    }, [isFocused]);

    //Actualiza el estado del corazon si es presionado
    const handlePressHeart = () => {
        const newHeart = heartState.localeCompare(NOHEART) == 0 ? HEART : NOHEART;
        setHeartState(newHeart);
        dispatch({
            type: newHeart
        });
    }

    const handlePressCard = ()=>{
        navigation.navigate({
            name: MODAL_NAME,
            params:{ id: idFood }
        });
    }

    return(
        <View>
            {food &&
            <TouchableWithoutFeedback onPress={handlePressCard}>
                <View style={FoodStyle.card}>
                    <Image
                        style={FoodStyle.image}
                        resizeMode="cover"
                        loadingIndicatorSource={require("../../../assets/loading.gif")}
                        src={food.foto}
                    />
                    <Text style={[FoodStyle.remainBox, FoodStyle.remaining, remaingState]}>{food.reservas} Restantes</Text>
                    <View style={FoodStyle.endRowBox}>
                        <Text numberOfLines={2} style={FoodStyle.text}>{food.nombre}</Text>
                        <Pressable onPress={handlePressHeart}>
                            <Icon name={heartState} style={FoodStyle.icon} />
                        </Pressable>
                    </View>
                </View>
            </TouchableWithoutFeedback>}
        </View>
    );
}

export default FoodCard;