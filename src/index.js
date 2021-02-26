import React from 'react'
import ReactDOM from 'react-dom'


const circleStyle = {
    backgroundColor: '#FF0000',
    width : '100px',
    height : '100px',
    borderRadius : '50px',
    position : 'absolute',
}

const squareStyle = {
    backgroundColor: '#FF0000',
    width : '100px',
    height : '100px',
    position : 'absolute',
    transform: 'rotate(-45deg)',
}

const Circle = ({top, left}) => {
    return (
        <div style={{ ...circleStyle, top: top, left: left}}>

        </div>
    )
}

const Square = ({top, left}) => {
    return (
        <div style={{...squareStyle, top: top, left: left}}>

        </div>
    )
}


const App = () => {
    return (
        <div>
            <Circle top='100px' left='90px'/>
            <Circle top='100px' left='160px'/>
            <Square top='135px' left='125px'/>
        </div>
       
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)