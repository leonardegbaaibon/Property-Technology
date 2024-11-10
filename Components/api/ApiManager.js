import axios from "axios";


const ApiManager = axios.create({
    baseURL:"http://www.mushaapp.somee.com",
    responseType:"json",
    withCredentials:"true"
})

export default ApiManager