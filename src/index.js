import React from 'react';
import ReactDOM from 'react-dom';

const name = "Ismael Cuevas";
const element = <h1>Hello, My name is {name}</h1>;
//const element = React.createElement('h1',{},`Hola, mi nombre es ${name}`);

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);

/* **** SIN JSX ****
const element = React.createElement(__element__ , __atributos__ , __content__);
const element = React.createElement('h1',{},'Hola, Soy los childen.');
const element = React.createElement('a',{ href:'www.platzi.com' },'Ir a Platzi');
*/