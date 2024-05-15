import { StyleSheet } from "react-native";
import { BACKGROUND_COLOR, WHITE } from "../../consts/consts";

const MenuComingStyle = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        backgroundColor: BACKGROUND_COLOR
    },
    text: {
        fontSize: 32,
        fontWeight: "bold",
        backgroundColor: WHITE,
        padding: 10,
        borderRadius: 15,
        marginVertical: 15,
        elevation: 8
    }
});
export default MenuComingStyle;