import { Dimensions, StyleSheet } from "react-native";
import { width } from "../../consts/consts";

const {height} = Dimensions.get("window");

export const HomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dc8c13'
    },
    item:{
        height: "100%",
        width: "100%",
    },
    dotContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height*1.5/100
    },
    dotIndicator:{
        backgroundColor: '#8c8c8c',
        height: 10,
        width: 10,
        borderRadius: 100,
        marginHorizontal: 6
    },
    dotActive:{
        backgroundColor: '#77dd77',
        height: 13,
        width: 13,
        borderRadius: 100,
        marginHorizontal: 6
    },
    emptyList: {
        height: height*13/100,
        width: width*90/100,
        fontSize: 32,
        fontWeight: "bold",
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 15,
        margin: 20,
        elevation: 8,
        textAlign: "center"
    }
});