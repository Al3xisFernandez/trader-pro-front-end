import React from "react";
import { Switch, Route } from 'react-router-dom';
import Inicio from "./inicio/Inicio";
import Login from "./login/Login";
import Signin from "./signin/Signin";
// import Register from "./signin/SignIn";
// import Inicio from "./inicio/Inicio";

const Pages = () => {
    return (
        <section>
            <Switch>
                <Route path="/inicio"  exact component={Inicio}/>
                <Route path="/Login" exact component={Login} />
                <Route path="/signin" exact component={Signin}/>
            </Switch>
        </section>
    )
}
export default Pages;