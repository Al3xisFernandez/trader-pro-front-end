import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Pages from './Componentes/pages';
import Navb from './Componentes/navbar/Navb';
import Footer from './Componentes/Footer/Footer';
import { ApiCall } from './Componentes/servicio/api';
const App = () => {
    return (
        <div className='app'>
           <Router>
            <Navb />
            <Pages />
            <Footer />
            <ApiCall />
            </Router>
        </div>
    );
  
}

export default App;
