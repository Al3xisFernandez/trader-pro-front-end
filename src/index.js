import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-o75yfwompky0swqg.us.auth0.com"
      clientId="boNRm7MARwsNDhO6y1R28zhIZkZg3612"
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
