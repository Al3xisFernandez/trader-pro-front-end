import React from "react";
import { Switch, Route } from 'react-router-dom';
import Login from "./login/Login";
// import Register from "./signin/SignIn";
// import Inicio from "./inicio/Inicio";

const Pages = () => {
    return (
        <section>
            <Switch>
                {/* <Route path="/" exact component={Inicio} /> */}
                <Route path="/Login" exact component={Login} />
            </Switch>
        </section>
    )
}
export default Pages;