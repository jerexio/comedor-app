import TabStyles from './TabStyles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as consts from '../consts/consts';

// Screens
import Home from '../screens/Home/Home';
import Proximas from '../screens/ComingSoon/Proximas';
import Informacion from '../screens/Information/Informacion';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator 
      initialRouteName={consts.HOME_NAME}
      screenOptions={({ route }) => ({ 
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case consts.HOME_NAME:
              iconName = focused ? consts.ICON_HOME : consts.ICON_HOME_O;
              break;
            case consts.COMING_NAME:
              iconName = focused ? consts.ICON_COMING : consts.ICON_COMING_O;
            break;
            case consts.INFO_NAME:
              iconName = focused ? consts.ICON_INFO : consts.ICON_INFO_O;
            break;
            default:
              iconName = consts.ICON_IOS_INFO;
          }
          return <MaterialCommunityIcons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: TabStyles.tabBarActiveColor,
        tabBarInactiveTintColor: TabStyles.tabBarInactiveColor,
        tabBarLabelStyle: TabStyles.tabBarLabelStyle,
        tabBarStyle: TabStyles.tabBarStyle,
      })}
      >
      <Tab.Screen 
        name={consts.HOME_NAME} 
        component={Home}
        options={{ 
          headerShown: false // Oculta la barra de navegación superior
        }} />

      <Tab.Screen
        name={consts.COMING_NAME}
        component={Proximas}
        options={{ 
          headerShown: false // Oculta la barra de navegación superior
        }}
      />

      <Tab.Screen
        name={consts.INFO_NAME}
        component={Informacion}
        options={{ 
          headerShown: false // Oculta la barra de navegación superior
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;