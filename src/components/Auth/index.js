import { useContext } from "react";
import { UserContext } from "../../contexts";
import { Navigate } from "react-router-dom";
// import useRefreshToken from "../../hooks/useRefreshToken";

export default function Auth({ children: Children }) {
    let { userData } = useContext(UserContext);
    // let refreshToken = useRefreshToken();
    // refreshToken();

    return userData?.isAuth ? <Children /> : <Navigate to="/login" />;
}
