import axios from "axios";

export const Register = async( req) => {
   const model = {fname: req.fname,
      lname: req.lname,
      email: req.email,
      password: req.password,
    };
    console.log(model)
  return await axios.post("http://localhost:5000/register", model );
}



export const loginuser = async (req) => {
 
    const response = await axios.post("http://localhost:5000/loginuser");
    return response.data;
  };

  export const userdata = async (req) => {
 
    const response = await axios.post("http://localhost:5000/userdata");
    return response.data;
  };
    