/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native'
import CarsList from './android/app/components/CarsList'
import Header from './android/app/components/Header'

import {
  StatusBar,
  View,
} from 'react-native';


const App = () => {

  return (
    <View style={styles.container}>

      <Header />

      <CarsList />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
)


export default App;

