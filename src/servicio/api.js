import axios from "axios";

export const Register = async (user) => {
 
  const response = await axios.post("http://localhost:5000/register", user);
  return response.data;
};
