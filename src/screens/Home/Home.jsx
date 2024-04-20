import { HomeStyle } from './styles'
import { SafeAreaView, FlatList, Dimensions, ActivityIndicator } from "react-native";
import { useState, useEffect, useCallback, useMemo } from 'react';
import HomeHeader from '../../components/HomeHeader/HomeHeader.jsx';
import FoodCard from '../../components/FoodCard/FoodCard.jsx';
import { View } from 'react-native-animatable';
import getTodayMenu from '../../services/getTodayMenu.js';
import storeData from '../../services/storeData.js';
import useLocalStorage from '../../hooks/useLocalStorage.js';
import { TIMES } from '../../consts/consts.js';


export default function Home({navigation, route}){
    const {getKeysSelector, getAllKeys} = useLocalStorage();
    const [keys, setKeys] = useState([]);
    const [update, setUpdate] = useState(route.params?.update);
    //Para indicar en Home en que pagina estamos
    const [currentPage, setCurrentPage] = useState(0);
    //Para indicar el menu actual
    const [activeIndex, setActiveIndex] = useState(0);

    //UseEffect para que se realice el llamado al fetch
    useEffect(() => {
      getTodayMenu().then(res => {
        storeData(res);
        getData(TIMES[currentPage]);
      });
    }, []);

    const getData = (selector) => {
      const keysCollection = getKeysSelector(selector);
      setKeys(keysCollection);
    };
    
    useEffect(() => {
      getData(TIMES[currentPage]);
    }, [currentPage]);

    const handleScroll = (event) => {
      const scrollPosition = event.nativeEvent.contentOffset.x;
      const index = Math.round(scrollPosition/Dimensions.get("screen").width);
      setActiveIndex(index);
    }

    const renderize = useCallback(({item}) => <FoodCard idFood={item}/>, []);

    const renderDotIndicator = () => {
      return keys.map((dot, index) => {
          const style = activeIndex === index ? HomeStyle.dotActive : HomeStyle.dotIndicator;
          return (<View key={index} style={style}></View>);
        });
    }

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
          />}
          <View style={HomeStyle.dotContainer}>
            {keys && renderDotIndicator()}
          </View>
      </SafeAreaView>
    );
};
