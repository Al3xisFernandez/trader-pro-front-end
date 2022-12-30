import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Pages from './Componentes/pages';
// import SignIn from './Componentes/signin/SignIn';
import Inicio  from './Componentes/inicio/Inicio';
import Login from './Componentes/login/Login';

function App() {
    return (
        <div className='app'>
           <Router>
            
            <Login />
            <Pages />
            {/* <SignIn /> */}
            <Inicio />
            </Router>
        </div>
    );
  
}

export default App;
