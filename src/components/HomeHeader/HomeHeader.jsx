import { Text, View, TouchableOpacity } from "react-native";

import {HeaderStyle} from "./styles"
import Header from "../Header/Header";

//Debajo las constantes, luego mudarlas a un archivo
const views = ["Desayuno", "Almuerzo", "Merienda"];

export default function HomeHeader({currentPage, setCurrentPage}){
    //Cambia la vista seleccionado
    function handlePress(index){
        setCurrentPage(index);
    }

    return (
        <View>
            <Header style={HeaderStyle.headerBox} title={"Comedor"}/>
            <View style={HeaderStyle.containerButtonsBox}>
                <View style={HeaderStyle.buttonsBox}>
                {views.map((item, index) => (
                    <TouchableOpacity
                    key={index}
                    onPress={() => handlePress(index)}
                    style={[HeaderStyle.item, currentPage !== index && {borderColor: "transparent"}]}>
                        <Text>{item}</Text>
                    </TouchableOpacity>
                ))}
                </View>
            </View>
        </View>
    );
}