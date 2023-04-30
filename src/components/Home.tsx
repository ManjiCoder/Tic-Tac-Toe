/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Button from './Button';

const Home = () => {
  const [player, setPlayer] = useState('0');
  const [result, setResult] = useState(null);
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
    mark[index].value = value;
    // console.log(mark);
    empire();
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
    setResult(null);
  };

  const empire = () => {
    const arr = mark.map(({value}) => {
      return value;
    });

    const checkHorizontalMove = (start, end) => {
      const moves = new Set(arr.slice(start, end));
      if (moves.size === 1 && Array.from(moves).join('') !== '-') {
        console.log(moves, arr.slice(start, end));
        setResult(arr.slice(start, end)[0]);
      }
    };
    const checkDigonalsMove = () => {
      const d1 = new Set([arr[0], arr[4], arr[8]]);
      const d2 = new Set([arr[2], arr[4], arr[6]]);
      if (d1.size === 1 && Array.from(d1).join('') !== '-') {
        // console.log(Array.from(d1)[0]);
        setResult(String(Array.from(d1)[0]));
      }
      if (d2.size === 1 && Array.from(d2).join('') !== '-') {
        // console.log(Array.from(d2));
        setResult(Array.from(d2)[0]);
      }
    };
    checkHorizontalMove(0, 3);
    checkHorizontalMove(3, 6);
    checkHorizontalMove(6, 9);
    checkDigonalsMove();
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

      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTxt}>{`'${result}'`} wins the match</Text>
          <Text style={[styles.resultTxt, {fontSize: 16}]}>Game Over!</Text>
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 9,
    alignItems: 'center',
    gap: 20,
  },
  btn: {
    backgroundColor: 'gold',
    paddingHorizontal: 9,
    paddingVertical: 15,
    width: '80%',
    borderRadius: 11,
    elevation: 3,
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
  resultContainer: {
    backgroundColor: 'maroon',
    padding: 11,
    width: '80%',
    borderRadius: 11,
    elevation: 3,
  },
  resultTxt: {
    fontWeight: '900',
    fontSize: 21,
    textTransform: 'capitalize',
    marginLeft: 21,
    color: 'white',
    letterSpacing: 2,
  },
});
