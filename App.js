import React from 'react';
import { NavigationContainer, DefaultTheme, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainContainer from './src/navigation/MainContainer';
import Splash from './src/screens/Splash/Splash';
import { MAIN_NAME, SPLASH_NAME } from './src/consts/consts';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={{...DefaultTheme, colors:{...DefaultTheme.colors, background: '#dc8c13'}}}>
      <Stack.Navigator initialRouteName={SPLASH_NAME} screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={SPLASH_NAME} 
          component={Splash} />
        <Stack.Screen
          name={MAIN_NAME}
          component={MainContainer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
