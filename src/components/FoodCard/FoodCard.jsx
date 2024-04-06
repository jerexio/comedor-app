import { Image, Modal, Pressable, Text, TouchableWithoutFeedback, View } from "react-native";
import { FoodStyle } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome"
import { useEffect, useState } from "react";
import ModalFood from "../ModalFood/ModalFood";

//Este componente representa una 'card' pero con un diseño especializado
export default function Food({ foodInfo }){
    const [heartState, setHeartState] = useState("heart-o");
    const [modalVisible, setModalVisible] = useState(false);
    const [remaing, setRemaing] = useState(foodInfo.reservas);
    const [liked, setLiked] = useState(foodInfo.likes);
 
    //Actualiza el estado del corazon si es presionado
    const update = () => {
        let newHeart = heartState.localeCompare("heart-o") == 0 ? "heart" : "heart-o";
        setHeartState(newHeart);
        setLiked(heartState.localeCompare("heart-o") == 0 ? liked+1 : liked-1);
    }

    return(
        <View>
            <ModalFood
                stateModalVisible= {{modalVisible, setModalVisible}}
                infoFood={foodInfo}
                stateRemaing={{remaing, setRemaing}}
                stateLike={{liked, setLiked}}
            />
            <TouchableWithoutFeedback onPress={()=>{setModalVisible(true)}}>
                <View style={FoodStyle.card}>
                    <Image
                        style={FoodStyle.image}
                        resizeMode="cover"
                        loadingIndicatorSource={require("../../../assets/loading.gif")}
                        src={foodInfo.foto}
                    />
                    <Text style={[FoodStyle.remainBox, FoodStyle.remaining]}>{remaing} Restantes</Text>
                    <View style={FoodStyle.endRowBox}>
                        <Text numberOfLines={2} style={FoodStyle.text}>{foodInfo.nombre}</Text>
                        <Pressable onPress={update}>
                            <Icon name={heartState} style={FoodStyle.icon} />
                        </Pressable>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}