// import { User } from "@auth0/auth0-react";
import axios from "axios";
export const ApiCall = async (usuario) => {
    const response =  await axios.post("http://127.0.0.1:8000/usuarios", usuario);
    return response.data;
}
