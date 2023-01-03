import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Pages from './Componentes/pages';
import Inicio  from './Componentes/inicio/Inicio';
import Navb from './Componentes/navbar/Navb';
function App() {
    return (
        <div className='app'>
           <Router>
            <Navb />
            <Pages />
            <Inicio />
            </Router>
        </div>
    );
  
}

export default App;
