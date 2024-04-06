import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get("window");

const cardWidth = width*90/100;
const cardHeight = height*40/100;

export const MiniCardStyle = StyleSheet.create({
    box: {
        width: cardWidth,
        height: cardHeight,
        borderRadius: 20,
        backgroundColor: "#000",
        marginBottom: 20
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        position: "absolute",
        opacity: 0.35
    },
    textBox: {
        marginHorizontal: 20,
        marginTop: cardHeight*75/100,
        overflow: "scroll",
    },
    largeTextBox: {
        marginHorizontal: 20,
        marginTop: cardHeight*60/100,
        overflow: "scroll",
    },
    text: {
        color: 'white',
        fontSize: 25,
        lineHeight: 25,
        fontWeight: 'bold',
    },
});