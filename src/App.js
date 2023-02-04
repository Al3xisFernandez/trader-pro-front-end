// import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Pages from './Componentes/pages';
import Navb from './Componentes/navbar/Navb';
import Footerv2 from './Componentes/Footer/Footerv2';
import ActualFooter from './Componentes/Footer/ActualFooter';
const App = () => {
    return (
        <div className='app'>
           <Router>
            <Navb />
            <Pages />
            <Footerv2 />
            <ActualFooter/>
            </Router>
        </div>
    );
  
}

export default App;
