import React from "react";
import { Switch, Route } from "react-router-dom";
import Inicio from "./inicio/Inicio";
import LoginComponent from "./login/LoginComponent";
import UserDetails from "./login/UserDetails";
import QuienesSomos from "./QuienesSomos/QuienesSomos";
import SignUp from "./login/SignUp";
import Contactenos from "./Contactenos/Contactenos";

const Pages = () => {
    return (
        <section>
            <Switch>
                <Route path="/"  exact component={Inicio}/>
                <Route path="/SignUp"  exact component={SignUp}/>
                <Route path="/LoginComponent"  exact component={LoginComponent}/>
                <Route path="/"  exact component={UserDetails}/>
                <Route path="/QuienesSomos" exact component={QuienesSomos} />
                <Route path="/Contactenos" exact component={Contactenos} />
            </Switch>
        </section>
    )
}
export default Pages;
