import React from 'react';
import { circleStyle } from '../globalStyles';

const Circle = ({top, left, col}) => {
    return (
        <div style={{ ...circleStyle, top: top, left: left, backgroundColor: col}}>

        </div>
    )
}

export default Circle