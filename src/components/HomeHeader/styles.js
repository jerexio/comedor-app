import { StyleSheet } from "react-native";
import { BACKGROUND_COLOR, WHITE } from "../../consts/consts";

export const HeaderStyle = StyleSheet.create({
    headerBox: {
        backgroundColor: WHITE,
        padding: 10,
        paddingTop: 30
    },
    containerButtonsBox: {
        backgroundColor: WHITE,
        width: '100%',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        marginTop: -15,
        padding: 0,
    },
    buttonsBox: {
        flexDirection: "row",
        width: '100%',
        padding: "0%"
    },
    item: {
        width: "33%",
        borderBottomWidth: 3,
        padding: 5,
        marginVertical: 10,
        borderRadius: 100,
        borderBottomColor: BACKGROUND_COLOR,
        alignItems: "center"
    },
    itemNotSelected: {
        borderColor: "transparent"
    },
    text: {
        fontSize: 15,
        fontWeight: '400'
    }
});