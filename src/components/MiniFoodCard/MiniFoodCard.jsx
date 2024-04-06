import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { MiniCardStyle } from "./style";
import { memo, useEffect, useState } from "react";

const MiniFoodCard = ({subMenu}) => {

    const [style, setStyle] = useState(MiniCardStyle.textBox | MiniCardStyle.largeTextBox);

    const adjustText = () => {
        const newStyle = String(subMenu.nombre).length < 80 ? MiniCardStyle.textBox : MiniCardStyle.largeTextBox;
        setStyle(newStyle);
    };

    useEffect(() => adjustText(), []);

    return(
        <View style={MiniCardStyle.box}>
            <Image
                style={MiniCardStyle.image}
                resizeMode="cover"
                loadingIndicatorSource={require("../../../assets/loading.gif")}
                src={subMenu.foto}
            />
            <View style={style}>
                <Text style={MiniCardStyle.text}>{subMenu.nombre}</Text>
            </View>
        </View>
    );
}

export default MiniFoodCard;