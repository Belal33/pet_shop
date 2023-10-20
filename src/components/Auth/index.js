import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts";
import { Navigate, useNavigate } from "react-router-dom";

// import useRefreshToken from "../../hooks/useRefreshToken";
import { isUserLogin } from "../../utils/isUserLogin";
export default function Auth({ children: Children }) {
    let navigate = useNavigate();
    let { userData, updateUserData } = useContext(UserContext);
    // let islog = isUserLogin();
    // console.log(islog);
    // if (islog === "nouser") {
    //     navigate("/login");
    // }
    useEffect(() => {
        isUserLogin().then((islog) => {
            if (islog === "nouser") {
                updateUserData({ isAuth: false });
                navigate("/login");
            }
        });
    });
    return userData?.isAuth ? <Children /> : <Navigate to="/login" />;
}
