import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";

const {width, height} = Dimensions.get("window");

const cardWidth = width - (width*10/100)
const cardHeight = height - (height*30/100);

export const FoodStyle = StyleSheet.create({
    card: {
        width: cardWidth,
        height: cardHeight,
        borderRadius: 20,
        marginTop: 30,
        marginHorizontal: 20,

        backgroundColor: "#000",
        shadowColor: "#000",
        elevation: 11,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        position: "absolute",
        opacity: 0.35
    },
    endRowBox: {
        marginHorizontal: 20,
        marginTop: cardHeight*70/100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    text: {
        color: 'white',
        fontSize: 25,
        lineHeight: 25,
        fontWeight: 'bold',
        width: cardWidth*70/100
    },
    icon: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: "center",
    },
    remainBox:{
        backgroundColor: "#13b10c",
        borderRadius: 10,
        marginTop: cardHeight*5/100,
        marginLeft: cardWidth*50/100,
        marginRight: cardWidth*5/100,
        opacity: 1
    },
    remaining: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 20,
        padding: 5
    }
});