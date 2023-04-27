/* eslint-disable prettier/prettier */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Button from './Button';

const Home = () => {
  const [player, setPlayer] = useState('0');
  const togglePlayer = value => {
    setPlayer(value);
  };
  return (
    <View style={styles.container}>
      <Pressable style={[styles.btn]}>
        <Text style={styles.heading}>Player-{player}'s Turn</Text>
      </Pressable>
      <View style={styles.btnContainer}>
        <View style={styles.threeBtn}>
          <Button icon={1} player={player} togglePlayer={togglePlayer} />
          <Button icon={2} player={player} togglePlayer={togglePlayer} />
          <Button icon={3} player={player} togglePlayer={togglePlayer} />
        </View>
        <View style={styles.threeBtn}>
          <Button icon={4} player={player} togglePlayer={togglePlayer} />
          <Button icon={5} player={player} togglePlayer={togglePlayer} />
          <Button icon={6} player={player} togglePlayer={togglePlayer} />
        </View>
        <View style={styles.threeBtn}>
          <Button icon={7} player={player} togglePlayer={togglePlayer} />
          <Button icon={8} player={player} togglePlayer={togglePlayer} />
          <Button icon={9} player={player} togglePlayer={togglePlayer} />
        </View>
      </View>
      <Pressable style={[styles.btn, styles.purple]}>
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
  },
  threeBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 11,
  },
});
