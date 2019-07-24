import React from 'react';
import ReactDOM from 'react-dom';

const name = "Ismael Cuevas";
const element = (
    <div>
        <h1>Hello, My name is {name}</h1>
        <p>Estoy aprendiendo REACT JS</p>
    </div>
);

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);

/* **** CON React.createElement ****
const element = React.createElement(
    'div',
    {},
    React.createElement('h1',{},`Hello, My name is ${name}`),
    React.createElement('h1',{},`Estoy aprendiendo REACT JS`),
    );

***** CON JSX *****

const element = (
    <div>
        <h1>Hello, My name is {name}</h1>
        <p>Estoy aprendiendo REACT JS</p>
    </div>
);

*/