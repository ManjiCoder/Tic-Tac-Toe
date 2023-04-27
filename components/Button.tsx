/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, Vibration} from 'react-native';
import React from 'react';

const Button = ({icon, player, togglePlayer}) => {
  const handleClick = () => {
    togglePlayer(player === '0' ? 'X' : '0');
    Vibration.vibrate(108);
    console.warn(player);
  };
  return (
    <TouchableOpacity style={styles.btn} onPress={handleClick}>
      <Text style={styles.heading}>{icon}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'grey',
    // paddingVertical: 27,
    // paddingHorizontal: 37,
    width: 100,
    height: 100,
    borderRadius: 5,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontWeight: '700',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});
