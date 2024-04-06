import { Text } from "react-native";
import { View } from "react-native-animatable";
import MiniFoodCard from "../MiniFoodCard/MiniFoodCard";
import MenuComingStyle from "./styles";

const ComingMenu = ({menu}) => {
    return(
        <View style={MenuComingStyle.container}>
            <Text style={MenuComingStyle.text}>{menu.fecha.day} / {menu.fecha.month} / {menu.fecha.year}</Text>
            <Text style={MenuComingStyle.text}>Desayunos</Text>
            <MiniFoodCard subMenu={menu.desayunos[0]}/>
            <MiniFoodCard subMenu={menu.desayunos[1]}/>
            <Text style={MenuComingStyle.text}>Almuerzos</Text>
            <MiniFoodCard subMenu={menu.almuerzos[0]}/>
            <MiniFoodCard subMenu={menu.almuerzos[1]}/>
            <Text style={MenuComingStyle.text}>Meriendas</Text>
            <MiniFoodCard subMenu={menu.meriendas[0]}/>
            <MiniFoodCard subMenu={menu.meriendas[1]}/>
        </View>
    );
}

export default ComingMenu;