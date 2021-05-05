import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Dimensions

} from 'react-native';
import { colores } from './colores';
import Icono from 'react-native-vector-icons/AntDesign';


const App = () => {
 
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);


  

  return (
    <SafeAreaView style={styles.container}>  
      <View style={styles.barra}>

        <TextInput style={styles.input}
        onChangeText={onChangeText}
        value={text} 
        style={styles.texto}
        placeholder="Usuarios cerca de ti"
        placeholderTextColor={colores.texto_gris} />
        
        <Icono name="search1" size={20} color={colores.texto_gris}/>

      </View>
      

    </SafeAreaView>
  );
};

const pantalla = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    height: pantalla * 0.09,
    backgroundColor: colores.gris_oscuro
  },
  barra:{
    flex:1,
    flexDirection:'row',
    backgroundColor:colores.fondo,
    marginHorizontal:'5%',
    marginVertical:'4%',
    borderRadius:5,
    alignItems:'center',
  },
  texto: {
    height: '100%',
    width:'90%',
    color:colores.negro,
    paddingLeft:20,
    fontFamily: "Montserrat-Regular",
  },
});

export default App;
