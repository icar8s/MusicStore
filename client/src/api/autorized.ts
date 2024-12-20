import axios from "axios";

export const API_URL = 'https://localhost:5000/api'

const $api = axios.create({
    withCredentials: true,//к каждому запросу куки цеплялись автоматически
    baseURL: API_URL
})

$api.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export default $api;