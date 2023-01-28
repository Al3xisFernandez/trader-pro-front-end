import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Pages from './Componentes/pages';
import Navb from './Componentes/navbar/Navb';
import Footer from './Componentes/Footer/Footer';
import LoginComponent  from './Componentes/login/LoginComponent';
import UserDetails from './Componentes/login/UserDetails';
const App = () => {
    return (
        <div className='app'>
           <Router>
            <Navb />
            <LoginComponent />
            <UserDetails />
            <Pages />
            <Footer />
            </Router>
        </div>
    );
  
}

export default App;
