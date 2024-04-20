import ModalFoodStyle from "./styles";
import { Image, Text, View, ScrollView, Pressable, Alert, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import BackButton from "../../components/BackButton/BackButton";
import useLocalStorage from "../../hooks/useLocalStorage";
import handleBuy from "../../services/handleBuy";
import { BOUGHT, BUY, LIKES_TEXT, LIKE_TEXT, NOTEXT, UNAVAILABLE } from "../../consts/consts";


const ModalFood = ({navigation, route}) => {
    const {id} = route.params;
    const {getItem} = useLocalStorage();
    const [infoFood, setInfoFood] = useState(getItem(id));
    const [reservas, setReservas] = useState(infoFood.reservas);
    const [buttonText, setButtonText] = useState();
    const [buttonStyle, setButtonStyle] = useState();
    const [disableButton, setDisableButton] = useState(infoFood.comprado);
    const [remaingStyle, setRemaingStyle] = useState();

    //Aqui se define todo lo que necesita hacer cuando hace la compra
    //Debe delegarse a un servicio para garantizar la seguridad
    const handlerBuyButton = () => {
        handleBuy(id);
        setButtonText(BOUGHT);
        setButtonStyle(ModalFoodStyle.buttonLocked);
        setDisableButton(true);
        setReservas(reservas-1);
        Alert.alert('Menu comprado', 'Tu compra se realizo correctamente', [{
            text: 'OK'
        }]);
    }

    const handlerPressBack = () => {
        navigation.goBack();
    }

    const showLiked =  infoFood.likes > 0 ?
            (infoFood.likes === 1? `${infoFood.likes}`+LIKE_TEXT :
                                    `${infoFood.likes}`+LIKES_TEXT) : NOTEXT;

    const getFood = (id) => {
        const food = getItem(id);
        setInfoFood(food);
        const comprado = food.comprado;
        const disponible = food.reservas > 0;
        setRemaingStyle(disponible ? ModalFoodStyle.remainBoxNotEmpty : ModalFoodStyle.remainBoxEmpty);
        setButtonText(comprado ? BOUGHT : 
                        disponible ? BUY : UNAVAILABLE);
        setButtonStyle(comprado || !disponible ? ModalFoodStyle.buttonLocked : ModalFoodStyle.buttonUnlocked);
        setDisableButton(comprado || !disponible);
    }

    useEffect(() => {
        getFood(id)
    }, []);
    
    return(
        <View style={ModalFoodStyle.modalContainer}>
            <Image
                style={ModalFoodStyle.imageBackground}
                resizeMode="cover"
                loadingIndicatorSource={require("../../../assets/loading.gif")}
                src={infoFood.foto}
            />
            <BackButton pressAction={handlerPressBack}/>
            <View style={ModalFoodStyle.upperRow}>
                <View style={ModalFoodStyle.upperCol}>
                    <Text style={ModalFoodStyle.price}>Precio: {infoFood.precio}</Text>
                    <Text style={ModalFoodStyle.price}>Precio Carnet: {infoFood.precioCarnet}</Text>
                </View>
                <Text style={[ModalFoodStyle.remainBox, ModalFoodStyle.remaining, remaingStyle]}>{reservas} Restantes</Text>
            </View>
            <Image
                style={ModalFoodStyle.imageView}
                resizeMode="cover"
                loadingIndicatorSource={require("../../../assets/loading.gif")}
                src={infoFood.foto}
            />
            <View style={ModalFoodStyle.lowerCol}>
                <Text style={ModalFoodStyle.title}>{infoFood.nombre}</Text>
                {showLiked && <Text style={ModalFoodStyle.liked}>{showLiked}</Text>}
                <Pressable style={[ModalFoodStyle.button, buttonStyle]} onPress={handlerBuyButton} disabled={disableButton}>
                    <Text style={ModalFoodStyle.buttonText}>{buttonText}</Text>
                </Pressable>
            </View>
            <ScrollView>
                <Text style={ModalFoodStyle.description}>{infoFood.ingredientes}</Text>
            </ScrollView>
        </View>
    );
};

export default ModalFood;