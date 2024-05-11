import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FormStyles } from './styles';
import {  } from '../../consts/consts.js';
import { addPost } from '../../services/postMenu.js';
import validateForm from '../../services/validateForm.js';
import { MEALS, ALERT_FORM_GOOD } from '../../consts/consts.js';


export default function Form({ navigation }) {
    const [fecha, setFecha] = useState({ year: '', month: '', day: '' });
    const [nombre, setNombre] = useState("");
    const [ingredientes, setIngredientes] = useState("");
    const [precio, setPrecio] = useState("");
    const [precioCarnet, setPrecioCarnet] = useState("");
    const [urlFoto, setUrlFoto] = useState("");
    const [reservas, setReservas] = useState("");
    const [errors, setErrors] = useState({});
    const [selectedMenu, setSelectedMenu] = useState(MEALS.BREAKFAST);
    const [fechaEditable, setFechaEditable] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState('#ded2c2');
    
    const [menu, setMenu] = useState({
      fecha: fecha,
      desayunos: [],
      almuerzos: [],
      meriendas: []
    });

const handleMenuSelection = () => {
    switch (selectedMenu) {
        case MEALS.BREAKFAST:
            handleDesayuno();
            break;
        case MEALS.LUNCH:
            handleAlmuerzo();
            break;
        case MEALS.SNACK:
            handleMerienda();
            setTimeout(() => {
                alert(ALERT_FORM_GOOD);
                addPost(menu);
                navigation.navigate('Informacion');
            }, 10000);
    }
};

const handleDesayuno = () => {
    const newDesayuno = {
        'nombre': nombre,
        'ingredientes': ingredientes,
        'precio': precio,
        'precioCarnet': precioCarnet,
        'foto': urlFoto,
        'reservas': reservas,
        'likes': 20
    };
    setMenu(prevMenu => ({
        ...prevMenu,
        "fecha": fecha,
        desayunos: [...prevMenu.desayunos, newDesayuno]
    }));
    setSelectedMenu(MEALS.LUNCH);
    setFechaEditable(false);
    setBackgroundColor('#863716');
};

const handleAlmuerzo = () => {
    const newAlmuerzo = {
        'nombre': nombre,
        'ingredientes': ingredientes,
        'precio': precio,
        'precioCarnet': precioCarnet,
        'foto': urlFoto,
        'reservas': reservas,
        'likes': 20
    };
    setMenu(prevMenu => ({
        ...prevMenu,
        almuerzos: [...prevMenu.almuerzos, newAlmuerzo]
    }));
    setSelectedMenu(MEALS.SNACK);
    setBackgroundColor('#5e7c68');
};

const handleMerienda = () => {
    const newMerienda = {
        'nombre': nombre,
        'ingredientes': ingredientes,
        'precio': precio,
        'precioCarnet': precioCarnet,
        'foto': urlFoto,
        'reservas': reservas,
        'likes': 20
    };
    setMenu(prevMenu => ({
        ...prevMenu,
        meriendas: [...prevMenu.meriendas, newMerienda]
    }));
    setSelectedMenu('terminado');
};

const handleSubmit = () => {
    if (validateForm(fecha, nombre, ingredientes, precio, precioCarnet, urlFoto, reservas, setErrors)) {
        try {
            // Manejar el menú seleccionado
            handleMenuSelection();
            setNombre('');
            setIngredientes('');
            setPrecio('');
            setPrecioCarnet('');
            setUrlFoto('');
            setReservas('');
            setErrors({});
        } catch (error) {
            console.error('Error al manejar el menú:', error);
        }
    }
};



return (
  <SafeAreaView>
    <ScrollView contentContainerStyle={[FormStyles.container, { backgroundColor: backgroundColor }]}>
      <View style={FormStyles.form}>
        <Text style={[FormStyles.text, FormStyles.label]}>NUEVO MENÚ</Text>
        <Text style={FormStyles.text}>Fecha</Text>
        <View style={FormStyles.dateInputContainer}>
          <TextInput
            style={FormStyles.dateInput}
            placeholder="YYYY"
            keyboardType="numeric"
            maxLength={4}
            onChangeText={(text) => setFecha({ ...fecha, year: parseInt(text) })}
            value={fecha.year.toString()}
            editable={fechaEditable}
          />
          <Text>/</Text>
          <TextInput
            style={FormStyles.dateInput}
            placeholder="MM"
            keyboardType="numeric"
            maxLength={2}
            onChangeText={(text) => setFecha({ ...fecha, month: parseInt(text) })}
            value={fecha.month.toString()}
            editable={fechaEditable}
          />
          <Text>/</Text>
          <TextInput
            style={FormStyles.dateInput}
            placeholder="DD"
            keyboardType="numeric"
            maxLength={2}
            onChangeText={(text) => setFecha({ ...fecha, day: parseInt(text) })}
            value={fecha.day.toString()}
            editable={fechaEditable}
          />
        </View>
        {/* Mostrar mensajes de error para la fecha */}
        {errors.fecha && <Text style={FormStyles.errorText}>{errors.fecha}</Text>}
        {/* Campos de entrada relevantes */}
        <Text style={FormStyles.sublabel}>
        {selectedMenu === MEALS.BREAKFAST ? MEALS.BREAKFAST :
          selectedMenu === MEALS.LUNCH ? MEALS.LUNCH :
            MEALS.SNACK}
        </Text>
        <Text style={FormStyles.text}>Nombre</Text>
        <TextInput
          style={FormStyles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        {
            errors.nombre ? <Text style={FormStyles.errorText}>{errors.nombre}</Text> : null
        }
        <Text style={FormStyles.text}>Ingredientes</Text>
        <TextInput
          style={FormStyles.input}
          placeholder="Ingredientes"
          value={ingredientes}
          onChangeText={setIngredientes}
        />
        {
            errors.ingredientes ? <Text style={FormStyles.errorText}>{errors.ingredientes}</Text> : null
        }
        <Text style={FormStyles.text}>Precio</Text>
        <TextInput
          style={FormStyles.input}
          placeholder="Precio"
          value={precio.toString()}
          keyboardType='numeric'
          onChangeText={(text) => setPrecio(parseInt(text))}
        />
        {
            errors.precio ? <Text style={FormStyles.errorText}>{errors.precio}</Text> : null
        }
        <Text style={FormStyles.text}>Precio Carnet</Text>
        <TextInput
          style={FormStyles.input}
          placeholder="Precio con Carnet"
          value={precioCarnet.toString()}
          keyboardType='numeric'
          onChangeText={(text) => setPrecioCarnet(parseInt(text))}
        />
        {
            errors.precioCarnet ? <Text style={FormStyles.errorText}>{errors.precioCarnet}</Text> : null
        }
        <Text style={FormStyles.text}>URL Foto</Text>
        <TextInput
          style={FormStyles.input}
          placeholder="URL Foto"
          value={urlFoto}
          onChangeText={setUrlFoto}
        />
        {
            errors.urlFoto ? <Text style={FormStyles.errorText}>{errors.urlFoto}</Text> : null
        }
        <Text style={FormStyles.text}>Cantidad de Reservas</Text>
        <TextInput
          style={FormStyles.input}
          placeholder="100"
          keyboardType='numeric'
          value={reservas.toString()}
          onChangeText={(text) => setReservas(parseInt(text))}
        />
        {
            errors.reservas ? <Text style={FormStyles.errorText}>{errors.reservas}</Text> : null
        }
        {/* Mostrar el botón dinámicamente según el tipo de menú */}
        <TouchableOpacity onPress={handleSubmit} style={FormStyles.button}>
          <Text style={FormStyles.buttonText}>
            {selectedMenu === MEALS.BREAKFAST ? MEALS.LOAD_BREAKFAST :
              selectedMenu === MEALS.LUNCH ? MEALS.LOAD_LUNCH :
                MEALS.LOAD_SNACK}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </SafeAreaView>
);
}


