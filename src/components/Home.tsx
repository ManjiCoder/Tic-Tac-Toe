/* eslint-disable prettier/prettier */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Button from './Button';

const Home = () => {
  const [player, setPlayer] = useState('0');
  const [mark, setMark] = useState([
    {
      id: 1,
      value: '-',
    },
    {
      id: 2,
      value: '-',
    },
    {
      id: 3,
      value: '-',
    },
    {
      id: 4,
      value: '-',
    },
    {
      id: 5,
      value: '-',
    },
    {
      id: 6,
      value: '-',
    },
    {
      id: 7,
      value: '-',
    },
    {
      id: 8,
      value: '-',
    },
    {
      id: 9,
      value: '-',
    },
  ]);

  const togglePlayer = value => {
    setPlayer(value);
  };

  const setPlayerMove = (index, value) => {
    // setMark()
    console.log((mark[index].value = value));
    console.log(mark);
  };

  const resetGame = () => {
    setMark([
      {
        id: 1,
        value: '-',
      },
      {
        id: 2,
        value: '-',
      },
      {
        id: 3,
        value: '-',
      },
      {
        id: 4,
        value: '-',
      },
      {
        id: 5,
        value: '-',
      },
      {
        id: 6,
        value: '-',
      },
      {
        id: 7,
        value: '-',
      },
      {
        id: 8,
        value: '-',
      },
      {
        id: 9,
        value: '-',
      },
    ]);
    setPlayer('0');
  };

  return (
    <View style={styles.container}>
      <Pressable style={[styles.btn]}>
        <Text style={styles.heading}>Player-{player}'s Turn</Text>
      </Pressable>
      <View style={styles.btnContainer}>
        {mark.map(({id, value}, index) => (
          <Button
            key={id}
            value={value}
            player={player}
            index={index}
            togglePlayer={togglePlayer}
            setPlayerMove={setPlayerMove}
          />
        ))}
      </View>
      <Pressable style={[styles.btn, styles.purple]} onPress={resetGame}>
        <Text style={styles.heading}>Reload game</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 9,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'gold',
    paddingHorizontal: 9,
    paddingVertical: 15,
    width: '80%',
    borderRadius: 3,
  },
  purple: {
    backgroundColor: 'purple',
  },
  heading: {
    fontWeight: '700',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  btnContainer: {
    paddingVertical: 20,
    gap: 11,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
