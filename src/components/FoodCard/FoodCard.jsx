import { Image, ImageBackground, Pressable, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { FoodStyle } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome"
import { useState } from "react";

//Este componente representa una 'card' pero con un diseño especializado
export default function Food({ foodInfo }){
    const [heartState, setHeartState] = useState("heart-o");

    //Actualiza el estado del corazon si es presionado
    const update = () => {
        let newHeart = heartState.localeCompare("heart-o") == 0 ? "heart" : "heart-o";
        setHeartState(newHeart);
    }

    return(
        <TouchableWithoutFeedback>
            <View style={FoodStyle.card}>
                <Image
                    style={FoodStyle.image}
                    resizeMode="cover"
                    loadingIndicatorSource={require("../../../assets/loading.gif")}
                    src={foodInfo.foto}
                />
                <Text style={[FoodStyle.remainBox, FoodStyle.remaining]}>{foodInfo.reservas} Restantes</Text>
                <View style={FoodStyle.endRowBox}>
                    <Text numberOfLines={2} style={FoodStyle.text}>{foodInfo.nombre}</Text>
                    <Pressable onPress={update}>
                        <Icon name={heartState} style={FoodStyle.icon} />
                    </Pressable>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}