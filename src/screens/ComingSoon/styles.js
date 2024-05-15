import { StyleSheet } from "react-native";
import { BACKGROUND_COLOR, WHITE } from "../../consts/consts";

const ComingStyle = StyleSheet.create({
    background: {
        backgroundColor: BACKGROUND_COLOR
    },
    headerBox: {
        backgroundColor: WHITE,
        padding: 20,
        paddingTop: 40,
        width: '100%',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    container: {
        marginBottom: 200
    },
    emptyList: {
        fontSize: 32,
        fontWeight: "bold",
        backgroundColor: WHITE,
        padding: 5,
        borderRadius: 15,
        margin: 20,
        elevation: 8,
        textAlign: "center"
    }
});

export default ComingStyle;