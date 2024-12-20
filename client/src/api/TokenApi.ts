import axios from "axios";
export const Token_URL = 'https://localhost:10000/connect/token'

const $login = axios.create({
    withCredentials: true,//к каждому запросу куки цеплялись автоматически
    baseURL: Token_URL
})

$login.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export default $login;