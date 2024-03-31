import { SafeAreaView, View } from "react-native";
import MiniFoodCard from "./src/components/MiniFoodCard/MiniFoodCard";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainContainer from './src/screens/mainConteiner';
import Splash from './src/screens/Splash/Splash';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    /*<NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="mainConteiner"
          component={MainContainer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>*/
    <View style={style.card}>
      <MiniFoodCard subMenu={{"nombre":"src/components/MiniFoodCard/MiniFoodCard", "foto":"https://assets.unileversolutions.com/recipes-v2/209413.jpg"}}/>
    </View>
  );
}

//DELETE
import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //Delete
  card: {
    marginTop: 30,
    marginHorizontal: 20,
  }
});