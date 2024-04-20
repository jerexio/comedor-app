import SplashStyle from "./styles";
import { View} from "react-native";
import { useEffect } from "react";
import * as Animatable from 'react-native-animatable';
import { MAIN_NAME } from "../../consts/consts";

const Splash = ({ navigation }) => { 
    const imageFai = require('../../../assets/fai.png');
    const imageUnco = require('../../../assets/unco.png');
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(MAIN_NAME);
        }, 5000);
    }, []); 

    return (
        <View style={SplashStyle.container}>
            <Animatable.Image
                animation="fadeInDownBig"
                duration={3000}
                source={imageUnco}
                style={SplashStyle.imageUnco}
            />
            <Animatable.Image
                animation="fadeInUpBig"
                duration={3000}
                source={imageFai}
                style={SplashStyle.imageFai}
            />
        </View>
    );
};

export default Splash;
