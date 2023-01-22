import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { apiCall } from "../servicio/api";

export default function Login () {
  // const apiCall {apiCall}=
  const { loginWithRedirect } = useAuth0();

  return <button className="login" onClick={() => loginWithRedirect()}>Login</button>;
};