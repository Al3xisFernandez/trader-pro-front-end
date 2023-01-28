import React from "react";
import { Switch, Route} from 'react-router-dom';
import Inicio from "./inicio/Inicio";
import LoginComponent from "./login/LoginComponent";
import UserDetails from "./login/UserDetails";
import QuienesSomos from "./QuienesSomos/QuienesSomos";
import SignUp from "./login/SignUp";

const Pages = () => {
    const isLoggedIn = window.localStorage.getItem("loggedIn");

    return (
        <section>
            <Switch>
                <Route path="/"  exact component={Inicio}/>
                <Route path="/" exact component={isLoggedIn=== true ? <UserDetails/> : <LoginComponent/>} />
                <Route path="/SignUp"  exact component={SignUp}/>
                <Route path="/UserDetails"  exact component={UserDetails}/>
                <Route path="/QuienesSomos" exact component={QuienesSomos} />
            </Switch>
        </section>
    )
}
export default Pages;