import React from "react";
import { Switch, Route } from 'react-router-dom';
import Inicio from "./inicio/Inicio";
import LoginComponent from "./login/LoginComponent";
import UserDetails from "./login/UserDetails";
import QuienesSomos from "./QuienesSomos/QuienesSomos";

const Pages = () => {
    const isLoggedIn = window.localStorage.getItem("loggedIn");

    return (
        <section>
            <Switch>
                <Route exact path="/" element={isLoggedIn==="true" ? <UserDetails/> : <LoginComponent/>} />
                <Route path="/"  exact component={Inicio}/>
                {/* <Route path="sigin"  exact component={Inicio}/> */}
                <Route path="/QuienesSomos" exact component={QuienesSomos} />
            </Switch>
        </section>
    )
}
export default Pages;