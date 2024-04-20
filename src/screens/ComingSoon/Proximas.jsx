import { useCallback, useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import ComingStyle from './styles';
import ComingMenu from '../../components/ComingMenu/ComingMenu.jsx';
import Header from '../../components/Header/Header.jsx'
import {API_URL_COMING} from '@env';
import { COMING_TITLE } from '../../consts/consts.js';

export default function Proximas({ navigation }) {
    const [comingMenus, setComingMenus] = useState([]);
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState(false);
    const [nextPage, setNextPage] = useState();

    const fetchPage = async (url, existingMenus) => {
        setLoading(true);
        try{
            const response = await fetch(url);
            const menuRes = await response.json();
            setComingMenus(comingMenus.concat(menuRes.result));
            setNextPage(menuRes.info.next);
        }
        catch(error){
        }
        finally{
            setLoading(false);
        }
    };

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

    const renderize = useCallback(({item}) => <ComingMenu menu={item}/>, []);
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