import axios from "axios";
export const Api = async (Usuario) => {
    const response =  await axios.post("http://localhost:8000/usuario", Usuario);
    return response.data;
}
