import { StyleSheet,Dimensions } from "react-native";

export const InformationStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dc8c13',
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: 20,
    },
    infoContainer: {
        width: '90%',
        backgroundColor: 'white',
        padding: 18,
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
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#5e7c68',
        textAlign: 'center'
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20,
        borderRadius: 10,
    },
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#555',
    },
    text: {
        marginBottom: 10,
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
    },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 2,
    },
    item: {
        backgroundColor: '#5e7c68',
        padding: 20,
        marginVertical: 6,
        borderRadius: 10,
        alignItems: 'center',
    },
    itemTitle: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
});
