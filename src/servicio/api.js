import axios from "axios";
export const Api = async (usuario) => {
    const response =  await axios.post("http://localhost:8000/usuarios", usuario);
    return response.data;
}
