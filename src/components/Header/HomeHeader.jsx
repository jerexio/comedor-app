import { Text, View, TouchableOpacity } from "react-native";

import {HeaderStyle} from "./styles"

//Debajo las constantes, luego mudarlas a un archivo
const views = ["Desayuno", "Almuerzo", "Merienda"];

export default function HomeHeader({currentPage, setCurrentPage}){
    //Cambia la vista seleccionado
    function handlePress(index){
        setCurrentPage(index);
    }

    return (
        <View>
            <Text style={[HeaderStyle.text, HeaderStyle.headerBox]}>Comedor</Text>
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