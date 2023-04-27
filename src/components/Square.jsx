import React from 'react';
import s from './Square.css'

const setActive = ({isActive}) => isActive ? s.active : '';

const Square = (props) => {
    return (
        <div>
        <button className={['square', {setActive}].join(' ')} onClick={props.onClick}>{props.value}</button>
            
        </div>
    );
}

export default Square;


