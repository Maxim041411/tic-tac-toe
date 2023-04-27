import React, { useState} from 'react';
import './Game.css'
import Board from './Board';
import Square from './Square';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill (null))
    const [xIsNext, setXIsNext] =useState(true)
    const winner = calculateWinner(Board)

    const handleClick = (index) => {
        const boardCopy = [...board]
        if (winner || boardCopy [index]) return
        boardCopy[index] = xIsNext ? 'X' : '0'
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }


    return (
        <div className='wrapper'>
           <Board squares={board} click={handleClick} /> 
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  

export default Game;
