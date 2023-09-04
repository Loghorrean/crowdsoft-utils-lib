import { ApiClient } from "../clients";
import { ApiClientFactoryInterface } from "./ApiClientFactoryInterface";
import { HttpHeaders } from "../../utils";

export class ApiClientFactory implements ApiClientFactoryInterface {
    constructor(private readonly baseUrl: string, private readonly headers: HttpHeaders = {}) {}

    public createClient(): ApiClient {
        return new ApiClient(this.baseUrl, this.headers);
    }

    public createAuthorizedClient(authToken: string): ApiClient {
        return new ApiClient(this.baseUrl, this.headers, authToken);
    }
}
