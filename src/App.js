import React from 'react';
import Circle from './components/Circle.component';
import Square from './components/Square.component';


const App = () => {
    return (
        <div>
            <Circle top='100px' left='90px'/>
            <Circle top='100px' left='160px'/>
            <Square top='135px' left='125px'/>
        </div>
       
    )
}
export default App