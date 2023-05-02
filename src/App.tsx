import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import Home from './components/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'purple'} barStyle={'dark-light'} />
      <Home />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});
