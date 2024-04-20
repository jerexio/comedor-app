import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ModalFood from '../screens/ModalFood/ModalFood';
import BottomTab from './BottomTab';
import { BOTTOM_NAME, MODAL_NAME } from '../consts/consts';
const Stack = createNativeStackNavigator();

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
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    );
}
export default MainContainer;
