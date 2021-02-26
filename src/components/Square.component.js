import React from 'react';
import { squareStyle } from '../globalStyles';

const Square = ({top, left}) => {
    return (
        <div style={{...squareStyle, top: top, left: left}}>

        </div>
    )
}
export default Square