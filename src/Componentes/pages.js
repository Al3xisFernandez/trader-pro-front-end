import React from "react";
import { Switch, Route } from "react-router-dom";
import Inicio from "./inicio/Inicio";
import LoginComponent from "./login/LoginComponent";
import UserDetails from "./login/UserDetails";
import QuienesSomos from "./QuienesSomos/QuienesSomos";
import SignUp from "./login/SignUp";
import Contactenos from "./Contactenos/Contactenos";
import Intro from "./cursos/Intro";
import AbrirCuentaEnBroker from "./cursos/AbrirCuentaEnBroker";
import Acciones from "./cursos/Acciones";
import AnalisisTecnico from "./cursos/AnalisisTecnico";
import InstrumentosFinancieros from "./cursos/InstrumentosFinancieros";
import OpcionesFinancieras from "./cursos/OpcionesFinancieras";
import VelasJaponesas from "./cursos/VelasJaponesas";
import Tendencias from "./cursos/Tendencias";
import RegisterModal from "./modal/modal-login";

const Pages = () => {
    return (
        <section>
            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/SignUp" exact component={SignUp} />
                <Route path="/LoginComponent" exact component={LoginComponent} />
                <Route path="/" exact component={UserDetails} />
                <Route path="/QuienesSomos" exact component={QuienesSomos} />
                <Route path="/Contactenos" exact component={Contactenos} />
                <Route path="/Intro" exact component={Intro} />
                <Route path="/AbrirCuentaEnBroker" exact component={AbrirCuentaEnBroker} />
                <Route path="/Acciones" exact component={Acciones} />
                <Route path="/AnalisisTecnico" exact component={AnalisisTecnico} />
                <Route path="/InstrumentosFinancieros" exact component={InstrumentosFinancieros} />
                <Route path="/OpcionesFinancieras" exact component={OpcionesFinancieras} />
                <Route path="/VelasJaponesas" exact component={VelasJaponesas} />
                <Route path="/Tendencias" exact component={Tendencias} />
                <Route path="/RegisterModal" exact component={RegisterModal} />

            </Switch>
        </section>
    )
}
export default Pages;
