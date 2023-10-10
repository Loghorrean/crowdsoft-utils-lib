import { RawAxiosResponseHeaders } from "axios";
import { AxiosResponseHeaders } from "axios/index";

export interface ApiClientInterface {
    get<T>(endpoint: string, params?: object): Promise<{ data: T, headers: RawAxiosResponseHeaders | AxiosResponseHeaders }>;
    post<T>(endpoint: string, data?: object): Promise<{ data: T, headers: RawAxiosResponseHeaders | AxiosResponseHeaders }>;
    put(endpoint: string, data?: object): Promise<any>;
    delete(endpoint: string): Promise<any>;
    uploadFile(endpoint: string, formData: FormData): Promise<any>;
}
