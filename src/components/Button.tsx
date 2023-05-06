/* eslint-disable prettier/prettier */
import {Pressable, StyleSheet, Text, Vibration} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({
  result,
  value,
  player,
  togglePlayer,
  setPlayerMove,
  index,
  isWinMove,
}): JSX.Element => {
  const setPlayer = () => {
    togglePlayer(player === 'O' ? 'X' : 'O');
    Vibration.vibrate(108);
  };
  const handleClick = i => {
    setPlayer();
    setPlayerMove(i, player);
  };

  return (
    <Pressable
      style={[styles.btn, isWinMove && styles.winMoveBg]}
      disabled={result !== null || value !== '-'}
      onPress={() => {
        handleClick(index);
      }}
      android_ripple={{
        color: 'white',
      }}>
      <Text style={[styles.heading, isWinMove && styles.winMoveText]}>
        {/* {value} */}
        {value !== '-' ? (
          <Icon
            name={value === 'X' ? 'times' : 'circle-o'}
            size={30}
            color={value === 'X' ? 'lime' : 'white'}
          />
        ) : (
          <Icon name="pencil" size={30} color="#242B2E" />
        )}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'grey',
    width: 100,
    height: 100,
    // borderRadius: 5,
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
  winMoveText: {
    color: 'gold',
    fontSize: 24,
    fontWeight: 'bold',
  },
  winMoveBg: {
    // backgroundColor: '#242B2E',
    backgroundColor: 'purple',
  },
});
