import { Text } from "react-native";
import HeaderStyle from "./style";

const Header = ({style, title}) => {
    return(
        <Text style={[style, HeaderStyle.text]}>{title}</Text>
    );
};

export default Header;