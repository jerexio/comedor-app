import * as React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity,Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {InformationStyles} from './styles';
import { AREAS, IMAGE_COMEDOR,IMAGE_MAP_COMEDOR } from '../../consts/consts';


export default function Informacion({ navigation }) {
    const data = [
        { id: 1, title: AREAS.SCHOLARSHIPS, href: AREAS.URL_SCHOLARSHIPS },
        { id: 2, title: AREAS.DEPORTS, href: AREAS.URL_DEPORTS },
        { id: 3, title: AREAS.ASSISTANCE, href: AREAS.URL_ASSISTANCE },
        { id: 4, title: AREAS.INTERVETION, href: AREAS.URL_INTERVETION },
        { id: 5, title: AREAS.SETTLEMENTS, href: AREAS.URL_SETTLEMENTS },

    ];

    const numColumns = 2; // Número de columnas en la matriz de botones
// Calcula el ancho del contenedor de los botones
const buttonContainerWidth = Dimensions.get('window').width - 80;
const buttonWidth = (buttonContainerWidth - (numColumns - 1) * 8) / numColumns; // 8 es el espacio horizontal entre los botones

// Modifica el método renderButtons para que acepte el ancho de los botones como argumento
const renderButtons = (buttonWidth) => {
    return data.map(item => (
        <TouchableOpacity
            key={item.id}
            style={[InformationStyles.item, { width: buttonWidth }]} // Aplica el nuevo ancho del botón
            onPress={() => handleLinkPress(item.href)}
        >
            <Text style={InformationStyles.itemTitle}>{item.title}</Text>
        </TouchableOpacity>
    ));
};

const handleLinkPress = (url) => {
    Linking.openURL(url);
};

    return (
        <SafeAreaView style={InformationStyles.container}>
            <ScrollView contentContainerStyle={InformationStyles.scrollContainer}>
                <View style={InformationStyles.infoContainer}>
                    <Text
                        onPress={() => navigation.navigate('Home')}
                        style={InformationStyles.title}
                    >
                        Conoce el Comedor de la UNCO
                    </Text>

                    <Image
                        source={require('../../../assets/comedor.png')}
                        style={InformationStyles.image}
                    />

                    <Text style={InformationStyles.description}>
                        Los tres comedores universitarios asentados en los campus más grandes
                        de la Universidad (Neuquén, Cipolletti y General Roca) dependen de nuestra
                        Secretaría y brindan un servicio que es esencial desde lo nutricional, 
                        pero también desde lo vincular y social.
                    </Text>

                    <Text style={InformationStyles.text}>Otras áreas de la Secretaría de Bienestar</Text>

                    <View style={[InformationStyles.buttonsContainer, { width: buttonContainerWidth }]}>
                        {renderButtons(buttonWidth)}
                    </View>

                    <Text style={InformationStyles.text}>Dirección Comedor Neuquen: Avenida Argentina 1525</Text>
                    
                    <Image
                        source={require('../../../assets/Mapa_comedor.png')}
                        style={InformationStyles.image}
                    />

                    <TouchableOpacity
                        style={InformationStyles.item}
                        onPress={() => navigation.navigate('form')}
                    >
                        <Text style={InformationStyles.itemTitle}>Cargar nuevo menu</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

