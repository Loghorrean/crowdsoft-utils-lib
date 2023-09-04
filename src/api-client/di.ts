import { HttpHeaders } from "../utils";

export function getBaseHeaders(): HttpHeaders {
    return {
        "Accept-Language": "ru",
    };
}
