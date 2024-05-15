import { Image, Text, View } from "react-native";
import { MiniCardStyle } from "./style";
import { useEffect, useState } from "react";
import { LOADING_GIF } from "../../consts/consts";

/**
 * Componente que renderiza cada 'card' en la screen ComingSoon/Proximas.
 * A partir de un submenu compuesto por una imagen y un titulo
 * crea una card para visualizarlo.
 * @param subMenu --> JSON
 * @returns 
 */
const MiniFoodCard = ({subMenu}) => {

    const [style, setStyle] = useState(MiniCardStyle.textBox | MiniCardStyle.largeTextBox);

    //Ajusta el texto si es muy largo
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
                loadingIndicatorSource={LOADING_GIF}
                src={subMenu.foto}
            />
            <View style={style}>
                <Text style={MiniCardStyle.text}>{subMenu.nombre}</Text>
            </View>
        </View>
    );
}

export default MiniFoodCard;