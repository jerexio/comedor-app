import { HomeStyle } from './styles'
import { View, ScrollView, Text, SafeAreaView, Platform, FlatList } from "react-native";
import { useState, useEffect } from 'react';
import { API_URL } from '@env';

import HomeHeader from '../../components/Header/HomeHeader.jsx';
import FoodCard from '../../components/FoodCard/FoodCard.jsx';

//Debajo las constantes, luego mudarlas a un archivo
const time = ["desayunos", "almuerzos", "meriendas"];

export default function Home(){
    //Para saber cual menu hay que renderizar
    const [menu, setMenu] = useState();
    //Para indicar en Home en que pagina estamos
    const [currentPage, setCurrentPage] = useState("Desayuno" | "Almuerzo" | "Merienda");

    //Fetch para obtener el menu a renderizar
    const fetchApi = async () => {
      try{
        const date = new Date().toISOString().substring(0,10);
        const response = await fetch(API_URL+date);
        const menuRes = await response.json();
        setMenu(menuRes);
      }
      catch(error){
        console.error(error);
      }
    }
    
    //UseEffect para que se realice el llamado al fetch
    useEffect(() => {
      fetchApi();
    }, []);

    return (
        <SafeAreaView style={[HomeStyle.container, HomeStyle.color]}>
            <HomeHeader currentPage={currentPage} setCurrentPage={setCurrentPage} setMenus={setMenu}/>
            <FlatList
              style={{height: "100%", width: "100%"}}
              horizontal
              data={menu[time[currentPage]]}
              renderItem={({item}) => <FoodCard foodInfo={item}/>}
            />
        </SafeAreaView>
    );
}