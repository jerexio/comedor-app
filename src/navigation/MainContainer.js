import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ModalFood from '../screens/ModalFood/ModalFood';
import BottomTab from './BottomTab';
import Form from '../screens/Form/Form'
import { BOTTOM_NAME, FORM_NAME, MODAL_NAME } from '../consts/consts';
const Stack = createNativeStackNavigator();

/**
 * Contenedor de navegacion principal.
 * @returns 
 */
const MainContainer = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen
          name={BOTTOM_NAME}
          component={BottomTab}
          options={{ 
            headerShown: false // Oculta la barra de navegación superior
          }}
        />
        <Stack.Screen
          name={MODAL_NAME}
          component={ModalFood}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={FORM_NAME}
          component={Form}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
}
export default MainContainer;
