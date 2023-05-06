/* eslint-disable prettier/prettier */
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import React from 'react';
import Home from './components/Home';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#242B2E'} />
      <Text style={styles.heading}>Tic Tac Toe</Text>
      <Home />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#242B2E',
    height: '100%',
  },
  heading: {
    fontSize: 27,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
  },
});
