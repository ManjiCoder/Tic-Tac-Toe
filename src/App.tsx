import {ScrollView, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import Home from '../components/Home';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={'gold'} barStyle={'dark-content'} />
      <Home />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});
