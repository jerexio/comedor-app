import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import Home from '../screens/Home/Home';
import Proximas from './ComingSoon/Proximas';
import Informacion from './Information/Informacion';


// Screen names
const homeName = "Home";
const proximasName = "Proximas";
const informacionName = "Informacion";


const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator 
      initialRouteName={homeName}
      screenOptions={({ route }) => ({ 
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case homeName:
              iconName = focused ? 'home' : 'home-outline';
              break;
            case proximasName:
              iconName = focused ? 'numeric-5-box-multiple' : 'numeric-5-box-multiple-outline';
            break;
            case informacionName:
              iconName = focused ? 'information' : 'information-outline';
            break;

            default:
              iconName = 'ios-information-circle';
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#dc8c13',
        tabBarInactiveTintColor: '#5e7c68',
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10},
        tabBarStyle: { display: 'flex' },
      })}
      >
        <Tab.Screen 
        name={homeName} 
        component={Home} 
        options={{ 
          headerShown: false // Oculta la barra de navegación superior
        }} 
      />
      <Tab.Screen name={proximasName} component={Proximas} />
      <Tab.Screen name={informacionName} component={Informacion} />
    </Tab.Navigator>
  );
}

export default MainContainer;
