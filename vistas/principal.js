import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions 
} from 'react-native';
import Barrabuscar from './componentes/barrabuscar';
import Lista from './componentes/lista';
import { colores } from './componentes/colores';


const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={'#264bf7'} {...props} />
      </SafeAreaView>
    </View>
  );

const App = () => {
  

  return (
    <SafeAreaView style={styles.container}>

        <MyStatusBar barStyle="light-content" />
        <Barrabuscar/>
        <Lista/>
      
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

export default App;

