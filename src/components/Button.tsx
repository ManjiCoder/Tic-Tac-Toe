/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, Vibration} from 'react-native';
import React from 'react';

const Button = ({
  result,
  value,
  player,
  togglePlayer,
  setPlayerMove,
  index,
}) => {
  const setPlayer = () => {
    togglePlayer(player === '0' ? 'X' : '0');
    Vibration.vibrate(108);
    // console.warn(player);
  };
  const handleClick = i => {
    setPlayer();
    setPlayerMove(i, player);
  };
  return (
    <TouchableOpacity
      style={styles.btn}
      disabled={result !== null || value !== '-'}
      onPress={() => {
        handleClick(index);
      }}>
      <Text style={styles.heading}>{value}</Text>
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
