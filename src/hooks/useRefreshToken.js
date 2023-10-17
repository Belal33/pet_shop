import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../clientApis/base";
import { useContext } from "react";
import { UserContext } from "../contexts";

export default function useRefreshToken() {
    const { userData, updateUserData } = useContext(UserContext);
    const navigate = useNavigate();
    const refreshToken = async () => {
        try {
            let res = await axios.post(baseUrl + "/api/v1/auth/token/refresh");
            console.log(res.status);
            console.log(res);
            userData.access = res?.data?.access;
            updateUserData(userData);

            // if (res) {
            //     navigate("/login");
            // }
        } catch (err) {
            console.log("|||||||||| navigte err");

            if (err.response.status === 401) {
                navigate("/login");
            } else {
                return Promise.reject(err);
            }
        }
    };

    return refreshToken;
}
