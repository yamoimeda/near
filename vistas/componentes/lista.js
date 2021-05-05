import React, { useState, useEffect,useCallback }from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  Image
} from 'react-native';
import { colores } from './colores';


const App = (props) => {
  const renderItem = ({item}) => (
    <View style={styles.contenedor}>
      <Image style={styles.imagen} source={{
            uri: item.foto,
          }}/>
      <View style={styles.info}>
        <Text style={styles.nombre}>{item.nombre}</Text>
        <Text style={styles.correo}>{item.correo}</Text>
      </View>
      
    </View>
  )



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tituloc}>
          <Text style={styles.titulo}>Personas cerca de ti</Text>
      </View>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={item => item.correo}
        onEndReachedThreshold={0.9}
        onEndReached={props.fetchMas}
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colores.fondo
  },
  tituloc:{
    height:50,
    justifyContent:'center',
    paddingLeft:10
  },
  titulo:{
    color:colores.titulos,
    fontFamily: "Montserrat-Bold",
    fontSize:20

  },
  contenedor: {
    flexDirection:'row',
    backgroundColor: 'transparent',
    padding: 10,
    marginHorizontal: 16,
    borderBottomColor:colores.lineas_horizontales,
    borderBottomWidth:1,
  },
  imagen:{
    width: 50,
    height: 50,
    borderRadius:50
  },
  info:{
    paddingLeft:15,

  },
  nombre:{
    fontFamily: "Montserrat-Medium",
    color:colores.titulos

  },
  correo:{
    fontFamily: "Montserrat-Regular",
    color:colores.textos_chicos

  }
});

export default App;
