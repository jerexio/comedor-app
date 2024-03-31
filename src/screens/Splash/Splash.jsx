import { StyleSheet,View} from "react-native";
import React, { useEffect } from "react";
import * as Animatable from 'react-native-animatable';

const Splash = ({ navigation }) => { 
    const imageFai = require('../../../assets/fai.png');
    const imageUnco = require('../../../assets/unco.png');
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('mainConteiner');
        }, 5000);
    }, []); 

    return (
        <View style={styles.container}>
            <Animatable.Image
                animation="fadeInDownBig"
                duration={3000}
                source={imageUnco}
                style={styles.imageUnco}
            />
            <Animatable.Image
                animation="fadeInUpBig"
                duration={3000}
                source={imageFai}
                style={styles.imageFai}
            />
        </View>
    );
};
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      imageUnco: {
        width: 250,
        height: 250,
        marginBottom: 50, // Add margin below the first image for separation
      },
      imageFai: {
        width: 200,
        height: 200,
      },
    });
    
    export default Splash;

