const root = document.getElementById('root');

const circleStyle = {
    backgroundColor: '#FF0000',
    width : '100px',
    height : '100px',
    borderRadius : '50px',
}

const newDiv = document.createElement('div');
Object.assign(newDiv.style, circleStyle);
root.appendChild(newDiv);