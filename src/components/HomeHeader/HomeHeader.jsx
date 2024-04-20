import { Text, View, TouchableOpacity } from "react-native";
import {HeaderStyle} from "./styles"
import Header from "../Header/Header";
import { HOME_TITLE, VIEWS } from "../../consts/consts";

export default function HomeHeader({currentPage, setCurrentPage}){
    //Cambia la vista seleccionada
    function handlePress(index){
        setCurrentPage(index);
    }

    return (
        <View>
            <Header style={HeaderStyle.headerBox} title={HOME_TITLE}/>
            <View style={HeaderStyle.containerButtonsBox}>
                <View style={HeaderStyle.buttonsBox}>
                {VIEWS.map((item, index) => (
                    <TouchableOpacity
                    key={index}
                    onPress={() => handlePress(index)}
                    style={[HeaderStyle.item, currentPage !== index && HeaderStyle.itemNotSelected]}>
                        <Text style={HeaderStyle.text}>{item}</Text>
                    </TouchableOpacity>
                ))}
                </View>
            </View>
        </View>
    );
}