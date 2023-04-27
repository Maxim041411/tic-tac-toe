import React from 'react';
import './Board.css'
import Square from './Square';

const Board = ({squares, click}) => {
    return (
        <div className='board'>
    {squares.map((i, index) => (
        <Square
            value={i}
            onClick={() => click(index)}
        />
         ))}
        </div>
    )
            
}

export default Board;

