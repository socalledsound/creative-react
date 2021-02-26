import React from 'react';
import { circleStyle } from '../globalStyles';

const Circle = ({top, left}) => {
    return (
        <div style={{ ...circleStyle, top: top, left: left}}>

        </div>
    )
}

export default Circle