import React from "react";
import { Switch, Route } from 'react-router-dom';
import Inicio from "./inicio/Inicio";
import QuienesSomos from "./QuienesSomos/QuienesSomos";
const Pages = () => {
    return (
        <section>
            <Switch>
                <Route path="/"  exact component={Inicio}/>
                <Route path="/QuienesSomos" exact component={QuienesSomos} />
            </Switch>
        </section>
    )
}
export default Pages;