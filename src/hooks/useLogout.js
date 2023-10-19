import { useNavigate } from "react-router-dom";
import { clientApi } from "../clientApis/axiosBase";
import { useContext } from "react";
import { UserContext } from "../contexts";

export default function useLogout() {
    const { updateUserData } = useContext(UserContext);
    const navigate = useNavigate();
    const logout = async () => {
        try {
            let res = await clientApi.post("auth/logout");

            console.log(res.data);
            // localStorage.removeItem("user");
            updateUserData({ isAuth: false });
            navigate("/login");
        } catch (err) {
            return Promise.reject(err);
        }
    };

    return logout;
}
