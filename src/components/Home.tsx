/* eslint-disable prettier/prettier */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Button from './Button';

const Home = () => {
  const initialState = [
    {
      id: 1,
      value: '-',
      isWinMove: false,
    },
    {
      id: 2,
      value: '-',
      isWinMove: false,
    },
    {
      id: 3,
      value: '-',
      isWinMove: false,
    },
    {
      id: 4,
      value: '-',
      isWinMove: false,
    },
    {
      id: 5,
      value: '-',
      isWinMove: false,
    },
    {
      id: 6,
      value: '-',
      isWinMove: false,
    },
    {
      id: 7,
      value: '-',
      isWinMove: false,
    },
    {
      id: 8,
      value: '-',
      isWinMove: false,
    },
    {
      id: 9,
      value: '-',
      isWinMove: false,
    },
  ];
  const [player, setPlayer] = useState('0');
  const [result, setResult] = useState(null);
  const [mark, setMark] = useState(initialState);
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
    setMark(initialState);
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
        setResult(Array.from(s1).join(''));
        mark[i].isWinMove = true;
        mark[j].isWinMove = true;
        mark[k].isWinMove = true;
        // console.log(arr[i], arr[j], arr[k]);
        // console.log(Array.from(s1).join(''));
      }
    };

    // For Horizontal Moves
    checkMoves(0, 1, 2);
    checkMoves(3, 4, 5);
    checkMoves(6, 7, 8);

    // For Vertical Moves
    checkMoves(0, 3, 6);
    checkMoves(1, 4, 7);
    checkMoves(2, 5, 8);

    // For Digonals Moves
    checkMoves(0, 4, 8);
    checkMoves(2, 4, 6);

    if (count === 8 && result === null) {
      setResult('Tie');
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={[styles.btn]}>
        <Text style={styles.heading}>
          Player -<Text style={styles.playerName}> {player}</Text>'s turn
        </Text>
      </Pressable>
      <View style={styles.btnContainer}>
        {mark.map(({id, value, isWinMove}, index) => (
          <Button
            key={id}
            value={value}
            player={player}
            index={index}
            togglePlayer={togglePlayer}
            setPlayerMove={setPlayerMove}
            result={result}
            isWinMove={isWinMove}
          />
        ))}
      </View>
      <Pressable style={[styles.btn, styles.purple]} onPress={resetGame}>
        <Text style={styles.heading}>Reload game</Text>
      </Pressable>

      {result && (
        <View style={styles.resultContainer}>
          {result !== 'Tie' ? (
            <Text style={[styles.resultTxt, styles.heading]}>
              Player <Text style={[styles.bold]}>{`'${result}'`}</Text> win the
              match.
            </Text>
          ) : (
            <Text style={[styles.resultTxt, styles.heading]}>
              Match <Text style={[styles.bold]}>{result}</Text> try again.
            </Text>
          )}
          <Text style={[styles.resultTxt, styles.heading]}>
            Game Over!{result}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
    gap: 27,
  },
  btn: {
    backgroundColor: 'purple',
    paddingHorizontal: 9,
    paddingVertical: 15,
    width: '80%',
    borderRadius: 11,
    elevation: 3,
  },
  playerName: {
    fontWeight: 'bold',
  },
  purple: {
    backgroundColor: 'purple',
  },
  heading: {
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
    backgroundColor: 'purple',
    padding: 11,
    marginTop: 20,
    width: '80%',
    borderRadius: 11,
    elevation: 3,
  },
  resultTxt: {
    textTransform: 'capitalize',
    lineHeight: 40,
  },
  bold: {
    fontWeight: 'bold',
  },
});
