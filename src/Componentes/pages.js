import React from "react";
import { Switch, Route } from 'react-router-dom';
import Inicio from "./inicio/Inicio";
import Login from "./login/Login";
import QuienesSomos from "./QuienesSomos/QuienesSomos";
const Pages = () => {
    return (
        <section>
            <Switch>
                <Route path="/inicio"  exact component={Inicio}/>
                <Route path="/Login" exact component={Login} />
                <Route path="/QuienesSomos" exact component={QuienesSomos} />
            </Switch>
        </section>
    )
}
export default Pages;