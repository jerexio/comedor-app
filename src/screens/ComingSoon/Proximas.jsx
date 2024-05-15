import { useCallback, useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import ComingStyle from './styles';
import ComingMenu from '../../components/ComingMenu/ComingMenu.jsx';
import Header from '../../components/Header/Header.jsx'
import {API_URL_COMING} from '@env';
import { COMING_TITLE } from '../../consts/consts.js';
import { getComingMenus } from '../../services/getComingMenus.js';

/**
 * Screen que obtiene menus futuros desde el backend y los muestra
 * en forma de lista ordenados por fecha.
 * Carga un componente nuevo cuando se llega al final de la lista.
 * @returns 
 */
export default function Proximas({ navigation }) {
    const [comingMenus, setComingMenus] = useState([]);
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState(false);
    const [nextPage, setNextPage] = useState();

    //Realiza el fetch y agrega el resultado a la lista para ser renderizado
    const fetchPage = (url, existingMenus) => {
        setLoading(true);
        getComingMenus(url)
            .then((response) => {
                setComingMenus(comingMenus.concat(response.result));
                setNextPage(response.info.next);
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    };

    //Cuando se recarga la pagina
    const refresh = () => {
        setComingMenus([]);
        setNextPage(API_URL_COMING);
        fetchPage(API_URL_COMING, comingMenus);
    }

    //UseEffect para que se realice el llamado al fetch
    useEffect(() => {
        setComingMenus([]);
        fetchPage(API_URL_COMING, comingMenus);
    }, []);

    //Renderiza cada submenu
    const renderize = useCallback(({item, index}) => <ComingMenu menu={item}/>, []);
    
    //Si no hay menus renderiza un mensaje
    const emptyRenderize = useCallback(() => <Text style={[ComingStyle.emptyList]}>No hay menus disponibles</Text>, []);

    return (
        <View style={ComingStyle.background}>
            <Header style={ComingStyle.headerBox} title={COMING_TITLE}/>
            <View style={ComingStyle.container}>
                <FlatList
                    style={ComingStyle.item}
                    data={comingMenus}
                    renderItem={renderize}
                    contentContainerStyle={{gap: 20}}
                    onEndReached={() => fetchPage(nextPage, comingMenus)}
                    onEndReachedThreshold={1}
                    ListFooterComponent={() => loading && <ActivityIndicator size="large"/>}
                    refreshing={reload}
                    onRefresh={refresh}
                    removeClippedSubviews={true}
                    maxToRenderPerBatch={10}
                    ListEmptyComponent={emptyRenderize}
                />
            </View>
        </View>
    );
}