import { HomeStyle } from './styles.jsx'
import { View, ScrollView, Text, SafeAreaView, Platform, FlatList } from "react-native";
import { useState, useEffect, useCallback } from 'react';
import { API_URL } from '@env';

import HomeHeader from '../../components/Header/HomeHeader.jsx';
import FoodCard from '../../components/FoodCard/FoodCard.jsx';

//import menus from '../../../database/db_menus.js';

//Debajo las constantes, luego mudarlas a un archivo
const time = ["desayunos", "almuerzos", "meriendas"];

export default function Home(){
    //Para saber cual menu hay que renderizar
    const [menu, setMenu] = useState();
    //Para indicar en Home en que pagina estamos
    const [currentPage, setCurrentPage] = useState("Desayuno" | "Almuerzo" | "Merienda");
    //Fetch para obtener el menu a renderizar
    const fetchApi = async () => {
      try {
        const date = new Date().toISOString().substring(0, 10);
        const link = API_URL+date;
        const response = await fetch(link);
        const menuRes = await response.json();
        setMenu(menuRes);
      } catch (error) {
        console.error("Error al obtener datos:", error);
        // Opcionalmente, muestra un mensaje de error amigable para el usuario
      }
    };
    //UseEffect para que se realice el llamado al fetch
    useEffect(() => {
      fetchApi();
    }, []);

    const renderize = useCallback(({item}) => <FoodCard foodInfo={item}/>, []);

    //La condicion despues del HomeHeader significa que renderiza el menu si existe uno con la fecha actual
    return (
      <SafeAreaView style={[HomeStyle.container, HomeStyle.color]}>
        <HomeHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {menu && menu[time[currentPage]] && (
          <FlatList
            style={{height: "100%", width: "100%"}}
            horizontal
            pagingEnabled={true}
            data={menu[time[currentPage]]}
            renderItem={renderize}
          />
        )}
      </SafeAreaView>
    );
};
