import React from 'react';
import { squareStyle } from '../globalStyles';

const Square = ({top, left, col}) => {
    return (
        <div style={{...squareStyle, top: top, left: left, backgroundColor: col}}>

        </div>
    )
}
export default Square