import axios from "./axios.customize";

const createUserApi = (email,password,name) => {
    const URL_API = `/register`;
    const data = {
        email,password,name
    }
    console.log(data);
     return axios.post(URL_API, data);

}
const loginApi = (email,password) => {
    const URL_API = `/login`;
    const data = {
        email,password
    }
    console.log(data);
     return axios.post(URL_API, data);

}
const getProructApi = () => {
    const URL_API = `/overview`;
    return axios.get(URL_API);

}
const createCostApi = (eventdate,description,price,category) => {
    const URL_API = `/cost`;
    const data = {
        eventdate,description,price,category
    }
    console.log(data);
     return axios.post(URL_API, data);

}
const getCostApi = () => {
    const URL_API= `/cost`;
    return axios.get(URL_API);
}
export {
    createUserApi,loginApi,getProructApi,createCostApi,getCostApi
}