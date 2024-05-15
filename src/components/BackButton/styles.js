import { StyleSheet } from "react-native";
import { height, width } from "../../consts/consts";

const BackButtonStyle = StyleSheet.create({
    buttonContainer: {
        width: 50,
        height: 50,
        marginTop: height*5/100,
        marginLeft: width*5/100,
    },
});

export default BackButtonStyle;