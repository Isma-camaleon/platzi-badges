import React from 'react';
import ReactDOM from 'react-dom';

// Importando nuestro primer componente
import Badge from './components/Badge'

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge/>, container);

