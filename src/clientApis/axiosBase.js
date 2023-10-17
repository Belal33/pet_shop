import axios from "axios";
import { baseUrl } from "./base";

const clientApi = axios.create({
    baseURL: `${baseUrl}/api/v1/`,
    withCredentials: true,
});

export { clientApi };
