import { Text } from "react-native";
import { View } from "react-native-animatable";
import MiniFoodCard from "../MiniFoodCard/MiniFoodCard";
import MenuComingStyle from "./styles";

/**
 * Componente que renderiza cada menu para la screen ComingSoon/Proximas.
 * @param menu --> JSON a renderizar
 * @returns 
 */
const ComingMenu = ({menu}) => {
    return(
        <View style={MenuComingStyle.container}>
            <Text style={MenuComingStyle.text}>{menu.fecha.day} / {menu.fecha.month} / {menu.fecha.year}</Text>
            <Text style={MenuComingStyle.text}>Desayunos</Text>
            {menu.desayunos.map((item, index) => (
                <MiniFoodCard key={item.id} subMenu={item}/>
            ))}
            <Text style={MenuComingStyle.text}>Almuerzos</Text>
            {menu.almuerzos.map((item, index) => (
                <MiniFoodCard key={item.id} subMenu={item}/>
            ))}
            <Text style={MenuComingStyle.text}>Meriendas</Text>
            {menu.meriendas.map((item, index) => (
                <MiniFoodCard key={item.id} subMenu={item}/>
            ))}
        </View>
    );
}

export default ComingMenu;