import { useContext } from "react";
import { clientApi } from "../clientApis/axiosBase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts";

export default function useLoginProcess() {
    const navigate = useNavigate();
    const { updateUserData } = useContext(UserContext);

    async function handleLogin(data, errors, setFormErrors) {
        const { email, username } = errors;
        console.log(data);
        if (!email && !username) {
            try {
                let res = await clientApi.post("auth/login", {
                    email: data.email,
                    password: data.password,
                });
                console.log(res.data);
                let userData = res.data;
                userData.isAuth = true;
                updateUserData(res.data);
                navigate("/");
            } catch (err) {
                if (err?.response?.status === 400) {
                    errors = { ...err.response.data };
                    setFormErrors(errors);

                    console.log(err);
                } else {
                    console.log(err);
                    errors = { non_field_errors: err.message };
                    setFormErrors(errors);
                }
            }
        }
    }

    return handleLogin;
}
