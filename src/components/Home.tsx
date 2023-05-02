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
  const [count, setCount] = useState(0);
  const togglePlayer = value => {
    setPlayer(value);
  };

  const setPlayerMove = (index, value) => {
    mark[index].value = value;
    // console.log(mark);
    empire();
    setCount(count + 1);
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
    setCount(0);
  };

  const empire = () => {
    const arr = mark.map(({value}) => {
      return value;
    });
    // console.log(arr);

    const checkMoves = (i: number, j: number, k: number) => {
      const s1 = new Set([arr[i], arr[j], arr[k]]);
      if (new Set(s1).size === 1 && Array.from(s1).join('') !== '-') {
        // console.log(s1);
        setResult(arr[i]);
      }
    };
    checkMoves(0, 1, 2);
    checkMoves(3, 4, 5);
    checkMoves(6, 7, 8);
    checkMoves(0, 3, 6);
    checkMoves(1, 4, 7);
    checkMoves(2, 5, 8);
    checkMoves(0, 4, 8);
    checkMoves(2, 4, 6);

    if (count === 8) {
      setResult('Tie');
    }
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
            result={result}
          />
        ))}
      </View>
      <Pressable style={[styles.btn, styles.purple]} onPress={resetGame}>
        <Text style={styles.heading}>Reload game</Text>
      </Pressable>

      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTxt}>{`${
            result === 'Tie'
              ? `Match '${result}' Try Again.`
              : `'${result}' wins the match.`
          }`}</Text>
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
