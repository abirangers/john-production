import axios, {type AxiosInstance, type AxiosRequestConfig} from "axios";
import { successInterceptor } from "./interceptors";

const axiosRequestConfig: AxiosRequestConfig = {
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
    headers: {
        "Content-Type": "application/json",
    },
}

const api: AxiosInstance = axios.create(axiosRequestConfig);

api.interceptors.response.use(successInterceptor);

api.interceptors.request.use((config) => {
    const origin = window.location.origin;
    if (config.headers) {
        config.headers['Access-Control-Allow-Origin'] = origin;
    }
    return config;
});

export { api };