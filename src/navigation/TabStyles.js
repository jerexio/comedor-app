import { StyleSheet } from "react-native";
import { ACTIVE_TAB, BACKGROUND_COLOR, INACTIVE_TAB, height } from "../consts/consts";

const TabStyles = StyleSheet.create({
    tabBarLabelStyle: {
        paddingBottom: 5,
        fontSize: 12,
        fontWeight: '500'
    },
    tabBarStyle: {
        display: 'flex',
        height: height*8/100,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25
    },
    tabBarActiveColor: ACTIVE_TAB,
    tabBarInactiveColor: INACTIVE_TAB,
});

export default TabStyles;