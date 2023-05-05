/* eslint-disable prettier/prettier */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Button from './Button';

const Home = (): JSX.Element => {
  const initialGameState = [
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
  const [player, setPlayer] = useState('O');
  // const [winner, setWinner] = useState(null);
  const [mark, setMark] = useState(initialGameState);
  const count = useRef(0);
  const winner = useRef(null);

  const togglePlayer = value => {
    setPlayer(value);
  };

  const setPlayerMove = (index: number, value: string) => {
    mark[index].value = value;
    count.current += 1;
    empire();
  };

  const resetGame = () => {
    setMark(initialGameState);
    setPlayer('O');
    winner.current = null;
    count.current = 0;
  };

  const empire = () => {
    const arr = mark.map(({value}) => value);

    const checkMoves = (i: number, j: number, k: number) => {
      const s1 = new Set([arr[i], arr[j], arr[k]]);

      // For match winning
      if (new Set(s1).size === 1 && Array.from(s1).join('') !== '-') {
        winner.current = Array.from(s1).join('');
        mark[i].isWinMove = true;
        mark[j].isWinMove = true;
        mark[k].isWinMove = true;
      }

      // For match tie
      else if (count.current === 9 && winner.current === null) {
        winner.current = 'Tie';
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
  };

  return (
    <View style={styles.container}>
      <Pressable style={[styles.btn, player === 'X' ? styles.xbg : styles.obg]}>
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
            result={winner.current}
            isWinMove={isWinMove}
          />
        ))}
      </View>
      <Pressable style={[styles.btn, styles.purple]} onPress={resetGame}>
        <Text style={styles.heading}>
          {winner.current ? 'Start a new game' : 'Reload game'}
        </Text>
      </Pressable>

      {winner.current && (
        <View style={styles.resultContainer}>
          {winner.current !== 'Tie' ? (
            <Text style={[styles.resultTxt, styles.heading]}>
              Player <Text style={[styles.bold]}>{`'${winner.current}'`}</Text>{' '}
              win the match.
            </Text>
          ) : (
            <Text style={[styles.resultTxt, styles.heading]}>
              Match <Text style={[styles.bold]}>{winner.current}</Text> try
              again.
            </Text>
          )}
          <Text style={[styles.resultTxt, styles.heading]}>Game Over!</Text>
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
  xbg: {
    backgroundColor: 'tomato',
  },
  obg: {
    backgroundColor: 'skyblue',
  },
});
