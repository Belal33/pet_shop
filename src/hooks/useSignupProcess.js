import { useContext } from "react";
import { clientApi } from "../clientApis/axiosBase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts";

export default function useSignupProcess() {
    const navigate = useNavigate();
    const { updateUserData } = useContext(UserContext);

    async function handleSignup(data, errors, setFormErrors) {
        const { email, username, password, confirmPassword } = errors;
        console.log(data);
        if (!email && !username && !password && !confirmPassword) {
            try {
                let res = await clientApi.post("auth/registration/signup", {
                    email: data.email,
                    username: data.username,
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

    return handleSignup;
}
