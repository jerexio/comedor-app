import { TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BackButtonStyle from './styles';

const BackButton = ({pressAction}) => {
  return (
    <TouchableOpacity style={BackButtonStyle.buttonContainer} onPress={pressAction}>
        <MaterialCommunityIcons name={'arrow-left-bold-circle'} size={50} color={'#fff'}/>
    </TouchableOpacity>
  )
};

export default BackButton;