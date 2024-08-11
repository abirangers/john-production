import axios, {type AxiosInstance, type AxiosRequestConfig} from "axios";
import { successInterceptor } from "./interceptors";

const axiosRequestConfig: AxiosRequestConfig = {
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
}

const api: AxiosInstance = axios.create(axiosRequestConfig);

api.interceptors.response.use(successInterceptor);

export { api };