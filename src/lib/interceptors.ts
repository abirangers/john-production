import { AxiosResponse } from "axios";

export const successInterceptor = (response: AxiosResponse): AxiosResponse => {
    return response.data;
}