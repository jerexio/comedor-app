import { StyleSheet } from "react-native";

export const HeaderStyle = StyleSheet.create({
    headerBox: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        paddingTop: 30
    },
    containerButtonsBox: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
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
        borderBottomColor: "#d7c4a3",
        alignItems: "center"
    }
});