import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function CerrarSesion () {
  const { logout } = useAuth0();

  return (
    <button className="cerrarsesion" onClick={() => logout({ returnTo: window.location.origin })}>
      Cerrar sesion
    </button>
  );
};