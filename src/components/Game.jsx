import React, { useState} from 'react';
import './Game.css'
import Board from './Board';

const Game = () => {
    const [bord, setBoard] = useState(Array(9).fill (null))
    const [xIsNext, setXIsNext] =useState(true)
    const winner = calculateWinner(Board)

    const handleClick = (index) => {
        const boardCopy = [...board]
        if (winner || boardCopy [index]) return
        bordCopy[index] = xIsNext ? 'X' : '0'
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }


    return (
        <div className='wrapper'>
           <Board click={handleClick}/> 
        </div>
    );
}

export default Game;
