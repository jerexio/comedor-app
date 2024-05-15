import { StyleSheet } from "react-native";
import {width, height, BLACK, WHITE, GREEN, RED} from '../../consts/consts'

const cardWidth = width*90/100;
const cardHeight = height*70/100;

export const FoodStyle = StyleSheet.create({
    card: {
        width: cardWidth,
        height: cardHeight,
        borderRadius: 20,
        marginTop: 25,
        marginHorizontal: width*5/100,
        backgroundColor: BLACK,
        shadowColor: BLACK,
        elevation: 11,
        shadowColor: BLACK,
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
        color: WHITE,
        fontSize: 25,
        lineHeight: 25,
        fontWeight: 'bold',
        width: cardWidth*70/100,
    },
    icon: {
        color: WHITE,
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: "center",
    },
    remainBox: {
        borderRadius: 10,
        marginTop: cardHeight*5/100,
        marginLeft: cardWidth*50/100,
        marginRight: cardWidth*5/100,
        opacity: 1
    },
    remainBoxNotEmpty: {
        backgroundColor: GREEN
    },
    remainBoxEmpty: {
        backgroundColor: RED,
    },
    remaining: {
        color: WHITE,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        padding: 5
    }
});