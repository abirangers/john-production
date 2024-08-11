import axios, {type AxiosInstance, type AxiosRequestConfig} from "axios";
import { successInterceptor } from "./interceptors";

const axiosRequestConfig: AxiosRequestConfig = {
    baseURL: "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
    },
}

const api: AxiosInstance = axios.create(axiosRequestConfig);

api.interceptors.response.use(successInterceptor);

export { api };