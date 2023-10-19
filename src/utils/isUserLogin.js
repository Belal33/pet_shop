import { baseUrl } from "../clientApis/base";
import axios from "axios";

export async function isUserLogin() {
    try {
        let res = await axios.post(
            baseUrl + "/api/v1/auth/token/refresh",
            {},
            { withCredentials: true }
        );
        console.log(res.status);
        return "user";
    } catch (err) {
        console.log("|||||||||| userNotLogin");
        if (err?.response?.status === 401) {
            localStorage.removeItem("user");
            return "nouser";
        } else {
            console.log("Network Error");
            return false;
        }
    }
}
