import axios from "axios";

const registerUser=(data)=>{
    return axios.post("http://localhost:5200/api/v1/user/register",data)
}

const loginUser=(data)=>{
    return axios.post("http://localhost:5200/api/v1/user/login",data)
}
const Authservices={
    registerUser,
    loginUser
}
export default Authservices;
