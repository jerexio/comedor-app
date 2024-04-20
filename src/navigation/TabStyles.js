import { StyleSheet } from "react-native";
import { height } from "../consts/consts";

const TabStyles = StyleSheet.create({
    tabBarLabelStyle: {
        paddingBottom: 5,
        fontSize: 12,
        fontWeight: '500'
    },
    tabBarStyle: {
        display: 'flex',
        height: height*8/100,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    tabBarActiveColor: '#dc8c13',
    tabBarInactiveColor: '#5e7c68',
});

export default TabStyles;