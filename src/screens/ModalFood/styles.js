import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get("window");

const modalWidth = width;
const modalHeight = height;

const ModalFoodStyle = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: "#000",
        width: modalWidth,
        height: modalHeight
    },
    imageBackground: {
        width: "100%",
        height: "100%",
        position: "absolute",
        opacity: 0.2
    },
    imageView: {
        width: "100%",
        height: modalHeight*30/100,
        borderRadius: 10
    },
    upperRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    upperCol: {
        flexDirection: "column",
        alignItems: "baseline",
        justifyContent: "space-around",
    },
    price: {
        color: "#FFF",
        fontWeight: "900",
        fontSize: 20,
        padding: 5,
        textAlign: "center",
    },
    remainBox:{
        borderRadius: 10,
        opacity: 1
    },
    remainBoxNotEmpty: {
        backgroundColor: "#13b10c"
    },
    remainBoxEmpty: {
        backgroundColor: "#ff0000",
    },
    remaining: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 20,
        padding: 5,
        textAlign: "center"
    },
    lowerCol: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        color: 'white',
        fontSize: 30,
        lineHeight: 30,
        fontWeight: 'bold',
        marginTop: 10
    },
    liked: {
        color: 'white',
        fontSize: 15,
        lineHeight: 15,
        marginTop: 15
    },
    button: {
        width: modalWidth*90/100,
        padding: 10,
        borderRadius: 20,
        marginVertical: 15
    },
    buttonUnlocked: {
        backgroundColor: "#ff8c00",
    },
    buttonLocked: {
        backgroundColor: "#5c5c5c"
    },
    buttonText: {
        color: '#000',
        fontSize: 20,
        lineHeight: 20,
        fontWeight: 'bold',
        textAlign: "center"
    },
    description: {
        color: 'white',
        fontSize: 20,
        lineHeight: 20,
        marginHorizontal: 15,
        textAlign: "center"
    }
});

export default ModalFoodStyle;