import { TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BackButtonStyle from './styles';

/**
 * Componente cuyo estilo es una flecha que apunta a izquierda.
 * Su comportamiento se define segun la accion recibida por parametro.
 * En el conjunto de la app, se utiliza para navegar hacia atras.
 * @param pressAction --> Accion a ejecutarse cuando se presiona el boton
 * @returns 
 */
const BackButton = ({pressAction}) => {
  return (
    <TouchableOpacity style={BackButtonStyle.buttonContainer} onPress={pressAction}>
        <MaterialCommunityIcons name={'arrow-left-bold-circle'} size={50} color={'#fff'}/>
    </TouchableOpacity>
  )
};

export default BackButton;