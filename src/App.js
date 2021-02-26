import React, { Component } from 'react';
import Circle from './components/Circle.component';
import Square from './components/Square.component';


const col1 =  '#FF0000';
const col2 =  '#FF00FF';
class App extends Component {

    state = {
        clicked : false,
    }

    changeColor = () => {
        const { clicked } = this.state;
        this.setState({clicked : !clicked});
    }


    render(){
        const {clicked } = this.state;
        const col = clicked ? col1 : col2;
        return (
            <div onClick={this.changeColor}>
                <Circle top='100px' left='90px' col={col}/>
                <Circle top='100px' left='160px' col={col}/>
                <Square top='135px' left='125px' col={col}/>
            </div>
           
        )
    }

}
export default App