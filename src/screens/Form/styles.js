import { StyleSheet,Dimensions } from "react-native";
// Estilos
const { width, height } = Dimensions.get("window");
const formWidth = width * 90 / 100;
const formHeight = height * 83 / 100;

export const FormStyles = StyleSheet.create({
container: {
  paddingVertical: 10 * height / 100,
  paddingHorizontal: 5 * width / 100,
},
form: {
  height: formHeight,
  width: formWidth,
  flexDirection: 'column',
  justifyContent: "space-between",
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 10,
  shadowColor: 'black',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  marginBottom: 20,
},
label: {
  fontSize: 25,
  color: '#dc8c13',
  alignSelf: "center"
},
sublabel:{
  alignSelf: 'center',
  fontSize: 23,
  marginTop: 5,
  color: 'black',
  fontWeight: 'bold',
},
input: {
  height: 40,
  borderColor: '#ddd',
  borderWidth: 1,
  padding: 10,
  borderRadius: 5,
  marginTop:5
},
dateInputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 5
},
dateInput: {
  flex: 1,
  height: 40,
  borderColor: '#ddd',
  borderWidth: 1,
  paddingHorizontal: 10,
  borderRadius: 5,
  marginRight: 5,
},
text: {
  marginBottom: -11,
  fontWeight: 'bold',
  fontSize: 16
},
button: {
  backgroundColor: '#dc8c13',
  alignItems: 'center',
  justifyContent: 'center',
  height: 40,
  borderRadius: 5,
  marginTop: 2
},
buttonText: {
  color: 'white',
  fontWeight: 'bold',
},
errorText: {
  color: "red",
  marginBottom: -5,
},


});