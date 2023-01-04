import React from "react";
import { Switch, Route } from 'react-router-dom';
import Inicio from "./inicio/Inicio";
import Login from "./login/Login";
const Pages = () => {
    return (
        <section>
            <Switch>
                <Route path="/inicio"  exact component={Inicio}/>
                <Route path="/Login" exact component={Login} />
            </Switch>
        </section>
    )
}
export default Pages;