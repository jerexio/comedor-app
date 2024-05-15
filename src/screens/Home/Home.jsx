import { HomeStyle } from './styles'
import { SafeAreaView, FlatList, Dimensions, Text } from "react-native";
import { useState, useEffect, useCallback } from 'react';
import HomeHeader from '../../components/HomeHeader/HomeHeader.jsx';
import FoodCard from '../../components/FoodCard/FoodCard.jsx';
import { View } from 'react-native-animatable';
import getTodayMenu from '../../services/getTodayMenu.js';
import storeData from '../../services/storeData.js';
import useLocalStorage from '../../hooks/useLocalStorage.js';
import { TIMES } from '../../consts/consts.js';

/**
 * Screen que muestra las distintas comidas del dia de hoy.
 * @returns 
 */
export default function Home({navigation, route}){
    const {getKeysSelector} = useLocalStorage();
    const [keys, setKeys] = useState([]);
    //Para indicar en Home en que pagina estamos
    const [currentPage, setCurrentPage] = useState(0);
    //Para indicar el menu actual
    const [activeIndex, setActiveIndex] = useState(0);

    //Efecto para que se realice el llamado al fetch
    useEffect(() => {
      getTodayMenu().then(res => {
        storeData(res);
        getData(TIMES[currentPage]);
      });
    }, []);

    //Para obtener los datos del almacenamiento local
    const getData = (selector) => {
      const keysCollection = getKeysSelector(selector);
      setKeys(keysCollection);
    };
    
    //Efecto que actualiza los id de los elementos a ser renderizados
    //Depende del tiempo actual
    useEffect(() => {
      getData(TIMES[currentPage]);
    }, [currentPage]);

    //Define que ocurre cuando se realiza el desplazamiento
    const handleScroll = (event) => {
      const scrollPosition = event.nativeEvent.contentOffset.x;
      const index = Math.round(scrollPosition/Dimensions.get("screen").width);
      setActiveIndex(index);
    }

    //Para renderizar cada card del menu
    const renderize = useCallback(({item}) => <FoodCard idFood={item}/>, []);

    //Para renderizar los puntos que indican cuantos menus hay a renderizar
    const renderDotIndicator = () => {
      return keys.map((dot, index) => {
          const style = activeIndex === index ? HomeStyle.dotActive : HomeStyle.dotIndicator;
          return (<View key={index} style={style}></View>);
        });
    }

    //Para renderizar cuando no hay menu
    const emptyRenderize = useCallback(() => <Text style={[HomeStyle.emptyList]}>No hay menus disponibles</Text>, []);

    //La condicion despues del HomeHeader significa que renderiza el menu si existe uno con la fecha actual
    return (
      <SafeAreaView style={HomeStyle.container}>
        <HomeHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />
          {keys &&
          <FlatList
            style={HomeStyle.item}
            horizontal
            pagingEnabled={true}
            data={keys}
            renderItem={renderize}
            keyExtractor={item => item}
            onScroll={handleScroll}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={emptyRenderize}
          />}
          <View style={HomeStyle.dotContainer}>
            {renderDotIndicator()}
          </View>
      </SafeAreaView>
    );
};
