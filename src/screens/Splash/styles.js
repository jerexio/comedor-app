import { StyleSheet } from "react-native";

const SplashStyle = StyleSheet.create({
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

export default SplashStyle;