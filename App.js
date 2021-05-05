import React, { useState, useEffect,useCallback }from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions 
} from 'react-native';
import 'react-native-gesture-handler';
import Barrabuscar from './vistas/componentes/barrabuscar';
import Lista from './vistas/componentes/lista';
import { colores } from './vistas/componentes/colores';
import {usarUsuarios} from './presentador';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import {
  createAppContainer
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';  
import Foundation from 'react-native-vector-icons/Foundation';  
import FontAwesome from 'react-native-vector-icons/FontAwesome';  

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={'#264bf7'} {...props} />
    </SafeAreaView>
  </View>
);

const App = () => {
  const [data, fetchMas] = usarUsuarios();

  return (
    <SafeAreaView style={styles.container}>

        <MyStatusBar barStyle="light-content" />
        <Barrabuscar/>
        <Lista  data={data} fetchMas={fetchMas}/>
      
    </SafeAreaView>
  );
};

const Buscar = () => {


  return (
    <SafeAreaView style={styles.container}>

        <MyStatusBar barStyle="light-content" />
        <Barrabuscar/>
        
      
    </SafeAreaView>
  );
};

const Listas = () => {


  return (
    <SafeAreaView style={styles.container}>

        <MyStatusBar barStyle="light-content" />
        <Barrabuscar/>
      
    </SafeAreaView>
  );
};

const Perfil = () => {


  return (
    <SafeAreaView style={styles.container}>

        <MyStatusBar barStyle="light-content" />
        <Barrabuscar/>
      
    </SafeAreaView>
  );
};


const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

const TabNavigator = createMaterialBottomTabNavigator(  
  {  
      Inicio: { screen: App,  
          navigationOptions:{  
              tabBarLabel:'Inicio',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'home-outline'}/>  
                  </View>),  
          }  
      },  
      Explorar: { screen: Buscar,  
          navigationOptions:{  
              tabBarLabel:'Explorar',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon style={[{color: tintColor}]} size={25} name={'search'}/>  
                  </View>),   
          }  
      },  
      Lista: { screen: Listas,  
          navigationOptions:{  
              tabBarLabel:'Mi lista',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Foundation style={[{color: tintColor}]} size={25} name={'list'}/>  
                  </View>),  
          }  
      },  
      Perfil: {  
          screen: Perfil,  
          navigationOptions:{  
              tabBarLabel:'Perfil',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <FontAwesome style={[{color: tintColor}]} size={25} name={'user-o'}/>  
                  </View>),  
          }  
      },  
  },  
  {  
    initialRouteName: "Inicio",  
    activeColor: colores.activo,  
    inactiveColor: colores.normal,  
    barStyle: { backgroundColor: colores.fondo,height:60,borderTopWidth:1,borderTopColor:colores.lineas_horizontales },  
  },  
);  


export default createAppContainer(TabNavigator)