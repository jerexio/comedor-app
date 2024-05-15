import SplashStyle from "./styles";
import { View} from "react-native";
import { useEffect } from "react";
import * as Animatable from 'react-native-animatable';
import { FAI_LOGO, MAIN_NAME, UNCO_LOGO } from "../../consts/consts";
import { StackActions } from "@react-navigation/native";

/**
 * Screen que se muestra el inicio de la aplicacion.
 * @returns 
 */
const Splash = ({ navigation }) => { 
    const imageFai = FAI_LOGO;
    const imageUnco = UNCO_LOGO;

    //Efecto que elimina el splash de la pila de navegacion
    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(StackActions.replace(MAIN_NAME));
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
