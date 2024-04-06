import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get("window");

const modalWidth = width*95/100
const modalHeight = height*95/100;

const ModalFoodStyle = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
    },
    modalContainer: {
        backgroundColor: "#000",
        marginHorizontal: 10,
        marginTop: 14,
        borderRadius: 20,
        borderColor: "#00a5ef",
        borderWidth: 3,
        width: modalWidth,
        height: modalHeight
    },
    image: {
        width: "100%",
        height: "80%",
        borderRadius: 20,
        position: "absolute",
        opacity: 0.35
    },
    upperRow: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-around",
    },
    price: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 20,
        padding: 5,
        textAlign: "center"
    },
    remainBox:{
        backgroundColor: "#13b10c",
        borderRadius: 10,
        marginTop: modalWidth*5/100,
        opacity: 1
    },
    remaining: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 20,
        padding: 5,
        textAlign: "center"
    },
    lowerRow: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: modalHeight*50/100
    },
    title: {
        color: 'white',
        fontSize: 30,
        lineHeight: 30,
        fontWeight: 'bold',
    },
    liked: {
        color: 'white',
        fontSize: 15,
        lineHeight: 15,
        marginTop: 20,
        marginHorizontal: 15
    },
    button: {
        backgroundColor: "#ff8c00",
        width: modalWidth*90/100,
        padding: 10,
        borderRadius: 20,
        marginTop: 10
    },
    buttonLocked: {
        backgroundColor: "#3c3c3c",
        width: modalWidth*90/100,
        padding: 10,
        borderRadius: 20,
        marginTop: 10
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
        marginTop: 20,
        marginHorizontal: 15
    }
});

export default ModalFoodStyle;