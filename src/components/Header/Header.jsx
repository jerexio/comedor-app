import { Text } from "react-native";
import HeaderStyle from "./style";

/**
 * Componente que renderiza un Header con un estilo y un titulo
 * Se utiliza en las screens Home/Home y ComingSoon/Proximas
 * @param style --> Estilo
 * @param title --> Titulo
 * @returns 
 */
const Header = ({style, title}) => {
    return(
        <Text style={[style, HeaderStyle.text]}>{title}</Text>
    );
};

export default Header;