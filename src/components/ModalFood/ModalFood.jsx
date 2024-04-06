import ModalFoodStyle from "./style";
import { Modal, Image, Text, View, ScrollView, Pressable, Alert } from "react-native";
import { useEffect, useState } from "react";

const ModalFood = ({stateModalVisible, infoFood, stateRemaing, stateLike}) => {
    const [buttonText, setButtonText] = useState("Comprar");
    const [buttonStyle, setButtonStyle] = useState(ModalFoodStyle.button);
    const [disableButton, setDisableButton] = useState(false);

    //Aqui se define todo lo que necesita hacer cuando hace la compra
    //Puede delegarse a un servicio para garantizar la seguridad
    const handlerButton = () => {
        stateRemaing.setRemaing(stateRemaing.remaing-1);
        setButtonText("Comprado");
        setButtonStyle(ModalFoodStyle.buttonLocked);
        setDisableButton(true);
        Alert.alert('Menu comprado', 'Tu compra se realizo correctamente', [{
            text: 'OK'
        }]);
    }

    const showLiked =  stateLike.liked > 0 ?
            (stateLike.liked === 1? `${stateLike.liked} persona indico que le gusto` :
                                    `${stateLike.liked} personas indicaron que les gusto`) :
            "";
    
    return(
        <View style={stateModalVisible.modalVisible ? ModalFoodStyle.background : ModalFoodStyle.hide}>
            <Modal
                visible={stateModalVisible.modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => stateModalVisible.setModalVisible(false)}
            >
                <View style={ModalFoodStyle.modalContainer}>
                    <Image
                        style={ModalFoodStyle.image}
                        resizeMode="cover"
                        loadingIndicatorSource={require("../../../assets/loading.gif")}
                        src={infoFood.foto}
                    />
                    <View style={ModalFoodStyle.upperRow}>
                        <Text style={ModalFoodStyle.price}>Precio: {infoFood.precio}</Text>
                        <Text style={[ModalFoodStyle.remainBox, ModalFoodStyle.remaining]}>{stateRemaing.remaing} Restantes</Text>
                    </View>
                    <View style={ModalFoodStyle.lowerRow}>
                        <Text style={ModalFoodStyle.title}>{infoFood.nombre}</Text>
                        <Text style={ModalFoodStyle.liked}>{showLiked}</Text>
                        <Pressable style={buttonStyle} onPress={handlerButton} disabled={disableButton}>
                            <Text style={ModalFoodStyle.buttonText}>{buttonText}</Text>
                        </Pressable>
                    </View>
                    <ScrollView>
                        <Text style={ModalFoodStyle.description}>{infoFood.ingredientes}</Text>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
};

export default ModalFood;